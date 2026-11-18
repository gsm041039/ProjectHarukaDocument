# v10.0 dual-track procedural regression

Run `python tests/test_preflight_guard.py` and `python tests/validate_structure.py`.

- `AMPLIFY` case must identify existing appeal anchor. Reject if missing.
- `REIMAGINE` case must articulate new visual thesis. Reject if missing.
- Broad brief `BOTH` requires both strategies (plus baseline option in authored comparisons). Same strategy under two names must not count.
- `DEVELOP_IDEA` is a valid non-render outcome; selected_id must be null.
- `minor-local-only` permits scoped single-track experiment; author needs not repeat known direction details.
- Partial author feedback must retain approved scope and explicitly constrain unrelated changes. The validator checks fields, not whether this was a good design choice.
- Visual comparison proofs must be user/current-character specific, not generic fixture SVGs.
- Scenario: original strong design with strong AMPLIFY opportunity; do **not** require inventing a defect.
- Scenario: original strong design but alternative better wardrobe thesis possible; allow REIMAGINE to differ structurally while retaining identity locks.
- Scenario: the best output is unchanged original; allow KEEP_ORIGINAL without forcing a final render.
- Scenario: image model adds stripes/labels not in approved change map; render audit fails despite attractive output.
- Scenario: color-only change remains valid when the authorized task is recolor; a silhouette-only change is not required.

**Limits:** All checks are procedural. They do not independently grade beauty or prove improved commercial performance.
