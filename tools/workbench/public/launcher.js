// 開新工作入口：「快捷」＝作者自己定嘅掣（存喺 tools/workbench/launchers.json，可以加／刪）；
// 「全部 skill」＝自動讀 .claude/skills/*/SKILL.md，以後加嘅 skill 自動出現，唔使改網頁。
import { micButton } from "./mic.js";

export function createLauncher(ctx) {
  const { h, state, api, toast, newSession } = ctx;
  const modal = h("div", { class: "search-modal launcher-modal" });
  document.body.append(modal);
  let presets = null;
  const loadPresets = async () => (presets ||= await api("/api/launchers").catch(() => []));
  const skills = () => state.index?.skills?.rows || [];
  const close = () => modal.classList.remove("show");
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  // Skills list their own buttons in SKILL.md "## Workbench Choices"; skills without one get these.
  const GENERIC = [
    { icon: "▶", label: "直接開始", prompt: "{goal}" },
    { icon: "🔍", label: "只做 source check", prompt: "先做 source check：用白話講現有資料講咗咩、缺咩，未做設計；最後用選項卡問我下一步。{goal}" },
    { icon: "🧭", label: "畀我候選", prompt: "就「{goal}」諗 2–4 個具體候選，每個講清會發生咩、代價、放棄咗咩，用選項卡問我揀。" },
    { icon: "🔁", label: "繼續上次", prompt: "讀返相關 tracker 同 SESSION_LEDGER，講返上次做到邊，然後繼續。{goal}" },
  ];
  const choicesOf = (name) => { const s = skills().find((x) => x.name === name); return s?.choices?.length ? s.choices : GENERIC; };
  const startPrompt = (skill, goal, context, template) => {
    const g = goal || "（未講，請先問我想做咩）";
    const body = template ? template.replaceAll("{goal}", g) : g;
    const ctxLine = context ? `\n\n相關：${context}` : "";
    return skill ? `請用 \`${skill}\` skill：${body}${ctxLine}` : body + ctxLine;
  };

  async function open({ skill = null, context = "", tab = null } = {}) {
    await loadPresets();
    const st = { tab: tab || (skill ? "skills" : "quick"), skill, q: "", preset: null, choice: null };
    const goal = h("textarea", { rows: 3, placeholder: "想做咩？（一兩句就得，可以留空等 Claude 問你）" });
    const draw = () => {
      const pick = st.preset ? `快捷：${st.preset.icon || ""} ${st.preset.label}` : st.skill ? `Skill：${st.skill}` : "唔指定 skill（直接同 Claude 傾）";
      const groups = {};
      for (const s of skills().filter((s) => !st.q || (s.name + s.description).toLowerCase().includes(st.q.toLowerCase()))) (groups[s.group] ||= []).push(s);
      const search = h("input", { type: "search", placeholder: "搵 skill…", value: st.q });
      search.addEventListener("input", () => { st.q = search.value; const pos = search.selectionStart; draw(); const s2 = modal.querySelector(".launcher-search"); s2?.focus(); s2?.setSelectionRange(pos, pos); });
      search.className = "launcher-search";
      modal.replaceChildren(h("div", { class: "search-box card launcher" },
        h("div", { class: "toolbar", style: "margin-bottom:8px" }, h("h3", { style: "margin:0;flex:1" }, "🚀 開新工作"),
          h("button", { class: "chip" + (st.tab === "quick" ? " on" : ""), onclick: () => { st.tab = "quick"; draw(); } }, "⭐ 快捷"),
          h("button", { class: "chip" + (st.tab === "skills" ? " on" : ""), onclick: () => { st.tab = "skills"; draw(); } }, `🧠 全部 skill（${skills().length}）`),
          h("button", { class: "icon-btn", onclick: close }, "✕")),
        context ? h("div", { class: "small", style: "font-weight:700;margin-bottom:6px" }, "📎 ", context) : null,
        st.tab === "quick"
          ? h("div", { class: "launch-grid" },
              ...presets.map((p, i) => h("div", { class: "launch-tile" + (st.preset === p ? " on" : ""), onclick: () => { st.preset = p; st.skill = p.skill || null; draw(); } },
                h("div", { class: "lt-ic" }, p.icon || "⭐"), h("div", { class: "lt-l" }, p.label), h("div", { class: "lt-d" }, p.skill || "直接傾"),
                h("button", { class: "lt-x", title: "刪除呢個快捷", onclick: async (e) => { e.stopPropagation(); if (!confirm(`刪除快捷「${p.label}」？`)) return; presets.splice(i, 1); await api("/api/launchers", presets); draw(); } }, "✕"))),
              h("div", { class: "launch-tile add", onclick: () => addPreset() }, h("div", { class: "lt-ic" }, "＋"), h("div", { class: "lt-l" }, "加快捷掣"), h("div", { class: "lt-d" }, "例如「做 ED」、「加新資料」")))
          : h("div", {}, search, h("div", { class: "skill-list" },
              h("div", { class: "skill-row" + (!st.skill && !st.preset ? " on" : ""), onclick: () => { st.skill = null; st.preset = null; draw(); } }, h("b", {}, "💬 唔指定 skill"), h("div", { class: "small muted" }, "直接同 Claude 傾，佢會自己揀")),
              ...Object.entries(groups).sort().flatMap(([g, xs]) => [h("div", { class: "section-title" }, g),
                ...xs.map((s) => h("div", { class: "skill-row" + (st.skill === s.name && !st.preset ? " on" : ""), onclick: () => { st.skill = s.name; st.preset = null; draw(); } },
                  h("b", {}, s.name), h("div", { class: "small muted" }, s.description.slice(0, 160))))]))),
        h("div", { class: "launch-foot" }, h("div", { class: "small", style: "font-weight:800" }, "揀咗：", pick),
          st.skill ? h("div", { class: "chips" }, ...choicesOf(st.skill).map((c) => h("button", { class: "chip" + (st.choice === c ? " on" : ""), title: c.prompt,
            onclick: () => { st.choice = st.choice === c ? null : c; draw(); } }, `${c.icon} ${c.label}`))) : null, h("div", { style: "display:flex;gap:8px;align-items:flex-start" }, micButton(h, goal), goal),
          h("div", { class: "actions" }, h("button", { onclick: close }, "取消"),
            h("button", { title: "唔使你跟住，交畀幾個 AI 角色自己傾", onclick: () => { close(); state.discuss = { id: null, draft: { topic: goal.value.trim(), range: "", stop: "有 2–3 個成形候選＋推薦", context } }; ctx.switchTab("discuss"); } }, "🤖 交畀 AI 自己傾"),
            h("button", { class: "primary", onclick: () => {
              const text = startPrompt(st.skill, goal.value.trim(), context, st.choice?.prompt || st.preset?.prompt);
              close();
              newSession(text, (st.choice?.label || st.preset?.label || st.skill || "新 task") + (goal.value.trim() ? "：" + goal.value.trim().slice(0, 16) : ""));
            } }, "開始")))));
    };
    const addPreset = async () => {
      const label = prompt("快捷掣叫咩？（例：做 ED）");
      if (!label) return;
      const icon = prompt("用咩 emoji？（可留空）", "⭐") || "⭐";
      const skill = prompt(`用邊個 skill？（打 skill 名，留空＝唔指定）\n例：${skills().slice(0, 4).map((s) => s.name).join("、")}`, st.skill || "") || "";
      if (skill && !skills().some((s) => s.name === skill)) return toast("搵唔到呢個 skill：" + skill);
      const tmpl = prompt("開場指示（{goal} 會換成你打嘅目標，可留空）", "{goal}") || "{goal}";
      presets.push({ label, icon, skill, prompt: tmpl });
      await api("/api/launchers", presets);
      toast("已加快捷：" + label);
      draw();
    };
    draw();
    modal.classList.add("show");
    goal.focus();
  }
  return { open, choicesOf };
}
