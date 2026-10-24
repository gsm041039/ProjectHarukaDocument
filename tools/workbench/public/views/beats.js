// Beat 板：由 LAYER_MANIFEST 自動生成——每份登記咗嘅 Beat 層文件係一塊板，按資料夾分 track（Demo 試點／正式／…）。
// 欄＝Sequence／段落，卡＝beat。拖曳排位、加、刪、合併都只係排入「待送出」，由 AI 按 beat 層規則改檔。
const CUR_LABEL = { CURRENT: "現行", REFERENCE: "參考", SUPERSEDED: "已取代" };

export function render(el, ctx) {
  const { h, state, sendIntent, openFile, newSession, openEntity, start } = ctx;
  const data = state.index?.beats;
  if (!data?.boards?.length) return el.append(h("div", { class: "card empty-start" }, h("div", { class: "mascot" }, "🎬"), h("h3", {}, "未有 Beat 層"),
    h("button", { class: "primary", onclick: () => start({ type: "new-beat", title: "開始做 Beat 層（照 layer gate，上層要先批）" }) }, "✨ 開始做 Beat 層")));
  const pick = (state.beatPick ||= { track: data.tracks[0], file: null, old: false, view: "board" });
  if (!data.tracks.includes(pick.track)) pick.track = data.tracks[0];
  const inTrack = data.boards.filter((b) => b.track === pick.track && (pick.old || b.current === "CURRENT" || b.file === pick.file));
  const src = inTrack.find((b) => b.file === pick.file) || inTrack[0] || data.boards.find((b) => b.track === pick.track);
  pick.file = src.file;
  const drafts = (state._beats ||= {});
  const seqs = (drafts[src.file] ||= structuredClone(src.columns));
  const picked = (state._beatPick ||= new Set());
  const rerender = () => { el.replaceChildren(); render(el, ctx); };
  const where = (id) => { for (const s of seqs) { const i = s.beats.findIndex((b) => b.id === id); if (i >= 0) return [s, i]; } return [null, -1]; };
  let dragId = null;

  const card = (b) => {
    const file = b.deep?.file || src.file;
    return h("div", {
      class: `bcard s-${b.status}` + (b.pending ? " pending" : "") + (b.removed ? " removed" : ""),
      draggable: b.removed ? "false" : "true", "data-id": b.id,
      ondragstart: (e) => { dragId = b.id; e.currentTarget.classList.add("dragging"); },
      ondragend: (e) => e.currentTarget.classList.remove("dragging"),
    },
      h("div", { class: "top" },
        h("label", { style: "display:flex;gap:6px;align-items:center" },
          h("input", { type: "checkbox", checked: picked.has(b.id), onchange: (e) => { e.target.checked ? picked.add(b.id) : picked.delete(b.id); rerender(); } }),
          h("span", { class: "id" }, b.id)),
        h("span", {},
          b.kind ? h("span", { class: "pill " + (b.kind === "R" ? "accent" : "") , title: b.kind === "R" ? "有外部觸發（Cost Signal）" : "底色／過渡 beat" }, b.kind) : null,
          h("span", { class: "pill " + (b.status === "PROVISIONAL" ? "warn" : "") }, b.status),
          b.removed ? null : h("button", { class: "x", title: "刪除", onclick: () => {
            if (!confirm(`刪除 beat ${b.id}「${b.title}」？（會排入待送出，由 AI 處理）`)) return;
            b.removed = true;
            sendIntent({ type: "beat.remove", target: b.id, payload: { file: src.file }, note: `刪除 beat ${b.id}「${b.title}」` });
            rerender();
          } }, "✕"))),
      h("div", { style: "font-weight:600;margin-top:4px" }, b.title),
      h("div", { class: "sum" }, b.deep?.function || b.summary),
      h("div", { class: "actions", style: "margin-top:6px" },
        h("button", { class: "small", onclick: () => openFile(file) }, "睇設計"),
        src.current === "CURRENT" ? h("button", { class: "small", title: "睇同呢個 beat 有關嘅決定、角色、問題", onclick: () => openEntity(`BEAT:${src.file}#${b.id}`) }, "🔗") : null,
        h("button", { class: "small brand", onclick: () => start({ type: "beat", id: `BEAT:${src.file}#${b.id}`, title: `beat ${b.id}「${b.title}」`, file }) }, "✨ 開工")));
  };

  const column = (s) => {
    const drop = h("div", {
      class: "drop",
      ondragover: (e) => { e.preventDefault(); drop.classList.add("over"); },
      ondragleave: () => drop.classList.remove("over"),
      ondrop: (e) => {
        e.preventDefault(); drop.classList.remove("over");
        const [from, i] = where(dragId);
        if (!from) return;
        const cards = [...drop.querySelectorAll(".bcard")].filter((c) => c.dataset.id !== dragId);
        let at = cards.findIndex((c) => e.clientY < c.getBoundingClientRect().top + c.offsetHeight / 2);
        if (at < 0) at = cards.length;
        const [b] = from.beats.splice(i, 1);
        const rest = s.beats;
        const beforeId = cards[at]?.dataset.id;
        const idx = beforeId ? rest.findIndex((x) => x.id === beforeId) : rest.length;
        rest.splice(idx, 0, b);
        if (from === s && idx === i) return rerender();
        b.pending = true;
        const pos = beforeId ? `放喺 ${beforeId} 前面` : "放喺最尾";
        sendIntent({ type: "beat.move", target: b.id, payload: { from_sequence: from.id, to_sequence: s.id, before: beforeId || null, file: src.file },
          note: `將 beat ${b.id}「${b.title}」${from === s ? "" : `由 ${from.id} 搬去 ${s.id}，`}${pos}` });
        rerender();
      },
    }, ...s.beats.map(card));
    return h("div", { class: "col" },
      h("h3", {}, h("span", {}, s.id, h("div", { class: "small muted", style: "font-weight:400" }, s.title)), h("span", { class: "pill" }, s.beats.filter((b) => !b.removed).length)),
      drop,
      h("button", { class: "ghost small", style: "width:100%;margin-top:8px", onclick: () => {
        const title = prompt(`喺 ${s.id} 最尾加一個新 beat，佢做咩？（一句講功能就得）`);
        if (!title) return;
        const id = `新${s.beats.length + 1}`;
        s.beats.push({ id, title, status: "DRAFT", kind: "", summary: "（新增，未設計）", pending: true });
        sendIntent({ type: "beat.add", target: s.id, payload: { title, file: src.file }, note: `喺 ${s.id} 最尾加新 beat：「${title}」` });
        rerender();
      } }, "＋ 加 beat"));
  };

  const merge = () => {
    const ids = [...picked];
    const titles = ids.map((id) => `${id}「${where(id)[0]?.beats[where(id)[1]]?.title}」`);
    sendIntent({ type: "beat.merge", target: ids.join("+"), payload: { beats: ids, file: src.file }, note: `合併 ${titles.join(" + ")}` });
    for (const id of ids.slice(1)) { const [s, i] = where(id); if (s) s.beats[i].removed = true; }
    const [s0, i0] = where(ids[0]); if (s0) s0.beats[i0].pending = true;
    picked.clear(); rerender();
  };

  // 時間線：所有 beat 由上到下嘅 sequence 順序排成一條左→右嘅故事流，睇到整體節奏同埋 R（有外部觸發）／N（底色）嘅分佈
  const timeline = () => {
    const rail = h("div", { class: "tl-rail" });
    seqs.forEach((s, si) => {
      const live = s.beats.filter((b) => !b.removed);
      if (!live.length) return;
      rail.append(h("div", { class: "tl-seg" + (si % 2 ? " alt" : "") },
        h("div", { class: "tl-seg-h" }, h("b", {}, s.id), h("span", { class: "small muted" }, s.title)),
        h("div", { class: "tl-beats" }, ...live.map((b) => h("div", {
          class: `tl-beat s-${b.status}` + (b.pending ? " pending" : ""), title: `${b.id} ${b.title}\n${b.deep?.function || b.summary || ""}`,
          onclick: () => (src.current === "CURRENT" ? openEntity(`BEAT:${src.file}#${b.id}`) : openFile(b.deep?.file || src.file)),
        },
          h("div", { class: "tl-top" }, h("span", { class: "tl-id" }, b.id), b.kind ? h("span", { class: "tl-kind" + (b.kind === "R" ? " r" : "") }, b.kind) : null),
          h("div", { class: "tl-title" }, b.title))))));
    });
    const n = seqs.reduce((a, s) => a + s.beats.filter((b) => !b.removed).length, 0);
    const r = seqs.reduce((a, s) => a + s.beats.filter((b) => !b.removed && b.kind === "R").length, 0);
    return h("div", {},
      h("div", { class: "hint" }, `成個故事流由左到右：每條 sequence 一段，入面嘅 beat 跟順序。色＝狀態（藍 DRAFT／橙 PROVISIONAL／紅 要 revalidate／綠 已批）；R＝有外部觸發，N＝底色／過渡。撳一個 beat 睇佢嘅關聯。而家共 ${n} 個 beat，其中 ${r} 個有外部觸發。時間線睇節奏；要拖卡／合併就切返「看板」。`),
      rail);
  };

  const trackCount = (tr) => data.boards.filter((b) => b.track === tr && b.current === "CURRENT").length;
  const docs = data.boards.filter((b) => b.track === pick.track && (pick.old || b.current === "CURRENT"));
  const select = h("select", { onchange: (e) => { pick.file = e.target.value; picked.clear(); rerender(); } },
    ...docs.map((b) => h("option", { value: b.file, selected: b.file === src.file }, `${b.file.split("/").pop().replace(/\.md$/, "")}（${CUR_LABEL[b.current] || b.current || "未標"}）`)));
  el.append(
    h("div", { class: "toolbar" },
      ...data.tracks.map((tr) => h("button", { class: "chip" + (tr === pick.track ? " on" : ""), onclick: () => { pick.track = tr; pick.file = null; picked.clear(); rerender(); } }, `${tr}（${trackCount(tr)}）`)),
      h("div", { style: "flex:1" }),
      h("div", { class: "seg-toggle" },
        h("button", { class: pick.view !== "timeline" ? "on" : "", onclick: () => { pick.view = "board"; rerender(); } }, "🗂️ 看板"),
        h("button", { class: pick.view === "timeline" ? "on" : "", onclick: () => { pick.view = "timeline"; rerender(); } }, "📈 時間線")),
      select,
      h("label", { style: "font-weight:700" }, h("input", { type: "checkbox", checked: pick.old, onchange: (e) => { pick.old = e.target.checked; rerender(); } }), " 顯示舊版")),
    h("div", { class: "toolbar" }, h("h2", { style: "margin:0;flex:1" }, src.title, src.current !== "CURRENT" ? h("span", { class: "pill warn", style: "margin-left:8px;vertical-align:middle" }, CUR_LABEL[src.current] || src.current) : null),
      picked.size >= 2 ? h("button", { class: "primary", onclick: merge }, `合併已揀嘅 ${picked.size} 個`) : null,
      picked.size ? h("button", { onclick: () => { picked.clear(); rerender(); } }, "取消揀選") : null,
      h("button", { onclick: () => openFile(src.file) }, "睇原文")),
    pick.view === "timeline" ? timeline() : h("div", {},
      h("div", { class: "hint" },
        `由 LAYER_MANIFEST 自動生成：track 跟資料夾分，每份登記咗嘅 Beat 層文件一塊板；逐 beat 詳細設計會自動對返上層。拖卡排位；剔兩張或以上可以合併。所有改動排喺右下角，送出先交畀 AI。顏色：藍＝DRAFT、橙＝PROVISIONAL、紅＝要 revalidate、綠＝已批。`),
      h("div", { class: "board" }, ...seqs.map(column))));
}
