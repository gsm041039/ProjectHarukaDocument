# TASK_BOARD

並行 task 清單（durable state file #6，見 `.claude/story_system/state-files.md`）。Haruka Workbench 嘅 Task board／今日面板直接讀呢個表。
規則：開 task、轉狀態、完成 task 嗰一刻就更新；狀態只用 `進行中`／`等作者`／`暫停`／`完成`。完成超過 14 日嘅行可以搬去 `## Archive`。
NEXT_ACTION 仍然係「唯一單一步」；呢度係「而家有幾多條線同時開緊」。

## Tasks

| ID | Task | 狀態 | Session | 相關文件 | 等作者？ | 更新日期 |
|---|---|---|---|---|---|---|
| T-001 | Demo Beat 層：v4.1 待 Director review；V5 逐 beat 深度設計（BATCH 1–6） | 等作者 | — | `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V4_1.md`、`canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V5_BATCH6_M2toM5.md` | YES | 2026-10-15 |
| T-002 | 紫音 voice discovery workshop＋表演文件（demo 新角色；Stage 5） | 等作者 | — | `canon/_working/character-voice-workshops/shion_voice_discovery.md`、`canon/_working/character-performance-bibles/shion.md` | YES | 2026-10-16 |
| T-003 | Haruka Workbench（網頁工作環境）建立 | 完成 | — | `tools/workbench/server.mjs`、`.claude/story_system/web-ui-protocol.md` | NO | 2026-10-15 |
| T-004 | Workbench「今日」頁加咩資訊（傾方向，唔改 code） | 進行中 | — | `tools/workbench/public/views/today.js` | YES | 2026-10-15 |

## Archive

| ID | Task | 狀態 | Session | 相關文件 | 等作者？ | 更新日期 |
|---|---|---|---|---|---|---|
