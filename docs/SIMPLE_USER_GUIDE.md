# SIMPLE_USER_GUIDE

## Core idea
你唔需要記十幾個 skill 名。日常只要直接講你想做咩，`story-orchestrator` 會自動揀合適 workflow、skill、agent passes，並自動產生 log / checklist。

## 常用講法

### 1. 想審角色行為
```text
幫我審 [角色] 點解會做 [行為]，要根據現有內容，唔好無根據幻想。
```
Orchestrator 會用：
- story-motivation-grounding
- story-room
- story-grounding-auditor
- story-multi-agent-room（Standard）

### 2. 想深化角色動機
```text
幫我深化 [角色] 做 [事件] 背後目的，但所有性格/動機都要有背景故事或現有事件支撐。
```
輸出會有：
- Conservative explanation
- Minimal additive explanation
- Major reframe explanation
- Required backstory support

### 3. 想寫一個小章節劇本
```text
用 Scene Lab 幫我將 [場景] 做成 experimental screenplay draft，不可 writeback。
```
Orchestrator 會自動跑：
- story-scene-lab
- director room
- dialogue room
- micro insert hunter
- coverage + table read
- grounding auditor

### 4. 想純粹查 canon
```text
幫我查 [設定/角色/事件] 現有 canon 係點，唔好作新內容。
```
會用：
- story-canon
- story-resume（如 state unclear）

### 5. 想重新整理 atom
```text
幫我重新 atom 化呢一批資料，但沿用現有 working files，不要開新 working folder，不要 writeback。
```
會用：
- story-atom-gate
- story-canon
- grounding auditor

### 6. 想把已批准內容寫返 canon
```text
使用 writeback gate，只將以下 author-approved decisions 寫入指定 section：[列出]
```
會用：
- story-writeback
- script coordinator rules

## Light / Standard / Full

```text
Light：快速討論，3–5 agent，短 checklist。
Standard：日常預設，8–12 agent，24-angle snapshot。
Full：重大事件 / scene lab / writeback 前，15–25 agent，blind + debate + judge。
```

你可以直接加一句：

```text
用 Light / Standard / Full。
```

無指定時：
- 普通問答用 Light
- 角色動機 / 事件目的用 Standard
- Scene Lab / canon writeback 前用 Full

## 每次結尾你會見到

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

如果無呢段，即係 workflow 未完整。

## 最重要安全規則
- AI 可以提出新想法，但要標記 Hypothesis。
- AI 不可憑空創造角色性格。
- AI 不可自己 writeback。
- AI 不可用未支撐設定當成 canon。
- AI 要主動提出未清楚問題。
