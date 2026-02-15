# Phase 10 角色檔全量段落級 Ownership 去重報告

- 日期：2026-02-14
- 範圍：`canon/03_characters/*.md`（12 份）
- 目標：角色檔只保留心理弧/關係/敘事功能，不承擔規則條文或機制定義正文。

## 1) 全量掃描結果

- 角色檔總數：12
- 初始命中（owner risk regex）：21
- 修正後命中：17
- 舊路徑超連結：0
- ownership 回鏈標記（`口徑見/事件細節見/只保留` 等）：7

> 備註：剩餘 17 命中中，多數是角色敘事句（非規則條文重寫），屬可接受語義命中。

## 2) 本輪批次修改

### A. `canon/03_characters/yu.md`
- Header `本質` 改為 `角色定位`。
- 將「被關閉負面光譜」機制敘述改為角色功能句，並回鏈 `Glossary + Timeline`。

### B. `canon/03_characters/rin.md`
- 收斂「三位一體治癒路徑」機制語氣。
- 保留角色選擇核心（拒絕治癒）並回鏈 `World Rules`。

### C. `canon/03_characters/miyako.md`
- 收斂復活與貓化段的機制描述。
- 改為角色代價與心理意義句，事件/規則分別回鏈 `Timeline` 與 `Glossary/World Rules`。

### D. `canon/03_characters/airi.md`
- 「時間線不受影響記憶觀測點」改為敘事功能句（記憶錨點）。
- 時間線客觀對照回鏈 `Timeline` 對應章節。

### E. `canon/03_characters/akiho.md`
- 愛莉事故段收斂為角色弧責任句，機制與客觀事件外移到 owner。
- Unit 01 段改為罪責與心理後果語義，事件順序回鏈 `Timeline`。

### F. `canon/03_characters/antagonist.md`
- 鏡像法則段改為角色立場詮釋。
- 條文/視覺規格分別回鏈 `World Rules` 與 `Visual Bible`。

## 3) 驗證

- `character_oldlink_hits_after=0`（PASS）
- 未發現角色檔直連舊目錄（`screenwriter/director/gameplay/art/backup`）

## 4) 結論

- 第 10 輪完成 12 份角色檔全量巡檢與批次收斂。
- 角色檔 ownership 已進一步集中到「心理/弧光/關係/敘事功能」。
- 規則條文與機制定義已更明確回鏈 owner 文件。

