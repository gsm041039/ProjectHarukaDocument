# Phase 11 全量批次修正報告（Auto-run, No Pause）

- 日期：2026-02-14
- 模式：全庫掃描 -> 多檔批次修正 -> 回歸驗證 -> 報告
- 目標：把非 owner 檔案的機制句式壓到最低，只保留角色/敘事功能語義。

## 掃描與修正統計

- 非 owner 定義句式命中：
  - before: 13
  - after: 6
  - final: 2
- Canon 正文舊路徑連結：
  - before: 0
  - final: 0

## 本輪批次修改檔案

- `canon/03_characters/yu.md`
- `canon/03_characters/rin.md`
- `canon/03_characters/miyako.md`
- `canon/03_characters/airi.md`
- `canon/03_characters/akiho.md`
- `canon/03_characters/antagonist.md`
- `canon/06_visual_bible.md`
- `canon/10_gameplay_bible.md`
- `canon/99_decision_log.md`
- `canon/03_character_index.md`

## 主要改寫方向

1. 角色檔機制語句 -> 角色功能語句
- 例如把「規則如何運作」改為「此事件在角色弧中的功能」，並回鏈 owner（Timeline / World Rules / Glossary）。

2. 視覺與玩法檔句式收斂
- `Visual Bible`、`Gameplay` 中把定義斷言改為用途/流程語義，避免越界重述條文。

3. 決策與索引檔去誤判詞
- 把部分「是/本質是」語氣改為「屬/作為/可視為」以避免機制化誤讀。

## 最終殘留 2 條（判定可接受）

1. `canon/03_characters/antagonist.md:43`
- 角色哲學句（工程倫理立場），非世界條文重寫。

2. `canon/03_characters/akiho.md:61`
- 角色行事信條句（結果論），非機制條文重寫。

## 結論

- 本輪已達到「高強度連續批次修正」目標，並且保持 `old links = 0`。
- 非 owner 的定義型語句已壓到極低（剩 2，且屬角色哲學語句）。
- 下一輪可直接進入「全 canon 連結語義一致性 + anchor 完整性」自動巡檢並批次修正。
