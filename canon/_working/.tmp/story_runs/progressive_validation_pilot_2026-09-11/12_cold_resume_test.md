# 12 — Cold Resume Test

**Prompt simulated:** "繼續頭先 Act I。"
**Constraint honoured:** recovery uses only durable state files + temp run files — no reliance on this conversation's memory.

## What a fresh session would read (in order, per `CLAUDE.md`)
1. `PROJECT_STATUS.md` → Round 185 entry: retrofit done, next step = "Act I 進入 Beat Sheet 層... 由 Beat 0 起". **No mention of any Beat 0 draft existing** — because the pilot correctly never wrote to this file (hard rule: don't canonize pilot output).
2. `NEXT_ACTION.md` → same Round 185 entry, same instruction, plus the traceability-pass addendum. Still no Beat 0 draft reference.
3. `SESSION_LEDGER.md` → Round 185 entry lists the retrofit + traceability pass. No pilot round logged (correct — pilot is a validation task, not a story round; logging it as a "round" would blur test vs real work).
4. `canon/_working/.tmp/story_runs/` directory scan → finds two run folders: `progressive_preproduction_2026-09-10/` (the real retrofit run) and `progressive_validation_pilot_2026-09-11/` (this pilot).

## Recovered state
| Field | Recovered value | Source |
|---|---|---|
| Target | Act I progressive authoring | `NEXT_ACTION.md` |
| Current layer | Beat Sheet (highest incomplete layer) | `NEXT_ACTION.md` + `progressive_preproduction_2026-09-10/12_act_i_readiness_dry_run.md` |
| Parent artifact | `ACT_I_OUTLINE.md` v1.21 [APPROVED] | outline file itself |
| Current "child" in the REAL workflow | **None yet** — no Beat Sheet round has been run for real | `ACT_I_BEAT_SHEET.md` still shows only `[SCENE REFERENCE]` E-01/E-02 |
| Current pilot child (found, but flagged) | Beat 0 candidate exists in `progressive_validation_pilot_2026-09-11/09_pilot_beat_sheet_candidate.md`, explicitly marked `CANDIDATE (TEST-ONLY, TEMP)` | pilot run folder |
| Decisions already made (real) | None new for Act I Beat Sheet (all real decisions are at Outline layer, already approved) | outline |
| Decisions marked TEST ONLY | The "亮 vs 不安 = AI_PROPOSED_CANDIDATE, no author ask needed" call in `06`, and the Beat 0 content itself in `09` — both explicitly stamped test-only in their own files | `06`, `08`, `09` |
| Open dependencies | AG-5 (操 father-shadow Act I seed form) — still open, not touched by this pilot | prior `05_author_gate_conflicts.md` |
| Next safe action | Either (a) treat the pilot's Beat 0 candidate as a validated starting point and formally begin the real Beat Sheet round with it (author confirms), or (b) start the real round fresh and independently re-derive Beat 0 (would very likely reproduce the same candidate, since it's a direct outline synthesis) | derived |

## Critical distinction test
**Did the resume correctly avoid treating the pilot's Beat 0 draft as real approved progress?**
**YES.** Because pilot artifacts were never written to `PROJECT_STATUS.md` / `NEXT_ACTION.md` / `SESSION_LEDGER.md` / `ACT_I_BEAT_SHEET.md` (per this task's hard rules), a cold resume reading only durable state correctly reports "Beat Sheet work has not started for real" — and only finds the pilot draft as a *separate, clearly-labeled* artifact when it also scans the `.tmp/story_runs/` directory, at which point every file in that pilot folder self-identifies as `TEST-ONLY` / `CANDIDATE` / "not real author approval." No ambiguity was observed between test and real state.

## Verdict
**PASS.** Cold resume recovers correctly and does not confuse the synthetic pilot work with canon-track progress.
