// 未完成事項：SESSION_LEDGER 入面所有未剔嘅 [ ]，加好耐冇郁嘅未決問題。
// 可以按來源 session／相關文件／角色／task／月份分組；逐條或剔多條：標完成、作廢、叫 Claude 查。
import { groupPicker, grouped } from "../group.js";

export function render(el, ctx) {
  const { h, state, sendIntent, openEntity, openFile } = ctx;
  const todos = state.index?.todos?.rows || [];
  const ents = state.index?.entities || {};
  const f = (state.todoFilter ||= { text: "", tab: "ledger", group: "section", open: new Set() });
  f.group ??= "section"; f.open ??= new Set();
  const sel = (state._todoSel ||= new Set());
  const rerender = () => { el.replaceChildren(); render(el, ctx); };

  // related things come from the entity index (file names, IDs, character names found in the text)
  const relOf = (id, type) => (ents[id]?.rel || []).map((x) => ents[x])
    .filter((x) => x && x.type === type && x.id !== ents[id]?.file).map((x) => x.title);
  const GROUPS = {
    // "Completed This Round（Round 197 — 2026-09-12 …）" → "Round 197 — 2026-09-12 …"
    section: ["來源 session", (t) => t.section.replace(/^(Completed|In Progress|Pending)[^（(]*[（(]\s*/i, "").replace(/[）)]\s*$/, "").slice(0, 50) || "（冇段落）"],
    file: ["相關文件", (t) => relOf(t.id, "file")],
    character: ["相關角色", (t) => relOf(t.id, "character")],
    task: ["相關 task／問題", (t) => [...relOf(t.id, "task"), ...relOf(t.id, "question").map((q) => "❓ " + q.slice(0, 30))]],
    month: ["月份", (t) => (t.date || "").slice(0, 7) || "（冇日期）"],
    none: ["唔分組", null],
  };

  // questions nobody touched for 60+ days: candidates to discard
  const today = new Date();
  const ageOf = (s) => { const m = String(s).match(/20\d\d-\d\d-\d\d/); return m ? Math.floor((today - new Date(m[0])) / 864e5) : null; };
  const stale = Object.values(ents).filter((e) => e.type === "question" && ["OPEN", "IN PROGRESS", "DEFERRED", "BLOCKED"].includes(e.status))
    .map((e) => ({ ...e, age: ageOf(e.summary) })).filter((e) => e.age != null && e.age >= 60).sort((a, b) => b.age - a.age);

  const bulk = (kind) => {
    const items = f.tab === "ledger" ? todos.filter((t) => sel.has(t.id)) : stale.filter((q) => sel.has(q.id));
    if (!items.length) return;
    if (f.tab === "ledger") {
      for (const t of items) sendIntent({ type: kind === "done" ? "ledger.todo_done" : "ledger.todo_drop", target: t.id, payload: { text: t.text, section: t.section },
        note: `${kind === "done" ? "標完成" : "作廢"}待辦：「${t.text.slice(0, 50)}」（SESSION_LEDGER ${t.section.slice(0, 30)}）` });
    } else {
      for (const q of items) sendIntent({ type: "question.drop", target: q.id, payload: { reason: `超過 ${q.age} 日冇更新` }, note: `作廢舊問題「${q.title.slice(0, 40)}」（${q.age} 日冇郁；如果其實仲有用請話我知）` });
    }
    sel.clear(); rerender();
  };

  // 🤖 hand the ticked items to an auto-discussion; its summary suggests 標完成／作廢／保留 per item, the author ticks and sends
  const discuss = () => {
    const ledgerTab = f.tab === "ledger";
    const items = ledgerTab
      ? todos.filter((t) => sel.has(t.id)).map((t) => ({ id: t.id, title: t.text, payload: { text: t.text, section: t.section } }))
      : stale.filter((q) => sel.has(q.id)).map((q) => ({ id: q.id, title: q.title, payload: {} }));
    if (!items.length) return;
    ctx.openDiscuss({
      topic: ledgerTab ? `呢 ${items.length} 條未完成事項：邊啲其實已經做咗、邊啲應該作廢、邊啲要保留繼續做？` : `呢 ${items.length} 條好耐冇郁嘅問題：邊啲應該作廢、邊啲押後、邊啲要保留？`,
      range: ledgerTab ? "只判斷呢幾條待辦嘅去留，要讀 SESSION_LEDGER 同相關文件核實有冇做咗；唔改故事內容" : "只判斷呢幾條問題嘅去留，要讀 QUESTION_QUEUE 同相關文件核實；唔改故事內容",
      stop: "每條都有建議（附證據）",
      items, actions: ledgerTab ? [{ type: "ledger.todo_done", label: "標完成" }, { type: "ledger.todo_drop", label: "作廢" }] : [{ type: "question.drop", label: "作廢" }, { type: "question.defer", label: "押後" }],
      links: items.filter((x) => ents[x.id]).slice(0, 20).map((x) => ({ id: x.id, title: x.title.slice(0, 80), file: ents[x.id].file || "" })),
    });
  };

  const row = (id, main, sub) => h("div", { class: "list-item", style: "display:flex;gap:10px;align-items:flex-start" },
    h("input", { type: "checkbox", checked: sel.has(id), onchange: (e) => { e.target.checked ? sel.add(id) : sel.delete(id); rerender(); }, style: "margin-top:3px" }),
    h("div", { style: "flex:1;min-width:0;cursor:pointer", onclick: () => openEntity(id) },
      h("div", { style: "font-weight:700" }, ctx.plain(main)), h("div", { class: "small muted" }, sub)));

  const search = h("input", { type: "search", placeholder: "搵…", value: f.text });
  search.addEventListener("change", () => { f.text = search.value.trim(); rerender(); });
  const ledger = todos.filter((t) => !f.text || (t.text + t.section).includes(f.text));
  const old = stale.filter((q) => !f.text || q.title.includes(f.text));
  const body = f.tab === "ledger"
    ? grouped(h, ledger, GROUPS[f.group][1], (t) => row(t.id, t.text, `${t.date || ""} · ${t.section}`),
        { openState: f.open, order: f.group === "month" ? (a, b) => b[0].localeCompare(a[0]) : f.group === "section" ? () => 0 : undefined })  // ledger is newest-first, keep that
    : old.map((q) => row(q.id, q.title, `${q.status} · ${q.age} 日冇更新`));

  el.append(h("h2", {}, "未完成事項"),
    h("div", { class: "hint" }, f.tab === "ledger" ? "歷次 session 喺 SESSION_LEDGER 留低、仲未剔嘅待辦。可以按來源、相關文件、角色、task 或月份分組；剔多條一次過標完成或作廢；撳文字睇詳情同關係。" : "超過 60 日冇更新嘅未決問題，可能已經過時。剔選可以一次過作廢（QUESTION_QUEUE 會保留紀錄，標 DROPPED）。"),
    h("div", { class: "toolbar" },
      h("button", { class: "chip" + (f.tab === "ledger" ? " on" : ""), onclick: () => { f.tab = "ledger"; sel.clear(); rerender(); } }, `📝 Session 待辦（${todos.length}）`),
      h("button", { class: "chip" + (f.tab === "stale" ? " on" : ""), onclick: () => { f.tab = "stale"; sel.clear(); rerender(); } }, `🕰️ 好耐冇郁嘅問題（${stale.length}）`)),
    h("div", { class: "toolbar" }, search,
      f.tab === "ledger" ? groupPicker(h, Object.entries(GROUPS).map(([k, [l]]) => [k, l]), f.group, (v) => { f.group = v; rerender(); }) : null,
      h("div", { style: "flex:1" }),
      sel.size ? h("span", { class: "small muted", style: "font-weight:800" }, `已揀 ${sel.size}`) : null,
      f.tab === "ledger" ? h("button", { disabled: !sel.size, onclick: () => bulk("done") }, "✅ 標完成") : null,
      h("button", { class: "danger", disabled: !sel.size, onclick: () => bulk("drop") }, "🗑️ 作廢"),
      h("button", { disabled: !sel.size, title: "交畀幾個 AI 角色核實同傾，總結會逐條建議點處理，你剔完先執行", onclick: discuss }, "🤖 自動討論"),
      h("button", { onclick: () => openFile(f.tab === "ledger" ? "canon/_working/SESSION_LEDGER.md" : "canon/_working/QUESTION_QUEUE.md") }, "睇原文")),
    h("div", { class: "card", style: "padding:0" }, ...(body.length ? body : [h("div", { class: "list-item muted" }, "冇嘢 🎉")])));
}
