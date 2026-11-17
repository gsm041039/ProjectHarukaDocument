# Haruka Storyboard Studio — Audit、設計、現況（2026-11-10）
狀態：WORKING（唔係 canon）。程式：`tools/workbench/studio.mjs`、`public/views/studio.js`；skill：`.claude/skills/story-anime-storyboard-director/`。

## 1. Audit 結論
| 範疇 | 現有 | 點用 |
|---|---|---|
| Server／AI | `server.mjs`＋`providers/runtime.mjs` 一次性 AI（Claude／Codex，read-only）；discuss.mjs 係同款做法 | Studio 直接共用 `runProviderPrompt`，唔另起 server |
| 頁面 | `views.json`＋`views/<id>.js`；`state.<名>` 自動入網址 | 加一個 view「分鏡 Studio」（故事組） |
| Skill | `.claude/skills/*/SKILL.md` 自動發現；已有 `story-storyboard-designer`（遊戲分鏡規格） | 新增 `story-anime-storyboard-director`（探索演出）；兩者分工，Unity 規格仍交舊 skill |
| Story／Beat／角色 | `build_index.py` 登記 beat、角色、決定 | AI 方案時用 Read/Grep 讀 canon；來源欄（`ref`）記 beat 文件。**未做**：由 Beat 板一撳開工帶入 |
| 生圖 | `tools/scene_gen_runner.py`：Playwright＋CDP 連已登入 ChatGPT，但**綁死 IMAGE_PROMPT_SPEC 場景編號**（parse spec→refs→submit→poll→download） | 要抽出「job＝prompt＋參考圖」入口先可以接 Studio（見 §4）。第一版冇接 |
| 決定追溯 | CANON_DECISION_LOG／QUESTION_QUEUE 係 canon 層 | Studio 自己有 `events.jsonl`（append-only 試驗層），唔寫 canon；重要決定日後可由作者批准後經 writeback 提升 |

**結論：做喺 Workbench 入面（新 view＋新模組），唔分兩個系統。** 理由：AI provider、skill、檔案連結、對話全部已經喺度；分開只會產生兩份互相矛盾嘅資料。資料層獨立（`canon/_working/storyboard/<work>/`），所以日後想拆出去都得。

## 2. 產品設計（已做）
- **層次**：Work（一段劇情）→ 候選方案（DRAFT）→ 分鏡板（採納結果）→ Cut。Cut 有：鏡頭大小／角度／運動／秒數／畫面／觀眾新知道咩／連續性／點解用呢種形式／人物站位（layout）。
- **AI 合作**：提 2–4 套思路真係唔同嘅方案（每案：想表達、點解、好處、壞處、犧牲）；唔覆蓋已採納 cut；「用說話改一格」；每次 AI 產出記錄用咗邊個 skill＋版本 hash＋讀過邊啲檔。
- **作者控制**：採納整套／否決（可寫原因）／逐格混合入板／直接改欄位／拖人物改站位／重排／刪格／存版本／回復版本。
- **追溯**：`events.jsonl` 逐條記（建立、方案、採納、否決、混合、改格 before/after、重排、版本）；AI 改動標 `by: ai`＋skill hash。拖動站位等細改動只記 before/after，唔逼批准。
- **Preview**：無聲 animatic，按 cut 次序、秒數、hold、基本 pan／push／T.U.／T.B.。
- **MOCK**：只喺 UI 測試用，方案名同卡上清楚標「MOCK 假資料」。

## 3. 驗證
`node tools/workbench/tests/studio_check.mjs`（MOCK，免費）／`… real`（真 AI）。2026-11-10 兩種都過；真 AI 對「晴香推開空教室門」交出 3 套（純留白／先主觀後抽離／快切後突然靜止），思路真係唔同，連續性欄有 screen direction／位置／知情。UI 已喺瀏覽器驗證（揀 work、方案卡、分鏡板、編輯器、Preview）。

## 4. 已知限制／下一步（按價值）
1. ~~帶入真實 Beat~~ **已做（2026-11-10）**：Beat 板每個 beat 有「🎞️ 開分鏡」，帶來源檔＋beat 標題／摘要／功能入新工作表單（只帶 Beat 層文字，唔會自動讀同場角色／場景；AI 提方案時自己 Read canon）。問題頁入口未做。
2. **圖片**：由 `scene_gen_runner.py` 抽出通用 job（prompt＋refs＋輸出路徑），Studio 每格出生圖 prompt（粗稿／中等／精修三檔）、管理候選圖同版本；Cut 已預留 `image` 欄。
3. **影響提示**：Story／角色／skill 改動時，列出引用咗佢嘅 work（`source.ref`＋events 內 skill hash 已具備資料）。
4. **Skill 比較**：同一段劇情用舊／新 skill hash 各提一次並排（proposal.meta.skill 已記版本；skill 舊版要靠 git 取）。
5. 圖→Layout 反推（要分 AI 估計 vs 作者確認）、多 Key Pose、畫面標註、camera frame 拖動、骨架姿勢：未做。
6. Prompt 要求先核對角色檔，但第一次實測 AI 冇真係讀檔（`reads` 空）；已加強 prompt，未重測。

## 5. UI 改版（2026-11-10，作者 UI Direction 修正）
**Audit：** 第一版將 Studio 塞入 Workbench 管理介面，方案係文字牆、縮圖細、AI 同選中嘅 cut 冇連動、編輯器喺頁底、版本係下拉選單 → 唔符合「Visual Workspace-first」。
**改版：** 獨立全螢幕工作台 `tools/workbench/public/studio.html`（http://localhost:4317/studio.html；Workbench 側欄「分鏡 Studio」只係入口；Beat 板「🎞️ 開分鏡」開新分頁帶入）。佈局跟作者給嘅示意圖：頂欄（Scene 選擇／存版本）＋左 Library（Project›來源›Scene、Characters、Skills、Source）＋中央 Outline／Board／Layout／Compare／Preview＋右 AI Director（跟選中 cut；AI／Properties／History／Trace）＋底部可收起 Timeline（播放、按秒數比例、點擊跳到、空白鍵播放）。
**流程：** 選 cut（Ctrl/Shift 多選）→ AI 提修改候選（只係候選，唔直接改）→ Compare 睇「現有→候選」縮圖 → 採納（自動存版本＋記 `decision.apply`）。方案比較：每套一行大縮圖，撳格加入混合托盤再加入分鏡板。
**保留：** 後端 API／資料／skill／追溯 events 全部沿用，新增 candidates（suggest／apply／dismiss）、add、多選 remove、cut.origin（來源方案＋skill）。
**未做：** Layout 只有站位／朝向，冇骨架姿勢、Camera Frame、標註、圖片 overlay；Outline 係簡單版；Locations／References 未接；Layout 拖曳／Timeline scrub 細節未逐項實測。

## 6. 改方向：由 beat 直接生成＋說話改（2026-11-10，作者要求）
- 左邊「故事」直接讀 Workbench 現行 Beat 板（LAYER_MANIFEST CURRENT）：撳 beat 或「🎞 整段」→ 自動開 Scene＋AI 生成分鏡（第一套直接上板，其他思路做「換方案」掣）。已做過嘅標 ●，再撳就打開。
- 右邊「叫 AI 改」：Enter 送出，AI 直接改選中 cut（冇選＝整場），即刻生效、自動存版本；「↩ 還原」、「其他改法」可睇其他候選。唔再強制比較／批核。
- 實測：Demo「B6 晴香擋」生成 3 套思路；叫 AI 將第 2 格改低角度更有衝擊 → 改咗並指出第 3 格要跟住調整。

## 7. 縮圖改用 3D 木偶（2026-11-10，作者揀）
- 研究：GitHub 上可擺姿勢人偶庫 boytchev/mannequin.js（three.js，GPL-3.0，本機工具用冇問題）；Wonderunit Storyboarder 嘅 Shot Generator 係同一思路但係獨立桌面 app，唔方便嵌入。
- 做法：`studio.html` 用 importmap 由 jsdelivr 載 three@0.170.0＋mannequin-js@5.2.3，逐格離屏渲染：人物位置（左右／遠近）、姿勢（企／行／跑／蹲／坐／伸手／指／戒備／跌／瞓／跪）、朝向（0＝望鏡頭、90＝望右）＋鏡頭（鏡頭大小→距離、角度→高低／側背／Dutch）。
- Layout：左邊 3D 鏡頭畫面，右邊俯視站位圖（拖人即時重畫），每人有姿勢下拉同朝向滑桿；鏡頭大小／角度下拉即改。
- AI prompt 已要求填 pose／turn；實測 B2 生成有姿勢，叫 AI「面對面對峙」會改 turn ±90。
- 限制：只係人形木偶（美夜子貓形都係人形）、冇場景道具／背景；開頁頭 1 秒縮圖可能係黑色（木偶貼圖未載完，載完自動重畫）。需要上網載 CDN。

## 8. 場景道具／背景＋撳 beat 流程修正（2026-11-10）
- 場景 set 全場共用（`work.set`：env 日間／黃昏／夜晚／室內＋props 牆門窗枱椅長凳床建築車樹燈柱樓梯欄杆箱大屏幕瓦礫），同人物同一座標，所以每格鏡頭唔同但空間一致。AI 生成方案時順便出 set；叫 AI 改可以連場景一齊改；Layout 可以換環境、加／拖／轉／放大縮細／刪道具；版本會連 set 一齊存。
- 撳 beat 改為先預覽 beat 內容＋「🤖 AI 生成分鏡」掣，撳咗先建立 Scene（之前一撳就建立，加上舊 server 唔識自動上板，令作者以為多咗空白分鏡）。打開有方案但板空嘅 Scene 會自動放第一套上板。左邊只列非 beat 嘅 Scene，beat 做過用 ● 標。
- 改咗 server 程式（studio.mjs）要重開 Workbench 先生效。
