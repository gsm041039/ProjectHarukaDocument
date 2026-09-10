# Project Haruka — Progressive Story Preproduction Pack

## 目的

呢個 pack 唔係叫 Codex 一次過重構成個 repo。

佢係一套 **Stage-Gated 前期製作流程**，目標係將現有 ProjectHarukaDocument 整理到：

> 作者可以講「由 Act I 開始，由粗到幼一步一步做」，AI 就會自動讀現有資料、判斷而家去到邊一層、補齊 relevant context、處理舊資料／衝突，只喺真正需要導演決策時先問作者，然後逐層由 Act → Sequence → Beat → Scene → Dialogue。

## 不變原則

- 不改現有 folder structure。
- 不重做已有 Canon / Fact Map / story_control 系統。
- 不為「架構靚」而新建 parallel system。
- active owner file stale → 優先原檔 reconcile / patch。
- backup/archive 只係 historical/provenance，不係 current truth。
- 每個 Stage 都有 working record + acceptance gate。
- 未過上一 Stage，唔好跑下一 Stage。
- 任何新永久 skill/file 都要證明現有 owner 無法承擔先可以新增。
- Codex 主要改 `.agents/`；`.claude/` 只作較新能力參考，除非 repo 規則同本 task 明確批准修改。
- 暫存施工資料用現有 `canon/_working/.tmp/story_runs/` convention。

## 建議 run workspace

第一個 prompt 會要求 Codex 建：

`canon/_working/.tmp/story_runs/progressive_preproduction_<date-or-run-id>/`

所有 Stage 共用同一個 run folder，唔好每個 Stage 再開一個新 project。

建議 working records：

- `00_target_and_constraints.md`
- `01_system_ownership_audit.md`
- `02_workflow_contradictions.md`
- `03_stale_control_map.md`
- `04_source_freshness_and_factmap_delta.md`
- `05_author_gate_conflicts.md`
- `06_control_reconciliation_ledger.md`
- `07_foundation_readiness.md`
- `08_progressive_routing_design.md`
- `09_implementation_ledger.md`
- `10_resume_trace_impact_test.md`
- `11_regression_results.md`
- `12_act_i_readiness_dry_run.md`
- `13_run_manifest.md`

呢啲係 TEMP WORKING RECORDS，唔係 Canon。

## 執行順序

1. Stage 0 — Existing-System Audit Only
2. Stage 1 — Current Truth / Canon Freshness Baseline
3. Stage 2 — Existing Story-Control Reconciliation
4. Stage 3 — Production Foundations Readiness
5. Stage 4 — Progressive Coarse-to-Fine Workflow Integration
6. Stage 5 — Resume / Trace / Change-Impact Hardening
7. Stage 6 — Regression + Act I Black-Box Readiness
8. `16_START_ACT_I_AFTER_ALL_GATES_PASS.md` — 真正開始同作者逐步做 Act I

## 每個 Stage 點用

1. 將該 Stage prompt 整份貼畀 Codex。
2. Codex 完成後，唔好即刻跑下一 Stage。
3. 用同 Stage 對應嘅 Acceptance 文件逐項驗。
4. FAIL → 叫 Codex 修同一 Stage，唔好跳級。
5. PASS → 先去下一 Stage。

## 最終成功唔係「文件多咗」

最終成功要用普通作者操作驗：

> 「我想由 Act I 開始，由粗到幼一步一步做，最後做到有對話 scene。」

系統應：
- 唔由零重做已有 Act I；
- 唔直接寫對白；
- 唔叫作者重新提供 repo 已有資料；
- 自己搵 relevant current evidence；
- 先解 stale / conflict；
- 自己補 routine story design；
- 只問真正 high-impact 導演問題；
- 問法係白話；
- 每次答完可 resume；
- 由粗到幼逐層推進。

只有做到呢個，先叫 READY。
