// 🤖 自動討論：設定題目＋範圍＋停止點，幾個 AI 角色自己傾，獨立主持人每輪判斷停唔停；你隨時可以暫停、插話、叫停。
// 討論只讀唔改；結果係 DRAFT，要帶入對話先正式決定。
import { fileId } from "../links.js";
import { workCard } from "../workcard.js";


export async function render(el, ctx) {
  const { h, state, api, toast, newSession, sendIntent } = ctx;
  const f = (state.discuss ||= { id: null, draft: null });
  const rerender = () => { state.dES?.close(); el.replaceChildren(); render(el, ctx); };
  // fallback lists live in tools/workbench/ui_config.json; the 🧭 planner adds topic-specific ones on top
  const STOPS = state.config?.discuss_stops || [], RANGES = state.config?.discuss_ranges || [];
  const LAYER = Object.fromEntries((state.config?.layers || []).map((l) => [l.id, l.name]));

  // ---------- live / finished discussion ----------
  if (f.id) {
    const box = h("div", { class: "disc" });
    const head = h("div", { class: "disc-head card" });
    const feed = h("div", { class: "disc-feed" });
    const ctrl = h("div", { class: "disc-ctrl card" });
    el.append(h("div", { class: "toolbar" }, h("button", { class: "small", onclick: () => { f.id = null; f.focus = null; rerender(); } }, "← 全部討論"), h("h2", { style: "margin:0;flex:1" }, "🤖 自動討論")), box);
    // 📋 which piece of work this discussion belongs to — same card as a chat (workcard.js); a discussion is a session too
    const work = workCard(ctx, () => "DISC:" + f.id);
    box.append(work.el, head, feed, ctrl);
    let cfg = {}, cost = 0, st = "running", consensus = null, round = 0;
    const control = (action, text, extra = {}) => api(`/api/discuss/${f.id}/control`, { action, text, ...extra }).catch((e) => toast(e.message));
    const said = []; let synth = null, lastJudge = null;
    // 💬 hand the discussion so far to a conversation (the one it came from if it is still open), any time
    const toChat = () => {
      const body = `以下係一場 AI 自動討論${["done", "stopped"].includes(st) ? "" : "（未傾完，傾到一半轉過嚟）"}，係 DRAFT，唔係我嘅批准。
題目：${cfg.topic}
範圍：${cfg.range || "未限定"}
${synth ? "總結：" + JSON.stringify(synth) : `到目前為止嘅發言（節錄）：\n${said.slice(-12).map((x) => `【${x.role}】${x.text.slice(0, 300)}`).join("\n")}${lastJudge?.open_points?.length ? "\n主持人：未解決—" + lastJudge.open_points.join("；") : ""}`}

請按正常 gate 同我繼續：先用白話講而家傾到邊、要決定咩，然後用選項卡問我。`;
      const back = cfg.from && state.live.find((s) => s.id === cfg.from && s.status !== "closed");
      if (back) { state.current = { id: back.id }; ctx.sendToClaude(body); }
      else newSession(body, "討論：" + (cfg.topic || "").slice(0, 16));
    };
    let castOpen = false, allRoles = null;
    let pendingAsk = ""; // what the discussion is waiting for the author to answer (shown at the top, so a pause is never silent)
    const goAsk = () => feed.querySelector(".need-card:not(.answered)")?.scrollIntoView({ behavior: "smooth", block: "center" });
    const castBox = h("div");
    const drawCast = async () => {
      if (!castOpen) return castBox.replaceChildren();
      allRoles ||= (await api("/api/discuss/roles")).map((r) => ({ ...r, on: (cfg.roles || []).some((x) => x.name === r.name) }));
      castBox.replaceChildren(h("div", { class: "chips", style: "margin-top:8px" }, h("span", { class: "small", style: "font-weight:800" }, "👥 下一個發言開始用："),
        ...allRoles.map((r) => h("button", { class: "chip" + (r.on ? " on" : ""), title: r.brief, onclick: () => { r.on = !r.on; drawCast(); } }, `${r.icon} ${r.name}`)),
        h("button", { class: "small primary", onclick: () => { const on = allRoles.filter((r) => r.on); if (on.length < 2) return toast("最少兩個角色"); control("roles", null, { roles: on }); cfg.roles = on; castOpen = false; drawCast(); } }, "套用")));
    };
    const drawHead = () => head.replaceChildren(
      h("div", { style: "font-weight:900;font-size:17px" }, cfg.topic || ""),
      h("div", { class: "small muted", style: "margin:4px 0 8px" }, `範圍：${cfg.range || "未限定"} ｜ 停止點：${cfg.stop || ""}${cfg.skill ? ` ｜ 方法：${cfg.skill}` : ""}`),
      cfg.links?.length ? h("div", { class: "chips", style: "margin-bottom:8px" }, ...cfg.links.map((l) => h("button", { class: "fchip", onclick: () => ctx.openEntity(l.id) }, "📎 " + l.title.slice(0, 30)))) : null,
      h("div", { class: "disc-meters" },
        h("span", { class: "pill " + (st === "paused" && pendingAsk ? "warn" : { running: "info", paused: "warn", done: "ok", summarizing: "info" }[st] || "") }, st === "paused" && pendingAsk ? "⏸ 等緊你答" : { running: "傾緊", paused: "暫停", stopping: "停緊", summarizing: "總結緊", done: "完成", stopped: "停咗" }[st] || st),
        h("span", { class: "small", style: "font-weight:800" }, `第 ${round}／${cfg.maxRounds || "?"} 輪`),
        h("div", { class: "meter", title: "主持人評嘅共識度" }, h("div", { style: `width:${Math.round((consensus ?? 0) * 100)}%` })),
        h("span", { class: "small muted" }, consensus == null ? "共識：未評" : `共識 ${Math.round(consensus * 100)}%`),
        synth ? h("button", { class: "small primary", onclick: () => { f.focus = "summary"; showSynth(); } }, "📋 睇總結") : null),
      st === "running" ? h("div", { class: "small muted", style: "margin-top:6px" }, "👀 佢哋自己傾緊，你可以淨係睇，唔使做嘢。想插話、轉人、加輪先用下面嘅掣。") : null,
      pendingAsk ? h("div", { class: "disc-wait" }, h("b", {}, "🙋 討論停低咗，等緊你答："), " ", pendingAsk, " ", h("button", { class: "small primary", onclick: goAsk }, "去答")) : null,
      usedBox);
    let synthEl = null;
    const showSynth = () => synthEl?.scrollIntoView({ behavior: "smooth", block: "start" });
    const say = h("input", { type: "text", placeholder: "插話：例如「唔好再傾 B3，集中傾 B5」（Enter 送出）", style: "flex:1" });
    say.onEnter = () => { if (say.value.trim()) { control("say", say.value.trim()); say.value = ""; } };
    const more = (n) => { cfg.maxRounds = Math.max(cfg.maxRounds || 0, round) + n; control("rounds", null, { rounds: cfg.maxRounds }); drawHead(); };
    const drawCtrl = () => ctrl.replaceChildren(...(["done", "stopped"].includes(st) ? [h("span", { class: "muted", style: "flex:1" }, "討論已經完（未夠可以繼續傾）"),
      h("button", { class: "small", title: "由停低嗰度再傾一輪，傾完會出新總結", onclick: () => more(1) }, "＋1 輪繼續傾"), h("button", { class: "small primary", title: "開一個對話，帶住呢場討論嘅結果同你繼續決定", onclick: toChat }, "💬 帶去對話決定")] : [
      ctx.mic?.(say), say, h("button", { class: "small primary", onclick: () => { if (say.value.trim()) { control("say", say.value.trim()); say.value = ""; } } }, "插話"),
      st === "paused" ? h("button", { class: "small", onclick: () => control("resume") }, "▶ 繼續") : h("button", { class: "small", onclick: () => control("pause") }, "⏸ 暫停"),
      h("button", { class: "small", title: "下一個發言開始換角色", onclick: () => { castOpen = !castOpen; drawCast(); } }, "👥 改角色"),
      h("button", { class: "small", title: "多傾一輪", onclick: () => { cfg.maxRounds = (cfg.maxRounds || 3) + 1; control("rounds", null, { rounds: cfg.maxRounds }); drawHead(); } }, "＋1 輪"),
      h("button", { class: "small", title: "唔係「睇過程」：呢粒會開一個新對話，叫 AI 帶住而家嘅內容同你決定。呢場討論唔會停，你仍然可以喺度睇。", onclick: () => { if (confirm("開一個新對話，帶住而家傾到嘅內容同你決定？（呢場討論唔會停，你想睇都照睇到）")) toChat(); } }, "💬 帶去對話決定"),
      h("button", { class: "small danger", onclick: () => control("stop") }, "⏹ 停並總結"), castBox]).filter(Boolean));
    // 📚 which files this discussion stood on, and which roles read each one — the discussion ↔ document relations
    const used = new Map();
    const usedBox = h("div", { class: "disc-used" });
    const fileChip = (f, who) => { const id = fileId(state.index, f); return h("button", { class: "fchip", title: f, onclick: () => (id ? ctx.openEntity(id) : ctx.openFile(f)) },
      "📄 " + f.split("/").pop().replace(/\.md$/, ""), who ? h("span", { class: "small muted", style: "margin-left:4px" }, who) : null); };
    const drawUsed = () => usedBox.replaceChildren(...(used.size ? [h("div", { class: "small", style: "font-weight:800;margin:6px 0 4px" }, `📚 討論用咗嘅文件（${used.size}）`),
      h("div", { class: "chips" }, ...[...used].sort((a, b) => b[1].size - a[1].size).slice(0, 16).map(([f, who]) => fileChip(f, [...who].join(""))))] : []));
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
      if (ev.kind === "turn") said.push({ role: ev.role, text: ev.text || "" });
      if (ev.kind === "synthesis") synth = ev;
      if (ev.kind === "judge") lastJudge = ev;
      if (ev.kind === "turn") {
        for (const f of ev.reads || []) { if (!used.has(f)) used.set(f, new Set()); used.get(f).add(ev.icon || "🤖"); }
        if (ev.reads?.length) drawUsed();
        add(h("div", { class: "disc-turn" }, h("div", { class: "disc-av" }, ev.icon || "🤖"),
          h("div", { class: "disc-bubble" }, h("div", { class: "disc-name" }, ev.role), h("div", { class: "msg", style: "margin:0" }, ctx.md(ev.text)),
            ev.reads?.length ? h("div", { class: "disc-reads" }, "📖 讀咗：", ...ev.reads.slice(0, 8).map(fileChip)) : null)));
      }
      if (ev.kind === "author") {
        pendingAsk = ""; drawHead();
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
      if (ev.kind === "need_rounds") { // out of rounds but not at the stop point: the author decides, nothing is forced
        pendingAsk = `傾咗 ${ev.round} 輪，未去到停止點：＋輪、定係就咁總結？`; drawHead();
        const card = h("div", { class: "card ask need-card", style: "padding:14px" },
          h("b", {}, `⏸ 傾咗 ${ev.round} 輪，未去到停止點`),
          ev.open?.length ? h("div", { class: "small", style: "margin-top:4px" }, "仲未解決：", ...ev.open.map((x) => h("span", { class: "pill" }, x))) : null,
          h("div", { class: "toolbar", style: "margin:8px 0 0" },
            h("button", { class: "small primary", onclick: () => more(1) }, "＋1 輪"), h("button", { class: "small", onclick: () => more(2) }, "＋2 輪"),
            h("button", { class: "small", onclick: () => control("stop") }, "就咁總結")));
        add(card);
      }
      if (ev.kind === "state" && ev.state !== "paused" && pendingAsk) { pendingAsk = ""; drawHead(); }
      if (ev.kind === "state" && st !== "paused") feed.querySelectorAll(".need-card:not(.answered)").forEach((c) => { c.classList.add("answered"); c.querySelectorAll("button,input").forEach((x) => (x.disabled = true)); });
      if (ev.kind === "need_author") {
        pendingAsk = ev.question; drawHead();
        const ans = h("input", { type: "text", placeholder: "你嘅答案（可以講；Enter 送出）", style: "flex:1" });
        ans.onEnter = () => ans.value.trim() && control("say", ans.value.trim());
        add(h("div", { class: "card ask need-card", style: "padding:14px" }, h("b", {}, "🙋 主持人想你拍板：" + ev.question),
          h("div", { class: "toolbar", style: "margin:8px 0 0" }, ctx.mic?.(ans), ans,
            h("button", { class: "small primary", onclick: () => ans.value.trim() && control("say", ans.value.trim()) }, "答"),
            h("button", { class: "small", onclick: () => control("say", "你哋自己判斷，標明係假設") }, "你哋自己判斷"))));
      }
      if (ev.kind === "synthesis") {
        synthEl = synthesisCard(ev, cfg); add(synthEl); drawHead();
        if (f.focus === "summary") setTimeout(showSynth, 50); // opened via 「睇總結」 or a summary link
      }
      if (ev.kind === "error") add(h("div", { class: "msg error" }, "出錯：" + ev.message));
    };

    // every pick still goes through the normal gate in the chat (the summary is a DRAFT, not the author's approval)
    const decide = (s, c, ask, title) => newSession(`以下係一場 AI 自動討論嘅總結（DRAFT，唔係我嘅批准）。題目：${c.topic}
範圍：${c.range}

${JSON.stringify(s, null, 1)}

${ask}`, title.slice(0, 24));
    const pickOpt = (s, c, o) => decide(s, c, `我傾向揀「${o.name}」。請按正常 gate 同我落實：先用白話講揀咗會改到乜、下游邊啲要重新核對、仲有咩要我決定，然後用選項卡問我確認；未確認唔好寫入 canon。`, "揀：" + o.name);
    const talkQ = (s, c, q) => decide(s, c, `我想先傾呢條：「${q}」。請先讀相關文件，用白話講考慮方向同代價，然後用選項卡問我。`, "傾：" + q);
    // 📋 per-item suggestions from the summary: the author ticks, then they go to the tray like the page's own buttons
    // (the discussion agents never edit files; Claude handles the tray through the normal gate)
    const itemActions = (s, c) => {
      const items = c.items || [], allowed = c.actions || [];
      const recs = (s.item_actions || []).filter((r) => items.some((x) => x.id === r.id));
      if (!items.length || !recs.length) return null;
      const label = (t) => allowed.find((a) => a.type === t)?.label || "保留";
      const picks = new Map(recs.filter((r) => r.type !== "keep" && allowed.some((a) => a.type === r.type)).map((r) => [r.id, r.type]));
      const run = h("button", { class: "small primary", onclick: () => {
        if (!picks.size) return toast("未揀任何處理");
        for (const [id, type] of picks) {
          const it = items.find((x) => x.id === id), why = recs.find((r) => r.id === id)?.reason || "";
          sendIntent({ type, target: id, payload: { ...it.payload, reason: why, from_discussion: c.topic.slice(0, 60) }, note: `${label(type)}：「${it.title.slice(0, 50)}」（自動討論建議：${why}）` });
        }
        toast(`${picks.size} 項已放入待送出，送出先交畀 Claude 處理`); run.disabled = true;
      } }, "📤 執行揀咗嘅");
      return h("div", { class: "synth-sec" }, h("b", {}, "📋 逐項建議（剔咗嘅先會做）"),
        ...recs.map((r) => {
          const it = items.find((x) => x.id === r.id);
          return h("label", { class: "item-act" },
            h("input", { type: "checkbox", checked: picks.has(r.id), disabled: r.type === "keep", onchange: (e) => (e.target.checked ? picks.set(r.id, r.type) : picks.delete(r.id)) }),
            h("span", { class: "pill" + (r.type === "keep" ? "" : " warn") }, label(r.type)),
            h("span", { style: "flex:1", title: it.title }, h("b", {}, ctx.plain(it.title)), h("div", { class: "small muted" }, ctx.strip(r.reason || "") || r.reason || "")));
        }),
        h("div", { class: "actions" }, run));
    };

    const synthesisCard = (s, c) => h("div", { class: "card synth" },
      h("h3", {}, "📋 討論總結 ", h("span", { class: "pill" }, s.reason || "")),
      h("div", {}, s.summary || ""),
      s.consensus?.length ? h("div", { class: "synth-sec" }, h("b", {}, "✅ 共識"), h("ul", {}, ...s.consensus.map((x) => h("li", {}, x)))) : null,
      s.options?.length ? h("div", { class: "synth-sec" }, h("b", {}, "🧭 候選"), ...s.options.map((o) => h("div", { class: "opt", style: "display:block;cursor:default" },
        h("div", { class: "l", style: "display:flex;align-items:center;gap:6px" }, o.name, o.name === s.recommended ? h("span", { class: "pill accent" }, "建議") : null,
          h("button", { class: "small" + (o.name === s.recommended ? " primary" : ""), style: "margin-left:auto", title: "帶住總結去對話，照 gate 落實（唔會直接寫 canon）", onclick: () => pickOpt(s, c, o) }, "👉 揀呢個")),
        h("div", { class: "kv small" }, ...[["會發生咩", o.what_happens], ["點解", o.why], ["代價", o.cost], ["放棄咗", o.given_up]].filter(([, v]) => v).flatMap(([k, v]) => [h("div", { class: "k" }, k), h("div", {}, v)]))))) : null,
      s.open_questions?.length ? h("div", { class: "synth-sec" }, h("b", {}, "🙋 要你決定"), h("ul", {}, ...s.open_questions.map((x) => h("li", {}, x, " ",
        h("button", { class: "small", title: "開對話專門傾呢條", onclick: () => talkQ(s, c, x) }, "💬 傾呢條"))))) : null,
      s.risks?.length ? h("div", { class: "synth-sec" }, h("b", {}, "⚠️ 風險"), h("ul", {}, ...s.risks.map((x) => h("li", {}, x)))) : null,
      itemActions(s, c),
      h("div", { class: "actions" },
        h("button", { class: "small", onclick: () => { f.draft = { topic: c.topic, range: c.range, stop: c.stop, links: c.links || [], skill: c.skill || "", skillChoice: "", context: (c.context ? c.context + "；" : "") + "上一輪討論總結：" + (s.summary || "") }; f.id = null; rerender(); } }, "🔁 再傾一輪（新焦點）"),
        h("button", { class: "small", onclick: () => sendIntent({ type: "discussion.save", target: c.topic.slice(0, 40), payload: { summary: s }, note: `將自動討論「${c.topic.slice(0, 30)}」嘅總結記入討論紀錄（標 DRAFT，唔當作者批准）` }) }, "📝 記入討論紀錄"),
        h("button", { class: "small primary", onclick: () => newSession(`以下係一場 AI 自動討論嘅總結（DRAFT，唔係我嘅批准）。題目：${c.topic}\n範圍：${c.range}\n\n${JSON.stringify(s, null, 1)}\n\n請按正常 gate 同我決定：先用白話重講要決定咩，然後用選項卡問我。`, "決定：" + c.topic.slice(0, 16)) }, "▶ 帶入對話決定")));
    return;
  }

  // ---------- setup + history ----------
  const [roles, history] = await Promise.all([api("/api/discuss/roles"), api("/api/discuss")]);
  const d = (f.draft ||= { topic: "", range: "", stop: STOPS[0] || "", context: "" });
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
  const rounds = h("input", { type: "number", min: 1, step: 1, value: 3, style: "width:70px" });
  rounds.addEventListener("input", () => est());
  const modelSel = h("select", {}, h("option", { value: "" }, "預設 model"));
  api("/api/models").then((ms) => modelSel.append(...ms.map((m) => h("option", { value: m.value, title: m.description || "" }, m.label)))).catch(() => {});
  const estOut = h("span", { class: "small muted" });
  const est = () => { const n = roles.filter((r) => r.on).length; estOut.textContent = `大約 ${n * +rounds.value + +rounds.value + 1} 次 AI 回覆`; };
  if (Array.isArray(d.roles) && d.roles.length) { for (const r of roles) r.on = d.roles.includes(r.name); delete d.roles; } // a suggestion can pick the cast
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
  // 🎯 range from the story hierarchy (index.tree: 全作 → Act → Sequence → Beat 層文件 → 段落 → beat):
  // pick any node that has children, tap the first and last item → range text + those items linked as grounding
  const tree = state.index?.tree || [];
  const kids = {};
  for (const n of tree) if (n.parent) (kids[n.parent] ||= []).push(n);
  for (const k in kids) kids[k].sort((a, b) => a.order - b.order);
  const depth = (n) => { let d = 0; for (let x = n; x?.parent; x = tree.find((y) => y.id === x.parent)) d++; return d; };
  const scopes = tree.filter((n) => kids[n.id]?.length && n.layer !== "beat_item");
  const ordered = [];
  const walk = (n) => { if (scopes.includes(n)) ordered.push(n); for (const c of kids[n.id] || []) walk(c); };
  tree.filter((n) => !n.parent).sort((a, b) => a.order - b.order).forEach(walk);
  // start at the top of the structure (全作), not at one Act's beats — the topic decides how deep to go
  const rp = (state.rangePick ||= { scope: ordered[0]?.id, a: null, b: null });
  const pickBox = h("div", { class: "range-pick" });
  const label = (n) => ctx.strip(n.title) || n.title;
  const drawPick = () => {
    const sc = tree.find((n) => n.id === rp.scope) || ordered[0];
    // items = children; a child that has its own children becomes a group of its children
    const groups = (kids[sc?.id] || []).map((c) => kids[c.id]?.length ? [c, kids[c.id]] : [null, [c]]);
    const flat = groups.flatMap(([, xs]) => xs);
    const [lo, hi] = rp.a == null ? [null, null] : rp.b == null ? [rp.a, rp.a] : [Math.min(rp.a, rp.b), Math.max(rp.a, rp.b)];
    const apply = () => {
      const sel = flat.slice(lo, hi + 1);
      range.value = `只限「${label(sc)}」：由「${label(sel[0])}」到「${label(sel.at(-1))}」（共 ${sel.length} 項，已連住做依據）；唔好傾範圍外嘅嘢，唔好跳層`;
      for (const n of sel.slice(0, 12)) { const id = ents[n.id] ? n.id : null; if (id && !d.links.some((l) => l.id === id)) d.links.push({ id, title: label(n), file: ents[id].file || "" }); }
      drawLinks(); toast(`範圍設好：${sel.length} 項，已連住做依據`);
    };
    let i = -1;
    pickBox.replaceChildren(
      h("div", { class: "toolbar", style: "margin:4px 0" }, h("span", { class: "small", style: "font-weight:800" }, "🎯 由結構揀範圍："),
        h("select", { onchange: (e) => { rp.scope = e.target.value; rp.a = rp.b = null; drawPick(); } }, ...ordered.map((n) =>
          h("option", { value: n.id, selected: n.id === sc?.id }, `${"　".repeat(depth(n))}${LAYER[n.layer] || n.layer}｜${label(n).slice(0, 40)}${n.current && n.current !== "CURRENT" ? "（舊）" : ""}`))),
        lo != null ? h("button", { class: "small primary", onclick: apply }, `用呢段（${hi - lo + 1} 項）`) : h("span", { class: "small muted" }, "撳頭一個同最後一個")),
      h("div", { class: "chips" }, ...groups.flatMap(([g, xs]) => [
        g ? h("span", { class: "small muted", style: "width:100%;font-weight:800;margin-top:4px" }, label(g)) : null,
        ...xs.map((n) => { const k = ++i; return h("button", { class: "chip" + (lo != null && k >= lo && k <= hi ? " on" : ""), title: n.title,
          onclick: () => { if (rp.a == null || rp.b != null) { rp.a = k; rp.b = null; } else rp.b = k; drawPick(); } }, label(n).slice(0, 18)); }),
      ].filter(Boolean))));
  };
  const boards = ordered;
  if (boards.length) drawPick();
  // 👤 characters as grounding in one tap
  const chars = (state.index?.characters?.rows || []).filter((c) => ents[c.id]);
  const charBox = h("div", { class: "chips" });
  const drawChars = () => charBox.replaceChildren(h("span", { class: "small", style: "font-weight:800" }, "👤 連角色："), ...chars.map((c) => {
    const on = d.links.some((l) => l.id === c.id);
    return h("button", { class: "chip" + (on ? " on" : ""), onclick: () => { on ? d.links.splice(d.links.findIndex((l) => l.id === c.id), 1) : d.links.push({ id: c.id, title: c.full || c.name, file: c.file }); drawLinks(); drawChars(); } }, c.name);
  }));
  drawChars();
  // 🧭 AI 理解：reads story-auto-discussion + the linked files, says what it understood, proposes set-ups as buttons
  const plan = (f.plan ||= { state: "idle", data: null, key: "", answers: {} });
  plan.answers ||= {};
  const planBox = h("div", { class: "card plan-card" });
  const rangeChips = h("div", { class: "chips" }), stopChips = h("div", { class: "chips" });
  const drawChips = () => {
    const pr = plan.data || {};
    rangeChips.replaceChildren(...[...(pr.ranges || []), ...RANGES].map((x, i) => chip(x, range, i < (pr.ranges || []).length)));
    stopChips.replaceChildren(...[...(pr.stops || []), ...STOPS].map((x, i) => h("button", { class: "chip" + (i < (pr.stops || []).length ? " ai" : ""), onclick: () => (stopIn.value = x) }, x)));
  };
  const applyPlan = (pr) => {
    topic.value = d.topic = pr.topic || topic.value; range.value = d.range = pr.range || range.value; stopIn.value = d.stop = pr.stop || stopIn.value;
    if (pr.rounds) rounds.value = Math.max(1, +pr.rounds);
    if (pr.roles?.length) for (const r of roles) r.on = pr.roles.includes(r.name);
    for (const l of pr.links || []) if (ents[l.id] && !d.links.some((x) => x.id === l.id)) d.links.push({ id: l.id, title: l.title || ents[l.id].title, file: l.file || ents[l.id].file || "" });
    drawRoles(); drawLinks(); drawChars(); est(); toast(`用咗「${pr.label}」，可以再改先開始`);
  };
  const drawPlan = () => {
    const pd = plan.data;
    planBox.replaceChildren(...[
      h("div", { class: "toolbar", style: "margin:0 0 6px" }, h("b", { style: "flex:1" }, "🧭 AI 理解你想傾咩"),
        plan.state === "loading" ? null : h("button", { class: "small", onclick: runPlan }, pd ? "🔄 再諗" : "🧭 叫 AI 幫我設定")),
      plan.state === "loading" ? h("div", { class: "loading", style: "padding:14px" }, h("span", { class: "spinner" }), "AI 讀緊自動討論 skill 同相關文件，理解你想傾咩…（大約 20–60 秒）") : null,
      plan.state === "error" ? h("div", { class: "msg error" }, plan.err) : null,
      plan.state === "idle" && !pd ? h("div", { class: "small muted" }, "寫低題目或者連住啲嘢，再撳「叫 AI 幫我設定」；由對話／問題／beat 帶過嚟嘅會自動開始。") : null,
      pd ? h("div", { class: "plan-understand" }, pd.understanding) : null,
      // 📌 what the setting is now (so the author can see at once whether the AI got it right) + where it read it
      pd?.current ? h("div", { class: "plan-current" }, h("b", {}, "📌 而家嘅設定："), " ", pd.current,
        (pd.sources || []).length ? h("div", { class: "chips", style: "margin-top:6px" }, ...pd.sources.map((s) => h("button", { class: "fchip", title: s.note || "", onclick: () => ctx.openFile(s.file) }, "📄 " + String(s.file).split("/").pop()))) : null) : null,
      pd?.big ? h("div", { class: "plan-warn" }, "⚠️ 呢個題目會改已經確認咗嘅設定：討論結果只係草稿，要你批先會改。") : null,
      // guiding questions first: the author answers, then the AI proposes set-ups that fit the answers
      pd?.questions?.length ? h("div", { class: "plan-qs" }, h("b", {}, "🙋 開始之前想問你："),
        ...pd.questions.map((q) => { const own = h("input", { type: "text", placeholder: "或者自己寫", value: plan.answers[q.q] && !q.options.includes(plan.answers[q.q]) ? plan.answers[q.q] : "", oninput: (e) => { plan.answers[q.q] = e.target.value; } });
          return h("div", { class: "plan-q" }, h("div", { style: "font-weight:700" }, q.q),
            h("div", { class: "chips" }, ...(q.options || []).map((o) => h("button", { class: "chip" + (plan.answers[q.q] === o ? " on" : ""), onclick: () => { plan.answers[q.q] = o; drawPlan(); } }, o)), own)); }),
        h("div", { class: "toolbar", style: "margin:8px 0 0" },
          h("button", { class: "small primary", onclick: () => runPlan() }, "✅ 答完，出討論方向"),
          h("button", { class: "small", onclick: () => { plan.answers["（作者跳過引導問題）"] = "直接出方向"; runPlan(); } }, "跳過，直接出方向"))) : null,
      pd?.proposals?.length ? h("div", { class: "plan-props" }, ...pd.proposals.map((pr) => h("button", { class: "pp-sugg", onclick: () => applyPlan(pr) },
        h("div", { class: "l" }, pr.label), h("div", { class: "w" }, pr.why), h("div", { class: "w" }, `👥 ${(pr.roles || []).join("、") || "（你揀）"} · ${pr.rounds || 3} 輪`)))) : null,
    ].filter(Boolean));
  };
  async function runPlan() {
    const key = JSON.stringify([topic.value.trim(), d.context, d.links.map((l) => l.id)]);
    if (key !== plan.key) plan.answers = {}; // new topic: earlier answers no longer apply
    plan.state = "loading"; plan.key = key; drawPlan();
    try { plan.data = await api("/api/discuss/plan", { topic: topic.value.trim(), context: d.context, links: d.links, answers: plan.answers }); plan.state = "done"; }
    catch (e) { plan.state = "error"; plan.err = e.message; }
    drawPlan(); drawChips();
  }
  const seedKey = JSON.stringify([d.topic, d.context, d.links.map((l) => l.id)]);
  if ((d.topic || d.links.length) && plan.key !== seedKey && plan.state !== "loading") { plan.data = null; runPlan(); } else drawPlan();
  const chip = (txt, target, ai) => h("button", { class: "chip" + (ai ? " ai" : ""), onclick: () => { target.value = target.value ? target.value + "；" + txt : txt; } }, txt);
  const start = async () => {
    if (!topic.value.trim()) return toast("未寫題目");
    const on = roles.filter((r) => r.on);
    if (on.length < 2) return toast("最少揀兩個角色");
    await api("/api/discuss/roles", roles);
    const { id } = await api("/api/discuss", { topic: topic.value.trim(), range: range.value.trim(), stop: stopIn.value.trim(), context: d.context, links: d.links, from: d.from || "",
      skill: d.skill, skillChoice: d.skillChoice, roles: on, maxRounds: +rounds.value, model: modelSel.value, items: d.items || [], actions: d.actions || [] });
    f.draft = null; f.plan = null; f.id = id; rerender();
    ctx.syncURL?.(); // the discussion's address (back/forward, bookmarks) once it has an id
  };
  drawChips();

  el.append(h("h2", {}, "🤖 自動討論"),
    h("div", { class: "hint" }, "設定題目、範圍同停止點，幾個 AI 角色會自己傾，獨立主持人每輪判斷停唔停（研究顯示 2–3 輪最好，之後易兜圈）。佢哋只可以讀檔，唔會改任何嘢；結果係草稿，要帶入對話先正式決定。"),
    h("div", { class: "card disc-setup" },
      planBox,
      h("div", { class: "field" }, h("b", {}, "1. 題目"), h("div", { style: "display:flex;gap:8px" }, ctx.mic?.(topic), topic)),
      d.context ? h("div", { class: "small muted" }, "📎 " + d.context.slice(0, 200)) : null,
      d.items?.length ? h("div", { class: "small", style: "font-weight:700" }, `📋 處理 ${d.items.length} 項（傾完總結會逐項建議：${(d.actions || []).map((a) => a.label).join("／")}／保留，你剔完先執行）`) : null,
      h("div", { class: "field" }, h("b", {}, "2. 範圍"), h("div", { style: "display:flex;gap:8px" }, ctx.mic?.(range), range), rangeChips, boards.length ? pickBox : null),
      h("div", { class: "field" }, h("b", {}, "3. 去到邊度停"), stopIn, stopChips),
      h("div", { class: "field" }, h("b", {}, "4. 連住嘅嘢（AI 會以佢哋為依據）"), linkBox, charBox, linkSearch, linkHits),
      h("div", { class: "field" }, h("b", {}, "5. 用邊個 skill 嘅方法（可選）"), skillSel, choiceBox),
      h("div", { class: "field" }, h("b", {}, "6. 邊啲角色傾（撳揀；可以由 skill 加）"), roleTiles),
      h("div", { class: "field toolbar", style: "margin:0" }, h("span", {}, "最多"), rounds, h("span", {}, "輪"), modelSel, estOut),
      h("div", { class: "actions" }, h("button", { class: "primary", onclick: start }, "🤖 開始討論"))),
    history.length ? h("h3", { style: "margin-top:20px" }, "以前嘅討論") : null,
    history.length ? h("div", { class: "card", style: "padding:0" }, ...history.slice(0, 30).map((x) => h("div", { class: "list-item clickable", style: "display:flex;gap:10px;align-items:center", onclick: () => { f.id = x.id; f.focus = null; rerender(); } },
      h("span", { class: "pill " + ({ done: "ok", running: "info", paused: "warn" }[x.state] || "") }, { done: "完成", running: "傾緊", paused: "暫停", stopped: "停咗", summarizing: "總結緊" }[x.state] || x.state),
      h("b", { style: "flex:1" }, x.topic.slice(0, 60)), x.links?.length ? h("span", { class: "pill" }, `📎 ${x.links.length}`) : null,
      h("span", { class: "small muted" }, `${x.round}/${x.maxRounds} 輪`),
      x.state === "done" ? h("button", { class: "small primary", onclick: (e) => { e.stopPropagation(); f.id = x.id; f.focus = "summary"; rerender(); } }, "📋 睇總結") : null))) : null);
}
