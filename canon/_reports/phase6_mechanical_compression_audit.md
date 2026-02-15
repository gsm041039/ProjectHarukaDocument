# 第四輪機械化壓縮稽核（Mechanical Compression Audit）

- 日期：2026-02-14
- 範圍：`canon/*.md`、`canon/03_characters/*.md`（排除 `canon/_reports/`）
- 目標：將非必要「定義句式」壓縮成「用途/規格/規範句式」，維持零舊鏈接與職責分工。

## 本輪調整策略

1. 句式壓縮（語氣層）
- `核心定義` → `核心概念`（角色檔）
- `本段定義` → `本段規範`
- `只定義...` → `只描述...`（Gameplay 任務架構）
- `視覺定義` → `視覺規格`（Visual Bible）
- `定義：`（Series/Visual 部分段落）→ `治癒主張/視覺準則`

2. Owner 引用強化
- `canon/00_series_bible.md` 將規則類描述改為「World Rules 為準，本文只保留敘事用途」。
- `canon/03_characters/antagonist.md` 將術語補註統一為「術語口徑見 Glossary」。

## 已修改文件

- `canon/00_series_bible.md`
- `canon/05_story_outline_canon.md`
- `canon/06_visual_bible.md`
- `canon/10_gameplay_bible.md`
- `canon/03_characters/haruka.md`
- `canon/03_characters/ayakomoji_sou.md`
- `canon/03_characters/iwakura_akane.md`
- `canon/03_characters/antagonist.md`

## 驗證結果

### A) 定義句式殘留檢查
- 檢查詞：`**定義**`、`視覺定義`、`核心定義`、`一句定義`、`只定義`、`本段定義`
- 結果：僅殘留於 Owner 文件（`canon/01_world_rules_and_costs.md`、`canon/02_glossary.md`、`canon/07_entities_and_devices.md`）與 1 個視覺 Owner 條目（`canon/06_visual_bible.md` 的光環段）。
- 判定：**PASS**（符合職責分工）

### B) 舊路徑超連結檢查（Canon 正文）
- 規則：不得連到 `screenwriter/`、`director/`、`gameplay/`、`art/`、`backup/`
- 結果：**PASS（0）**

### C) 職責一致性檢查
- 術語定義：`canon/02_glossary.md`
- 規則定義：`canon/01_world_rules_and_costs.md`
- 物件規格：`canon/07_entities_and_devices.md`
- 非 Owner 文件：保留用途、敘事意義與引用
- 判定：**PASS**

## 結論

- 第四輪機械化壓縮狀態：**PASS**
- Canon 維持：零舊鏈接、Owner 單點定義、非 Owner 句式已壓縮。
