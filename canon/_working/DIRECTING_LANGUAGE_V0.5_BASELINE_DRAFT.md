# Directing Language v0.5 — Minimum Viable Baseline（DRAFT，未經作者批核）

> **狀態**：`DRAFT — AI_PROPOSED_CANDIDATE`，未 writeback 入 `11_directing_playbook.md` 或任何正式 canon。
> **範圍**：呢個係 Round 196 Sequence-layer freeze 之外嘅獨立 track（導演語言基建，唔係 Sequence/Scene 生產），唔改變 Act I 生產嘅現行凍結狀態。
> **目的**：回答「而家嘅導演語言夠唔夠支撐 Act I 向下推進」，唔係重寫一份新嘅 Directing Bible。
> **唔包含**：對白、鏡頭清單、故事事件設計。

---

## 0. 首要發現——呢個項目嘅導演語言比預期成熟好多

掃描四份文件（`11_directing_playbook.md` / `08_narrative_design_bible.md` / `06_visual_bible.md` / `10_gameplay_bible.md`）之後，**大部分 v0.5 要求嘅範疇已經有實質內容**，唔係空白。真正缺口只得三個（見第 4 節）。所以呢份文件唔係「由零起家」，而係「盤點 + 補三個洞 + 畫 freeze line」。

---

## 1. 現存材料盤點與分類

| 範疇 | 現存材料 | 出處 | 分類 |
|---|---|---|---|
| Theme/Directing Language 分層 | 態度vs命運 → 身體代價×債務 → 舞台×傷口 → 三個導演主詞 | `11_directing_playbook.md` §全劇導演語言層級圖 | **STABLE** |
| 代價可見度 | 代價上鏡原則（身體代價先行、夢境代價少用、遞增） | `11_directing_playbook.md` §代價上鏡原則 | **STABLE** |
| 角色演出（B） | 錯位、功能性活著/三種麻木、姿態與表演性、Tell固定文法 | `11_directing_playbook.md`§第一層氣氛手法／§表情麻木；`06_visual_bible.md`§姿態與表演性 | **STABLE** |
| 情緒代價/傷害（C） | 三個導演主詞（維持/承接/埋單）、身體代價×債務全套 | `11_directing_playbook.md` | **STABLE** |
| 被觀看/公開凝視（D） | 舞台×傷口全套（成形→裂口→結算取回）、劇內觀看位置、身體凝視限制、即時直播vs殘留影像 dialect | `11_directing_playbook.md` §舞台×傷口 | **STABLE**（本作最強嘅一環） |
| 負空間（E，視覺層） | 負空間與缺席（缺席倒影/聲音/色彩） | `06_visual_bible.md` §負空間與缺席 | **STABLE（視覺層），敘事層/謎團層 PROVISIONAL** |
| 重覆母題演變（G） | 重覆變奏（建立→加深→扭曲→回收）、五個核心符號物件四幕演化 | `11_directing_playbook.md`；`08_narrative_design_bible.md` §symbol-objects | **STABLE** |
| Gameplay↔敘事交接（F） | 關卡三層次(L1物理/L2敘事/L3象徵)、Mission三層對齊、Debt Echo系統、不可回滾代價 | `10_gameplay_bible.md` §Level Design／§Mission Architecture／§失敗回饋 | **STABLE** |
| 恐怖/異常遞進 | 三層恐怖平衡（日常→異常→恐怖，異常唔可以自我解釋） | `08_narrative_design_bible.md` §horror-balance | **STABLE**——呢個已經係「觀眾自行察覺 vs 角色/旁白點破」嘅明文禁令，直接支撐 Information Hierarchy 嘅一半 |
| 創傷揭示手法 | 三層日常穿插法（禁直接閃回，戰前/戰後行為告知＋幕間日常） | `08_narrative_design_bible.md` §daily-interleave | **STABLE** |
| 場景結構（I 部分） | 場景四拍模板（代價信號→本能反應→承接行動→關係後果） | `08_narrative_design_bible.md` §four-beat-scene；`consequence-driven-progression.md`（Cost Signal分類） | **STABLE** |
| Beat 級 pressure 轉移（I） | Beat Sheet 正式層已有「pressure into next beat」欄位（Round 187 落實） | `ACT_I_BEAT_SHEET.md` | **STABLE（Beat 層），但未寫成 Directing Playbook 明文原則** → PROVISIONAL |
| 角色成長障礙分類 | 四牆分類（身體牆/因果牆/關係牆/身份牆） | `08_narrative_design_bible.md` §four-walls | **STABLE**（但呢個係角色弧光工具，唔係 Information Hierarchy——名相似但功能唔同，唔可以誤用） |
| 誤導/資訊落差（A 部分） | 誤會機（角色層錯誤認知）、鏡（管道三，對照角色揭示主角狀態） | `08_narrative_design_bible.md` §narrative-service-channels | **STABLE（角色↔角色錯誤認知），角色↔觀眾知識落差冇統一原則** → 見第4節缺口1 |
| 安靜/呼吸戲（H） | 小確幸稀缺器（幕間日常、K房場景）、三層日常穿插法「幕間日常」 | `08_narrative_design_bible.md` | **PROVISIONAL**——有素材但冇一條「點解安靜戲唔會悶/唔可以硬加衝突」嘅明文原則 → 見第4節缺口2 |
| Cinematic Camera | 鏡頭語法與分鏡規範、情緒鏡頭三段法、構圖禁忌 | `06_visual_bible.md` §cinematography-grammar；`10_gameplay_bible.md` §cinematic-camera | **STABLE，但屬 shot-level，本輪唔動（見凍結線）** |

**分類統計**：STABLE 佔絕大多數；PROVISIONAL 兩項（負空間敘事層延伸、Beat→Playbook明文化）；真正 MISSING 一項（Information Hierarchy 統一原則）；TOO_ABSTRACT_TO_USE／INCONSISTENT／SCENE-SPECIFIC_ONLY：本輪掃描冇發現。

---

## 2. 呢個項目真正要解決嘅導演問題（非攝影機術語出發）

由現存材料反推，Project Haruka 反覆要處理嘅問題實際上係：

1. 點樣令觀眾覺得「佢個心情差緊半拍」而唔使講出口（已解＝錯位）
2. 代價點樣先撐住、後先追上嚟（已解＝延遲、代價上鏡原則）
3. 私人傷口一旦被公開睇見會發生咩事（已解＝舞台×傷口，本作最強項）
4. 創傷點樣唔靠閃回都畀觀眾感受到（已解＝三層日常穿插法）
5. 異常點樣自己浮出嚟而唔使角色或旁白指出（已解＝三層恐怖平衡）
6. 同一個動作重複出現點樣每次都加深意義而唔係符號濫用（已解＝重覆變奏）
7. Gameplay 失敗點樣寫返落敘事代價、唔淨係扣血（已解＝失敗回饋/Debt Echo）
8. **觀眾知道咗但角色未知道（或者反過嚟）嗰種資訊落差，應該點統一處理**（未解——缺口1）
9. **安靜戲點樣保持戲劇生命力，唔靠硬加衝突、又唔會悶場**（未解——缺口2）
10. **場景／Beat 完結時「帶住咩壓力入下一段」呢條規則，應唔應該喺 Directing Playbook 層面明文化，唔淨係留喺 Beat Sheet 欄位**（半解——缺口3，屬整理性缺口，唔係新設計）

---

## 3. Cross-Lens Test（套用喺下面新提出嘅三條原則）

每條新原則已用以下七問檢查：合角色？助故事清晰？傷害懸念？遊戲內用得？導致重複走位？同其他原則矛盾？全面套用會唔會變成 mannerism？——結果附喺各原則下面嘅「風險」欄。

---

## 4. 新原則（只補真正缺口，唔重複已有材料）

### 4.1 資訊層級／知情落差（Information Hierarchy）—— 補缺口1

**導演問題**：觀眾知道嘅、角色知道嘅、角色以為自己知道嘅，三者唔一致時，應該點分配鏡頭/敘事權限？

**意圖觀眾體驗**：觀眾清楚自己企喺邊個知情位置（超前角色／同步角色／落後角色），而唔係單純「睇唔明」。

**DEFAULT**：
預設用「觀眾與至少一名在場角色同步」——即觀眾知情範圍等於某個具體視角角色嘅知情範圍（通常係主觀鏡頭/視角角色）。呢個係最安全嘅底線，因為避免觀眾意外被迫全知而拆穿懸念，亦避免觀眾完全落後而混亂。

**BREAK WHEN**：
- 想製造戲劇反諷（觀眾知、角色唔知）——用於已有嘅**誤會機**場景，令觀眾睇住角色行緊錯路而產生張力，而唔係純粹「等揭盅」。
- 想保留**負空間**（角色知、觀眾唔知）——用於身份謎團、夕/黑奏嗰類真相，令觀眾同故事入面「唔知道嘅果班人」共感，而唔係俯視。
- 想製造**恐怖層遞進**（觀眾同角色都唔知，但觀眾比角色早半拍感到「唔對路」）——呢個已經係三層恐怖平衡嘅異常層機制，本原則只係將佢正式收編做 Information Hierarchy 嘅其中一種狀態，唔係新機制。

**DO NOT USE WHEN**：
- 唔可以為咗「畀觀眾睇多啲」就經常性拉觀眾去全知視角——全知視角用得多，「舞台×傷口」嘅劇內觀看位置張力會被稀釋（觀眾唔再需要透過任何一個觀看位置理解故事，直接開天眼）。
- 唔可以喺同一場戲入面不明來由咁切換觀眾知情位置（例如中段忽然俾觀眾睇到只有角色A知道嘅嘢，冇任何鏡頭/敘事訊號解釋點解），會讀成穿崩而唔係刻意設計。

**AVOID**：靠旁白/字幕直接宣佈邊個知邊個唔知——呢個違反已有嘅「異常不得自我解釋」禁令（`08_narrative_design_bible.md`§horror-balance），應該用鏡頭停留/剪接次序/視角選擇本身去暗示知情落差，唔用文字說明。

**EXAMPLE**：秋穗隱瞞愛莉意識存在（誤會機已有案例）——若採用「觀眾同晴香同步」，觀眾同晴香一齊被蒙在鼓裡，揭盅時衝擊最大；若改做「觀眾早知、晴香未知」，張力轉為懸疑等待，兩種都合法，但一場戲入面唔可以中途切換。

**CONFIDENCE / STATUS**：`NEEDS_ACT_I_CASE_TO_RESOLVE`——原則本身可以即刻用，但邊個場景用邊種知情配置，要留返俾實際 Scene 層先能驗證（唔喺呢一層預先鎖死）。

---

### 4.2 安靜／呼吸戲文法（Breathing Scene Grammar）—— 補缺口2

**導演問題**：幕與幕之間、危機與危機之間嘅安靜戲，點樣保持戲劇生命力，而唔淪為填時間，又唔可以為咗「有嘢發生」而人工加衝突？

**意圖觀眾體驗**：觀眾喺安靜戲入面感受到「呢班人仲有普通生活」，同時暗中累積緊對佢哋嘅依附（為後面嘅失去鋪墊），而唔係察覺到「呢場戲純粹係休息位」。

**DEFAULT**：
安靜戲嘅戲劇動力嚟自**已有材料嘅疊加**，唔係新加衝突：
- 用**小確幸稀缺器**（`08_narrative_design_bible.md`§narrative-service-channels 管道四）建立具體、廉價、可被打斷嘅小確幸；
- 疊加**幕間日常**（三層日常穿插法第三層）令行為本身帶住輕微創傷殘留（例如美夜子排茶杯）；
- 疊加**錯位**（笑容/身體/語言其中一項差半拍），令「安靜」本身已經有輕微不同步，唔使外加事件。

三者疊加已經足夠令一場戲「表面平凡，底層有讀」，唔需要引入新衝突或反轉。

**BREAK WHEN**：
- 如果呢場戲嘅功能係做**幕末轉調前嘅最後一次真暖**（例如 Round 187 提及嘅「亮 vs 不安」比例設計），可以刻意唔加任何錯位/殘留痕跡，保留一段「乾淨」嘅安靜，令後面嘅裂痕對比更大——呢個係例外，唔係常規。

**DO NOT USE WHEN**：
- 唔可以用「忽然有人講返件慘事」嚟打斷安靜戲營造戲劇性——直接違反三層日常穿插法「幕間日常必須 feel trivial」嘅明文要求。
- 唔可以連續多場安靜戲都用同一種小確幸（例如次次都係布丁），會變成符號濫用（違反重覆變奏「唔可以只重覆唔變奏」原則）。

**AVOID**：安靜戲入面塞入資訊量大嘅世界觀說明或伏筆對白——資訊密度同「安靜感」互相抵消，令場戲讀落好似採訪多過生活。

**EXAMPLE**：K房場景（美夜子唱《雨天》，`08_narrative_design_bible.md`§K-room-scene）已經係呢條原則嘅現成示範——小確幸（K房）+ 幕間日常殘留（歌曲選擇本身透露心理狀態）疊加，冇額外衝突。

**CONFIDENCE / STATUS**：`STABLE_ENOUGH_FOR_ACT_I`——三種現有材料疊加即可執行，唔需要等 Scene 層驗證先可用。

---

### 4.3 Beat→Scene 壓力交接明文化（Pressure Handoff）—— 補缺口3（整理性，非新設計）

**導演問題**：Beat Sheet 已有「pressure into next beat」欄位，但 Directing Playbook 冇對應嘅明文原則，容易令 Scene 層作者唔知道呢個要求都適用喺 Scene 結尾。

**DEFAULT**：
每個 Scene／Sequence 結尾必須明確交出以下四者之一或以上，並可追溯返上層 Beat 嘅「pressure into next beat」：新壓力、新不確定性、新情緒狀態、新知識（呼應原始任務簡報第9節）。呢個唔係新規則，係將 Beat 層已有要求，同場景四拍模板「拍四：關係後果」正式打通——拍四嘅「關係後果」應該同時滿足「帶入下一段嘅壓力」呢個條件，兩者現時分別存在但未明文相連。

**BREAK WHEN**：刻意設計嘅「假結束」（例如小確幸場景企圖俾觀眾以為壓力解除，其實冇）——呢個本身已經係本作手法（小確幸消失做轉折點），唔違反本原則，只係壓力嘅呈現方式係「延遲」（已有機制）。

**CONFIDENCE / STATUS**：`STABLE_ENOUGH_FOR_ACT_I`——純粹整理現有兩份文件嘅隱性連結，唔涉及新設計，可以即刻採用；正式寫入 `11_directing_playbook.md` 與否留待作者批核（見第7節）。

---

## 5. Directing Language Gap Map

| 範疇 | 分類 |
|---|---|
| 舞台×傷口 / 被觀看 (D) | `STABLE_ENOUGH_FOR_ACT_I` |
| 情緒代價 (C) / 代價上鏡 | `STABLE_ENOUGH_FOR_ACT_I` |
| 角色演出 (B) | `STABLE_ENOUGH_FOR_ACT_I` |
| 重覆母題 (G) | `STABLE_ENOUGH_FOR_ACT_I` |
| Gameplay↔敘事交接 (F) | `STABLE_ENOUGH_FOR_ACT_I` |
| 恐怖/異常遞進、創傷揭示 | `STABLE_ENOUGH_FOR_ACT_I` |
| 負空間 (E)——視覺層 | `STABLE_ENOUGH_FOR_ACT_I` |
| 負空間 (E)——敘事謎團層（身份線索/背景恐怖幾時可以唔解釋） | `NEEDS_ACT_I_CASE_TO_RESOLVE`（現有原則夠用，但未有 Act I 具體案例驗證邊條線索可以留白幾耐） |
| Information Hierarchy (A) | `NEEDS_ACT_I_CASE_TO_RESOLVE`（原則已建立喺本文件4.1，需要實際 Sequence/Scene 案例驗證） |
| Breathing Scene (H) | `STABLE_ENOUGH_FOR_ACT_I`（4.2 已可執行） |
| Pressure Handoff (I) | `STABLE_ENOUGH_FOR_ACT_I`（4.3 純整理） |
| Shot-level camera grammar（鏡頭時長/角度精確節制，尤其身體凝視場面） | `CAN_WAIT_UNTIL_LATER_ACT`（`11_directing_playbook.md`已知缺口，明文標示「留待後續設計，唔阻本節生效」） |

**結論**：冇任何一項落喺 `BLOCKS_SCENE_LEVEL_WORK`。

---

## 6. Freeze Line

```text
ALLOWED（可以憑呢份 v0.5 baseline + 現有四份 bible 進行）：
Act Structure
Sequence Structure
Beat/Event Architecture
Player/Audience Experience Target
Scene Intent
Directing Requirement / Opportunity
（包括：資訊層級配置意圖、安靜戲設計、壓力交接檢查）

NOT YET LOCKED：
exact camera grammar 嘅精確節制數值（鏡頭時長/角度上限，尤其身體凝視場面）
shot design
blocking
micro-performance
animation timing
lighting treatment
exact dialogue rhythm
final Scene Architecture（Round 196 已凍結，唔屬於本文件範圍）
```

---

## 7. Director-facing 摘要

**我哋而家已經有咩導演語言**——遠超預期咁完整：由主題（態度vs命運）到具體制度化嘅世俗語言（身體代價×債務），再到明確嘅舞台×傷口顯式演出層、三個導演主詞、氣氛技法（重覆變奏/延遲/錯位）、場景結構模板、Gameplay 交接規則，全部已經落檔並且互相有 cross-reference，唔係零散筆記。

**邊啲原則已經夠穩，可以開始 Act I**——絕大部分：舞台×傷口全套、代價可見度、角色演出、重覆母題、Gameplay 交接、恐怖/異常遞進、創傷揭示手法，全部 `STABLE_ENOUGH_FOR_ACT_I`。呢份文件新增嘅「安靜戲文法」（4.2）同「壓力交接明文化」（4.3）純屬整理疊加現有材料，都可以即刻用。

**邊啲仲未定，最好用真 Scene 慢慢試**——只有一項真正新原則：資訊層級／知情落差（4.1）。原則本身已經寫低（觀眾預設同某個角色視角同步，誤會機/負空間/恐怖遞進分別係三種刻意打破同步嘅情況），但邊場戲用邊種配置，要等真正落到 Sequence/Scene 層先驗證得到，唔應該喺呢一層預先鎖死邊場戲要點做。另外負空間喺敘事謎團層（身份線索留白幾耐）都屬同一類——原則夠用，缺案例。

**有冇任何一條真係需要 Director 而家先拍板**——冇。三條新原則（4.1／4.2／4.3）全部係「補缺口」性質，冇任何一條會改變已確認嘅觀眾體驗方向或者撞現有 canon（已逐項對照 `11_directing_playbook.md` 現存內容，冇矛盾）。**唯一需要作者過目嘅**係：呢份 DRAFT 三條新原則（4.1/4.2/4.3）認唔認同正式寫入 `11_directing_playbook.md` 做為新 sub-section——呢個係一般性確認，唔屬於「會改變觀眾體驗嘅問題」，所以本文件冇強行進入問答格式，留返俾作者自行決定幾時睇。

```text
DIRECTING_LANGUAGE_ACT_I_READINESS = READY_FOR_BEAT_EVENT_WORK
```

---

## 8. 未寫入任何 canon 檔案

本文件全部內容為 `DRAFT — AI_PROPOSED_CANDIDATE`。`11_directing_playbook.md` / `08_narrative_design_bible.md` / `06_visual_bible.md` / `10_gameplay_bible.md` 一字未改。如作者批核 4.1/4.2/4.3，下一步係將三條新增 sub-section 正式 merge 入 `11_directing_playbook.md`（建議插入喺 §舞台×傷口 之後、§意識層演出規則 之前，因為兩者同屬「顯式導演語言」層級），並喺 CANON_DECISION_LOG.md 開新 CDL 記錄。
