// 今日：只講重點。①最緊要嘅一件事（一個大掣）②四個數字 ③進行中清單（一行一項，撳開先見詳情）④pipeline 路線。
const short = (s, n = 16) => {
  const cut = String(s || "").split(/[：；（(｜|—]/)[0].trim();
  const x = cut.length >= 3 ? cut : String(s || "");
  return x.length > n ? x.slice(0, n) + "…" : x;
};

export function render(el, ctx) {
  const { h, state, openLive, openFile, newSession, switchTab, continueTask, sendIntent } = ctx;
  const idx = state.index || {};
  const tasks = (idx.tasks || []).filter((t) => t.status !== "完成");
  const live = state.live.filter((s) => s.status !== "closed");
  const waiting = live.filter((s) => s.pending);
  const pipes = (idx.pipelines?.rows || []).filter((p) => p.active);
  const na = idx.next_action;
  const qs = idx.questions || [];
  const curStage = (pl) => pl.stages.find((s) => ["IN_PROGRESS", "AWAITING", "BLOCKED"].includes(s.status));
  const goPipe = (pl, s = curStage(pl)) => newSession(`繼續 pipeline「${pl.short}」（\`${pl.file}\`）${s ? `嘅 ${s.code}「${s.title}」` : ""}：用白話講做到邊、下一步、要我決定咩，然後開始。`, pl.short);

  // ---------- ① focus: the single most important thing ----------
  const gatePipe = pipes.find((p) => { const s = curStage(p); return s && (s.status === "AWAITING" || s.author_gate); });
  const focus = waiting[0] ? { ic: "🙋", title: `Claude 喺「${short(waiting[0].title)}」問緊你`, sub: "撳入去揀答案就得", btn: "去答", go: () => openLive(waiting[0].id) }
    : na?.needs_author ? { ic: "👉", title: "下一步要你決定", sub: ctx.plain(na.text), btn: "開始", go: () => newSession("請讀 NEXT_ACTION.md 最頂嗰條單一步，用白話講要我決定咩，用選項卡問我。", "下一步") }
    : gatePipe ? { ic: "👑", title: `「${gatePipe.short}」要你批`, sub: `${curStage(gatePipe).code} ${short(curStage(gatePipe).title, 20)}`, btn: "去批", go: () => goPipe(gatePipe) }
    : { ic: "🌸", title: "冇嘢等你", sub: "揀一樣嘢繼續，或者開新工作", btn: "做下一步", go: () => newSession("請讀 NEXT_ACTION.md，然後開始做。", "下一步") };
  const hero = h("div", { class: "hero focus" }, h("div", { class: "mascot" }, focus.ic),
    h("div", { style: "flex:1;min-width:0" }, h("h2", {}, focus.title), h("p", {}, focus.sub)),
    h("button", { onclick: focus.go }, focus.btn));

  // ---------- ② four numbers ----------
  const stat = (cls, ic, n, l, go) => h("div", { class: "stat clickable " + cls, onclick: go }, h("span", { class: "ic" }, ic), h("div", {}, h("div", { class: "n" }, n), h("div", { class: "l" }, l)));
  const questionsOf = (st) => () => { state.qFilter = { status: new Set([st]), text: "" }; switchTab("questions"); };
  const stats = h("div", { class: "stats" },
    stat("orange", "🙋", waiting.length + tasks.filter((t) => t.needs_author).length, "等你", () => switchTab("tasks")),
    stat("blue", "🔵", live.length + pipes.length, "進行中", () => document.querySelector(".now-card")?.scrollIntoView({ behavior: "smooth" })),
    stat("red", "🚧", qs.filter((q) => q.status === "BLOCKED").length, "卡住", questionsOf("BLOCKED")),
    stat("", "📝", (idx.todos?.rows || []).length, "待辦", () => switchTab("todo")));

  // ---------- ③ one list of everything in progress ----------
  const rows = [];
  const row = (ic, name, chip, chipCls, btn, detail) => {
    const more = detail ? h("div", { class: "now-more" }, ...detail.filter(Boolean)) : null;
    rows.push(h("div", { class: "now-row" + (chipCls === "warn" ? " need" : ""), onclick: (e) => { if (more && !e.target.closest("button")) more.classList.toggle("open"); } },
      h("span", { class: "now-ic" }, ic),
      h("div", { class: "now-main" }, h("div", { class: "now-name" }, name), more),
      h("span", { class: "pill " + chipCls }, chip), btn));
  };
  for (const s of live) {
    row(s.status === "running" ? "🌸" : "💬", short(s.title, 22), s.pending ? "問緊你" : s.status === "running" ? "做緊" : "等你講", s.pending ? "warn" : s.status === "running" ? "info" : "",
      h("button", { class: "small " + (s.pending ? "brand" : "primary"), onclick: () => openLive(s.id) }, s.pending ? "去答" : "去睇"),
      s.status === "running" && s.activity ? [h("div", { class: "now-line" }, s.activity)] : null);
  }
  for (const pl of pipes) {
    const cur = curStage(pl), nxt = pl.stages.find((s) => s.status === "TODO" || s.status === "");
    const need = cur && (cur.status === "AWAITING" || cur.author_gate);
    row("🛤️", pl.short, need ? "要你批" : cur?.status === "BLOCKED" ? "卡住" : `${pl.done}/${pl.stages.length}`, need ? "warn" : cur?.status === "BLOCKED" ? "bad" : "info",
      h("button", { class: "small primary", onclick: () => goPipe(pl) }, "▶"),
      [cur ? h("div", { class: "now-line" }, h("b", {}, "做緊 "), ctx.plain(cur.title)) : null, nxt ? h("div", { class: "now-line" }, h("b", {}, "下一步 "), ctx.plain(nxt.title)) : null]);
  }
  for (const t of tasks.filter((t) => !live.some((s) => s.taskId === t.id))) {
    row("🗂️", short(t.task, 22), t.needs_author ? "要你決定" : t.status, t.needs_author ? "warn" : "",
      h("button", { class: "small primary", onclick: () => continueTask(t) }, "▶"), [h("div", { class: "now-line" }, ctx.plain(t.task))]);
  }
  const nowCard = h("div", { class: "card now-card" }, h("h3", {}, "進行中"), ...(rows.length ? rows : [h("div", { class: "muted" }, "冇嘢進行緊")]));

  // ---------- ④ pipeline paths (compact) ----------
  const stageBox = h("div");
  const openStage = (pl, s) => stageBox.replaceChildren(h("div", { class: "stage-pop" },
    h("div", { style: "display:flex;gap:8px;align-items:center;flex-wrap:wrap" }, h("b", { style: "flex:1" }, `${s.code} ${s.title}`),
      h("span", { class: "pill " + ({ DONE: "ok", IN_PROGRESS: "warn", BLOCKED: "bad" }[s.status] || "") }, s.status || "未標")),
    h("div", { class: "actions", style: "justify-content:flex-start" },
      ...(s.skills.length ? s.skills : ["story-orchestrator"]).slice(0, 3).map((sk, i) => h("button", { class: "small" + (i ? "" : " primary"),
        onclick: () => newSession(`請用 \`${sk}\` skill 做「${pl.short}」嘅 ${s.code}「${s.title}」（\`${pl.file}\` 第 ${s.line} 行）。先用白話講要做咩、要我決定咩，然後開始。`, `${s.code} ${short(s.title, 10)}`) }, "▶ " + sk.replace(/^story-/, ""))),
      h("button", { class: "small", title: "睇 tracker", onclick: () => openFile(pl.file) }, "📄"),
      h("button", { class: "small", title: "改狀態", onclick: () => { const v = prompt(`${s.code} 改做咩狀態？（DONE／IN_PROGRESS／BLOCKED／DEFERRED／TODO）`, s.status || ""); if (v) sendIntent({ type: "pipeline.set_status", target: `${pl.file}#${s.code}`, payload: { status: v }, note: `「${pl.short}」${s.code} 改做 ${v}` }); } }, "✏️"))));
  const pathCard = h("div", { class: "card" }, h("h3", {}, "路線"));
  for (const pl of pipes) {
    const cur = curStage(pl);
    const path = h("div", { class: "path compact" });
    pl.stages.forEach((s, i) => {
      if (i) path.append(h("div", { class: "link" + (pl.stages[i - 1].status === "DONE" ? " done" : "") }));
      path.append(h("div", { class: "node clickable-node " + s.status, title: `${s.code} ${s.title}`, onclick: () => openStage(pl, s) },
        s.author_gate ? h("span", { class: "gate" }, "👑") : null,
        h("div", { class: "bubble" }, s.status === "DONE" ? "✓" : s.status === "BLOCKED" ? "!" : s.code.replace(/^(Stage|Phase|階段)\s?/, "")),
        s === cur ? h("div", { class: "cap" }, short(s.title, 8)) : null));
    });
    pathCard.append(h("div", { class: "pipe" }, h("div", { class: "pipe-head" }, h("b", { style: "flex:1" }, pl.short), h("span", { class: "small muted" }, `${pl.done}/${pl.stages.length}`)), path));
  }
  pathCard.append(stageBox);

  const warns = idx.warnings || [];
  el.append(hero, stats, nowCard, h("div", { style: "height:16px" }), pipes.length ? pathCard : "",
    h("div", { class: "small muted", style: "margin-top:14px;font-weight:700;display:flex;gap:12px" }, `更新：${idx.generated_at || "-"}`,
      warns.length ? h("a", { href: "#", onclick: (e) => { e.preventDefault(); alert(warns.join("\n")); } }, `⚠️ ${warns.length} 個資料提示`) : null));
}
