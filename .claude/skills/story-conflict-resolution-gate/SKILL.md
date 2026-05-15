---
name: story-conflict-resolution-gate
version: v1.0
status: active
purpose: Find contradictions across Project Haruka story documents, ask the author only for unresolved story decisions, then update affected files through controlled writeback.
---

# Story Conflict Resolution Gate

## Core Mission

Use this skill when the user wants to find contradictions across multiple Project Haruka documents, resolve them through author decisions, and update the affected files safely.

This skill is not primarily for generating new prose. It is for contradiction discovery, author arbitration, and controlled canon / working-file correction.

## When To Use

Use this skill when the task is like:

- find contradictions across canon and working files
- compare story documents and ask me questions to decide the true version
- identify inconsistent character backstories, timelines, or world rules
- resolve conflicts between act outlines and canon docs
- update files after author decisions
- clean up canon drift
- reconcile old canon with newer working files

Do not use this skill for pure outline generation. Use story-document-synthesis-gate for document synthesis. Use story-canon-sync-gate for freshness-based canon synchronization. Use this skill when contradiction discovery and author decision are the main goal.

## Non-Negotiable Rules

1. Do not invent missing canon.
2. Do not choose the smoother or more literary option just because it reads better.
3. Do not silently merge conflicting versions.
4. Do not assume canon is always correct.
5. Do not assume newer working files are always correct.
6. Do not treat TEMP / draft / backup files as fact unless backed by CDL, approved outlines, or explicit author decision.
7. Do not rewrite final prose before contradiction mapping is complete.
8. If a conflict affects story meaning, ask the author.
9. If a conflict is low-risk and mechanical, auto-fix it only after classification.
10. Maintain a conflict session state so the same contradiction is not rediscovered endlessly.

## Required Workflow

### Phase 0 — Scope Declaration

Before reading deeply, state:

- target scope
- files / folders being compared
- document types involved
- expected output type
- whether writeback is allowed

If the user explicitly asks for updating files, writeback is allowed after safe classification or author decision.

### Phase 1 — Source Inventory and Freshness Ledger

Build a Source Freshness Ledger for every relevant file.

Required columns:

| File | Type | Status | Version | Date | CDL Basis | Authority | Freshness | Trust Verdict |
|---|---|---|---|---|---|---|---|---|

Status values:

- CANON
- APPROVED
- ACTIVE_WORKING
- DRAFT
- TEMP
- BACKUP
- DEPRECATED
- UNKNOWN

Trust Verdict values:

- CURRENT_FACT_SOURCE
- CANDIDATE_NEWER_SOURCE
- NEEDS_COMPARISON
- TEMP_NAVIGATION_ONLY
- OUTDATED_REFERENCE
- REJECT_AS_LEGACY

Freshness cannot be decided by modified date alone. Use header status, version number, date, CDL basis, file location, and content consistency.

### Phase 2 — Prerequisite Reading Logic

Before judging contradictions, identify required prerequisite concepts.

For Project Haruka, always check whether these are understood and sourced when relevant:

- Alpha line / Beta line relationship
- Haruka as creator of Beta line
- Yu / shadow personality / Alpha memory split
- Miyako as Haruka's sister, black cat, Unit 01, sanctuary curse
- Kurosou / Aya duality
- Akane / Hikaru / corpse paradise
- Misao / Sayo / gender identity violence / puppet body horror
- Rin / Unit 00 / Miyako's survivor guilt
- Airi / cardboard knight / living black box
- collective unconscious
- emotional conservation law
- Scarlet Tide
- Resonance Hell / forced emotional transparency
- Static Cradle
- true four-act structure / false three-act reader illusion
- Bandage philosophy, if the target document uses it

If more than 3 major prerequisite concepts are unresolved, stop before writeback and ask for missing sources or author clarification.

### Phase 3 — Atomic Claim Extraction

Do not compare documents only at paragraph level. Extract atomic claims.

Each claim must be a single concrete statement, for example:

- Haruka created the Beta line at age five.
- Miyako is Haruka's biological older sister.
- Akane sacrifices herself at the Bridge of Sighs.
- Misao chooses to remain as the physical anchor / puppet wall.
- Rin becomes Unit 00 after voluntarily refusing healing.
- The true structure is four acts, while three-act language is only reader-facing misdirection.

Claim table format:

| Claim ID | Claim | Source File | Location | Status in Source | Evidence Strength |
|---|---|---|---|---|---|

Evidence Strength values:

- DIRECT_APPROVED
- DIRECT_CANON
- DIRECT_WORKING_CDL_BACKED
- DIRECT_DRAFT
- INDIRECT
- UNSUPPORTED

### Phase 4 — Contradiction Detection

Detect these contradiction types:

1. Direct factual contradiction
   - A says X, B says not-X.

2. Timeline contradiction
   - same event has different date, order, duration, or phase.

3. Character identity contradiction
   - different role, relationship, trauma origin, death state, or motivation.

4. World-rule contradiction
   - Alpha/Beta, magic, emotional conservation, Scarlet Tide, collective unconscious, soul rules, etc.

5. Structural contradiction
   - act structure, phase placement, climax order, reveal order.

6. Thematic contradiction
   - ending meaning, what the story validates / rejects, role of pain, healing, connection, attitude.

7. Terminology drift
   - same concept named differently or old stage count / term remains.

8. Scope confusion
   - brief accidentally becoming full outline, temp outline being treated as canon, old draft overriding active file.

Contradiction table format:

| Conflict ID | Type | Severity | Claim A | Source A | Claim B | Source B | Why It Matters | Initial Classification |
|---|---|---|---|---|---|---|---|---|

Severity values:

- CRITICAL
- HIGH
- MEDIUM
- LOW

### Phase 5 — Classification

Every conflict must be classified.

Classification values:

#### AUTO_FIX_SAFE

Use when the fix is mechanical and clearly supported.

Examples:

- typo
- outdated stage count
- header date mismatch
- terminology alignment
- local label mismatch
- obvious cross-reference update

Conditions:

- clear source support exists
- no change to character backstory
- no change to Alpha/Beta logic
- no change to death order
- no change to ending meaning
- no new event introduced

#### AUTO_FIX_MEDIUM

Use when the fix is local and evidence is strong, but it slightly affects interpretation.

Allowed only when:

- source support is strong
- affected section is small
- no unresolved higher-level conflict depends on it
- diff is easy to review

#### AUTHOR_GATE

Use when AI cannot safely decide.

Trigger AUTHOR_GATE for:

- character backstory conflict
- trauma origin conflict
- Alpha/Beta cosmology conflict
- timeline / death order conflict
- act structure conflict
- reveal order conflict
- ending meaning conflict
- theme meaning conflict
- two active working files disagree
- newer claim has no CDL / decision support
- AI cannot explain why one source should win
- the smoothest merge would create new canon

#### REJECT_UNSUPPORTED

Use when the claim appears invented, legacy, unsupported, or contradicted by stronger sources.

#### SOURCE_NEEDED

Use when the claim might be true, but no adequate source was found.

### Phase 6 — Conflict Resolution Questions

Batch AUTHOR_GATE questions. Do not stop after every individual issue.

Ask the author only after safe fixes and safe comparisons have been processed, unless the conflict blocks all further reading.

AUTHOR_GATE question format:

```
Question ID:
Conflict:
Source A says:
Source B says:
Why AI cannot decide:
Possible options:
A) Keep Source A
B) Keep Source B
C) Merge only under this exact condition: ...
D) Reject both and rewrite manually
Recommended option:
Risk if chosen:
Files affected:
Author decision:
```

If there are more than 8 AUTHOR_GATE issues in one pass, stop and ask the author in one checkpoint.

### Phase 7 — Controlled Writeback

After classification and / or author decisions:

- Apply AUTO_FIX_SAFE directly if writeback is allowed.
- Apply AUTO_FIX_MEDIUM if evidence is strong and local.
- Apply AUTHOR_GATE fixes only after author decision.
- Do not rewrite whole sections unless explicitly approved.
- Prefer minimal diffs.
- Preserve document voice and format.
- Preserve existing headings unless they are the conflict.
- Do not add literary connective tissue.
- Do not promote TEMP prose into canon unless the author approves the exact claim.

### Phase 8 — Diff and Session Report

After writeback, output:

1. Files scanned
2. Source Freshness Ledger
3. Conflict Map
4. Auto-applied fixes
5. Author decisions applied
6. Changed files list
7. Exact diff summary
8. Rejected unsupported claims
9. Remaining unresolved AUTHOR_GATE questions
10. Sync / conflict status

Status values:

- CONFLICT_CLEAN
- CONFLICT_PARTIAL_SAFE_FIXES_APPLIED
- CONFLICT_BLOCKED_BY_AUTHOR_GATE
- CONFLICT_BLOCKED_BY_SOURCE_GAP
- CONFLICT_BLOCKED_BY_TOOLING

## Loop Control

Do not loop endlessly.

Maintain a Conflict Session State:

| Claim / Conflict ID | Current Status | Last Action | Needs Rerun? | Affected Files |
|---|---|---|---|---|

Rules:

- Do not rediscover the same unresolved conflict as a new issue.
- After author decisions, rerun only affected files / claim groups.
- Do not restart the whole project unless the decision changes Alpha/Beta cosmology, act structure, or core ending meaning.
- Continue processing safe areas while unresolved AUTHOR_GATE items are batched.
- Do not end with “tell me if you want me to continue.” End with a clear status and next required author decisions if any.

## Recommended User Prompt

```
/story-conflict-resolution-gate

Mode: DISCOVER_RESOLVE_WRITEBACK

Task:
Find contradictions across the relevant Project Haruka story documents, decide safe fixes automatically, ask me only for unresolved story-meaning conflicts, then update the affected files.

Scope:
[insert files or folder]

Rules:
- Build Source Freshness Ledger first.
- Extract atomic claims.
- Find contradictions across files.
- Auto-fix mechanical / clearly supported local issues.
- Batch AUTHOR_GATE questions.
- Do not ask me about every small issue.
- Do not silently merge conflicting canon.
- Do not invent missing explanations.
- After I answer AUTHOR_GATE questions, apply the approved decisions and show exact diff summary.

Required output:
1. Source Freshness Ledger
2. Conflict Map
3. Auto-applied fixes
4. Batched AUTHOR_GATE questions
5. Changed files list
6. Exact diff summary
7. Final conflict status
```

## Difference From Related Skills

- story-room: explores and clarifies story logic through discussion.
- story-canon-sync-gate: determines which source / claim is current fact and syncs canon freshness.
- story-document-synthesis-gate: generates or updates a target story document after source coverage and reading logic gates.
- story-conflict-resolution-gate: specializes in finding contradictions, asking author arbitration questions, and applying controlled conflict-resolution writeback.
