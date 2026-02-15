# Phase 1: Conflict List

> 已驗證矛盾清單（基於 v1 CF-001~008 + 新發現）
> Generated: 2026-02-14

## 矛盾總覽

| CF-ID | 分類 | 嚴重度 | 矛盾 | 涉及文件 | v2 影響範圍 |
|-------|------|--------|------|---------|------------|
| CF-001 | World Rules | HIGH | 魔法代價：即時代謝 vs 累積情感 | SW-004, SW-021 | CAN-01, CAN-07 |
| CF-002 | Timeline | HIGH | Alpha 分歧年份：102 vs 109 | timeline_raw, CAN-04 | CAN-04, CAN-03, CAN-05 |
| CF-003 | Character | MEDIUM | 角色動機演化版本差異 | SW-002, SW-007, DIR-008, DIR-010 | CAN-03/* |
| CF-004a | Alpha/Beta | MEDIUM | 變身 vs 解除變身觸發同步 | SW-017 L86, DIR-003 L414 | CAN-01 |
| CF-004b | Alpha/Beta | LOW-MED | 規則彈性 vs 導演精確參數 | SW-017 L113-118, DIR-003 L19-34 | CAN-00 |
| CF-004c | Alpha/Beta | MEDIUM | 非魔法驗證路徑缺失 | SW-017 L113-118, DIR-003 (gap) | CAN-01, CAN-00 |
| CF-005 | Visual | LOW | 早期概念 vs 最終設計差異 | ART-001, ART-002, ART-007~016 | CAN-06 |
| CF-006 | Organization | MEDIUM | 帝國政治結構描述差異 | SW-004, SW-003 | CAN-01, CAN-07 |
| CF-007 | Emotion | LOW | 能量流數值規則差異 | SW-009, SW-013 | CAN-01 |
| CF-008 | Relationship | MEDIUM | 角色關係轉折時機差異 | DIR-006, SW-008 | CAN-03, CAN-04 |

---

## HIGH 嚴重度

### CF-001: 魔法代價機制 — 即時代謝 vs 累積情感

**矛盾描述**：screenwriter/03 描述魔法代價為**即時代謝燃燒**（血糖瞬間歸零、需補充卡路里），而 screenwriter/Magical_Girl_Setting 描述為**累積情感耗損**（情緒結晶消耗、心匣留痕）。兩者描述完全不同的代價模型。

**File 1**: `screenwriter/03_Worldview_Setting.md` L996-1057
- 「魔力 = 代謝燃燒」
- 血糖瞬間歸零 → 需即時補充（甜甜圈、煉乳）
- 戰後低溫症（夏天穿羽絨）
- 成本模型：**可再生物理資源**（吃更多就能繼續）

**File 2**: `screenwriter/Magical_Girl_Setting_Detailed_Heart_Container_Device_Destiny.md` L27-76
- 「獻祭情感信物 → 諧振 → 耗損」
- 心匣累積物理傷痕（裂紋、褪色雕花）
- 最終燃盡 → 靈魂消散 → 成為殘響
- 成本模型：**有限精神儲備**（不可再生）

**Canon v1 現狀**: `canon/01_world_rules_and_costs.md` L190-198 — 四層代價（即時/累積/長期/隱藏），採用情感模型，**完全未提及血糖系統**

**牽涉術語**: 情感耗損、心匣、代謝燃燒、情緒結晶

---

### CF-002: Alpha 分歧年份 — 帝國歷 102 年 vs 109 年

**矛盾描述**：晴香創世事件（Alpha→Beta 分歧點）在兩份文件中有 7 年落差。

**File 1**: `draft/timeline_raw.md` L30-31
- 「帝國歷102年：【姊妹的處刑】」
- 晴香 5 歲，美夜子 26 歲（計算：97+5=102, 76+26=102 ✓）

**File 2**: `canon/04_timeline_canon.md` L37-42
- 「帝國歷 109 年（Alpha 線原初現實）：5 歲的晴香與 33 歲的美夜子」
- 晴香 5 歲（但 97+12=109，不等於 5 歲 ✗）
- 美夜子 33 歲（76+33=109 ✓）

**數學驗證**：
- 晴香出生 帝國歷 97 年 → 102 年時 5 歲 ✓ / 109 年時 12 歲 ✗
- 帝國歷 102 年版本數學自洽；109 年版本晴香年齡矛盾

**連鎖影響**：Beta 線重設事件日期（同條目 L41 vs L45-48）也有同樣 7 年差異

---

## MEDIUM 嚴重度

### CF-003: 角色動機演化

**矛盾描述**：四份文件描述角色動機時有早期版本 vs 晚期版本差異。
- `screenwriter/01_Character_Background_Story.md` — 背景敘事
- `screenwriter/06_Character_Psychology_Analysis.md` (1401行) — 最深度心理分析
- `director/Core_Characters_Symbolism_Analysis.md` (20行) — 極簡象徵
- `director/Story_Structure_Character_Archetype_Analysis.md` — 原型分析

需逐角色比對確認具體差異。

### CF-004a: Alpha/Beta 同步觸發 — 變身 vs 解除變身

**File 1**: `screenwriter/14_Alpha_Beta_Narrative_Mechanics.md` L86
- 「變身本身直接觸發同步」

**File 2**: `director/02_Alpha_Line_Integration_Guide.md` L414-418
- 操的觸發條件：「解除變身時」

### CF-004b: 規則彈性 vs 精確參數

**File 1**: SW-017 L113-118 — 「魔法同步充其量是『快但危險/更嘈雜』的路徑，不是唯一門票」
**File 2**: DIR-003 L19-34 — 精確技術參數（10-15% 透明度、0.5-1秒）

### CF-004c: 非魔法真相路徑缺失

SW-017 強調「多人共振」驗證，DIR-003 只提供魔法觸發的演出方案，未涵蓋非魔法路徑。

### CF-006: 帝國政治結構

`screenwriter/03_Worldview_Setting.md` 的系統性世界觀描述 vs `screenwriter/02_Secondary_Character_Background_Story.md` 中角色背景提及的政治細節有出入。

### CF-008: 角色關係轉折時機

`director/Major_Events_Character_Relationships_Analysis.md` vs `screenwriter/07_Major_Events_Character_Relationship_Impact_Analysis.md` — 導演 vs 編劇角度描述關係變化時機略有不同。

---

## LOW 嚴重度

### CF-005: 視覺設計版本差異

`art/00_Core_Visual_Foundation.md` 早期概念 vs 各角色視覺文件 (art/2XX) 最終設計在色彩方案、服裝細節上有差異。

### CF-007: 情緒能量流數值

`screenwriter/08_Emotion_Setting_Overview.md` vs `screenwriter/10_Girl_Daily_Social_Interaction_Setting.md` — 數值範圍、轉換比率、觸發條件的具體數字有出入。
