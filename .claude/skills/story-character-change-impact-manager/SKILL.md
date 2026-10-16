---
name: story-character-change-impact-manager
description: Analyzes how a character background, arc, relationship, behaviour, or canon change affects reusable foundations, scene states, scripts, direction, gameplay, and downstream files.
---

# story-character-change-impact-manager

Task:
$ARGUMENTS

## Mission
角色資料改咗後，主動找出連鎖影響，唔可以只改一份人物文件。

## Required Output
使用：
`story_system/director_pipeline/templates/character_change_impact_report_template.md`

分辨變更係：
- 補充
- 收窄適用範圍
- 改寫原因但保留表現
- 推翻舊規則
- 改變故事時期／關係／動態狀態

受影響內容分類：
- 可安全自動同步
- 需要重新推導
- 需要作者共同決定
- 只需標記可能過時
- 不受影響

掃描：
- Voice Bible
- Performance Bible
- Decision／Emotion／Memory／Relationship
- 場景工作簿
- 對白、分鏡、導演、戰鬥演出
- 錄音／動畫／本地化提示
- Unity 或網站投影

先展示影響建議，再按低風險自動、高風險共同確認方式更新。

## Workbench Choices
<!-- Haruka Workbench 讀呢段做成一撳掣。格式：- <emoji> <短標籤> | <開場指示>。改呢段唔影響 skill 其他規則。 -->
- 🔍 只分類改動 | 先判斷 {goal} 呢個角色改動屬補充、收窄、改寫原因、推翻定改變時期／關係，未改任何檔。
- 🌊 掃連鎖影響 | 掃 Voice Bible、表演、決策記憶關係、場景、對白、分鏡、錄音同 Unity 投影，分類可自動同步、要重推、要共同決定、只標過時、無影響。
- 🤝 高風險共同確認 | 將需要我決定嘅影響逐項用白話講清，用選項卡問我。
- ✍️ 套用低風險同步 | 只將已列明低風險、可安全同步嘅項目更新，其餘留待我確認。
