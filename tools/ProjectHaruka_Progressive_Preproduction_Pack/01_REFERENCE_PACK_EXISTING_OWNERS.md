# Existing Owner Reference Pack

呢份唔係新 architecture truth；係畀每個 Stage 用嘅 audit checklist。

Codex 必須先 search / fetch 真實 repo 內容，唔可以假設呢份清單完整或永遠最新。

## Operating / State Owners

- `AGENTS.md`
- `CLAUDE.md`
- `canon/_working/PROJECT_STATUS.md`
- `canon/_working/NEXT_ACTION.md`
- `canon/_working/QUESTION_QUEUE.md`
- `canon/_working/SESSION_LEDGER.md`
- `canon/_working/CANON_DECISION_LOG.md`
- `canon/_working/READ_MANIFEST.md`
- `canon/_working/story_construction/QUESTION_MATRIX.md`

## Current Story-Control Owners to Reuse

- `canon/_working/story_construction/CONTROL_OBJECTIVES_MASTER.md`
- `canon/_working/story_construction/CONSIDERATIONS_REGISTER.md`
- `canon/_working/story_construction/HARD_CONSTRAINTS_TABLE.md`
- `canon/_working/story_construction/KNOWLEDGE_DEPENDENCY_MAP.md`
- `canon/_working/story_construction/CROSS_ACT_CONTROL_LAYERS.md`
- `canon/_working/story_construction/RELEVANT_FILES_TABLE.md`
- `canon/_working/BEAT_SHEET_SOURCE_MANIFEST.md`
- `canon/_working/CROSS_ACT_FORESHADOW_MANIFEST.md` if present/current
- `canon/_working/canon_fact_map/`

## Current Story Artifacts

- `canon/_working/story_construction/ACT_I_OUTLINE.md`
- `canon/_working/story_construction/ACT_II_OUTLINE.md`
- `canon/_working/story_construction/ACT_III_OUTLINE.md`
- `canon/_working/story_construction/ACT_IV_OUTLINE.md` if present
- `canon/_working/story_construction/ACT_I_BEAT_SHEET.md`
- `canon/_working/story_construction/ACT_II_BEAT_SHEET.md`
- `canon/_working/story_construction/ACT_III_BEAT_SHEET.md`
- `canon/_working/story_construction/ACT_IV_BEAT_SHEET.md` if present

Important known structural issue to verify:
`ACT_I_BEAT_SHEET.md` itself has previously stated that some E-01/E-02 content is Scene/Script-level reference rather than a true Beat Sheet.

## Canon / Truth Sources

- `canon/00_series_bible.md`
- `canon/01_world_rules_and_costs.md`
- `canon/02_glossary.md`
- `canon/03_character_index.md`
- `canon/03_characters/*.md`
- `canon/04_timeline_canon.md`
- `canon/05_story_outline_canon.md`
- `canon/08_narrative_design_bible.md`
- `canon/09_information_design.md`
- `canon/10_gameplay_bible.md`
- `canon/11_directing_playbook.md`
- `canon/12_philosophy_and_systems.md`
- `canon/13_major_events_relationship_impact.md`
- `canon/99_decision_log.md`

## Codex Skills to Audit First

- `.agents/skills/story-orchestrator/`
- `.agents/skills/story-router/`
- `.agents/skills/story-room/`
- `.agents/skills/story-outline-synthesis-gate/`
- `.agents/skills/story-context-manager/`
- `.agents/skills/story-source-recovery-gate/`
- `.agents/skills/story-canon-sync-gate/`
- `.agents/skills/story-canon-fact-map-builder/`
- `.agents/skills/story-atom-gate/`
- `.agents/skills/story-scene-lab/`
- `.agents/skills/story-director-room/`
- `.agents/skills/story-dialogue-room/`
- `.agents/skills/story-grounding-auditor/`
- `.agents/skills/story-resume/`

## Claude-Side Reference Capabilities

Claude side may contain more advanced implementations. Audit as reference; do not blindly duplicate:

- `story-run-workspace-manager`
- `story-sequence-boundary-designer`
- `story-scene-objective-architect`
- `story-dialogue-readiness-gate`
- `story-scene-expression-planner`
- `story-game-director`
- `story-holistic-supervisor`
- `story-directing-language-auditor`
- director pipeline docs under `.claude/story_system/director_pipeline/`

## Reuse Decision Rule

Before adding ANY permanent file or skill:

1. Search existing owner.
2. Explain its current responsibility.
3. Explain why patch/extend/port cannot solve the gap.
4. Only then propose a new artifact.

Allowed outcomes:
- KEEP
- PATCH
- EXTEND
- PORT EXISTING CLAUDE CAPABILITY TO CODEX
- DEPRECATE ROUTE
- ARCHIVE ONLY IF NO ACTIVE DEPENDENCY
- NEW — must have evidence-based justification
