# Phase39 Owner-Boundary Deep Pass（段落級）

## Scope
- 全 Canon 非抽樣 owner-boundary 深檢（含角色檔時間鏈洩漏壓縮）
- 修正檔案：
  - `canon/03_characters/aya.md`
  - `canon/03_characters/aya.md`
  - `canon/03_characters/miyako.md`
  - `canon/03_characters/rin.md`

## Fixes Applied
- 角色檔把「年份/客觀事件鏈」改為「心理意義 + Timeline 錨點引用」。
- 壓縮 `antagonist` 與 `iroha` 的時間段敘述，避免角色檔重寫 CAN-04 事件 owner。
- 壓縮 `miyako` 與 `rin` Header Table 的年度條目，改為主線期 + Timeline 指向。

## Metrics
- Character 年份命中（`\\d{2,4}\\s*年`）最新分佈：
  - `aya.md=7`
  - `akiho.md=2`
  - `haruka.md=2`
  - `iwakura_akane.md=2`
  - `ko_hikaru.md=2`
  - `ayakomoji_misao.md=1`
  - `saku.md=1`
  - `aeri.md=0`
  - `aya.md=0`
  - `miyako.md=0`
  - `rin.md=0`
  - `yu.md=0`
- Link audit：
  - `BROKEN_FILE_LINKS=0`
  - `BROKEN_ANCHORS=0`
- 舊路徑 hyperlink：`OLDPATH_LINK_HITS=0`

## Residual Risk
- `aya.md` 仍保留少量年份語句（角色自我時間感所需），但已移除明確客觀鏈細節與分期表。
- `akiho.md`/`haruka.md`/`iwakura_akane.md`/`ko_hikaru.md` 尚有低量年份標記，可放入下一輪細化壓縮。

## Result
- 本輪 Deep Pass 完成：高風險角色檔 ownership 洩漏已收斂，且無破鏈。
