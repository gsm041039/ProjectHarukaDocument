# 准讀嘅 canon 來源（Grep／Read 只准喺以下路徑）

repo 根目錄：D:/Projects/ProjectHarukaDocument

## 設定來源（權威度由高至低）
- `00_Story_Brief.html`（最準設定源）
- `canon/00_series_bible.md`、`canon/01_world_rules_and_costs.md`、`canon/02_glossary.md`、`canon/05_story_outline_canon.md`、`canon/08_narrative_design_bible.md`、`canon/10_gameplay_bible.md`、`canon/11_directing_playbook.md`
- 角色檔：`canon/03_characters/*.md`（尤其 haruka.md、miyako.md）
- 決定記錄：`canon/_working/CANON_DECISION_LOG.md`（可用 `python .claude/story_system/lookup_id.py CDL-xxx` 查全文；同號可能有多條）
- Act I：`canon/_working/story_construction/ACT_I_OUTLINE.md`、`ACT_I_BEAT_SHEET.md`、`HARD_CONSTRAINTS_TABLE.md`、`IDEOLOGY_THEME_STANCE_MATRIX.md`、`THEME_CONFLICT_EXPRESSION_TABLE.md`、`INDIVIDUAL_CHARACTER_GROWTH_TRACKER.md`
- demo 範圍：`canon/_working/demo_pilot/SCOPE_AND_CUT_LIST.md`
- 聲線／表演材料（檢查下游依賴）：`canon/_working/character-voice-workshops/*.md`、`canon/_working/character-voice-bibles/*.md`、`canon/_working/character-performance-bibles/*.md`
- 規則：`.claude/story_system/consequence-driven-progression.md`、`character-ideology-gate.md`、`DIRECTING_LANGUAGE_V0.5_BASELINE_DRAFT.md`（喺 canon/_working/）
- 角度定義：`.claude/story_system/angle-system.md`（**階段 A 完成並寫檔之後先讀**）

## 禁讀（讀咗要喺 out/00_exposure_declaration.md 申報）
- `canon/_working/demo_pilot/beat_rederive_v4/`（除咗本包）、`canon/_working/demo_pilot/DERIVATION_LEDGER.md`、`DEMO_PILOT_TRACKER.md`、`blind_audit/`、`blind_audit_v4/`、`audit_debug/`
- `canon/_working/SESSION_LEDGER.md`、`PROJECT_STATUS.md`、`NEXT_ACTION.md`、`QUESTION_QUEUE.md`、`TASK_BOARD.md`、`LAYER_MANIFEST.md`、`tasks/`、`skill_improvement_notes.md`、`story_construction/QUESTION_MATRIX.md`
- `.claude/skills/`、`tools/`、任何名含 `BEAT_PATROL`、`FULL_ANALYSIS`、`GAP_SCAN` 嘅檔
- Grep 只准喺准讀路徑入面；唔好無範圍咁搜全 repo。
