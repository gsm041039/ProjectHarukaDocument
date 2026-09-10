# STAGE 0 — EXISTING SYSTEM AUDIT ONLY

You are working inside `ProjectHarukaDocument`.

This stage is READ-ONLY for active repository systems.

## Goal

Build a trustworthy map of what already exists before any workflow modification.

The author explicitly does NOT want:
- folder restructuring;
- duplicate systems;
- new skills just because naming looks cleaner;
- new permanent docs that restate existing responsibilities.

## Mandatory Setup

Create or reuse ONE temp run folder:

`canon/_working/.tmp/story_runs/progressive_preproduction_<run-id>/`

Only temp working records may be created in this stage.

Create/update:

- `00_target_and_constraints.md`
- `01_system_ownership_audit.md`
- `02_workflow_contradictions.md`
- `03_stale_control_map.md`
- `13_run_manifest.md`

Do not modify active Canon, story-control documents, AGENTS, CLAUDE, or skills in Stage 0.

## Read First

Read:
- `AGENTS.md`
- `CLAUDE.md`
- current state files
- `01_REFERENCE_PACK_EXISTING_OWNERS.md` if supplied outside repo as task reference

Then search the repo for equivalent responsibilities rather than trusting a fixed list.

## Audit Required Capabilities

Map existing owners for:

1. full-story outline
2. Act outline
3. Act-level question/decision work
4. sequence/event grouping
5. Beat Sheet
6. sequence boundary
7. character state
8. character knowledge
9. relationship state
10. reveal/audience knowledge
11. theme/control objectives
12. source recovery
13. source freshness/canon reconciliation
14. Fact Map
15. conflict escalation
16. temp evidence workspace
17. resume
18. change impact
19. scene objective
20. scene architecture
21. character speaking state/voice
22. dialogue readiness
23. dialogue draft
24. directing/gameplay integration
25. review/audit
26. director preference/signature learning, if any

For each capability record:

| Capability | Existing Owner(s) | Current State | Evidence | Gap | Recommended Action |

Current State:
- GOOD
- PRESENT_BUT_STALE
- PRESENT_BUT_NOT_ROUTED
- PRESENT_BUT_PARTIAL
- DUPLICATED
- MISSING
- UNKNOWN

Recommended Action:
- KEEP
- PATCH
- EXTEND
- PORT_EXISTING_CAPABILITY
- DEPRECATE_ROUTE
- NEW_ONLY_IF_PROVEN

## Explicit Workflow Contradiction Audit

Search all operating instructions for contradictory rules about:
- Outline → Beat Sheet → Scene progression
- whether all four Acts must be fully Beat-approved before any local scene
- provisional scene drafting
- author gate behavior
- whether AI may propose missing bridges itself
- whether backup is mandatory vs conditional
- whether Codex or Claude workflow is authoritative for Codex

Record each contradiction in `02_workflow_contradictions.md`:

- statement A
- source A
- statement B
- source B
- actual operational risk
- which existing owner should ultimately resolve it
- NO FIX YET

## Control-File Freshness Audit

Inspect:
- CONTROL_OBJECTIVES_MASTER
- CONSIDERATIONS_REGISTER
- HARD_CONSTRAINTS_TABLE
- KNOWLEDGE_DEPENDENCY_MAP
- CROSS_ACT_CONTROL_LAYERS
- RELEVANT_FILES_TABLE
- BEAT_SHEET_SOURCE_MANIFEST
- Fact Map status/build dates

Classify:
- CURRENT
- PARTIALLY_STALE
- STALE
- EMPTY_BUT_VALID_OWNER
- HISTORICAL_ONLY
- REDUNDANT
- UNKNOWN

Do not change them yet.

## Codex vs Claude Capability Drift

Compare `.agents` and relevant `.claude` implementations.

Do NOT copy everything.

Identify only capabilities where:
- Claude already has a working owner;
- Codex needs equivalent behavior for the progressive workflow;
- Codex cannot obtain that behavior through an existing `.agents` owner.

Label those as `PORT_CANDIDATE`, not NEW.

## Required Stage 0 Final Output

Report:
1. temp run path
2. system ownership map
3. workflow contradictions
4. stale/empty control owners
5. Codex/Claude capability drift
6. exact list of files likely to need PATCH
7. exact list of skills likely to need PATCH
8. proposed PORT candidates
9. proposed NEW permanent artifacts — target should be zero
10. Stage 1 plan

## Hard Stop

Do NOT implement the plan.
Do NOT fix stale facts.
Do NOT modify routing.
Do NOT start Act I.
Do NOT write story content.

End with:
`STAGE_0_STATUS = PASS_CANDIDATE` or `FAIL_NEEDS_MORE_AUDIT`.
