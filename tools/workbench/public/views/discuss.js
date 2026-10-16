// 🤖 自動討論：設定題目＋範圍＋停止點，幾個 AI 角色自己傾，獨立主持人每輪判斷停唔停；你隨時可以暫停、插話、叫停。
// 討論只讀唔改；結果係 DRAFT，要帶入對話先正式決定。
const STOPS = ["有 2–3 個成形候選＋推薦", "列晒問題同風險就停（唔使解決）", "大家達成共識", "搵到最大嘅漏洞就停"];
const RANGES = ["只喺 Beat 層討論，唔落對白／鏡頭", "唔可以改已批 canon，只可以提議", "只限 Demo 範圍", "以 00_Story_Brief.html 為準"];

export async function render(el, ctx) {
  const { h, state, api, toast, newSession, sendIntent } = ctx;
  const f = (state.discuss ||= { id: null, draft: null });
  const rerender = () => { state.dES?.close(); el.replaceChildren(); render(el, ctx); };

  // ---------- live / finished discussion ----------
  if (f.id) {
    const box = h("div", { class: "disc" });
    const head = h("div", { class: "disc-head card" });
    const feed = h("div", { class: "disc-feed" });
    const ctrl = h("div", { class: "disc-ctrl card" });
    el.append(h("div", { class: "toolbar" }, h("button", { class: "small", onclick: () => { f.id = null; rerender(); } }, "← 全部討論"), h("h2", { style: "margin:0;flex:1" }, "🤖 自動討論")), box);
    box.append(head, feed, ctrl);
    let cfg = {}, cost = 0, st = "running", consensus = null, round = 0;
    const control = (action, text) => api(`/api/discuss/${f.id}/control`, { action, text }).catch((e) => toast(e.message));
    const drawHead = () => head.replaceChildren(
      h("div", { style: "font-weight:900;font-size:17px" }, cfg.topic || ""),
      h("div", { class: "small muted", style: "margin:4px 0 8px" }, `範圍：${cfg.range || "未限定"} ｜ 停止點：${cfg.stop || ""}${cfg.skill ? ` ｜ 方法：${cfg.skill}` : ""}`),
      cfg.links?.length ? h("div", { class: "chips", style: "margin-bottom:8px" }, ...cfg.links.map((l) => h("button", { class: "fchip", onclick: () => ctx.openEntity(l.id) }, "📎 " + l.title.slice(0, 30)))) : null,
      h("div", { class: "disc-meters" },
        h("span", { class: "pill " + ({ running: "info", paused: "warn", done: "ok", summarizing: "info" }[st] || "") }, { running: "傾緊", paused: "暫停", stopping: "停緊", summarizing: "總結緊", done: "完成", stopped: "停咗" }[st] || st),
        h("span", { class: "small", style: "font-weight:800" }, `第 ${round}／${cfg.maxRounds || "?"} 輪`),
        h("div", { class: "meter", title: "主持人評嘅共識度" }, h("div", { style: `width:${Math.round((consensus ?? 0) * 100)}%` })),
        h("span", { class: "small muted" }, consensus == null ? "共識：未評" : `共識 ${Math.round(consensus * 100)}%`),
        h("span", { class: "small muted" }, `US$${cost.toFixed(2)}／${cfg.budget || "?"}`)));
    const say = h("input", { type: "text", placeholder: "插話：例如「唔好再傾 B3，集中傾 B5」", style: "flex:1" });
    const drawCtrl = () => ctrl.replaceChildren(...(["done", "stopped"].includes(st) ? [h("span", { class: "muted" }, "討論已經完")] : [
      ctx.mic?.(say), say, h("button", { class: "small primary", onclick: () => { if (say.value.trim()) { control("say", say.value.trim()); say.value = ""; } } }, "插話"),
      st === "paused" ? h("button", { class: "small", onclick: () => control("resume") }, "▶ 繼續") : h("button", { class: "small", onclick: () => control("pause") }, "⏸ 暫停"),
      h("button", { class: "small danger", onclick: () => control("stop") }, "⏹ 停並總結")]).filter(Boolean));
    const add = (n) => { const stick = feed.scrollHeight - feed.scrollTop - feed.clientHeight < 120; feed.append(n); if (stick) feed.scrollTop = feed.scrollHeight; };

    const es = new EventSource(`/api/discuss/${f.id}/events`);
    state.dES = es;
    es.onopen = () => feed.replaceChildren();
    es.onmessage = ({ data }) => {
      const ev = JSON.parse(data);
      if (ev.kind === "config") { cfg = ev; drawHead(); drawCtrl(); return; }
      if (ev.kind === "state") { st = ev.state; drawHead(); drawCtrl(); if (st === "summarizing") add(h("div", { class: "msg result" }, "🧑‍⚖️ 主持人寫緊總結…")); }
      if (ev.kind === "cost") { cost = ev.cost; drawHead(); }
      if (ev.kind === "round") { round = ev.round; drawHead(); add(h("div", { class: "disc-round" }, `第 ${ev.round} 輪${ev.round === 1 ? "（各自獨立諗）" : ""}`)); }
      if (ev.kind === "turn") add(h("div", { class: "disc-turn" }, h("div", { class: "disc-av" }, ev.icon || "🤖"),
        h("div", { class: "disc-bubble" }, h("div", { class: "disc-name" }, ev.role), h("div", { class: "msg", style: "margin:0" }, ctx.md(ev.text)))));
      if (ev.kind === "author") {
        feed.querySelectorAll(".need-card:not(.answered)").forEach((c) => { c.classList.add("answered"); c.querySelectorAll("input,button").forEach((x) => (x.disabled = true)); });
        add(h("div", { class: "msg user" }, "✋ " + ev.text));
      }
      if (ev.kind === "judge") {
        consensus = ev.consensus ?? consensus; drawHead();
        add(h("div", { class: "disc-judge" }, h("b", {}, `🧑‍⚖️ 主持人（第 ${ev.round} 輪）`),
          h("span", { class: "pill" }, `共識 ${Math.round((ev.consensus ?? 0) * 100)}%`), ev.repetitive ? h("span", { class: "pill warn" }, "開始兜圈") : null, ev.stop_reached ? h("span", { class: "pill ok" }, "到停止點") : null,
          ev.open_points?.length ? h("div", { class: "small", style: "margin-top:4px" }, "未解決：", ...ev.open_points.map((p) => h("span", { class: "pill" }, p))) : null,
          ev.next_focus ? h("div", { class: "small muted" }, "下一輪焦點：" + ev.next_focus) : null));
      }
      if (ev.kind === "need_author") {
        const ans = h("input", { type: "text", placeholder: "你嘅答案（可以講）", style: "flex:1" });
        add(h("div", { class: "card ask need-card", style: "padding:14px" }, h("b", {}, "🙋 主持人想你拍板：" + ev.question),
          h("div", { class: "toolbar", style: "margin:8px 0 0" }, ctx.mic?.(ans), ans,
            h("button", { class: "small primary", onclick: () => ans.value.trim() && control("say", ans.value.trim()) }, "答"),
            h("button", { class: "small", onclick: () => control("say", "你哋自己判斷，標明係假設") }, "你哋自己判斷"))));
      }
      if (ev.kind === "synthesis") add(synthesisCard(ev, cfg));
      if (ev.kind === "error") add(h("div", { class: "msg error" }, "出錯：" + ev.message));
    };

    const synthesisCard = (s, c) => h("div", { class: "card synth" },
      h("h3", {}, "📋 討論總結 ", h("span", { class: "pill" }, s.reason || "")),
      h("div", {}, s.summary || ""),
      s.consensus?.length ? h("div", { class: "synth-sec" }, h("b", {}, "✅ 共識"), h("ul", {}, ...s.consensus.map((x) => h("li", {}, x)))) : null,
      s.options?.length ? h("div", { class: "synth-sec" }, h("b", {}, "🧭 候選"), ...s.options.map((o) => h("div", { class: "opt", style: "display:block;cursor:default" },
        h("div", { class: "l" }, o.name, o.name === s.recommended ? h("span", { class: "pill accent", style: "margin-left:6px" }, "建議") : null),
        h("div", { class: "kv small" }, ...[["會發生咩", o.what_happens], ["點解", o.why], ["代價", o.cost], ["放棄咗", o.given_up]].filter(([, v]) => v).flatMap(([k, v]) => [h("div", { class: "k" }, k), h("div", {}, v)]))))) : null,
      s.open_questions?.length ? h("div", { class: "synth-sec" }, h("b", {}, "🙋 要你決定"), h("ul", {}, ...s.open_questions.map((x) => h("li", {}, x)))) : null,
      s.risks?.length ? h("div", { class: "synth-sec" }, h("b", {}, "⚠️ 風險"), h("ul", {}, ...s.risks.map((x) => h("li", {}, x)))) : null,
      h("div", { class: "actions" },
        h("button", { class: "small", onclick: () => { f.draft = { topic: c.topic, range: c.range, stop: c.stop, links: c.links || [], skill: c.skill || "", skillChoice: "", context: (c.context ? c.context + "；" : "") + "上一輪討論總結：" + (s.summary || "") }; f.id = null; rerender(); } }, "🔁 再傾一輪（新焦點）"),
        h("button", { class: "small", onclick: () => sendIntent({ type: "discussion.save", target: c.topic.slice(0, 40), payload: { summary: s }, note: `將自動討論「${c.topic.slice(0, 30)}」嘅總結記入討論紀錄（標 DRAFT，唔當作者批准）` }) }, "📝 記入討論紀錄"),
        h("button", { class: "small primary", onclick: () => newSession(`以下係一場 AI 自動討論嘅總結（DRAFT，唔係我嘅批准）。題目：${c.topic}\n範圍：${c.range}\n\n${JSON.stringify(s, null, 1)}\n\n請按正常 gate 同我決定：先用白話重講要決定咩，然後用選項卡問我。`, "決定：" + c.topic.slice(0, 16)) }, "▶ 帶入對話決定")));
    return;
  }

  // ---------- setup + history ----------
  const [roles, history] = await Promise.all([api("/api/discuss/roles"), api("/api/discuss")]);
  const d = (f.draft ||= { topic: "", range: "", stop: STOPS[0], context: "" });
  d.links ??= []; d.skill ??= ""; d.skillChoice ??= "";
  const ents = state.index?.entities || {};
  const skills = state.index?.skills?.rows || [];
  const TYPEIC = { question: "❓", decision: "⚖️", beat: "🎬", matrix: "🧩", character: "👤", task: "🗂️", visual: "🎨", file: "📄", pipeline: "🛤️", todo: "📝", discussion: "🤖" };

  // 📎 linked things: search any entity and attach it; agents get them as grounding
  const linkBox = h("div", { class: "chips" });
  const drawLinks = () => linkBox.replaceChildren(...d.links.map((l, i) => h("span", { class: "link-chip" }, `${TYPEIC[ents[l.id]?.type] || "📎"} ${l.title.slice(0, 30)}`,
    h("button", { class: "x", onclick: () => { d.links.splice(i, 1); drawLinks(); } }, "✕"))));
  drawLinks();
  const linkSearch = h("input", { type: "search", placeholder: "📎 搵問題／決定／beat／角色／文件嚟連住…", style: "width:100%" });
  const linkHits = h("div", { class: "link-hits" });
  linkSearch.addEventListener("input", () => {
    const q = linkSearch.value.trim().toLowerCase();
    const hits = q ? Object.values(ents).filter((e) => (e.id + " " + e.title).toLowerCase().includes(q)).slice(0, 8) : [];
    linkHits.replaceChildren(...hits.map((e) => h("div", { class: "search-hit", onclick: () => {
      if (!d.links.some((l) => l.id === e.id)) d.links.push({ id: e.id, title: e.title, file: e.file || "" });
      linkSearch.value = ""; linkHits.replaceChildren(); drawLinks();
    } }, h("span", { class: "ic" }, TYPEIC[e.type] || "•"), h("div", {}, h("div", { class: "t" }, e.title.slice(0, 60)), h("div", { class: "small muted" }, e.id)))));
  });

  // 🧠 whole-discussion method from a skill, with that skill's own direction buttons
  const choiceBox = h("div", { class: "chips" });
  const drawChoices = () => {
    const s = skills.find((x) => x.name === d.skill);
    choiceBox.replaceChildren(...(s?.choices || []).map((c) => h("button", { class: "chip" + (d.skillChoice === c.prompt ? " on" : ""), title: c.prompt,
      onclick: () => { d.skillChoice = d.skillChoice === c.prompt ? "" : c.prompt; drawChoices(); } }, `${c.icon} ${c.label}`)));
  };
  const skillSel = h("select", { onchange: (e) => { d.skill = e.target.value; d.skillChoice = ""; drawChoices(); } },
    h("option", { value: "" }, "唔指定（自由討論）"), ...skills.map((s) => h("option", { value: s.name, selected: s.name === d.skill }, s.name)));
  drawChoices();
  const topic = h("textarea", { rows: 3, placeholder: "想 AI 傾咩？例如：「Demo B5–B6 操中陷阱、晴香擋，有冇更好嘅觸發方式？」" }); topic.value = d.topic;
  const range = h("textarea", { rows: 2, placeholder: "範圍：佢哋唔可以超出呢度（可以撳下面建議）" }); range.value = d.range;
  const stopIn = h("input", { type: "text", value: d.stop, style: "width:100%" });
  const rounds = h("input", { type: "range", min: 1, max: 6, value: 3 });
  const roundsOut = h("b", {}, "3");
  rounds.addEventListener("input", () => { roundsOut.textContent = rounds.value; est(); });
  const budget = h("input", { type: "number", min: 0.5, max: 50, step: 0.5, value: 5, style: "width:90px" });
  const modelSel = h("select", {}, h("option", { value: "" }, "預設 model"), h("option", { value: "sonnet" }, "Sonnet（平啲）"), h("option", { value: "opus" }, "Opus（深啲）"), h("option", { value: "haiku" }, "Haiku（最平）"));
  const estOut = h("span", { class: "small muted" });
  const est = () => { const n = roles.filter((r) => r.on).length; estOut.textContent = `大約 ${n * +rounds.value + +rounds.value + 1} 次 AI 回覆`; };
  const roleTiles = h("div", { class: "launch-grid" });
  const drawRoles = () => { roleTiles.replaceChildren(...roles.map((r) => h("div", { class: "launch-tile" + (r.on ? " on" : ""), title: r.brief, onclick: () => { r.on = !r.on; drawRoles(); est(); } },
    h("div", { class: "lt-ic" }, r.icon), h("div", { class: "lt-l" }, r.name), h("div", { class: "lt-d", style: "white-space:normal;height:30px" }, r.brief.slice(0, 34) + "…"))),
    h("div", { class: "launch-tile add", style: "padding:8px" }, h("div", { class: "lt-ic" }, "🧠"), h("div", { class: "lt-l" }, "由 skill 加"),
      h("select", { style: "width:100%;margin-top:4px;font-size:12px", onclick: (e) => e.stopPropagation(), onchange: async (e) => {
        const s = skills.find((x) => x.name === e.target.value); if (!s) return;
        roles.push({ name: s.name.replace(/^story-/, ""), icon: "🧠", brief: s.description.slice(0, 200), skill: s.name, on: true });
        await api("/api/discuss/roles", roles); drawRoles(); est();
      } }, h("option", { value: "" }, "揀 skill…"), ...skills.map((s) => h("option", { value: s.name }, s.name)))),
    h("div", { class: "launch-tile add", onclick: async () => {
      const name = prompt("新角色叫咩？（例：美術指導）"); if (!name) return;
      const brief = prompt("佢負責睇咩？（一兩句）"); if (!brief) return;
      roles.push({ name, icon: prompt("emoji？", "🤖") || "🤖", brief, on: true }); await api("/api/discuss/roles", roles); drawRoles(); est();
    } }, h("div", { class: "lt-ic" }, "＋"), h("div", { class: "lt-l" }, "加角色"))); };
  drawRoles(); est();
  const chip = (txt, target) => h("button", { class: "chip", onclick: () => { target.value = target.value ? target.value + "；" + txt : txt; } }, txt);
  const start = async () => {
    if (!topic.value.trim()) return toast("未寫題目");
    const on = roles.filter((r) => r.on);
    if (on.length < 2) return toast("最少揀兩個角色");
    await api("/api/discuss/roles", roles);
    const { id } = await api("/api/discuss", { topic: topic.value.trim(), range: range.value.trim(), stop: stopIn.value.trim(), context: d.context, links: d.links,
      skill: d.skill, skillChoice: d.skillChoice, roles: on, maxRounds: +rounds.value, budget: +budget.value, model: modelSel.value });
    f.draft = null; f.id = id; rerender();
  };

  el.append(h("h2", {}, "🤖 自動討論"),
    h("div", { class: "hint" }, "設定題目、範圍同停止點，幾個 AI 角色會自己傾，獨立主持人每輪判斷停唔停（研究顯示 2–3 輪最好，之後易兜圈）。佢哋只可以讀檔，唔會改任何嘢；結果係草稿，要帶入對話先正式決定。"),
    h("div", { class: "card disc-setup" },
      h("div", { class: "field" }, h("b", {}, "1. 題目"), h("div", { style: "display:flex;gap:8px" }, ctx.mic?.(topic), topic)),
      d.context ? h("div", { class: "small muted" }, "📎 " + d.context.slice(0, 200)) : null,
      h("div", { class: "field" }, h("b", {}, "2. 範圍"), h("div", { style: "display:flex;gap:8px" }, ctx.mic?.(range), range), h("div", { class: "chips" }, ...RANGES.map((x) => chip(x, range)))),
      h("div", { class: "field" }, h("b", {}, "3. 去到邊度停"), stopIn, h("div", { class: "chips" }, ...STOPS.map((x) => h("button", { class: "chip", onclick: () => (stopIn.value = x) }, x)))),
      h("div", { class: "field" }, h("b", {}, "4. 連住嘅嘢（AI 會以佢哋為依據）"), linkBox, linkSearch, linkHits),
      h("div", { class: "field" }, h("b", {}, "5. 用邊個 skill 嘅方法（可選）"), skillSel, choiceBox),
      h("div", { class: "field" }, h("b", {}, "6. 邊啲角色傾（撳揀；可以由 skill 加）"), roleTiles),
      h("div", { class: "field toolbar", style: "margin:0" }, h("span", {}, "最多 ", roundsOut, " 輪"), rounds, h("span", {}, "預算 US$"), budget, modelSel, estOut),
      h("div", { class: "actions" }, h("button", { class: "primary", onclick: start }, "🤖 開始討論"))),
    history.length ? h("h3", { style: "margin-top:20px" }, "以前嘅討論") : null,
    history.length ? h("div", { class: "card", style: "padding:0" }, ...history.slice(0, 30).map((x) => h("div", { class: "list-item clickable", style: "display:flex;gap:10px;align-items:center", onclick: () => { f.id = x.id; rerender(); } },
      h("span", { class: "pill " + ({ done: "ok", running: "info", paused: "warn" }[x.state] || "") }, { done: "完成", running: "傾緊", paused: "暫停", stopped: "停咗", summarizing: "總結緊" }[x.state] || x.state),
      h("b", { style: "flex:1" }, x.topic.slice(0, 60)), x.links?.length ? h("span", { class: "pill" }, `📎 ${x.links.length}`) : null,
      h("span", { class: "small muted" }, `${x.round}/${x.maxRounds} 輪 · US$${x.cost.toFixed(2)}`)))) : null);
}
