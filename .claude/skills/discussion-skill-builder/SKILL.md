---
name: discussion-skill-builder
description: Build or update a project-local user-discussion-agent by mining the current working repository's local Claude conversation history plus any conversations manually supplied by the author. Learn reasoning and discussion behavior only, not surface wording. The generated agent is used by story-orchestrator as a discussion-method specialist.
---

# discussion-skill-builder — User Discussion Method Miner and Skill Generator

Task:
$ARGUMENTS

## Mission

This is a **meta-skill**.

Its job is NOT to discuss the story directly.

Its job is to:

1. resolve the current working Git repository;
2. automatically discover local Claude conversation history associated with that repository;
3. optionally ingest conversation material manually supplied in the current request;
4. reconstruct full user ↔ assistant discussion trajectories;
5. learn only the AUTHOR'S:
   - reasoning operations;
   - question-selection behavior;
   - follow-up behavior;
   - rejection / acceptance behavior;
   - branch-switching behavior;
   - depth-control behavior;
6. abstract those observations into reusable discussion rules;
7. generate or update:

```text
.claude/skills/user-discussion-agent/SKILL.md
```

8. ensure `.claude/skills/story-orchestrator/SKILL.md` knows when and how to use `user-discussion-agent`;
9. support both FULL rebuild and INCREMENTAL update.

The generated skill must become better as more conversations accumulate.

---

# 0. Non-Negotiable Learning Boundary

Learn:

```text
① REASONING
How the author tests claims, assumptions, causality, alternatives,
necessity, consequences, contradictions, scope and abstraction.

② DISCUSSION BEHAVIOR
When the author continues questioning, changes angle, requests
concreteness, rejects an answer, accepts a branch, or stops drilling.
```

Do NOT learn:

```text
③ SURFACE LANGUAGE
Cantonese wording
slang
swearing
typing habits
favorite filler words
sentence fragments
punctuation habits
```

Do NOT generate a personality imitation.

The target is:

> "reason in ways that repeatedly proved useful to this author"

NOT:

> "sound like the author"

---

# 1. Scope Authority — Current Working Repository Only

Automatic history discovery is limited to conversations associated with the **current working repository**.

First resolve:

```text
current working directory
→ git rev-parse --show-toplevel
→ canonical absolute repository root
```

If the working directory is not inside a Git repository:

- use the current working directory as the project root;
- mark repo identity confidence LOW;
- do not scan unrelated projects;
- explain this limitation in the final mini-log.

Never silently import histories from another repository.

## Exception — Manually Supplied Conversations

Conversation text/files explicitly supplied by the author in the current invocation are authorized evidence even if they came from another project.

Manual evidence and auto-discovered evidence may be analyzed together.

Do not permanently copy raw manually supplied conversations into the generated skill.

---

# 2. Windows-First Local Claude History Discovery

Primary environment: Windows.

Do not assume that one encoded folder-name format will remain stable across Claude Code versions.

Use **content and metadata verification**, not folder-name guessing alone.

## Discovery Order

### Stage A — Known Claude user storage

Inspect, if present:

```text
$HOME/.claude/projects/
%USERPROFILE%\.claude\projects\
```

Search recursively for plausible conversation/session files, prioritizing:

```text
*.jsonl
*.json
```

Also accept other clearly structured Claude transcript/session files if their contents establish that they are conversations.

### Stage B — Match sessions to the current repo

For each candidate, inspect a small sample / metadata first.

Match against normalized variants of the current repository identity:

```text
absolute repo root
repo root with / separators
repo root with \ separators
lowercased path
resolved real path if available
repo directory name
git remote URL, if useful as secondary evidence
```

Prefer explicit transcript metadata such as working directory / cwd / project path when available.

A filename or parent folder merely resembling the repo name is NOT sufficient if content contradicts it.

### Stage C — Conservative fallback search

Only if Stage A finds no usable matching sessions:

- search under `$HOME/.claude/` for likely transcript/session files;
- still require evidence that each conversation belongs to the current repo.

Do NOT recursively scan the whole Windows user profile by default.

If the author explicitly asks for a broader scan, it may be performed, but:
- restrict reads to likely conversation formats;
- avoid unrelated personal documents;
- still import only sessions matching the working repo.

## No Hard Dependency on Private Storage Layout

Claude Code storage format may evolve.

Therefore:

- discovery logic must be tolerant;
- never fail solely because an expected encoded project folder does not exist;
- inspect actual available files and metadata;
- report what storage paths were searched.

---

# 3. Conversation Parsing

The miner must preserve dialogue order.

Reconstruct:

```text
assistant proposal / answer
→ user response
→ assistant reply
→ user follow-up
→ ...
```

The assistant turns are **context**, not learning targets.

The user turns are **candidate learning evidence**.

## Role Rule

```text
assistant content = CONTEXT EVIDENCE
user content      = LEARNING EVIDENCE
```

Never infer a user preference merely because the assistant repeatedly proposed something.

## Ignore Non-Discussion Noise

Downweight or exclude:

- tool dumps;
- compiler output;
- raw logs pasted for diagnosis;
- generated code that the user did not author;
- repeated system boilerplate;
- permission prompts;
- session metadata;
- assistant self-talk;
- file contents quoted only as source material.

---

# 4. Evidence Classification

Before learning from a user turn, classify it.

Use these categories:

```text
A. TASK_INSTRUCTION
B. CONTENT_REQUEST
C. REASONING_EVIDENCE
D. DISCUSSION_BEHAVIOR
E. ACCEPTANCE_SIGNAL
F. REJECTION_SIGNAL
G. UNCLEAR
```

Examples:

```text
"update this file"
→ TASK_INSTRUCTION

"give me four variants"
→ CONTENT_REQUEST

"why does this need to be a separate system?"
→ REASONING_EVIDENCE

"you're answering the example but not the actual problem"
→ DISCUSSION_BEHAVIOR + REJECTION_SIGNAL
```

High-value learning comes primarily from C–F.

A/B can provide context but must not become generalized thinking rules unless repeated evidence clearly shows a reasoning preference behind them.

---

# 5. What to Extract

Do not merely collect isolated questions.

Extract **reasoning moves** and **question trajectories**.

For each high-value evidence segment infer:

```yaml
trigger:
what_was_being_claimed:
user_move:
hidden_concern:
reasoning_operation:
discussion_behavior:
what_changed_after_the_move:
accepted_or_rejected:
confidence:
```

## Example of the required abstraction level

Bad extraction:

```text
The user often asks "why?"
```

Good extraction:

```text
When a proposal adds a new conceptual layer, the author often tests
whether the original requirement can already be explained without
that layer. If subtraction preserves the causal explanation, the new
concept is treated as potentially redundant.
```

Bad extraction:

```text
The user dislikes new classes.
```

Good extraction:

```text
Before accepting a new structure, test whether an existing structure
can absorb the requirement without damaging authority boundaries or
clarity.
```

---

# 6. Question Trajectory Mining

A sequence is often more informative than one sentence.

Look for patterns such as:

```text
definition
→ concrete mapping
→ causal connection
→ relation to existing framework
→ subtraction
→ contradiction
→ decision
```

or:

```text
proposal
→ who initiated it?
→ why would they?
→ why would others accept it?
→ who benefits?
→ why does it persist?
→ what changes if original conditions disappear?
```

or:

```text
answer
→ user rejects framing
→ reframes actual problem
→ requests wider scope
→ compares alternatives
→ settles a decision fork
```

Represent a reusable trajectory as:

```yaml
name:
trigger:
steps:
stop_condition:
what_it_is_good_at_detecting:
confidence:
```

Do not save the original quoted wording in the final generated skill.

---

# 7. Cross-Conversation Generalization

Analyze all authorized conversations together.

The author explicitly wants one general discussion method rather than separate domain personalities.

Therefore compare across:

- story;
- character design;
- directing;
- gameplay;
- Unity / engineering;
- shader / research;
- workflow design;
- other project discussions.

If the same reasoning operation appears in multiple domains, raise confidence.

If a behavior appears only in one narrow situation, keep it conditional.

Do not convert project facts into general rules.

---

# 8. Positive and Negative Learning

Study both:

```text
proposal
→ author accepts / moves on
```

and:

```text
proposal
→ author questions
→ assistant revises
→ author still rejects
```

Important questions:

- What kind of answer makes the author stop drilling?
- What kind of answer causes another layer of questioning?
- Did concreteness resolve the issue?
- Did the author need causality, alternatives, scope, evidence, or simplification?
- Was the problem the answer, or the framing of the question?
- Does the author prefer a decision fork once uncertainty becomes irreducible?

Do NOT define the author as "always skeptical".

Learn the conditions under which scrutiny increases or decreases.

---

# 9. Pattern Confidence

Do not turn one reaction into a permanent rule.

Internally assign:

```text
LOW
MEDIUM
HIGH
VERY_HIGH
```

Consider:

- number of independent conversations;
- number of domains;
- consistency;
- counterexamples;
- whether the same move repeatedly changed the discussion;
- whether the author explicitly reinforced the preference.

A new pattern can start LOW/MEDIUM.

Repeated support may raise it.

New contradictory evidence may:

- weaken;
- narrow;
- split;
- merge;
- retire

a pattern.

---

# 10. Full and Incremental Modes

Supported modes:

```text
FULL
INCREMENTAL
AUTO
```

## AUTO

Default.

If no valid builder state exists:

```text
AUTO → FULL
```

Otherwise:

```text
AUTO → INCREMENTAL
```

## FULL

- rediscover all matching local sessions;
- ingest all manual material supplied now;
- rebuild the abstract discussion model from scratch;
- regenerate `user-discussion-agent/SKILL.md`;
- refresh builder state.

Use when the author says:

```text
full rebuild
relearn
rebuild from all conversations
reset the discussion model
```

## INCREMENTAL

- read builder state;
- rediscover sessions;
- detect new or changed session files;
- analyze only new/changed evidence where practical;
- compare against existing abstract patterns;
- update confidence / merge / split / retire;
- regenerate the final skill.

Use when the author says:

```text
update
learn new conversations
incremental
refresh
```

---

# 11. Builder State

Store operational state at:

```text
.claude/user-discussion-model/state.json
```

The state may record:

```text
schema_version
last_run
repo_identity
processed_session_file_fingerprints
pattern_ids
pattern_confidence
generation_version
```

The state MUST NOT store:

- full raw transcripts;
- long user quotes;
- assistant answers;
- copied private conversation text.

Short non-reconstructive fingerprints / hashes are allowed.

## Optional Abstract Model

The builder MAY maintain:

```text
.claude/user-discussion-model/abstract-model.md
```

Only if useful.

It must contain abstracted rules, not raw conversation excerpts.

The final authority consumed by other skills remains:

```text
.claude/skills/user-discussion-agent/SKILL.md
```

---

# 12. Privacy / Data-Minimization Rules

Automatic mining reads local conversation history only for the current working project.

Do not:

- copy transcripts into the repo;
- commit raw local histories;
- quote sensitive unrelated material into generated skills;
- preserve user wording merely as examples;
- read unrelated personal files to improve the model.

The generated skill must contain only abstractions.

If a session includes clearly unrelated sensitive personal discussion mixed into the repo history, exclude it unless it is necessary to understand a reasoning transition.

---

# 13. Generated Skill Requirements

Generate:

```text
.claude/skills/user-discussion-agent/SKILL.md
```

The file must be self-contained enough for another Claude session to use without reopening the historical conversations.

It should include, when evidence supports them:

```text
- purpose
- authority boundary
- trigger conditions
- learned reasoning principles
- learned discussion behaviors
- learned question trajectories
- angle generation method
- depth control
- alternative generation
- assumption testing
- challenge / acceptance behavior
- stop conditions
- anti-patterns
- output modes
- integration contract for orchestrators
```

Do not force every category if evidence is weak.

## Generated Skill Must Support Four Behaviors

### A. ANGLE DISCOVERY

Generate genuinely different ways to interrogate the current problem.

### B. QUESTION TREE

Expand high-value questions into deeper questions.

### C. SELF-DISCUSSION

Explore competing explanations/approaches, not fake role-play disagreement.

### D. SYNTHESIS

Return:
- current strongest conclusion;
- unresolved assumptions;
- real decision forks;
- best next branch.

The generated skill chooses among these dynamically.

---

# 14. Novelty Requirement

The final agent must not merely predict the author's next literal question.

It must combine learned reasoning rules to derive **new useful angles**.

For each substantial discussion:

```text
some angles ← learned high-confidence user patterns
some angles ← combinations of learned patterns
some angles ← independent professional reasoning not present in history
```

Goal:

> extend the author's thinking, not echo it.

---

# 15. Anti-Imitation Rules for Generated Agent

The generated `user-discussion-agent` must explicitly state:

```text
Do not imitate the author's Cantonese, slang, profanity, punctuation,
sentence fragments or emotional intensity.

Do not pretend to be the author.

Do not prefix every thought with "the user would ask...".

Use the learned model as a reasoning-method prior.
```

---

# 16. Authority Boundary

`user-discussion-agent` is a:

```text
DISCUSSION METHOD AUTHORITY
```

It is NOT:

```text
CANON AUTHORITY
STORY CONTENT AUTHORITY
TECHNICAL FACT AUTHORITY
USER DECISION AUTHORITY
```

Priority:

```text
explicit author instruction / decision
→ canon / source-of-truth rules
→ orchestrator workflow authority
→ relevant specialist skill
→ user-discussion-agent as discussion method
```

It may challenge assumptions.

It may NOT silently rewrite canon to make a theory work.

---

# 17. story-orchestrator Integration

After generating/updating the agent, inspect:

```text
.claude/skills/story-orchestrator/SKILL.md
```

If it exists, ensure it contains an integration section equivalent in meaning to the following.

Do NOT replace the whole orchestrator.

Do a minimal semantic patch.

Use this heading unless an equivalent section already exists:

```md
## User Discussion Agent — Automatic Discussion Method Layer
```

Required contract:

```md
`user-discussion-agent` is a DISCUSSION METHOD AUTHORITY, not a story-content authority.

Automatically consult it when the author is:
- discussing or exploring an open design question;
- dissatisfied with an explanation;
- comparing alternatives;
- testing a theme, world rule, character motivation, sequence structure,
  directing idea, gameplay/story relationship, or conceptual framework;
- asking "why", "does this actually work", "what are we missing", or
  otherwise requesting deeper reasoning where multiple valid framings exist.

Use it to:
1. expose hidden assumptions;
2. generate materially different discussion angles;
3. deepen high-information questions;
4. test the first plausible answer;
5. surface real decision forks;
6. suggest novel angles beyond the learned author patterns.

Do not automatically consult it for:
- deterministic exports;
- mechanical formatting;
- direct canon lookup;
- straightforward file edits with no design ambiguity;
- validation steps whose criteria are already fixed.

Authority order:
explicit author decision → canon/source truth → story-orchestrator workflow
→ relevant specialist skill → user-discussion-agent discussion method.

The agent may change HOW a question is explored.
It may not override WHAT canon says or WHAT the author has decided.

If `user-discussion-agent` is absent or still bootstrap-only, continue normally
and mention that `/discussion-skill-builder` can initialize it.
```

## Relationship with story-holistic-supervisor

Do not collapse these into one skill.

Use:

```text
user-discussion-agent
= automatic method layer for exploratory discussion

story-holistic-supervisor
= explicit/manual macro audit, comprehensive missing-angle review,
  cross-discipline supervision or professional reframing route
```

The discussion agent may suggest that a problem has become systemic enough to justify the holistic supervisor, but should not silently substitute for it.

---

# 18. Optional Other-Orchestrator Integration

Search `.claude/skills/*/SKILL.md` only if useful.

Do not mass-edit skills.

The only required integration target is:

```text
story-orchestrator
```

Other skills may use `user-discussion-agent` if they already have a natural dependency mechanism, but this is optional and should not create circular routing.

---

# 19. Manual Conversation Input

If the author manually pastes or supplies conversation material during invocation:

1. treat it as authorized evidence;
2. detect speaker roles from labels / structure;
3. if ambiguous, infer conservatively from turn structure;
4. merge it with auto-discovered repo history for this run;
5. never require the author to repeat material that can be read from the supplied input.

Manual material may be the only input if no local histories can be found.

---

# 20. Quality Review Before Writing the Generated Skill

Run a self-audit.

For every proposed learned rule ask:

```text
Is this actually reasoning behavior?
Could it just be a one-off task instruction?
Could it be domain-specific rather than general?
Did assistant wording contaminate the inference?
Are there counterexamples?
Does the rule predict when NOT to use it?
Would this rule cause endless questioning?
```

Remove or narrow weak rules.

## Endless-Discussion Guard

The generated agent must have stop conditions.

Good stopping reasons:

```text
- canon already answers it;
- new questioning no longer changes a decision;
- evidence is insufficient and speculation is no longer productive;
- alternatives have converged;
- a genuine author decision fork has been reached;
- the question became implementation-only and belongs to another specialist.
```

---

# 21. Generated Skill Bootstrap Behavior

If this builder package contains a bootstrap
`.claude/skills/user-discussion-agent/SKILL.md`,
replace it after the first successful evidence-based build.

Do NOT preserve bootstrap placeholder heuristics as learned evidence.

---

# 22. Execution Workflow

When invoked:

```text
PHASE 0 — Resolve mode and repo
PHASE 1 — Discover matching Claude local histories
PHASE 2 — Add manually supplied conversations
PHASE 3 — Parse and reconstruct trajectories
PHASE 4 — Classify user evidence
PHASE 5 — Mine reasoning moves + question trajectories
PHASE 6 — Cross-conversation generalization
PHASE 7 — Positive/negative learning + confidence update
PHASE 8 — Build abstract discussion model
PHASE 9 — Self-audit learned rules
PHASE 10 — Generate/update user-discussion-agent/SKILL.md
PHASE 11 — Minimally patch story-orchestrator integration
PHASE 12 — Update state.json
PHASE 13 — Validate files and report
```

Do not ask the author to manually locate Claude conversations before attempting automatic discovery.

---

# 23. Validation

Before completion verify:

```text
[ ] current repo identity was resolved
[ ] searched Claude history locations are reported
[ ] only matching repo histories were auto-imported
[ ] manual input was included if supplied
[ ] full dialogue context was used
[ ] user, not assistant, was the learning target
[ ] task instructions were separated from reasoning evidence
[ ] raw quotations were not written into generated skill
[ ] surface language imitation was excluded
[ ] confidence / counterexamples were considered
[ ] generated skill supports A/B/C/D behavior
[ ] generated skill includes stop conditions
[ ] story-orchestrator integration exists or absence is reported
[ ] no raw transcript was copied into repo state
```

---

# 24. User-Facing Completion Report

Keep it compact.

Report:

```text
Mode:
Repo:
Auto history files matched:
Manual conversation sources:
New/updated/retired abstract patterns:
Generated:
Orchestrator integration:
Warnings:
```

Do not dump raw evidence unless the author explicitly asks to inspect the analysis.

---

# 25. Invocation Examples

Normal first run:

```text
/discussion-skill-builder
```

Force full rebuild:

```text
/discussion-skill-builder full rebuild
```

Incremental refresh:

```text
/discussion-skill-builder incremental update
```

Manual evidence plus automatic local history:

```text
/discussion-skill-builder

另外將以下對話一齊當 evidence：
[pasted conversation]
```

Inspect without writing:

```text
/discussion-skill-builder dry run — analyze what you would learn and what files you would change, but do not modify files
```

When `dry run` is requested, do not write generated files or patch orchestrators.
