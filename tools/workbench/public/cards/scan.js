// ui:scan — 一覽清單（搵缺口結果、檢查項目）。{title?, items:[{name, status:"ok"|"warn"|"gap"|"na", say}]}
// 每行：狀態標籤＋項目名＋一句人話。後台完整紀錄照舊寫檔，呢張卡只係前台摘要。
const h = (t, a = {}, ...k) => { const e = document.createElement(t); Object.assign(e, a); e.append(...k.flat().filter((x) => x != null)); return e; };
const ST = { ok: ["pill ok", "✅ 冇問題"], warn: ["pill warn", "⚠️ 要留意"], gap: ["pill bad", "❌ 有缺口"], na: ["pill", "➖ 唔適用"] };

export function render(d) {
  const card = h("div", { className: "card", style: "max-width:860px;margin:6px auto;width:100%;padding:12px 16px" });
  if (d.title) card.append(h("h4", { style: "margin:0 0 8px" }, d.title));
  const items = d.items || [];
  const n = (s) => items.filter((i) => i.status === s).length;
  card.append(h("div", { className: "small muted", style: "margin-bottom:8px" }, `共 ${items.length} 項：✅ ${n("ok")}　⚠️ ${n("warn")}　❌ ${n("gap")}　➖ ${n("na")}`));
  for (const i of items) {
    const [cls, label] = ST[i.status] || ST.na;
    card.append(h("div", { style: "display:flex;gap:10px;align-items:baseline;padding:5px 0;border-top:1px solid var(--line)" },
      h("span", { className: cls, style: "flex:none;min-width:84px;text-align:center" }, label),
      h("b", { style: "flex:none;min-width:110px" }, i.name || ""),
      h("span", {}, i.say || "")));
  }
  return card;
}
