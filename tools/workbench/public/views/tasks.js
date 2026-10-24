// Task board：每張卡一個「▶ 繼續」掣；拖去另一欄＝改狀態（經 AI 更新 TASK_BOARD.md）。
const COLS = [
  ["進行中", "🔵", "info"],
  ["等作者", "🙋", "warn"],
  ["暫停", "⏸️", ""],
  ["完成", "✅", "ok"],
];

export function render(el, ctx) {
  const { h, state, sendIntent, openFile, openLive, newSession, continueTask, taskSession, launch } = ctx;
  const tasks = state.index?.tasks || [];
  const moved = (state._taskMoves ||= {});
  const showDone = (state.showDone ??= false);
  const rerender = () => { el.replaceChildren(); render(el, ctx); };
  let dragId = null;

  const card = (t) => {
    const live = taskSession(t);
    const asking = live?.pending;
    const status = moved[t.id] || t.status;
    const done = status === "完成";
    return h("div", {
      class: "bcard tcard" + (moved[t.id] ? " pending" : "") + (asking ? " asking" : ""), draggable: "true",
      ondragstart: (e) => { dragId = t.id; e.currentTarget.classList.add("dragging"); },
      ondragend: (e) => e.currentTarget.classList.remove("dragging"),
    },
      asking ? h("div", { class: "ask-flag" }, "🙋 AI 問緊你嘢") : null,
      h("div", { class: "ttitle" }, ctx.plain(t.task)),
      h("div", { class: "tmeta" },
        live ? h("span", { class: "pill " + (live.status === "running" ? "info" : "ok") }, live.status === "running" ? "● AI 做緊" : "● 對話開住") : null,
        t.needs_author && !asking ? h("span", { class: "pill warn" }, "要你決定") : null,
        moved[t.id] ? h("span", { class: "pill warn" }, `待送出：改做「${moved[t.id]}」`) : null,
        h("span", { class: "small muted" }, t.updated)),
      t.files.length ? h("div", { class: "tfiles" }, ...t.files.map((f) =>
        h("button", { class: "fchip", title: f, onclick: () => openFile(f) }, "📄 " + f.split("/").pop().replace(/\.md$/, "")))) : null,
      done ? null : h("button", { class: asking ? "brand block" : "primary block", style: "margin-top:10px", onclick: () => continueTask(t) },
        asking ? "去答 AI" : live ? "▶ 返去對話" : "▶ 繼續"));
  };

  const board = h("div", { class: "board" }, ...COLS.filter(([c]) => c !== "完成" || showDone).map(([col, ic, cls]) => {
    const list = tasks.filter((t) => (moved[t.id] || t.status) === col);
    const drop = h("div", {
      class: "drop",
      ondragover: (e) => { e.preventDefault(); drop.classList.add("over"); },
      ondragleave: () => drop.classList.remove("over"),
      ondrop: (e) => {
        e.preventDefault(); drop.classList.remove("over");
        const t = tasks.find((x) => x.id === dragId);
        if (!t || (moved[t.id] || t.status) === col) return;
        moved[t.id] = col;
        sendIntent({ type: "task.set_status", target: t.id, payload: { from: t.status, to: col }, note: `將 task「${t.task}」由「${t.status}」改做「${col}」（TASK_BOARD.md）` });
        rerender();
      },
    }, ...list.map(card), list.length ? null : h("div", { class: "drop-empty" }, "拖 task 嚟呢度"));
    return h("div", { class: "col" }, h("h3", {}, h("span", {}, ic, " ", col), h("span", { class: "pill " + cls }, list.length)), drop);
  }));

  const doneCount = tasks.filter((t) => (moved[t.id] || t.status) === "完成").length;
  el.append(
    h("div", { class: "toolbar" }, h("h2", { style: "margin:0;flex:1" }, "Tasks"),
      h("button", { onclick: () => { state.showDone = !showDone; rerender(); } }, showDone ? "收埋已完成" : `顯示已完成（${doneCount}）`),
      h("button", { onclick: () => openFile("canon/_working/TASK_BOARD.md") }, "睇原文"),
      h("button", { class: "primary", onclick: () => launch({ context: "開新 task：請先喺 TASK_BOARD.md 加一行（狀態「進行中」）" }) }, "＋ 新 task")),
    h("div", { class: "hint" }, "撳「▶ 繼續」就返去嗰個 task：開緊對話就直接跳去，以前傾過就接返舊對話，未開過就開新對話並叫 AI 先交代做到邊。拖張卡去另一欄＝改狀態（排喺右下角，送出先生效）。"),
    board);
}
