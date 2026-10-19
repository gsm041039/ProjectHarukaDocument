// 📜 工作紀錄：邊個對話／你幾時改咗邊個檔、點解。左＝檔案樹（改過嘅檔亮起＋次數），中＝時間線，右＝揀咗嘅檔：每次改動同「改咗咩」。
// 來源：server 自動記低（activity.jsonl：對話改檔、你送出待送出）＋ git commit。唔靠 AI 自己記。
const KIND = { edit: ["✏️", "AI 改咗"], intent: ["📤", "你批咗"], commit: ["📦", "commit"] };

export async function render(el, ctx) {
  const { h, state, api, openFile, openPast, openLive, plain, strip } = ctx;
  const f = (state.actPick ||= { path: "", kind: "", open: "" });
  f.path ||= ""; f.kind ||= ""; f.open ||= "";
  const rerender = () => { el.replaceChildren(); render(el, ctx); };
  const data = await api("/api/activity");

  // one list of entries: each with a time, a kind, who did it, the files and why
  // only real documents: no temp / cache / compiled files
  const keep = (x) => !/(^|\/)(\.tmp|__pycache__|node_modules)(\/|$)|\.pyc$/.test(x);
  const all = [
    ...data.events.map((e) => ({ ...e, files: (e.file ? [e.file] : []).filter(keep) })).filter((e) => e.kind !== "edit" || e.files.length),
    ...data.commits.map((c) => ({ t: c.t, kind: "commit", title: c.msg, files: c.files.filter(keep), hash: c.hash })).filter((c) => c.files.length),
  ].sort((a, b) => b.t - a.t);

  // ---------- left: folder tree of every file that changed ----------
  const count = new Map();
  for (const e of all) for (const file of e.files) { const parts = file.split("/");
    for (let i = 1; i <= parts.length; i++) { const k = parts.slice(0, i).join("/"); count.set(k, (count.get(k) || 0) + 1); } }
  const openSet = new Set((f.open || "").split("|").filter(Boolean));
  const children = (prefix) => [...count.keys()].filter((k) => k.startsWith(prefix ? prefix + "/" : "") && k.split("/").length === (prefix ? prefix.split("/").length + 1 : 1))
    .sort((a, b) => (isFile(a) - isFile(b)) || count.get(b) - count.get(a));
  const isFile = (k) => /\.\w+$/.test(k.split("/").pop()) ? 1 : 0;
  const node = (k, depth) => {
    const name = k.split("/").pop(), file = isFile(k), on = f.path === k, opened = openSet.has(k);
    const row = h("div", { class: "act-node" + (on ? " on" : "") + (file ? " file" : ""), style: `padding-left:${8 + depth * 14}px`,
      onclick: () => { if (!file) { opened ? openSet.delete(k) : openSet.add(k); f.open = [...openSet].join("|"); } f.path = on && !file ? "" : k; rerender(); } },
      h("span", { class: "act-ic" }, file ? "📄" : opened ? "📂" : "📁"), h("span", { class: "act-name", title: k }, name), h("span", { class: "act-count" }, count.get(k)));
    return [row, ...(!file && opened ? children(k).flatMap((c) => node(c, depth + 1)) : [])];
  };
  const tree = h("div", { class: "card act-tree" }, h("div", { class: "act-node" + (!f.path ? " on" : ""), onclick: () => { f.path = ""; rerender(); } }, h("span", { class: "act-ic" }, "🗂️"), h("b", { class: "act-name" }, "全部"), h("span", { class: "act-count" }, all.length)),
    ...children("").flatMap((c) => node(c, 0)));

  // ---------- middle: timeline for the picked folder / file ----------
  const inPath = (e) => !f.path || e.files.some((x) => x === f.path || x.startsWith(f.path + "/"));
  const shown = all.filter((e) => inPath(e) && (!f.kind || e.kind === f.kind));
  const day = (t) => t ? new Date(t).toLocaleDateString("zh-HK", { month: "numeric", day: "numeric", weekday: "short" }) : "（冇日期）";
  const time = (t) => t ? new Date(t).toLocaleTimeString("zh-HK", { hour: "2-digit", minute: "2-digit" }) : "";
  const who = (e) => e.kind === "commit" ? h("span", { class: "small muted" }, e.hash)
    : h("button", { class: "linkish", title: "返去嗰個對話", onclick: () => { const live = state.live.find((x) => x.id === e.sid || x.sdkSessionId === e.sid); live ? openLive(live.id) : /^[0-9a-f-]{36}$/.test(e.sid) ? openPast(e.sid, e.title) : null; } }, "💬 " + (strip(e.title || "") || "對話").slice(0, 30));
  const groups = [];
  for (const e of shown.slice(0, 400)) { const d = day(e.t); (groups.at(-1)?.d === d ? groups.at(-1) : (groups.push({ d, rows: [] }), groups.at(-1))).rows.push(e); }
  const timeline = h("div", { class: "card act-time" },
    h("div", { class: "chips", style: "margin-bottom:8px" }, ...[["", "全部"], ["edit", "✏️ AI 改咗"], ["intent", "📤 你批咗"], ["commit", "📦 commit"]].map(([k, l]) =>
      h("button", { class: "chip" + (f.kind === k ? " on" : ""), onclick: () => { f.kind = k; rerender(); } }, l))),
    shown.length ? null : h("div", { class: "muted" }, "呢度未有改動紀錄。之後 AI 每次改檔、你每次送出待送出，都會自動記低。"),
    ...groups.flatMap((g) => [h("div", { class: "act-day" }, g.d), ...g.rows.map((e) => h("div", { class: "act-row" },
      h("span", { class: "act-time-t" }, time(e.t)), h("span", { class: "act-ic", title: KIND[e.kind][1] }, KIND[e.kind][0]),
      h("div", { class: "act-body" },
        h("div", { class: "act-what" }, e.kind === "intent" ? plain(e.note || "") : e.kind === "commit" ? e.title : (e.reason ? plain(e.reason) : h("span", { class: "muted" }, e.backfill ? "（舊紀錄，冇記低原因）" : "（AI 冇講原因）"))),
        h("div", { class: "act-files" }, ...e.files.slice(0, 6).map((x) => h("button", { class: "fchip" + (x === f.path ? " on" : ""), title: x, onclick: () => { f.path = x; rerender(); } }, "📄 " + x.split("/").pop())),
          e.files.length > 6 ? h("span", { class: "small muted" }, `…仲有 ${e.files.length - 6} 個`) : null),
        who(e))))]));

  // ---------- right: one file — its history and what changed ----------
  let side;
  if (f.path && /\.\w+$/.test(f.path)) {
    const diffBox = h("pre", { class: "act-diff small" }, "撳上面掣睇改咗咩");
    const showDiff = async (commit) => { diffBox.textContent = "讀緊…"; const r = await api(`/api/git/diff?path=${encodeURIComponent(f.path)}${commit ? "&commit=" + commit : ""}`).catch((e) => ({ output: e.message }));
      diffBox.replaceChildren(...String(r.output || "（冇改動）").split("\n").slice(0, 600).map((l) => h("div", { class: l.startsWith("+") && !l.startsWith("+++") ? "add" : l.startsWith("-") && !l.startsWith("---") ? "del" : "" }, l || " "))); };
    const hist = all.filter((e) => e.files.includes(f.path));
    side = h("div", { class: "card act-side" },
      h("div", { class: "small muted" }, f.path.split("/").slice(0, -1).join(" › ")),
      h("h3", { style: "margin:2px 0 8px" }, "📄 " + f.path.split("/").pop()),
      h("div", { class: "toolbar" }, h("button", { class: "small primary", onclick: () => showDiff("") }, "未 commit 改咗咩"), h("button", { class: "small", onclick: () => openFile(f.path) }, "打開個檔")),
      h("div", { class: "small", style: "font-weight:800;margin:8px 0 4px" }, `改過 ${hist.length} 次`),
      ...hist.slice(0, 20).map((e) => h("div", { class: "act-hist" }, `${day(e.t)} ${time(e.t)} ${KIND[e.kind][0]} `,
        e.kind === "commit" ? h("button", { class: "linkish", onclick: () => showDiff(e.hash) }, "睇呢次改咗咩") : h("span", {}, strip(e.title || "").slice(0, 24)))),
      diffBox);
  } else side = h("div", { class: "card act-side muted" }, f.path ? `📁 ${f.path}：左邊揀一個檔，睇佢改過幾多次同改咗咩。` : "左邊揀資料夾或者檔案，中間只會顯示佢嘅改動；揀檔案會喺呢度見到每次改動同改咗咩。");

  el.append(h("h2", {}, "📜 工作紀錄"),
    h("div", { class: "hint" }, "邊個對話幾時改咗咩檔、點解改；你喺待送出批過咩；commit 咗咩。由網頁自動記，唔靠 AI 記得寫（之前嘅舊改動只補得返檔名，冇原因）。"),
    h("div", { class: "act-page" }, tree, timeline, side));
}
