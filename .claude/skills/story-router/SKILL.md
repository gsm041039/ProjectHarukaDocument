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


### DIRECTING_PIPELINE
Use when the user asks for any combination of:
- game directing / 導演方案
- location and staging
- character performance direction
- complete dialogue script
- storyboard / shot list / camera language
- montage / editing / audio direction
- gameplay-cinematic integration
- cross-department Markdown specs or Unity-ready JSON

The router must classify the requested depth:
- `DIRECTOR_ANALYSIS` — analyze and propose
- `SPECIALIST_ARTIFACT` — create one specialist deliverable
- `FULL_DIRECTOR_PACKAGE` — produce separated directing files
- `DIRECTING_AUDIT` — review existing material

Base call chain:
`source-recovery-gate → game-director → selected specialists → directing-language-auditor → grounding-auditor`

Add `director-delivery-builder` only when the user requests files, schemas, or implementation handoff.
Do not assume branching or gameplay variants; derive them from gameplay documents or mark dependencies.

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
