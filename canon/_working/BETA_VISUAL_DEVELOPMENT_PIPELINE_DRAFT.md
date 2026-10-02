# Beta Visual Development Pipeline — DRAFT

> **狀態：DRAFT / 未拍板細節。**
> 作者 2026-09-27 起要求建立「一步一步分開測唔同元素、最後先一次過合成」嘅 visual-development pipeline；2026-09-28 再確認：**清楚優先於靚，benchmark location 唔應該早過基礎 visual-language modules。**
> 本檔只保存目前工作骨架，**未授權自動向下生產**。
> 關聯討論：`2026-09-27_BETA_ENVIRONMENT_RESPONSE_AND_STAGE_LANGUAGE_DISCUSSION_LOG.md`、`2026-10-02_BETA_VISUAL_DEVELOPMENT_CONTINUATION_LOG.md`
> Visual-language tracker：`BETA_VISUAL_LANGUAGE_REGISTER.md`

---

## Pipeline 原則

1. **一張 sheet 只解一個主要問題。**
2. **先拆 subsystem，再做 world response。** World Response 係多個已通過 module 合成嘅結果，唔係早期單一測試。
3. **同一研究 sheet 盡量固定 camera / blocking / baseline，避免多變因一齊改。**
4. **用最便宜、最清楚嘅表示法回答問題。** 空間可用灰模／plan；lighting 用 value/color key；usage 用 diagram；behavior 用 sequence thumbnail。
5. **清楚優先於完成度。** 早期可刻意使用灰模、線稿、黑白、簡化小人、箭嘴、註解，避免 finish 掩蓋設計問題。
6. **規則先行，motif 後行。** 金魚／哥德唔可以代替機制。
7. **Benchmark location 用嚟驗證規則，唔係用嚟一次過發明所有規則。**
8. **最後先做 composite / key visual。**
9. **本 pipeline 係 visual-development track，唔推進 Scene Architecture / Script；Round 196 Sequence-layer freeze 不受影響。**

---

## P00 — Core Mechanism

**目的**：先定世界反應背後嘅工作模型，未進入具體美術。

目前工作模型：
- Raw Emotion 決定關係／心理 tension。
- Haruka Filter 決定 Beta 世界可用嘅翻譯語言。
- Place Memory 決定具體地點用咩空間／物件詞彙。
- 天然情緒流工作比喻：**潮汐／水流**；現實體感層：**氣壓／atmosphere**。
- 日常／中強度世界態度：**承接／幫情緒變得可見（A/B）**。
- 高強度：**過度詮釋／放大（C）**。
- 帝國化：**利用／處理／管理（D）**，可沿「天然潮汐被抽取、整流成訊號／能源」方向研究。
- Dual Overexposure：高強度時願望甜與恐懼可同步放大。

**交付**：文字 brief / mechanism diagram；無須 finished art。

---

## P01 — Spatial Language

**目的**：先研究 Haruka 世界嘅空間本身點樣成立，唔靠 lighting、motif、角色美術救場。

### P01A — Scale / Compression
當前優先級：
1. Scale / Compression
2. Zoning
3. Orientation
4. Distance
5. Exit / Boundary

Scale / Compression 情感優先：
1. **不正常唯美**
2. **世界生命性／似呼吸**
3. **舞台化**
4. **孤獨／情感距離**
5. **壓迫／被擠壓**

第一輪灰模研究已證明以下方向均可保留繼續研究：
- Vertical Lift
- Central Void
- Depth Stretch
- Perimeter Breathing
- 及其低強度組合

**注意**：以上係 study directions，未係固定 grammar dictionary。

### P01A-2 — Zoning / Orientation progression

Zoning 已以課室灰模做過第二輪強化研究，方向包括更強 level split、structural strips / beam-floor extreme 等；作者指出「No Floor / In the Air」只係**極端範圍例子**，唔係新 category。

Orientation 下一輪優先意圖已確認：
1. **舞台感（D）**
2. **空間有另一個真正前方（B）**
3. **個人／局部不屬於原本方向系統（A）**
4. **生活邏輯侵蝕官方秩序（C）**

工作理解：方向錯位首先應服務「某區自然成為被觀看的場」，其次係 official front 與 true front 分裂；個人錯向係局部工具，而「生活侵蝕制度方向」唔係目前主感受。

### P01B — Programmatic / Functional Spatial Logic（已記錄，稍後再展開）

研究一種更通用嘅 Beta 空間特性：

> **熟悉建築／城市系統仍然存在，但「用途配置、樓層關係、動線、服務空間、公共／私人功能」會出現不合理但被居民日常化接受嘅規劃。**

重點：
- 作者已確認一個核心方向：**Beta 空間可按「人怎樣生活、流動、聚集、感受」重新組織，而唔只服從工程／規劃理性。**
- 作者亦確認：**功能直覺可以凌駕規劃邏輯**；五歲晴香式理解可偏向「需要買嘢所以附近應該有舖、需要去某處所以應該有車、需要傾偈所以應該有可停留空間」等直覺，而唔係 zoning-code 思維。
- 研究「功能與空間關係本身錯位／異常嫁接」呢個普遍原則；
- **暫時唔拆成固定候選類型、唔建立四種或任何封閉 taxonomy**；
- 可由高密度香港／山城式城市經驗出發，但要發展成 Project Haruka 自己嘅通用空間邏輯；
- 居民可以真實使用並視之為日常，唔等於夢境假景；
- 之後要研究佢同 Place Memory、Wish Overlay、Living World、Stage Grammar 嘅關係。

作者提供過嘅非窮舉例子（只作記錄，**唔係分類**）：
- 80–90 年代公屋三十多層中，某個中層突然存在商業用途；
- 原本後樓梯／服務空間異常放大成可生活、可通行嘅街道尺度；
- 住宅建築中層／後樓梯位置可接入火車站式交通空間；
- 正式規劃、設施齊全嘅道路／通道最後可能係死胡同。

**狀態**：已插入 pipeline；暫停深入分類，待後續專題討論。

### P01 輸出形式
- 灰模 / blockout
- plan / section
- 黑白 thumbnail
- 簡化人形只作比例
- arrows / notes
- 無 character design、無 finished lighting、無 motif dressing

---

## P01.5 — Layout / Cinematography（非核心阻塞）

**狀態：DEFERRED / 非主要美術開發 gate。**

2026-10-02 作者指出：一般 eye-level / wide / tele / over-shoulder 等普通鏡頭比較，對目前 Project Haruka 美術語言開發價值低，唔應該阻塞主 pipeline。只有當未來要設計**真正特殊、可成為作品 signature 的 shot / staging system**時先另開研究。

已生成的 `Layout Study 01 — Camera / Lens / Stage Relationship` 僅作參考，**不列為主線必經驗收項目**。

---

## P02 — Lighting Language

**目的**：固定空間，只研究光、value、focus、exposure。

候選研究方向：
- neutral / everyday
- gentle beautification
- practical focus
- abnormal beauty
- exposure / over-visibility
- pressure-linked value change
- sweeter-but-worse（只測 lighting 層，不等於完整 Dual Overexposure）

**方法**：
- 第一輪可先黑白 value keys；
- 第二輪先進 color keys；
- 固定空間、camera、blocking。

**交付**：6–10 格 value / color key strip。

---

## P03 — Affective Environment / Uncanny Pressure

**目的**：研究「情緒流過世界時，空間點樣變得令人討厭／窒息／不正常唯美」，而唔將 Atmosphere 簡化成天氣、霧、夜晚、破敗 moodboard。

### P03A — Affective Pressure
研究：
- **Semantic Wrongness**：熟悉空間／物件仍然存在，但用途／出現位置／關係唔對；
- **Sensory Pressure**：空氣重量、低頻、silence、sound-distance mismatch；
- **Temporal Wrongness**：movement lag、重覆、停住、反應慢半拍；
- **Normalisation**：觀眾覺得怪，但角色視為日常；
- **No Release**：不安狀態可持續，唔一定即刻用 action / joke / bright cut 排壓。

**護欄**：
- 唔直接抄《小圓》collage／魔女結界 icon；
- 唔靠天氣／時間／材質 decay 當核心；
- 固定 space / lighting / character blocking 時，先測「壓力點樣存在」。

### P03B — Collective-Unconscious Substrate / Non-World Language
**目的**：獨立設計 Project Haruka 自己嘅底層「非現世」語言；層級高於一般 motif。

Repo 已有素材要先分清：
- 集體潛意識可具現為「無盡後巷與唐樓」嘅超現實香港城市景觀；
- **Cosmic Fluid / 星空流體** = 承載情緒物質嘅底層媒介／畫布；
- **Cosmic Void / 宇宙星空核心** = 靈魂溶解後嘅無定義底層狀態；
- 認知支撐解體／無人區可露出 cosmic substrate。

作者 2026-10-02 新提出：
> **星空可作集體潛意識底色，或發展同等強度嘅非現世語言。**

**目前只係 visual-development direction，唔直接 canonize「集體潛意識 = 星空」。**

要回答：
1. 城市／記憶層 vs 無定義 substrate 點轉換；
2. 星空係 void、fluid、材質剝落後底色、空間深處，定其他表達；
3. 乜強度先開始 leakage；
4. 點避免「一怪就露星空」變 default motif；
5. 除星空外，有冇同等非現世 language 可以同一 system 內共存。

### P03C — Medium / Representation Contamination（候選）
如 P03A/B 證明需要，再研究：
- 局部 graphic representation method 改變；
- movement / timing system 改變；
- detail density / perspective / shadow logic 局部換語言。

**唔預設必做**；只有當 A/B 無法回答「世界表達媒介本身被侵蝕」先開。

**交付**：先做 mechanism / state diagram；通過定義後先做 controlled image / short-sequence studies。

---

## P04 — Lived Environment / Host Layer

**目的**：研究地方點樣真實被人使用，建立香港宿主生活、密度、生活痕跡、Place Memory 基底。

只研究：
- occupancy
- routes
- clutter / storage
- daily rhythms
- public/private overlap
- local urban habits

**交付**：usage diagrams / occupancy sheets / host-layer reference studies。

---

## P05 — Wish Overlay

**目的**：獨立研究五歲晴香嘅願望覆層點樣重新整理普通地方，而唔靠可愛 decoration。

可研究：
- 某些位置異常適合關係場面
- 窗、角落、走廊、停留位嘅構圖潛力
- 動線比現實更「識安排一幕」
- 青春／動畫理想感點樣輕度覆蓋 host layer

**交付**：同一 host baseline 嘅 wish-overlay variants。

---

## P06 — Living Environment

**目的**：研究 Beta-only 準有機城市／設備，以及環境本身嘅生命節律。

分開 baseline 與 stronger response：
- baseline：準有機行為但無明確意識
- stronger state：可再研究更高程度 soul-like / selective response（觸發條件仍未鎖）

**交付**：behavior sheet / short sequence thumbnails。

---

## P07 — Human Attention

**目的**：獨立研究真實靈魂之間嘅注意力共振。

工作模型：
- 日常／中強度：**Attention Bias**，提高「注意到」嘅傾向，但唔控制意志。
- 真正高強度：**Collective Gaze / perception synchronization**，可短暫同步看見同一點，但每個人之後反應仍由自己決定。

**交付**：固定 camera / lighting / space 嘅 neutral → bias → collective gaze contact sheet。

---

## P08 — Mirror / Reflective Interface Language

**目的**：獨立研究「鏡／反光介面」作為高階視覺系統點樣參與空間、身份、真實、觀看與構圖；**唔將鏡降格成一般 motif**。

Repo 既有 Canon 已經有 [鏡像法則]（World Rules）同 [法則·鏡像]（Visual Bible）作核心規則／核心視覺支柱；本 phase **唔新增世界規則**，只發展佢作為 art-direction / directing language 嘅可重複使用方式。

研究時至少要分清：
- **普通反射的空間功能**：擴張／複製／折返視線、製造 second front、改變 orientation / zoning；
- **鏡像法則啟動時的真實介面**：反光面繞過 Beta 覆寫、顯示底層真實；
- **觀看／舞台功能**：角色可同時成為 actor / witness，鏡面可建立額外觀眾位或背後視線；
- **Identity / self relation**：本人、倒影、缺席、錯位之間嘅構圖關係；
- **強度控制**：日常存在、輕微異樣、高情緒法則觸發、後期 rule-collapse anomaly 要分層。

**重要限制**：
- 鏡係高階 cross-cutting system，重要性高於一般 Goldfish 等 motif dialect；
- 唔可以為「有 feel」而每場亂放鏡；
- P01 空間測試暫時唔加入鏡，避免 reflection 同 orientation / zoning 混成同一變因；
- 「鏡中承諾」中的「鏡」仍係心理／隱喻意象，唔等於此 phase 必須有實體鏡面。

**交付**：Mirror Language Study / reflective-interface sheet；先做 spatial/compositional use，再做 Mirror Law activation，最後先測同其他系統合成。

---

## P09 — Motif Dialects

逐套獨立測：
- Goldfish / water / soft life
- Gothic / fixation / containment
- Wish sweetness / idealized happiness
- Stage / gaze / focus
- Bionic city / living infrastructure
- Identity echo（媒介與限制待討論）

**規則**：motif 係口音，唔係 trigger；唔可以靠 motif 代替 space / light / mechanism。

**交付**：一頁一 dialect，列 range / use / overuse risk。

---

## P10 — Benchmark Location Synthesis

到呢度先正式用具體地點驗證前面規則。

首批 benchmark：
1. **Classroom — wish-heavy**
   - 已記錄作者偏好：中三／初中；香港為底但已動畫理想化不少；窗邊、座位、角落、門口／走廊都可有戲；baseline 偏冷但仍溫柔。
2. **Dessert Shop — host-heavy**

目的：
- 同一套 art-direction grammar 落喺不同 location dialect 是否仍可辨識；
- benchmark 只驗證已發展 module，唔應該偷偷新增大量規則。

**交付**：baseline environment sheet / controlled synthesis sheet。

---

## P11 — Natural World Response

前面 modules 通過後先做完整自然 Beta response：

### Parked high-intensity benchmark — Empire Square Floating Chandelier
作者提出一個之後先正式判定因果嘅高強度 visual benchmark：
- 帝國廣場上空出現**完全無鋼索／無吊架／無天花支撐、直接浮於半空**嘅超巨型 chandelier；
- **唔屬於普通帝國 baseline 建築**，否則會荒謬過頭；
- 候選方向係高情緒／高世界反應下，廣場被「舞台／宴會廳」式功能直覺重新詮釋；
- 到時先判斷係世界自然生成、黑奏主導、定黑奏借世界反應生成；
- 暫時只當 P11/P12 World Response × Black Kanade composite benchmark，**唔回寫成 canon、唔污染 P01 baseline**。



- Spatial Language
- Lighting
- Atmosphere
- Host / Place Memory
- Wish Overlay
- Living Environment
- Human Attention
- Motif（按需要）

核心測試包括：
- mild response
- strong response
- Dual Overexposure

**交付**：mechanism composite sheet / controlled keyframe studies。

---

## P12 — Imperial Processing

**目的**：將天然 Beta 情緒機制與帝國制度化處理分開研究。

工作方向：
- natural flow / tide
- capture
- processing / rectification
- storage
- distribution
- signal / power / administrative readout

**注意**：確切城市能源網與「use + domesticate」仍屬待驗證 DRAFT，唔自動硬化成 canon。

**交付**：system board / infrastructure process studies / natural-vs-processed comparison。

---

## 下一步

目前停喺 **P01 Spatial Language**。

- P01A Scale / Compression 第一輪方向已粗測；
- P01B Programmatic / Functional Spatial Logic 已記錄並插入 pipeline，但作者要求**之後先深入討論，暫時唔做 taxonomy**；
- P01 Spatial Language 第一輪已完成：Scale / Compression、Zoning、Orientation、Distance、Exit / Boundary 均已有灰模探索；Programmatic / Functional Spatial Logic 已插入並保留作後續深化。
- P02 Lighting 第一輪已完成：3-Value Focus、Stage Angle Grammar、Beam Geometry、Special & Stage Zones。
- 一般 Layout / Camera comparison 已降級為非核心。
- P03 已由普通 Atmosphere 改為 **Affective Environment / Uncanny Pressure**；2026-10-02 加入 P03B **Collective-Unconscious Substrate / Non-World Language**，星空／Cosmic language 係核心候選，但未等同整個集體潛意識。
- **下一步唔生圖先**：先定 P03A / P03B 嘅 mechanism、state range、gate。
- 作者另補充：**鏡係重要到接近獨立 visual system，層級高於金魚等一般 motif**。已插入 P08 Mirror / Reflective Interface Language；暫時唔混入 P01 測試。
- 之後所有新 signature element 用 `BETA_VISUAL_LANGUAGE_REGISTER.md` 追蹤；例子／benchmark 唔自動升格 category。
