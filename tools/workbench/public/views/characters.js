// 角色：每個角色一張卡——主圖、成長追蹤狀態、連住幾多決定／問題／beat、美術數量；名字唔一致會提示。
export function render(el, ctx) {
  const { h, state, openEntity, openFile, newSession, start } = ctx;
  const rows = state.index?.characters?.rows || [];
  const ents = state.index?.entities || {};
  const img = (p) => `/api/thumb?path=${encodeURIComponent(p)}`;
  const OPEN = ["OPEN", "IN PROGRESS", "BLOCKED", "DEFERRED", "PROVISIONAL"];

  const card = (c) => {
    const rel = (ents[c.id]?.rel || []).map((x) => ents[x]).filter(Boolean);
    const count = (t, pred = () => true) => rel.filter((x) => x.type === t && pred(x)).length;
    const main = c.images.find((p) => /ConceptArt_/i.test(p)) || c.images[0];
    const g = c.growth || {};
    return h("div", { class: "char-card", onclick: () => openEntity(c.id) },
      h("div", { class: "char-img" }, main ? h("img", { src: img(main), loading: "lazy", alt: c.name }) : h("span", { class: "char-noimg" }, "👤")),
      h("div", { class: "char-body" },
        h("div", { class: "char-name" }, c.name, h("span", { class: "small muted", style: "margin-left:8px;font-weight:700" }, c.full, c.english ? ` · ${c.english}` : "")),
        c.name_mismatch ? h("div", { class: "char-warn", title: "INDIVIDUAL_CHARACTER_GROWTH_TRACKER 用緊另一個全名" }, `⚠️ 成長追蹤表寫「${c.tracker_name}」`) : null,
        h("div", { class: "char-stats" },
          stat("⚖️", count("decision"), "決定"), stat("❓", count("question", (x) => OPEN.includes(x.status)), "未決問題"),
          stat("🎬", count("beat"), "beat"), stat("🖼️", c.image_total, "張圖")),
        Object.keys(g).length ? h("div", { class: "char-growth", title: "成長追蹤表欄位狀態：AC 作者確認／SS 有來源／BK 卡住" },
          g.AC ? h("span", { class: "pill ok" }, `AC ${g.AC}`) : null, g.SS ? h("span", { class: "pill info" }, `SS ${g.SS}`) : null,
          g.BK ? h("span", { class: "pill bad" }, `BK ${g.BK}`) : null, g.INFERRED ? h("span", { class: "pill" }, `推斷 ${g.INFERRED}`) : null)
          : h("div", { class: "small muted" }, "成長追蹤表未有呢個角色"),
        h("div", { class: "actions", style: "justify-content:flex-start", onclick: (e) => e.stopPropagation() },
          h("button", { class: "small", onclick: () => openFile(c.file) }, "📄 角色檔"),
          h("button", { class: "small brand", onclick: () => start({ type: "character", id: c.id, title: c.name, file: c.file }) }, "✨ 開工"),
          h("button", { class: "small", style: "display:none", onclick: () => newSession(`我想傾角色「${c.name}」（${c.file}）。請讀角色檔同成長追蹤表，用白話講佢而家嘅弧線位置、未決嘅嘢${c.name_mismatch ? `；另外成長追蹤表寫「${c.tracker_name}」同角色檔「${c.full}」唔一致，請核對` : ""}。`, c.name) }, "💬 傾"))));
  };
  const stat = (ic, n, l) => h("div", { class: "cs" }, h("b", {}, ic, " ", n), h("span", {}, l));

  const mism = rows.filter((c) => c.name_mismatch);
  el.append(h("h2", {}, "角色"),
    h("div", { class: "hint" }, "由 canon/03_characters 自動生成；圖片跟 art/ConceptArt/Characters 對應；數字係同呢個角色有連結嘅決定、未決問題同 beat。撳卡睇全部關係。"),
    mism.length ? h("div", { class: "todo-row orange", style: "cursor:default" }, h("span", { class: "ic" }, "⚠️"),
      h("div", { class: "tx" }, `${mism.length} 個角色喺成長追蹤表嘅全名同角色檔唔一致`, h("div", { class: "small muted" }, mism.map((c) => `${c.full} ↔ ${c.tracker_name}`).join("；"))),
      h("button", { class: "small", onclick: () => ctx.sendIntent({ type: "doc.name_mismatch", target: "INDIVIDUAL_CHARACTER_GROWTH_TRACKER.md", payload: { pairs: mism.map((c) => [c.full, c.tracker_name]) },
        note: `核對角色全名：成長追蹤表同角色檔唔一致（${mism.map((c) => c.full + "↔" + c.tracker_name).join("、")}），確認邊個係 canon 先改` }) }, "叫 AI 核對")) : null,
    h("div", { class: "char-grid" }, ...rows.map(card)));
}
