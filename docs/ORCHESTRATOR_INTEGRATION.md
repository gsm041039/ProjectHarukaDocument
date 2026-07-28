# story-orchestrator integration patch

Add this routing branch to `story-orchestrator/SKILL.md` under Automatic Skill Selection:

```md
### If the user asks to update/synchronize the static Story Brief website from canon
Use:
1. `story-router`
2. `story-context-manager`
3. `story-source-recovery-gate`
4. `story-canon-sync-gate`
5. `story-static-site-sync`
6. `story-grounding-auditor`
7. Mini Log

Mode: `STATIC_SITE_SYNC`
Default scope: full canon-bearing site sync.
Design policy: controlled local adjustments allowed; global redesign requires author gate.
Will NOT do: canon writeback, new canon invention, deployment unless explicitly requested.
```

Add `STATIC_SITE_SYNC` to the visible call-plan mode list.
