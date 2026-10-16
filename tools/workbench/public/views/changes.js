// 改動紀錄：未 commit 嘅改動＋最近 30 個 commit；撳檔名睇改咗咩（diff）。睇清楚 Claude 改咗咩先決定 commit。
export async function render(el, ctx) {
  const { h, api, openEntity, newSession } = ctx;
  el.append(h("h2", {}, "改動紀錄"), h("div", { class: "muted" }, "讀緊 git…"));
  const { status, log } = await api("/api/git/status");
  el.replaceChildren();
  const KIND = { M: ["改咗", "warn"], A: ["新加", "ok"], D: ["刪咗", "bad"], R: ["改名", "info"], "??": ["新檔（未追蹤）", "ok"] };
  const diffBox = h("div");
  const showDiff = async (file, commit) => {
    diffBox.replaceChildren(h("div", { class: "muted" }, "讀緊 diff…"));
    const { output } = await api(`/api/git/diff?path=${encodeURIComponent(file)}${commit ? "&commit=" + commit : ""}`);
    diffBox.replaceChildren(h("div", { class: "card diff-card" },
      h("div", { class: "toolbar" }, h("b", { style: "flex:1;overflow-wrap:anywhere" }, file, commit ? `（commit ${commit}）` : "（未 commit）"),
        h("button", { class: "small", onclick: () => openEntity(file) }, "🔗 詳情"), h("button", { class: "small", onclick: () => diffBox.replaceChildren() }, "✕")),
      h("pre", { class: "diff" }, ...output.split("\n").map((ln) => h("span", { class: ln.startsWith("+") && !ln.startsWith("+++") ? "add" : ln.startsWith("-") && !ln.startsWith("---") ? "del" : ln.startsWith("@@") ? "hunk" : "" }, ln + "\n")))));
    diffBox.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const fileRow = (code, file, commit) => {
    const [label, cls] = KIND[code.trim()[0] === "?" ? "??" : code.trim()[0]] || [code, ""];
    return h("div", { class: "list-item clickable", style: "display:flex;gap:8px;align-items:center", onclick: () => showDiff(file, commit) },
      h("span", { class: "pill " + cls }, label), h("span", { style: "flex:1;overflow-wrap:anywhere;font-weight:700" }, file));
  };

  const pending = status.split("\n").filter(Boolean).map((ln) => [ln.slice(0, 2), ln.slice(3).replace(/^"|"$/g, "")]);
  const commits = [];
  for (const ln of log.split("\n")) {
    const m = ln.match(/^([0-9a-f]{7,})\t(\S+)\t(.*)$/);
    if (m) commits.push({ hash: m[1], date: m[2], msg: m[3], files: [] });
    else if (ln.trim() && commits.length) { const [code, ...rest] = ln.split("\t"); commits.at(-1).files.push([code, rest.at(-1)]); }
  }

  el.append(h("h2", {}, "改動紀錄"),
    h("div", { class: "hint" }, "睇清楚每個檔改咗咩。撳檔名睇 diff（綠＝加咗，紅＝刪咗）。"),
    h("div", { class: "card", style: "padding:0;margin-bottom:16px" },
      h("div", { class: "list-item toolbar", style: "margin:0" }, h("h3", { style: "margin:0;flex:1" }, `📝 未 commit 嘅改動（${pending.length}）`),
        pending.length ? h("button", { class: "small primary", onclick: () => newSession("請睇 git status 同 diff，將未 commit 嘅改動按主題分組，用白話講每組改咗咩，建議 commit 訊息，用選項卡問我批邊幾組 commit。唔好 push。", "整理 commit") }, "🧹 叫 Claude 整理 commit") : null),
      ...(pending.length ? pending.map(([c, f]) => fileRow(c, f)) : [h("div", { class: "list-item muted" }, "冇未 commit 嘅改動")])),
    diffBox,
    h("h3", { style: "margin-top:20px" }, "🕘 最近嘅 commit"),
    h("div", { class: "card", style: "padding:0" }, ...commits.map((c) => h("details", { class: "list-item" },
      h("summary", { style: "cursor:pointer;font-weight:800" }, h("span", { class: "pill info" }, c.date), " ", c.msg, h("span", { class: "small muted" }, `  ${c.files.length} 個檔 · ${c.hash}`)),
      ...c.files.slice(0, 60).map(([code, f]) => fileRow(code, f, c.hash))))));
}
