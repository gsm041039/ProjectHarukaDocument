# story-source-recovery-gate — Search Before Gap

## Purpose
Prevent the assistant from mistaking “not currently in context” for “not in canon”. This skill is mandatory before marking a named setting/event as missing.

## Core Rule

```text
UNKNOWN_UNSEARCHED ≠ MISSING
NOT_YET_SEARCHED ≠ NEEDS_CANON_SUPPORT
```

## When to Invoke
Invoke automatically when:
- user mentions a named setting, event, organization, device, drug, crisis, CDL, outline beat, or character detail
- assistant is about to ask “is this canon?”
- assistant is about to mark something as `NEEDS_CANON_SUPPORT`
- user says “canon 有，你自己搵”
- discussion needs to fit new idea into existing events

## Required Search Strategy
Search by:
1. exact term
2. aliases / likely variants
3. related terms
4. location in likely files

For narrative canon, likely files include:
- `canon/00_series_bible.md`
- `canon/01_world_rules_and_costs.md`
- `canon/02_glossary.md`
- `canon/03_character_index.md`
- `canon/03_characters/*.md`
- `canon/04_timeline_canon.md`
- `canon/05_story_outline_canon.md`
- `canon/07_entities_and_devices.md`
- `canon/08_narrative_design_bible.md`
- `canon/13_major_events_relationship_impact.md`
- `canon/_working/QUESTION_QUEUE.md`
- `canon/_working/CANON_DECISION_LOG.md`
- `canon/_working/story_construction/*.md`

## Retrieval Tiers (2026-09-11, formalizing existing behavior — not a new search order for every task)
- **Tier 1 — Always Current Authority**: durable state files, `CANON_DECISION_LOG.md`, the target Act's current Outline/Beat Sheet, story-control obligation tables. If a Fact Map domain is known-stale (see `canon_fact_map/BUILD_LEDGER.md` delta status), use the canon `*.md` file directly instead of the stale Fact Map row.
- **Tier 2 — Target-Specific Required**: character sheets, relationship/knowledge state, gameplay bible, directing playbook, visual bible, habit/sensory material — read when the specific task names them (character in scene, beat type, etc.), not by default for every task.
- **Tier 3 — Conditional Legacy/Backup** (`backup/*`): read only when triggered — current source cross-references it, provenance is incomplete, a legacy Scene Reference may hold reusable execution detail, current source lacks execution context, or a historical alternative needs comparison. **Do not blind-sweep the entire `backup/` tree for routine work; backup content never silently overrides current truth.**

## Output Digest
Do not dump full search output. Return a digest:

```md
Source Recovery Digest
Searched: <terms / aliases>
Found:
- <file / section>: <short fact>
Partial / uncertain:
- ...
Not found:
- ...
Allowed next step: <continue discussion / ask author / mark gap>
```

## Gap State Ladder

```text
UNKNOWN_UNSEARCHED
→ SOURCE_RECOVERY_REQUIRED
→ SEARCHED_FOUND
→ SEARCHED_PARTIAL
→ SEARCHED_NOT_FOUND
→ NEEDS_CANON_SUPPORT / AUTHOR_QUESTION only if still unsupported
```

## Important Behavior
If the canon item is found, resume creative discussion. Do not get stuck in lookup mode.

If the item is partially found, propose the strongest safe version and mark remaining uncertainty.

If not found, ask a focused author question or propose a hypothesis sandbox entry.
