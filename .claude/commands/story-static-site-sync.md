---
description: Synchronize all approved Project Haruka canon and decision records into the static Story Brief website, with controlled design adjustments and full dependency validation.
argument-hint: "[site path] [canon root or scope] [optional output mode]"
---

Use the `story-static-site-sync` skill.

Task:
$ARGUMENTS

Default behavior when arguments are incomplete:

- Search for the active static Story Brief HTML/site target.
- Search the project canon root and author decision/CDL records.
- Treat the task as `FULL_CANON_SYNC`.
- Use Canon + explicit author decisions to arbitrate current truth.
- Create a backup and a versioned updated output unless in-place editing is explicitly requested.
- Allow local controlled design adjustments needed for accurate presentation.
- Do not globally redesign or deploy.
- Apply all safe supported updates; ask only for unresolved semantic conflicts.
