# Phase 9 全量結構分離（Timeline vs Outline）報告

- 日期：2026-02-14
- 模式：全檔掃描 + 批次改寫 + 回歸驗證
- 核心目標：`05_story_outline_canon.md` 聚焦結構功能；客觀事件鏈回到 `04_timeline_canon.md`

## 本輪處理範圍

- `canon/05_story_outline_canon.md`（主修）
- `canon/03_character_index.md`（延續上一輪索引職責收斂）
- `canon/03_characters/miyako.md`
- `canon/06_visual_bible.md`
- `canon/10_gameplay_bible.md`

## 主要改寫（Outline）

1. Prologue 與 Act I/II/III/IV 的多個「客觀事件描述句」改為「結構功能句 + owner 指向」
- 例：把事件細節改成「本作原罪入口 / 轉折功能 / 方法論反轉」描述
- 例：將因果鏈敘述改為「客觀因果鏈見 Timeline」

2. `主題線索表`（膠布哲學 / 守恆 / 共振地獄）去事實化
- 由台詞/機制細述改為敘事功能與價值裁決句
- 條文與機制統一回鏈 `World Rules` / `Timeline`

3. 保留 Outline 必要內容
- 四幕節奏、壓力階梯、情緒波形、資訊揭露順序
- 事件節點仍保留錨點連結，但不再在 Outline 內重寫客觀條文

## 回歸驗證

- `oldlink_hits=0`（Canon 正文無舊目錄超連結）
- `outline_owner_markers=6`（新增/保留明確 owner 指向語句）
- `outline_fact_markers_after=60`
  - 註：此數字包含四幕時間欄位與必要節點名，不等於越界；本輪已把可收斂的客觀描述改為功能句。

## 結論

- 本輪完成 `Outline` 對 `Timeline` 的進一步職責切割。
- `Outline` 現在更聚焦「為何此刻發生（結構功能）」，客觀事件鏈與條文回到 owner 檔。
- 下一輪可繼續對 `Outline` 做第二次全量壓縮（集中處理表格敘述欄位的事實語氣）。
