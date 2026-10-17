// 對白工作坊：全部角色都列出嚟。有工作坊：睇微場景、🔊朗讀、📊評分、撳揀句；冇工作坊：一撳開（由 voice-designer 照格式建檔）。
// 「🧪 試句」：任何一句即場評自然度。
const VD = "story-character-voice-designer";

export function render(el, ctx) {
  const { h, state, api, toast, openFile, sendIntent, useSkill } = ctx;
  const workshops = state.index?.voice?.rows || [];
  const chars = state.index?.characters?.rows || [];
  const f = (state.voicePick ||= { char: null, pendingOnly: false });
  const rerender = () => { el.replaceChildren(); render(el, ctx); };

  // match a character to its workshop file by English name / file-name tokens (shion_voice_discovery.md ↔ 不知火紫音 Shion)
  const wsOf = (c) => workshops.find((w) => {
    const base = w.file.split("/").pop().toLowerCase();
    const keys = [c.english.split(/\s+/).pop(), ...c.file.split("/").pop().replace(".md", "").split("_")].filter(Boolean).map((x) => x.toLowerCase());
    return keys.some((k) => k.length > 2 && base.startsWith(k));
  });
  const cur = chars.find((c) => c.id === f.char) || chars.find((c) => wsOf(c)) || chars[0];
  const ws = cur && wsOf(cur);

  const speak = (text) => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "zh-HK";
    const v = speechSynthesis.getVoices().find((x) => /zh[-_]HK|Cantonese|粵/i.test(x.lang + x.name));
    if (v) u.voice = v; else toast("搵唔到粵語語音，可能用緊普通話／預設聲");
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  };
  const score = async (text, out) => { out.textContent = "評緊…"; out.textContent = (await api("/api/corpus/score", { text }).catch((e) => ({ output: e.message }))).output.trim(); };

  // 🧪 try any line
  const tryOut = h("pre", { class: "small try-out" });
  const tryIn = h("input", { type: "text", placeholder: "打或者講一句粵語對白（多句用 / 分隔；Enter 評分）", style: "flex:1" });
  tryIn.onEnter = () => tryIn.value.trim() && score(tryIn.value.trim(), tryOut);
  const tryBox = h("div", { class: "card", style: "margin-bottom:16px" }, h("h3", {}, "🧪 試句"),
    h("div", { class: "toolbar", style: "margin:0" }, ctx.mic?.(tryIn), tryIn,
      h("button", { class: "small primary", onclick: () => tryIn.value.trim() && score(tryIn.value.trim(), tryOut) }, "📊 評自然度"),
      h("button", { class: "small", onclick: () => tryIn.value.trim() && speak(tryIn.value.trim()) }, "🔊 讀出嚟")),
    tryOut);

  // character strip: every character, with workshop status
  const strip = h("div", { class: "toolbar" }, ...chars.map((c) => {
    const w = wsOf(c);
    const pending = w ? w.scenes.filter((s) => !s.decided).length : 0;
    return h("button", { class: "chip" + (c === cur ? " on" : ""), onclick: () => { f.char = c.id; rerender(); } },
      `${c.name} `, w ? (pending ? `🙋${pending}` : "✓") : "＋");
  }));

  const name = cur?.name || "";
  const startBar = h("div", { class: "start-bar" },
    ...(ws ? [
      ["▶", "下一個微場景", `繼續 \`${ws.file}\`：揀下一個未做嘅微場景，畀我 4–6 句候選（附語料分數），用選項卡問我揀。`],
      ["⚡", "自動出第一版", `為${name}自動做一版完整說話方式（根據 \`${ws.file}\` 已定嘅選擇＋canon），標 DRAFT，之後逐項同我執。`],
      ["🧪", "交叉測試", `用${name}已定嘅句子做同意圖對比、互換測試同去角色化測試，講邊度唔夠分得出，用選項卡問我點改。`],
      ["📘", "整理成 voice bible", `將 \`${ws.file}\` 已定嘅選擇整理成${name}嘅 voice bible 草稿（canon/_working/character-voice-bibles/），未批唔當 canon。`],
    ] : [
      ["＋", `為${name}開工作坊`, `為${name}（\`${cur?.file}\`）開聲音工作坊：喺 canon/_working/character-voice-workshops/ 建 \`${(cur?.english.split(/\s+/).pop() || cur?.file.split("/").pop().replace(".md", "")).toLowerCase()}_voice_discovery.md\`。先做 evidence triage，再出第一個微場景（每個微場景用「## 微場景 N — …」、候選表頭「候選 | 百分位 | 備註」、揀完寫「### 作者選擇」），用選項卡問我揀。`],
      ["⚡", "自動出第一版", `由現有 canon 為${name}自動整第一版說話方式（標 DRAFT），列出最唔肯定嘅 3 點用選項卡問我。`],
    ]).map(([ic, label, prompt]) => h("button", { class: "start-btn", onclick: () => useSkill(VD, prompt, `${name} ${label}`) }, h("span", { class: "sb-ic" }, ic), label)));

  const cand = (sc, c) => {
    const out = h("pre", { class: "small try-out", style: "display:none" });
    return h("div", { class: "cand" + (sc.pick.includes(c.line.replace(/[。！？]$/, "")) ? " picked" : "") },
      h("div", { class: "cand-main" }, h("b", {}, c.line), c.pct ? h("span", { class: "pill " + (parseInt(c.pct) >= 80 ? "ok" : parseInt(c.pct) < 40 ? "bad" : "") }, `語料 ${c.pct}`) : null,
        c.note ? h("div", { class: "small muted" }, c.note) : null, out),
      h("button", { class: "small", title: "朗讀", onclick: () => speak(c.line) }, "🔊"),
      h("button", { class: "small", title: "語料評分", onclick: () => { out.style.display = "block"; score(c.line, out); } }, "📊"),
      sc.decided ? null : h("button", { class: "small primary", onclick: () => sendIntent({ type: "voice.pick", target: `${ws.file}#${sc.title}`, payload: { line: c.line },
        note: `${name}「${sc.title.slice(0, 30)}」揀：「${c.line}」（記入工作坊「作者選擇」）` }) }, "揀呢句"));
  };

  el.append(...[h("h2", {}, "對白工作坊"),
    h("div", { class: "hint" }, "全部角色都喺度：＋＝未有工作坊（一撳就開），🙋＝有微場景等你揀，✓＝暫時揀晒。每句候選可以朗讀同評分；揀句排入右下角，送出由 Claude 記錄。"),
    tryBox, strip, startBar,
    ws ? h("div", { class: "toolbar" },
      h("label", { style: "font-weight:700" }, h("input", { type: "checkbox", checked: f.pendingOnly, onchange: (e) => { f.pendingOnly = e.target.checked; rerender(); } }), " 只睇未定"),
      h("button", { class: "small", onclick: () => openFile(ws.file) }, "📄 睇原文")) : null,
    ...(ws ? ws.scenes.filter((s) => !f.pendingOnly || !s.decided).map((sc) => h("div", { class: "card", style: "margin-bottom:12px" },
      h("div", { style: "display:flex;gap:8px;align-items:baseline;flex-wrap:wrap" }, h("h3", { style: "margin:0;flex:1" }, sc.title),
        h("span", { class: "pill " + (sc.decided ? "ok" : "warn") }, sc.decided ? "已定" : "未定")),
      sc.pick ? h("div", { class: "pick-box" }, "✅ ", sc.pick) : null,
      ...sc.candidates.map((c) => cand(sc, c)),
      sc.candidates.length ? null : h("div", { class: "small muted", style: "margin-top:6px" }, "呢段冇候選表（可能係證據整理或者已經定咗）")))
      : [h("div", { class: "card empty-start" }, h("div", { class: "mascot" }, "🗣️"), h("h3", {}, `${name} 未有聲音工作坊`), h("p", { class: "muted" }, "撳上面「＋ 開工作坊」，Claude 會照網頁讀得到嘅格式建檔，再出第一個微場景畀你揀。"))]),
    ws && !ws.scenes.length ? h("div", { class: "card empty-start" }, h("p", { class: "muted" }, "呢份工作坊仲未有微場景候選（可能只做咗證據整理）。撳「▶ 下一個微場景」開始。")) : null].filter(Boolean));
}
