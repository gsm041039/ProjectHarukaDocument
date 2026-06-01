# story-canon-fact-map-builder

## Purpose

This skill builds a structured Canon Fact Map from Project Haruka story documents.

It does not rewrite story prose.

It reads canon / working / decision-log documents, extracts atomic claims, classifies authority and freshness, builds fact tables, and validates coverage before downstream conflict-resolution.

This v2 version adds strict completeness auditing.

The skill must not claim `FACT_MAP_BUILT` merely because it extracted many facts.

A Fact Map is incomplete if it misses required identity, name-chain, timeline, relationship, event, world-rule, knowledge-state, transformation-state, terminology, or theme dimensions.

---

# Core Principle

Do not compare whole prose documents directly.

Convert documents into atomic claims first.

Then build fact tables.

Then run coverage audits.

Then validate.

Correct pipeline:

```text
documents
→ DOC_REGISTER
→ CLAIM_INDEX
→ fact tables
→ COVERAGE_MATRIX
→ validation audit
→ FACT_MAP_BUILT only if all required dimensions pass
```

The agent must distinguish:

- objective canon truth
- character belief
- rhetoric / accusation
- narrator framing
- old draft residue
- temp-only claim
- btd / placeholder
- design gap
- presentation note
- unsupported prose glue
- author-approved decision
- active working truth candidate
- stale canon summary

---

# Absolute Rule: No Premature Completion

The agent must not declare:

```text
FACT_MAP_BUILT
100% complete
zero contradictions confirmed
ready for Beat Sheet
canon stable
```

unless all required tables and all required coverage audits pass.

If any required table or required coverage dimension is missing, final status must be one of:

```text
FACT_MAP_PARTIAL_BUILT
FACT_MAP_INCOMPLETE
FACT_MAP_NEEDS_COMPLETENESS_REMEDIATION
FACT_MAP_BUILT_READY_FOR_USE_PENDING_LIMITATIONS
```

Only after final audit may the status become:

```text
FACT_MAP_BUILT
```

---

# Supported Modes

## BUILD_FACT_MAP

Build or refresh fact map from requested scope.

## INCREMENTAL_UPDATE

Update fact map for changed files only.

## VALIDATE_AGAINST_FACT_MAP

Audit existing fact map.

## REBUILD_FROM_SCRATCH

Ignore cache and rebuild all fact-map files.

## COMPLETENESS_AUDIT

Run strict coverage audit across all required fact dimensions.

Use this when the user says:
- 有好多嘢未做
- Fact Map 好似漏咗資料
- name / alias 唔齊
- 角色設定漏抽
- 事件 / timeline / relationship 未完整
- 驗證似假完成

## REMEDIATE_COMPLETENESS_GAPS

Fill missing required fact dimensions found by COMPLETENESS_AUDIT.

---

# Output Folder

Default:

```text
canon/_working/canon_fact_map/
```

If project uses:

```text
canon_working/
```

then use:

```text
canon_working/canon_fact_map/
```

---

# Required Persistent Files

The skill must create and maintain:

```text
DOC_REGISTER.md
CLAIM_INDEX.md
CHARACTER_FACTS.md
CHARACTER_NAME_FACTS.md
CHARACTER_STATE_FACTS.md
CHARACTER_KNOWLEDGE_FACTS.md
EVENT_FACTS.md
TIMELINE_FACTS.md
RELATIONSHIP_FACTS.md
WORLD_RULE_FACTS.md
TERMINOLOGY_FACTS.md
THEME_FACTS.md
DESIGN_GAPS.md
SOURCE_GAPS.md
CONFLICT_CANDIDATES.md
VALIDATION_REPORT.md
BUILD_LEDGER.md
COVERAGE_MATRIX.md
MISSING_FACT_DIMENSIONS.md
FACT_ID_REGISTRY.md
FACT_MAP_SCHEMA.md
```

Optional audit folder:

```text
audits/
```

Recommended audit files:

```text
audits/COMPLETENESS_AUDIT_SUMMARY.md
audits/CHARACTER_COVERAGE_AUDIT.md
audits/EVENT_COVERAGE_AUDIT.md
audits/WORLD_RULE_COVERAGE_AUDIT.md
audits/RELATIONSHIP_COVERAGE_AUDIT.md
audits/TIMELINE_COVERAGE_AUDIT.md
audits/THEME_COVERAGE_AUDIT.md
audits/TERMINOLOGY_COVERAGE_AUDIT.md
audits/SOURCE_TRACE_AUDIT.md
audits/TEMP_DRAFT_UPLIFT_AUDIT.md
```

---

# Hard Boundaries

This skill must not:

- rewrite story prose
- update PROJECT_STATUS / NEXT_ACTION / SESSION_LEDGER
- update project-level QUESTION_QUEUE
- start Beat Sheet
- ask scene placement questions
- ask design-gap questions
- declare project readiness
- promote TEMP-only claims into canon
- invent missing facts
- smooth contradictions with literary prose

If contradiction is found, record it in:

```text
CONFLICT_CANDIDATES.md
```

If a source is missing, record it in:

```text
SOURCE_GAPS.md
```

If a design gap is found, record it in:

```text
DESIGN_GAPS.md
```

---

# Reading Scope Rules

## Include

When scanning `canon/`, include story-content files:

- story brief
- series bible
- story outline canon
- act outlines
- character index
- character docs
- world rules
- glossary
- timeline canon
- theme docs
- reveal docs
- decision logs / CDL / author decisions
- approved working docs
- active working story docs if they contain candidate newer truth

## Exclude by default

Do not use these as canon truth sources:

```text
PROJECT_STATUS.md
NEXT_ACTION.md
SESSION_LEDGER.md
project-level QUESTION_QUEUE.md
TODO.md
roadmap files
approval status files
project progress files
```

They may be listed as excluded in DOC_REGISTER, but must not contribute canon facts.

---

# Atomic Claim Extraction

Every claim must be one concrete statement.

Good examples:

```text
彩的原名是澄川彩。
彩被帝國皇帝收養後改名為神樂彩。
黑奏是彩的另一人格 / 帝國皇帝人格。
夕在改變現實時成功執行，但結果沒有修復創傷。
朱音在帝國廣場救援事件中犧牲。
嘆息之橋目前是 DESIGN_GAP_ONLY，沒有已定 canon 事件。
```

---

# Claim Index

All extracted claims go into CLAIM_INDEX.md.

Format:

```markdown
| Claim ID | Claim Text | Claim Type | Subject | Predicate | Object/Value | Source Doc | Source Section | Authority | Freshness | Support | Confidence | Status | Fact ID |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
```

Claim Type values:

- CHARACTER_FACT
- CHARACTER_NAME_FACT
- CHARACTER_STATE_FACT
- CHARACTER_KNOWLEDGE_FACT
- EVENT_FACT
- TIMELINE_FACT
- WORLD_RULE_FACT
- THEME_FACT
- RELATIONSHIP_FACT
- TERMINOLOGY_FACT
- META_DOC_FACT
- DESIGN_GAP
- SOURCE_GAP
- CHARACTER_BELIEF
- RHETORIC
- ACCUSATION
- PRESENTATION_NOTE
- UNSUPPORTED_GLUE

---

# Fact ID Rules

Each fact must have stable ID.

Prefixes:

```text
CF-CHAR-####   Character general fact
CF-NAME-####   Character name / alias / rename fact
CF-STATE-####  Character body/survival/transformation/knowledge state
CF-EVT-####    Event fact
CF-TIME-####   Timeline / dependency fact
CF-WORLD-####  World rule fact
CF-THEME-####  Theme fact
CF-REL-####    Relationship fact
CF-TERM-####   Terminology fact
CF-GAP-####    Design gap
```

Do not create duplicate IDs for same fact.

---

# Required Fact Tables

## CHARACTER_FACTS.md

General stable character facts.

```markdown
| Fact ID | Character | Attribute | Current Value | Status | Canon Source | Supporting Sources | Conflicting Claims | Confidence | Notes |
|---|---|---|---|---|---|---|---|---|---|
```

Required attributes per major character:

- current canonical identity
- role
- faction / affiliation
- core motivation
- core trauma
- main arc
- key relationship anchors
- final known state
- source authority

## CHARACTER_NAME_FACTS.md

Required. Name and alias chains.

```markdown
| Fact ID | Character | Name Type | Name Value | Applies To | Rename / Usage Cause | Source Doc | Source Claim ID | Status | Notes |
|---|---|---|---|---|---|---|---|---|---|
```

Name Type values:

- birth_name
- original_name
- current_name
- adopted_name
- imperial_name
- alias
- codename
- personality_name
- title
- idol_name
- stage_name
- alpha_name
- beta_name
- deprecated_name
- temp_only_name

Required for every major character:

- current_name
- display_name
- alias mapping if any alias appears in canon
- personality_name if split personality exists
- codename if Unit / system name exists
- former name if name changed
- rename/adoption/transformation cause if known
- status of each name

If any role/name chain is incomplete, record:

```text
NAME_CHAIN_INCOMPLETE
```

in MISSING_FACT_DIMENSIONS.md.

Example for 彩:

```text
original_name = 澄川彩
adopted / imperial / current name = 神樂彩
personality_name = 黑奏
short display name = 彩
rename cause = 帝國皇帝收養後改名
```

## CHARACTER_STATE_FACTS.md

Required. Body, survival, transformation, knowledge, and identity-state facts.

```markdown
| Fact ID | Character | State Type | State Value | Applies When | Cause / Trigger | Source Doc | Source Claim ID | Status | Notes |
|---|---|---|---|---|---|---|---|---|---|
```

State Type values:

- alive_dead
- survival_state
- corpse_state
- magical_girl_state
- transformation_state
- unit_state
- body_ownership
- personality_state
- memory_state
- knowledge_state
- denial_state
- reality_state
- role_state

Required checks:

- no character acts after death unless explained by state
- transformation state has trigger/source
- Unit state has source
- knowledge/reveal state is not confused with objective truth
- personality state is separated from legal/current name

## CHARACTER_KNOWLEDGE_FACTS.md

Required if story has reveal control.

```markdown
| Fact ID | Character | Knows What | When Known | How Learned | Belief vs Truth | Source Doc | Source Claim ID | Status |
|---|---|---|---|---|---|---|---|---|
```

Required for:

- Haruka knowing / denying creator truth
- Miyako identity reveal
- Rin / Unit 00 truth
- Kurosou / Aya truth
- Yu / reality change truth
- any Act II/III reveal with audience-control significance

## EVENT_FACTS.md

```markdown
| Fact ID | Event | Date/Time | Location | Participants | Outcome | Status | Canon Source | Supporting Sources | Conflicting Claims | Confidence | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
```

Required event dimensions:

- event name
- date/time
- location
- participants
- causal trigger
- direct outcome
- downstream consequence
- character state changes
- knowledge/reveal changes
- world-rule impact
- design gap status if event is not fixed

## TIMELINE_FACTS.md

```markdown
| Fact ID | Date/Order | Event | Before | After | Dependencies | Canon Source | Conflicts | Confidence |
|---|---|---|---|---|---|---|---|
```

Required checks:

- before/after dependencies
- event cannot depend on future event
- no circular dependencies
- death/sacrifice before later action
- age/time calculation
- Alpha/Beta/reality split dates
- reveal order if knowledge state matters

## WORLD_RULE_FACTS.md

```markdown
| Fact ID | Rule | Definition | Cost | Trigger | Exception | Related Events | Related Characters | Canon Source | Conflicts | Confidence | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
```

Required dimensions:

- definition
- trigger
- cost
- exception
- limitation
- user / actor
- affected target
- related events
- source authority
- contradiction candidates

Must distinguish:

- world rule
- metaphor
- character belief
- institution propaganda
- rhetorical accusation

## RELATIONSHIP_FACTS.md

```markdown
| Fact ID | Character A | Character B | Relationship Type | Initial State | Arc Progression | Final State | Power Dynamic | Key Events | Canon Source | Status |
|---|---|---|---|---|---|---|---|---|---|---|
```

Required dimensions:

- relationship truth
- emotional direction A→B
- emotional direction B→A
- power dynamic
- knowledge asymmetry
- relationship turning points
- final state
- conflict / betrayal / care / dependency markers

## TERMINOLOGY_FACTS.md

```markdown
| Fact ID | Term | Definition | Preferred Spelling | Forbidden / Deprecated Forms | Usage Context | Canon Source | Status |
|---|---|---|---|---|---|---|---|
```

Required dimensions:

- preferred spelling
- variants
- deprecated forms
- Japanese / Chinese / English forms if applicable
- anchor / glossary ID
- usage context
- related world rule / character / event

## THEME_FACTS.md

```markdown
| Fact ID | Theme | Aspect | Expression Method | Character Bearer(s) | Arc Integration | Supporting Events | Narrative Validation | Canon Source | Status |
|---|---|---|---|---|---|---|---|---|---|
```

Required distinction:

- what character believes
- what the story shows
- what final narrative stance is
- whether theme is validated / complicated / rejected / transformed

---

# DESIGN_GAPS.md

Design gaps are not contradictions.

```markdown
| Gap ID | Summary | Affected Area | Why Not Canon Contradiction | Suggested Later Layer | Status |
|---|---|---|---|---|---|
```

Status values:

- DESIGN_GAP_RECORDED_NOT_ASKED
- PRESENTATION_TODO
- BEAT_SHEET_LAYER
- SOURCE_NOTE_ONLY

Forbidden:

- AUTHOR_GATE
- WAITING_FOR_AUTHOR
- BLOCKING
- PENDING_AUTHOR_DECISION

---

# MISSING_FACT_DIMENSIONS.md

Required.

Any missing required dimension must be recorded here.

```markdown
| Missing ID | Entity Type | Entity | Missing Dimension | Why Required | Affected Table | Severity | Suggested Remediation |
|---|---|---|---|---|---|---|---|
```

Severity:

- HIGH
- MEDIUM
- LOW

Examples:

```text
Character 彩 missing original_name/adopted_name/personality_name mapping.
Event 嘆息之橋 missing fixed canon event status; classify as DESIGN_GAP_ONLY.
World rule 情緒守恆 missing exception / cost source.
Relationship X-Y missing B→A emotional direction.
Theme responsibility vs blame missing final narrative stance.
```

A Fact Map cannot be considered complete while any HIGH missing dimension remains.

---

# COVERAGE_MATRIX.md

Required. This is the main completeness control file.

## Character Coverage Matrix

```markdown
| Character | General Facts | Name Chain | State Facts | Knowledge Facts | Relationships | Timeline Links | Theme Links | Coverage Status |
|---|---|---|---|---|---|---|---|---|
```

## Event Coverage Matrix

```markdown
| Event | Date | Location | Participants | Trigger | Outcome | Downstream Consequence | State Changes | Knowledge Changes | World Rule Impact | Coverage Status |
|---|---|---|---|---|---|---|---|---|---|---|
```

## World Rule Coverage Matrix

```markdown
| Rule | Definition | Trigger | Cost | Exception | Limitation | User/Actor | Affected Target | Events | Coverage Status |
|---|---|---|---|---|---|---|---|---|---|
```

## Relationship Coverage Matrix

```markdown
| Pair | A→B Emotion | B→A Emotion | Power Dynamic | Knowledge Asymmetry | Turning Points | Final State | Coverage Status |
|---|---|---|---|---|---|---|---|
```

---

# Completeness Audit Requirements

The fact map must run all checks:

1. Doc Register completeness
2. Claim traceability
3. Character general fact coverage
4. Character name / alias / rename chain coverage
5. Character state / transformation / knowledge coverage
6. Event date / location / participants / outcome coverage
7. Timeline dependency coverage
8. Relationship bidirectional coverage
9. World rule definition / trigger / cost / exception coverage
10. Terminology spelling / variant / deprecated form coverage
11. Theme character-belief vs final-stance coverage
12. Design gap filtering
13. Source gap listing
14. TEMP / draft uplift prevention
15. Conflict candidates classification

If any of checks 3–11 are missing or only sample-checked, validation must not say 100%.

---

# Multi-Agent Fact Extraction

Required reviewers:

1. Doc Register Reviewer
2. Character General Fact Extractor
3. Character Name / Alias Chain Extractor
4. Character State / Transformation Extractor
5. Character Knowledge / Reveal State Extractor
6. Event / Timeline Fact Extractor
7. World Rule Fact Extractor
8. Relationship Fact Extractor
9. Theme / Meaning Fact Extractor
10. Terminology Extractor
11. Source Authority Reviewer
12. Design Gap Filter Reviewer
13. Missing Dimension Reviewer
14. Validation Reviewer

Each reviewer must write results to fact-map files.

---

# Source Authority Rules

When claims disagree, rank by:

1. explicit author decision / CDL / decision log
2. approved act outline
3. approved canon file
4. active working file with clear decision basis
5. current story brief / summary
6. temp outline as navigation only
7. backup / deprecated draft

But still compare claim by claim.

A newer file does not automatically win.

A canon file does not automatically win.

A TEMP file never becomes truth without support.

---

# Character Belief vs Canon Truth

Do not treat dialogue / accusation / rhetoric as objective truth automatically.

Classify as:

- CHARACTER_BELIEF
- RHETORIC
- ACCUSATION
- OBJECTIVE_FACT
- HALF_TRUE_CAUSALITY

If unclear, create conflict candidate.

---

# BTD / Placeholder Handling

`btd`, `待定`, `待 Beat Sheet`, `placeholder`, `設計中` usually means:

```text
DESIGN_GAP_ONLY
```

Do not convert into contradiction unless another source asserts incompatible fixed fact.

---

# Validation Report

VALIDATION_REPORT.md must include:

```markdown
# Validation Report

## Summary

## Checks Run

### Doc Register Completeness
### Claim Traceability
### Character General Fact Coverage
### Character Name / Alias Chain Coverage
### Character State / Transformation / Knowledge Coverage
### Event Coverage
### Timeline Dependency Coverage
### Relationship Bidirectional Coverage
### World Rule Coverage
### Terminology Coverage
### Theme Coverage
### Design Gap Filter
### Source Gap Register
### Temp/Draft Uplift Prevention
### Conflict Candidate Classification

## Checks Not Fully Supported

## Auto-Fix Candidates

## Author-Decision Candidates

## Design Gaps Recorded

## Source Gaps

## Recommended Next Skill
```

Never say all checks pass if required tables / dimensions are missing.

---

# Build Ledger

BUILD_LEDGER.md format:

```markdown
| Build ID | Mode | Scope | Files Read | Claims Extracted | Facts Updated | Missing Dimensions | Conflicts Found | Design Gaps | Source Gaps | Status |
|---|---|---|---|---|---|---|---|---|---|---|
```

---

# Output Requirements

Every run must output:

1. Mode used
2. Scope scanned
3. Fact-map files created / updated
4. Documents registered
5. Claims extracted
6. Current facts updated
7. Missing dimensions found
8. Coverage matrix result
9. Conflict candidates found
10. Design gaps recorded
11. Source gaps recorded
12. Validation summary
13. Final status

Do not output project readiness.

Do not say ready for Beat Sheet.

Use statuses:

```text
FACT_MAP_PARTIAL_BUILT
FACT_MAP_UPDATED
FACT_MAP_NEEDS_COMPLETENESS_REMEDIATION
FACT_MAP_COMPLETENESS_AUDIT_PASSED
FACT_MAP_BUILT_READY_FOR_USE_PENDING_LIMITATIONS
FACT_MAP_BUILT
FACT_MAP_BLOCKED_BY_SOURCE_GAP
```

---

# Recommended Prompt: Completeness Audit

```text
/story-canon-fact-map-builder

Mode: COMPLETENESS_AUDIT

Scope:
canon/_working/canon_fact_map/

審計目前 Fact Map 是否真的完整。
重點不是再數 fact 數量，而是檢查有冇漏 required dimensions。

必查：
1. 每個主要角色是否有 Name / Alias / Rename Chain
2. 每個主要角色是否有 survival / transformation / personality / knowledge state
3. 每個主要事件是否有 date / location / participants / trigger / outcome / downstream consequence
4. 每個關係是否有 A→B / B→A / power dynamic / turning point / final state
5. 每個世界規則是否有 definition / trigger / cost / exception / limitation
6. 每個主題是否區分 character belief / story shows / final narrative stance
7. 每個術語是否有 preferred spelling / variants / deprecated forms
8. DESIGN_GAP 是否沒有被當成 contradiction
9. TEMP / draft 是否沒有被提升成 CURRENT_FACT

請生成 / 更新：
- COVERAGE_MATRIX.md
- MISSING_FACT_DIMENSIONS.md
- audits/COMPLETENESS_AUDIT_SUMMARY.md
- VALIDATION_REPORT.md
- BUILD_LEDGER.md

如果任何 HIGH missing dimension 存在，不准標 FACT_MAP_BUILT。
```

---

# Recommended Prompt: Remediate Missing Dimensions

```text
/story-canon-fact-map-builder

Mode: REMEDIATE_COMPLETENESS_GAPS

Scope:
canon/

根據 MISSING_FACT_DIMENSIONS.md 補齊缺失 fact dimensions。

優先處理 HIGH severity：
- character name / alias / rename chain
- character survival / transformation / knowledge state
- event trigger / outcome / downstream consequence
- relationship bidirectional state
- world rule cost / exception / limitation
- theme character belief vs final stance

不要改 story prose。
只更新 canon_fact_map/。
如果 source 不足，寫 SOURCE_GAPS.md。
如果只是設計缺口，寫 DESIGN_GAPS.md。
完成後 rerun COMPLETENESS_AUDIT。
```

---

# Recommended Pipeline

```text
/story-canon-fact-map-builder
Mode: COMPLETENESS_AUDIT

→ if missing dimensions:

/story-canon-fact-map-builder
Mode: REMEDIATE_COMPLETENESS_GAPS

→ rerun audit

/story-conflict-resolution-gate
Mode: CANON_WIDE_CONFLICT_LOOP
Use canon/_working/canon_fact_map/ as primary validation input.
```

---

# Failure Handling

## If agent claims built while required dimensions missing

Self-correct:

```text
Workflow correction:
Fact count is not completeness. Required fact dimensions are missing.
I will mark FACT_MAP_NEEDS_COMPLETENESS_REMEDIATION.
```

## If name/alias chain is missing

Self-correct:

```text
Workflow correction:
Character identity validation is incomplete without name/alias/rename chain.
I will create/update CHARACTER_NAME_FACTS.md and MISSING_FACT_DIMENSIONS.md.
```

## If state/knowledge facts are missing

Self-correct:

```text
Workflow correction:
Character validation is incomplete without survival/transformation/personality/knowledge state.
I will create/update CHARACTER_STATE_FACTS.md and CHARACTER_KNOWLEDGE_FACTS.md.
```

## If event lacks trigger/outcome/downstream consequence

Self-correct:

```text
Workflow correction:
Event validation is incomplete without trigger, outcome, and downstream consequence.
I will update EVENT_FACTS.md and COVERAGE_MATRIX.md.
```

## If relationship lacks bidirectional state

Self-correct:

```text
Workflow correction:
Relationship validation is incomplete without A→B and B→A state.
I will update RELATIONSHIP_FACTS.md and coverage audit.
```

## If theme lacks final narrative stance

Self-correct:

```text
Workflow correction:
Theme validation is incomplete without distinguishing character belief, story evidence, and final narrative stance.
I will update THEME_FACTS.md.
```

## If agent rewrites prose

Self-correct:

```text
Workflow correction:
This skill builds Fact Map only. I will not rewrite story prose.
```
