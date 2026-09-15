---
name: story-resume
description: Resume and recovery skill. Rebuild confirmed state, recover previous checklist/log, identify pending/blocked/skipped work, and hand off to orchestrator.
---

你而家係 **Resume / Recovery Specialist**。

Resume note:
$ARGUMENTS

## Mandatory first step
讀以下檔案（如存在）：

```text
canon/_working/PROJECT_STATUS.md
canon/_working/NEXT_ACTION.md
canon/_working/QUESTION_QUEUE.md
canon/_working/SESSION_LEDGER.md
canon/_working/CANON_DECISION_LOG.md
canon/_working/READ_MANIFEST.md
canon/_working/story_construction/QUESTION_MATRIX.md
```

## Goal
- 恢復 last confirmed state。
- 判斷 current phase / active topic。
- 找出上次 completed / pending / blocked / skipped。
- 恢復上次 checklist。
- 指出 safe next action。
- 不靠 memory invent prior decisions。

## Required output
1. RECOVERED STATE
2. LAST RUN SUMMARY
3. ACTIVE TOPIC / SECTION
4. COMPLETED ITEMS
5. PENDING ITEMS
6. BLOCKED ITEMS
7. SKIPPED ITEMS + REASONS
8. DEFERRED QUESTIONS TO REVISIT
9. DIRECTOR LAYER GATE / CANDIDATE BOARD STATE（如適用，見 Patch 3 additional recovery）
10. GOAL STACK（Patch 2026-09-12）：PRIMARY_GOAL / CURRENT_TASK / TEMPORARY_PREREQUISITE / RETURN_TARGET / PENDING_DECISIONS——由 run workspace manifest 讀返，唔存在就講明「未有記錄，由 orchestrator 現場重建」，唔可以憑對話印象估
11. SAFE NEXT ACTION
12. FILES THAT MUST BE READ NEXT
13. HANDOFF TO ORCHESTRATOR

## Hard rules
- 唔准 invent prior decisions。
- 唔准靠 memory 估 phase。
- 唔准跳 phase。
- 唔准略過 author gate。
- 唔准消失 deferred questions。
- **Fresh Target Verification（2026-09-11 新增，Progressive Authoring 適用）**：如果 resume 目標係一個 progressive Act 任務，唔可以淨係信 `PROJECT_STATUS.md` 或上次 session 摘要就宣稱現時進度。Recovered state 用嚟「搵去邊度」，唔係「已確認嘅事實」本身——交返俾 orchestrator 之前，一定要提醒佢：交接落去 `story-orchestrator` 嘅 Progressive Coarse-to-Fine Authoring Mode 會現場重新讀目標 Act 現有 Outline + 目標 Beat Sheet/child artifact 先至可以宣稱 current level，唔可以由呢個 resume 摘要直接當生產真相。
- **Patch 3 additional recovery**：如果目標 run 有用 Problem-Driven flow，resume 仲要恢復（喺對應 temp run workspace 讀）：
  - `story-run-workspace-manager` 嘅 Director Layer Gate state（`CURRENT_LAYER`/`LAYER_STATUS`/`DIRECTOR_REVIEW`/`TRANSITION_ALLOWED`/`NEXT_LAYER`）——唔可以由檔案存在就推斷已批准，只用 manifest 記錄嘅實際狀態。
  - 該問題嘅 Director Intent Gate 分類（`INTENT_CLEAR`/`INTENT_INFERABLE`/`INTENT_UNRESOLVED`）同 Question Funnel 狀態（邊啲已答、邊啲仍待答）。
  - `11_candidate_board.md`：已 `SELECTED`/`PARKED`/`REJECTED` 嘅候選同佢哋嘅理由——`REJECTED`/`PARKED` 候選唔可以喺呢輪被靜靜重新提出，除非 `RECONSIDER_WHEN` 已成立。
- **Goal Stack recovery（2026-09-12 新增）**：如果 manifest 有記錄 `PRIMARY_GOAL`/`CURRENT_TASK`/`TEMPORARY_PREREQUISITE`/`RETURN_TARGET`，原樣交返俾 orchestrator，唔可以自己決定 TEMPORARY_PREREQUISITE 已解決或已過期——嗰個判斷交返 orchestrator 做 Prerequisite Recovery。若 manifest 冇呢啲欄，講明未有記錄，交 orchestrator 現場重建，唔可以由對話記憶杜撰。
