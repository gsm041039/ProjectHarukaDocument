# 14 — Real Cold Resume Test

**Prompt simulated:** "繼續頭先 Act I。"
**Constraint:** durable/temp files only, no conversational memory.

## What a fresh session reads
1. `PROJECT_STATUS.md` / `NEXT_ACTION.md` (Round 185 entries) — retrofit + traceability pass recorded; next step = "Act I 進入 Beat Sheet 層，由 Beat 0 起". **No mention of Beat 0/0c/0d/1 candidates** — correctly absent, because Part B is a PILOT run and, per the newly-patched Run Mode rule, PILOT output must not mutate these files. Verified: `git status` for this task touches only skill files + `consequence-driven-progression.md` + `BEAT_SHEET_SOURCE_MANIFEST.md` (workflow-rule patches, in scope for Part A) — zero touches to `PROJECT_STATUS.md`, `NEXT_ACTION.md`, `SESSION_LEDGER.md`, `QUESTION_QUEUE.md`, `ACT_I_OUTLINE.md`, `ACT_I_BEAT_SHEET.md`, `CANON_DECISION_LOG.md`.
2. `canon/_working/.tmp/story_runs/` directory scan finds three run folders: `progressive_preproduction_2026-09-10/` (real retrofit), `progressive_validation_pilot_2026-09-11/` (single-Beat pilot), `progressive_multibeat_pilot_2026-09-11/` (this multi-beat pilot).

## Recovered state
| Field | Recovered value |
|---|---|
| This was PILOT | YES — every file in both pilot folders self-labels `PILOT`/`TEST-ONLY`/`CANDIDATE`; `03_execution_trace.md` in this folder explicitly declares `Run Mode: PILOT` at the top. |
| Which Beats were tested | Beat 0, Beat 0c, Beat 0d, Beat 1 (E-01) — per `06`–`09` in this folder. |
| None are author-approved | Confirmed — no file in either pilot folder carries `[APPROVED — date]`; all use `CANDIDATE` / `AI_PROPOSED_CANDIDATE` / `DRAFT — pilot`. |
| Last real production state | Beat Sheet work for Act I has **not started for real** — `ACT_I_BEAT_SHEET.md` still contains only the original E-01/E-02 `[SCENE REFERENCE]` material from before either pilot. |
| Which candidate decision was test-only | The two resolved micro-choices (0c's arm-twitch-over-eye-glow; the tone-curve framing from the single-Beat pilot) are both stamped `AUTO_RESOLVABLE`/`AI_PROPOSED_CANDIDATE` inside TEST-ONLY files — neither has been promoted to any durable file. |
| Next safe production action | Author decides whether to **promote** the pilot's Beat 0→0c→0d→1 candidates into a real `ACT_I_BEAT_SHEET.md` PRODUCTION round (they were derived correctly and would very likely reproduce identically), or have the real round re-derive them independently. Either way, the *first* real production action is a `story-orchestrator` Progressive Mode call with `Run Mode: PRODUCTION` explicitly declared. |

## Critical distinction test
**Did resume avoid treating any pilot candidate as real approved progress?** YES. Same mechanism as the single-Beat pilot's resume test: durable state was never touched, so a cold read reports "no real Beat Sheet progress yet," and only a directory-level scan of `.tmp/story_runs/` additionally surfaces the two clearly-labeled pilot folders — never as an alternative source of "current truth."

## Verdict
**PASS.**
