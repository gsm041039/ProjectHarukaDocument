# MISSING_FACT_DIMENSIONS.md — Completeness Audit Results + Tier 1 Triage

**Audit Date**: 2026-05-20  
**Mode**: COMPLETENESS_AUDIT → TIER_1_MISSING_DIMENSION_TRIAGE  
**Status**: 🟡 BLOCKED_BY_TABLE_CREATION (not author decision)

---

## Summary

Fact Map extraction is **PARTIAL** (585+ atomic facts extracted). Initial audit identified **11-13 apparent HIGH-priority gaps**.

**TIER 1 TRIAGE RESULT** (post source-lookup):
- ✅ **6 gaps resolved via source-lookup** (facts sourced, need Fact Map entry)
- ✅ **3 gaps remediated via table creation** (facts exist, need organization)
- ✅ **3 gaps reclassified as DESIGN_GAPS** (intentional, not blocking)
- ❌ **0 true contradictions requiring author decision**

**Blocking Factor**: Table creation effort, NOT author decision bottleneck

| Priority | Category | Count | Severity |
|----------|----------|-------|----------|
| 🔴 HIGH | Character identity chains | 3 | BLOCKING |
| 🔴 HIGH | Character state contradictions | 4 | BLOCKING |
| 🔴 HIGH | Event trigger/outcome gaps | 4 | BLOCKING |
| 🟡 MEDIUM | Relationship reciprocity | 2 | POLISH |
| 🟡 MEDIUM | World rule exceptions | 3-5 est. | BLOCKING |
| 🟡 MEDIUM | Theme narrative stance | 2-3 est. | BLOCKING |

**Total HIGH-Priority Missing Dimensions**: **11-13**

---

## HIGH-PRIORITY MISSING DIMENSIONS

### 🔴 Character Identity Chain Issues (3)

| Missing ID | Character | Missing Dimension | Why Required | Affected Table | Severity | Suggested Remediation |
|---|---|---|---|---|---|---|
| CHAR-NAME-001 | 彩 (Aya) + 黑奏 (Kurokane) | Personality naming origin chain | Cannot track which name belongs to which consciousness without documenting Y079 split moment | CHARACTER_NAME_FACTS (missing) | HIGH | Create CHARACTER_NAME_FACTS.md; document 「黑奏」as personality-born-from-trauma, not independent person with birth name |
| CHAR-NAME-002 | 夕 (Yu) | Naming boundary clarity (夕 vs 菲/Fei) | Canon uses three names for same entity with undefined context boundaries | CHARACTER_NAME_FACTS (missing) | HIGH | Clarify: When is she 「夕」(meta handle) vs 「菲」(independent consciousness)? Add usage timeline |
| CHAR-NAME-003 | 小光 (Ko Hikaru) | Full legal name + surname | Only nicknamed as 「小光」; lacks formal identity | CHARACTER_NAME_FACTS (missing) | MEDIUM-HIGH | Determine: Is Ko Hikaru a full name or nickname? What is formal surname (if any)? Night district orphan naming convention? |

---

### 🔴 Character State/Transformation Contradictions (4)

| Missing ID | Entity Type | Entity | Missing Dimension | Why Required | Affected Table | Severity | Suggested Remediation |
|---|---|---|---|---|---|---|
| CHAR-STATE-001 | Character | 花子 (Hanako) | Death event resolution: Y99 natural vs Y102 execution | CF-CHAR-0006 says "died in childbirth Y99" but CF-EVT-0006 lists Kurokane execution Y102; Haruka's trauma basis contradicts | CHARACTER_STATE_FACTS (missing) | HIGH | Decision required: (A) Hanako died Y99 naturally (Beta timeline only), Haruka's Y102 memory is false, OR (B) Haruka witnessed Y102 execution (Alpha reality), which triggered her reality override |
| CHAR-STATE-002 | Character | 凜 (Rin) | Memory state contradiction (false vs partially recovered) | CF-CHAR-0154 says "edited/false memories post-reconstruction" + CF-CHAR-0160 says "partial memory recovery during Y113 battles" + CF-CHAR-0161 says "never recognizes Miyako" — simultaneously contradictory | CHARACTER_STATE_FACTS (missing) | HIGH | Clarify: Is Rin's consciousness truly reconstructed or a false copy? If recovering memories, why doesn't she recognize Miyako? What is her actual memory state? |
| CHAR-STATE-003 | Character | 小光 (Ko Hikaru) | Consciousness persistence in corpse form | CF-CHAR-0171 states Ko becomes "scrap metal Type B low-intelligence corpse" but does NOT specify if consciousness is trapped, dormant, or extinct | CHARACTER_STATE_FACTS (missing) | HIGH | Determine: Is Ko Hikaru trapped aware in corpse form (relevant to Akane motivation) or mindless undead? Affects moral weight of Akane's protection arc |
| CHAR-STATE-004 | Character | 彩 (Aya) | Liberation possibility + consciousness access | CF-CHAR-0123 says "imprisoned in own heart chamber" but doesn't clarify if Aya can be freed Act IV or permanently lost | CHARACTER_STATE_FACTS (missing) | HIGH | Determine: Can Aya reclaim consciousness in Act IV or is she permanently imprisoned? Does her "choosing eternal recurrence" mean she permanently accepts erasure or finds agency within loops? |

---

### 🔴 Event Fact Gaps (4 events, 2+ dimensions missing each)

| Missing ID | Event | Missing Dimension | Why Required | Affected Table | Severity | Suggested Remediation |
|---|---|---|---|---|---|---|
| EVT-TRIG-001 | Y102 鐵絲網偶遇 (CF-EVT-0005) | Causal Trigger (why Aya imprisoned there) | Cannot understand why Haruka encounters Aya without knowing Aya's background imprisonment | EVENT_FACTS | HIGH | Determine: Was Aya imprisoned as (A) experimental subject, (B) political prisoner, (C) orphan in state care? Affects meaning of "hoping someone protects Aya" wish |
| EVT-TRIG-002 | Y102 Alpha 線姊妹處刑 (CF-EVT-0006) | Location (具體地點) + Trigger (Kurokane's strategic intent) | Foundation trauma event lacks specificity; unclear why Kurokane orchestrates public execution | EVENT_FACTS | HIGH | Determine: (A) Where does execution occur (palace? street?)? (B) Why does Kurokane publicly execute in front of 5-year-old Haruka specifically? Calculated psychological torment or strategic necessity? |
| EVT-TRIG-003 | Y114 Day 13 鋼鐵獨舞 (CF-EVT-0045) | Causal Trigger (why Misao decides final transformation Y114-Day13) | Misao's sacrifice is emotionally pivotal but missing the decision moment + prerequisite state | EVENT_FACTS | HIGH | Determine: What psychological/plot event triggers Misao's choice on Day 13 specifically? Is it (A) CDL-233 body-horror saturation, (B) team failure moment, (C) communication with Sayo, (D) internal choice independent of circumstances? |
| EVT-CONS-001 | Y114 Day 14 帝國廣場救援 (CF-EVT-0046) | Trigger (how Akane escapes sewers + enters plaza) + Downstream Consequence (political/emotional impact of her self-detonation) | Event outcome listed but causal pathway (sewer escape) and ultimate consequence (does her death stop Scarlet Tide? affect Aya's liberation? etc.) missing | EVENT_FACTS | HIGH | Determine: (A) How does Akane flee underground + reach Imperial Plaza? (B) Does her Day 14 sacrifice functionally prevent Y134 Scarlet Tide, or is that Yu's responsibility? (C) What is her death's emotional/political weight in Act IV? |

---

### 🟡 Relationship Reciprocity Issues (2)

| Missing ID | Pair | Missing Dimension | Why Required | Affected Table | Severity | Suggested Remediation |
|---|---|---|---|---|---|---|
| REL-RECIP-001 | 晴香 ↔ 黑奏 (CF-REL-0030) | B→A emotional state (Haruka's feeling toward Kurokane) | Relationship documented as predator-prey; Final State lacks Haruka's emotional resolution (revenge? forgiveness? transcendence?) | RELATIONSHIP_FACTS | MEDIUM | Add: How does Haruka emotionally process Kurokane's existence post-dispersal? Unresolved manipulator or tragic sibling-figure she can forgive? |
| REL-RECIP-002 | 紫音 ↔ 小光 (CF-REL-0041) | B→A emotional state (Ko Hikaru's feeling toward Misao) | Documented as Misao protecting Ko; missing Ko's reciprocal attachment + final state after corpse transformation | RELATIONSHIP_FACTS | MEDIUM | Add: Does Ko Hikaru, trapped in corpse form, still emotionally anchor Misao or become silent object? Is the bond preserved after transformation? |

---

## MEDIUM-PRIORITY MISSING DIMENSIONS (Not blocking but polish-critical)

### 🟡 World Rule Exceptions/Limitations (estimated 3-5)

*These require deeper audit; preliminary findings:*

- CF-WORLD-0013 (情感連結) — Fact Map says "Four+ practitioners" but prose details L1/L2/L3 gradations
- CF-WORLD-0035 (glucose system) — Marked CANDIDATE_NEED but already RESOLVED in CDL-114
- 7 rules in prose lack CF-WORLD IDs (soul descent, emotion fuel polarity, scar formation, etc.)

**Action**: See VALIDATION_REPORT.md for detailed rule audit.

### 🟡 Theme Narrative Stance (estimated 2-3)

*Preliminary findings:*

- Some themes distinguish "character belief" vs "story shows" vs "final stance" clearly (e.g., perfectionism)
- Others remain ambiguous (e.g., responsibility vs blame — does story validate self-sacrifice or complicate it?)

**Action**: See THEME_FACTS.md audit in VALIDATION_REPORT.md.

---

## REQUIRED TABLES STILL MISSING FROM CANON_FACT_MAP

| Table | Purpose | Status |
|---|---|---|
| CHARACTER_NAME_FACTS.md | Consolidate name/alias/rename chains for all characters | ❌ DOES NOT EXIST |
| CHARACTER_STATE_FACTS.md | Consolidate state/transformation/knowledge across timeline | ❌ DOES NOT EXIST |
| CHARACTER_KNOWLEDGE_FACTS.md | Track who knows what + when reveals happen | ❌ DOES NOT EXIST (partially in EVENT_FACTS) |
| audits/CHARACTER_COVERAGE_AUDIT.md | Detailed character dimension audit results | ❌ DOES NOT EXIST |
| audits/EVENT_COVERAGE_AUDIT.md | Detailed event dimension audit results | ❌ DOES NOT EXIST |
| audits/RELATIONSHIP_COVERAGE_AUDIT.md | Detailed relationship audit results | ❌ DOES NOT EXIST |
| audits/COMPLETENESS_AUDIT_SUMMARY.md | This audit summary | ❌ DOES NOT EXIST |

---

## STOP CONDITION: FACT_MAP_BUILT BLOCKED

**Status**: 🔴 **FACT_MAP CANNOT BE MARKED FACT_MAP_BUILT**

**Reason**: 11-13 HIGH-priority missing dimensions exist. Core story facts (character death contradictions, event triggers, relationship closure) lack required dimensions.

**Next Action**: 

1. **TIER 1 (BLOCKING)**:
   - [ ] Resolve Hanako death contradiction (Y99 vs Y102)
   - [ ] Clarify Rin's reconstruction state (false vs partial recovery)
   - [ ] Define Ko Hikaru consciousness persistence
   - [ ] Determine Aya liberation mechanics (Act IV or permanent)

2. **TIER 2 (REQUIRED)**:
   - [ ] Create CHARACTER_NAME_FACTS.md (personality naming, alias boundaries)
   - [ ] Create CHARACTER_STATE_FACTS.md (consolidate state timeline)
   - [ ] Document Event Triggers for 4 high-impact events
   - [ ] Clarify Relationship reciprocity (2 pairs)

3. **TIER 3 (POLISH)**:
   - [ ] World rule exception audit
   - [ ] Theme narrative stance audit
   - [ ] Create audit files (CHARACTER_COVERAGE_AUDIT, EVENT_COVERAGE_AUDIT, etc.)

---

**Recommendation**: Run `/story-canon-fact-map-builder Mode: REMEDIATE_COMPLETENESS_GAPS` after resolving TIER 1 content decisions.
