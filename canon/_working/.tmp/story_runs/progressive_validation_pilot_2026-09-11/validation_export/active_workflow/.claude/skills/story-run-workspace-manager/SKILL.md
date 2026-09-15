---
name: story-run-workspace-manager
description: Creates and maintains resumable temporary production files for long story runs, compresses evidence, records skill calls, and prevents context-window loss.
---
# story-run-workspace-manager — Resumable Temp Production Workspace

Task:
$ARGUMENTS

## Trigger
STANDARD / MAJOR 任務必須使用；QUICK 任務若讀取超過 3 個大文件或預計超過 8 個 skill calls 亦要使用。

## Create
優先：`canon/_working/.tmp/story_runs/<YYYYMMDD-HHMM_slug>/`
後備：`.claude/.tmp/story_runs/<YYYYMMDD-HHMM_slug>/`

建立：
- `00_target_contract.md`
- `01_source_digest.md`
- `02_canon_reconciliation.md`
- `03_prerequisite_ledger.md`
- `04_detail_decision_ledger.md`
- `05_character_scene_states.md`
- `06_scene_architecture.md`
- `07_dialogue_blueprint.md`
- `08_target_draft.md`
- `09_review_findings.md`
- `10_run_manifest.md`

## Manifest
記錄：run id、user request、target artifact、status、files read、skill call sequence、artifacts、open dependencies、next resume action。

## Context Checkpoints
以下時刻必須落盤：
- source recovery 完成後
- 每 3–5 個 skill calls
- 每個 stage 完成後
- 寫 target draft 前
- review 後
- 回應使用者前

每次只帶 forward：source digest、active contracts、decision IDs、open dependencies。唔好重載所有全文。

## Safety
Temp 文件唔係 canon，唔需 writeback approval；不可覆蓋正式文件。若無檔案寫入權限，喺回應中建立可複製嘅 virtual temp bundle，並清楚標示。
