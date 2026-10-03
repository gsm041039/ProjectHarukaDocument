# 09 最多三項有實證嘅最小 skill 修正建議（只係建議，**未改任何 skill**）
## 1. 盲度：由 tool log 出「每 agent 暴露聲明」，加 Grep 路徑排除
**實證**：07——B、C、D、E、F、G 搜尋結果全部帶出 SESSION_LEDGER／NEXT_ACTION 等禁讀路徑；G 有內容行；C／D 自報冇講。
**改**：協議加一句：派 agent 時 Grep／Glob 必須帶 `--glob '!**/{PROJECT_STATUS,NEXT_ACTION,SESSION_LEDGER,QUESTION_QUEUE}.md'` 類排除；收件時由 tool log 機械出暴露表，而唔靠 agent 自報。
**代價**：agent 少搵到 canon 來源，可能增加「無根據」格；**放棄**：寬鬆搜尋方便。**分別**：而家係事後自報（有漏），改後係事前阻擋＋事後機器核。

## 2. 格式：可機讀欄位，攻擊欄必須獨立、核對欄唔可以只係來源引用
**實證**：04——格數有 357／390／B 28／57／60 三個版本；parser 漏 21／26 H1；D218 核對欄只係「ACT_I_OUTLINE L323；CDL-073」；我用關鍵字查「攻擊」出 4 個假陽性。
**改**：協議規定固定 7 欄 `angle|beat|claim|核對(原文引句)|攻擊(一句失敗情境)|verdict|severity`，verdict 永遠最右；格式不符者視為無效格；每角度每 beat 組最少一行（不可「同上」）。
**代價**：agent 輸出較長較死板；**放棄**：自由敘述。**分別**：可由腳本數，唔使人手估。

## 3. 數字同「APPLIED」要有來源
**實證**：06——「APPLIED」只係 patch 清單、冇 v3.1 表；§15.1 數字冇存推導、同重算唔符。
**改**：兩條規則——(a) 任何寫入 ledger／status 嘅覆蓋數字，要同時存生成它嘅腳本輸出檔路徑；(b) Disposition 只准 `APPLIED_TO_TABLE`（有被改嘅表＋行號）或 `RECORDED_IN_PATCH_LIST`，唔准單寫 APPLIED。
**代價**：多一個存檔步驟；**放棄**：寫得快嘅概數。**分別**：講「做咗」同「記咗要做」會分得開。
