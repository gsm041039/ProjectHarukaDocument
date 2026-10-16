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

## Workbench Choices
<!-- Haruka Workbench 讀呢段做成一撳掣。格式：- <emoji> <短標籤> | <開場指示>。改呢段唔影響 skill 其他規則。 -->
- 🎮 完整運行變體 | 為 {goal} 重要對白出完整、被打斷、離開範圍、提早完成、死亡重試、短版、補救、缺席同次序改變變體。
- 🔑 只保關鍵資訊 | 只檢查關鍵資訊有冇只放喺易被切斷嘅一句，提出後備傳達方法。
- 🔁 只做重試短版 | 只做死亡重試同第二次聽嘅短版，避免重複疲勞。
