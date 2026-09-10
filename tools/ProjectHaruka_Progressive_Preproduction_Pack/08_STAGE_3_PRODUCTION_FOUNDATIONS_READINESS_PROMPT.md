# STAGE 3 — PRODUCTION FOUNDATIONS READINESS

Prerequisite: control layer accepted.

## Goal

Check that the non-plot foundations needed for later Scene / Dialogue production already have usable owners, without forcing every future detail to be completed now.

This stage is about READY-ON-DEMAND infrastructure.

## Audit Areas

### A. Character Foundations
Audit existing systems for:
- character stable core
- current dynamic state
- knowledge
- relationship
- performance
- speaking/voice
- scene-specific state

Prefer existing character canon + Fact Map + existing character-foundation / voice workflow.

Do NOT create duplicate per-character bibles unless the existing workflow itself requires them.

### B. Directing Foundations
Audit:
- `canon/11_directing_playbook.md`
- director pipeline skills/docs
- directing-language auditor
- performance / expression planners

Distinguish:
- Project Haruka confirmed directing grammar
- provisional/personal director taste evidence

Do NOT invent a new Director Profile unless no current mechanism can preserve useful author feedback.

### C. Gameplay / Narrative Foundations
Audit:
- `canon/10_gameplay_bible.md`
- current gameplay/directing integration skills
- control ownership/readability rules

Ensure later scenes can retrieve relevant gameplay constraints on demand.

### D. Temporary Run Workspace
Check whether Codex has a durable run-workspace mechanism equivalent to the existing Claude-side `story-run-workspace-manager`.

Preferred:
1. extend existing Codex context manager if sufficient;
2. otherwise PORT the existing Claude run-workspace capability into `.agents` with minimal adaptation.

This is a compatibility port, not a new conceptual system.

### E. Sequence Boundary / Scene Handoff
Check whether Codex has the capability to move:
Beat/Sequence → Scene boundary → Scene architecture.

If a needed skill exists only on Claude side:
- consider porting the existing skill;
- do not invent a different skill with overlapping responsibility.

## Temp Record

Update:
- `07_foundation_readiness.md`
- `13_run_manifest.md`

## Required Output

For each foundation:
- existing owner
- ready now?
- stale?
- missing on Codex?
- patch / extend / port?
- why no new system is required

Allowed permanent changes in this stage:
- small patches
- justified compatibility ports of already-existing Claude capabilities

New conceptual system should remain 0 unless proven unavoidable.

Final status:
- `FOUNDATIONS_READY_ON_DEMAND`
- `FOUNDATIONS_PARTIAL`
