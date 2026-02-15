# Phase 25: Character Semantic Dedup (Batch A)

## (1) inventory
- Scope files: airi/saku/rin/ko_hikaru/iroha/ayakomoji_sou (6 files)
- Duplicate cluster targeted: repeated role-function and canon-constraints template blocks.

## (2) conflict scan
- Conflict: same ownership template repeated across character sheets, increasing maintenance drift risk.

## (3) mapping plan
- Move common contract to canon/03_character_index.md#section-character-sheet-contract.
- Replace repeated blocks in each target file with a compact reference + local override sentence.

## (4) writing
- Added common contract section in canon/03_character_index.md.
- Replaced duplicated template blocks in 6 target files with link-back contract statements.

## (5) link audit
- Old-system links/wikilinks in touched files: 0
- Missing destination files in touched files: 0

## (6) coverage audit
- Planned: 6 files
- Completed: 6 files
- Coverage: 100%

## (7) final QA
- Ownership improved: shared policy centralized in index; per-character files keep unique meaning.
- Status: PASS
