---
name: story-character-voice-designer
description: Builds or updates a reusable, canon-grounded, whole-story character speaking-style document. It must remain independent of the current scene, separate global rules from period/relationship variants, and use the supplied document skeleton rather than inventing a scene-shaped structure.
---

# story-character-voice-designer

Task:
$ARGUMENTS

## Mission
建立或更新一份**角色級、全劇通用、可跨場景重用**嘅說話方式文件。

呢個 skill 唔負責建立今場戲嘅臨時說話狀態。今場戲要點講，交畀 `story-scene-speaking-state-builder`。

核心公式：

```text
角色通用說話方式文件
＋ 今場戲說話狀態
＝ 今場可用聲線
```

## Scope Rule — Mandatory
通用文件必須以角色為中心，而唔係以當前章節、事件或場景為中心。

禁止：
- 標題綁定單一場景，例如「晴香首次變身校園戰 Voice Bible」。
- 因今次只寫 Act I，就只建立 Act I 結構後稱為全劇 Voice Bible。
- 將場景內一次反應直接升級成跨全劇穩定規則。
- 將 `Scene Speaking State` 塞入通用 Voice Bible 主體。

正確命名：
- 證據足夠：`Character Voice Bible — <角色>`
- 證據不足：`Character Speaking Style Research and Candidates — <角色>`

## First Choice — Mandatory When No Reliable Global Document Exists
先掃角色所有可得資料，再用簡單語言問作者：

A. 我先根據現有設定同對白自動建立一份全劇通用第一版，再同你逐項細執。
B. 我哋由零開始，一項一項建立；但我會先展示已搵到嘅 canon 證據。

唔可以問完後只為當前場景生成一份縮窄文件。

## Whole-story Source Sweep
建立通用文件前，盡量掃：
- 正式人物設定
- 所有已確認台詞
- 各幕／各發展階段場景
- 對主要人物嘅互動
- 公開、私人、戰鬥、受壓、崩潰等不同狀態
- 角色背景、教育、生活圈、身份與心理防衛
- 已批准反例、禁用方向與作者決策

如某個時期未完成或冇資料，清楚留白，唔可以用今場推測填滿全劇。

## Evidence Classes — Mandatory Per Material Rule
- `CANON_DIRECT`：正式人物文件、已確認場景或現成台詞直接支持。
- `CANON_PATTERN`：至少兩個獨立場景反覆出現，形成穩定模式。
- `CANON_INFERRED`：由背景、心理、防衛、關係或行為合理推導。
- `VOICE_CANDIDATE`：為填補空白提出嘅新設計，要同作者細執。
- `UNSUPPORTED`：目前冇足夠支持，不可使用為已確立規則。

完整內容唔代表可信。可信程度只由證據決定。

## Rule Classification — Mandatory
每條規則除證據級別外，必須標明屬於：
- `GLOBAL_STABLE`：跨多個時期、對象或狀態仍成立。
- `PERIOD_SPECIFIC`：只屬某個角色發展階段。
- `RELATIONSHIP_SPECIFIC`：只對某人物／關係成立。
- `STATE_SPECIFIC`：只喺受傷、恐慌、戰鬥、公開表演等狀態成立。
- `SCENE_ONLY_OBSERVATION`：目前只喺單一場景見到，不可升級為通用規則。

單一場景證據預設只能係 `SCENE_ONLY_OBSERVATION` 或候選，除非有其他 canon 支持。

## Required Evidence Record
```md
### 說話規則
規則：
規則範圍：GLOBAL_STABLE／PERIOD_SPECIFIC／RELATIONSHIP_SPECIFIC／STATE_SPECIFIC／SCENE_ONLY_OBSERVATION
證據級別：
Canon 支持：完整文件／場景名稱與內容摘要
直接台詞例子：
推導過程：
反例或例外：
適用故事時期：
適用對象／場合：
不適用情況：
可信程度：高／中／低
需要作者細執：是／否
```

## Mandatory Reference Skeleton
必須以以下參考骨架為預設，不可因當前任務而隨意改成場景型結構：

`story_system/director_pipeline/templates/character_voice_bible_template.md`

使用規則：
- 章節順序可以因資料量輕微調整，但核心分層不可刪除。
- 冇資料嘅章節寫「未有足夠資料」，唔硬填。
- 可以先產出精簡版，但必須保留通用文件身份與將來可擴充位置。
- 場景專用內容只可用一兩句引用說明，不可成為主體。

## Minimum Global Structure
1. 文件身份與證據覆蓋
2. 語言形成基礎
3. 跨時期穩定核心
4. 故事時期與真正轉變點
5. 各時期完整說話方式
6. 對不同人物／關係嘅變體
7. 主要說話功能
8. 句式、詞彙、節奏、稱呼與沉默
9. 不同壓力與身體狀態
10. 遊戲／戰鬥使用限制
11. 全劇例句與證據庫
12. 未解決項目、候選與禁止使用方向

## Period Mapping
唔可以只粗略用 Act I／II／III／IV 當全部分析。

每個角色發展階段要講：
- 由咩事件開始、到咩事件結束
- 保留咗邊啲穩定核心
- 新增、減少或失效咗咩說話習慣
- 轉變點解發生
- 對邊個人最先出現
- 自覺定無意識
- 壓力下會否退回舊模式
- 邊啲後期語言不可提前

## Relationship Variants
通用文件要盡量比較角色對主要人物嘅長期變體，而唔只比較當前場景人物。

例如同一功能「要求對方留低／拒絕／安慰／求救」，對不同人物點講、點解唔同。

未有證據就標示未設計，提出候選待作者細執。

## Major Speaking Functions
按角色實際需要處理：
- 普通聊天與接近人
- 拒絕、請求、命令
- 安慰、道歉、感謝
- 隱瞞、講大話、被揭穿
- 發怒、嫉妒、羞恥
- 求救、承認需要
- 面對死亡、背叛與沉默

唔強行填晒，但唔可以只因當前場景冇用就永久省略。

## Scene Discoveries
今場發現嘅新語言規則：
1. 先記入場景工作簿，標示 `SCENE_ONLY_OBSERVATION` 或 `VOICE_CANDIDATE`。
2. 唔可以直接寫入通用穩定核心。
3. 經作者確認，並有跨場景／人物資料支持後，先升級入通用文件。

## Collaboration Rule
高影響候選：展示 canon、提出 2–3 個方向、講明角色差異、推薦一個，等作者細執。
低風險細節可自動推導，但要寫入 decision record。

## Output Files
長期文件：
```text
character-voice-bibles/<character>.md
```

場景專用資料不可存入同一文件；由 `story-scene-speaking-state-builder` 更新：
```text
Scene Development Workbook → 角色今場點講嘢
```

## Hard Rules
- 通用文件唔綁單一場景。
- Voice Bible 同 Scene Speaking State 必須分開。
- 三五個形容詞唔算 Voice Bible。
- 每條重要規則要有證據級別與規則範圍。
- 單一場景反應不可自動升格成全劇核心。
- 證據不足角色只可建立研究與候選。
- 後期聲線不可提前。
- 先建立／更新通用文件，再建立今場狀態，再寫完整對白。
