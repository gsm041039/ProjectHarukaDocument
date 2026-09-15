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


### PROGRESSIVE_AUTHORING
Use when the user wants coarse-to-fine story development across layers, e.g.:
- 由 Act I 開始由粗到幼做 / 由大綱一路拆到 Scene
- 逐步做 Act II / 繼續上次 Act I
- 唔好直接寫對白，一層一層嚟
- 改返上游決定再推落去

Route to `story-orchestrator` **Progressive Coarse-to-Fine Authoring Mode**.

Call chain:
`story-resume → context-manager → source-recovery-gate → story-orchestrator (progressive mode) → layer-specific skill → grounding-auditor`

Layer → skill:
`Act = outline-synthesis-gate | Sequence = sequence-boundary-designer | Beat Sheet = story-room (Beat Sheet Production Mode) | Scene = scene-objective-architect + scene-lab | Dialogue = dialogue-architect + dialogue-readiness-gate + dialogue-script`

Rules:
- Do not restart at Act from zero; detect the highest genuinely-incomplete layer first.
- Do not immediately call Scene Lab; do not demand all four Acts' Beat Sheets first.
- Honour `CLAUDE.md` Local Vertical Refinement Policy: target Act may go deep while later Acts stay at outline; downstream artifacts carry a draft/provisional status stamp.
- Only `AUTHOR_DECISION`-class questions stop the flow (see orchestrator decision classes).

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


### HOLISTIC_SUPERVISION
Use only when the user explicitly asks to:
- 深化／專業化佢提出嘅問題
- 做宏觀、全面、跨層或 IP 級檢查
- 檢查有冇做到指定 feeling
- 找出漏做角度、根因或跨部門衝突
- 用完整作品角度挑戰現有方案

Depth:
- `FOCUSED` — only deepen the exact local question
- `CONNECTED` — inspect direct upstream/downstream layers; default
- `SYSTEMIC` — whole-work, IP, gameplay, direction and production system

Call chain:
`context-manager → source-recovery-gate → story-holistic-supervisor → dynamically selected specialists → grounding-auditor when factual claims require it`

Rules:
- This route is manual only; never make it a default completion gate.
- Preserve the original question before reframing it.
- Specialists return to the supervisor; they must not independently question the author.
- The supervisor may ask at most three author questions after local evidence recovery.
- Output must include a best current answer, root causes, repair routes and validation needs—not only a checklist.


### STATIC_SITE_SYNC
Use when the user asks to:
- update the static Story Brief or other canon reference website
- synchronize website content after canon or decision-record changes
- add, remove, reorder or revise story cards, character information, emotional rules, timelines or other canon-bearing site content
- preserve the site's overall structure while allowing controlled layout improvements

Call chain:
`context-manager → source-recovery-gate → canon-sync-gate → story-static-site-sync → grounding-auditor`

Rules:
- Treat the website as a downstream reader artifact, never as the highest canon authority.
- Canon + explicit author decision records jointly arbitrate current truth.
- Default to full affected-site synchronization, not only the single paragraph named by the user.
- Permit local design changes required by new content, but gate global redesign.
- Continue safe updates even when unrelated claims remain blocked by author decisions.

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

## Sync / Reconciliation Skill Ownership (C4 resolved 2026-09-10)
Do not create another synchronization skill. Ownership:
- **`story-canon-sync-gate`** — PRIMARY owner for current-truth reconciliation, source freshness, authority comparison, safe stale working-file correction, canon ↔ working synchronization. Default for freshness/baseline work.
- **`story-conflict-resolution-gate`** — specialist escalation only: genuine hard contradiction analysis, multi-document contradiction hunting, deep semantic conflict verification. NOT the default owner of routine synchronization.
- **`story-canon-fact-map-builder`** — owns Fact Map construction, incremental maintenance, validation. Does NOT own prose synchronization or creative design.
- `story-document-synthesis-gate` — legacy overlap with `story-canon-sync-gate`; prefer `story-canon-sync-gate`. Use `story-document-synthesis-gate` only if explicitly invoked.
