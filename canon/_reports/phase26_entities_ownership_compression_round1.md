# Phase26 Entities Ownership Compression — Round 1

## Scope
- Target: `canon/07_entities_and_devices.md`
- Goal: reduce non-owner rule/term duplication while preserving device-specific value.

## Applied Changes
1. `section-hc-definition`
- Renamed from generic ontology definition to device-ownership framing.
- Rewritten as "裝置敘事定位" with explicit owner links to:
  - `canon/02_glossary.md#term-mirror-promise`
  - `canon/02_glossary.md#term-heart-vessel`
  - `canon/01_world_rules_and_costs.md#rule-magic-cost`

2. `section-hc-stitching`
- Rewritten from rule restatement to observable device/shot indicators.
- Explicitly delegates full rule authority to:
  - `canon/01_world_rules_and_costs.md#rule-reality-override`

## Audit
- Forbidden old-path links in target: `OLDLINK_07=0`
- Anchor existence quickcheck:
  - `section-hc-definition`: present
  - `section-hc-stitching`: present
- CAN-03 dedup regression check: `CAN03_DUP_TEMPLATE=0`

## Result
- Ownership boundary tightened:
  - term/rule full definitions remain in owners (CAN-02/CAN-01)
  - CAN-07 keeps device-specific interpretation and production-facing cues.
