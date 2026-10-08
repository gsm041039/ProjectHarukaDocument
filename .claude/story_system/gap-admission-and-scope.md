# Gap Admission, Scope Control and Change-State Rules (vNext EXPERIMENT)

STATUS: `EXPERIMENT_COPY` — not a formal skill file. Baseline commit `4fdc76d`. Referenced by orchestrator / solution-space-designer / workspace-manager / holistic-supervisor / blind-angle-audit-protocol in the experiment copy. Sub-agents do not auto-load this file: any agent that needs it must be given the path in its brief.

Goal: act like a Head Writer / Story Systems Director. Find gaps that are genuinely needed, reject false gaps, stay at the requested scale, reuse existing material first, know when NOT to add lore, escalate only real Director decisions, and report planned vs applied vs verified changes truthfully. Number of findings / angles / cells / words is NOT a success measure.

## 1. Two independent axes (establish BOTH before any substantial task)

`SCOPE_SCALE` — how big is the thing being asked about:
`WORLD_SYSTEM` (rules, factions, institutions, state transitions across the setting) | `ARC_STRUCTURE` (act / sequence / character-arc structure) | `SCENE_BEAT` (one scene or beat) | `MIXED` | `UNRESOLVED`

`DECISION_WEIGHT` — who may decide:
`ROUTINE` (AI resolves) | `MATERIAL` (AI recommends, may proceed provisionally, records) | `DIRECTOR` (author decides)

- The existing orchestrator labels `LEVEL_1 / LEVEL_2 / LEVEL_3` are ONLY decision-weight aliases (ROUTINE / MATERIAL / DIRECTOR). They never mean World / Arc / Scene.
- A `WORLD_SYSTEM` question can be `ROUTINE`; a `SCENE_BEAT` question can be `DIRECTOR`. Do not infer one axis from the other.
- If `SCOPE_SCALE` is `UNRESOLVED`, restate the author's request in one line and pick the smallest scale that answers it; record the choice.
- Scale fidelity: the answer stays at the requested scale. Findings at another scale are logged as side findings (see §9), they do not replace the answer.

## 2. Gap Admission Gate (a candidate issue must pass 0→E in order before it is called a gap)

A candidate gap is only a `CANDIDATE ISSUE` until adjudicated. Run:

**0. Proposition / layer scoping (vNext.1).** Before any gate closes a candidate, write the exact proposition(s) being tested and tag each with one layer: `CANON_FACT` (what the canon documents state as true, and whether they agree with each other) | `PRESENTATION` (what is shown/staged/marked in script or storyboard) | `AUDIENCE_KNOWLEDGE` | `MECHANISM` | `TIMING` | `CAUSALITY` | `WORLD_STATE` | `DOCUMENT_SYNC` | `OTHER`. One candidate may carry several propositions. **Evidence may only close the proposition/layer it actually speaks to.** An owner ruling, status marker or author note about one layer (e.g. `PRESENTATION`) does not close a different layer (e.g. `CANON_FACT` consistency between documents that state different things). Any proposition left open continues through the remaining gates; do not DROP the whole candidate because one layer is answered.

**A. Owner check.** Search the owner document(s) for the topic. Result is one of `FULLY_RESOLVED_BY_OWNER` | `PARTIALLY_RESOLVED_BY_OWNER` | `NOT_RESOLVED_BY_OWNER`. Fully resolved → `RESOLVED_BY_OWNER_DOC`, `DOCUMENT_SYNC` (summary/derived file stale) or `STALE_SUMMARY`; do NOT ask the author again, do NOT call it missing Canon. Partially resolved → record (1) the proposition closed, (2) the proposition that remains, (3) the evidence anchor; the closed part is settled, the remaining part continues through B–E and is never suppressed by the partial answer.

**B. Status check.** A status label (`KNOWN_TODO` / `BTD` / `AUTHOR_PENDING` / `INTENTIONAL_MYSTERY` / `DELIBERATE_OPENNESS` / `DIEGETIC_VOID` / `DEFERRED_REVEAL`) may be assigned ONLY with direct evidence: an explicit marker in the source, an explicit author ruling, or formal owner-language clearly equivalent to that status; quote it. Do NOT infer a status because the answer is absent, because another document hints work remains, or because the issue feels unfinished. Ambiguous evidence → `STATUS_UNVERIFIED` and continue the admission test as an ordinary candidate. With a verified status the issue may still be an important DESIGN PROBLEM (label `CONFIRMED_INCOMPLETE_DESIGN_PROBLEM`), but it is not a "newly discovered missing Canon". A status closes only the proposition it speaks to (see step 0).

**C. Compatible-reading attack.** Build the strongest reading in which both statements are true (different time / scope / perspective / definition / layer). Only `VERIFIED_CONFLICT` if you can show evidence that they cannot both hold. Otherwise `COMPATIBLE_READING` (not a gap) if Canon itself fixes that reading, or `INTERPRETATION_DEPENDENT` / `NEEDS_AUTHOR` (cap confidence at MEDIUM) if the coexistence requires an interpretation Canon does not fix. An interpretation-dependent coexistence is not by itself "nothing worth raising".

**D. Necessity check.** Ask only: does the unresolved proposition matter to an existing dependency, consistency obligation, interpretation, world-state, story event, gameplay contract, or the requested task? Name it. If nothing requires it → `DROP`, or `OPTIONAL_WORLD_COMPLETION` (author may want it; never presented as a defect). **Fix cost never decides existence:** "easy / cheap to revise", "wording cleanup only", "can be fixed locally" must NOT be used to drop or downgrade-to-nothing a candidate; they may only inform `PRIORITY` / `SEVERITY` / `PATCH_COST` after the issue is classified. A real contradiction can be LOW priority and still be real.

**E. Scale check.** A `WORLD_SYSTEM` gap must materially affect ≥2 substantial dimensions (e.g. two different systems, a system plus an arc, a system plus gameplay). Local dialogue, scene wording, reveal timing, or a single beat's carrier must not become the main `WORLD_SYSTEM` finding — log as side finding or re-scope to `SCENE_BEAT`.

Output of the gate = an ADJUDICATED PROBLEM with one verdict per proposition: `ADMITTED_GAP` | `VERIFIED_CONFLICT` | `DOCUMENT_SYNC` | `RESOLVED_BY_OWNER_DOC` | `STALE_SUMMARY` | `CONFIRMED_INCOMPLETE_DESIGN_PROBLEM` | `COMPATIBLE_READING` | `INTERPRETATION_DEPENDENT` | `INTENTIONAL_OPENNESS` | `OPTIONAL_WORLD_COMPLETION` | `DROPPED` | `NEEDS_AUTHOR`. Every non-ADMITTED verdict records the one-line reason and the anchor.

A "no gap found" result is a valid, complete answer. Never fabricate a gap to have something to report.

## 3. WORLD_SYSTEM discovery = dependency / interface search (not an angle sweep)

For `WORLD_SYSTEM` tasks, work on the graph of EXISTING project nodes and edges (systems, factions, institutions, resources, abilities, actors, timeline states and the documents that own them). Inspect:
- interfaces (where system X hands a person / resource / rule to system Y);
- state transitions (who/what changes state, under which rule, who owns that rule);
- causal chains (event → forced reaction → consequence across systems);
- cross-system consequences (what the rule implies for scale, population, economy, politics, gameplay);
- history → present (what past rule or event the present state requires).

Do not invent nodes. Start from the nodes the request touches, walk outward only along edges that are documented or strictly implied, stop when no further edge carries a material obligation. The 28-angle Registry is not the tool here (see angle-system.md role note).

## 4. WORLD_SYSTEM evidence gate

- Normally ≥2 independent exact Canon anchors (file + line / quoted text), from different owner documents or different layers.
- `HIGH` confidence needs direct evidence of the conflict or missing link. Interpretation-dependent → `MEDIUM` or `NEEDS_AUTHOR`.
- Agents repeating an earlier audit's claim do not raise confidence; only re-read anchors do. Cite earlier audits as pointers, never as evidence.

## 5. Root-gap promotion

Promote to a higher-level "root gap" only with ≥3 independent concrete gaps from different areas that need the same higher-level decision. Otherwise solve the smallest sufficient missing link and leave the rest as separate findings.

## 6. Discovery and solution design are separate stages

`CANDIDATE ISSUE → ADMISSION GATE → ADJUDICATED PROBLEM → SOLUTION SPACE`

- `story-solution-space-designer` is not evidence that a gap exists. Candidate generation starts only when the problem is `ADMITTED_GAP`, `VERIFIED_CONFLICT`, or `CONFIRMED_INCOMPLETE_DESIGN_PROBLEM` (BTD / TODO / author-pending / documented-but-unimplemented gameplay-story requirement / historical confirmed gap / deliberately unfinished bridge).
- A designer that finds a "new problem" while ideating hands it back as a `CANDIDATE ISSUE` to the orchestrator; it is not promoted inside the designer.

## 7. Solution ladder + divergence firewall + proven sufficiency (WORLD_SYSTEM / ARC_STRUCTURE / MIXED problems; SCENE_BEAT keeps the 9-rung Existing-Carrier ladder in the designer)

Use the ladder in order to GENERATE candidates and to say why lower rungs were or were not enough:
1. Reinterpret an existing rule (no text change).
2. Extend an existing mechanism.
3. Reuse an existing carrier (character / event / object / institution / beat).
4. Redistribute or merge existing functions.
5. Change the downstream requirement (first-class: the thing demanding the answer may be the part to change).
6. Remove / reframe — `DO_NOT_ADD_NEW_LORE` is a legal, sometimes best, candidate.
7. New narrow rule or event.
8. New major system (last resort; normally `DIRECTOR` weight).

### 7-0 Divergence Firewall (vNext.2.1; three stages, in this order)
- **STAGE A — DIVERGE:** generate 3–5 materially different causal mechanisms (ladder above is the generator). During Stage A do NOT rank, filter or prune by assumption count, Canon cost, reversibility, simplicity or `VERIFIED_SUFFICIENT_BASELINE`. Those checks may be noted later; they must not suppress generation. Goal: mechanism diversity first (include active-character-agency, external-cost-signal and institutional/world-integration mechanisms wherever the source supports them).
- **STAGE B — VERIFY:** per candidate: obligation proof (7a), `REQUIRED_PREMISES` (7a-1), hidden-premise attack (7a-2), Canon risk, downstream damage.
- **STAGE C — RANK:** only now identify `VERIFIED_SUFFICIENT_BASELINE` and compare finalists (7b). The simpler sufficient candidate is a benchmark, not a generation filter.

### 7a VERIFIED_SUFFICIENT_BASELINE
After Stage B, the FIRST (lowest-rung, lowest-burden) candidate whose every mandatory obligation is `YES + short proof` is the `VERIFIED_SUFFICIENT_BASELINE`. If none qualifies, say which obligation each candidate fails or only meets as `CONDITIONAL`; there is then no baseline.
- Sufficiency is PROVEN, not declared. Proof for each obligation names a source fact / strict inference, or an explicitly recorded premise / change.
- If satisfaction depends on an `INTERPRETIVE_ASSUMPTION` the obligation is `CONDITIONAL`, not unconditional `YES`; a candidate with a `CONDITIONAL` obligation is not a verified-sufficient baseline (it may still be a finalist).
- A candidate that contradicts or rewrites a locked obligation is NOT sufficient unless that requirement change is explicitly allowed (7d).
- Does NOT mean the simplest candidate wins; sufficiency is judged against obligations, not a taste for minimalism.

### 7a-1 REQUIRED_PREMISES (replaces declared-assumption counting)
Self-declared "new assumption" counts are NOT a ranking input. For every candidate write `REQUIRED_PREMISES`: "what must be true for this candidate to work?", including premises the candidate does not volunteer. Classify each:
- `SOURCE_FACT` — explicitly supported by supplied Canon / owner source (cite the anchor).
- `STRICT_INFERENCE` — direct consequence of supplied facts (state the short derivation).
- `INTERPRETIVE_ASSUMPTION` — plausible reading that Canon does not fix.
- `NEW_RULE_OR_LORE` — new rule, mechanism, institution, causal property, historical fact, etc.
- `REQUIREMENT_CHANGE` — changes, removes or weakens an existing downstream obligation.
Every non-`SOURCE_FACT` premise must be visible in the candidate accounting (candidate record, comparison row, recommendation where relevant). (vNext.2.2: assumption / lore summaries are DERIVED from the premises and enforced by section 13.)

### 7a-2 Hidden-premise attack (before any candidate is called "zero assumption")
Per finalist ask: (i) "If I removed every unstated convenience, would this mechanism still work exactly as described?" (ii) "What event / order / knowledge / state must differ from the supplied source for this to happen?" Any condition not already in `REQUIRED_PREMISES` is added. Typical hidden premises: characters arriving at different times; someone knowing something not established; an event occurring off-screen; an existing refusal reinterpreted as physical impossibility; a system applied in a context not established; scene/beat capacity assumed; an unlocked requirement silently deleted. No "zero assumption" label before this attack passes.

### 7b Finalist comparison (required when a recommended or shortlisted finalist carries MORE or HEAVIER non-SOURCE premises than the VERIFIED_SUFFICIENT_BASELINE)
Per finalist, one compact row: obligations (YES+proof / CONDITIONAL / PARTIAL / NO) | non-SOURCE premises by class | Canon changes | downstream burden | reversibility | `MATERIAL_VALUE_OVER_BASELINE`. Compare premise CLASSES, not raw counts.
- `NEW_LORE` and assumption are different things: `NEW_LORE = NO` with `INTERPRETIVE_ASSUMPTIONS = 1` is legitimate. Recommendation wording must keep the distinction ("no new world rule, but this depends on one unresolved interpretation"); never "no assumptions / no new lore" while an interpretive premise remains.
- Creative value is a first-class ranking dimension. A higher-burden finalist may beat the baseline with `MATERIAL_VALUE_OVER_BASELINE` such as stronger character agency; substantially stronger emotional consequence; a necessary external cost signal; useful institutional / world integration; required gameplay value; solving an additional documented obligation; materially cleaner causal staging. Do not award complexity for its own sake; do not treat dramaturgical gain as mere decoration. Record `MATERIAL_VALUE_OVER_BASELINE` (or "none") for every higher-burden finalist and weigh value against added burden instead of auto-minimising.
- `DOMINATED_BY_SIMPLER_SUFFICIENT_SOLUTION` only when ALL hold: (1) both candidates passed the premise audit; (2) the simpler candidate verifiably satisfies all locked obligations; (3) no hidden premise gives the simpler candidate an uncounted cost; (4) the higher-burden candidate adds no `MATERIAL_VALUE_OVER_BASELINE` sufficient to justify its cost. A dominated candidate may stay as `OPTIONAL_UPGRADE` + trigger.
- Recommending anything other than the baseline requires `WHY_NOT_SUFFICIENT_BASELINE` naming the material value.

### 7c No-lore / reinterpretation / reduction competes fairly
If any candidate built on: reinterpret an existing rule, reuse an existing carrier, redistribute, change a downstream requirement, requirement reduction, remove / reframe, or `DO_NOT_ADD_NEW_LORE` verifiably satisfies every mandatory obligation, it MUST survive into the finalist comparison (not parked only as "fallback" / "cheap option"). Because Stage A is not filtered, it exists as a candidate; because Stage B audits it, its hidden premises are counted.

### 7d Requirement-reduction safety
A requirement-reduction candidate counts as sufficient only if the requirement is NOT author-locked; it carries a `REQUIREMENT_CHANGE` premise. Before reducing or removing a downstream requirement, check its owner, any author decision on it, and the gameplay/story contract it supports. Locked → it cannot claim to satisfy the obligation. Unlocked → record the downstream change (target file/requirement, owner).

### 7e RECOMMENDATION_CONSISTENCY_CHECK (mandatory, output-gating)
Before the final recommendation, check and REPAIR (not merely log) any failure:
- **Candidate identity:** recommended candidate exists in the candidate record.
- **Premises:** every premise the recommendation refers to exists in `REQUIRED_PREMISES`.
- **Lore claim:** "no new lore" only if the candidate has no `NEW_RULE_OR_LORE` premise.
- **Assumption claim:** "no new assumptions" only if it has no `INTERPRETIVE_ASSUMPTION`, no `NEW_RULE_OR_LORE`, no unapproved `REQUIREMENT_CHANGE`.
- **Obligation claim:** "fully satisfies" only if every mandatory obligation is `YES` (not CONDITIONAL / PARTIAL / NO).
- **Author claim:** if the recommendation needs author confirmation, record WHY and the class: `CANON_FACT_NEEDS_AUTHOR` / `DIRECTOR` / or merely an `INTERPRETIVE_ASSUMPTION` that can proceed provisionally (then it is NOT an author question).

## 8. Candidate record, diversity, specificity, damage

Each candidate records: mechanism | existing carriers reused | `REQUIRED_PREMISES` (classified, 7a-1) | `MATERIAL_VALUE_OVER_BASELINE` (when higher burden) | obligations solved (YES / PARTIAL / NO each) | downstream files/events affected | reversibility | primary advantage | primary cost | Canon risk | gameplay implication.

- **`SUPPORTING_EXECUTION_IDEAS` (optional, may be empty):** micro-event, staging, visual beat, performance beat, player-control handoff, UI/gameplay overlay, camera idea. They support a causal candidate, do NOT count toward the required materially different mechanisms, cannot win the recommendation by themselves, and have no minimum count. Do not fill the field mechanically; one line each, naming the candidate it supports.

- Merge candidates that share the same causal mechanism (surface wording differences do not count).
- Count: `MATERIAL` 3–5 candidates; `DIRECTOR` 2–4 after pruning.
- **Project Haruka specificity check:** could the solution be pasted unchanged into an unrelated magical-girl story? If yes → too generic, rework with this project's documented nodes. Do not insert themes artificially.
- **Downstream damage check:** Canon that must change; scenes made inconsistent; explanation burden; new world-system gap created; stolen character function; beat overload; story-vs-gameplay trade-offs; unnecessary lore.

## 9. Authority gate (ordered)

Order: `OWNER_LOOKUP → ROUTINE? → MATERIAL + PROVISIONAL_DEFAULT? → DIRECTOR TEST → ASK AUTHOR only if DIRECTOR survives`.

1. `OWNER_LOOKUP`: could a known owner document resolve this? If yes, look it up first (one lookup pass per issue; record `SEARCHED`, no search loops). If the owner document is outside the current scoped bundle, record `OWNER_LOOKUP_REQUIRED`: this is a lookup request (read file/section X), NOT a story question to the Director. Never ask "Author, what is the answer?" when the actual next action is "read owner file X".
2. `ROUTINE`: AI resolves and records.
3. `MATERIAL`: ask "is there a reversible, low-damage, Canon-compatible provisional choice?" If yes, record `PROVISIONAL_DEFAULT` = selected option | why safe | invalidating condition | what would need rework if invalidated, and proceed provisionally where the current run / layer authority allows (Draft is not Canon: no canon writeback). Do NOT ask the author merely because several viable candidates exist.
3b. **Author-escalation gate (output-gating):** an author question may not appear in final output unless an `AUTHOR_ESCALATION_RECORD` exists with: `QUESTION` | `CLASS` (`CANON_FACT_NEEDS_AUTHOR` or `DIRECTOR`) | `OWNER_LOOKUP_DONE` | `SAFE_DEFAULT_TEST` (why no safe PROVISIONAL_DEFAULT) | `WHY_AUTHOR_MUST_DECIDE` | `WHAT_BREAKS_IF_DEFERRED`. If the class is `MATERIAL` the question is NOT allowed: use `PROVISIONAL_DEFAULT`. A DIRECTOR question must not bundle a MATERIAL placement / seeding / execution choice: that part gets its own `PROVISIONAL_DEFAULT`.
3c. **LEVEL_3 / INTENT_UNRESOLVED precedence:** these labels mark a POTENTIAL author-owned decision; they do NOT by themselves authorise asking the author. The decision must still pass this funnel and the DIRECTOR TEST; if a safe MATERIAL provisional default resolves the immediate work, continue provisionally.
4. `DIRECTOR TEST`: escalate only if the decision materially changes one or more of: locked character intent; major theme; major world rule; ending; major reveal architecture; irreversible downstream structure; author-owned aesthetic / meaning choice. A choice that is reversible or only changes execution detail does not pass.
5. `DIRECTOR` output: plain human language; 2–4 pruned, materially different options; a recommendation; the main trade-off; the smallest sufficient author question. Do not dump the audit.

- Keep categories distinct: `NEEDS_AUTHOR` caused by a genuine unresolved `CANON_FACT` contradiction (or a locked-intent question) may still require the author; that is not a creative Director choice, and a safe MATERIAL design choice is not a reason to ask.
- Holistic / supervisor runs keep three layers: original problem / professional restatement / side findings. **Side findings never silently replace the requested problem.** For a `WORLD_SYSTEM` request, scene/arc observations are logged as side findings and may lead the answer only if they expose a genuine root dependency (and say so).

## 10. Change-state truthfulness (replaces the word `APPLIED`)

States: `DISCOVERED` → `ADJUDICATED` → (`AUTHOR_PENDING`) → `PATCH_PLANNED` → `APPLIED_TO_TARGET` → `VERIFIED`; side states `REJECTED`, `SUPERSEDED`.

- `PATCH_PLANNED`: the change exists only in a board / recommendation / patch list / proposed diff. Writing "applied", "已改入", "done" for this state is a false claim.
- `APPLIED_TO_TARGET`: requires target path, anchor/version, before-evidence and the actual diff (or a quoted before/after).
- `VERIFIED`: requires post-change revalidation against the ORIGINAL problem (does the problem statement still hold?), not just that the text changed.
- A summary or report may only use the highest state that has evidence. Missing evidence → state down.

## 11. Machine-readable audit cells (formal multi-cell audits only; not for author-facing chat)

One JSON/YAML object per cell: `CELL_ID, ANGLE_ID, TARGET_ID, QUESTION, EVIDENCE, COUNTERCHECK, VERDICT, SEVERITY, MERGED_TO, CONFIDENCE`.
- `EVIDENCE` carries file + anchor/quote. `COUNTERCHECK` is written independently of the finding text (`COUNTER:` strongest opposing reading / `SEARCHED:` what was searched and not found / `NO_DIRECT_COUNTER:`).
- `VERDICT` ∈ `FINDING | CLEAN_AFTER_ATTACK | NOT_APPLICABLE | NEEDS_AUTHOR | INSUFFICIENT_EVIDENCE | MERGED_TO`. `MERGED_TO` is a real state: the cell is a duplicate of another cell (record target `CELL_ID`), not a separate finding and not a discrepancy.
- Invalid cells (no anchor, no counter-check, boilerplate reason) count as not done.

## 12. Blind-audit wording

Use `SCOPED_INPUT_WITH_EXPOSURE_AUDIT`: the orchestrator prepares a scoped read-only input bundle, agents search inside the bundle. Do NOT claim hard isolation unless the harness enforces it. Keep tool-access / exposure logging; if forbidden content is exposed, record contamination timing and type. Exposure lowers independence confidence; it does not by itself invalidate a finding whose anchors still verify.


## 13. Execution enforcement (vNext.2.3; 2.2 base + breadth recovery, strict authority schema, completion truth) — RULE EXISTS is not RULE WAS EXECUTED

No new design heuristics here. This section only makes the existing records mandatory and checkable. Machine-checkable shape: `STORY_OUTPUT_RECORD` (JSON, schema in the `validate_story_output.py` docstring); structural validator: `validate_story_output.py` (experiment-only; checks presence and internal consistency, NOT creative truth or hidden semantic assumptions).

### 13a FINAL_OUTPUT_GUARD (orchestrator-owned; no workflow branch may bypass it)
Runs on every answer produced by ANY path (audit, story discussion, solution-space designer, holistic supervisor, targeted or full review). It validates the minimum records for the answer type; it does not redo the analysis.
- `ROUTINE` factual / trivial work: no heavy guard.
- `MATERIAL` / `DIRECTOR` answer containing a candidate ranking, a solution recommendation, an author question, or a Canon interpretation that needs assumptions: build a `STORY_OUTPUT_RECORD` and run only the checks relevant to the answer type (13b-13i). The guard checks: (1) recommendation exists, candidate exists, premise audit merged, consistency PASS; (2) BREADTH_RECOVERY_CHECK was executed whenever a materially distinct candidate was rejected (13h); (3) every MATERIAL decision has a valid `material_decisions` record and no MATERIAL author question; (4) every active DIRECTOR trigger has a valid `author_escalations` record (13f).
- Flow: analysis -> guard -> FAIL? -> ONE targeted repair -> guard again. Second FAIL => record `OUTPUT_GUARD_FAILED` and emit a limited / internal-failure answer; never claim a validated final recommendation. Never silently omit the guard.

### 13b CANDIDATE PREMISES (finalists)
Every finalist carries `REQUIRED_PREMISES`; each premise = proposition | class (`SOURCE_FACT` / `STRICT_INFERENCE` / `INTERPRETIVE_ASSUMPTION` / `NEW_RULE_OR_LORE` / `REQUIREMENT_CHANGE`) | source or derivation | confidence. `ASSUMPTIONS = NONE` / `NO_NEW_LORE` is never a free-form self-declaration: derive the summary from the premises. All premises SOURCE_FACT / STRICT_INFERENCE => `UNRESOLVED_ASSUMPTIONS = 0`. Any INTERPRETIVE_ASSUMPTION => `UNRESOLVED_ASSUMPTIONS >= 1` even when `NEW_LORE = NO`. A premise is "unresolved" if its class is INTERPRETIVE_ASSUMPTION, NEW_RULE_OR_LORE, unapproved REQUIREMENT_CHANGE, or it is `PREMISE_DISPUTED`.

### 13c PREMISE_AUDIT (MATERIAL / DIRECTOR finalists only; after divergence, before any ranking)
Separate adversarial pass, fresh specialist / fresh context when available. Input: candidate mechanism, source bundle, locked obligations, existing `REQUIRED_PREMISES`. It does NOT receive the preferred recommendation. Single question: "What must be true for this candidate to work that is not already recorded?" Return per finalist: `MISSING_PREMISE` | `MISCLASSIFIED_PREMISE` | `LOCKED_REQUIREMENT_CONFLICT` | `NONE`. Not ideation.

### 13d MERGE BEFORE RANKING
Every audit finding is merged into the candidate's `REQUIRED_PREMISES` BEFORE baseline determination, assumption comparison and recommendation. The generator may not silently reject a finding; if disputed, mark `PREMISE_DISPUTED` and rank it as an `INTERPRETIVE_ASSUMPTION` until resolved. `VERIFIED_SUFFICIENT_BASELINE` may be assigned only after the audit; every mandatory obligation is `YES` / `CONDITIONAL` / `PARTIAL` / `NO` with proof; only all-`YES` is fully sufficient (CONDITIONAL on an unresolved interpretation is not YES).

### 13e RECOMMENDATION_CONSISTENCY_CHECK (structured record, not a heading)
Stored in the record with fields: `RECOMMENDED_CANDIDATE_ID` | `CANDIDATE_EXISTS` | `PREMISES_SYNCED` | `NEW_LORE_CLAIM_VALID` | `ASSUMPTION_CLAIM_VALID` | `OBLIGATION_CLAIM_VALID` | `AUTHORITY_CLAIM_VALID` | `RESULT` (`PASS`/`FAIL`). Any FAIL => answer NOT READY: one repair pass, validate again (13a).

### 13f AUTHORITY RECORD (one exact schema; no aliases, no silent coercion; malformed = FAIL)
`material_decisions` = ARRAY of objects, each exactly: `decision_id` | `class` = `"MATERIAL"` | `issue` | `owner_lookup_done` | `owner_lookup_result` | `provisional_default` = OBJECT `{option, why_safe, invalidating_condition, rollback_or_rework}` | `author_question` = `null`. A MATERIAL decision whose `provisional_default` is not an object, or whose `author_question` is non-null, FAILS the guard. MATERIAL never becomes an author question; the workflow continues on the provisional default.
`author_escalations` = ARRAY of objects, each exactly: `decision_id` | `class` = `"DIRECTOR"` or `"CANON_FACT_NEEDS_AUTHOR"` | `question` | `owner_lookup_done` | `owner_lookup_result` | `safe_default_test` | `why_author_must_decide` | `what_breaks_if_deferred` (+ `director_trigger` for DIRECTOR). DIRECTOR: `question` non-empty and `director_trigger` one of the seven triggers. CANON_FACT_NEEDS_AUTHOR: `question` may ask the author to resolve a factual Canon inconsistency. Any author-facing question requires a matching record: no record => no author question.
- Needing another owner file => `owner_lookup_required` (file / section if known), never a "what should happen?" question.
- Director survival: `why_author_must_decide` must map to one of locked character intent; theme / moral meaning; major world rule; ending; major reveal architecture; irreversible downstream structure; author-owned aesthetic / meaning. If not, downgrade to MATERIAL provisional / lookup. A genuine `CANON_FACT_NEEDS_AUTHOR` contradiction is never suppressed.
- Text/record consistency (both directions): if the final or internal analysis contains `DIRECTOR_TRIGGER` (or classifies a current unresolved decision as DIRECTOR), exactly one holds: (A) a matching `author_escalations` record exists; or (B) before final output the decision was explicitly reclassified as non-Director with a reason (`reclassified[]`: `decision_id`, `from`, `to`, `reason`). `DIRECTOR_TRIGGER = true` with no author question and no reclassification is a FAIL. If the analysis labels a decision MATERIAL, a matching `material_decisions` entry is required, else FAIL.

### 13g Stage separation in creative completion
When the input is marked `CONFIRMED_INCOMPLETE_DESIGN_PROBLEM`, problem existence is given. The designer may flag `PROBLEM_PREMISE_CONFLICT` only if supplied source directly contradicts the confirmed problem; reopening "does this gap exist?" is Discovery / Admission work and earns no methodological credit in creative completion.

### 13h BREADTH_RECOVERY_CHECK (after PREMISE_AUDIT, before ranking; MATERIAL / DIRECTOR with a divergence set)
Premise audit may validly eliminate a candidate and accidentally collapse a materially distinct creative axis. This step prevents that without relaxing the audit and without any story-specific heuristic (no "always include an institutional / agency candidate").
- Stage A (DIVERGE) records per candidate, as a map not a score: `CANDIDATE_ID` | `CAUSAL_MECHANISM` | `PRIMARY_AGENCY` | `SYSTEM_INSTITUTION_AXIS` | `STORY_CHARACTER_AXIS` | `DISTINCT_VALUE`.
- After the audit every candidate is `VALID` / `CONDITIONAL` / `REJECTED`. Rejected candidates stay in the internal record; never deleted.
- Axis-loss detection: did a rejection remove a materially distinct mechanism / agency / system axis that no survivor covers? If yes, record `BREADTH_AXIS_LOST` (rejected candidate, lost axis, why the original was invalid) and run exactly ONE `BACKFILL_DIVERGENCE_PASS`.
- Backfill: 1-2 NEW mechanisms that preserve the lost axis while avoiding the original's premise / locked-requirement failure. It does not repair the rejected candidate. Its agent receives the confirmed problem, mandatory obligations, valid survivors, the LOST AXIS and the rejection reason; it must NOT receive the preferred recommendation. Max 2 candidates; they go through the normal PREMISE_AUDIT -> VERIFY -> RANK, no shortcut.
- No quota. A narrow final set is acceptable when recorded as `BREADTH_LOSS_JUSTIFIED` (axis + why no valid replacement exists). Never pad with generic candidates.
- Before ranking, output internally `FINAL_SOLUTION_SPACE` (per survivor: mechanism, primary agency, system/institution axis, major story/character axis) and `REJECTED_BUT_DISTINCT` (rejected candidates whose ideas may still inspire; not counted as viable options).
- Record keys: `breadth{rejected_distinct[], breadth_recovery_executed, axis_lost[], backfill_ids[], breadth_loss_justified[], final_solution_space[]}`.

### 13i COMPLETION TRUTH
A subagent's "DONE" is not completion. The harness marks a step complete only when (1) the expected output file exists, (2) it is non-empty, (3) the required record parses, (4) the validator result is PASS where validation is required. Otherwise record `TASK_OUTPUT_MISSING_OR_INVALID` in RUN_STATE and do not use that step's output.
