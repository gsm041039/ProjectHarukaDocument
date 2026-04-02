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
- 一輪預設問 3–6 條最高價值問題
- 若 topic 真係有多個互相獨立 blocker，可擴展到 8–12 條，但不得問 filler 問題

@.claude/story_system/angle-system.md
@.claude/story_system/state-files.md
