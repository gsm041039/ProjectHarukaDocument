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

export function createDiscussions({ REPO, DIR }) {
  const all = new Map();
  fs.mkdirSync(DIR, { recursive: true });
  for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith(".json"))) {
    try { const d = JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8")); d.clients = new Set(); if (d.state === "running") d.state = "stopped"; all.set(d.id, d); } catch {}
  }
  const save = (d) => { const { clients, waiter, ...rest } = d; fs.writeFileSync(path.join(DIR, d.id + ".json"), JSON.stringify(rest)); };
  const emit = (d, ev) => { ev.t = Date.now(); d.events.push(ev); for (const r of d.clients) r.write(`data: ${JSON.stringify(ev)}\n\n`); save(d); };

  async function ask(d, prompt) {
    let text = "", cost = 0;
    for await (const m of query({ prompt, options: {
      cwd: REPO, settingSources: ["project"], systemPrompt: { type: "preset", preset: "claude_code" },
      allowedTools: ["Read", "Grep", "Glob"], disallowedTools: ["Edit", "Write", "Bash", "NotebookEdit", "Agent", "PowerShell"], permissionMode: "dontAsk", maxTurns: 8, ...(d.model ? { model: d.model } : {}),
    } })) {
      if (m.type === "result") { text = m.result || text; cost = m.total_cost_usd || 0; }
      else if (m.type === "assistant") for (const b of m.message.content) if (b.type === "text") text = b.text;
    }
    d.cost += cost;
    emit(d, { kind: "cost", cost: d.cost });
    return text.trim();
  }

  const transcript = (d) => d.events.filter((e) => e.kind === "turn" || e.kind === "author").map((e) =>
    e.kind === "author" ? `【作者】${e.text}` : `【第${e.round}輪｜${e.role}】${e.text}`).join("\n\n");

  const header = (d) => `你喺一個「AI 編劇室」自動討論入面。呢個係 DRAFT 討論，唔係作者批准，唔可以當 canon。
你只可以讀檔（Read/Grep/Glob），唔可以改任何嘢。設定以 00_Story_Brief.html 為最準，其次 canon/。用廣東話白話，唔用內部編號（QQ-/CDL- 等）同作者以外嘅人講嘢都要講返件事本身。

【題目】${d.topic}
【範圍——只可以喺呢個範圍內討論，唔好跳層】${d.range || "（未限定）"}
【停止點——去到呢度就夠】${d.stop}${d.context ? `\n【背景】${d.context}` : ""}${d.links?.length ? `\n【連住嘅嘢——討論要以佢哋為依據，有需要用 Read/Grep 去搵原文】\n${d.links.map((l) => `- ${l.id}｜${l.title}${l.file ? "（" + l.file + "）" : ""}`).join("\n")}` : ""}${d.skill ? `\n【全場方法】跟 \`${d.skill}\` skill 嘅規則傾（可以 Read .claude/skills/${d.skill}/SKILL.md）。${d.skillChoice ? "今次方向：" + d.skillChoice : ""}` : ""}`;

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
冇候選就 options 留空。唔好當作者已經批准任何嘢。

${transcript(d)}`;

  const parseJSON = (s) => { const m = s.match(/```json\s*([\s\S]*?)```/) || s.match(/(\{[\s\S]*\})/); try { return JSON.parse(m[1]); } catch { return null; } };
  const gate = async (d) => { while (d.state === "paused") await new Promise((r) => (d.waiter = r)); };

  async function run(d) {
    try {
      for (let round = d.round + 1; round <= d.maxRounds; round++) {
        d.round = round;
        emit(d, { kind: "round", round });
        if (round === 1) {
          const outs = await Promise.all(d.roles.map((r) => ask(d, rolePrompt(d, r, 1)).then((text) => [r, text])));
          for (const [r, text] of outs) emit(d, { kind: "turn", round, role: r.name, icon: r.icon, text });
        } else {
          for (const r of d.roles) {
            await gate(d);
            if (d.state === "stopping") break;
            emit(d, { kind: "turn", round, role: r.name, icon: r.icon, text: await ask(d, rolePrompt(d, r, round)) });
          }
        }
        if (d.state === "stopping") { d.stopReason = "作者叫停"; break; }
        const j = parseJSON(await ask(d, judgePrompt(d, round))) || {};
        d.focus = j.next_focus || "";
        emit(d, { kind: "judge", round, ...j });
        if (j.needs_author) {
          d.state = "paused";
          emit(d, { kind: "need_author", question: j.needs_author });
          await gate(d);
        }
        if (d.state === "stopping") { d.stopReason = "作者叫停"; break; }
        if (j.stop_reached) { d.stopReason = "已去到停止點"; break; }
        if ((j.consensus ?? 0) >= 0.85) { d.stopReason = "已達成共識"; break; }
        if (j.repetitive && round >= 2) { d.stopReason = "開始兜圈"; break; }
        if (d.cost >= d.budget) { d.stopReason = `用到預算 US$${d.budget}`; break; }
        if (round === d.maxRounds) d.stopReason = `到咗最多 ${d.maxRounds} 輪`;
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
    list: () => [...all.values()].map(({ id, topic, state, round, maxRounds, cost, created, links }) => ({ id, topic, state, round, maxRounds, cost, created, links: links || [] })).sort((a, b) => b.created - a.created),
    get: (id) => all.get(id),
    start(cfg) {
      const roles = (cfg.roles || []).filter((r) => r && r.name).slice(0, 6).map((r) => ({ name: String(r.name).slice(0, 40), icon: String(r.icon || "🤖").slice(0, 4), brief: String(r.brief || "").slice(0, 600), skill: String(r.skill || "").slice(0, 80) }));
      if (!cfg.topic || roles.length < 2) throw new Error("要有題目同最少兩個角色");
      const d = { id: Date.now().toString(36), created: Date.now(), topic: String(cfg.topic).slice(0, 2000), range: String(cfg.range || "").slice(0, 1000),
        stop: String(cfg.stop || "有 2–3 個成形候選＋推薦").slice(0, 300), context: String(cfg.context || "").slice(0, 800), roles,
        links: (Array.isArray(cfg.links) ? cfg.links : []).slice(0, 20).map((l) => ({ id: String(l.id).slice(0, 200), title: String(l.title || "").slice(0, 200), file: String(l.file || "").slice(0, 300) })),
        skill: String(cfg.skill || "").slice(0, 80), skillChoice: String(cfg.skillChoice || "").slice(0, 600),
        maxRounds: Math.min(Math.max(+cfg.maxRounds || 3, 1), 6), budget: Math.min(Math.max(+cfg.budget || 5, 0.5), 50), model: cfg.model || "",
        round: 0, cost: 0, focus: "", state: "running", stopReason: "", events: [], clients: new Set() };
      all.set(d.id, d);
      emit(d, { kind: "state", state: "running" });
      run(d);
      return d;
    },
    control(d, action, text) {
      if (action === "pause" && d.state === "running") d.state = "paused";
      else if (action === "resume" && d.state === "paused") { d.state = "running"; d.waiter?.(); }
      else if (action === "stop" && ["running", "paused"].includes(d.state)) { d.state = "stopping"; d.waiter?.(); }
      else if (action === "say" && text) { emit(d, { kind: "author", text: String(text).slice(0, 2000) }); if (d.state === "paused") { d.state = "running"; d.waiter?.(); } }
      emit(d, { kind: "state", state: d.state });
    },
  };
}
