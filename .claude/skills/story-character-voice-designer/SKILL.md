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

預設推薦 A，但必須提供選擇。

作者選 A 後：
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
- 加入口癖、句式特色、思想意象、壓力漏洞。
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
