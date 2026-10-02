# Beta Visual Language Register — WORKING TRACKER

> **狀態：WORKING / VISUAL-DEVELOPMENT TRACKER。**
> 本檔唔係 canon。用途係回答：「Project Haruka 仲有咩視覺語言未設計？設計到邊？幾時可以過 gate？」
> 原則：**世界規則／角色設定已存在 ≠ production visual language 已經設計完成。**
> 關聯：`BETA_VISUAL_DEVELOPMENT_PIPELINE_DRAFT.md`、`2026-09-27_BETA_ENVIRONMENT_RESPONSE_AND_STAGE_LANGUAGE_DISCUSSION_LOG.md`、`2026-10-02_BETA_VISUAL_DEVELOPMENT_CONTINUATION_LOG.md`。

---

## 1. 乜嘢值得開成一個「需要設計」嘅 Visual Language Item？

符合以下任何一條，就應該入 Register，而唔係靠臨場 key art 自己解決：

1. **Canon / World Rule 有穩定視覺後果，但未有 production rule。**
   - 例：集體潛意識、鏡像法則、情緒流。
2. **一個元素會跨多場／多地點重覆出現，會形成作品辨識度。**
   - 例：舞台化空間、金魚、哥德、仿生城市。
3. **佢會改變觀眾點讀畫面，而唔只係 decoration。**
   - 例：Mirror、Human Attention、No Backstage、World Response。
4. **同另一套語言容易混淆，必須先拆開。**
   - 例：Lighting vs Atmosphere；Gothic vs Fear Response；Cosmic substrate vs Collective-Unconscious cityscape。
5. **係高風險 signature / 高強度場景工具。**
   - 例：Dual Overexposure、Empire Square Floating Chandelier benchmark。
6. **如果唔先定規則，AI / concept artist 好容易每場自由發揮到失去一致性。**

---

## 2. Tracking 欄位

每個 item 至少追蹤：

- **ID / Name**
- **Layer**：Structural / Lighting / Affective / Substrate / Interface / Motif / Composite / Institutional
- **Source State**：CANON-EXISTS / AUTHOR-CONFIRMED-VISDEV / DRAFT / REFERENCE-ONLY
- **Pipeline Owner**
- **Current Design State**：NOT STARTED / EXPLORING / FIRST-PASS / DEFERRED / GATE-PASSED
- **Question to Answer**
- **Dependencies**
- **Minimum Test**
- **Exit Gate**
- **Open Risks / Confusions**
- **Last Updated**

> **Stop Rule**：當核心問題已答到、有 2–4 個可用方向、新測試主要只會增加 variation 而唔再發現 principle，就應該過 gate，唔再無限 catalog。

---

## 3. Current Register

| ID | Visual Language / System | Layer | Source State | Pipeline Owner | State | Core Question / Gate |
|---|---|---|---|---|---|---|
| VL-001 | Spatial Language — Scale / Zoning / Orientation / Distance / Boundary | Structural | AUTHOR-CONFIRMED-VISDEV | P01 | **FIRST-PASS COMPLETE** | 唔靠燈光／motif，空間本身係咪已有 Haruka 味？ |
| VL-002 | Programmatic / Functional Spatial Logic | Structural | AUTHOR-CONFIRMED-VISDEV | P01B | **EXPLORING / DEEP DIVE DEFERRED** | 空間可否按「人點生活、流動、聚集、感受」重新組織，功能直覺凌駕規劃邏輯，同時仍可生活？ |
| VL-003 | Stage Lighting / Focus Language | Lighting | AUTHOR-CONFIRMED-VISDEV | P02 | **FIRST-PASS COMPLETE** | 光可否建立 focus、stage zone、actor / witness 關係，而唔只係 mood lighting？ |
| VL-004 | Affective Environment / Uncanny Pressure | Affective | DRAFT / CURRENT NEXT | P03A | **NOT STARTED** | 點樣做到「討厭／窒息／不正常唯美」而唔靠天氣 moodboard 或直接抄魔女結界？ |
| VL-005 | Collective-Unconscious Substrate / Non-World Language | Substrate | **CANON-EXISTS + AUTHOR-CONFIRMED-VISDEV** | P03B | **EXPLORING** | **已確認 reveal order：先出現非現世嘅空間深度／物理失真，強度再升先真正露出星空／Cosmic substrate。** 下一步：早期 non-world physics 具體用咩視覺 grammar？ |
| VL-006 | Host Layer / Lived Hong-Kong Memory | Structural / Cultural | CANON-EXISTS + AUTHOR-CONFIRMED-VISDEV | P04 | NOT STARTED | 點樣令地方真係被人生活出嚟，而唔係 generic HK dressing？ |
| VL-007 | Haruka Wish Overlay | Structural / Affective | CANON-EXISTS + AUTHOR-CONFIRMED-VISDEV | P05 | NOT STARTED | 五歲晴香嘅「幸福／方便／動畫直覺」點樣整理地方，而唔只係加可愛 decoration？ |
| VL-008 | Living / Biomorphic Environment | Behavioral | AUTHOR-CONFIRMED-VISDEV | P06 | NOT STARTED | quasi-organic non-conscious baseline 點樣可讀？何時可以升到 soul-like selective response？ |
| VL-009 | Human Attention Resonance | Behavioral / Social | AUTHOR-CONFIRMED-VISDEV | P07 | NOT STARTED | Attention Bias → Collective Gaze 點樣成立，同時保留真實靈魂 agency？ |
| VL-010 | Mirror / Reflective Interface | Interface | **CANON-EXISTS** | P08 | NOT STARTED | 普通反射、舞台／觀看、Identity、Mirror Law activation 點分層？ |
| VL-011 | Goldfish / Water / Soft-Life Dialect | Motif | CANON-EXISTS + AUTHOR-CONFIRMED-VISDEV | P09 | NOT STARTED | 點樣保持重要但唔變 default answer？ |
| VL-012 | Gothic / Fixation / Containment Dialect | Motif / Fear | CANON-EXISTS + PARTIAL VISDEV | P09 | NOT STARTED | Gothic 點作 Fear-side output，而唔係一有異常就黑鐵？ |
| VL-013 | Wish Sweetness / Overexposed Sweetness | Affective / Motif | AUTHOR-CONFIRMED-VISDEV | P09 / P11 | NOT STARTED | 真暖／願望甜／過曝甜點分；高強度如何同恐懼同步上升？ |
| VL-014 | Identity Echo | Interface / Affective | DRAFT | P09 / P11 | NOT STARTED | 「世界開始重複你」應落咩媒介，避免改寫其他真實靈魂身份？ |
| VL-015 | Natural World Response | Composite | AUTHOR-CONFIRMED-VISDEV FRAMEWORK | P11 | BLOCKED BY MODULES | 前面 subsystem 合起來時，世界點樣由承接／可視化升到過度詮釋？ |
| VL-016 | Imperial Processing | Institutional | CANON-EXISTS + DRAFT VISDEV MODEL | P12 | NOT STARTED | 天然情緒潮汐點被抽取、整流、量化、能源／訊號化？ |
| VL-017 | Dual Overexposure | Composite / High Intensity | AUTHOR-CONFIRMED-VISDEV | P11 | BLOCKED BY MODULES | 如何做到「極端甜 + 極端心理恐怖」同時成立，而唔係粉紅＋黑？ |

---

## 4. Core Substrate 特別註記（VL-005）

Repo 目前已有幾組**唔可以混成同一件事**嘅素材：

- `02_glossary.md`：集體潛意識具現化可呈現為「無盡後巷與唐樓」嘅超現實香港城市景觀。
- `06_visual_bible.md#section-cosmic-fluid`：**星空流體（Cosmic Fluid）**係所有魔法特效嘅底層媒介／承載情緒物質嘅底層畫布，有光態／暗態／虛無態。
- `07_entities_and_devices.md`：**Cosmic Void Core / 宇宙星空核心**代表靈魂溶解後嘅「無定義狀態」，屬集體潛意識底層。
- 既有 location digest：無人／認知支撐解體時，可出現宇宙星空／Cosmic Void；有人生活區則由集體記憶寫成可居住城市。

因此作者 2026-10-02 新提「**星空（集體潛意識底色）或同等非現世語言**」時，安全工作方向係：

> **將星空／Cosmic language 視為底層 substrate 候選，而唔直接等同『集體潛意識所有層面都係星空』。**

P03B 要真正設計：
1. **城市／記憶層** vs **無定義／底層 substrate** 點轉換；
2. 星空係 literal sky、void、fluid、材質剝落後底色，定其他「非現世」表達；
3. 何時只係微弱 leakage，何時整個畫面 medium 都變；
4. 點避免「見怪就露星空」變成另一種廉價 default motif；
5. **作者已確認 intensity order（2026-10-02）**：早段先讓觀眾感到「空間深度／物理已經唔屬於現世」，唔立即見到星空；去到更強狀態先真正露出星空／Cosmic substrate。即 **non-world physics precedes literal cosmic reveal**。

---



### P03B early non-world physics priority（作者確認）
**A > D > B > E > F > C**

即：
1. **Depth / Metric Wrongness**
2. **Continuity / Topology Wrongness**
3. **Parallax Wrongness**
4. **Gravity / Up-Down Wrongness**
5. **Scale Without Transition**
6. **Occlusion Wrongness**

解讀：Haruka 嘅非現世物理應先由「可量度空間」同「連接關係」出錯開始；之後先到視差／重力；純遮擋錯位放最後，避免太早讀成數碼 glitch／畫面 bug。

## 5. Benchmarks（唔係語言分類）

以下只係用嚟壓測語言上限，**唔係新 category**：

- **No-Floor / In-the-Air Classroom**：Programmatic Spatial Logic 極端值；無完整地板、石屎橫樑承載枱椅、有 gap / level difference。用途係證明 baseline 異常可由「仍可生活」推到「情緒過強後越過 usability threshold」。
- **Empire Square Floating Chandelier**：高世界反應 benchmark；超巨型 chandelier 完全無鋼索／吊架／天花支撐，直接浮喺露天帝國廣場半空。唔屬普通帝國 baseline；因果留 P11/P12 World Response × Black Kanade 判定。

---

## 6. Review Cadence

每完成一個 phase：
1. 更新本 Register；
2. 標記該 item 是否 GATE-PASSED / RETURN-PASS；
3. 新發現嘅 signature visual language 立即入 Register，唔等到 final composite；
4. 如果只係例子／benchmark，放 Benchmarks，**唔升格成 category**；
5. 如果係 canon 世界規則但未有視覺規格，標 **CANON-EXISTS + VISDEV GAP**；
6. Final composite 前，所有必要 item 必須至少 FIRST-PASS，否則唔准靠 key art 即場發明。
