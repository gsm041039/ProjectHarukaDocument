// Detail + buttons for one pipeline step. Buttons depend on the step's status.
// Chats are remembered per step (localStorage) so 開始 becomes 返去對話 while one is open.
const ls = { get: (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } }, set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} } };

export function stepButtons(ctx, pl, s, at, rerender) {
  const { h, state, newSession, sendIntent, openFile, openLive, openDiscuss, toast } = ctx;
  const key = `${pl.file}#${s.code}`;
  const where = `流程「${pl.short}」第 ${at + 1} 步「${s.title}」（\`${pl.file}\` 第 ${s.line} 行）`;
  const label = (k) => state.config?.skill_labels?.[k] || k;

  // chats opened for this step
  const chats = ls.get("flowChats", {});
  const ids = [].concat(chats[key] || []);
  const open = state.live.filter((x) => ids.includes(x.id) && x.status !== "closed");
  const chat = async (text, title) => {
    const id = await newSession(`${where}。${text}`, `${title}：${s.title}`.slice(0, 28));
    ls.set("flowChats", { ...ls.get("flowChats", {}), [key]: [...ids, id].slice(-5) });
  };
  const setStatus = (status, why) => {
    sendIntent({ type: "pipeline.set_status", target: key, payload: { status }, note: `${pl.short}第 ${at + 1} 步「${s.title}」改做 ${status}${why ? "：" + why : ""}` });
    toast("已放入待送出，送出先改進度檔");
  };
  const btn = (text, title, onclick, cls = "") => h("button", { class: cls, title, onclick }, text);

  // buttons that make sense for this status
  const st = s.status || "TODO";
  const main = {
    TODO: [
      btn("▶ 開始呢步", "開新對話，AI 先讀呢步同前置條件再開始", () => chat("先讀嗰段同前置條件，用白話講要做咩、有冇要我決定，然後開始。", "開始"), "primary"),
      btn("🔍 檢查前置條件", "淨係檢查上一步同要批嘅嘢齊未，唔開始做", () => chat("淨係檢查前置條件：上一步做完未、有冇未批嘅層、缺咩資料。用白話列出，唔好開始做。", "前置")),
      btn("⏸ 押後", "標呢步押後（入待送出）", () => { const why = prompt("押後原因？（可留空）"); if (why != null) setStatus("DEFERRED", why); }),
    ],
    IN_PROGRESS: [
      btn("▶ 繼續做", "開對話接住做", () => chat("讀返嗰段同相關紀錄，講返做到邊，然後繼續。", "繼續"), "primary"),
      btn("📋 總結做到邊", "淨係講進度，唔做嘢", () => chat("淨係用白話總結做到邊、仲差咩、有咩要我決定，唔好開始做。", "總結")),
      btn("✓ 標做完", "入待送出，送出先改", () => setStatus("DONE")),
      btn("⛔ 標卡住", "寫原因，入待送出", () => { const why = prompt("卡喺邊？"); if (why) setStatus("BLOCKED", why); }),
    ],
    AWAITING: [
      btn("👀 睇要批嘅嘢", "開對話用白話講要批咩", () => chat("用白話講呢步要我批嘅係咩、有咩選擇同代價，用選項卡問我。", "要批"), "primary"),
      btn("✅ 批准呢步", "標做完（入待送出）", () => setStatus("DONE", "作者批准")),
      btn("✏️ 要改", "講要改咩，開對話處理", () => { const what = prompt("要改咩？"); if (what) chat(`我未批，要改：${what}。先講會改邊度，再改。`, "要改"); }),
    ],
    BLOCKED: [
      btn("🧩 搵解決方法", "開對話分析點解卡住", () => chat("分析點解卡住、有咩方法解，用選項卡問我揀。", "解卡"), "primary"),
      btn("▶ 恢復做緊", "改返做緊（入待送出）", () => setStatus("IN_PROGRESS", "已解卡")),
    ],
    DEFERRED: [
      btn("▶ 恢復", "改返未開始（入待送出）", () => setStatus("TODO", "恢復"), "primary"),
    ],
    DONE: [
      btn("📦 睇產出", "開對話列出呢步產出咗咩檔", () => chat("列出呢步產出咗咩檔、每份講咩，唔好改嘢。", "產出")),
      btn("🔄 重開", "改返做緊（入待送出）", () => { const why = prompt("點解要重開？"); if (why) setStatus("IN_PROGRESS", "重開：" + why); }),
    ],
  }[st] || [];

  return h("div", {},
    s.note && !/^skills?\s*[:：]/i.test(s.note) ? h("p", { style: "margin:0 0 10px" }, s.note) : null,
    s.checks?.length ? h("div", { class: "flow-sec" }, h("b", {}, `要做（${s.checks.filter((c) => c.done).length}/${s.checks.length}）`),
      ...s.checks.map((c) => h("div", { class: "flow-check" + (c.done ? " done" : "") }, c.done ? "☑ " : "☐ ", c.text))) : null,
    s.outputs ? h("div", { class: "flow-sec" }, h("b", {}, "做完會有"), h("div", {}, "📦 " + s.outputs)) : null,
    s.skills?.length ? h("div", { class: "flow-sec" }, h("b", {}, "會用到（撳一個就用佢做呢步）"),
      h("div", { class: "chips" }, ...s.skills.map((k) => h("button", { class: "chip", title: k, onclick: () => chat(`用 \`${k}\` skill 做呢步。先讀嗰段，再開始。`, label(k)) }, label(k))))) : null,
    open.length ? h("div", { class: "flow-sec" }, h("b", {}, "呢步開緊嘅對話"),
      ...open.map((x) => h("div", { class: "sess", onclick: () => openLive(x.id) }, h("span", { class: "dot " + x.status }), h("span", { class: "t" }, x.title)))) : null,
    h("div", { class: "flow-sec" }, h("b", {}, "下一步"), h("div", { class: "flow-btns" }, ...main)),
    h("div", { class: "flow-sec" }, h("b", {}, "其他"), h("div", { class: "flow-btns" },
      btn("🤖 交畀 AI 傾", "開自動討論設定，預填呢步", () => openDiscuss({ topic: `${pl.short}：${s.title} 點做最好？`, range: `只限呢一步：${s.title}`, links: [{ id: pl.file, title: pl.short, file: pl.file }] })),
      btn("📝 記低問題", "將呢步未決嘅嘢記入問題清單", () => chat("將呢步未決嘅問題記入 QUESTION_QUEUE，寫清幾時再諗。", "記問題")),
      btn("📄 睇原文", "打開進度檔", () => openFile(pl.file)))));
}
