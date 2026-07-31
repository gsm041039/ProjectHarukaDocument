
## v0.7 — 2026-07-29 — Holistic Supervision and Question Deepening

### Added
- New `story-holistic-supervisor` skill and `/story-holistic-supervisor` command.
- Manual-only whole-work review route in `/story-orchestrator`.
- Question Deepening protocol: preserve original question, identify hidden assumptions, create a professional reframe, and separate adjacent findings.
- Three review depths: FOCUSED, CONNECTED and SYSTEMIC.
- Evidence classes: FACT, STRONG_INFERENCE, WEAK_INFERENCE, TASTE, NEEDS_TEST, CONFLICT and MISSING_DESIGN.
- Resolution buckets: AUTO-RESOLVABLE, NEEDS-VALIDATION and AUTHOR-DECISION.
- Question Gate, maximum-three-question budget and upstream-to-downstream question ordering.
- Dynamic specialist orchestration with supervisor-owned synthesis.
- Root-cause categories, cross-layer tests, repair routes and validation planning.
- Decision propagation into Decision Records, affected files and rerun skills.

### Changed
- `story-router` now recognizes explicit holistic supervision and question-professionalization requests.
- `story-orchestrator` now routes those requests without making holistic review a mandatory production gate.

### Safety / Quality Rules
- Local project evidence must be searched before asking the author.
- The professional reframe may deepen but may not replace the author's original question.
- Specialist skills may not independently interrogate the author during holistic supervision.
- Audience-feeling claims that cannot be proven from documents must become validation hypotheses.

# Director Pipeline Change Log

## v0.1

### Added specialist skills
- story-game-director
- story-location-stage-director
- story-performance-director
- story-dialogue-script
- story-storyboard-designer
- story-gameplay-cinematic-integrator
- story-montage-editor
- story-audio-direction
- story-directing-language-auditor
- story-director-delivery-builder

### Updated
- story-orchestrator: added DIRECTING_PIPELINE automatic routing and full delivery chain
- story-router: added directing task classification and depth modes
- story-director-room: narrowed to lightweight staging consultation
- story-dialogue-room: clarified review role versus final script writing
- commands/story-orchestrator.md: added single slash-command entry point

### Design decisions
- Character performance is the highest directing priority.
- Directing and combat/gameplay may be co-designed.
- Player control ownership is decided scene by scene.
- Gameplay documents remain authoritative for runtime variants and branching.
- Markdown is the approval source of truth; Unity JSON is a traceable implementation projection.
