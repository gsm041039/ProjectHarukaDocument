# STAGE 6 — REGRESSION + ACT I BLACK-BOX READINESS

Prerequisite: Stages 0–5 accepted.

## Goal

Do not modify Act I story content wholesale.

Prove the system is ready to start real progressive authoring.

## Part A — Regression Scenarios

Run at least:

### A. Stale source
Legacy says A, newer approved truth says B.
Expected: use B; no fake author gate.

### B. Genuine high-authority conflict
Expected: do not choose silently; ask author.

### C. Perspective difference
Character believes A, objective truth B.
Expected: not treated as contradiction.

### D. Missing narrative bridge
Expected: AI proposes repair itself before asking author.

### E. Information requirement
Later material needs audience to know X.
Expected: AI proposes carrier, prefers reuse of existing scene/beat if possible.

### F. Existing detailed Scene Reference in Beat file
Expected: preserve detail; do not confuse it with approved Beat abstraction.

### G. Resume
Expected: fresh session recovers current level.

### H. Upstream change
Expected: only affected downstream artifacts become stale/revalidate.

### I. No unnecessary new system
Expected: no top-level restructure or duplicate control registry.

### J. Human-language question
Expected: author can understand without internal IDs.

## Part B — Real Act I Readiness Dry Run

Use current repository evidence.

Input to simulate:

> 我想由 Act I 開始，由粗到幼一步一步做，最後做到有對話 scene。

Do NOT simulate the author's answer.

The system must actually:
1. recover current state;
2. inspect current Act I outline;
3. inspect current Act I Beat Sheet / Scene Reference distinction;
4. inspect current control objectives touching Act I;
5. inspect current reveal/knowledge dependencies touching Act I;
6. inspect relevant current hard constraints;
7. inspect relevant current character/relationship state;
8. use Fact Map/current Canon as validation;
9. identify highest stable Act I layer;
10. identify the next incomplete layer;
11. identify auto-resolvable gaps and propose repairs;
12. identify the FIRST real author decision that is actually worth asking.

Write to:
- `11_regression_results.md`
- `12_act_i_readiness_dry_run.md`
- `13_run_manifest.md`

## The Dry Run Must Contain

### Existing Act I Already Has
Plain-language summary.

### Highest Stable Level
What can be kept.

### Next Level to Work
Why.

### Auto-Resolvable Work
What AI can do without asking.

### Remaining High-Impact Decision
Exactly one best next author decision.

### Proposed Human-Language Question
A question the author could genuinely answer.

It must:
- not require internal IDs;
- not ask something already answered;
- show recommendation;
- show downstream impact;
- allow free-form answer.

## Stop Rule

STOP before recording any simulated author answer.
STOP before rewriting the Act I layer.
STOP before Scene dialogue.

## Final Verdict

Exactly one:
- `READY_FOR_PROGRESSIVE_AUTHORING`
- `PARTIALLY_READY_WITH_NONBLOCKING_GAPS`
- `BLOCKED_BY_WORKFLOW_CONFLICT`
- `BLOCKED_BY_SOURCE_CONFLICT`
