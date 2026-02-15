# Phase 8 全量巡檢與批次修正報告（Large-pass Mode）

- 日期：2026-02-14
- 方式：全檔掃描（22 個 canon markdown）+ 批次修改 + 回歸驗證
- 目標：避免小修小補，直接做大面積 ownership 去重與句式收斂

## 1) 全量掃描統計

- 掃描檔案數：22（不含 `canon/_reports/`）
- 初始定義句式命中：43（含 owner 文件）
- 非 owner 定義句式命中（修正後）：12
- 舊路徑超連結命中（修正後）：0

> 註：非 owner 命中 12 條中，多數為語義誤判（角色敘事句、報告判詞、修辭句），非規則條文重寫。

## 2) 本輪大面積修改

### A. `canon/03_character_index.md`
- 次要角色條目由「事件詳述」收斂為「角色功能定位 + owner 指向」。
- 收斂對象：花子、螢、紗夜、帝國皇帝、朱音弟弟。
- 效果：索引頁職責回到導航，不再承擔時間線與心理細節正文。

### B. `canon/05_story_outline_canon.md`
- 把規則機制敘述改為結構功能敘述，並回鏈 owner。
- 收斂節點：
  - 守恆定律揭露
  - 共振地獄第一階段
  - Alpha/Beta 大膠布句
  - Act IV 中守恆/三位一體機制解釋
- 效果：Outline 回到「為何放在這裡」而不是「規則怎樣運作」。

### C. `canon/03_characters/miyako.md`
- 「避難所詛咒」段由機制描寫收斂為角色意義句，機制改由 Glossary/World Rules 承接。

### D. `canon/06_visual_bible.md`
- `Halo` 小節把 `**定義**` 改為 `**視覺用途**`，並明示術語口徑 owner。

### E. `canon/10_gameplay_bible.md`
- 「真系統」三條由 lore 機制斷言，改為玩法後果敘述 + owner 引用。

## 3) 回歸驗證

### 3.1 舊路徑連結
- 檢查：`screenwriter/ director/ gameplay/ art/ backup/`
- 結果：**0**（PASS）

### 3.2 Ownership 標記
- `只保留 / 口徑見 / 條文口徑見 / 不在此重述` 命中：14
- 結果：各非 owner 文件已有明確回鏈語句（PASS）

### 3.3 非 owner 定義句式殘留（12）
- 分類：
  1. 角色心理修辭（可保留）
  2. Decision Log 裁決句（應保留）
  3. 視覺演出句（Visual Owner 可保留）
- 判定：目前無「把 World Rules / Glossary 條文重寫到非 owner 文件」的致命衝突。

## 4) 後續執行規格（固定）

由下一輪開始，固定採用以下流程，不再細碎式處理：
1. 全檔掃描（全 `canon/*.md`）
2. 產生命中清單（ownership/old-link/definition-style）
3. 批次修正（至少 3+ 文件）
4. 回歸驗證（old-link=0、owner 越界=0 致命）
5. 輸出一份完整報告

