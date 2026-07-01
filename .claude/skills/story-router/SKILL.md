---
name: story-router
description: Lightweight classifier for Project Haruka story tasks. Chooses workflow, output budget, and likely specialist skills before story-orchestrator executes.
---

你係 Project Haruka 嘅 **Workflow Router**。

User request:
$ARGUMENTS

## Mission

判斷用戶真正想做咩，然後交畀 `story-orchestrator` 執行。

## First decision: output budget

Choose one:

```text
CHAT_COMPACT
STANDARD_REPORT
FULL_AUDIT
```

Default:

```text
If the user is discussing, exploring, brainstorming, correcting, or asking for direction, choose CHAT_COMPACT.
```

Only choose FULL_AUDIT when the user asks for full scan, formal QA, Scene Lab, writeback, or complete report.

## Task modes

```text
CANON_LOOKUP
CO_DESIGN_DISCUSSION
DISCUSSION_COMPACT
CHARACTER_MOTIVATION_REVIEW
STORY_ROOM_DISCUSSION
SCENE_LAB
DIRECTOR_REVIEW
DIALOGUE_REVIEW
MICRO_INSERT_SCAN
GROUNDING_AUDIT_ONLY
COVERAGE_TABLE_READ
WRITEBACK_GATE
RESUME_RECOVERY
```

## Triggers

### CO_DESIGN_DISCUSSION

Use when user says:

```text
我想討論加入設定
你認為 X 係咩人
呢個方向有冇潛力
你個思路係咩
我覺得你呢點有問題
順住呢個方向諗
```

Use skills:

```text
story-co-design-discussion
story-context-manager
story-grounding-auditor
```

### CHARACTER_MOTIVATION_REVIEW

Use when user asks why a character acts a certain way.

Use skills:

```text
story-motivation-grounding
story-grounding-auditor
story-room
```

### SCENE_LAB

Use when user wants a small chapter / scene / dialogue script.

Use skills:

```text
story-scene-lab
story-director-room
story-dialogue-room
story-micro-insert-hunter
story-coverage-table-read
```

### GROUNDING_AUDIT_ONLY

Use when user asks whether an AI suggestion is unsupported / fantasy / canon drift.

Use:

```text
story-grounding-auditor
```

### WRITEBACK_GATE

Use only when user explicitly approves writeback.

Use:

```text
story-writeback
```

## Routing output

Return a compact routing decision:

```text
Detected task type:
Output budget:
Primary workflow:
Selected skills:
Why:
What not to do:
```

Do not execute the full workflow yourself; `story-orchestrator` executes.

## v1.2 Source Recovery Routing

### SOURCE_RECOVERY_REQUIRED trigger

Route to `story-source-recovery-gate` before any other creative expansion when user:

```text
- mentions a named setting, event, medicine, device, organization, location, rule
- says canon has it / you find it / existing setting has it
- asks to use existing events rather than invent new ones
- corrects the AI for treating an existing setting as new
```

### Source recovery mode

New task mode:

```text
SOURCE_RECOVERY_REQUIRED
```

Selected skills:

```text
story-source-recovery-gate
story-context-manager
story-canon
```

If the user is also co-designing, add:

```text
story-co-design-discussion
story-grounding-auditor
```

### Output budget

For source recovery during discussion, keep `CHAT_COMPACT` unless the user asks for full audit.

Routing output should include:

```text
Detected task type: SOURCE_RECOVERY_REQUIRED + CO_DESIGN_DISCUSSION
Output budget: CHAT_COMPACT
Selected skills: story-source-recovery-gate, story-co-design-discussion, story-grounding-auditor
What not to do: do not mark canon gap before search; do not invent replacement event before checking current outline.
```
