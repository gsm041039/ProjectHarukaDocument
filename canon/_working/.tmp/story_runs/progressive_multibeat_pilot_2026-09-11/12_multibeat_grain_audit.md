# 12 — Multi-Beat Grain Audit

Fail criteria checked against all 4 candidates (`06`–`09`).

| Fail criterion | Beat 0 | Beat 0c | Beat 0d | Beat 1 |
|---|---|---|---|---|
| Exact dialogue in Beat body | none — moved to Downstream References | none — moved | N/A (no dialogue exists) | none — moved (incl. combat lines) |
| Exact timing in Beat body | none — 0.3s/10s figures moved to Downstream References (Patch A applied) | none — camera/arm-twitch measurement moved | none — camera pull-back detail moved | none |
| Shot list in Beat body | none | none — camera constraint noted only as the *reason* for a resolved micro-choice, not as a shot list | none | none — combat choreography explicitly excluded, referenced only |
| Reads like screenplay | no — table format, functional language throughout | no | no | no |
| Lacks meaningful state/consequence info | no — emotional value shift, setup/payoff, knowledge delta all populated | no | no (appropriately thin — beat's own function is quiet) | no — richest beat, fully populated |
| Merely paraphrases Outline without structural resolution | no — adds Beat-Sheet-specific fields (Cost Signal applicability, obligation classification, grain classification) not present in the Outline's prose | no — additionally resolves the "btd" arm/eye micro-choice | no — additionally flags the ordering oddity | no — additionally separates Beat-grain content from Scene-grain content that the Outline/Scene-Reference left interleaved |
| Unsupported new story truth introduced | none | none | none | none — Miyako's dual reading is presented unresolved, matching design intent, not resolved by invention |

## Verdict (per beat)
- Beat 0: `TRUE_BEAT_GRAIN_PASS`
- Beat 0c: `TRUE_BEAT_GRAIN_PASS`
- Beat 0d: `TRUE_BEAT_GRAIN_PASS`
- Beat 1: `TRUE_BEAT_GRAIN_PASS`

## Overall: `TRUE_BEAT_GRAIN_PASS`

Improvement over the single-Beat pilot (`11_beat_grain_audit.md` from the prior run): that pilot flagged one *borderline* item (10s pan inherited into the body). This run's Patch A eliminates the borderline case entirely — the same figure is now correctly placed under Downstream References in `06`, with the Beat body carrying only its function ("brief establishing pan before player control").
