# 08 實際跑過嘅驗證（POST_HOC；全部喺 2026-10-03 session）
| 腳本／操作 | 輸出 | 結果 | 錯誤／限制（保留） |
|---|---|---|---|
| 抽 transcript→raw_agent_extracts（7×3 檔） | tool call：A59／B87／C76／D50／E62／F60／G27 | 任務 prompt 有保存 | 由 session JSONL 後抽，非即時記錄 |
| scripts/blindness.py v1 | **作廢（已被 v2 覆蓋，輸出冇保留）** | 誤報：regex lookahead 唔識 JSON 轉義路徑；Write／Edit／回覆文字被當讀取 | 保留記錄；v1 結論唔可引用 |
| scripts/blindness.py v2 | blindness_raw_output.txt | 見 07 | C seq65／G seq20 假陽性；只查路徑／內容暴露，唔能查「用咗冇」 |
| Bash heredoc 寫 python（兩次） | SyntaxError；sed/python 補丁因 heredoc 食反斜線產生 `\x07gent` | 改用 Write tool＋os.path.join | 錯誤保留喺此 |
| scripts/cells.py | cells_raw_output.txt、04_cell_rows_raw.csv | A99／B57／C101／D64／E69＝390；FINDING 165；NA 24；NEEDS_AUTHOR 23 | verdict 取最右首個 verdict 開頭欄 → 漏角度 21／26 H1 行；`full` 截 600 字；「攻擊」字眼 heuristic 錯（見 04A） |
| unparsed_raw_output.txt | 約 70 行未解析 | 唔係全部都係格 | 冇單一精確原始格總數 |
| coverage_raw_output.txt | 28 角度逐組行數 | 全有格；H 組 21／26 顯示 MISSING＝parser 錯 | 人手 grep 補證 |
| idcheck_dup_raw_output.txt | 56／56 ID 存在；重複只在 verdict 標籤 | 無 invalid 重複格 | 只比前 60 字 |
| v3_vs_ledger_raw_output.txt | 輸入 22 行 vs §14.2：0 行逐字吻合 | **inconclusive 原因＝輸入包係合成**（見 06） | 之前以 L193–226 切片判斷係範圍錯 |
| 手動 grep 5 條 BLOCKS／K→diff／hash | 見 05、06、01_02 | | |
**未做**：逐 beat 覆蓋檢查、合併問題重數（~32）、輸入包與 v3 語義逐行比對、重跑 agent（作者明令唔做）。
