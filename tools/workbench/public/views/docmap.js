// 文件地圖：按層由左到右排；撳一份文件，上游（佢依據嘅）同下游（依賴佢嘅）會亮起。

// edge kinds (doc_graph): label, colour, line style. 「衍生自」 comes from LAYER_MANIFEST 父層 or a 「衍生自：」 line in the file.
const KIND = {
  parent: ["衍生自", "#7a5ea8", "solid", 2.5], derived_from: ["衍生自", "#7a5ea8", "solid", 2.5], supersedes: ["取代", "#d33", "solid", 2],
  affects: ["影響", "#c27a12", "solid", 2], based_on: ["依據", "#2f8a8a", "solid", 1.5], link: ["連結", "#999", "solid", 1], mention: ["內文提及", "#bbb", "dashed", 1],
};

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
  // layer names / colours: tools/workbench/ui_config.json
  const LAYER_NAME = Object.fromEntries((state.config?.layers || []).map((l) => [l.id, l.name]));
  const LAYER_COLOR = Object.fromEntries((state.config?.layers || []).map((l) => [l.id, l.color || "#9c978f"]));
  if (!g) return el.append(h("div", { class: "card" }, "讀唔到文件資料"));
  const opt = (state.mapOpt ||= { all: false, mentions: false, q: "" });
  opt.hide ||= {};
  const rerender = () => { el.replaceChildren(); render(el, ctx); };

  const visible = g.nodes.filter((n) => opt.all || n.layer !== "other" || n.current);
  const ids = new Set(visible.map((n) => n.id));
  const edges = g.edges.filter((e) => ids.has(e.from) && ids.has(e.to) && (opt.mentions || e.kind !== "mention") && !opt.hide[KIND[e.kind]?.[0]]);
  const present = [...new Set(g.edges.filter((e) => e.kind !== "mention").map((e) => KIND[e.kind]?.[0] || e.kind))];

  const info = h("div", { class: "card" }, h("h3", {}, "撳一份文件"), h("div", { class: "small muted" },
    "線嘅顏色＝關係類型（上面可以逐類開關）；箭咀由「依賴嘅一方」指向「被依賴嘅一方」。虛線＝內文提及（預設收埋）。紅框＝內文有 REVALIDATE_REQUIRED；淡色＝已取代。冇喺 LAYER_MANIFEST 登記嘅檔，層係按檔名估嘅。"),
    h("div", { style: "margin-top:10px" }, ...g.layers.map((l) => h("div", { class: "small" }, h("span", { style: `display:inline-block;width:10px;height:10px;border-radius:2px;background:${LAYER_COLOR[l]};margin-right:6px` }), LAYER_NAME[l]))));
  const box = h("div", { id: "graph" });
  const search = h("input", { type: "search", placeholder: "搵檔名…", value: opt.q });

  el.append(h("div", { class: "toolbar" }, h("h2", { style: "margin:0;flex:1" }, "文件地圖"),
    search,
    h("label", {}, h("input", { type: "checkbox", checked: opt.all, onchange: (e) => { opt.all = e.target.checked; rerender(); } }), " 顯示全部檔案"),
    h("label", {}, h("input", { type: "checkbox", checked: opt.mentions, onchange: (e) => { opt.mentions = e.target.checked; rerender(); } }), " 顯示內文提及"),
    h("span", { class: "small muted" }, `${visible.length} 份文件 · ${edges.length} 條關係 · 已登記 ${g.manifest_entries}`)),
    h("div", { class: "chips", style: "margin-bottom:8px" }, h("span", { class: "small", style: "font-weight:800" }, "關係類型："), ...present.map((name) => {
      const k = Object.values(KIND).find((x) => x[0] === name) || [name, "#999"];
      return h("button", { class: "chip" + (opt.hide[name] ? "" : " on"), onclick: () => { opt.hide[name] = !opt.hide[name]; rerender(); } },
        h("span", { style: `display:inline-block;width:14px;height:3px;background:${k[1]};margin-right:6px;vertical-align:middle` }), name);
    })),
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
      ...edges.map((e, i) => { const k = KIND[e.kind] || ["", "#aaa", "solid", 1]; return { data: { id: "e" + i, source: e.from, target: e.to, kind: e.kind, color: k[1], line: k[2], w: k[3] } }; }),
    ],
    style: [
      { selector: "node", style: { "background-color": "data(color)", label: "data(label)", "font-size": 10, color: css.getPropertyValue("--text"), "text-valign": "bottom", "text-margin-y": 3, width: 16, height: 16 } },
      { selector: "node[reval = 1]", style: { "border-width": 3, "border-color": "#d33" } },
      { selector: "node[old = 1]", style: { opacity: 0.4 } },
      { selector: "edge", style: { width: "data(w)", "line-color": "data(color)", "line-style": "data(line)", "target-arrow-color": "data(color)", "target-arrow-shape": "triangle", "arrow-scale": 0.7, "curve-style": "bezier", opacity: 0.5 } },
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
        h("button", { onclick: () => newSession(`我想傾 \`${n.id}\`。請先讀佢，同我講佢屬邊層、依據咩、邊啲文件依賴佢、有咩未決。`, n.id.split("/").pop()) }, "同 AI 傾"),
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
