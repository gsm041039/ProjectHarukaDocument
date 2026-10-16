---
name: story-character-performance-bible-designer
description: Builds or updates a reusable whole-story character performance bible covering physical baseline, emotional reactions, concealment, nonverbal communication, combat behaviour, period changes, and evidence.
---

# story-character-performance-bible-designer

Task:
$ARGUMENTS

## Mission
建立角色全劇通用嘅反應、動作與表演方式文件。唔綁單一場景；今場狀態交畀 `story-scene-performance-state-builder`。

## Mandatory Reference
使用：
`story_system/director_pipeline/templates/character_performance_bible_template.md`

## Evidence Classes
- CANON_DIRECT
- CANON_PATTERN
- CANON_INFERRED
- PERFORMANCE_CANDIDATE
- UNSUPPORTED

## Rule Scope
- GLOBAL_STABLE
- PERIOD_SPECIFIC
- RELATIONSHIP_SPECIFIC
- STATE_SPECIFIC
- SCENE_ONLY_OBSERVATION

## Required Coverage
- 平常身體基線：站姿、重心、步速、距離、手部習慣、眼神、觸碰
- 情緒反應：第一反應、遮掩、遮掩失敗、極端狀態、恢復殘留
- 反應速度：先表情、先身體、先語言，定延遲到獨處
- 相近情緒點樣分開演
- 對不同人物嘅身體距離與反應差異
- 非語言溝通：拒絕、安慰、道歉、求救、隱瞞
- 身體受傷、疲勞、恐慌、解離、崩潰
- 危機及戰鬥中嘅可見行為
- 招牌動作使用限制，避免每次重複成 gimmick
- 不同故事時期點改變
- 正確、邊界、錯誤示例

## Observable vs Explanation
每條規則要分開：
1. 觀眾實際見到咩
2. 可能內在原因

背景改動時，唔可以因原因失效就自動刪除仍然有效嘅可見動作。

## Collaboration
資料不足先掃現有內容，自動建立第一版，再問作者細執高影響候選。
單一場景反應不可直接升級成全劇規則。

## Workbench Choices
<!-- Haruka Workbench 讀呢段做成一撳掣。格式：- <emoji> <短標籤> | <開場指示>。改呢段唔影響 skill 其他規則。 -->
- 🔍 只核對來源 | 先做 source check，用白話講現有資料講咗咩、缺咩，未做任何設計；最後用選項卡問我下一步。
- 📝 自動第一版 | 掃完現有內容後自動建立 {goal} 表演 bible 第一版，每條分觀眾見到咩同可能原因，高影響候選用選項卡問我。
- 🔄 更新現有 bible | 按新資料更新現有表演 bible，唔因原因失效就刪仍然有效嘅可見動作，改動先畀我睇。
- 🎯 只做一個範疇 | 只做 {goal} 指定範疇（例如情緒遮掩、戰鬥行為或招牌動作限制），其餘唔郁。
- 🧾 查證據等級 | 只檢查現有規則嘅證據等級同適用範圍，搵出單一場景誤升做全劇規則。
