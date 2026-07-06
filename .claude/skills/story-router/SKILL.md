# story-router — Task Classifier and Mode Selector

## Purpose
Classify the user's request and select a workflow mode. The router must keep the assistant useful: not too verbose, not too passive.

## Modes

### CO_DESIGN_DISCUSSION
Use when the user says:
- 想同你討論加入設定
- 你認為角色係咩人
- 呢個設定有冇潛力
- 我認為可以咁改
- 你個思路係咩
- 你幫我一齊諗

Default output: compact, creative, evidence-aware.
Call chain:
`context-manager → source-recovery-gate if named canon terms → co-design-discussion → grounding-auditor`

### SOURCE_RECOVERY
Use when:
- user names a setting/event and says canon has it
- AI is unsure whether a term exists
- AI wants to label a gap
- user says “你自己搵”

Call chain:
`source-recovery-gate → return digest → resume previous mode`

### MOTIVATION_REVIEW
Use when:
- why did character do X?
- is this behavior reasonable?
- deepen the purpose behind event/behavior

Call chain:
`source-recovery-gate → motivation-grounding → grounding-auditor → optional micro-insert`

### SCENE_LAB
Use when:
- write a small chapter / scene / dialogue script
- scene experiment

Call chain:
`source-recovery-gate → scene-lab → director-room → dialogue-room → coverage-table-read → grounding-auditor`

### FULL_AUDIT
Use when:
- full scan
- approve outline
- find all gaps
- before writeback

Call chain:
`multi-agent-room → source-recovery-gate → grounding-auditor → coverage / writeback gate`

### QUICK_LOOKUP
Use when:
- simple factual canon lookup

Call chain:
`source-recovery-gate only`

---

## Required Router Output
The router must provide a visible plan when invoked via `/story-orchestrator`.

```md
Detected Mode: ...
Output Budget: ...
Selected Skill Calls:
1. ...
2. ...
Reason: ...
Will NOT do: ...
```

## Anti-Passivity Rule
Do not use source uncertainty as an excuse to stop. If source recovery is incomplete, provide:
- best grounded direction
- what must be checked
- one minimum viable proposal

## Anti-Overreport Rule
In CO_DESIGN_DISCUSSION, do not output 24-angle tables unless asked.
