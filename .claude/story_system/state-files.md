# Durable State Files

## 1. PROJECT_STATUS.md
主 resume anchor。
用途：
- 高濃度現況快照
- 換電腦 / 新 session 優先讀
- 指出「依家其實做到邊、下一步做咩、未答問題係乜」

## 2. SESSION_LEDGER.md
本輪工作日誌 + phase 歷史。
用途：
- 記錄本輪做咗咩
- 記錄 phase、blockers、handoff
- 俾 resume 時還原上次停止點

## 3. NEXT_ACTION.md
只保留一條最安全、最具體既下一步。
規則：
- 必須係單一步
- 必須寫前置條件
- 必須寫需唔需要作者 input

## 4. QUESTION_QUEUE.md
所有 blocked / deferred / resolved 問題既真實來源。
規則：
- 唔准只有 chat 提過但無落檔
- DEFERRED 問題要有 revisit trigger
- RESOLVED 要有答案摘要、影響、記錄日期

## 5. QUESTION_MATRIX.md
任何 reconstruction-level 提問前既可查核拆題表。
規則：
- 先 source check 再建 rows
- 每個 topic 掃 12-angle relevance
- 再壓縮成作者問題

## Mandatory update sequence before stop
1. 更新 `PROJECT_STATUS.md`
2. 更新 `SESSION_LEDGER.md`
3. 更新 `NEXT_ACTION.md`
4. 如問題變動，更新 `QUESTION_QUEUE.md`
5. 如有拆題／新 rows，更新 `QUESTION_MATRIX.md`

## Cross-computer rule
如果係新電腦／新 session：
- 永遠先讀 `PROJECT_STATUS.md`
- 再讀 `NEXT_ACTION.md`
- 再讀 `QUESTION_QUEUE.md`
- 如果仍不確定 phase，立即進入 resume / recovery，而唔係靠對話記憶估
