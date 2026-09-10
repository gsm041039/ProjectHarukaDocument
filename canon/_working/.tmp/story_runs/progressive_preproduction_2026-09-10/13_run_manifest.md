# Run Manifest — Progressive Preproduction Pack

- Run ID: `progressive_preproduction_2026-09-10`
- Run folder: `canon/_working/.tmp/story_runs/progressive_preproduction_2026-09-10/`
- Started: 2026-09-10
- Executing agent: Claude Code (pack authored for Codex; deliverables are analysis docs, agent-neutral)
- Story state at start: Round 184 (PROJECT_STATUS). Main blocker = Act IV Outline 正式設計.

## Stage progress
| Stage | Prompt | Status |
|---|---|---|
| 0 — Existing-System Audit | 02_STAGE_0 | PASS_CANDIDATE (2026-09-10) — awaiting author gate on C2 |
| 1 — Current Truth Baseline | 04_STAGE_1 | not started |
| 2 — Control Reconciliation | 06_STAGE_2 | not started |
| 3 — Production Foundations Readiness | 08_STAGE_3 | not started |
| 4 — Progressive Pipeline Integration | 10_STAGE_4 | not started |
| 5 — Resume/Trace/Change-Impact | 12_STAGE_5 | not started |
| 6 — Regression + Act I Readiness | 14_STAGE_6 | not started |

## Files created this run
- `00_target_and_constraints.md`
- `01_system_ownership_audit.md`
- `02_workflow_contradictions.md`
- `03_stale_control_map.md`
- `13_run_manifest.md`

## Hard rules for this run
- Stage 0 is read-only for active systems. No canon / skill / control / AGENTS / CLAUDE edits.
- Only temp working records in this folder may be written.
- No Act I prose.
- Do not advance a stage until its acceptance gate passes.

---

## STAGE 0 FINAL OUTPUT (2026-09-10)

1. **Temp run path:** `canon/_working/.tmp/story_runs/progressive_preproduction_2026-09-10/`
2. **System ownership map:** `01_system_ownership_audit.md` — 26 capabilities. ~13 KEEP, 2 PATCH (stale), 11 PORT_CANDIDATE, 0 fully unowned, 0 NEW.
3. **Workflow contradictions:** `02_workflow_contradictions.md` — C1 layer-skip vs ungated scene-lab (HIGH), C2 four-act-gate vs incremental goal (HIGH, AUTHOR GATE), C3 "fill routine" vs "no invented bridges" (MED), C4 read-order drift (LOW), C5 scratchpad convention (MED), C6 overlapping sync skills (LOW-MED), C7 author-question format drift (LOW).
4. **Stale/empty control owners:** `03_stale_control_map.md` — STALE: CONTROL_OBJECTIVES_MASTER, GROUP_WORLDVIEW_CONFLICT_MAP. PARTIALLY_STALE: CROSS_ACT_CONTROL_LAYERS, HARD_CONSTRAINTS_TABLE, KNOWLEDGE_DEPENDENCY_MAP, RELEVANT_FILES_TABLE, CONSIDERATIONS_REGISTER, BEAT_SHEET_SOURCE_MANIFEST, canon_fact_map/. Empty: ACT_IV_OUTLINE, ACT_II/III/IV_BEAT_SHEET.
5. **Codex/Claude drift:** `.agents` = strict subset of `.claude`. PORT candidates: sequence-boundary-designer, a Beat-Sheet-layer owner, character-state/knowledge/relationship cluster, run-workspace-manager, change-impact/downstream auditors, voice-designer/speaking-state, dialogue-readiness-gate, user-discussion-agent.
6. **Files likely to need PATCH:** `AGENTS.md` (C4), `canon/_working/story_construction/CONTROL_OBJECTIVES_MASTER.md`, `GROUP_WORLDVIEW_CONFLICT_MAP.md`, `CROSS_ACT_CONTROL_LAYERS.md`, `HARD_CONSTRAINTS_TABLE.md`, `KNOWLEDGE_DEPENDENCY_MAP.md`, `RELEVANT_FILES_TABLE.md`, `CONSIDERATIONS_REGISTER.md`, `BEAT_SHEET_SOURCE_MANIFEST.md`, `canon_fact_map/*` (delta). Possibly `CLAUDE.md` (only if author changes C2 rule).
7. **Skills likely to need PATCH:** `.agents/skills/story-router` + `story-orchestrator` (add progressive Act→Sequence→Beat→Scene mode + layer-state precondition), `story-scene-lab` (entry gate: refuse Scene grain unless layer state permits or `[DRAFT ONLY]`), `story-context-manager` (per-run folder scratchpad), `story-outline-synthesis-gate` + `story-room` (routine-vs-high-impact classifier), author-question-format echo pass across skills.
8. **PORT candidates (not NEW):** see item 5 — port behavior from named `.claude` skills into `.agents` owners where the progressive workflow needs them and no `.agents` owner exists.
9. **Proposed NEW permanent artifacts:** **0.** Beat-Sheet-layer ownership (#5) is the only genuine risk of needing NEW; first attempt = PATCH `story-scene-lab` (add a Beat-Sheet-grain mode) or EXTEND `story-outline-synthesis-gate`. Decide in Stage 4 with evidence.
10. **Stage 1 plan:** Run `story-canon-sync-gate` (v3) across the full relevant document set to build a freshness+authority ledger and arbitrate the 5 overlapping full-outline artifacts + canon vs working deltas; produce atomic-claim current-fact list; auto-apply only safe low-risk writebacks; queue high-risk conflicts for author. Deliver `04_source_freshness_and_factmap_delta.md` + `05_author_gate_conflicts.md`. Do NOT rebuild outline; do NOT touch Act IV.

**BLOCKER carried to author:** C2 — does "Act I down to dialogue now" mean a `[DRAFT ONLY — NOT CANON]` sandbox (keeps the four-act gate), or a real relaxation of the "all four Act Beat Sheets approved before any Scene" rule? Stage 4 routing design depends on this answer.

STAGE_0_STATUS = PASS_CANDIDATE
