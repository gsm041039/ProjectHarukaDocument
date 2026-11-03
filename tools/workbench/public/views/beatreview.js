// Beat 審閱：讀後台分析檔（config.beat_reviews），分頁顯示——總覽、28 角度色塊、缺口與接駁、關卡與知情、設定介紹與約束、新建議、下游。
// 右邊「待你決定」讀分析檔入面 `## … 待作者決定` 表（ID｜問題｜選項｜建議｜影響），剔選後放入待送出（ui:intent review.decide）。後台檔格式不變。
const FALLBACK = [{
  id: "patrol", name: "日常巡街＋實戰前練習",
  beats: "canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V5_BATCH7_PATROL_PRACTICE.md",
  analysis: "canon/_working/demo_pilot/beat_rederive_v4/BEAT_PATROL_FULL_ANALYSIS.md",
}];
const TABS = [
  ["總覽", null],
  ["28 角度", null],
  ["缺口與接駁", /接駁表|範圍外功能帳/],
  ["關卡與知情", /三道主題關卡|知情狀態表|四拍檢查/],
  ["設定介紹與約束", /環境敘事分配|硬約束命中/],
  ["新建議", /新建議/],
  ["下游與更正", /下游依賴核對|須同步改|未核對|更正/],
];

const getText = async (path) => {
  const r = await fetch("/api/file?path=" + encodeURIComponent(path));
  if (!r.ok) throw new Error(path + " 讀唔到");
  return r.text();
};

// ---- parsing (pure functions; exported for tests) ----
export const splitSections = (text) => {
  const out = [];
  const lines = String(text || "").split(/\r?\n/);
  let cur = null;
  for (const l of lines) {
    const m = /^## (.+)$/.exec(l);
    if (m) { cur = { title: m[1].trim(), body: [] }; out.push(cur); } else if (cur) cur.body.push(l);
  }
  return out.map((s) => ({ title: s.title, body: s.body.join("\n").trim() }));
};

export const parseTable = (body) => {
  const rows = String(body || "").split("\n").filter((l) => /^\s*\|/.test(l));
  if (rows.length < 3) return [];
  const cells = (l) => l.trim().replace(/^\|/, "").replace(/\|\s*$/, "").split("|").map((x) => x.trim());
  const head = cells(rows[0]);
  return rows.slice(2).map((r) => { const c = cells(r); return Object.fromEntries(head.map((k, i) => [k, c[i] ?? ""])); });
};

export const parseBeats = (text) => {
  const out = [];
  const re = /^## BEAT: (\S+)\n([\s\S]*?)(?=^## BEAT: |(?![\s\S]))/gm;
  let m;
  while ((m = re.exec(String(text || "")))) {
    const body = m[2];
    const fields = [];
    const fm = body.split(/\nFIELDS:\s*\n/)[1];
    if (fm) for (const l of fm.split("\n")) {
      const k = /^- (\w+):\s*(.*)$/.exec(l);
      if (k) fields.push([k[1], k[2]]);
      else if (/^PER_BEAT/.test(l)) break;
      else if (/^\s+\S/.test(l) && fields.length) fields[fields.length - 1][1] += "\n" + l.trim(); // nested bullets (e.g. downstream_references)
    }
    const dd = (/DESIGN_DECISION_RECORD:\s*\n([\s\S]*?)\nFIELDS:/.exec(body) || [])[1] || "";
    const actions = [...body.matchAll(/^- DESIGN_ACTION: (\w+)/gm)].map((x) => x[1]);
    out.push({ id: m[1], status: (/^STATUS: (\S+)/m.exec(body) || [])[1] || "", fields, record: dd.trim(), actions });
  }
  return out;
};

export const cellTone = (row) => {
  const t = row["依據／攻擊／結論"] || "";
  if (/UNAFFECTED/.test(row["狀態"])) return "na";
  if (/NEEDS_AUTHOR|待作者/.test(t)) return "bad";
  if (/VERIFY/.test(t)) return "warn";
  return "ok";
};

export const parseDecisions = (sections) => {
  const s = sections.find((x) => /待作者決定/.test(x.title));
  return s ? parseTable(s.body).filter((r) => r.ID) : [];
};

// ---- view ----
export function render(el, ctx) {
  const { h, state, md, openFile, sendIntent } = ctx;
  const reviews = state.config?.beat_reviews?.length ? state.config.beat_reviews : FALLBACK;
  const s = (state.brReview ||= { rev: reviews[0].id, beat: "", tab: "總覽", cell: 0 });
  const choices = (state._brChoices ||= {});
  const rev = reviews.find((r) => r.id === s.rev) || reviews[0];
  const rerender = () => { el.replaceChildren(); render(el, ctx); };
  const BG = { ok: "var(--green-soft)", warn: "var(--orange-soft)", bad: "var(--red-soft)", na: "var(--panel2)" };
  const LB = { ok: "✅ 冇問題／保留", warn: "⚠️ 要驗證", bad: "❌ 待作者", na: "➖ 唔適用" };

  el.append(h("div", { class: "card" }, "讀緊分析檔…"));
  const key = rev.id + "|" + rev.analysis;
  state._brCache ||= {};
  const ready = state._brCache[key] ? Promise.resolve(state._brCache[key]) : Promise.all([getText(rev.beats), getText(rev.analysis)]).then(([b, a]) => (state._brCache[key] = { beats: parseBeats(b), secs: splitSections(a) }));
  ready.then(({ beats, secs }) => {
    el.replaceChildren();
    if (!s.beat || !beats.find((b) => b.id === s.beat)) s.beat = beats[0]?.id || "";
    const beat = beats.find((b) => b.id === s.beat);
    const grids = secs.filter((x) => /28 行角度表/.test(x.title)).map((x) => ({ id: (/—\s*(\w+)/.exec(x.title) || [])[1], rows: parseTable(x.body) }));
    const grid = grids.find((g) => g.id === s.beat)?.rows || [];
    const decisions = parseDecisions(secs);

    // header
    const head = h("div", { class: "row", style: "display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:10px" },
      h("h3", { style: "margin:0" }, "🔎 Beat 審閱：" + rev.name),
      ...reviews.map((r) => h("button", { class: "pill" + (r.id === rev.id ? " accent" : ""), onclick: () => { s.rev = r.id; s.beat = ""; rerender(); } }, r.name)),
      h("button", { class: "pill info", onclick: () => openFile(rev.analysis) }, "開後台分析檔"),
      h("button", { class: "pill info", onclick: () => openFile(rev.beats) }, "開 beat 檔"),
      h("button", { class: "pill", onclick: () => { delete state._brCache[key]; rerender(); } }, "重新讀"));
    // left: beat list
    const left = h("div", { style: "flex:0 0 190px" }, h("div", { class: "small muted" }, "Beat"),
      ...beats.map((b) => {
        const v = b.actions.filter((a) => a === "VERIFY").length, n = b.actions.filter((a) => a === "NEEDS_AUTHOR_DECISION").length;
        return h("button", { class: "opt", style: "display:block;width:100%;text-align:left;margin:4px 0;" + (b.id === s.beat ? "border-color:var(--accent)" : ""), onclick: () => { s.beat = b.id; s.cell = 0; rerender(); } },
          h("b", {}, b.id), " ", h("span", { class: "pill" }, b.status || "—"), h("div", { class: "small muted" }, `驗證 ${v}　待作者 ${n}`));
      }));
    // centre: tabs
    const tabs = h("div", { style: "display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px" },
      ...TABS.map(([name]) => h("button", { class: "pill" + (name === s.tab ? " accent" : ""), onclick: () => { s.tab = name; rerender(); } }, name)));
    const body = h("div", {});
    if (s.tab === "總覽") {
      body.append(h("div", { class: "card" }, h("h4", {}, "點解有呢個 beat（設計決定紀錄）"), md(beat?.record || "—")));
      const kv = h("div", { class: "kv small" });
      for (const [k, v] of beat?.fields || []) kv.append(h("div", { class: "k" }, k), h("div", {}, v));
      body.append(h("div", { class: "card", style: "margin-top:8px" }, h("h4", {}, "19 欄位"), kv));
    } else if (s.tab === "28 角度") {
      const tone = grid.map(cellTone);
      const count = (t) => tone.filter((x) => x === t).length;
      body.append(h("div", { class: "small muted", style: "margin-bottom:6px" }, grid.length ? `共 ${grid.length} 行：✅ ${count("ok")}　⚠️ ${count("warn")}　❌ ${count("bad")}　➖ ${count("na")}（色塊由後台『結論』欄推出，撳一格睇依據）` : "呢個 beat 冇 28 行表"));
      body.append(h("div", { style: "display:grid;grid-template-columns:repeat(7,1fr);gap:6px" },
        ...grid.map((r, i) => h("button", { title: r["白話"], style: `padding:8px 4px;border-radius:10px;border:2px solid ${i === s.cell ? "var(--accent)" : "var(--line)"};background:${BG[tone[i]]};font-size:12px;text-align:center`, onclick: () => { s.cell = i; rerender(); } }, h("b", {}, r["#"]), h("div", {}, r["白話"])))));
      const c = grid[s.cell];
      if (c) body.append(h("div", { class: "card", style: "margin-top:8px" }, h("h4", {}, `${c["#"]} ${c["白話"]}　`, h("span", { class: "small muted" }, c["角度（Registry 原名）"])), h("div", { class: "small" }, LB[tone[s.cell]]), h("div", { style: "margin-top:6px" }, c["依據／攻擊／結論"] || "")));
    } else {
      const re = TABS.find(([n]) => n === s.tab)[1];
      const hit = secs.filter((x) => re.test(x.title));
      if (!hit.length) body.append(h("div", { class: "card" }, "冇對應章節"));
      for (const x of hit) {
        const d = h("details", { class: "card", style: "margin-bottom:8px" }, h("summary", {}, h("b", {}, x.title)), md(x.body));
        d.open = true;
        body.append(d);
      }
      if (s.tab === "缺口與接駁") {
        const link = secs.find((x) => /接駁表/.test(x.title));
        const rows = link ? parseTable(link.body) : [];
        if (rows.length) body.prepend(h("div", { class: "card", style: "margin-bottom:8px;display:flex;flex-wrap:wrap;gap:6px;align-items:center" },
          ...rows.flatMap((r, i) => [i ? h("span", { class: "muted" }, "→") : null, h("span", { class: "pill " + (/硬切/.test(JSON.stringify(r)) ? "bad" : "ok") }, r["對"] || "")])));
      }
    }
    const centre = h("div", { style: "flex:1;min-width:0" }, tabs, body);

    // right: decisions
    const picked = Object.keys(choices).length;
    const right = h("div", { style: "flex:0 0 270px" }, h("div", { class: "card" }, h("h4", {}, "待你決定"),
      decisions.length ? null : h("div", { class: "small muted" }, "分析檔冇『待作者決定』表"),
      ...decisions.map((d) => h("div", { style: "margin-bottom:10px" },
        h("div", {}, h("b", {}, d["問題"] || ""), d["影響"] ? h("div", { class: "small muted" }, d["影響"]) : null),
        ...(d["選項"] || "").split("／").filter(Boolean).map((o) => h("button", { class: "pill" + (choices[d.ID] === o ? " accent" : ""), style: "margin:2px 4px 2px 0", onclick: () => { choices[d.ID] = o; rerender(); } }, o + (d["建議"] === o ? "（建議）" : ""))))),
      h("button", { class: "pill accent", disabled: picked ? null : true, onclick: () => {
        for (const d of decisions) if (choices[d.ID]) sendIntent({ type: "review.decide", target: rev.id, payload: { decision: d.ID, question: d["問題"], choice: choices[d.ID], file: rev.analysis }, note: `審閱頁決定：${d["問題"]} → ${choices[d.ID]}` });
        for (const k of Object.keys(choices)) delete choices[k];
        rerender();
      } }, picked ? `放入待送出（${picked}）` : "先剔選"),
      h("div", { class: "small muted", style: "margin-top:6px" }, "放入待送出之後，喺右下待送出托盤撳送出，AI 會按該層 gate 處理，唔會直接改 canon。")));

    el.append(head, h("div", { style: "display:flex;gap:12px;align-items:flex-start" }, left, centre, right));
  }).catch((e) => { el.replaceChildren(h("div", { class: "card" }, "讀唔到分析檔：" + e.message)); });
}
