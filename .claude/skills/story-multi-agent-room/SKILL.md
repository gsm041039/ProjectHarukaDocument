# story-multi-agent-room — Automatic Specialist Passes

## Purpose
Run multiple specialist review passes inside one user-requested task. This is not background automation and does not run indefinitely.

## v1.3 Visible Plan Requirement
When called through `story-orchestrator`, list which agents will run:

```md
Multi-Agent Plan:
Blind Pass:
- Canon Evidence Agent
- Character Psychology Agent
- Relationship Logic Agent
- World Rule Agent
- Theme Agent
- Director Agent
Debate Pass:
- Gap Hunter
- Devil's Advocate
- Grounding Auditor
Judge Pass:
- Showrunner Judge
- Canon Safety Judge
```

## Modes
**Budget（2026-10-08）：** 下面數字係「pass／lens 數量」，**唔係 sub-agent 數量**。預設由 orchestrator 內聯逐個 pass 做；派 sub-agent 跟 `story-orchestrator`「Sub-Agent Budget Policy」（普通任務總數 ≤2；3–4 只限作者批准嘅明確 Holistic Audit；>4 唔可以自動派），一個 agent 可以合併多個 pass。

### Light
3–5 passes. Quick discussion.

### Standard
8–12 passes. Serious analysis.

### Full
15–25 passes. Use only for full audit, writeback, major outline approval, or user request.

## Output Discipline
Do not show all agent notes in compact discussion. Summarize:
- what changed the recommendation
- what remains uncertain
- what must be checked

## Creativity Rule
Agents should not only find problems. At least one pass must propose a usable solution or minimum viable canon expansion.
