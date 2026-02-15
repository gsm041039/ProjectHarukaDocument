# Phase27 Owner Boundary Probe — Core Canon Set

## Scope
- Targets:
  - `canon/00_series_bible.md`
  - `canon/01_world_rules_and_costs.md`
  - `canon/02_glossary.md`
  - `canon/04_timeline_canon.md`
  - `canon/05_story_outline_canon.md`
  - `canon/10_gameplay_bible.md`

## Quick Findings
- Per-file hot lines for ownership-risk markers were extracted by `rg` (核心定義/定義/本質/規則/術語)。
- Purpose: identify where non-owner files may be restating owner-level definitions.

## Old-Link Audit
- `OLDLINK_CORE=0`

## Next Rewrite Priority
1. `canon/05_story_outline_canon.md`
- compress any rule-explainer paragraphs into one-line references to Timeline/World Rules/Glossary.

2. `canon/10_gameplay_bible.md`
- keep gameplay-spec ownership; replace lore-definition restatements with owner links.

3. `canon/00_series_bible.md`
- keep thematic thesis ownership; trim operational rule phrasing to owner references.

## Status
- Probe completed, no old-path link regressions detected in core set.
