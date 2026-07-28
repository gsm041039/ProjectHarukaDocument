---
name: story-static-site-sync
version: v1.0-canon-decision-full-sync
summary: Synchronize all approved story canon and author decisions into a structurally stable static HTML reference website, preserving content truth, repairing dependent summaries and navigation, and allowing controlled design adjustments only when they improve accurate presentation.
---

# Story Static Site Sync — Canon + Decision Full-Site Synchronizer

## Purpose

Use this skill when Project Haruka canon documents or author decision records have changed and the static story-information website must be brought fully up to date.

This skill is **not** a general website redesign tool and **not** a canon-authoring tool.

Its job is to:

1. Discover the canonical source set and decision records.
2. Reuse `story-canon-sync-gate` truth-arbitration rules rather than inventing a second canon system.
3. Build an atomic change manifest from the current website against current approved truth.
4. Update **all canon-bearing website content**, including additions, removals, replacements, renames, ordering changes, summaries, cross-references and derived reader aids.
5. Preserve stable HTML/CSS/JS architecture where possible.
6. Permit controlled design adjustments when existing presentation cannot represent current canon clearly or safely.
7. Validate semantic completeness, structural integrity and browser-facing behavior.
8. Report exactly what changed, what was intentionally preserved and what remains blocked.

---

## Scope

### In scope

- Story cards / story stages / story beats
- Act structure and event order
- Timeline entries
- Character facts, names, roles, psychology, motivations, trauma, status and visual descriptions
- Character relationships
- Emotional rules, emotional conservation, emotional mechanisms and emotional-state terminology
- Worldbuilding, factions, geography, politics and institutions
- Magic-system rules, costs, transformations, corpses and devices
- Themes, directing principles and reader explanations
- Endings and interpretation sections
- Game-system descriptions when they are canon-bearing
- Appendices, glossaries and name tables
- Sidebar links, dashboard cards, anchors, tags, counts and summaries derived from changed canon
- Image captions, alt text and references when source material explicitly supports the change
- Controlled layout/component adjustments needed to present updated canon

### Out of scope unless explicitly requested

- Inventing new canon
- Promoting proposals or hypotheses to fact
- Rewriting the entire visual identity for taste alone
- Replacing the site framework or build system
- Generating new artwork
- Publishing/deploying to a remote host
- Editing unrelated code or assets

---

## Entry Conditions

Before editing, identify:

- `SITE_TARGET`: current static HTML file or site root
- `CANON_ROOT`: canon document root
- `DECISION_SOURCES`: `CANON_DECISION_LOG.md`, CDL files, author-approved decision records, approved outlines or equivalent
- `OUTPUT_MODE`: in-place edit, new versioned HTML, or patch/diff only
- `ASSET_ROOT`: image and linked-file base path

If paths are not explicitly supplied, search the project. Do not ask before searching.

If multiple plausible site targets exist, rank them by:

1. Explicitly named current target
2. Highest supported version marked active/current
3. Most recently modified non-backup file
4. File with the most complete current navigation and section set

Only ask the author when two active targets remain equally plausible and selecting one could overwrite meaningful work.

---

## Authority Model

The website is a **derived reader-facing artifact**, never the ultimate truth source.

Truth priority:

1. Explicit author-approved decision / CDL / decision record
2. Approved canon file supported by current decisions
3. Approved current act outline or authoritative project brief
4. Active working file with explicit decision support
5. Existing website text, only when not contradicted by stronger sources
6. Draft / TEMP / backup content as candidate evidence only

When canon and decision records interact:

- A later explicit author decision may supersede older canon wording.
- A decision record that only expresses interest, possibility or discussion does not override canon.
- Canon unsupported by later decisions remains valid unless contradicted.
- When two approved sources conflict and the decision records do not resolve the conflict, use `AUTHOR_GATE`.

Never silently reconcile contradictions by writing vague prose.

---

## Required Orchestration

When called through `story-orchestrator`, use:

1. `story-router` — classify as `STATIC_SITE_SYNC`
2. `story-context-manager` — set a full internal audit budget; visible output may remain compact
3. `story-source-recovery-gate` — locate named and dependent canon sources
4. `story-canon-sync-gate` — determine current truth and unresolved conflicts
5. `story-static-site-sync` — map and apply site changes
6. `story-grounding-auditor` — verify every changed factual claim
7. Optional specialist checks:
   - `story-motivation-grounding` for changed motivation/psychology
   - `story-outline-synthesis-gate` for act/event-order changes
   - `story-director-room` for directing-language sections
8. Mini Log

Do not use `story-writeback` to treat the website as canon. The website is downstream of canon writeback.

---

## Mandatory Workflow

### Phase 0 — Safety Snapshot

Before editing:

- Record target file path, size, hash and detected version/title.
- Create a backup or write to a versioned output file unless the user explicitly requests in-place only.
- Detect encoding, linked assets, inline CSS, inline JS and external dependencies.
- Record all HTML `id` values and internal `href="#..."` references.
- Record repeated component patterns and section boundaries.

Do not begin content replacement until the site parses successfully or its pre-existing parse errors are documented.

### Phase 1 — Source Discovery Ledger

Build a source ledger for all relevant canon and decision documents:

```text
PATH
TYPE
STATUS
VERSION / DATE
AUTHORITY
DECISION SUPPORT
RELEVANT DOMAINS
TRUST VERDICT
```

Relevant domains include:

```text
premise
world
laws
emotional-system
magic-system
characters
relationships
story-cards
act-structure
timeline
ending
game-bearing-canon
appendix
visual-description
terminology
```

Do not read only the single file mentioned by the user. Search dependent sources for every changed domain.

### Phase 2 — Canon Truth Map

Use atomic claims. Each claim must contain:

```text
CLAIM_ID
SUBJECT
PREDICATE
VALUE
STATUS: CURRENT_FACT | SUPERSEDED | CANDIDATE | UNSUPPORTED | CONFLICTED
SOURCE
DECISION_REFERENCE
EFFECTIVE_ORDER / DATE if relevant
DEPENDENCIES
```

Examples:

```text
STORY.ACT_COUNT = 4
LAW.EMOTIONAL_CONSERVATION.STAGE_COUNT = 7
CHAR.AKIHO.ACT_III_DECISION = betrays Haruka to save Airi
TIMELINE.LIBERATION_BATTLE.ORDER = after Rin recognition collapse
```

### Phase 3 — Website Content Inventory

Inventory the current website by semantic component, not just line number:

```text
SITE_AREA
DOM_ANCHOR / SELECTOR
COMPONENT_TYPE
CURRENT_SUBJECTS
DERIVED_OR_DIRECT
SOURCE_TRACE if present
UPDATE_SENSITIVITY
```

For the supplied Story Brief site, expected stable areas may include:

- `#reader-map`
- `#what`, `#why`, `#directing`, `#theme`
- `#world`, `#laws`, `#hidden-mechanisms`, `#mahou`, `#depiction`
- `#chars`, character cards such as `#c-haruka`
- `#rels`
- `#story`, `#ending`, `#timeline`
- `#game`
- `#appendix`, `#appendix-b`

These IDs are navigation contracts. Preserve them unless a deliberate migration is required.

### Phase 4 — Change Impact Graph

For every changed claim, identify all direct and derived website impacts.

Example:

```text
Canon change: story card added
→ story-stage card
→ act summary
→ timeline
→ character arc summaries
→ relationship consequences
→ reader dashboard description/count
→ sidebar/nav if a new anchor is introduced
→ appendix/glossary if a new term is introduced
```

A change is incomplete if only the most obvious paragraph is edited while dependent summaries remain stale.

Required impact classes:

- `DIRECT_TEXT`
- `DERIVED_SUMMARY`
- `ORDERING`
- `COUNT_OR_LABEL`
- `ANCHOR_OR_NAV`
- `CROSS_REFERENCE`
- `CHARACTER_STATE`
- `TIMELINE`
- `VISUAL_CAPTION`
- `LAYOUT_CAPACITY`

### Phase 5 — Update Classification

Classify each proposed site change:

#### `CONTENT_SYNC_SAFE`

Apply automatically:

- Supported factual replacement
- Added/removed story card
- Updated terminology
- Corrected count, label or ordering
- Character fact/relationship update explicitly supported
- Timeline insertion/removal/reorder explicitly supported
- Derived summary repair
- Broken internal reference repair

#### `CONTENT_SYNC_SEMANTIC`

Apply only when canon-sync evidence is strong:

- Rewriting a paragraph to reflect several approved changes
- Reorganizing a section because canon categories changed
- Combining or splitting cards without changing meaning
- Updating first-reader explanation while preserving source meaning

Report these separately.

#### `DESIGN_ADJUST_CONTROLLED`

Allowed without separate approval when all are true:

- Needed to fit or clarify approved content
- Local and reversible
- Existing visual language remains recognizable
- No information is hidden or downgraded
- Mobile and desktop behavior remain functional

Examples:

- Add a new card variant for a new canon category
- Change grid span because a section became longer
- Add a collapsible full-text block
- Add/update timeline node styling
- Improve labels, hierarchy or overflow handling

#### `DESIGN_GATE`

Ask the author before applying when the proposal:

- Changes global visual identity
- Removes a major reader pathway
- Replaces navigation architecture
- Introduces a new framework/build dependency
- Makes broad aesthetic changes unrelated to canon clarity
- Requires substantial asset replacement

#### `AUTHOR_GATE`

Stop factual application for the affected claims when:

- Approved sources conflict
- Decision wording is ambiguous between candidate and final
- A removal may erase intentionally retained history
- Event order, relationship meaning, character motivation or ending meaning cannot be resolved

Continue applying unrelated safe updates.

### Phase 6 — Patch Strategy

Prefer structural patching over full regeneration.

Patch order:

1. Metadata/version/title if required
2. Navigation and reader-map dependencies
3. Core system/world rules
4. Character database
5. Relationships
6. Story cards/stages and act summaries
7. Timeline
8. Ending
9. Game-bearing canon
10. Appendices/glossaries
11. Captions/alt text
12. Controlled CSS/layout changes
13. JS only when component behavior requires it

Rules:

- Preserve unrelated CSS and JS byte-for-byte where practical.
- Preserve existing IDs for unchanged concepts.
- When renaming an anchor, update every inbound link and consider a compatibility alias.
- Do not use blind global replacement for character names or technical terms without context checks.
- Do not delete a card solely because it is absent from one source; require evidence of removal/supersession.
- For added story cards, place them by approved causal/event order, not file order.
- For removed canon, remove or clearly archive all derived references; do not leave ghost summaries.
- Do not convert uncertain facts into confident reader prose.

### Phase 7 — Proactive Missing-Work Detection

Before finalizing, automatically identify work that should be completed first or alongside the update.

Required checks:

- Is canon truth arbitration complete?
- Do changed story cards require timeline changes?
- Do character state changes require relationship and ending updates?
- Do new emotional rules require law diagrams, glossary and game-system updates?
- Do renamed terms require global cross-reference migration?
- Do additions make existing counts or dashboard claims false?
- Is a new component required to avoid forcing content into the wrong visual structure?
- Are image captions now inconsistent with character design canon?

Output:

```text
PRECONDITION / COMPANION WORK
REQUIRED_NOW
RECOMMENDED
NOT_NEEDED
BLOCKED
```

Do not merely list missing work; automatically perform `REQUIRED_NOW` items when supported and in scope.

### Phase 8 — Validation

#### Canon validation

- Every changed factual sentence has supporting source evidence.
- No candidate/hypothesis is presented as canon.
- Removed and superseded content no longer appears as current truth.
- All major changed domains have dependent-summary coverage.

#### HTML validation

- HTML parses.
- IDs are unique.
- Every internal anchor target exists.
- Sidebar and dashboard links work.
- No accidental nested interactive elements.
- Tables/lists/details remain structurally valid.
- Images retain valid paths or are explicitly reported missing.
- Text encoding remains UTF-8.

#### Presentation validation

- Desktop layout has no unintended horizontal page overflow.
- Mobile navigation and responsive layouts remain functional.
- New/changed cards are readable.
- Long prose is not forced into overly narrow columns.
- Design changes are local, justified and reversible.

#### Diff validation

- No unrelated content loss.
- No unexplained large diff.
- CSS/JS changes correspond to named design requirements.
- Final output differs only where the manifest predicts.

When browser automation is available, render at desktop and mobile widths and inspect key sections. Otherwise perform static checks and state that visual browser validation was unavailable.

---

## Required Output Contract

Begin with:

```md
STATIC SITE SYNC PLAN
Site Target: ...
Canon Root: ...
Decision Sources: ...
Mode: FULL_CANON_SYNC
Design Policy: CONTROLLED_ADJUSTMENTS_ALLOWED
Output Mode: ...
```

After work, report:

```md
SOURCE VERDICT
- ...

SYNC SUMMARY
- Added: ...
- Updated: ...
- Removed: ...
- Reordered: ...
- Derived references repaired: ...

DESIGN ADJUSTMENTS
- Applied: ...
- Preserved: ...
- Gated/not applied: ...

VALIDATION
- Canon grounding: PASS / PARTIAL / FAIL
- HTML structure: PASS / PARTIAL / FAIL
- Anchors/navigation: PASS / PARTIAL / FAIL
- Responsive/static checks: PASS / PARTIAL / FAIL
- Browser render check: PASS / NOT AVAILABLE / FAIL

UNRESOLVED AUTHOR GATES
- ...

FILES
- Backup: ...
- Updated output: ...
- Diff/manifest: ...
```

End with:

```md
Mini Log
Done: ...
Pending: ...
Blocked: ...
Next: ...
```

---

## Hard Rules

- Canon + explicit decisions jointly determine truth.
- Website text never overrides stronger canon sources.
- Sync all affected canon-bearing sections, not only the requested example.
- Search before declaring information missing.
- Do not invent connective explanations.
- Do not preserve stale text merely to minimize diff.
- Do not redesign globally without `DESIGN_GATE`.
- Do not modify canon files from this skill.
- Do not publish/deploy unless explicitly asked and supported.
- Never finish with broken anchors, duplicate IDs or knowingly stale derived summaries.
