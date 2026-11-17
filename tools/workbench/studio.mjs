// Storyboard Studio backend. Works live in canon/_working/storyboard/<id>/{work.json,events.jsonl} (WORKING, never canon).
// AI proposals are DRAFT candidates; board = what the author adopted; events.jsonl = append-only decision trail.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const POSES = ["stand", "walk", "run", "crouch", "sit", "reach", "point", "guard", "fall", "lie", "kneel"];
const num01 = (v, d) => (Number.isFinite(+v) ? Math.min(1, Math.max(0, +v)) : d);
const normChar = (x = {}) => ({ name: String(x.name || "?"), x: num01(x.x, 0.5), y: num01(x.y, 0.6), facing: x.facing === "left" ? "left" : "right",
  pose: POSES.includes(x.pose) ? x.pose : "stand", ...(Number.isFinite(+x.turn) && x.turn !== null && x.turn !== "" ? { turn: +x.turn } : {}) });
const TURN_RULE = "人物 turn：（0＝望鏡頭、90＝望畫面右、-90＝望畫面左、180＝背向鏡頭；兩人對峙通常一個 90 一個 -90，望住對方嘅位置）；改站位或者朝向時要同時更新 turn。";
const PROPS = ["wall", "door", "window", "desk", "chair", "bench", "bed", "building", "car", "tree", "pole", "stairs", "railing", "crate", "screen", "rubble"];
const ENVS = ["day", "sunset", "night", "interior"];
// scene set shared by every cut: environment + props in the same 0..1 stage space as the characters
const normSet = (st = {}) => ({ env: ENVS.includes(st.env) ? st.env : "day",
  props: (Array.isArray(st.props) ? st.props : []).filter((x) => PROPS.includes(x?.type)).slice(0, 40).map((x) => ({ type: x.type, x: num01(x.x, 0.5), y: num01(x.y, 0.2),
    turn: Number.isFinite(+x.turn) ? +x.turn : 0, scale: Math.min(4, Math.max(0.3, Number.isFinite(+x.scale) && +x.scale ? +x.scale : 1)), ...(x.label ? { label: String(x.label).slice(0, 20) } : {}) })) });
const SET_RULE = `場景 set（全場共用，同人物同一個座標：x 左右 0–1、y 遠近 0–1）："set":{"env":"${ENVS.join("|")}","props":[{"type":"${PROPS.join("|")}","x":0到1,"y":0到1,"turn":度數（wall／railing 0＝橫向對住鏡頭、90＝打直）,"scale":0.3到4,"label":"可選短名"}]}。用場景道具交代空間（牆、門、窗、街、建築、天台欄杆、直播大屏），唔肯定嘅設定就簡單擺，唔好發明細節。`;
const SKILL = "story-anime-storyboard-director";
const CUT_FIELDS = ["shot_size", "angle", "camera_move", "duration", "action", "reveals", "continuity", "why"];

export function createStudio({ REPO, runPrompt }) {
  const ROOT = path.join(REPO, "canon/_working/storyboard");
  const wdir = (id) => path.join(ROOT, id);
  const wfile = (id) => path.join(wdir(id), "work.json");
  const valid = (id) => /^[\w-]{3,60}$/.test(id) && fs.existsSync(wfile(id));
  const load = (id) => JSON.parse(fs.readFileSync(wfile(id), "utf8"));
  const save = (w) => fs.writeFileSync(wfile(w.id), JSON.stringify(w, null, 1));
  const log = (id, ev) => fs.appendFileSync(path.join(wdir(id), "events.jsonl"), JSON.stringify({ t: new Date().toISOString(), ...ev }) + "\n");

  const skillInfo = () => {
    const p = path.join(REPO, ".claude/skills", SKILL, "SKILL.md");
    try { const text = fs.readFileSync(p, "utf8"); return { name: SKILL, hash: crypto.createHash("sha1").update(text).digest("hex").slice(0, 8), text: text.replace(/^---[\s\S]*?---/, "").trim() }; }
    catch { return { name: SKILL, hash: "missing", text: "" }; }
  };

  const extractJson = (text) => {
    const a = text.indexOf("{"), b = text.lastIndexOf("}");
    if (a < 0 || b < a) throw new Error("AI 冇交出 JSON：" + text.slice(0, 200));
    return JSON.parse(text.slice(a, b + 1));
  };
  const normCut = (c, i) => ({
    id: "c" + crypto.randomBytes(3).toString("hex"), n: i + 1,
    shot_size: c.shot_size || "", angle: c.angle || "", camera_move: c.camera_move || "static",
    duration: Math.max(0.5, Number(c.duration) || 2), action: c.action || "", reveals: c.reveals || "", continuity: c.continuity || "", why: c.why || "",
    layout: { chars: (c.characters || c.layout?.chars || []).map(normChar), frame: c.layout?.frame || null },
    image: c.image || null,
  });
  const normProposal = (p, i, meta) => ({
    id: "p" + crypto.randomBytes(3).toString("hex"), name: p.name || `方案${i + 1}`, intent: p.intent || "", rationale: p.rationale || "",
    pros: p.pros || "", cons: p.cons || "", sacrifices: p.sacrifices || "", status: "open", meta, set: p.set ? normSet(p.set) : null,
    cuts: (p.cuts || []).map(normCut),
  });

  const mockProposals = (src) => {
    const line = src.split(/[。\n]/)[0].slice(0, 40);
    const cut = (o) => ({ camera_move: "static", duration: 2, characters: [{ name: "主角", x: 0.5, y: 0.65 }], ...o });
    return [
      { name: "清楚交代（MOCK）", intent: "先交代空間，再落角色反應", rationale: `MOCK 假資料：「${line}」`, pros: "資訊清楚", cons: "神秘感低", sacrifices: "主觀感",
        cuts: [cut({ shot_size: "遠景", angle: "平視", action: "全景見空間", why: "建立空間" }), cut({ shot_size: "中景", angle: "平視", action: "角色動作", why: "交代行為" })] },
      { name: "主觀心理（MOCK）", intent: "先睇反應，空間後揭", rationale: "MOCK 假資料", pros: "代入", cons: "空間資訊延遲", sacrifices: "即時交代",
        cuts: [cut({ shot_size: "特寫", angle: "平視", action: "手部／反應", why: "主觀" }), cut({ shot_size: "遠景", angle: "略高", action: "揭露空間", why: "延遲揭露", duration: 3 })] },
      { name: "安靜留白（MOCK）", intent: "固定長鏡靠時間", rationale: "MOCK 假資料", pros: "餘韻", cons: "Timing 要準", sacrifices: "資訊密度",
        cuts: [cut({ shot_size: "遠景", angle: "平視", action: "角色入畫後停低", duration: 5, why: "hold" })] },
    ];
  };

  async function propose(w, { direction = "", mock = false, provider, model }) {
    const sk = skillInfo();
    const meta = { mock, provider: mock ? "mock" : provider, skill: { name: sk.name, hash: sk.hash }, at: new Date().toISOString(), direction };
    if (mock) return mockProposals(w.source.text).map((p, i) => normProposal(p, i, meta));
    const adopted = w.board.cuts.length ? `\n【作者已採納嘅 cut（唔可以靜靜覆蓋，只可提議）】\n${JSON.stringify(w.board.cuts.map(({ n, shot_size, angle, action }) => ({ n, shot_size, angle, action })))}` : "";
    const prompt = `你係 Haruka Storyboard Studio 嘅 AI 導演。以下係你嘅工作方法（skill ${sk.name}@${sk.hash}）：
${sk.text}

提方案前，先用 Grep/Read 核對劇情涉及嘅角色檔（canon/03_characters/）同場景設定，唔肯定嘅標 unverified。你可以用 Read/Grep/Glob 讀 repo（設定以 00_Story_Brief.html、canon/ 為準），唔可以改任何檔。輸出係 DRAFT 候選。
【劇情片段】${w.source.ref ? `（來源：${w.source.ref}）` : ""}
${w.source.text}
${adopted}
【作者方向】${direction || "（冇特別指定，自由提出真正唔同嘅導演思路）"}

提出 2–4 套導演思路真正唔同嘅方案。**只輸出一個 JSON object，冇其他字**：
{"proposals":[{"name":"方案白話名","intent":"想觀眾感到／知道咩","rationale":"點解咁拍（引用劇情／設定）","pros":"","cons":"","sacrifices":"犧牲咗咩",
"cuts":[{"shot_size":"遠景|全身|中景|近景|特寫|...","angle":"","camera_move":"static|pan|T.U.|T.B.|push|...","duration":秒數,"action":"畫面發生咩","reveals":"觀眾呢格新知道咩","continuity":"screen direction／eyeline／位置／道具／誰知咩","why":"點解呢格要用呢種形式",
"characters":[{"name":"","x":0到1（畫面左右）,"y":0到1（0＝遠、1＝近鏡頭）,"facing":"left|right","pose":"stand|walk|run|crouch|sit|reach|point|guard|fall|lie|kneel","turn":可選，-180到180 度（0＝面向鏡頭）}]}]}]}
鏡頭會用 3D 木偶即時渲染：shot_size 請用「大遠景/遠景/全景/全身/中景/近景/特寫/大特寫」之一；angle 寫明「平視/低角/仰角/高角/俯視/鳥瞰」＋可選「側面/背面/斜側/傾斜(Dutch)」；每格一定要列齊畫面入面嘅人物同佢哋位置姿勢；turn 一定要按劇情填（0＝望鏡頭、90＝望畫面右、-90＝望畫面左、180＝背向鏡頭；兩人對峙通常一個 90 一個 -90，望住對方嘅位置），同一場戲前後格嘅站位要合理延續（screen direction）。
每個字串欄用廣東話白話；唔准內部編號。
每個 proposal 加一欄 ${SET_RULE}${w.set?.props?.length ? `\n現有場景（盡量沿用，要改先改）：${JSON.stringify(w.set)}` : ""}`;
    const reads = [];
    const r = await runPrompt({
      provider, prompt, cwd: REPO, model,
      claudeOptions: { settingSources: ["project"], systemPrompt: { type: "preset", preset: "claude_code" }, allowedTools: ["Read", "Grep", "Glob"],
        disallowedTools: ["Edit", "Write", "Bash", "NotebookEdit", "Agent", "PowerShell"], permissionMode: "dontAsk", maxTurns: 10, persistSession: false },
      onEvent: (e) => { if (e.kind === "tool" && e.name === "Read" && e.input?.file_path) reads.push(path.relative(REPO, e.input.file_path).split(path.sep).join("/")); },
    });
    meta.reads = [...new Set(reads)]; meta.cost = r.cost || 0;
    const j = extractJson(r.text || "");
    if (!Array.isArray(j.proposals) || !j.proposals.length) throw new Error("AI 冇交出方案");
    return j.proposals.map((p, i) => normProposal(p, i, meta));
  }

  async function revise(w, cutId, instruction, { provider, model }) {
    const cut = w.board.cuts.find((c) => c.id === cutId);
    if (!cut) throw new Error("no such cut");
    const sk = skillInfo();
    const prompt = `${sk.text}\n\n作者想修改呢一格分鏡：「${instruction}」\n劇情：${w.source.text}\n現有 cut：${JSON.stringify(Object.fromEntries(CUT_FIELDS.map((k) => [k, cut[k]])))}，人物：${JSON.stringify(cut.layout.chars)}\n只輸出 JSON：{"patch":{只列要改嘅欄位 ${CUT_FIELDS.join("/")}},"chars":[完整人物位置 {name,x,y,facing}（唔改就省略）],"note":"一句講改咗咩、影響前後格咩"}`;
    const r = await runPrompt({ provider, prompt, cwd: REPO, model, claudeOptions: { settingSources: ["project"], allowedTools: ["Read", "Grep", "Glob"], permissionMode: "dontAsk", maxTurns: 4, persistSession: false } });
    return extractJson(r.text || "");
  }

  const applyPatch = (c, patch = {}, chars) => {
    for (const k of CUT_FIELDS) if (k in patch) c[k] = k === "duration" ? Math.max(0.5, +patch[k] || c[k]) : String(patch[k]);
    if (Array.isArray(chars)) c.layout.chars = chars.map((x) => normChar(x));
  };
  async function suggest(w, ids, instruction, { mock, provider, model }) {
    const sk = skillInfo(), cuts = w.board.cuts, sel = cuts.filter((c) => ids.includes(c.id));
    const cand = { id: "k" + crypto.randomBytes(3).toString("hex"), at: new Date().toISOString(), cuts: ids, instruction, status: "open", mock, provider: mock ? "mock" : provider, skill: { name: sk.name, hash: sk.hash }, variants: [] };
    if (mock) { // MOCK: mechanical variants, only for testing the UI
      cand.variants = [{ label: "低角度（MOCK）", note: "MOCK：只改角度", edits: sel.map((c) => ({ cutId: c.id, patch: { angle: "低角" } })) }, { label: "拉長 hold（MOCK）", note: "MOCK：秒數加 2", edits: sel.map((c) => ({ cutId: c.id, patch: { duration: c.duration + 2 } })) }];
      return cand;
    }
    const ctx = cuts.map((c) => ({ id: c.id, n: c.n, ...pick(c), selected: ids.includes(c.id) }));
    const prompt = `${sk.text}

劇情：${w.source.text}
整條分鏡板（selected=true 係作者而家揀咗嘅）：${JSON.stringify(ctx)}
作者要求：「${instruction || "提出改善建議"}」
為選中嘅格（無選中就整場）提出 2–3 個真正唔同嘅修改候選，必須保持前後格連貫（screen direction／eyeline／知情），並講代價。${TURN_RULE}\n現有場景：${JSON.stringify(w.set || {})}；要改場景就喺 variant 加 "set"（完整新 set，格式：${SET_RULE}）。只輸出 JSON：{"variants":[{"label":"白話名","note":"改咗咩、對前後格影響、代價","edits":[{"cutId":"要改嘅 cut id","patch":{只列要改嘅欄位 ${CUT_FIELDS.join("/")}},"chars":[完整人物 {name,x,y,facing,pose,turn}，唔改就省略]}]}]}`;
    const r = await runPrompt({ provider, prompt, cwd: REPO, model, claudeOptions: { settingSources: ["project"], allowedTools: ["Read", "Grep", "Glob"], permissionMode: "dontAsk", maxTurns: 6, persistSession: false } });
    const j = extractJson(r.text || ""); cand.cost = r.cost || 0;
    cand.variants = (j.variants || []).map((v) => ({ label: v.label || "候選", note: v.note || "", edits: (v.edits || []).filter((x) => cuts.some((c) => c.id === x.cutId)), ...(v.set ? { set: normSet(v.set) } : {}) })).filter((v) => v.edits.length || v.set);
    if (!cand.variants.length) throw new Error("AI 冇交出可用修改");
    return cand;
  }
  function applyVariant(w, cand, vi, reason) {
    const v = cand.variants[vi], edits = [];
    for (const e of v.edits) { const c = w.board.cuts.find((x) => x.id === e.cutId); if (!c) continue; const before = pick(c); applyPatch(c, e.patch, e.chars); edits.push({ cut: c.id, n: c.n, before, after: pick(c) }); }
    if (v.set) { edits.push({ set: true, before: w.set || null, after: v.set }); w.set = v.set; }
    cand.status = "adopted"; cand.chosen = vi; snapshot(w, `修改：${v.label}`);
    log(w.id, { type: "decision.apply", candidate: cand.id, variant: v.label, instruction: cand.instruction, note: v.note, edits, reason, skill: cand.skill, mock: cand.mock });
  }
  const snapshot = (w, note) => { w.board.version++; w.versions.push({ v: w.board.version, at: new Date().toISOString(), note, cuts: JSON.parse(JSON.stringify(w.board.cuts)), set: w.set ? JSON.parse(JSON.stringify(w.set)) : null }); };
  const renum = (w) => w.board.cuts.forEach((c, i) => (c.n = i + 1));
  const clone = (c, p) => ({ ...JSON.parse(JSON.stringify(c)), id: "c" + crypto.randomBytes(3).toString("hex"), origin: p ? { proposal: p.id, name: p.name, skill: p.meta.skill, mock: !!p.meta.mock } : c.origin });

  // returns true when the request was ours
  return async function handle(req, res, url, parts, { json, readBody, provider, model }) {
    if (parts[1] !== "studio") return false;
    const [, , kind, id, action] = parts;
    if (kind === "skill") { json(res, 200, { ...skillInfo(), text: undefined }); return true; }
    if (kind !== "works") { json(res, 404, { error: "unknown studio api" }); return true; }
    fs.mkdirSync(ROOT, { recursive: true });

    if (!id) {
      if (req.method === "GET") {
        const list = fs.readdirSync(ROOT).filter(valid).map((i) => { const w = load(i); return { id: i, title: w.title, ref: w.source.ref, created: w.created, cuts: w.board.cuts.length, proposals: w.proposals.length, version: w.board.version }; });
        json(res, 200, list.sort((a, b) => b.created.localeCompare(a.created))); return true;
      }
      const b = await readBody(req);
      const text = String(b.text || "").trim();
      if (!text) { json(res, 400, { error: "冇劇情文字" }); return true; }
      const wid = "sb-" + new Date().toISOString().slice(0, 10) + "-" + crypto.randomBytes(2).toString("hex");
      fs.mkdirSync(wdir(wid), { recursive: true });
      const w = { id: wid, title: String(b.title || text.slice(0, 20)), created: new Date().toISOString(), source: { text, ref: String(b.ref || "") }, proposals: [], board: { cuts: [], from: [], version: 0 }, versions: [] };
      save(w); log(wid, { type: "work.create", ref: w.source.ref }); json(res, 200, w); return true;
    }
    if (!valid(id)) { json(res, 404, { error: "no such work" }); return true; }
    const w = load(id);
    if (!action) { json(res, 200, w); return true; }
    if (action === "events") {
      const f = path.join(wdir(id), "events.jsonl");
      json(res, 200, fs.existsSync(f) ? fs.readFileSync(f, "utf8").trim().split("\n").map((l) => JSON.parse(l)) : []); return true;
    }
    if (req.method !== "POST") { json(res, 405, { error: "POST" }); return true; }
    const b = await readBody(req);
    const reason = String(b.reason || "");
    const prop = () => w.proposals.find((p) => p.id === b.proposalId);

    if (action === "propose") {
      const ps = await propose(w, { direction: String(b.direction || ""), mock: !!b.mock, provider, model });
      w.proposals.push(...ps);
      log(id, { type: "proposals.add", ids: ps.map((p) => p.id), meta: ps[0].meta });
      if (b.auto && !w.board.cuts.length) { // first generation: put the AI's first (recommended) proposal on the board; others stay as alternatives
        const p = ps[0]; w.board.cuts = p.cuts.map((c) => clone(c, p)); if (p.set) w.set = p.set; w.board.from = [p.id]; p.status = "adopted"; renum(w); snapshot(w, `AI 生成：${p.name}`);
        log(id, { type: "decision.adopt", proposal: p.id, name: p.name, reason: "AI 自動生成（作者可改／換方案）", by: "ai", skill: p.meta.skill });
      }
      save(w); json(res, 200, w); return true;
    }
    if (action === "adopt" || action === "reject") {
      const p = prop(); if (!p) { json(res, 404, { error: "no proposal" }); return true; }
      if (action === "adopt") {
        const before = w.board.cuts.length;
        w.proposals.forEach((x) => { if (x.status === "adopted") x.status = "open"; }); w.board.cuts = p.cuts.map((c) => clone(c, p)); if (p.set) w.set = p.set; w.board.from = [p.id]; p.status = "adopted"; renum(w); snapshot(w, `採納「${p.name}」`);
        log(id, { type: "decision.adopt", proposal: p.id, name: p.name, reason, replaced_cuts: before, skill: p.meta.skill });
      } else { p.status = "rejected"; log(id, { type: "decision.reject", proposal: p.id, name: p.name, reason }); }
      save(w); json(res, 200, w); return true;
    }
    if (action === "pick") { // mix: b.picks=[{proposalId,cutId}] appended to the board in order
      const add = (b.picks || []).map((k) => { const p = w.proposals.find((x) => x.id === k.proposalId), c = p?.cuts.find((x) => x.id === k.cutId); return c && clone(c, p); }).filter(Boolean);
      if (!add.length) { json(res, 400, { error: "冇揀 cut" }); return true; }
      w.board.cuts.push(...add); renum(w); snapshot(w, "混合揀 cut");
      log(id, { type: "decision.mix", picks: b.picks, reason }); save(w); json(res, 200, w); return true;
    }
    const cut = () => w.board.cuts.find((c) => c.id === b.cutId);
    if (action === "cut") {
      const c = cut(); if (!c) { json(res, 404, { error: "no cut" }); return true; }
      const before = JSON.parse(JSON.stringify(c)), p = b.patch || {};
      for (const k of CUT_FIELDS) if (k in p) c[k] = k === "duration" ? Math.max(0.5, +p[k] || c[k]) : String(p[k]);
      if (p.chars) c.layout.chars = p.chars.map((x) => normChar(x));
      log(id, { type: "cut.edit", cut: c.id, n: c.n, by: b.by || "author", before: { ...pick(before) }, after: { ...pick(c) }, reason }); save(w); json(res, 200, w); return true;
    }
    if (action === "reorder") {
      const m = new Map(w.board.cuts.map((c) => [c.id, c])); const order = (b.ids || []).filter((i) => m.has(i));
      if (order.length !== m.size) { json(res, 400, { error: "ids 唔齊" }); return true; }
      w.board.cuts = order.map((i) => m.get(i)); renum(w); log(id, { type: "cut.reorder", ids: order }); save(w); json(res, 200, w); return true;
    }
    if (action === "remove") { const ids = b.cutIds || [b.cutId]; w.board.cuts = w.board.cuts.filter((c) => !ids.includes(c.id)); renum(w); log(id, { type: "cut.remove", cuts: ids, reason }); save(w); json(res, 200, w); return true; }
    if (action === "add") {
      const c = normCut({ shot_size: "中景", angle: "平視", action: String(b.action || "（新 cut）"), duration: 2 }, 0); c.origin = { name: "手動新增" };
      const i = w.board.cuts.findIndex((x) => x.id === b.afterId); w.board.cuts.splice(i < 0 ? w.board.cuts.length : i + 1, 0, c); renum(w);
      log(id, { type: "cut.add", cut: c.id }); save(w); json(res, 200, w); return true;
    }
    if (action === "suggest") { // AI (or mock) proposes alternative edits for the selected cut(s); stored as a candidate, NOT applied
      const ids = (b.cutIds || []).filter((i) => w.board.cuts.some((c) => c.id === i));
      const cand = await suggest(w, ids, String(b.instruction || ""), { mock: !!b.mock, provider, model });
      w.candidates = (w.candidates || []).concat(cand);
      if (b.apply) applyVariant(w, cand, 0, "AI 直接修改（作者指示）"); save(w); log(id, { type: "candidate.add", cuts: ids, instruction: b.instruction, id: cand.id, mock: !!b.mock, skill: cand.skill }); json(res, 200, { work: w, candidate: cand }); return true;
    }
    if (action === "apply") { // adopt one variant: apply edits, save a version, log the decision
      const cand = (w.candidates || []).find((x) => x.id === b.candidateId), v = cand?.variants[+b.variant];
      if (!v) { json(res, 404, { error: "no variant" }); return true; }
      applyVariant(w, cand, +b.variant, reason); save(w); json(res, 200, w); return true;
    }
    if (action === "dismiss") { const cand = (w.candidates || []).find((x) => x.id === b.candidateId); if (cand) { cand.status = "dismissed"; log(id, { type: "candidate.dismiss", id: cand.id, reason }); save(w); } json(res, 200, w); return true; }
    if (action === "set") { const before = w.set || null; w.set = normSet(b.set); log(id, { type: "set.edit", before, after: w.set, reason }); save(w); json(res, 200, w); return true; }
    if (action === "snapshot") { snapshot(w, String(b.note || "手動存檔")); log(id, { type: "version.save", v: w.board.version, note: b.note }); save(w); json(res, 200, w); return true; }
    if (action === "restore") {
      const v = w.versions.find((x) => x.v === +b.v); if (!v) { json(res, 404, { error: "no version" }); return true; }
      w.board.cuts = JSON.parse(JSON.stringify(v.cuts)); if (v.set) w.set = JSON.parse(JSON.stringify(v.set)); snapshot(w, `回復到版本 ${v.v}`); log(id, { type: "version.restore", from: v.v }); save(w); json(res, 200, w); return true;
    }
    if (action === "revise") { // natural-language edit: AI returns a patch, applied + logged as ai edit (author can undo via restore)
      const c = cut(); if (!c) { json(res, 404, { error: "no cut" }); return true; }
      const r = await revise(w, c.id, String(b.instruction || ""), { provider, model });
      const before = JSON.parse(JSON.stringify(c));
      for (const k of CUT_FIELDS) if (r.patch && k in r.patch) c[k] = k === "duration" ? Math.max(0.5, +r.patch[k] || c[k]) : String(r.patch[k]);
      if (Array.isArray(r.chars)) c.layout.chars = r.chars.map((x) => normChar(x));
      log(id, { type: "cut.edit", cut: c.id, n: c.n, by: "ai", instruction: b.instruction, note: r.note, before: pick(before), after: pick(c), skill: { name: SKILL, hash: skillInfo().hash } });
      save(w); json(res, 200, { work: w, note: r.note || "" }); return true;
    }
    json(res, 404, { error: "unknown action" }); return true;
  };

  function pick(c) { return { ...Object.fromEntries(CUT_FIELDS.map((k) => [k, c[k]])), chars: c.layout.chars }; }
}
