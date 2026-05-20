# story-canon-fact-map-builder

## Purpose

This skill builds a structured Canon Fact Map from Project Haruka story documents.

It does not rewrite prose.

It does not resolve all contradictions directly.

It reads canon / working / decision-log documents, extracts atomic claims, classifies their authority and freshness, and writes persistent fact-map files that later skills can use for validation and writeback.

This skill exists because direct prose-to-prose comparison across many story files is unreliable.

Correct workflow:

```text
story-canon-fact-map-builder
        ↓
canon/_working/canon_fact_map/
        ↓
story-conflict-resolution-gate
        ↓
safe writeback / author questions
        ↓
rerun fact validation
```

---

# Core Principle

Do not compare whole documents directly.

Convert documents into atomic claims first.

Then compare:

```text
document prose → atomic claim → fact map → validation
```

The agent must distinguish:

- objective canon truth
- character belief
- narrator framing
- old draft residue
- temporary / btd placeholder
- design gap
- Beat Sheet presentation gap
- unsupported prose glue
- author-approved decision
- active working truth candidate
- stale canon summary

---

# Supported Modes

## BUILD_FACT_MAP

Build or refresh the fact map from the requested scope.

Use when the user says:

- 建 Canon Fact Map
- 建 claim database
- 抽 claims
- 整理所有 canon facts
- 先集合內容
- story-canon-fact-map-builder

## INCREMENTAL_UPDATE

Update the fact map only for files changed since the last ledger entry.

Use when the user says:

- 更新 fact map
- 根據最近修改更新
- incremental
- 只更新 changed files

## VALIDATE_AGAINST_FACT_MAP

Check documents against existing fact map and produce validation report.

This mode does not patch prose.

## REBUILD_FROM_SCRATCH

Ignore existing cache and rebuild all fact-map files.

Use when cache is stale or corrupted.

---

# Output Folder

Default folder:

```text
canon/_working/canon_fact_map/
```

If the project uses:

```text
canon_working/
```

then use:

```text
canon_working/canon_fact_map/
```

Create the folder if missing.

---

# Required Persistent Files

The skill must create and maintain:

```text
canon/_working/canon_fact_map/DOC_REGISTER.md
canon/_working/canon_fact_map/CLAIM_INDEX.md
canon/_working/canon_fact_map/CHARACTER_FACTS.md
canon/_working/canon_fact_map/EVENT_FACTS.md
canon/_working/canon_fact_map/TIMELINE_FACTS.md
canon/_working/canon_fact_map/WORLD_RULE_FACTS.md
canon/_working/canon_fact_map/THEME_FACTS.md
canon/_working/canon_fact_map/RELATIONSHIP_FACTS.md
canon/_working/canon_fact_map/TERMINOLOGY_FACTS.md
canon/_working/canon_fact_map/DESIGN_GAPS.md
canon/_working/canon_fact_map/SOURCE_GAPS.md
canon/_working/canon_fact_map/CONFLICT_CANDIDATES.md
canon/_working/canon_fact_map/VALIDATION_REPORT.md
canon/_working/canon_fact_map/BUILD_LEDGER.md
```

Optional but recommended:

```text
canon/_working/canon_fact_map/FACT_MAP_SCHEMA.md
canon/_working/canon_fact_map/FACT_ID_REGISTRY.md
```

---

# Hard Boundaries

This skill must not:

- rewrite story prose
- update project-level status files
- update NEXT_ACTION / PROJECT_STATUS / SESSION_LEDGER
- ask Beat Sheet placement questions
- ask scene placement questions
- decide approval / readiness
- promote TEMP-only claims into canon
- invent missing facts
- smooth contradictions with literary prose

If contradiction is found, record it in `CONFLICT_CANDIDATES.md`.

If author decision is required, record the exact content-truth question candidate, but do not ask unless user specifically says this run should ask questions.

If a design gap is found, record it in `DESIGN_GAPS.md`, not as contradiction.

---

# Reading Scope Rules

## Include

When scanning `canon/`, include story-content files:

- story brief
- series bible
- story outline canon
- act outlines
- character index / character docs
- world rules
- glossary
- timeline canon
- theme docs
- reveal docs
- approved decision logs / CDL / author decisions
- active working story docs when needed as candidate newer truth

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

These are workflow files.

They may be mentioned in `DOC_REGISTER.md` as excluded sources, but they must not contribute canon facts.

---

# Document Register

For every inspected file, write to:

```text
DOC_REGISTER.md
```

Required columns:

```markdown
| Doc ID | File | Type | Status | Authority | Freshness | Version/Date | Canon Use | Exclude Reason | Notes |
|---|---|---|---|---|---|---|---|---|---|
```

## Type values

- STORY_BRIEF
- SERIES_BIBLE
- FULL_OUTLINE
- ACT_OUTLINE
- CHARACTER_DOC
- WORLD_RULE_DOC
- TIMELINE_DOC
- THEME_DOC
- REVEAL_DOC
- GLOSSARY
- DECISION_LOG
- WORKING_OUTLINE
- TEMP_DRAFT
- BACKUP
- WORKFLOW_STATE
- UNKNOWN

## Status values

- CANON
- APPROVED
- ACTIVE_WORKING
- DRAFT
- TEMP
- BACKUP
- DEPRECATED
- WORKFLOW_ONLY
- UNKNOWN

## Authority values

- HIGH
- MEDIUM
- LOW
- EXCLUDED

## Canon Use values

- TRUTH_SOURCE
- CANDIDATE_TRUTH_SOURCE
- NAVIGATION_ONLY
- VALIDATION_TARGET
- EXCLUDED

---

# Atomic Claim Extraction

Every claim must be one concrete statement.

Bad:

```text
晴香的罪與救贖非常複雜，連結了黑奏與世界命運。
```

Good:

```text
晴香在102年改變現實，創造 Beta 線。
```

```text
夕在 Phase J 成功執行改變現實，但結果沒有修復創傷。
```

```text
朱音在 Day 14 的帝國廣場救援中犧牲。
```

```text
嘆息之橋目前沒有已定 canon 事件，只是待場面設計的新用途。
```

---

# Claim Index

All extracted claims go into:

```text
CLAIM_INDEX.md
```

Format:

```markdown
# Claim Index

| Claim ID | Claim Text | Claim Type | Subject | Predicate | Object/Value | Source Doc | Source Section | Authority | Freshness | Support | Confidence | Status |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
```

## Claim Type values

- CHARACTER_FACT
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
- PRESENTATION_NOTE
- UNSUPPORTED_GLUE

## Status values

- CURRENT_FACT_CANDIDATE
- CURRENT_FACT
- STALE_CLAIM
- CONTRADICTED
- TEMP_ONLY
- BACKUP_ONLY
- NEEDS_AUTHOR_DECISION
- DESIGN_GAP_ONLY
- SOURCE_NEEDED
- EXCLUDED

---

# Fact ID Rules

Each canonical fact should have stable ID.

Recommended prefixes:

```text
CF-CHAR-0001   Character fact
CF-EVT-0001    Event fact
CF-TIME-0001   Timeline fact
CF-WORLD-0001  World rule fact
CF-THEME-0001  Theme fact
CF-REL-0001    Relationship fact
CF-TERM-0001   Terminology fact
CF-GAP-0001    Design gap
```

Do not create new IDs for the same fact unless meaning changed.

If wording changes but fact stays same, update alias / source support.

---

# Fact Tables

## CHARACTER_FACTS.md

Use for stable character facts.

Format:

```markdown
# Character Facts

| Fact ID | Character | Attribute | Current Value | Status | Canon Source | Supporting Sources | Conflicting Claims | Confidence | Notes |
|---|---|---|---|---|---|---|---|---|---|
```

Attributes include:

- age
- identity
- true name
- alias
- role
- survival state
- transformation state
- trauma origin
- motivation
- core relationship
- death event
- key action
- knowledge state
- author-confirmed interpretation

## EVENT_FACTS.md

```markdown
# Event Facts

| Fact ID | Event | Date/Time | Location | Participants | Outcome | Status | Canon Source | Supporting Sources | Conflicting Claims | Confidence | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
```

Status values:

- CANON_CONFIRMED
- CANDIDATE_CANON
- DESIGN_GAP_ONLY
- SUPERSEDED
- NEEDS_AUTHOR_DECISION

## TIMELINE_FACTS.md

```markdown
# Timeline Facts

| Fact ID | Date/Order | Event | Before | After | Dependencies | Canon Source | Conflicts | Confidence |
|---|---|---|---|---|---|---|---|
```

## WORLD_RULE_FACTS.md

```markdown
# World Rule Facts

| Fact ID | Rule | Definition | Cost | Trigger | Exception | Canon Source | Conflicts | Confidence | Notes |
|---|---|---|---|---|---|---|---|---|
```

## THEME_FACTS.md

```markdown
# Theme Facts

| Fact ID | Theme Claim | Meaning | Supported Scenes | Canon Source | Conflicts | Confidence | Notes |
|---|---|---|---|---|---|---|
```

## RELATIONSHIP_FACTS.md

```markdown
# Relationship Facts

| Fact ID | Character A | Character B | Relationship Truth | Status | Canon Source | Conflicts | Confidence | Notes |
|---|---|---|---|---|---|---|---|
```

## TERMINOLOGY_FACTS.md

```markdown
# Terminology Facts

| Fact ID | Term | Definition | Preferred Spelling | Forbidden / Deprecated Forms | Canon Source | Conflicts | Confidence |
|---|---|---|---|---|---|---|
```

---

# Design Gaps Are Not Contradictions

Use:

```text
DESIGN_GAPS.md
```

for unresolved design / scene / presentation tasks.

Format:

```markdown
# Design Gaps

| Gap ID | Summary | Affected Area | Why Not Canon Contradiction | Suggested Later Layer | Status |
|---|---|---|---|---|---|
```

Examples:

- 嘆息之橋新用途未細化
- 凜相關場景位置待設計
- 主角團前往帝國廣場的新進場動機待場面設計
- 某 reveal 的 presentation timing 未定

These must not be exported as author questions.

Status values:

- DESIGN_GAP_RECORDED_NOT_ASKED
- PRESENTATION_TODO
- BEAT_SHEET_LAYER
- SOURCE_NOTE_ONLY

Forbidden statuses:

- AUTHOR_GATE
- WAITING_FOR_AUTHOR
- BLOCKING
- PENDING_AUTHOR_DECISION

---

# Source Gaps

Use:

```text
SOURCE_GAPS.md
```

when a fact may exist but source support is missing.

Format:

```markdown
# Source Gaps

| Gap ID | Missing Source / Claim | Why Needed | Affected Fact IDs | Blocking? | Suggested Search |
|---|---|---|---|---|---|
```

---

# Conflict Candidates

Use:

```text
CONFLICT_CANDIDATES.md
```

for potential contradictions found during fact extraction.

Format:

```markdown
# Conflict Candidates

| Conflict ID | Conflict Type | Summary | Related Fact IDs | Related Claim IDs | Source A | Source B | Suggested Classification | Needs Author? |
|---|---|---|---|---|---|---|---|---|
```

Conflict Type:

- CHARACTER_FACT_CONFLICT
- EVENT_FACT_CONFLICT
- TIMELINE_CONFLICT
- WORLD_RULE_CONFLICT
- THEME_MEANING_CONFLICT
- RELATIONSHIP_CONFLICT
- TERMINOLOGY_CONFLICT
- SOURCE_AUTHORITY_CONFLICT
- DESIGN_GAP_NOT_CONFLICT

`Needs Author?` must be true only for real content-truth conflicts.

---

# Validation Report

Use:

```text
VALIDATION_REPORT.md
```

for automated checks.

Required sections:

```markdown
# Validation Report

## Summary

## Checks Run

### Character Fact Consistency
### Event Venue / Date Consistency
### Timeline Ordering
### World Rule Consistency
### Relationship Consistency
### Theme Meaning Consistency
### Terminology Consistency
### Design Gap Filter
### Source Authority / Freshness Check

## Auto-Fix Candidates

## Author-Decision Candidates

## Design Gaps Recorded

## Source Gaps

## Recommended Next Skill
```

Recommended next skill usually:

```text
story-conflict-resolution-gate
```

---

# Multi-Agent Fact Extraction

The builder must use multiple reviewer passes.

## Required Reviewers

1. Doc Register Reviewer
2. Character Fact Extractor
3. Event / Timeline Fact Extractor
4. World Rule Fact Extractor
5. Relationship Fact Extractor
6. Theme / Meaning Fact Extractor
7. Terminology Extractor
8. Source Authority Reviewer
9. Design Gap Filter Reviewer
10. Validation Reviewer

Each reviewer must write results to the relevant fact-map file.

---

# Design Gap Filter Reviewer

This reviewer must prevent design gaps from becoming contradictions.

It checks:

- Is this a real canon fact conflict?
- Or just scene placement?
- Or Beat Sheet / btd placeholder?
- Or presentation timing?
- Or future design task?

If not a contradiction, record in `DESIGN_GAPS.md`.

Do not create author question.

---

# Source Authority Rules

When two claims disagree, rank by:

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

# Claim Status Decision Rules

## CURRENT_FACT

Use only when:

- strong source support
- no unresolved conflict
- not temp-only
- not design gap
- not merely character belief

## CURRENT_FACT_CANDIDATE

Use when likely current but needs validation.

## NEEDS_AUTHOR_DECISION

Use only for unresolved content-truth conflict.

Do not use for design gaps.

## DESIGN_GAP_ONLY

Use for scene placement / btd / Beat Sheet / future staging issues.

## TEMP_ONLY

Use for claims found only in temp/draft without support.

## STALE_CLAIM

Use when a claim is outdated by stronger current source.

---

# Character Belief vs Canon Truth

Do not treat character dialogue / accusation / rhetoric as objective truth automatically.

Classify as:

- CHARACTER_BELIEF
- RHETORIC
- ACCUSATION
- OBJECTIVE_FACT

Example:

```text
黑奏說「你給了我力量」
```

Could be:

- OBJECTIVE_FACT if supported by world rule / decision log
- RHETORIC if used as psychological attack
- HALF_TRUE_CAUSALITY if author decision says so

If unclear, create conflict candidate / author-decision candidate.

---

# BTD / Placeholder Handling

`btd`, `待定`, `待 Beat Sheet`, `placeholder`, `設計中` usually means:

```text
DESIGN_GAP_ONLY
```

Do not convert into contradiction unless another source asserts a concrete incompatible fact.

---

# Validation Checks

Run at least these checks:

## Character Checks

- age consistency
- death/survival state consistency
- true identity / alias consistency
- relationship consistency
- trauma origin consistency
- transformation state consistency

## Event Checks

- event venue consistency
- event date consistency
- participant consistency
- outcome consistency
- duplicate event with different names
- design gap incorrectly treated as canon

## Timeline Checks

- before/after dependencies
- death before later action
- reality rewrite order
- reveal order if it affects knowledge state

## World Rule Checks

- Alpha/Beta logic
- reality change rules
- emotional conservation
- collective unconscious
- magical girl / corpse rules
- ending mechanics

## Theme Checks

- responsibility vs blame
- forced transparency vs true connection
- voluntary choice vs coercion
- healing vs erasure
- punishment vs consequence

## Terminology Checks

- preferred spelling
- duplicate anchors
- deprecated terms
- mixed orthography

---

# Build Ledger

Use:

```text
BUILD_LEDGER.md
```

Format:

```markdown
# Build Ledger

| Build ID | Mode | Scope | Files Read | Claims Extracted | Facts Updated | Conflicts Found | Design Gaps | Source Gaps | Status |
|---|---|---|---|---|---|---|---|---|---|
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
7. Conflict candidates found
8. Design gaps recorded
9. Source gaps recorded
10. Validation summary
11. Recommended next skill/action

Do not output project readiness.

Do not say canon is ready for Beat Sheet.

Use:

```text
FACT_MAP_BUILT
FACT_MAP_UPDATED
VALIDATION_REPORT_READY
FACT_MAP_BLOCKED_BY_SOURCE_GAP
```

---

# Recommended Prompt

```text
/story-canon-fact-map-builder

Mode: BUILD_FACT_MAP

掃描 canon/ 內 story/canon 內容文件，建立 Canon Fact Map。
唔好直接改 prose 文件。
先將所有內容抽成 atomic claims，再整理成 fact tables。

請建立 / 更新：
- DOC_REGISTER
- CLAIM_INDEX
- CHARACTER_FACTS
- EVENT_FACTS
- TIMELINE_FACTS
- WORLD_RULE_FACTS
- THEME_FACTS
- RELATIONSHIP_FACTS
- TERMINOLOGY_FACTS
- DESIGN_GAPS
- SOURCE_GAPS
- CONFLICT_CANDIDATES
- VALIDATION_REPORT
- BUILD_LEDGER

要分清：
- canon truth
- character belief
- rhetoric
- temp/draft
- design gap
- btd placeholder
- stale claim
- unsupported glue

Design gap 唔好當矛盾。
唔好問我場景放邊。
唔好更新 PROJECT_STATUS / NEXT_ACTION / SESSION_LEDGER。

Scope:
canon/
```

---

# Recommended Pipeline

After building fact map:

```text
/story-conflict-resolution-gate

Mode: CANON_WIDE_CONFLICT_LOOP

Use canon/_working/canon_fact_map/ as primary validation input.
Patch outdated story/canon files using Canon Fact Map.
Ask me only for CONFLICT_CANDIDATES where Needs Author = true.
```

---

# Failure Handling

## If agent starts rewriting prose

Self-correct:

```text
Workflow correction:
This skill builds Canon Fact Map only. I will not rewrite story prose in this step.
```

## If agent treats design gap as contradiction

Self-correct:

```text
Workflow correction:
This is a design/presentation gap, not a canon contradiction. I will record it in DESIGN_GAPS.md.
```

## If agent compares prose directly without claims

Self-correct:

```text
Workflow correction:
I compared prose directly. I will extract atomic claims first and rebuild the fact map.
```

## If agent updates project-level files

Self-correct:

```text
Workflow correction:
Project-level workflow files must not be updated by fact-map builder.
```
