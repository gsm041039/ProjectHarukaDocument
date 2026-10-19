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

const PORT = Number(process.env.WORKBENCH_PORT || 4317);
process.env.HARUKA_WORKBENCH = "1"; // inherited by every Claude run we start: the author-prompt hook skips them (this server logs typed text itself)
const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, "..", "..");
const PUBLIC = path.join(HERE, "public");
const INDEX_JSON = path.join(REPO, "canon/_working/.tmp/workbench/index.json");
const PROTOCOL_VERSION = 1;
// task id -> Claude session id, so "繼續" can reopen the same conversation after a restart (UI state, not story data).
const LINKS_FILE = path.join(REPO, "canon/_working/.tmp/workbench/task_sessions.json");
const readLinks = () => { try { return JSON.parse(fs.readFileSync(LINKS_FILE, "utf8")); } catch { return {}; } };
// task → latest chat (for 「繼續」), plus _bySession: chat → every piece of work it belongs to (for the chat's progress card)
const saveLink = (task, sid) => {
  const l = readLinks(); l[task] = sid;
  const by = (l._bySession ||= {}); by[sid] = [...new Set([...(by[sid] || []), task])].slice(-6);
  fs.mkdirSync(path.dirname(LINKS_FILE), { recursive: true }); fs.writeFileSync(LINKS_FILE, JSON.stringify(l, null, 1));
};

// Commands that always need the author's click, even though everything else runs unattended.
// internal codes the author can't read: QQ-12, CDL-125, E-09, M5, B7, G4, D-17-G4, v4.1, V5, Batch 6, Stage 2a, Phase 3
export const CODE = /(?<![A-Za-z])(?:v\d+(?:\.\d+)*|[A-Z]{1,4}-?[A-Z]?\d+(?:\.\d+)?[a-z]?(?:-[A-Z]?\d+)*|batch\s*\d+|stage\s*\d+[a-z]?|phase\s*\d+)(?![A-Za-z0-9])/i;
const askCodes = (qs) => [...new Set((qs || []).flatMap((q) => [q.header, q.question, ...(q.options || []).flatMap((o) => [o.label, o.description])])
  .flatMap((x) => String(x || "").match(new RegExp(CODE.source, "gi")) || []))];
const DANGER = /\brm\s+-\w*[rf]|\bgit\s+(push|reset\s+--hard|clean|checkout\s+--|branch\s+-D)|Remove-Item|\bdel\s|\brmdir\b|\bformat\b/i;

const sessions = new Map(); // local id -> session
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
const plain = createPlain(path.join(REPO, "canon/_working/.tmp/workbench/plain.json"));
const discussions = createDiscussions({ REPO, DIR: path.join(REPO, "canon/_working/.tmp/workbench/discussions"),
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
}

function setStatus(s, status) {
  s.status = status;
  emit(s, { kind: "status", status });
}

// Park a request until the browser answers it via /answer.
function ask(s, kind, payload, signal) {
  const requestId = `${kind}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  setStatus(s, "waiting");
  emit(s, { kind, requestId, ...payload });
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
  let text = "";
  for await (const m of query({ prompt, options: {
    cwd: REPO, settingSources: ["project"], systemPrompt: { type: "preset", preset: "claude_code" }, model: cfg.planner_model || undefined,
    allowedTools: ["Read", "Grep", "Glob"], disallowedTools: ["Edit", "Write", "Bash", "NotebookEdit", "Agent", "PowerShell"], permissionMode: "dontAsk", maxTurns: 12, persistSession: false,
  } })) if (m.type === "result") text = m.result || text;
  const raw = (text.match(/```json\s*([\s\S]*?)```/) || text.match(/(\{[\s\S]*\})/) || [])[1];
  const plan = JSON.parse(raw);
  for (const pr of plan.proposals || []) pr.roles = (pr.roles || []).filter((r) => roles.includes(r));
  return plan;
}

function createSession({ title, resume, task, model, effort, agentCap }) {
  const id = Math.random().toString(36).slice(2, 10);
  const s = {
    id, title: title || "新 task", status: "idle", sdkSessionId: resume || null, taskId: task || null, model: model || "", effort: effort || "",
    events: [], clients: new Set(), pending: new Map(), toolNames: new Map(), inbox: inbox(), q: null,
    agentCap: Number.isFinite(+agentCap) && agentCap !== "" && agentCap != null ? +agentCap : (readConfig().agent_cap_default ?? 2), agentsUsed: 0,
  };
  sessions.set(id, s);

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
      ...(resume ? { resume } : {}),
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
          if (s.taskId) saveLink(s.taskId, m.session_id);
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
                try { const w = JSON.parse(m[1]).work; if (w && s.sdkSessionId) { saveLink(String(w).slice(0, 300), s.sdkSessionId); emit(s, { kind: "work", work: String(w) }); } } catch {}
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
async function updateLens() {
  if (lens.running) return;
  const rows = readLines(), st = lensState(), fresh = rows.slice(st.processed || 0);
  if (!fresh.length) return;
  Object.assign(lens, { running: true, error: "", startedAt: Date.now() });
  const lines = fresh.map((r, i) => `[${(st.processed || 0) + i + 1}] ${String(r.t).slice(0, 10)} ${r.src}: ${String(r.text).replace(/\s+/g, " ").slice(0, 600)}`).join("\n");
  const prompt = `你係 author-lens skill。先 Read .claude/skills/author-lens/SKILL.md 照佢嘅方法同界線做。
${fs.existsSync(LENS_FILE) ? "現有模型喺 canon/_working/author_voice/AUTHOR_LENS.md，先 Read 佢，喺上面增量更新（保留仍成立嘅 pattern，加新證據，新 pattern 另開，同舊嘢矛盾就標出嚟）。" : "未有模型，請新建 canon/_working/author_voice/AUTHOR_LENS.md。"}
下面係上次更新之後新記錄、作者親手打嘅 ${fresh.length} 句（方括號係行號，可以用嚟做證據引用）：
${lines}

要求：只取創作／設計上嘅問法、關注角度、否決訊號、深度控制；題外話（整網頁、工具、私事）唔入模型；唔抄措辭同粗口；每個 pattern 寫「證據（行號＋日期）」同「下次點用呢個角度挑戰方案」。檔頂寫一句最後更新日期同累計句數 ${rows.length}。只可以寫呢一個檔。完成後用一兩句白話講改咗咩。`;
  try {
    let summary = "";
    for await (const m of query({ prompt, options: {
      cwd: REPO, settingSources: ["project"], systemPrompt: { type: "preset", preset: "claude_code" }, persistSession: false, maxTurns: 20,
      model: readConfig().lens_model || undefined, allowedTools: ["Read", "Grep", "Glob", "Write", "Edit"],
      disallowedTools: ["Bash", "PowerShell", "Agent", "Task", "NotebookEdit", "WebFetch", "WebSearch"],
      canUseTool: async (tool, input) => (["Write", "Edit"].includes(tool) && path.resolve(REPO, String(input.file_path || "")) !== LENS_FILE)
        ? { behavior: "deny", message: "只可以寫 canon/_working/author_voice/AUTHOR_LENS.md" } : { behavior: "allow", updatedInput: input },
    } })) if (m.type === "result") { summary = m.result || ""; if (m.subtype !== "success") throw new Error(summary || m.subtype); }
    fs.writeFileSync(LENS_STATE, JSON.stringify({ processed: rows.length, updated: new Date().toISOString(), summary: summary.slice(0, 500) }, null, 1));
  } catch (err) { lens.error = String(err?.message || err).slice(0, 300); }
  lens.running = false;
}

// Plan usage (5-hour / weekly windows), same data as /usage. Experimental SDK call: asks an open conversation,
// else a throwaway one that never sends a message (costs nothing). Cached a minute; errors just hide the meter.
let usageCache = { t: 0, data: null }, usageBusy = null;
async function getUsage(force) {
  if (!force && Date.now() - usageCache.t < 60000) return usageCache.data;
  return (usageBusy ||= (async () => {
    const live = [...sessions.values()].find((s) => s.status !== "closed");
    let q = live?.q, temp = null;
    if (!q) temp = q = query({ prompt: (async function* () { await new Promise(() => {}); })(), options: { cwd: REPO, settingSources: [], persistSession: false } });
    try {
      const u = await q.usage_EXPERIMENTAL_MAY_CHANGE_DO_NOT_RELY_ON_THIS_API_YET({ skipBehaviors: true });
      const win = (w) => (w && w.utilization != null ? { pct: w.utilization, resets: w.resets_at } : null);
      usageCache = { t: Date.now(), data: u.rate_limits_available ? { plan: u.subscription_type, five_hour: win(u.rate_limits?.five_hour), week: win(u.rate_limits?.seven_day) } : { unavailable: true } };
    } catch (err) {
      usageCache = { t: Date.now(), data: { error: String(err?.message || err).slice(0, 200) } };
    } finally { temp?.close(); usageBusy = null; }
    return usageCache.data;
  })());
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
  const cfg = readConfig().step_models || {};
  const info = stepInfo(st.work, st.step);
  const weight = st.weight || info?.weight || "";
  let model = cfg[weight];
  if (!model) return;
  const floor = cfg._floor_for_heavy_or_gate || "sonnet";
  if ((weight === "重" || st.gate || info?.author_gate) && (RANK[model] ?? 9) < (RANK[floor] ?? 0)) model = floor;
  if (model === s.model) return;
  s.model = model;
  await s.q.setModel(model).catch(() => {});
  emit(s, { kind: "model", model, note: `呢步用 ${model}（${weight}）` });
}

function sendMessage(s, text) {
  emit(s, { kind: "user", text });
  // the tray (待送出) arrives as a ui:intent block: every item the author approved goes into 工作紀錄
  for (const m of String(text).matchAll(/```ui:intent\s*([\s\S]*?)```/g)) {
    try { for (const it of JSON.parse(m[1]).intents || [])
      logActivity({ kind: "intent", sid: s.sdkSessionId || s.id, title: s.title, file: it.payload?.file || "", note: String(it.note || it.type).slice(0, 300), type: it.type, target: String(it.target || "").slice(0, 120) }); } catch {}
  }
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
      if (url.pathname === "/api/health") return json(res, 200, { ok: true, protocol: PROTOCOL_VERSION });

      if (url.pathname === "/api/index") {
        const err = await buildIndex(url.searchParams.has("fresh"));
        if (!fs.existsSync(INDEX_JSON)) return json(res, 500, { error: err || "index missing" });
        res.writeHead(200, { "content-type": "application/json; charset=utf-8" });
        return fs.createReadStream(INDEX_JSON).pipe(res);
      }

      // ---- tools the author already uses, exposed as one-click helpers ----
      if (url.pathname === "/api/plain" && req.method === "POST") {
        const texts = (await readBody(req)).texts;
        return json(res, 200, Array.isArray(texts) ? await plain.get(texts) : {});
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
      if (url.pathname === "/api/config") return json(res, 200, readConfig());
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
        try { return json(res, 200, { id: discussions.start(await readBody(req)).id }); } catch (e) { return json(res, 400, { error: String(e.message) }); }
      }
      if (parts[1] === "discuss" && parts[2]) {
        const d = discussions.get(parts[2]);
        if (!d) return json(res, 404, { error: "no discussion" });
        if (parts[3] === "events") {
          res.writeHead(200, { "content-type": "text/event-stream", "cache-control": "no-cache", connection: "keep-alive" });
          res.write(`data: ${JSON.stringify({ kind: "config", topic: d.topic, range: d.range, stop: d.stop, roles: d.roles, maxRounds: d.maxRounds, budget: d.budget, model: d.model, context: d.context, links: d.links || [], skill: d.skill, skillChoice: d.skillChoice, from: d.from || "", items: d.items || [], actions: d.actions || [] })}\n\n`);
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
        if (!/^([0-9a-f-]{36}|DISC:[a-z0-9]+)$/.test(String(b.sid || "")) || !b.work) return json(res, 400, { error: "要 sid 同 work" });
        saveLink(String(b.work).slice(0, 300), b.sid);
        return json(res, 200, { ok: true, links: readLinks() });
      }
      if (url.pathname === "/api/lens") {
        if (req.method === "POST") { updateLens(); return json(res, 200, lensStatus()); }
        return json(res, 200, { ...lensStatus(), summary: lensState().summary || "" });
      }
      if (url.pathname === "/api/usage") return json(res, 200, await getUsage(url.searchParams.has("fresh")));

      if (url.pathname === "/api/models") {
        // Ask a live session what this account can use; fall back to aliases Claude Code always understands.
        const live = [...sessions.values()].find((s) => s.status !== "closed");
        const list = live ? await live.q.supportedModels().catch(() => null) : null;
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
        const live = [...sessions.values()].map(({ id, title, status, sdkSessionId, pending, taskId, model, effort, activity, agentCap, agentsUsed }) => ({ id, title, status, sdkSessionId, taskId, model, effort, activity: activity || "", pending: pending.size, agentCap, agentsUsed }));
        // Older builds saved every auto-discussion turn as a session; skip those so they can't push real chats off the list.
        const past = (await listSessions({ dir: REPO, limit: 400 }).catch(() => []))
          .filter((p) => !live.some((l) => l.sdkSessionId === p.sessionId) && !BACKGROUND_PROMPT.test(p.firstPrompt || p.summary || ""))
          .slice(0, 40)
          .map((p) => ({ sessionId: p.sessionId, title: p.customTitle || p.summary || p.sessionId, lastModified: p.lastModified }));
        // give backfilled file-touch records a readable conversation title
        let named = false;
        for (const p of past) if (touched[p.sessionId] && !touched[p.sessionId].title) { touched[p.sessionId].title = p.title.slice(0, 60); named = true; }
        if (named) fs.writeFileSync(TOUCHED_FILE, JSON.stringify(touched));
        return json(res, 200, { live, past, links: readLinks(), discussions: discussions.list().slice(0, 40) });
      }

      if (url.pathname === "/api/sessions" && req.method === "POST") {
        const body = await readBody(req);
        const s = createSession(body);
        logAuthor(body.said, s.id, "new");
        if (body.resume) { // show what was said before, then a divider, before anything new streams in
          const old = historyEvents(await getSessionMessages(body.resume, { dir: REPO }).catch(() => []));
          if (old.length) s.events.unshift(...old, { kind: "note", text: "── 以上係之前嘅對話，由呢度繼續 ──" });
        }
        if (body.text) sendMessage(s, body.text);
        return json(res, 200, { id: s.id });
      }

      if (parts[1] === "history" && parts[2]) {
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
        if (action === "message") { logAuthor(body.said, s.sdkSessionId || s.id); sendMessage(s, String(body.text || "")); return json(res, 200, { ok: true }); }
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
        if (action === "interrupt") { await s.q.interrupt().catch(() => {}); return json(res, 200, { ok: true }); }
        if (action === "model") {
          s.model = String(body.model || "");
          s.modelPinned = !!s.model; // the author picked a model by hand: step weights stop switching it
          await s.q.setModel(s.model || undefined);
          emit(s, { kind: "model", model: s.model });
          return json(res, 200, { ok: true });
        }
        if (action === "effort") {
          s.effort = String(body.effort || "");
          await s.q.applyFlagSettings({ effortLevel: s.effort || null }); // null = back to the model's default
          emit(s, { kind: "effort", effort: s.effort });
          return json(res, 200, { ok: true });
        }
        if (action === "link") { // the author attaches this chat to a piece of work by hand
          if (!s.sdkSessionId) return json(res, 409, { error: "對話未開始，傾咗第一句先掛得" });
          saveLink(String(body.work || "").slice(0, 300), s.sdkSessionId); emit(s, { kind: "work", work: String(body.work) });
          return json(res, 200, { ok: true });
        }
        if (action === "rename") {
          s.title = String(body.title || s.title);
          // also save it in the transcript, so the past-session list keeps the title after a restart
          if (s.sdkSessionId) await renameSession(s.sdkSessionId, s.title, { dir: REPO }).catch(() => {});
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
    res.writeHead(200, { "content-type": (MIME[path.extname(full)] || "application/octet-stream") + "; charset=utf-8" });
    fs.createReadStream(full).pipe(res);
  } catch (err) {
    json(res, 500, { error: String(err?.message || err) });
  }
});

server.listen(PORT, "127.0.0.1", () => console.log(`Haruka Workbench on http://localhost:${PORT}`));
