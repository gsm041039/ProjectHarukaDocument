// ui:status — {doing, because, done?, stop_at?, layer?, task?}
const h = (t, a = {}, ...k) => { const e = document.createElement(t); Object.assign(e, a); e.append(...k.flat().filter((x) => x != null)); return e; };

export function render(d) {
  return h("div", { className: "card", style: "max-width:860px;margin:6px auto;width:100%;padding:10px 14px" },
    h("div", {}, d.layer ? h("span", { className: "pill info" }, d.layer) : null, d.task ? h("span", { className: "pill" }, d.task) : null, " ",
      h("b", {}, d.doing || ""), d.because ? h("span", { className: "muted" }, "，因為" + d.because) : null),
    d.stop_at ? h("div", { className: "small muted" }, "做到呢度會停：" + d.stop_at) : null);
}
