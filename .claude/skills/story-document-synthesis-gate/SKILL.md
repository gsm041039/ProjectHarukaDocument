---
name: story-canon-sync-gate
version: v2-auto-writeback
summary: Canon/working-file synchronization gate that reads all relevant story documents, determines current factual claims by freshness + authority + evidence, auto-applies safe writebacks, and asks the author only for unresolved high-risk conflicts.
---

# Story Canon Sync Gate — v2 Auto Writeback

## Purpose

Use this skill when the project contains multiple story files, canon files, act outlines, working files, briefs, temporary outlines, or decision logs that may disagree.

This skill is **not** a prose-writing tool. It is a synchronization and truth-arbitration workflow.

Its job is to:

1. Read the full relevant document set.
2. Build a source freshness and authority ledger.
3. Extract atomic claims.
4. Determine which claims are current fact, outdated, candidate, or unsupported.
5. Automatically apply safe / low-risk corrections.
6. Ask the author only when a conflict changes story meaning and cannot be safely resolved.

The author should not need to manually instruct every individual fix.

---

## Core Principle

Do not ask the author to approve every small correction.

The workflow should be:

```text
read all relevant files
→ compare freshness + authority + CDL / decision support
→ classify conflicts by risk
→ auto-fix safe issues
→ pause only for AUTHOR_GATE issues
→ after author answers, apply remaining approved writebacks
→ produce diff summary
```

---

## Hard Rules

- Do not assume canon is always correct.
- Do not assume newer working files are always correct.
- Do not decide truth by filename alone.
- Do not rewrite story meaning silently.
- Do not invent missing explanations.
- Do not smooth contradictions with literary prose.
- Do not promote TEMP / draft / backup files wholesale.
- Do not ask the author about purely mechanical or clearly supported low-risk fixes.
- Do not modify files if a change affects major canon meaning without AUTHOR_GATE approval.

---

## Source Priority Logic

When files disagree, judge by:

1. Explicit author-approved decision / CDL / decision log.
2. Newer approved act outline.
3. Newer active working file with clear decision-log basis.
4. Existing canon file.
5. TEMP / draft file as candidate source only.
6. Backup / deprecated draft last.

However, a newer file that invents unsupported content must be rejected.

---

## Required Phase 1 — Source Discovery

Before making any change, locate all relevant files for the target sync scope.

For each file, record:

- File name / path
- Document type
- Status: CANON / APPROVED / DRAFT / TEMP / BACKUP / DEPRECATED / UNKNOWN
- Version number if present
- Last updated date if present
- CDL / decision-log range if present
- Whether it claims to be authoritative
- Whether it says it is non-canon / temporary
- Authority score: HIGH / MEDIUM / LOW
- Freshness score: NEW / OLD / UNKNOWN
- Trust verdict:
  - CURRENT_FACT_SOURCE
  - CANDIDATE_NEWER_SOURCE
  - OUTDATED_REFERENCE
  - TEMP_NAVIGATION_ONLY
  - REJECT_AS_LEGACY

Output this as the **Source Freshness Ledger**.

---

## Required Phase 2 — Reading Logic Gate

Before comparing claims, identify the prerequisite knowledge needed to understand the files.

Examples:

- Alpha / Beta line
- Haruka as creator of Beta line
- Yu as split-off Alpha memory / shadow self
- Miyako as Haruka's sister / black cat / Unit 01
- Kurosou / Aya duality
- Rin / Unit 00
- Akane / Hikaru / corpse paradise
- Misao / Sayo / identity violence
- Airi / cardboard knight / living black box
- Emotional conservation law
- Resonance Hell
- Scarlet Tide
- Static Cradle
- False three-act / true four-act structure
- Bandage philosophy

If more than three major prerequisite concepts are unresolved, pause and ask for missing source files before editing.

---

## Required Phase 3 — Atomic Claim Extraction

Do not compare whole documents vaguely.

Extract atomic claims, such as:

- Haruka created the Beta line at age five.
- Miyako is Haruka's older sister.
- Akane sacrifices herself at the Bridge of Sighs.
- Misao chooses to remain as the anchor during Steel Solo.
- The story has a true four-act structure.
- The Emotional Conservation Law has six stages.

Each claim must be compared against source freshness, authority, and supporting evidence.

---

## Required Phase 4 — Risk Classification

Every proposed change must be classified before editing.

### AUTO_FIX_SAFE

Apply automatically without asking the author.

Allowed when the change is:

- typo correction
- terminology alignment
- number / stage count correction
- header date consistency
- internal label consistency
- broken reference fix
- file-status wording alignment
- clear stale wording replaced by newer approved wording

And it does **not** change:

- character backstory
- Alpha / Beta cosmology
- who dies, when, or why
- act structure
- event order
- ending meaning
- theme meaning
- relationship meaning
- motivation / trauma origin

Example:

```text
情緒守恆定律五階段 → 情緒守恆定律六階段
```

If clearly supported by CDL / approved source, this is AUTO_FIX_SAFE.

### AUTO_FIX_MEDIUM

Apply automatically only if the evidence is strong and the change is local.

Allowed when:

- one canon file is clearly stale against a newer approved outline
- the change is a local section update
- no major story meaning changes
- source support is explicit

Must still report in diff summary.

### AUTHOR_GATE

Stop and ask the author.

Trigger when a conflict affects:

- character backstory
- trauma origin
- Alpha / Beta rules
- cosmology
- timeline / death order
- Act structure
- major event order
- final ending meaning
- theme meaning
- relationship meaning
- two newer active files disagree
- newer claim appears intentional but lacks decision-log support
- AI cannot explain why one source should win

### REJECT_UNSUPPORTED

Do not apply.

Use when:

- claim comes only from TEMP / draft / backup
- claim looks like AI-invented connective tissue
- claim has no support from CDL / approved outline / canon
- claim contradicts established world rules

---

## Required Phase 5 — Auto Writeback Behavior

The author wants this skill to handle the whole file automatically.

Therefore:

1. Apply all AUTO_FIX_SAFE changes immediately.
2. Apply AUTO_FIX_MEDIUM changes when support is strong and no major meaning changes.
3. Do not ask the author for low-risk mechanical changes.
4. Ask the author only for AUTHOR_GATE issues.
5. If AUTHOR_GATE issues exist, apply safe fixes first, then present unresolved questions.
6. After the author answers, apply the approved author decisions automatically.

Do not leave the author with a list of obvious fixes and ask them to manually instruct each one.

---

## AUTHOR_GATE Question Format

For each unresolved conflict, ask:

```text
Question ID:
Conflict:
Source A says:
Source B says:
Why AI cannot decide:
Options:
A)
B)
C)
D)
Recommended option:
Risk if chosen:
Author decision:
```

If there are more than five AUTHOR_GATE issues, stop after safe fixes and ask the author before continuing deeper sync.

---

## Required Final Output

After running sync, output:

1. Files scanned
2. Source Freshness Ledger
3. Auto-applied fixes
4. Changed files list
5. Exact diff summary
6. Claims rejected as unsupported
7. Remaining AUTHOR_GATE questions
8. Recommended decisions for AUTHOR_GATE
9. Whether each target file is sync-clean, partially synced, or blocked
10. Next writeback order if further work is needed

---

## Recommended Invocation Prompt

```text
/story-canon-sync-gate

Mode: AUTO_SYNC_WITH_GATED_WRITEBACK

Task:
Read the full relevant Project Haruka story document set and synchronize canon/working files automatically.

Goal:
Determine current factual claims by freshness + authority + CDL / decision support. Auto-apply safe corrections. Ask me only for conflicts that affect story meaning or cannot be safely resolved.

Rules:
- Do not assume canon is always correct.
- Do not assume newer working files are always correct.
- Build Source Freshness Ledger first.
- Extract atomic claims before comparing.
- Classify each proposed change as AUTO_FIX_SAFE, AUTO_FIX_MEDIUM, AUTHOR_GATE, or REJECT_UNSUPPORTED.
- Automatically apply AUTO_FIX_SAFE changes.
- Apply AUTO_FIX_MEDIUM changes only if evidence is strong and local.
- Do not ask me to approve every typo, label, stage-count, header-date, or terminology consistency fix.
- Ask me only for AUTHOR_GATE issues.
- Do not invent missing explanations.
- Do not promote TEMP / draft / backup content unless supported by CDL / approved outlines / canon.

Required output after writeback:
1. Files scanned
2. Source Freshness Ledger
3. Auto-applied fixes
4. Changed files list
5. Exact diff summary
6. Rejected unsupported claims
7. Remaining AUTHOR_GATE questions
8. Recommended decisions
9. Sync-clean status

Target sync scope:
[insert target files or folder]
```
