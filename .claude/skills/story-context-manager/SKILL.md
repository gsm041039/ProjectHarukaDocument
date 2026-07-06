# story-context-manager — Output Budget, Scratchpad, and Anti-Context-Bloat

## Purpose
Control context usage while preserving creative usefulness.

## v1.3 Correction
Do not make discussion mode too short or passive. Compact output should still contain a real recommendation.

## Output Budgets

### compact
Use for co-design conversation.
- 1 core judgment
- 2–3 options or 1 recommended direction
- source/gap notes only if decision-relevant
- mini log

### standard
Use for motivation review / scene planning.
- short evidence scan
- support status
- recommendation
- risks
- mini log

### full
Use only when user asks full audit, writeback, approval, or major outline review.
- full checklist
- multi-agent notes
- complete QA

## Scratchpad Policy
Intermediate reasoning may be written to:
- `canon/_working/.tmp/current_run.md`
- `canon/_working/.tmp/current_run_evidence.md`
- `canon/_working/.tmp/current_run_agent_notes.md`

These are temporary. They are not canon and not a new working system.

## Evidence Digest Rule
After reading large files, compress into a digest:

```md
Evidence Digest
file:
relevant fact:
uncertainty:
usable for current task:
```

Carry the digest forward, not the whole file.

## Visible Output Rule
The user should see:
- call plan
- compact answer
- mini log

The user should not see:
- all internal agent notes
- full checklist
- long grep output
unless requested.

## Creative Compactness Rule
Compact does not mean “ask only one question and stop.” Compact means:
- answer the creative question
- offer a useful recommendation
- mark what must be checked
- ask at most one high-value next question
