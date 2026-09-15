# 08 — Progressive Routing Design (Stage 4)

## Layer ladder (now in `CLAUDE.md` + `story-orchestrator`)
```
全作 / 跨幕 baseline
  → 目標 Act outline        owner: story-outline-synthesis-gate (act mode)
  → Sequence / Event        owner: story-sequence-boundary-designer + outline event grouping
  → Beat Sheet              owner: story-room  ★ Beat Sheet Production Mode (NEW MODE, not new skill)
  → Sequence boundary       owner: story-sequence-boundary-designer
  → Scene architecture      owner: story-scene-objective-architect → story-scene-lab
  → Dialogue blueprint      owner: story-dialogue-architect
  → Script                  owner: story-dialogue-readiness-gate → story-dialogue-script
  → Review                  owner: story-dialogue-room / coverage-table-read / grounding-auditor
cross-cutting: story-run-workspace-manager (resume), story-character-change-impact-manager +
               story-downstream-consistency-auditor (upstream change → downstream)
```

## Current-level detection (per Act)
Classify each existing artifact: `APPROVED / STABLE / PROVISIONAL / PARTIAL / STALE / WRONG_LAYER_REFERENCE / MISSING / BLOCKED`.
Start at the highest genuinely-incomplete layer. Preserve `SCENE_REFERENCE` material; do not treat it as approved Beat abstraction; do not restart at Act from zero.

## Narrative obligation pass (before descending a layer)
Check `CONTROL_OBJECTIVES_MASTER` / `CROSS_ACT_CONTROL_LAYERS` / `KNOWLEDGE_DEPENDENCY_MAP` / `HARD_CONSTRAINTS_TABLE` / `CONSIDERATIONS_REGISTER` / Fact Map / target artifact → `COVERED / PARTIAL / MISSING / DEFERRED / CONFLICT / NOT_RELEVANT`.
MISSING → escalation ladder: reuse event → extend beat → merge into scene → micro-scene → aftermath → environment/action/gameplay carrier → only then new major event. Come with a designed recommendation; do not ask "你想加咩場".

## Decision classes (C3 resolved)
- **AUTO_RESOLVABLE** — Claude does it silently (evidence retrieval, explicit-supersession source choice, stale-label fix, sequence boundary guess, causal-bridge identification, minor transition, fitting info into an existing beat, redundant-exposition avoidance, low-risk carrier choice, splitting oversized material, preserving reference material, routine structure diagnosis, obvious setup/payoff upkeep).
- **AI_PROPOSED_CANDIDATE** — Claude designs a preferred solution, continues provisionally when safe (small connective beat, scene extension, aftermath, breathing room, environmental info carrier, moved non-canon presentation detail, small relationship bridge).
- **AUTHOR_DECISION** — the only stop-and-ask class (moral/theme stance, irreversible identity, major relationship meaning, ending meaning, major reveal strategy, major Act restructuring, two incompatible high-quality directions, two irreconcilable active high-authority truths, gameplay/story decision that changes dramatic architecture). Even then: research → reconcile → recommend → explain consequences → one natural-language question.

## Local Vertical Refinement Policy (C2 resolved — author-authorized 2026-09-10)
- Old hard rule "全四幕 Beat Sheet 全部批核先做任何 Scene" **withdrawn**.
- Target Act may descend to Scene/Dialogue while later Acts stay at outline.
- Global Dependency Protection mandatory: Act-I beat depending on unresolved later-Act truth → `PROVISIONAL` / `REVALIDATE_REQUIRED` / `BLOCKED_AT_THIS_DEPENDENCY`.
- Any Scene/Dialogue output while full-story Beat Sheet not all-approved → stamp `[DRAFT / 暫定 — pending full-story beat lock]`, no canon writeback. Existing author/canon gates unchanged for final canon.

## Files changed this run (see `09` for the ledger)
- `CLAUDE.md` — pipeline section rewritten (ladder + Local Vertical Refinement Policy + revised hard rules).
- `.claude/skills/story-orchestrator/SKILL.md` — added "Progressive Coarse-to-Fine Authoring Mode" + decision classes + first-question rule; aligned the "唔可以因為全劇 Beat Sheet 未完成而停止" line to the policy.
- `.claude/skills/story-router/SKILL.md` — added `PROGRESSIVE_AUTHORING` mode + layer→skill map; added "Sync / Reconciliation Skill Ownership (C4)" block.
- `.claude/skills/story-room/SKILL.md` — added "Beat Sheet Production Mode" (formal Beat Sheet layer owner; G1 resolved by EXTEND, no new skill).
- `.claude/skills/story-dialogue-readiness-gate/SKILL.md` — aligned the beat-sheet line to the policy + draft stamp + per-dependency BLOCKED.
- `canon/_working/BEAT_SHEET_SOURCE_MANIFEST.md` — story-room Beat Sheet mode formalized + Local Vertical Refinement note.
- 7 control artifacts — freshness banners (see `06`).

## New permanent skills / files / folders: 0
G1 solved by a new *mode* inside `story-room` (already the manifest-designated owner). No `NarrativeProduction/`, no `StoryPipelineV2`, no duplicate registry.
