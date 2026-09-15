# 03 — Control-File Freshness Map (Stage 0)

> **Correction note (2026-09-10):** runtime reframe to Claude-primary does not change this file.
> Control artifacts under `canon/_working/` are agent-neutral; freshness classifications and the
> Stage-2 refresh priority stand as written. All refresh is PATCH-in-place via `.claude` skills
> (`story-canon-sync-gate`, `story-canon-fact-map-builder`, `story-room` for the Gate A/B/C tables).


Reference point: latest canon decision = **CDL-408** (Round 184, 2026-09-10).
"Behind by" = rough gap between file's last real edit and current workflow state.
NO CHANGES MADE. Classification only.

| File | Header build date | Last git edit | Behind by | Classification | Notes |
|---|---|---|---|---|---|
| `story_construction/CONTROL_OBJECTIVES_MASTER.md` | 2026-03-25 | 2026-04-15 | ~5 mo / ~CDL-160→408 | **STALE** | Highest-layer control table. Predates Act III 暫定批核, all Beta-world / Jung / gothic-morphology / psychology-embodiment lines. Cannot be trusted to say "which control line to push". |
| `story_construction/GROUP_WORLDVIEW_CONFLICT_MAP.md` | 2026-03-25 | 2026-04-15 | ~5 mo | **STALE** | Gate B output target. No Beta-world-layers content, no Round 160+ group/institution reframes. |
| `story_construction/CROSS_ACT_CONTROL_LAYERS.md` | 2026-03-25 | 2026-06-19 | ~3 mo / Rounds ~120→184 | **PARTIALLY_STALE** | Per-act control-line tracking. Act I–III rows plausibly usable as skeleton; Act IV rows and "Stable/Unstable" labels almost certainly outdated (Act IV outline still doesn't exist). |
| `story_construction/HARD_CONSTRAINTS_TABLE.md` | 2026-03-25 | 2026-06-19 | ~3 mo | **PARTIALLY_STALE** | Structural rules (HC-1 四幕鐵則 etc.) still valid — these are slow-moving. New AC/CDL constraints from Rounds 120–184 (Beta world, miracle-chain, gothic morphology, 見證守則, miyako reframe) not folded in. |
| `story_construction/KNOWLEDGE_DEPENDENCY_MAP.md` | 2026-03-25 | 2026-06-19 | ~3 mo | **PARTIALLY_STALE** | Self-declares "concept/reveal-level, resistant to event shifts" — core still usable; misses newer reveal lines. |
| `story_construction/RELEVANT_FILES_TABLE.md` | 2026-03-25 | 2026-06-19 | ~3 mo | **PARTIALLY_STALE** | READ/PARTIAL/UNREAD status column is stale; file list mostly still valid. Low-risk to refresh. |
| `story_construction/CONSIDERATIONS_REGISTER.md` | 2026-03-25 (built) | 2026-07-15 | ~2 mo | **PARTIALLY_STALE** | Touched more recently; dimension list is stable by nature. Verify Round 150–184 considerations added. |
| `story_construction/THEME_CONFLICT_EXPRESSION_TABLE.md` | — | 2026-08-11 | ~1 mo | **PARTIALLY_STALE / mostly CURRENT** | Gate C output. Reasonably fresh. Check vs CDL-397→408. |
| `story_construction/IDEOLOGY_THEME_STANCE_MATRIX.md` | — | 2026-08-16 | ~3 wk | **CURRENT-ish** | Gate B output. Recent. Minor delta vs Rounds 175–184. |
| `story_construction/INDIVIDUAL_CHARACTER_GROWTH_TRACKER.md` | — | 2026-08-18 (git); fs 2026-09-10 | days (uncommitted) | **CURRENT** | Gate A output. Modified in working tree this session-era (git status M) — Round 184 miyako reframe. |
| `story_construction/QUESTION_MATRIX.md` | — | 2026-08-31 (git); fs 2026-09-09 | days (uncommitted) | **CURRENT** | Modified in working tree (git status M). |
| `_working/BEAT_SHEET_SOURCE_MANIFEST.md` | — | 2026-06-19 | ~3 mo | **PARTIALLY_STALE** | Read-gate manifest for Beat Sheet work. File list needs verify vs new discussion logs (Beta world, gothic, psychology-embodiment, miyako voice bible). |
| `_working/CROSS_ACT_FORESHADOW_MANIFEST.md` | — | 2026-08-18 | ~3 wk | **CURRENT-ish** | Recent. |
| `_working/canon_fact_map/` (whole dir) | builds May 20 – Jun 22 2026 | 2026-06-22 (last build) | ~2.5 mo / CDL ~200→408 | **PARTIALLY_STALE** | ~200 CDLs of decisions since last build. BUILD_LEDGER, CHARACTER_FACTS, TIMELINE_FACTS, TERMINOLOGY_FACTS last touched 2026-06-22; several sub-files (KNOWLEDGE/EVENT/RELATIONSHIP/THEME FACTS) stuck at May 21. Needs a delta rebuild, not full rebuild. |

## Empty-but-valid owners
- `ACT_IV_OUTLINE.md` — **does not exist**. Owner = `story-outline-synthesis-gate` (act outline mode). This is the project's declared main blocker; not a control-file staleness issue, a missing-artifact issue.
- `ACT_II/III/IV_BEAT_SHEET.md` — do not exist. No routed skill owns the Beat Sheet layer (see 01 audit #5).

## Historical-only (do not treat as current truth)
- `_working/canon_fact_map/BUILD_SUMMARY.md`, `FACT_MAP_PHASE_2_COMPLETION_REPORT.md`, `REMEDIATION_PHASE_COMPLETION_REPORT.md`, `FACT_MAP_FINAL_STATUS.md` — process reports from May–Jun builds.
- `ACT_I_BEAT_SHEET.md` E-01/E-02 — self-labeled `[SCENE REFERENCE]`, explicitly "非正式 Beat Sheet". Historical/reference, not the Beat Sheet layer.

## Redundant candidates
- `FULL_STORY_ROUGH_OUTLINE_V2.md` vs `FULL_STORY_ROUGH_OUTLINE_v2_LITE.md` vs `TEMP_FULL_STORY_OUTLINE.md` vs `ROUGH_STORY_SKELETON.md` vs `canon/05_story_outline_canon.md` — 5 overlapping full-outline artifacts. Freshness/authority arbitration = Stage 1 job (`story-canon-sync-gate`).

## Stage-2 refresh priority (proposed, no action yet)
1. `CONTROL_OBJECTIVES_MASTER.md` (STALE, highest layer — everything routes off it)
2. `canon_fact_map/` delta rebuild (CDL ~200→408)
3. `CROSS_ACT_CONTROL_LAYERS.md` (Act IV rows + relabel)
4. `GROUP_WORLDVIEW_CONFLICT_MAP.md` (STALE Gate B artifact)
5. `BEAT_SHEET_SOURCE_MANIFEST.md` + `HARD_CONSTRAINTS_TABLE.md` (fold in Round 120–184 AC/CDL)
6. Low-risk: `RELEVANT_FILES_TABLE.md`, `CONSIDERATIONS_REGISTER.md`

All refresh work is PATCH-in-place on existing owners. No replacement, no new parallel tables.
