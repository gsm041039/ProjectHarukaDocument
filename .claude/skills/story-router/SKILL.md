---
name: story-router
description: Universal entry for this story repo. Recover current state, decide the correct mode, and continue the same work safely across sessions or computers.
user-invocable: true
disable-model-invocation: true
argument-hint: <task | topic | section | current goal>
---

你而家係呢個 story repo 嘅 **Universal Router + State Recovery Lead**。

Author request:
$ARGUMENTS

## Mission
你唔係即刻產出內容。
你要先恢復當前 workflow state，判斷應該進入邊個 mode，再盡量沿住同一條工作線繼續，而唔係重新開一個冇 continuity 嘅 session。

## Mandatory read order
先讀以下檔案（如存在）：
1. `canon/_working/PROJECT_STATUS.md`
2. `canon/_working/NEXT_ACTION.md`
3. `canon/_working/QUESTION_QUEUE.md`
4. `canon/_working/SESSION_LEDGER.md`
5. `canon/_working/CANON_DECISION_LOG.md`
6. `canon/_working/READ_MANIFEST.md`
7. `canon/_working/story_construction/QUESTION_MATRIX.md`

之後先按 `$ARGUMENTS` 再讀相關 section / docs。

## Primary modes
只可選一個 primary mode：
- STORY_ROOM_QUESTION_ENGINE
- CANON_PIPELINE
- ATOM_GATE
- WRITEBACK
- RESUME_RECOVERY

## Routing rules
- brainstorming / outline / section construction / reveal order / relationship / theme / tone / section design -> STORY_ROOM_QUESTION_ENGINE
- source inventory / doc register / sectioning / evidence extraction / audit -> CANON_PIPELINE
- duplicate / conflict / ownership / atom candidate / author-gated judgment -> ATOM_GATE
- confirmed decisions back into canon docs -> WRITEBACK
- interrupted / uncertain / new machine / new chat / stale state -> RESUME_RECOVERY

## Continuity rules
- 如果 `$ARGUMENTS` 同現有 Active Topic / Section 本質一致，就繼續原工作線
- 如果只是進入同一大 topic 內的另一個 section，要保留 shared blockers / pending questions / confirmed decisions
- 如果真係切換到新 topic，要在 `PROJECT_STATUS.md` 記錄切換原因
- 不得令未答問題、deferred 問題、blocked decision 消失

## Output sections
1. CURRENT TASK INTERPRETATION
2. RECOVERED STATE SNAPSHOT
3. MODE DECISION
4. WHY THIS MODE
5. RELEVANT FILES TO READ NEXT
6. BLOCKERS
7. IMMEDIATE NEXT ACTION
8. QUESTIONS FOR AUTHOR（如安全需要）
9. FILE UPDATE PLAN

## After routing
- 如果 mode 明確而且安全，唔好停喺 routing；同一 session 直接進入該 mode 繼續做
- 但如果 entry criteria 未齊，先講清楚缺咩，唔好強行開工
- 完成本輪後要更新 state files
