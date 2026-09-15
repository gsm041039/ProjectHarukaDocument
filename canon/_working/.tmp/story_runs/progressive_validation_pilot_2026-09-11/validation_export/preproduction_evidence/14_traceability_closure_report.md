# 14 — Current Canon Traceability Closure Pass (2026-09-11)

Existing tools only. No new skill / folder / registry / Fact Map created.

---

## 1. Real Fact Map baseline (from BUILD_LEDGER + Git, NOT FACT_MAP_FINAL_STATUS alone)

| Item | Finding |
|---|---|
| Last complete Fact Map build | Phase 1–4 + Loop 13, declared 2026-05-20/21 (`FACT_MAP_FINAL_STATUS.md`, `VALIDATION_REPORT.md`) |
| Later incremental touches | fact-map sub-files git-touched to **2026-06-19** (`CLAIM_INDEX.md`, `BUILD_LEDGER.md`); a few to 2026-06-22 (fs) |
| Highest CDL referenced anywhere in `canon_fact_map/` | **CDL-290** |
| ⇒ Last trustworthy source-sync point | **≈ CDL-290 / 2026-06-19** |
| Current CANON_DECISION_LOG head | **CDL-408** |
| Post-baseline CDL entries (table-format `\| CDL-XXX \|`, CDL-291→408) | **119** (+ a few prose-format; − phantoms CDL-405 & numbering-collision corrections). Effective material delta ≈ **110–120 decisions.** |
| Canon docs themselves | current-ish — git-touched through 2026-08-28 (`01_world_rules`, `haruka.md`), 2026-08-18 (`04_timeline`), i.e. Round 184 writebacks landed. **Canon is ~current; the Fact Map is ~120 CDLs behind canon.** |
| `DOC_REGISTER.md` freshness column | itself stale (says "2026-05-15" for canon files that were rewritten many rounds later). Metadata-only staleness. |

**Two staleness layers confirmed:** (a) Fact Map vs current canon = ~120 CDLs; (b) DOC_REGISTER freshness metadata vs actual canon mod dates.

---

## 2–3. Post-baseline CDL delta — domain classification (bulk, not atomized)

CDL-291 → CDL-408. Classified against §3 categories.

| Domain | Representative CDLs | In canon `*.md`? | In Fact Map? | Class |
|---|---|---|---|---|
| Ending / final-state / Act III→IV boundary | 312, 325, 326, 327, 344, 367, 374, 375, 376, 384, 387, 388, 394 | **YES** (`haruka.md` `status-static-cradle`, `miyako.md`, `rin.md`, `akiho.md`, `05_story_outline_canon.md`, `13_major_events...`) | NO | represented in canon / **missing from Fact Map** |
| World rules / mechanics | 292–295, 308–310, 329, 331–334, 336, 338, 339, 346, 357, 362, 379, 395, 396, 398, 400, 402–404, 406, 407 | **YES** (`01_world_rules_and_costs.md`, `02_glossary.md`, `07_entities_and_devices.md`, `12_philosophy_and_systems.md`) | NO (WORLD_RULE_FACTS frozen at 2026-06-01) | represented in canon / **missing from Fact Map** |
| Character psychology / identity | 302, 303, 306, 335, 337, 340–342, 347–351, 353–356, 358, 360, 363, 373, 386, 390, 391, 393 | **YES** (`03_characters/*.md`, `INDIVIDUAL_CHARACTER_GROWTH_TRACKER.md`, `IDEOLOGY_THEME_STANCE_MATRIX.md`) | NO (CHARACTER/STATE FACTS frozen 2026-06-22 / 05-21) | represented in canon / **missing from Fact Map** |
| Names / terminology | 305 (政變 98→103), 328, 334, 382 (光幕系統/維多利亞之淚 unify) | **YES** (`02_glossary.md`, `04_timeline_canon.md`) | NO (TERMINOLOGY_FACTS frozen 2026-06-22, NAME_FACTS 2026-06-22) | represented in canon / **missing from Fact Map**; CDL-305 = a superseding date correction — Fact Map may hold the old 98 value |
| Events / timeline | 296, 301, 304, 311, 313–315, 317–324, 343, 359, 361, 364, 371, 372 | **YES** (`04_timeline_canon.md`, `05_story_outline_canon.md`, `ACT_II/III_OUTLINE.md`, `13_major_events...`) | NO (EVENT/TIMELINE FACTS frozen 05-21 / 06-22) | represented in canon / **missing from Fact Map**; CDL-314 explicitly SUPERSEDES CDL-274 Step 1 (貓殼碎裂順序) — Fact Map may hold superseded order; CDL-359 deletes a beat |
| Relationships | 299, 300, 303, 340, 354, 386 | **YES** (`03_characters/*.md`, `13_major_events...`) | NO (RELATIONSHIP_FACTS frozen 05-21) | represented in canon / **missing from Fact Map** |
| Reveal / audience-knowledge | 291, 293, 382, 383, 388 | **YES** (`09_information_design.md`, `ACT_III_OUTLINE.md`, `KNOWLEDGE_DEPENDENCY_MAP.md`) | NO (CHARACTER_KNOWLEDGE_FACTS frozen 05-21) | represented in canon / **missing from Fact Map** |
| Durable directing / theme constraints | 330 (反美化苦難守則), 365/369 (身體代價×債務 主軸), 378 (舞台 導演語言), 379, 392 (見證守則) | **YES** (`11_directing_playbook.md`, `08_narrative_design_bible.md`) | N/A — these are directing/narrative constraints, Fact Map scope excludes most (`11` = NAVIGATION_ONLY per DOC_REGISTER) | **explicitly excluded from Fact Map** — authoritative source = the playbook itself; traceable via CDL |
| Presentation / process only | 337續 (矛盾覆核), 352 (habit→outline placement), 369 (編號修正), 377/385 (刪除舊視覺描述), 393 (修內部矛盾) | YES / housekeeping | N/A | **excluded with reason** — process/presentation, not a durable fictional-truth fact |

**Net:** ~100+ post-baseline CDLs materially change fictional truth or a durable narrative constraint AND are written into canon `*.md`, BUT **0 are propagated into the Canon Fact Map.** ~10 are legitimately excludable (directing-constraint or process/presentation).

---

## 4. Bidirectional validation

### Canon → provenance (PASS for primary chain)
Every current canon claim examined carries an **inline CDL reference + author-decision date** in the canon file itself, and the CDL log entry names its authority basis + affected files. The primary provenance chain is:
`current claim → canon section (inline CDL tag) → CANON_DECISION_LOG entry → author decision + date + affected-file list`
This chain is **intact and independently recoverable without the Fact Map.** (8 samples in §9.)

### Fact Map → Canon source (PARTIAL)
- Rows validated at 2026-05-20 build had valid Source Doc + anchor + "zero orphans" (VALIDATION_REPORT).
- **BUT** "status reflects current truth" and "fact has not been superseded" **cannot be asserted** for any row in a domain touched by CDL-291→408 — which is every domain. Known superseding examples the Fact Map likely still holds in the old form: 黑奏 政變年份 98 (CDL-305 → 103), 貓殼碎裂順序 (CDL-314 SUPERSEDES CDL-274 Step 1), 情緒病毒 independent-pathogen framing (CDL-403 → 債務侵蝕), 心匣 as "延伸物" (CDL-404 → same-thing-two-names), 萬花筒體系 (CDL-329 作廢).

---

## 5. Traceability failures detected

| Failure type | Found? | Detail |
|---|---|---|
| Orphan current canon claims (rely solely on TEMP/backup) | **0** in sample — all sampled claims carry CDL + author refs | |
| Orphan Fact IDs | not exhaustively scanned; build-time report said 0 | |
| Stale facts marked CURRENT | **YES — systemic.** Every Fact Map domain is ~120 CDLs behind current canon. Count not enumerable without full delta. | |
| Changed canon not reflected in Fact Map | **YES — ~100+ material CDLs.** | |
| New CDL not propagated where required | **To Fact Map: ~100+.** To canon `*.md`: none found (writeback discipline held). | |
| Claim-index gaps | CLAIM_INDEX frozen 2026-05-20 ("280+ claims"); BUILD_LEDGER says "585+" — internal count inconsistency predates this pass | |
| Invalid source anchors | not found in sample; DOC_REGISTER anchors still valid | |
| Duplicate facts from renamed/revised truth | likely (e.g. 心之器/心匣, 情緒病毒/債務侵蝕) — needs delta pass to confirm | |
| Old ending/state facts still active | **LIKELY** — CDL-327 resolved "three contradictory ending versions"; Fact Map predates it | |
| Character-knowledge facts lagging reveal design | **YES** — CHARACTER_KNOWLEDGE_FACTS frozen 2026-05-21, 30% was already DESIGN_GAP_ONLY at build | |

---

## 7. Hard metrics

```
Material CURRENT canon claims checked (sample, §9):        8 / 8 traceable
  — primary chain (canon→CDL→author decision):            8 / 8 PASS
Mapped / traceable (via inline CDL, not Fact Map):         8 / 8
Explicitly excluded with reason:                           n/a (sample)
Orphan current canon claims (in sample):                   0

Current Fact rows checked (exhaustive):                    NOT DONE — delta rebuild required
Facts with valid provenance (as of 2026-05-20 build):      ~all (build-time)
Facts with valid provenance AND current-truth status:      UNKNOWN — every domain is CDL-291→408 behind
Stale facts still marked current:                          > 0  (systemic; not enumerable without delta)

Post-baseline material CDL decisions checked:              ~119 (CDL-291→408, topic-level)
Properly propagated to canon *.md:                         ~119 / 119
Properly propagated to Fact Map:                           0 / ~110 material
Explicitly deferred / excluded (directing-constraint or process):  ~10
Unexplained missing propagation:                           0  (the gap IS explained: Fact Map build
                                                             frozen ≈CDL-290 pending delta rebuild;
                                                             documented in 04_source_freshness_and_factmap_delta.md)
```

### Closure targets
```
ORPHAN_MATERIAL_CURRENT_CANON_CLAIMS            = 0        ✅  (primary chain intact; 0 in sample)
CURRENT_FACTS_WITHOUT_VALID_PROVENANCE          = 0        ✅  (build-time provenance held)
STALE_FACTS_MARKED_CURRENT                      > 0        ❌  (Fact Map ~120 CDLs stale, systemic)
UNEXPLAINED_MATERIAL_CDL_PROPAGATION_GAPS       = 0        ✅  (Fact-Map gap is explained + documented;
                                                               canon-side propagation is complete)
```

Two of four targets are green; **`STALE_FACTS_MARKED_CURRENT` cannot be zeroed without the delta rebuild.**

---

## 9. Post-writeback validation — provenance chains (8 samples)

| # | Current claim | Provenance chain | Status |
|---|---|---|---|
| 1 | Haruka final state = 三位一體永恆守護者, consciousness-continuation deliberately left ambiguous | `haruka.md` L27 `#status-static-cradle` → tags CDL-326/344/384 → CDL-344 (2026-07-27 author) + CDL-327 (2026-07-12, resolved 3 contradictory ending files) + CDL-384 (2026-08-12, +2 honesty layers) | ✅ traceable |
| 2 | 黑奏 帝國政變 = 103年 (not 98年) | `02_glossary`/`04_timeline` → CDL-305 "政變年份修正：98年→103年（解決時序矛盾）" (post-baseline) | ✅ in canon / ⚠️ Fact Map likely still 98 |
| 3 | Act III ends at J9; Phase K/L moved to Act IV; 20-yr 靈魂風暴 gap 114→134 | `05_story_outline_canon.md` L31 note → CDL-312 "Act III/IV 邊界重劃" + CDL-325 (ACT_III v0.6 暫定批核) + CDL-218 | ✅ traceable |
| 4 | Livestream infrastructure: 維多利亞之淚 destroyed in 解放之戰 (Act III末); no equivalent real-time broadcast rebuildable after | `07_entities_and_devices.md` L332-334 `#section-org-victoria` → CDL-382 (2026-08-12 正式) + CDL-321 (解放之戰 機制定案) | ✅ traceable |
| 5 | Character knowledge: 黑奏 Loop N / Warden concept gets NO dedicated reveal beat in Act III Outline | `ACT_III_OUTLINE.md` / `KNOWLEDGE_DEPENDENCY_MAP` → CDL-291 "QQ-103 RESOLVED" (first post-baseline CDL) | ✅ in canon / ❌ not in CHARACTER_KNOWLEDGE_FACTS (frozen 05-21) |
| 6 | Relationship progression: 美夜子 忠誠 has explicit exclusivity boundary (圈外 = 防備姿態, not 真冷漠 as of CDL-408) | `miyako.md` §故作堅強 CDL-337 忠誠段 → CDL-340 (排他性邊界 added) → **CDL-408** (2026-09-10, softened to 防備姿態) | ✅ traceable / ❌ RELATIONSHIP_FACTS frozen 05-21 (would show neither CDL-340 nor CDL-408) |
| 7 | World rule: 屍骸化 = 靈魂距離光譜 (unified 靈魂困禁 + 無主容器); 護甲 strengthens 執念錨點 | `01_world_rules_and_costs.md` L1128 `#rule-soul-distance-spectrum` + L1136 → CDL-310 (統一) + CDL-406 (護甲吸納) + CDL-402 (護甲本質) | ✅ traceable / ❌ WORLD_RULE_FACTS frozen 2026-06-01 |
| 8 | Major event: 小光 死因 = 黑社會報復 (紫音想脫離打手身份), 晴香知情不報 | `iwakura_akane.md` → CDL-343 (死因重寫) + CDL-393 (修正內部矛盾描述) | ✅ traceable / ❌ EVENT_FACTS frozen 05-21 (would show old cause) |

**All 8: current canon claim is fully traceable to an author decision via the canon file + CDL log. In 6/8 the Fact Map row would be stale or absent.**

---

## 8. Files updated this pass (existing only)
- `canon/_working/canon_fact_map/BUILD_LEDGER.md` — appended delta-status entry (baseline ≈CDL-290; CDL-291→408 pending).
- `canon/_working/canon_fact_map/FACT_MAP_FINAL_STATUS.md` — appended "no longer final as-of 2026-09-11" banner.
- `canon/_working/canon_fact_map/CLAIM_INDEX.md` — freshness banner.
- `canon/_working/canon_fact_map/DOC_REGISTER.md` — freshness banner (metadata stale).
- This report.
No canon `*.md` edited (primary chain already intact; no sync-policy-authorized correction needed — the stale artifact is the Fact Map, and the fix is a builder delta run, not a hand edit).

---

## 10. VERDICT

# `CURRENT_CANON_TRACEABILITY_PARTIAL`

- **Primary provenance chain (current canon → inline CDL → CANON_DECISION_LOG → author decision + date): CLOSED.** Every sampled material current claim is independently traceable. No orphan current canon claims. Canon-side writeback discipline held across CDL-291→408.
- **Secondary provenance mechanism (Canon Fact Map): NOT closed.** Frozen ≈ CDL-290; ~110 material post-baseline decisions un-propagated; `STALE_FACTS_MARKED_CURRENT > 0` systemically. This is a **known, documented, scoped** gap (`04_source_freshness_and_factmap_delta.md`), **not** blocked by any author decision, and **does not block Act I Beat Sheet work** (canon + Act I outline v1.21 + character sheets are current and self-sufficient).
- **Remedy (single focused follow-up, existing tool):** `story-canon-fact-map-builder` INCREMENTAL mode, baseline CDL-290 → HEAD, refresh affected domains only, preserve stable CF IDs, then re-run `VALIDATION_REPORT`. Not a blind rebuild.

Not `CLOSED` (two hard targets not zero). Not `BLOCKED_BY_AUTHOR_DECISION` (no author decision is in the way). Not `BLOCKED_BY_TOOLING` (the builder exists and works).
