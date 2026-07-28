# Game Director Skill Pipeline

## Goal
將 Project Haruka 嘅 story work 拆成多個專職 directing skills，再由 `/story-orchestrator` 自動選擇、排序、統合與審視。

## Skill Layers

### Lead / Synthesis
- `story-game-director`

### Design Specialists
- `story-location-stage-director`
- `story-performance-director`
- `story-gameplay-cinematic-integrator`
- `story-montage-editor`
- `story-audio-direction`

### Writing / Production Specialists
- `story-dialogue-script`
- `story-storyboard-designer`
- `story-director-delivery-builder`

### Review Specialists
- `story-dialogue-room`
- `story-directing-language-auditor`
- `story-grounding-auditor`

## Standard Full Pipeline
```text
source recovery
→ game director thesis
→ location + performance + gameplay integration
→ dialogue strategy / script
→ storyboard + montage + audio
→ directing language audit
→ delivery builder
```

## Important Boundary
Gameplay branching and variants are not assumed by directing skills. They are derived from gameplay documents or marked as co-design dependencies.
