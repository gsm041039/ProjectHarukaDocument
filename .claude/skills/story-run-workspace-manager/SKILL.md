---
name: story-run-workspace-manager
description: Creates and maintains resumable temporary production files for long story runs, compresses evidence, records skill calls, and prevents context-window loss.
---
# story-run-workspace-manager — Resumable Temp Production Workspace

Task:
$ARGUMENTS

## Resumable Run Rule (vNext.2 P-1)
When a job contains several independent cases, multiple conditions, or large source bundles, run it as: `persistent workspace → bounded phase → checkpoint → fresh context`.
- At each checkpoint update: RUN_STATE current phase | completed work | unresolved | next action | the phase SUMMARY.
- vNext.2.3 completion truth: a step is complete only if its output file exists, is non-empty, parses, and (when validation is required) the validator says PASS; otherwise record `TASK_OUTPUT_MISSING_OR_INVALID` here. A subagent saying DONE is not evidence.
- Raw outputs stay in files. Parent / subagent handback stays short (verdict + file path).
- Never require one model context to finish a large audit or evaluation.

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
- `11_candidate_board.md`（見下 Candidate Board）
- `12_change_ledger.md`（vNext；見下 Change Ledger）

## Manifest
記錄：run id、user request、target artifact、status、files read、skill call sequence、artifacts、open dependencies、next resume action、`CURRENT_LAYER`/`LAYER_STATUS`/`DIRECTOR_REVIEW`/`TRANSITION_ALLOWED`/`NEXT_LAYER`（見下 Director Layer Gate State）。

## Candidate Board（Patch 3）
`11_candidate_board.md` 持久化 `story-solution-space-designer` / orchestrator 產生嘅候選方案推理，唔係 Canon database，只喺呢個 temp run workspace。每行記錄：
```text
Problem | Experience Target | Candidate | Status | Why | Rejected Reason | Parked Reason | Reconsider When | Selected Carrier | Dependencies | Potential Future Reuse
```
Status 值：`GENERATED / SHORTLIST / SELECTED / SELECTED_SUPPORT / COMBINED / PARKED / REJECTED / SUPERSEDED`。
- 任何 `REJECTED` 候選必須有 `REJECTED_REASON`。
- 任何 `PARKED` 候選必須有 `PARKED_REASON` + `RECONSIDER_WHEN`。
- Resume（`story-resume`）讀呢個檔嗰陣，`REJECTED`/`PARKED` 候選唔可以喺下一輪被靜靜重新提出，除非 `RECONSIDER_WHEN` 條件已成立。

## Change Ledger（規則：`.claude/story_system/gap-admission-and-scope.md` §10）
工作區要分清六樣嘢，唔可以混喺 candidate board 一個 Status 欄：`candidate issue`／`adjudicated issue`（admission verdict）／`author decision`／`planned patch`／`actual target modification`／`verified resolution`。Candidate Board 嘅 `SELECTED` 唔等於改咗任何檔。
`12_change_ledger.md` 每行：
```text
Item | Source (exact file+anchor/version) | State | Admission verdict | Target path | Anchor/version | Before evidence | Actual diff / quoted after | Verification (vs ORIGINAL problem) | Next action | Unresolved author decision
```
State 值：`DISCOVERED / ADJUDICATED / AUTHOR_PENDING / PATCH_PLANNED / APPLIED_TO_TARGET / VERIFIED / REJECTED / SUPERSEDED`。
- `PATCH_PLANNED`＝只存在於 board／建議／patch list／proposed diff；報告唔可以寫「已改入」「applied」。
- `APPLIED_TO_TARGET` 必須有 target path、anchor/version、before evidence、實際 diff；缺任何一項就停喺 `PATCH_PLANNED`。
- `VERIFIED` 必須喺改動後對**原本個問題**重新驗證（唔係淨係確認文字改咗）。
- Checkpoint 必須帶：exact source/version、next action、未解決嘅作者決定、實際 target 改動（唔係計劃）。呢個 ledger 係 run 記錄，唔係另一個 Canon database；唔寫 durable 檔（仍然由 `story-writeback` + RUN_MODE 擋）。

## Director Layer Gate State（Patch 3）
Manifest 必須追蹤：
```text
CURRENT_LAYER
LAYER_STATUS       (INTERNAL_COMPLETE / IN_PROGRESS / BLOCKED)
DIRECTOR_REVIEW    (PENDING / GRANTED)
TRANSITION_ALLOWED (YES / NO)
NEXT_LAYER
```
只有使用者/Director 可以將 `DIRECTOR_REVIEW` 由 `PENDING` 轉 `GRANTED`、`TRANSITION_ALLOWED` 由 `NO` 轉 `YES`（自然語言批准即可，例如「可以落下一層」「Beat Sheet OK」「做 Scene」「繼續下一層」）。呢個 workspace manager 本身只負責記錄呢個狀態，唔負責判斷或代替 Director 批准——background agent 同任何 specialist skill 都唔可以自行解鎖。

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

## RUN_MODE Label（2026-09-11 新增）
`00_target_contract.md` / manifest 必須寫低本次 run 嘅 `RUN_MODE`：`PRODUCTION` / `PILOT` / `EXPERIMENT`（由 `story-orchestrator` 宣告）。`PILOT`/`EXPERIMENT` 嘅所有輸出（Beat 候選、decision、trace）一律標 `TEST_ONLY` / `NOT_AUTHOR_APPROVED`，只落呢個 temp workspace，唔傳去 `story-writeback`。任何試圖將 `PILOT`/`EXPERIMENT` 輸出寫入 durable production state（5 個 state 檔 / 已批核 Act/Beat Sheet / canon / CDL）嘅動作，一律由 `story-writeback` 嘅 RUN_MODE 入場條件擋（`WRITE_BLOCKED_BY_RUN_MODE`），呢個 workspace 本身唔負責寫 durable 檔，只係唔應該假裝 PILOT 輸出可以直接生產。
