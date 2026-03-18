# 第三輪硬去重稽核（Strict Ownership Audit）

- 日期：2026-02-14
- 範圍：`canon/*.md`、`canon/03_characters/*.md`（排除 `canon/_reports/`）
- 目標：核心術語採「單一權責文件定義」；非權責文件僅保留敘事用途與引用

## 權責表（Owner）

| 術語/規則 | 定義 Owner |
|---|---|
| 三位一體光譜 | `canon/02_glossary.md#term-trinity-spectrum` + `canon/01_world_rules_and_costs.md#rule-trinity-spectrum` |
| 情緒守恆定律 | `canon/01_world_rules_and_costs.md#rule-emotion-conservation` |
| 鏡像法則 | `canon/01_world_rules_and_costs.md#rule-mirror-law` |
| 心匣 | `canon/02_glossary.md#term-heart-container` + `canon/07_entities_and_devices.md#section-heart-container` |
| 魔法屍骸 | `canon/02_glossary.md#term-magical-corpse` + `canon/07_entities_and_devices.md#section-magical-corpse` |

## 本輪已執行硬去重修改

1. `canon/03_characters/aya.md`
- 將「心匣物理定義」改為「共享契約信物 + 連到 Owner」。
- 同步收斂象徵表述，保留角色心理意義。

2. `canon/03_characters/aya.md`
- 將「魔法屍骸定義語氣」改為「角色立場詮釋」，並明示正式定義在 Glossary。
- 將「共享心匣」改為「共享契約信物（心匣）」以避免角色檔承擔術語定義。

## 稽核結果

### A) 舊路徑超連結檢查（Canon 正文）
- 規則：不得連到 `screenwriter/`、`director/`、`gameplay/`、`art/`、`backup/`
- 結果：**PASS（0）**
- 備註：`canon/_reports/` 內保留歷史路徑屬追溯資料，不屬 Canon 正文。

### B) 非 Owner 文件「定義型語句」檢查（心匣/魔法屍骸）
- 結果：**PASS（已收斂）**
- 說明：殘留命中主要為以下兩類，屬可接受：
  - 視覺 Owner（`canon/06_visual_bible.md`）中的「視覺定義」與演出規格。
  - 角色檔中的事件事實/心理立場（例如「第一個人造魔法屍骸」為事件資訊，不是術語規格定義）。

### C) 角色檔職責檢查
- 結果：**PASS**
- 說明：角色檔保留「心理意義、關係、弧光、事件影響」，術語規格均透過 link 指向 Owner。

## 結論

- 第三輪硬去重狀態：**PASS**
- Canon 仍維持零舊鏈接、單一權責定義、跨檔引用一致。
