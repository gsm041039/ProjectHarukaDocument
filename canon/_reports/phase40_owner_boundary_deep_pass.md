# Phase40 Owner-Boundary Deep Pass（角色低量年份標記清理）

## Scope
- 依 `_checkpoint.md` 的 DeepP3 指令，清理剩餘低量年份標記：
  - `canon/03_characters/akiho.md`
  - `canon/03_characters/haruka.md`
  - `canon/03_characters/iwakura_akane.md`
  - `canon/03_characters/ko_hikaru.md`
  - `canon/03_characters/saku.md`
  - `canon/03_characters/ayakomoji_sou.md`

## Applied Changes
- Header Table 的「帝國歷 xx 年時」統一改為「主線期」或回指 Timeline。
- 角色段落中的具體年份敘事改為事件節點語句 + Timeline 錨點。
- 保持角色檔只承載心理/弧光意義，客觀事件鏈回收至 CAN-04。

## Metrics
- Character 年份命中（`\\d{2,4}\\s*年`）：
  - `iroha.md=7`
  - 其餘角色檔全部 `0`
- Link audit：
  - `BROKEN_FILE_LINKS=0`
  - `BROKEN_ANCHORS=0`
- 舊路徑 hyperlink：
  - `OLDPATH_LINK_HITS=0`

## Result
- DeepP3 完成。
- 角色層 owner-boundary 進一步收斂，且無破鏈。
