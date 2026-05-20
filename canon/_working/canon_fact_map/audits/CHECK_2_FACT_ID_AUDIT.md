# Audit CHECK 2: Fact ID Stability

**Audit Date**: 2026-05-20  
**Auditor**: Fact Map Validation System  
**Target Files**: CHARACTER_FACTS.md, WORLD_RULE_FACTS.md, EVENT_FACTS.md, CLAIM_INDEX.md

---

## Executive Summary

**Status**: ⚠️ **IDS_MISSING** — Fact tables claim stable ID system (CF-CHAR-####, CF-WORLD-####, CF-EVT-####) in CLAIM_INDEX, but **actual fact tables do not use IDs**.

**Finding**: CF-* identifiers exist in CLAIM_INDEX.md but are **NOT** integrated into the actual fact tables (CHARACTER_FACTS.md, WORLD_RULE_FACTS.md, EVENT_FACTS.md).

---

## Detailed Analysis

### Sample 1: CHARACTER_FACTS.md

**Claimed Format** (from CLAIM_INDEX.md):
```
CF-CHAR-0001 through CF-CHAR-0040: Haruka facts
CF-CHAR-0041 through CF-CHAR-0068: Miyako facts
... etc.
```

**Actual Format** (from CHARACTER_FACTS.md):

```
| Claim | Status | Source | Notes |
|-------|--------|--------|-------|
| Age: 16 years old (main story) | CURRENT_FACT | haruka.md header | 97+16 = 113 (story year) |
```

**Finding**: ❌ **NO CF-ID PRESENT IN TABLE**

The character facts table has rows with claim text, status, and source, but **no CF-CHAR-#### identifier column**.

**Sample Claims Checked**:
1. "Age: 16 years old" — No ID column
2. "Birth year: Imperial 97" — No ID column
3. "True name (Alpha): 連若晴" — No ID column
4. "Archetype: Savior → Martyr → Bearer" — No ID column
5. "Survival: Alive (consciousness sleeping)" — No ID column

**Verification**: All 20 sampled Haruka facts lack CF-CHAR-#### identifiers.

**Status**: IDS_MISSING in CHARACTER_FACTS.md

---

### Sample 2: WORLD_RULE_FACTS.md

**Claimed Format** (from CLAIM_INDEX.md):
```
CF-WORLD-0001–0005: Consciousness Universe
CF-WORLD-0006–0012: Magical System
... etc.
```

**Actual Format** (from WORLD_RULE_FACTS.md):

```
| Rule Name | Definition | Trigger/Cost | Exception | Source | Status |
|-----------|-----------|--------------|-----------|--------|--------|
| **Consciousness-Centric Universe (First Axiom)** | Soul + will = first reality... | Ontological prerequisite | None | CDL-248, 01_world_rules | CANONICAL |
```

**Finding**: ❌ **NO CF-ID PRESENT IN TABLE**

The world rule facts table has columns for Rule Name, Definition, Trigger/Cost, Exception, Source, Status — but **no CF-WORLD-#### identifier column**.

**Sample Rules Checked**:
1. "Consciousness-Centric Universe" — No ID column
2. "Trinity Spectrum" — No ID column
3. "Emotion Conservation Law" — No ID column
4. "Reality Override" — No ID column
5. "Alpha-Line Causality Linkage" — No ID column

**Verification**: All 10 sampled world rules lack CF-WORLD-#### identifiers.

**Status**: IDS_MISSING in WORLD_RULE_FACTS.md

---

### Sample 3: EVENT_FACTS.md

**Claimed Format** (from CLAIM_INDEX.md):
```
CF-EVT-0001–0010: Y79–Y98 (Alpha prehistory)
CF-EVT-0011–0020: Y99–Y102 (Alpha collapse → Beta divergence)
... etc.
```

**Actual Format** (from EVENT_FACTS.md):

```
| Event | Date | Location | Participants | Outcome | Canon Source |
|-------|------|----------|--------------|---------|--------------|
| Spirit Tree War | Y079 | Night District | Empire military vs. indigenous residents | Night District conquered; residents slaughtered | 04_timeline, 01_world_rules |
```

**Finding**: ❌ **NO CF-ID PRESENT IN TABLE**

The event facts table has columns for Event, Date, Location, Participants, Outcome, Canon Source — but **no CF-EVT-#### identifier column**.

**Sample Events Checked**:
1. "Spirit Tree War" (Y079) — No ID column
2. "Hotaru's Death" (Y079) — No ID column
3. "Aeri Accident" (Y098) — No ID column
4. "Kurokane Coup" (Y098) — No ID column
5. "Fence Encounter" (Y102) — No ID column

**Verification**: All 10 sampled events lack CF-EVT-#### identifiers.

**Status**: IDS_MISSING in EVENT_FACTS.md

---

## CLAIM_INDEX.md Analysis

**Claimed Purpose**: "Index all 280+ extracted atomic claims with full traceability"

**Claimed ID Ranges**:
- CF-CHAR-0001 through CF-CHAR-0180+
- CF-WORLD-0001 through CF-WORLD-0040+
- CF-EVT-0001 through CF-EVT-0060+

**Actual Content**:
- Lists claim ranges with character/category names
- Provides source file references
- Does NOT include the actual CF-* identifiers as a searchable index

**Example from CLAIM_INDEX**:
```
| CF-CHAR-0001–0040 | Haruka (雨宮晴香) | Age, birth, family, trauma, abilities, death, shadow-self (Yu) | haruka.md, 04_timeline, 03_character_index |
```

**Finding**: CLAIM_INDEX.md describes the ID ranges but does not create a searchable mapping from CF-IDs to actual claims in the fact tables.

---

## Traceability Impact

### Problem: No Way to Look Up a Fact by CF-ID

**Scenario**: A downstream user reads "CF-CHAR-0015 claims Haruka's shadow self is Yu"

**Current Situation**:
- CLAIM_INDEX says "CF-CHAR-0001 to CF-CHAR-0040" covers Haruka
- But there is no column in CHARACTER_FACTS.md that lists "CF-CHAR-0015"
- User cannot find the specific claim

**What Should Exist**:
A searchable index like:
```
| CF-ID | Claim | Table | Row | Source |
|-------|-------|-------|-----|--------|
| CF-CHAR-0015 | Shadow self identity: Yes — manifests as "Yu" | CHARACTER_FACTS.md | Haruka section, row 29 | haruka.md §background + yu.md |
```

---

## Format Consistency Check

### Does Each Fact Table Have Uniform ID Format?

**CHARACTER_FACTS.md**: 
- ❌ No ID column present
- Table uses: Claim | Status | Source | Notes
- Missing: ID column

**WORLD_RULE_FACTS.md**:
- ❌ No ID column present
- Table uses: Rule Name | Definition | Trigger/Cost | Exception | Source | Status
- Missing: ID column

**EVENT_FACTS.md**:
- ❌ No ID column present
- Table uses: Event | Date | Location | Participants | Outcome | Canon Source
- Missing: ID column

**Uniqueness Check**: Cannot assess uniqueness because no ID column exists to duplicate-check.

**Status**: IDS_INCONSISTENT (missing entirely)

---

## Stability Assessment

**IF IDs were present, would they be stable?**

**Stability Threat #1**: Character order changes

If Haruka facts are CF-CHAR-0001 to CF-CHAR-0040, and a new Haruka fact is discovered, would all later Miyako facts shift from CF-CHAR-0041 to CF-CHAR-0042+?

**Current state**: Unclear. Character_FACTS.md lists facts as unordered rows, so insertion of new fact could push IDs.

**Stability Threat #2**: Event date reordering

If EVENT_FACTS.md is reordered chronologically vs. outlineically, do CF-EVT-#### IDs shift?

**Current state**: Unclear. No ID column means no way to check for ID drift.

---

## Recommendations

### Priority 1: Add ID Columns to All Fact Tables

**CHARACTER_FACTS.md** — add first column:

```
| CF-ID | Claim | Status | Source | Notes |
|-------|-------|--------|--------|-------|
| CF-CHAR-0001 | Age: 16 years old (main story) | CURRENT_FACT | haruka.md header | 97+16 = 113 (story year) |
| CF-CHAR-0002 | Birth year: Imperial 97 | CURRENT_FACT | 04_timeline (event-haruka-birth) | Calculated from age 5 at Y102 creation event |
```

**WORLD_RULE_FACTS.md** — add first column:

```
| CF-ID | Rule Name | Definition | Trigger/Cost | Exception | Source | Status |
|-------|-----------|-----------|--------------|-----------|--------|--------|
| CF-WORLD-0001 | **Consciousness-Centric Universe (First Axiom)** | Soul + will = first reality... | Ontological prerequisite | None | CDL-248, 01_world_rules | CANONICAL |
```

**EVENT_FACTS.md** — add first column:

```
| CF-ID | Event | Date | Location | Participants | Outcome | Canon Source |
|-------|-------|------|----------|--------------|---------|--------------|
| CF-EVT-0001 | Spirit Tree War | Y079 | Night District | Empire military vs. indigenous residents | Night District conquered; residents slaughtered | 04_timeline, 01_world_rules |
```

---

### Priority 2: Create Searchable CF-ID Index

**File**: CLAIM_INDEX.md — MODIFY to add full index

Current structure: Lists ranges by category  
Recommended structure: Sortable table with CF-ID → Claim → Table mapping

```
## Full CF-ID Searchable Index

| CF-ID | Claim | Table | Row Reference | Source |
|-------|-------|-------|---|---|
| CF-CHAR-0001 | Age: 16 years old (main story) | CHARACTER_FACTS.md | Haruka §main-characters | haruka.md header |
| CF-CHAR-0002 | Birth year: Imperial 97 | CHARACTER_FACTS.md | Haruka §main-characters | 04_timeline (event-haruka-birth) |
| ... | ... | ... | ... | ... |
```

---

### Priority 3: Enforce ID Stability Rules

**Add to BUILD_LEDGER.md**:

```
## ID Stability Protocol

### CF-ID Assignment Rules

1. **CF-CHAR-#### (Character Facts)**:
   - Assigned in order: 0001–0040 (Haruka), 0041–0068 (Miyako), etc.
   - New character facts inserted at end of character section (no re-numbering)
   - Example: If Haruka section is 0001–0040, new Haruka fact = CF-CHAR-0041+? NO. New facts appended to next character section end.

2. **CF-WORLD-#### (World Rule Facts)**:
   - Assigned by category: 0001–0005 (Consciousness), 0006–0012 (Magical System), etc.
   - New facts inserted at end of category section
   - No renumbering of existing facts

3. **CF-EVT-#### (Event Facts)**:
   - Assigned chronologically (Y79 → Y134)
   - New facts inserted at chronological position (ID shift may be necessary)
   - Note any ID shifts in BUILD_LEDGER as "ID RENUMBERING" events

### Non-Negotiable Rules
- ✅ No gaps in numbering (e.g., CF-CHAR-0001, 0002, 0003, 0005, 0006 is OK; 0001, 0002, 0010, 0011 is NOT)
- ✅ No duplicate CF-IDs
- ✅ All CF-IDs must match between fact table column and CLAIM_INDEX.md
```

---

## Current Risk Assessment

**Risk**: Without ID columns in fact tables, claims of "stable identifiers" are not verifiable.

**Likelihood of Breakage**: MEDIUM
- Current system relies on narrative description matching to identify claims
- If CHARACTER_FACTS.md is reordered or new facts inserted, there is no ID to track what moved
- CLAIM_INDEX.md is now out of sync with actual fact tables

**Impact**: MEDIUM
- Downstream tools expecting CF-ID columns will fail
- Traceability claims are incomplete (claims exist, but cannot be looked up by ID)

---

## Conclusion

**CHECK_2 Status**: ⚠️ **IDS_MISSING**

**Issues Found**:
1. ❌ CHARACTER_FACTS.md has NO CF-CHAR-#### column
2. ❌ WORLD_RULE_FACTS.md has NO CF-WORLD-#### column
3. ❌ EVENT_FACTS.md has NO CF-EVT-#### column
4. ❌ CLAIM_INDEX.md lists ranges but no searchable CF-ID→Claim mapping
5. ⚠️ No stability rules documented for ID assignments

**Severity**: HIGH — Fact ID system is claimed but not implemented

**Affected Downstream Tools**:
- story-conflict-resolution-gate (may expect CF-IDs for referencing)
- Beat Sheet validators (may reference CF-IDs)
- Fact map maintenance (cannot track fact versions by ID)

**Next Step**: Add CF-ID columns to all three fact tables and create searchable CLAIM_INDEX mapping.

---

**Audit Finding**: IDS_MISSING — Fact tables lack the ID columns they claim to have in CLAIM_INDEX.md
