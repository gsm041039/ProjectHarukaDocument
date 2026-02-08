# Duplicate Cluster Report

**生成日期**: 2026-02-08
**目的**: 識別內容重覆分群，確定每群母文檔，指導 Canon 遷移策略

---

## 重覆分群總覽

| Cluster ID | 主題 | 群內文件數 | 重覆率估算 | 建議母文檔 |
|-----------|------|-----------|----------|----------|
| DC-01 | Alpha/Beta 機制 | 3 | 高 (70-80%) | SW-017 (screenwriter/14) |
| DC-02 | 角色背景敘事 | 2 | 中 (50-60%) | SW-002 (screenwriter/01) |
| DC-03 | 角色心理分析 | 4 | 中高 (60-70%) | SW-007 (screenwriter/06) |
| DC-04 | 世界觀設定 | 3 | 高 (70-85%) | SW-004 (screenwriter/03) |
| DC-05 | 事件時間線 | 4 | 中高 (65-75%) | ROOT-002 (Detailed_Timeline) |
| DC-06 | 視覺設計原則 | 5 | 中高 (60-70%) | ART-002 (art/01) |
| DC-07 | 魔法少女設定 | 3 | 高 (75-85%) | SW-021 (Magical_Girl_Setting) |
| DC-08 | 故事大綱 | 3 | 低中 (40-50%) | SW-006 (screenwriter/05) |
| DC-09 | 角色視覺設計 | 10 | 低 (10-20%) | 各自獨立 |
| DC-10 | 導演工具 | 4 | 中 (50-60%) | DIR-002 (director/01) |
| DC-11 | 情緒/社交系統 | 3 | 中 (55-65%) | SW-009 (screenwriter/08) |
| DC-12 | 哲學主題 | 3 | 中 (50-60%) | SW-014 (screenwriter/11) |

---

## 詳細分群

### DC-01: Alpha/Beta 機制

**重覆率**: 高 (70-80%)

**群內文件**:
1. **SW-017** `screenwriter/14_Alpha_Beta_Narrative_Mechanics.md` (623 行) — **建議母文檔**
   - 完整機制定義、規則表、文本範例、部署時機
2. **DIR-003** `director/02_Alpha_Line_Integration_Guide.md`
   - 導演視角使用指引、實作範例（與 SW-017 重覆約 40%）
3. **ROOT-003** `screenwriter/15_Alpha_Beta_Discussion_Archive.md`
   - 歷史討論、早期版本（應歸檔）

**處置建議**:
- SW-017 → `CAN-01#alpha-beta` (規則定義)
- SW-017 部署時機 → `CAN-05#alpha-beta-usage`
- DIR-003 提取導演專用技法 → `CAN-08#alpha-beta-directing`
- ROOT-003 → `archive/` (歷史討論不入 Canon)

**衝突點**: 無重大衝突，DIR-003 為 SW-017 之應用層

---

### DC-02: 角色背景敘事

**重覆率**: 中 (50-60%)

**群內文件**:
1. **SW-002** `screenwriter/01_Character_Background_Story.md` — **建議母文檔**
   - 8 位主角完整背景敘事（連貫版）
2. **SW-003** `screenwriter/02_Secondary_Character_Background_Story.md`
   - 5 位次要角色 + 組織設定（獨立內容）

**處置建議**:
- SW-002 → SPLIT 到 10 個角色 Canon Sheet (`CAN-03/*`)
- SW-003 → SPLIT 到 5 個次要角色 Canon Sheet (`CAN-03/supporting/*`)
- 原文件標記 Draft（保留完整連貫敘事供參考）

**衝突點**: 無

---

### DC-03: 角色心理分析

**重覆率**: 中高 (60-70%)

**群內文件**:
1. **SW-007** `screenwriter/06_Character_Psychology_Analysis.md` (1401 行) — **建議母文檔**
   - 深度心理分析、動機、弧光（每角 100-150 行）
2. **DIR-008** `director/Core_Characters_Symbolism_Analysis.md`
   - 象徵層分析（與 SW-007 重覆約 30%，但視角不同）
3. **DIR-010** `director/Story_Structure_Character_Archetype_Analysis.md`
   - 原型分析（補充 SW-007）
4. **SW-012** `screenwriter/09_Character_Senses_Private_Habits_Setting.md`
   - 感官/習慣設定（獨特內容）

**處置建議**:
- SW-007 提取核心心理摘要（每角 5-10 行）→ 各角色 Canon Sheet
- DIR-008 提取象徵一句話 → 各角色 Canon Sheet
- DIR-010 提取原型一句話 → 各角色 Canon Sheet
- SW-012 提取 3-5 個關鍵習慣 → 各角色 Canon Sheet
- 全部原文件標記 Draft（保留深度分析）

**衝突點**: 無重大衝突，為不同層次描述

---

### DC-04: 世界觀設定

**重覆率**: 高 (70-85%)

**群內文件**:
1. **SW-004** `screenwriter/03_Worldview_Setting.md` (1052 行) — **建議母文檔**
   - 三位一體光譜、地理、政治、魔法規則、歷史
2. **SW-021** `screenwriter/Magical_Girl_Setting_Detailed_Heart_Container_Device_Destiny.md`
   - 心匣機制、契約規則（與 SW-004 重覆約 40%）
3. **DIR-009** `director/Worldview_Scene_Analysis.md`
   - 不可逆規則補充（場景視角）

**處置建議**:
- SW-004 → REBUILD 入 `CAN-01#worldview-core`
- SW-021 規則部分 → `CAN-01#magic-system`
- SW-021 心匣物件規格 → `CAN-07/heart_container_device.md`
- DIR-009 提取規則補充 → `CAN-01` 補充段落
- 原文件標記 Draft

**衝突點**: 潛在（需比對 SW-004 與 SW-021 對魔法代價嘅描述）

---

### DC-05: 事件時間線

**重覆率**: 中高 (65-75%)

**群內文件**:
1. **ROOT-002** `Detailed_Timeline.md` (201 行) — **建議母文檔**
   - 帝國歷 0-114 年完整時間線
2. **DIR-006** `director/Major_Events_Character_Relationships_Analysis.md`
   - 事件 + 人物關係影響（事件部分與 ROOT-002 重覆約 50%）
3. **SW-008** `screenwriter/07_Major_Events_Character_Relationship_Impact_Analysis.md`
   - 同上（不同版本，重覆約 60%）
4. **SW-005** `screenwriter/04_Story_Structure_Atmosphere_Events_Deep_Analysis.md`
   - 穩定事件 + 氛圍分析

**處置建議**:
- ROOT-002 → 格式化遷移到 `CAN-04`
- DIR-006 事件部分 → 補充 `CAN-04`，關係部分 → 各角色 Canon Sheet
- SW-008 同上邏輯（需比對與 DIR-006 差異，記入 DL）
- SW-005 穩定事件 → `CAN-04`，氛圍分析 → `CAN-08` 或保留 Draft
- 原文件降級 `draft/timeline_raw.md` 或標記 Draft

**衝突點**: 高（DIR-006 vs SW-008 可能有不同版本描述）

---

### DC-06: 視覺設計原則

**重覆率**: 中高 (60-70%)

**群內文件**:
1. **ART-002** `art/01_Core_Visual_Pillars_Detailed.md` — **建議母文檔**
   - 核心視覺支柱、設計原則
2. **ART-017** `art/301_Worldview_Art_Direction_Handbook.md`
   - 世界觀藝術指引（與 ART-002 重覆約 50%）
3. **ART-004** `art/303_Magical_Girl_Common_Visual_Language.md`
   - 魔法少女視覺語言（補充 ART-002）
4. **ART-001** `art/00_Core_Visual_Foundation.md`
   - 視覺哲學基礎（高層摘要）
5. **ART-005** `art/04_Character_Illustration_Style_Guide.md`
   - 插畫風格指引（技術細節）

**處置建議**:
- ART-002 + ART-017 + ART-004 → 合併為 `CAN-06` 三個主章節
- ART-001 摘要 → `CAN-00#visual-philosophy-summary` + `CAN-06#visual-philosophy`
- ART-005 → `CAN-06#illustration-style-guide`
- 原文件 move 去 `draft/art_originals/`

**衝突點**: 無

---

### DC-07: 魔法少女設定

**重覆率**: 高 (75-85%)

**群內文件**:
1. **SW-021** `screenwriter/Magical_Girl_Setting_Detailed_Heart_Container_Device_Destiny.md` — **建議母文檔**
   - 心匣、契約、命運、代價機制（完整版）
2. **SW-004** `screenwriter/03_Worldview_Setting.md`
   - 魔法規則部分（與 SW-021 重覆約 60%）
3. **SW-022** `screenwriter/Magical_Girl_Themes_Detailed_Explanation.md`
   - 主題聲明（獨特內容，但與 SW-021 框架一致）

**處置建議**:
- SW-021 規則 → `CAN-01#magic-system`
- SW-021 物件規格 → `CAN-07/heart_container_device.md`
- SW-022 主題聲明 → 各角色 Canon Sheet + `CAN-00#themes`
- 原文件標記 Draft

**衝突點**: 低（需確認 SW-004 與 SW-021 對代價嘅描述一致）

---

### DC-08: 故事大綱

**重覆率**: 低中 (40-50%)

**群內文件**:
1. **SW-006** `screenwriter/05_Story_Outline.md` (415 行) — **建議母文檔**
   - 四幕結構、關鍵事件、角色弧光
2. **SW-016** `screenwriter/05_Story_Outline_Detailed_Scenes.md`
   - 詳細場景（擴展 SW-006，獨特內容）
3. **SW-018** `screenwriter/05_Story_Outline_Director_Notes.md`
   - 導演註記（補充 SW-006，獨特內容）

**處置建議**:
- SW-006 → 整份遷移為 `CAN-05` 主幹
- SW-016 → `draft/scenes/05_detailed_scenes.md`
- SW-018 → 提取可重用規則到 `CAN-08`，其餘 Draft
- 原文件標記 Draft

**衝突點**: 無

---

### DC-09: 角色視覺設計

**重覆率**: 低 (10-20%)

**群內文件**:
- ART-007 ~ ART-016 (10 份 `art/2XX_Character_Visual_Design_*.md`)
- 每份獨立描述一個角色嘅視覺設計（髮型、服裝、配色、象徵）

**處置建議**:
- 逐一遷移到 `canon/characters_visual/` (10 份獨立 Canon)
- 原文件 move 去 `draft/art_originals/`

**衝突點**: 無（各自獨立）

---

### DC-10: 導演工具

**重覆率**: 中 (50-60%)

**群內文件**:
1. **DIR-002** `director/01_Creative_Core_Principles.md` (581 行) — **建議母文檔**
   - 創作核心原則、反對力量六維
2. **DIR-004** `director/Information_Control_Audience_Experience_Design.md`
   - 資訊控制、觀眾體驗設計（補充 DIR-002）
3. **DIR-001** `director/00_Handbook_Draft.md`
   - 早期手冊草稿（與 DIR-002 重覆約 40%）
4. **ART-003** `art/02_Advanced_Narrative_Design.md`
   - 進階敘事設計（視覺敘事角度）

**處置建議**:
- DIR-002 → `CAN-00#creative-core` + `CAN-08#core-principles`
- DIR-004 → `CAN-00#audience-experience` + `CAN-08#information-control`
- DIR-003 (Alpha/Beta) → `CAN-08#alpha-beta-directing`
- DIR-001 + 其他 director/ 文件 → 提取可重用規則到 `CAN-08`，標記 Draft
- ART-003 → `CAN-08#visual-narrative-design`

**衝突點**: 無

---

### DC-11: 情緒/社交系統

**重覆率**: 中 (55-65%)

**群內文件**:
1. **SW-009** `screenwriter/08_Emotion_Setting_Overview.md` (860 行) — **建議母文檔**
   - 情緒守恆規則、能量流動機制
2. **SW-013** `screenwriter/10_Girl_Daily_Social_Interaction_Setting.md`
   - 日常社交互動設定（與 SW-009 重覆約 30%）
3. **SW-015** `screenwriter/12_Social_Evaluation_Quest_System.md`
   - 社會評價任務系統（遊戲化，補充 SW-009）

**處置建議**:
- SW-009 → `CAN-01#emotion-system`
- SW-013 → `CAN-10#social-interaction-loop`
- SW-015 → `CAN-10#social-evaluation-quest`
- 原文件標記 Draft

**衝突點**: 低

---

### DC-12: 哲學主題

**重覆率**: 中 (50-60%)

**群內文件**:
1. **SW-014** `screenwriter/11_Deep_Philosophy_Concepts.md` — **建議母文檔**
   - 深層哲學概念、自由意志、身份認同
2. **DIR-002** `director/01_Creative_Core_Principles.md`
   - 創作哲學（與 SW-014 重覆約 30%）
3. **SW-022** `screenwriter/Magical_Girl_Themes_Detailed_Explanation.md`
   - 主題詮釋（與 SW-014 框架一致）

**處置建議**:
- SW-014 → `CAN-00#philosophy`
- DIR-002 哲學部分 → `CAN-00#creative-philosophy`
- SW-022 → 各角色 Canon Sheet + `CAN-00#themes`
- 原文件標記 Draft

**衝突點**: 無

---

## 特殊情況

### 工具文件（不重覆）
- **TOOL-001** `script_refinement/BeatSheet_v2_question_framework_cn.md` → `tools/`
- **TOOL-002** `script_refinement/Stage_Survival_Roster_Matrix.md` → `tools/`

### 歷史歸檔（不重覆）
- **ROOT-003** `screenwriter/15_Alpha_Beta_Discussion_Archive.md` → `archive/`

### Gameplay（獨立）
- **GP-001** `gameplay/00_Core_Gameplay_Design_Document.md` → `CAN-10` 主幹

### 其他
- **ROOT-001** `Charts.md` → `draft/charts_reference.md`
- **SW-019** `screenwriter/13_Interesting_Chapters_Special_Plot_Setting.md` → `draft/idea_bank/`

---

## 總結

- **高重覆率群組** (≥70%): DC-01 (Alpha/Beta), DC-04 (世界觀), DC-07 (魔法少女)
  - 處置：母文檔遷移 Canon，其他文件標記 Draft 或歸檔

- **中高重覆率群組** (60-69%): DC-03 (角色心理), DC-05 (時間線), DC-06 (視覺), DC-11 (情緒)
  - 處置：SPLIT 或 MERGE 策略，保留深度分析於 Draft

- **中低重覆率群組** (40-59%): DC-02 (角色背景), DC-08 (大綱), DC-10 (導演), DC-12 (哲學)
  - 處置：母文檔 Canon 化，補充文件標記 Draft

- **低重覆率群組** (<40%): DC-09 (角色視覺)
  - 處置：各自獨立 Canon

**建議優先處理**: DC-01, DC-04, DC-07（高重覆 + 核心世界觀）→ DC-05, DC-06（時間線/視覺骨架）→ DC-02, DC-03（角色 SPLIT）

---

**下一步**: 產出 Conflict Report，識別需人工複查嘅矛盾點
