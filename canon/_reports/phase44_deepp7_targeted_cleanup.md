# Phase44 DeepP7 定點清理（01 / 02 / 99）

## Scope
- `canon/01_world_rules_and_costs.md`
- `canon/02_glossary.md`
- `canon/99_decision_log.md`

## Actions
### 1) CAN-01（World Rules）
- 把時間鏈明細改成階段語言：
  - `基礎研究（帝國歷 79 年起）` -> `基礎研究期`
  - `核心技術突破（帝國歷 98 年前）` -> `核心技術突破期`
  - `項目易主（帝國歷 98 年）` -> `項目易主期`
  - `技術應用（帝國歷 102 年後）` -> `技術應用期`
- 將事件段改為規則影響導向：
  - `event-alpha-divergence` -> `section-alpha-divergence-impact`
  - 用「關鍵事件摘要 + Timeline/Decision Log 口徑引用」取代年號細節。

### 2) CAN-02（Glossary）
- 移除術語條目內的年份直述，改用 Timeline 錨點引用。
- 把規則判準語句改為 owner-safe 寫法：
  - `不可逆` 相關表述改為 `高風險/邊界` + `World Rules` 回指。
- Unit 01 例子由年號區間改為階段描述 + Timeline 錨點。

### 3) CAN-99（Decision Log）
- CF-002 標題與內容由「帝國歷 xx 年」改成年號碼表示：
  - `Alpha 分歧年份` -> `Alpha 分歧年號`
  - `帝國歷 102 年 / 109 年` -> `Y102 / Y109`
  - 保留裁決語義不變。

## Validation
- Link integrity:
  - `BROKEN_FILE_LINKS=0`
  - `BROKEN_ANCHORS=0`
- Old-path hyperlinks:
  - `OLDPATH_LINK_HITS=0`

## Ownership Matrix Delta
- Before (Phase43):
  - `TOTAL=27`, `HIGH=0`, `MEDIUM=19`, `LOW=7`
- After (Phase44):
  - `TOTAL=16`, `HIGH=0`, `MEDIUM=8`, `LOW=8`
- Net improvement:
  - `TOTAL -11`
  - `MEDIUM -11`

## Residual Risk Profile (after DeepP7)
- `decision_ref=8`（多為預期 cross-reference）
- `rule_leak=6`（主要在角色心理語句含「不可逆」字面）
- `character_leak=2`（來源註解區塊被掃描器誤判）

## Artifacts
- `canon/_reports/phase44_ownership_matrix_after_deepp7.csv`
- `canon/_reports/phase44_deepp7_targeted_cleanup.md`（本檔）
