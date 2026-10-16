// 對話 ↔ 文件系統：AI 回覆入面嘅文件名／角色名變成撳得嘅連結；工具路徑對返索引入面嘅文件實體；文件詳情睇到邊個對話郁過佢。
let built = null; // { index, re, byKey, fileIds }

function build(index) {
  if (built?.index === index) return built;
  const ents = index?.entities || {};
  const byKey = new Map();
  const fileIds = [];
  for (const [id, e] of Object.entries(ents)) {
    if (e.type === "file") { fileIds.push(id); const base = id.split("/").pop(); if (!byKey.has(base)) byKey.set(base, id); byKey.set(id, id); }
  }
  // character names: display name + full name; single-character names (操、彩…) are too ambiguous to auto-link
  for (const c of index?.characters?.rows || []) {
    const id = c.id && ents[c.id] ? c.id : Object.keys(ents).find((k) => ents[k].type === "character" && ents[k].file === c.file);
    if (!id) continue;
    for (const n of [c.name, c.full, ...(c.aliases || [])]) if (n && n.length >= 2 && !byKey.has(n)) byKey.set(n, id);
  }
  const names = [...byKey.keys()].filter((k) => !k.includes(".")).sort((a, b) => b.length - a.length).map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`([\\w./-]+\\.(?:md|html))${names.length ? "|" + names.join("|") : ""}`, "g");
  return (built = { index, re, byKey, fileIds });
}

// absolute / relative tool path → file entity id (or null)
export function fileId(index, p) {
  const { fileIds } = build(index);
  const n = String(p || "").replace(/\\/g, "/").toLowerCase();
  return fileIds.find((id) => n === id.toLowerCase() || n.endsWith("/" + id.toLowerCase())) || null;
}

// wrap mentions inside rendered markdown with clickable chips
export function linkify(root, index, openEntity) {
  const { re, byKey } = build(index);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: (n) => n.parentElement.closest("a,button,.ent-link") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  for (const node of nodes) {
    const text = node.nodeValue;
    re.lastIndex = 0;
    if (!re.test(text)) continue;
    re.lastIndex = 0;
    const frag = document.createDocumentFragment();
    let last = 0, m;
    while ((m = re.exec(text))) {
      const hit = m[0];
      const id = byKey.get(hit) || (m[1] && (byKey.get(hit.replace(/^\.?\//, "")) || byKey.get(hit.split("/").pop())));
      if (!id) continue;
      frag.append(text.slice(last, m.index));
      const a = document.createElement("span");
      a.className = "ent-link"; a.textContent = hit; a.title = "撳開睇詳情同相關嘢";
      a.addEventListener("click", (e) => { e.stopPropagation(); openEntity(id); });
      frag.append(a);
      last = m.index + hit.length;
    }
    if (!last) continue;
    frag.append(text.slice(last));
    node.replaceWith(frag);
  }
}
