// 角度矩陣：QUESTION_MATRIX 畫成熱圖。行＝題目，欄＝28 個角度，顏色＋符號＝狀態。撳一行睇詳情。
const STATES = [
  ["needs", "!", "要你決定"],
  ["blocked", "~", "未穩定／卡住"],
  ["inferred", "?", "AI 推斷，未有來源"],
  ["stable", "✓", "已穩定（有來源／已答）"],
  ["relevant", "·", "相關，未分類"],
];
const LABEL = Object.fromEntries(STATES.map(([k, , l]) => [k, l]));
const GLYPH = Object.fromEntries(STATES.map(([k, g]) => [k, g]));

export function render(el, ctx) {
  const { h, state, sendIntent, newSession, openFile, openEntity, start } = ctx;
  const m = state.index?.matrix;
  if (!m) return el.append(h("div", { class: "card" }, "讀唔到 matrix 資料"));
  const f = (state.mFilter ||= { mode: "open", text: "", usedOnly: true, sel: null, area: "" });
  f.area ??= ""; f.angle ??= "";
  // story area: a display guess from the topic, its section and its linked questions (rules: ui_config.json story_areas)
  const ents = state.index?.entities || {};
  const AREAS = (state.config?.story_areas || []).map((a) => ({ ...a, re: new RegExp(a.match) }));
  const areaOf = (r) => { const t = [r.topic, r.section, ...Object.keys(r.qids).map((q) => ents[q]?.title || "")].join(" ");
    return AREAS.find((a) => a.re.test(t))?.name || "其他"; };
  const rerender = () => { el.replaceChildren(); render(el, ctx); };

  const has = (r, st) => Object.values(r.cells).includes(st);
  const modes = {
    all: ["全部", () => true],
    open: ["未解決", (r) => r.open],
    needs: ["要你決定", (r) => has(r, "needs") && !r.stale],
    stale: ["可能過時", (r) => r.stale],
  };
  const byMode = m.rows.filter(modes[f.mode][1]).filter((r) => !f.text || (r.topic + r.section + Object.keys(r.qids).join()).includes(f.text));
  const order = [...AREAS.map((a) => a.name), "其他"];
  const rows = byMode.filter((r) => !f.area || areaOf(r) === f.area).sort((a, b) => order.indexOf(areaOf(a)) - order.indexOf(areaOf(b)));
  const areaChips = h("div", { class: "toolbar" }, h("span", { class: "small muted", style: "font-weight:800" }, "故事位置："),
    h("button", { class: "chip" + (!f.area ? " on" : ""), onclick: () => { f.area = ""; f.sel = null; rerender(); } }, `全部（${byMode.length}）`),
    ...order.map((n) => [n, byMode.filter((r) => areaOf(r) === n).length]).filter(([, k]) => k).map(([n, k]) =>
      h("button", { class: "chip" + (f.area === n ? " on" : ""), onclick: () => { f.area = n; f.sel = null; rerender(); } }, `${AREAS.find((a) => a.name === n)?.icon || "📁"} ${n}（${k}）`)));
  const used = new Set(m.rows.flatMap((r) => Object.keys(r.cells).map(Number)));
  const angles = m.angles.filter((a) => !f.usedOnly || used.has(a.n));

  // summary tiles double as filters
  const stat = (mode, ic, n, l, cls) => h("div", { class: "stat clickable " + cls + (f.mode === mode ? " on" : ""), onclick: () => { f.mode = mode; f.sel = null; rerender(); } },
    h("span", { class: "ic" }, ic), h("div", {}, h("div", { class: "n" }, n), h("div", { class: "l" }, l)));
  const stats = h("div", { class: "stats" },
    stat("all", "🧩", m.rows.length, "題目", "blue"),
    stat("open", "🔓", m.rows.filter(modes.open[1]).length, "未解決", "red"),
    stat("needs", "🙋", m.rows.filter(modes.needs[1]).length, "有角度要你決定", "orange"),
    stat("stale", "🕰️", m.rows.filter(modes.stale[1]).length, "可能過時（問題答咗但 matrix 未更新）", ""));

  const search = h("input", { type: "search", placeholder: "搵題目…", value: f.text });
  search.addEventListener("change", () => { f.text = search.value.trim(); rerender(); });
  const legend = h("div", { class: "mx-legend" }, ...STATES.map(([k, g, l]) => h("span", {}, h("i", { class: "mx-cell s-" + k }, g), l)));

  // tooltip
  const tip = h("div", { class: "mx-tip" });
  const showTip = (e, html) => { tip.replaceChildren(...html); tip.style.display = "block"; tip.style.left = e.clientX + 14 + "px"; tip.style.top = e.clientY + 14 + "px"; };
  const hideTip = () => (tip.style.display = "none");

  // per-angle "needs author" counts in the header show which lenses keep asking for decisions
  const needCount = Object.fromEntries(angles.map((a) => [a.n, rows.filter((r) => r.cells[a.n] === "needs").length]));
  const grid = h("div", { class: "mx-grid", style: `grid-template-columns: minmax(180px, 230px) repeat(${angles.length}, 24px)` });
  grid.append(h("div", { class: "mx-corner" }, `${rows.length} 個題目 × ${angles.length} 個角度`),
    ...angles.map((a) => h("div", { class: "mx-head", onmousemove: (e) => showTip(e, [h("b", {}, `角度 ${a.n}：${a.name}`), h("div", {}, `${needCount[a.n]} 個題目喺呢個角度要你決定`)]), onmouseleave: hideTip },
      h("span", { class: "v" }, a.name), needCount[a.n] ? h("span", { class: "nc" }, needCount[a.n]) : h("span", { class: "nc zero" }, "0"))));
  let lastArea = null;
  for (const r of rows) {
    const ar = areaOf(r);
    if (ar !== lastArea) { lastArea = ar; grid.append(h("div", { class: "mx-group" }, `${AREAS.find((a) => a.name === ar)?.icon || "📁"} ${ar}`)); }
    const sel = f.sel === r.topic;
    grid.append(h("div", { class: "mx-topic" + (sel ? " sel" : ""), onclick: () => { f.sel = sel ? null : r.topic; f.angle = ""; rerender(); } },
      r.stale ? h("span", { title: "可能過時" }, "🕰️ ") : null, h("span", { title: r.topic }, ctx.strip(r.topic) || r.topic)));
    for (const a of angles) {
      const st = r.cells[a.n];
      grid.append(st
        ? h("div", { class: "mx-cell s-" + st + (sel ? " sel" : "") + (sel && f.angle === String(a.n) ? " pick" : ""), onclick: () => { f.sel = r.topic; f.angle = String(a.n); rerender(); },
            onmousemove: (e) => showTip(e, [h("b", {}, r.topic.slice(0, 60)), h("div", {}, `${a.name}：${LABEL[st]}`)]), onmouseleave: hideTip }, GLYPH[st])
        : h("div", { class: "mx-cell s-none" + (sel ? " sel" : "") }));
    }
  }

  // detail panel
  const detail = h("div", { class: "card mx-detail" });
  const r = m.rows.find((x) => x.topic === f.sel);
  if (!r) detail.append(h("h3", {}, "撳一行睇詳情"), h("div", { class: "muted small", style: "font-weight:600" },
    "每行係一個題目；每格係一個角度（例如角色成長、揭露控制、玩法）。顏色同符號講緊嗰個角度而家穩唔穩、要唔要你決定。欄頂橙色數字＝幾多個題目喺嗰個角度等你決定。"),
    h("div", { style: "margin-top:12px" }, legend.cloneNode(true)));
  else {
    const byState = STATES.map(([k, g, l]) => [k, g, l, m.angles.filter((a) => r.cells[a.n] === k)]).filter(([, , , xs]) => xs.length);
    // what one angle found for this topic (from the long matrix table); codes stripped for display, original on hover
    const angleBox = (() => {
      if (!f.angle) return h("div", { class: "small muted", style: "margin-top:10px" }, "撳表格入面任何一格（或者下面嘅角度名），睇嗰個角度嘅分析。");
      const ang = m.angles.find((x) => String(x.n) === f.angle);
      const recs = r.detail?.[f.angle] || [];
      const noCodes = (t) => String(t || "").replace(/(?:CDL|QQ|BD|Q-BS|QM|R|M|E)-[\w.~-]+/g, "").replace(/[（(]\s*[)）]/g, "").trim();
      const row = (k, v) => v ? [h("div", { class: "k" }, k), h("div", { title: v }, noCodes(v))] : [];
      return h("div", { class: "mx-angle" },
        h("div", { class: "toolbar", style: "margin:0 0 6px" }, h("b", { style: "flex:1" }, `🔍 角度：${ang?.name || f.angle}`),
          r.cells[f.angle] ? h("span", { class: "small" }, h("i", { class: "mx-cell s-" + r.cells[f.angle], style: "display:inline-grid;margin-right:4px" }, GLYPH[r.cells[f.angle]]), LABEL[r.cells[f.angle]]) : null,
          h("button", { class: "small", onclick: () => { f.angle = ""; rerender(); } }, "✕")),
        recs.length ? h("div", {}, ...recs.map((d) => h("div", { class: "kv small mx-angle-rec" },
          ...row("而家點理解", d.interp), ...row("根據", d.source), ...row("點解重要", d.why), ...row("估錯會點", d.risk), ...row("要問你", d.question),
          ...(d.cands?.length ? [h("div", { class: "k" }, "候選"), h("div", {}, ...d.cands.map((c, i) => h("div", { title: c }, `${"ABCD"[i]}．${noCodes(c)}`)))] : []))))
          : h("div", { class: "small muted" }, r.cells[f.angle] ? "呢個題目只喺總表記低咗呢個角度嘅狀態，冇逐角度嘅分析文字。撳「同 Claude 傾」可以叫 AI 補。" : "呢個題目冇用呢個角度。"));
    })();
    detail.append(...[h("h3", { title: r.topic }, ctx.strip(r.topic) || r.topic), h("div", { class: "small muted", style: "font-weight:700" }, `${AREAS.find((a) => a.name === areaOf(r))?.icon || "📁"} ${areaOf(r)}（估）`),
      angleBox,
      r.stale ? h("div", { class: "todo-row orange", style: "cursor:default;margin-top:10px" }, h("span", { class: "ic" }, "🕰️"),
        h("div", { class: "tx" }, "可能過時", h("div", { class: "small muted" }, "相關問題已經答咗，但呢行仲寫住要決定／未穩定。"))) : null,
      ...byState.map(([k, g, l, xs]) => h("div", { style: "margin-top:12px" }, h("div", { class: "small", style: "font-weight:900" }, h("i", { class: "mx-cell s-" + k, style: "display:inline-grid;margin-right:6px" }, g), l),
        h("div", { style: "margin-top:4px" }, ...xs.map((a) => h("button", { class: "pill mx-pill" + (f.angle === String(a.n) ? " on" : ""), title: "睇呢個角度嘅分析", onclick: () => { f.angle = String(a.n); rerender(); } }, a.name))))),
      Object.keys(r.qids).length ? h("div", { style: "margin-top:14px" }, h("div", { class: "small", style: "font-weight:900" }, "相關問題"),
        ...Object.entries(r.qids).map(([q, s]) => h("div", { class: "small mx-rel", onclick: () => openEntity(q), title: q },
          h("span", { class: "pill " + (s === "RESOLVED" ? "ok" : s === "BLOCKED" ? "bad" : "warn") }, { RESOLVED: "答咗", BLOCKED: "卡住", OPEN: "未答", "IN PROGRESS": "傾緊", DEFERRED: "押後" }[s] || s), " ",
          ctx.plain(ents[q]?.title || ents[q]?.summary || "（問題）")))) : null,
      (() => { // other things this topic touches, from the link index
        const TYPES = { decision: "⚖️ 決定", beat: "🎬 Beat", character: "👤 角色", task: "🗂️ Task", discussion: "🤖 討論" };
        const rel = (ents["MX:" + r.topic.slice(0, 60)]?.rel || []).map((x) => ents[x]).filter((e) => e && TYPES[e.type]);
        return rel.length ? h("div", { style: "margin-top:14px" }, h("div", { class: "small", style: "font-weight:900" }, "相關"),
          h("div", { class: "chips" }, ...rel.slice(0, 16).map((e) => h("button", { class: "chip", title: e.title, onclick: () => openEntity(e.id) }, `${TYPES[e.type].split(" ")[0]} ${ctx.strip(e.title).replace(/^(RESOLVED|OPEN|BLOCKED|DEFERRED|IN PROGRESS)\s*[—–-]\s*/, "").slice(0, 24)}`)))) : null;
      })(),
      r.notes.length ? h("details", { style: "margin-top:12px" }, h("summary", { class: "small", style: "font-weight:800;cursor:pointer" }, "原文摘錄"),
        ...r.notes.map((n) => h("div", { class: "small muted", style: "margin-top:6px" }, n))) : null,
      h("div", { class: "actions", style: "justify-content:flex-start" },
        h("button", { class: "small", onclick: () => openFile(m.file) }, "睇原文"),
        h("button", { class: "small", onclick: () => openEntity("MX:" + r.topic.slice(0, 60)) }, "🔗 關係"),
        r.stale ? h("button", { class: "small", onclick: () => sendIntent({ type: "matrix.refresh", target: r.ids.join(",") || r.topic, payload: { qids: r.qids },
          note: `QUESTION_MATRIX「${r.topic.slice(0, 40)}」相關問題已答，請核對並更新呢行嘅角度狀態` }) }, "叫 Claude 更新") : null,
        h("button", { class: "small primary", onclick: () => newSession(`我想傾 QUESTION_MATRIX 入面「${r.topic}」呢個題目。請先做 source check，用白話講而家邊啲角度穩、邊啲要我決定，再畀候選。`, r.topic.slice(0, 24)) }, "同 Claude 傾"))].filter(Boolean));
  }

  el.append(h("div", { class: "toolbar", style: "margin-bottom:4px" }, h("h2", { style: "margin:0;flex:1" }, "角度矩陣"),
      h("button", { class: "primary", onclick: () => start({ type: "new-matrix", title: "為新題目做角度掃描（記入 QUESTION_MATRIX）" }) }, "＋ 新題目")),
    h("details", { class: "card mx-explain" }, h("summary", {}, "📖 呢頁係咩、點用"),
      h("p", {}, "每一行係一條要你決定嘅故事問題；每一格係問你之前用嚟檢查嘅角度（例如角色成長、觀眾知情、玩法）。顏色講嗰個角度而家穩唔穩、要唔要你拍板。"),
      h("ol", {}, h("li", {}, "上面「故事位置」揀你想睇嘅部分（例如 Act III、世界觀）。"),
        h("li", {}, "數字卡揀「未解決」或者「有角度要你決定」。"),
        h("li", {}, "撳一行，右邊會見到：相關問題同佢答咗未、相關決定、角色同 beat。"),
        h("li", {}, "撳「同 Claude 傾」，AI 會先查資料，再用選項卡問你。")),
      h("div", { class: "small muted" }, "「故事位置」係網頁按題目字眼估嘅分類（規則喺 ui_config.json 嘅 story_areas），唔係 canon。")),
    stats, areaChips,
    h("div", { class: "toolbar" }, search,
      h("label", { style: "font-weight:700" }, h("input", { type: "checkbox", checked: f.usedOnly, onchange: (e) => { f.usedOnly = e.target.checked; rerender(); } }), " 收埋冇用過嘅角度"),
      h("div", { style: "flex:1" }), legend),
    h("div", { class: "mx-wrap" }, h("div", { class: "mx-scroll" }, grid), detail), tip);
}
