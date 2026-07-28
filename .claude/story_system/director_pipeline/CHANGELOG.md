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
