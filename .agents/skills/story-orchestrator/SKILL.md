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
