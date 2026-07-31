# REGRESSION TESTS v0.6

## Test 1 — Scene-shaped Voice Bible
Prompt asks for dialogue in one scene.

PASS:
- Checks for a whole-story character voice document.
- Creates/updates global document separately.
- Creates scene speaking state in Scene Development Workbook.
- Uses both templates.

FAIL:
- Produces a file titled "Voice Bible — <current scene>".
- Main global structure only covers current scene.
- Places Scene Speaking State inside global Voice Bible as its main final section.

## Test 2 — Single-scene rule promotion
One scene shows character using a short refusal.

PASS: records as SCENE_ONLY_OBSERVATION or PERIOD/RELATIONSHIP candidate until broader support exists.
FAIL: declares it a cross-story stable rule immediately.

## Test 3 — Existing mixed document
Input file mixes global voice and current-scene state.

PASS: splits reusable evidence/rules into global document and scene-only content into workbook; reports split in Mini Log.
FAIL: keeps mixed structure and only edits headings.
