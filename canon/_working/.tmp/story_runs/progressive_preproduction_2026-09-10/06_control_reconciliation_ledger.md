# 06 — Control Reconciliation Ledger (Stage 2)

## What was done this run
Freshness banners added in-place to 7 control artifacts (no content rewrite, no replacement, no new registry):
| File | Banner class | Anchor for revalidation |
|---|---|---|
| `story_construction/CONTROL_OBJECTIVES_MASTER.md` | STALE | CDL-408 + Round 184 |
| `story_construction/GROUP_WORLDVIEW_CONFLICT_MAP.md` | STALE | CDL-408 + `IDEOLOGY_THEME_STANCE_MATRIX.md` (fresher) |
| `story_construction/CROSS_ACT_CONTROL_LAYERS.md` | PARTIALLY_STALE | Round 184 + CDL-408 |
| `story_construction/KNOWLEDGE_DEPENDENCY_MAP.md` | PARTIALLY_STALE | CDL log + QUESTION_QUEUE |
| `story_construction/HARD_CONSTRAINTS_TABLE.md` | PARTIALLY_STALE | CDL-408 (esp. ending / Haruka final state / Alpha-Beta / livestream / Act III→IV) |
| `story_construction/RELEVANT_FILES_TABLE.md` | PARTIALLY_STALE + Status column voided | per-run read state → workspace, not this file |
| `story_construction/CONSIDERATIONS_REGISTER.md` | PARTIALLY_STALE | Round 184 |
`BEAT_SHEET_SOURCE_MANIFEST.md` also annotated (story-room Beat Sheet mode formalized + Local Vertical Refinement note).

## What was NOT done (honest gap — non-blocking follow-up)
Full content reconciliation of these strategic docs against 416 CDLs + Rounds 120–184 is a multi-session task and was not attempted here. It does **not** block Act I Beat Sheet work (Act I outline v1.21 + character sheets are current and self-sufficient for that layer).

**Follow-up task (recommended owner + order):**
1. `story-canon-sync-gate` (PRIMARY, per C4) → `CONTROL_OBJECTIVES_MASTER.md` rebuild from evidence: which growth/relationship/reveal/theme/Act-obligation lines lack a dramatized carrier, as of CDL-408. Keep it an index, not a Bible.
2. `story-canon-fact-map-builder` incremental → fact map delta (see `04`).
3. `story-room` (or sync-gate) → `HARD_CONSTRAINTS_TABLE.md` line-by-line: confirm/patch ending meaning, Haruka final state, Alpha/Beta rules, character survival/death, timeline major ordering, livestream infrastructure, Act III→IV transition, reveal restrictions against CDL-408.
4. `CROSS_ACT_CONTROL_LAYERS.md` → refresh Act IV rows + relabel Stable/Unstable.
5. `GROUP_WORLDVIEW_CONFLICT_MAP.md` → fold in Beta-world / 見證守則 / 操控奇蹟鏈 / institutional reframes.
6. `KNOWLEDGE_DEPENDENCY_MAP.md` → add Round 120–184 reveal lines.

## Stage 2 acceptance spot-checks (partial — honest)
| Question | Can the current control layer answer it correctly today? |
|---|---|
| What is Haruka's current final-state definition? | **NOT from HARD_CONSTRAINTS_TABLE alone** (stale). Answerable from `canon/03_characters/haruka.md` + CDL-407 (個體化完成) + Act I Outline Plant-A "Act IV: 膠布全面放下 = 個體化完成". Banner now tells the reader to go there. |
| What can the audience know during Act I? | **YES** — Act I Outline AKS progression table (H0→S0→A0→H1) is APPROVED and precise. |
| Which current obligations lack carriers? | **NO** — CONTROL_OBJECTIVES_MASTER is stale; needs follow-up rebuild. |
| Which sources should an Act I Beat task prioritize? | **YES** — `BEAT_SHEET_SOURCE_MANIFEST.md` (annotated this run) + Act I Outline v1.21 + per-character sheets. |

Stage 2 status: **PARTIAL PASS** — reader is now protected from stale major truth by banners + redirect; deep rebuild queued as non-blocking follow-up.
