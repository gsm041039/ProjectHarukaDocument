# Source Coverage Matrix（母文檔覆蓋矩陣）

> 日期：2026-02-14  
> 原則：以 `backup/` 內母文檔為主來源；`art/` 因 `backup/` 無對應目錄，改用 repo 現行 `art/*.md`。  
> 目標：零矛盾、零重複、單一職責 Canon。

---

## 1) Screenwriter → Canon

| 母文檔 | 主要提取落點 |
|---|---|
| `backup/screenwriter/00_Story_Brief.md` | `canon/00_series_bible.md`, `canon/05_story_outline_canon.md` |
| `backup/screenwriter/01_Character_Background_Story.md` | `canon/03_character_index.md`, `canon/03_characters/*.md` |
| `backup/screenwriter/02_Secondary_Character_Background_Story.md` | `canon/03_character_index.md`, `canon/03_characters/*.md`, `canon/07_entities_and_devices.md` |
| `backup/screenwriter/03_Worldview_Setting.md` | `canon/01_world_rules_and_costs.md`, `canon/02_glossary.md`, `canon/07_entities_and_devices.md` |
| `backup/screenwriter/04_Story_Structure_Atmosphere_Events_Deep_Analysis.md` | `canon/05_story_outline_canon.md`, `canon/04_timeline_canon.md` |
| `backup/screenwriter/05_Story_Outline_Director_Notes.md` | `canon/05_story_outline_canon.md`, `canon/00_series_bible.md` |
| `backup/screenwriter/06_Character_Psychology_Analysis.md` | `canon/03_characters/*.md` |
| `backup/screenwriter/07_Major_Events_Character_Relationship_Impact_Analysis.md` | `canon/04_timeline_canon.md`, `canon/03_character_index.md` |
| `backup/screenwriter/08_Emotion_Setting_Overview.md` | `canon/01_world_rules_and_costs.md`, `canon/02_glossary.md`, `canon/10_gameplay_bible.md` |
| `backup/screenwriter/09_Character_Senses_Private_Habits_Setting.md` | `canon/03_characters/*.md` |
| `backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md` | `canon/10_gameplay_bible.md`, `canon/05_story_outline_canon.md` |
| `backup/screenwriter/11_Deep_Philosophy_Concepts.md` | `canon/00_series_bible.md`, `canon/02_glossary.md`, `canon/99_decision_log.md` |
| `backup/screenwriter/12_Social_Evaluation_Quest_System.md` | `canon/10_gameplay_bible.md` |
| `backup/screenwriter/14_Alpha_Beta_Narrative_Mechanics.md` | `canon/01_world_rules_and_costs.md`, `canon/04_timeline_canon.md`, `canon/99_decision_log.md` |
| `backup/screenwriter/Magical_Girl_Setting_Detailed_Heart_Container_Device_Destiny.md` | `canon/01_world_rules_and_costs.md`, `canon/07_entities_and_devices.md`, `canon/02_glossary.md` |
| `backup/screenwriter/Magical_Girl_Themes_Detailed_Explanation.md` | `canon/00_series_bible.md`, `canon/03_characters/*.md` |
| `backup/screenwriter/Villain_Master_Plan.md` | `canon/03_characters/antagonist.md`, `canon/05_story_outline_canon.md`, `canon/04_timeline_canon.md` |

---

## 2) Director → Canon

| 母文檔 | 主要提取落點 |
|---|---|
| `backup/director/00_Story_Director_Handbook_Draft.md` | `canon/00_series_bible.md` |
| `backup/director/01_Creative_Core_Principles.md` | `canon/00_series_bible.md`, `canon/02_glossary.md` |
| `backup/director/02_Alpha_Line_Integration_Guide.md` | `canon/01_world_rules_and_costs.md`, `canon/04_timeline_canon.md` |
| `backup/director/Character_Atmosphere_Director_Handbook_Four_Act_Structure.md` | `canon/05_story_outline_canon.md` |
| `backup/director/Core_Characters_Symbolism_Analysis.md` | `canon/03_characters/*.md` |
| `backup/director/Information_Control_Audience_Experience_Design.md` | `canon/00_series_bible.md`, `canon/05_story_outline_canon.md` |
| `backup/director/Major_Events_Character_Relationships_Analysis.md` | `canon/04_timeline_canon.md`, `canon/03_character_index.md` |
| `backup/director/Story_Structure_Atmosphere_Design.md` | `canon/05_story_outline_canon.md` |
| `backup/director/Story_Structure_Character_Archetype_Analysis.md` | `canon/03_characters/*.md` |
| `backup/director/Worldview_Scene_Analysis.md` | `canon/01_world_rules_and_costs.md`, `canon/06_visual_bible.md` |

---

## 3) Gameplay → Canon

| 母文檔 | 主要提取落點 |
|---|---|
| `backup/gameplay/00_Core_Gameplay_Design_Document.md` | `canon/10_gameplay_bible.md`, `canon/05_story_outline_canon.md` |

---

## 4) Art（fallback source）→ Canon

| 母文檔 | 主要提取落點 |
|---|---|
| `art/00_Core_Visual_Foundation.md` | `canon/06_visual_bible.md`, `canon/00_series_bible.md` |
| `art/02_Advanced_Narrative_Design.md` | `canon/06_visual_bible.md`, `canon/05_story_outline_canon.md` |
| `art/04_Character_Illustration_Style_Guide.md` | `canon/06_visual_bible.md` |
| `art/302_Magical_Corpse_Visual_Design.md` | `canon/07_entities_and_devices.md`, `canon/06_visual_bible.md` |

---

## 5) 去重與責任邊界（實施）

- `CAN-02`：術語唯一解釋來源。
- `CAN-01`：規則唯一解釋來源。
- `CAN-04`：事件時間與因果唯一解釋來源。
- `CAN-03/*`：角色弧光與禁忌唯一解釋來源。
- `CAN-05`：只保留結構與節點功能，不重寫事件全文。
- `CAN-06`：只保留視覺規格，不重寫規則全文。
- `CAN-07`：只保留設定物條目，不重寫角色心理。
- `CAN-10`：只保留玩法規格，不重寫 Lore 全文。

