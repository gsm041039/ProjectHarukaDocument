// 美術：圖庫（按 art/ConceptArt 資料夾自動分組）、視覺語言登記、美術文件。撳圖放大，可以叫 Claude 處理。
export function render(el, ctx) {
  const { h, state, openEntity, openFile, newSession, sendIntent, start, useSkill } = ctx;
  const art = state.index?.art || { groups: [], docs: [] };
  const vis = state.index?.visual || { rows: [] };
  const pick = (state.artPick ||= { tab: "gallery", group: null, old: false });
  pick.tab ||= "gallery";
  const rerender = () => { el.replaceChildren(); render(el, ctx); };
  const img = (p) => `/api/file?path=${encodeURIComponent(p)}`;
  const thumb = (p) => `/api/thumb?path=${encodeURIComponent(p)}`;

  const tabs = h("div", { class: "toolbar" }, ...[["gallery", `🖼️ 圖庫（${art.groups.reduce((n, g) => n + g.images.length, 0)}）`], ["visual", `🎨 視覺語言（${vis.rows.length}）`], ["docs", `📚 美術文件（${art.docs.length}）`]]
    .map(([k, l]) => h("button", { class: "chip" + (pick.tab === k ? " on" : ""), onclick: () => { pick.tab = k; rerender(); } }, l)));
  el.append(h("h2", {}, "美術"), tabs);

  if (pick.tab === "visual") {
    el.append(h("div", { class: "hint" }, "BETA_VISUAL_LANGUAGE_REGISTER 嘅視覺語言項目。撳一行睇詳情／改狀態／同 Claude 傾。"),
      h("div", { class: "card", style: "padding:0" }, ...vis.rows.map((v) => h("div", { class: "list-item clickable", onclick: () => openEntity(v.id) },
        h("div", { style: "display:flex;gap:8px;flex-wrap:wrap;align-items:baseline" }, h("span", { class: "pill" }, v.id), h("b", { style: "flex:1" }, v.name),
          h("span", { class: "pill info" }, v.layer), h("span", { class: "pill " + (/COMPLETE/.test(v.state) ? "ok" : /NOT STARTED/.test(v.state) ? "" : "warn") }, v.state)),
        h("div", { class: "small muted", style: "margin-top:4px" }, v.question.slice(0, 200))))));
    return;
  }
  if (pick.tab === "docs") {
    el.append(h("div", { class: "card", style: "padding:0" }, ...art.docs.map((d) => h("div", { class: "list-item clickable", onclick: () => openFile(d) }, "📄 ", h("b", {}, d.split("/").pop()), h("span", { class: "small muted" }, "  " + d)))));
    return;
  }

  const group = art.groups.find((g) => g.id === pick.group) || null;
  const kinds = [...new Set(art.groups.map((g) => g.kind))];
  const side = h("div", { class: "art-side" }, ...kinds.map((k) => h("div", {}, h("div", { class: "section-title", style: "padding-left:4px" }, k),
    ...art.groups.filter((g) => g.kind === k).map((g) => h("div", { class: "sess" + (g === group ? " active" : ""), onclick: () => { pick.group = g.id; rerender(); } },
      h("span", { class: "t" }, g.name), h("span", { class: "small muted" }, g.images.length))))));

  const lightbox = (p) => {
    const box = h("div", { class: "lightbox", onclick: (e) => { if (e.target === box) box.remove(); } },
      h("div", { class: "lb-inner" }, h("img", { src: img(p) }),
        h("div", { class: "lb-bar" }, h("span", { class: "small", style: "flex:1;font-weight:700;overflow-wrap:anywhere" }, p),
          h("button", { class: "small", onclick: () => newSession(`睇吓呢張美術：\`${p}\`。請讀相關角色／視覺設定，講佢同 canon 夾唔夾、有咩可以改。`, p.split("/").pop()) }, "💬 傾呢張"),
          h("button", { class: "small", onclick: () => sendIntent({ type: "art.redo", target: p, payload: {}, note: `美術 ${p.split("/").pop()} 標要重做（請記低原因同對應 prompt／設定）` }) }, "🔁 要重做"),
          h("button", { class: "small", onclick: () => sendIntent({ type: "art.approve", target: p, payload: {}, note: `美術 ${p.split("/").pop()} 標做已批（請記入對應角色／視覺文件）` }) }, "✅ 批"),
          h("button", { class: "small", onclick: () => box.remove() }, "✕"))));
    document.body.append(box);
  };

  const main = group
    ? h("div", {},
        h("div", { class: "toolbar" }, h("h3", { style: "margin:0;flex:1" }, `${group.kind} / ${group.name}`),
          group.old.length ? h("label", { style: "font-weight:700" }, h("input", { type: "checkbox", checked: pick.old, onchange: (e) => { pick.old = e.target.checked; rerender(); } }), ` 顯示舊版（${group.old.length}）`) : null,
          h("button", { class: "small brand", onclick: () => start({ type: "art", id: group.id, title: `${group.kind} / ${group.name}`, file: group.folder }) }, "✨ 開工"),
          h("button", { class: "small", onclick: () => openEntity(group.id) }, "🔗 關係")),
        (state.index?.prompts?.templates || []).length ? h("div", { class: "chips", style: "margin-bottom:12px" }, h("span", { class: "small", style: "font-weight:800" }, "🎨 用 prompt 模板："),
          ...state.index.prompts.templates.map((t) => h("button", { class: "chip", title: t.title, onclick: () => useSkill("stage-wound-character-design-orchestrator",
            `用 \`${state.index.prompts.file}\` 第 ${t.line} 行嘅「${t.title}」模板，為「${group.name}」（${group.folder}）出一份可以直接用嘅生圖 prompt；先讀佢嘅角色／視覺設定同現有圖，模板入面要我決定嘅位用選項卡問我。`, `${group.name}：${t.title}`) }, t.title.replace(/（.*$/, "").slice(0, 22)))) : null,
        h("div", { class: "gallery" }, ...(pick.old ? [...group.images, ...group.old] : group.images).map((p) =>
          h("div", { class: "g-item" + (group.images.includes(p) ? "" : " old"), onclick: () => lightbox(p), title: p },
            h("img", { src: thumb(p), loading: "lazy" }), h("div", { class: "g-cap" }, p.split("/").pop().replace(/\.\w+$/, ""))))))
    : h("div", { class: "empty", style: "margin:6vh auto" }, h("div", { class: "mascot" }, "🖼️"), h("h3", {}, "揀左邊一組睇圖"), h("p", { class: "muted" }, "資料夾自動分組；_BAK／BAK 入面嘅當舊版，預設收埋。"));

  el.append(h("div", { class: "art-wrap" }, side, main));
}
