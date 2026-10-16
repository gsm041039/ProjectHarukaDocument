// ui:author-decision — Director-Facing Display Format as a card.
// {happened, why_now, my_view, consequences, question, options:[{name, what_happens, why, cost, given_up, difference}], recommended}
// Answering still goes through AskUserQuestion; this card is the readable context above it.
const h = (t, a = {}, ...k) => { const e = document.createElement(t); Object.assign(e, a); e.append(...k.flat().filter((x) => x != null)); return e; };
const SECTIONS = [["happened", "發生咗咩"], ["why_now", "點解而家要定"], ["my_view", "我點睇"], ["consequences", "如果咁定，之後會點"]];
const OPT = [["what_happens", "會發生咩"], ["why", "點解"], ["cost", "代價"], ["given_up", "放棄咗咩"], ["difference", "同其他做法嘅分別"]];

export function render(d) {
  const card = h("div", { className: "card", style: "max-width:860px;margin:6px auto;width:100%;border-left:4px solid var(--accent)" }, h("h4", {}, "要你決定嘅嘢"));
  for (const [k, label] of SECTIONS) if (d[k]) card.append(h("div", { style: "margin-bottom:8px" }, h("div", { className: "small muted" }, label), h("div", {}, d[k])));
  for (const o of d.options || []) {
    const kv = h("div", { className: "kv small" });
    for (const [k, label] of OPT) if (o[k]) kv.append(h("div", { className: "k" }, label), h("div", {}, o[k]));
    card.append(h("div", { className: "opt", style: "display:block;cursor:default" },
      h("div", { className: "l" }, o.name, o.name === d.recommended ? h("span", { className: "pill accent", style: "margin-left:6px" }, "建議") : null), kv));
  }
  if (d.question) card.append(h("div", { style: "margin-top:8px;font-weight:600" }, d.question));
  return card;
}
