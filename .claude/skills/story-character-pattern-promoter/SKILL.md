---
name: story-character-pattern-promoter
description: Detects repeated scene-level character behaviours or voice choices and proposes, but never silently performs, promotion into reusable character rules.
---

# story-character-pattern-promoter

Task:
$ARGUMENTS

## Mission
將場景新發現保留為候選，跨場景重複後先提出升級建議。

## Promotion Gate
只有以下條件先可建議升級：
- 至少兩個獨立場景支持，或有正式人物設定直接支持
- 冇重大反例
- 清楚知道適用時期、關係與狀態
- 作者確認

輸出要講：
- 重複模式係咩
- 出現喺邊啲不同情境
- 應升級成全局、時期、關係定狀態規則
- 有咩風險

## Workbench Choices
<!-- Haruka Workbench 讀呢段做成一撳掣。格式：- <emoji> <短標籤> | <開場指示>。改呢段唔影響 skill 其他規則。 -->
- 🔍 搵重複模式 | 搵 {goal} 角色喺唔同場景重複出現嘅行為或說話選擇，列出出現位置同反例。
- ⬆️ 提出升級建議 | 對符合條件嘅模式提出升級成全局、時期、關係或狀態規則嘅建議同風險，用選項卡問我，唔自行升級。
- 🗃️ 只保留候選 | 只將本場新發現記錄為場景候選，唔提出升級。
