// 文件地圖：按層由左到右排；撳一份文件，上游（佢依據嘅）同下游（依賴佢嘅）會亮起。
const LAYER_NAME = { baseline: "全作基線", act: "Act", sequence: "Sequence", beat: "Beat", scene: "Scene", dialogue: "對白／Voice", state: "狀態檔", other: "其他" };
const LAYER_COLOR = { baseline: "#7a5ea8", act: "#3c64a8", sequence: "#2f8a8a", beat: "#2f7d55", scene: "#a8892f", dialogue: "#b4475e", state: "#6d6860", other: "#9c978f" };

function loadCytoscape() {
  if (window.cytoscape) return Promise.resolve();
  return new Promise((res, rej) => {
    const s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.30.2/cytoscape.min.js";
    s.onload = res; s.onerror = () => rej(new Error("載入 cytoscape 失敗（要上網）"));
    document.head.append(s);
  });
}

export async function render(el, ctx) {
  const { h, state, sendIntent, openFile, newSession, openEntity } = ctx;
  const g = state.index?.doc_graph;
  if (!g) return el.append(h("div", { class: "card" }, "讀唔到文件資料"));
  const opt = (state.mapOpt ||= { all: false, mentions: false, q: "" });
  const rerender = () => { el.replaceChildren(); render(el, ctx); };

  const visible = g.nodes.filter((n) => opt.all || n.layer !== "other" || n.current);
  const ids = new Set(visible.map((n) => n.id));
  const edges = g.edges.filter((e) => ids.has(e.from) && ids.has(e.to) && (opt.mentions || e.kind !== "mention"));

  const info = h("div", { class: "card" }, h("h3", {}, "撳一份文件"), h("div", { class: "small muted" },
    "實線＝明確連結／登記咗嘅父層；虛線＝內文提及（預設收埋）。紅框＝內文有 REVALIDATE_REQUIRED；淡色＝已取代。冇喺 LAYER_MANIFEST 登記嘅檔，層係按檔名估嘅。"),
    h("div", { style: "margin-top:10px" }, ...g.layers.map((l) => h("div", { class: "small" }, h("span", { style: `display:inline-block;width:10px;height:10px;border-radius:2px;background:${LAYER_COLOR[l]};margin-right:6px` }), LAYER_NAME[l]))));
  const box = h("div", { id: "graph" });
  const search = h("input", { type: "search", placeholder: "搵檔名…", value: opt.q });

  el.append(h("div", { class: "toolbar" }, h("h2", { style: "margin:0;flex:1" }, "文件地圖"),
    search,
    h("label", {}, h("input", { type: "checkbox", checked: opt.all, onchange: (e) => { opt.all = e.target.checked; rerender(); } }), " 顯示全部檔案"),
    h("label", {}, h("input", { type: "checkbox", checked: opt.mentions, onchange: (e) => { opt.mentions = e.target.checked; rerender(); } }), " 顯示內文提及"),
    h("span", { class: "small muted" }, `${visible.length} 份文件 · ${edges.length} 條關係 · 已登記 ${g.manifest_entries}`)),
    h("div", { class: "graph-wrap" }, box, info));

  try { await loadCytoscape(); } catch (e) { box.replaceChildren(h("div", { class: "view-pad muted" }, e.message)); return; }

  // Column per layer; tall columns wrap so the map stays readable.
  const pos = {}, perCol = 18;
  let colX = 0;
  for (const layer of g.layers) {
    const ns = visible.filter((n) => n.layer === layer).sort((a, b) => a.id.localeCompare(b.id));
    ns.forEach((n, i) => (pos[n.id] = { x: colX + Math.floor(i / perCol) * 230, y: (i % perCol) * 52 }));
    if (ns.length) colX += Math.ceil(ns.length / perCol) * 230 + 80;
  }

  const css = getComputedStyle(document.documentElement);
  const cy = window.cytoscape({
    container: box, layout: { name: "preset" }, wheelSensitivity: 0.25,
    elements: [
      ...visible.map((n) => ({ data: { id: n.id, label: n.id.split("/").pop().replace(/\.md$/, ""), color: LAYER_COLOR[n.layer],
        reval: n.status?.REVALIDATE_REQUIRED ? 1 : 0, old: /SUPERSEDED|REFERENCE/.test(n.current) ? 1 : 0 }, position: pos[n.id] })),
      ...edges.map((e, i) => ({ data: { id: "e" + i, source: e.from, target: e.to, kind: e.kind } })),
    ],
    style: [
      { selector: "node", style: { "background-color": "data(color)", label: "data(label)", "font-size": 10, color: css.getPropertyValue("--text"), "text-valign": "bottom", "text-margin-y": 3, width: 16, height: 16 } },
      { selector: "node[reval = 1]", style: { "border-width": 3, "border-color": "#d33" } },
      { selector: "node[old = 1]", style: { opacity: 0.4 } },
      { selector: "edge", style: { width: 1, "line-color": "#aaa", "target-arrow-color": "#aaa", "target-arrow-shape": "triangle", "arrow-scale": 0.6, "curve-style": "bezier", opacity: 0.35 } },
      { selector: "edge[kind = 'mention']", style: { "line-style": "dashed" } },
      { selector: "edge[kind = 'parent']", style: { width: 2, opacity: 0.6 } },
      { selector: ".faded", style: { opacity: 0.08 } },
      { selector: ".up", style: { "line-color": "#3c64a8", "target-arrow-color": "#3c64a8", "background-color": "#3c64a8", opacity: 1 } },
      { selector: ".down", style: { "line-color": "#c27a12", "target-arrow-color": "#c27a12", "background-color": "#c27a12", opacity: 1 } },
      { selector: ".focus", style: { "border-width": 4, "border-color": css.getPropertyValue("--accent"), width: 24, height: 24, opacity: 1 } },
    ],
  });

  const focus = (node) => {
    cy.elements().removeClass("faded up down focus");
    if (!node) return;
    const up = node.successors(), down = node.predecessors();
    cy.elements().not(up).not(down).not(node).addClass("faded");
    up.addClass("up"); down.addClass("down"); node.addClass("focus");
    const n = g.nodes.find((x) => x.id === node.id());
    const list = (col, title) => col.nodes().length ? h("div", { class: "small", style: "margin-top:8px" }, h("b", {}, title),
      ...col.nodes().map((x) => h("div", {}, h("a", { href: "#", onclick: (e) => { e.preventDefault(); focus(cy.getElementById(x.id())); } }, x.data("label"))))) : null;
    info.replaceChildren(...[h("h3", {}, node.data("label")), h("div", { class: "small muted", style: "word-break:break-all" }, n.id),
      h("div", { style: "margin:8px 0" }, h("span", { class: "pill" }, LAYER_NAME[n.layer]), n.current ? h("span", { class: "pill " + (n.current === "CURRENT" ? "ok" : "") }, n.current) : h("span", { class: "pill warn" }, "未登記"),
        ...Object.entries(n.status || {}).map(([k, v]) => h("span", { class: "pill " + (k.startsWith("REVALIDATE") ? "bad" : "") }, `${k} ×${v}`)),
        n.cdl ? h("span", { class: "pill info" }, `引用 ${n.cdl} 條決定`) : null),
      h("div", { class: "actions", style: "justify-content:flex-start" },
        h("button", { onclick: () => openFile(n.id) }, "打開"),
        h("button", { onclick: () => openEntity(n.id) }, "🔗 關係"),
        h("button", { onclick: () => newSession(`我想傾 \`${n.id}\`。請先讀佢，同我講佢屬邊層、依據咩、邊啲文件依賴佢、有咩未決。`, n.id.split("/").pop()) }, "同 Claude 傾"),
        h("button", { onclick: () => sendIntent({ type: "doc.mark_revalidate", target: n.id, payload: {}, note: `將 ${n.id.split("/").pop()} 標做要 revalidate，並列出受影響嘅下游` }) }, "標要 revalidate")),
      h("div", { class: "small", style: "margin-top:8px" }, h("span", { style: "color:#3c64a8" }, "■ 上游（佢依據）"), "　", h("span", { style: "color:#c27a12" }, "■ 下游（依賴佢）")),
      list(up, "上游："), list(down, "下游：")].filter(Boolean));
  };
  cy.on("tap", "node", (e) => focus(e.target));
  cy.on("tap", (e) => { if (e.target === cy) focus(null); });
  search.addEventListener("change", () => {
    opt.q = search.value.trim();
    const hit = cy.nodes().filter((n) => n.id().toLowerCase().includes(opt.q.toLowerCase()));
    if (opt.q && hit.length) { focus(hit[0]); cy.animate({ center: { eles: hit[0] }, zoom: 1.4 }); }
  });
  cy.fit(undefined, 30);
}
