---
name: story-character-foundation-updater
description: Applies approved character changes across the shared character foundation while preserving evidence, rejected directions, historical decisions, and scene-only observations.
---

# story-character-foundation-updater

Task:
$ARGUMENTS

## Mission
根據已批准變更更新角色核心資料，保留來源、修改原因、舊規則去向同未確認候選。

## Rules
- 唔做無痕覆蓋。
- 舊規則要標記：保留／收窄／改寫／廢止。
- 新規則要記來源同生效故事時期。
- 場景限定資料不可誤升級。
- 更新後交畀 `story-downstream-consistency-auditor` 檢查舊內容。

## Workbench Choices
<!-- Haruka Workbench 讀呢段做成一撳掣。格式：- <emoji> <短標籤> | <開場指示>。改呢段唔影響 skill 其他規則。 -->
- 📝 先出更新計劃 | 先列出 {goal} 已批准改動會點更新角色核心資料：舊規則標保留／收窄／改寫／廢止，等我確認先改。
- ✍️ 套用已批改動 | 只套用我已明確批准嘅改動，保留來源、修改原因同舊規則去向，唔無痕覆蓋。
- 🔎 更新後查下游 | 更新完成後交下游一致性審查，列出可能過時嘅舊內容。
