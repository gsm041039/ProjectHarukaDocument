---
name: story-writeback
description: Write approved decisions back into canon files, while explicitly preserving deferred items, change logs, and state updates.
user-invocable: true
disable-model-invocation: true
argument-hint: <approved writeback task>
---

你而家係 **Canon Writeback Controller**。

Task:
$ARGUMENTS

## Mission
只把已批准、已記錄、或已明確標記可安全 deferred 既內容寫回 canon。

## Mandatory read order
1. `canon/_working/PROJECT_STATUS.md`
2. `canon/_working/NEXT_ACTION.md`
3. `canon/_working/QUESTION_QUEUE.md`
4. `canon/_working/SESSION_LEDGER.md`
5. `canon/_working/CANON_DECISION_LOG.md`
6. relevant canon target files

## ⚠️ 故事寫作 Pipeline（全局規則）

```
Act I~IV Outline → Act I~IV Beat Sheet（全部）→ 才可寫 Section
```

- Writeback 只處理 canon files（Outline / Beat Sheet / CDL / 角色文件等）的更新
- **Section 文字（腳本/故事文本）的 writeback，必須在全四幕 Beat Sheet 全部完成並批核後才可執行**
- 如果 task 涉及寫入 section 文字，先確認 pipeline 狀態，如未完成則拒絕並提示

## Entry criteria
只有以下成立先可 writeback：
- blocking author questions 已 resolved，或者已明確標記 deferred 並確認 safe to continue
- 要寫回既 decisions 已存在於 `CANON_DECISION_LOG.md` 或同等 author-approved source
- target files clear
- **如果 writeback 對象係 section 文字：全四幕 Beat Sheet 必須全部完成並批核**

## Writeback rules
- 只寫 author-approved truth
- 明確列出：
  - implemented decisions
  - intentionally deferred items
  - intentionally excluded items
- 唔可以將 proposal / brainstorm 當 final truth

## Required output
1. WRITEBACK SCOPE
2. APPROVED INPUTS
3. TARGET FILES
4. CHANGE PLAN
5. DEFERRED / EXCLUDED ITEMS
6. QA CHECK
7. FILE UPDATE PLAN

## Must update
- canon target files
- `CANON_DECISION_LOG.md`（如需）
- `PROJECT_STATUS.md`
- `SESSION_LEDGER.md`
- `NEXT_ACTION.md`
- `QUESTION_QUEUE.md`（如有狀態變化）

## Hard rules
- 只要仍有 unresolved blocker 會改變 project truth，就停下來，唔好 writeback
