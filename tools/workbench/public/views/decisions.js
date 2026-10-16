// 決定：CANON_DECISION_LOG 全部確認咗嘅決定，最新排先；撳一條睇詳情同佢連住嘅問題／文件／角色。
import { groupPicker, grouped } from "../group.js";

export function render(el, ctx) {
  const { h, state, openEntity, openFile, start } = ctx;
  const d = state.index?.decisions;
  if (!d) return el.append(h("div", { class: "card" }, "讀唔到決定記錄"));
  const f = (state.dFilter ||= { text: "", recent: false, char: "" });
  f.group ??= "none"; f.open ??= new Set();
  const rerender = () => { el.replaceChildren(); render(el, ctx); };
  const chars = state.index?.characters?.rows || [];
  const ents = state.index?.entities || {};
  const relOf = (id, type) => ((state.index?.entities || {})[id]?.rel || []).map((x) => (state.index?.entities || {})[x]).filter((x) => x && x.type === type && x.id !== (state.index?.entities || {})[id]?.file).map((x) => x.title);
  const GROUPS = { none: ["唔分組", null], month: ["月份", (r) => (r.date || "").slice(0, 7) || "（冇日期）"], character: ["相關角色", (r) => relOf(r.id, "character")], file: ["相關文件", (r) => relOf(r.id, "file")] };
  const cutoff = new Date(Date.now() - 30 * 864e5).toISOString().slice(0, 10);
  let rows = d.rows.filter((r) => (!f.text || (r.id + r.topic + r.position).includes(f.text)) && (!f.recent || r.date >= cutoff));
  if (f.char) rows = rows.filter((r) => (ents[r.id]?.rel || []).includes(f.char));

  const search = h("input", { type: "search", placeholder: "搵決定…", value: f.text, style: "min-width:220px" });
  search.addEventListener("change", () => { f.text = search.value.trim(); rerender(); });
  const charSel = h("select", { onchange: (e) => { f.char = e.target.value; rerender(); } },
    h("option", { value: "" }, "全部角色"), ...chars.map((c) => h("option", { value: c.id, selected: f.char === c.id }, c.name)));

  const item = (r) => {
    const rel = (ents[r.id]?.rel || []).map((x) => ents[x]).filter(Boolean);
    const qs = rel.filter((x) => x.type === "question");
    const people = rel.filter((x) => x.type === "character");
    return h("div", { class: "list-item clickable", onclick: () => openEntity(r.id) },
      h("div", { style: "display:flex;gap:8px;align-items:baseline;flex-wrap:wrap" },
        h("span", { class: "pill info" }, r.date || "—"), h("b", { style: "flex:1;min-width:200px" }, (ctx.strip(r.topic) || r.topic).split(/——|；|（/)[0].slice(0, 60)),
        ...people.slice(0, 4).map((c) => h("span", { class: "pill accent" }, c.title)),
        qs.length ? h("span", { class: "pill" }, `${qs.length} 條相關問題`) : null),
      h("div", { class: "small muted clamp2", style: "margin-top:4px" }, ctx.plain(r.position)));
  };

  el.append(h("div", { class: "toolbar", style: "margin-bottom:4px" }, h("h2", { style: "margin:0;flex:1" }, "決定"),
      h("button", { class: "primary", onclick: () => start({ type: "new-decision", title: "記錄一個新決定（要我批先寫入 canon）" }) }, "＋ 新決定")),
    h("div", { class: "hint" }, `作者確認咗嘅 canon 決定（${d.rows.length} 條），最新排先。撳一條睇佢連住咩問題、文件、角色，或者要求重審。`),
    h("div", { class: "toolbar" }, search, charSel,
      h("button", { class: "chip" + (f.recent ? " on" : ""), onclick: () => { f.recent = !f.recent; rerender(); } }, "最近 30 日"),
      groupPicker(h, Object.entries(GROUPS).map(([k, [l]]) => [k, l]), f.group, (v) => { f.group = v; rerender(); }),
      h("div", { style: "flex:1" }), h("span", { class: "small muted", style: "font-weight:700" }, `${rows.length} 條`),
      h("button", { onclick: () => openFile(d.file) }, "睇原文")),
    h("div", { class: "card", style: "padding:0" }, ...(rows.length ? grouped(h, rows, GROUPS[f.group][1], item,
      { openState: f.open, order: f.group === "month" ? (a, b) => b[0].localeCompare(a[0]) : undefined }) : [h("div", { class: "list-item muted" }, "冇符合嘅決定")]),
      rows.length > 200 ? h("div", { class: "list-item small muted" }, `只顯示頭 200 條，用搜尋收窄`) : null));
}
