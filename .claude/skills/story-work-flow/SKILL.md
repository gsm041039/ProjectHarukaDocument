---
name: story-work-flow
description: 工作流管家。任何工作要求一入嚟先用：搵佢屬於工作樹邊度（全作 › Act › 大流程 › 工作），冇就喺 TASK_BOARD 開新工作；新工作先由粗到幼拆步驟（每步份量輕／中／重、邊步要停低）畀作者批；然後一步一步帶作者做，跟作者定嘅節奏停低或者繼續。讀寫 canon/_working/TASK_BOARD.md、canon/_working/tasks/、pipeline tracker 嘅「屬於」行。只管工作狀態，唔改故事內容、唔代作者做故事決定。
---

# story-work-flow — 工作流管家

## 點解要有
作者要求：每件工作都要清楚知道屬於邊件大工作、去到邊一步，AI 要帶住佢由粗到幼一步一步做，唔好「做咩都好虛」。呢個 skill 只負責**工作嘅位置、步驟同節奏**；故事內容照舊由各專科 skill 做，照舊守 layer gate、Global Dependency Protection、Draft ≠ Canon。

## 工作樹（唔另外寫一份，由現有檔案推導）
- 全作 › Act I–IV：跟 `CLAUDE.md` 嘅粗到幼 pipeline 同 `canon/_working/LAYER_MANIFEST.md`。
- 大流程：`canon/_working/` 入面嘅 tracker（≥4 個 `## Stage N — 名`），檔頭有一行 `屬於：Act I` 之類。
- 工作：`canon/_working/TASK_BOARD.md` 每行，最尾一欄「屬於」寫佢喺邊（例：`Demo 試點・場景設計`、`Act I`）。
- 步驟：`canon/_working/tasks/<工作ID>.md`。

## 步驟檔格式（網頁靠呢個讀）
```
# <工作名（白話）>
類型：task
屬於：<大流程名・步驟 或 Act>
節奏：每步停          ← 或「自動」：淨係標 ◆ 嘅步先停
衍生自：`<上層文件>`

## Stage 1 — <做咩（白話）> 〔中〕 `TODO`
- [ ] <具體要做嘅事>
- 產出：`<檔名>`

## Stage 2 — <…> ◆ 〔重〕 `TODO`
```
- 狀態只用 `TODO`／`IN_PROGRESS`／`AWAITING`／`BLOCKED`／`DEFERRED`／`DONE`。
- `◆`＝做完一定停低等作者（就算節奏係自動）。
- 份量 `〔輕〕`（落檔、更新狀態檔、整理格式、搵檔）／`〔中〕`（讀資料寫草稿、核對、總結）／`〔重〕`（設計決定、結構、入 canon 前判斷、創作候選）。網頁按 `ui_config.json` `step_models` 換 model；重同 ◆ 嘅步最低用 sonnet。
- 作者喺網頁撳嘅「停低／照節奏」「輕中重」「節奏」會直接改呢啲記號，下一步要跟最新嘅檔。

## 流程
1. **歸位（每次開工、轉工作都做）**
   - 讀 TASK_BOARD 同相關 tracker，搵呢個要求屬於邊件工作。
   - 搵到：出 ` ```ui:status `，`doing`＝白話做緊咩，`task`＝白話工作名，`work`＝工作 ID（或 `<tracker>#Stage N`）。
   - 搵唔到：喺 TASK_BOARD 開新一行（下一個未用嘅 ID、狀態「進行中」、填「屬於」），再出 `ui:status`。唔使問作者；作者唔啱會喺網頁改。
   - 兩個對話可能同時改 TASK_BOARD：寫之前重讀，淨係加／改自己嗰行，唔好重寫成個表。
2. **先出計劃（新工作或者未有步驟檔）**
   - 由粗到幼拆步驟：先定方向、再落細節；唔可以跳層（上層未批嘅，標前置條件）。
   - 每步寫清做咩、產出咩、份量、要唔要 ◆。
   - 寫入步驟檔，然後用選項卡請作者批步驟清單（可以改）。批咗先開始第一步。
3. **逐步做**
   - 開始一步：步驟檔改 `IN_PROGRESS`，出 ` ```ui:step `（`{"work","step":"Stage N","status":"in_progress","weight"}`）。
   - 一次只做呢一步，用啱嘅專科 skill。
   - 做完：步驟檔改 `DONE`（要作者批先算完嘅改 `AWAITING`），清單剔返，出 `ui:step`（`status:"done"` 或 `"waiting"`）。
   - **停唔停**：節奏「每步停」或者呢步有 ◆ → 出停低卡（下面）再用選項卡問作者；節奏「自動」又冇 ◆ → 直接開始下一步。
4. **停低卡**（要具體，唔好淨係問「批唔批」）：做咗咩、改咗邊個檔（改前／改後重點）、有咩未決、下一步係咩同佢嘅份量。然後選項卡：繼續下一步／改呢步／停喺度。
5. **收尾**：全部做完，TASK_BOARD 嗰行改「完成」或者「等作者」，更新 SESSION_LEDGER；照 CLAUDE.md 更新其他 state files。

## 舊工作補掛
作者叫「幫我掛好舊工作」時：讀晒 TASK_BOARD 同 tracker，列對照表（工作 → 建議屬於邊、點解），用選項卡請作者批；批咗先寫「屬於」欄同 tracker 嘅 `屬於：` 行。逐件問要唔要補步驟檔。唔改任何故事內容。

## 界線
- 只管工作位置、步驟、節奏、狀態；唔代作者做故事決定，唔寫 canon。
- 對作者顯示嘅字唔用內部編號（ID 只放喺 JSON 嘅 `work` 同檔案入面）。

## Workbench Choices
- 🧭 歸位開工 | 用 story-work-flow：搵我要做嘅嘢屬於工作樹邊度（冇就開新工作），出狀態卡，再講下一步。{goal}
- 🧩 拆步驟 | 用 story-work-flow：為呢件工作由粗到幼拆步驟（份量、邊步停低），寫入步驟檔，用選項卡畀我批先開始。{goal}
- ▶ 做下一步 | 用 story-work-flow：讀步驟檔，做下一步，跟節奏停低或者繼續。
- 🌳 掛好舊工作 | 用 story-work-flow：讀晒 Task 板同大流程，列「屬於邊」對照表同理由，用選項卡畀我批先寫入。
