// ui:author-decision — Director-Facing Display Format as a card.
// {happened, why_now, my_view, consequences, question, options:[{name, what_happens, why, cost, given_up, difference}], recommended}
// Codex can present this card without a separate requestUserInput call, so its choices reply directly.
const h = (t, a = {}, ...k) => { const e = document.createElement(t); Object.assign(e, a); e.append(...k.flat().filter((x) => x != null)); return e; };
const SECTIONS = [["happened", "發生咗咩"], ["why_now", "點解而家要定"], ["my_view", "我點睇"], ["consequences", "如果咁定，之後會點"]];
const OPT = [["what_happens", "會發生咩"], ["why", "點解"], ["cost", "代價"], ["given_up", "放棄咗咩"], ["difference", "同其他做法嘅分別"]];

export function render(d, ctx) {
  const card = h("div", { className: "card", style: "max-width:860px;margin:6px auto;width:100%;border-left:4px solid var(--accent)" }, h("h4", {}, "要你決定嘅嘢"));
  const clickable = ctx?.backend === "codex" && ctx?.live;
  for (const [k, label] of SECTIONS) if (d[k]) card.append(h("div", { style: "margin-bottom:8px" }, h("div", { className: "small muted" }, label), h("div", {}, d[k])));
  for (const o of d.options || []) {
    const kv = h("div", { className: "kv small" });
    for (const [k, label] of OPT) if (o[k]) kv.append(h("div", { className: "k" }, label), h("div", {}, o[k]));
    const choice = h(clickable ? "button" : "div", { className: "opt" + (clickable ? " decision-option" : ""), style: "display:block;width:100%;text-align:left" + (clickable ? "" : ";cursor:default") },
      h("div", { className: "l" }, o.name, o.name === d.recommended ? h("span", { className: "pill accent", style: "margin-left:6px" }, "建議") : null), kv);
    if (clickable) choice.addEventListener("click", async () => {
      const buttons = card.querySelectorAll("button.decision-option");
      buttons.forEach((button) => (button.disabled = true));
      try { await ctx.sendToAI(`我揀「${o.name}」。${d.question || "請照呢個決定繼續。"}`); }
      catch (error) { buttons.forEach((button) => (button.disabled = false)); ctx.toast?.(error.message); }
    });
    card.append(choice);
  }
  if (d.question) card.append(h("div", { style: "margin-top:8px;font-weight:600" }, d.question));
  return card;
}
