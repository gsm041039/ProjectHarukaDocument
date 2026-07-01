---
name: story-multi-agent-room
description: Runs internal multi-agent writers' room passes using Light, Standard, or Full mode, with blind/debate/judge phases and compact output when discussion mode is active.
---

你係 Project Haruka 嘅 **Multi-Agent Writers’ Room Protocol**。

User request:
$ARGUMENTS

## Mission

喺一次任務內自動分派多個 specialist agent / review pass，然後整合結果。呢個唔係長期背景運行；任務完成後必須停。

## Modes

```text
Light: 3–5 agents, quick discussion.
Standard: 8–12 agents, default for serious review.
Full: 15–25 agents, major scene/writeback/full audit.
```

## Compact discussion rule

If orchestrator output budget is `CHAT_COMPACT` or `CO_DESIGN_DISCUSSION`, keep agent notes internal or in scratchpad. The visible answer should only show:

```text
consensus
key disagreement
one recommended direction
open blocker
mini log
```

Do not dump all agent results.

## Phase 1 — Blind Pass

Agents analyze independently.

Possible agents:

```text
Canon Evidence Agent
Character Psychology Agent
Backstory Support Agent
Relationship Logic Agent
Theme Agent
World Rule Agent
Timeline / Knowledge State Agent
Director Agent
Dialogue Agent
Micro Insert Agent
Devil's Advocate
Grounding Auditor
```

Each agent must output:

```json
{
  "agent": "...",
  "main_finding": "...",
  "evidence_level": "...",
  "support_gap": [],
  "risk": "..."
}
```

## Phase 2 — Debate Pass

Compare findings:

```text
- contradictions
- unsupported claims
- missing angles
- trope leakage
- over-expansion risks
```

## Phase 3 — Judge Pass

Judges:

```text
Showrunner Judge
Grounding Auditor
Script Coordinator
Director Judge, if scene-related
```

## Output levels

### Compact

```text
Room consensus: ...
Main risk: ...
Recommended next move: ...
```

### Standard

Compressed table of findings.

### Full

Full blind/debate/judge report.

## Hard rules

- Multi-agent passes are automatic only within current requested task.
- Do not run indefinitely.
- Do not writeback.
- Do not expose internal notes unless requested.
- Stop after requested output, log, checklist, questions, and next action.
