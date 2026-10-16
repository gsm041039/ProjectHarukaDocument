// Haruka Workbench shell: sessions, chat, cards, views, intent tray, file drawer.
// Extension points: views.json + views/<id>.js (export render(el, ctx)); cards/<type>.js (export render(data, ctx)).
import { createProgress } from "./progress.js";
import { createEntityUI } from "./entity.js";
import { createLauncher } from "./launcher.js";
import { micButton } from "./mic.js";
import { createSmartStart } from "./smartstart.js";

// One-click replies so the author rarely needs to type.
const QUICK_REPLIES = ["好，照你建議做", "繼續", "講詳細啲", "用白話再講一次", "唔啱，再諗過", "畀我睇候選", "總結做到邊", "停一停"];
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
const api = async (path, body) => {
  const r = await fetch(path, body === undefined ? {} : { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
  if (!r.ok) throw new Error((await r.json().catch(() => ({}))).error || r.statusText);
  return r.json();
};
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
  try { Object.assign(state, await api("/api/sessions")); } catch { return; }
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
  const { id } = await api("/api/sessions", { title: t, text, task, model: store.get("model", "") || undefined });
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
    switchTab("chat");
  } else await newSession(text);
}

// ---------------- chat ----------------
const cardCache = {};
async function loadCard(type) {
  if (!(type in cardCache)) cardCache[type] = import(`./cards/${type}.js`).catch(() => null);
  return cardCache[type];
}

// Text with ```ui:<type> {json}``` blocks: known types render as cards, unknown ones stay as markdown.
function renderAssistant(text, ctx) {
  const wrap = h("div", { class: "msg assistant" });
  const re = /```ui:([\w-]+)\s*\n([\s\S]*?)```/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) wrap.append(md(text.slice(last, m.index)));
    const slot = h("div");
    wrap.append(slot);
    const [type, raw] = [m[1], m[2]];
    loadCard(type).then((mod) => {
      let data;
      try { data = JSON.parse(raw); } catch { data = null; }
      if (mod?.render && data) slot.replaceWith(mod.render(data, ctx));
      else slot.replaceWith(md("```" + type + "\n" + raw + "```"));
    });
    last = re.lastIndex;
  }
  if (last < text.length) wrap.append(md(text.slice(last)));
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
    h("h4", {}, ev.tool === "ExitPlanMode" ? "Claude 想開始執行呢個計劃" : "呢個指令要你批准"), body,
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
      h("div", { class: "quick-row" }, ...QUICK_REPLIES.map((q) => h("button", { class: "quick", onclick: () => quick(q) }, q))),
      h("div", { class: "row" }, micButton(h, ta), ta, h("button", { class: "primary", onclick: send }, "送出"))));
  }
  return { box, msgs, head };
}

function renderChat(el) {
  state.es?.close();
  const cur = state.current;
  if (!cur) {
    const tile = (s, onclick, sub) => h("div", { class: "todo-row" + (s.pending ? " orange" : ""), onclick },
      h("span", { class: "ic" }, s.pending ? "🙋" : "💬"), h("div", { class: "tx" }, s.title, h("div", { class: "small muted" }, sub)));
    el.replaceChildren(h("div", { class: "empty" }, h("div", { class: "mascot" }, "🌸"), h("h2", {}, "今日想傾咩？"),
      h("p", { class: "muted" }, "揀一個 session 繼續，或者開個新 task。"),
      h("button", { class: "primary", onclick: () => launch() }, "＋ 開新 task"),
      h("div", { class: "sess-tiles" },
        ...state.live.map((s) => tile(s, () => openLive(s.id), s.pending ? "等緊你回覆" : "進行中")),
        ...state.past.slice(0, 8).map((p) => tile(p, () => openPast(p), "以前嘅 session")))));
    return;
  }
  if (cur.past) return renderPast(el, cur);
  const s = state.live.find((x) => x.id === cur.id) || { title: "" };
  const { box, msgs, head } = chatShell(s.title, true);
  const ctx = makeCtx();
  const task = (state.index?.tasks || []).find((t) => t.id === s.taskId || (s.title && t.task.startsWith(s.title.replace(/…$/, ""))));
  const prog = createProgress({ h, sendToClaude: ctx.sendToClaude, taskName: task?.task, choicesOf: (n) => (_launcher ||= createLauncher(makeCtx())).choicesOf(n) });
  const wrap = h("div", { class: "chat-wrap" }, box, prog.el);
  head.insertBefore(h("button", { class: "pp-toggle", onclick: () => wrap.classList.toggle("show-panel") }, "📍 進度"), head.lastChild);
  head.insertBefore(h("button", { class: "small", title: "用今次對話改進用過嘅 skill", onclick: () => {
    const used = prog.skills().join("、") || "（未偵測到，請你自己判斷用過邊啲）";
    api(`/api/sessions/${cur.id}/message`, { text: `請回顧今次對話，用嚟改進 skill（今次用過：${used}）。搵出：①我要糾正你／重複講嘅位；②你走錯步、問錯問題、或者答得唔夠白話嘅位；③skill 規則冇講清、令你做錯嘅位。每點講清係邊個 skill、邊段、建議點改（附改動前後），同埋點解咁改唔會整爛其他規則。先用選項卡問我批邊幾條，批咗先改 SKILL.md（.claude 同 .agents 兩份都要同步），改完跑相關 validator，再記入 SESSION_LEDGER。` }).catch((e) => toast(e.message));
  } }, "🛠️ 改進 skill"), head.lastChild);
  modelSelect(s.model, async (m) => { await api(`/api/sessions/${cur.id}/model`, { model: m }).then(() => toast(m ? `之後用 ${m}` : "之後用預設 model")).catch((e) => toast(e.message)); }).then((sel) => head.insertBefore(sel, head.querySelector(".pp-toggle")));
  el.replaceChildren(wrap);
  let streamEl = null;
  const answered = new Set();
  const cards = {};
  const atBottom = () => msgs.scrollHeight - msgs.scrollTop - msgs.clientHeight < 80;
  const add = (node) => { const stick = atBottom(); msgs.append(node); if (stick) msgs.scrollTop = msgs.scrollHeight; };

  const es = new EventSource(`/api/sessions/${cur.id}/events`);
  state.es = es;
  es.onopen = () => { msgs.replaceChildren(); streamEl = null; answered.clear(); prog.reset(); };
  es.onmessage = ({ data }) => {
    const ev = JSON.parse(data);
    prog.onEvent(ev);
    switch (ev.kind) {
      case "user": add(h("div", { class: "msg user" }, ev.text)); break;
      case "delta":
        if (!streamEl) { streamEl = h("div", { class: "msg assistant streaming" }); add(streamEl); }
        streamEl.textContent += ev.text; if (atBottom()) msgs.scrollTop = msgs.scrollHeight; break;
      case "text": {
        const node = renderAssistant(ev.text, ctx);
        if (streamEl) { streamEl.replaceWith(node); streamEl = null; } else add(node);
        break;
      }
      case "tool": {
        streamEl = null;
        const label = ev.input?.file_path || ev.input?.command || ev.input?.pattern || ev.input?.description || ev.input?.skill || "";
        const line = h("div", {}, `${ev.name} ${String(label).split(/[\\/]/).pop().slice(0, 100)}`);
        const last = msgs.lastElementChild;
        if (last?.classList.contains("tools")) {
          last._n += 1;
          last.querySelector(".tools-sum").textContent = `🔧 做咗 ${last._n} 步`;
          last.querySelector(".tools-list").append(line);
        } else {
          const box = h("div", { class: "msg tools", onclick: (e) => e.currentTarget.classList.toggle("open") }, h("span", { class: "tools-sum" }, "🔧 做咗 1 步"), h("div", { class: "tools-list" }, line));
          box._n = 1;
          add(box);
        }
        break;
      }
      case "ask": cards[ev.requestId] = askCard(ev, cur.id, answered.has(ev.requestId)); add(cards[ev.requestId]); break;
      case "approve": cards[ev.requestId] = approveCard(ev, cur.id, answered.has(ev.requestId)); add(cards[ev.requestId]); break;
      case "answered":
        answered.add(ev.requestId);
        cards[ev.requestId]?.classList.add("answered");
        cards[ev.requestId]?.markAnswered?.();
        cards[ev.requestId]?.querySelectorAll("input,textarea,button").forEach((e) => (e.disabled = true));
        break;
      case "result": streamEl = null; add(h("div", { class: "msg result" }, `完成 · ${(ev.ms / 1000).toFixed(0)} 秒`)); loadIndex(true); break;
      case "error": add(h("div", { class: "msg error" }, "出錯：" + ev.message)); break;
      case "status": refreshSessions(); break;
      case "model": add(h("div", { class: "msg result" }, `🔀 由呢度開始用 ${ev.model || "預設 model"}`)); break;
    }
  };
}

async function renderPast(el, cur) {
  const { box, msgs, head } = chatShell(cur.title, false);
  head.append(h("button", { class: "primary", onclick: async () => {
    const { id } = await api("/api/sessions", { title: cur.title, resume: cur.past });
    await refreshSessions(); openLive(id);
  } }, "繼續呢個 session"));
  el.replaceChildren(box);
  msgs.append(h("div", { class: "msg result" }, "讀緊紀錄…"));
  const list = await api(`/api/history/${cur.past}`).catch(() => []);
  msgs.replaceChildren();
  const ctx = makeCtx();
  for (const m of list) {
    const c = m.message?.content;
    const texts = typeof c === "string" ? [c] : (c || []).filter((b) => b.type === "text").map((b) => b.text);
    for (const t of texts) {
      if (!t.trim() || t.startsWith("<")) continue;
      msgs.append(m.type === "user" ? h("div", { class: "msg user" }, t) : renderAssistant(t, ctx));
    }
  }
  if (!msgs.children.length) msgs.append(h("div", { class: "msg result" }, "呢個 session 冇可顯示嘅文字。"));
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
$("#drawer-chat").onclick = () => { $("#drawer").classList.remove("open"); newSession(`我想傾 \`${drawerPath}\` 呢份文件。請先讀佢，再話我知佢而家嘅狀態同有咩未決。`); };

// ---------------- views ----------------
let _entityUI;
const entityUI = () => (_entityUI ||= createEntityUI(makeCtx()));
const openEntity = (id) => entityUI().open(id);
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
  return { h, md, api, toast, state, sendIntent, sendToClaude, openFile, openLive, newSession, switchTab, continueTask, taskSession, openEntity, launch, start, useSkill: (skill, prompt, title) => newSession(skill ? `請用 \`${skill}\` skill：${prompt}` : prompt, (title || prompt).slice(0, 24)), mic: (el) => micButton(h, el), search: () => entityUI().search(), refresh: async () => { await loadIndex(); renderTab(); } };
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

async function renderTab() {
  const el = $("#view");
  if (state.tab === "chat") return renderChat(el);
  state.es?.close();
  const v = state.views.find((x) => x.id === state.tab) || state.views[0];
  if (!state.index) await loadIndex();
  try {
    const mod = await import(`./views/${v.id}.js`);
    const box = h("div", { class: "view-pad" });
    el.replaceChildren(box);
    await mod.render(box, makeCtx());
    tidy(box);
  } catch (e) {
    el.replaceChildren(h("div", { class: "view-pad" }, h("div", { class: "card" }, h("h4", {}, `「${v.name}」畫面出錯`), h("pre", { class: "small" }, String(e.stack || e)))));
  }
}

async function init() {
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
