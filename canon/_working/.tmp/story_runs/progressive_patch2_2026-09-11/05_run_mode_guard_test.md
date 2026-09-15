# 05 — Pilot Write Guard: Tests 7–8

## Honest framing
This workflow is instruction-based (Markdown skill prompts followed by an LLM), not compiled code — there is no OS-level file permission system available to these skills. "Mechanical" in this context means: the block is now a **non-negotiable, first-checked entry criterion in the one skill that actually performs durable writes** (`story-writeback`), rather than a preference stated only in the upstream orchestrator that a future execution could forget to honor. This is a real structural improvement over Patch 1 (where the rule lived only in `story-orchestrator`'s own text), but it is still enforced by an instruction-following agent reading and obeying `story-writeback`'s entry-criteria list — it is not a filesystem ACL. This distinction is stated plainly rather than oversold.

## Test 7 — Mechanical Pilot Guard

**Setup:** `RUN_MODE = PILOT` declared (as this validation task requires).

**Attempted write target 1:** `NEXT_ACTION.md`
**Path evaluated:** any durable write request routes through `story-writeback`'s entry criteria (per the patched orchestrator: "任何實際 durable write 一律經 `story-writeback`"). Criterion #1 (new): `RUN_MODE = PRODUCTION` required. Current mode = `PILOT` → criterion fails immediately.
**Result:** `WRITE_BLOCKED_BY_RUN_MODE` ✅ (no write attempted or performed — this is a dry-run verification of the gate text against the declared mode, not an actual write-then-rollback).

**Attempted write target 2:** `canon/_working/.tmp/story_runs/progressive_patch2_2026-09-11/test.md`
**Path evaluated:** temp workspace files are explicitly out of `story-writeback`'s scope (`story-run-workspace-manager`: "Temp 文件唔係 canon，唔需 writeback approval"). No RUN_MODE check applies to temp files — they're always allowed regardless of mode.
**Result:** `ALLOWED` ✅ — confirmed by the fact that this very validation bundle's files (including this one) were written successfully while `RUN_MODE = PILOT`/`EXPERIMENT`-equivalent applies to this task's regression-testing context.

**No durable state was corrupted or actually written to test this** — verified by re-running `git status` after all Patch 2 work (see `08_regression_summary.md`): only the 5 declared skill files show as modified; no durable state file changed as a side effect of this test.

## Test 8 — Production Mode

**Setup:** `RUN_MODE = PRODUCTION` (hypothetical, not invoked for a real write in this task).

**Path evaluated:** `story-writeback`'s entry criteria list: criterion #1 (`RUN_MODE = PRODUCTION`) passes; the remaining pre-existing criteria still apply unchanged (author approval, clear target files, resolved blockers, CDL-recorded decisions, no hypothesis-as-canon). The gate does not fast-track anything else — it only stops refusing purely on run-mode grounds.

**Result:** `production durable write would proceed through the normal approval/writeback gate` ✅ — confirmed by inspecting the patched `story-writeback/SKILL.md` text: the new criterion is additive (one more line in an AND-list), not a replacement of the existing gate logic. No real story mutation was performed for this test, per task instruction.

## Verdict
**`PILOT_WRITE_GUARD = PASS`** (with the honest framing above — structural improvement confirmed at the text/logic level; this is an instruction-following system, not a filesystem permission system, and that limit is disclosed rather than hidden).
