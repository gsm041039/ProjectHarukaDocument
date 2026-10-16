// Haruka Workbench server: Agent SDK sessions + SSE + project index. Local only.
import { createPlain } from "./plain.mjs";
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { query, listSessions, getSessionMessages } from "@anthropic-ai/claude-agent-sdk";
import { createDiscussions } from "./discuss.mjs";

const PORT = Number(process.env.WORKBENCH_PORT || 4317);
const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, "..", "..");
const PUBLIC = path.join(HERE, "public");
const INDEX_JSON = path.join(REPO, "canon/_working/.tmp/workbench/index.json");
const PROTOCOL_VERSION = 1;
// task id -> Claude session id, so "繼續" can reopen the same conversation after a restart (UI state, not story data).
const LINKS_FILE = path.join(REPO, "canon/_working/.tmp/workbench/task_sessions.json");
const readLinks = () => { try { return JSON.parse(fs.readFileSync(LINKS_FILE, "utf8")); } catch { return {}; } };
const saveLink = (task, sid) => { const l = readLinks(); l[task] = sid; fs.mkdirSync(path.dirname(LINKS_FILE), { recursive: true }); fs.writeFileSync(LINKS_FILE, JSON.stringify(l, null, 1)); };

// Commands that always need the author's click, even though everything else runs unattended.
// internal codes the author can't read: QQ-12, CDL-125, E-09, M5, B7, G4, D-17-G4, v4.1, V5, Batch 6, Stage 2a, Phase 3
export const CODE = /(?<![A-Za-z])(?:v\d+(?:\.\d+)*|[A-Z]{1,4}-?[A-Z]?\d+(?:\.\d+)?[a-z]?(?:-[A-Z]?\d+)*|batch\s*\d+|stage\s*\d+[a-z]?|phase\s*\d+)(?![A-Za-z0-9])/i;
const askCodes = (qs) => [...new Set((qs || []).flatMap((q) => [q.header, q.question, ...(q.options || []).flatMap((o) => [o.label, o.description])])
  .flatMap((x) => String(x || "").match(new RegExp(CODE.source, "gi")) || []))];
const DANGER = /\brm\s+-\w*[rf]|\bgit\s+(push|reset\s+--hard|clean|checkout\s+--|branch\s+-D)|Remove-Item|\bdel\s|\brmdir\b|\bformat\b/i;

const sessions = new Map(); // local id -> session
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

// 🧭 auto-discussion planner: reads the skill + linked files, says what it understood, proposes 2–4 ready-made set-ups
async function planDiscussion(seed) {
  const cfg = readConfig();
  let roles = [];
  try { roles = JSON.parse(fs.readFileSync(path.join(HERE, "discuss_roles.json"), "utf8")).map((r) => r.name); } catch {}
  const links = (Array.isArray(seed.links) ? seed.links : []).slice(0, 12).map((l) => `- ${l.id}｜${l.title || ""}${l.file ? "（" + l.file + "）" : ""}`).join("\n");
  const prompt = `你係 Haruka Workbench 嘅「自動討論設定助手」。先 Read .claude/skills/story-auto-discussion/SKILL.md，再按需要讀下面連住嘅文件（只讀，唔改任何嘢，最多讀 6 個檔）。
作者想開一場自動討論。種子：
【題目／作者講嘅】${String(seed.topic || "").slice(0, 1500) || "（未講，靠連住嘅嘢同背景推斷）"}
【背景】${String(seed.context || "").slice(0, 800) || "（冇）"}
【連住嘅嘢】
${links || "（冇）"}
可用角色（roles 只可以由呢度揀）：${roles.join("、")}

做三件事：
1. 用一兩句白話講你理解作者想傾咩、而家卡喺邊（唔准有內部編號 QQ-/CDL-/E-xx/M5/v4.1/Batch 等，作者睇得到）。
2. 出 2–4 個唔同方向嘅討論設定（例如：比較幾個做法／搵漏洞／壓力測試某段／收窄範圍），每個要真係唔同。
3. 按呢個話題建議 2–4 句「範圍」同 2–4 句「停止點」畀作者揀。
只輸出一個 JSON（放喺 \`\`\`json 入面）：
{"understanding":"…","proposals":[{"label":"≤12字方向名","why":"一句：點解咁傾＋代價（幾多輪／大約幾錢）","topic":"討論題目（白話）","range":"範圍","stop":"停止點","roles":["角色名"],"rounds":3,"links":[{"id":"實體 id","title":"白話名","file":"repo 相對路徑"}]}],"ranges":["…"],"stops":["…"]}
links 只放你確認存在、真係相關嘅（可以沿用種子嘅）。`;
  let text = "";
  for await (const m of query({ prompt, options: {
    cwd: REPO, settingSources: ["project"], systemPrompt: { type: "preset", preset: "claude_code" }, model: cfg.planner_model || undefined,
    allowedTools: ["Read", "Grep", "Glob"], disallowedTools: ["Edit", "Write", "Bash", "NotebookEdit", "Agent", "PowerShell"], permissionMode: "dontAsk", maxTurns: 12,
  } })) if (m.type === "result") text = m.result || text;
  const raw = (text.match(/```json\s*([\s\S]*?)```/) || text.match(/(\{[\s\S]*\})/) || [])[1];
  const plan = JSON.parse(raw);
  for (const pr of plan.proposals || []) pr.roles = (pr.roles || []).filter((r) => roles.includes(r));
  return plan;
}

function createSession({ title, resume, task, model, agentCap }) {
  const id = Math.random().toString(36).slice(2, 10);
  const s = {
    id, title: title || "新 task", status: "idle", sdkSessionId: resume || null, taskId: task || null, model: model || "",
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
            if (b.type === "text") emit(s, { kind: "text", text: b.text });
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

function sendMessage(s, text) {
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
          res.write(`data: ${JSON.stringify({ kind: "config", topic: d.topic, range: d.range, stop: d.stop, roles: d.roles, maxRounds: d.maxRounds, budget: d.budget, model: d.model, context: d.context, links: d.links || [], skill: d.skill, skillChoice: d.skillChoice, from: d.from || "" })}\n\n`);
          for (const ev of d.events) res.write(`data: ${JSON.stringify(ev)}\n\n`);
          d.clients.add(res);
          req.on("close", () => d.clients.delete(res));
          return;
        }
        if (parts[3] === "control" && req.method === "POST") {
          const b = await readBody(req);
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
        const live = [...sessions.values()].map(({ id, title, status, sdkSessionId, pending, taskId, model, activity, agentCap, agentsUsed }) => ({ id, title, status, sdkSessionId, taskId, model, activity: activity || "", pending: pending.size, agentCap, agentsUsed }));
        const past = (await listSessions({ dir: REPO, limit: 40 }).catch(() => []))
          .filter((p) => !live.some((l) => l.sdkSessionId === p.sessionId))
          .map((p) => ({ sessionId: p.sessionId, title: p.customTitle || p.summary || p.sessionId, lastModified: p.lastModified }));
        // give backfilled file-touch records a readable conversation title
        let named = false;
        for (const p of past) if (touched[p.sessionId] && !touched[p.sessionId].title) { touched[p.sessionId].title = p.title.slice(0, 60); named = true; }
        if (named) fs.writeFileSync(TOUCHED_FILE, JSON.stringify(touched));
        return json(res, 200, { live, past, links: readLinks() });
      }

      if (url.pathname === "/api/sessions" && req.method === "POST") {
        const body = await readBody(req);
        const s = createSession(body);
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
        if (action === "message") { sendMessage(s, String(body.text || "")); return json(res, 200, { ok: true }); }
        if (action === "answer") {
          const resolve = s.pending.get(body.requestId);
          if (!resolve) return json(res, 404, { error: "no pending request" });
          s.pending.delete(body.requestId);
          emit(s, { kind: "answered", requestId: body.requestId, result: body.result });
          setStatus(s, "running");
          resolve(body.result);
          return json(res, 200, { ok: true });
        }
        if (action === "interrupt") { await s.q.interrupt().catch(() => {}); return json(res, 200, { ok: true }); }
        if (action === "model") {
          s.model = String(body.model || "");
          await s.q.setModel(s.model || undefined);
          emit(s, { kind: "model", model: s.model });
          return json(res, 200, { ok: true });
        }
        if (action === "rename") { s.title = String(body.title || s.title); return json(res, 200, { ok: true }); }
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
