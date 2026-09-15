# Project Haruka — Progressive Workflow Validation Bundle

**Purpose:** Let an external reviewer inspect whether the patched progressive story workflow (retrofitted 2026-09-10) actually behaves as intended, using real evidence from a small, isolated pilot — not a self-report.

**This is a validation pilot, not a real Act I authoring round.** Nothing in this bundle is canon. Nothing was written back to `ACT_I_OUTLINE.md`, `ACT_I_BEAT_SHEET.md`, or any `canon/*.md` file. No CDL was created. No skill file was modified during the pilot itself.

## Contents

### A. Exact active workflow snapshots — `active_workflow/`
Verbatim current copies (not the diffs — the actual full files) of `CLAUDE.md` and 10 skill `SKILL.md` files, 5 of which were patched by the retrofit (`story-orchestrator`, `story-router`, `story-room`, `story-dialogue-readiness-gate`, plus `CLAUDE.md` itself) and 6 reused as-is for reference (`story-run-workspace-manager`, `story-sequence-boundary-designer`, `story-scene-objective-architect`, `story-source-recovery-gate`, `story-canon-sync-gate`, `story-holistic-supervisor`).

### B. Actual git diffs (repo root, not this folder)
- `00_git_status.txt` — real `git status --short` + HEAD commit.
- `01_workflow_diff.patch` — real `git diff` of the 5 modified workflow files.
- `02_control_diff.patch` — real `git diff` of the story-control / Fact Map files touched during preproduction + traceability work.

### C. Prior preproduction evidence — `preproduction_evidence/`
Copies of the 7 key working records from the 2026-09-10 preproduction run (`08` routing design → `14` traceability closure).

### D. Real pilot evidence (repo root, not this folder)
`04` through `15` — the actual execution trace, the complete unedited user-facing response, the re-tested tone question, the question gate result, the (empty) synthetic-input log, the one Beat-Sheet-grain candidate produced, its traceability, its grain audit, a cold-resume test, a change-impact micro-test, an unflinching self-critique, and the source-evidence digest.

## How to read this if you only have 10 minutes
1. `05_pilot_turn1_user_facing_response.md` — what the author would actually have seen.
2. `06_question_necessity_audit.md` — proof that a previously-proposed author question was actually unnecessary, and why.
3. `14_workflow_self_critique.md` — the honest list of what's still weak, with concrete fixes not yet applied.
4. `09_pilot_beat_sheet_candidate.md` — the one artifact actually produced.

## What this bundle deliberately does NOT contain
- Any change to real Act I content.
- Any simulated author approval presented as real.
- Any workflow-skill fix (those are proposed in `14` for review, not applied).
