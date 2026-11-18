# Changelog v9.6 → v9.7

## Root cause addressed

Prior versions demanded reasons but did not make **rejection of a plausible-sounding weak design** an enforceable pre-render step. Designers could rationalize a local change, render, then finally notice that character appeal, proportion or uniqueness had declined. v9.7 replaces “reason → render” with “baseline → distinct ideas → adversarial comparison → veto → render → verify”.

## Changes

- Introduced mandatory **Pre-Render Concept Veto** with explicit block reasons tied to character appeal, cross-part relationships, author direction, and production fit.
- Kept original as a real option; qualified alternatives compete with the original and lower-risk fixes.
- Required strongest **counterargument and falsification** before choosing a design; subjective predicted gains cannot claim proof.
- Required alternatives or reversal when blocked, instead of generating and explaining failure later.
- Added separate `EXPERIMENTAL—UNVERIFIED` route for author-requested visual exploration without falsely claiming design improvement.
- Added immutable-in-sequence **precommit vs post-render** decision record.
- Expanded regression specifications to catch style drift, forced edits, false color unification, anime cost vs character identity, and posthoc justification.
- No character-specific aesthetic preferences introduced; historical archive_v8 is unchanged.

## Validation level

File and regression **specification** checks only; no actual human-panel quality or image-model compliance test has been performed for v9.7.
