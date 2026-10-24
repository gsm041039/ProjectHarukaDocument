// 場景圖：IMAGE_PROMPT_SPEC 每個場景一張卡（有圖／生成失敗＋原因）；撳卡：睇大圖、複製完整 prompt、叫 AI 修 spec、複製重新生成指令。
export function render(el, ctx) {
  const { h, state, api, toast, openFile, newSession, start } = ctx;
  const d = state.index?.scenes;
  if (!d) return el.append(h("div", { class: "card" }, "搵唔到 IMAGE_PROMPT_SPEC"));
  const f = (state.sceneFilter ||= { status: "all", block: "", text: "" });
  const rerender = () => { el.replaceChildren(); render(el, ctx); };
  const thumb = (p) => `/api/thumb?path=${encodeURIComponent(p)}`;
  const blocks = [...new Set(d.rows.map((r) => r.block))];
  const count = (s) => d.rows.filter((r) => s === "all" || r.status === s).length;
  const rows = d.rows.filter((r) => (f.status === "all" || r.status === f.status) && (!f.block || r.block === f.block)
    && (!f.text || (r.title + r.title_en + r.chars.join() + r.desc).includes(f.text)));
  const copy = async (text, what) => { try { await navigator.clipboard.writeText(text); toast(`已複製${what}`); } catch { prompt("複製呢段：", text); } };

  const detail = (r) => {
    const box = h("div", { class: "lightbox", onclick: (e) => { if (e.target === box) box.remove(); } },
      h("div", { class: "lb-inner", style: "max-width:min(1000px,94vw)" },
        r.image ? h("img", { src: `/api/file?path=${encodeURIComponent(r.image)}` }) : h("div", { class: "empty", style: "margin:30px" }, h("div", { class: "mascot" }, "🖼️"), h("p", {}, "未有圖")),
        h("div", { style: "padding:12px 16px" },
          h("div", { style: "font-weight:900;font-size:17px" }, `#${r.n}　${r.title}`, h("span", { class: "small muted" }, "  " + r.title_en)),
          h("div", { class: "small muted", style: "margin:4px 0" }, `${r.block} · ${r.act} · ${r.time} · ${"⭐".repeat(r.stars)} · ${r.chars.join("、")}`),
          h("div", { class: "small" }, r.desc),
          r.status === "failed" ? h("div", { class: "char-warn", style: "margin-top:8px" }, "❌ 上次生成失敗：" + (r.fail || "未記原因")) : null),
        h("div", { class: "lb-bar" },
          h("button", { class: "small brand", onclick: () => { box.remove(); start({ type: "scene", id: `圖${r.n}`, title: `場景圖${r.n}「${r.title}」${r.status === "failed" ? "（上次生成失敗：" + r.fail + "）" : ""}`, file: `${d.file}（第 ${r.line} 行）` }); } }, "✨ 開工"),
          h("button", { class: "small", onclick: () => openFile(d.file) }, "📄 睇 spec"),
          h("button", { class: "small", onclick: async () => copy((await api(`/api/scene/prompt?n=${r.n}`)).output, " prompt") }, "📋 複製完整 prompt"),
          h("button", { class: "small", onclick: () => copy(`python tools/scene_gen_runner.py run ${r.n} --connect-cdp-url http://127.0.0.1:9222`, "生成指令") }, "⌨️ 複製生成指令"),
          h("button", { class: "small primary", onclick: () => { box.remove(); newSession(`請睇 IMAGE_PROMPT_SPEC 嘅圖${r.n}「${r.title}」（第 ${r.line} 行）${r.status === "failed" ? `，上次生成失敗：${r.fail}` : ""}。對照 00_Story_Brief.html 同角色檔，講 spec 有冇同 canon 唔夾、點改先更易生成成功，用選項卡問我改唔改。`, `圖${r.n} ${r.title}`.slice(0, 24)); } }, "💬 叫 AI 睇 spec"),
          h("button", { class: "small", onclick: () => box.remove() }, "✕"))));
    document.body.append(box);
  };

  const search = h("input", { type: "search", placeholder: "搵場景／角色…", value: f.text });
  search.addEventListener("change", () => { f.text = search.value.trim(); rerender(); });
  el.append(h("div", { class: "toolbar", style: "margin-bottom:4px" }, h("h2", { style: "margin:0;flex:1" }, "場景圖"),
      h("button", { onclick: () => copy("python tools/scene_gen_runner.py run-remaining --connect-cdp-url http://127.0.0.1:9222", "重試全部失敗嘅指令") }, "⌨️ 重試全部失敗"),
      h("button", { class: "primary", onclick: () => start({ type: "new-scene", title: "為新場景寫圖片 spec（跟 IMAGE_PROMPT_SPEC 格式，加入總覽表）" }) }, "＋ 新場景 spec")),
    h("div", { class: "hint" }, `由 IMAGE_PROMPT_SPEC 自動讀：${d.rows.length} 個場景。撳卡睇大圖、複製 prompt、或者叫 AI 執 spec。生成係用 tools/scene_gen_runner.py（要開住已登入嘅 Chrome）。`),
    h("div", { class: "toolbar" },
      ...[["all", "全部"], ["ok", "✅ 有圖"], ["failed", "❌ 生成失敗"], ["todo", "⬜ 未有圖"]].map(([k, l]) => h("button", { class: "chip" + (f.status === k ? " on" : ""), onclick: () => { f.status = k; rerender(); } }, `${l} ${count(k)}`)),
      h("select", { onchange: (e) => { f.block = e.target.value; rerender(); } }, h("option", { value: "" }, "全部區塊"), ...blocks.map((b) => h("option", { value: b, selected: f.block === b }, b))),
      search),
    h("div", { class: "gallery scene-gallery" }, ...rows.map((r) => h("div", { class: "g-item scene-" + r.status, onclick: () => detail(r), title: r.desc },
      r.image ? h("img", { src: thumb(r.image), loading: "lazy" }) : h("div", { class: "scene-ph" }, r.status === "failed" ? "❌" : "⬜"),
      h("div", { class: "g-cap", style: "white-space:normal" }, h("b", {}, `#${r.n} `), r.title, h("div", { class: "small muted" }, r.status === "failed" ? "失敗：" + (r.fail || "").slice(0, 24) : `${r.act}`))))));
}
