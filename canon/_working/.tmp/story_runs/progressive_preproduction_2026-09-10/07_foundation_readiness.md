# 07 — Production Foundation Readiness (Stage 3)

Not "produce every asset" — verify each can be generated on demand from an owner.

| Foundation | Owner(s) | Ready? | Note |
|---|---|---|---|
| Stable character core | `story-character-foundation-planner` / `-updater`; `canon/03_characters/*.md`; `03_character_index.md` | YES | Character sheets current (miyako refreshed CDL-408). |
| Arc position | `story-character-arc-positioner`; `INDIVIDUAL_CHARACTER_GROWTH_TRACKER.md` | YES | Tracker current (working tree M). |
| Current emotional / body state | `story-scene-performance-state-builder`, `story-character-memory-state-manager` | YES | On-demand per scene. |
| Knowledge / belief | `story-knowledge-state-mapper`, `story-character-memory-state-manager`; `KNOWLEDGE_DEPENDENCY_MAP.md` (partially stale, banner added) | YES for Act I | Act I AKS fully specified in outline. |
| Relationship | `story-relationship-dynamics`; `13_major_events_relationship_impact.md`, `07_Major_Events_Relationship_Impact.md` | YES | |
| Performance / speaking state / voice | `story-character-performance-bible-designer`, `story-character-voice-designer`, `story-scene-speaking-state-builder`, `story-character-voice-evidence-auditor`; `character-voice-bibles/`, `character-voice-workshops/`; `director_pipeline/GLOBAL_VOICE_DOCUMENT_PROTOCOL_v0.6.md` | YES (on demand) | Do NOT pre-build every Voice Bible. miyako voice bible exists (M). Others build when their first Act I dialogue scene is reached. |
| Directing grammar | `canon/11_directing_playbook.md`; `director_pipeline/` (v0.8, 28-angle matrix, schema, USER_GUIDE_zh-HK); `story-directing-language-architect` / `-auditor`; `story-game-director`, `story-performance-director`, `story-location-stage-director`, `story-montage-editor`, `story-scene-expression-planner` | YES | Rich. Keep "Project Haruka directing grammar" (playbook + pipeline) separate from "author taste hypothesis" (temp review records / `user-discussion-agent`). No permanent Director Profile created. |
| Gameplay / narrative | `canon/10_gameplay_bible.md`, `11_directing_playbook.md`; `story-gameplay-cinematic-integrator`, `story-gameplay-dialogue-integrator` | YES | Retrievable: constraints, control ownership, combat readability, runtime interruption, retry/missed-info, narrative consequence. |
| Temp workspace (long runs) | `story-run-workspace-manager` (00–10 temp files, manifest, context checkpoints, resume action) | YES | No second temp system created. |
| Sequence → Scene handoff | `story-sequence-boundary-designer` → (Beat Sheet: `story-room` new mode) → `story-scene-objective-architect` → `story-scene-lab` → `story-dialogue-readiness-gate` | YES (after Stage 4 patches) | Chain now routable end to end. |

## Character Foundation dedup check
No duplicate character-truth owner created. `canon/03_characters/*.md` = canon; `character-voice-bibles/` = long-term reusable voice (distinct responsibility, protocol-governed); `INDIVIDUAL_CHARACTER_GROWTH_TRACKER.md` = Gate A analysis surface. Clean.

Stage 3 status: **PASS.** All foundations have an owner. Zero new foundations built. Only patch = the Stage 4 routing (below).
