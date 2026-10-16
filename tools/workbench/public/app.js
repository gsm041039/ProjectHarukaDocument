// Haruka Workbench shell: sessions, chat, cards, views, intent tray, file drawer.
// Extension points: views.json + views/<id>.js (export render(el, ctx)); cards/<type>.js (export render(data, ctx)).
import { createProgress } from "./progress.js";
import { createEntityUI } from "./entity.js";
import { createLauncher } from "./launcher.js";
import { micButton } from "./mic.js";
import { createSmartStart } from "./smartstart.js";
import { plain, strip } from "./plain.js";
import { linkify, fileId } from "./links.js";

// One-click replies so the author rarely needs to type.
const PROTOCOL = 1;
const $ = (s, el = document) => el.querySelector(s);
const h = (tag, attrs = {}, ...kids) => {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
    else if (k === "class") el.className = v;
    else if (v !== false && v != null) el.setAttribute(k, v === true ? "" : v);
  }
  for (const k of kids.flat()) if (k != null) el.append(k.nodeType ? k : document.createTextNode(String(k)));
  return el;
};
const md = (text) => {
  const div = h("div");
  try { div.innerHTML = DOMPurify.sanitize(marked.parse(text || "")); } catch { div.textContent = text; }
  return div;
};
let busyN = 0, busyT = null;
const busy = (d) => { busyN = Math.max(0, busyN + d); clearTimeout(busyT); if (busyN) busyT = setTimeout(() => document.body.classList.add("busy"), 150); else document.body.classList.remove("busy"); };
const loading = (text = "載入緊…") => h("div", { class: "loading" }, h("span", { class: "spinner" }), text);
const api = async (path, body, { quiet } = {}) => {
  if (!quiet) busy(1);
  try {
    const r = await fetch(path, body === undefined ? {} : { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
    if (!r.ok) throw new Error((await r.json().catch(() => ({}))).error || r.statusText);
    return await r.json();
  } finally { if (!quiet) busy(-1); }
};
// Topic first, skill second: a free-text request without a chosen skill asks Claude to pick the skill and enter its process.
const ROUTE = "（先由你揀 skill：照 story-router 嘅判斷規則，揀最啱處理呢件事嘅 skill；第一句用白話講「我會用〈skill〉處理，因為…」，然後直接用嗰個 skill 嘅流程開始（要先讀嘅檔照讀）。如果有兩個或以上都合理、而且揀錯代價唔細，先用選項卡問我揀邊個流程。）\n\n";
const toast = (msg) => { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 2200); };
const store = { get: (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } }, set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} } };

const state = { tab: store.get("tab", "today"), live: [], past: [], current: null, index: null, views: [], tray: [], es: null };

// ---------------- theme ----------------
const applyTheme = () => { const t = store.get("theme", null); if (t) document.documentElement.dataset.theme = t; else delete document.documentElement.dataset.theme; };
applyTheme();
$("#theme-btn").onclick = () => {
  const dark = matchMedia("(prefers-color-scheme: dark)").matches;
  const cur = store.get("theme", null) || (dark ? "dark" : "light");
  store.set("theme", cur === "dark" ? "light" : "dark"); applyTheme();
};

// ---------------- index ----------------
async function loadIndex(fresh) {
  try {
    state.index = await api("/api/index" + (fresh ? "?fresh=1" : ""));
    const b = $("#banner");
    const errs = Object.keys(state.index.errors || {});
    if (state.index.protocol !== PROTOCOL) { b.textContent = `資料版本 ${state.index.protocol} 同網頁版本 ${PROTOCOL} 唔夾，部分畫面可能唔準。`; b.style.display = "block"; }
    else if (errs.length) { b.textContent = `以下畫面讀取失敗：${errs.join("、")}（其他畫面照常）`; b.style.display = "block"; }
    else b.style.display = "none";
  } catch (e) { toast("讀取專案索引失敗：" + e.message); }
}

// ---------------- sessions ----------------
async function refreshSessions() {
  try { Object.assign(state, await api("/api/sessions", undefined, { quiet: true })); } catch { return; }
  document.title = (state.live.some((s) => s.pending) ? "🙋 " : state.live.some((s) => s.status === "running") ? "⏳ " : "") + "Haruka Workbench";
  const list = $("#session-list");
  list.replaceChildren(
    h("div", { class: "section-title" }, "進行中"),
    ...(state.live.length ? state.live.map((s) => h("div", { class: "sess" + (state.current?.id === s.id ? " active" : ""), onclick: () => openLive(s.id) },
      h("span", { class: "dot " + s.status }), h("span", { class: "t", title: s.title }, s.title),
      s.pending ? h("span", { class: "badge", title: "等你回覆" }, s.pending) : null))
      : [h("div", { class: "small muted", style: "padding:4px 10px" }, "未有，撳上面開新 task")]),
    h("div", { class: "section-title" }, "以前嘅 session"),
    ...state.past.slice(0, 30).map((p) => h("div", { class: "sess" + (state.current?.past === p.sessionId ? " active" : ""), onclick: () => openPast(p) },
      h("span", { class: "dot" }), h("span", { class: "t", title: p.title }, p.title))),
  );
  const pending = state.live.reduce((n, s) => n + (s.pending || 0), 0);
  document.title = (pending ? `(${pending}) ` : "") + "Haruka Workbench";
  const count = $('[data-tab="chat"] .count');
  if (count) { count.textContent = pending; count.style.display = pending ? "" : "none"; }
}

async function newSession(text, title, task) {
  const t = title || (text ? text.replace(/```[\s\S]*$/, "").trim().slice(0, 28) : "新 task");
  const { id } = await api("/api/sessions", { title: t, text, task, model: store.get("model", "") || undefined, agentCap: store.get("agentCap", undefined) });
  await refreshSessions();
  openLive(id);
  return id;
}

// 「繼續」：開緊就跳去；以前開過就接返舊對話；未開過就開新對話叫 Claude 先交代進度。
async function continueTask(task) {
  const sid = state.links?.[task.id] || (/^[0-9a-f-]{36}$/.test(task.session) ? task.session : null);
  const live = state.live.find((s) => s.status !== "closed" && (s.taskId === task.id || (sid && s.sdkSessionId === sid)));
  if (live) return openLive(live.id);
  if (sid) {
    const { id } = await api("/api/sessions", { title: task.task.slice(0, 28), resume: sid, task: task.id, model: store.get("model", "") || undefined });
    await refreshSessions();
    return openLive(id);
  }
  const files = task.files.map((f) => "`" + f + "`").join("、") || "（未列）";
  return newSession(`繼續 task ${task.id}「${task.task}」。請先讀 TASK_BOARD.md 呢行同相關文件（${files}），用白話話我知：做到邊、下一步係咩、有冇要我決定。講完就繼續做（要我決定嘅就用選項卡問我）。`, task.task.slice(0, 28), task.id);
}
const taskSession = (task) => {
  const sid = state.links?.[task.id];
  return state.live.find((s) => s.status !== "closed" && (s.taskId === task.id || (sid && s.sdkSessionId === sid)));
};

function openLive(id) {
  if (state.tab === "chat" && state.current?.id === id) return refreshSessions(); // same chat already on screen
  state.current = { id };
  switchTab("chat");
  refreshSessions();
}

async function openPast(p) {
  state.current = { past: p.sessionId, title: p.title };
  switchTab("chat");
  refreshSessions();
}

async function sendToClaude(text) {
  if (state.current?.id && state.live.find((s) => s.id === state.current.id && s.status !== "closed")) {
    await api(`/api/sessions/${state.current.id}/message`, { text });
    if (state.tab !== "chat") switchTab("chat"); // already showing this chat: the event stream adds the message, no full re-render
  } else await newSession(text);
}

// ---------------- chat ----------------
const cardCache = {};
async function loadCard(type) {
  if (!(type in cardCache)) cardCache[type] = import(`./cards/${type}.js`).catch(() => null);
  return cardCache[type];
}

// Text with ```ui:<type> {json}``` blocks: known types render as cards, unknown ones stay as markdown.
// long auto-generated openers (paths, instructions) clamp to 3 lines; click to expand
const userMsg = (t) => (t = t.startsWith(ROUTE) ? "🧭 " + t.slice(ROUTE.length) : t, h("div", { class: "msg user" + (t.length > 160 ? " clamped" : ""), title: t.length > 160 ? "撳一下睇晒" : "", onclick: (e) => e.currentTarget.classList.remove("clamped") }, t));

function renderAssistant(text, ctx) {
  const wrap = h("div", { class: "msg assistant" });
  const body = h("div", { class: "msg-body" }), cards = h("div");
  const re = /```ui:([\w-]+)\s*\n([\s\S]*?)```/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) body.append(md(text.slice(last, m.index)));
    const slot = h("div");
    cards.append(slot);
    const [type, raw] = [m[1], m[2]];
    loadCard(type).then((mod) => {
      let data;
      try { data = JSON.parse(raw); } catch { data = null; }
      if (mod?.render && data) slot.replaceWith(mod.render(data, ctx));
      else slot.replaceWith(md("```" + type + "\n" + raw + "```"));
    });
    last = re.lastIndex;
  }
  if (last < text.length) body.append(md(text.slice(last)));
  wrap.append(body, cards);
  if (state.index) linkify(body, state.index, openEntity); // file / character mentions open their drawer
  // long replies: show the opening (= the conclusion, per protocol) and fold the rest
  // decide by text size, not layout: measuring every message forces a reflow per message and stalls long chats
  const prose = text.replace(re, ""), plainLen = prose.length, lines = prose.split("\n").length;
  if (plainLen > 700 || lines > 16) {
    body.classList.add("folded");
    const lead = body.querySelector("p,li")?.textContent || "";
    const bar = h("div", { class: "fold-bar" },
      h("button", { class: "small", onclick: () => { const f = body.classList.toggle("folded"); bar.firstChild.textContent = f ? "睇晒 ▾" : "收埋 ▴"; } }, "睇晒 ▾"),
      lead ? h("button", { class: "small", title: "讀出結論", onclick: () => { const u = new SpeechSynthesisUtterance(lead); u.lang = "zh-HK"; speechSynthesis.cancel(); speechSynthesis.speak(u); } }, "🔊") : null);
    body.after(bar);
  }
  return wrap;
}

function askCard(ev, sid, answered) {
  const note = h("span", { class: "note" }, answered ? "✔ 已回覆" : "揀好就撳送出；可以混合，或者喺「其他」自己寫");
  const form = h("div", { class: "card ask" + (answered ? " answered" : "") },
    h("div", { class: "ask-head" }, h("span", { class: "mascot" }, "🌸"), h("div", { class: "speech" }, "Claude 想你決定")));
  const getters = ev.questions.map((q, qi) => {
    const name = `q${ev.requestId}-${qi}`;
    const other = h("input", { type: "text", class: "other", placeholder: "其他／自己寫（可留空）" });
    const opts = q.options.map((o, i) => h("label", { class: "opt" },
      h("input", { type: q.multiSelect ? "checkbox" : "radio", name, value: o.label }),
      h("span", { class: "key" }, i + 1),
      h("div", {}, h("div", { class: "l" }, o.label), o.description ? h("div", { class: "d" }, o.description) : null)));
    form.append(h("div", { class: "q" }, h("div", { class: "hd" }, (q.header || "") + (q.multiSelect ? " · 可以揀多個" : "")), h("div", { class: "qt" }, q.question), ...opts, other));
    return () => {
      const picked = [...form.querySelectorAll(`input[name="${name}"]:checked`)].map((i) => i.value);
      if (other.value.trim()) picked.push(other.value.trim());
      return [q.question, q.multiSelect ? picked : picked.join("，")];
    };
  });
  const free = h("textarea", { rows: 2, placeholder: "或者唔揀，直接講你想點（會取代上面嘅選擇）" });
  form.append(h("div", { class: "free" }, free));
  const send = h("button", { class: "primary", onclick: async () => {
    const result = free.value.trim()
      ? { answers: {}, response: free.value.trim() }
      : { answers: Object.fromEntries(getters.map((g) => g()).filter(([, v]) => v.length)) };
    if (!free.value.trim() && Object.keys(result.answers).length < ev.questions.length) return toast("仲有問題未答（或者喺最底直接講）");
    send.disabled = true;
    await api(`/api/sessions/${sid}/answer`, { requestId: ev.requestId, result });
  } }, "送出");
  form.append(h("div", { class: "footer" }, note, send));
  form.markAnswered = () => { note.textContent = "✔ 已回覆"; };
  if (answered) form.querySelectorAll("input,textarea,button").forEach((e) => (e.disabled = true));
  return form;
}

function approveCard(ev, sid, answered) {
  const reason = h("input", { type: "text", placeholder: "唔批嘅原因（可留空）", style: "flex:1" });
  const decide = async (allow) => {
    await api(`/api/sessions/${sid}/answer`, { requestId: ev.requestId, result: allow ? { behavior: "allow" } : { behavior: "deny", message: reason.value || "作者唔批" } });
  };
  const body = ev.tool === "ExitPlanMode" ? md(ev.input.plan || "") : h("pre", {}, ev.input.command || JSON.stringify(ev.input, null, 2));
  const card = h("div", { class: "card approve" + (answered ? " answered" : "") },
    h("h4", {}, ev.tool === "ExitPlanMode" ? "Claude 想開始執行呢個計劃" : ev.tool === "Agent" ? "🤖 Claude 想派多一個助手（超出你定嘅上限）" : "呢個指令要你批准"), body,
    h("div", { class: "actions" }, reason, h("button", { onclick: () => decide(false) }, "唔批"), h("button", { class: "primary", onclick: () => decide(true) }, "批准")));
  if (answered) card.querySelectorAll("input,button").forEach((e) => (e.disabled = true));
  return card;
}

function chatShell(title, live) {
  const box = h("div", { id: "chat" });
  const head = h("div", { id: "chat-head" }, h("span", { class: "title" }, title));
  const msgs = h("div", { id: "messages" });
  box.append(head, msgs);
  if (live) {
    const ta = h("textarea", { rows: 2, placeholder: "回覆 Claude…（Enter 送出，Shift+Enter 換行）" });
    const send = async () => { const t = ta.value.trim(); if (!t) return; ta.value = ""; await api(`/api/sessions/${state.current.id}/message`, { text: t }).catch((e) => toast(e.message)); };
    ta.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey && !e.isComposing) { e.preventDefault(); send(); } });
    head.append(h("button", { onclick: () => api(`/api/sessions/${state.current.id}/interrupt`, {}) }, "停"));
    const quick = (text) => api(`/api/sessions/${state.current.id}/message`, { text }).catch((e) => toast(e.message));
    box.append(h("div", { id: "composer" },
      h("div", { class: "quick-row" }, ...(state.config?.quick_replies || []).map((q) => h("button", { class: "quick", onclick: () => quick(q) }, q))),
      h("div", { class: "row" }, micButton(h, ta), ta, h("button", { class: "primary", onclick: send }, "送出"))));
  }
  return { box, msgs, head };
}

function topicBox() {
  const ta = h("textarea", { rows: 3, placeholder: "例如：「Demo 最尾基地嗰場想再暖啲，但唔想破壞操怕影相嘅設定」" });
  const go = () => { const t = ta.value.trim(); if (t) newSession(ROUTE + t, t.slice(0, 24)); };
  ta.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey && !e.isComposing) { e.preventDefault(); go(); } });
  return h("div", { class: "topic-box card" }, h("div", { style: "display:flex;gap:8px" }, micButton(h, ta), ta), h("div", { class: "actions" }, h("button", { class: "primary", onclick: go }, "🧭 開始（AI 揀 skill）")));
}

function renderChat(el) {
  state.es?.close();
  const cur = state.current;
  if (!cur) {
    const tile = (s, onclick, sub) => h("div", { class: "todo-row" + (s.pending ? " orange" : ""), onclick },
      h("span", { class: "ic" }, s.pending ? "🙋" : "💬"), h("div", { class: "tx" }, s.title, h("div", { class: "small muted" }, sub)));
    el.replaceChildren(h("div", { class: "empty" }, h("div", { class: "mascot" }, "🌸"), h("h2", {}, "今日想傾咩？"),
      h("p", { class: "muted" }, "直接講想做咩，Claude 會自己揀用邊個 skill 再開始；或者揀一個 session 繼續。"),
      topicBox(),
      h("button", { onclick: () => launch() }, "＋ 自己揀 skill 開新 task"),
      h("div", { class: "sess-tiles" },
        ...state.live.map((s) => tile(s, () => openLive(s.id), s.pending ? "等緊你回覆" : "進行中")),
        ...state.past.slice(0, 8).map((p) => tile(p, () => openPast(p), "以前嘅 session")))));
    return;
  }
  if (cur.past) return renderPast(el, cur);
  const s = state.live.find((x) => x.id === cur.id) || { title: "" };
  const v = chatView(el, { title: s.title, sid: cur.id, model: s.model, taskId: s.taskId, live: true });
  const es = new EventSource(`/api/sessions/${cur.id}/events`);
  state.es = es;
  es.onopen = v.reset;
  es.onmessage = ({ data }) => v.handle(JSON.parse(data));
}

// One chat view for live and saved conversations: both are fed the same events (saved ones come from /api/history).
function chatView(el, { title, sid, model, taskId, live }) {
  const { box, msgs, head } = chatShell(title, live);
  const ctx = makeCtx();
  const task = (state.index?.tasks || []).find((t) => t.id === taskId || (title && t.task.startsWith(title.replace(/…$/, ""))));
  const prog = createProgress({ h, sendToClaude: ctx.sendToClaude, taskName: task?.task, openEntity, openFile, openDiscuss, fileId: (p) => fileId(state.index, p), layers: state.config?.layers || [], choicesOf: (n) => (_launcher ||= createLauncher(makeCtx())).choicesOf(n) });
  const wrap = h("div", { class: "chat-wrap" }, box, prog.el);
  head.prepend(h("button", { class: "small", title: "返對話列表", onclick: () => { state.current = null; renderTab(); } }, "←"));
  const before = head.lastChild;
  head.insertBefore(h("button", { class: "pp-toggle", onclick: () => wrap.classList.toggle("show-panel") }, "📍 進度"), before);
  head.insertBefore(h("button", { class: "small", title: "將今次對話嘅題目交畀幾個 AI 角色自己傾（先去設定頁，唔會自動開始）", onclick: () => openDiscuss({
    topic: title || "", from: live ? sid : "", context: `由對話「${title}」帶過嚟`, links: prog.fileIds().map((id) => ({ id, title: state.index.entities[id].title, file: id })),
  }) }, "🤖 交畀 AI 傾"), before);
  if (live) {
    head.insertBefore(h("button", { class: "small", title: "用今次對話改進用過嘅 skill", onclick: () => {
      const used = prog.skills().join("、") || "（未偵測到，請你自己判斷用過邊啲）";
      api(`/api/sessions/${sid}/message`, { text: `請回顧今次對話，用嚟改進 skill（今次用過：${used}）。搵出：①我要糾正你／重複講嘅位；②你走錯步、問錯問題、或者答得唔夠白話嘅位；③skill 規則冇講清、令你做錯嘅位。每點講清係邊個 skill、邊段、建議點改（附改動前後），同埋點解咁改唔會整爛其他規則。先用選項卡問我批邊幾條，批咗先改 SKILL.md（.claude 同 .agents 兩份都要同步），改完跑相關 validator，再記入 SESSION_LEDGER。` }).catch((e) => toast(e.message));
    } }, "🛠️ 改進 skill"), before);
    const me = state.live.find((x) => x.id === sid) || {};
    const caps = state.config?.agent_caps || [];
    const capSel = h("select", { title: "今次對話最多可以派幾多個助手（sub-agent）；超出會彈卡問你", onchange: (e) => api(`/api/sessions/${sid}/agents`, { cap: +e.target.value }).then(() => toast(`助手上限改咗做 ${e.target.value}`)).catch((x) => toast(x.message)) },
      ...caps.map((c) => h("option", { value: c.cap, title: c.why, selected: c.cap === (me.agentCap ?? state.config?.agent_cap_default) }, `🤖 助手：${c.label}`)));
    head.insertBefore(capSel, before);
    modelSelect(model, async (m) => { await api(`/api/sessions/${sid}/model`, { model: m }).then(() => toast(m ? `之後用 ${m}` : "之後用預設 model")).catch((e) => toast(e.message)); }).then((sel) => head.insertBefore(sel, head.querySelector(".pp-toggle")));
  }
  el.replaceChildren(wrap);
  let streamEl = null;
  const answered = new Set();
  const cards = {};
  // 🌸 thinking indicator: always the last thing in the chat while Claude works, with what it is doing and for how long
  const thinkText = h("span", { class: "think-text" }, "諗緊");
  const thinkTime = h("span", { class: "think-time" });
  const thinking = h("div", { class: "msg thinking" }, h("span", { class: "think-dots" }, h("i"), h("i"), h("i")), thinkText, thinkTime);
  let thinkStart = 0, thinkTimer = null;
  const think = (on, what) => {
    if (what) thinkText.textContent = what;
    if (on && !thinking.isConnected) { thinkStart ||= Date.now(); msgs.append(thinking); thinkTimer ||= setInterval(() => (thinkTime.textContent = ` · ${Math.round((Date.now() - thinkStart) / 1000)} 秒`), 1000); }
    if (!on) { thinking.remove(); clearInterval(thinkTimer); thinkTimer = null; thinkStart = 0; thinkTime.textContent = ""; thinkText.textContent = "諗緊"; }
    composer?.classList.toggle("busy", on);
  };
  const composer = box.querySelector("#composer");
  let running = false;
  const atBottom = () => msgs.scrollHeight - msgs.scrollTop - msgs.clientHeight < 80;
  const add = (node) => { const stick = atBottom(); msgs.append(node); if (thinking.isConnected) msgs.append(thinking); if (stick) msgs.scrollTop = msgs.scrollHeight; };
  const VERB = { Read: "讀緊", Edit: "改緊", Write: "寫緊", Grep: "搜尋緊", Glob: "搵緊檔", Bash: "執行緊", Agent: "派緊助手", WebSearch: "上網搵緊", WebFetch: "讀緊網頁", Skill: "用緊 skill" };

  const handle = (ev) => {
    prog.onEvent(ev);
    switch (ev.kind) {
      case "user": add(userMsg(ev.text)); break;
      case "delta":
        thinking.remove();
        if (!streamEl) { streamEl = h("div", { class: "msg assistant streaming" }); add(streamEl); }
        streamEl.textContent += ev.text; if (atBottom()) msgs.scrollTop = msgs.scrollHeight; break;
      case "text": {
        const node = renderAssistant(ev.text, ctx);
        if (streamEl) { streamEl.replaceWith(node); streamEl = null; } else add(node);
        if (running) think(true, "諗緊");
        break;
      }
      case "tool": {
        streamEl = null;
        const label = ev.input?.file_path || ev.input?.command || ev.input?.pattern || ev.input?.description || ev.input?.skill || "";
        const short = String(label).split(/[\\/]/).pop().slice(0, 100);
        const line = h("div", {}, `${ev.name} ${short}`);
        const last = [...msgs.children].filter((x) => x !== thinking).pop();
        if (last?.classList.contains("tools")) {
          last._n += 1;
          last.querySelector(".tools-sum").textContent = `🔧 做咗 ${last._n} 步`;
          last.querySelector(".tools-list").append(line);
        } else {
          const tb = h("div", { class: "msg tools", onclick: (e) => e.currentTarget.classList.toggle("open") }, h("span", { class: "tools-sum" }, "🔧 做咗 1 步"), h("div", { class: "tools-list" }, line));
          tb._n = 1;
          add(tb);
        }
        if (running) think(true, `${VERB[ev.name] || ev.name} ${short}`.trim());
        break;
      }
      case "ask": {
        think(false);
        const card = (cards[ev.requestId] = askCard(ev, sid, !live || answered.has(ev.requestId)));
        if (!live) card.querySelector(".note").textContent = "未答——撳上面「繼續呢個 session」再答"; // saved chat: an 'answered' event below flips this to ✔
        add(card);
        break;
      }
      case "approve": think(false); cards[ev.requestId] = approveCard(ev, sid, !live || answered.has(ev.requestId)); add(cards[ev.requestId]); break;
      case "answered":
        answered.add(ev.requestId);
        cards[ev.requestId]?.classList.add("answered");
        cards[ev.requestId]?.markAnswered?.();
        cards[ev.requestId]?.querySelectorAll("input,textarea,button").forEach((e) => (e.disabled = true));
        break;
      case "result": streamEl = null; add(h("div", { class: "msg result" }, `完成 · ${(ev.ms / 1000).toFixed(0)} 秒`)); if (live) loadIndex(true); break;
      case "error": add(h("div", { class: "msg error" }, "出錯：" + ev.message)); break;
      case "status": running = ev.status === "running"; think(running); if (live) refreshSessions(); break;
      case "model": add(h("div", { class: "msg result" }, `🔀 由呢度開始用 ${ev.model || "預設 model"}`)); break;
      case "note": add(h("div", { class: "msg result" }, ev.text)); break;
      case "agents": { const sel = head.querySelector("select[title^='今次對話最多']"); if (sel) sel.title = `已派 ${ev.used} 個／上限 ${ev.cap}；超出會彈卡問你`; if (live) add(h("div", { class: "msg result" }, `🤖 派咗第 ${ev.used} 個助手（上限 ${ev.cap}）`)); break; }
    }
  };
  const reset = () => { msgs.replaceChildren(); streamEl = null; answered.clear(); prog.reset(); think(false); running = false; };
  return { handle, reset, msgs, head };
}

async function renderPast(el, cur) {
  const v = chatView(el, { title: cur.title, sid: null, live: false });
  v.head.append(h("button", { class: "primary", onclick: async (e) => {
    e.currentTarget.disabled = true; e.currentTarget.textContent = "接緊…";
    const { id } = await api("/api/sessions", { title: cur.title, resume: cur.past });
    await refreshSessions(); openLive(id);
  } }, "繼續呢個 session"));
  v.msgs.append(loading("讀緊對話紀錄…"));
  const events = await api(`/api/history/${cur.past}`).catch(() => []);
  if (state.current?.past !== cur.past) return; // switched away while loading
  v.reset();
  events.forEach(v.handle);
  if (!events.length) v.msgs.append(h("div", { class: "msg result" }, "呢個 session 冇可顯示嘅內容。"));
}

// ---------------- intents (all edits go through Claude) ----------------
function sendIntent(intent) {
  state.tray.push(intent);
  renderTray();
}
function renderTray() {
  const tray = $("#tray");
  tray.classList.toggle("show", state.tray.length > 0);
  $("#tray-list").replaceChildren(...state.tray.map((i) => h("li", {}, i.note)));
}
// Views keep their optimistic edits under state._* keys; dropping the tray drops them too.
const resetDrafts = () => { for (const k of Object.keys(state)) if (k.startsWith("_")) delete state[k]; };
$("#tray-clear").onclick = () => { state.tray = []; resetDrafts(); renderTray(); renderTab(); };
$("#tray-send").onclick = async () => {
  const items = state.tray;
  const extra = $("#tray-note").value.trim();
  const text = [
    "作者喺 Workbench 做咗以下改動，請按 web-ui-protocol 處理（照該層 pipeline 同 gate；改之前講清下游影響，需要批核就問我）：",
    ...items.map((i, n) => `${n + 1}. ${i.note}`),
    extra ? `\n補充：${extra}` : "",
    "\n```ui:intent\n" + JSON.stringify({ protocol: PROTOCOL, intents: items }, null, 1) + "\n```",
  ].join("\n");
  state.tray = []; resetDrafts(); $("#tray-note").value = ""; renderTray();
  await sendToClaude(text);
  toast("已送出畀 Claude");
};

// ---------------- drawer ----------------
let drawerPath = null;
async function openFile(path) {
  drawerPath = path;
  $("#drawer-path").textContent = path;
  $("#drawer-chat").style.display = "";
  $("#drawer-body").replaceChildren(h("div", { class: "muted" }, "讀緊…"));
  $("#drawer").classList.add("open");
  const r = await fetch(`/api/file?path=${encodeURIComponent(path)}`);
  const text = r.ok ? await r.text() : "搵唔到呢個檔。";
  const body = md(text.length > 400000 ? text.slice(0, 400000) + "\n\n…（太長，只顯示前段）" : text);
  body.classList.add("msg");
  $("#drawer-body").replaceChildren(body);
}
$("#drawer-close").onclick = () => $("#drawer").classList.remove("open");
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  const lb = [...document.querySelectorAll(".lightbox")].pop();
  if (lb) return lb.remove();
  const modal = document.querySelector(".search-modal.show");
  if (modal) return modal.classList.remove("show");
  $("#drawer").classList.remove("open");
});
$("#drawer-chat").onclick = () => { $("#drawer").classList.remove("open"); newSession(`我想傾 \`${drawerPath}\` 呢份文件。請先讀佢，再話我知佢而家嘅狀態同有咩未決。`); };

// ---------------- views ----------------
let _entityUI;
const entityUI = () => (_entityUI ||= createEntityUI(makeCtx()));
const openEntity = (id) => entityUI().open(id);
// prefilled auto-discussion setup (from a chat, a ui:next suggestion, or a skill); the author still presses start
function openDiscuss(draft = {}) {
  state.discuss = { id: null, draft: { topic: "", range: "", stop: "有 2–3 個成形候選＋推薦", context: "", links: [], skill: "", skillChoice: "", ...draft } };
  switchTab("discuss");
}
let _launcher;
const launch = (opts) => (_launcher ||= createLauncher(makeCtx())).open(opts);
let _smart;
const start = (item) => (_smart ||= createSmartStart(makeCtx())).open(item);

// Models this account can use (asked from a live session; aliases otherwise).
let _models;
const models = async () => (_models ||= await api("/api/models").catch(() => [{ value: "opus", label: "Opus" }, { value: "sonnet", label: "Sonnet" }, { value: "haiku", label: "Haiku" }]));
async function modelSelect(current, onchange) {
  const sel = h("select", { class: "model-select", title: "呢個對話用邊個 model", onchange: (e) => onchange(e.target.value) },
    h("option", { value: "" }, "預設 model"), ...(await models()).map((m) => h("option", { value: m.value, selected: m.value === current, title: m.description || "" }, m.label)));
  return sel;
}

function makeCtx() {
  return { h, md, api, toast, state, sendIntent, sendToClaude, openFile, openLive, newSession, switchTab, continueTask, taskSession, openEntity, openPast: (sessionId, title) => openPast({ sessionId, title }), openDiscuss, ROUTE, launch, start, plain: (text, cls) => plain(h, text, cls), strip, useSkill: (skill, prompt, title) => newSession(skill ? `請用 \`${skill}\` skill：${prompt}` : prompt, (title || prompt).slice(0, 24)), mic: (el) => micButton(h, el), search: () => entityUI().search(), refresh: async () => { await loadIndex(); renderTab(); } };
}

function switchTab(tab) {
  state.tab = tab;
  store.set("tab", tab);
  document.querySelectorAll("#tabs [data-tab]").forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
  renderTab();
}

// Help text stays out of the way: page hints collapse behind an ⓘ beside the page title.
function tidy(box) {
  const title = box.querySelector("h2");
  const hints = [...box.querySelectorAll(".hint")];
  if (!title || !hints.length || title.querySelector(".info-btn")) return;
  hints.forEach((x) => x.classList.add("hidden-hint"));
  title.append(h("button", { class: "info-btn", title: "呢頁點用", onclick: () => hints.forEach((x) => x.classList.toggle("hidden-hint")) }, "ⓘ"));
}

let renderSeq = 0;
async function renderTab() {
  const el = $("#view");
  const seq = ++renderSeq;
  if (state.tab === "chat") return renderChat(el);
  state.es?.close();
  const v = state.views.find((x) => x.id === state.tab) || state.views[0];
  el.replaceChildren(loading(`載入緊「${v.name}」…`));
  if (!state.index) await loadIndex();
  try {
    const mod = await import(`./views/${v.id}.js`);
    if (seq !== renderSeq) return; // user already moved on
    const box = h("div", { class: "view-pad" });
    const ld = loading(`載入緊「${v.name}」…`);
    el.replaceChildren(ld, box);
    await mod.render(box, makeCtx());
    ld.remove();
    tidy(box);
  } catch (e) {
    el.replaceChildren(h("div", { class: "view-pad" }, h("div", { class: "card" }, h("h4", {}, `「${v.name}」畫面出錯`), h("pre", { class: "small" }, String(e.stack || e)))));
  }
}

async function init() {
  state.config = await api("/api/config").catch(() => ({})); // lists that used to be hard-coded (tools/workbench/ui_config.json)
  state.views = (await (await fetch("views.json")).json()).sort((a, b) => a.order - b.order);
  const item = (id, icon, name) => h("button", { class: "nav-item", "data-tab": id, onclick: () => switchTab(id) },
    h("span", { class: "ic" }, icon), h("span", { class: "lbl" }, name), id === "chat" ? h("span", { class: "count", style: "display:none" }) : null);
  const [first, ...rest] = state.views;
  const groups = [];
  for (const v of rest) { const g = groups.find((x) => x.name === (v.group || "")); g ? g.items.push(v) : groups.push({ name: v.group || "", items: [v] }); }
  $("#nav").append(item(first.id, first.icon || "•", first.name), item("chat", "💬", "對話"),
    ...groups.flatMap((g) => [g.name ? h("div", { class: "nav-group" }, g.name) : null, ...g.items.map((v) => item(v.id, v.icon || "•", v.name))].filter(Boolean)));
  $("#new-btn").onclick = () => launch();
  $("#search-btn").onclick = () => entityUI().search();
  modelSelect(store.get("model", ""), (m) => { store.set("model", m); toast(m ? `新對話預設用 ${m}` : "新對話用預設 model"); }).then((sel) => { sel.title = "新開對話預設用邊個 model"; $("#model-default").replaceWith(sel); sel.id = "model-default"; });
  await Promise.all([refreshSessions(), loadIndex()]);
  const [hashTab, hashId] = location.hash.slice(1).split("/");
  if (hashTab) state.tab = hashTab; // bookmarkable: /#beats, /#docmap, /#chat/<session id>
  if (hashId) state.current = { id: hashId };
  if (state.tab === "chat" && !state.current) state.tab = "today";
  switchTab(state.tab);
  setInterval(refreshSessions, 3000);
  setInterval(() => { if (state.tab !== "chat" && !document.hidden) loadIndex(); }, 30000);
}
init();
