// 🌳 Work tree for the 流程 page: 全作 › Act › 大流程 › 工作. Built only from what the files already say:
// pipeline trackers' 「屬於：」 line, TASK_BOARD's 屬於 column, task step files (canon/_working/tasks/<ID>.md).
// Anything without a 屬於 sits under 「未掛」 until the AI suggests a place and the author approves it.
export function workTree(ctx, f, rerender) {
  const { h, state, plain } = ctx;
  const pipes = state.index?.pipelines?.rows || [];
  const tasks = (state.index?.tasks || []).filter((t) => t.status !== "完成");
  const big = pipes.filter((p) => p.kind !== "task");
  const stepFile = (t) => pipes.find((p) => p.kind === "task" && p.file.endsWith(`/tasks/${t.id}.md`));
  const actOf = (s) => /^工具/.test(s || "") ? "工具" : (String(s || "").match(/Act\s*(IV|I{1,3})/i) || [])[0]?.replace(/\s+/, " ") || (/全作/.test(s || "") ? "全作" : "");

  // pipelines go under their Act; tasks under a pipeline whose name their 屬於 starts with, else under their Act
  const groups = new Map([["全作", { pipes: [], tasks: [] }]]);
  const group = (k) => { if (!groups.has(k)) groups.set(k, { pipes: [], tasks: [] }); return groups.get(k); };
  for (const p of big) group(actOf(p.parent) || "未掛").pipes.push(p);
  const under = new Map();
  for (const t of tasks) {
    const pl = big.find((p) => t.parent && t.parent.startsWith(p.short.trim()));
    if (pl) (under.get(pl.file) || under.set(pl.file, []).get(pl.file)).push(t);
    else group(actOf(t.parent) || "未掛").tasks.push(t);
  }
  const order = ["全作", "Act I", "Act II", "Act III", "Act IV", "工具", "未掛"];
  const keys = [...groups.keys()].sort((a, b) => (order.indexOf(a) + 99) % 99 - (order.indexOf(b) + 99) % 99);

  const dots = (stages) => h("span", { class: "flow-mini" }, ...stages.map((x) => h("i", { class: "d-" + (x.status || "TODO") })));
  const pipeNode = (p) => h("div", { class: "tree-node pipe" + (f.pipe === p.file ? " on" : ""), onclick: () => { f.pipe = p.file; f.step = ""; rerender(); } },
    h("div", { class: "tree-label" }, "🛤️ " + p.short, h("span", { class: "small muted" }, ` ${p.done}/${p.stages.length}`)), dots(p.stages));
  const taskNode = (t) => { const sf = stepFile(t); const key = sf ? sf.file : "task:" + t.id;
    return h("div", { class: "tree-node task" + (f.pipe === key ? " on" : ""), onclick: () => { f.pipe = key; f.step = ""; rerender(); } },
      h("div", { class: "tree-label" }, "📋 ", plain(t.task), h("span", { class: "pill " + ({ 等作者: "warn", 進行中: "info" }[t.status] || "") }, t.status === "等作者" ? "等你" : t.status)),
      sf ? dots(sf.stages) : h("div", { class: "small muted" }, "未有步驟計劃")); };

  return h("div", { class: "flow-list tree" }, ...keys.flatMap((k) => {
    const g = groups.get(k);
    if (!g.pipes.length && !g.tasks.length && k !== "全作") return [];
    return [h("div", { class: "tree-act" }, k === "未掛" ? "❔ 未掛（等 AI 建議放邊）" : k === "全作" ? "🌳 全作" : k === "工具" ? "🧰 工具（唔係故事工作）" : "📖 " + k),
      ...g.pipes.flatMap((p) => [pipeNode(p), ...(under.get(p.file) || []).map((t) => h("div", { class: "tree-indent" }, taskNode(t)))]),
      ...g.tasks.map(taskNode)];
  }));
}

// a task that has no step file yet: what it is + one button to have the AI plan its steps (story-work-flow)
export function taskPanel(ctx, id) {
  const { h, state, newSession, openEntity, plain } = ctx;
  const t = (state.index?.tasks || []).find((x) => x.id === id);
  if (!t) return h("div", { class: "card" }, "搵唔到呢件工作");
  return h("div", { class: "card flow-detail" },
    h("div", { class: "small muted" }, "工作 · " + (t.parent ? "屬於：" + t.parent : "未掛去邊件大工作")),
    h("h2", { style: "margin:4px 0 8px" }, plain(t.task)),
    h("div", { class: "flow-hint" }, h("b", {}, "💡 建議而家做："), " 呢件工作未有步驟計劃。撳「拆步驟」，AI 會用工作流管家（story-work-flow）由粗到幼拆好步驟、標好份量同邊步要停低，畀你批咗先開始。"),
    h("div", { class: "flow-acts", style: "margin-top:10px" },
      h("div", { class: "flow-act" }, h("button", { class: "primary", onclick: () => newSession(`請用 \`story-work-flow\` skill：為工作「${t.task.slice(0, 80)}」拆步驟計劃（寫入 canon/_working/tasks/${t.id}.md），${t.parent ? "" : "同埋建議佢屬於工作樹邊度，"}用選項卡畀我批先開始。`, "拆步驟：" + t.task.slice(0, 16), t.id) }, "🧩 拆步驟"),
        h("span", { class: "small muted" }, "開新對話，AI 拆好步驟畀你批，唔會即刻開工")),
      h("div", { class: "flow-act" }, h("button", { onclick: () => openEntity(t.id) }, "詳情"), h("span", { class: "small muted" }, "睇呢件工作連住咩文件、問題同對話"))));
}
