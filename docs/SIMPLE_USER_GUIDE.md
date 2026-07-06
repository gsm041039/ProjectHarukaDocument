# Simple User Guide

## Core idea

你唔需要記十幾個 skill 名。平時直接講你想做咩，`story-orchestrator` 會自動判斷要用邊啲 skill。

## Daily usage

### 1. 討論新設定 / 一齊諗

Use natural language:

```text
我想同你討論加入操母親設定，你認為佢係咩人？
```

The system should use:

```text
CO_DESIGN_DISCUSSION + CHAT_COMPACT
```

Expected output:

```text
現有支撐
新增假設
風險
建議最小版本
下一步問題
Mini Log
```

### 2. 糾正 AI 假設

Say:

```text
呢點唔啱，唔應該係 X，而係 Y。
```

The AI must respond with:

```text
更新後限制：...
下一步推演會避開：...
```

### 3. 問角色點解咁做

```text
幫我分析操點解會被迫報串，但唔好寫到幼稚。
```

The AI should use:

```text
story-motivation-grounding
story-grounding-auditor
story-room
```

### 4. 審 AI 建議有冇亂作

```text
用 Grounding Auditor 檢查以下建議有冇 unsupported personality / canon drift。
```

### 5. 寫一個小章節劇本

```text
用 Scene Lab，將呢個小章節寫成 experimental dialogue script，不可 writeback。
```

### 6. 正式寫回 canon

Only say this when you really mean it:

```text
使用 writeback gate。Approved items: ... Writeback scope: ...
```

## Output levels

### Chat Compact — default

用於討論。短輸出。

```text
判斷 + 2–4 個方向 + 風險 + 下一步 + Mini Log
```

### Standard Report

用於較正式審查。

```text
壓縮 evidence + checklist + gap + recommendation
```

### Full Audit

用於重大 scene / writeback 前。

```text
完整 24-angle + multi-agent + grounding audit + QA
```

## Important commands

### Compact discussion

```text
用 compact discussion，同我一齊諗，唔好出 full report。
```

### Full audit

```text
今次要 full audit，完整列 checklist 同 multi-agent notes。
```

### Context saving

```text
用 temp scratchpad 記中間 notes，chat 只畀我決策摘要。
```

### Resume

```text
根據 SESSION_LEDGER / NEXT_ACTION resume 上次工作。
```

## Mini Log example

```text
Mini Log:
Done: 收斂操母親設定為「活體人偶」候選
Pending: 決定父親與 EMB 關係強度
Blocked: EMB 當時是否能監控操身份未定
Next: 先定最小版 / 中版 / 大版
```

## Rules you can rely on

- AI 可以創作，但新假設要標記。
- 作者覺得有潛力 ≠ canon approved。
- 普通討論預設短輸出。
- Full checklist 只在你要求或 writeback 前出。
- 每次仍要有 mini log / pending / next。
- 不會自動 writeback。
- 不會開 parallel permanent working folder。
- `.tmp` scratchpad 可以用，但只係臨時 cache。

## v1.2 User Guide: When AI misses existing canon

If AI treats an existing setting as new, say:

```text
canon 有，你自己搵。用 source recovery，唔好當新設定。
```

Expected behavior:

```text
1. AI stops the current assumption.
2. AI reclassifies the issue as SOURCE_RECOVERY_REQUIRED.
3. AI searches term + aliases + likely files.
4. AI returns compact found/partial/not-found result.
5. AI resumes discussion using existing canon.
```

You should not need to re-explain the whole setting unless source recovery fails.

### Prompt template

```text
/story-orchestrator
用 compact discussion。
先 source recovery [term/event]，用現有 canon 討論，唔好未查就話係新設定。
```

### Example

```text
/story-orchestrator
情緒毒品 canon 有，你自己搵。我要用現有情緒毒品危機討論秋穗退場，唔好另開新事件。
```

---

# v1.3 Usage Notes

## To force the orchestrator to show its calls
Use:

```text
/story-orchestrator show call plan, then answer compactly
```

Expected output starts with:

```text
ORCHESTRATOR CALL PLAN
Mode: ...
Tool / Skill Calls:
1. story-router ...
2. story-context-manager ...
3. story-source-recovery-gate ...
...
```

## To keep creative discussion alive
Use:

```text
/story-orchestrator co-design mode. 唔好只問我問題；先搵 canon，再畀最小可行方案。
```

## To stop the AI from becoming too conservative
Use:

```text
保留創作推演，但標記邊啲係 canon、邊啲係 candidate。
```

## To fix “canon has it, you find it” moments
Use:

```text
用 source recovery。未查唔好當 gap。
```

## Preferred discussion answer shape

```text
ORCHESTRATOR CALL PLAN
...

我建議...
現有支撐...
新增候選...
風險...
下一步...

Mini Log
Done: ...
Pending: ...
Blocked: ...
Next: ...
```
