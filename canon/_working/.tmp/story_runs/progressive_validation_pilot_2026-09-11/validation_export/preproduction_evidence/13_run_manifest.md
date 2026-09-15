# Run Manifest — Progressive Preproduction Pack

- Run ID: `progressive_preproduction_2026-09-10`
- Run folder: `canon/_working/.tmp/story_runs/progressive_preproduction_2026-09-10/`
- Started: 2026-09-10
- Executing agent: **Claude Code — this IS the active production runtime** (see Runtime frame below)
- Story state at start: Round 184 (PROJECT_STATUS). Main blocker = Act IV Outline 正式設計.

## Runtime frame (author correction, 2026-09-10)
- **Primary runtime = Claude / `.claude/`.** Authoritative workflow = `.claude/skills/` + `CLAUDE.md` + `.claude/story_system/`.
- `.agents/` (Codex) = secondary compatibility reference only. NOT this run's implementation target.
- Stage 0 first pass was re-evaluated under this frame. `01` and `02` rewritten; `00` and `03` annotated.

## Stage progress (full continuous run 2026-09-10)
| Stage | Status |
|---|---|
| 0 — Existing-System Audit | **PASS** (corrected: Claude-authoritative) |
| 1 — Current Truth / Freshness Baseline | **PASS** (`04`, `05`) — fact-map delta scoped, not rebuilt (non-blocking) |
| 2 — Control Reconciliation | **PARTIAL PASS** (`06`) — 7 files banner'd + redirected; deep rebuild = non-blocking follow-up |
| 3 — Production Foundations Readiness | **PASS** (`07`) — all foundations owned, 0 new |
| 4 — Progressive Pipeline Integration | **PASS** (`08`, `09`) — 6 skill/policy patches, G1+G2+C2+C3+C4 resolved, 0 new artifacts |
| 5 — Resume / Trace / Change-Impact | **PASS** (`10`) — 1 micro-field to add on first progressive round |
| 6 — Regression (A–J) | **PASS** (`11`) — 10/10 |
| 7 — Act I Readiness Dry Run | **PASS** (`12`) — highest incomplete layer = Act I Beat Sheet; first question identified |

## Traceability Closure Pass (2026-09-11) — `14_traceability_closure_report.md`
- Fact Map real baseline ≈ **CDL-290** (not the "FINAL" declaration); current head CDL-408; ~119 post-baseline CDLs, ~110 material.
- Canon-side propagation: ~119/119 (writeback discipline held, 8 spot-checks PASS with full provenance chains).
- Fact-Map-side propagation: 0/~110 → `STALE_FACTS_MARKED_CURRENT > 0` systemic.
- Closure targets: 2/4 green. Orphan current canon claims = 0; build-time provenance held; no *unexplained* propagation gap; but stale-facts target not zeroable without delta.
- Updated (existing files only): `canon_fact_map/BUILD_LEDGER.md`, `FACT_MAP_FINAL_STATUS.md`, `CLAIM_INDEX.md`, `DOC_REGISTER.md`. No new Fact Map, no new registry. No canon `*.md` edited.
- **VERDICT: `CURRENT_CANON_TRACEABILITY_PARTIAL`** — primary chain (canon → inline CDL → CANON_DECISION_LOG → author decision) CLOSED; Fact Map delta is a known, documented, non-author-blocked follow-up (`story-canon-fact-map-builder` INCREMENTAL, baseline CDL-290 → HEAD). Does not block Act I Beat Sheet.

## FINAL READINESS STATE
`PARTIALLY_READY_WITH_NONBLOCKING_GAPS`
- Ready: progressive Act→Sequence→Beat→Scene→Dialogue pipeline is routable; Beat Sheet layer has an owner; C2 rule collision resolved and aligned across `CLAUDE.md` + skills; resume/trace/change-impact designed; Act I can start now.
- Non-blocking gaps: (a) deep content reconciliation of 6 stale strategic control docs vs CDL-200→408; (b) fact-map incremental delta rebuild; (c) 1-line Act I Outline stale-label fix (AG-4) needs an author gate. None blocks Act I Beat Sheet work.

## Files created this run
- `00_target_and_constraints.md` (annotated with runtime frame)
- `01_system_ownership_audit.md` (**rewritten** — Claude-authoritative)
- `02_workflow_contradictions.md` (**rewritten** — C2 reframed as Claude-internal)
- `03_stale_control_map.md` (annotated; classifications stand — agent-neutral)
- `13_run_manifest.md`

## Hard rules for this run
- Stage 0 is read-only for active systems. No canon / skill / `CLAUDE.md` / `.claude` / `.agents` edits.
- Only temp working records in this folder may be written.
- No Act I prose.
- Do not advance a stage until its acceptance gate passes.

---

## STAGE 0 FINAL OUTPUT (corrected 2026-09-10)

1. **Temp run path:** `canon/_working/.tmp/story_runs/progressive_preproduction_2026-09-10/`

2. **System ownership map** (`01_system_ownership_audit.md`, Claude-authoritative): 26 capabilities.
   **22 KEEP** (Claude already owns), **2 PATCH** (stale artifacts/data — #11 control files, #14 fact map),
   **2 real system gaps**, **0 needing PORT**, **0 NEW**.

3. **Real system gaps (Claude side):**
   - **G1 — Beat Sheet layer has no routed owner.** CLAUDE.md pipeline layer 2 (每 beat 大方向 / 情感弧 / A-B-C 決定 / CDL 錨點, no dialogue). Closest skills work at scene grain (`story-scene-lab`) or dialogue grain (`story-dialogue-architect`) or outline grain (`story-outline-synthesis-gate`). None produces "Act II Beat Sheet".
   - **G2 — No progressive coarse-to-fine orchestration mode.** Orchestrator/router have CO_DESIGN / SCENE_LAB / DIRECTING_PIPELINE etc. but no mode that tracks per-Act layer state and routes Act → Sequence → Beat Sheet → Scene → Dialogue in order with layer discipline + resume.
   - Sub-owners for every layer *except* Beat Sheet exist (Act = synthesis-gate; Sequence = `story-sequence-boundary-designer` + orchestrator §"Sequence Boundary Must Come First"; Scene = scene-lab / scene-objective-architect; Dialogue = dialogue-architect / dialogue-script / dialogue-readiness-gate; run memory = `story-run-workspace-manager`; change impact = change-impact-manager + downstream auditors). The connective tissue is what's missing.

4. **Workflow contradictions** (`02_workflow_contradictions.md`):
   - **C1** (MED–HIGH): layer discipline in `CLAUDE.md` vs `story-scene-lab`/`story-router` running scene grain with no per-Act layer-state check.
   - **C2** ⭐ (HIGH, AUTHOR GATE): **Claude-internal rule collision.** `CLAUDE.md` says "全四幕 Beat Sheet 完成後才開始 Scene" (硬性規則); `.claude/skills/story-orchestrator` line 49 says "唔可以因為全劇 Beat Sheet 未完成而停止。只可將成品標成草稿／暫定"; `.claude/skills/story-dialogue-readiness-gate` line 31 says "未完成全劇 Beat Sheet 不等於 NOT_READY". The skills already resolve it as draft-OK / canon-approval-NO. Author must confirm this reading and align CLAUDE.md.
   - **C3** (MED): `CLAUDE.md` / orchestrator "補 routine detail" vs `story-outline-synthesis-gate` "不准 invent missing bridges" — no routine-vs-high-impact boundary defined.
   - **C4** (LOW–MED): three overlapping Claude sync skills (`story-canon-sync-gate` / `story-document-synthesis-gate` / `story-canon-reconciliation`) — pick a primary.

5. **Stale / empty control owners** (`03_stale_control_map.md`, agent-neutral):
   - STALE: `CONTROL_OBJECTIVES_MASTER.md`, `GROUP_WORLDVIEW_CONFLICT_MAP.md` (last real edit 2026-04-15, ~CDL-160→408 behind).
   - PARTIALLY_STALE: `CROSS_ACT_CONTROL_LAYERS.md`, `HARD_CONSTRAINTS_TABLE.md`, `KNOWLEDGE_DEPENDENCY_MAP.md`, `RELEVANT_FILES_TABLE.md`, `CONSIDERATIONS_REGISTER.md`, `BEAT_SHEET_SOURCE_MANIFEST.md`, `canon_fact_map/` (last build 2026-06-22).
   - EMPTY (missing artifacts, not stale systems): `ACT_IV_OUTLINE.md`, `ACT_II/III/IV_BEAT_SHEET.md`.

6. **Files likely to need PATCH** (Stage 2+, agent-neutral artifacts):
   `canon/_working/story_construction/CONTROL_OBJECTIVES_MASTER.md`, `GROUP_WORLDVIEW_CONFLICT_MAP.md`,
   `CROSS_ACT_CONTROL_LAYERS.md`, `HARD_CONSTRAINTS_TABLE.md`, `KNOWLEDGE_DEPENDENCY_MAP.md`,
   `RELEVANT_FILES_TABLE.md`, `CONSIDERATIONS_REGISTER.md`, `BEAT_SHEET_SOURCE_MANIFEST.md`,
   `canon/_working/canon_fact_map/*` (delta rebuild).

7. **Skills likely to need PATCH** (Stage 4, Claude side only):
   - `.claude/skills/story-orchestrator` — add progressive coarse-to-fine mode + per-Act layer-state read + layer discipline + align line 49 with resolved C2.
   - `.claude/skills/story-router` — add PROGRESSIVE_AUTHORING mode + routing.
   - Beat Sheet owner (G1) — EXTEND `.claude/skills/story-outline-synthesis-gate` (add beat-sheet mode) OR PATCH `.claude/skills/story-scene-lab` (add Act-beat grain). Choose in Stage 4 with evidence.
   - `.claude/skills/story-outline-synthesis-gate` + `story-room` — routine-vs-high-impact classifier (C3).
   - Light checklist pass: every `.claude` skill honours "no Q1/A/B/C, no internal codes in chat" (C7-lite).
   - `CLAUDE.md` — resolve C2 wording after author gate.

8. **PORT candidates:** **none.** `.agents/` is out of scope; Claude side already owns everything except G1/G2, which are EXTEND/PATCH not PORT.

9. **Proposed NEW permanent artifacts:** **0.** G1 (Beat Sheet owner) first attempts EXTEND/PATCH of an existing skill. NEW only if Stage 4 proves neither host can carry it.

10. **Stage 1 plan:** Pick the primary sync skill (C4) — default `story-canon-sync-gate` v3 — and run it across the full relevant document set to build a freshness + authority ledger; arbitrate the 5 overlapping full-outline artifacts (`FULL_STORY_ROUGH_OUTLINE_V2` / `_v2_LITE` / `TEMP_FULL_STORY_OUTLINE` / `ROUGH_STORY_SKELETON` / `canon/05_story_outline_canon.md`) and canon-vs-working deltas; produce an atomic-claim current-fact list; auto-apply only safe low-risk writebacks; queue high-risk conflicts for author. Deliver `04_source_freshness_and_factmap_delta.md` + `05_author_gate_conflicts.md`. Do NOT rebuild the outline. Do NOT touch Act IV.

---

**BLOCKER carried to author (C2):** Does the author confirm the skills' reading — progressive per-Act
Scene/dialogue work is allowed while Acts II–IV are still at outline, but every output is stamped
`[DRAFT / 暫定 — pending full-story beat lock]` and cannot writeback to canon — and agree to align
`CLAUDE.md` to that? Stage 4 routing design depends on this answer.

STAGE_0_STATUS = PASS_CANDIDATE
