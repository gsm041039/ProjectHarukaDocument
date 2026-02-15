# Phase41 DeepP4（Iroha 年份語義壓縮）

## Scope
- 針對 `canon/03_characters/iroha.md` 的 7 個年份殘留命中做語義級壓縮。

## Changes
- 將角色心理敘事中的「34 年／40 年」改為非時間軸句式：
  - `極長時間`
  - `長年積蓄`
  - `長期無法發出`
  - `長期囚禁後`
  - `長期沉默`
  - `長期囚禁`
  - `長期施加`
- 保持事件客觀資訊透過 Timeline 錨點承載，不在角色檔重寫年份鏈。

## Validation
- `canon/03_characters/iroha.md` 年份命中：`0`
- 全角色檔年份命中：`0`
- `BROKEN_FILE_LINKS=0`
- `BROKEN_ANCHORS=0`
- `OLDPATH_LINK_HITS=0`

## Result
- DeepP4 完成。
- 角色檔 owner-boundary（時間鏈 owner=CAN-04）已在字面層面全數對齊。
