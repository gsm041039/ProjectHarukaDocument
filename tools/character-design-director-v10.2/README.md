# Character Design Director v10.2 — Universal

**先完整角色探索，後局部設計精修。** Read `SKILL.md` first. AMPLIFY and REIMAGINE remain universal creative tracks. Distinguish internal 9-part baseline scanning from step-by-step component design.

Normal open brief: brief/canon → holistic original review → 2–4 different **whole-character visual theses** → generate comparable **full-body exploratory concept images** → compare and shortlist at full-body level → only then refine the head/garments/details → after approval produce formal front/side/back model sheet. Do not treat v9.9 SVG sketch or v10.0 production preflight as mandatory prerequisites for exploratory image generation.

New in v10.2: when refining color, define focal hierarchy and compare local high-contrast accents versus no-new-accent mechanisms **before** offering palettes; accents are optional, not universal prescriptions. Preserve author-approved outfit structure and allow small, focused design feedback loops. See `references/focal_hierarchy_v102.md` and `templates/focal_plan_v102.md`.

See `references/whole_character_first_v101.md` and `templates/whole_character_exploration_v101.md`. Previous dual-track, visual-proof and v8 research archives remain for relevant later stages. `tests/preflight_guard.py` checks legacy v10.0 formal-production evidence. `tests/workflow_stage_guard_v101.py` checks whole-character phase order (legacy-compatible), not aesthetics.

For user-led iterative design, one **meaningful decision per turn**, without re-asking known brief facts or forcing a local-head-to-toe questionnaire. Character-specific samples belong outside this universal pack; never make Rin/Haruka/Miyako preferences universal rules.

Validation:

```bash
python tests/test_preflight_guard.py
python tests/test_workflow_stage_guard_v101.py
python tests/test_focal_hierarchy_guard_v102.py
python tests/validate_structure.py
```

`archive_v8/` is retained unchanged and model-art-quality is not automatically judged.
