# Haruka Workbench Web UI Protocol

PROTOCOL_VERSION: 1

作者而家主要用 **Haruka Workbench**（`Workbench_Start.bat` → http://localhost:4317）同 AI 工作，取代 chat box。呢份協議話畀每個 session 聽：點樣輸出先可以喺網頁度正確顯示、點樣處理網頁送嚟嘅操作、要維護邊啲檔。**喺 VSCode／terminal 入面工作都照用**：所有規則都設計成 chat 入面照樣睇得明。

程式位置：`tools/workbench/`（`server.mjs`＝Agent SDK server；`build_index.py`＝讀 md 出 `index.json`；`public/`＝網頁；`views/`、`cards/`＝插口）。

## 1. 問作者 → 用 AskUserQuestion

- **顯示文字一律唔用編號（2026-10-16 作者再強調）**：作者睇到嘅所有字——正文、AskUserQuestion 嘅 `header`／`question`／`label`／`description`、所有 `ui:` 卡、`ui:next` 建議、對話標題、步驟清單——都唔准有內部編號或版本名。包括：問題／決定編號（QQ-／CDL-）、事件／beat 編號（E-09、M5、B7、G4）、盲審格編號（D-17-G4）、文件版本名（v4.1、V5、Batch 6）、Stage／Phase 編號、角度編號。改用佢實際係乜：「M5」→「demo 最尾大家喺基地嗰場」；「Batch 6 vs v4.1」→「後來寫嘅逐場詳細版 vs 之前修正過嘅版本」；「CDL-125」→「美夜子見鏡頭就擋嘅設定」。編號只寫入 state files。網頁 server 會截住有編號嘅選項卡退返要求重寫（`server.mjs` 嘅 `CODE`）。

- 要作者揀嘅嘢（候選方向、批唔批、範圍）**預設用 AskUserQuestion 工具**。網頁會畫成可以剔嘅選項卡，連「其他／自己寫」同「唔揀，直接講」兩個出口。
- 選項文字照 `story-orchestrator`「Plain-Language Explanation Rule」同「Candidates-First Rule」：`label` 用候選嘅自然名稱（唔係 A/B/C，唔係內部編號），`description` 用一兩句白話講會發生咩＋代價。詳細嘅五項解釋（發生咩／點解／代價／放棄咗咩／真正分別）放喺問之前嘅正文或 `ui:author-decision` 卡。
- 限制：每次 1–4 條問題、每條 2–4 個選項、`header` ≤ 12 字。推薦嗰個放第一，label 尾加「（建議）」。
- 開放式問題（真係需要作者提供新資訊）照舊用自由文字問，唔好硬塞選項。
- Sub-agent 用唔到 AskUserQuestion；sub-agent 唔直接同作者講嘢，問題交返 orchestrator。

## 2. 結構化輸出 → `ui:` 卡

**先講結論（2026-10-17）：** 每個主要回覆嘅**第一段**＝結論，最多兩句：做咗咩／發現咩＋要作者做咩（冇就唔講）。細節、證據、檔案路徑放後面。網頁會將長回覆摺到淨返開頭幾行，作者撳「睇晒」先見細節——第一段唔係結論，作者就要逐段揭。

先寫正常 markdown，再喺後面加一個 fenced block：` ```ui:<type> ` ＋ 一個 JSON object。網頁識嘅類型會畫成卡；唔識嘅類型會原樣顯示（唔會爛）。JSON 要合法（雙引號、冇尾逗號）。

| type | 幾時用 | JSON 欄位 |
|---|---|---|
| `mini-log` | 每次主要回應尾（取代純文字 Mini Log 嘅顯示；markdown 版照寫） | `skills_used[]`, `done[]`, `pending[]`, `blocked[]`, `next` |
| `author-decision` | Director-Facing Display Format 嘅問題 | `happened`, `why_now`, `my_view`, `consequences`, `question`, `options[]`（`name`, `what_happens`, `why`, `cost`, `given_up`, `difference`）, `recommended` |
| `status` | 開始一段長工作前嘅一句交代 | `doing`, `because`, `stop_at?`, `layer?`, `task?` |
| `progress` | 層／階段有變（入咗新 layer、開始新 stage）時；網頁右邊「而家喺邊」面板會亮起對應層 | `layer`（baseline／act／sequence／beat／scene／dialogue／script）, `stage`, `task?` |
| `next` | **每次主要回應尾必出**（放喺 mini-log 之後）：2–4 個建議下一步，作者撳一下就會送出 | `suggestions[]`（`label` 白話動作名, `why` 一句點解建議＋代價, `prompt?` 撳咗之後送畀你嘅完整指示），`discuss?` 有呢欄＝呢個建議係開一場自動討論：網頁開設定頁預填 `{topic, range, stop, links[{id,title,file}], skill?, roles?[]}`，作者撳開始先收費；幾時建議、點砌見 `story-auto-discussion` skill） |

`author-decision` 卡只係將上下文排得易讀；真正要作者揀嗰下，緊接住用 AskUserQuestion。
**`next` vs AskUserQuestion：** 有真正要作者決定先可以繼續嘅嘢 → AskUserQuestion（會停低等）；冇卡住、只係提議下一步做咩 → `ui:next`（唔會停低，作者可以唔理，自己打字）。`next` 嘅建議要跟 Plain-Language Explanation Rule：`why` 講清點解、代價。第一個係你最推薦嘅。
**步驟清單：** 做多於兩步嘅工作，一開始用 TodoWrite（或 TaskCreate／TaskUpdate）列步驟，做一步更新一步——網頁面板會即時逐步剔，作者唔使問「做到邊」。步驟用白話寫（例：「讀 Beat 層 v4.1」），唔用內部編號。
**卡入面同正文一樣唔准出現內部追蹤編號**（QQ-／CDL-／E-xx 等）。
加新卡類型：喺上表加一行，再加 `tools/workbench/public/cards/<type>.js`（export `render(data)`）。

## 3. 網頁送嚟嘅操作 → ` ```ui:intent `

作者喺網頁拖 beat、加減 beat、合併、改 task 狀態、押後問題等，網頁**唔會直接改檔**，而係送一條訊息：上面係白話清單，下面係 ` ```ui:intent ` JSON（`{protocol, intents:[{type, target, payload, note}]}`）。

處理規則：
- 當作**作者親自下嘅指示**，但照該層 pipeline、author gate、Global Dependency Protection 處理——唔可以因為來自網頁就跳 gate，亦唔可以 silent canonize。
- 改之前用白話講：會改邊個檔、下游邊啲要 revalidate；有需要批核就用 AskUserQuestion 問。
- `type` 參考（開放清單，唔識嘅 type 就讀 `note` 理解）：`beat.move`、`beat.add`、`beat.remove`、`beat.merge`、`task.set_status`、`question.priority`、`question.defer`、`doc.mark_revalidate`、`matrix.refresh`（matrix 行嘅問題已答但狀態未更新）。
  另有：`question.resolve`（payload.answer）、`question.drop`（作廢：QUESTION_QUEUE 標 DROPPED＋原因，**保留紀錄唔刪**）、`decision.review`（只開問題，唔直接改 canon）、`beat.revalidate`、`task.set_status`、`visual.set_state`、`doc.supersede`（LAYER_MANIFEST 標 SUPERSEDED）、`doc.name_mismatch`、`art.redo`／`art.approve`（記入對應角色／視覺文件）、`ledger.todo_done`／`ledger.todo_drop`（SESSION_LEDGER 該條 `[ ]` 改 `[x]` 或加 ~~刪除線~~＋原因）。`pipeline.set_status`（改 tracker 嗰個階段嘅狀態碼）、`docs.register`（登記入 LAYER_MANIFEST，核實層同父層）。`voice.pick`（將作者揀嘅候選句記入該工作坊微場景嘅「作者選擇」，記日期）。
- Beat 改動改 intent `payload.file` 指明嗰份文件（Beat 板有 Demo／正式等多塊，唔好假設係邊份），並喺對應逐 beat 詳細設計（例如 V5 batch）標 `REVALIDATE_REQUIRED`。改完照常更新 state files。

## 4. 要維護嘅檔（網頁直接讀）

- `canon/_working/TASK_BOARD.md`：並行 task 表。**開 task、轉狀態、完成**嗰一刻就更新；Session 欄填今個 session id（如知道）。
- `canon/_working/LAYER_MANIFEST.md`：文件層／父層／現行與否。產出新版本、某份降做 Reference／Superseded、writeback 時順手更新。
  - **Beat 板由佢自動生成**：`layer=beat` 嘅檔每份一塊板，按 `canon/_working/<資料夾>/` 分 track（`demo_pilot`→Demo 試點、`story_construction`→正式，新資料夾自動成新 track）；`## BEAT:` 格式嘅逐 beat 詳細設計會對返佢嘅「父層」。新 Beat 層文件冇登記就唔會喺板上出現。Beat 文件格式支援：`**ID 標題** — R/N`、`### ID 標題`／`### Beat X — 標題 [狀態]`、首格係 ID 嘅 Beat 表。
- 以上兩個檔只記工作狀態同文件關係、唔承載故事真相，`PILOT`／`EXPERIMENT` run 都可以更新（唔受 `WRITE_BLOCKED_BY_RUN_MODE` 限制）。
- `NEXT_ACTION.md` 最頂嘅 `> **單一步（日期…）：** … 需要作者 input：YES/NO` 格式**唔好改**——網頁靠佢 parse。
- `QUESTION_QUEUE.md` 表格嘅 `QID | … | Status | …` 欄名同 `**STATUS（備註）**` 寫法保持；`DEMO_PILOT_TRACKER.md` 嘅 `### Stage N — 名 ◆ \`STATUS\`` 格式保持；Beat 檔嘅 `**ID 標題** — R/N` 同 `## BEAT: ID` 格式保持。
- 改咗以上格式而網頁讀唔到，網頁「今日」會顯示「資料讀取提示」；見到就修返格式或改 `tools/workbench/build_index.py` 對應 `parse_*`。

## 4B. 網頁點樣連埋所有嘢（維護時要知）

`build_index.py` 會將問題（QQ-）、決定（CDL-）、矩陣題目、現行 Beat、task（T-）、視覺語言（VL-）、角色（canon/03_characters）、美術資料夾、文件全部登記成「實體」，再由內文抽**編號、角色名、檔名**建立雙向連結；網頁任何實體都可以撳開睇「相關」。所以寫文件時：引用其他嘢**用編號或檔名**（例：「見 CDL-123」「QQ-227」「`ACT_I_OUTLINE.md`」），網頁先連得到。角色名以角色檔標題（`# 全名（English）`）同成長追蹤表標題做準；美術跟 `art/ConceptArt/<類>/<名>/` 自動分組，`_BAK`／`BAK` 子資料夾當舊版。

**有方向嘅關係（2026-10-17）：** 除咗「有提過對方」，網頁仲會顯示有類型嘅關係（詳情面板「🧬 關係」、文件地圖彩色線）。來源：LAYER_MANIFEST 父層（衍生自）、md 連結（連去）、編號（引用；決定引用問題＝答咗）、角色名（講到）、對話／自動討論紀錄（讀過／改過）。**產出或者改寫一份工作文件時，喺檔頭寫關係行**，網頁就會連得到：

```
衍生自：`ACT_I_SEQUENCE_MAP.md`
取代：`BEAT_LAYER_V5_BATCH3_M2toM5.md`
影響：`shion_voice_discovery.md`、`character-performance-bibles/shion.md`
依據：`00_Story_Brief.html`、`ACT_I_BEAT_SHEET.md`
```
關鍵字：衍生自／父層／來源（derived）、依據／基於（based on）、取代（supersedes）、影響／下游（affects）；檔名用反引號，一行可以多個。「取代」要同 LAYER_MANIFEST 將舊版標 SUPERSEDED 一齊做。**層級樹**（範圍揀選用）＝ LAYER_MANIFEST 嘅層同父層，加 Beat 層文件入面嘅 `##` 段落同 beat——新 Act／Sequence／Beat 文件要登記入 LAYER_MANIFEST 先會出現喺樹度。

## 4C. 自動發現（唔使改網頁）

- **Skill**：`.claude/skills/*/SKILL.md` 嘅 front-matter `name`／`description` 會自動出現喺「開新工作」入面；SKILL.md 提到嘅資料夾同文件會連去嗰個 skill（文件結構頁「適用 skill」）。**新 skill 一定要寫好 `description`，同埋喺內文寫清佢讀寫邊啲資料夾／文件**，網頁先連得到。
- **Pipeline**：`canon/_working/` 入面任何有 ≥4 個 `## Stage N — 名`／`Phase N`／`階段 N`／`P01 — 名` 標題、而且讀到狀態（DONE／IN_PROGRESS／TODO／BLOCKED／DEFERRED／AWAITING，寫喺標題 backtick 或者段落頭幾行）嘅檔，會自動成為「今日」頁嘅 pipeline 路線；階段段落入面提到嘅 skill 名會變成開工掣。開新 pipeline 時跟呢個格式寫 tracker。
- **對話 ↔ 文件**：網頁記低每個對話／自動討論讀過同改過邊啲檔（`.tmp/workbench/session_files.json`）；文件詳情顯示「💬 相關對話」，對話右邊顯示「📎 今次涉及」，回覆入面嘅檔名同角色名會變成連結。所以回覆入面提文件**寫檔名**（例：`BEAT_LAYER_V4_1.md`），網頁先連得到。
- **人話層**（`tools/workbench/plain.mjs`＋`public/plain.js`）：列表（今日、問題、決定、Task、未完成事項）顯示 Haiku 改寫嘅一句白話，存 `.tmp/workbench/plain.json`；原文喺滑鼠停留／撳開詳情度睇。所以 state file 原文可以照舊寫畀 AI 睇，但**標題欄**盡量一開始就寫成人話。
- **快捷掣**：`tools/workbench/launchers.json`（作者喺網頁自己加／刪）。
- **講話題，AI 揀 skill**：對話首頁「🧭 開始（AI 揀 skill）」同「開新工作」冇揀 skill 時，開場會帶「（先由你揀 skill：…）」。收到就照 `story-router` 規則揀 skill，**第一句白話講「我會用〈skill〉處理，因為…」**，然後直接入嗰個 skill 嘅流程；兩個以上合理而揀錯代價唔細先用選項卡問。
- **✨ 開工**（`tools/workbench/public/smart_start.json`）：作者喺任何嘢（問題／決定／beat／角色／場景／美術組／文件…）撳「✨ 開工」，網頁按類型推薦 skill（作者最常用嘅排先），出嗰個 skill 嘅方向掣，一撳開一個帶埋「相關：<標題｜ID｜檔案>」嘅對話。收到呢類開場，**先讀相關檔再做**。要改推薦，改 `smart_start.json`（類型 → skill 名清單）。
- **頁面一撳開工**：對白工作坊（全部角色；冇工作坊就由 voice-designer 照格式建 `<名>_voice_discovery.md`）、場景圖（新場景 spec、重試失敗）、美術（`tools/ImagePrompt.md` 目錄入面每套模板都係一個掣）、問題／決定／矩陣「＋ 新」、Beat 層空嘅時候「開始做 Beat 層」。新增頁面都要有呢類開工掣，背後冇檔案結構就由對應 skill 照網頁讀得到嘅格式建立。
- **Skill 一撳掣**：每個 SKILL.md 尾可以有 `## Workbench Choices`，每行 `- <emoji> <≤10 字標籤> | <開場指示>`（可用 `{goal}` 代作者打嘅目標）。網頁喺「開新工作」揀咗 skill、同對話面板「用緊嘅 skill」度顯示成掣。**新 skill 要寫呢段**（3–6 個真實模式／選擇；指示要守 gate、要作者揀就寫「用選項卡問我」）；冇寫就用通用掣。
- **自動討論**（`tools/workbench/discuss.mjs`；方法同幾時建議見 `story-auto-discussion` skill——**任何對話**遇到作者未有傾向嘅多方向問題，都應該考慮喺 `ui:next` 放一個帶 `discuss` 嘅建議）：幾個角色 agent 喺作者設定嘅題目／範圍／停止點入面傾，獨立主持人每輪判斷停唔停；agent 只可以讀（Read/Grep/Glob）。**討論結果係 DRAFT，唔係作者批准**：收到「帶入對話決定」嘅總結，要照正常 gate 用選項卡問作者，唔可以直接寫 canon。討論可以「連住」問題／決定／beat／角色／文件（agent 會以佢哋為依據）、用某個 skill 嘅方法同方向掣、或者由 skill 加角色（嗰個 agent 會先讀該 SKILL.md）；每場討論都係一個實體（`DISC:<id>`），會喺相關問題／決定嘅「相關」度出現。`discussion.save` intent＝將總結記入 `canon/_working/<日期>_<題目>_DISCUSSION_LOG.md`，標 DRAFT。
- **「🛠️ 改進 skill」**：作者喺對話撳呢個掣，代表要求你回顧今次對話改進用過嘅 skill：列出問題同改動前後、用選項卡問批邊條、批咗先改（`.claude` 同 `.agents` 兩份同步）、跑相關 validator、記 SESSION_LEDGER。
- **場景圖**：讀 `IMAGE_PROMPT_SPEC_FINAL_72_COMPLETE.md` 總覽表（「劇情順序」＝`## 圖N` 編號；「有圖」欄用 `✅ 有圖`／`❌ 生成失敗（原因）`），圖檔喺 `art/ConceptArt/Scene/`。保持呢個格式（`tools/scene_gen_runner.py` 都靠佢）。
- **對白工作坊**：讀 `character-voice-workshops/*.md` 每個 `##` 微場景入面表頭第一格有「候選」嘅表（`候選 | 百分位 | 備註`），同 `### 作者選擇…` 段。寫新微場景跟呢個格式，網頁先出到揀句掣。
- **Brief**：`00_Story_Brief.html` 係最準設定源；文件結構頁按佢嘅六大部分（`<h2 class="category-title">`）同入面連結去嘅 canon 文件組織。

## 4D. 作者控制（2026-10-17）
- **助手（sub-agent）上限**：每個對話頂有「🤖 助手」選單（預設＝`ui_config.json` 嘅 `agent_cap_default`，跟 CLAUDE.md Sub-Agent Budget）。上限內 server 自動批；超出會彈卡問作者，作者唔批你會收到 deny——**自己做，或者講清點解一定要派**，唔好換個方法偷派。
- **用量**：側欄每頁顯示 5 小時／本週 Claude 用量（`/api/usage`，SDK experimental；撳一下更新）。
- **問法模型**：側欄「🪞」掣即刻用新記錄嘅說話更新 `canon/_working/author_voice/AUTHOR_LENS.md`（`/api/lens`）。
- **快捷掣**：對話框兩行——對話回覆（`quick_replies`）同「📁 文件」操作（`quick_actions`，`{label, prompt}`），都喺 `ui_config.json` 改。
- **思考深度（effort）**：側欄同對話頂「🧠」選單（層級喺 `ui_config.json` `effort_levels`）；作者中途改會見到「🧠 由呢度開始思考深度」。
- **隨時轉**：對話 →「🤖 交畀 AI 傾」；自動討論 →「💬 轉去對話」（傾到一半都得，會返去原本嗰個對話，冇就開新）。收到「傾到一半轉過嚟」嘅內容＝DRAFT，照 gate 問作者。討論中途作者可以「👥 改角色」「＋1 輪」。
- **作者親手打嘅字入 log**：`server.mjs` 只將作者親手打嘅（新話題／回覆／選項卡自己寫／討論插話，靠 `said` 欄）寫入 `canon/_working/author_voice/AUTHOR_UTTERANCES.jsonl`；掣同模板 prompt 唔入。VSCode／terminal 由 `.claude/hooks/log_author_prompt.py` 入。畀 `author-lens` skill 歸納作者問法。
- **揀咗就自動討論**：未完成事項同問題頁剔幾條 →「🤖 自動討論」，設定頁預填呢幾項（`items`）同可以做嘅處理（`actions`，例如標完成／作廢／押後）。總結會逐項建議（`item_actions`），作者剔完撳「📤 執行揀咗嘅」先放入待送出，同頁面本身嘅掣一樣行 `ui:intent`；討論 agent 照舊只讀、唔直接改檔。新頁面想用：`ctx.openDiscuss({topic, items, actions, links})`。
- **自動討論設定助手**：撳自動討論（由對話／問題／beat 帶過嚟會自動開始）＝一個只讀 AI 跟 `story-auto-discussion` skill 讀相關文件，講「我理解你想傾…」再出 2–4 個方向掣同按話題建議嘅範圍／停止點。

## 5. 改網頁本身

- 加 view：`build_index.py` 加 `parse_<name>()` 並登記入 `PARSERS`；`public/views/<id>.js` export `render(el, ctx)`；`public/views.json` 加一行。
- **網址（上一頁／下一頁）**：網址＝`#<頁>[/<對話 id>][?<頁面狀態>&_file=…|_ent=…]`。每頁將篩選／揀咗嘅嘢放喺一個 `state.<名>` object，喺 `views.json` 用 `"state": "<名>"` 登記（唔入網址嘅欄放 `"state_skip"`）；入面嘅字串／數字／true-false／Set 會自動寫入網址同還原。新 view 唔登記就淨係記到頁名。
- 格式有破壞性改動 → 升 `PROTOCOL_VERSION`（本檔、`build_index.py`、`public/app.js` 三處同步）。
- **唔好 hard code 清單**：快速回覆、層級名同顏色、討論範圍／停止點後備、通用開工掣、助手上限選項、設定助手 model——全部喺 `tools/workbench/ui_config.json`（`/api/config`）。新加嘅「預設清單」一律放呢度。
- 自檢：`python tools/workbench/build_index.py --check`。
