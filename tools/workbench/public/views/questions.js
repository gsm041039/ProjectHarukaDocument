// 問題清單：篩選、搜尋、展開；逐條或剔多條：作廢／押後／標已解決／提優先；撳「🔗」睇同佢連住嘅決定、矩陣、角色、beat。
// One short line per question; the full text opens on click.
const brief = (s) => { const x = String(s).replace(/^【[^】]*】/, "").split(/——|：|（|\(|，/)[0].trim(); return (x.length >= 4 ? x : String(s)).slice(0, 38) + ((x.length >= 4 ? x : String(s)).length > 38 ? "…" : ""); };
const ZH = { BLOCKED: "卡住", OPEN: "未答", "IN PROGRESS": "傾緊", PROVISIONAL: "暫定", "RESOLVED PROVISIONAL": "暫定答咗", DEFERRED: "押後" };
const ORDER = ["BLOCKED", "OPEN", "IN PROGRESS", "PROVISIONAL", "RESOLVED PROVISIONAL", "DEFERRED"];

import { groupPicker, grouped } from "../group.js";

export function render(el, ctx) {
  const { h, state, sendIntent, newSession, openFile, openEntity, start } = ctx;
  const qs = state.index?.questions || [];
  const ents = state.index?.entities || {};
  const f = (state.qFilter ||= { status: new Set(["BLOCKED", "OPEN", "IN PROGRESS"]), text: "" });
  f.group ??= "status"; f.open ??= new Set();
  const relOf = (id, type) => (ents[id]?.rel || []).map((x) => ents[x]).filter((x) => x && x.type === type && x.id !== ents[id]?.file).map((x) => x.title);
  const GROUPS = { status: ["狀態", (q) => ZH[q.status] || q.status], section: ["出處（邊一輪）", (q) => (q.section || "Active").replace(/（.*$/, "").slice(0, 40)],
    character: ["相關角色", (q) => relOf(q.id, "character")], file: ["相關文件", (q) => relOf(q.id, "file")], none: ["唔分組", null] };
  const sel = (state._qSel ||= new Set());
  const rerender = () => { el.replaceChildren(); render(el, ctx); };
  const counts = {};
  for (const q of qs) counts[q.status] = (counts[q.status] || 0) + 1;
  const shown = qs.filter((q) => f.status.has(q.status) && (!f.text || (q.id + q.topic + q.summary).includes(f.text)))
    .sort((a, b) => ORDER.indexOf(a.status) - ORDER.indexOf(b.status));
  const ask = (m) => { const v = prompt(m); return v == null ? null : v.trim(); };
  const short = (q) => q.topic.slice(0, 40);
  const act = {
    drop: (q, reason) => sendIntent({ type: "question.drop", target: q.id, payload: { reason }, note: `作廢問題「${short(q)}」：${reason || "已過時"}（標 DROPPED，保留紀錄）` }),
    defer: (q) => sendIntent({ type: "question.defer", target: q.id, payload: {}, note: `押後問題「${short(q)}」（DEFERRED，請補 revisit trigger）` }),
    top: (q) => sendIntent({ type: "question.priority", target: q.id, payload: { to: "P1" }, note: `將問題「${short(q)}」提到最優先` }),
    resolve: (q, a) => sendIntent({ type: "question.resolve", target: q.id, payload: { answer: a }, note: `問題「${short(q)}」已解決：${a}（更新 QUESTION_QUEUE，需要就落 CDL）` }),
  };
  const bulk = (kind) => {
    const items = qs.filter((q) => sel.has(q.id));
    if (!items.length) return;
    const reason = kind === "drop" ? ask(`作廢 ${items.length} 條問題，原因？（可留空）`) : "";
    if (reason == null) return;
    items.forEach((q) => (kind === "drop" ? act.drop(q, reason) : kind === "defer" ? act.defer(q) : act.top(q)));
    sel.clear(); rerender();
  };

  const search = h("input", { type: "search", placeholder: "搜尋…", value: f.text, style: "min-width:200px" });
  search.addEventListener("change", () => { f.text = search.value.trim(); rerender(); });

  const item = (q) => {
    const rel = (ents[q.id]?.rel || []).map((x) => ents[x]).filter(Boolean);
    const more = h("div", { style: "display:none;margin-top:8px" },
      h("div", { style: "font-weight:700;margin-bottom:6px" }, q.topic),
      q.summary ? h("div", { class: "small muted", style: "margin-bottom:6px" }, q.summary) : null,
      q.status_note ? h("div", { class: "small" }, h("b", {}, "狀態備註："), q.status_note) : null,
      q.needed_before ? h("div", { class: "small" }, h("b", {}, "要喺呢個之前解決："), q.needed_before) : null,
      q.matrix?.length ? h("div", { class: "small" }, h("b", {}, "拆題表（matrix）來源："), h("ul", {}, ...q.matrix.map((m) => h("li", {}, m)))) : null,
      q.section ? h("div", { class: "small muted" }, "出處：" + q.section) : null,
      h("div", { class: "actions", style: "justify-content:flex-start" },
        h("button", { class: "small primary", onclick: () => newSession(`我想傾 QUESTION_QUEUE 入面嘅 ${q.id}（${q.topic.slice(0, 60)}）。請先做 source check，再用白話同我講要決定咩、點解、有咩候選。`, q.topic.slice(0, 24)) }, "💬 同 Claude 傾"),
        h("button", { class: "small", onclick: () => { const a = ask("答案係咩？"); if (a) act.resolve(q, a); } }, "✅ 已解決"),
        h("button", { class: "small", onclick: () => { const r = ask("點解作廢？（可留空）"); if (r != null) act.drop(q, r); } }, "🗑️ 作廢"),
        h("button", { class: "small", onclick: () => act.defer(q) }, "⏸️ 押後"),
        h("button", { class: "small", onclick: () => act.top(q) }, "⬆️ 最優先"),
        h("button", { class: "small", onclick: () => openFile("canon/_working/QUESTION_QUEUE.md") }, "睇原文")));
    return h("div", { class: "list-item", style: "display:flex;gap:10px;align-items:flex-start" },
      h("input", { type: "checkbox", checked: sel.has(q.id), style: "margin-top:4px", onchange: (e) => { e.target.checked ? sel.add(q.id) : sel.delete(q.id); rerender(); } }),
      h("div", { style: "flex:1;min-width:0;cursor:pointer", onclick: (e) => { if (e.target.closest("button")) return; more.style.display = more.style.display === "none" ? "block" : "none"; } },
        h("div", {}, h("span", { class: "pill " + ({ BLOCKED: "bad", OPEN: "warn", "IN PROGRESS": "info" }[q.status] || "") }, ZH[q.status] || q.status),
          " ", h("b", {}, brief(q.topic))),
        q.summary ? h("div", { class: "small muted clamp2" }, q.summary) : null,
        more),
      h("button", { class: "small brand", title: "揀 skill 開工", onclick: () => start({ type: "question", id: q.id, title: q.topic, file: "canon/_working/QUESTION_QUEUE.md" }) }, "✨"),
      h("button", { class: "small", title: "睇同佢有關嘅決定、矩陣、角色、beat", onclick: () => openEntity(q.id) }, `🔗 ${rel.length}`));
  };

  el.append(h("div", { class: "toolbar", style: "margin-bottom:4px" }, h("h2", { style: "margin:0;flex:1" }, "問題"),
      h("button", { class: "primary", onclick: () => start({ type: "new-question", title: "開一條新問題（記入 QUESTION_QUEUE）" }) }, "＋ 新問題")),
    h("div", { class: "toolbar" },
      ...ORDER.filter((s) => counts[s]).map((s) => h("button", { class: "chip" + (f.status.has(s) ? " on" : ""), onclick: () => { f.status.has(s) ? f.status.delete(s) : f.status.add(s); rerender(); } }, `${ZH[s] || s} ${counts[s]}`)),
      search, groupPicker(h, Object.entries(GROUPS).map(([k, [l]]) => [k, l]), f.group, (v) => { f.group = v; rerender(); })),
    h("div", { class: "toolbar" },
      h("label", { style: "font-weight:700" }, h("input", { type: "checkbox", checked: shown.length && shown.every((q) => sel.has(q.id)), onchange: (e) => { shown.forEach((q) => (e.target.checked ? sel.add(q.id) : sel.delete(q.id))); rerender(); } }), " 全揀"),
      sel.size ? h("span", { class: "small muted", style: "font-weight:800" }, `已揀 ${sel.size}`) : h("span", { class: "small muted" }, "撳一條展開；🔗 睇關係；剔多條可以一次過處理"),
      h("div", { style: "flex:1" }),
      h("button", { disabled: !sel.size, onclick: () => bulk("top") }, "⬆️ 最優先"),
      h("button", { disabled: !sel.size, onclick: () => bulk("defer") }, "⏸️ 押後"),
      h("button", { class: "danger", disabled: !sel.size, onclick: () => bulk("drop") }, "🗑️ 作廢")),
    h("div", { class: "card", style: "padding:0" }, ...(shown.length ? grouped(h, shown, GROUPS[f.group][1], item,
      { openState: f.open, order: f.group === "status" ? (a, b) => Object.values(ZH).indexOf(a[0]) - Object.values(ZH).indexOf(b[0]) : undefined }) : [h("div", { class: "list-item muted" }, "冇符合嘅問題")])));
}
