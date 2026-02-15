# Phase 0: Duplicate Clusters

> 內容重覆分群報告（基於 v1 報告重寫，增加 v2 處置建議）
> Generated: 2026-02-14

## 概覽

| DC-ID | 主題 | 群內文件數 | 重覆率 | v2 處置策略 |
|-------|------|----------|--------|------------|
| DC-01 | Alpha/Beta 機制 | 3 | 70-80% HIGH | 合併入 CAN-01#rule-alpha-beta |
| DC-02 | 角色背景敘事 | 2 | 50-60% MED | SPLIT 至 12 份 CAN-03/* |
| DC-03 | 角色心理分析 | 4 | 60-70% MED-HIGH | 摘要入 CAN-03/*，深分析不搬 |
| DC-04 | 世界觀設定 | 3 | 70-85% HIGH | 合併入 CAN-01 各 section |
| DC-05 | 事件時間線 | 4 | 65-75% MED-HIGH | 統一入 CAN-04 |
| DC-06 | 視覺設計原則 | 5 | 60-70% MED-HIGH | 合併入 CAN-06 |
| DC-07 | 魔法少女設定 | 3 | 75-85% HIGH | 規則→CAN-01，物件→CAN-07 |
| DC-08 | 故事大綱 | 3 | 40-50% LOW-MED | 主幹→CAN-05，場景→不搬 |
| DC-09 | 角色視覺設計 | 10 | 10-20% LOW | 吸收入 CAN-03/* 視覺要點 |
| DC-10 | 導演工具 | 4 | 50-60% MED | 核心原則→CAN-00，其餘不搬 |
| DC-11 | 情緒/社交系統 | 3 | 55-65% MED | 規則→CAN-01，遊戲→CAN-10 |
| DC-12 | 哲學主題 | 3 | 50-60% MED | 摘要→CAN-00#philosophy |

---

## 詳細分群

### DC-01: Alpha/Beta 機制（HIGH 70-80%）

| 文件 | 行數 | 角色 |
|-----|------|------|
| screenwriter/14_Alpha_Beta_Narrative_Mechanics.md | 629 | **母文檔**（規則+框架+部署表） |
| director/02_Alpha_Line_Integration_Guide.md | 511 | 導演演出整合（40% 與母文檔重覆） |
| archive/15_Alpha_Beta_Discussion_Archive.md | 408 | 歷史討論（已歸檔） |

**v2 處置**：
- 母文檔規則 → `CAN-01#rule-alpha-beta`
- 導演獨特演出 → absorbed into `CAN-00`（Series Bible 的創作執行原則 section）
- 討論檔 → 不進入 v2

**矛盾風險**：CF-004（規則定義 vs 實現彈性）→ 按 P1 採用可制式化版本

---

### DC-02: 角色背景敘事（MED 50-60%）

| 文件 | 行數 | 角色 |
|-----|------|------|
| screenwriter/01_Character_Background_Story.md | 499 | **母文檔**（8 主角背景） |
| screenwriter/02_Secondary_Character_Background_Story.md | 501 | 次要角色 + 組織 |

**v2 處置**：
- 每角色段落 → 對應 `CAN-03/[name].md#section-background`
- 組織段落 → `CAN-07#section-organizations`
- 5 次要角色 → `CAN-03-index.md` 底部

---

### DC-03: 角色心理分析（MED-HIGH 60-70%）

| 文件 | 行數 | 角色 |
|-----|------|------|
| screenwriter/06_Character_Psychology_Analysis.md | 1,401 | **母文檔**（最深度） |
| director/Core_Characters_Symbolism_Analysis.md | 20 | 一句象徵（極簡） |
| director/Story_Structure_Character_Archetype_Analysis.md | 136 | Archetype 分析 |
| screenwriter/09_Character_Senses_Private_Habits_Setting.md | 804 | 五感+習慣（獨特內容多） |

**v2 處置**：
- 母文檔每角 5-10 行心理摘要 → `CAN-03/[name].md#section-psychology`
- 一句象徵 → `CAN-03/[name].md` header table
- Archetype → `CAN-03/[name].md` header table
- 習慣 3-5 項 → `CAN-03/[name].md#section-habits`

**矛盾風險**：CF-003（角色動機演化）→ 按 P2 採用支撐主題版本

---

### DC-04: 世界觀設定（HIGH 70-85%）

| 文件 | 行數 | 角色 |
|-----|------|------|
| screenwriter/03_Worldview_Setting.md | 1,056 | **母文檔**（三位一體/地理/政治/魔法） |
| screenwriter/Magical_Girl_Setting_Detailed_Heart_Container_Device_Destiny.md | 481 | 心匣機制（40% 重覆） |
| director/Worldview_Scene_Analysis.md | 149 | 不可逆規則補充 |

**v2 處置**：
- 三位一體/地理/政治 → `CAN-01#section-worldview-core`
- 魔法規則 → `CAN-01#section-magic-system`
- 心匣規則 → `CAN-01#rule-heart-container`，物件規格 → `CAN-07`
- 不可逆規則 → `CAN-01` 相關 rule 條目的「代價/不可逆性」欄位

**矛盾風險**：CF-001（魔法代價機制）→ 按 P1 採用 SW-021（更可制式化）

---

### DC-05: 事件時間線（MED-HIGH 65-75%）

| 文件 | 行數 | 角色 |
|-----|------|------|
| draft/timeline_raw.md (= Detailed_Timeline) | 207 | **母文檔**（帝國歷 0-114） |
| director/Major_Events_Character_Relationships_Analysis.md | 80 | 事件+關係（導演角度） |
| screenwriter/07_Major_Events_Character_Relationship_Impact_Analysis.md | 1,071 | 事件+關係（編劇角度，最長） |
| screenwriter/04_Story_Structure_Atmosphere_Events_Deep_Analysis.md | 281 | 氣氛+穩定事件 |

**v2 處置**：
- 時間線主幹 → `CAN-04`（帝國歷年/事件/影響/角色link）
- 角色關係影響 → 分拆入 `CAN-03/[name].md`
- 氣氛分析 → absorbed into `CAN-00`

**矛盾風險**：CF-002（事件版本差異）→ 按 P3 採用時間線一致版本

---

### DC-06: 視覺設計原則（MED-HIGH 60-70%）

| 文件 | 行數 | 角色 |
|-----|------|------|
| draft/art_originals/01_Core_Visual_Pillars_Detailed.md | 150 | **母文檔**（核心支柱） |
| draft/art_originals/301_Worldview_Art_Direction_Handbook.md | 111 | 世界觀美術（50% 重覆） |
| draft/art_originals/303_Magical_Girl_Common_Visual_Language.md | 322 | 魔法少女視覺語言 |
| art/00_Core_Visual_Foundation.md | 165 | 視覺哲學（高層摘要） |
| art/04_Character_Illustration_Style_Guide.md | 227 | 插畫風格技術規格 |

**v2 處置**：
- 三份合併 → `CAN-06`（視覺哲學→支柱→色腳本→材質→鏡頭→插畫風格）
- 視覺哲學摘要 → 也出現在 `CAN-00`

---

### DC-07: 魔法少女設定（HIGH 75-85%）

| 文件 | 行數 | 角色 |
|-----|------|------|
| screenwriter/Magical_Girl_Setting_Detailed_Heart_Container_Device_Destiny.md | 481 | **母文檔**（心匣/契約/兩種道路） |
| screenwriter/03_Worldview_Setting.md (magic section) | ~300 | 魔法規則（60% 重覆） |
| screenwriter/Magical_Girl_Themes_Detailed_Explanation.md | 258 | 主題框架（獨特） |

**v2 處置**：
- 規則 → `CAN-01#section-magic-system`
- 物件規格 → `CAN-07#section-heart-container`
- 主題 → `CAN-00` + 各角色 Sheet 的主題聲明

---

### DC-08: 故事大綱（LOW-MED 40-50%）

| 文件 | 行數 | 角色 |
|-----|------|------|
| draft/outline_raw.md | 417 | **母文檔**（四幕結構） |
| draft/scenes/05_detailed_scenes.md | 1,205 | 擴展場景（獨特內容多） |
| screenwriter/05_Story_Outline_Director_Notes.md | 985 | 導演筆記（部分重覆） |

**v2 處置**：
- 大綱主幹 → `CAN-05`（大幅擴充至 ~500 行）
- 詳細場景 → 不搬入 v2
- 導演筆記規則部分 → absorbed into `CAN-00`

---

### DC-09: 角色視覺設計（LOW 10-20%）

10 份獨立角色視覺文件（draft/art_originals/2XX_*.md）

**v2 處置**：吸收入各 `CAN-03/[name].md#section-visual` 視覺要點 section

---

### DC-10: 導演工具（MED 50-60%）

| 文件 | 行數 | 角色 |
|-----|------|------|
| director/01_Creative_Core_Principles.md | 587 | **母文檔**（反對力量六維） |
| director/Information_Control_Audience_Experience_Design.md | 110 | 觀眾體驗 |
| director/00_Story_Director_Handbook_Draft.md | 171 | 早期草稿（40% 重覆） |
| art/02_Advanced_Narrative_Design.md | 240 | 視覺敘事 |

**v2 處置**：
- 反對力量六維 → `CAN-00#section-opposition-forces`
- 觀眾體驗 → `CAN-00#section-audience-experience`
- CAN-08 不再獨立存在，核心原則吸收入 CAN-00

---

### DC-11: 情緒/社交系統（MED 55-65%）

| 文件 | 行數 | 角色 |
|-----|------|------|
| screenwriter/08_Emotion_Setting_Overview.md | 861 | **母文檔**（調律/諧振/守恆） |
| screenwriter/10_Girl_Daily_Social_Interaction_Setting.md | 355 | 日常互動（30% 重覆） |
| screenwriter/12_Social_Evaluation_Quest_System.md | 355 | 遊戲化社交系統 |

**v2 處置**：
- 情緒規則 → `CAN-01#section-emotion-system`
- 社交互動 → `CAN-10#section-social-interaction`
- 風評+任務 → `CAN-10#section-social-reputation`

**矛盾風險**：CF-007（能量流規則）→ 按 P1 採用 SW-009（更完整機制）

---

### DC-12: 哲學主題（MED 50-60%）

| 文件 | 行數 | 角色 |
|-----|------|------|
| screenwriter/11_Deep_Philosophy_Concepts.md | 780 | **母文檔**（三位一體哲學/靈魂抽離倫理） |
| director/01_Creative_Core_Principles.md | 587 | 創作哲學（30% 重覆） |
| screenwriter/Magical_Girl_Themes_Detailed_Explanation.md | 258 | 主題框架 |

**v2 處置**：
- 哲學摘要 → `CAN-00#section-philosophy`
- 創作哲學 → `CAN-00#section-creative-core`
- 主題 → 各角色 Sheet + `CAN-00`

---

## 處置策略統計

| 策略 | 群數 | 涵蓋文件 |
|-----|------|---------|
| 合併入單一 Canon 文件 | 4 (DC-01,04,06,07) | 14 |
| SPLIT 至多個 Canon 文件 | 3 (DC-02,03,05) | 10 |
| 主幹搬 + 擴展不搬 | 2 (DC-08,10) | 7 |
| 吸收入角色 Sheet | 1 (DC-09) | 10 |
| 規則/遊戲分流 | 2 (DC-11,12) | 6 |
