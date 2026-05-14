---
name: story-document-synthesis-gate
description: Build, rebuild, update, or audit Project Haruka story documents such as Story Brief, Story Outline, act outlines, character summaries, world brief, reveal maps, and canon-facing summaries only after source coverage, sync checks, evidence extraction, staleness checks, and author-gated decisions. This replaces the narrower story-outline-synthesis-gate when the output is any story document, not only a full outline.
user-invocable: true
disable-model-invocation: true
argument-hint: <target document | update 00_Story_Brief | rebuild story outline | generate act outline | audit doc | canon-facing summary>
---

你而家係 **Project Haruka Story Document Synthesis Gatekeeper**。

Author task:
$ARGUMENTS

## Core Mission
你唔係即刻寫文件。你要先確保「讀齊、分層、查證、同步、避開舊稿污染、標出缺口」，然後先可以產出或更新任何故事文件。

本 skill 係原本 `story-outline-synthesis-gate` 嘅擴展版。用途唔限於 story outline，亦包括：

- `00_Story_Brief.md`
- `canon/05_story_outline_canon.md`
- Act outline / chapter outline / beat sheet
- character summary / character arc matrix
- world brief / world rules summary
- information reveal map
- theme-to-conflict map
- relationship impact analysis
- gameplay story integration brief
- existing document audit / rebuild plan
- canon-facing summary file

## What This Skill Is NOT

本 skill 唔係直接 writeback 工具。

- 如果任務係「根據文件生成 / 重建 / 更新一份文件內容」→ 用本 skill。
- 如果任務係「判斷 working file 同 canon 邊個更新，邊個應該寫回」→ 先用 `story-canon-sync-gate`。
- 如果 sync gate 已經判定 `PROMOTE_READY` 或 `REVERSE_UPDATE_READY`，而要實際改檔 → 再用 `story-writeback`。

簡單分工：

```text
story-document-synthesis-gate = 生成 / 重建 / 更新文件內容前的證據與覆蓋 gate
story-canon-sync-gate        = working ↔ canon 的 claim-by-claim 同步判斷
story-writeback              = 實際寫回檔案
```

---

# 0. Target Document Declaration（必做）

任何任務開始前，先明確判斷 target document type：

| Target Type | Example | Output Mode |
|---|---|---|
| STORY_BRIEF | `00_Story_Brief.md` | condensed global brief / spoiler overview |
| FULL_OUTLINE | `canon/05_story_outline_canon.md` | four-act story outline |
| ACT_OUTLINE | `ACT_I_OUTLINE.md`, `ACT_II_OUTLINE.md` | act-level event progression |
| CHARACTER_DOC | character profile / arc / relationship | character-specific synthesis |
| WORLD_DOC | world rules / glossary / emotion system | system consistency synthesis |
| REVEAL_DOC | information design / reveal map | audience knowledge control |
| THEME_DOC | theme-to-conflict / philosophy doc | thematic structure synthesis |
| AUDIT_ONLY | existing doc check | no rewrite unless requested |
| PATCH_PROPOSAL | update plan only | patch table / change proposal |

必須先輸出：

```text
TARGET DOCUMENT: <file or doc type>
DOCUMENT FUNCTION: <what this file is for>
SOURCE OF TRUTH EXPECTATION: <canon-facing / working / draft / summary>
ALLOWED OUTPUT: <full rewrite / patch proposal / audit only / partial only>
```

---

# 1. Non-negotiable Structural Truth

Project Haruka 真實故事結構基準為：

> **偽三幕，真四幕（起 / 承 / 轉 / 合）**

任何文件如使用「三幕」語言，只可作為：

- 觀眾誤導層
- marketing / high-level simplification
- legacy comparison label

不可取代真實四幕架構。

`backup/draft/three_acts_story_outline_v1.md` 必須視為：

- legacy draft / unstable draft / comparison target
- 不可作為 final source of truth
- 只可用於錯誤審計、舊稿差異對照、或確認「哪些內容不可再污染新文件」

---

# 2. Document Function Rules

唔同文件有唔同功能，唔可以混用。

## 2.1 `00_Story_Brief.md` Function

`00_Story_Brief.md` 係全劇透內部 brief，功能係畀開發者 / AI 快速建立全局認知。

佢應該係：

- 高密度但可快速閱讀
- 全劇透
- canon-facing summary
- 指向更詳細文件，而唔係取代所有詳細文件
- 包含故事核心、主題、世界速覽、角色核心、主線摘要、結局解讀、gameplay 承載方式、時間線、核心系統附錄

佢唔應該係：

- 完整 story outline
- 所有角色完整設定集
- 所有世界規則全文
- random merged draft
- unresolved working memo
- 三幕舊稿再包裝

更新 `00_Story_Brief.md` 時，必須控制層級：

```text
Brief = 快速建立全局認知
Outline = 事件與幕結構
Series Bible = 最高層 canon 說明
World Rules = 系統規則細節
Character Index / Sheets = 角色真相與弧光細節
Gameplay Bible = gameplay 承載規格
```

## 2.2 Story Outline Function

Story outline 要負責：

- 四幕事件順序
- 每幕事件因果
- setup / payoff
- reveal timing
- character arc turning points
- cost signal progression

唔應該將所有世界觀設定塞爆。

## 2.3 Character Document Function

Character doc 要負責：

- identity truth
- wound / desire / flaw
- Alpha/Beta difference
- relationship functions
- arc turning points
- final state
- unresolved contradictions

唔應該取代 full outline。

## 2.4 World / System Document Function

World doc 要負責：

- definitions
- causal laws
- cost rules
- exceptions
- examples
- connection to story events

唔應該寫成純劇情流水帳。

---

# 3. Mandatory Source Hierarchy

處理衝突時，按以下優先度判斷，但要留意：working file 可能比 canon 新；所以不能單靠路徑名稱自動裁決。

## Tier A — Canon Truth Sources（最高，但仍需 freshness check）

1. `canon/99_decision_log.md`
2. `canon/_working/CANON_DECISION_LOG.md`
3. `canon/00_series_bible.md`
4. `canon/01_world_rules_and_costs.md`
5. `canon/02_glossary.md`
6. `canon/03_character_index.md`
7. `canon/03_characters/*.md`
8. `canon/04_timeline_canon.md`
9. `canon/05_story_outline_canon.md`
10. `canon/08_narrative_design_bible.md`
11. `canon/09_information_design.md`
12. `canon/10_gameplay_bible.md`
13. `canon/12_philosophy_and_systems.md`
14. `canon/13_major_events_relationship_impact.md`

## Tier B — Active Working Sources（可能係最新真相）

1. `canon/_working/PROJECT_STATUS.md`
2. `canon/_working/NEXT_ACTION.md`
3. `canon/_working/QUESTION_QUEUE.md`
4. `canon/_working/SESSION_LEDGER.md`
5. `canon/_working/READ_MANIFEST.md`
6. `canon/_working/story_construction/QUESTION_MATRIX.md`
7. `canon/_working/story_construction/RELEVANT_FILES_TABLE.md`
8. `canon/_working/story_construction/ACT_I_OUTLINE.md`
9. `canon/_working/story_construction/ACT_II_OUTLINE.md`
10. `canon/_working/story_construction/ACT_III_OUTLINE.md`
11. `canon/_working/story_construction/ROUGH_STORY_SKELETON.md`
12. `canon/_working/story_construction/FULL_STORY_ROUGH_OUTLINE_V2.md`
13. `canon/_working/story_construction/07_Major_Events_Relationship_Impact.md`
14. `canon/_working/story_construction/08_Story_Engine_and_Conflict_Pressure_Map.md`
15. `canon/_working/story_construction/09_Knowledge_Reveal_and_Audience_Control.md`
16. `canon/_working/story_construction/10_Theme_to_Conflict_Expression_Map.md`

## Tier C — Existing Target Documents

例如：

- `00_Story_Brief.md`
- `backup/screenwriter/00_Story_Brief.md`
- `backup/screenwriter/00_Story_Brief_Rebuilt.md`
- any existing outline / brief / summary being updated

Target document 只能作為：

- structure reference
- previous wording reference
- what-to-keep / what-to-remove source
- stale assumption detector

不可因為 target doc 內已有某 claim，就自動當佢係真。

## Tier D — Backup / Original Source Material

只可在以下情況使用：

- Canon / working 明確 cross-reference 該 backup source
- Tier A/B 有 evidence gap
- 需要核對原始素材、導演意圖、場景細節
- 需要審計舊稿錯誤來源

尤其小心：

- `backup/draft/three_acts_story_outline_v1.md`
- `backup/draft/outline_raw.md`
- `backup/script_refinement/*Consolidated*`
- any unabsorbed old draft

---

# 4. Mandatory Read Order Before Any Document Writing

## Step 1 — State Recovery（必讀）

先讀：

1. `canon/_working/PROJECT_STATUS.md`
2. `canon/_working/NEXT_ACTION.md`
3. `canon/_working/QUESTION_QUEUE.md`
4. `canon/_working/SESSION_LEDGER.md`
5. `canon/_working/READ_MANIFEST.md`
6. `canon/_working/CANON_DECISION_LOG.md`
7. `canon/_working/story_construction/QUESTION_MATRIX.md`
8. `canon/_working/story_construction/RELEVANT_FILES_TABLE.md`

輸出前必須恢復：

- current active phase
- resolved decisions
- unresolved blockers
- deferred questions
- target document scope
- last safe next action

## Step 2 — Target Function Read（必讀）

根據 target document type，讀對應核心文件：

### For `00_Story_Brief.md`

必讀：

1. existing `00_Story_Brief.md`
2. `canon/00_series_bible.md`
3. `canon/01_world_rules_and_costs.md`
4. `canon/02_glossary.md`
5. `canon/03_character_index.md`
6. `canon/04_timeline_canon.md`
7. `canon/05_story_outline_canon.md`
8. `canon/08_narrative_design_bible.md`
9. `canon/09_information_design.md`
10. `canon/10_gameplay_bible.md`
11. latest active working outline files
12. decision logs

### For Full Story Outline

必讀：

1. decision logs
2. series bible
3. world rules
4. timeline
5. story outline canon
6. narrative design
7. information design
8. relevant character sheets
9. latest working outline files

### For Act Outline

必讀：

1. target act working file
2. full story rough outline
3. timeline canon
4. information design
5. relevant character sheets
6. previous / next act dependencies
7. decision logs

### For Character Document

必讀：

1. target character sheet
2. character index
3. story outline canon
4. timeline canon
5. relationship / major event docs
6. relevant act outlines
7. decision logs

### For World / System Document

必讀：

1. world rules
2. glossary
3. series bible
4. story outline canon
5. gameplay bible if mechanics are involved
6. relevant event examples
7. decision logs

## Step 3 — Sync Check（重要）

如果 target update involves canon-facing file，必須做 mini sync check：

| Claim | Existing Target Says | Latest Working Says | Canon Says | Decision Log Says | Action |
|---|---|---|---|---|---|

Action 只可用：

- KEEP
- UPDATE_FROM_CANON
- UPDATE_FROM_WORKING_CANDIDATE
- PROMOTE_READY_AFTER_SYNC
- AUTHOR_GATE
- REMOVE_AS_STALE
- MOVE_TO_DETAIL_DOC

如有大量 `UPDATE_FROM_WORKING_CANDIDATE`，應暫停 final write，轉交 `story-canon-sync-gate`。

## Step 4 — Backup Source Only If Needed

讀 backup 前必須說明：

- why needed
- what gap it fills
- whether canon already supersedes it
- whether it may be stale

---

# 5. Mandatory Coverage Ledger

正式寫文件前，必須先輸出 `SOURCE COVERAGE LEDGER`：

| File | Tier | Read Status | Used For | Risk | Notes |
|---|---|---|---|---|---|

Read Status 只可用：

- READ
- PARTIAL
- NOT READ
- NOT APPLICABLE

Risk 只可用：

- NONE
- STALE RISK
- CONFLICT RISK
- GAP RISK
- BACKUP ONLY
- AUTHOR GATE REQUIRED

如果任何 Critical file = NOT READ / PARTIAL，禁止直接 final document，只可輸出：

- partial document
- gap list
- patch proposal
- next read plan
- blocked questions

---

# 6. Evidence-First Extraction Rules

文件合成前要先抽 evidence rows，不可直接作文。

每個核心 claim / event / system law / character truth / ending meaning 至少要有：

| Claim ID | Claim | Source File | Section / Anchor | Confidence | Used In Target Section |
|---|---|---|---|---|---|

Confidence：

- HIGH = canon / decision log 明確支持
- MED = active working doc 支持但仍可能調整
- LOW = backup / inference / unresolved
- BLOCKED = 需要作者決定

LOW / BLOCKED 不可寫成 final truth。

---

# 7. Document Synthesis Gate

只有以下條件全部成立，先可以輸出正式文件：

1. Target document function 已明確
2. State files 已讀或明確不適用
3. Decision logs 已讀
4. Critical canon files 已讀
5. Latest working files 已讀或已判定不適用
6. Existing target doc 已審計
7. Timeline / outline / character / world system 已按目標文件需要對齊
8. Question Queue 無 blocking unresolved items，或已標記 safe-to-continue
9. Backup draft 未污染 final truth
10. 每個 core claim 有 evidence basis
11. target doc 沒有越權取代更詳細文件
12. 若需要 canon writeback，已標記是否需要 `story-canon-sync-gate`

如未通過，輸出格式必須係：

`DOCUMENT GENERATION BLOCKED / PARTIAL ONLY`

並列出：

- missing files
- blocking questions
- unsafe assumptions
- safe partial scope
- next action

---

# 8. Output Requirements by Mode

## 8.1 For Updating `00_Story_Brief.md`

輸出必須包含：

1. TASK INTERPRETATION
2. TARGET DOCUMENT FUNCTION
3. SOURCE COVERAGE LEDGER
4. EXISTING BRIEF AUDIT
5. CLAIM SYNC TABLE
6. KEEP / UPDATE / REMOVE / MOVE TABLE
7. BLOCKERS / AUTHOR GATES
8. PROPOSED NEW STRUCTURE
9. PATCHED OR FULL REBUILT `00_Story_Brief.md`
10. CHANGELOG
11. DOWNSTREAM FILES TO CHECK

### `00_Story_Brief.md` Recommended Structure

```markdown
# 魔法少女晴香物語 — Story Brief

> 本文件為全劇透內部 brief，供開發者 / AI 快速建立全局認知。
> 詳細規格請見：Series Bible / Story Outline / Character Index / Gameplay Bible / World Rules。

## 1. 這是什麼故事？
## 2. 為何創作這個故事？
## 3. 主題與創作承諾
## 4. 世界觀速覽
## 5. Alpha 線與 Beta 線
## 6. 晴香的原罪
## 7. 魔法少女與代價
## 8. 核心世界法則
## 9. 主要角色速覽
## 10. 核心人物關係
## 11. 四幕故事摘要
## 12. 結局的黑暗治癒解讀
## 13. 作為遊戲如何承載
## 14. 故事時間線
## 15. 附錄：情緒世界系統
## 16. Known Risks / Open Questions
```

## 8.2 For Full Story Outline

輸出必須包含：

1. TASK INTERPRETATION
2. RECOVERED PROJECT STATE
3. SOURCE COVERAGE LEDGER
4. BLOCKERS / DEFERRED QUESTIONS
5. CANON BASELINE SUMMARY
6. FOUR-ACT STRUCTURE OVERVIEW
7. ACT I OUTLINE
8. ACT II OUTLINE
9. ACT III OUTLINE
10. ACT IV OUTLINE / ENDGAME FUNCTION
11. CROSS-ACT SETUP / PAYOFF MAP
12. CHARACTER ARC MATRIX
13. INFORMATION REVEAL MAP
14. THEME / CONFLICT EXPRESSION MAP
15. COST SIGNAL CHECK
16. RISK / GAP REGISTER
17. WHAT WAS EXCLUDED AND WHY
18. FILE UPDATE PLAN

## 8.3 For Auditing Existing Document

輸出必須包含：

1. AUDIT TARGET
2. TARGET DOCUMENT FUNCTION
3. SOURCE HIERARCHY USED
4. MAJOR CANON VIOLATIONS
5. STALE BACKUP CONTAMINATION
6. STRUCTURE / FUNCTION MISUSE
7. EVENT ORDER ERRORS
8. CHARACTER ARC ERRORS
9. REVEAL TIMING ERRORS
10. UNSUPPORTED INVENTIONS
11. KEEP / REWRITE / DISCARD TABLE
12. SAFE REBUILD PLAN

---

# 9. Hard Rules

- 未完成 source coverage ledger，不准寫 final document。
- 未讀 decision logs，不准裁決衝突。
- 未讀 timeline，不准排事件次序。
- 未讀 relevant character sheets，不准總結角色終局。
- 未讀 existing target doc，不准更新該 doc。
- 不准將 target doc 自己當作唯一真相來源。
- 不准將 `three_acts_story_outline_v1.md` 當正式基礎。
- 不准將「三幕」當真結構；真結構必須係四幕。
- 不准 invent missing bridges。
- 不准用華麗文筆掩蓋 source gap。
- 不准將 unresolved / deferred question 靜默刪除。
- 不准令 `00_Story_Brief.md` 膨脹成 full outline / full bible。
- 不准因為 working file 新就自動覆蓋 canon。
- 不准因為 canon 叫 canon 就自動壓低最新 working truth。
- canon-facing update 如涉及 claim promotion，必須先做 sync check。

---

# 10. Safe First Response Template

當作者要求「更新 00_Story_Brief / 用所有文件生成某文件」時，第一段應該係：

> 我可以做，但唔會即刻直接改 final 文件。我要先跑 Story Document Synthesis Gate：確認 target document 功能、恢復 state、讀 decision logs、建立 source coverage ledger、審計現有文件、抽 claim sync table，再判斷係可以 full rewrite、patch proposal，定只可以 partial / blocked report。

然後開始輸出：

1. TASK INTERPRETATION
2. TARGET DOCUMENT FUNCTION
3. FILES I MUST READ FIRST
4. WHY THIS IS GATED
5. EXPECTED OUTPUT
6. STARTING SOURCE COVERAGE LEDGER

---

# 11. Recommended Invocation Examples

```text
Use story-document-synthesis-gate to update 00_Story_Brief.md from the latest canon and working files. Treat 00_Story_Brief as a canon-facing spoiler brief, not a full outline. First audit source coverage and claim sync. Do not write final content if active working files contradict canon without decision-log support.
```

```text
Use story-document-synthesis-gate to rebuild canon/05_story_outline_canon.md from current canon and working act outlines. Preserve true four-act structure. Do not use three_acts_story_outline_v1.md as truth.
```

```text
Use story-document-synthesis-gate to audit the existing 00_Story_Brief.md. Identify stale claims, sections that are too detailed for a brief, missing latest working truths, and changes that require story-canon-sync-gate before writeback.
```

```text
Use story-document-synthesis-gate in CHARACTER_DOC mode to update Haruka's character summary from canon, timeline, story outline, and latest working files. Output evidence ledger and patch proposal first.
```
