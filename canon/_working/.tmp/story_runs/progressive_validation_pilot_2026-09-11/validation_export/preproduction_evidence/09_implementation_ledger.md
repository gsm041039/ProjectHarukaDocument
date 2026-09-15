# 09 — Implementation Ledger (Stage 4)

| # | File | Change | Type | Reversible | Justification |
|---|---|---|---|---|---|
| 1 | `CLAUDE.md` | Pipeline section: replaced fixed 3-layer diagram + "全四幕 Beat Sheet 完成後才開始 Scene" hard rule with layer ladder + Local Vertical Refinement Policy + revised hard rules (per-dependency PROVISIONAL, draft stamp). | PATCH | git | Author-authorized §1.1/§1.2. Resolves C2 (Claude-internal rule collision). |
| 2 | `.claude/skills/story-orchestrator/SKILL.md` | Added §"Progressive Coarse-to-Fine Authoring Mode" (layer ladder, current-level detection, obligation pass, layer routing, decision classes, first-real-question rule). Aligned the "Beat Sheet 未完成而停止" line + added PROVISIONAL/draft-stamp reference. | PATCH | git | G2 (no progressive orchestration mode). C3 (decision classes). Extends existing owner, no parallel orchestrator. |
| 3 | `.claude/skills/story-router/SKILL.md` | Added `PROGRESSIVE_AUTHORING` mode + call chain + layer→skill map. Added §"Sync / Reconciliation Skill Ownership (C4)". | PATCH | git | Routing entry for the new mode. C4 ownership doc'd in the routing owner (per §3). |
| 4 | `.claude/skills/story-room/SKILL.md` | Added §"Beat Sheet Production Mode" — formal Act-level Beat Sheet layer: entry reads (manifest), per-beat field list (beat abstraction, no dialogue/camera/timing), Cost Signal rule, SCENE_REFERENCE preservation, per-Act approval under Local Vertical Refinement, mode-specific output structure. | PATCH (new mode) | git | **G1** — Beat Sheet layer had no routed owner. `BEAT_SHEET_SOURCE_MANIFEST.md` already names "story-room（Beat Sheet模式）" as owner; this makes the mode real. First-preference solution per §19. **No new skill created.** |
| 5 | `.claude/skills/story-dialogue-readiness-gate/SKILL.md` | Aligned the "未完成全劇 Beat Sheet 不等於 NOT_READY" line to the policy: target-Act-stable → READY_FOR_*_DRAFT; draft stamp; per-check `BLOCKED_AT_THIS_DEPENDENCY`. | PATCH | git | C2 alignment across active owners (§28). |
| 6 | `canon/_working/BEAT_SHEET_SOURCE_MANIFEST.md` | Noted story-room Beat Sheet Production Mode formalized (date); added Local Vertical Refinement note (per-Act Beat Sheet progression; PROVISIONAL for later-Act-dependent beats). | PATCH | git | Keeps the manifest consistent with skill #4. |
| 7 | `canon/_working/story_construction/CONTROL_OBJECTIVES_MASTER.md` | STALE freshness banner + revalidation anchor + follow-up pointer. No content rewrite. | PATCH (annotation) | git | Stage 2; protect production agents from stale top-layer control surface. |
| 8 | `GROUP_WORLDVIEW_CONFLICT_MAP.md` | STALE banner. | annotation | git | Stage 2. |
| 9 | `CROSS_ACT_CONTROL_LAYERS.md` | PARTIALLY_STALE banner (Act I–III skeleton usable; Act IV rows + Stable labels suspect). | annotation | git | Stage 2. |
| 10 | `KNOWLEDGE_DEPENDENCY_MAP.md` | PARTIALLY_STALE banner. | annotation | git | Stage 2. |
| 11 | `HARD_CONSTRAINTS_TABLE.md` | PARTIALLY_STALE banner — structural rules OK; major-truth rows (ending / Haruka final state / Alpha-Beta / livestream / Act III→IV / reveal) need CDL-408 check. | annotation | git | Stage 2; §11. |
| 12 | `RELEVANT_FILES_TABLE.md` | PARTIALLY_STALE banner + Status column (READ/PARTIAL/UNREAD) declared void; per-run read state → workspace. | annotation | git | Stage 2; §14 (source catalogue vs per-run read state). |
| 13 | `CONSIDERATIONS_REGISTER.md` | PARTIALLY_STALE banner. | annotation | git | Stage 2. |

## New permanent artifacts (skills / files / folders): **0**
- Beat Sheet ownership: new *mode* in an existing skill that the manifest already designates. Not a new skill.
- All control-file work: in-place annotation. No replacement registry, no `*V2.md`, no new tree.

## Not implemented this run (non-blocking follow-up, tracked)
- Deep content reconciliation of the 6 stale strategic control docs against CDL-200→408 (`06`).
- Fact Map incremental delta rebuild (`04`).
- 1-line Act I Outline stale-label fix (AG-4 in `05`) — needs author gate (approved outline).
