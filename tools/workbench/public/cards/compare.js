// ui:compare — 並排比較表（候選方案、現狀 vs 新做法）。
// {title?, columns:["現狀","方案 1",…], rows:[{label, cells:[{t, s?:"ok"|"warn"|"bad"}]}], recommend?:欄序號(0 起), note?}
// 格內一句人話（≤15 字最好）；s 令格有顏色。後台完整角度表照舊寫檔。
const h = (t, a = {}, ...k) => { const e = document.createElement(t); Object.assign(e, a); e.append(...k.flat().filter((x) => x != null)); return e; };
const BG = { ok: "var(--green-soft)", warn: "var(--orange-soft)", bad: "var(--red-soft)" };
const MARK = { ok: "✅ ", warn: "⚠️ ", bad: "❌ " };

export function render(d) {
  const card = h("div", { className: "card", style: "max-width:980px;margin:6px auto;width:100%;padding:12px 16px;overflow-x:auto" });
  if (d.title) card.append(h("h4", { style: "margin:0 0 8px" }, d.title));
  const th = (x, extra = "") => h("th", { style: "text-align:left;padding:6px 8px;border-bottom:2px solid var(--line);vertical-align:bottom;" + extra }, x);
  const head = h("tr", {}, th("角度"));
  (d.columns || []).forEach((c, i) => head.append(th(c, i === d.recommend ? "background:var(--brand-soft)" : ""),));
  const table = h("table", { style: "border-collapse:collapse;width:100%;font-size:14px" }, h("thead", {}, head));
  const body = h("tbody", {});
  for (const r of d.rows || []) {
    const tr = h("tr", {}, h("td", { style: "padding:6px 8px;border-top:1px solid var(--line);font-weight:800;white-space:nowrap" }, r.label || ""));
    (r.cells || []).forEach((c, i) => {
      const cell = typeof c === "string" ? { t: c } : c;
      const bg = BG[cell.s] || (i === d.recommend ? "var(--brand-soft)" : "transparent");
      tr.append(h("td", { style: `padding:6px 8px;border-top:1px solid var(--line);background:${bg}` }, (MARK[cell.s] || "") + (cell.t || "")));
    });
    body.append(tr);
  }
  table.append(body);
  card.append(table);
  if (d.recommend != null && d.columns?.[d.recommend]) card.append(h("div", { className: "small", style: "margin-top:8px" }, `建議：${d.columns[d.recommend]}`));
  if (d.note) card.append(h("div", { className: "small muted", style: "margin-top:4px" }, d.note));
  return card;
}
