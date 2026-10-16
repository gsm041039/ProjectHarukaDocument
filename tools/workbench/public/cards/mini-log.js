// ui:mini-log — {skills_used[], done[], pending[], blocked[], next}
const h = (t, a = {}, ...k) => { const e = document.createElement(t); Object.assign(e, a); e.append(...k.flat().filter((x) => x != null)); return e; };
const ROWS = [["skills_used", "用咗嘅 skill"], ["done", "做完"], ["pending", "未做"], ["blocked", "卡住"], ["next", "下一步"]];

export function render(d) {
  const kv = h("div", { className: "kv" });
  for (const [key, label] of ROWS) {
    const v = d[key];
    if (v == null || (Array.isArray(v) && !v.length)) continue;
    kv.append(h("div", { className: "k" }, label), h("div", {}, Array.isArray(v) ? v.join("、") : String(v)));
  }
  return h("div", { className: "card", style: "max-width:860px;margin:6px auto;width:100%" }, h("h4", {}, "工作紀錄"), kv);
}
