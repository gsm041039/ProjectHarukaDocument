# Phase 3 Audit Report — Canon 整合完成審計

> **日期**：2026-02-14
> **審計範圍**：`canon/` 全目錄 + `Navigation_Guide.md`

---

## 整合摘要

### 已完成的操作

| 步驟 | 操作 | 結果 |
|------|------|------|
| Rewrite Pass | 全檔 Canon 職責重寫 | 核心 10 檔新增 `section-scope`；12 角色檔新增 `section-char-scope`、`section-role-function`、`section-canon-constraints` |
| Step 1 | docs_v2 文件取代 v1 | 8 個主文件 + 12 角色 Sheet + 6 份 reports 覆蓋完成 |
| Step 1b | 刪除不再需要的 v1 結構 | `characters_visual/`（10 檔）、`supporting/`（5 檔）、`08_directing_playbook.md` 已刪除 |
| Step 1c | 修正 v2 文件路徑 | `99_decision_log.md` 中 docs_v2 引用已修正 |
| Step 2 | CAN-06 Visual Bible 擴充 | 167 行 → 403 行，v2 格式（Reader Guide + anchors + GitHub links） |
| Step 2 | CAN-07 Entities 三合一 | `07_entities/`（3 檔）合併為 `07_entities_and_devices.md`，舊目錄已刪除 |
| Step 2 | CAN-10 Gameplay 格式升級 | 移除 YAML、加 Reader Guide、wikilinks → GitHub links |
| Step 3 | Navigation_Guide.md 重寫 | 更新所有連結、移除 CAN-08 段落、加入 Character Index、修正快速索引 |
| Step 4 | 刪除 docs_v2/ | 整個目錄已移除 |

---

## Cross-link 審計結果

### 1. Wikilinks 殘留檢查

**結果：✅ 通過** — `canon/` 目錄內零殘留 `[[wikilinks]]`

### 2. docs_v2 引用檢查

**結果：✅ 通過（附註）**

- Canon 主文件（CAN-00~CAN-10、CAN-99）：零 `docs_v2` 引用
- `_reports/` 目錄：存在歷史性 `docs_v2` 引用（phase0_inventory.md、phase1_resolution_proposals.md）
  - **處置**：保留。這些是重構過程的歷史文件，引用的是「當時 docs_v2 存在時的遷移計劃」，非活躍連結

### 3. 已刪除文件引用檢查

**結果：✅ 通過（附註）**

已刪除的結構：
- `canon/characters_visual/`（10 檔）
- `canon/03_characters/supporting/`（5 檔）
- `canon/07_entities/`（3 檔）
- `canon/08_directing_playbook.md`

**發現**：
- `_reports/` 目錄中存在歷史性引用 → 保留（同上理由）
- 角色 Sheet 的 `<!-- Sources -->` 註解引用 `characters_visual/xxx.md` → 保留（Source 註解記錄來源出處，非活躍連結）
- `00_series_bible.md` Sources 註解記錄 `canon/08_directing_playbook.md (absorbed)` → 保留（明確標記 absorbed）
- **Navigation_Guide.md**：零殘留引用 ✅

### 4. 連結目標存在性全量檢查（檔案 + Anchor）

**結果：✅ 通過**

- 已對 `canon/` 全部 `.md` 進行機械化掃描（所有 Markdown links）
- 檢查項目：
  - 目標檔案存在
  - `#anchor` 目標存在
- 修正內容：
  - 補齊舊版相容 anchors（例如：`act-1~4`、`event-hotaru-death`、`term-emotion-drug`、`term-reality-change`）
  - 新增缺漏術語錨點（如 `term-soul-leakage`、`term-emotion-link`、`term-causal-debt`）
  - 補齊規則錨點 `rule-physiological-rejection`
- 最終狀態：`OK: no missing files/anchors in canon markdown links.`

---

## 最終 Canon 目錄結構

```
canon/
├── 00_series_bible.md
├── 01_world_rules_and_costs.md
├── 02_glossary.md
├── 03_character_index.md
├── 03_characters/
│   ├── haruka.md
│   ├── miyako.md
│   ├── iroha.md
│   ├── saku.md
│   ├── akiho.md
│   ├── airi.md
│   ├── iwakura_akane.md
│   ├── ayakomoji_sou.md
│   ├── ko_hikaru.md
│   ├── rin.md
│   ├── antagonist.md
│   └── yu.md
├── 04_timeline_canon.md
├── 05_story_outline_canon.md
├── 06_visual_bible.md
├── 07_entities_and_devices.md
├── 10_gameplay_bible.md
├── 99_decision_log.md
└── _reports/
    ├── conflict_report.md
    ├── duplicate_cluster.md
    ├── phase0_duplicate_clusters.md
    ├── phase0_entities_index.md
    ├── phase0_inventory.md
    ├── phase1_conflict_list.md
    ├── phase1_questions_for_author.md
    ├── phase1_resolution_proposals.md
    └── phase3_audit.md
```

**總計**：9 個主文件 + 12 個角色 Sheet + 1 個角色索引 + 9 份報告 = **31 個文件**

---

## 8 個衝突裁決狀態

| CF-ID | 狀態 | 裁決已寫入 |
|-------|------|-----------|
| CF-001 魔法代價 | ✅ 已裁決 | CAN-01、CAN-07、CAN-02 |
| CF-002 Alpha 分歧年 | ✅ 已裁決 | CAN-04、CAN-03/haruka、CAN-05 |
| CF-003 角色動機 | ✅ 已裁決 | 所有 CAN-03 角色 Sheet |
| CF-004a 同步觸發 | ✅ 已裁決 | CAN-01 |
| CF-004b 導演參數 | ✅ 已裁決 | 不影響 Canon（參考用） |
| CF-004c 真相路徑 | ✅ 已裁決 | CAN-01 |
| CF-005 視覺設計 | ✅ 已裁決 | CAN-06、各角色 Sheet |
| CF-006 帝國政治 | ✅ 已裁決 | CAN-01 |
| CF-007 情緒數值 | ✅ 已裁決 | CAN-01 |
| CF-008 關係時機 | ✅ 已裁決 | CAN-04、各角色 Sheet |
