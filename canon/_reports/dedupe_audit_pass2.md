# PASS2 去重覆審計報告

> 生成日期：2026-02-17（Step 3 — PASS2）
> 審計範圍：Step 1b–1e 補漏後，确認 canon/ 無重覆定義
> 驗收標準：每個術語/規則只在正確桶位有完整定義；其他地方只用「1句+link」

---

## 審計範圍

| 桶位 | 擁有者 | 審計焦點 |
|------|-------|---------|
| 術語定義 | `canon/02_glossary.md` | 每個術語只定義一次 |
| 世界規則 | `canon/01_world_rules_and_costs.md` | 每條規則只在此完整定義 |
| 角色 Want/Need/Lie/Truth | `canon/03_characters/*.md` | 角色心理只在本人角色檔定義 |
| 角色私密習慣 | `canon/03_characters/*.md` | 習慣只在本人角色檔定義 |
| 故事事件 | `canon/04_timeline_canon.md` | 每個事件只在時間線完整記錄 |

---

## A. 術語去重（canon/02_glossary.md）

### A-1 發現的重複定義（3 個）

| # | 術語 | 重複錨點 | 原因 | 嚴重度 |
|---|------|---------|------|-------|
| D-001 | 執念飽和度 | `term-saturation-of-obsession` (舊) + `term-obsession-saturation` (Step 1b 新增) | Step 1b 補入時未合併已存在的舊定義 | 🔴 HIGH |
| D-002 | 未經同意的救贖 | `term-unsolicited-salvation` (舊) + `term-salvation-sin` (Step 1b 新增) | 同上 | 🔴 HIGH |
| D-003 | 記憶與自我悖論 | `term-swampman-problem` (舊) + `term-memory-identity-paradox` (Step 1b 新增) | 同上 | 🔴 HIGH |

### A-2 已執行的合併動作（2026-02-17 PASS2）

| # | 術語 | 合併動作 | 結果 |
|---|------|---------|------|
| D-001 | 執念飽和度 | 保留 `term-saturation-of-obsession` 位置；升級為新豐富內容；刪除 `term-obsession-saturation` 重複條目；舊錨加入 `term-obsession-saturation` 別名 | ✅ 單一定義 |
| D-002 | 未經同意的救贖 | 保留 `term-unsolicited-salvation` 位置；升級為新豐富內容；刪除 `term-salvation-sin` 重複條目；新別名加入 | ✅ 單一定義 |
| D-003 | 記憶與自我悖論 | 保留 `term-swampman-problem` 位置；升級為新豐富內容；刪除 `term-memory-identity-paradox` 重複條目；新別名加入 | ✅ 單一定義 |

**外部連結安全性**（合併後不破壞現有 link）：

| 外部連結來源 | 原錨點 | 狀態 |
|------------|-------|------|
| `canon/00_series_bible.md:152` | `#term-saturation-of-obsession` | ✅ 保留，仍有效 |
| `canon/00_series_bible.md:151` | `#term-unsolicited-salvation` | ✅ 保留，仍有效 |
| `canon/00_series_bible.md:156` | `#term-swampman-problem` | ✅ 保留，仍有效 |
| `canon/03_characters/aya.md` × 2 | `#term-saturation-of-obsession` | ✅ 保留，仍有效 |
| `canon/03_characters/ayakomoji_misao.md` × 2 | `#term-saturation-of-obsession` | ✅ 保留，仍有效 |
| `canon/03_characters/iwakura_akane.md` × 2 | `#term-saturation-of-obsession` | ✅ 保留，仍有效 |
| `canon/03_characters/ko_hikaru.md` × 3 | `#term-saturation-of-obsession` | ✅ 保留，仍有效 |

**術語數更新**：74 → 71（合併 3 個重複定義）

### A-3 跨文件「雙重定義」確認（合法的 owner + 1-line+link 模式）

以下術語在多個文件出現，但符合 Single-Definition Rule（01 完整定義，02 只有 1句+link）：

| 術語 | 完整定義所在 | 其他文件 | 模式 |
|------|-----------|---------|------|
| 世界免疫系統理論 | `canon/01` §section-world-immune-system | `canon/02` §term-world-immune-system（3行+link to 01） | ✅ 正確：owner = 01 |
| 情緒視覺 | `canon/01` §rule-emotional-qualia | `canon/02` §term-emotional-qualia（3行+link to 01） | ✅ 正確：owner = 01 |
| 三位一體光譜 | `canon/01` §rule-trinity-spectrum | `canon/02` §term-trinity-spectrum（2行+link to 01） | ✅ 正確（既有設計） |
| 集體潛意識 | `canon/02` §term-collective-unconscious | `canon/01` 以 link 引用 | ✅ 正確：owner = 02 |

---

## B. 世界規則去重（canon/01）

Step 1b 新增的規則章節審計：

| 規則 | 所在檔 | 其他檔案是否有完整定義 | 狀態 |
|------|-------|------------------|------|
| §section-world-immune-system | 01 | 02 有 3行摘要（正確 owner 模式） | ✅ |
| §rule-obsession-saturation | 01 | 02 有 1行摘要（正確 owner 模式） | ✅ |
| §rule-emotional-qualia | 01 | 02 有摘要+link（正確） | ✅ |

---

## C. 角色私密習慣去重（canon/03_characters/*.md）

Step 1c 新增的習慣條目審計：

| 角色 | 新增習慣條目 | 是否出現在其他角色檔 | 狀態 |
|------|-----------|------------------|------|
| haruka.md | habit-rhythm-control, habit-transparency-obsession, habit-hot-cocoa, habit-ice-chewing | 否 | ✅ |
| miyako.md | habit-dark-shower, habit-long-swim, habit-blade-grinding, habit-crying-desire | 否 | ✅ |
| iwakura_akane.md | habit-sleeping-in-boots, habit-dead-plants, habit-feed-cat-miyako, habit-gum-chewing | 否（habit-feed-cat-miyako 涉及美夜子但定義在紫音檔，美夜子檔只用敘事描述，無重複定義） | ✅ |
| ayakomoji_misao.md | habit-eye-mask, habit-compulsive-washing | 否 | ✅ |
| saku.md | habit-earring-temperature, habit-ice-bath | 否 | ✅ |
| akiho.md | habit-instrument-scan, habit-statue-dialogue | 否 | ✅ |

**每個習慣只在一個角色檔定義**。✅ 全部合規。

---

## D. 故事場景/日常場景去重（canon/05 + canon/10）

Step 1d 新增內容審計：

| 新增內容 | 所在檔 | 其他檔是否有完整重複 | 狀態 |
|---------|-------|------------------|------|
| §section-girl-psychology-extended（少女心理維度 6-11） | 10 | 05 無重複；00 有主題層（但非具體維度定義） | ✅ |
| §section-k-room-scene（美夜子唱《雨天》K房場景） | 10 | 05 中有Act I 場景提及，但未重複寫 K房對話 | ✅ |
| §section-daily-cruelty-contrast（六大對比方向） | 10 | 05 中無重複 | ✅ |
| §director-band-aid-3rd（膠布第三層導演細節） | 05 | 00 有主題層，01 有世界免疫連結，但具體導演執行細節只在 05 | ✅ |
| §director-band-aid-4th（膠布第四層導演細節） | 05 | 同上 | ✅ |

---

## E. 結構輔助去重（art/INDEX.md + tools/INDEX.md）

Step 1e 新建文件審計：

| 文件 | 是否與其他檔重複定義 | 狀態 |
|------|------------------|------|
| art/INDEX.md | 目錄索引，不與設計文件本體重複；僅列出文件清單 | ✅ |
| tools/INDEX.md | 目錄索引，不與工具文件本體重複 | ✅ |

---

## 總結

| 審計面向 | 發現問題 | 已修復 | 殘留 |
|---------|---------|-------|------|
| 術語重複定義 | 3 個（D-001/002/003）| 3 個（✅）| 0 |
| 世界規則重複 | 0 | — | 0 |
| 角色習慣重複 | 0 | — | 0 |
| 場景/日常內容重複 | 0 | — | 0 |
| 索引文件重複 | 0 | — | 0 |

**DoD2 達成**：補漏後 canon/ 無新增重覆定義；3 個已發現的術語重複已合併修復。

---

## See Also

- [migration_runlog.md](migration_runlog.md) — Step 1b/1c/1d 補漏執行日誌
- [canon/02_glossary.md](../02_glossary.md) — 術語典（PASS2 後更新至 71 個術語）
- [canon/01_world_rules_and_costs.md](../01_world_rules_and_costs.md) — 世界規則（PASS2 確認無重覆）
- [conflicts_report.md](conflicts_report.md) — 矛盾清單（與 PASS2 不同：PASS2 管重覆，矛盾報告管互斥）
