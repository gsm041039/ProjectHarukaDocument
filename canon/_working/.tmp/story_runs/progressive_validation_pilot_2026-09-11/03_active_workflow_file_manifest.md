# 03 — Active Workflow File Manifest

All paths confirmed to exist at repo root as of HEAD `e4c5743`. No path substitutions needed.

| Requested path | Resolved path | Modified by retrofit? | Exported to `validation_export/active_workflow/` |
|---|---|---|---|
| `CLAUDE.md` | same | YES | yes |
| `.claude/skills/story-orchestrator/SKILL.md` | same | YES | yes |
| `.claude/skills/story-router/SKILL.md` | same | YES | yes |
| `.claude/skills/story-room/SKILL.md` | same | YES | yes |
| `.claude/skills/story-dialogue-readiness-gate/SKILL.md` | same | YES | yes |
| `.claude/skills/story-run-workspace-manager/SKILL.md` | same | no (reference/reused as-is) | yes |
| `.claude/skills/story-sequence-boundary-designer/SKILL.md` | same | no (reused as-is) | yes |
| `.claude/skills/story-scene-objective-architect/SKILL.md` | same | no (reused as-is) | yes |
| `.claude/skills/story-source-recovery-gate/SKILL.md` | same | no (reused as-is) | yes |
| `.claude/skills/story-canon-sync-gate/SKILL.md` | same | no (reused as-is; declared C4 primary) | yes |
| `.claude/skills/story-holistic-supervisor/SKILL.md` | same | no (reused as-is; manual-only route) | yes |

**Other files modified by the retrofit / traceability pass (not requested above, listed for completeness — see `01_workflow_diff.patch` / `02_control_diff.patch`):**
`canon/_working/BEAT_SHEET_SOURCE_MANIFEST.md`, 7 files under `canon/_working/story_construction/` (freshness banners), 4 files under `canon/_working/canon_fact_map/` (freshness banners), `NEXT_ACTION.md`, `PROJECT_STATUS.md`, `SESSION_LEDGER.md`.

No path in the request differed from its actual repo location.
