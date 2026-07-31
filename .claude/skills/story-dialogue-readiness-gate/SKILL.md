---
name: story-dialogue-readiness-gate
description: Checks whether a dialogue scene has enough audience intent, sequence definition, canon grounding, reusable character foundations, scene states, expression planning, gameplay delivery, and runtime handling to proceed at the requested quality level.
---

# story-dialogue-readiness-gate

Task:
$ARGUMENTS

## Required Checks
1. 觀眾／玩家主要感覺、殘留與禁止誤讀已確立。
2. 整段戲開始、結束與包含範圍清楚。
3. Canon、時間、角色身份與版本已回收。
4. 角色通用說話方式有證據審核。
5. 角色通用反應／表演資料足夠，或不足部分已標候選。
6. 角色點思考、優先處理咩、危機中點揀已有可用模型。
7. 角色目前知道、記得、誤解、隱瞞與關係狀態清楚。
8. 今場 Speaking State 同 Performance State 已建立。
9. 每項重要資訊／情緒由咩方式傳達已分工，冇全部塞入對白。
10. Gameplay、玩家控制、打斷與關鍵資訊保底已有設計。
11. 高影響候選已同作者確認，低風險假設有清楚標示。

## Result
- READY_FOR_EXPLORATORY_DRAFT
- READY_FOR_POLISHED_DRAFT
- READY_FOR_RUNTIME_VARIANTS
- READY_FOR_RECORDING_PREP
- NOT_READY

未完成全劇 Beat Sheet 不等於 NOT_READY；只影響正式批准狀態。
