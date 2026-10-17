// 🛤️ 流程：所有 pipeline tracker（build_index.py 自動發現）。左＝流程，中＝步驟，右＝揀咗嗰步嘅詳情同掣。
// 改狀態只係排入待送出（pipeline.set_status），由 Claude 照 gate 改 tracker。
import { stepButtons } from "./flow_actions.js";

const ZH = { DONE: "做完", IN_PROGRESS: "做緊", AWAITING: "等你批", BLOCKED: "卡住", DEFERRED: "押後", TODO: "未開始", "": "未開始" };
const PILL = { DONE: "ok", IN_PROGRESS: "info", AWAITING: "warn", BLOCKED: "bad" };

// the step to work on: one under way, else the first not done (skips deferred ones)
export const currentStep = (pl) => pl.stages.find((s) => ["IN_PROGRESS", "AWAITING", "BLOCKED"].includes(s.status))
  || pl.stages.find((s) => s.status === "TODO" || s.status === "");

export function render(el, ctx) {
  const { h, state } = ctx;
  const rows = state.index?.pipelines?.rows || [];
  if (!rows.length) return el.append(h("div", { class: "card" }, "未有流程。喺 canon/_working 寫一份有 ≥4 個 `## Stage N — 名` 嘅 tracker 就會自動出現。"));
  const f = (state.flowPick ||= { pipe: "", step: "" });
  const rerender = () => { el.replaceChildren(); render(el, ctx); };
  const recent = [...rows].sort((a, b) => (b.active - a.active) || (b.modified || "").localeCompare(a.modified || ""));
  const pl = rows.find((p) => p.file === f.pipe) || recent[0];
  f.pipe = pl.file;
  const cur = currentStep(pl);
  const s = pl.stages.find((x) => x.code === f.step) || cur || pl.stages[pl.stages.length - 1];
  f.step = s.code;
  const at = pl.stages.indexOf(s);

  const list = h("div", { class: "flow-list" }, ...recent.map((p) => h("div", { class: "flow-pipe" + (p === pl ? " on" : ""), onclick: () => { f.pipe = p.file; f.step = ""; rerender(); } },
    h("div", { style: "font-weight:900" }, "🛤️ " + p.short),
    h("div", { class: "small muted" }, `${p.done}/${p.stages.length} 步做完${p.active ? "" : " · 冇進行"} · ${p.modified || ""}`),
    h("div", { class: "flow-mini" }, ...p.stages.map((x) => h("i", { class: "d-" + (x.status || "TODO") }))))));

  const steps = h("div", { class: "flow-steps" }, ...pl.stages.map((x, k) => h("div", {
    class: "flow-steprow" + (x === s ? " on" : "") + (x === cur ? " cur" : ""), onclick: () => { f.step = x.code; rerender(); } },
    h("span", { class: "flow-num d-" + (x.status || "TODO") }, x.status === "DONE" ? "✓" : String(k + 1)),
    h("span", { style: "flex:1;min-width:0" }, h("div", { style: "font-weight:800" }, x.title), x === cur ? h("div", { class: "small", style: "color:var(--blue);font-weight:900" }, "← 而家做到呢度") : null),
    x.author_gate && x.status !== "DONE" ? h("span", { class: "pill warn", title: "呢步要你批先算完" }, "要你批") : null,
    h("span", { class: "pill " + (PILL[x.status] || "") }, ZH[x.status] || x.status))));

  const detail = h("div", { class: "flow-detail card" },
    h("div", { class: "small muted" }, `${pl.short} · 第 ${at + 1}/${pl.stages.length} 步`),
    h("h2", { style: "margin:4px 0 8px" }, s.title),
    h("div", { class: "toolbar", style: "margin-bottom:10px" }, h("span", { class: "pill " + (PILL[s.status] || "") }, ZH[s.status] || s.status), s.author_gate ? h("span", { class: "pill warn" }, "要你批先算完") : null),
    stepButtons(ctx, pl, s, at, rerender));

  el.append(h("h2", {}, "🛤️ 流程"), h("div", { class: "flow-page" }, list, steps, detail));
}
