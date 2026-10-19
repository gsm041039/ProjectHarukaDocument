// Automated discussion ("AI writers' room"): several role-agents discuss a topic inside a set range until a stop
// condition, refereed by an independent moderator who never argues. Design follows multi-agent-debate practice:
//  - round 1 independent (no anchoring), later rounds see the transcript and respond
//  - moderator scores consensus / stop-reached / repetition after every round; 2–3 rounds is usually the sweet spot
//  - composable stops: stop point reached | consensus | repetition | max rounds | budget | author stop
//  - hand-off to the author when a point needs a decision only the author can make
// Agents are READ-ONLY (Read/Grep/Glob, dontAsk): a discussion can never edit the repo. Output is DRAFT, never canon.
import fs from "node:fs";
import path from "node:path";
import { query } from "@anthropic-ai/claude-agent-sdk";

export function createDiscussions({ REPO, DIR, onRead = () => {} }) {
  const all = new Map();
  fs.mkdirSync(DIR, { recursive: true });
  for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith(".json"))) {
    try { const d = JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8")); d.clients = new Set(); if (d.state === "running" || d.state === "paused") { d.state = "stopped"; d.waitingMore = false; } /* no loop survives a restart; ＋輪 restarts it */ all.set(d.id, d); } catch {}
  }
  const save = (d) => { const { clients, waiter, ...rest } = d; fs.writeFileSync(path.join(DIR, d.id + ".json"), JSON.stringify(rest)); };
  const emit = (d, ev) => { ev.t = Date.now(); d.events.push(ev); for (const r of d.clients) r.write(`data: ${JSON.stringify(ev)}\n\n`); save(d); };

  // returns the reply text; files the agent read go into out.reads (shown per turn, and fed to the file ↔ conversation registry)
  async function ask(d, prompt, out = {}) {
    let text = "", cost = 0;
    const reads = new Set();
    for await (const m of query({ prompt, options: {
      cwd: REPO, settingSources: ["project"], systemPrompt: { type: "preset", preset: "claude_code" },
      allowedTools: ["Read", "Grep", "Glob"], disallowedTools: ["Edit", "Write", "Bash", "NotebookEdit", "Agent", "PowerShell"], permissionMode: "dontAsk", maxTurns: 8,
      persistSession: false, // one-shot turns: saving them buried the author's real chats in "以前嘅 session"
      ...(d.model ? { model: d.model } : {}),
    } })) {
      if (m.type === "result") { text = m.result || text; cost = m.total_cost_usd || 0; }
      else if (m.type === "assistant") for (const b of m.message.content) {
        if (b.type === "text") text = b.text;
        // files it read, and files it searched in (Grep with a file path) — both count as "讀咗" for the author
        else if (b.type === "tool_use" && ((b.name === "Read" && b.input?.file_path) || (b.name === "Grep" && b.input?.path && /\.\w+$/.test(b.input.path)))) {
          const rel = path.relative(REPO, path.resolve(REPO, b.input.file_path || b.input.path)).split(path.sep).join("/");
          if (!rel.startsWith("..")) reads.add(rel);
        }
      }
    }
    d.cost += cost;
    out.reads = [...reads];
    if (reads.size) onRead(d, out.reads);
    emit(d, { kind: "cost", cost: d.cost });
    return text.trim();
  }

  const transcript = (d) => d.events.filter((e) => e.kind === "turn" || e.kind === "author").map((e) =>
    e.kind === "author" ? `【作者】${e.text}` : `【第${e.round}輪｜${e.role}】${e.text}`).join("\n\n");

  const header = (d) => `你喺一個「AI 編劇室」自動討論入面。呢個係 DRAFT 討論，唔係作者批准，唔可以當 canon。
你只可以讀檔（Read/Grep/Glob），唔可以改任何嘢。設定以 00_Story_Brief.html 為最準，其次 canon/。用廣東話白話。
**你寫嘅每一個字都會直接顯示畀作者睇：唔准寫任何內部編號**（例如 QQ-123、CDL-186、TODO:196、P-A14、M5、Stage 6、v4.1），要講返件事本身係咩（例：唔好寫「CDL-186」，寫「熊公仔做 Act III 回收嗰個決定」）。要引證據就寫檔名同大概位置，例如「詞彙表 Emo-Visor 嗰段」。

【題目】${d.topic}
【範圍——只可以喺呢個範圍內討論，唔好跳層】${d.range || "（未限定）"}
【停止點——去到呢度就夠】${d.stop}${d.items?.length ? `
【今次要處理嘅項目（作者揀嘅）】
${d.items.map((x) => `- ${x.id}｜${x.title}`).join("\n")}
【每項可以建議嘅處理】${d.actions.map((a) => a.label).join("／")}／保留` : ""}${d.context ? `\n【背景】${d.context}` : ""}${d.links?.length ? `\n【連住嘅嘢——討論要以佢哋為依據，有需要用 Read/Grep 去搵原文】\n${d.links.map((l) => `- ${l.id}｜${l.title}${l.file ? "（" + l.file + "）" : ""}`).join("\n")}` : ""}${d.skill ? `\n【全場方法】跟 \`${d.skill}\` skill 嘅規則傾（可以 Read .claude/skills/${d.skill}/SKILL.md）。${d.skillChoice ? "今次方向：" + d.skillChoice : ""}` : ""}`;

  const rolePrompt = (d, role, round) => `${header(d)}

你嘅角色：${role.icon} ${role.name}——${role.brief}${role.skill ? `\n（你代表 \`${role.skill}\` skill：先 Read .claude/skills/${role.skill}/SKILL.md，用佢嘅方法同檢查清單睇呢個題目。）` : ""}
${round === 1
    ? "第 1 輪：獨立諗，未睇其他人講咩。有需要可以讀相關文件做 source check。講你最重要嘅觀點／候選，每點講埋點解同代價。"
    : `第 ${round} 輪。下面係到目前為止嘅討論。回應其他角色：同意邊樣、反對邊樣（要有理由），補充冇人講過嘅重點，唔好重複自己。${d.focus ? `主持人提示今輪焦點：${d.focus}` : ""}\n\n${transcript(d)}`}

限 250 字內。唔好寫開場白或客套。`;

  const judgePrompt = (d, round) => `${header(d)}

你係獨立主持人，唔參與討論、唔加自己意見。睇晒第 ${round} 輪為止嘅討論，判斷：
- consensus：0–1，各角色立場有幾接近
- stop_reached：係咪已經去到「停止點」
- repetitive：最近一輪係咪大致重複／兜圈
- needs_author：有冇一點非作者拍板唔可以繼續（例如要新設定事實、或者涉及作者偏好）；有就寫一條白話問題，冇就 null
- open_points：仲未解決嘅重點（最多 4 條，每條 ≤20 字）
- next_focus：下一輪應該集中傾咩（一句）
只輸出一個 JSON（放喺 \`\`\`json 入面）：{"consensus":0.0,"stop_reached":false,"repetitive":false,"needs_author":null,"open_points":[],"next_focus":""}

${transcript(d)}`;

  const synthPrompt = (d) => `${header(d)}

你係獨立主持人。討論已經停（原因：${d.stopReason}）。為作者寫總結，只輸出一個 JSON（放喺 \`\`\`json 入面）：
{"summary":"3 句內講清傾咗咩、去到邊","consensus":["大家同意嘅點"],"options":[{"name":"候選自然名","what_happens":"會發生咩","why":"點解","cost":"代價","given_up":"放棄咗咩"}],"recommended":"建議嘅候選名","open_questions":["仲要作者決定嘅嘢（白話）"],"risks":["要留意嘅 canon／結構風險"]}
冇候選就 options 留空。唔好當作者已經批准任何嘢。${d.items?.length ? `
另外喺同一個 JSON 加 "item_actions":[{"id":"項目 id","type":"${d.actions.map((a) => a.type).join('" 或 "')}" 或 "keep","reason":"一句白話理由"}]，每個項目一條；唔肯定就 keep。` : ""}

${transcript(d)}`;

  const parseJSON = (s) => { const m = s.match(/```json\s*([\s\S]*?)```/) || s.match(/(\{[\s\S]*\})/); try { return JSON.parse(m[1]); } catch { return null; } };
  const gate = async (d) => { while (d.state === "paused") await new Promise((r) => (d.waiter = r)); d.asking = ""; };

  async function run(d) {
    try {
      for (let round = d.round + 1; round <= d.maxRounds; round++) {
        d.round = round;
        emit(d, { kind: "round", round });
        if (round === 1) {
          const outs = await Promise.all(d.roles.map((r) => { const o = {}; return ask(d, rolePrompt(d, r, 1), o).then((text) => [r, text, o.reads]); }));
          for (const [r, text, reads] of outs) emit(d, { kind: "turn", round, role: r.name, icon: r.icon, text, reads });
        } else {
          for (const r of d.roles) {
            await gate(d);
            if (d.state === "stopping") break;
            const o = {};
            const text = await ask(d, rolePrompt(d, r, round), o);
            emit(d, { kind: "turn", round, role: r.name, icon: r.icon, text, reads: o.reads });
          }
        }
        if (d.state === "stopping") { d.stopReason = "作者叫停"; break; }
        const j = parseJSON(await ask(d, judgePrompt(d, round))) || {};
        d.focus = j.next_focus || "";
        emit(d, { kind: "judge", round, ...j });
        if (j.needs_author) {
          d.state = "paused";
          d.asking = String(j.needs_author).slice(0, 300); // the sidebar shows "等你" while this is set
          emit(d, { kind: "state", state: d.state }); // tell the page it is paused (it used to keep saying 傾緊)
          emit(d, { kind: "need_author", question: j.needs_author });
          await gate(d);
        }
        if (d.state === "stopping") { d.stopReason = "作者叫停"; break; }
        if (j.stop_reached) { d.stopReason = "已去到停止點"; break; }
        if ((j.consensus ?? 0) >= 0.85) { d.stopReason = "已達成共識"; break; }
        if (j.repetitive && round >= 2) { d.stopReason = "開始兜圈"; break; }
        if (round === d.maxRounds) {
          // not finished but out of rounds: don't force a summary — pause and let the author add rounds or summarise
          d.state = "paused"; d.waitingMore = true; d.asking = `傾咗 ${round} 輪未去到停止點，＋輪定總結？`;
          emit(d, { kind: "state", state: d.state });
          emit(d, { kind: "need_rounds", round, open: j.open_points || [] });
          await gate(d);
          d.waitingMore = false;
          if (d.state === "stopping") { d.stopReason = `用晒 ${round} 輪，作者叫總結`; break; }
          if (d.maxRounds <= round) d.stopReason = `到咗最多 ${d.maxRounds} 輪`;
        }
      }
      d.state = "summarizing";
      emit(d, { kind: "state", state: d.state });
      const s = parseJSON(await ask(d, synthPrompt(d)));
      emit(d, { kind: "synthesis", reason: d.stopReason, ...(s || { summary: "（總結 JSON 解析唔到，請睇上面討論）" }) });
      d.state = "done";
    } catch (e) {
      emit(d, { kind: "error", message: String(e?.message || e) });
      d.state = "stopped";
    }
    emit(d, { kind: "state", state: d.state });
  }

  return {
    list: () => [...all.values()].map(({ id, topic, state, round, maxRounds, cost, created, links, asking, items }) => ({ id, topic, state, round, maxRounds, cost, created, links: links || [], asking: asking || "", items: (items || []).length })).sort((a, b) => b.created - a.created),
    get: (id) => all.get(id),
    start(cfg) {
      const roles = (cfg.roles || []).filter((r) => r && r.name).slice(0, 6).map((r) => ({ name: String(r.name).slice(0, 40), icon: String(r.icon || "🤖").slice(0, 4), brief: String(r.brief || "").slice(0, 600), skill: String(r.skill || "").slice(0, 80) }));
      if (!cfg.topic || roles.length < 2) throw new Error("要有題目同最少兩個角色");
      const d = { id: Date.now().toString(36), created: Date.now(), topic: String(cfg.topic).slice(0, 2000), range: String(cfg.range || "").slice(0, 1000),
        stop: String(cfg.stop || "有 2–3 個成形候選＋推薦").slice(0, 300), context: String(cfg.context || "").slice(0, 800), roles,
        links: (Array.isArray(cfg.links) ? cfg.links : []).slice(0, 20).map((l) => ({ id: String(l.id).slice(0, 200), title: String(l.title || "").slice(0, 200), file: String(l.file || "").slice(0, 300) })),
        skill: String(cfg.skill || "").slice(0, 80), skillChoice: String(cfg.skillChoice || "").slice(0, 600), from: String(cfg.from || "").slice(0, 40),
        maxRounds: Math.max(+cfg.maxRounds || 3, 1), model: cfg.model || "",
        items: (Array.isArray(cfg.items) ? cfg.items : []).slice(0, 40).map((x) => ({ id: String(x.id).slice(0, 200), title: String(x.title || "").slice(0, 300), payload: x.payload && typeof x.payload === "object" ? x.payload : {} })),
        actions: (Array.isArray(cfg.actions) ? cfg.actions : []).slice(0, 6).map((a) => ({ type: String(a.type).slice(0, 60), label: String(a.label || a.type).slice(0, 30) })),
        round: 0, cost: 0, focus: "", state: "running", stopReason: "", events: [], clients: new Set() };
      all.set(d.id, d);
      emit(d, { kind: "state", state: "running" });
      run(d);
      return d;
    },
    control(d, action, text, body = {}) {
      if (action === "pause" && d.state === "running") d.state = "paused";
      else if (action === "resume" && d.state === "paused") { d.state = "running"; d.waiter?.(); }
      else if (action === "stop" && ["running", "paused"].includes(d.state)) { d.state = "stopping"; d.waiter?.(); }
      // change the cast / length mid-way: takes effect from the next turn
      else if (action === "roles" && Array.isArray(body.roles) && body.roles.length >= 2) {
        d.roles = body.roles.slice(0, 6).map((r) => ({ name: String(r.name).slice(0, 40), icon: String(r.icon || "🤖").slice(0, 4), brief: String(r.brief || "").slice(0, 600), skill: String(r.skill || "").slice(0, 80) }));
        emit(d, { kind: "author", text: `（改咗角色：${d.roles.map((r) => r.name).join("、")}，下一個發言開始生效）` });
      } else if (action === "rounds") {
        d.maxRounds = Math.max(+body.rounds || d.maxRounds, d.round || 1);
        emit(d, { kind: "author", text: `（最多輪數改做 ${d.maxRounds}）` });
        if (d.state === "paused" && d.waitingMore && d.maxRounds > d.round) { d.state = "running"; d.waiter?.(); }
        else if (["done", "stopped"].includes(d.state) && d.maxRounds > d.round) { // a finished discussion can carry on, then summarise again
          d.state = "running"; d.stopReason = ""; emit(d, { kind: "author", text: "（作者叫佢繼續傾）" }); run(d);
        }
      }
      else if (action === "say" && text) { emit(d, { kind: "author", text: String(text).slice(0, 2000) }); if (d.state === "paused") { d.state = "running"; d.waiter?.(); } }
      emit(d, { kind: "state", state: d.state });
    },
  };
}
