# Phase28 Navigation + Global Structure Audit

## Scope
- Files/areas checked:
  - `Navigation_Guide.md`
  - `canon/**/*.md` (excluding `canon/_reports/**` for primary pass)

## Navigation Check
- `Navigation_Guide.md` currently points only to Canon and Canon reports.
- Legacy folder/path link hits in Navigation: `NAV_STRUCTURE_HITS=0`

## Canon Link Safety Check
- Old-path hyperlink hits (`backup/screenwriter/director/gameplay/art/draft`): `OLDPATH_LINK_HITS=0`
- Legacy structure path hits in non-report canon docs: `LEGACY_STRUCTURE_HITS_NON_REPORT=0`

## Residual Structure Strings
- Non-report structure string hits total: `NON_REPORT_STRUCTURE_HITS=22`
- All remaining hits are in HTML source-trace comments (`<!-- Sources: ... -->`), which are allowed for provenance and are not hyperlinks.

## Cleanup Applied
- `canon/99_decision_log.md`
  - Replaced explicit old folder mention `art/2XX` with neutral phrase `角色視覺原案組`.
- `canon/05_story_outline_canon.md`
  - Removed explicit old-folder wording from two narrative notes (kept intent, removed structure reference).

## Result
- Canon正文與 Navigation 均無舊系統超連結與遺留結構路徑引用。
- 只保留來源註解中的路徑追溯資訊（非 link）。
