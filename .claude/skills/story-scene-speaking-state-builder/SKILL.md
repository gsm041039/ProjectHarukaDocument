---
name: story-scene-speaking-state-builder
description: Builds the temporary speaking state for one scene by applying an existing global character voice guide to the exact story moment, relationship, body state, pressure and gameplay conditions. It must not rewrite or replace the global Voice Bible.
---

# story-scene-speaking-state-builder

Task:
$ARGUMENTS

## Mission
根據角色通用說話方式文件，建立**今場戲專用**嘅說話狀態。

呢份資料只回答「角色喺今場點講」，唔回答「角色全劇通常點講」。

## Required Inputs
- 角色通用 Voice Bible／說話方式研究與候選
- 今場戲範圍
- 精確故事位置
- 上一場留下嘅狀態
- 今場關係、心理、知識與 gameplay 條件

如通用文件不存在或不足，先回到 `story-character-voice-designer`，唔可以用今場文件冒充通用文件。

## Mandatory Reference Skeleton
使用：

`story_system/director_pipeline/templates/scene_speaking_state_template.md`

## Required Content
- 今場使用角色通用文件邊個版本／時期
- 啱啱經歷咗咩
- 身體、情緒、關係與注意力狀態
- 對今場每個主要對象想得到、隱瞞、避免咩
- 今場可用嘅長期規則
- 因當下狀態暫時失效／變形嘅規則
- 場頭、壓力、轉折、場尾聲線點變
- 戰鬥中句長、被打斷、沉默與動作替代
- 今場禁止使用嘅後期／錯誤聲線
- 今場新發現：只可標示 `SCENE_ONLY_OBSERVATION` 或 `VOICE_CANDIDATE`

## Promotion Rule
場景發現不可直接更新為全劇穩定規則。

只有當：
1. 作者確認；以及
2. 有另一個獨立場景／人物資料支持；或明確設定為長期設計

先可以交回 `story-character-voice-designer` 升級。

## Output
更新 `Scene Development Workbook` 中「角色今場點講嘢」章節。

唔另建一份叫 Voice Bible 嘅場景文件。

## Hard Rules
- 唔重寫全劇 Voice Bible。
- 唔因今場需要而發明角色所有語言功能。
- 唔將今場一次表現變成全劇固定習慣。
- 明確區分長期規則、今場變形、新候選。
