# Phase25 Character Semantic Dedup — Batch B

## Scope
- Target files:
  - `canon/03_characters/haruka.md`
  - `canon/03_characters/miyako.md`
  - `canon/03_characters/yu.md`
  - `canon/03_characters/antagonist.md`
  - `canon/03_characters/akiho.md`
  - `canon/03_characters/iwakura_akane.md`
- Dependency:
  - `canon/03_character_index.md#section-character-sheet-contract`

## Inventory
- Batch B files scanned: 6
- Role/constraint duplicate template blocks detected pre-fix: 12 blocks (2 per file)

## Conflict Scan
- Repetition conflict: shared role-function and canon-constraints paragraphs duplicated across multiple character sheets.
- Resolution: centralize shared definition in Character Index, keep one-line role-specific deltas in each sheet.

## Mapping Plan
- Ownership:
  - Shared definitions owner: `canon/03_character_index.md#section-character-sheet-contract`
  - Character-specific delta owner: each `canon/03_characters/*.md`
- Handling: `MERGED` (shared block to index) + `REPHRASED` (per-character delta lines)

## Writing Changes Applied
- Replaced duplicated `角色功能` bullets with:
  - Shared-contract pointer
  - Character-specific role sentence
- Replaced duplicated `禁忌` bullets with:
  - Shared-contract pointer
  - Character-specific constraint sentence

## Link Audit
- Forbidden old-path links in CAN-03 (`backup/screenwriter/director/gameplay/art/draft`): 0 hit
- Old duplicate boilerplate sentence hits: 0 hit
- Shared-contract reference hits in character files: 24 (12 files x 2)

## Coverage Audit
- Batch B target files migrated to shared-contract pattern: 6/6
- CAN-03 total status:
  - Batch A: 6/6
  - Batch B: 6/6
  - Total: 12/12

## Final QA
- Zero old-link regression in CAN-03 role/index scope.
- No duplicate shared template blocks remain in all 12 character sheets.
- Character-specific deltas retained to preserve per-role semantics.
