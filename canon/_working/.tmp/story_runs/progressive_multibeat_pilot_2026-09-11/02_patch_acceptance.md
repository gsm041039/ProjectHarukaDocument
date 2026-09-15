# 02 — Part A Acceptance Test

Design-level verification against the actual patched text (see `01_patch_diff.patch`), before starting Part B.

| Test | Requirement | Verification against patched text | Result |
|---|---|---|---|
| **Beat-grain test** | Exact timing/shot detail gets demoted to downstream reference | `story-room` §Beat-grain 分類: "判斷準則係細節本身係咩，唔係佢喺邊個檔案度出現... 唔可以因為佢『本來已存在』就照搬入 Beat Sheet body" + mandatory `DOWNSTREAM REFERENCES` template with `Directing Reference: ~10秒` / `Scene Reference` examples | **PASS** |
| **Cost Signal test** | Baseline Beat can be `NOT_APPLICABLE_WITH_REASON` | `consequence-driven-progression.md` new §Cost Signal Applicability Classification: `COST_SIGNAL_NOT_APPLICABLE` explicitly listed with "純底色建立/氣氛...must record reason"; risk flag narrowed to "任何 `COST_SIGNAL_REQUIRED` 嘅 Beat" only | **PASS** |
| **Source retrieval test** | No blind backup sweep | `BEAT_SHEET_SOURCE_MANIFEST.md` + `story-source-recovery-gate.md` both: "Tier 3 ... 只喺有觸發先讀 ... 唔可以逢 beat 都 blind sweep 成個 backup/ 目錄" | **PASS** |
| **Obligation test** | Skipped category is explicitly N/A/deferred/blocked | `story-room` §Obligation Pass: 9 named categories, "唔可以省略任何一類", `NOT_RELEVANT_WITH_REASON` requires a written reason | **PASS** |
| **Continue test** | No-author-question Beat automatically proceeds | `story-orchestrator` §Continue-by-Default: explicit ban on "想唔想我繼續" / "要唔要先睇" / "呢個OK嗎"; only 5 named stop conditions | **PASS** |
| **Pilot safety test** | Test mode cannot mutate durable production state | `story-orchestrator` §Run Mode: PILOT/EXPERIMENT "唔可以 mutate PROJECT_STATUS.md / NEXT_ACTION.md / QUESTION_QUEUE.md / 已批核 Act 檔 / 已批核 Beat Sheet / CANON_DECISION_LOG.md，除非作者事後明確話要 promote" | **PASS** |

## Verdict
`PATCH_1_PASS` at the design-verification level (text-level checks). Behavioral confirmation happens live during Part B (`13_continue_by_default_audit.md`, `12_multibeat_grain_audit.md`, `14_resume_test.md` in the pilot folder) — this file only confirms the patched rules exist and say the right thing; Part B proves they're actually followed.

Proceeding to Part B.
