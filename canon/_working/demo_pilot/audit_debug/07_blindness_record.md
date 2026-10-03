# 07 盲度紀錄（POST_HOC；由 tool log 推；v1 腳本結果作廢，見 08）
腳本：scripts/blindness.py（v2）；原始輸出：scripts/blindness_raw_output.txt。只計 Read／Grep／Glob／Bash 為「存取」。
| Agent | Read 次數 | 搜尋次數 | 讀禁讀檔？ | 搜尋結果暴露禁讀路徑 | 暴露內容行 | 首次碰角度／協議 |
|---|---|---|---|---|---|---|
| A | 13 | 44 | 否 | 0 行 | 否 | seq1 |
| B | 17 | 65 | 否 | 11 行（路徑，如 SESSION_LEDGER.md、voice bibles） | 否 | seq1 |
| C | 10 | 63 | 否 | 8 行（含 CDL-259 一行內容：Act 設定檔，非 Beat 結論） | 部分（內容但屬 canon） | seq1 |
| D | 17 | 29 | 否 | 6 行 | 含 REASONING_LOG 摘要行（Gate B 記錄） | seq1 |
| E | 10 | 45 | 否 | 14 行（路徑／目錄名） | 否 | seq1 |
| F | 36 | 23 | 否 | 17 行（含 demo_pilot 檔路徑） | 否 | seq37（符合其「先自找、後對清單」宣告） |
| G | 9 | 16 | 否 | 20 行 | **有**：NEXT_ACTION／QUESTION_QUEUE／SESSION_LEDGER 命中行內容（含 Beat v2、§8、QQ-226 等先前結論） | seq2 |
**限制／反證**
- 腳本標記 C seq65、G seq20 為「搜尋目標含禁讀字串」：C seq65 係 Bash heredoc 寫輸出檔、G seq20 係 Grep 輸入包本身 → **假陽性**，非違規。
- C、D 當時自報披露不足（未講搜尋結果已帶出路徑／行）；F／G 有自報（ledger §15 誠實限制）。
- **結構性洩漏**：CLAUDE.md @import 令所有 agent 預載 angle-system.md 等，故角度 1–19 半盲、20–28 全盲。呢點無法由 tool log 驗（CLAUDE.md 載入唔喺 tool call）＝NOT_CAPTURED，來自設計推論。
- 暴露路徑≠使用；呢度冇證據顯示 agent 用咗禁讀內容作結論，亦冇證據顯示冇。G 係提案員，非審核，影響較小。
