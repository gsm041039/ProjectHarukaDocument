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
