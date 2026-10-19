// 📋 Top of every chat: which piece of work it belongs to, where that sits in the work tree
// (全作 › Act › 大流程 › 工作), and all of its steps. Steps come from the work's step file
// (canon/_working/tasks/<ID>.md) or, for a pipeline step, from that tracker. Buttons change only work-state markers:
// pace 每步停／自動, per step ◆ (stop for the author) and 〔輕／中／重〕 (which model runs it — ui_config step_models).
// Links come from the AI's ui:status "work", the 流程 page, the Task board's Session column, or the author's pick;
// with none, a guess from the files the chat touched is shown as （估）.
const ZH = { DONE: "做完", IN_PROGRESS: "做緊", AWAITING: "等你", BLOCKED: "卡住", DEFERRED: "押後", TODO: "未做", "": "未做" };
const IC = { DONE: "✓", IN_PROGRESS: "▶", AWAITING: "🙋", BLOCKED: "⛔", DEFERRED: "⏸" };

export function workCard(ctx, getSid) {
  const { h, state, api, toast, openEntity, plain } = ctx;
  const el = h("div", { class: "work-card" });
  let open = null;          // step code expanded in the stepper
  const live = {};          // step status reported by ui:step during this turn (before the file is re-read)

  const tasks = () => state.index?.tasks || [];
  const pipes = () => state.index?.pipelines?.rows || [];

  // ---------- which work ----------
  function links(sid) {
    const set = new Set(state.links?._bySession?.[sid] || []);
    for (const [w, v] of Object.entries(state.links || {})) if (v === sid) set.add(w);
    for (const t of tasks()) if (t.session && t.session !== "—" && sid.startsWith(t.session)) set.add(t.id);
    set.delete("_bySession");
    return [...set];
  }
  function guesses(sid) {
    const files = new Set(state.index?.entities?.[sid.startsWith("DISC:") ? sid : "CONV:" + sid]?.rel || []); // a discussion's entity is DISC:<id>
    return files.size ? tasks().filter((t) => t.status !== "完成" && t.files.some((f) => files.has(f))).map((t) => t.id).slice(0, 1) : [];
  }
  const link = async (sid, work) => {
    const r = await api("/api/link", { sid, work }).catch((e) => toast(e.message));
    if (r?.links) state.links = r.links;
    update();
  };

  // a work id -> { title, status, steps source, path }
  function resolve(w) {
    const t = tasks().find((x) => x.id === w);
    if (t) {
      const sf = pipes().find((p) => p.kind === "task" && p.file.endsWith(`/tasks/${t.id}.md`));
      return { kind: "task", title: t.task, status: t.status, parent: t.parent, steps: sf, entity: t.id };
    }
    const [file, code] = String(w).split("#");
    const pl = pipes().find((p) => p.file === file);
    if (pl) return { kind: "pipe", title: pl.short, status: "", parent: pl.parent, steps: pl, focus: code, entity: "PIPE:" + pl.file };
    return null;
  }
  // 全作 › Act › 大流程 › 工作: walk "屬於" upwards through pipelines whose short name matches
  function path(info) {
    const out = [];
    let p = info.parent, guard = 0;
    while (p && guard++ < 6) {
      out.unshift(p);
      const up = pipes().find((x) => x.kind !== "task" && p.startsWith(x.short.trim()));
      p = up && up.parent && up.parent !== p ? up.parent : "";
    }
    if (!out.length || !/^全作/.test(out[0])) out.unshift("全作");
    return out;
  }

  // ---------- stepper ----------
  const setStep = async (file, body) => {
    await api("/api/work/step", { file, ...body }).catch((e) => toast(e.message));
    await ctx.reloadIndex?.(); update();
  };
  function stepper(info) {
    const pl = info.steps;
    if (!pl) return h("div", { class: "work-steps-empty" }, "呢件工作未有步驟計劃。AI 開工時會先拆步驟畀你批。");
    const cur = pl.stages.find((x) => ["IN_PROGRESS", "AWAITING", "BLOCKED"].includes(live[x.code] || x.status))
      || pl.stages.find((x) => !(live[x.code] || x.status) || (live[x.code] || x.status) === "TODO");
    const chips = pl.stages.map((x, i) => {
      const st = live[x.code] || x.status || "TODO";
      return h("button", { class: `work-step s-${st}` + (x === cur ? " cur" : "") + (open === x.code ? " open" : ""), title: `${x.title}（${ZH[st] || st}）`,
        onclick: () => { open = open === x.code ? null : x.code; update(); } },
        h("span", { class: "n" }, IC[st] || String(i + 1)), h("span", { class: "t" }, x.title),
        x.weight ? h("span", { class: "w w-" + x.weight }, x.weight) : null, x.author_gate ? h("span", { class: "g", title: "做完要停低等你" }, "◆") : null);
    });
    const sel = pl.stages.find((x) => x.code === open);
    const detail = sel ? h("div", { class: "work-step-detail" },
      h("b", {}, sel.title), " ", h("span", { class: "pill" }, ZH[live[sel.code] || sel.status] || "未做"),
      sel.note && !/^skills?\s*[:：]/i.test(sel.note) ? h("div", { class: "small" }, plain(sel.note)) : null,
      (sel.checks || []).length ? h("div", { class: "small" }, ...sel.checks.map((c) => c.done ? h("div", { class: "muted" }, "☑ ", plain(c.text))
        : h("button", { class: "flow-check flow-item", title: "叫 AI 做呢項：" + c.text, onclick: () => ctx.sendToClaude(`用 story-work-flow 做「${sel.title}」入面嘅一項：「${c.text}」。先講你會點做同會改邊啲檔，淨係做呢一項，做完喺步驟檔剔返，再停低問我。`) },
            h("span", { class: "flow-item-box" }, "☐"), plain(c.text), h("span", { class: "flow-item-go" }, "▶ 叫 AI 做")))) : null,
      sel.outputs ? h("div", { class: "small muted" }, "做完會有：", sel.outputs) : null,
      h("div", { class: "work-step-btns" },
        h("span", { class: "small muted" }, "做完："),
        h("button", { class: "small" + (sel.author_gate ? " on" : ""), onclick: () => setStep(pl.file, { code: sel.code, gate: true }) }, "停低等我"),
        h("button", { class: "small" + (!sel.author_gate ? " on" : ""), onclick: () => setStep(pl.file, { code: sel.code, gate: false }) }, "照節奏"),
        h("span", { class: "small muted", style: "margin-left:10px" }, "份量（揀 model）："),
        ...["輕", "中", "重"].map((w) => h("button", { class: "small" + (sel.weight === w ? " on" : ""), title: `${w}＝${state.config?.step_models?.[w] || ""}`, onclick: () => setStep(pl.file, { code: sel.code, weight: sel.weight === w ? "" : w }) }, w)))) : null;
    const done = pl.stages.filter((x) => (live[x.code] || x.status) === "DONE").length;
    return h("div", {},
      h("div", { class: "work-steps" }, ...chips),
      h("div", { class: "work-meta small" },
        h("span", { class: "muted" }, `做完 ${done}/${pl.stages.length} 步`),
        pl.kind === "task" ? h("span", { class: "work-pace" }, "節奏：",
          ...["每步停", "自動"].map((p) => h("button", { class: "small" + (pl.pace === p ? " on" : ""), title: p === "每步停" ? "每做完一步都停低畀你睇" : "淨係標咗停低嘅步先停", onclick: () => setStep(pl.file, { pace: p }) }, p))) : null),
      detail);
  }

  // ---------- picker (nothing linked) ----------
  function picker(sid) {
    const opts = [...tasks().filter((t) => t.status !== "完成").map((t) => [t.id, "📋 " + t.task.slice(0, 50)]),
      ...pipes().filter((p) => p.active && p.kind !== "task").map((p) => { const st = p.stages.find((x) => ["IN_PROGRESS", "AWAITING", "BLOCKED"].includes(x.status)) || p.stages.find((x) => !x.status || x.status === "TODO");
        return st && [`${p.file}#${st.code}`, `🛤️ ${p.short}：${st.title}`]; }).filter(Boolean)];
    return h("select", { class: "small", onchange: (e) => e.target.value && link(sid, e.target.value) },
      h("option", { value: "" }, "掛去邊件工作？"), ...opts.map(([v, l]) => h("option", { value: v }, l)));
  }

  function update() {
    const sid = getSid();
    if (!sid) { el.replaceChildren(h("div", { class: "small muted work-row" }, "📋 AI 開始做嘢之後，呢度會顯示屬於邊件工作同全部步驟")); return; }
    const sure = links(sid), guess = sure.length ? [] : guesses(sid);
    const w = sure[sure.length - 1] || guess[0];
    const info = w && resolve(w);
    if (!info) {
      el.replaceChildren(h("div", { class: "work-row" }, h("span", { class: "work-ic" }, "❔"),
        h("span", { class: "work-main muted" }, "AI 未講明屬於邊件工作"), picker(sid)));
      return;
    }
    el.replaceChildren(
      h("div", { class: "work-row" },
        h("span", { class: "work-path" }, ...path(info).flatMap((p, i) => [i ? h("span", { class: "sep" }, "›") : null, h("span", {}, ctx.strip(p) || p)]).filter(Boolean)), // names stay as written
        h("span", { class: "sep" }, "›"), h("b", { class: "work-main" }, plain(info.title)),
        info.status ? h("span", { class: "pill " + ({ 完成: "ok", 等作者: "warn", 進行中: "info" }[info.status] || "") }, info.status === "等作者" ? "等你" : info.status) : null,
        guess.length && !sure.length ? [h("span", { class: "small muted" }, "（估）"), h("button", { class: "small", onclick: () => link(sid, w) }, "✓ 係呢件"), picker(sid)]
          : h("button", { class: "small", onclick: () => openEntity(info.entity) }, "詳情")),
      stepper(info));
  }

  // ui:step from the AI: show it at once; the step file is re-read after the turn
  function onStep(st) {
    if (!st?.step) return;
    live[st.step] = { in_progress: "IN_PROGRESS", start: "IN_PROGRESS", doing: "IN_PROGRESS", done: "DONE", completed: "DONE", waiting: "AWAITING", blocked: "BLOCKED" }[String(st.status)] || live[st.step];
    update();
  }
  update();
  return { el, update, onStep };
}
