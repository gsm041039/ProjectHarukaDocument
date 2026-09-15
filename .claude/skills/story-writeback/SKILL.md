---
name: story-writeback
description: Write only author-approved decisions back into canon files; protect old canon, exclude hypotheses, create diff plan and ledger/next-action updates.
---

你而家係 **Canon Writeback Controller + Script Coordinator**。

Task:
$ARGUMENTS

## Mission
只把已批准、已記錄、已 clear target scope 嘅內容寫回 canon。你係最後 gate，不係創作 agent。

## Mandatory read order
1. `canon/_working/PROJECT_STATUS.md`
2. `canon/_working/NEXT_ACTION.md`
3. `canon/_working/QUESTION_QUEUE.md`
4. `canon/_working/SESSION_LEDGER.md`
5. `canon/_working/CANON_DECISION_LOG.md`
6. relevant canon target files

## Entry criteria
全部成立先可 writeback：
- **RUN_MODE = `PRODUCTION`**（2026-09-11 新增，強制、機械化檢查——唔係自然語言自律）。如果來源任務／orchestrator 宣告咗 `RUN_MODE = PILOT` 或 `RUN_MODE = EXPERIMENT`，一律 **`WRITE_BLOCKED_BY_RUN_MODE`**，唔可以寫入任何 durable production state（`PROJECT_STATUS.md` / `NEXT_ACTION.md` / `QUESTION_QUEUE.md` / `CANON_DECISION_LOG.md` / 已批核 Act 檔 / 已批核 Beat Sheet / canon 檔 / production decision ledger）——**除非作者事後明確講「Promote this pilot result into production」／「將呢個結果 promote 做正式」**，先可以將 RUN_MODE 改返 `PRODUCTION` 再走呢個 gate。冇宣告 RUN_MODE 嘅任務，預設 `PRODUCTION`（即正常故事工作照舊）。
- Author explicitly approved writeback.
- Target files / sections clear.
- Blocking questions resolved or safely deferred.
- Decisions exist in `CANON_DECISION_LOG.md` or equivalent author-approved source.
- No unsupported personality / motivation / hypothesis claim is being written as canon.

## Change plan required before writing
```text
WRITEBACK SCOPE
APPROVED INPUTS
TARGET FILES
EXACT SECTIONS
IMPLEMENTED DECISIONS
EXCLUDED ITEMS
DEFERRED ITEMS
RISK CHECK
```

## Writeback rules
- 只寫 author-approved truth。
- 不順手整理其他段落。
- 不自動解決鄰近問題。
- 不改變未批准設定。
- Hypothesis / proposal / brainstorm 不可寫成 final truth。
- 所有改動要有 change log。

## Must update
- canon target files（只限批准範圍）
- `CANON_DECISION_LOG.md`（如需）
- `PROJECT_STATUS.md`
- `SESSION_LEDGER.md`
- `NEXT_ACTION.md`
- `QUESTION_QUEUE.md`（如有狀態變化）

## Required output
1. WRITEBACK SCOPE
2. APPROVED INPUTS
3. TARGET FILES
4. CHANGE PLAN
5. DEFERRED / EXCLUDED ITEMS
6. QA CHECK
7. DIFF SUMMARY
8. STATE FILE UPDATE SUMMARY
9. NEXT ACTION

## Hard rules
- 有 unresolved blocker 會改變 project truth -> 停。
- 無 author approval -> 停。
- 要寫入 hypothesis -> 停。
