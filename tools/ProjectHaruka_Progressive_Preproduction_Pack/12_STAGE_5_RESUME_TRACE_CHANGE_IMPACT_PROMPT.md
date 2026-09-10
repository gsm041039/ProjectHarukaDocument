# STAGE 5 — RESUME / TRACE / CHANGE-IMPACT HARDENING

Prerequisite: progressive routing accepted.

## Goal

Prove the workflow survives long-running work and upstream changes.

Do not build a giant new dependency database.

Use existing:
- state files
- CDL / Fact IDs
- Act / Beat references
- temp run manifest / evidence digest
- repository search
- current control files

## Durable State Must Be Able to Recover

- current development target
- current abstraction level
- last approved parent artifact
- current child artifact
- open author decision
- unresolved dependency
- provisional assumptions
- next safe action
- downstream artifacts known to depend on a changed decision

Add small fields/sections to existing state owners only if necessary.

Do NOT create a new permanent `PROGRESSIVE_STATE.md` unless no existing state owner can carry this.

## Resume Test

Simulate fresh session with no conversation memory.

The only user message is:
> 繼續上次 Act I。

The agent must recover:
- current target
- current layer
- what is already settled
- what question is pending
- next safe action

without asking the author to restate known decisions.

## Trace Test

For one existing story element, demonstrate:

upstream reason/source
→ Act/Sequence/Beat use
→ downstream scene/reference

Also reverse:
scene/beat
→ why it exists / which obligations it satisfies

Use existing references where possible.

## Upstream Change Test

Simulate a material upstream change.

Classify downstream:
- NO_CHANGE
- REVALIDATE
- PATCH_REQUIRED
- INVALIDATED
- AUTHOR_REVIEW_REQUIRED

Do not rewrite unrelated work.

## Source-Use Test

For a sample production task, record:
- relevant sources found
- read
- used to constrain output
- checked but not visibly expressed
- excluded with reason
- ignored without reason

Requirement:
`IGNORED_WITHOUT_REASON = 0`

Do this in temp evidence records; do not create a permanent giant source-usage database.

## Temp Record

Update:
- `10_resume_trace_impact_test.md`
- `13_run_manifest.md`

Final status:
- `RESUME_TRACE_IMPACT_READY`
- `RESUME_TRACE_IMPACT_PARTIAL`
