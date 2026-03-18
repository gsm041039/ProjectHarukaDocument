# Decision Log

> **讀者指引**：本文件記錄所有已發現的設定矛盾及其統一口徑。當你在不同來源中遇到衝突描述時，以本文件的裁決為準。
> 相關文件：[Glossary](02_glossary.md) | [World Rules](01_world_rules_and_costs.md) | [Timeline](04_timeline_canon.md)

<!-- Sources: _reports/phase1_conflict_list.md, _reports/phase1_resolution_proposals.md -->

---

## <a id="section-scope"></a>文件職責邊界

- 本文件只記錄矛盾裁決（採用口徑、棄用口徑、理由、影響範圍）。
- 本文件不重寫劇情正文；正文文件必須遵循本頁裁決。

---
## <a id="section-how-to-read"></a>閱讀方式

每條記錄格式：
- **CF-ID**：矛盾編號
- **矛盾**：衝突描述
- **裁決**：採用的統一口徑
- **理由**：決策依據（P1-P4 優先級）
- **影響文件**：哪些 Canon 文件依此口徑書寫

---

## <a id="section-high-severity"></a>HIGH 嚴重度

### <a id="decision-cf001"></a>CF-001: 魔法代價機制

**矛盾**：SW-004 描述魔法代價為即時代謝燃燒（血糖歸零、需補充卡路里），SW-021 描述為累積情感耗損（情緒結晶消耗、心匣留痕）。

**裁決**：**情感耗損為主體機制，代謝反應為生理副作用。**
- 魔法的根本代價是情感耗損（情緒結晶消耗 → 心匣留痕 → 最終燃盡或破碎）
- 血糖驟降、低溫症、手抖屬身體強行導引靈魂能量的生理副作用，而非獨立代價機制
- 即：情感是燃料，身體是引擎，引擎過熱是副作用

**理由**：
- P1：情感模型可制式化（四層代價表）
- P2：直接支撐「態度 vs 命運」主題
- P4：情感模型出現在 5+ 文件，代謝模型僅 SW-004 一處

**影響文件**：[World Rules](01_world_rules_and_costs.md#rule-magic-cost) | [Entities](07_entities_and_devices.md#section-heart-container) | [Glossary](02_glossary.md#term-emotional-erosion)

---

### <a id="decision-cf002"></a>CF-002: Alpha 分歧年號

**矛盾**：晴香創世事件在 timeline_raw 為 Y102，在 CAN-04 v1 為 Y109。

**裁決**：**採用 Y102。**
- 晴香 5 歲（97+5=102 ✓）
- 美夜子 26 歲（76+26=102 ✓）
- Y109 版本有內部矛盾（聲稱「5 歲」但 97+12=109）

**理由**：
- P3：102 年版本數學自洽
- P1：「5 歲的孩子改寫世界」可清晰制式化

**影響文件**：[Timeline](04_timeline_canon.md#event-alpha-divergence) | [Haruka](03_characters/haruka.md) | [Story Outline](05_story_outline_canon.md)

---

## <a id="section-medium-severity"></a>MEDIUM 嚴重度

### <a id="decision-cf003"></a>CF-003: 角色動機演化

**矛盾**：SW-002（背景）、SW-007（心理分析）、DIR-008（象徵）、DIR-010（原型）對角色動機有版本差異。

**裁決**：**以 SW-007 心理分析為主要來源。** SW-002 提供事實框架，DIR-008/010 作為補充標籤。

**理由**：P2（最深度分析，1401 行）| P4（被 Canon v1 最頻繁引用）

**影響文件**：所有 [Character Sheets](03_characters/)

---

### <a id="decision-cf004a"></a>CF-004a: Alpha 同步觸發時機

**矛盾**：SW-017 說「變身觸發同步」，DIR-003 說「解除變身時」觸發。

**裁決**：**三階段模型 — 變身時啟動，戰鬥中持續，解除變身時最強。** 不同角色的高峰時刻因心理創傷類型而異。

**理由**：P1（可制式化為三階段規則）

**影響文件**：[World Rules](01_world_rules_and_costs.md#rule-alpha-sync)

---

### <a id="decision-cf004c"></a>CF-004c: 真相獲取路徑

**矛盾**：SW-017 強調「多路徑真相」（魔法 + 共振驗證），DIR-003 只提供魔法觸發方案。

**裁決**：**明確兩種路徑並列。** 魔法同步（快但危險）與多人共振驗證（慢但穩定），兩者都有效。

**理由**：P2（「多路徑」支撐主題——態度的選擇不止一條路）

**影響文件**：[World Rules](01_world_rules_and_costs.md#rule-alpha-beta)

---

### <a id="decision-cf006"></a>CF-006: 帝國政治結構

**裁決**：以 SW-004 系統性世界觀描述為主。

**理由**：P1（系統性 > 散落提及）

**影響文件**：[World Rules](01_world_rules_and_costs.md#section-geography-politics)

---

### <a id="decision-cf008"></a>CF-008: 角色關係轉折時機

**裁決**：以 SW-008 為事實框架（1071 行），DIR-006 為演出補充。

**理由**：P3（與時間線對齊）| P4（涵蓋更多角色對）

**影響文件**：[Timeline](04_timeline_canon.md) | [Character Sheets](03_characters/)

---

## <a id="section-low-severity"></a>LOW 嚴重度

### <a id="decision-cf005"></a>CF-005: 視覺設計版本

**裁決**：以個別角色視覺原案組（角色專屬視覺稿）為最終設計。

**影響文件**：[Visual Bible](06_visual_bible.md) | Character Sheets 視覺要點

---

### <a id="decision-cf007"></a>CF-007: 情緒能量數值

**裁決**：以 SW-009 (860行) 為數值權威。

**影響文件**：[World Rules](01_world_rules_and_costs.md#section-emotion-system)

---

### <a id="decision-cf004b"></a>CF-004b: 導演參數

**裁決**：DIR-003 的技術參數降格為「參考範例」，不寫入 Canon 規則。

**影響文件**：不影響 Canon 文件（導演技法參數僅供參考）

---

## <a id="section-phase2-conflicts"></a>Phase 2：test.txt 審查矛盾裁決（CF-T01~T30）

> **來源**：`test.txt`（5894 行 AI 創作討論記錄）與 `canon/` 現有文件之矛盾盤問。
> **裁決日期**：2026-02-17
> **裁決人**：作者（Q1-Q5 + Q-NEW-01~05 + Gate C 全批）

---

## <a id="section-phase2-high"></a>CF-T HIGH 嚴重度

### <a id="decision-cft01"></a>CF-T01: 凜の戰前性格

**矛盾**：Canon（`rin.md`）將凜定義為「完美主義者、冷酷、冰藍風格」；`test.txt` 描述為「木之本櫻味、溫柔光源、記粉絲生日、折星星」。

**裁決**：**採納「木之本櫻味」**。凜的 Alpha 線起點改為溫柔偶像 Archetype：記得粉絲名字、手折星星、日記本寫生日。冷酷完美主義是 Alpha 原傷後的封閉狀態，而非初始性格。

**理由**：P2（直接支撐「Alpha 原傷改變人」的主旋律）| P4（連帶強化 CF-T08 粉絲自殺事件的情感落差）

**影響文件**：[Rin](03_characters/rin.md#section-archetype)

---

### <a id="decision-cft02"></a>CF-T02: 凜の重生後記憶狀態

**矛盾**：Canon 描述重生後凜「完全失憶」；`test.txt` 描述為「入侵式依附」、「只要你痛到記得我，我就存在」的情感殘留狀態。

**裁決**：**情感印痕殘留模式（Q2=C）**。記憶刪除，但情感印痕殘留；見到美夜子時有無意識感應（生理反應，非敘述性記憶）。

**理由**：P2（「身體記得心不記得」比純失憶更具敘事張力）

**影響文件**：[Rin](03_characters/rin.md#section-arc-acts) | 連帶影響 CF-T03

---

### <a id="decision-cft03"></a>CF-T03: 凜の治癒框架

**矛盾**：Canon 描述凜「主動選擇拒絕治癒」（積極自主的障礙）；CF-T02 裁決後需連帶修正。

**裁決**：**連帶修正為情感印痕模式**（CF-T02=C 連帶）。「主動拒絕」的主體性語形保留；底層機制改為情感印痕驅動（無意識拒絕，非有意識策略）。

**理由**：P2（與 CF-T02 一致性）

**影響文件**：[Rin](03_characters/rin.md#section-arc-acts)

---

### <a id="decision-cft04"></a>CF-T04: 黑奏核心動機

**矛盾**：Canon 將黑奏動機定為「修正人類設計缺陷」；`test.txt` 提出 Caius 型動機——復活螢。

**裁決**：**Caius 型（Q3=B）**。黑奏真正驅動力 = 復活螢。「修正人類設計缺陷」是表層論述/自我合理化。三階段計劃 = 貨幣化人類痛苦 → 積累情感貨幣 → 向情緒總帳結算換回螢。

**理由**：P2（Caius 型動機製造更深的悲劇性，強化「愛到極端成為毀滅」主旋律）

**影響文件**：[Antagonist](03_characters/aya.md#section-motivation) | [Antagonist Stage 3](03_characters/aya.md#section-arc-acts)

---

### <a id="decision-cft08"></a>CF-T08: 凜の Alpha 原傷

**矛盾**：Canon `rin.md` 將 Alpha 原傷定為「誤殺事件（情緒失控導致無辜者死亡）」；`test.txt` 提出「粉絲自殺事件」作為唯一原傷。

**裁決**：**完全替換（Q-NEW-01=A）**。廢棄「誤殺事件」；唯一 Alpha 原傷 = 粉絲自殺事件。凜作為新人偶像，無法透過音樂拯救精神崩潰的粉絲，粉絲輕生 → 凜精神崩潰，封閉全部情緒。

**理由**：P2（粉絲自殺事件直接呼應「音樂無法救人」與偶像命題的主旋律對話）| P1（單一明確的原傷比雙重原傷更可制式化）

**影響文件**：[Rin](03_characters/rin.md#section-alpha-idol)

---

### <a id="decision-cft09-11"></a>CF-T09/T10/T11: 晴香願望含凜 + 偶像位置取代 + Beta 軌跡起源

**矛盾**：Canon 中晴香的 5 歲童願未明確包含凜；凜的 Beta 線起點（軍事）缺乏解釋。

**裁決**：**三點全採納（Q-NEW-02=A）**：
1. 晴香的創世願望明確包含「讓凜成為守護者而非被折斷的人」的成分。
2. 晴香字面意義上取代了凜在 Alpha 線的命定偶像位置。
3. 凜的 Beta 線軍事軌跡直接由此取代事件而起。

**理由**：P2（命運置換強化「晴香的好意是所有人痛苦的源頭」主旋律）| P3（提供 Beta 線凜的行動驅動邏輯）

**影響文件**：[Rin](03_characters/rin.md#section-destiny-displacement)

---

### <a id="decision-cft16"></a>CF-T16: 放養機制詮釋

**矛盾**：Canon `rin.md` 將潘朵拉協議定為「主動設計的陰謀（演算法投放裝置 + 隱形項圈 + 燈塔效應）」；`test.txt` 描述為「帝國將不可避免的災害變成可管理流程：監測—引流—回收」的被動工業管理。

**裁決**：**工業必然論（B）**。潘朵拉協議詮釋改寫為「帝國對不可控魔法定時炸彈的被動管理流程」；監測—引流—回收是面對無法控制局面的無奈工業必然，非主動佈局的陰謀。

**理由**：P2（被動管理產生更大的制度性悲劇感；「壓迫是系統的慣性而非惡意」）

**影響文件**：[Rin](03_characters/rin.md#section-pandora-protocol)

---

### <a id="decision-cft17"></a>CF-T17: 回收協議（防治癒自動機制）

**矛盾**：`test.txt` 提出「凜身上有回收協議：出現自我整合跡象，系統遠端觸發共振崩解，將其重置為女皇模式；美夜子每次救她，等於親手殺死她。」

**裁決**：**不採納（C）**。保留凜「主動選擇拒絕治癒」的直接語形；不引入外部系統強制機制。外部系統機制使凜喪失主體性，削弱角色弧光的意志主題。

**理由**：P2（主體性優先；凜的掙扎必須是內部的）

**影響文件**：不影響 Canon 文件（留作創作參考）

---

### <a id="decision-cft19"></a>CF-T19: 全員 Alpha 原傷通用模板

**矛盾**：各角色的原傷框架缺乏統一結構，導致描述深度不一。

**裁決**：**採納（A）**。建立五步通用模板並寫入世界規則：Alpha 原傷 → 晴香童願修正 → Beta 軌跡修正 → 守恆反噬 → 態度缺口。

**理由**：P1（可制式化；確保所有角色弧光結構一致）

**影響文件**：[World Rules: Alpha原傷五步模板](01_world_rules_and_costs.md#rule-alpha-wound-template)

---

### <a id="decision-cft20"></a>CF-T20: 朱音（岩倉朱音）Alpha 原傷及 Beta 軌跡

**矛盾**：Canon `iwakura_akane.md` 未以五步模板結構化朱音的原傷路徑。

**裁決**：**採納（A）**，寫入 `iwakura_akane.md`：
- **Alpha 原傷**：母親重度吸食情緒膠囊，朱音無力阻止
- **童願**：「如果我夠強，她就不用食藥。」
- **Beta 修正**：獲得魔法力量，變強/抗打
- **守恆反噬**：成為打手 → 弟弟誤食情緒結晶死亡
- **態度缺口**：「我終於有能力了，但我用能力做了最不應該做的事。」

**理由**：P2（守恆反噬直接呼應情緒守恆主旋律）

**影響文件**：[Iwakura Akane](03_characters/iwakura_akane.md)

---

### <a id="decision-cft21"></a>CF-T21: 操（綾小路操）Alpha 原傷及 Beta 軌跡

**矛盾**：Canon `ayakomoji_misao.md` 未以五步模板結構化操的原傷路徑。（計劃文件誤標目標為 `yu.md`；正確目標為 `ayakomoji_misao.md`。）

**裁決**：**採納（A）**，寫入 `ayakomoji_misao.md`：
- **Alpha 原傷**：家道中落，行乞時被當垃圾
- **童願**：「我想讓他們有尊嚴。」
- **Beta 修正**：綾小路家族恢復體面
- **守恆反噬**：體面變枷鎖，性別/身份被工具化
- **態度缺口**：「我不是想做某個身份，我是想不再被人定義。」

**理由**：P2（守恆反噬模式一致；身份牆主題強化）

**影響文件**：[Ayakomoji Misao](03_characters/ayakomoji_misao.md)

---

### <a id="decision-cft27"></a>CF-T27: 愛莉の集體潛意識人造錨點身份

**矛盾**：Canon `aeri.md` 未明確定義愛莉作為集體潛意識通道節點的功能機制。

**裁決**：**採納（A）**。愛莉 = 集體潛意識唯一人造常駐節點；所有人下潛必須經過愛莉的閘口；每次被作為閘口使用，負擔加重（紙皮盔甲每多一道裂縫、每多一圈膠帶 = 有人借道的代價）。

**理由**：P1（使愛莉的視覺符號「裂縫/膠帶加重」獲得敘事意義，可制式化為代價計時器）

**影響文件**：[Aeri](03_characters/aeri.md#section-core-function-1)

---

## <a id="section-phase2-medium"></a>CF-T MEDIUM 嚴重度

### <a id="decision-cft05"></a>CF-T05: 黑奏對晴香關係

**矛盾**：Canon 定義黑奏對晴香為「工具性關係」；`test.txt` 提出病態愛/恨偏執模型。

**裁決**：**病態愛/恨偏執（Q4=B）**。晴香是黑奏「世界觀的唯一反證」：晴香的善意與持續抵抗，是黑奏認為人類不值得被拯救的論述的唯一漏洞，因此黑奏對晴香既依存又憎恨。

**理由**：P2（病態偏執比工具關係提供更深的情感張力與悲劇性）

**影響文件**：[Antagonist](03_characters/aya.md#section-relationships)

---

### <a id="decision-cft06"></a>CF-T06: 螢の靈魂狀態

**矛盾**：Canon 未明確說明螢靈魂是否可被找回。

**裁決**：**靈魂核銷（Q5 已答）**。螢死於靈樹戰爭武器，該武器連靈魂一同消滅。集體潛意識中無碎片可回收。黑奏的「復活螢」計劃從物理上看是絕望的，但這不影響其動機的真實性。

**理由**：P2（靈魂不可回收強化黑奏動機的悲劇性——他為一個不可能的事付出一切）

**影響文件**：[Antagonist](03_characters/aya.md#section-relationships)

---

### <a id="decision-cft12"></a>CF-T12: 城市命名四層共存

**矛盾**：城市在不同文件使用不同名稱，缺乏統一口徑。

**裁決**：**四層全部共存（Q-NEW-03=A）**：
- 維多利亞城（官方名，Beta 城市正式稱謂）
- 霧港（市民俗稱）
- 黑水港（夜區黑話）
- 靈樹谷 / 夢離谷（上古 Alpha 地名，已棄用；保留歷史注記）

**理由**：P2（多層命名反映社會層次與歷史深度）| P1（所有文件皆可使用，按語境選擇）

**影響文件**：[Glossary: 維多利亞城](02_glossary.md#term-victoria-city)

---

### <a id="decision-cft13"></a>CF-T13: 集體潛意識三層結構

**矛盾**：Canon 對集體潛意識的層次結構描述不一致；`test.txt` 提出明確三層模型。

**裁決**：**採納三層結構（Q-NEW-04a=A）**：
- **L1 回聲層**：表層情緒，所有人可及，即時反應
- **L2 留存海**：記憶存檔，沉澱情感；魔法少女可進入
- **L3 冥河**：未處理的哀傷；俗稱「陰渠水」「苦水井」；僅晴香、黑奏、夕級別可及

**理由**：P1（三層結構可制式化入場規則與敘事等級）

**影響文件**：[World Rules: 集體潛意識](01_world_rules_and_costs.md#section-collective-unconscious) | [Glossary](02_glossary.md#term-collective-unconscious)

---

### <a id="decision-cft14"></a>CF-T14: Stage 3 機制命名

**矛盾**：Canon 將黑奏計劃第三階段稱為「共振地獄」；`test.txt` 認為此命名不符合 Caius 動機框架（復活螢）。

**裁決**：**改名「情緒結算儀式」（Q-NEW-04b=C）**。機制保留（同頻共振、城市規模情感強制萃取），但目的重寫為「積累情感貨幣，向情緒總帳換回螢的靈魂」。舊名「共振地獄」標記為廢棄詞。

**理由**：P2（命名必須反映動機邏輯；「結算」比「地獄」更符合 Caius 型「以等價交換換回所愛」的悲劇結構）

**影響文件**：[Antagonist](03_characters/aya.md#section-kurokane) | [Glossary: 情緒結算儀式](02_glossary.md#term-resonance-hell)

---

### <a id="decision-cft18"></a>CF-T18: 情緒管理局市井化

**矛盾**：Canon 將情緒管理局呈現為精密控制體系；`test.txt` 提出腐敗官僚爛系統版本（人情、甩漏、假數、關係戶）。

**裁決**：**不入 Canon（B）**。腐敗官僚風格留作創作參考，不寫入世界規則，避免稀釋帝國的系統性壓迫感。

**理由**：P2（過度市井化削弱科幻dystopia的沉浸感）

**影響文件**：不影響 Canon 文件（留作創作參考）

---

### <a id="decision-cft22"></a>CF-T22: 夢境進入集體潛意識三層規則

**矛盾**：Canon 對夢境與集體潛意識的關係描述不完整。

**裁決**：**採納（A）**，三級夢境規則寫入世界規則：
- **Level 1 象徵夢**：所有人均可發生，內容為集體情緒殘影
- **Level 2 共視夢**：魔法少女可進入，可與他人共享夢境空間
- **Level 3 Alpha 真殘片**：僅晴香、黑奏、夕等級可及；限制：夢只提供方向，真正跳線（改變現實）只屬於現實行動者

**理由**：P1（可制式化為場景設計規則）

**影響文件**：[World Rules: 夢境進入規則](01_world_rules_and_costs.md#section-collective-unconscious)

---

### <a id="decision-cft23"></a>CF-T23: 治癒失敗三型

**矛盾**：Canon 說明「治癒的唯一路徑」但缺乏失敗模式的明確分類，導致設計師難以辨識場景中的治癒失敗態。

**裁決**：**採納（A）**，三型寫入世界規則：
- **A 型「拒絕被救」**（朱音例）：知道出口，但拒絕走出去
- **B 型「選錯止痛藥」**（操例）：接受協助，但選擇了錯誤的替代品
- **C 型「用犧牲逃避」**（美夜子例）：以自我毀損代替真正的面對

**理由**：P1（三型可直接對應場景設計診斷工具）

**影響文件**：[World Rules: 治癒失敗三型](01_world_rules_and_costs.md#rule-healing-failure-types)

---

### <a id="decision-cft24"></a>CF-T24: Alpha/Beta 完整視覺語言體系

**矛盾**：Canon `06_visual_bible.md` 對 Alpha/Beta 視覺語言的系統性對比規則不完整。

**裁決**：**採納（A）**，補充 visual_bible：
- **Alpha 視覺**：老香港（唐樓/騎樓/嶺南瓦檐）；天然材質；暖色霓虹；**絕對無哥德元素**
- **Beta 視覺**：黑暗維多利亞（哥德尖拱/蕾絲/齒輪）；黑金；上重下輕
- **鐵則**：Alpha 空間出現尖拱/蕾絲 = Beta 侵蝕警示，必須有明確設計意圖

**理由**：P1（視覺規則可制式化為概念藝術審核標準）

**影響文件**：[Visual Bible](06_visual_bible.md#section-alpha-beta-visual)

---

### <a id="decision-cft28"></a>CF-T28: 朱音屍骸女皇機制

**矛盾**：`test.txt` 提出朱音可召喚/操控屍骸的「屍骸女皇」機制。

**裁決**：**不入 Canon**。機制缺乏與現有情緒守恆框架的明確接合點，留作角色擴展備案。

**影響文件**：不影響 Canon 文件（留作創作參考）

---

### <a id="decision-cft29"></a>CF-T29: 緋潮/Alpha 回音聯動

**矛盾**：`test.txt` 提出緋潮事件與 Alpha 線情感回音的因果聯動機制。

**裁決**：**不入 Canon**。機制過於複雜，與現有緋潮定義接合有歧義，留作世界觀擴展參考。

**影響文件**：不影響 Canon 文件（留作創作參考）

---

### <a id="decision-cft30"></a>CF-T30: 光環處決新機制

**矛盾**：Canon 對「光環處決」的機制描述停留在「情緒崩潰自動觸發」；`test.txt` 提出更精確的「同頻過載切線」模型，以及欠債逾期降低處決門檻的規則。

**裁決**：**採納（A）**：
- 光環處決 = 系統偵測同頻過載，強制切線（切斷情緒連接）
- 切得太狠 → 折斷當事人
- 欠債逾期 → 光環處決門檻降低（不可逆風險規則）

**理由**：P1（可制式化為戰鬥/場景設計的風險管理規則）

**影響文件**：[World Rules: 不可逆規則摘要](01_world_rules_and_costs.md#section-irreversible-rules) | [Glossary: 光環處決](02_glossary.md#term-halo-execution)

---

## <a id="section-phase2-low"></a>CF-T LOW 嚴重度

### <a id="decision-cft07"></a>CF-T07: 情緒守恆定律升格 + 膠布哲學降格

**矛盾**：Canon 將情緒守恆定律與膠布哲學並列為世界法則；`test.txt` 提出守恆是主旋律，膠布是從屬技術。

**裁決**：**採納（Q-NEW-05）**：
- 情緒守恆定律升格為**全作主旋律世界法則**（所有機制均是其表達）
- 膠布哲學降格為「守恆框架下的個人態度技術」（術語，非法則）

**理由**：P2（主旋律清晰化有助於所有設計決策的優先級判斷）

**影響文件**：[Glossary: 情緒守恆定律](02_glossary.md#term-emotion-conservation) | [Glossary: 膠布哲學](02_glossary.md#term-band-aid-philosophy)

---

### <a id="decision-cft15"></a>CF-T15: 新遊戲機制寫入 Canon

**矛盾**：`test.txt` 提出三個新玩法機制，Canon `10_gameplay_bible.md` 未收錄。

**裁決**：**全部採納（Q-NEW-05）**，寫入 `10_gameplay_bible.md`：
- **Debt Echo 系統**：欠款累積 → 回聲屍骸復活於情緒債務最深處
- **Joy Credit 福量**：給予行動可借用 Alpha 線情感能量，但必須歸還
- **既視錨點 Déjà-vu Anchor**：空間還債節點，面對或迴避皆有後果

**理由**：P1（三機制直接對應情緒守恆主旋律，可制式化為玩法規則）

**影響文件**：[Gameplay Bible](10_gameplay_bible.md#section-debt-echo-system)

---

### <a id="decision-cft25"></a>CF-T25: Alpha/Beta 跳躍三分類

**矛盾**：`test.txt` 提出 Alpha/Beta 跳躍（現實分歧跳轉）的三種分類機制。

**裁決**：**不入 Canon**。三分類細節尚未與現有 Alpha/Beta 框架完全對齊，保留為世界觀擴展備案。

**影響文件**：不影響 Canon 文件（留作創作參考）

---

### <a id="decision-cft26"></a>CF-T26: 螢の靈魂核銷（重複確認）

**矛盾**：CF-T06 裁決後，部分文件仍有「螢的靈魂碎片可能存在」的歧義描述。

**裁決**：**維持 CF-T06 裁決**。靈樹戰爭武器連靈魂消滅；集體潛意識中無任何螢的碎片可回收。任何暗示螢靈魂碎片存在的描述均屬廢棄口徑。

**影響文件**：[Antagonist](03_characters/aya.md#section-relationships)

---

### <a id="decision-narrative-design"></a>敘事設計規則（新文件）

**矛盾**：Canon 缺乏統一的場景設計與角色服務管道規則文件，導致敘事設計依賴創作者個人判斷。

**裁決**：**採納，新建 `canon/08_narrative_design_bible.md`**，收錄：
- **四牆分類**：身體牆 / 因果牆 / 關係牆 / 身份牆
- **場景四拍模板**：代價信號 → 本能反應 → 承接行動 → 關係後果
- **世界敘事四大角色服務管道**：誤會機 / 代價計時器 / 鏡 / 小確幸稀缺器

**理由**：P1（可制式化為場景審核清單）

**影響文件**：[Narrative Design Bible](08_narrative_design_bible.md)（新建）
