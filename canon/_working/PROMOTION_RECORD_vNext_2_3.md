# Promotion record - story skills vNext.2.3
Date: 2026-10-08. Author approved: promotion + TARGETED/FULL angle policy. Status: PROMOTED (formal active version = vNext.2.3).
Source: frozen vNext.2.3 release candidate (cumulative of vNext, .1, .2, .2.1, .2.2). Files copied byte-for-byte, no wording edits. Experiment trees, raw outputs and eval material were deleted after promotion (2026-10-08); the formal files under .claude/ are the sole source of truth.

## Files changed
- .claude/skills/story-orchestrator/SKILL.md (M)
- .claude/skills/story-solution-space-designer/SKILL.md (M)
- .claude/skills/story-run-workspace-manager/SKILL.md (M)
- .claude/skills/story-holistic-supervisor/SKILL.md (M)
- .claude/story_system/angle-system.md (M)
- .claude/story_system/blind-angle-audit-protocol.md (M)
- .claude/story_system/gap-admission-and-scope.md (NEW)
- .claude/story_system/validate_story_output.py (NEW, tested validator)
- CLAUDE.md (angle policy line replaced)
- canon/_working/PROJECT_STATUS.md, SESSION_LEDGER.md (version pointer); this record
No Canon content changed.

## Approved angle-policy change
Old: every recommendation uses the full Master Angle Registry. New: TARGETED default (record lens families chosen/why/skipped-family risk; never claim "all angles"/"complete consideration"); FULL registry only for explicit holistic audit, milestone/final review, high-risk cross-discipline artifact, author request for comprehensive coverage, or material missing-lens risk after TARGETED. Blind-review requirement for "complete consideration" kept; registry not deleted. SCOPE_SCALE and DECISION_WEIGHT kept as separate axes.

## Release-gate result (5 cases, each run once; experiment files since removed)
H11, CR2, RG1, H17, RA1 all PASS, validator PASS on all (H11 after the single repair pass). No RELEASE_BLOCKER. Verdict PROMOTION_READY.

## Non-blocking backlog (not fixed in promotion)
- staged S3 may first emit owner_lookup_required + author_question and need the allowed repair pass
- backfill candidates can be expensive / CONDITIONAL
- long S3 output
- RG1 fixture lacked a genuine Director item
- subagent DONE claims must still be verified by file existence + validator
- positive root-gap promotion is less tested
- tower/RD1-type miss remains unresolved
