# story-orchestrator — Master Auto Skill Caller

## Purpose
`story-orchestrator` is the single entry point for Project Haruka story work. The user should not need to choose ten specialist skills manually. This skill routes, calls, sequences, and summarizes the appropriate specialist skills while preserving creative momentum.

## Core Correction in v1.3
The orchestrator must not become passive or autistic. It must not only answer the exact narrow question when the user is clearly co-designing. It should proactively develop the idea, but every new assumption must be labeled and grounded.

**Creative Momentum Rule:**
- Do not suppress creative proposals just because some canon is uncertain.
- First recover sources when a named canon item is mentioned.
- Then propose the strongest existing-canon-compatible direction.
- Mark new assumptions clearly instead of refusing to think.
- Offer the minimum viable canon expansion when useful.

**Internal thoroughness does not require external verbosity.**
For discussion tasks, think broadly, log compactly, answer narrowly, and continue the creative thread.

---

## Required Visible Call Plan
Whenever `/story-orchestrator` is invoked, begin with a compact visible call plan before performing the work.

Use this format:

```md
ORCHESTRATOR CALL PLAN
Mode: <CO_DESIGN_DISCUSSION | SOURCE_RECOVERY | MOTIVATION_REVIEW | SCENE_LAB | FULL_AUDIT | WRITEBACK_GATE | QUICK_LOOKUP>
Output Budget: <compact | standard | full>
Tool / Skill Calls:
1. story-router — classify request and scope
2. story-context-manager — set output budget and scratchpad policy
3. story-source-recovery-gate — search named canon terms / existing events if needed
4. <selected specialist skill> — reason / design / review
5. story-grounding-auditor — mark assumptions, risks, evidence levels
6. Mini Log — Done / Pending / Blocked / Next
Will NOT do: <e.g. writeback, full audit, scene draft>
```

If the environment has actual file/search tools, the orchestrator should use them. If not, it must still display the intended skill call sequence and state what cannot be executed.

---

## Automatic Skill Selection

### If the user asks to discuss, deepen, explore, or asks “你認為…?”
Use:
1. `story-router`
2. `story-context-manager`
3. `story-co-design-discussion`
4. `story-source-recovery-gate` if named canon terms/events appear
5. `story-grounding-auditor`
6. Mini Log

Default output: **compact but creative**.

### If the user asks why a character does something
Use:
1. `story-router`
2. `story-source-recovery-gate`
3. `story-motivation-grounding`
4. `story-grounding-auditor`
5. `story-micro-insert-hunter` if detail opportunities are useful
6. Mini Log

### If the user asks to write a small scene / dialogue script
Use:
1. `story-router`
2. `story-source-recovery-gate`
3. `story-scene-lab`
4. `story-director-room`
5. `story-dialogue-room`
6. `story-coverage-table-read`
7. `story-grounding-auditor`
8. Mini Log

### If the user says canon has something, or “你自己搵”
Immediately use:
1. `story-source-recovery-gate`
2. `story-context-manager`
3. Continue the previous workflow

Do not argue. Do not mark the item as a gap until source recovery has been attempted.

### If the user asks for full audit / approval / writeback readiness
Use:
1. `story-router`
2. `story-multi-agent-room`
3. `story-source-recovery-gate`
4. `story-grounding-auditor`
5. `story-writeback` only if explicitly approved

---

## Source Recovery Before Gap
Do not label a named setting as missing before searching. The correct state ladder is:

```text
UNKNOWN_UNSEARCHED
→ SOURCE_RECOVERY_REQUIRED
→ SEARCHED_FOUND / SEARCHED_PARTIAL / SEARCHED_NOT_FOUND
→ NEEDS_CANON_SUPPORT only if search fails or support is insufficient
```

Bad:
```text
「情緒毒品」可能需要 canon support.
```

Good:
```text
我先查「情緒毒品 / 情緒藥物 / 情緒抑制劑 / 情緒麻醉」相關 canon；未查前不把它當新設定。
```

---

## Creative Proposal Style
When the user is co-designing, answer like a grounded co-writer:

```md
我覺得呢個方向有力，最穩係用「現有事件嵌入」而唔係另開新事件。

現有支撐：...
需要查證：...
新增候選：...
最小版本：...
我推薦：...
下一步最關鍵問題：...
```

Avoid turning every answer into a full report. Also avoid being so conservative that the answer becomes useless.

---

## Assumption Handling
Any proposed new setting must be tagged:
- `CANON_SUPPORTED`
- `STRONGLY_INFERRED`
- `WEAKLY_INFERRED`
- `AUTHOR_INTERESTED_CANDIDATE`
- `CREATIVE_HYPOTHESIS`
- `UNSUPPORTED_DO_NOT_USE`

If the user says an idea has potential, upgrade it to `AUTHOR_INTERESTED_CANDIDATE`, not canon.

---

## Call Plan Example
User: `/story-orchestrator 但我認為秋穗應該喺情緒毒品危機中被建築物活埋，其他人以為佢死咗，但佢冇死。`

Expected start:

```md
ORCHESTRATOR CALL PLAN
Mode: CO_DESIGN_DISCUSSION
Output Budget: compact
Tool / Skill Calls:
1. story-router — classify as co-design for 秋穗退場
2. story-context-manager — compact answer, no full 24-angle dump
3. story-source-recovery-gate — find existing 情緒毒品 crisis / Act III large events / 秋穗 state
4. story-co-design-discussion — fit the idea into existing events
5. story-grounding-auditor — mark new assumptions and impact
Will NOT do: writeback, full audit, final scene draft
```

Then continue with the actual answer.

---

## Mini Log Required
End each answer with a compact log unless the user asks for no logs.

```md
Mini Log
Done: ...
Pending: ...
Blocked: ...
Next: ...
```

Full log belongs in `canon/_working/SESSION_LEDGER.md` when file write is available. If file write is not available, output the mini log only.

---

## Stop Rules
- Do not write back unless explicitly asked.
- Do not ask the user whether a named term exists before attempting source recovery.
- Do not dump internal full checklist in discussion mode.
- Do not become passive: offer at least one usable recommendation when enough context exists.
- Do not treat source recovery as a reason to stop thinking; use it to ground better thinking.

## Workbench Choices
<!-- Haruka Workbench 讀呢段做成一撳掣。格式：- <emoji> <短標籤> | <開場指示>。改呢段唔影響 skill 其他規則。 -->
- 🔍 掃現有睇欠咩 | 先 resume 同現場讀目標層材料，用白話講已經有咩、真正欠咩、點影響成品，然後用選項卡問我自動做一版定逐項確認。
- 🔬 喺呢層再深入 | 留喺當前層，針對{goal}再深入補完同處理弱點，唔跨層；高影響選擇先出候選同推薦，再用選項卡問我。
- ⏭️ 推進到下一層 | 先檢查當前層夠唔夠穩定、有冇未解依賴；夠穩就出摘要用選項卡問我批，未得我批唔可以落下一層。
- ⏮️ 退返上一層 | 退返上一層處理{goal}，講清會令下層邊啲檔要重新驗證，唔刪舊下層檔。
- 📦 出層級審批包 | 當前層內部完成後，出完整 Layer Review Packet 畀我批；只有我可以批，你唔可以自己解鎖下一層。
- 🔭 由粗到幼重新傾 | 用由粗到幼模式，由全作 baseline 起逐層檢查到目標層，判斷邊層最高而未完成，由嗰層開始同我傾。
- 💬 一齊傾設計 | 就{goal}同我共同設計：先自己諗 2–4 個具體候選同推薦，人話講清代價同放棄咗咩，再用選項卡問我。
- ▶️ 繼續上次 | 讀返 state 檔同 run workspace，恢復上次做到邊同未決決定，然後繼續下一個安全步驟。
