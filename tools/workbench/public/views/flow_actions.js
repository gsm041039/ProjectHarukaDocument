// Detail + buttons for one pipeline step. Buttons depend on the step's status.
// Chats are remembered per step (localStorage) so 開始 becomes 返去對話 while one is open.
const ls = { get: (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } }, set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} } };

export function stepButtons(ctx, pl, s, at, rerender) {
  const { h, state, api, newSession, sendIntent, openFile, openLive, openDiscuss, toast } = ctx;
  const key = `${pl.file}#${s.code}`;
  const where = `流程「${pl.short}」第 ${at + 1} 步「${s.title}」（\`${pl.file}\` 第 ${s.line} 行）`;
  const label = (k) => state.config?.skill_labels?.[k] || k;

  // chats opened for this step
  const chats = ls.get("flowChats", {});
  const ids = [].concat(chats[key] || []);
  const open = state.live.filter((x) => ids.includes(x.id) && x.status !== "closed");
  const chat = async (text, title) => {
    const id = await newSession(`${where}。${text}`, `${title}：${s.title}`.slice(0, 28), key); // key links the chat to this step
    ls.set("flowChats", { ...ls.get("flowChats", {}), [key]: [...ids, id].slice(-5) });
  };
  const setStatus = (status, why) => {
    sendIntent({ type: "pipeline.set_status", target: key, payload: { status }, note: `${pl.short}第 ${at + 1} 步「${s.title}」改做 ${status}${why ? "：" + why : ""}` });
    toast("已放入待送出，送出先改進度檔");
  };
  const btn = (text, desc, onclick, cls = "") => h("div", { class: "flow-act" }, h("button", { class: cls, onclick }, text), h("span", { class: "small muted" }, desc));

  // buttons per status come from ui_config.json flow_steps (hint + buttons); each shows its own one-line explanation
  const st = s.status || "TODO";
  const conf = state.config?.flow_steps?.[st] || { hint: "", buttons: [] };
  const run = (b) => {
    const answer = b.ask ? prompt(b.ask) : "";
    if (answer == null || (b.ask && b.kind === "chat" && !answer)) return;
    if (b.kind === "status") return setStatus(b.status, [b.reason, answer].filter(Boolean).join("："));
    chat(String(b.prompt || "").replaceAll("{answer}", answer), b.label);
  };
  const main = conf.buttons.map((b) => h("div", { class: "flow-act" },
    h("button", { class: b.primary ? "primary" : "", onclick: () => run(b) }, `${b.icon || ""} ${b.label}`.trim()),
    h("span", { class: "small muted" }, b.desc || "")));

  return h("div", {},
    conf.hint ? h("div", { class: "flow-hint" }, h("b", {}, "💡 建議而家做："), " ", conf.hint) : null,
    // tracker text is written for the AI (codes, § refs): show the plain-language one-liner, original on hover
    s.note && !/^skills?\s*[:：]/i.test(s.note) ? h("p", { style: "margin:0 0 10px" }, ctx.plain(s.note)) : null,
    s.checks?.length ? (() => {
      const todo = s.checks.filter((c) => !c.done), did = s.checks.filter((c) => c.done);
      // each item is a button: the AI does just that item (in this step's open chat, else a new chat linked to the step)
      const doItem = async (c) => {
        const ask = `用 story-work-flow 做呢一步入面嘅一項：「${c.text}」。先講你會點做同會改邊啲檔，淨係做呢一項，做完喺進度檔剔返，再停低問我。`;
        const live = open[open.length - 1];
        if (live) { openLive(live.id); await api(`/api/sessions/${live.id}/message`, { text: ask }).catch((e) => toast(e.message)); }
        else await chat(ask, "做");
      };
      return h("div", { class: "flow-sec" }, h("b", {}, `要做（做咗 ${did.length}/${s.checks.length}）`),
        h("div", { class: "small muted" }, open.length ? "撳一項，會喺呢步開緊嘅對話叫 AI 做" : "撳一項，會開新對話叫 AI 淨係做嗰項"),
        ...todo.map((c) => h("button", { class: "flow-check flow-item", title: "叫 AI 做呢項：" + c.text, onclick: () => doItem(c) },
          h("span", { class: "flow-item-box" }, "☐"), ctx.plain(c.text), h("span", { class: "flow-item-go" }, "▶ 叫 AI 做"))),
        did.length ? h("details", { class: "flow-did" }, h("summary", {}, `☑ 已做 ${did.length} 項`),
          ...did.map((c) => h("div", { class: "flow-check done" }, ctx.plain(c.text)))) : null);
    })() : null,
    s.outputs ? h("div", { class: "flow-sec" }, h("b", {}, "做完會有"),
      ...(s.outputs.match(/[\w./\-]+\.md\b/g) || []).map((f) => h("button", { class: "linkish", title: f, onclick: () => openFile(f.includes("/") ? f : pl.file.replace(/[^/]+$/, "") + f) }, "📦 " + f.split("/").pop().replace(/\.md$/, "").replace(/^_/, ""))),
      (s.outputs.match(/[\w./\-]+\.md\b/g) || []).length ? null : h("div", {}, ctx.plain(s.outputs))) : null,
    s.skills?.length ? h("div", { class: "flow-sec" }, h("b", {}, "會用到（撳一個就用佢做呢步）"),
      h("div", { class: "chips" }, ...s.skills.map((k) => h("button", { class: "chip", title: k, onclick: () => chat(`用 \`${k}\` skill 做呢步。先讀嗰段，再開始。`, label(k)) }, label(k))))) : null,
    open.length ? h("div", { class: "flow-sec" }, h("b", {}, "呢步開緊嘅對話"),
      ...open.map((x) => h("div", { class: "sess", onclick: () => openLive(x.id) }, h("span", { class: "dot " + x.status }), h("span", { class: "t" }, x.title)))) : null,
    h("div", { class: "flow-sec" }, h("b", {}, "下一步"), h("div", { class: "flow-acts" }, ...main)),
    h("div", { class: "flow-sec" }, h("b", {}, "其他"), h("div", { class: "flow-acts" },
      btn("🤖 交畀 AI 傾", "開自動討論設定，預填呢步", () => openDiscuss({ topic: `${pl.short}：${s.title} 點做最好？`, range: `只限呢一步：${s.title}`, links: [{ id: pl.file, title: pl.short, file: pl.file }] })),
      btn("📝 記低問題", "將呢步未決嘅嘢記入問題清單", () => chat("將呢步未決嘅問題記入 QUESTION_QUEUE，寫清幾時再諗。", "記問題")),
      btn("📄 睇原文", "打開進度檔", () => openFile(pl.file)))));
}
