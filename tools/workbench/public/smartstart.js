// ✨ 開工：喺任何嘢上面撳，按佢嘅類型即刻推薦 skill（smart_start.json＋你最常用＋同佢有連結嘅 skill），
// 右邊出嗰個 skill 自己嘅方向掣，一撳就開工；可以補一句（🎤），或者交畀 AI 揀／自己傾。
// Pattern: contextual AI action menu at the point of need + local intent routing (no AI call to suggest).
import { micButton } from "./mic.js";

let config = null;
const usageKey = (t) => "wb.skillUse." + t;
const readUse = (t) => { try { return JSON.parse(localStorage.getItem(usageKey(t))) || {}; } catch { return {}; } };
const bump = (t, s) => { try { const u = readUse(t); u[s] = (u[s] || 0) + 1; localStorage.setItem(usageKey(t), JSON.stringify(u)); } catch {} };

export function createSmartStart(ctx) {
  const { h, state, newSession } = ctx;
  const modal = h("div", { class: "search-modal smart-modal" });
  document.body.append(modal);
  const close = () => modal.classList.remove("show");
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  const GENERIC = state.config?.generic_choices || []; // tools/workbench/ui_config.json

  async function open(item) {
    config ||= await fetch("smart_start.json").then((r) => r.json()).catch(() => ({}));
    const skills = state.index?.skills?.rows || [];
    const byName = Object.fromEntries(skills.map((s) => [s.name, s]));
    const ents = state.index?.entities || {};
    const type = item.type || "file";
    // rank: most-used for this type → configured for this type → skills linked to this item
    const use = readUse(type);
    const linked = (ents[item.id]?.rel || []).filter((x) => x.startsWith("SKILL:")).map((x) => x.slice(6));
    const names = [...new Set([...Object.keys(use).sort((a, b) => use[b] - use[a]), ...(config[type] || []), ...linked])].filter((n) => byName[n]).slice(0, 7);
    let pick = names[0] || null;
    const extra = h("input", { type: "text", placeholder: "想補充一句？（可留空，可以講）", style: "flex:1" });
    const where = [item.title, item.id && item.id !== item.title ? item.id : "", item.file].filter(Boolean).join("｜");

    const go = (skill, prompt, label) => {
      if (skill) bump(type, skill);
      const goal = extra.value.trim();
      const text = (skill ? `請用 \`${skill}\` skill：` : "") + prompt.replaceAll("{goal}", goal || item.title) + (goal && !prompt.includes("{goal}") ? `\n補充：${goal}` : "") + `\n\n相關：${where}`;
      close();
      newSession(text, `${label}：${item.title}`.slice(0, 28), undefined, goal);
    };

    const draw = () => {
      const s = byName[pick];
      const choices = s?.choices?.length ? s.choices : GENERIC;
      modal.replaceChildren(h("div", { class: "search-box card smart" },
        h("div", { class: "toolbar", style: "margin-bottom:6px" }, h("h3", { style: "margin:0;flex:1" }, "✨ 開工"), h("button", { class: "icon-btn", onclick: close }, "✕")),
        h("div", { class: "small", style: "font-weight:800;margin-bottom:10px;overflow-wrap:anywhere" }, "📎 ", item.title),
        h("div", { class: "smart-body" },
          h("div", { class: "smart-skills" }, h("div", { class: "section-title", style: "padding-left:2px" }, "推薦 skill"),
            ...names.map((n) => h("div", { class: "skill-row" + (n === pick ? " on" : ""), title: byName[n].description, onclick: () => { pick = n; draw(); } },
              h("b", {}, n.replace(/^story-/, "")), use[n] ? h("span", { class: "small muted" }, ` · 用過 ${use[n]} 次`) : null)),
            h("div", { class: "skill-row", onclick: () => { close(); ctx.launch({ context: where, tab: "skills" }); } }, h("b", {}, "…全部 skill"))),
          h("div", { class: "smart-choices" },
            h("div", { class: "small muted", style: "margin-bottom:6px" }, s ? s.description.slice(0, 140) : "揀一個 skill"),
            h("div", { class: "launch-grid" }, ...choices.map((c) => h("div", { class: "launch-tile", title: c.prompt, onclick: () => go(pick, c.prompt, c.label) },
              h("div", { class: "lt-ic" }, c.icon), h("div", { class: "lt-l" }, c.label)))))),
        h("div", { class: "launch-foot" },
          h("div", { style: "display:flex;gap:8px" }, micButton(h, extra), extra),
          h("div", { class: "actions" },
            h("button", { title: "唔肯定用邊個？叫 story-router 判斷", onclick: () => go("story-router", "判斷呢樣嘢應該用邊個 skill／模式處理，用白話講點解，然後用選項卡問我揀。", "揀 skill") }, "🧭 叫 AI 幫我揀"),
            h("button", { onclick: () => { close(); state.discuss = { id: null, draft: { topic: item.title, range: "", stop: "有 2–3 個成形候選＋推薦", context: "", links: item.id ? [{ id: item.id, title: item.title, file: item.file || "" }] : [] } }; ctx.switchTab("discuss"); } }, "🤖 交畀 AI 自己傾")))));
    };
    draw();
    modal.classList.add("show");
  }
  return { open };
}
