// 文件結構：Brief（最準）喺最頂，分六大部分，每部分連去佢嘅 canon 文件；下面係成個 repo 嘅資料夾樹＋文件健康狀態。
// 整理動作（登記層級、標舊版、同 Brief 對照、整理資料夾）全部經 AI；網頁唔直接改檔、唔刪檔。
const CUR = { CURRENT: ["現行", "ok"], "LATEST?": ["似係最新版", "ok"], REFERENCE: ["參考", ""], SUPERSEDED: ["已取代", "bad"], "OLD?": ["可能舊版", "warn"], "": ["未登記", ""] };

export function render(el, ctx) {
  const { h, state, openEntity, openFile, newSession, sendIntent, launch } = ctx;
  const data = state.index?.docs;
  const brief = state.index?.brief;
  if (!data) return el.append(h("div", { class: "card" }, "讀唔到文件資料"));
  const f = (state.docsPick ||= { folder: "canon", filter: "all", text: "", open: new Set(["(root)", "canon", "canon/_working"]) });
  const sel = (state._docSel ||= new Set());
  const rerender = () => { el.replaceChildren(); render(el, ctx); };
  const docs = data.docs;
  const week = new Date(Date.now() - 7 * 864e5).toISOString().slice(0, 10);
  const FILTERS = {
    all: ["全部", () => true],
    unreg: ["未登記層級", (d) => !d.registered],
    old: ["可能舊版", (d) => d.current === "OLD?" || d.current === "SUPERSEDED"],
    reval: ["要 revalidate", (d) => d.status.REVALIDATE_REQUIRED],
    recent: ["最近 7 日改過", (d) => d.modified >= week],
  };

  // ---------- Brief backbone ----------
  const briefCard = brief ? h("div", { class: "card brief-card" },
    h("div", { class: "brief-head" }, h("span", { style: "font-size:34px" }, "📖"),
      h("div", { style: "flex:1" }, h("div", { style: "font-weight:900;font-size:18px" }, "00_Story_Brief.html — 最準確嘅設定源"),
        h("div", { class: "small muted", style: "font-weight:700" }, `作者確認；canon md 可能落後於佢 · 最後修改 ${brief.modified}`)),
      h("button", { class: "small primary", onclick: () => window.open("/brief", "_blank") }, "打開 Brief"),
      h("button", { class: "small", onclick: () => newSession("請以 00_Story_Brief.html 為準，掃 canon/ 主文件（00–13）同角色檔，列出同 Brief 唔一致或者落後嘅地方（每項講清 Brief 點寫、md 點寫、邊個檔），唔好直接改，先交清單畀我揀。", "Brief 對照") }, "🔍 同 canon 對照")),
    h("div", { class: "brief-parts" }, ...brief.parts.map((p) => h("div", { class: "brief-part" },
      h("div", { class: "bp-title" }, p.title), h("div", { class: "small muted", style: "font-weight:700" }, `${p.sections.length} 節`),
      h("div", { class: "bp-files" }, ...(p.files.length ? p.files.map((x) => h("button", { class: "fchip", title: x, onclick: () => openEntity(x) }, "📄 " + x.split("/").pop().replace(/\.md$/, ""))) : [h("span", { class: "small muted" }, "未對到 canon 文件")])),
      h("details", {}, h("summary", { class: "small", style: "cursor:pointer;font-weight:800" }, "章節"), h("div", { class: "small muted" }, p.sections.join("、")))))),
    (() => {
      const mapped = new Set(brief.parts.flatMap((p) => p.files));
      const orphan = docs.filter((d) => /^canon\/(\d\d_|story\/)/.test(d.id) && !mapped.has(d.id));
      return orphan.length ? h("div", { class: "small", style: "margin-top:10px" }, h("b", {}, `未對應到 Brief 部分嘅 canon 主文件（${orphan.length}）：`), " ",
        ...orphan.map((d) => h("button", { class: "fchip", onclick: () => openEntity(d.id) }, d.id.split("/").pop()))) : null;
    })()) : null;

  // ---------- health tiles (= filters) ----------
  const tile = (k, ic, cls) => h("div", { class: "stat clickable " + cls + (f.filter === k ? " on" : ""), onclick: () => { f.filter = k; sel.clear(); rerender(); } },
    h("span", { class: "ic" }, ic), h("div", {}, h("div", { class: "n" }, docs.filter(FILTERS[k][1]).length), h("div", { class: "l" }, FILTERS[k][0])));
  const stats = h("div", { class: "stats" }, tile("all", "📚", "blue"), tile("unreg", "🏷️", ""), tile("old", "🗄️", "orange"), tile("reval", "⚠️", "red"), tile("recent", "🕐", "green"));

  // ---------- folder tree ----------
  const folders = data.folders;
  const kids = (id) => folders.filter((x) => x.id !== id && (id === "" ? !x.id.includes("/") : x.id.startsWith(id + "/") && !x.id.slice(id.length + 1).includes("/")));
  const node = (fo, depth) => {
    const ch = kids(fo.id);
    const open = f.open.has(fo.id);
    const n = docs.filter((d) => (d.folder === fo.id || d.folder.startsWith(fo.id + "/")) && FILTERS[f.filter][1](d)).length;
    return h("div", {},
      h("div", { class: "tree-row" + (f.folder === fo.id ? " active" : ""), style: `padding-left:${8 + depth * 14}px`, onclick: () => { f.folder = fo.id; if (ch.length) open ? f.open.delete(fo.id) : f.open.add(fo.id); sel.clear(); rerender(); } },
        h("span", { class: "tw" }, ch.length ? (open ? "▾" : "▸") : "·"), h("span", { class: "tl", title: fo.id }, fo.label), h("span", { class: "small muted" }, n)),
      open ? h("div", {}, ...ch.map((c) => node(c, depth + 1))) : null);
  };
  const tree = h("div", { class: "tree" }, ...kids("").map((fo) => node(fo, 0)));

  // ---------- file list ----------
  const inFolder = (d) => d.folder === f.folder || d.folder.startsWith(f.folder + "/");
  const list = docs.filter((d) => inFolder(d) && FILTERS[f.filter][1](d) && (!f.text || (d.id + d.title + d.purpose).toLowerCase().includes(f.text.toLowerCase())))
    .sort((a, b) => (a.folder === f.folder ? 0 : 1) - (b.folder === f.folder ? 0 : 1) || a.id.localeCompare(b.id));
  const fo = folders.find((x) => x.id === f.folder);
  const search = h("input", { type: "search", placeholder: "搵文件…", value: f.text });
  search.addEventListener("change", () => { f.text = search.value.trim(); rerender(); });
  const picked = () => docs.filter((d) => sel.has(d.id));
  const row = (d) => {
    const [cl, cc] = CUR[d.current] || [d.current, ""];
    return h("div", { class: "doc-row" },
      h("input", { type: "checkbox", checked: sel.has(d.id), onchange: (e) => { e.target.checked ? sel.add(d.id) : sel.delete(d.id); rerender(); } }),
      h("div", { class: "doc-main", onclick: () => openEntity(d.id) },
        h("div", { class: "doc-title" }, d.id.endsWith(".html") ? "🌐 " : "📄 ", d.title),
        d.purpose ? h("div", { class: "small muted" }, d.purpose) : null,
        h("div", { class: "doc-meta" }, h("span", { class: "pill " + cc }, cl), h("span", { class: "pill info" }, d.layer),
          d.status.REVALIDATE_REQUIRED ? h("span", { class: "pill bad" }, `revalidate ×${d.status.REVALIDATE_REQUIRED}`) : null,
          d.status.PROVISIONAL ? h("span", { class: "pill warn" }, `暫定 ×${d.status.PROVISIONAL}`) : null,
          h("span", { class: "small muted" }, `${d.modified} · ${(d.size / 1024).toFixed(0)}KB · ${d.id}`))),
      h("button", { class: "small", onclick: () => openFile(d.id) }, "打開"));
  };

  const main = h("div", {},
    h("div", { class: "toolbar" }, h("h3", { style: "margin:0;flex:1" }, fo?.label || f.folder, h("span", { class: "small muted", style: "margin-left:8px" }, f.folder)),
      search,
      h("button", { class: "small", onclick: () => newSession(`請整理資料夾 \`${f.folder}\`（${list.length} 份文件）：①邊啲係現行、邊啲係舊版或已取代；②邊啲應該登記入 LAYER_MANIFEST（層、父層）；③邊啲同 00_Story_Brief.html 唔一致；④建議歸檔但唔好刪除。先交清單，用選項卡問我批邊啲，批咗先改 LAYER_MANIFEST。`, "整理 " + f.folder.split("/").pop()) }, "🧹 叫 AI 整理呢個資料夾")),
    fo?.about ? h("div", { class: "hint" }, fo.about) : null,
    (() => {  // skills whose SKILL.md mentions this folder (or the folder it sits in)
      const sk = (state.index?.skills?.rows || []).filter((s) => s.folders.some((x) => x === f.folder || (f.folder.startsWith(x + "/") && x.split("/").length >= 3)));
      return sk.length ? h("div", { class: "toolbar", style: "margin-top:-6px" }, h("span", { class: "small", style: "font-weight:800" }, "🧠 適用 skill："),
        ...sk.slice(0, 12).map((s) => h("button", { class: "fchip", title: s.description, onclick: () => launch({ skill: s.name, tab: "skills", context: `資料夾 \`${f.folder}\`` }) }, s.name.replace(/^story-/, "")))) : null;
    })(),
    h("div", { class: "toolbar" },
      h("label", { style: "font-weight:700" }, h("input", { type: "checkbox", checked: list.length && list.every((d) => sel.has(d.id)), onchange: (e) => { list.forEach((d) => (e.target.checked ? sel.add(d.id) : sel.delete(d.id))); rerender(); } }), " 全揀"),
      h("span", { class: "small muted", style: "font-weight:800;flex:1" }, sel.size ? `已揀 ${sel.size}` : `${list.length} 份`),
      h("button", { class: "small", disabled: !sel.size, onclick: () => { picked().forEach((d) => sendIntent({ type: "docs.register", target: d.id, payload: { layer_guess: d.layer }, note: `將 ${d.id} 登記入 LAYER_MANIFEST（估計層：${d.layer}；請核實父層同現行狀態）` })); sel.clear(); rerender(); } }, "🏷️ 登記層級"),
      h("button", { class: "small", disabled: !sel.size, onclick: () => { picked().forEach((d) => sendIntent({ type: "doc.supersede", target: d.id, payload: {}, note: `${d.id.split("/").pop()} 標已取代（LAYER_MANIFEST SUPERSEDED；請講埋被邊份取代）` })); sel.clear(); rerender(); } }, "🗄️ 標已取代"),
      h("button", { class: "small", disabled: !sel.size, onclick: () => newSession(`請以 00_Story_Brief.html 為準，對照以下文件，列出唔一致或落後嘅地方（唔好直接改）：\n${picked().map((d) => "- `" + d.id + "`").join("\n")}`, "Brief 對照") }, "🔍 同 Brief 對照")),
    h("div", { class: "card", style: "padding:0" }, ...(list.length ? list.slice(0, 250).map(row) : [h("div", { class: "list-item muted" }, "呢度冇符合嘅文件")]),
      list.length > 250 ? h("div", { class: "list-item small muted" }, "只顯示頭 250 份，揀細啲嘅資料夾或者用搜尋") : null));

  el.append(h("h2", {}, "文件結構"),
    h("div", { class: "hint" }, `成個 repo ${docs.length} 份文件。Brief 係最準嘅設定源，放最頂；下面每份文件標住層級、現行／舊版、要唔要 revalidate。「可能舊版」係按檔名版本號估嘅（例如 _V4 vs _V4_1），未經確認。`),
    briefCard, stats, h("div", { class: "docs-wrap" }, tree, main));
}
