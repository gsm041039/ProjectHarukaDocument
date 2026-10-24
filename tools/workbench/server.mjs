// Haruka Workbench server: Agent SDK sessions + SSE + project index. Local only.
import { createPlain } from "./plain.mjs";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { query, listSessions, getSessionMessages, renameSession } from "@anthropic-ai/claude-agent-sdk";
import { createDiscussions } from "./discuss.mjs";
import { CodexSessionAdapter } from "./providers/codex-app-server.mjs";
import { DEFAULT_PROVIDER, PROVIDER_CLAUDE, PROVIDER_CODEX, makeProviderSessionRef, normalizeProvider, readProviderSessionRef } from "./providers/provider-contract.mjs";
import { runProviderPrompt } from "./providers/runtime.mjs";

const PORT = Number(process.env.WORKBENCH_PORT || 4317);
process.env.HARUKA_WORKBENCH = "1"; // inherited by every Claude run we start: the author-prompt hook skips them (this server logs typed text itself)
const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, "..", "..");
const PUBLIC = path.join(HERE, "public");
const INDEX_JSON = path.join(REPO, "canon/_working/.tmp/workbench/index.json");
const PROTOCOL_VERSION = 1;
// task id -> provider/session reference, so "繼續" reopens the right backend after a restart.
const LINKS_FILE = path.join(REPO, "canon/_working/.tmp/workbench/task_sessions.json");
const readLinks = () => { try { return JSON.parse(fs.readFileSync(LINKS_FILE, "utf8")); } catch { return {}; } };
// task → latest chat (for 「繼續」), plus _bySession: chat → every piece of work it belongs to (for the chat's progress card)
const saveLink = (task, ref) => {
  const normalized = readProviderSessionRef(ref);
  if (!normalized) return;
  const l = readLinks(); l[task] = normalized;
  const by = (l._bySession ||= {}); by[normalized.sessionId] = [...new Set([...(by[normalized.sessionId] || []), task])].slice(-6);
  fs.mkdirSync(path.dirname(LINKS_FILE), { recursive: true }); fs.writeFileSync(LINKS_FILE, JSON.stringify(l, null, 1));
};
const defaultProvider = () => normalizeProvider(readConfig()?.default_provider, DEFAULT_PROVIDER);

// Commands that always need the author's click, even though everything else runs unattended.
// internal codes the author can't read: QQ-12, CDL-125, E-09, M5, B7, G4, D-17-G4, v4.1, V5, Batch 6, Stage 2a, Phase 3
export const CODE = /(?<![A-Za-z])(?:v\d+(?:\.\d+)*|[A-Z]{1,4}-?[A-Z]?\d+(?:\.\d+)?[a-z]?(?:-[A-Z]?\d+)*|batch\s*\d+|stage\s*\d+[a-z]?|phase\s*\d+)(?![A-Za-z0-9])/i;
const askCodes = (qs) => [...new Set((qs || []).flatMap((q) => [q.header, q.question, ...(q.options || []).flatMap((o) => [o.label, o.description])])
  .flatMap((x) => String(x || "").match(new RegExp(CODE.source, "gi")) || []))];
const DANGER = /\brm\s+-\w*[rf]|\bgit\s+(push|reset\s+--hard|clean|checkout\s+--|branch\s+-D)|Remove-Item|\bdel\s|\brmdir\b|\bformat\b/i;

const sessions = new Map(); // local id -> session
const logSession = (s, action) => console.log(`[Workbench] ${new Date().toLocaleTimeString("en-GB", { hour12: false })} ${action} | backend=${s.provider} | model=${s.model || "default"} | session=${s.id}`);
// first lines of the auto-discussion / discussion-setup prompts (discuss.mjs header, planner below)
const BACKGROUND_PROMPT = /^\s*(你喺一個「AI 編劇室」自動討論|你係 Haruka Workbench 嘅「自動討論設定助手」)/;
// which conversation read / changed which file (survives restarts): { sdkSessionId: { title, t, files: { "canon/x.md": "read"|"edit" } } }
const TOUCHED_FILE = path.join(REPO, "canon/_working/.tmp/workbench/session_files.json");
let touched = {};
try { touched = JSON.parse(fs.readFileSync(TOUCHED_FILE, "utf8")); } catch {}
let touchTimer = null;
function touch(s, name, input) {
  const kind = { Read: "read", Edit: "edit", Write: "edit", NotebookEdit: "edit" }[name];
  const fp = input?.file_path || input?.notebook_path;
  if (!kind || !fp) return;
  const rel = path.relative(REPO, path.resolve(REPO, fp)).split(path.sep).join("/");
  if (rel.startsWith("..")) return;
  const key = s.sdkSessionId || s.id;
  const rec = (touched[key] ||= { title: s.title, files: {} });
  rec.title = s.title; rec.t = Date.now();
  if (rec.files[rel] !== "edit") rec.files[rel] = kind;
  touchTimer ||= setTimeout(() => { touchTimer = null; fs.writeFileSync(TOUCHED_FILE, JSON.stringify(touched)); }, 1000);
  if (kind === "edit") logActivity({ kind: "edit", sid: key, title: s.title, file: rel, reason: s.lastDoing || "" });
}

// 📜 工作紀錄: one line per file change (which chat, which file, why) and per tray item the author sent.
// Written by the server itself, so it never depends on the AI remembering to log. Local to this computer.
const ACTIVITY_FILE = path.join(REPO, "canon/_working/.tmp/workbench/activity.jsonl");
const lastAct = new Map(); // "sid|file" -> time: several edits to one file in one go count as one line
function logActivity(ev) {
  const k = `${ev.sid}|${ev.file || ev.note}`;
  if (ev.kind === "edit" && Date.now() - (lastAct.get(k) || 0) < 120000) return;
  lastAct.set(k, Date.now());
  try { fs.appendFileSync(ACTIVITY_FILE, JSON.stringify({ t: Date.now(), ...ev }) + "\n"); } catch {}
}
function readActivity() {
  let rows = [];
  try { rows = fs.readFileSync(ACTIVITY_FILE, "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l)); } catch {}
  if (!rows.length) // first run: rebuild what we can from the conversation ↔ file records (time = the chat's last activity)
    rows = Object.entries(touched).flatMap(([sid, r]) => Object.entries(r.files || {}).filter(([, k]) => k === "edit")
      .map(([file]) => ({ t: r.t || 0, kind: "edit", sid, title: r.title || "", file, reason: "", backfill: true })));
  return rows.slice(-4000);
}
const plain = createPlain(path.join(REPO, "canon/_working/.tmp/workbench/plain.json"), runProviderPrompt);
const discussions = createDiscussions({ REPO, DIR: path.join(REPO, "canon/_working/.tmp/workbench/discussions"), runPrompt: runProviderPrompt,
  onRead: (d, files) => { for (const f of files) touch({ id: "DISC:" + d.id, title: "🤖 " + d.topic.slice(0, 40) }, "Read", { file_path: path.join(REPO, f) }); } });

function inbox() {
  const buf = [];
  let wake = null;
  return {
    push(m) { buf.push(m); wake?.(); wake = null; },
    async *[Symbol.asyncIterator]() {
      for (;;) {
        while (buf.length) yield buf.shift();
        await new Promise((r) => (wake = r));
      }
    },
  };
}

function emit(s, ev) {
  ev.t = Date.now();
  s.events.push(ev);
  for (const res of s.clients) res.write(`data: ${JSON.stringify(ev)}\n\n`);
  if (ev.kind === "model") logSession(s, `model changed to ${ev.model || "default"}`);
  else if (ev.kind === "result") logSession(s, `turn ${ev.ok === false ? "failed" : "finished"}`);
  else if (ev.kind === "error") console.error(`[Workbench] session=${s.id} backend=${s.provider} error: ${String(ev.message || "unknown").slice(0, 300)}`);
  else if (ev.kind === "ask" || ev.kind === "approve") logSession(s, "waiting for author");
  else if (ev.kind === "tool") logSession(s, `tool ${String(ev.name || "unknown").replace(/[^\w.-]/g, "").slice(0, 40)}`);
}

function setStatus(s, status) {
  s.status = status;
  emit(s, { kind: "status", status });
}

// Park a request until the browser answers it via /answer.
function ask(s, kind, payload, signal) {
  const requestId = `${kind}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  setStatus(s, "waiting");
  emit(s, { kind, requestId, provider: s.provider || PROVIDER_CLAUDE, ...payload });
  return new Promise((resolve) => {
    s.pending.set(requestId, resolve);
    signal?.addEventListener("abort", () => {
      s.pending.delete(requestId);
      resolve({ behavior: "deny", message: "Interrupted" });
    });
  });
}

// A saved transcript → the same events a live chat streams, so old conversations (and resumed ones) show
// everything: text, option cards with the author's answers, and the tool steps (collapsed).
function historyEvents(msgs) {
  const ev = [], asks = new Map();
  const keep = (i = {}) => Object.fromEntries(["file_path", "command", "pattern", "description", "skill", "todos", "subject", "taskId", "status", "activeForm"]
    .filter((k) => i[k] != null).map((k) => [k, typeof i[k] === "string" ? i[k].slice(0, 300) : i[k]]));
  const plainText = (c) => (typeof c === "string" ? c : (c || []).map((x) => x.text || "").join(""));
  for (const m of msgs) {
    const c = m.message?.content;
    if (m.type === "user") {
      for (const b of typeof c === "string" ? [{ type: "text", text: c }] : c || []) {
        if (b.type === "text" && b.text.trim() && !b.text.startsWith("<")) ev.push({ kind: "user", text: b.text });
        else if (b.type === "tool_result" && asks.has(b.tool_use_id)) {
          const requestId = asks.get(b.tool_use_id);
          ev.push({ kind: "answered", requestId });
          if (!b.is_error) ev.push({ kind: "user", text: "✔ " + plainText(b.content)
            .replace(/^(User has answered your questions?|Your questions have been answered)\s*[:：]?\s*/i, "")
            .replace(/\.?\s*(You can now continue|Read the answers carefully)[\s\S]*$/i, "")
            .replace(/"([^"]*)"="([^"]*)"/g, "$1 → $2").trim() });
        }
      }
    } else if (m.type === "assistant") {
      for (const b of c || []) {
        if (b.type === "text" && b.text.trim()) ev.push({ kind: "text", text: b.text });
        else if (b.type === "tool_use" && b.name === "AskUserQuestion") { const requestId = "h" + asks.size; asks.set(b.id, requestId); ev.push({ kind: "ask", requestId, questions: b.input?.questions || [] }); }
        else if (b.type === "tool_use") ev.push({ kind: "tool", id: b.id, name: b.name, input: keep(b.input) });
      }
    }
  }
  return ev;
}

const readConfig = () => { try { return JSON.parse(fs.readFileSync(path.join(HERE, "ui_config.json"), "utf8")); } catch { return {}; } };
let codexThreadCache = { t: 0, data: [] };
async function listCodexThreads(force = false) {
  if (!force && Date.now() - codexThreadCache.t < 30000) return codexThreadCache.data;
  const adapter = new CodexSessionAdapter({ cwd: REPO });
  try {
    const data = await adapter.listThreads({ limit: 100 });
    codexThreadCache = { t: Date.now(), data };
    return data;
  } finally { await adapter.close(); }
}

// Names canon itself says are superseded ("取代舊稿「X」" / "取代…「X」"): the planner must not treat them as current.
function supersededNames() {
  const out = new Set();
  const scan = (f) => { try { for (const m of fs.readFileSync(f, "utf8").matchAll(/取代[^「『\n]{0,12}[「『]([^」』\n]{2,24})[」』]/g)) out.add(m[1]); } catch {} };
  const canon = path.join(REPO, "canon");
  for (const f of fs.readdirSync(canon)) if (f.endsWith(".md")) scan(path.join(canon, f));
  for (const f of fs.readdirSync(path.join(canon, "03_characters"))) if (f.endsWith(".md")) scan(path.join(canon, "03_characters", f));
  return [...out].slice(0, 40);
}

// 🧭 auto-discussion planner: reads the skill + linked files, says what it understood, proposes 2–4 ready-made set-ups
async function planDiscussion(seed) {
  const cfg = readConfig();
  const provider = normalizeProvider(seed.provider, defaultProvider());
  let roles = [];
  try { roles = JSON.parse(fs.readFileSync(path.join(HERE, "discuss_roles.json"), "utf8")).map((r) => r.name); } catch {}
  const links = (Array.isArray(seed.links) ? seed.links : []).slice(0, 12).map((l) => `- ${l.id}｜${l.title || ""}${l.file ? "（" + l.file + "）" : ""}`).join("\n");
  const superseded = supersededNames();
  const answers = Object.entries(seed.answers || {}).filter(([, a]) => a).map(([q, a]) => `- ${q} → ${a}`).join("\n");
  const prompt = `你係 Haruka Workbench 嘅「自動討論設定助手」。先 Read .claude/skills/story-auto-discussion/SKILL.md，再按需要讀下面連住嘅文件（只讀，唔改任何嘢，最多讀 8 個檔）。
作者想開一場自動討論。種子：
【題目／作者講嘅】${String(seed.topic || "").slice(0, 1500) || "（未講，靠連住嘅嘢同背景推斷）"}
【背景】${String(seed.context || "").slice(0, 800) || "（冇）"}
【連住嘅嘢】
${links || "（冇）"}
【作者已經答咗嘅引導問題】
${answers || "（未答）"}
可用角色（roles 只可以由呢度揀）：${roles.join("、")}

先做 source check（必做）：用 Grep 喺 00_Story_Brief.html（最準）同 canon/ 嘅正式文件（唔計 canon/_working）搵呢個題目而家嘅設定。
**小心舊稿**：見到「取代舊稿 X」「舊稿」「已作廢」「superseded」，X 就唔係現行，唔可以當而家嘅設定。
canon 自己寫明已被取代嘅舊稱（用咗呢啲字都唔可以當現行）：${superseded.join("、") || "（暫時冇）"}。有啲 canon 文件仲未改走舊稱，所以以角色檔、Brief 同決定紀錄寫嘅最新叫法為準；每次出答案都要照呢個規矩，唔論作者有冇答引導問題。

然後：
1. understanding：一兩句白話講你理解作者想傾咩、而家卡喺邊。
2. current：一兩句白話講「而家嘅設定係乜」，sources 列你根據嘅檔（2–4 個，附一句佢講咩）。
3. big：呢個題目會唔會改已經確認咗嘅設定（true／false）。
4. 如果題目含糊，或者 big 係 true，**而且作者未答引導問題**：出 questions 2–3 條引導問題，幫作者搵出真正目的（例如點解想改、想要邊種結果、有咩一定要留），每條 2–4 個白話選項；呢個情況 proposals 留空 []。
   否則（作者已經答咗，或者題目清楚又唔改已確認嘅嘢）：questions 留空，按作者嘅答案出 2–4 個真係唔同嘅討論方向，同 2–4 句「範圍」、2–4 句「停止點」。
所有字作者都睇到：唔准有內部編號（QQ-/CDL-/E-xx/M5/v4.1/Batch/Stage 等），講返件事本身。唔好寫錢或者 US$。
只輸出一個 JSON（放喺 \`\`\`json 入面）：
{"understanding":"…","current":"…","sources":[{"file":"repo 相對路徑","note":"一句"}],"big":true,"questions":[{"q":"問題","options":["選項"]}],"proposals":[{"label":"≤12字方向名","why":"一句：點解咁傾＋代價（幾多輪、要讀幾多嘢）","topic":"討論題目（白話）","range":"範圍","stop":"停止點","roles":["角色名"],"rounds":3,"links":[{"id":"實體 id","title":"白話名","file":"repo 相對路徑"}]}],"ranges":["…"],"stops":["…"]}
links 只放你確認存在、真係相關嘅（可以沿用種子嘅）；proposals 嘅 range 要寫明以 current 講嘅現行設定為準。`;
  const result = await runProviderPrompt({ provider, prompt, cwd: REPO,
    model: seed.model || (provider === PROVIDER_CLAUDE ? cfg.planner_model : ""), effort: seed.effort || "",
    claudeOptions: { settingSources: ["project"], systemPrompt: { type: "preset", preset: "claude_code" },
      allowedTools: ["Read", "Grep", "Glob"], disallowedTools: ["Edit", "Write", "Bash", "NotebookEdit", "Agent", "PowerShell"], permissionMode: "dontAsk", maxTurns: 12, persistSession: false },
  });
  const text = result.text || "";
  const raw = (text.match(/```json\s*([\s\S]*?)```/) || text.match(/(\{[\s\S]*\})/) || [])[1];
  const plan = JSON.parse(raw);
  for (const pr of plan.proposals || []) pr.roles = (pr.roles || []).filter((r) => roles.includes(r));
  return plan;
}

async function createSession({ title, resume, provider, task, model, effort, agentCap }) {
  const resumeRef = readProviderSessionRef(resume);
  provider = resumeRef?.provider || normalizeProvider(provider, defaultProvider());
  const resumeId = resumeRef?.sessionId || (typeof resume === "string" ? resume : null);
  const id = Math.random().toString(36).slice(2, 10);
  const s = {
    id, title: title || "新 task", provider, status: "idle", sdkSessionId: resumeId, taskId: task || null, model: model || "", effort: effort || "",
    events: [], clients: new Set(), pending: new Map(), toolNames: new Map(), inbox: inbox(), q: null,
    agentCap: Number.isFinite(+agentCap) && agentCap !== "" && agentCap != null ? +agentCap : (readConfig().agent_cap_default ?? 2), agentsUsed: 0,
  };
  sessions.set(id, s);

  if (provider === PROVIDER_CODEX) {
    s.adapter = new CodexSessionAdapter({
      cwd: REPO, model: s.model, effort: s.effort,
      developerInstructions: `You are running inside Haruka Workbench's web UI. Follow .claude/story_system/web-ui-protocol.md for author questions and ui: cards, but never edit .claude/ workflow files. Follow AGENTS.md for Codex skill routing and prefer the matching .agents/skills/ skill. Keep author-facing text in Cantonese and plain language. The author set a soft sub-agent limit of ${s.agentCap}; respect it and use an author question card before exceeding it.`,
      askAuthor: (kind, payload, signal) => ask(s, kind, payload, signal),
      onThread: (threadId, metadata) => {
        s.sdkSessionId = threadId;
        s.defaultModel = s.model || metadata?.model || "";
        if (s.taskId) saveLink(s.taskId, makeProviderSessionRef(provider, threadId));
      },
      onEvent: (event) => {
        if (event.kind === "provider" && event.sessionId) {
          s.sdkSessionId = event.sessionId;
          emit(s, { kind: "provider", provider, model: event.model || s.model });
          return;
        }
        if (event.kind === "status") s.status = event.status;
        if (event.kind === "tool") {
          s.toolNames.set(event.id, event.name);
          const input = event.input || {};
          if (event.name === "Agent") { s.agentsUsed++; emit(s, { kind: "agents", cap: s.agentCap, used: s.agentsUsed, soft: true }); }
          s.activity = event.name === "Bash" ? `執行緊 ${String(input.command || "").slice(0, 160)}`
            : `${event.name} ${String(input.description || input.file_path || "").split(/[\\/]/).pop()}`.trim();
          touch(s, event.name, input);
        }
        if (event.kind === "text") {
          for (const match of event.text.matchAll(/```ui:step\s*([\s\S]*?)```/g)) { try { stepModel(s, JSON.parse(match[1])); } catch {} }
          for (const match of event.text.matchAll(/```ui:status\s*([\s\S]*?)```/g)) {
            try { s.lastDoing = String(JSON.parse(match[1]).doing || s.lastDoing || "").slice(0, 200); } catch {}
            try { const work = JSON.parse(match[1]).work; if (work && s.sdkSessionId) { saveLink(String(work).slice(0, 300), makeProviderSessionRef(provider, s.sdkSessionId)); emit(s, { kind: "work", work: String(work) }); } } catch {}
          }
        }
        emit(s, event);
      },
    });
    try { await s.adapter.start({ resumeThreadId: resumeId, title: s.title }); }
    catch (error) { sessions.delete(id); await s.adapter.close().catch(() => {}); throw error; }
    if (task && s.sdkSessionId) saveLink(task, makeProviderSessionRef(provider, s.sdkSessionId));
    logSession(s, resumeId ? "session resumed" : "session created");
    return s;
  }

  s.q = query({
    prompt: s.inbox,
    options: {
      cwd: REPO,
      settingSources: ["user", "project", "local"],
      systemPrompt: {
        type: "preset",
        preset: "claude_code",
        append: "You are running inside Haruka Workbench (web UI). Follow .claude/story_system/web-ui-protocol.md.",
      },
      permissionMode: "default",
      includePartialMessages: true,
      hooks: { PreToolUse: [{ matcher: "Agent|Task", hooks: [async (input, _id, { signal }) => {
        const out = (decision, reason) => ({ hookSpecificOutput: { hookEventName: "PreToolUse", permissionDecision: decision, permissionDecisionReason: reason } });
        if (s.agentsUsed < s.agentCap) { s.agentsUsed++; emit(s, { kind: "agents", cap: s.agentCap, used: s.agentsUsed }); return out("allow", "within author's sub-agent cap"); }
        const ti = input.tool_input || {};
        const r = await ask(s, "approve", { tool: "Agent", input: { command: `已經派咗 ${s.agentsUsed} 個助手（你定嘅上限：${s.agentCap}）。想再派：${ti.description || ""}\n\n${String(ti.prompt || "").slice(0, 600)}` } }, signal);
        if (r.behavior !== "allow") return out("deny", `作者唔批多派助手（上限 ${s.agentCap}）。自己做，或者講清點解一定要派。${r.message ? "作者講：" + r.message : ""}`);
        s.agentsUsed++; emit(s, { kind: "agents", cap: s.agentCap, used: s.agentsUsed });
        return out("allow", "author approved an extra sub-agent");
      }] }] },
      ...(resumeId ? { resume: resumeId } : {}),
      ...(model ? { model } : {}),
      ...(effort ? { effort } : {}),
      canUseTool: async (toolName, input, { signal }) => {
        if (toolName === "AskUserQuestion") {
          const codes = askCodes(input.questions);
          if (codes.length) return { behavior: "deny", message: `選項卡有內部編號／版本名：${codes.join("、")}。作者睇唔明。用白話講返佢係咩（例：「M5」→「demo 最尾大家喺基地嗰場」、「v4.1 vs Batch 6」→「之前修正過嘅版本 vs 後來寫嘅逐場詳細版」），header／question／label／description 全部重寫再問。見 web-ui-protocol §1。` };
          const r = await ask(s, "ask", { questions: input.questions }, signal);
          return r.behavior ? r : { behavior: "allow", updatedInput: { questions: input.questions, ...r } };
        }
        if (toolName === "ExitPlanMode" || (toolName === "Bash" && DANGER.test(String(input.command)))) {
          return ask(s, "approve", { tool: toolName, input }, signal).then((r) =>
            r.behavior === "allow" ? { behavior: "allow", updatedInput: input } : r);
        }
        // ponytail: everything else auto-allowed (same trust as the author's auto mode); add rules here if needed.
        return { behavior: "allow", updatedInput: input };
      },
    },
  });

  (async () => {
    try {
      for await (const m of s.q) {
        if (m.type === "system" && m.session_id && s.sdkSessionId !== m.session_id) {
          s.sdkSessionId = m.session_id;
          if (s.taskId) saveLink(s.taskId, makeProviderSessionRef(provider, m.session_id));
        }
        if (m.type === "stream_event") {
          const e = m.event;
          if (!m.parent_tool_use_id && e.type === "content_block_delta" && e.delta?.type === "text_delta")
            emit(s, { kind: "delta", text: e.delta.text });
        } else if (m.type === "assistant" && !m.parent_tool_use_id) {
          for (const b of m.message.content) {
            if (b.type === "text") {
              emit(s, { kind: "text", text: b.text });
              // a ui:status that names the work (TASK_BOARD id, or "<tracker file>#Stage N") links this chat to it for good
              for (const m of b.text.matchAll(/```ui:step\s*([\s\S]*?)```/g)) { try { stepModel(s, JSON.parse(m[1])); } catch {} }
              for (const m of b.text.matchAll(/```ui:status\s*([\s\S]*?)```/g)) {
                try { s.lastDoing = String(JSON.parse(m[1]).doing || s.lastDoing || "").slice(0, 200); } catch {}
                try { const w = JSON.parse(m[1]).work; if (w && s.sdkSessionId) { saveLink(String(w).slice(0, 300), makeProviderSessionRef(provider, s.sdkSessionId)); emit(s, { kind: "work", work: String(w) }); } } catch {}
              }
            }
            else if (b.type === "tool_use") {
              s.toolNames.set(b.id, b.name);
              // One plain line for the overview: current step if Claude keeps a todo list, else the tool it is using.
              const i = b.input || {};
              const step = b.name === "TodoWrite" ? (i.todos || []).find((x) => x.status === "in_progress") : null;
              s.activity = step ? step.activeForm || step.content
                : b.name === "Skill" ? `用緊 skill：${i.skill}` : `${b.name} ${String(i.description || i.file_path || i.pattern || "").split(/[\\/]/).pop()}`.trim();
              touch(s, b.name, b.input);
              emit(s, { kind: "tool", id: b.id, name: b.name, input: b.input });
            }
          }
        } else if (m.type === "user" && !m.parent_tool_use_id && Array.isArray(m.message?.content)) {
          // Only TaskCreate results matter to the UI (they carry the step id later TaskUpdate calls refer to).
          for (const b of m.message.content) {
            if (b.type === "tool_result" && s.toolNames.get(b.tool_use_id) === "TaskCreate")
              emit(s, { kind: "tool_result", id: b.tool_use_id, name: "TaskCreate", result: m.tool_use_result ?? null });
          }
        } else if (m.type === "result") {
          emit(s, { kind: "result", ok: m.subtype === "success", cost: m.total_cost_usd, ms: m.duration_ms });
          setStatus(s, "idle");
        }
      }
    } catch (err) {
      emit(s, { kind: "error", message: String(err?.message || err) });
    }
    setStatus(s, "closed");
  })();
  logSession(s, resumeId ? "session resumed" : "session created");
  return s;
}

// What the author typed in the web (not button prompts) → the same repo log the VSCode hook writes
// (.claude/hooks/log_author_prompt.py), read by the author-lens skill. In the repo so it follows the author between computers.
const AUTHOR_LOG = path.join(REPO, "canon/_working/author_voice/AUTHOR_UTTERANCES.jsonl");
function logAuthor(text, session, where) {
  text = String(text || "").trim();
  if (!text) return;
  try {
    fs.mkdirSync(path.dirname(AUTHOR_LOG), { recursive: true });
    fs.appendFileSync(AUTHOR_LOG, JSON.stringify({ t: new Date().toISOString(), src: "workbench" + (where ? ":" + where : ""), session: session || "", text }) + "\n");
  } catch {}
}

// 🪞 Author lens: the author presses one button → the model of how they question ideas (AUTHOR_LENS.md) is
// updated from the lines recorded since the last update. One-shot agent that may only write that one file.
const LENS_FILE = path.join(REPO, "canon/_working/author_voice/AUTHOR_LENS.md");
const LENS_STATE = path.join(REPO, "canon/_working/author_voice/lens_state.json");
const lens = { running: false, error: "", startedAt: 0 };
const readLines = () => { try { return fs.readFileSync(AUTHOR_LOG, "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l)); } catch { return []; } };
const lensState = () => { try { return JSON.parse(fs.readFileSync(LENS_STATE, "utf8")); } catch { return { processed: 0, updated: null }; } };
function lensStatus() {
  const total = readLines().length, st = lensState();
  return { total, processed: Math.min(st.processed || 0, total), fresh: Math.max(0, total - (st.processed || 0)), updated: st.updated, running: lens.running, error: lens.error, exists: fs.existsSync(LENS_FILE) };
}
async function updateLens({ provider = defaultProvider(), model = "", effort = "" } = {}) {
  if (lens.running) return;
  provider = normalizeProvider(provider, defaultProvider());
  const rows = readLines(), st = lensState(), fresh = rows.slice(st.processed || 0);
  if (!fresh.length) return;
  Object.assign(lens, { running: true, error: "", startedAt: Date.now() });
  const lines = fresh.map((r, i) => `[${(st.processed || 0) + i + 1}] ${String(r.t).slice(0, 10)} ${r.src}: ${String(r.text).replace(/\s+/g, " ").slice(0, 600)}`).join("\n");
  const previous = fs.existsSync(LENS_FILE) ? fs.readFileSync(LENS_FILE, "utf8") : "";
  const prompt = `你係 author-lens skill。先 Read .claude/skills/author-lens/SKILL.md 照佢嘅方法同界線做。
${previous ? `現有模型內容如下，請喺上面增量更新（保留仍成立嘅 pattern，加新證據，新 pattern 另開，同舊嘢矛盾就標出嚟）：\n\n<existing-author-lens>\n${previous}\n</existing-author-lens>` : "未有模型，請建立第一版。"}
下面係上次更新之後新記錄、作者親手打嘅 ${fresh.length} 句（方括號係行號，可以用嚟做證據引用）：
${lines}

要求：只取創作／設計上嘅問法、關注角度、否決訊號、深度控制；題外話（整網頁、工具、私事）唔入模型；唔抄措辭同粗口；每個 pattern 寫「證據（行號＋日期）」同「下次點用呢個角度挑戰方案」。檔頂寫一句最後更新日期同累計句數 ${rows.length}。
只輸出更新後完整檔案，放喺 \`\`\`markdown code fence 入面；fence 外用一兩句白話講改咗咩。唔好自行寫入任何檔案。`;
  try {
    const result = await runProviderPrompt({ provider, prompt, cwd: REPO,
      model: model || (provider === PROVIDER_CLAUDE ? readConfig().lens_model : ""), effort,
      claudeOptions: { settingSources: ["project"], systemPrompt: { type: "preset", preset: "claude_code" }, persistSession: false, maxTurns: 20,
        allowedTools: ["Read", "Grep", "Glob"], disallowedTools: ["Edit", "Write", "Bash", "PowerShell", "Agent", "Task", "NotebookEdit", "WebFetch", "WebSearch"] },
    });
    const summary = result.text || "";
    const match = summary.match(/```(?:markdown|md)?\s*\n([\s\S]*?)```/i);
    if (!match?.[1]?.trim()) throw new Error("AI 冇回傳完整問法模型檔案");
    fs.mkdirSync(path.dirname(LENS_FILE), { recursive: true });
    fs.writeFileSync(LENS_FILE, match[1].trim() + "\n", "utf8");
    const report = summary.slice(summary.lastIndexOf("```") + 3).trim();
    fs.writeFileSync(LENS_STATE, JSON.stringify({ processed: rows.length, updated: new Date().toISOString(), summary: report.slice(0, 500), provider }, null, 1));
  } catch (err) { lens.error = String(err?.message || err).slice(0, 300); }
  lens.running = false;
}

// Plan usage (5-hour / weekly windows), same data as /usage. Experimental SDK call: asks an open conversation,
// else a throwaway one that never sends a message (costs nothing). Cached a minute; errors just hide the meter.
const usageCache = new Map(), usageBusy = new Map();
async function getUsage(provider = defaultProvider(), force = false) {
  provider = normalizeProvider(provider, defaultProvider());
  const cached = usageCache.get(provider) || { t: 0, data: null };
  if (!force && Date.now() - cached.t < 60000) return cached.data;
  if (usageBusy.has(provider)) return usageBusy.get(provider);
  const pending = (async () => {
    try {
      let data;
      if (provider === PROVIDER_CODEX) {
        const adapter = new CodexSessionAdapter({ cwd: REPO });
        try { data = await adapter.usage(); } finally { await adapter.close(); }
      } else {
        const live = [...sessions.values()].find((s) => s.provider === PROVIDER_CLAUDE && s.status !== "closed");
        let q = live?.q, temp = null;
        if (!q) temp = q = query({ prompt: (async function* () { await new Promise(() => {}); })(), options: { cwd: REPO, settingSources: [], persistSession: false } });
        try {
          const u = await q.usage_EXPERIMENTAL_MAY_CHANGE_DO_NOT_RELY_ON_THIS_API_YET({ skipBehaviors: true });
          const win = (w) => (w && w.utilization != null ? { pct: w.utilization, resets: w.resets_at } : null);
          data = u.rate_limits_available ? { plan: u.subscription_type, five_hour: win(u.rate_limits?.five_hour), week: win(u.rate_limits?.seven_day) } : { unavailable: true };
        } finally { temp?.close(); }
      }
      usageCache.set(provider, { t: Date.now(), data: data || { unavailable: true } });
    } catch (err) {
      usageCache.set(provider, { t: Date.now(), data: { error: String(err?.message || err).slice(0, 200) } });
    } finally { usageBusy.delete(provider); }
    return usageCache.get(provider).data;
  })();
  usageBusy.set(provider, pending);
  return pending;
}

// 〔輕／中／重〕 step weight -> model (ui_config.json step_models). Heavy steps and steps the author must approve never
// go below the floor model. A model the author picked by hand in this chat always wins.
const RANK = { haiku: 0, sonnet: 1, opus: 2 };
function stepInfo(work, code) {
  try { const idx = JSON.parse(fs.readFileSync(INDEX_JSON, "utf8")); const [file] = String(work || "").split("#");
    return idx.pipelines?.rows?.find((p) => p.file === file)?.stages?.find((x) => x.code === code) || null; } catch { return null; }
}
async function stepModel(s, st) {
  if (!st || !["in_progress", "start", "doing"].includes(String(st.status || "")) || s.modelPinned) return;
  const config = readConfig();
  const cfg = s.provider === PROVIDER_CODEX ? (config.codex_step_models || {}) : (config.step_models || {});
  const info = stepInfo(st.work, st.step);
  const weight = st.weight || info?.weight || "";
  let model = cfg[weight];
  const floor = cfg._floor_for_heavy_or_gate || "sonnet";
  if (s.provider === PROVIDER_CODEX) {
    let catalog = s.codexModels;
    if (!catalog) { try { catalog = s.codexModels = await s.adapter.listModels(); } catch { return; } }
    const baseline = s.defaultModel || catalog.find((entry) => entry.isDefault)?.value || s.model || catalog[0]?.value || "";
    if (!model) model = weight === "輕" ? catalog.find((entry) => /mini|nano/i.test(entry.value + " " + entry.label))?.value || baseline : baseline;
    if ((weight === "重" || st.gate || info?.author_gate) && cfg._floor_for_heavy_or_gate) model = floor;
  } else {
    if (!model) return;
    if ((weight === "重" || st.gate || info?.author_gate) && (RANK[model] ?? 9) < (RANK[floor] ?? 0)) model = floor;
  }
  if (model === s.model) return;
  s.model = model;
  if (s.adapter) await s.adapter.setModel(model).catch(() => {});
  else { await s.q?.setModel(model).catch(() => {}); emit(s, { kind: "model", model, note: `呢步用 ${model}（${weight}）` }); }
}

function sendMessage(s, text) {
  // the tray (待送出) arrives as a ui:intent block: every item the author approved goes into 工作紀錄
  for (const m of String(text).matchAll(/```ui:intent\s*([\s\S]*?)```/g)) {
    try { for (const it of JSON.parse(m[1]).intents || [])
      logActivity({ kind: "intent", sid: s.sdkSessionId || s.id, title: s.title, file: it.payload?.file || "", note: String(it.note || it.type).slice(0, 300), type: it.type, target: String(it.target || "").slice(0, 120) }); } catch {}
  }
  logSession(s, "turn started");
  if (s.adapter) return s.adapter.send(text);
  emit(s, { kind: "user", text });
  setStatus(s, "running");
  s.inbox.push({ type: "user", message: { role: "user", content: text }, parent_tool_use_id: null });
}

// ---- project index (rebuilt by the Python parser; deduped while running) ----
// Stale-while-revalidate: pages get the last index instantly; a rebuild runs in the background when it is
// older than 20s. Only ?fresh=1 (after Claude finished a turn) waits for the rebuild.
let building = null;
function buildIndex(fresh) {
  let age = Infinity;
  try { age = Date.now() - fs.statSync(INDEX_JSON).mtimeMs; } catch {}
  if (!fresh && age < Infinity) {
    if (age > 20000) startBuild();
    return Promise.resolve(null);
  }
  return startBuild();
}
function startBuild() {
  building ??= new Promise((resolve) => {
    const p = spawn("python", [path.join(HERE, "build_index.py")], { cwd: REPO });
    let err = "";
    p.stderr.on("data", (d) => (err += d));
    p.on("close", (code) => { building = null; resolve(code === 0 ? null : err || `exit ${code}`); });
  });
  return building;
}

// ---- thumbnails (Pillow via thumb.py, cached by path+mtime; at most 2 at once) ----
const THUMBS = path.join(REPO, "canon/_working/.tmp/workbench/thumbs");
let thumbJobs = 0;
const thumbWait = [];
async function makeThumb(src, out) {
  if (building) await building;
  if (thumbJobs >= 2) await new Promise((r) => thumbWait.push(r));
  thumbJobs++;
  fs.mkdirSync(THUMBS, { recursive: true });
  await new Promise((r) => spawn("python", [path.join(HERE, "thumb.py"), src, out]).on("close", r));
  thumbJobs--;
  thumbWait.shift()?.();
}

// Run a local tool with an argument list (no shell) and collect stdout+stderr.
function run(cmd, args) {
  return new Promise((resolve) => {
    let out = "";
    const p = spawn(cmd, args, { cwd: REPO, env: { ...process.env, PYTHONIOENCODING: "utf-8" } });
    p.stdout.on("data", (d) => (out += d));
    p.stderr.on("data", (d) => (out += d));
    p.on("close", () => resolve(out));
    p.on("error", (e) => resolve(String(e)));
  });
}

// ---- http ----
const json = (res, code, body) => { res.writeHead(code, { "content-type": "application/json; charset=utf-8" }); res.end(JSON.stringify(body)); };
const readBody = (req) => new Promise((r) => { let d = ""; req.on("data", (c) => (d += c)); req.on("end", () => { try { r(JSON.parse(d || "{}")); } catch { r({}); } }); });
const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".md": "text/markdown",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".gif": "image/gif", ".avif": "image/avif" };

function inside(base, p) {
  const full = path.resolve(base, p);
  return full === base || full.startsWith(base + path.sep) ? full : null;
}

const server = http.createServer(async (req, res) => {
  // Trust boundary: only same-machine pages may drive Claude (blocks DNS rebinding + cross-site POSTs).
  const okHost = new Set([`127.0.0.1:${PORT}`, `localhost:${PORT}`]);
  if (!okHost.has(req.headers.host)) return json(res, 403, { error: "bad host" });
  if (req.method === "POST") {
    const origin = req.headers.origin;
    if (origin && !okHost.has(origin.replace(/^https?:\/\//, ""))) return json(res, 403, { error: "bad origin" });
    if (!String(req.headers["content-type"]).startsWith("application/json")) return json(res, 415, { error: "json only" });
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  const parts = url.pathname.split("/").filter(Boolean);

  try {
    if (parts[0] === "api") {
      if (req.method === "POST" && url.pathname !== "/api/ui-action")
        console.log(`[Workbench] ${new Date().toLocaleTimeString("en-GB", { hour12: false })} API ${url.pathname}`);
      if (url.pathname === "/api/health") return json(res, 200, { ok: true, protocol: PROTOCOL_VERSION });

      if (url.pathname === "/api/ui-action" && req.method === "POST") {
        const body = await readBody(req);
        const clean = (value) => String(value || "").replace(/[\x00-\x1f\x7f|]/g, " ").trim().slice(0, 100);
        console.log(`[Workbench] ${new Date().toLocaleTimeString("en-GB", { hour12: false })} UI ${clean(body.kind)} | ${clean(body.tab)} | ${clean(body.label)}`);
        return json(res, 200, { ok: true });
      }

      if (url.pathname === "/api/index") {
        const err = await buildIndex(url.searchParams.has("fresh"));
        if (!fs.existsSync(INDEX_JSON)) return json(res, 500, { error: err || "index missing" });
        res.writeHead(200, { "content-type": "application/json; charset=utf-8" });
        return fs.createReadStream(INDEX_JSON).pipe(res);
      }

      // ---- tools the author already uses, exposed as one-click helpers ----
      if (url.pathname === "/api/plain" && req.method === "POST") {
        const body = await readBody(req);
        const provider = normalizeProvider(body.provider, defaultProvider());
        return json(res, 200, Array.isArray(body.texts) ? await plain.get(body.texts, provider, body.model || "") : {});
      }
      if (url.pathname === "/api/corpus/score" && req.method === "POST") {
        const text = String((await readBody(req)).text || "").slice(0, 500);
        if (!text.trim()) return json(res, 400, { error: "empty" });
        return json(res, 200, { output: await run("python", [path.join(REPO, "tools/cantonese_corpus.py"), "score", text]) });
      }
      if (url.pathname === "/api/scene/prompt") {
        const n = parseInt(url.searchParams.get("n"), 10);
        if (!(n > 0 && n < 1000)) return json(res, 400, { error: "bad scene number" });
        return json(res, 200, { output: await run("python", [path.join(REPO, "tools/scene_gen_runner.py"), "build-prompt", String(n)]) });
      }
      if (url.pathname === "/api/git/status") {
        const [status, log] = await Promise.all([
          run("git", ["status", "--porcelain=v1", "-uall"]),
          run("git", ["log", "-n", "30", "--date=short", "--pretty=format:%h%x09%ad%x09%s", "--name-status"]),
        ]);
        return json(res, 200, { status, log });
      }
      if (url.pathname === "/api/activity") { // 📜 工作紀錄: logged changes + recent commits with their files
        const log = await run("git", ["log", "-n", "60", "--date=iso-strict", "--pretty=format:@@%h%x09%ad%x09%s", "--name-only"]);
        const commits = log.split("@@").filter(Boolean).map((blk) => { const [head, ...files] = blk.trim().split("\n");
          const [hash, date, msg] = head.split("\t"); return { hash, t: Date.parse(date) || 0, msg, files: files.map((x) => x.trim()).filter(Boolean) }; });
        return json(res, 200, { events: readActivity(), commits });
      }
      if (url.pathname === "/api/git/diff") {
        const file = url.searchParams.get("path") || "";
        const commit = url.searchParams.get("commit") || "";
        if (!inside(REPO, file) || (commit && !/^[0-9a-f]{4,40}$/.test(commit))) return json(res, 400, { error: "bad args" });
        const args = commit ? ["show", "--stat=0", "--format=", commit, "--", file] : ["diff", "HEAD", "--", file];
        let out = await run("git", args);
        if (!out.trim() && !commit) out = "（未追蹤嘅新檔，冇 diff；可以直接打開睇）";
        return json(res, 200, { output: out.slice(0, 400000) });
      }

      // ---- automated discussions ----
      if (url.pathname === "/api/config") return json(res, 200, { ...readConfig(), default_provider: defaultProvider() });
      if (url.pathname === "/api/discuss/plan" && req.method === "POST") {
        try { return json(res, 200, await planDiscussion(await readBody(req))); } catch (e) { return json(res, 500, { error: "AI 設定助手出錯：" + String(e.message || e).slice(0, 200) }); }
      }
      if (url.pathname === "/api/discuss/roles") {
        const file = path.join(HERE, "discuss_roles.json");
        if (req.method === "POST") {
          const list = await readBody(req);
          if (!Array.isArray(list) || list.length > 20 || !list.every((r) => r && typeof r.name === "string" && r.name.length <= 30 && typeof r.brief === "string" && r.brief.length <= 600))
            return json(res, 400, { error: "bad roles" });
          fs.writeFileSync(file, JSON.stringify(list.map(({ name, icon, brief, on, skill }) => ({ name, icon: String(icon || "🤖").slice(0, 4), brief, on: !!on, ...(skill ? { skill: String(skill).slice(0, 80) } : {}) })), null, 2));
          return json(res, 200, { ok: true });
        }
        try { return json(res, 200, JSON.parse(fs.readFileSync(file, "utf8"))); } catch { return json(res, 200, []); }
      }
      if (url.pathname === "/api/discuss" && req.method === "GET") return json(res, 200, discussions.list());
      if (url.pathname === "/api/discuss" && req.method === "POST") {
        try {
          const body = await readBody(req);
          body.provider = normalizeProvider(body.provider, defaultProvider());
          return json(res, 200, { id: discussions.start(body).id });
        } catch (e) { return json(res, 400, { error: String(e.message) }); }
      }
      if (parts[1] === "discuss" && parts[2]) {
        const d = discussions.get(parts[2]);
        if (!d) return json(res, 404, { error: "no discussion" });
        if (parts[3] === "events") {
          res.writeHead(200, { "content-type": "text/event-stream", "cache-control": "no-cache", connection: "keep-alive" });
        res.write(`data: ${JSON.stringify({ kind: "config", topic: d.topic, range: d.range, stop: d.stop, roles: d.roles, maxRounds: d.maxRounds, budget: d.budget, model: d.model, provider: d.provider || PROVIDER_CLAUDE, context: d.context, links: d.links || [], skill: d.skill, skillChoice: d.skillChoice, from: d.from || "", items: d.items || [], actions: d.actions || [] })}\n\n`);
          for (const ev of d.events) res.write(`data: ${JSON.stringify(ev)}\n\n`);
          d.clients.add(res);
          req.on("close", () => d.clients.delete(res));
          return;
        }
        if (parts[3] === "control" && req.method === "POST") {
          const b = await readBody(req);
          if (b.action === "say") logAuthor(b.text, "DISC:" + d.id, "discussion");
          discussions.control(d, String(b.action || ""), b.text, b);
          return json(res, 200, { ok: true, state: d.state });
        }
        return json(res, 404, { error: "unknown" });
      }

      if (url.pathname === "/api/launchers") {
        // Author's quick-start buttons (UI config, not story data).
        const file = path.join(HERE, "launchers.json");
        if (req.method === "POST") {
          const list = await readBody(req);
          const ok = Array.isArray(list) && list.length <= 60 && list.every((x) => x && typeof x.label === "string" && x.label.length <= 60
            && ["icon", "skill", "prompt"].every((k) => x[k] == null || (typeof x[k] === "string" && x[k].length <= 1000)));
          if (!ok) return json(res, 400, { error: "bad launcher list" });
          fs.writeFileSync(file, JSON.stringify(list.map(({ label, icon, skill, prompt }) => ({ label, icon: icon || "", skill: skill || "", prompt: prompt || "{goal}" })), null, 2));
          return json(res, 200, { ok: true });
        }
        try { return json(res, 200, JSON.parse(fs.readFileSync(file, "utf8"))); } catch { return json(res, 200, []); }
      }

      // stepper buttons: pace (每步停／自動) for the whole work, and per step ◆ (stop for the author) and 〔輕／中／重〕.
      // Only these work-state markers in a tracker / step file under canon/_working are touched — never story text.
      if (url.pathname === "/api/work/step" && req.method === "POST") {
        const b = await readBody(req);
        const full = inside(REPO, String(b.file || ""));
        if (!full || !String(b.file).startsWith("canon/_working/") || !full.endsWith(".md") || !fs.existsSync(full)) return json(res, 400, { error: "唔係工作檔" });
        let text = fs.readFileSync(full, "utf8");
        if (b.pace) {
          const pace = b.pace === "自動" ? "自動" : "每步停";
          text = /^\s*[-*]?\s*\**節奏\**\s*[:：].*$/m.test(text) ? text.replace(/^(\s*[-*]?\s*\**節奏\**\s*[:：]).*$/m, `$1${pace}`)
            : text.replace(/^(# .*\n)/, `$1節奏：${pace}\n`);
        }
        if (b.code) {
          const esc = String(b.code).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          const re = new RegExp(`^(#{2,4}\\s*${esc}(?![\\d.])[^\\n]*)$`, "m");
          const m = text.match(re);
          if (!m) return json(res, 404, { error: "搵唔到呢步" });
          let line = m[1];
          if (b.weight !== undefined) { line = line.replace(/\s*〔[^〕]*〕/g, ""); if (["輕", "中", "重"].includes(b.weight)) line = line.replace(/(\s*`[^`]*`)?\s*$/, ` 〔${b.weight}〕$1`); }
          if (b.gate !== undefined) { line = line.replace(/\s*◆/g, ""); if (b.gate) line = line.replace(/(\s*`[^`]*`|\s*〔[^〕]*〕)*\s*$/, (t) => " ◆" + t); }
          text = text.replace(m[1], line);
        }
        fs.writeFileSync(full, text);
        buildIndex(true).catch(() => {});
        return json(res, 200, { ok: true });
      }
      if (url.pathname === "/api/link" && req.method === "POST") { // attach any conversation (live or past) to a piece of work
        const b = await readBody(req);
        const sid = String(b.sid && typeof b.sid === "object" ? b.sid.sessionId || "" : b.sid || "");
        if (!/^([0-9a-f-]{36}|DISC:[a-z0-9]+)$/.test(sid) || !b.work) return json(res, 400, { error: "要 sid 同 work" });
        const live = [...sessions.values()].find((s) => s.sdkSessionId === sid);
        const provider = live?.provider || normalizeProvider(b.sid && typeof b.sid === "object" ? b.sid.provider : b.provider, defaultProvider());
        saveLink(String(b.work).slice(0, 300), makeProviderSessionRef(provider, sid));
        return json(res, 200, { ok: true, links: readLinks() });
      }
      if (url.pathname === "/api/lens") {
        if (req.method === "POST") { const body = await readBody(req); updateLens(body); return json(res, 200, lensStatus()); }
        return json(res, 200, { ...lensStatus(), summary: lensState().summary || "" });
      }
      if (url.pathname === "/api/usage") return json(res, 200, await getUsage(url.searchParams.get("provider"), url.searchParams.has("fresh")));

      if (url.pathname === "/api/models") {
        const provider = normalizeProvider(url.searchParams.get("provider"), defaultProvider());
        if (provider === PROVIDER_CODEX) {
          const adapter = new CodexSessionAdapter({ cwd: REPO });
          try { return json(res, 200, await adapter.listModels()); } finally { await adapter.close(); }
        }
        // Ask a live Claude session what this account can use; fall back to aliases Claude Code understands.
        const live = [...sessions.values()].find((s) => s.provider === PROVIDER_CLAUDE && s.status !== "closed");
        const list = live ? await live.q?.supportedModels().catch(() => null) : null;
        return json(res, 200, list?.length ? list.map((m) => ({ value: m.value, label: m.displayName || m.value, description: m.description || "" }))
          : [{ value: "opus", label: "Opus" }, { value: "sonnet", label: "Sonnet" }, { value: "haiku", label: "Haiku" }]);
      }

      if (url.pathname === "/api/thumb") {
        const full = inside(REPO, url.searchParams.get("path") || "");
        if (!full || !fs.existsSync(full)) return json(res, 404, { error: "not found" });
        const st = fs.statSync(full);
        const out = path.join(THUMBS, crypto.createHash("sha1").update(full + st.mtimeMs).digest("hex") + ".jpg");
        if (!fs.existsSync(out)) await makeThumb(full, out);
        if (!fs.existsSync(out)) { res.writeHead(302, { location: "/api/file?path=" + encodeURIComponent(url.searchParams.get("path")) }); return res.end(); }
        res.writeHead(200, { "content-type": "image/jpeg", "cache-control": "max-age=86400" });
        return fs.createReadStream(out).pipe(res);
      }

      if (url.pathname === "/api/file") {
        const full = inside(REPO, url.searchParams.get("path") || "");
        if (!full || !fs.existsSync(full) || !fs.statSync(full).isFile()) return json(res, 404, { error: "not found" });
        const type = MIME[path.extname(full).toLowerCase()];
        res.writeHead(200, { "content-type": type && !type.startsWith("text/html") ? type + (type.startsWith("image/") ? "" : "; charset=utf-8") : "text/plain; charset=utf-8", "cache-control": "max-age=300" });
        return fs.createReadStream(full).pipe(res);
      }

      if (url.pathname === "/api/sessions" && req.method === "GET") {
        const live = [...sessions.values()].map(({ id, title, provider, status, sdkSessionId, pending, taskId, model, effort, activity, agentCap, agentsUsed }) => ({ id, title, provider, status, sdkSessionId, taskId, model, effort, activity: activity || "", pending: pending.size, agentCap, agentsUsed }));
        const provider = normalizeProvider(url.searchParams.get("provider"), defaultProvider());
        // Older builds saved every auto-discussion turn as a session; skip those so they can't push real chats off the list.
        const past = provider === PROVIDER_CODEX
          ? (await listCodexThreads()).filter((p) => !live.some((l) => l.provider === provider && l.sdkSessionId === (p.id || p.threadId)))
            .slice(0, 40).map((p) => {
              const stamp = p.updatedAt ?? p.updated_at ?? p.createdAt ?? p.created_at ?? "";
              const lastModified = typeof stamp === "number" ? (stamp < 1e12 ? stamp * 1000 : stamp) : Date.parse(stamp) || 0;
              return { provider, sessionId: p.id || p.threadId, title: p.name || p.title || p.preview || p.id || p.threadId, lastModified };
            })
          : (await listSessions({ dir: REPO, limit: 400 }).catch(() => []))
            .filter((p) => !live.some((l) => l.provider === provider && l.sdkSessionId === p.sessionId) && !BACKGROUND_PROMPT.test(p.firstPrompt || p.summary || ""))
            .slice(0, 40).map((p) => ({ provider, sessionId: p.sessionId, title: p.customTitle || p.summary || p.sessionId, lastModified: p.lastModified }));
        // give backfilled file-touch records a readable conversation title
        let named = false;
        for (const p of past) if (touched[p.sessionId] && !touched[p.sessionId].title) { touched[p.sessionId].title = p.title.slice(0, 60); named = true; }
        if (named) fs.writeFileSync(TOUCHED_FILE, JSON.stringify(touched));
        return json(res, 200, { live, past, links: readLinks(), discussions: discussions.list().slice(0, 40) });
      }

      if (url.pathname === "/api/sessions" && req.method === "POST") {
        const body = await readBody(req);
        const s = await createSession(body);
        logAuthor(body.said, s.id, "new");
        if (body.resume) { // show what was said before, then a divider, before anything new streams in
          const old = s.provider === PROVIDER_CODEX
            ? await s.adapter.history().catch(() => [])
            : historyEvents(await getSessionMessages(s.sdkSessionId, { dir: REPO }).catch(() => []));
          if (old.length) s.events.unshift(...old, { kind: "note", text: "── 以上係之前嘅對話，由呢度繼續 ──" });
        }
        if (body.text) await sendMessage(s, body.text);
        return json(res, 200, { id: s.id });
      }

      if (parts[1] === "history" && parts[2]) {
        const provider = normalizeProvider(url.searchParams.get("provider"), defaultProvider());
        if (provider === PROVIDER_CODEX) {
          const adapter = new CodexSessionAdapter({ cwd: REPO });
          try { await adapter.start({ resumeThreadId: parts[2] }); return json(res, 200, await adapter.history()); }
          finally { await adapter.close(); }
        }
        const msgs = await getSessionMessages(parts[2], { dir: REPO }).catch(() => []);
        return json(res, 200, historyEvents(msgs));
      }

      if (parts[1] === "sessions" && parts[2]) {
        const s = sessions.get(parts[2]);
        if (!s) return json(res, 404, { error: "no session" });
        const action = parts[3];

        if (action === "events") {
          res.writeHead(200, { "content-type": "text/event-stream", "cache-control": "no-cache", connection: "keep-alive" });
          for (const ev of s.events) res.write(`data: ${JSON.stringify(ev)}\n\n`);
          s.clients.add(res);
          req.on("close", () => s.clients.delete(res));
          return;
        }
        if (req.method !== "POST") return json(res, 405, { error: "POST" });
        const body = await readBody(req);
        if (action === "agents") { s.agentCap = Math.max(0, Math.min(8, +body.cap || 0)); emit(s, { kind: "agents", cap: s.agentCap, used: s.agentsUsed }); return json(res, 200, { ok: true }); }
        if (action === "message") { logAuthor(body.said, s.sdkSessionId || s.id); await sendMessage(s, String(body.text || "")); return json(res, 200, { ok: true }); }
        if (action === "answer") {
          const resolve = s.pending.get(body.requestId);
          if (!resolve) return json(res, 404, { error: "no pending request" });
          s.pending.delete(body.requestId);
          logAuthor(body.said, s.sdkSessionId || s.id, "answer");
          emit(s, { kind: "answered", requestId: body.requestId, result: body.result });
          setStatus(s, "running");
          resolve(body.result);
          return json(res, 200, { ok: true });
        }
        if (action === "interrupt") {
          if (s.adapter) await s.adapter.interrupt();
          else await s.q?.interrupt().catch(() => {});
          return json(res, 200, { ok: true });
        }
        if (action === "model") {
          s.model = String(body.model || "");
          s.modelPinned = !!s.model; // the author picked a model by hand: step weights stop switching it
          if (s.adapter) await s.adapter.setModel(s.model);
          else { await s.q?.setModel(s.model || undefined); emit(s, { kind: "model", model: s.model }); }
          return json(res, 200, { ok: true });
        }
        if (action === "effort") {
          s.effort = String(body.effort || "");
          if (s.adapter) await s.adapter.setEffort(s.effort);
          else { await s.q?.applyFlagSettings({ effortLevel: s.effort || null }); emit(s, { kind: "effort", effort: s.effort }); } // null = back to the model's default
          return json(res, 200, { ok: true });
        }
        if (action === "link") { // the author attaches this chat to a piece of work by hand
          if (!s.sdkSessionId) return json(res, 409, { error: "對話未開始，傾咗第一句先掛得" });
          saveLink(String(body.work || "").slice(0, 300), makeProviderSessionRef(s.provider, s.sdkSessionId)); emit(s, { kind: "work", work: String(body.work) });
          return json(res, 200, { ok: true });
        }
        if (action === "rename") {
          s.title = String(body.title || s.title);
          // also save it in the transcript, so the past-session list keeps the title after a restart
          if (s.adapter) await s.adapter.rename(s.title).catch(() => {});
          else if (s.sdkSessionId) await renameSession(s.sdkSessionId, s.title, { dir: REPO }).catch(() => {});
          return json(res, 200, { ok: true });
        }
        return json(res, 404, { error: "unknown action" });
      }
      return json(res, 404, { error: "unknown api" });
    }

    // The author's Brief, viewable in its own tab. Sandboxed (opaque origin) so its scripts can't call this API.
    if (url.pathname === "/brief") {
      res.writeHead(200, { "content-type": "text/html; charset=utf-8", "content-security-policy": "sandbox allow-scripts allow-popups" });
      return fs.createReadStream(path.join(REPO, "00_Story_Brief.html")).pipe(res);
    }

    // static
    const full = inside(PUBLIC, url.pathname === "/" ? "index.html" : url.pathname.slice(1));
    if (!full || !fs.existsSync(full) || fs.statSync(full).isDirectory()) { res.writeHead(404); return res.end("not found"); }
    res.writeHead(200, { "content-type": (MIME[path.extname(full)] || "application/octet-stream") + "; charset=utf-8", "cache-control": "no-store" });
    fs.createReadStream(full).pipe(res);
  } catch (err) {
    console.error(`[Workbench] ${req.method} ${url.pathname} error: ${String(err?.message || err).slice(0, 300)}`);
    json(res, 500, { error: String(err?.message || err) });
  }
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Haruka Workbench on http://localhost:${PORT}`);
  console.log(`[Workbench] Server config default backend: ${defaultProvider()} (browser choice is shown in the sidebar)`);
  console.log("[Workbench] Session, model, turn and error activity will appear here.");
});
