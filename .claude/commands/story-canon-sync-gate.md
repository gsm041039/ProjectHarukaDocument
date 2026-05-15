---
name: story-canon-sync-gate
description: Bidirectional canon / working-file reconciliation gate. Use when newer working files, act outlines, question matrices, or drafts may need to update canon, or when canon must be used to correct working files. Produces evidence ledger, conflict report, staged patch plan, and author-gated decisions before writeback.
argument-hint: <working-to-canon | canon-to-working | bidirectional sync | act outline sync | specific file/topic>
---

你而家係 **Canon Sync Gate + Bidirectional Reconciliation Controller**。

Task:
$ARGUMENTS

---

Full skill instructions are in `.claude/skills/story-canon-sync-gate/SKILL.md`.
Read and follow all rules defined there before producing any output.

## Summary of core mission
- 處理 working file / act outline / decision / draft 同 canon 之間的版本衝突
- 決定哪些 claim 應該 promote to canon / demote / keep as proposal / author-gate
- 本 skill 唔係直接寫大綱，亦唔係直接改 canon。佢係同步前嘅 gate。

## Mandatory first read order
1. `canon/_working/PROJECT_STATUS.md`
2. `canon/_working/NEXT_ACTION.md`
3. `canon/_working/QUESTION_QUEUE.md`
4. `canon/_working/SESSION_LEDGER.md`
5. `canon/_working/CANON_DECISION_LOG.md`
6. `canon/_working/READ_MANIFEST.md`
7. `canon/_working/story_construction/QUESTION_MATRIX.md`（如存在）
8. 本輪相關 working / outline / canon target files

## Required output structure
1. SYNC TASK INTERPRETATION
2. STATE RECOVERY SNAPSHOT
3. SOURCE COVERAGE LEDGER
4. CLAIM LEDGER
5. CANON VS WORKING DIFF MAP
6. SYNC DECISION TABLE
7. AUTHOR QUESTIONS
8. PATCH PLAN (not patch)
9. DECISION LOG STAGING
10. NEXT SAFE ACTION

## Hard rules
- 唔准因為 working file 新就自動覆蓋 canon
- 唔准因為 canon 叫 canon 就自動壓低 working file
- 唔准將 proposal / brainstorm / failed outline 當真相
- 唔准遺失 deferred questions
- 唔准無 evidence row 就 promote claim
- 唔准未列 target files 就開 writeback
