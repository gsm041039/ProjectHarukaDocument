// Haruka Workbench server: Agent SDK sessions + SSE + project index. Local only.
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
const DANGER = /\brm\s+-\w*[rf]|\bgit\s+(push|reset\s+--hard|clean|checkout\s+--|branch\s+-D)|Remove-Item|\bdel\s|\brmdir\b|\bformat\b/i;

const sessions = new Map(); // local id -> session
const discussions = createDiscussions({ REPO, DIR: path.join(REPO, "canon/_working/.tmp/workbench/discussions") });

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

function createSession({ title, resume, task, model }) {
  const id = Math.random().toString(36).slice(2, 10);
  const s = {
    id, title: title || "新 task", status: "idle", sdkSessionId: resume || null, taskId: task || null, model: model || "",
    events: [], clients: new Set(), pending: new Map(), toolNames: new Map(), inbox: inbox(), q: null,
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
      ...(resume ? { resume } : {}),
      ...(model ? { model } : {}),
      canUseTool: async (toolName, input, { signal }) => {
        if (toolName === "AskUserQuestion") {
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
      if (url.pathname === "/api/discuss/roles") {
        const file = path.join(HERE, "discuss_roles.json");
        if (req.method === "POST") {
          const list = await readBody(req);
          if (!Array.isArray(list) || list.length > 20 || !list.every((r) => r && typeof r.name === "string" && r.name.length <= 30 && typeof r.brief === "string" && r.brief.length <= 600))
            return json(res, 400, { error: "bad roles" });
          fs.writeFileSync(file, JSON.stringify(list.map(({ name, icon, brief, on }) => ({ name, icon: String(icon || "🤖").slice(0, 4), brief, on: !!on })), null, 2));
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
          res.write(`data: ${JSON.stringify({ kind: "config", topic: d.topic, range: d.range, stop: d.stop, roles: d.roles, maxRounds: d.maxRounds, budget: d.budget, model: d.model, context: d.context, links: d.links || [], skill: d.skill, skillChoice: d.skillChoice })}\n\n`);
          for (const ev of d.events) res.write(`data: ${JSON.stringify(ev)}\n\n`);
          d.clients.add(res);
          req.on("close", () => d.clients.delete(res));
          return;
        }
        if (parts[3] === "control" && req.method === "POST") {
          const b = await readBody(req);
          discussions.control(d, String(b.action || ""), b.text);
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
        const live = [...sessions.values()].map(({ id, title, status, sdkSessionId, pending, taskId, model, activity }) => ({ id, title, status, sdkSessionId, taskId, model, activity: activity || "", pending: pending.size }));
        const past = (await listSessions({ dir: REPO, limit: 40 }).catch(() => []))
          .filter((p) => !live.some((l) => l.sdkSessionId === p.sessionId))
          .map((p) => ({ sessionId: p.sessionId, title: p.customTitle || p.summary || p.sessionId, lastModified: p.lastModified }));
        return json(res, 200, { live, past, links: readLinks() });
      }

      if (url.pathname === "/api/sessions" && req.method === "POST") {
        const body = await readBody(req);
        const s = createSession(body);
        if (body.text) sendMessage(s, body.text);
        return json(res, 200, { id: s.id });
      }

      if (parts[1] === "history" && parts[2]) {
        const msgs = await getSessionMessages(parts[2], { dir: REPO }).catch(() => []);
        return json(res, 200, msgs);
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
