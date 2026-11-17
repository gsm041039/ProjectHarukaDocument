// 分鏡 Studio 已改為獨立全螢幕工作台 /studio.html（Visual Workspace-first）；呢頁淨係入口。
export function render(el, ctx) {
  const { h } = ctx;
  el.append(h("div", { class: "card" }, h("h2", { style: "margin-top:0" }, "分鏡 Studio"),
    h("p", {}, "分鏡有自己嘅全螢幕工作台：左 Library、中間 Board／Layout／Compare／Preview、右邊 AI Director、底部 Timeline。"),
    h("a", { href: "/studio.html", target: "_blank", class: "primary", style: "display:inline-block;padding:8px 16px;border-radius:6px" }, "🎞️ 開啟分鏡工作台"),
    h("p", { class: "hint" }, "由 Beat 板揀 beat → 「🎞️ 開分鏡」，會帶住內容開新 Scene。")));
}
