# STAGE 4 — PROGRESSIVE COARSE-TO-FINE WORKFLOW INTEGRATION

Prerequisite: truth, control, and foundations accepted.

## Goal

Make the EXISTING Codex story orchestrator able to guide the author progressively from the highest incomplete story layer to the next lower layer.

Do NOT create a parallel giant progressive-story skill unless the ownership audit proves orchestrator cannot own routing.

## Primary Owners to Patch

Verify necessity before patching:
- `AGENTS.md`
- `.agents/skills/story-router/SKILL.md`
- `.agents/skills/story-orchestrator/SKILL.md`
- `.agents/skills/story-context-manager/SKILL.md`
- `.agents/skills/story-room/SKILL.md`
- `.agents/skills/story-outline-synthesis-gate/SKILL.md`
- relevant source-recovery / resume owners

## Required Internal Progression Model

Use or document an equivalent model:

- Story/global baseline
- Act architecture
- Sequence/event architecture
- Beat Sheet
- Sequence boundary
- Scene architecture
- Dialogue blueprint
- Script
- Review/revision

These are abstraction levels, not new folder names.

## Detect Current Level

When user asks:
> 由 Act I 開始由粗到幼做

The orchestrator must:
1. resume durable state;
2. inspect existing Act I artifacts;
3. reconcile freshness;
4. determine the highest stable/approved layer;
5. identify the next incomplete layer;
6. preserve detailed material that exists at the wrong layer as downstream reference;
7. do not rebuild approved work from zero.

## Resolve Existing Pipeline Contradiction

Audit the real current rules governing:
- must all four Acts finish Beat Sheet before any Scene?
- can a target Act/Sequence proceed locally as provisional?
- when can Scene drafts exist?
- what can be canonized?

Create ONE operational rule in the appropriate existing owner.

Preferred behavior:
- macro/cross-act truth must be respected;
- target Act must be stable enough before its Beat work;
- Beat/Sequence must be stable enough before production Scene work;
- local experimental/provisional Scene can exist where safe;
- local work may not silently lock unresolved global truth;
- final/canon status remains gated.

Do not leave contradictory instructions active.

## Abstraction Boundaries

### Act
Decides:
- dramatic function
- entry/end state
- major turns
- major reveal obligations
- relationship/character movement
- broad event order

No exact dialogue/camera.

### Sequence/Event
Decides:
- dramatic movement
- entry pressure / turn / consequence / exit
- info/relationship delta
- carrier function

### Beat
Decides:
- trigger
- action/reaction
- turn
- consequence
- value shift
- info shift
- setup/payoff
- broad gameplay form

No polished dialogue or exact camera timing.

### Scene
Decides:
- boundaries
- objectives
- obstacles
- subtext
- blocking logic
- expression carrier
- gameplay/control ownership

### Dialogue Blueprint
Decides:
- conversational sections
- who drives them
- hidden info
- interruptions
- escalation
- silence
- line function

### Script
Exact dialogue/action.

If fine-grained material appears early:
mark `DOWNSTREAM_REFERENCE` / `SCENE_REFERENCE`.
Do not delete it.
Do not allow it to become upstream truth automatically.

## Author Interaction Policy

Before asking author:
- source recovery
- freshness check
- obligation scan
- AI attempts an answer/proposal

Classify:
- AUTO_RESOLVABLE
- NEEDS_VALIDATION
- AUTHOR_DECISION

Only AUTHOR_DECISION normally interrupts.

Question style:
- plain Cantonese/Traditional Chinese
- no internal IDs required
- no Q1/Q2 questionnaire
- no fake binary
- explain what is already known
- explain why this decision matters
- show recommendation
- explain downstream impact
- let author answer freely

## Progressive Turn Behavior

Each author turn should normally:
1. state current level in plain language;
2. summarize what is already settled;
3. show AI's analysis/proposal;
4. ask one real high-impact decision if needed;
5. after author answer, write decision/state;
6. continue until current level is ready;
7. then move down one layer.

## Temp Record

Update:
- `08_progressive_routing_design.md`
- `09_implementation_ledger.md`
- `13_run_manifest.md`

## Do Not Start Act I Yet

Use synthetic or dry-run data only in this Stage.

Final status:
- `PROGRESSIVE_ROUTING_READY`
- `PROGRESSIVE_ROUTING_PARTIAL`
- `BLOCKED_BY_WORKFLOW_CONFLICT`
