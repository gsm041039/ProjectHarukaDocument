# GLOBAL_GROUNDED_WORKFLOW_RULES

## Purpose
本文件係 Project Haruka 所有 story workflow / skill 嘅共用規則。目標係：

1. AI 唔需要等作者手動揀十幾個 skill，而係由 `story-orchestrator` 自動判斷。
2. 每次任務都要有 log、checklist、pending / blocked / skipped 狀態。
3. 每個角色性格、動機、心理、對白、導演判斷都要有根據；可以創作，但必須標記為 hypothesis。
4. 不開平行 working state；沿用現有 `canon/_working/` 檔案。
5. 不自動 writeback；所有 canon 改動必須 author-approved。

## Existing working files to use
所有 workflow 要優先沿用以下現有檔案；除非作者明確要求，唔好另開一套 working folder：

```text
canon/_working/PROJECT_STATUS.md
canon/_working/NEXT_ACTION.md
canon/_working/QUESTION_QUEUE.md
canon/_working/SESSION_LEDGER.md
canon/_working/CANON_DECISION_LOG.md
canon/_working/READ_MANIFEST.md
canon/_working/story_construction/QUESTION_MATRIX.md
```

## Universal start rule
每次任務開始，必須先做：

```text
1. Recover state from existing working files.
2. Interpret user request.
3. Route to the correct workflow.
4. Select required skills / agent passes.
5. Create a run checklist.
6. State what will NOT be done.
```

除非任務係純粹簡短答覆，否則唔可以跳過 routing / checklist。

## Universal end rule
每次任務結束，必須輸出：

```text
Completed:
- ...

Pending / Still Needed:
- ...

Blocked:
- ...

Skipped:
- ...

Open Questions:
- ...

Next Recommended Action:
- ...
```

如果有 repo/file write access，應同步更新：

```text
SESSION_LEDGER.md
NEXT_ACTION.md
QUESTION_QUEUE.md（如有新問題）
PROJECT_STATUS.md（如 active topic / phase 改變）
```

如果只係 chat 內回覆，至少要以同一格式輸出 log summary。

## Every claim must be grounded, graded, and traceable
任何判斷都必須分級：

```text
CANON_SUPPORTED       = 有直接 source atom / canon text 支持
STRONGLY_INFERRED    = 多個現有事件 / 行為 pattern 強力支持
WEAKLY_INFERRED      = 有少量支持，但仍需標記風險
CREATIVE_HYPOTHESIS  = 創作候選，必須隔離
UNSUPPORTED          = 不可用作正式解釋 / 不可寫入 canon
CONTRADICTED         = 有明顯反證或衝突
```

所有建議、解釋、劇本行為、角色語氣、導演處理都要至少標記 evidence level。

## No Free Personality Rule
AI 不可憑空賦予角色新的：

```text
核心性格、價值觀、創傷、慾望、恐懼、癖好、語氣、關係態度、道德立場、行為 pattern。
```

如果無 source atom / 事件 / 關係 / 對白 / 重複行為支持，只能放入 Hypothesis Sandbox，不可當成角色真相。

## Hypothesis Sandbox Rule
創作假說可以提出，但必須隔離：

```text
Hypothesis:
- Claim
- Why it might help
- Required support / backstory needed
- Risk to canon / character
- Minimal-change version
- Whether it can be used in Scene Lab
- Whether it is banned from writeback
```

Hypothesis 不得直接進入 canon、official character state、正式劇本核心動機，除非作者批准並補足支撐。

## Active Support Gap Detection
任何 workflow 都要主動問：

```text
我而家嘅推論需要咩支持？
現有資料有冇？
支撐係直接、間接、弱推論、定無？
如果無，係邊一類 support gap？
呢個 gap 會 block 今次工作嗎？
需要問作者嗎？
有冇 safe default？
```

## Stop Rules
- 只係審查：不可自動重寫。
- 只係討論：不可自動寫劇本。
- 只係 Scene Lab：不可 writeback。
- 未經作者批准：不可改 canon truth。
- 有 unresolved blocker：不可進入 writeback。
- 任務完成 requested output + log + checklist 後要停，不可無限擴展。

## Multi-agent safety
多 agent 可以喺同一次任務內自動運行，但：

```text
- 不可背景長期運行。
- 不可無限 loop。
- 不可自己開下一個大階段。
- 不可自己 writeback。
- 必須由 Orchestrator 收束成 one answer + log summary。
```
