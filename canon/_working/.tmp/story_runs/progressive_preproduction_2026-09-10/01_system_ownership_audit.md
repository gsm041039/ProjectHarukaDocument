# 01 — System Ownership Audit (Stage 0)

Scope: `.agents/skills/` (Codex-authoritative) with `.claude/skills/` noted as reference/port source.
Evidence = file read this run unless noted. Dates from `ls`/`git log`.

## Capability → Owner map

| # | Capability | Existing Owner(s) (.agents) | State | Evidence | Gap | Action |
|---|---|---|---|---|---|---|
| 1 | Full-story outline | `story-outline-synthesis-gate` (user-invocable, 362L) | GOOD | SKILL.md read; enforces 4-act, source hierarchy, anti-stale-backup | none | KEEP |
| 2 | Act outline | `story-outline-synthesis-gate` (argument-hint incl. "act outline task"); artifacts `ACT_I/II/III_OUTLINE.md` | PRESENT_BUT_PARTIAL | Act IV outline missing; III only 暫定批核 | no dedicated act-outline skill, gate covers it | KEEP (gate) |
| 3 | Act-level question/decision work | `story-room` + `QUESTION_MATRIX.md` + `BLOCKED_DECISIONS.md` | GOOD | story-room SKILL.md: Question Matrix Gate, angle scan | none | KEEP |
| 4 | Sequence/event grouping | none dedicated in `.agents`; closest `story-room`; `.claude` has `story-sequence-boundary-designer` | MISSING (.agents) | `.agents` skills list; `.claude` list | no Codex owner for Act→Sequence decomposition | PORT_CANDIDATE (from `.claude/story-sequence-boundary-designer`) |
| 5 | Beat Sheet | none dedicated; `story-scene-lab` does "story breaking" but at scene grain; artifact `ACT_I_BEAT_SHEET.md` | MISSING (.agents) | skills list; beat sheet artifact self-labels as scene-ref | **no skill owns Beat Sheet layer** — the exact layer the pack's coarse-to-fine flow needs | PORT_CANDIDATE / NEW_ONLY_IF_PROVEN |
| 6 | Sequence boundary | as #4 | MISSING (.agents) | — | — | PORT_CANDIDATE |
| 7 | Character state | `.claude/story-character-*` cluster (memory-state, context-recovery, arc-positioner); `.agents` has none; artifact `INDIVIDUAL_CHARACTER_GROWTH_TRACKER.md` | PRESENT_BUT_NOT_ROUTED | `.agents` skills list has zero `story-character-*`; tracker file exists + recently modified (git status M) | Codex has no character-state skill | PORT_CANDIDATE (subset) |
| 8 | Character knowledge | `.claude/story-knowledge-state-mapper`, `story-character-memory-state-manager`; artifact `KNOWLEDGE_DEPENDENCY_MAP.md`; fact map `CHARACTER_KNOWLEDGE_FACTS.md` | PRESENT_BUT_NOT_ROUTED (.agents) | skills lists | Codex owner absent | PORT_CANDIDATE |
| 9 | Relationship state | `.claude/story-relationship-dynamics`; artifacts `07_Major_Events_Relationship_Impact.md`, `13_major_events_relationship_impact.md`, fact map `RELATIONSHIP_FACTS.md` | PRESENT_BUT_NOT_ROUTED (.agents) | skills lists | Codex owner absent | PORT_CANDIDATE |
| 10 | Reveal / audience knowledge | `story-room` (reveal order in scope); `.claude/story-knowledge-state-mapper`; artifacts `LATE_REVEAL_SEEDING_AUDIT.md`, `canon/09_information_design.md`, `CROSS_ACT_FORESHADOW_MANIFEST.md` | GOOD | story-room SKILL.md scope line; artifacts present | none critical | KEEP |
| 11 | Theme / control objectives | artifacts `CONTROL_OBJECTIVES_MASTER.md` + 4 sub-tables; gate skills in `character-ideology-gate.md` (CLAUDE.md include) | PRESENT_BUT_STALE | control files dated 2026-03-25, last real git touch 2026-04-15 (COM) — ~150 rounds behind | files stale, no skill "refreshes" them | PATCH (Stage 2) |
| 12 | Source recovery | `story-source-recovery-gate` (74L, mandatory-before-gap) | GOOD | SKILL.md read | none | KEEP |
| 13 | Source freshness / canon reconciliation | `story-canon-sync-gate` (v3, 448L), `story-canon`, `story-document-synthesis-gate`; `.claude` has `story-canon-reconciliation` too | GOOD (maybe DUPLICATED) | 3 overlapping sync/synthesis skills in `.agents` | possible overlap sync-gate vs document-synthesis-gate | KEEP + note overlap for Stage 2 |
| 14 | Fact Map | `story-canon-fact-map-builder`; data `canon/_working/canon_fact_map/` | PRESENT_BUT_STALE | build ledger dates May–Jun 2026; last build 2026-06-22 | ~3 months + Rounds 150–184 of CDLs not folded in | PATCH/REBUILD delta (Stage 1) |
| 15 | Conflict escalation | `story-conflict-resolution-gate`, `story-atom-gate`; data `conflict_resolution/`, `CONFLICT_CANDIDATES.md` | GOOD | skills list; dirs exist | none | KEEP |
| 16 | Temp evidence workspace | `story-context-manager` (scratchpad policy); `.claude/story-run-workspace-manager` more advanced; convention `canon/_working/.tmp/story_runs/` | PRESENT_BUT_PARTIAL | context-manager names only 3 flat `.tmp/current_run*.md`; existing runs use per-run folders | Codex scratchpad policy weaker than actual convention + `.claude` manager | PORT_CANDIDATE (from `story-run-workspace-manager`) |
| 17 | Resume | `story-resume` (50L) | GOOD | SKILL.md read | none | KEEP |
| 18 | Change impact | none in `.agents`; `.claude/story-character-change-impact-manager`, `story-downstream-consistency-auditor`, `story-downstream-opportunity-planner` | MISSING (.agents) | skills lists | Codex cannot answer "this canon change affects which downstream files" | PORT_CANDIDATE |
| 19 | Scene objective | `story-scene-lab` (stage: Story Breaking); `.claude/story-scene-objective-architect` | PRESENT_BUT_PARTIAL | scene-lab SKILL.md | folded into scene-lab, not separable | KEEP |
| 20 | Scene architecture | `story-scene-lab` (Director Room + Dialogue Room stages) | GOOD | SKILL.md read | none | KEEP |
| 21 | Character speaking state / voice | `.claude/story-character-voice-designer`, `story-scene-speaking-state-builder`, `story-character-voice-evidence-auditor`; data `canon/_working/character-voice-bibles/`, `character-voice-workshops/` | PRESENT_BUT_NOT_ROUTED (.agents) | data dirs exist + miyako voice bible modified (git status); zero `.agents` voice skills | Codex owner absent | PORT_CANDIDATE |
| 22 | Dialogue readiness | none in `.agents`; `.claude/story-dialogue-readiness-gate` | MISSING (.agents) | skills lists | no gate before Codex writes dialogue | PORT_CANDIDATE |
| 23 | Dialogue draft | `story-scene-lab` (D4 Screenplay Draft), `story-dialogue-room` (review only) | GOOD | SKILL.md read | scene-lab caps at D4 by default; D7/D8 need writeback gate | KEEP |
| 24 | Directing / gameplay integration | `story-director-room` (lightweight); `.claude` has `story-game-director`, `story-gameplay-cinematic-integrator`, `story-storyboard-designer`, `story-performance-director` etc. | PRESENT_BUT_PARTIAL (.agents) | `.agents` only has director-room; canon has `10_gameplay_bible.md`, `11_directing_playbook.md` | Codex directing depth << Claude; may be acceptable for coarse-to-fine early stages | DEFER decision to Stage 3/4 |
| 25 | Review / audit | `story-grounding-auditor`, `story-multi-agent-room`, `story-coverage-table-read`, `story-dialogue-room` | GOOD | skills list + SKILL headers | none | KEEP |
| 26 | Director preference / signature learning | `.claude/discussion-skill-builder` + `.claude/user-discussion-agent` (mined from 41 sessions); `.agents` has none | PRESENT_BUT_NOT_ROUTED | `.claude` skills list + descriptions | Codex has no learned-author-method prior | PORT_CANDIDATE (low priority) |

## Router / orchestrator explicit mapping (gate requirement)
- `story-orchestrator` (.agents, 190L): single entry point, visible CALL PLAN, modes CO_DESIGN_DISCUSSION / SOURCE_RECOVERY / MOTIVATION_REVIEW / SCENE_LAB / FULL_AUDIT / WRITEBACK_GATE / QUICK_LOOKUP. **No mode for coarse-to-fine Act→Sequence→Beat progressive authoring.** — GAP for the pack's target flow.
- `story-router` (.agents, 87L): classifier, same mode set, no progressive-pipeline mode. Same gap.
- `story-outline-synthesis-gate`: mapped, GOOD, KEEP.
- `story-room`: mapped, GOOD, KEEP.
- `story-scene-lab`: mapped, GOOD for scene grain; but see contradiction #1 — it will run on a single beat with no check that all 4 Act Beat Sheets are approved.

## Summary counts
- KEEP: ~13 capabilities
- PATCH (existing files/data stale): #11, #14 (+ control files, Stage 2)
- PORT_CANDIDATE (Claude owner exists, Codex missing): #4, #5, #6, #7, #8, #9, #16, #18, #21, #22, #26
- MISSING with no owner anywhere: **none** — every capability has at least a `.claude` owner or an artifact.
- Proposed NEW permanent artifacts: **0** (Beat Sheet layer #5 is the only real risk; try PORT/patch `story-scene-lab` + `story-outline-synthesis-gate` first).

## Biggest structural gap for the pack's goal
The coarse-to-fine chain **Act → Sequence → Beat → Scene → Dialogue** has:
- Act: owned (gate)
- Sequence: **no Codex owner** (#4/#6)
- Beat Sheet: **no owner in either side as a distinct routed skill** (#5) — closest is scene-lab "story breaking" at wrong grain
- Scene: owned (scene-lab)
- Dialogue: owned (scene-lab D4 / dialogue-room)
- Progressive routing/sequencing across these layers: **no owner** (orchestrator has no progressive mode)

This is the real Stage 4 work. Stage 0 conclusion: fix by PORT + PATCH orchestrator/router + PATCH scene-lab entry rules, not by a new tree.
