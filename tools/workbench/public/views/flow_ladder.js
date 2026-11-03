// 🔭 由粗到幼：層級梯（揀起點重傾）＋「你而家喺邊一層」進度條＋步驟按層分組。
// 層名／次序／節奏／指示全部讀 ui_config.json（layers、coarse_to_fine），唔寫死。
const memo = {};

const trackLayers = (ctx) => (ctx.state.config?.layers || []).filter((l) => l.track !== false);

// which layer each step of a flow belongs to: the earliest layer word in its title (match regexes from ui_config.json); a step with none inherits the previous step's layer
export function layerOfStages(ctx, pl) {
  const layers = trackLayers(ctx);
  let prev = null;
  return pl.stages.map((s) => {
    const hits = layers.map((l) => ({ id: l.id, at: String(s.title).search(new RegExp(l.match || l.id, "i")) })).filter((x) => x.at >= 0).sort((a, b) => a.at - b.at);
    prev = hits[0]?.id || prev;
    return prev;
  });
}

// per layer: state of the flow's steps in that layer
function layerStates(ctx, pl, cur) {
  const layers = trackLayers(ctx), of = layerOfStages(ctx, pl);
  const curLayer = cur ? of[pl.stages.indexOf(cur)] : null;
  return layers.map((l) => {
    const steps = pl.stages.filter((_, i) => of[i] === l.id);
    const done = steps.length && steps.every((s) => s.status === "DONE");
    const waiting = steps.some((s) => s.status === "AWAITING");
    return { l, n: steps.length, done: !!done, waiting, now: l.id === curLayer, state: !steps.length ? "none" : l.id === curLayer ? "now" : done ? "done" : "todo" };
  });
}

// the bar above the flow: "you are here" across the layers, in one sentence
export function layerBar(ctx, pl, cur) {
  const { h } = ctx;
  const st = layerStates(ctx, pl, cur);
  if (st.filter((x) => x.n).length < 2) return null; // not a coarse-to-fine flow
  const used = st.filter((x) => x.n);
  const at = used.findIndex((x) => x.now);
  const prev = at > 0 ? used[at - 1] : null, next = at >= 0 ? used[at + 1] : null;
  const sentence = !cur ? "所有層都做完晒。想改善邊層，撳下面「由粗到幼」揀嗰層重傾。"
    : `你而家喺「${used[at].l.name}」層（第 ${at + 1}／${used.length} 層）。${prev ? `上一層「${prev.l.name}」${prev.done ? "✓ 做完" : "未完"}；` : ""}${next ? `做完呢層先落「${next.l.name}」（上一層批咗先落下一層，唔跳層）。` : "呢層係最幼嘅一層。"}`;
  return h("div", { class: "layer-bar card" },
    h("div", { class: "layer-bar-title" }, "🔭 由粗到幼：你而家喺邊"),
    h("div", { class: "layer-track" }, ...st.flatMap((x, i) => [
      i ? h("span", { class: "layer-arrow" }, "›") : null,
      h("div", { class: "layer-node " + x.state, title: x.n ? `${x.l.name}：${x.n} 步${x.done ? "，全部做完" : ""}` : `${x.l.name}：呢件工作冇呢層` },
        h("span", { class: "layer-dot" }, x.state === "done" ? "✓" : x.state === "now" ? "●" : x.state === "none" ? "–" : String(i + 1)), x.l.name,
        x.waiting ? h("span", { class: "layer-wait" }, "等你批") : null),
    ].filter(Boolean))),
    h("div", { class: "layer-sentence" }, sentence));
}

export function ladderSection(ctx, { pl, s, chat }) {
  const { h, state } = ctx;
  const cfg = state.config?.coarse_to_fine;
  const layers = trackLayers(ctx);
  if (!cfg || !layers.length) return null;

  // default start = the layer this step belongs to (from the flow's own wording), else the coarsest
  const key = `${pl.file}#${s.code}`;
  const myLayer = layerOfStages(ctx, pl)[pl.stages.indexOf(s)];
  const pick = (memo[key] ||= { from: myLayer || layers[0].id, mode: cfg.modes?.[0]?.id });
  const box = h("div", { class: "flow-sec ladder" });

  const draw = () => {
    const at = layers.findIndex((l) => l.id === pick.from);
    const chain = layers.slice(at);
    const mode = cfg.modes?.find((m) => m.id === pick.mode) || cfg.modes?.[0] || {};
    const states = Object.fromEntries(layerStates(ctx, pl, null).map((x) => [x.l.id, x]));
    const go = () => chat(cfg.prompt
      .replaceAll("{layer}", chain[0].name).replaceAll("{chain}", chain.map((l) => l.name).join(" → "))
      .replaceAll("{next}", chain[1]?.name || "（已經係最幼嗰層）").replaceAll("{mode}", mode.prompt || ""), cfg.title || "由粗到幼");
    box.replaceChildren(
      h("b", {}, cfg.title || "🔭 由粗到幼重傾"),
      h("div", { class: "small muted" }, cfg.desc || ""),
      h("div", { class: "ladder-steps" }, ...layers.map((l, i) => h("button", { class: "ladder-step" + (i === at ? " on" : i < at ? " skipped" : ""),
        title: i < at ? `由 ${chain[0].name} 開始，會當 ${l.name} 已經穩定` : `由「${l.name}」開始`, onclick: () => { pick.from = l.id; draw(); } },
        h("span", { class: "ladder-n" }, states[l.id]?.done ? "✓" : i + 1), l.name))),
      h("div", { class: "chips", style: "margin:6px 0" }, h("span", { class: "small", style: "font-weight:800" }, "節奏："),
        ...(cfg.modes || []).map((m) => h("button", { class: "chip" + (m.id === pick.mode ? " on" : ""), title: m.desc, onclick: () => { pick.mode = m.id; draw(); } }, m.label))),
      mode.desc ? h("div", { class: "small muted" }, mode.desc) : null,
      h("div", { class: "flow-act" }, h("button", { class: "primary", onclick: go }, `▶ 由「${chain[0].name}」開始慢慢傾`),
        h("span", { class: "small muted" }, chain.length > 1 ? `之後依次：${chain.slice(1).map((l) => l.name).join(" → ")}` : "呢層已經係最幼，只傾呢層")));
  };
  draw();
  return box;
}
