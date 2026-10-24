# TASK_BOARD

並行 task 清單（durable state file #6，見 `.claude/story_system/state-files.md`）。Haruka Workbench 嘅 Task board／今日面板直接讀呢個表。
規則：開 task、轉狀態、完成 task 嗰一刻就更新；狀態只用 `進行中`／`等作者`／`暫停`／`完成`。完成超過 14 日嘅行可以搬去 `## Archive`。
「屬於」＝呢件工作喺工作樹邊度（例：`Demo 試點・場景設計`、`Act I`），由 `story-work-flow` 填、作者批；步驟計劃喺 `canon/_working/tasks/<ID>.md`。
NEXT_ACTION 仍然係「唯一單一步」；呢度係「而家有幾多條線同時開緊」。

## Tasks

| ID | Task | 狀態 | Session | 相關文件 | 等作者？ | 更新日期 | 屬於 |
|---|---|---|---|---|---|---|---|
| T-001 | Demo Beat 層：v4.1 待 Director review；V5 逐 beat 深度設計（BATCH 1–6） | 等作者 | — | `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V4_1.md`、`canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V5_BATCH6_M2toM5.md` | YES | 2026-10-15 | Demo 試點・Beat 層 |
| T-002 | 紫音 voice discovery workshop＋表演文件（demo 新角色；Stage 5；微場景齊，auditor 已跑，夠用版達成暫定） | 完成 | — | `canon/_working/character-voice-workshops/shion_voice_discovery.md`、`canon/_working/character-performance-bibles/shion.md` | NO | 2026-10-17 | Demo 試點・人物底 |
| T-003 | Haruka Workbench（網頁工作環境）建立 | 完成 | — | `tools/workbench/server.mjs`、`.claude/story_system/web-ui-protocol.md` | NO | 2026-10-15 | 工具 |
| T-004 | Workbench「今日」頁加咩資訊（傾方向，唔改 code） | 進行中 | — | `tools/workbench/public/views/today.js` | YES | 2026-10-15 | 工具 |
| T-005 | 操×無名男孩「自然感」方向（已揀，DRAFT）＋非講出嚟載體人物層討論（DRAFT；已拉返正題：警戒對比自然＋世界日常溫柔；速寫簿撞位降支線）；待補男孩自身細節 | 等作者 | — | `canon/03_characters/ayakomoji_misao.md`、`canon/_working/story_construction/MISAO_NAMELESS_BOY_CARRIERS_DRAFT.md`、`canon/_working/QUESTION_QUEUE.md` | YES | 2026-10-18 | Act I |
| T-006 | 隊員對晴香創世者身份嘅反應（美夜子＋紫音早知、價值觀衝突；DRAFT，未入 canon） | 等作者 | — | `canon/_working/story_construction/TEAMMATE_FORGIVENESS_CREATOR_DRAFT.md` | YES | 2026-10-18 | 全作（跨幕） |
| T-007 | 新 setting：夕變貓（朔養住，「異世界行者」，有 Alpha 記憶，朔想利用佢搵美夜子真相；朔前期似壞人）創作草稿；已揀同一個體＋壓抑讀數＋揾朔做外面嘅手，「夕代食祝福」只作解讀；待傾朔自己利益底線 | 等作者 | — | `canon/_working/story_construction/YU_CAT_SAKU_ISEKAI_WALKER_DRAFT.md`、`canon/03_characters/yu.md`、`canon/03_characters/saku.md` | YES | 2026-10-18 | 全作・世界觀 |
| T-009 | 聲線重做：操／美夜子／晴香按新 workflow（證據重分級、缺口微場景、自稱表、auditor）；①–④ 完成，等作者揀句 | 等作者 | — | `canon/_working/tasks/T-009.md`、`canon/_working/demo_pilot/VOICE_EVIDENCE_REGRADE_T009.md`、`canon/_working/demo_pilot/VOICE_EVIDENCE_REVIEW.md` | YES | 2026-10-19 | Demo 試點・人物底 |
| T-008 | Workbench 作者回饋改善（session 消失、思考深度、網址上一頁／下一頁、討論總結同逐項處理、用量、Enter 送出、作者問法紀錄、流程頁、角度矩陣分組同角度詳情、對話「做緊」條、傾夠落檔）；已加：工作樹、AI 逐步引導（story-work-flow）、輕鬆步用平啲 model；下一步：舊工作補掛（等作者批）、真對話試一次；未做：手機版、真相等級標示、Brief 同新決定邊個優先 | 進行中 | 0f8dcaed | `tools/workbench/`、`.claude/story_system/web-ui-protocol.md`、`.claude/skills/author-lens/SKILL.md` | YES | 2026-10-19 | 工具 |
| T-010 | Workbench 加入 Codex provider：Claude 保持預設，Codex 支援聊天、續談及背景 AI 工作流 | 完成 | — | `canon/_working/tasks/T-010.md`、`canon/_working/workbench/CODEX_PROVIDER_DESIGN.md`、`tools/workbench/providers/` | NO | 2026-10-22 | 工具 |

## Archive

| ID | Task | 狀態 | Session | 相關文件 | 等作者？ | 更新日期 | 屬於 |
|---|---|---|---|---|---|---|---|
