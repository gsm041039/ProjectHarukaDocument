# STAGE 0 ACCEPTANCE GATE

PASS only if all are true:

- [ ] Active folder structure unchanged.
- [ ] No active Canon / skill / control file modified.
- [ ] One temp run workspace exists.
- [ ] Every major capability has an existing-owner finding or explicit MISSING finding.
- [ ] `story-outline-synthesis-gate`, `story-room`, `story-scene-lab`, router/orchestrator are explicitly mapped.
- [ ] Existing control files are treated as owners, not automatically replaced.
- [ ] Workflow contradictions are quoted with source paths.
- [ ] Codex vs Claude drift is identified.
- [ ] Any proposed new skill/file has proof of missing ownership.
- [ ] Proposed NEW permanent artifacts count is ideally 0.
- [ ] No Act I prose was written.
- [ ] Final status is not a vague "done"; it is PASS_CANDIDATE or FAIL_NEEDS_MORE_AUDIT.

FAIL examples:
- Codex immediately creates `NarrativeProduction/`.
- Codex proposes 10 new skills without owner audit.
- Codex says "Fact Map missing" despite existing Fact Map.
- Codex ignores contradictory progression rules.
