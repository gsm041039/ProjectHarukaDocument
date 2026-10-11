# Blind audit v4 — input package（SCOPED_INPUT_WITH_EXPOSURE_AUDIT，唔係硬隔離）
被審對象：`ARTIFACT_BEAT_LAYER_V4.md`（本資料夾）。入面「追溯」欄引用嘅 P／O／MP／§ 編號＝**宣稱上游，unverified**，你要自己去 canon 核。
Beat 組：G1＝N1–N4（夜＋天台）｜G2＝B1–B4（開戰→操到場）｜G3＝B5–B8（陷阱→戰後）｜G4＝M1–M5（基地）。

## 固定作者決定（唔好推翻、唔好重問）
- Demo range＝首戰當晚 → 翌日天台 → 街頭大戰（首次連結＋操入隊）→ 三人基地戲（紫音未入隊、唔出場）。
- 開場只交代「晴香首戰後好驚」，由晴香／美夜子對話帶出，冇前情回顧。
- 整體＝好暖＋少少不安（伏筆）；結尾暖，取代「勝利後靜默」。
- 操一隻牙真係跌，操知而收埋，晴香、美夜子都唔知。
- Run mode＝PILOT（試驗，唔 writeback canon）。

## 准讀
本資料夾兩個檔；canon 全部：`00_Story_Brief.html`、`canon/*.md`、`canon/03_characters/*`、`canon/_working/CANON_DECISION_LOG.md`、`canon/_working/CROSS_ACT_FORESHADOW_MANIFEST.md`、`canon/_working/story_construction/`（ACT_I/II/III_OUTLINE、ACT_I_BEAT_SHEET、HARD_CONSTRAINTS_TABLE、KNOWLEDGE_DEPENDENCY_MAP、INDIVIDUAL_CHARACTER_GROWTH_TRACKER、IDEOLOGY_THEME_STANCE_MATRIX、THEME_CONFLICT_EXPRESSION_TABLE、CONSIDERATIONS_REGISTER）；角度定義 `.claude/story_system/angle-system.md`；協議 `.claude/story_system/blind-angle-audit-protocol.md`。
## 禁讀（Grep 只准喺准讀路徑入面）
`canon/_working/demo_pilot/` 入面除本資料夾以外所有嘢（包括 beat_rederive_v4 其他檔、舊 blind_audit、DERIVATION_*、SOLUTION_SPACE*、CHALLENGE_*、PREMISE_AUDIT*、SRC_*）；PROJECT_STATUS／NEXT_ACTION／SESSION_LEDGER／QUESTION_QUEUE／QUESTION_MATRIX。接觸咗要喺輸出頂部申報（時間＋類型）。
## 輸出
寫自己個檔（本資料夾），逐段寫（唔好最後先一次過寫）。cell 用 JSON lines：`{"CELL_ID","ANGLE_ID","TARGET_ID"(G1..G4),"QUESTION","EVIDENCE"(檔案:行／引文),"COUNTERCHECK"(COUNTER:/SEARCHED:/NO_DIRECT_COUNTER:),"VERDICT"(FINDING/CLEAN_AFTER_ATTACK/NOT_APPLICABLE/NEEDS_AUTHOR/INSUFFICIENT_EVIDENCE/MERGED_TO),"SEVERITY"(BLOCKS_BEAT_LAYER/SHOULD_FIX/NOTE/null),"MERGED_TO","CONFIDENCE"}`。之後 FINDING 用人話寫（發生咩／點解／點改＋代價＋放棄咗咩），每角度尾答「冇呢個角度會漏咩」，最後「未列入角度嘅關注點」。中文（廣東話）。唔批核、唔代作者決定、唔改被審檔。
