# Phase31 Rules-Glossary Semantic Dedup Probe + Compression

## Scope
- Targets:
  - `canon/01_world_rules_and_costs.md`
  - `canon/02_glossary.md`

## Probe Findings
- Highest duplication pressure concentrated in:
  - `term-mirror-law`
  - visual-law terms (`term-law-of-substance`, `term-law-of-corruption`)
- Pattern: glossary entries were carrying near-owner-level explanatory blocks.

## Compression Applied (Glossary-side)
1. `term-mirror-law`
- Compressed to lexical role statement.
- Delegated rule clause details to CAN-01 and visual grammar to CAN-06.

2. `term-law-of-substance`
- Compressed to glossary-level definition.
- Delegated classification table/per-shot specification to CAN-06.

3. `term-law-of-corruption`
- Compressed to irreversible-chain label.
- Delegated staged mechanism to CAN-01 and staged visuals to CAN-06.

## Audit
- `MISSING_EXPLICIT_ANCHORS_02=0`
- `OLDPATH_LINK_HITS_02=0`

## Result
- 01/02 boundary tightened: glossary remains lexical index; deep rule clauses and visual production specs stay in their owner files.
