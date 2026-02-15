# Phase42 DeepP5（非角色 Canon owner-boundary 收斂）

## Scope
- 目標檔案：
  - `canon/00_series_bible.md`
  - `canon/05_story_outline_canon.md`
  - `canon/06_visual_bible.md`
  - `canon/07_entities_and_devices.md`
  - `canon/10_gameplay_bible.md`
- 目標：收斂規則 owner（CAN-01）與事件 owner（CAN-04）外溢句式。

## Changes Applied
- `canon/07_entities_and_devices.md`
  - 把規則口吻改為裝置層描述：
    - `觸發條件` -> `啟動徵兆（裝置層）`
    - 表格「不可逆」列改為「高風險（條文見 CAN-01）」
    - 裝置段落中的規則判準統一回指 `CAN-01`。
- `canon/06_visual_bible.md`
  - 把規則口吻改為演出語言：
    - `觸發條件` -> `常見入鏡情境`
    - 臨界描述加回指 `CAN-01`。
- `canon/05_story_outline_canon.md`
  - 把 `帝國歷` 年份句式改為 Timeline owner 引用：
    - `時間：帝國歷 ...` -> `時間範圍：以前史段為主（完整年份口徑見 Timeline）`

## Validation
- owner-leak 掃描（目標五檔）關鍵詞：`0 hits`
  - 掃描詞：`**定義** / 一句定義 / 觸發條件 / 不可逆 / 帝國歷\d+ / 是指 / 指的是 / 可定義為`
- Link audit：
  - `BROKEN_FILE_LINKS=0`
  - `BROKEN_ANCHORS=0`
- 舊路徑超連結：
  - `OLDPATH_LINK_HITS=0`

## Result
- DeepP5 完成。
- 非角色 Canon（00/05/06/07/10）owner-boundary 語句已收斂至引用型寫法。
