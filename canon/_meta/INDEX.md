# Canon 統一索引（原子化版 Phase 1）

## 📍 讀者指引

本索引導航經過第一輪原子化後的 canon 檔案結構。

- **Tier 0（基礎不動層）**：core/ 目錄，無拆分
- **Tier 1（高引用層）**：reference/ 目錄，保留整合（Phase 2 考慮拆分）
- **Tier 2（系統規格層）**：已拆分為 story/, world/, production/ 子目錄
- **Tier 3–4（元層）**：_meta/ 目錄，索引及決策日誌

---

## 🔗 完整檔案導航

### **Tier 0 — Core Foundation（基礎層 — 不動）**

| 檔案 | 內容 | 相關文件 |
|-----|------|--------|
| **00_series_bible.md** | 系列命題、logline、終極目的、主題、受眾體驗設計 | [See](00_series_bible.md) |
| **01_world_rules_and_costs.md** | 唯識宇宙、三位一體光譜、世界規則、地理政治、三路線心之器、魔法代價 | [See](01_world_rules_and_costs.md) |
| **02_glossary.md** | 術語典 — 所有專有名詞的唯一解釋入口 | [See](02_glossary.md) |

### **Tier 1 — Reference Layer（參考層 — Phase 1 未動）**

| 檔案 | 內容 | 相關文件 |
|-----|------|--------|
| **03_character_index.md** | 角色索引 + 人物檔案清單 | [See](03_character_index.md) |
| **04_timeline_canon.md** | 時間線、事件因果、Alpha/Beta 線分歧點 | [See](04_timeline_canon.md) |

### **Tier 2a — Story Layer（故事層 — Phase 1 已拆）**

| 檔案 | 內容 | 舊檔案 | 連結 |
|-----|------|------|-----|
| **05_story_outline_canon.md** | 四幕故事大綱、beat 結構、關鍵事件、主題進程 | 05_story_outline_canon.md（原） | [See](05_story_outline_canon.md) |
| **08a_narrative_core.md** | ⭐ 新 — 敘事核心層：三層符號、主旋律、黑暗療癒、代價設計 | 08_narrative_design_bible.md（拆）| [See](story/08a_narrative_core.md) |
| **08b_narrative_execution.md** | ⭐ 新 — 敘事執行層：四幕氣氛、場景四拍、四牆、日常穿插、符號物件演化、魔法少女顛覆表 | 08_narrative_design_bible.md（拆）| [See](story/08b_narrative_execution.md) |

### **Tier 2b — World Layer（世界層 — Phase 1 已拆）**

| 檔案 | 內容 | 舊檔案 | 連結 |
|-----|------|------|-----|
| **05_naming_and_psychology_system.md** | 命名系統、心理框架 | 05_naming_and_psychology_system.md（原） | [See](05_naming_and_psychology_system.md) |
| **06a_visual_foundation.md** | ⭐ 新 — 視覺基礎層：視覺哲學、核心美學、視覺支柱、派生原則、環境現象 | 06_visual_bible.md（拆）| [See](world/06a_visual_foundation.md) |
| **06b_shadow_and_emotion_visuals.md** | ⭐ 新 — 情感視覺層：內在陰影、超現實受難、靈魂機制、集體潛意識、情緒物質特性 | 06_visual_bible.md（拆）| [See](world/06b_shadow_and_emotion_visuals.md) |
| **06c_character_and_scene_design.md** | ⭐ 新 — 設計執行層：角色框架、場景語法、Alpha/Beta 視覺、角色簽名、插畫風格、鏡頭語法 | 06_visual_bible.md（拆）| [See](world/06c_character_and_scene_design.md) |
| **07_entities_and_devices.md** | 實體與裝置定義、心匣規格、光環系統、變身鏡、屍骸視覺 | 07_entities_and_devices.md（原） | [See](07_entities_and_devices.md) |
| **09_information_design.md** | 資訊設計 — 受眾知識進程、謎題架構、資訊控制 | 09_information_design.md（原） | [See](09_information_design.md) |

### **Tier 3 — Production Layer（製作層 — 未動，Phase 2 考慮拆）**

| 檔案 | 內容 | 相關文件 |
|-----|------|--------|
| **10_gameplay_bible.md** | 遊戲玩法、UI、社會聲譽、遊戲敘事整合 | [See](10_gameplay_bible.md) |
| **11_directing_playbook.md** | 導演手冊 — 執行規格、導演語法 | [See](11_directing_playbook.md) |
| **12_philosophy_and_systems.md** | 哲學與系統 — 底層思想、系統驗算 | [See](12_philosophy_and_systems.md) |
| **13_major_events_relationship_impact.md** | 重大事件 — 事件對關係的影響、因果連結 | [See](13_major_events_relationship_impact.md) |

### **Tier 4 — Meta Layer（元層）**

| 檔案 | 用途 |
|-----|------|
| **99_decision_log.md** | 決策日誌 CDL-001~299（唯讀） |
| **INDEX.md** | 本檔 — 統一導航 |

---

## 📋 分割說明（Phase 1）

### 拆分完成的檔案

✅ **06_visual_bible.md** → **3 個 atom 檔案**
- `06a_visual_foundation.md` — 視覺哲學 + 核心美學 + 環境現象
- `06b_shadow_and_emotion_visuals.md` — 情感視覺 + 靈魂機制 + 物質特性
- `06c_character_and_scene_design.md` — 角色設計 + 場景執行 + Alpha/Beta 對照

✅ **08_narrative_design_bible.md** → **2 個 atom 檔案**
- `08a_narrative_core.md` — 敘事原則層
- `08b_narrative_execution.md` — 敘事執行層

### 連結驗證

所有內部連結已更新為新檔案路徑：
- `[See](story/08a_narrative_core.md)` 代替 `[See](08_narrative_design_bible.md#section-three-layer)`
- 所有 anchor ID 保留不變（#section-xxx）
- 跨檔案引用使用相對路徑

### 原檔案狀態

- ❌ 舊的 `06_visual_bible.md` — 可保留為 backup（建議移至 `_backup/06_visual_bible.md.bak`），或刪除
- ❌ 舊的 `08_narrative_design_bible.md` — 同上

---

## 🔧 Phase 2 計劃（待批核）

### 考慮拆分的檔案

- `13_major_events_relationship_impact.md` — 可按 act/phase 拆分
- `12_philosophy_and_systems.md` — 可按哲學主題拆分
- `07_entities_and_devices.md` — 可按設備類型拆分

### 保留整合的檔案

- `03_character_index.md` — 高引用，暫時不動
- `04_timeline_canon.md` — 高引用，暫時不動
- `01_world_rules_and_costs.md` — 基礎層，不動
- `02_glossary.md` — 基礎層，不動
- `00_series_bible.md` — 基礎層，不動

---

## 📌 使用說明

### 新讀者入門

1. 首先讀 `00_series_bible.md`（核心命題）
2. 再讀 `01_world_rules_and_costs.md`（世界規則）
3. 查 `02_glossary.md`（術語解釋）
4. 按需選讀其他檔案

### 創作者工作流

- **角色開發** → `03_character_index.md` + 角色檔案
- **故事寫作** → `05_story_outline_canon.md` + `08a_narrative_core.md` + `08b_narrative_execution.md`
- **視覺設計** → `06a_visual_foundation.md` + `06b_shadow_and_emotion_visuals.md` + `06c_character_and_scene_design.md`
- **遊戲製作** → `10_gameplay_bible.md` + `09_information_design.md`

---

## 📖 交叉引用速查

| 主題 | 查這些檔案 |
|-----|----------|
| 主題與敘事 | 00_series_bible.md + 08a_narrative_core.md + 08b_narrative_execution.md |
| 角色心理 | 03_character_index.md + 05_naming_and_psychology_system.md |
| 視覺設計 | 06a_visual_foundation.md + 06b_shadow_and_emotion_visuals.md + 06c_character_and_scene_design.md |
| 規則與代價 | 01_world_rules_and_costs.md + 08a_narrative_core.md |
| 事件時序 | 04_timeline_canon.md + 13_major_events_relationship_impact.md |
| 世界設定 | 02_glossary.md + 07_entities_and_devices.md + 12_philosophy_and_systems.md |

---

**最後更新**：2026-07-01（Phase 1 原子化完成）  
**下一步**：等待作者批核 ACT_III_OUTLINE.md → Phase 2 拆分評估

