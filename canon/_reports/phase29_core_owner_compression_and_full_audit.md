# Phase29 Core Owner Compression + Full Link Audit

## Scope
- Rewrite targets:
  - `canon/10_gameplay_bible.md`
  - `canon/05_story_outline_canon.md`
  - `canon/00_series_bible.md`
- Audit targets:
  - `canon/**/*.md` (exclude `_reports`)
  - `Navigation_Guide.md`

## Ownership Compression Applied
1. `canon/10_gameplay_bible.md`
- Added explicit owner-boundary statement near core loop.
- Rephrased social-stage filter line to player-visible outcome + owner link.
- Rephrased infinite-regeneration boss break condition as owner-delegated rule path.

2. `canon/05_story_outline_canon.md`
- Added explicit ownership boundary in info-control section.
- Converted one rule-explainer phrase to observable-effect phrasing + owner link.
- Removed residual old-folder wording in narrative notes.

3. `canon/00_series_bible.md`
- Compressed two rule-adjacent bullets to thesis-use wording and delegated rule interpretation to CAN-01.

## Structure Cleanup
- `canon/99_decision_log.md`: replaced explicit legacy path token `art/2XX` with neutral `角色視覺原案組`.

## Full Audit Results
- `BROKEN_FILE_LINKS_CANON=0`
- `BROKEN_ANCHORS_CANON=0`
- `OLDPATH_LINK_HITS_CANON_NAV=0`

## Notes
- Residual old paths exist only in HTML source-trace comments (`<!-- Sources: ... -->`), non-hyperlink, retained for provenance.
