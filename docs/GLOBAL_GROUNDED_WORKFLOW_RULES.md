# Global Grounded Workflow Rules

## Core purpose

Project Haruka workflows exist to let AI help with canon, character, scene, dialogue, and directing design without hallucinating unsupported personality/backstory and without damaging existing working files.

## Golden rules

```text
Every claim must be grounded, graded, and traceable.
Creative hypotheses are allowed, but they must be isolated, labelled, and converted into author questions or required-support proposals before use.
```

```text
Internal thoroughness does not require external verbosity.
For discussion tasks, think broadly, log compactly, and answer narrowly.
```

## Master entry rule

Every task should start through `story-orchestrator`, unless the user explicitly calls a specialist skill.

The orchestrator must decide:

```text
Task type
Output budget
Workflow
Selected skills
Whether multi-agent is needed
Whether temp scratchpad is needed
What not to do
```

## Existing working state rule

Use existing working files:

```text
canon/_working/PROJECT_STATUS.md
canon/_working/NEXT_ACTION.md
canon/_working/QUESTION_QUEUE.md
canon/_working/SESSION_LEDGER.md
canon/_working/CANON_DECISION_LOG.md
canon/_working/READ_MANIFEST.md
canon/_working/story_construction/QUESTION_MATRIX.md
```

Do not create a parallel permanent working system.

Temporary scratchpad is allowed:

```text
canon/_working/.tmp/current_run.md
canon/_working/.tmp/current_run_checklist.md
canon/_working/.tmp/current_run_evidence.md
canon/_working/.tmp/current_run_agent_notes.md
```

`.tmp` is temporary, overwrite-safe, non-canon.

## Output budget rule

Choose one:

```text
CHAT_COMPACT
STANDARD_REPORT
FULL_AUDIT
```

Default to `CHAT_COMPACT` for ordinary discussion and co-design.

Only use `FULL_AUDIT` when explicitly requested or before canon-critical writeback.

## Co-design discussion rule

When the user is exploring new ideas, use `CO_DESIGN_DISCUSSION`.

Required:

```text
現有支撐
新增假設
風險
建議最小版本
下一步要確認
Mini Log
```

## No Free Personality Rule

AI 不可憑空賦予角色新的核心性格、價值觀、創傷、慾望、恐懼、癖好、語氣或關係態度。

Any such claim must have support from:

```text
source atom
event
relationship history
dialogue
repeated behavior pattern
world rule
directing note
```

If unsupported, it belongs in Hypothesis Sandbox only.

## Evidence levels

```text
CANON_SUPPORTED
STRONGLY_INFERRED
WEAKLY_INFERRED
CREATIVE_HYPOTHESIS
AUTHOR_INTERESTED_CANDIDATE
NEEDS_CANON_SUPPORT
UNSUPPORTED_DO_NOT_USE
```

## Hypothesis Promotion Ladder

```text
UNSUPPORTED
CREATIVE_HYPOTHESIS
AUTHOR_INTERESTED_CANDIDATE
NEEDS_CANON_SUPPORT
APPROVED_CANDIDATE
CANON_WRITEBACK_READY
```

Do not skip stages.

Author interest does not equal canon approval.

## New Assumption Flag

Every new candidate idea must be labelled:

```text
新增假設候選：...
現有支撐：...
風險：...
需要確認：...
狀態：Candidate only，不可當 canon。
```

## Correction Assimilation Rule

When the author corrects the AI, the next answer must first state:

```text
更新後限制：
1. ...
2. ...
下一步推演會避開：...
```

## Minimum Viable Canon Expansion Rule

For major new settings, present:

```text
最小版
中版
大版
推薦
```

Default to the smallest version that solves the dramatic problem.

## Existing Canon Impact Check

For major candidates, check:

```text
Characters affected
Acts affected
Reveals affected
World rules affected
Antagonist-function risk
Potential payoff
```

## Active Support Gap Detection

Every workflow should detect support gaps, including:

```text
CANON_FACT_GAP
WORLD_RULE_GAP
TIMELINE_GAP
CAUSALITY_GAP
CHARACTER_BACKSTORY_GAP
CHARACTER_TRAUMA_GAP
CHARACTER_VALUE_GAP
CHARACTER_DESIRE_GAP
CHARACTER_FEAR_GAP
CHARACTER_HABIT_GAP
CHARACTER_SPEECH_PATTERN_GAP
CHARACTER_GROWTH_STAGE_GAP
RELATIONSHIP_HISTORY_GAP
RELATIONSHIP_POWER_DYNAMIC_GAP
KNOWLEDGE_STATE_GAP
MOTIVATION_SUPPORT_GAP
BEHAVIOR_PATTERN_GAP
EMOTIONAL_LOGIC_GAP
THEME_ALIGNMENT_GAP
SYMBOLISM_SUPPORT_GAP
DIRECTING_LOGIC_GAP
SCENE_FUNCTION_GAP
AUDIENCE_INTERPRETATION_GAP
PAYOFF_SETUP_GAP
COUNTER_EVIDENCE_GAP
TROPE_LEAKAGE_RISK
```

## Log and checklist rule

Every task must have an internal checklist.

For compact discussion, show only:

```text
Mini Log:
Done: ...
Pending: ...
Blocked: ...
Next: ...
```

For formal work, update or output a `SESSION_LEDGER` style summary:

```text
Task
Mode
Selected Skills
Completed
Pending
Blocked
Skipped
Open Questions
Next Recommended Action
```

## Writeback rule

No automatic writeback.

Writeback requires:

```text
Author Approved: YES
Approved Items
Writeback Scope
Diff Plan
Change Log
```

Hypotheses and unsupported claims cannot be written back.

## Stop rule

After the requested task, log/checklist/open questions/next action are produced, stop. Do not automatically enter the next major phase.

## v1.2 Global Rule: Source Recovery Before Gap

Every claim must be grounded, graded, traceable — and searched before being called missing.

```text
Unknown is not missing.
Unsearched is not unsupported.
Not remembered is not non-canon.
```

Before declaring any canon/world/character/detail gap, run source recovery.

If the user says「canon 有」「你自己搵」「之前講過」, stop creative expansion and recover source.

Output should stay compact:

```text
Source Recovery: FOUND / PARTIAL / NOT_FOUND
Impact: ...
Next: ...
```

Full search details belong in scratchpad or full audit, not normal discussion.
