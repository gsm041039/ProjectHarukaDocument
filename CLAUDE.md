# Story Workflow Operating Memory

呢個 repo 使用 durable story workflow state。
任何新 session、context 壓縮後、或者換電腦之後，都**不得**靠記憶直接續做。

## First read order on every fresh session
1. `canon/_working/PROJECT_STATUS.md`
2. `canon/_working/NEXT_ACTION.md`
3. `canon/_working/QUESTION_QUEUE.md`
4. `canon/_working/SESSION_LEDGER.md`
5. `canon/_working/CANON_DECISION_LOG.md`（如存在）
6. `canon/_working/READ_MANIFEST.md`（如存在）
7. `canon/_working/story_construction/QUESTION_MATRIX.md`（如當前 task 相關）

## Always true rules
- 唔可以將 inference 當 confirmed canon
- 唔可以 silent resolve contradiction / dedupe / canonization
- 唔可以跳過 author gate
- 唔可以未做 source check 就直接問 reconstruction-level 問題
- 唔可以令 deferred question 消失
- 唔可以未更新 state files 就宣稱本輪完成

## ⚠️ 故事寫作 Pipeline（全局不可違反）

```
Act I Outline → Act II Outline → Act III Outline → Act IV Outline
        ↓
Act I Beat Sheet → Act II Beat Sheet → Act III Beat Sheet → Act IV Beat Sheet
        ↓
全部 Beat Sheet 完成並批核後，才可以開始寫任何 Section
```

**硬性規則：**
- 唔可以因為「某個 Act 的 Beat Sheet 完成了」就開始寫該 Act 的 Section
- **必須整個故事（全四幕）的 Beat Sheet 全部完成並批核後，才可以開始寫任何 Section**
- 任何「幫我寫呢個場景/section/腳本」的請求，如果全部 Beat Sheet 未完成，必須拒絕並提示當前 pipeline 狀態
- 唯一例外：作者明確說「我知道 pipeline 未完成，我想試寫一個草稿看感覺」——此情況下寫出的文字標記為 `[DRAFT ONLY — NOT CANON]`，不進入任何 canon 文件

## Primary durable files
- `PROJECT_STATUS.md` = 主 resume anchor / current truth snapshot
- `SESSION_LEDGER.md` = 本輪與歷史 phase 記錄
- `NEXT_ACTION.md` = 唯一單一步安全下一步
- `QUESTION_QUEUE.md` = blocked / deferred / resolved 問題來源
- `QUESTION_MATRIX.md` = 多角度拆題表，可追溯問題來源

## Mode rules
- Story ideation / outline / arc / reveal / theme / section development -> Story Room / Question Engine
- Source inventory / register / sectioning / audit -> Canon Pipeline
- Candidate / duplicate / conflict / ownership / author gate -> Atom Gate
- Confirmed decisions only -> Writeback
- Fresh session / interruption / new machine -> Resume first

## Update discipline
每輪結束前，至少更新：
- `PROJECT_STATUS.md`
- `SESSION_LEDGER.md`
- `NEXT_ACTION.md`
- `QUESTION_QUEUE.md`（如有 open / deferred / resolved 問題變動）
- `QUESTION_MATRIX.md`（如本輪建立或更新 angle rows）

## User interaction style
- 優先用 A/B/C 問法
- 但可容許作者自由補充
- 每輪 8–15條最高價值問題（問題多 = source check token 減少）
- 每條問題必須列出 12角度分析（RELEVANT/NOT_RELEVANT）及所有選項 impact
- **白話文描述問題**：唔好直接用技術編號（例如「E-03 Plant-A chain」需解釋係咩），除非只有該詞才能準確表達，且需在問題內加解釋
- 唔得問 filler 問題

@.claude/story_system/angle-system.md
@.claude/story_system/state-files.md
