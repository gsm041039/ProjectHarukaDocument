# 00 — Target and Constraints

## Author's target (from 00_START_HERE.md)
> 作者可以講「由 Act I 開始，由粗到幼一步一步做」，AI 就會自動讀現有資料、判斷去到邊一層、補齊 relevant context、處理舊資料／衝突，只喺真正需要導演決策時先問作者，然後逐層 Act → Sequence → Beat → Scene → Dialogue。

READY test (must pass with a plain author operation):
- 唔由零重做已有 Act I
- 唔直接寫對白
- 唔叫作者重新提供 repo 已有資料
- 自己搵 relevant current evidence
- 先解 stale / conflict
- 自己補 routine story design
- 只問真正 high-impact 導演問題，白話問法
- 每次答完可 resume
- 由粗到幼逐層推進

## Non-negotiable constraints
- 不改現有 folder structure
- 不重做已有 Canon / Fact Map / story_control 系統
- 不為「架構靚」新建 parallel system
- active owner file stale → 優先原檔 reconcile / patch
- backup/archive = historical only, 唔係 current truth
- 每個 Stage 有 working record + acceptance gate；未過上一 Stage 唔跑下一 Stage
- 新永久 skill/file 必須證明現有 owner 無法承擔
- Codex 主要改 `.agents/`；`.claude/` 只作參考（除非明確批准）
- 暫存資料用 `canon/_working/.tmp/story_runs/` convention

## Known state at run start
- Story workflow at Round 184. Main blocker = Act IV Outline design (unchanged since ~Round 160).
- Pipeline law (CLAUDE.md): Outline → Beat Sheet（全四幕批核）→ Scene/Script. No layer-skipping.
- Existing act artifacts:
  - ACT_I_OUTLINE v1.8, ACT_II_OUTLINE, ACT_III_OUTLINE v0.6 [APPROVED — 暫定批核]
  - ACT_IV_OUTLINE: **missing**
  - ACT_I_BEAT_SHEET: exists but self-labels E-01/E-02 as `[SCENE REFERENCE]`, not true Beat Sheet
  - ACT_II/III/IV_BEAT_SHEET: **missing**
- Per pipeline law: since not all four Act Beat Sheets are approved, **no Scene layer work is legal yet** — but scene-level runs already exist (`.tmp/story_runs/haruka_first_transform_school*`). See 02_workflow_contradictions.md.

## What this pack must NOT become
- A new "NarrativeProduction/" tree
- 10 new skills
- A second control-file system parallel to `story_construction/`
- A reason to start Act I before gates pass
