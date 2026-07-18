# IMAGE SPEC PIPELINE 指令檔

**版本**：v1.0（2026-07-17 建立，作者已批核做法）
**目的**：為所有 beat 生成 image spec（格式對齊 `IMAGE_PROMPT_SPEC_FINAL_72_COMPLETE.md`），同時審計並修正/刪除現有 135 場景 spec 中不準確的條目。
**性質**：呢個係視覺概念圖 spec 工程，唔係 Scene/Script 層寫作，唔違反三層 pipeline；但所有內容必須標明依據版本，Beat Sheet 更新後相關 spec 須標記重做。

---

## 0. 檔案結構

```
canon/_working/image_spec_pipeline/
├── PIPELINE_INSTRUCTIONS.md      ← 本檔（唯一指令來源，每個 agent 開工前必讀）
├── MANIFEST.md                   ← 進度總表（每批完成後必須更新）
├── DIGEST_CHARACTER_STATES.md    ← 角色「外觀狀態/變化」digest（階段0產出）
├── DIGEST_LOCATIONS.md           ← 地點/場景視覺 digest（階段0產出）
├── DIGEST_REFERENCE_IMAGES.md    ← 現有 reference image 檔名對應表（階段0產出）
├── CHANGE_LIST_EXISTING_SPEC.md  ← 現有135場景審計結果 + 改/刪提案（階段1產出，author gate）
└── output/
    ├── IMAGE_SPEC_ACT_I.md       ← 新 spec 輸出，一幕一檔
    ├── IMAGE_SPEC_ACT_II.md
    ├── IMAGE_SPEC_ACT_III.md
    └── IMAGE_SPEC_ACT_IV.md      ← 等 Act IV Outline 完成後先開
```

Agent 中間產物（事實清單等用完即棄嘅嘢）放 session scratchpad，唔好留喺 repo。

---

## 1. 三階段流程

### 階段 0 — Digest 建立（做一次，之後只增量更新）
1. `DIGEST_CHARACTER_STATES.md`：見 §3 外觀處理規則。
2. `DIGEST_LOCATIONS.md`：從 06_visual_bible / 07_entities / 01_world_rules 抽每個主要地點嘅視覺定義（一地點一段，≤5 行）。
3. `DIGEST_REFERENCE_IMAGES.md`：掃 `IMAGE_PROMPT_SPEC_FINAL_72_COMPLETE.md` 內所有提及嘅 `ConceptArt_*.png` 檔名，列出「檔名 → 角色/形態/地點」對應表，並標記邊啲檔案實際存在於 repo/圖庫（如搵唔到圖庫，標 `UNVERIFIED_FILE`）。
4. 同步喺 `MANIFEST.md` 填入全部 beat 清單（來源：ACT_I_BEAT_SHEET.md、ACT_II_OUTLINE.md、ACT_III_OUTLINE.md；Act IV 留空位）。

### 階段 1 — 現有 135 場景審計（批量，每批 10 個）
- 對照現行 outline / CDL / digest，每個場景標：
  - `ACCURATE` — 冇問題
  - `OUTDATED` — 同現行 outline 唔夾（註明邊度唔夾、邊個 CDL 之後改咗）
  - `WRONG` — 事實錯誤（註明證據）
  - `DELETE_CANDIDATE` — 場景已被取消/不存在於現行故事
- 全部寫入 `CHANGE_LIST_EXISTING_SPEC.md`，並直接喺 `IMAGE_PROMPT_SPEC_FINAL_72_COMPLETE.md` 執行對應修正/刪除（見 §6，作者已授權免逐項批准）。

### 階段 2 — 逐 beat 生成新 spec（批量，每批 5 個）
- 先做 Act I 頭 3–5 個 beat 畀作者過目格式，批咗先量產。
- 順序：Act I → Act II → Act III → Act IV（等 outline）。

---

## 2. 雙 Agent 分工制（每個 beat 必行）

### Agent A — 資料員（只搵證據，唔創作）
輸入：本指令檔 §2–4、三個 digest、該 beat 所在嘅 outline/beat sheet 段落。
輸出「事實清單」（scratchpad），必含：
- Beat 編號、時間點（帝國歷年月 + Act/Phase）
- 在場角色 + 各人**當時外觀狀態標記**（見 §3，只寫狀態代號/變化，唔寫完整外觀）
- 前置事件、後續 payoff
- 依據來源（檔名 + 段落/CDL 編號）
- 可用 Reference Images（只可以引 `DIGEST_REFERENCE_IMAGES.md` 有嘅檔名）
- 明確標出「來源冇講嘅嘢」清單（等 Agent B 知道邊啲位唔可以作）

### Agent B — 撰寫＋核對員
輸入：Agent A 事實清單 + 本指令檔 §3–4 + spec 模板。
規則：
- 寫完 spec 後逐項對返事實清單
- 任何事實清單冇支持嘅內容標 `[INFERRED]`（構圖/燈光等純視覺演繹唔使標，劇情/角色狀態層面先要標）
- 唔可以自己翻 canon 加料——發現資料唔夠就喺 spec 標 `[NEEDS_FACT: ...]` 留返畀下一批 Agent A 補

### 批次審計（每批完成後）
一個審計 agent 抽查該批 2 個 spec，對照 outline 驗證事實，結果寫入 MANIFEST 該批備註。

---

## 3. ⚠️ 外觀處理規則（作者 2026-07-17 指定）

**唔好寫完整外觀描述，只寫「外觀狀態」同「外觀變化」。**
理由：外觀 canon 文件可能未更新，抄詳細外觀落 spec 會鎖死過時資料；基準外觀以 reference image 為準。

具體做法：
- `DIGEST_CHARACTER_STATES.md` 只記錄**狀態軸**：每個角色有邊幾個外觀階段、每個階段喺邊個 Phase 生效、階段之間變咗啲乜（delta）。例：「操：Stage 1（外表完美）→ Stage 2a（E-09a 後，鏡前縫牙期）→ …」
- Spec 入面寫角色時：寫「狀態標記 + 本場景相對變化」，例如「操（Body Horror Stage 2a：外表仍完美，掉牙初期）」，唔好寫「黑長直髮、著XX洋裝」呢類基準外觀。
- 基準外觀一律交畀 Reference Images 承載；冇 reference image 嘅角色/形態，標 `[NO_REF — 基準外觀以最新 canon 為準，生成時另查]`。
- Midjourney prompt 內嘅外觀字眼盡量引用形態級描述（形態名、能量色、剪影特徵），避免鎖死細節（髮飾、服裝細節）。

---

## 4. 每 beat Spec 模板（v2，2026-07-17 作者要求精簡——只保留有助生成圖片嘅內容）

**⚠️ 精簡原則**：作者明確要求淨係保留「圖片說明」「Midjourney 生成提示」「Reference Images」三個核心區塊——呢啲先係真正用嚟 gen 圖嘅內容。**劇情背景、劇情位置、前置事件、後續payoff、詳細核心描述長文——全部刪走**，唔再寫入 spec。目的：用更少 token 產出更多張圖。

Agent A 事實清單、CDL 依據、時間點呢啲考證過程**仍然要做**（唔可以走精，準確性唔可以因為精簡輸出而犧牲）——但只喺 Agent A→Agent B 傳遞事實清單時使用，唔寫入最終 spec 文件。如果之後需要追溯某張圖嘅劇情依據，查返 `CHANGE_LIST_EXISTING_SPEC.md` 或者 Agent A 事實清單（如有保留）。

```md
## [Beat編號]：「中文標題」（English Title）[ACT_X]

**建議輸出文件名**：`ConceptArt_Beat_<Act>_<BeatID>_<Slug>.png`

### 圖片說明
（畫面內容，一段過唔分鏡，包含足夠細節畀生成模型理解構圖/角色狀態/場景，但唔需要交代劇情因果）

**Reference Images**：
- 角色（狀態標記）：`檔名.png`（只可引 digest 有嘅檔名；冇就標 `[NO_REF]`）

### Midjourney 標準版
（prompt，跟現有文件慣例：--ar 9:16 --niji 6 --style raw）

**視覺重點**：
- 3–5 點（純視覺提示，例如關鍵細節/構圖重點/唔可以出錯嘅視覺元素）

⭐評級（1–5星，跟現有文件標準）
```

**保留但精簡嘅標記規則**：`[INFERRED]`/`[NEEDS_FACT]` 標記依然要用，但只標喺影響實際畫面內容嘅位（例如角色外觀/地點造型冇canon支撐），唔使再標劇情層面嘅事實缺口（因為劇情背景已經唔寫入spec）。

---

## 5. MANIFEST 規則

- 每個 beat 一行：`Beat ID | Act/Phase | 狀態 | 依據版本 | 批次 | 備註`
- 狀態值：`PENDING` / `FACTS_DONE` / `SPEC_DONE` / `AUDITED` / `STALE`（依據嘅 outline 之後改咗，要重做）/ `BLOCKED`（等 Act IV outline 或等作者答問題）
- 每批完成後必須更新 MANIFEST，先算完成該批。
- Resume 規則：任何新 session 接手，先讀本檔 + MANIFEST，唔可以靠記憶。

---

## 6. Author Gate 一覽

**⚠️ 作者 2026-07-17 explicit 授權**：審計/修正/刪除現有 135 場景 spec 全程唔使逐項問作者批准——搵到問題直接改，唔洗停低等確認。原因：repo 有 git 版本歷史做安全網，改壞可以還原。**但每項改動／刪除都必須喺 `CHANGE_LIST_EXISTING_SPEC.md` 留低記錄（改咗咩、依據邊個 CDL/outline、原文係咩），保留可追溯性同可review性**——呢個記錄責任唔可以因為唔使批准而省略。

| 動作 | 需唔需要作者批 |
|---|---|
| 新增 beat spec | 唔使（但頭3–5個要作者過目格式，呢點不變） |
| 改現有場景嘅細項事實錯誤 | 唔使，直接改，落 change list 記錄 |
| 刪除現有場景 / 劇情背景重寫 | **唔使**（2026-07-17 起，作者已授權），直接執行，落 change list 記錄改動內容 |
| Digest 內容同 canon 有衝突 | 標記 + 入 QUESTION_QUEUE，唔可以 silent resolve（呢條唔變——canon 本身矛盾屬於另一層問題，唔係 image spec 執行細節） |
