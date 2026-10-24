// 對話旁邊嘅「而家喺邊」面板：由 session 事件流重建（重連時會由頭 replay，所以唔使另外存）。
// 來源：Skill 工具（用緊邊個 skill）、TodoWrite／TaskCreate／TaskUpdate（步驟）、ui:progress（層／階段）、ui:next（建議下一步）。
const STATUS = {
  running: ["🌸", "AI 做緊嘢…"], waiting: ["🙋", "AI 等緊你回覆"], idle: ["✅", "到你講嘢"], closed: ["💤", "對話已結束"],
};

export function createProgress({ h, sendToAI, taskName, choicesOf = () => [], openEntity = () => {}, openFile = () => {}, fileId = () => null, openDiscuss = () => {}, layers = [] }) {
  // layers come from tools/workbench/ui_config.json (order = pipeline order; "match" = words that mean that layer)
  const LAYERS = layers.filter((l) => l.track !== false).map((l) => [l.id, l.name]);
  const MATCH = [...layers].reverse().map((l) => [new RegExp(l.match || l.id, "i"), l.id]);
  const layerOf = (s) => (s ? (MATCH.find(([re]) => re.test(String(s))) || [])[1] : null);
  const el = h("aside", { class: "progress-panel" });
  let st;
  const reset = () => {
    st = { status: "idle", layer: null, stage: "", task: taskName || "", skills: [], activity: "", steps: [], tmp: {}, next: [], files: new Map() };
    paint();
  };

  let queued = false;
  const paint = () => { if (!queued) { queued = true; requestAnimationFrame(() => { queued = false; draw(); }); } };

  const step = (id) => st.steps.find((x) => x.id === id);
  const uiBlocks = (text) => [...text.matchAll(/```ui:([\w-]+)\s*\n([\s\S]*?)```/g)].map(([, type, raw]) => { try { return [type, JSON.parse(raw)]; } catch { return [type, null]; } });

  function onEvent(ev) {
    switch (ev.kind) {
      case "status": st.status = ev.status; if (ev.status !== "running") st.activity = ""; break;
      case "user": st.next = []; break;
      case "tool": {
        const i = ev.input || {};
        const fk = { Read: "read", Edit: "edit", Write: "edit", NotebookEdit: "edit" }[ev.name];
        if (fk && i.file_path && st.files.get(i.file_path) !== "edit") st.files.set(i.file_path, fk);
        if (ev.name === "Skill" && i.skill) { st.skills = [i.skill, ...st.skills.filter((s) => s !== i.skill)].slice(0, 5); st.activity = `用緊 skill：${i.skill}`; }
        else if (ev.name === "TodoWrite" && Array.isArray(i.todos)) st.steps = i.todos.map((t, n) => ({ id: "todo" + n, text: t.content, active: t.activeForm, status: t.status }));
        else if (ev.name === "TaskCreate") st.steps.push({ id: ev.id, text: i.subject, active: i.activeForm, status: "pending" });
        else if (ev.name === "TaskUpdate") {
          const s = step(st.tmp[i.taskId] || i.taskId);
          if (s) { if (i.status === "deleted") st.steps = st.steps.filter((x) => x !== s); else Object.assign(s, i.status ? { status: i.status } : {}, i.subject ? { text: i.subject } : {}, i.activeForm ? { active: i.activeForm } : {}); }
        } else {
          const label = i.description || i.file_path?.split(/[\\/]/).pop() || i.pattern || i.command?.slice(0, 40) || "";
          st.activity = `${({ Read: "讀緊", Edit: "改緊", Write: "寫緊", Grep: "搜尋緊", Glob: "搵緊檔", Bash: "執行緊", Agent: "派緊助手", WebSearch: "上網搵緊", WebFetch: "讀緊網頁" })[ev.name] || ev.name} ${label}`.trim();
        }
        break;
      }
      case "tool_result":
        if (ev.name === "TaskCreate" && ev.result?.task?.id) { st.tmp[ev.result.task.id] = ev.id; }
        break;
      case "text":
        for (const [type, d] of uiBlocks(ev.text)) {
          if (!d) continue;
          if (type === "progress" || type === "status") {
            st.layer = layerOf(d.layer) || st.layer;
            st.stage = d.stage || d.doing || st.stage;
            st.task = d.task || st.task;
            if (Array.isArray(d.steps) && !st.steps.length) st.steps = d.steps.map((x, n) => ({ id: "p" + n, text: x.text || x, status: x.status || "pending" }));
          }
          if (type === "next" && Array.isArray(d.suggestions)) st.next = d.suggestions.slice(0, 4);
          if (type === "mini-log" && d.next && !st.next.length) st.next = [{ label: String(d.next).slice(0, 60), prompt: `好，照你講：${d.next}` }];
        }
        break;
    }
    paint();
  }

  // 📎 files this conversation read / changed — each opens its drawer (relations, other conversations, actions)
  function filesSec() {
    const all = [...st.files].map(([p, kind]) => ({ p, kind, id: fileId(p), name: p.split(/[\\/]/).pop() }))
      .sort((a, b) => (a.kind === b.kind ? 0 : a.kind === "edit" ? -1 : 1));
    const edits = all.filter((f) => f.kind === "edit").length;
    return h("div", { class: "pp-sec" }, h("div", { class: "pp-h" }, "📎 今次涉及", h("span", { class: "pp-count" }, edits ? `改咗 ${edits}・讀咗 ${all.length - edits}` : `讀咗 ${all.length}`)),
      h("div", { class: "pp-files" }, ...all.slice(0, 14).map((f) => h("button", { class: "ent-chip" + (f.kind === "edit" ? " edited" : ""), title: f.p,
        onclick: () => (f.id ? openEntity(f.id) : openFile(f.p)) }, f.kind === "edit" ? "✏️ " : "📖 ", f.name)),
        all.length > 14 ? h("span", { class: "small muted" }, `…仲有 ${all.length - 14} 個`) : null));
  }

  function draw() {
    const [ic, label] = STATUS[st.status] || STATUS.idle;
    const done = st.steps.filter((s) => s.status === "completed").length;
    const cur = st.steps.find((s) => s.status === "in_progress");
    const li = LAYERS.findIndex(([k]) => k === st.layer);
    el.replaceChildren(...[
      h("div", { class: "pp-status s-" + st.status }, h("span", { class: "pp-ic" }, ic),
        h("div", {}, h("div", { class: "pp-label" }, label), st.status === "running" ? h("div", { class: "pp-act" }, cur?.active || st.activity || "諗緊…") : null)),

      h("div", { class: "pp-sec" }, h("div", { class: "pp-h" }, "📍 而家喺邊"),
        h("div", { class: "pp-layers" }, ...LAYERS.map(([k, name], i) => h("div", { class: "pp-layer clickable-layer" + (i === li ? " on" : i < li ? " past" : ""),
          title: li < 0 ? `由 ${name} 層開始` : i === li ? `喺 ${name} 層再深入` : i > li ? `推進到 ${name} 層` : `退返 ${name} 層`,
          onclick: () => sendToAI(li < 0 ? `我想喺「${name}」層做嘢。請先確認上層有冇批核、夠唔夠穩定（照 CLAUDE.md 嘅 pipeline），唔夠就講清欠咩，用選項卡問我。`
            : i === li ? `喺而家「${name}」層再深入：搵出呢層仲未夠穩定嘅位，畀我候選，用選項卡問我。`
            : i > li ? `我想推進到「${name}」層。請先按 Director Layer Gate 檢查目前層夠唔夠穩定、有冇未批嘅嘢；夠就出 Layer Review Packet 畀我批，唔夠就講清欠咩。唔可以跳層。`
            : `我想退返「${name}」層重新諗。請講清退返會令邊啲下層 work 要 revalidate，然後喺「${name}」層同我傾，用選項卡問我。`) },
          h("div", { class: "pp-dot" }), h("div", { class: "pp-ln" }, name)))),
        h("div", { class: "small muted", style: "margin-top:4px" }, "撳一層：深入／推進／退返（一律照 layer gate）"),
        st.task ? h("div", { class: "pp-task" }, "📌 ", st.task) : null,
        st.stage ? h("div", { class: "pp-stage" }, st.stage) : null,
        li < 0 && !st.task && !st.stage ? h("div", { class: "pp-empty" }, "AI 講明做緊邊層之後會喺度亮起") : null),

      st.skills.length ? h("div", { class: "pp-sec" }, h("div", { class: "pp-h" }, "🧠 用緊嘅 skill"),
        h("div", { class: "pp-skills" }, ...st.skills.map((s, i) => h("span", { class: "pill " + (i === 0 ? "accent" : "") }, s))),
        h("div", { class: "pp-choices" }, ...choicesOf(st.skills[0]).map((c) => h("button", { class: "pp-sugg", disabled: st.status === "running", title: c.prompt,
          onclick: () => sendToAI(`請用 \`${st.skills[0]}\` skill：${c.prompt.replaceAll("{goal}", "（就而家呢件事）")}`) }, h("div", { class: "l" }, `${c.icon} ${c.label}`))))) : null,

      h("div", { class: "pp-sec" }, h("div", { class: "pp-h" }, "📋 今輪步驟", st.steps.length ? h("span", { class: "pp-count" }, `${done}/${st.steps.length}`) : null),
        st.steps.length
          ? h("div", {}, h("div", { class: "pp-bar" }, h("div", { style: `width:${(done / st.steps.length) * 100}%` })),
              ...st.steps.map((s) => h("div", { class: "pp-step " + s.status }, h("span", { class: "pp-box" }, s.status === "completed" ? "✓" : s.status === "in_progress" ? "●" : ""),
                h("span", {}, s.status === "in_progress" && s.active ? s.active : s.text))))
          : h("div", { class: "pp-empty" }, "AI 開始多步驟工作時，步驟會喺度逐步剔")),

      st.files.size ? filesSec() : null,

      st.next.length ? h("div", { class: "pp-sec pp-next" }, h("div", { class: "pp-h" }, "💡 建議下一步"),
        ...st.next.map((s) => h("button", { class: "pp-sugg", disabled: st.status === "running", onclick: () => { if (s.discuss) return openDiscuss(s.discuss); st.next = []; paint(); sendToAI(s.prompt || s.label); } },
          h("div", { class: "l" }, s.discuss ? "🤖 " : "", s.label), s.why ? h("div", { class: "w" }, s.why) : null))) : null,
    ].filter(Boolean));
  }

  reset();
  return { el, onEvent, reset, skills: () => st.skills.slice(), fileIds: () => [...new Set([...st.files.keys()].map(fileId).filter(Boolean))].slice(0, 12) };
}
