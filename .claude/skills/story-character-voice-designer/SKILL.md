---
name: story-character-voice-designer
description: Discovers, tests, creates, or updates a reusable whole-story character voice system. It uses canon evidence, fixed micro-scene workshops, functional-to-character rewrites, interaction-loop testing, relationship and period filters, de-characterization and swap tests, read-aloud checks, and runtime stress tests. It must prove that a voice is distinguishable rather than merely generate categorized example lines.
---

# story-character-voice-designer

Task:
$ARGUMENTS

## Mission
建立或更新一套**角色級、全劇通用、可以反覆修改、跨場景重用，而且經過辨識度驗證**嘅角色說話系統。

本 skill 唔係「按打招呼、發怒、嫉妒、道歉等分類生成大量句子」。

本 skill 真正要完成嘅係：

> 發現角色點樣感知、理解、迴避、要求、修正同完成一次互動，並證明呢套運作方式同其他角色唔可互換。

角色聲音唔只存在於詞彙或口癖，亦存在於：
- 角色首先注意到咩
- 第一衝動係咩
- 會將情緒錯認成咩
- 有咩真句講唔出口
- 對方拒絕後會點轉方法
- 對不同人物會進入咩互動回路
- 故事經歷點樣過濾同一衝動
- 台詞、沉默與行動點樣分工
- 句子讀出聲後係咪仍然自然同可辨認

核心工作流：

```text
Canon 與既有台詞清理
→ 固定微場景功能版
→ 角色化改寫
→ 關係化與時期化
→ 完整互動回路
→ 跨角色同場對照
→ Blind / Swap / De-characterization / Compression 測試
→ 廣東話自然化（Native Cantonese Pass）
→ 朗讀與簡易演出測試
→ 由成功例句反推 Voice Engine
→ 作者確認
→ 再擴展到情緒、關係、故事、runtime
→ 才可升級成正式 Voice Bible
```

今場戲實際狀態仍由 `story-scene-speaking-state-builder` 處理。

```text
角色全劇通用 Voice Engine
＋ 今場臨時 Speaking State
＝ 今場可用聲線
```

---

## 1. Success Standard — Mandatory
完成唔係指「有好多例句」。完成標準係：

1. 遮住角色名，作者仍有合理機會辨認角色。
2. 將句子交畀其他主要角色時，會出現明顯不合適或需要重寫。
3. 特色唔只靠一個口頭禪、句尾或比喻。
4. 同一角色喺平靜、受壓、不同關係同故事時期仍然似同一個人。
5. 角色聲音可以解釋一次完整互動，而唔只解釋一句金句。
6. 每個主要規則都由 canon、跨場景 pattern 或對照測試支持。
7. 對白放入實際場景、動作、玩家資訊負載同朗讀後仍然成立。
8. 角色分析可以精準，但講出口嘅句子必須似真人香港廣東話，唔可以似翻譯、心理摘要或規則示範。

如只達成「句子合理、情緒清楚、符合善良／冷靜／毒舌等一般人格」，必須標記：

```text
FUNCTIONALLY VALID BUT NOT YET CHARACTERISTIC
```

不可當 Voice Bible 完成。

---

## 2. Scope and Separation — Mandatory
通用文件必須以角色全劇為中心，唔可以綁定當前場景。

禁止：
- 用「晴香首次變身校園戰 Voice Bible」等場景限定標題。
- 因今次寫 Act I，就將 Act I 聲線當全劇聲線。
- 將單一場景一句話直接變成永久口癖。
- 將今場受傷、恐慌、任務目標寫入通用核心。
- 未做跨角色對照，就宣稱句子有角色辨識度。
- 未測互動回路，只憑一句好句反推人格。
- 將例句數量當作完成度。

正確命名：
- 已有足夠證據及作者確認：`Character Voice Bible — <角色>`
- 仍在發現及驗證：`Character Voice Discovery Workshop — <角色>`
- 證據明顯不足：`Character Speaking Style Research and Candidates — <角色>`

---

## 3. First Collaboration Choice
如未有可靠 Voice Bible，掃描資料後畀作者兩個選項：

**A. 自動第一版**  
AI 先完成證據清理、3–5 個微場景、初步對照測試同 Voice Engine 候選，再逐項同作者細執。

**B. 共同工作坊**  
由第一個高價值微場景開始，一輪一輪揀句、測試、反推規則。

預設推薦 B（慢速共同工作坊）。原因：說話方式係高影響、高個人品味嘅決定，作者對「聽落似唔似」有一手耳感，一次過大量產出只會令作者被迫評論一大堆嘢。A 只係作者明確要求快速草稿時先用，而且 A 嘅產出只可標 `VOICE CANDIDATE`，唔可以直接落 Voice Bible。**必須先提供選擇，唔可以未問就自己揀 A 開始寫成份 bible。**

### 3.1 Slow Workshop Protocol（選 B 或作者話「慢慢做」時強制）
1. **語言**：同作者一律用廣東話討論；分析可以有術語，但先用白話講。
2. **一次一個微場景**，一個微場景入面**一次只問一個聽感問題**（例：「呢句你聽落係距離感、貴氣定殺氣？」），唔可以一次列成十句叫作者「整體評價」。
3. **先畀候選、後反推規則**：每輪 2–3 句候選（長度、語域、停頓結構要明顯唔同，見 §8B），作者反應（鍾意／太書面／太軟／唔似佢）先係證據；作者未反應之前，唔可以推斷 Voice Engine。
4. **作者反應要記低**：每輪結果寫入 workshop 檔（`character-voice-workshops/<character>_voice_discovery.md`），標 `AUTHOR_REACTED` + 原話摘要。
5. **未夠 2 個微場景 + 作者反應，唔可以生成 Quick Voice Page**；只可以有「工作坊進度」。
6. 作者嘅糾正（例如「唔係應該慢慢做咩」）即時生效：停止大量產出，退返上一個已確認節點，再慢做。

作者選 A 後（只限作者明確要求）：
- 低風險材料自動完成。
- 高影響 Voice Engine、關係回路、故事轉變同口癖要逐項確認。
- 唔可以一次產生大量例句後，只問整體意見。

---

## 4. Evidence Triage Before Design — Mandatory
唔可以將所有舊台詞平均視為角色證據。每句先分類：

### Source Authority
- `CANON_DIRECT`：正式文件或已確認成品直接支持。
- `CANON_PATTERN`：至少兩個獨立場景重複出現。
- `CANON_INFERRED`：由背景、心理、關係或行為合理推導。
- `VOICE_CANDIDATE`：新設計，未確認。
- `LEGACY_CONFLICT`：舊版本或已同新 canon 衝突。
- `UNSUPPORTED`：冇足夠支持。

### Line Function
每句再標：
- `NATURAL_BASELINE`：角色平常自然狀態。
- `RELATIONSHIP_EFFECT`：主要特色來自特定關係。
- `PERIOD_EFFECT`：主要特色來自故事時期。
- `EXTREME_STATE`：受傷、恐慌、崩潰等極端狀態。
- `PLOT_DELIVERY`：主要服務資訊輸送。
- `SCENE_THEME_EFFECT`：特色主要來自當場主題或事件。
- `PERFORMANCE_DEPENDENT`：離開動作、停頓或表演就唔成立。

### Diagnostic Questions
- 呢句特色來自角色，定來自當場事件？
- 呢句係自然狀態，定極端例外？
- 同一幕多次出現，定跨場景 pattern？
- 新 canon 後仲成立？
- 只睇文字，定要靠演員／動作先成立？

未完成 evidence triage，不可建立正式 Voice Engine。

---

## 5. Voice Engine Discovery — Highest Priority
Voice Engine 唔係預先套用固定五項，而係由測試發現 3–7 個真正不可替換核心。

每個候選核心應描述一個**可生成對白嘅運作規律**，例如：
- 先處理眼前一小步，再處理抽象問題。
- 將情緒落差當成可見事實。
- 自己需要通常遲半步洩漏。
- 越真心，句子越短，社交包裝越少。
- 用照顧行動換取靠近，而唔直接宣布關心。

每個候選核心必須有：

```md
### Voice Engine Candidate
核心名稱：
一句定義：
角色首先注意到：
第一衝動：
常見語言出口：
常見行動出口：
對方拒絕後嘅第二策略：
最容易同邊個角色撞：
Canon 支持：
跨場景支持：
成功微場景：
失敗／反例：
故事時期變化：
可信程度：
作者狀態：未審／候選／已確認／已否決
```

Voice Engine 候選必須經至少：
- 2 個不同微場景；
- 2 種不同關係或狀態；
- 1 次跨角色對照；
- 1 次去角色化測試；

先可建議升級。

---

## 6. Micro-scene Workshop — Primary Unit
最高層組織單位唔係「打招呼十句」，而係**固定微場景**。

一個微場景必須固定：
- 場面
- 基本事件
- 對話功能
- 角色想完成嘅事
- 對方第一個反應

每輪只改一個變數，例如：
- 對象
- 關係親疏
- 故事時期
- 公開／私人場合
- 角色自身受傷或趕時間
- 對方是否隱瞞
- 前一場關係結果

例：

```text
固定場景：
熟悉隊友早上返學，情緒明顯低落，並表示自己冇事。

只改變：
A. 對象係操
B. 對象係彩
C. Act I
D. Act III
E. 晴香自己同時受傷
```

禁止將十個完全不同情境包裝成「十句打招呼」。

---

## 7. Four-layer Rewrite — Mandatory Per Workshop
每個高價值候選至少做四版：

### V0 — Functional Line
只完成劇情／對話功能，刻意保持普通。

### V1 — Characterized Line
加入角色感知偏差、第一衝動、語言盲點、節奏或行動優先。

### V2 — Native Cantonese Line
將 V1 轉成香港人實際講得出口嘅廣東話：容許省略、改口、食字、半句、眼前物件代替抽象意思；刪除翻譯句法同分析腔。

### V3 — Relationship and Period Filtered
再加入特定對象、共同歷史、權力、故事時期同當前防衛。

格式：

```md
功能版：
角色機制版：
真實廣東話版：
關係／時期／表演版：
角色版增加咗咩：
仍然太普通嘅位置：
可能太刻意嘅位置：
```

唔可以由 V0 只加一個句尾、口癖或比喻就當完成 V1。

---


## 8. Native Cantonese Naturalization Pass — Mandatory
角色化唔等於口語自然。V1 完成後，必須獨立做一次香港廣東話自然化，唔可以一步過。

### 8.1 核心原則
- 分析可以精準；角色講出口唔應該精準到似分析。
- 唔以機械加入「啦、喎、囉、㗎」冒充廣東話。
- 優先用眼前物件、動作、指示代詞、半句同改口，少用抽象心理名詞。
- 容許角色講得唔完整、講錯方向、重複、吞主語、突然轉話題。
- 口語化後要重跑 Swap Test，避免順口咗但失去角色性。

### 8.2 強制測試
**Mouth Test**：一個香港演員可唔可以一啖氣自然講出？句法要停低理解就 fail。

**Translation Smell Test**：檢查「你唔可以…」「我會補償…」「我有少少想…」「你可以恨我但係…」等只係將書面語換成廣東字嘅句法。

**Casual Shortening Test**：試刪主語、原因、抽象名詞、邏輯連接詞；刪完更自然就採用短版。

**Native Paraphrase Test**：同一意思先寫 3 個香港人自然可能講嘅版本，再揀最似角色嗰個；唔准由抽象規則只生一版。

**Particle Test**：每個語氣詞必須改變態度、關係或力度；純裝飾就刪。

**Actor Breath Test**：標示一啖氣、自然停頓、改口、被動作截斷位置；讀出聲有 kick 必須重寫。

**Object Substitution Test**：角色可唔可以用「呢袋」「啲嘢未食晒」「你隻手」等眼前物件，代替「我擔心／我想你留低」？如符合角色，優先實物出口。

### 8.3 Canon 原句處理
- `CANON_DIRECT` 原句不可靜靜改寫。
- 如 canon 句不自然，保留原句，另列 `NATURALIZATION CANDIDATE`。
- 候選只可供日後 canon 修訂，未確認前不可冒充正式引句。

### 8.4 Naturalization Record
```md
角色機制版：
真實廣東話候選 A：
真實廣東話候選 B：
真實廣東話候選 C：
採用版：
刪走咗咩翻譯腔／分析腔：
保留咗邊個 Voice Engine：
讀出聲問題：
作者狀態：
```

---
## 8B. Speech Psychology Analysis Layer — Mandatory Before Voice Engine
說話方式唔只係用詞。作者要求用心理分析逐項拆：句長、方式、停頓、用詞。每個微場景嘅候選句，必須用以下 10 個維度**逐項標記**，先可以推斷 Voice Engine。呢啲維度係**分析工具，唔係台詞內容**；講出口嘅句子仍然要過 §8 Native Cantonese Pass。

### 8B.1 十個分析維度
| # | 維度 | 睇咩 | 心理讀法（可能原因，唔係定論） |
|---|---|---|---|
| 1 | **句長與分佈** | 平均字數、最長／最短句、長短交替 | 短促＝壓力、防備、恐懼、命令慣性；長塊＝自信、情緒溢出、控場、表演；長短突變＝防線出現裂縫 |
| 2 | **句子結構完整度** | 完整句／半句／斷句／改口／未完成 | 未完成句＝認知負荷、說不出口；過度完整＝維持形象、書面語防衛 |
| 3 | **停頓** | 沉默停頓（無聲）／填充停頓（呃、嗯、咁…）／句首延遲／句中截斷 | 句首延遲長＝準備拒絕或講唔中聽嘅嘢（見 8B.3）；填充詞少＝控制情緒或講緊稿；停頓位置比長度更重要 |
| 4 | **功能詞與人稱** | 我／你／我哋／佢；代詞有冇被刪；主語有冇被吞 | 第一人稱多＝自我聚焦、負面情緒、自我防衛；刪走「我」＝迴避責任／情緒；用「你」指責或用「大家／呢邊」去人稱化＝拉開距離 |
| 5 | **語域與切換** | 書面語／正式廣東話／口語／粗口；何時由高切低 | 香港係書面語（高）與口語（低）並存嘅雙層語言：用高語域＝拉開距離、維持地位、儀式化；掉落口語＝框架破裂、真情漏出。**切換點本身就係角色最有資訊嘅位置** |
| 6 | **句末語氣詞與態度** | 啦／喎／囉／嘅／咋／吖／嘛…；每個改變咗咩 | 語氣詞承載說話者態度（自明、意外、傳聞、確定、柔化、催促）。例：「囉」＝呢個明顯，你應該知；「喎」＝意外／轉述；「咋」＝縮細。**只加語氣詞而唔改變態度＝裝飾，刪走** |
| 7 | **面子與禮貌策略** | 直接命令／示好／客套避免冒犯／暗示／乾脆唔講 | Brown & Levinson：面子威脅行為（拒絕、命令、批評、道歉）有五種處理，由直接至不做。角色慣用邊種、對邊個轉邊種 |
| 8 | **資訊量與間接性** | 答唔答問題、多／少過所需、答非所問、暗示 | Grice 四準則（量、質、關聯、方式）嘅刻意違反＝角色特色：答少咗＝防備；答多咗＝焦慮／表演；答非所問＝迴避；話中有話＝面子管理 |
| 9 | **對話管理** | 打斷、搶話、接話速度、係咪等對方講完、誰決定話題何時結束 | 接話延遲短＝主導／急；延遲長＝謹慎／不同意；點樣結束對話＝權力位置 |
| 10 | **語速、音量、音高（VO 提示）** | 加速／減速、壓低、提高 | 憤怒＝加速、音高升；悲傷＝減速、低沉、停頓長；恐懼＝加速、短句、少停頓但音高升。**只可當演出提示；研究顯示恐懼／焦慮聲學特徵並不穩定，唔可當定律** |

### 8B.2 使用規則
- 每個候選句至少標 **1–4、5、6、9** 六項；重點維度按微場景挑 3–5 項展開。
- **分析與台詞分開**：分析欄可以專業；候選句必須似真人講嘢。
- 每項心理讀法只係「可能原因」，證據級別照 §4；唔可以將一個微場景嘅句長特徵升級成永久規則（需 §5 嘅跨場景條件）。
- **同一角色在唔同狀態下要有唔同分佈**：平靜／受壓／羞恥／戰鬥／面對特定人物，各自嘅句長、停頓、語域都要有預期變化；如果全部狀態分佈一樣＝角色扁平，標 `FLAT DISTRIBUTION`。
- 兩個角色如果 1–6 項分佈相近，必須靠關係策略或感知（§9、§13）再區分，並標記撞聲風險。

### 8B.3 兩個常見誤讀（必須避免）
- **停頓唔等於心虛／說謊**：研究顯示「呃／嗯」等填充詞，說謊時唔一定多，反而可能更少；停頓主要反映**認知負荷與計劃**。所以用停頓表達「說謊」要靠**位置與上下文**（例：答一個簡單問題前異常延遲），唔可以靠「加咗好多呃」。
- **語域切換唔等於性格**：高語域係地位／儀式／距離嘅工具；同一角色喺公開場合用高語域、私下降落，係「情境反應」；只有跨場景重複，先可以視為角色 pattern。

### 8B.4 Speech Analysis Card（每個微場景一張，寫入 workshop 檔）
```md
### Speech Analysis — <角色> × <微場景>
狀態／對象：
候選句 A／B／C：
| 維度 | A | B | C |
| 句長（字數／分佈） | | | |
| 結構完整度 | | | |
| 停頓（位置、類型） | | | |
| 人稱與主語處理 | | | |
| 語域（高／中／低）與切換點 | | | |
| 句末語氣詞及其態度 | | | |
| 面子策略 | | | |
| 資訊量／間接性 | | | |
| 對話管理（接話、結束） | | | |
| 語速／音量提示 | | | |
心理讀法（可能原因，非定論）：
最接近角色感知嘅一版及理由：
作者反應（AUTHOR_REACTED）：
可疑／太書面／太翻譯位置：
撞聲風險（同邊個角色）：
```

### 8B.5 資料來源（供日後查證）
- Tausczik & Pennebaker (2010)：功能詞（代詞、冠詞、介詞）反映情緒、地位、社交關係。
- Brown & Levinson：禮貌與面子理論。Grice：合作原則與會話含義。
- Sacks / Schegloff / Jefferson：偏好組織（preference organization），不同意／拒絕通常延遲、軟化、附理由；約 700–800ms 以上延遲已是「即將拒絕」嘅可靠訊號。
- Communication Accommodation Theory：地位低者傾向向高者靠攏，地位高者傾向拉開；可用於權力關係嘅說話差異。
- 香港雙層語言（書面語 H／口語 L）；粵語句末語氣詞研究（Matthews & Yip；Leung 等）。
- 停頓／不流暢與認知負荷（Corley 等；Fallah 2025）。

---
## 8C. Cantonese Dubbing-Script Dialogue Reference — Mandatory（貼地參考）
作者要求用**粵語配音稿嘅對白設計**做貼地參考（唔限題材，唔係配音技術）。呢節唔講口形、數口，只講「配音稿點樣令對白似真人講、又分到角色」。§8B 係分析角度，§8C 係落筆參考。

### 8C.1 研究所得（行業與學術）
- **貼地目標**：粵語配音對白應符合粵語日常說話習慣，令觀眾覺得順耳、自然、生活化；唔係將原文逐字翻。
- **翻譯腔係最常見質素問題**：直譯外語句法（calque）令對白唔似真人講嘢，係配音品質研究入面較普遍嘅自然度錯誤。
- **角色語言設計（役割語）**：日文靠多種第一人稱、句尾、稱呼令角色一開口就分到類型。中文冇咁多形式，主要靠**人稱代詞同語域**分角色；翻譯時如果唔補位，角色就會被壓平。例：《Sister Princess》十三個妹妹稱呼哥哥全部不同，中文版大多壓成「哥哥」，只有「老哥」（粗）、「哥哥殿下」（正式）少量分化＝反面教材。
- **人稱變化可以做心理進程**：《你的名字》著名場景，日文「わたし→わたくし→僕→俺」，中文譯成「人家→本人→在下→我」，用人稱由造作到自然表達角色由試探到放鬆。
- **TVB 式配音特色**（參考，唔係要抄）：語序跟粵語、語氣詞多、夾少量英文、咬字清楚。
- **限制**：搵唔到公開嘅粵語配音稿原文，亦搵唔到配音導演指導語氣嘅公開資料；呢兩樣只可視為未知。

### 8C.2 落筆規則（每個候選句／每個角色）
1. **人稱與稱呼表**：每個角色建立「自稱／稱呼對方」表（我／本人／人家／哥哥…），並標明邊個關係、邊個狀態轉用邊個。人稱轉變本身係關係／心理進程嘅工具（見上《你的名字》）。
2. **粵語角色分化工具箱**（用時要有理由）：人稱與稱呼、書面語↔口語語域、句末語氣詞（要改變態度）、句長與斷句、英文夾雜、粗口程度、地區／年代詞彙。冇用到其中至少兩個工具去分角色，標 `FLATTENED`。
3. **唔可以壓平**：兩個角色如果稱呼、語域、語氣詞全部一樣，就算內容唔同，都要標撞聲風險。
4. **先講後寫**：每句由書面語或分析語轉出嚟嘅台詞，必須另寫「先講一遍畀人聽再寫低」版本對照（同 §8 Native Paraphrase 對接）。
5. **註記**：呼吸、笑、嘆、咬牙、截斷寫喺對白旁；配音稿格式 `字頭：對白`。
6. **戰鬥句預設短**（玩家同時處理畫面）；句長只當「句長維度」用，字數唔係規格，唔強制數口。

### 8C.3 使用界線
- 呢節係落筆參考，唔取代 §5 Voice Engine；角色特色仍要由跨場景測試證明。
- `CANON_DIRECT` 書面句照保留，另附配音稿版候選。

### 8C.4 資料來源
- 中検「役割語から見る中国語と日本語の違い」（Sister Princess、你的名字例）。
- Kinsui 役割語研究（概念）；大阪大學 ResOU 介紹。
- Spiteri Miggiani 配音品質研究（自然度錯誤）。
- 香港動漫文化大典「配音稿」條目（搜尋摘要，原頁被擋）；TVB 配音風格（百度百科）。

---
## 8D. Drafting-Language Rule + Cantonese Corpus Baseline — Mandatory（2026-09-29，PROVISIONAL 決定 D-10）
完整研究同語料統計見 `canon/_working/character-voice-workshops/_CANTONESE_DIALOGUE_RESEARCH.md`。

### 8D.1 由邊種語言開始寫
- **意思層**（可書面語）：canon 原句、句子功能、角色目的、真句。
- **對白層**：直接用口語粵語寫 2–3 個候選，**唔好逐字轉換書面句**（翻譯腔＝最常見自然度問題）。
- `CANON_DIRECT` 原句照保留；口語版只作 `NATURALIZATION CANDIDATE`。
- 每個候選過 §8.2 Native Cantonese Gate；先講後寫（§8C.2-4）。
- 書面語只可作**有意識嘅角色標記**（例：語域反差令角色突出），唔可以係 AI 嘅預設落筆語言。

### 8D.2 語料基準（CantoCaptions：Ninja Hattori-Kun 配音、Another World 原創）
- 平均約 8 字；≤6 字約 38%；≥12 字約 17–20%。
- 句末助詞密度高：啊 ≫ 㗎 > 喇／啦 > 喎／吖／呀。
- 稱呼短、暱稱多；語域反差可做角色標記；對白常斷句、重複、改口。
- 用法：**參考範圍，唔係規格。** 只作自然度基準、功能對照、角色分化對照、助詞驗證。

### 8D.3 微場景工作坊動作
1. 寫候選前，按功能（接手／命令／拒絕／道謝／劃界／掩飾）grep 語料，睇手法，唔抄句。
2. 候選句平均句長、助詞分佈同基準差好遠 → 標可疑，重寫。
3. 每個工作坊檔記一行「語料對照」；冇查到就寫冇查到。
4. 語料係字幕：冇聲調、語速、停頓，唔可以據以判斷語氣或停頓。
5. 語料角色唔係目標角色：只可借技法，唔可以借口調。
6. 版權：只作分析參考，唔抄句入故事。

## 8E. Corpus Tool Gate — Mandatory（2026-09-29，作者要求「用晒語料令 output 準啲」）

工具：`python tools/cantonese_corpus.py`（語料：CantoCaptions 人手配音＋原創粵語，約 21.6 萬句／67 套；語料檔留喺本機 `CANTO_DIR`，**唔入 repo、唔抄句入故事**；首次用先 `build`）。

**每個微場景必做（寫工作坊檔前）：**
1. **功能檢索**：`q "<功能關鍵字|正則>" -n 12`，按功能（接手／命令／貶低／佔有／拒絕／道謝／劃界）查真人點講；逐個候選嘅**關鍵詞、量詞、句式**都要查（例：難睇 vs 難看、對眼 vs 雙眼、歸我 vs 係我嘅）。
2. **自然度檢查**：候選全部過 `score "句1/句2/句3"`。
   - `⚠低`（百分位 <10）、`⚠書面/翻譯腔`、`⚠未見於語料`＝必須逐項處理：改寫，或喺工作坊檔明寫「刻意保留（書面語域標記／角色特色）」＋理由。
   - ≤3 字短句百分位偏低唔可靠，以功能檢索為準。
3. **記錄**：工作坊檔加「語料工具檢查」表（每個候選：百分位、旗號、處理）。

**分數嘅意思同限制（唔可以誤用）：**
- 分數＝「似唔似大量真人配音嘅口語」：擋得住翻譯腔、書面朗讀腔、生造詞；**擋唔到「流暢但冇角色」嘅 AI 口語**（實測：流暢通用口語句分數反而高）。
- 角色辨識度、殺氣／距離感、語域選擇＝作者聽感決定；語料冇聲調、停頓、說話人。
- 低百分位＋角色特色可以並存（風格化句本身罕見）；唔係逢低就刪，但必須有理由。
- 語料冇嘅組合（例如冷貴族口調）→ 明寫「語料冇覆蓋」，靠功能檢索借手法，唔好假裝有依據。

**作者校準檔**：作者每次講「啱／唔啱＋原因」，記入該角色工作坊檔嘅「作者聽感校準」一節；之後同類句以此優先於語料分數。

## 8F. 言癖 Step（Verbal Signature Design）— Mandatory（2026-09-29，作者要求加入）

**位置**：每個角色完成 ≥3 個微場景、§8B 分析卡同 §8E 語料檢查之後，Voice Engine 候選之前。唔可以喺未有句子證據時憑空派口癖。

**目的**：為角色設計少量、可重複、但唔搶戲嘅語言標記（言癖），令遮名都認得，同時唔變 gimmick。「言癖」唔限語氣詞，包括：固定收尾詞／句型、慣用起手詞、重複嘅小修辭（對仗、反差、輕描淡寫）、慣用量詞或數字、慣常省略方式、稱呼習慣。

**必做 5 步（每個角色）：**
1. **由功能而唔係由趣味出發**：先寫角色最常做嘅說話動作（命令／關心／劃界／催促／自嘲…），再問「呢個動作有冇一個固定嘅講法？」
2. **出 3–5 個候選言癖**，每個標：類型（收尾詞／句型／起手詞／修辭／稱呼／省略）＋例句 2 個＋功能（帶咩態度）。
3. **語料查證**（§8E）：`q` 檢索該句型／詞有冇真人配音用例；冇用例＝標「語料冇覆蓋」，靠作者聽感。
4. **頻率上限＋禁用位置**：例如「全段最多 2 次」「極端狀態唔用」「對特定人先用」「後期會消失／變形」；每個都要寫「錯用會造成咩感覺」。
5. **拆走測試＋撞聲測試**：拆走言癖後角色仍要認得（靠句子機制）；同同場角色比較，唔可以同人撞（例：美夜子命令句 vs 操命令句）。

**作者風格校準（2026-09-29）**：
- 功能向角色（例：美夜子）＝說話白同直，用詞具體，**唔講「應該」「可能」類含糊詞，唔講大話／誇張**；有語言藝術，只係細：輕描淡寫、對仗、省略、反差、用事實代替感受，唔直講心事。
- 明亮向角色（例：晴香）＝同樣以具體、短、直接為主，唔誇大；表達溫度靠助詞同關心句式，唔靠大詞。
- 猶豫／情感洩漏優先用**停頓、省略、動作**，唔用「應該」「大概」呢類猶豫詞（除非 canon 逐字要求）。

**輸出**：工作坊檔加「言癖候選表」＋「頻率／禁用表」；作者未揀前標 VOICE_CANDIDATE，唔升級。

---
## 9. Perception → Impulse → Filter → Outlet Chain
每句重要候選用以下鏈做診斷：

1. **Perception｜察覺**  
角色特別睇到、聽到或誤讀咗咩？

2. **Impulse｜第一衝動**  
行近、阻止、補位、查問、逃避、攻擊、安慰，定沉默？

3. **Self-mislabel｜自我錯認**  
角色以為自己點解咁做？真正原因可能係咩？

4. **Relationship Filter｜關係過濾**  
對呢個人，邊啲字可以講，邊啲唔可以？

5. **Period Filter｜時期過濾**  
故事經歷令角色刪走、改寫或容許咗咩？

6. **Outlet｜出口**  
台詞、問句、半句、改口、行動、沉默、反常長句？

7. **After-response Strategy｜對方回應後**  
對方拒絕／否認／誤解後，角色會點轉方法？

呢條鏈係診斷工具，唔應該搶過實際例句主體。

---

## 10. Interaction Loop — Mandatory
特色要測完整互動，唔只測第一句。

每個主要微場景至少包括：

```text
角色先察覺／行動
→ 第一句
→ 對方否認或拒絕
→ 角色第二策略
→ 對方再反應
→ 角色堅持、退讓、改用行動或離開
→ 對話殘留
```

要記錄：
- 角色係咪會正面反駁？
- 會唔會將要求縮細？
- 會改用實際行動？
- 會用玩笑、指責、沉默或離開？
- 點樣讓自己真正需要漏出？

一句普通嘅「坐低先」可以保留，只要整個互動回路具角色辨識度。

---

## 11. Forbidden Direct Sentences and Voice Blind Spots
每個主要角色建立 3–8 句最難直接講出嘅真句，例如：
- 我需要你。
- 我唔想一個人。
- 我妒忌。
- 我幫唔到。
- 我想你留低。
- 我其實好痛。

每句要建立跨時期出口：

```md
真句：
角色點解講唔出口：
早期繞路方式：
中期防衛方式：
崩壞／惡化方式：
後期可否直接講：
對不同人物差異：
```

Voice Blind Spot 唔只係禁句，仲包括：
- 唔識接受安慰
- 唔識承認錯誤原因
- 一講感受就變抽象
- 一羞恥就改成攻擊
- 被揭穿就沉默
- 用修復事情代替修復關係

---

## 12. Emotion Mislabel Paths
對角色難以接受嘅高價值情緒，唔可以直接由情緒名稱生成句子。

建立：

```md
### Emotion Mislabel Path
真正情緒：
角色最初以為：
第一個補償行動：
第一個語言出口：
對方拒絕後：
遮掩失敗：
首次半承認：
後期正確認知：
極端狀態錯誤版本：
```

例：嫉妒可能先表現成「想幫手」「想確認幾時約好」「主動留低做其他工作」，而唔係一開始講「我妒忌」。

Emotion Matrix 可以保留，但必須建立喺角色嘅錯認與演變路線之上。

---

## 13. Relationship Dialogue Loops
每段重要關係唔只建立語氣差異，要建立**專屬互動回路**：

```md
### Relationship Loop — A × B
A 通常先注意到 B 咩：
A 會用咩方式靠近：
B 常見防衛／回應：
A 第一個轉招：
A 最容易犯嘅關係錯誤：
A 有咩真句只對 B 講得出／講唔出：
慣常沉默意義：
固定小事、物件、稱呼或半句：
關係轉變點：
後期回路點樣改變：
```

禁止只寫：
- 對 A 溫柔。
- 對 B 較正式。
- 對 C 更直接。

必須展示同一微場景中，關係歷史點樣改變角色整個回應過程。

---

## 14. Characteristic Signature Layers
特色分四層管理：

### Layer 1 — Audible Surface
語氣詞、句尾、稱呼、重複詞、自我修正。

### Layer 2 — Sentence Mechanics
問句代替請求、先講動作再講原因、將「我想」改成「大家需要」、用具體小事避開抽象感受。

### Layer 3 — Dialogue Tactics
對方拒絕後點轉招、用照顧換靠近、用玩笑測安全、用實際問題拖延感情問題。

### Layer 4 — Story Imagery
角色用傷口、秩序、真假、程序、成本等意象理解世界。

頻率原則：
- Layer 1：低頻，避免 gimmick。
- Layer 2：中高頻，主要句子辨識來源。
- Layer 3：高頻但可隱形，主要互動辨識來源。
- Layer 4：只用於高價值時刻，避免主題詞濫用。

每個特色要記：
- 形成原因
- 使用時機
- 對象
- 頻率上限
- 時期變化
- 錯用會造成咩感覺

---

## 15. Mandatory Characteristic Tests

### A. Blind Attribution Test
移除角色名、標籤與旁白後，作者能否分辨？

### B. Same Intent Contrast Test
同一情境、同一功能，由至少 3 個主要角色各寫一版。

### C. Swap Test
將候選句／互動交畀另一角色，係咪仍然完全成立？
- 完全成立：太通用。
- 只需改口癖就成立：特色太表面。
- 必須改感知、策略、次序同關係處理：較有角色性。

### D. De-characterization Test
寫一個任何角色都可能講嘅普通版，再說明角色版增加咗咩。

### E. Compression Test
刪走一半字，判斷：
- 係咪反而更似角色？
- 原句係咪作者解釋太多？
- 角色重大時刻是否應該更短？

### F. Response Pattern Test
比較角色由第一反應到結束互動嘅完整次序。

### G. Period Leakage Test
後期理解、詞彙、直接程度有冇提前出現？

### H. Relationship Leakage Test
只屬某段關係嘅半句、稱呼或脆弱程度有冇錯用去其他人？

### I. Performance Test
讀出聲或使用 scratch VO，檢查：
- 粵語口語自然度
- 停頓與重音
- 動作同台詞是否重複
- 演員是否需要額外情境先理解
- 紙面好睇但講唔出口嘅句子

### J. Native Cantonese Gate
每句正式候選必須通過 Mouth、Translation Smell、Casual Shortening、Native Paraphrase、Particle、Actor Breath 測試。未通過標記：
```text
CHARACTERISTIC IN THEORY, NOT YET NATURAL CANTONESE
```


### K. Runtime Load Test
角色要承擔玩法、任務、世界觀或重播資訊時，仲似唔似自己？

---

## 16. Example Card — Mandatory Format
重要例句唔可以只放一句＋情緒標籤。使用：

```md
## Example Card

**Character mechanism line**：
> 「……」

**Native Cantonese line**：
> 「……」

**Alternative native paraphrases**：
- 「……」
- 「……」

**Micro-scene**：
**Function**：
**Period**：
**Relationship**：
**Surface intent**：
**True need / fear**：
**Perception trigger**：
**First impulse**：
**Prior action / performance**：
**Interaction-loop position**：第一句／第二策略／退讓／殘留
**Voice Engine used**：
**Forbidden direct sentence behind it**：
**Ordinary version**：
> 「……」

**What the character version adds**：
**Why another character would handle it differently**：
**Swap Test result**：
**Compression Test result**：
**Translation-smell note**：
**Casual-shortening result**：
**Actor-breath / read-aloud note**：
**Evidence class**：
**Rule scope**：
**Risk / possible over-writing**：
**Author status**：未審／保留／重寫／已確認
```

例句卡唔需要每句永久保留完整長版；確認後可將詳細診斷移入 evidence appendix，主 Bible 保留精簡結果。

---

## 17. Voice Distance Map
為主要角色建立相對聲線軸，避免撞聲：

- 直接指出感受 ←→ 迴避感受
- 先行動 ←→ 先分析
- 完整句 ←→ 斷句
- 反問 ←→ 陳述
- 主動填沉默 ←→ 容許沉默
- 抽象概念 ←→ 具體小事
- 承認自己需要 ←→ 將需要外包成任務／團隊需要
- 對方拒絕後堅持 ←→ 縮細要求／離開

用途：
- 只用作相對比較，唔係僵硬數值人格。
- 每個位置要由實際微場景支持。
- 如兩角色位置相近，要靠關係策略、注意力或互動次序再區分。

---

## 18. Development Rounds

### Round 0 — Evidence and Voice Problem Diagnosis
- 清理 canon、舊稿、候選與衝突。
- 判斷現有例句係合理但普通，定真正有辨識度。
- 找出最易撞聲線嘅角色。

### Round 1 — Voice Engine Discovery
- 選 3–5 個高價值日常微場景。
- 每個做 V0／V1／V2／V3；V2 必須係 Native Cantonese Pass。
- 做 Same Intent Contrast、Swap、De-characterization。
- 由成功例句反推 5–10 個候選核心。
- 淘汰太通用或只屬事件嘅候選。
- 同作者確認 3–7 個 Voice Engine 核心。

### Round 2 — Inner Process
- 建立 Forbidden Direct Sentences。
- 建立 Emotion Mislabel Paths。
- 建立自我需要洩漏方式。
- 建立對方拒絕後嘅第二、第三策略。
- 建立台詞、沉默與動作出口。

### Round 3 — Relationships and Story Evolution
- 為主要關係建立專屬 interaction loop。
- 用同一微場景跨關係測試。
- 用同一真句跨故事時期測試。
- 記錄轉變事件點樣改變 filter，而唔係直接換人格。

### Round 4 — Surface Signatures
- 按 §8F 言癖 Step 加入口癖、句式特色、思想意象、壓力漏洞（言癖 Step 可提早喺 ≥3 微場景後做）。
- 設頻率上限。
- 確保移除口癖後仍然有辨識度。

### Round 5 — Native Cantonese, Scene, Performance and Runtime Validation
- 放入真正場景同完整互動。
- 加動作、對方反應、資訊負載。
- 每句先做 Native Cantonese Pass，再做朗讀／scratch VO。
- 測試戰鬥、中斷、重播、字幕、任務資訊。
- 通過一致性及感受審核後，先升級正式 Bible。

---

## 19. Output Structure
主文件唔再以「打招呼 20 句、發怒 20 句」為骨架，而係三層：

### A. Quick Voice Page
俾寫作者快速使用：
1. 3–7 個已確認 Voice Engine 核心
2. 角色首先注意到咩
3. 第一衝動與常見出口
4. 最難直接講出嘅真句
5. 常用繞路方式
6. 對方拒絕後常見轉招
7. 主要關係差異
8. 故事時期警告
9. 常見錯寫方式
10. 表面口癖與頻率上限

### B. Micro-scene Contrast Corpus
按微場景，而唔係按孤立功能句分類：
- 固定場景
- 功能版
- 角色版
- 關係／時期版
- 其他角色同場版本
- 完整互動回路
- 測試結果
- 作者選擇
- 反推規則

### C. Evidence and Decision Appendix
- canon 來源
- 舊版本衝突
- ordinary version
- swap / compression / read-aloud 結果
- 被否決候選
- 作者決策
- 修改歷史

情緒、道歉、憤怒、嫉妒等內容可以作索引或測試集，但唔可以重新變成無上下文例句大全。

---

## 20. Rule Evidence Record

```md
### Voice Rule
規則：
規則層級：Perception／Impulse／Sentence Mechanic／Dialogue Tactic／Surface Signature／Story Imagery
範圍：GLOBAL_STABLE／PERIOD_SPECIFIC／RELATIONSHIP_SPECIFIC／STATE_SPECIFIC／CHANNEL_SPECIFIC／SCENE_ONLY_OBSERVATION
證據級別：
Canon 支持：
成功微場景：
跨角色對照：
普通版對照：
反例：
故事時期變化：
不適用情況：
可信程度：
作者狀態：
```

測試新句必須標：
- `SUPPORTED TEST LINE`
- `VOICE CANDIDATE TEST LINE`
- `WRONG VOICE EXAMPLE`

測試句不可冒充 canon quote。

---

## 21. Update and Change Handling
角色背景、關係或故事弧線修改時：
- 重新檢查 Voice Engine 形成原因。
- 分辨「內在解釋改咗」定「實際語言行為亦失效」。
- 重跑受影響微場景、關係回路與時期測試。
- 標記可能過時例句，唔靜靜沿用。
- 新場景發現先列 `SCENE_ONLY_OBSERVATION` 或 `VOICE_CANDIDATE`。
- 只有跨場景重複、通過對照測試並經作者確認，先可升級。

配合：
- `story-character-change-impact-manager`
- `story-character-foundation-updater`
- `story-character-pattern-promoter`

---

## 22. Mini Log
被 orchestrator 調用時：

```text
Mini Log
Skills used：story-character-voice-designer
Done：完成咗邊個微場景、邊啲測試、保留／淘汰咗邊個 Voice Engine 候選
Pending：需要作者細執嘅高影響核心、關係回路或故事時期變化
Blocked：無／具體原因
Next：下一個最有辨識價值嘅測試
```

正文用簡單語言，唔好只列專業測試名。

---

## 23. Output Files
長期文件：

```text
character-voice-bibles/<character>.md
```

發現與測試中可使用：

```text
character-voice-workshops/<character>_voice_discovery.md
character-voice-workshops/<character>_contrast_corpus.md
```

場景專用 Speaking State 必須由 `story-scene-speaking-state-builder` 寫入場景工作區，唔可以混入通用 Voice Bible。

---

## Hard Rules
- 目標係建立可辨認嘅 Voice Engine，唔係大量分類例句。
- 例句數量唔等於角色辨識度。
- 先固定微場景，再改一個變數。
- 每個高價值候選至少有 Functional／Character Mechanism／Native Cantonese／Relationship-Period-Performance 四版。
- 必須測完整 Interaction Loop，唔只第一句。
- 必須有普通化版本，解釋角色版增加咗咩。
- 必須做 Same Intent Contrast、Swap、De-characterization、Compression、Native Cantonese Gate 同 Read-aloud 測試。
- 必須建立角色難以直接講出嘅真句。
- 重要情緒必須考慮錯認與洩漏過程，唔可以直接由情緒名稱生成成熟自白。
- 關係差異必須係互動回路差異，唔只係語氣強弱。
- 口癖屬表面層；移除口癖後仍然要認得角色。
- 單一場景一句話不可自動升級成全劇核心。
- 後期理解、直接程度同意象不可提前。
- 測試句唔係 canon。
- Voice Bible 同 Scene Speaking State 必須分開。
- 未通過辨識度測試，只可標記為 voice discovery／candidate，唔可宣稱完成。
- 角色分析可以精準，但角色台詞不可似心理摘要、翻譯句或 Skill 規則示範。
- `CANON_DIRECT` 不可靜靜口語化；只可附加 naturalization candidate。
- 讀出聲有 kick，即使角色機制正確，都不可升級正式 Voice Bible。
- 必須用廣東話同作者討論。
- 必須先畀作者揀 A／B，預設推薦 B（慢速工作坊）；未問先大量產出＝違規。
- 一次一個微場景、一次一個聽感問題；作者未對候選句作出反應前，不可反推 Voice Engine。
- 每個微場景必須做 §8B Speech Analysis Card（句長、結構、停頓、人稱、語域、語氣詞、面子策略、資訊量、對話管理、語速）。
- 停頓／填充詞唔可單獨當作「說謊」或「心虛」證據；語域切換唔可單獨當作永久性格。
- 分析欄可專業，台詞必須自然。
- 每個角色要有「自稱／稱呼表」，並用至少兩個粵語角色分化工具（§8C.2）；候選句以「字頭：對白」格式輸出。
- 對白層直接用口語粵語寫，唔好由書面語逐字轉換；canon 書面句保留，口語版係 NATURALIZATION CANDIDATE（§8D）。
- 每個微場景寫候選前先做語料功能對照，並喺工作坊檔記錄（§8D.3）；冇查到要明寫。
- 每個候選必須過 `tools/cantonese_corpus.py` 功能檢索＋自然度檢查（§8E）；旗號要逐項處理，唔可以靠印象宣稱「自然」。
- 言癖必須經 §8F 五步設計（功能出發→候選→語料→頻率上限→拆走／撞聲測試）；未有句子證據唔可憑空派口癖。
- 功能向角色唔用「應該／可能」類含糊詞同誇張大話；猶豫優先用停頓、省略、動作。
