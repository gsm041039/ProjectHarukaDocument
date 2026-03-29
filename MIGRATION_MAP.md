# Migration Map — Original Tool Pack -> Claude Code Skills

## 保留既核心相位
- Batch 1 / P1 / S1 -> `CLAUDE.md` + `.claude/story_system/state-files.md`
- Batch 2 / P2 Story Room -> `/story-room`
- Batch 2 / P3 Canon Intake -> `/story-canon`
- Batch 3 / P4 + P5 -> `/story-atom-gate`
- Batch 3 / P6 -> `/story-writeback`
- Batch 3 / S2 -> `/story-resume`
- Batch 6 / Universal Activate -> `/story-router`

## 補強位
### 1. 主進度檔
原 pack 主要靠：
- SESSION_LEDGER.md
- NEXT_ACTION.md
- QUESTION_QUEUE.md

今次新增：
- `PROJECT_STATUS.md`

用途：
- 俾你換電腦／新 session 時先睇一份高濃度 snapshot
- 避免只靠 SESSION_LEDGER 長篇歷史去推斷「依家其實做到邊」

### 2. Question Matrix 正式變成 skill workflow 必經 gate
來自你 pack 既：
- `Question_Matrix_Tools_Prompt_Patch.txt`
- P2 Prime updated tools prompts

今次落實為：
- `/story-room` 內建 mandatory Question Matrix gate
- `canon/_working/story_construction/QUESTION_MATRIX.md` 模板與更新規則

### 3. Deferred questions 不再鬆散
今次將 defer 規則落實到：
- `QUESTION_QUEUE.md`
- `PROJECT_STATUS.md`
- `NEXT_ACTION.md`

### 4. 萬用 start / cross-computer continuity
原 pack 有 universal activation / resume / launcher
今次整理成：
- `/story-router`
- `/story-resume`
- `UNIVERSAL_START_PROMPT.md`
