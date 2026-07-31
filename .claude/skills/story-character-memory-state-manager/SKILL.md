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
