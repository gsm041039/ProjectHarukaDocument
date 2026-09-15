# 04 — Source Freshness & Fact Map Delta (Stage 1)

## Current truth baseline (read this run)
| Source | As-of | Key fact |
|---|---|---|
| `PROJECT_STATUS.md` | Round 184 / 2026-09-10 | Main blocker = Act IV Outline 正式設計 (unchanged since ~Round 160). Round 184 = miyako 八千代型 reframe writeback (CDL-408). Round 183 psychology-embodiment discussion BLOCKED on author A–G. |
| `NEXT_ACTION.md` | Round 184 | Same. Round 183 A–G still OPEN. |
| `CANON_DECISION_LOG.md` | CDL-408 (416 entries) | Latest = CDL-408 (miyako). CDL numbering audit exists (`CDL_NUMBERING_AUDIT.md`) — past parallel-agent collisions resolved. |
| `QUESTION_QUEUE.md` | 2026-09-09 (working tree M) | QQ-224 PARTIALLY RESOLVED; QQ-217/221/222 open; QQ-03 RESOLVED (CDL-190); QQ-06 DEFERRED→Act IV. |
| `QUESTION_MATRIX.md` | 2026-08-31 / working tree M | Current. |
| Act I/II/III outlines | I v1.21, II —, III v0.6 [APPROVED 暫定] | Act I APPROVED & STABLE at outline layer. Act IV outline missing. |
| Beat sheets | Act I only (E-01/E-02 = `[SCENE REFERENCE]`) | No true Beat Sheet abstraction anywhere. |

## Fact Map delta
- **Last trustworthy Fact Map baseline:** build 2026-06-22 (`canon_fact_map/BUILD_LEDGER.md`, `CHARACTER_FACTS.md`, `TIMELINE_FACTS.md`, `TERMINOLOGY_FACTS.md`, `CHARACTER_NAME_FACTS.md`, `CHARACTER_STATE_FACTS.md`, `CLAIM_INDEX.md`, `COVERAGE_MATRIX.md`, `MISSING_FACT_DIMENSIONS.md`, `TIER_1_MISSING_DIMENSION_TRIAGE.md`). Sub-files `KNOWLEDGE/EVENT/RELATIONSHIP/THEME/WORLD_RULE FACTS` stuck at May 20–Jun 1.
- **Delta window:** ~CDL-200 → CDL-408 (~200 decisions) + Rounds ~120 → 184.
- **Impacted Fact Map domains (needs incremental refresh, NOT full rebuild):**
  | Domain | Impacting decisions (examples) |
  |---|---|
  | TERMINOLOGY / WORLD_RULE | Beta 世界三層 (Round 160, AC-1~11 未正式 CDL 化), 操控奇蹟鏈 (Round 182), 榮格三階段框架 (CDL-407), 靈魂距離光譜 (CDL-406), 解離兵器 reclass (CDL-400), 心之器=心匣 (CDL-404), 情緒病毒→債務侵蝕 (CDL-403, CDL-329作廢) |
  | CHARACTER / CHARACTER_STATE | miyako 八千代型 (CDL-408), miyako 融合 Ambiguous Loss (CDL-345), 秋穗 root-cause 創傷, 紫音 pre-trauma 空白 (QQ-224 F, open), 凜 監控偶像殘影 (CDL-397) |
  | THEME | 見證守則 (CDL-392), 涼薄雙聲道 (Round 156, open), 心理具現化世界物理 (Round 183, open) |
  | EVENT / TIMELINE | 刑思退場, 黑奏=同一枝筆化身 (Round 161b), 哥德惡化跟集體情緒債 (Round 161c–f), 直播/偶像起源最終定案 (CDL-397) |
  | KNOWLEDGE | AKS-S1 = Act II末 Text Prop (CDL-190), authorial-hidden 靈樹 retcon (CDL-401) |
- **Recommendation:** run `story-canon-fact-map-builder` in incremental mode: baseline 2026-06-22 + CDL-200→408 delta → refresh impacted tables only. Estimated a focused pass, not a rebuild. **Not done this run** — flagged as non-blocking follow-up (does not block Act I Beat Sheet work; Act I facts are well-covered by the approved outline + character sheets which ARE current).

## Truth conflict classes (Stage 1 scan — light)
- **AUTO_FIX_SAFE:** control-file freshness banners (done this run — 7 files).
- **AUTO_FIX_MEDIUM:** Act I Outline line 367 `AKS-S1 植入位置 — BLOCKED pending QQ-03` is STALE (QQ-03 RESOLVED via CDL-190, and explicitly "不阻塞 Act I"). Recorded in `05` for author gate since the outline is APPROVED.
- **AUTHOR_GATE:** Round 183 A–G (psychology embodiment) + Round 156 (涼薄/見證) — genuine open story decisions. Recorded in `05`. Neither blocks Act I Beat Sheet structurally (they touch 紫音/美夜子 depth and theme carriers, mostly Act II/III).
- **REJECT_UNSUPPORTED:** none found this run.

## Safe production domains (can proceed now)
- Act I Beat Sheet rebuild from approved v1.21 outline.
- Act I character states (character sheets current; miyako just refreshed).
- Act I knowledge/reveal state (AKS-H0→S0→H1 fully specified in outline).
