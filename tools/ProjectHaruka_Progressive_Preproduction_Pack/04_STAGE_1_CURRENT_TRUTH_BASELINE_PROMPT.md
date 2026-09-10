# STAGE 1 — CURRENT TRUTH / FRESHNESS BASELINE

Prerequisite: Stage 0 accepted.

## Goal

Establish a trustworthy CURRENT story truth baseline before any progressive production workflow is trusted.

This is NOT a full rewrite and NOT a blind Fact Map rebuild.

## Use Existing Owners

Prefer:
- `story-canon-sync-gate`
- `story-source-recovery-gate`
- existing Canon Decision Logs
- existing Canon
- existing Fact Map
- Git history / current repository evidence

## Temp Records

Update the same run workspace.

Create/update:
- `04_source_freshness_and_factmap_delta.md`
- `05_author_gate_conflicts.md`
- `13_run_manifest.md`

## Tasks

### 1. Determine Current Repository Baseline

Record:
- current commit
- last verified Fact Map baseline / sync point
- major Canon/working changes after that baseline
- whether those changes materially affect Fact Map tables

### 2. Fact Map Delta Audit

Do NOT rebuild from zero by default.

Use incremental logic:
- changed source docs since last trustworthy Fact Map sync
- impacted claim groups
- impacted Fact Map tables
- missing/new/superseded facts
- current limitations

Only run/update the existing Fact Map incrementally if the existing builder supports it and evidence shows it is needed.

### 3. Freshness / Authority Reconciliation

For material conflicts, classify:
- AUTO_FIX_SAFE
- AUTO_FIX_MEDIUM
- AUTHOR_GATE
- REJECT_UNSUPPORTED

Use explicit author decisions / CDL and current approved content as evidence.

Do not assume:
- "canon file always wins"
- "newer file always wins"
- "working file always loses"

Truth must come from evidence + authority + supersession.

### 4. Batch Genuine Author Conflicts

Do NOT ask author about:
- obvious stale wording
- superseded legacy claims
- perspective differences
- different timeline states
- different abstraction layers
- local presentation details

Only add to `05_author_gate_conflicts.md` when:
- two active high-authority claims genuinely conflict;
- no supersession evidence exists;
- choosing silently changes story meaning.

For each:
- plain-language conflict
- evidence A/B
- why AI cannot resolve
- downstream impact
- recommendation

### 5. Safe Writeback

If existing `story-canon-sync-gate` authorizes safe automatic writeback, apply only supported local safe fixes.

Do not perform broad prose rewrites.

## Required Output

1. current baseline
2. Fact Map delta status
3. files checked
4. safe fixes applied
5. unsupported legacy claims rejected
6. genuine AUTHOR_GATE issues
7. unresolved source gaps
8. whether current story truth is safe enough for Stage 2

Final status:
- `CURRENT_TRUTH_BASELINE_READY`
- `CURRENT_TRUTH_BASELINE_PARTIAL_AUTHOR_GATE`
- `BLOCKED_BY_SOURCE_GAP`
