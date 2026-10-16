// ui:next — {suggestions:[{label, why, prompt?}]}  建議下一步；撳一下就叫 Claude 做（右邊進度面板都會出）。
const h = (t, a = {}, ...k) => { const e = document.createElement(t); for (const [x, v] of Object.entries(a)) x.startsWith("on") ? e.addEventListener(x.slice(2), v) : (e[x] = v); e.append(...k.flat().filter((y) => y != null)); return e; };

export function render(d, ctx) {
  const box = h("div", { className: "card next-card" }, h("div", { className: "nc-h" }, "💡 建議下一步"));
  for (const s of (d.suggestions || []).slice(0, 4)) {
    box.append(h("button", { className: "pp-sugg", onclick: (e) => { box.querySelectorAll("button").forEach((b) => (b.disabled = true)); e.currentTarget.classList.add("picked"); s.discuss ? ctx?.openDiscuss?.(s.discuss) : ctx?.sendToClaude(s.prompt || s.label); } },
      h("div", { className: "l" }, s.discuss ? "🤖 " + s.label : s.label), s.why ? h("div", { className: "w" }, s.why) : null));
  }
  return box;
}
