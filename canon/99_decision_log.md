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
