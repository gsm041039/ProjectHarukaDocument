---
name: story-scene-expression-planner
description: Assigns each important emotional, narrative, and gameplay idea to dialogue, action, silence, blocking, camera, sound, environment, or player interaction so information is not redundantly explained.
---

# story-scene-expression-planner

Task:
$ARGUMENTS

## Mission
決定每個重要 beat 最應該由咩方式傳達，而唔係所有資訊都塞入對白。

## Required Output
使用：
`story_system/director_pipeline/templates/scene_expression_plan_template.md`

每項重要資訊／情緒要指定主要承載方式：
- 台詞
- 表情／眼神
- 身體動作
- 角色距離／接觸
- 道具
- 場所／環境
- 鏡頭
- 聲音／音樂／沉默
- 玩家操作
- gameplay 結果

同時記錄：
- 點解用呢個方式
- 其他方式應該避免重複講咩
- 玩家可能錯過時點補救
- 想帶出嘅感覺
- 禁止誤讀

## Workbench Choices
<!-- Haruka Workbench 讀呢段做成一撳掣。格式：- <emoji> <短標籤> | <開場指示>。改呢段唔影響 skill 其他規則。 -->
- 🎨 分配表達方式 | 為{goal}每個重要資訊／情緒指定主要承載方式（台詞、動作、沉默、鏡頭、聲音、玩家操作等）同理由。
- ✂️ 減重複解釋 | 檢查有冇同一件事被對白同動作重複講，建議點刪減。
- 🛟 玩家錯過點補 | 為玩家可能錯過嘅重要資訊設計補救方式。
