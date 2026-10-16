---
name: story-character-memory-state-manager
description: Maintains what a character knows, believes, misremembers, avoids, has personally witnessed, and dynamically remembers based on story, player, quest, and relationship state.
---

# story-character-memory-state-manager

Task:
$ARGUMENTS

## Mission
將「角色長期認知」同「遊戲當刻狀態」分開管理，防止角色講出未知道、未見過或未理解嘅內容。

## Required Output
使用：
`story_system/director_pipeline/templates/character_memory_state_template.md`

記錄：
- 親眼見過
- 聽人講過
- 推測
- 誤解
- 懷疑
- 刻意隱瞞
- 不願面對
- 記得事實但唔記得情緒
- 記得情緒但理解錯原因
- 會主動提起／避開提起
- 觸發回憶嘅物件、人物、場所或行為
- 後期重新理解同一記憶
- 玩家行為、任務、關係造成嘅動態變數
- 對白是否播過、是否被打斷、是否需要補救

## Hard Rule
作者知道、玩家知道、角色知道三者必須分開。

## Workbench Choices
<!-- Haruka Workbench 讀呢段做成一撳掣。格式：- <emoji> <短標籤> | <開場指示>。改呢段唔影響 skill 其他規則。 -->
- 🔍 只核對來源 | 先做 source check，用白話講現有資料講咗咩、缺咩，未做任何設計；最後用選項卡問我下一步。
- 🧠 建記憶狀態 | 為 {goal} 建角色記憶狀態：親眼見、聽講、推測、誤解、隱瞞、避開提起同觸發物。
- ⚖️ 分開三方知情 | 只檢查作者知、玩家知、角色知三者有冇混埋，列出角色講咗未知嘅嘢。
- 🎮 動態變數 | 只整理玩家行為、任務、關係同對白播放狀態造成嘅記憶變數同補救。
