# ProjectHaruka 文件庫結構

> 最後更新：2026-02-17

---

## 根目錄

```
ProjectHarukaDocument/
├── canon/                        # ✅ 正典文件（單一真相來源）
├── docs_v2/                      # 第二版整合工程產物
├── art/                          # 美術文件與概念圖
├── backup/                       # 舊版文件備份（唯讀參考）
├── tools/                        # 工具文件
├── Navigation_Guide.md           # 根目錄導覽
├── Project Haruka Docs — Canon 桶對應表
├── nul / test / 未命名.base       # 雜項
└── .claude/settings.local.json
```

---

## canon/ — 正典文件

> **這是唯一真相來源 (Single Source of Truth)**，寫作時以此為準。

```
canon/
├── 00_series_bible.md            # 系列聖經（世界觀核心、主題）
├── 01_world_rules_and_costs.md   # 世界規則與魔法代價
├── 02_glossary.md                # 術語表
├── 03_character_index.md         # 角色總索引
├── 03_characters/                # 個別角色 Canon Sheet
│   ├── haruka.md                 # 晴香（主角）
│   ├── miyako.md                 # 美夜子
│   ├── saku.md                   # 朔
│   ├── iroha.md                  # 色葉
│   ├── akiho.md                  # 秋穗
│   ├── airi.md                   # 愛里
│   ├── iwakura_akane.md          # 岩倉朱音
│   ├── ayakomoji_sou.md          # 綾小路操
│   ├── rin.md                    # 凜
│   ├── ko_hikaru.md              # 小光
│   ├── yu.md                     # 由
│   └── antagonist.md             # 反派
├── 04_timeline_canon.md          # 時間軸（事件順序）
├── 05_story_outline_canon.md     # 故事大綱（四幕結構）
├── 06_visual_bible.md            # 視覺聖經（美術方向）
├── 07_entities_and_devices.md    # 世界實體與裝置設定
├── 10_gameplay_bible.md          # 遊戲設計聖經
├── 99_decision_log.md            # 設定決策紀錄
└── _reports/                     # 重構工程報告（phase 0–48）
    ├── phase0_*.md/txt
    ├── phase1_*.md
    ├── ...
    └── phase48_finalization_prep.md
```

---

## docs_v2/ — 第二版整合工程

> 整合工程產物，canon/ 鏡像 + legacy 歸檔。

```
docs_v2/
├── NAVIGATION.md                 # 導覽說明
├── README.md                     # docs_v2 說明
├── canon/                        # canon/ 的鏡像（結構同上）
│   ├── 00_series_bible.md
│   ├── 01_world_rules_and_costs.md
│   ├── 02_glossary.md
│   ├── 03_character_index.md
│   ├── 03_characters/            # （同 canon/03_characters/）
│   ├── 04_timeline_canon.md
│   ├── 05_story_outline_canon.md
│   ├── 06_visual_bible.md
│   ├── 07_entities_and_devices.md
│   ├── 10_gameplay_bible.md
│   └── 99_decision_log.md
├── assets/
│   └── assets_index.md
├── _reports/                     # docs_v2 整合報告
│   ├── 00_file_inventory.md
│   ├── 01_unit_inventory.md
│   ├── 02_conflicts_and_variants.md
│   ├── 03_unit_coverage_ledger.md
│   ├── 04_merge_map.md
│   ├── 05_link_audit.md
│   ├── 06_first_reader_qa.md
│   ├── 07_semantic_preservation_audit.md
│   ├── 08_semantic_preservation_audit_r2.md
│   ├── 09_semantic_preservation_audit_full.md/.csv
│   └── _checkpoint.md
└── legacy/                       # 舊文件歸檔（唯讀）
    ├── legacy_index.md
    ├── misc_legacy.md
    ├── refinement_and_draft_legacy.md
    ├── screenwriter_legacy.md
    ├── variants_registry.md
    └── source-backup-*.md        # 各原始文件備份（扁平化命名）
```

---

## art/ — 美術文件與概念圖

```
art/
├── 00_Core_Visual_Foundation.md
├── 02_Advanced_Narrative_Design.md
├── 04_Character_Illustration_Style_Guide.md
├── 302_Magical_Corpse_Visual_Design.md
└── ConceptArt/
    └── Characters/
        ├── Haruka/               # 晴香概念圖（含 BAK/）
        ├── Miyako/               # 美夜子概念圖（含 BAK/）
        ├── Misao/                # 操概念圖（含 BAK/）
        ├── Akane/                # 朱音概念圖（含 BAK/）
        ├── Aeri/                 # 愛里概念圖（含 BAK/）
        ├── Aya/                  # 綾概念圖（含 BAK/）
        ├── Rin/                  # 凜概念圖
        ├── Saku/                 # 朔概念圖
        ├── Akiho/                # 秋穗概念圖
        ├── MagicCorpse/          # 魔法屍骸概念圖
        └── Scenes/               # 場景概念圖
```

---

## backup/ — 舊版文件備份

> **唯讀參考。** 正典內容已整合入 canon/，不應直接修改此目錄。

```
backup/
├── screenwriter/                 # 劇作家文件（原始設定）
│   ├── 00_Story_Brief.md
│   ├── 01_Character_Background_Story.md
│   ├── 02_Secondary_Character_Background_Story.md
│   ├── 03_Worldview_Setting.md
│   ├── 04_Story_Structure_Atmosphere_Events_Deep_Analysis.md
│   ├── 05_Story_Outline_Director_Notes.md
│   ├── 06_Character_Psychology_Analysis.md
│   ├── 07_Major_Events_Character_Relationship_Impact_Analysis.md
│   ├── 08_Emotion_Setting_Overview.md
│   ├── 09_Character_Senses_Private_Habits_Setting.md
│   ├── 10_Girl_Daily_Social_Interaction_Setting.md
│   ├── 11_Deep_Philosophy_Concepts.md
│   ├── 12_Social_Evaluation_Quest_System.md
│   ├── 14_Alpha_Beta_Narrative_Mechanics.md
│   ├── Magical_Girl_Setting_Detailed_Heart_Container_Device_Destiny.md
│   ├── Magical_Girl_Themes_Detailed_Explanation.md
│   └── Villain_Master_Plan.md
├── director/                     # 導演手冊文件
│   ├── 00_Story_Director_Handbook_Draft.md
│   ├── 01_Creative_Core_Principles.md
│   ├── 02_Alpha_Line_Integration_Guide.md
│   ├── Character_Atmosphere_Director_Handbook_Four_Act_Structure.md
│   ├── Core_Characters_Symbolism_Analysis.md
│   ├── Information_Control_Audience_Experience_Design.md
│   ├── Major_Events_Character_Relationships_Analysis.md
│   ├── Story_Structure_Atmosphere_Design.md
│   ├── Story_Structure_Character_Archetype_Analysis.md
│   └── Worldview_Scene_Analysis.md
├── draft/                        # 草稿文件
│   ├── art_originals/            # 美術原始設定（各角色視覺設計）
│   ├── idea_bank/                # 創意庫
│   ├── scenes/                   # 場景草稿
│   ├── characters/               # 角色草稿
│   ├── charts_reference.md
│   ├── legacy_navigation.md
│   ├── outline_raw.md
│   └── timeline_raw.md
├── gameplay/
│   └── 00_Core_Gameplay_Design_Document.md
├── script_refinement/            # 劇本精煉文件
│   ├── ProjectHaruka_BeatSheet_Prompt5_FourAct_24Beats.txt
│   ├── ProjectHaruka_Current_Consolidated_AllChinese.txt
│   ├── ProjectHaruka_Current_Work_Consolidated_CN.txt
│   ├── ProjectHaruka_Layer2_BeatToScenes_Missions.txt
│   └── ProjectHaruka_NextStep_D31_D22_D40_Sectioning_Atomization.txt
└── archive/
    └── 15_Alpha_Beta_Discussion_Archive.md
```

---

## tools/ — 工具文件

```
tools/
├── BeatSheet_v2_Question_Framework_CN.md
└── Stage_Survival_Roster_Matrix.md
```

---

## 文件層級說明

| 層級 | 目錄 | 用途 |
|------|------|------|
| **現役正典** | `canon/` | 唯一真相來源，日常寫作參考 |
| **整合產物** | `docs_v2/canon/` | canon/ 鏡像，整合工程使用 |
| **原始素材** | `backup/` | 唯讀，追溯出處用 |
| **美術資產** | `art/` | 概念圖與視覺設計 |
| **工程報告** | `canon/_reports/` / `docs_v2/_reports/` | 重構過程紀錄 |
| **工具** | `tools/` | 創作輔助工具 |
