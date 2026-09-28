# Beta Visual Development Pipeline — DRAFT

> **狀態：DRAFT / 未拍板細節。**
> 作者 2026-09-27 起要求建立「一步一步分開測唔同元素、最後先一次過合成」嘅 visual-development pipeline；2026-09-28 再確認：**清楚優先於靚，benchmark location 唔應該早過基礎 visual-language modules。**
> 本檔只保存目前工作骨架，**未授權自動向下生產**。
> 關聯討論：`2026-09-27_BETA_ENVIRONMENT_RESPONSE_AND_STAGE_LANGUAGE_DISCUSSION_LOG.md`

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

### P01B — Programmatic / Functional Spatial Logic（已記錄，稍後再展開）

研究一種更通用嘅 Beta 空間特性：

> **熟悉建築／城市系統仍然存在，但「用途配置、樓層關係、動線、服務空間、公共／私人功能」會出現不合理但被居民日常化接受嘅規劃。**

重點：
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

## P03 — Atmosphere / Emotion-Flow Language

**目的**：研究「天然情緒潮汐 → 現實氣壓感」點樣被感受到，而唔急住改建築或做完整 world response。

可研究：
- air density
- haze / particulate motion
- sound-distance impression
- hanging objects / curtains response
- motion lag / stillness
- pressure rise / drop
- spatial silence

**交付**：同一空間 3–6 格 atmosphere studies / behavior thumbnails。

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

## P08 — Motif Dialects

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

## P09 — Benchmark Location Synthesis

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

## P10 — Natural World Response

前面 modules 通過後先做完整自然 Beta response：

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

## P11 — Imperial Processing

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
- 下一步應繼續 P01 主線，而唔跳去完整 classroom 或 World Response。
