# Project Haruka — 場景圖片生成指示文件

**用途**：呢份文件係一個可重複執行嘅 pipeline 指示，用嚟由 `IMAGE_PROMPT_SPEC_FINAL_72_COMPLETE.md` 入面 170 個「圖N」場景，逐個組裝出最終可以送去 AI 繪圖工具嘅完整 prompt，並將生成結果按規定命名存入指定資料夾。

**呢份文件本身唔生成圖**——佢係俾人／agent 逐個場景跟住做嘅步驟指示。每次要出圖時，跟以下 5 步。

---

## 步驟總覽

1. 由 `IMAGE_PROMPT_SPEC_FINAL_72_COMPLETE.md` 攞出目標場景嘅完整「圖N」段落內容
2. 由段落入面攞出 **建議輸出文件名**
3. 由段落入面嘅 **Reference Images** 清單，去 `art/ConceptArt/Characters/` 逐個角色資料夾核對實際存在嘅參考圖檔
4. 組裝最終 prompt = 【場景段落內容】+【固定 Anime Screenshot 風格模板（SCENE 位填入場景摘要）】
5. 生成完成後，將圖片按步驟2嘅檔名存入 `art/ConceptArt/Scene/`

---

## 步驟 1：攞場景段落內容

- 來源檔案：`d:\Projects\ProjectHarukaDocument\IMAGE_PROMPT_SPEC_FINAL_72_COMPLETE.md`
- 場景清單總覽表（文件開頭）已經係**按劇情/beat次序**排列，「## 圖N」標題入面個 N 就係呢個順序（1-170，連續冇跳號）。要生成邊個場景，直接去總覽表搵返嗰行，或者直接搜尋 `## 圖N：` 呢個標題。
- 攞返由 `## 圖N：` 呢一行開始，到下一個 `## 圖(N+1)：` 或者下一個 `# ` (區塊大標題，例如「# Act II」) 之前嘅**全部內容**——包括標題本身、任何 `⚠️`/`[已修正]` 審計備註、**建議輸出文件名**、`### 劇情背景`、`### 圖片說明`、`**劇情位置**`、**Reference Images**、**Creative Enhancements**、詳細核心描述、原有嘅生成提示（如有）。
- 呢一整段content 直接作為最終 prompt 嘅**前置 context**（等生成工具/人類理解呢個場景嘅完整劇情背景、canon 依據、審計修正過嘅事實），逐字保留，唔好自行改寫或摘要。

## 步驟 2：攞建議輸出文件名

- 喺段落入面搵 `**建議輸出文件名**：\`ConceptArt_Scene_XXX.png\`` 呢一行，攞出反引號內嘅檔名。
- 呢個就係步驟5最終存檔要用嘅檔名（唔使自己另外命名）。

## 步驟 3：解析 Reference Images → 對應實際角色參考圖

- 段落入面嘅 `**Reference Images**：` 清單會列出人物同建議參考檔名，例如：
  ```
  - 操：`ConceptArt_Misao_MagicalGirl.png`
  - 操（便服）：`ConceptArt_Misao_CasualWear.png`
  ```
- 角色參考圖實際存放喺：`d:\Projects\ProjectHarukaDocument\art\ConceptArt\Characters\{角色資料夾}\`，資料夾按角色英文名分（`Aeri` `Akane` `Akiho` `Aya` `Hanako` `Haruka` `Ko` `MagicCorpse` `Misao` `Miyako` `Others` `Rin` `Saku` `Sayo` `Soichiro` `TheAdministrationBureau` `WaaLaiKei` `Yu`），檔名慣例為 `ConceptArt_{角色}_{形態}.png`（形態常見值：`CasualWear` `CasualWear_Young` `CasualWear_Child` `MagicalGirl` `MagicalGirl_1`/`_2` `MagicCorpse` `Cat` `Crystal` `SchoolUnifrom` `Singer` `Maidoutfit` `TheAdministrationBureau`）。
- **核對規則（依優先順序）**：
  1. 如果 Reference Images 列出嘅檔名喺對應角色資料夾**確實存在** → 直接採用。
  2. 如果唔存在，但段落內文已經有 `[NOTE]`／`[已修正]`／`UNVERIFIED` 呢類備註講明應該改用邊個已存在檔案（例如圖1審計備註提過 `ConceptArt_Misao_MagicalGirl_Action.png` 唔存在、改用 `ConceptArt_Misao_MagicalGirl.png`）→ 跟返段落自己嘅備註採用。
  3. 如果段落標明 `[NO_REF]` → 唔使揾 reference，純粹憑文字描述生成。
  4. 如果都冇備註但檔名又搵唔到 → 喺對應資料夾入面揾同一角色最接近嘅基礎形態（優先順序：`MagicalGirl` → `CasualWear` → 資料夾入面任何非 `_BAK`／非亂碼命名嘅 `ConceptArt_` 開頭檔案），並喺生成記錄度註明「reference 已自動替換，原檔名 XXX 不存在」。
  5. `_BAK` 子資料夾同埋亂碼／UUID命名嘅檔案（例如 `14dba518-...png`）唔算入呢個核對範圍，除非段落明確指名。

### Reference Images 上載規則（嚴格版）

- 如果 scene block 入面列出：
  - `**Reference Images**：`
  - 然後有多個角色 / 多個檔名
  - **就要全部對應上載**
- 例如：
  - 晴香：`ConceptArt_Haruka_CasualWear.png`
  - 彩：`ConceptArt_Aya_CasualWear.png`
  - 黑奏：`ConceptArt_Kurosou_CasualWear.png`
  - → 呢三張都要一齊上載，**唔可以只 upload 其中一部分**
- 只有以下情況先可唔上載全部原列項：
  1. scene block 自己標明 `[NO_REF]`
  2. 某個 reference 檔案客觀不存在，而已按上面核對規則找到正式替代檔
  3. 使用者明確指示今次只用其中某幾張
- 如果有替代檔，原則都係：
  - **補足到 scene block 需要的全部角色 reference**
  - 唔係因為一張缺失就只 upload 剩返部分角色
- **禁止做法**：
  - scene block 寫咗 3 張 reference，但只 upload 1 張或 2 張就直接生成
  - agent 自行判斷「其中幾張應該夠」而省略其餘 reference
  - 因為方便而只上載主角、不上載同場重要角色

## 步驟 4：組裝最終 Prompt

最終送去生成工具嘅 prompt，由兩部分直接拼接（中間用一空行分隔）：

**(A) 步驟1攞到嘅完整場景段落內容**（原文照錄，唔省略唔改寫）

**(B) 固定風格模板**（下面呢個模板全文係文件 `tools/ImagePrompt` 入面已存在嘅「Anime screenshot」版本，**逐字複製，唔可以自行改動任何一句**，只可以填 `[SCENE]` 個位）：

```
Use the provided character setting sheets as the primary reference for character identity only. Preserve each character's recognizable identity, hairstyle silhouette, main hair color, main outfit shape, major color blocks, body proportion, face impression, and one or two signature accessories. Ignore the original sheet layout, annotations, turnaround format, settei presentation, and plain background. Do NOT preserve every small costume detail. Do NOT preserve every accessory detail. Do NOT preserve every trim, fold, seam, hair strand, or tiny decoration. The characters should remain recognizable through large shapes, color blocks, silhouettes, and key iconic elements, not through dense detail.

HIGHEST PRIORITY STYLE OVERRIDE:
Match the simplicity of a normal TV anime broadcast screenshot, not an anime illustration. The image should look like a clean but economical episode frame with production limitations. The character rendering must be simple, low-detail, thick-lined, flat-colored, and easy to animate.

This must NOT look like: polished anime illustration, key visual, promotional still, premium character art, detailed anime poster, concept art full-body character showcase, clean group photo.

This must look like: regular TV anime episode frame, broadcast anime screenshot, simple episode drawing, production-economical frame, low-detail but readable acting, simple TV anime background plate, strong screen-space post-processing over simple cel drawings.

IMPORTANT IMAGE INTENT:
This image is not meant to show all characters beautifully. This is not a "nice group picture." This is not a character lineup. This image should feel like one frame captured from the middle of an ongoing TV anime episode. The story is already happening before this frame, and will continue after this frame. The shot should communicate a small relationship beat before visual beauty.

STYLE GOAL:
ordinary TV anime episode screenshot, simple broadcast anime drawing, thicker clean outlines, low inner-line density, flat color blocks, almost no self-shadow detail, simple cel shading, simple painted background plate, visible screen-space bloom, visible halation, strong gradient darkening, strong bright-to-dark exposure separation, natural mid-scene framing, candid dialogue cut. The image should rely on screen-space gradient darkness, bloom, halation, and exposure separation for mood, NOT on detailed character rendering.

VISUAL RULES:
Prioritize "real TV anime episode screenshot" feeling over polished illustration rendering. Character drawing must be simpler than the reference sheets. Character detail density must be much lower than a polished anime still. Use thick, clean, simple linework. Use flat color regions. Use almost no internal cel self-shadows. Keep character shading extremely sparse and broad. Keep the background readable but simple, like a TV anime background plate. The background may have slight hand-drawn TV anime production roughness. Natural, asymmetrical staging; do not line all characters up on one flat plane. Expressions and gestures must feel caught mid-conversation, mid-reaction, or mid-gesture. No one should look like they are posing for the viewer. No text, no watermark, no readable phone UI, no readable signs.

SCENE:
[SCENE]

SCENE BEAT GENERATION LOGIC:
Do not use a fixed or hard-coded scene beat. Do not always make the same character become the center of the shot. Do not compose the image as a checklist showing every character. Instead, generate one natural micro-moment based on the selected scene beat above.
```

**`[SCENE]` 填法**（由段落內容摘出，唔係整段複製）：
- 優先用段落入面標示為「簡化描述」／「簡化核心描述」嘅字段（如有）
- 冇嘅話，用「詳細核心描述」／「圖片說明」嘅頭2-3句，濃縮做一個具體嘅場景瞬間描述（邊個角色、做緊咩動作、咩情緒、咩環境）
- 私密/單人場景（冇多角色互動嗰啲）可以忽略模板入面「群戲」相關指示（例如「four girls」「group」呢類字眼原意係群戲模板，單人場景時 `[SCENE]` 只需準確描述返個孤獨場景本身，模板其餘規則如「唔好擺拍」「唔好靚仔靚女展示」依然適用）

### 預設 prompt 組裝原則（嚴格版）

- **預設送出畀生成工具嘅 prompt，必須係：**
  1. `IMAGE_PROMPT_SPEC_FINAL_72_COMPLETE.md` 入面對應 scene 嘅 **完整原文段落**
  2. `+`
  3. 上面固定 **Anime Screenshot 模板**
- 即係話，**scene block 原文本身就係 prompt 嘅一部分**，唔只係背景參考。
- **唔可以**喺未被拒絕之前，就由 agent 自行：
  - 將 scene block 濃縮成另一份短 prompt
  - 改寫成自己概括版 prompt
  - 跳過 scene block 入面嘅審計修正 / 劇情背景 / 圖片說明 / 劇情位置 / 詳細核心描述
  - 只保留「意思差不多」嘅摘要
- 換言之，預設格式應該接近：
  - `【完整 scene block 原文照錄】`
  - 空行
  - `【固定 Anime Screenshot 模板】`

### 只有被拒絕之後，先可以改 prompt

- **內容政策 fallback 唔可以預先啟動。**
- 正確流程一定係：
  1. 先送 **原版 prompt**（完整 scene block + Anime Screenshot 模板）
  2. 如果網頁版生成工具實際回覆：
     - 內容政策拒絕
     - 要求重試 / 編輯提示詞
     - 明確顯示不允許該 prompt
  3. 先進入安全改寫流程
- 即係 **未被拒絕之前，唔可以主動幫佢改 prompt 結構**。

### 被拒絕後嘅改寫原則：最少改動，不重寫整份 prompt

- 被拒絕之後，安全改寫只可視為 **delivery prompt fallback**，唔係新 prompt 重寫任務。
- fallback 時應盡量保持：
  - 原 scene block 結構
  - Anime Screenshot 模板
  - 原本場景因果、角色、情緒、構圖重心
- 只可做：
  - 刪減 / 替換被 moderation 卡住嘅高風險字眼
  - 將過度直述受害細節改做含蓄、非血腥、非畫面直述版本
  - 補少量 negative constraints（例如 `no blood`, `no gore`, `no visible injury`）
- **唔可以**將 fallback prompt 改成：
  - 只剩一段 agent 自己重寫嘅英文摘要
  - 完全脫離原文 block 嘅另一篇 prompt
  - 「大意差不多」但結構完全唔同嘅新版本

### 執行優先級（明確）

1. **第一優先**：完整 scene block 原文照錄
2. **第二優先**：固定 Anime Screenshot 模板照錄
3. **第三優先**：只有被拒絕後，先做最少幅度安全改寫
4. **禁止**：未被拒絕前由 agent 主動自行改 prompt 成另一份濃縮版

### 內容政策被擋時：安全改寫版 Prompt 規則（限送去網頁版/高敏感 moderation 工具）

- `IMAGE_PROMPT_SPEC_FINAL_72_COMPLETE.md` 原文同本 protocol 步驟4-A 嘅完整場景段落，**仍然係 canon source of truth**；**唔可以**因為 moderation 而回寫、覆蓋、淡化原始劇情設定。
- 如果同一個場景 prompt 送去網頁版生成工具時，被內容政策攔截，允許另外組一個 **safety-adapted delivery prompt** 再試；用途只限實際出圖，**唔代表 canon 被修改**。
- 安全改寫時，**保留**：
  - 場景時空、角色身份、角色關係、情緒方向、構圖重心
  - 場景前後因果（例如逃亡、失散、被追捕、實驗設施壓迫感）
  - 「TV anime episode screenshot」嗰套固定風格要求
- 安全改寫時，**移除或弱化明示字眼**，改做「含蓄、非畫面直述、非血腥、非受害細節」寫法。優先改寫方向：
  1. 明示死亡／殺害 → 改做「失散」「再也追不上」「消失於黑暗轉角」「危險迫近」
  2. 明示兒童受害 → 改做「年幼角色於危機中被保護／被迫分離」
  3. 明示暴力動作 → 改做「追逐」「壓制氣氛」「威脅逼近」「offscreen danger」
  4. 明示血腥、傷口、屍體、處決 → 完全刪除，改做「沉重後果」「不祥預感」「aftermath tension」
  5. 明示人體實驗、活體樣本、凌虐 → 改做「冷酷研究設施」「非人道研究氣氛」「specimen-like containment mood」，避免寫身體受損細節
- 盡量避免以下高風險字眼直接出現喺 delivery prompt：`被殺`、`虐待`、`血`、`血腥`、`屍體`、`處決`、`折磨`、`活體實驗`、`拖行`、`兒童受害`、`殘肢`、`傷口特寫`。
- 可以加入以下安全定錨語句，減低被擋機率：
  - `non-graphic`
  - `implied danger only`
  - `aftermath tension without visible injury`
  - `protective separation moment`
  - `no blood, no gore, no visible injury`
  - `emotion-first dramatic frame`
- 如果原始場景屬高敏感內容，建議 delivery prompt 只保留：
  1. 一句安全版場景摘要
  2. 角色 reference 使用說明
  3. 固定 Anime Screenshot 風格模板
  4. 明確 negative constraints（`no blood, no gore, no visible injury, no abuse depiction, no graphic restraint`）
- **操作順序**：
  1. 先按正常步驟4組原版最終 prompt。
  2. 如被 moderation 擋，保留原版 prompt 記錄，再另外生成一份 safety-adapted delivery prompt。
  3. 第二次重試只改寫敏感描述，**唔好**連角色、環境、鏡頭重心一齊改到走樣。
  4. 如果安全版都被擋，記錄「該場景需再拆細／再抽象化處理」，先停手，避免無限試錯。

## 步驟 5：輸出

- 生成完成嘅圖片，用步驟2攞到嘅**建議輸出文件名**，存入：
  `d:\Projects\ProjectHarukaDocument\art\ConceptArt\Scene\`
- 如果嗰個檔名已經存在（即總覽表「有圖」欄顯示 ✅），生成前應先確認係咪要覆蓋定係另存副本待人手篩選——**唔好靜默覆蓋已有嘅圖**。
- 每次生成完，應該去 `IMAGE_PROMPT_SPEC_FINAL_72_COMPLETE.md` 總覽表將該行「有圖」欄由 ❌ 更新做 ✅（保持文件同資料夾狀態同步）。

### 自動化執行時（`tools/scene_gen_runner.py`）

- 用 `scene_gen_runner.py run` 執行時，呢個工具本身已經自動完成以下兩件事，**唔使人手再做**：
  1. 下載完成後，直接以步驟2嘅建議輸出文件名 copy 入 `art/ConceptArt/Scene/`（即已經係「正名」，唔係 ChatGPT 網頁原始下載檔名）。
  2. Copy 完成即時去 `IMAGE_PROMPT_SPEC_FINAL_72_COMPLETE.md` 總覽表搵返該建議輸出文件名嗰行，將「有圖」欄由 `❌ 未有圖` 更新做 `✅ 有圖`。
- 呢個更新用嘅係精準逐行 regex 比對（以建議輸出文件名做 anchor），唔會誤改其他行；如果嗰行搵唔到（例如總覽表檔名同 scene block 建議檔名唔一致、或者早已經係 ✅），會喺 `tmp/scene_gen_runner_state.json` 對應 job 嘅 `notes` 記低跳過原因，唔會靜默失敗亦唔會報錯中斷 batch。
- 只有喺**唔係**用呢個 runner（例如人手用網頁版逐張生成）嘅情況下，先需要跟返上面舊有嘅人手更新總覽表步驟。
- 如果一個場景最終未能生成（例如內容政策拒絕、逾時、或者開 tab 失敗），runner 會將總覽表嗰行「有圖」欄由 `❌ 未有圖` 改做 `❌ 生成失敗（原因摘要）`，方便一眼分辨「未試過」同「試過但失敗咗」。呢個標記唔會阻止之後再重跑同一場景——重跑成功時 `mark_scene_has_image` 會直接將呢個欄位覆蓋做 `✅ 有圖`。

---

## 完整範例（圖1：通風管道那夜）

## ChatGPT 網頁版 5-Tab 穩定執行 Workflow（Authoritative v2）

> **本節取代舊版「一次開 5 個 tab 再各自操作」做法。**
>
> 目標唔係假設 browser 永不失敗，而係令任何單一步驟失敗都可以被偵測、重試、重建同續跑；即使其中一個 tab 壞咗，都唔會拖垮其餘 4 個 scene。

### 0. 核心原則：只並行等待，唔並行操作 UI

5-tab 並行必須理解為：

- 可以同時有 5 個 tab 處於 `GENERATING`／`WAITING_RESULT`
- **唔可以**同時對 5 個 tab 做：開頁、focus、upload、paste、send、download、modal 操作
- 所有會改變 browser UI 或依賴焦點嘅動作，必須經過一個全域 `browser_action_lock`，逐個 tab 執行
- browser 只啟動一次；唔可以每張 scene 都重新 launch browser
- 每個 scene 綁定實際 `page/tab handle`，**唔可以靠 tab index**（第1個／第2個 tab）識別

正確模型：

```text
單一 browser process
└── 單一已登入 browser context
    ├── Slot 1 → Scene A → PageHandle A
    ├── Slot 2 → Scene B → PageHandle B
    ├── Slot 3 → Scene C → PageHandle C
    ├── Slot 4 → Scene D → PageHandle D
    └── Slot 5 → Scene E → PageHandle E

UI 操作：永遠一次只做一個 tab
生成等待：最多五個 tab 同時進行
```

### 1. Browser 啟動：Single Owner + Launch Verification

#### 1.1 禁止重複啟動

整個 batch 只可以有一個 browser owner。啟動前先檢查：

1. 已有 automation browser session 可用 → 重用
2. session 存在但 health check 失敗 → 關閉舊 session，再重啟一次
3. 完全冇 session → 啟動一次

禁止：

- 5 個 worker 同時各自呼叫 `open browser`
- 每開一個 tab 就重新 launch browser
- browser 開啟未完成就再次呼叫 launch

#### 1.2 啟動成功條件

Browser launch 唔可以只以「command 無報錯」判定成功；必須同時確認：

- browser process/session 存在
- 至少有一個可操作 page
- page 可讀取 URL
- page 可以導航到 `https://chatgpt.com/`
- `document.readyState` 至少到 `interactive`
- ChatGPT composer 或登入頁其中一個可識別畫面出現

如果 30 秒內未達成：

1. retry navigation，唔好立即重 launch
2. 再失敗 → reload page
3. 再失敗 → 關閉 browser session，等 2 秒，再重啟
4. browser launch 最多 2 個完整 attempt；之後記錄 hard failure，停止 batch，唔好無限 loop

### 2. 5-Slot Pool：逐個建立，唔好一次過 burst open

#### 2.1 固定容量

- `MAX_ACTIVE_TABS = 5`
- 活躍 tab 數包括：初始化、上載、已送出、生成中、待下載
- 新 scene 只有喺有空 slot 時先可進入

#### 2.2 建立 tab 必須序列化

開 5 個 tab 嘅正確方式：

```text
建立 Slot 1 → 驗證 ready
建立 Slot 2 → 驗證 ready
建立 Slot 3 → 驗證 ready
建立 Slot 4 → 驗證 ready
建立 Slot 5 → 驗證 ready
```

唔可以：

```text
同一時間送出 5 次 newPage/openTab
```

每次建立新 tab 後，立即記錄：

```yaml
slot_id: 1..5
scene_id: 圖N
page_handle: automation 實際 page/tab handle
initial_url: 當下 URL
latest_url: 當下 URL
state: TAB_CREATED
retry_count: 0
expected_refs: [...]
output_filename: ConceptArt_Scene_XXX.png
```

#### 2.3 Tab Ready Gate

每個新 tab 必須通過以下 gate，先可以 upload：

1. 導航至 `https://chatgpt.com/`
2. 等 `document.readyState in {interactive, complete}`
3. 確認唔係 browser error page，例如：
   - `about:blank`
   - `chrome-error://...`
   - `ERR_CONNECTION_*`
4. 確認 ChatGPT composer 可見，或者登入狀態可明確判斷
5. composer 未出現時：reload 一次；仍未出現，再重新導航一次

通過後先改 state：`READY_FOR_UPLOAD`

### 3. Scene Registry：永遠以 scene ↔ page handle 對位

必須維護一份 batch registry；任何操作前都先由 `scene_id` 取得對應 `page_handle`，再 focus 該 page。

最低欄位：

| 欄位 | 用途 |
|---|---|
| `scene_id` | 圖N 唯一識別 |
| `slot_id` | 1–5 固定 slot |
| `page_handle` | 真正操作目標，唔用 tab index |
| `latest_url` | 每次送出／導航後重新讀取 |
| `state` | 狀態機目前狀態 |
| `expected_refs` | 應上載 refs 完整清單 |
| `uploaded_refs` | UI 已確認出現嘅 refs |
| `prompt_hash` | 防止貼錯／重覆送出 |
| `output_filename` | 最終 repo 檔名 |
| `download_baseline` | 點下載前 Downloads snapshot |
| `last_error` | 最近錯誤 |
| `retry_count` | 當前 stage 重試數 |

每次 ChatGPT route 改變後，都要重新讀 URL，更新 `latest_url`。唔可以假設 `/c/WEB:...` 或正式 `/c/...` route 固定不變。

#### 3.7 已驗證 route / keep-tab 實錄（2026-07-23）

- ChatGPT 網頁版送出 prompt 後，**第一個成功證據唔一定即刻係正式 `/c/<id>`**。
- 已驗證情況係：
  1. 首頁 `https://chatgpt.com/`
  2. 送出成功後先短暫變成 `https://chatgpt.com/c/WEB:<uuid>`
  3. 之後先 normalize 做正式 `https://chatgpt.com/c/<conversation_id>`
- 所以 route 判定規則要改成：
  - **只要 URL 已由首頁變成 `/c/` 開頭，就當作已建立新 conversation**
  - **見到 `/c/` 當下就即刻 keep / handoff 嗰個 tab**
  - 唔好等正式 title、唔好等 route normalize 完先 keep，否則 tab 有機會被自動清走

已驗證成功樣本：

- Scene 4 `ConceptArt_Scene_154_HanakoDeathCreation.png`
  - temporary route：`https://chatgpt.com/c/WEB:2cd687f1-4ed6-41ca-b694-5147d4dd8280`
  - normalized route：`https://chatgpt.com/c/6a61d206-f574-83ec-8da7-141e67b156d4`
  - final title：`創世能量爆發`
- Scene 5 `ConceptArt_Scene_Keishi_AwakeningMassacre.png`
  - temporary route：`https://chatgpt.com/c/WEB:3d96d05b-605b-440a-aa92-4adf9e7eb8b8`
  - normalized route：`https://chatgpt.com/c/6a61e024-5d08-83ec-a4b6-c0aef4bbd6d1`
  - final title：`黑奏覺醒大屠殺`
- Scene 6 `ConceptArt_Scene_KurokaneUsurpation.png`
  - temporary route：`https://chatgpt.com/c/WEB:6c42d34e-978a-47e1-a7a7-85775adb6bdb`
  - normalized route：`https://chatgpt.com/c/6a61e2d3-6ebc-83ec-b241-3f827d441d78`
  - final title：`黑奏篡位場景`
  - downloaded file：`C:\Users\User\Downloads\c2502521-2af1-44ac-be48-97d60ea6d936.png`
  - copied to repo：`art/ConceptArt/Scene/ConceptArt_Scene_KurokaneUsurpation.png`
  - repo size：`1458776 bytes`
- Scene 7 `ConceptArt_Scene_Rin_Miyako_GoldenPartnership.png`
  - temporary route：`https://chatgpt.com/c/WEB:1e3cc654-6b9b-46f8-911b-6d52eab90ab1`
  - normalized route：`https://chatgpt.com/c/6a61e313-c60c-83ec-947d-7ff13febf75b`
  - final title：`凜美夜子黃金搭檔`
  - downloaded file：`C:\Users\User\Downloads\230fcacd-dc80-455e-b4e2-80d03b2397d2.png`
  - copied to repo：`art/ConceptArt/Scene/ConceptArt_Scene_Rin_Miyako_GoldenPartnership.png`
  - repo size：`1831380 bytes`
- Scene 8 `ConceptArt_Scene_Rin_FinalSacrifice.png`
  - temporary route：`https://chatgpt.com/c/WEB:9b7529d2-5c35-4c72-a3aa-e39db36a5a27`
  - normalized route：`https://chatgpt.com/c/6a61e67a-bb6c-83ec-a83c-6327688aaeb9`
  - final title：`凜的最終犧牲`
  - downloaded file：`C:\Users\User\Downloads\46b7272a-3fc9-4cd9-acbc-630c3ba407bc.png`
  - copied to repo：`art/ConceptArt/Scene/ConceptArt_Scene_Rin_FinalSacrifice.png`
  - repo size：`1949266 bytes`
- Scene 9 `ConceptArt_Scene_9_AkihoAeriAccident.png`
  - temporary route：`https://chatgpt.com/c/WEB:008ac34a-be94-4b8f-8a24-01886ca82862`
  - normalized route：`https://chatgpt.com/c/6a61e691-7e48-83ec-8441-13d07d9b67f2`
  - final title：`愛莉實驗室事故`
  - downloaded file：`C:\Users\User\Downloads\8fd0b920-d763-4267-8ab8-dd4743af5bbe.png`
  - copied to repo：`art/ConceptArt/Scene/ConceptArt_Scene_9_AkihoAeriAccident.png`
  - repo size：`1612286 bytes`
- Scene 10 `ConceptArt_Scene_10_RinMiyakoLastNight.png`
  - temporary route：`https://chatgpt.com/c/WEB:4df8e0b8-1c06-4e5f-ba4f-bce93e70004a`
  - normalized route：`https://chatgpt.com/c/6a61e6a4-2d68-83ec-8bec-d4e89492752b`
  - final title：`New chat`（本輪生成完成時 title 未自動更新，route 已固定）
  - downloaded file：`C:\Users\User\Downloads\d639406a-482b-4be5-90ac-a0bb4e1a0b82.png`
  - copied to repo：`art/ConceptArt/Scene/ConceptArt_Scene_10_RinMiyakoLastNight.png`
  - repo size：`1726913 bytes`
- Scene 11 `ConceptArt_Scene_11_CorpseApology.png`
  - temporary route：`https://chatgpt.com/c/WEB:f4063c8b-1c5b-4642-9dca-fdc8995bb7ff`
  - normalized route：`https://chatgpt.com/c/6a620691-3c38-83ec-b9bd-af804c6cbcce`
  - final title：`New chat`（生成完成時 title 未自動更新，route 已固定）
  - downloaded file：`C:\Users\User\Downloads\950ee4ea-c687-4518-9e24-98f082312cfe.png`
  - copied to repo：`art/ConceptArt/Scene/ConceptArt_Scene_11_CorpseApology.png`
  - repo size：`1778749 bytes`
- Scene 12 `ConceptArt_Scene_Aya_DailyPerformance.png`
  - temporary route：`https://chatgpt.com/c/WEB:37df803f-0c7f-43bc-8aef-e9cdc473881b`
  - normalized route：`https://chatgpt.com/c/6a6206c9-0da4-83ec-a9e3-9b5da1ffc52c`
  - final title：`彩的日常表演`
  - downloaded file：`C:\Users\User\Downloads\fa496890-2d5c-4463-a01d-b34b31acbb44.png`
  - copied to repo：`art/ConceptArt/Scene/ConceptArt_Scene_Aya_DailyPerformance.png`
  - repo size：`1487435 bytes`
- Scene 13 `ConceptArt_Scene_Rin_IntelligenceGathering.png`
  - temporary route：`https://chatgpt.com/c/WEB:a009d3ae-2508-4a04-9c2c-80f514904065`
  - normalized route：`https://chatgpt.com/c/6a6206d6-09a0-83ec-bec1-7315e3fb7a19`
  - final title：`凜的角色設計`
  - downloaded file：`C:\Users\User\Downloads\f3a5d389-15ca-4a69-af01-6a65de252226.png`
  - copied to repo：`art/ConceptArt/Scene/ConceptArt_Scene_Rin_IntelligenceGathering.png`
  - repo size：`1453159 bytes`
- Scene 14 `ConceptArt_Scene_Aya_DailyBearConfirmation.png`
  - temporary route：`https://chatgpt.com/c/WEB:3d09fd53-092d-4352-a98a-fe2c83826650`
  - normalized route：`https://chatgpt.com/c/6a6206df-80f0-83ec-a0b3-a0ed63435ac6`
  - final title：`New chat`（生成完成時 title 未自動更新，route 已固定）
  - downloaded file：`C:\Users\User\Downloads\623b1773-43ac-45f2-8850-813bc4b81fe1.png`
  - copied to repo：`art/ConceptArt/Scene/ConceptArt_Scene_Aya_DailyBearConfirmation.png`
  - repo size：`1606274 bytes`
- Scene 15 `ConceptArt_Scene_15_Haruka_Lunchbox_ThreeLayers.png`
  - temporary route：`https://chatgpt.com/c/WEB:8ea9148e-f70c-405d-a420-45f61bb3e0e5`
  - normalized route：`https://chatgpt.com/c/6a620cd9-74b0-83ec-b9bb-4f9aeec0939d`
  - final title：`三層交疊心理畫`
  - downloaded file：`C:\Users\User\Downloads\368c8cbf-3660-497b-baf2-846d6349acf7.png`
  - copied to repo：`art/ConceptArt/Scene/ConceptArt_Scene_15_Haruka_Lunchbox_ThreeLayers.png`
  - repo size：`1970289 bytes`
- Scene 16 `ConceptArt_Scene_16_BansheeFirstBattle.png`
  - temporary route：`https://chatgpt.com/c/WEB:2bfcfb98-d4bf-4e55-85be-c5319548fe81`
  - normalized route：`https://chatgpt.com/c/6a620d39-a7d8-83ec-a239-6df76093556a`
  - final title：`悲鳴女妖首戰`
  - downloaded file：`C:\Users\User\Downloads\d35d2dc6-617d-4e06-8b33-203b574033ad.png`
  - copied to repo：`art/ConceptArt/Scene/ConceptArt_Scene_16_BansheeFirstBattle.png`
  - repo size：`2146068 bytes`
- Scene 17 `ConceptArt_Scene_17_BureauDistantWatch.png`
  - temporary route：`https://chatgpt.com/c/WEB:760038aa-5086-4730-881e-4b69bf2bffc4`
  - normalized route：`https://chatgpt.com/c/6a620d5c-a3a4-83ec-873b-b83f3063ac6e`
  - final title：`情緒管理局遠望`
  - downloaded file：`C:\Users\User\Downloads\8f8b13c7-9a0a-40dc-a0a9-e3f6a55d66dd.png`
  - copied to repo：`art/ConceptArt/Scene/ConceptArt_Scene_17_BureauDistantWatch.png`
  - repo size：`1646690 bytes`
- Scene 18 `ConceptArt_Scene_18_Misao_VanityConfession.png`
  - temporary route：`https://chatgpt.com/c/WEB:22e219a3-85dd-479d-8a8e-8851b616195c`
  - normalized route：`https://chatgpt.com/c/6a620d6a-2a64-83ec-9243-492cc185a03b`
  - final title：`New chat`（生成完成時 title 未自動更新，route 已固定）
  - downloaded file：`C:\Users\User\Downloads\84f9c3fd-241f-492c-92d1-818d06ac536b.png`
  - copied to repo：`art/ConceptArt/Scene/ConceptArt_Scene_18_Misao_VanityConfession.png`
  - repo size：`1524588 bytes`

執行硬規則：

1. send 後立即輪詢目前 tab URL
2. 一見到 `/c/`（包括 `/c/WEB:...`）就更新 `latest_url`
3. 立即將該 tab 記錄為 scene 專屬 tab，並 keep / handoff
4. 之後先做 generate wait / result polling
5. route 之後如再由 `/c/WEB:...` 轉正式 `/c/...`，只視為 `latest_url` 更新，**唔係新 conversation**

### 4. Authoritative State Machine

每個 scene 只可按以下狀態前進：

```text
QUEUED
→ TAB_CREATED
→ READY_FOR_UPLOAD
→ UPLOADING_REFS
→ REFS_VERIFIED
→ PROMPT_PASTED
→ SUBMITTING
→ GENERATING
→ RESULT_READY
→ DOWNLOADING
→ FILE_VERIFIED
→ COPIED_TO_REPO
→ OVERVIEW_UPDATED
→ DONE
```

例外狀態：

```text
POLICY_BLOCKED
RETRYABLE_ERROR
TAB_RECOVERY
FAILED
```

**禁止跳步**，例如：

- 未 `REFS_VERIFIED` 就送 prompt
- 見到 send button 消失就當作 `GENERATING`
- 按咗下載 icon 就當作 `FILE_VERIFIED`
- repo 有同名檔就當作今次完成

### 5. Upload：逐 tab、完整 refs、以 UI 結果驗證

#### 5.1 Upload 前置條件

- tab state 必須係 `READY_FOR_UPLOAD`
- 取得 `browser_action_lock`
- focus 對應 `page_handle`
- 再次確認 composer 可見

#### 5.2 最穩定 upload route

1. 點 composer 左邊可見 `+`
2. 等 menu 真正展開
3. 點 `附加相片及檔案`／`從電腦上載`
4. 捕捉 file chooser
5. 一次 `setFiles([...全部 refs...])`

禁止直接 click 隱藏嘅 `input[type=file]`。

#### 5.2.1 Homepage chooser 壞 tab 即棄規則（2026-07-23 實戰定案）

首頁 upload path 有一種常見壞態：

- `+` menu 開到
- `從電腦上載` 睇到
- DOM 入面亦見到 hidden `input[type=file]`
- 但一按 upload，`filechooser` 永遠唔觸發

呢種情況**唔應該繼續喺同一個首頁 tab 深挖**。正確處理係：

1. 判定為 `BROKEN_HOMEPAGE_UPLOAD_TAB`
2. 立即 abandon 該 tab
3. 為同一 scene 開一個全新 fresh tab
4. 重新走已驗證成功 upload route

禁止做法：

- 喺同一個壞 homepage tab 反覆開關 `+` menu
- 反覆試 click hidden input
- 喺同一個壞 tab 做多輪 chooser debug

實戰上，**brand-new tab 嘅成功率高過原地修 tab**；預設應直接重開，唔好浪費 token 同操作次數。

#### 5.3 Upload 完成判定

`setFiles` 成功唔等於 upload 完成。必須等 UI 入面出現預期附件數量／縮圖，並確認：

- `uploaded_refs count == expected_refs count`
- 每張檔案都有對應縮圖或附件 chip
- 冇任何 upload spinner 長時間卡住
- 冇 `upload failed`／unsupported file 類錯誤

超過 60 秒未完成：

1. 等多 15 秒並重新讀 UI
2. reload 會清空附件，所以唔可直接 reload
3. 先嘗試移除失敗 attachment，再重新 upload 全套 refs
4. 同一 tab upload 最多 2 次
5. 再失敗 → `TAB_RECOVERY`，重建該 scene tab；其他 tabs 繼續

成功後 state = `REFS_VERIFIED`

### 6. Prompt Paste：避免 clipboard／焦點 race condition

所有 paste 必須逐 tab執行，唔可以五個 worker 共用 clipboard。

推薦順序：

1. 取得 `browser_action_lock`
2. focus 正確 `page_handle`
3. focus composer textbox
4. 清空 textbox
5. 將完整 prompt 寫入 clipboard
6. 立即 `Ctrl+V`
7. 讀返 textbox 內容長度／開頭結尾 sentinel
8. 驗證內容唔係空白、唔係上一張 scene prompt

Prompt 驗證至少包括：

- 字元數達預期範圍
- 包含本 scene `## 圖N：`
- 包含 `HIGHEST PRIORITY STYLE OVERRIDE`
- 包含該 scene 輸出檔名或 scene 標題
- 計算／記錄 `prompt_hash`

如果 paste 後內容不完整：

1. 清空 textbox
2. 再 paste 一次
3. 第二次仍失敗 → 用直接 fill/insertText fallback（如 automation 支援）
4. 仍失敗 → 重建該 tab

成功後 state = `PROMPT_PASTED`

### 7. Submit：必須有雙重確認，避免假送出

按 send 前：

- state = `PROMPT_PASTED`
- refs 數量正確
- send button visible + enabled

按 send 後唔可以即刻切 tab。必須留喺當前 tab，直到出現至少一個「已接受送出」證據：

- user message bubble 已出現
- textbox 已清空
- route 由首頁轉成 `/c/...`
- stop button／生成 placeholder 出現
- `正在生成更詳細的圖像` 或同等生成狀態出現

至少符合 **兩項**，先判定 `GENERATING`。

如果 20 秒內未有兩項證據：

1. 檢查 prompt 是否仍留喺 textbox
2. 如仍在 textbox，send retry 一次
3. 如 message bubble 已存在，禁止再次 send，避免重覆生成
4. 無法判斷時，以 DOM 是否已有本 scene user message 為最終防重依據

成功後立即：

- 更新 `latest_url`
- state = `GENERATING`
- 釋放 `browser_action_lock`
- 先可以處理下一個 tab

### 8. 五個 tab 真正並行嘅位置：Generation Wait Loop

當最多 5 個 tab 都進入 `GENERATING` 後，使用 polling，唔好長時間 block 喺單一 tab。

建議每 8–12 秒巡檢一次，每次只讀狀態，唔做重 UI 操作：

```text
for each active scene:
    if state == GENERATING:
        inspect page without changing composer
        classify as:
          - still generating
          - result ready
          - policy blocked
          - retryable page error
```

#### 8.1 RESULT_READY 條件

至少同時確認：

- 最終 image tile / 大尺寸 generated image 存在
- generating placeholder／停止按鈕已消失，或頁面明確顯示完成
- 圖片元素已 loaded（naturalWidth > 0）

#### 8.1.1 最少 token 自動 download 判定

為咗減少 token，同一張圖**唔應該固定每幾秒 full snapshot 一次**，亦唔應該長時間盲等之後先一次過檢查。

推薦做法係：

1. send 成功後只記錄 `latest_url`
2. 先等一個**短保守窗口**再開始檢查（建議 20–30 秒）
3. 之後只做**低頻、窄範圍條件檢查**
4. 一符合 `RESULT_READY` 就即刻 download

建議最低 token 策略：

- **第一輪檢查**：送出後約 25 秒
- **之後輪詢**：每 12–15 秒一次
- **每次只檢查三件事**：
  1. 停止生成／生成中 UI 是否消失
  2. 是否已出現 generated image 元素
  3. 該 image `naturalWidth > 0`

只要同時滿足以下條件，就應立即自動 download，**唔需要再 hold**：

1. scene tab URL 仍然係原本 `latest_url` 對應 conversation
2. 頁面上已存在新生成圖片元素
3. 該圖片已成功載入（`naturalWidth > 0`）
4. `停止生成` / 生成中 placeholder 已消失，或明確見到完成狀態

即係話，**download trigger 應該係 condition-based，唔係 time-based**：

- 唔係「hold 90 秒先 download」
- 而係「25 秒後開始低頻檢查；一見到 ready condition 就 download」

如果要再壓低 token，可再加一條：

- **只有當前 active batch 入面最早送出嗰張先輪詢**
- 其餘 scene 先唔讀 full DOM，等第一張 ready 或到自己預計時間窗先檢查

呢個做法比起對每個 generating tab 密集 snapshot，token 會低好多。

#### 8.1.1.1 Generated image download target fallback 次序

生成完成後，generated image 嘅 `alt` 並唔穩定；可能見到：

- `生成圖像：...`
- `已產生圖像`
- 空 `alt`，但實際上有一張新嘅大圖已經 load 完

所以 download target 唔可以只靠單一 `alt` 值。預設 fallback 次序應為：

1. 優先搵最新一張 `alt^="生成圖像："` 且 `naturalWidth > 0` 嘅大圖
2. 如無，再搵最新一張 `alt="已產生圖像"` 且 `naturalWidth > 0` 嘅大圖
3. 如仍無，再用「最後一張已載入、非 reference thumbnail、尺寸明顯較大」嘅 generated image element

換言之，**download selector 係多層 fallback 規則，唔係單 selector**。

#### 8.1.1.2 `預覽` / `Mapped characters to settings` 只屬中間態

見到以下訊號時，**只可以判定為 `POST_SEND_INTERMEDIATE`，唔可以判定 `RESULT_READY`**：

- `預覽`
- `Mapped characters to settings`
- conversation title 已更新
- 頁面已有 message/result 容器，但未見實際 loaded generated image

真正 `RESULT_READY` 仍然必須同時滿足：

1. generated image element 已存在
2. `naturalWidth > 0`
3. generating UI 已消失，或頁面已有明確完成態

#### 8.1.2 DOM-first / low-token 執行規則（2026-07-23 定案）

以下規則屬於預設低 token workflow，後續 batch 應直接跟：

1. **唔用 full `domSnapshot()` 做常規巡檢主工具**
   - 常規巡檢優先用細範圍 DOM / `evaluate()` 直接讀：
     - 當前 URL
     - 是否仍見到 `正在產生圖像` / `停止回應` / `停止生成`
     - 是否存在 generated image element
     - generated image `naturalWidth > 0`
   - 只有以下情況先升級做 full `domSnapshot()`：
     - locator 壞咗
     - upload / send 狀態矛盾
     - 需要重建 selector
     - recovery / debugging

2. **upload 前唔預設做大段 DOM dump**
   - 如果 ChatGPT 首頁版面與已驗證 layout 相同，直接沿用既有穩定 path：
     - fresh tab
     - `加入檔案及更多內容`
     - `從電腦上載`
     - upload refs
   - 只有 upload chooser 冇彈出，先讀 menu DOM / input state 做 fallback
   - 如果確認屬於 `BROKEN_HOMEPAGE_UPLOAD_TAB`，**直接開新 tab 重做**，唔好喺同一 tab 做多輪 debug

3. **每個 generating tab 自己有 `next_check_at`**
   - 唔做 global full sweep
   - 每張圖 send 成功後記：
     - `sent_at`
     - `next_check_at = sent_at + 25s`
   - scheduler 每輪只檢查：
     - 已到 `next_check_at` 嘅 tab
     - 或當前 batch 最早應檢查嗰張
   - 未 ready → `next_check_at += 15s`

4. **poll 只做最小必要讀取**
   - 常規 poll 唔應包含：
     - open tabs 全列表重印
     - page 全文
     - 大段 snapshot tail
   - 常規 poll 應只回傳：
     - `scene_id`
     - `tab_id`
     - `url`
     - `generating=true/false`
     - `generated_image_found=true/false`
     - `naturalWidth`
   - `預覽` / `Mapped characters to settings` / title update 只記做中間態，唔升格做 ready

5. **download 後默認唔做人眼 QA**
   - 預設流程：
     - download
     - 檔案 baseline 差異確認
     - `.crdownload` 消失
     - 檔案可 decode
     - copy 入 repo
   - `view_image` / screenshot 只喺以下情況先做：
     - 高風險 scene
     - 下載檔大小異常
     - DOM 顯示結果同 scene 預期明顯可能唔符
     - 使用者明確要求核圖

6. **tab inventory 只喺 recovery 時先查**
   - 唔好每批 / 每輪 poll 都重新列出全部 open tabs
   - 正常 batch 只維持本輪最少 state：
     - `scene_id -> tab_id`
     - `tab_id -> latest_url`
     - `sent_at`
     - `next_check_at`
   - 只有 tab 遺失、route 對唔上、或 chooser 壞咗，先重新查 `openTabs()`

7. **固定成功模板優先，現場分析後置**
   - 已驗證穩定 workflow：
     - new tab
     - open homepage
     - `+`
     - upload refs
     - paste full prompt
     - send
     - 見到 `/c/WEB:` 即 keep
     - normalize 後記正式 `/c/...`
   - 之後 batch 預設先走呢條固定 path
   - 只有失敗先進入現場分析 / DOM 深挖

8. **generated image selector 要容忍 alt 漂移**
   - download 前優先用 DOM 判斷：
     - 最新 `生成圖像：...`
     - 次選 `已產生圖像`
     - 再次選「最後一張已 loaded 嘅大圖」
   - 唔可以寫死成只接受單一 alt 值

9. **`圖片生成失敗` 先用頁內 `重試`**
   - 如果頁面明確出現：
     - `圖片生成失敗`
     - 同場可見 `重試`
   - 預設流程係：
     1. click 頁內 `重試`
     2. 等 8–15 秒
     3. 再走最小 poll
   - 只有 retry 後仍失敗，先升級為 scene resend / brand-new tab recovery

10. **scene-level recovery 次序固定**
   - upload chooser 壞 → brand-new tab
   - send 後中間態未完成 → 繼續低頻 poll
   - 明確 `圖片生成失敗` → 先頁內 retry
   - retry 都唔得 → 同 scene brand-new tab resend
   - 禁止一開始就做最重 recovery

11. **title 只係弱訊號**
   - `New chat` 唔代表失敗
   - title 漂移去其他摘要亦唔代表 scene 對錯
   - scene 身份應以：
     - route
     - output filename
     - generated image 結果
     - download/copy 寫回紀錄
     做最終對位

12. **最少 token batch 原則**
   - 預設：
     - 不重讀 protocol
     - 不重印大段 source
     - 不做全頁 snapshot 巡檢
     - 不做每張圖人工核對
   - 只保留：
     - prompt 組裝
     - send 驗證
     - 到鐘 tab poll
     - download / copy / writeback

#### 8.2 POLICY_BLOCKED 條件

只有見到明確政策拒絕／要求修改提示詞，先進入 `POLICY_BLOCKED`。跟文件原有規則建立 safety-adapted delivery prompt。

重試 safety prompt 時：

- 同一 scene 可留喺原 tab
- 先確認原請求已終止
- 清空 composer
- 重新 paste + submit
- safety retry 最多 1 次

#### 8.3 Page Error Recovery

如果 tab 出現白頁、network error、DOM 全失：

1. 先記錄目前 `latest_url`
2. reload 一次
3. 如原 conversation route 可開返，繼續巡檢
4. 如 route 失效但 user message 已送出過，先嘗試 history／latest_url 恢復
5. 恢復唔到 → `TAB_RECOVERY`
6. 重建 tab 前先確認唔會對同一 scene 重覆送出；無法確認時標記人工核對，唔好盲目 resubmit

### 9. Result Recovery：完成一張就即刻下載，唔等齊五張

任何 scene 一進入 `RESULT_READY`，就暫停新 tab 初始化，先完成回收：

1. 取得 `browser_action_lock`
2. focus 對應 page
3. 再驗證 generated image
4. 建立 Downloads baseline snapshot：檔名、大小、mtime
5. state = `DOWNLOADING`
6. 執行下載
7. 等候新檔穩定落地
8. 目視／尺寸／檔案驗證
9. copy + rename 入 repo
10. 更新 overview
11. 關閉該 tab，釋放 slot
12. 如 queue 仲有 scene，先補入下一張

即係採用 **rolling 5-slot pool**，唔係固定五張全部完成先開下一批。

### 10. Download：以 baseline 差異識別，唔靠「最新檔」估計

#### 10.1 下載優先順序

1. automation 可直接對 generated image 做 browser/media download
2. 圖片 tile 右下角下載 icon
3. 開 modal／圖片檢視 → `儲存`
4. 同一會話短效 signed URL 只作最後即時救援
5. screenshot/crop 只可作暫存 fallback

#### 10.2 檔案識別

按下載前，記錄 Downloads 所有檔案 snapshot。按下載後只接受：

- baseline 後新增嘅檔
- 或 baseline 中同名檔 size／mtime 有實質變化
- `.crdownload` 必須消失
- 檔案大小連續兩次檢查相同，先當作寫入完成

建議檢查間隔 2 秒，穩定兩次。

#### 10.3 下載檔驗證

最低驗證：

- extension 為 `.png`／有效圖片格式
- 檔案可正常 decode
- width、height 合理，唔係 0
- 檔案大小唔似 screenshot icon／錯誤頁小圖
- 目視內容符合 scene

之後先 copy 到：

`d:\Projects\ProjectHarukaDocument\art\ConceptArt\Scene\{output_filename}`

Copy 後再驗證 source 同 destination：

- size 相同
- 可 decode
- destination mtime 已更新

### 11. Tab Recovery：只重建壞 tab，唔重啟全 browser

任何單一 scene 失敗，優先只處理該 tab：

```text
retry current action
→ reload current tab
→ navigate current tab to latest_url
→ close + recreate only this tab
→ 最後先考慮重啟整個 browser
```

只有以下情況先重啟全 browser：

- 所有 page handle 同時失效
- browser process 已斷線
- 新建 tab 都失敗
- ChatGPT 全部 tabs 都無法導航／操作

重啟前必須寫出 checkpoint registry；重啟後：

- `DONE` scene 唔再處理
- `GENERATING` scene 優先按已記錄 URL 恢復
- 無法恢復嘅 scene 標記需核對，避免雙重送出

### 12. Retry Budget：有限重試，唔准無限 click

每個 stage 建議上限：

| Stage | Retry |
|---|---:|
| Browser launch | 2 |
| New tab creation | 3 |
| Navigation / ready gate | 3 |
| Upload refs | 2 |
| Prompt paste | 3 |
| Submit | 2，但必須防重 |
| Result polling timeout recovery | 2 |
| Download | 3 種 route 各 1 次 |
| Tab recreate | 1 |

超出上限：

- state = `FAILED`
- 記錄 scene、URL、stage、錯誤、已試方法
- 釋放 slot，繼續其他 scene
- 唔可以因一張失敗而停止全部 batch，除非 browser owner 本身死亡

### 13. Timeout 係「狀態未改變」時間，唔係死等固定秒數

唔好只寫 `sleep(30)`。每個等待都應 polling + condition：

- navigation ready：最多 30 秒
- attachment upload：最多 60 秒
- submit accepted：最多 20 秒
- image generation：可較長，但每 8–12 秒巡檢；只要 DOM 有進展就續等
- download start：最多 30 秒
- `.crdownload` completion：最多 120 秒

如果有狀態變化，更新 `last_progress_at`；只有長時間完全冇進展先 recovery。

### 14. Recommended Scheduler（5 tab 同時生成但 UI 永遠單線）

```text
initialize browser once
load checkpoint/registry

while queue not empty or active slots exist:

    # A. 優先回收完成結果
    for scene in active slots where state == RESULT_READY:
        with browser_action_lock:
            download → verify → copy → update → close tab

    # B. 補滿至 5 個 active slots
    while queue not empty and active_slot_count < 5:
        scene = dequeue()
        with browser_action_lock:
            create one tab
            ready gate
            upload all refs and verify
            paste prompt and verify
            submit and verify accepted
        # scene now GENERATING

    # C. 無副作用巡檢所有 generating tabs
    poll every active GENERATING tab

    # D. 隔離處理 policy / retryable error
    recover only affected scene/tab
```

### 15. Agent 執行硬性指令

Agent 必須遵守：

1. **先確認 browser owner，唔好一開始連續 call 五次 open browser。**
2. Browser 成功後，逐個建立 tab；每個 tab ready 後先建立下一個。
3. Upload、paste、send、download 一律取得全域 UI lock。
4. 只有 `GENERATING` 狀態可以 5 個同時存在。
5. 每次操作前以 `page_handle` 對 scene，唔以目前 active tab 或 tab 次序估計。
6. 每次 send 後等雙重證據，確認真係送出先切走。
7. 每次 refs upload 後驗證數量，唔可以 `setFiles` 後直接 send。
8. 邊張完成就即刻下載及拉回 repo，唔好等齊 5 張。
9. 單 tab 壞咗只重建該 tab；唔好第一時間重啟整個 browser。
10. 所有重試都有限額；禁止無限 reload／click／resubmit。
11. 任何可能造成重覆生成嘅情況，寧願標記人工核對，都唔可以盲目再 send。
12. 每完成一個 state transition 就寫 checkpoint，令 browser crash 後可以續跑。

### 16. 最重要修正：唔再要求「5 個 tab 同一時間開」

最穩定而又真正做到 5 張並行嘅定義係：

```text
五個 tab 可以同時生成；
但五個 tab 唔可以同時被操作。
```

所以流程必須係：

```text
Tab 1：開 → ready → refs → prompt → send → generating
Tab 2：開 → ready → refs → prompt → send → generating
Tab 3：開 → ready → refs → prompt → send → generating
Tab 4：開 → ready → refs → prompt → send → generating
Tab 5：開 → ready → refs → prompt → send → generating

之後五個先真正同時等待生成。
```

呢個做法會比「一次 burst 開 5 tab，五邊同時 upload/paste」慢少少進入滿載，但穩定性高好多，亦可以保持最多 5 張圖同時生成。


**步驟1** 攞到嘅段落內容（節錄）：
> ## 圖1：「通風管道那夜（螢的犧牲）」（The Night in the Ventilation Shaft）[ORIGIN_FLASHBACK]
>
> **⚠️ 2026-07-17 批次8審計修正**：……（全段原文照錄）……
>
> **建議輸出文件名**：`ConceptArt_Scene_HotaruSacrifice_VentilationShaft.png`
>
> ### 劇情背景 …… ### 圖片說明 …… **劇情位置** …… **詳細核心描述** ……

**步驟2**：輸出檔名 = `ConceptArt_Scene_HotaruSacrifice_VentilationShaft.png`

**步驟3**：Reference Images 段落冇列出（本場景係兩個童年角色，彩6歲＋螢，canon 未有專屬幼年形態參考圖）→ 按規則3/4處理：段落內文冇 `[NO_REF]` 明確標註，但 `Characters/Aya/` 入面亦搵唔到「6歲」版本 → 採用規則4，用 `ConceptArt_Aya_CasualWear.png` 做粗略年齡/身形參考並喺記錄註明「6歲童年形態冇專屬 reference，僅供髮型/瞳色參考，體型比例需生成時自行調整」；螢冇獨立資料夾，屬 `[NO_REF]`，純文字描述生成。

**步驟4**：最終 prompt = 【上面成段劇情背景/圖片說明/詳細核心描述】+ 空行 +【固定 Anime Screenshot 模板，SCENE 位填入：「狹窄通風管道內，螢將熊公仔塞進6歲彩懷中後轉身引開帝國軍搜索，彩透過管壁縫隙目睹螢消失在黑暗轉角」】

**步驟5**：生成結果存做 `d:\Projects\ProjectHarukaDocument\art\ConceptArt\Scene\ConceptArt_Scene_HotaruSacrifice_VentilationShaft.png`，並將總覽表 #1 嗰行「有圖」欄改做 ✅。

---

## 備註

- 呢個 pipeline 假設執行者（人或 agent）有能力讀取 `IMAGE_PROMPT_SPEC_FINAL_72_COMPLETE.md` 全文、有能力存取 `art/ConceptArt/Characters/` 同 `art/ConceptArt/Scene/` 資料夾、並有連接到實際圖片生成工具（Midjourney / DALL-E / ComfyUI 等）嘅能力——呢份文件本身唔包含任何自動化腳本，純粹係逐步指示。
- 固定風格模板（步驟4-B）修改時應同步更新 `tools/ImagePrompt` 入面對應版本，避免兩份文件不一致。
- 如使用網頁版生成工具（例如 ChatGPT 網頁版）而唔係 API / 本地模型，內容政策閾值通常比 source 文本更敏感；依照上面「安全改寫版 Prompt 規則」做 delivery prompt 屬允許流程，但只限出圖層，不改 canon。
