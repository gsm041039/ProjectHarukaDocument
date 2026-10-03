# Audit Debug Evidence Pack — 盲審（agents A–G）有冇真係做到
產生日期 2026-10-03｜性質：證據包，唔係審核結論｜唔改任何舊檔（§15.1、skill、blind_audit/* 全部原狀）

## 0. 先講清楚三件事
1. **「Audit Debug Export Prompt」我見唔到**：作者話「附上」，但呢個 session 冇收到附件、repo 入面亦搵唔到。呢個包係按作者文字描述（匯出項目 1–8 ＋ 三個標籤 ＋ ≤3 項 skill 修正）整嘅，**唔等於**照原 prompt 逐條做。如果原 prompt 有額外欄位，要重貼。
2. **標籤**：`CAPTURED`＝當時留低、而家原樣引用；`NOT_CAPTURED`＝當時冇記錄；`POST_HOC_VERIFICATION`＝而家用腳本／人手補查，唔代表當時做過。
3. **隱藏思考過程**：冇輸出、亦冇重建。只放可核對來源、簡短判斷、反證、實際操作。

## 1. 檔案索引
| 檔 | 內容 | 標籤 |
|---|---|---|
| 01_protocol_and_inputs/ | 協議、輸入包、angle-system.md、blind-angle-audit-protocol.md 原樣副本 | CAPTURED（檔案）；「審核當時係邊個版本」＝NOT_CAPTURED，見 §3 |
| 01_02_hashes_mtimes.md | 上列＋A–G 報告＋任務 prompt 嘅 sha256／mtime | POST_HOC |
| 02_agent_reports/ | A–G 7 份報告原樣副本 | CAPTURED |
| raw_agent_extracts/ | 每個 agent 嘅任務 prompt、tool call 序列（seq／時間／工具／input／結果長度）、搜尋結果 | CAPTURED（由 session transcript 抽出，非即時記錄） |
| 03_angle_map.md | 28 角度→agent 對照 | 取自任務 prompt（CAPTURED）＋POST_HOC 核 |
| 04_expected_vs_actual.md | 預期 vs 實際檢查表；原始格／去重／核實／未解 blockers 四分法 | POST_HOC |
| 04_cell_rows_raw.csv | 390 行機械解析原始格 | POST_HOC |
| 05_finding_merge.md | 發現合併表 | POST_HOC |
| 06_K_to_diff.md | K 問題→實際 diff 追蹤 | POST_HOC |
| 07_blindness_record.md | 盲度紀錄 | POST_HOC（由 tool log 推） |
| 08_verification_results.md | 實際跑過嘅腳本同原始輸出（含錯誤版本） | POST_HOC |
| 09_minimal_skill_fixes.md | 最多三項有實證嘅最小修正建議（未改 skill） | 建議 |

## 2. 原有錯誤（保留，不修舊檔）
- ledger §15.1 嘅格數／無效格數字：**當時冇存機械推導**（NOT_CAPTURED）。§15.1 原文原樣保留喺 DERIVATION_LEDGER.md L282–286，對照見 04。
- 「APPLIED」＝只係記入 §15.4 patch list；**冇一份獨立嘅 Beat v3.1 表**（見 06）。
- 當時 §15.1 話「無效格 0」「E/C/D 有 18 行誤報人手核過」：人手核過呢步冇留紀錄（NOT_CAPTURED）。

## 3. 時間線異常（只記事實，唔下結論）
- 輸入包 mtime 18:14；A–E 報告 mtime 20:46–20:51，F 18:31，G 20:47。blind-angle-audit-protocol.md mtime 20:42（輸入包之後）；angle-system.md 18:17。
- 所以：agents 讀 angle-system.md／protocol 時係邊個版本＝**NOT_CAPTURED**；而家嘅檔係 POST_HOC。唯一可確定：而家兩份檔 sha256 見 01_02_hashes_mtimes.md。
