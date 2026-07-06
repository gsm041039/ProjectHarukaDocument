# Story Workflow Operating Memory

呢個 repo 使用 durable story workflow state。
任何新 session、context 壓縮後、或者換電腦之後，都**不得**靠記憶直接續做。

## First read order on every fresh session
1. `canon/_working/PROJECT_STATUS.md`
2. `canon/_working/NEXT_ACTION.md`
3. `canon/_working/QUESTION_QUEUE.md`
4. `canon/_working/SESSION_LEDGER.md`
5. `canon/_working/CANON_DECISION_LOG.md`（如存在）
6. `canon/_working/READ_MANIFEST.md`（如存在）
7. `canon/_working/story_construction/QUESTION_MATRIX.md`（如當前 task 相關）

## Always true rules
- 唔可以將 inference 當 confirmed canon
- 唔可以 silent resolve contradiction / dedupe / canonization
- 唔可以跳過 author gate
- 唔可以未做 source check 就直接問 reconstruction-level 問題
- 唔可以令 deferred question 消失
- 唔可以未更新 state files 就宣稱本輪完成

## ⚠️ 故事寫作 Pipeline（全局不可違反）

```
Outline（幕結構 + beat 功能 + 大方向）
        ↓ [作者批核]
Beat Sheet（每個 beat 的大方向決定）    ← 全四幕全部完成並批核
        ↓ [全四幕全部批核]
Scene / Script（執行細節：對白/鏡頭/timing）
```

**三層分工：**
- **Outline 層：** Act結構、beat功能、AKS進程、埋位設計、大方向確認。唔包含具體對白或執行細節。
- **Beat Sheet 層：** 每beat發生咩、情感弧、關鍵設計決定（A/B/C）、CDL錨點。唔包含具體對白/鏡頭/timing。
- **Scene/Script 層：** 具體對白、鏡頭設計、動作細節。**全四幕 Beat Sheet 完成後才開始。**

**硬性規則：**
- 唔可以跳層——Outline未批核不做Beat Sheet；Beat Sheet未全部完成不做Scene
- AI 必須主動判斷當前層級，唔可以「是但」跳去下一層
- 出現「具體對白wording / 鏡頭角度 / Xsec timing」= 已跳入 Scene 層，須退回
- 唯一例外：作者明確說「我想試寫草稿看感覺」→ 標記 `[DRAFT ONLY — NOT CANON]`，不進入任何 canon 文件

## Primary durable files
- `PROJECT_STATUS.md` = 主 resume anchor / current truth snapshot
- `SESSION_LEDGER.md` = 本輪與歷史 phase 記錄
- `NEXT_ACTION.md` = 唯一單一步安全下一步
- `QUESTION_QUEUE.md` = blocked / deferred / resolved 問題來源
- `QUESTION_MATRIX.md` = 多角度拆題表，可追溯問題來源

## Mode rules
- Story ideation / outline / arc / reveal / theme / section development -> Story Room / Question Engine
- Source inventory / register / sectioning / audit -> Canon Pipeline
- Candidate / duplicate / conflict / ownership / author gate -> Atom Gate
- Confirmed decisions only -> Writeback
- Fresh session / interruption / new machine -> Resume first

## Update discipline
每輪結束前，至少更新：
- `PROJECT_STATUS.md`
- `SESSION_LEDGER.md`
- `NEXT_ACTION.md`
- `QUESTION_QUEUE.md`（如有 open / deferred / resolved 問題變動）
- `QUESTION_MATRIX.md`（如本輪建立或更新 angle rows）

## User interaction style
- **唔用編號 Q1/Q2 + A/B/C 選項式問答格式**（作者明確表示難以閱讀，2026-07-06 確認）——改用自由form：直接講清楚呢個位有咩要決定、點解要決定、有咩考慮方向，容許作者自由回應
- 每輪只問真正需要決定嘅嘢，唔堆砌問題數量
- 每條問題背後必須有 12角度分析支撐（RELEVANT/NOT_RELEVANT），但唔需要將呢個分析攤晒出嚟畀作者睇，除非佢要求
- **對話入面唔用內部追蹤編號**（QQ-xxx、CDL-xxx、E-xx、M0xx 等）——呢啲編號只可以喺寫入 state files（QUESTION_QUEUE.md / CANON_DECISION_LOG.md 等）時使用，同作者對話時一律用白話直接講返件事本身係咩，唔可以假設作者記得個編號代表咩（2026-07-06 確認，比之前「白話文描述問題」規則更嚴格：唔止解釋，係根本唔好提編號）
- 唔得問 filler 問題

@.claude/story_system/angle-system.md
@.claude/story_system/state-files.md
@.claude/story_system/character-ideology-gate.md
@.claude/story_system/consequence-driven-progression.md
