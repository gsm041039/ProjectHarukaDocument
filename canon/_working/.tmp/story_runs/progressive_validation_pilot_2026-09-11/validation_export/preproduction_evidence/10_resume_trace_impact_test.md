# 10 — Resume / Trace / Change-Impact Test (Stage 5)

No new dependency DB created. Uses `PROJECT_STATUS` / `NEXT_ACTION` / `SESSION_LEDGER` / `QUESTION_QUEUE` / `QUESTION_MATRIX` / CDL / Fact IDs / Act-Beat refs / `story-run-workspace-manager` workspace / repo search.

## Resume state — what must be recoverable
| Field | Source it lives in |
|---|---|
| current target | `PROJECT_STATUS` Current Workflow Snapshot + `NEXT_ACTION` |
| current refinement layer | NEW: `NEXT_ACTION` should carry `Layer: <Act outline / Sequence / Beat Sheet / Scene / Dialogue>` for progressive runs. **Recommended micro-field**, not a new file. |
| last accepted parent | Act Outline version tag (e.g. Act I `v1.21 [APPROVED 2026-04-09]`) + Beat Sheet per-beat `[APPROVED — 日期]` |
| current child artifact | the `ACT_[x]_BEAT_SHEET.md` / scene workbook path in the run workspace `10_run_manifest.md` |
| open author decision | `QUESTION_QUEUE.md` (blocked/deferred) + run `05` |
| provisional assumptions | run workspace `02_canon_reconciliation.md` + `PROVISIONAL` tags in the artifact |
| unresolved dependencies | `QUESTION_QUEUE` + per-beat `BLOCKED_AT_THIS_DEPENDENCY` tags |
| next safe action | `NEXT_ACTION.md` (single step, as always) |
| affected downstream work | `story-downstream-consistency-auditor` on demand; not stored |

**Change needed:** add an optional `Layer:` + `Run workspace:` line to `NEXT_ACTION.md` when a progressive run is active. Not applied this run (no active progressive run yet); noted for the first real Act I Beat Sheet round to add.

## Trace test (walkthrough — Act I, real data)
- **Upstream → down:** `CONSIDERATIONS_REGISTER #01` (主題驅動：面對命運時態度最重要) → Act I Outline 總覽 "主題起點 TC-01 低鳴（連結的價值×傲慢救世主）" → Beat 1 (E-01) "晴香『無論如何都能笑』性格引入（主題種子）" + Beat 2.5 (E-02.5 珍寶珠) "天真善意係隊伍建立的真正超能力" → [Beat Sheet layer, to build] each beat's `emotional value shift` / `theme carrier` field → [Scene layer] E-02.5 SCENE_REFERENCE lines 148–160.
- **Down → up:** Act I Beat Sheet E-01 `SCENE 2 裝置緊急交付` → why does it exist? → Act I Outline Beat 1 "美夜子 E-01緊急裝置交付 (CDL-109)" → CDL-109 → obligation: establish 美夜子 "口說工具、靈魂本能守護" duality (CDL-054/055/060) + 晴香 持續入隊機制 命中拯救者情結 (CDL-053/055). Satisfies control line: 美夜子 relationship arc seed + 晴香 拯救者情結 plant (→ Act III payoff, Plant-A line 288).
- Trace uses existing CDL / Beat IDs / file refs. No sentence atomization needed.

## Change-impact test (simulated)
**Scenario:** author changes a major upstream decision — e.g. "E-XX 夕整合 form D → changed" (hypothetical).
| Downstream | Classification |
|---|---|
| Act I Outline Beat 6 (E-XX) L1/L2/L3 rows | `INVALIDATED` — rewrite |
| Act I Outline Plant-A line 296 (E-XX → Act IV 夕消散) | `REVALIDATE` |
| Act I Outline Plant-A line 299 (膠布哲學 → E-XX 放下膠布) | `PATCH_REQUIRED` |
| Act I Beat Sheet beats 0/0c/0d/1/2/2.5/2.6/3/4.2/4.5/5 | `NO_CHANGE` (E-XX is terminal in Act I) |
| `KNOWLEDGE_DEPENDENCY_MAP` AKS-H1 row | `REVALIDATE` |
| Act III (2nd 改變現實幻象, CDL-093) | `AUTHOR_REVIEW_REQUIRED` |
Only E-XX + its explicit plants regenerate. The other 11 Act I beats are untouched. `story-character-change-impact-manager` + `story-downstream-consistency-auditor` own this pass.

## Source-use audit (sample task = "build Act I Beat Sheet Beat 0")
| Source | Use class |
|---|---|
| Act I Outline Beat 0 rows | `DIRECTLY_CONSTRAINED_OUTPUT` |
| `haruka.md` 幽靈重量 / 出門前行為 | `DIRECTLY_CONSTRAINED_OUTPUT` |
| `akiho.md` 家中存在感 / 聲音破綻 | `DIRECTLY_CONSTRAINED_OUTPUT` |
| `backup/screenwriter/03_Worldview_Setting.md` 維多利亞城 | `INFORMED_DESIGN` |
| `backup/screenwriter/09_Character_Senses_Private_Habits_Setting.md` | `INFORMED_DESIGN` |
| `10_gameplay_bible.md` Act I 開場關卡 | `CHECKED_NO_VISIBLE_EXPRESSION_REQUIRED` (Beat layer ≠ level design) |
| CDL-126/127/128/131/132/171/180 | `DIRECTLY_CONSTRAINED_OUTPUT` |
| `HARD_CONSTRAINTS_TABLE.md` (stale banner) | `CHECKED_NO_VISIBLE_EXPRESSION_REQUIRED` + revalidate flag |
| Beta-world discussion log | `SUPERSEDED`? No — `NOT_APPLICABLE` to Beat 0 (opening domestic scene). |
`IGNORED_WITHOUT_REASON = 0.`

## Stage 5 acceptance — fresh-session simulation
User says only: **"繼續上次 Act I。"**
Expected recovery path: `story-resume` reads state files → `PROJECT_STATUS` says main blocker Act IV Outline, but a progressive Act I run would have left `NEXT_ACTION` Layer=Beat Sheet + run workspace path → orchestrator Progressive Mode resumes at Act I Beat Sheet, beat = next un-`[APPROVED]` beat, without re-asking the author anything already in the outline.
**Status: PASS (by design)** once the first progressive round writes the `Layer:` + `Run workspace:` line to `NEXT_ACTION.md`. Until then, resume recovers to "Act I Beat Sheet is the next layer" from the outline's own line 378 (`下一層：Act I Beat Sheet`) + Beat Sheet self-label — still no author re-query needed.
