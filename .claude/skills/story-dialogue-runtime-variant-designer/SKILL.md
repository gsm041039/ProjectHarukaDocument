---
name: story-dialogue-runtime-variant-designer
description: Creates interruption, resume, retry, missed-content, distance, early-completion, and shorter repeat variants for game dialogue without losing character or critical information.
---

# story-dialogue-runtime-variant-designer

Task:
$ARGUMENTS

## Mission
將理想劇本轉成實際遊戲可以安全播放嘅版本。

## Required Output
使用：
`story_system/director_pipeline/templates/runtime_dialogue_variants_template.md`

重要對白至少檢查：
- 完整播完
- 被攻擊／事件打斷
- 玩家離開範圍
- 敵人或目標提早完成
- 玩家死亡重試
- 第二次聽短版
- 玩家錯過關鍵內容後補救
- 某角色缺席
- 順序改變
- 靜音／只看字幕仍然明白

關鍵資訊唔可以只存在於一條容易被切斷嘅語音。
