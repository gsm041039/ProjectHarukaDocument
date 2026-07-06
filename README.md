# Project Haruka Grounded Workflow v1.3

This package updates the grounded writers' room workflow for Project Haruka.

## v1.3 Goal
Fix the over-conservative behavior introduced in v1.2. The AI must remain a proactive co-writer while still respecting canon, evidence, source recovery, and no-writeback rules.

## Key Principles

```text
Creative, but grounded.
Proactive, but not canon-sloppy.
Compact, but still useful.
Source recovery before gap, but not instead of thinking.
```

## Most Important Skill

```text
.agents/skills/story-orchestrator/SKILL.md
```

Use this as the single entry point. It now must show a visible call plan:

```md
ORCHESTRATOR CALL PLAN
Mode: ...
Output Budget: ...
Tool / Skill Calls:
1. story-router — ...
2. story-context-manager — ...
3. story-source-recovery-gate — ...
4. selected specialist skill — ...
5. story-grounding-auditor — ...
Will NOT do: ...
```

## Core Skills

```text
.agents/skills/story-orchestrator/SKILL.md
.agents/skills/story-router/SKILL.md
.agents/skills/story-context-manager/SKILL.md
.agents/skills/story-source-recovery-gate/SKILL.md
.agents/skills/story-co-design-discussion/SKILL.md
.agents/skills/story-multi-agent-room/SKILL.md
.agents/skills/story-grounding-auditor/SKILL.md
```

## Discussion Mode
For ordinary discussion, the AI should not dump full reports. It should answer compactly but still offer a real recommendation.

Expected shape:

```md
ORCHESTRATOR CALL PLAN
...

我建議...
現有支撐...
新增候選...
風險...
下一步...

Mini Log
Done: ...
Pending: ...
Blocked: ...
Next: ...
```

## Source Recovery
If a named setting or event appears, the assistant must search before calling it missing. But after searching, it must resume creative discussion.

## New v1.3 Doc

```text
docs/ORCHESTRATOR_CALL_PLAN_AND_CREATIVE_MOMENTUM.md
```

## Existing Working State
This package does not create a new long-term working system. It continues to use:

```text
canon/_working/SESSION_LEDGER.md
canon/_working/NEXT_ACTION.md
canon/_working/QUESTION_QUEUE.md
canon/_working/PROJECT_STATUS.md
```

Temporary scratchpads may use:

```text
canon/_working/.tmp/current_run.md
```

These are not canon.

## Changelog
- v1.1: Added context-saving and co-design discussion.
- v1.2: Added source recovery before gap.
- v1.3: Restored proactive creative behavior and required visible orchestrator call plans.
