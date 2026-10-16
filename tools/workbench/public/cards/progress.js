// ui:progress — {layer, stage, task?, steps?}  正文入面只顯示一行細字；完整位置喺右邊進度面板。
const h = (t, a = {}, ...k) => { const e = document.createElement(t); Object.assign(e, a); e.append(...k.flat().filter((x) => x != null)); return e; };

export function render(d) {
  return h("div", { className: "msg result", style: "text-align:left" }, "📍 ", [d.layer, d.stage, d.task].filter(Boolean).join(" · "));
}
