// 任何實體（問題／決定／矩陣題目／beat／task／視覺語言／角色／美術／文件）都用同一個詳情面板：
// 內容摘要＋所有相關實體（撳得，一路跳）＋嗰類實體適用嘅操作。所有改動都排入「待送出」，由 Claude 執行。
// 加新類型：TYPES 加一行＋ACTIONS 加一個函數。
export const TYPES = {
  question: ["❓", "問題"], decision: ["⚖️", "決定"], matrix: ["🧩", "矩陣題目"], beat: ["🎬", "Beat"], task: ["🗂️", "Task"],
  visual: ["🎨", "視覺語言"], character: ["👤", "角色"], art: ["🖼️", "美術"], skill: ["🧠", "Skill"], pipeline: ["🛤️", "Pipeline"], todo: ["📝", "待辦"], discussion: ["🤖", "自動討論"], conversation: ["💬", "對話"], file: ["📄", "文件"],
};
const TYPE_ORDER = Object.keys(TYPES);
// typed, directed relations from the index: kind → [label when this item points out, label when others point at it]
const KINDS = {
  derived_from: ["⬆️ 衍生自", "⬇️ 由佢衍生"], supersedes: ["🔁 取代咗", "🔁 被取代"], affects: ["⚡ 影響到", "⚡ 受影響於"],
  based_on: ["📐 依據", "📐 被用做依據"], answers: ["✅ 答咗", "✅ 被答"], edited: ["✏️ 改過", "✏️ 被改過"], read: ["📖 讀過", "📖 被讀過"],
  grounded_on: ["📎 以佢為依據", "📎 被討論用做依據"], links_to: ["🔗 連去", "🔗 被連"], cites: ["📌 引用", "📌 被引用"], about: ["👤 講到", "👤 被講到"],
};

export function createEntityUI(ctx) {
  const { h, md, state, sendIntent, newSession, openFile, switchTab, continueTask, toast, launch, start } = ctx;
  const ent = (id) => state.index?.entities?.[id];
  const ask = (msg) => { const v = prompt(msg); return v == null ? null : v.trim(); };
  const talk = (e, extra = "") => newSession(`我想傾「${e.title}」（${e.id}${e.file ? "，" + e.file : ""}）。請先讀相關文件，用白話講佢而家嘅狀態、同邊啲嘢有關、有咩未決。${extra}`, e.title.slice(0, 24));

  // What you can do with each type. Each action: [label, fn, isPrimary]
  const ACTIONS = {
    question: (e) => [
      ["💬 同 Claude 傾", () => talk(e, "再畀我候選。"), true],
["🤖 叫 AI 自己傾", () => { state.discuss = { id: null, draft: { topic: e.title, range: "", stop: "有 2–3 個成形候選＋推薦", context: "", links: [{ id: e.id, title: e.title, file: e.file || "" }] } }; switchTab("discuss"); document.getElementById("drawer").classList.remove("open"); }],
      ["✅ 標已解決", () => { const a = ask("答案係咩？（一句講）"); if (a) sendIntent({ type: "question.resolve", target: e.id, payload: { answer: a }, note: `問題「${e.title.slice(0, 40)}」已解決：${a}（請更新 QUESTION_QUEUE，需要嘅話落 CDL）` }); }],
      ["🗑️ 作廢", () => { const r = ask("點解作廢？（例：已過時／被其他決定取代）"); if (r != null) sendIntent({ type: "question.drop", target: e.id, payload: { reason: r }, note: `作廢問題「${e.title.slice(0, 40)}」：${r || "已過時"}（QUESTION_QUEUE 標 DROPPED，保留紀錄）` }); }],
      ["⏸️ 押後", () => sendIntent({ type: "question.defer", target: e.id, payload: {}, note: `押後問題「${e.title.slice(0, 40)}」（DEFERRED，請補 revisit trigger）` })],
      ["⬆️ 提到最優先", () => sendIntent({ type: "question.priority", target: e.id, payload: { to: "P1" }, note: `將問題「${e.title.slice(0, 40)}」提到最優先` })],
    ],
    decision: (e) => [
      ["💬 同 Claude 傾", () => talk(e), true],
["🤖 叫 AI 自己傾", () => { state.discuss = { id: null, draft: { topic: e.title, range: "", stop: "有 2–3 個成形候選＋推薦", context: "", links: [{ id: e.id, title: e.title, file: e.file || "" }] } }; switchTab("discuss"); document.getElementById("drawer").classList.remove("open"); }],
      ["🔁 要重審", () => { const r = ask("點解要重審？"); if (r) sendIntent({ type: "decision.review", target: e.id, payload: { reason: r }, note: `決定「${e.title.slice(0, 40)}」要重審：${r}（唔好直接改 canon，先開問題同作者確認）` }); }],
    ],
    matrix: (e) => [
      ["💬 同 Claude 傾", () => talk(e, "邊啲角度要我決定？"), true],
["🤖 叫 AI 自己傾", () => { state.discuss = { id: null, draft: { topic: e.title, range: "", stop: "有 2–3 個成形候選＋推薦", context: "", links: [{ id: e.id, title: e.title, file: e.file || "" }] } }; switchTab("discuss"); document.getElementById("drawer").classList.remove("open"); }],
      ["🔄 叫 Claude 更新", () => sendIntent({ type: "matrix.refresh", target: e.id, payload: {}, note: `核對並更新 QUESTION_MATRIX「${e.title.slice(0, 40)}」嘅角度狀態` })],
      ["🧩 喺矩陣睇", () => { state.mFilter = { mode: "all", text: e.title.slice(0, 20), usedOnly: true, sel: e.title }; switchTab("matrix"); }],
    ],
    beat: (e) => [
      ["💬 傾呢個 beat", () => talk(e), true],
      ["📄 睇設計", () => openFile(e.file)],
      ["🤖 叫 AI 自己傾", () => { state.discuss = { id: null, draft: { topic: e.title, range: "", stop: "有 2–3 個成形候選＋推薦", context: "", links: [{ id: e.id, title: e.title, file: e.file || "" }] } }; switchTab("discuss"); document.getElementById("drawer").classList.remove("open"); }],
      ["⚠️ 標要 revalidate", () => sendIntent({ type: "beat.revalidate", target: e.id, payload: { file: e.file }, note: `beat「${e.title}」標 REVALIDATE_REQUIRED，並列出受影響下游` })],
    ],
    task: (e) => {
      const t = (state.index?.tasks || []).find((x) => x.id === e.id);
      return [
        t && t.status !== "完成" ? ["▶ 繼續", () => continueTask(t), true] : null,
        ...["進行中", "等作者", "暫停", "完成"].filter((s) => s !== e.status).map((s) => [`→ ${s}`, () => sendIntent({ type: "task.set_status", target: e.id, payload: { to: s }, note: `將 task「${e.title}」改做「${s}」（TASK_BOARD.md）` })]),
      ].filter(Boolean);
    },
    visual: (e) => [
      ["💬 同 Claude 傾", () => talk(e), true],
      ["✏️ 改狀態", () => { const s = ask(`新狀態？（而家：${e.status}；例：FIRST-PASS COMPLETE／EXPLORING／PARKED）`); if (s) sendIntent({ type: "visual.set_state", target: e.id, payload: { state: s }, note: `視覺語言「${e.title.slice(0, 40)}」狀態改做 ${s}（BETA_VISUAL_LANGUAGE_REGISTER）` }); }],
    ],
    character: (e) => [
      ["💬 同 Claude 傾", () => talk(e), true],
      ["📄 角色檔", () => openFile(e.file)],
      ["🖼️ 睇美術", () => { const c = (state.index?.characters?.rows || []).find((x) => x.id === e.id); state.artPick = { group: c?.art_folder ? "ART:" + c.art_folder : null, old: false }; switchTab("art"); }],
    ],
    art: (e) => [
      ["🖼️ 打開圖庫", () => { state.artPick = { group: e.id, old: false }; switchTab("art"); }, true],
      ["💬 同 Claude 傾", () => talk(e, "呢組美術同 canon 視覺設定有冇唔夾？")],
    ],
    conversation: (e) => [
      ["▶ 打開對話", () => { document.getElementById("drawer").classList.remove("open"); const live = state.live.find((s) => s.sdkSessionId === e.session); live ? ctx.openLive(live.id) : ctx.openPast(e.session, e.title); }, true],
    ],
    discussion: (e) => [
      ["🤖 打開討論", () => { state.discuss = { id: e.id.replace(/^DISC:/, ""), draft: null }; switchTab("discuss"); document.getElementById("drawer").classList.remove("open"); }, true],
    ],
    todo: (e) => [
      ["💬 叫 Claude 查", () => newSession(`SESSION_LEDGER 有條未完成待辦：「${e.title}」。請查吓佢而家仲使唔使做、做咗未，用白話話我知，再建議完成／作廢。`, e.title.slice(0, 24)), true],
      ["✅ 標完成", () => sendIntent({ type: "ledger.todo_done", target: e.id, payload: { text: e.title }, note: `標完成待辦：「${e.title.slice(0, 50)}」` })],
      ["🗑️ 作廢", () => sendIntent({ type: "ledger.todo_drop", target: e.id, payload: { text: e.title }, note: `作廢待辦：「${e.title.slice(0, 50)}」` })],
    ],
    skill: (e) => [
      ["▶ 用呢個 skill 開工", () => launch({ skill: e.title, tab: "skills" }), true],
      ["📄 睇 skill 說明", () => openFile(e.file)],
    ],
    pipeline: (e) => [
      ["▶ 繼續呢條 pipeline", () => newSession(`繼續 pipeline「${e.title}」（\`${e.file}\`）：請讀 tracker，用白話講做到邊個階段、下一步、要我決定咩，然後開始。`, e.title.slice(0, 24)), true],
      ["📄 睇 tracker", () => openFile(e.file)],
    ],
    file: (e) => [
      ["📄 打開", () => openFile(e.id), true],
      ["🧠 揀 skill 處理", () => launch({ context: `文件 \`${e.id}\``, tab: "skills" })],
      ["💬 同 Claude 傾", () => talk(e)],
      ["⚠️ 標要 revalidate", () => sendIntent({ type: "doc.mark_revalidate", target: e.id, payload: {}, note: `將 ${e.title} 標做要 revalidate，並列出受影響嘅下游` })],
      ["🗄️ 標已取代", () => { const by = ask("被邊份取代？（檔名，可留空）"); if (by != null) sendIntent({ type: "doc.supersede", target: e.id, payload: { by }, note: `${e.title} 已被取代${by ? "（由 " + by + "）" : ""}：更新 LAYER_MANIFEST 做 SUPERSEDED` }); }],
    ],
  };

  const drawer = document.getElementById("drawer");
  const history = [];

  function typedSec(e) {
    const by = {};
    for (const [kind, dir, other] of e.edges || []) { const o = ent(other); if (o && KINDS[kind]) (by[kind + "|" + dir] ||= []).push(o); }
    const keys = Object.keys(KINDS).flatMap((k) => [k + "|out", k + "|in"]).filter((k) => by[k]);
    if (!keys.length) return [];
    return [h("h3", { style: "margin-top:20px" }, "🧬 關係"), ...keys.map((k) => {
      const [kind, dir] = k.split("|"), xs = by[k];
      return h("div", { class: "ent-group" }, h("div", { class: "ent-gh" }, `${KINDS[kind][dir === "out" ? 0 : 1]}（${xs.length}）`),
        h("div", { class: "ent-chips" }, ...xs.slice(0, 16).map((r) => h("button", { class: "ent-chip", title: r.title, onclick: () => open(r.id) },
          `${(TYPES[r.type] || ["•"])[0]} `, r.title.slice(0, 40))), xs.length > 16 ? h("span", { class: "small muted" }, `…仲有 ${xs.length - 16} 個`) : null));
    })];
  }

  function open(id, push = true) {
    const e = ent(id);
    if (!e) return toast("搵唔到：" + id);
    if (push) history.push(id);
    const [ic, tname] = TYPES[e.type] || ["•", e.type];
    const rels = (e.rel || []).map(ent).filter(Boolean);
    const groups = TYPE_ORDER.map((t) => [t, rels.filter((r) => r.type === t)]).filter(([, xs]) => xs.length);
    const back = history.length > 1 ? h("button", { class: "small", onclick: () => { history.pop(); open(history[history.length - 1], false); } }, "← 返回") : null;
    document.getElementById("drawer-path").replaceChildren(back || "", " ", `${ic} ${tname}`);
    document.getElementById("drawer-chat").style.display = "none";
    const body = document.getElementById("drawer-body");
    body.replaceChildren(...[
      h("div", { class: "ent-head" }, h("span", { class: "ent-ic" }, ic),
        h("div", {}, h("div", { class: "ent-title" }, e.title), h("div", { class: "small muted", style: "font-weight:700" }, e.id, e.status ? h("span", { class: "pill", style: "margin-left:8px" }, e.status) : null))),
      h("div", { class: "ent-actions" }, h("button", { class: "small brand", onclick: () => { drawer.classList.remove("open"); start({ type: e.type, id: e.id, title: e.title, file: e.file }); } }, "✨ 開工"),
        ...ACTIONS[e.type]?.(e).map(([label, fn, primary]) => h("button", { class: "small" + (primary ? " primary" : ""), onclick: fn }, label)) || []),
      e.summary ? h("div", { class: "card", style: "margin-top:14px" }, h("div", { class: "msg", style: "margin:0;font-size:14px" }, e.summary)) : null,
      e.file && e.type !== "file" ? h("div", { class: "small", style: "margin-top:8px" }, "📄 ", h("a", { href: "#", onclick: (ev) => { ev.preventDefault(); openFile(e.file); } }, e.file)) : null,
      ...typedSec(e),
      h("h3", { style: "margin-top:20px" }, `🔗 全部相關（按類型，${rels.length}）`),
      rels.length ? null : h("div", { class: "muted small" }, "未搵到同其他嘢嘅連結（連結係由編號、角色名同檔名自動抽出嚟）"),
      ...groups.map(([t, xs]) => h("div", { class: "ent-group" }, h("div", { class: "ent-gh" }, `${TYPES[t][0]} ${TYPES[t][1]}（${xs.length}）`),
        h("div", { class: "ent-chips" }, ...xs.slice(0, 40).map((r) => h("button", { class: "ent-chip", title: r.title, onclick: () => open(r.id) },
          r.status ? h("span", { class: "pill " + statusCls(r.status) }, r.status.slice(0, 14)) : null, r.title.slice(0, 46))),
          xs.length > 40 ? h("span", { class: "small muted" }, `…仲有 ${xs.length - 40} 個`) : null))),
    ].filter(Boolean));
    drawer.classList.add("open");
  }

  // ---------- global search (Ctrl+K) ----------
  const modal = h("div", { class: "search-modal" });
  const input = h("input", { type: "search", placeholder: "搵問題、決定、beat、角色、文件…（Esc 關）" });
  const list = h("div", { class: "search-list" });
  modal.append(h("div", { class: "search-box card" }, h("div", { style: "display:flex;gap:8px" }, input, h("button", { class: "icon-btn", title: "關閉（Esc）", onclick: () => close() }, "✕")), list));
  document.body.append(modal);
  let hits = [], sel = 0;
  const run = () => {
    const q = input.value.trim().toLowerCase();
    const all = Object.values(state.index?.entities || {});
    hits = q ? all.filter((e) => (e.id + " " + e.title).toLowerCase().includes(q)).sort((a, b) => TYPE_ORDER.indexOf(a.type) - TYPE_ORDER.indexOf(b.type)).slice(0, 40) : [];
    sel = 0;
    list.replaceChildren(...hits.map((e, i) => h("div", { class: "search-hit" + (i === sel ? " on" : ""), onclick: () => pick(e) },
      h("span", { class: "ic" }, TYPES[e.type]?.[0] || "•"), h("div", { style: "min-width:0" }, h("div", { class: "t" }, e.title), h("div", { class: "small muted" }, `${TYPES[e.type]?.[1] || e.type} · ${e.id}`)),
      e.status ? h("span", { class: "pill " + statusCls(e.status) }, e.status.slice(0, 12)) : null)),
      q && !hits.length ? h("div", { class: "muted", style: "padding:14px" }, "冇結果") : "");
  };
  const pick = (e) => { close(); history.length = 0; open(e.id); };
  const close = () => modal.classList.remove("show");
  const show = () => { modal.classList.add("show"); input.value = ""; run(); input.focus(); };
  input.addEventListener("input", run);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
    if (e.key === "ArrowDown" || e.key === "ArrowUp") { sel = (sel + (e.key === "ArrowDown" ? 1 : -1) + hits.length) % Math.max(hits.length, 1); [...list.children].forEach((c, i) => c.classList.toggle("on", i === sel)); e.preventDefault(); }
    if (e.key === "Enter" && hits[sel]) pick(hits[sel]);
  });
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); show(); } });

  return { open: (id) => { history.length = 0; open(id); }, search: show };
}

export function statusCls(s) {
  return /BLOCK|過時/.test(s) ? "bad" : /OPEN|PROGRESS|未解決|NEEDS|等作者/.test(s) ? "warn" : /RESOLVED|COMPLETE|完成|CURRENT/.test(s) ? "ok" : "";
}
