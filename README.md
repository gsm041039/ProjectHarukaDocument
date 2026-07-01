# Project Haruka Grounded Workflow v1.2

This package contains the upgraded Project Haruka story workflow and skill set.

v1.2 adds a retrieval safety layer after the v1.1 context-saving / co-design update.

## New in v1.2

```text
Added:
- story-source-recovery-gate/SKILL.md
- docs/SOURCE_RECOVERY_BEFORE_GAP_RULE.md
- docs/CANON_SEARCH_INDEX_SPEC.md

Updated:
- story-orchestrator/SKILL.md
- story-router/SKILL.md
- story-context-manager/SKILL.md
- story-co-design-discussion/SKILL.md
- story-grounding-auditor/SKILL.md
- docs/GLOBAL_GROUNDED_WORKFLOW_RULES.md
- docs/SIMPLE_USER_GUIDE.md
```

## Core v1.2 fix

The AI must not treat an unsearched term as missing canon.

```text
UNKNOWN_UNSEARCHED ≠ MISSING
NOT_YET_SEARCHED ≠ NEEDS_CANON_SUPPORT
```

Before saying a named setting is new, missing, unsupported, or needs canon support, the AI must run Source Recovery.

## Key design goals

```text
AI can be creative, but every new claim must be grounded, graded, and traceable.
Discussion should be compact by default.
Detailed checks can run internally or in scratchpad.
Named canon terms must be searched before being treated as gaps.
The chat should show decisions, risks, blockers, and next steps — not every internal note.
```

## Folder layout

```text
ProjectHaruka_GroundedWorkflow_v1_2/
├─ README.md
├─ docs/
│  ├─ GLOBAL_GROUNDED_WORKFLOW_RULES.md
│  ├─ 24_ANGLE_SUPPORT_CHECKLIST.md
│  ├─ SIMPLE_USER_GUIDE.md
│  ├─ CONTEXT_SAVING_DISCUSSION_MODE.md
│  ├─ CO_DESIGN_DISCUSSION_MODE.md
│  ├─ SOURCE_RECOVERY_BEFORE_GAP_RULE.md
│  └─ CANON_SEARCH_INDEX_SPEC.md
└─ .agents/skills/
   ├─ story-orchestrator/SKILL.md
   ├─ story-router/SKILL.md
   ├─ story-source-recovery-gate/SKILL.md
   ├─ story-context-manager/SKILL.md
   ├─ story-co-design-discussion/SKILL.md
   ├─ story-multi-agent-room/SKILL.md
   ├─ story-room/SKILL.md
   ├─ story-canon/SKILL.md
   ├─ story-atom-gate/SKILL.md
   ├─ story-writeback/SKILL.md
   ├─ story-resume/SKILL.md
   ├─ story-grounding-auditor/SKILL.md
   ├─ story-motivation-grounding/SKILL.md
   ├─ story-director-room/SKILL.md
   ├─ story-dialogue-room/SKILL.md
   ├─ story-micro-insert-hunter/SKILL.md
   ├─ story-scene-lab/SKILL.md
   └─ story-coverage-table-read/SKILL.md
```

## Existing working-state policy

This package does not create a new permanent working system. It expects the existing files to remain the source of project state:

```text
canon/_working/PROJECT_STATUS.md
canon/_working/NEXT_ACTION.md
canon/_working/QUESTION_QUEUE.md
canon/_working/SESSION_LEDGER.md
canon/_working/CANON_DECISION_LOG.md
canon/_working/READ_MANIFEST.md
canon/_working/story_construction/QUESTION_MATRIX.md
```

Temporary scratchpad is allowed only as transient cache:

```text
canon/_working/.tmp/current_run.md
canon/_working/.tmp/current_run_checklist.md
canon/_working/.tmp/current_run_evidence.md
canon/_working/.tmp/current_run_agent_notes.md
```

`.tmp` is overwrite-safe, non-canon, and not a new working state.

## Optional narrative retrieval aid

v1.2 defines an optional:

```text
canon/_working/CANON_SEARCH_INDEX.jsonl
```

This is a retrieval index, not a new canon source. See `docs/CANON_SEARCH_INDEX_SPEC.md`.

## Recommended merge order

1. `docs/GLOBAL_GROUNDED_WORKFLOW_RULES.md`
2. `docs/SOURCE_RECOVERY_BEFORE_GAP_RULE.md`
3. `.agents/skills/story-source-recovery-gate/SKILL.md`
4. `.agents/skills/story-orchestrator/SKILL.md`
5. `.agents/skills/story-router/SKILL.md`
6. `.agents/skills/story-context-manager/SKILL.md`
7. `.agents/skills/story-co-design-discussion/SKILL.md`
8. `.agents/skills/story-grounding-auditor/SKILL.md`

## Normal use

Say:

```text
/story-orchestrator
用 compact discussion，同我一齊諗，唔好出 full report。
```

If AI misses existing canon:

```text
canon 有，你自己搵。用 source recovery，唔好當新設定。
```

## Mini Log standard

Every compact discussion should end with:

```text
Mini Log:
Done: ...
Pending: ...
Blocked: ...
Next: ...
```
