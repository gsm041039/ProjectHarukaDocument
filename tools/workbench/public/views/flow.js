// 🛤️ 流程：所有 pipeline tracker（build_index.py 自動發現）。左＝流程，中＝步驟，右＝揀咗嗰步嘅詳情同掣。
// 改狀態只係排入待送出（pipeline.set_status），由 AI 照 gate 改 tracker。
import { stepButtons } from "./flow_actions.js";
import { workTree, taskPanel } from "./flow_tree.js";

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
  f.pipe ||= ""; f.step ||= "";
  const rerender = () => { el.replaceChildren(); render(el, ctx); };
  const recent = [...rows].sort((a, b) => (b.active - a.active) || (b.modified || "").localeCompare(a.modified || ""));
  const list = workTree(ctx, f, rerender);
  if (f.pipe.startsWith("task:")) { // a task with no step plan yet
    el.append(h("h2", {}, "🛤️ 流程"), h("div", { class: "flow-page two" }, list, taskPanel(ctx, f.pipe.slice(5))));
    return;
  }
  const pl = rows.find((p) => p.file === f.pipe) || recent.find((p) => p.kind !== "task") || recent[0];
  f.pipe = pl.file;
  const cur = currentStep(pl);
  const s = pl.stages.find((x) => x.code === f.step) || cur || pl.stages[pl.stages.length - 1];
  f.step = s.code;
  const at = pl.stages.indexOf(s);

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

  // how to use: open the first time, then remembered closed
  let seen = false; try { seen = localStorage.getItem("flowGuideSeen") === "1"; } catch {}
  const guide = h("details", { class: "flow-guide card", open: !seen, ontoggle: (e) => { try { localStorage.setItem("flowGuideSeen", e.target.open ? "0" : "1"); } catch {} } },
    h("summary", {}, "📖 點用呢頁"),
    h("ol", {},
      h("li", {}, "左邊揀一條流程（例如 Demo 試點）。中間會列晒佢嘅步驟，藍邊「← 而家做到呢度」就係你而家要做嗰步。"),
      h("li", {}, "撳任何一步，右邊會講：呢步要做咩、做完會有咩、會用到咩工具，同埋「💡 建議而家做」。"),
      h("li", {}, "跟建議撳綠色掣：通常係先「檢查前置條件」，再「開始呢步」。會開一個對話，AI 讀好資料先同你做。"),
      h("li", {}, "做完撳「標做完」——佢只會放入右下角「待送出」，你喺嗰度撳送出，AI 先會真正改進度檔。"),
      h("li", {}, "下一次返嚟，撳返同一步會見到「呢步開緊嘅對話」，一撳返去接住做。")),
    h("div", { class: "small muted" }, "步驟唔係寫死喺網頁：全部由 canon/_working 入面嘅進度檔讀出嚟，改進度檔就會跟住變。每個狀態出咩掣，喺 tools/workbench/ui_config.json 嘅 flow_steps 改。"));
  el.append(h("h2", {}, "🛤️ 流程"), guide, h("div", { class: "flow-page" }, list, steps, detail));
}
