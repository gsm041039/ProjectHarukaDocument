// ui:chain — 因果鏈／接駁流程圖。{title?, steps:[{label, detail?, gap?:true}], note?}
// 一格一步，箭咀連住；gap:true 嘅一格紅框＝斷咗／冇前因。後台接駁表照舊寫檔。
const h = (t, a = {}, ...k) => { const e = document.createElement(t); Object.assign(e, a); e.append(...k.flat().filter((x) => x != null)); return e; };

export function render(d) {
  const card = h("div", { className: "card", style: "max-width:860px;margin:6px auto;width:100%;padding:12px 16px" });
  if (d.title) card.append(h("h4", { style: "margin:0 0 10px" }, d.title));
  const row = h("div", { style: "display:flex;flex-wrap:wrap;align-items:stretch;gap:6px" });
  (d.steps || []).forEach((s, i) => {
    if (i) row.append(h("div", { style: "align-self:center;font-weight:900;color:var(--muted)" }, "→"));
    const border = s.gap ? "2px solid var(--red-dark)" : "2px solid var(--line)";
    const bg = s.gap ? "var(--red-soft)" : "var(--panel2)";
    row.append(h("div", { style: `flex:1 1 150px;max-width:230px;padding:8px 10px;border:${border};background:${bg};border-radius:12px` },
      h("div", { style: "font-weight:800" }, (s.gap ? "❌ " : "") + (s.label || "")),
      s.detail ? h("div", { className: "small muted", style: "margin-top:4px" }, s.detail) : null));
  });
  card.append(row);
  if (d.note) card.append(h("div", { className: "small", style: "margin-top:8px" }, d.note));
  return card;
}
