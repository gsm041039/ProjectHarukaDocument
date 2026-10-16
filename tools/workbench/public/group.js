// Shared "分組" for any list: pick a grouping, get collapsible groups with counts.
// keyFn(item) returns one key or an array of keys (an item can sit in several groups, e.g. two characters).
export function groupPicker(h, options, current, onPick) {
  return h("select", { class: "group-pick", title: "點樣分組", onchange: (e) => onPick(e.target.value) },
    ...options.map(([k, label]) => h("option", { value: k, selected: k === current }, "分組：" + label)));
}

export function grouped(h, items, keyFn, renderItem, { openState = new Set(), order, emptyLabel = "（冇對應）", limit = 200 } = {}) {
  if (!keyFn) return items.slice(0, limit).map(renderItem);
  const groups = new Map();
  for (const it of items) {
    let keys = keyFn(it);
    keys = (Array.isArray(keys) ? keys : [keys]).filter(Boolean);
    if (!keys.length) keys = [emptyLabel];
    for (const k of new Set(keys)) (groups.get(k) || groups.set(k, []).get(k)).push(it);
  }
  const entries = [...groups.entries()].sort(order || ((a, b) => (a[0] === emptyLabel) - (b[0] === emptyLabel) || b[1].length - a[1].length));
  const autoOpen = entries.length <= 3;
  return entries.map(([k, xs]) => {
    let open = autoOpen || openState.has(k);
    const body = h("div", { class: "grp-body", style: open ? "" : "display:none" }, ...xs.slice(0, limit).map(renderItem));
    const tw = h("span", { class: "tw" }, open ? "▾" : "▸");
    const head = h("div", { class: "grp-head", onclick: () => {
      open = !open;
      body.style.display = open ? "" : "none";
      tw.textContent = open ? "▾" : "▸";
      open ? openState.add(k) : openState.delete(k);
    } }, tw, h("b", { style: "flex:1;overflow-wrap:anywhere" }, k), h("span", { class: "pill" }, xs.length));
    return h("div", { class: "grp" }, head, body);
  });
}
