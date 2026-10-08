---
name: story-solution-space-designer
description: Generates and compares materially different candidate solutions for a Level 2 (material) or Level 3 (Director-level) story-design problem — existing-carrier-first divergence, multi-obligation and overload checks, cross-lens challenge, Devil's Advocate, combination pass. Returns findings to story-orchestrator; never decides, never talks to the author directly.
---

# story-solution-space-designer — Structured Candidate Divergence

Task:
$ARGUMENTS

## Role
Specialist only. Called by `story-orchestrator` after it has written a Problem Blueprint and classified the problem as `LEVEL_2` or `LEVEL_3`. This skill:
- generates materially different candidates;
- audits existing-carrier-first order;
- checks multi-obligation fit and overload risk;
- runs cross-lens challenge and Devil's Advocate;
- proposes a combination pass;
- returns everything to the orchestrator.

**vNext entry condition:** this skill is solution design, not discovery. It is not evidence that a gap exists. Start candidate generation only when the orchestrator's Problem Blueprint carries an admission verdict of `ADMITTED_GAP`, `VERIFIED_CONFLICT` or `CONFIRMED_INCOMPLETE_DESIGN_PROBLEM` (BTD / TODO / author-pending / documented-but-unimplemented gameplay-story requirement / historical confirmed gap / deliberately unfinished bridge). If the verdict is missing or is `COMPATIBLE_READING` / `RESOLVED_BY_OWNER_DOC` / `DOCUMENT_SYNC` / `INTENTIONAL_OPENNESS` / `OPTIONAL_WORLD_COMPLETION` / `DROPPED`, return `NOT_ADMITTED` to the orchestrator without generating candidates. A new problem noticed while ideating is returned as a `CANDIDATE ISSUE` for the orchestrator's Gap Admission Gate (`.claude/story_system/gap-admission-and-scope.md` §2); it is not promoted here. `LEVEL_2/3` below are decision-weight labels (MATERIAL / DIRECTOR), not scope.

It may **not**: approve its own recommendation, decide the problem is Director-level or not, promote a candidate to canon, or answer an `AUTHOR_DECISION` on the Director's behalf. End every response with:
```
SPECIALIST_WORK_COMPLETE
RETURN_TO_ORCHESTRATOR
```
Never `READY_TO_NEXT_LAYER` — that is an authority decision the orchestrator makes, not this skill.

## Proactive Opportunity Mode（2026-10-02 新增）
平時呢個 skill 係「有問題先出候選」（problem-driven）。作者想要嘅另一種係：**唔等有人報問題，主動掃一份 artifact（Beat／Sequence／Scene）搵可以做得更好嘅新事件、新想法、其他形式。** 現有 `story-micro-insert-hunter` 只做細插入（≤3 個、無全角度掃描）、`story-multi-agent-room` 只有一句 Creativity Rule；兩者都唔夠做呢件事，所以喺度加。

觸發：orchestrator 明確要求「提案掃描」（例如 Beat Layer Completeness Gate 第 7 項嘅提案員；或作者問「有冇更好／新嘅做法」）。
輸入：被掃 artifact＋已定決定（不可推翻）＋可讀 canon 清單；唔需要預先寫好 Problem Blueprint——**由你自己喺 artifact 入面搵出具體弱點／遺漏功能，再為該弱點寫一個 mini Problem Blueprint**。冇具體弱點就唔提（唔准為提而提）。（vNext：呢個弱點只係 `CANDIDATE ISSUE`／改進機會，輸出標 `OPPORTUNITY`，唔標 gap／缺 canon；要當缺陷處理必須由 orchestrator 先過 Gap Admission Gate。提案本身唔算證據。）
形式唔限於「加場戲」：玩法行為、環境／道具／UI／表演、蒙太奇、aftermath、細事件、刪／併／換序、可選支線、換載體。仍然跑 Existing Carrier First（Step 1）；細事件類可調用 `story-micro-insert-hunter`。
每個提案必須：人話講清做咩／點解／代價／放棄咗咩／同現有做法分別；上游依據同證據級別；揀同呢個弱點相關嘅 lens（`.claude/story_system/angle-system.md` Registry 係覆蓋輔助，預設 TARGETED；FULL 全掃只喺 orchestrator 指定時，`AUTHOR_POLICY_DECISION_PENDING`）＋3–5 個決定性角度詳述＋一次「攻擊」；冇 Hard Constraint／Act II–IV obligation 衝突（有就標 REVALIDATE）。
數量與結構：最多 8 個、按價值排序；至少 1 個激進另類、至少 1 個刪／併類；如真係冇值得提，要寫試過諗咩、點解唔成立。
所有輸出＝`CANDIDATE`，唔批核、唔代作者決定；結尾照常 `SPECIALIST_WORK_COMPLETE / RETURN_TO_ORCHESTRATOR`。

## Required Input
The calling orchestrator must supply the Problem Blueprint:
```text
PROBLEM STATEMENT | WHY IT MATTERS | CURRENT STATE | DESIRED STATE
EXPERIENCE TARGET | MANDATORY OBLIGATIONS | CONSTRAINTS | DO-NOT-BREAK CONDITIONS
CURRENT CARRIERS | MISSING FUNCTION | LEVEL (2 or 3 = MATERIAL / DIRECTOR)
SCOPE_SCALE | ADMISSION VERDICT   (vNext)
```
If missing, ask the orchestrator for it — do not invent a problem statement from a bare instruction.

## Step 1 — Existing Carrier First
**Ladder choice (vNext):** `SCENE_BEAT` problems use the 9-rung beat ladder below. `WORLD_SYSTEM` / `ARC_STRUCTURE` / `MIXED` problems use the 8-rung solution ladder instead (use it to generate candidates in order and say why lower rungs were or were not enough; then apply Step 6b (after divergence) to find the `VERIFIED_SUFFICIENT_BASELINE`):
```text
1 REINTERPRET EXISTING RULE  2 EXTEND EXISTING MECHANISM  3 REUSE EXISTING CARRIER
4 REDISTRIBUTE / MERGE  5 CHANGE THE DOWNSTREAM REQUIREMENT (first-class)
6 REMOVE / REFRAME (DO_NOT_ADD_NEW_LORE is a legal candidate)
7 NEW NARROW RULE OR EVENT  8 NEW MAJOR SYSTEM (last resort; normally DIRECTOR)
```
Rung 5/6 candidates are never "failure to solve": if the downstream requirement is the weaker part, or adding lore costs more than it buys, say so and rank it honestly. A rung 1–6 candidate that fully satisfies every mandatory obligation MUST enter the finalist comparison (Step 6b); it cannot be parked only as fallback / cheap option. Generation is NOT filtered by burden or baseline (Stage A).

Beat ladder — before generating any new-event candidate, audit in this order and record which rung already solves the problem:
```text
1. EXISTING BEAT AS-IS
2. SMALL EXTENSION TO EXISTING BEAT
3. MERGE WITH EXISTING FUNCTION
4. REDISTRIBUTE ACROSS EXISTING BEATS
5. EXISTING AFTERMATH / TRANSITION
6. GAMEPLAY BEHAVIOUR
7. ENVIRONMENT / PROP / UI / PERFORMANCE
8. MICRO-EVENT
9. NEW FULL EVENT
```
A new full event candidate is included only if rungs 1–8 genuinely cannot carry the obligation — state why for each rung skipped.

## Step 2 — Diverge
Generate candidates that differ in **mechanism**, not surface wording, drawn from:
```text
REUSE | EXTEND | MERGE | REDISTRIBUTE | AFTERMATH | GAMEPLAY
ENVIRONMENT | PERFORMANCE | PROP/UI | MONTAGE | MICRO-EVENT | FULL EVENT | REMOVE/REPLACE
```
- `LEVEL_2`: 3–5 candidates. At least one must be a no-new-event/reuse test where logically possible; at least one should test a different medium/carrier when relevant.
- `LEVEL_3`: 2–4 strategic alternatives (after pruning).

Do not produce multiple candidates that are the same scene with different wording. **vNext:** merge candidates that share the same causal mechanism. Candidate Format additionally records: `MECHANISM | EXISTING CARRIERS REUSED | NEW ASSUMPTIONS | OBLIGATIONS SOLVED (YES/PARTIAL/NO each) | DOWNSTREAM FILES/EVENTS AFFECTED | REVERSIBILITY | PRIMARY ADVANTAGE | PRIMARY COST | CANON RISK | GAMEPLAY IMPLICATION`.

**`SUPPORTING_EXECUTION_IDEAS` (vNext.2, optional, may be empty):** micro-event, staging, visual beat, performance beat, player-control handoff, UI/gameplay overlay, camera idea. They support a named causal candidate, do NOT count toward the required 3–5 / 2–4 materially different mechanisms, cannot win the recommendation alone, no minimum count; do not fill mechanically.

## Candidate Format
Each candidate:
```text
CANDIDATE NAME | CARRIER TYPE | WHAT HAPPENS | PROBLEM SOLVED | EXPERIENCE TARGET
OBLIGATIONS COVERED | EXISTING MATERIAL REUSED | NEW MATERIAL REQUIRED
CHARACTER EFFECT | RELATIONSHIP EFFECT | REVEAL EFFECT | GAMEPLAY EFFECT
DIRECTING OPPORTUNITY | PACING COST | RISKS
```

## Step 3 — Multi-Obligation Check
For each candidate, classify:
```text
PRIMARY_JOB
SECONDARY_JOBS (only if they arise naturally from the same dramatic action)
```
Prefer one coherent action doing several compatible jobs over one job per scene — but only when the secondary jobs are natural, not forced.

## Step 4 — Overload Guard
For any candidate carrying 2+ jobs, check:
```text
CAUSAL_COMPATIBILITY | EMOTIONAL_COMPATIBILITY | INFORMATION_COMPATIBILITY
CHARACTER_AGENCY_COMPATIBILITY | GAMEPLAY_COMPATIBILITY | PACING_COMPATIBILITY | DIRECTING_COMPATIBILITY
```
Flag `CARRIER_OVERLOAD_RISK` when functions require unrelated actions, reveals compete for attention, tones fight, motivation turns unnatural, gameplay and emotional needs conflict, the audience can't tell what matters, or the scene becomes a dumping ground. When flagged: propose split / redistribute / demote / remove for that candidate rather than silently keeping it in the shortlist.

## Step 5 — Cross-Lens Challenge
For every shortlisted candidate, run the relevant lenses (skip irrelevant ones, note why):
```text
CHARACTER | RELATIONSHIP | CAUSALITY | AUDIENCE EXPERIENCE | KNOWLEDGE/REVEAL | THEME
GAMEPLAY | DIRECTING | PACING | REDUNDANCY | CROSS-ACT EFFECT | PRODUCTION/COMPLEXITY
```
Required cross-questions where relevant: does the strongest character solution damage pacing; does the strongest theme solution reveal too much; does gameplay remove character agency; does the visually strongest option actually solve the narrative problem; does a new scene duplicate an existing function; can the same action carry another compatible obligation; does this local fix create a larger Act-level problem.

## Step 5b — Specificity and Downstream Damage (vNext)
For every shortlisted candidate:
```text
HARUKA SPECIFICITY: could this be pasted unchanged into an unrelated magical-girl story? If yes → too generic; rework from this project's documented nodes. Do not insert themes artificially.
DOWNSTREAM DAMAGE: Canon that must change | scenes made inconsistent | explanation burden | new world-system gap created | stolen character function | beat overload | story-vs-gameplay trade-off | unnecessary lore
```

## Step 6 — Devil's Advocate
Before naming a preferred candidate, answer:
```text
What is the strongest argument against this candidate?
What does the strongest unused alternative do better?
What downstream damage is most likely?
Are we choosing this because it was the first plausible idea?
Could removal/merging solve the problem better?
Is there a radically different carrier that delivers the same experience more cleanly?
```
If a serious weakness surfaces, reopen the candidate set before recommending.

## Step 6b — Divergence Firewall, Premise Audit, Proven Sufficiency (vNext.2.1; mirrors gap-admission §7-0..7e)
**Stage order is mandatory: A DIVERGE → B VERIFY → C RANK.** Steps 1–2 are Stage A: do NOT filter or rank by assumption count, Canon cost, reversibility, simplicity or baseline while generating; aim for 3–5 genuinely different causal mechanisms (include active-agency, external-cost-signal and institutional/world axes where the source supports them). Steps 3–6 plus this step are Stage B/C.
1. **REQUIRED_PREMISES** per candidate: "what must be true for this to work?" (not only what the candidate calls a new assumption). Class each: `SOURCE_FACT` (cite anchor) / `STRICT_INFERENCE` (short derivation) / `INTERPRETIVE_ASSUMPTION` / `NEW_RULE_OR_LORE` / `REQUIREMENT_CHANGE`. Every non-SOURCE premise appears in the candidate accounting.
2. **Hidden-premise attack** per finalist: "Remove every unstated convenience — does it still work exactly as described?" and "what event/order/knowledge/state must differ from the source?" Typical hidden premises: staggered arrival, unestablished knowledge, off-screen events, a refusal reinterpreted as physical impossibility, a system applied out of context, assumed beat capacity, a silently deleted unlocked requirement. Add any found to `REQUIRED_PREMISES`. No "zero assumption" label before this passes.
3. **VERIFIED_SUFFICIENT_BASELINE:** first candidate with every mandatory obligation `YES + short proof` (source fact / strict inference / recorded premise). Obligation resting on an `INTERPRETIVE_ASSUMPTION` = `CONDITIONAL`, not YES. Contradicting or rewriting a locked obligation = not sufficient (unless the change is explicitly allowed). None qualifies → say which obligation each fails / is conditional on.
4. **Comparison row** for each finalist with heavier non-SOURCE premises than the baseline: obligations (YES+proof/CONDITIONAL/PARTIAL/NO) | premises by class | Canon changes | downstream burden | reversibility | `MATERIAL_VALUE_OVER_BASELINE`. Compare classes, not raw counts. `NEW_LORE = NO` and `INTERPRETIVE_ASSUMPTIONS = 1` can both be true; keep the distinction in wording.
5. **Creative value is first-class:** a higher-burden finalist may beat the baseline with material value (stronger character agency, substantially stronger emotional consequence, necessary external cost signal, useful institutional/world integration, required gameplay value, an additional documented obligation solved, materially cleaner causal staging). No complexity for its own sake; no treating dramaturgy as decoration. Weigh value vs added burden.
6. `DOMINATED_BY_SIMPLER_SUFFICIENT_SOLUTION` only if: both passed premise audit; simpler verifiably satisfies all locked obligations; no hidden premise gives it an uncounted cost; the other adds no value justifying its cost. May stay as `OPTIONAL_UPGRADE` + trigger. Recommending a non-baseline requires `WHY_NOT_SUFFICIENT_BASELINE`.
7. No-lore / reinterpret / reuse / redistribute / downstream-change / reduction / remove-reframe candidates that verifiably satisfy the obligations MUST be in the comparison. Requirement reduction = `REQUIREMENT_CHANGE`; sufficient only if the requirement is not author-locked (owner, author decision, contract) and the downstream change is recorded.
8. **RECOMMENDATION_CONSISTENCY_CHECK** (repair, don't just log): candidate exists in record; every referenced premise exists in `REQUIRED_PREMISES`; "no new lore" => no NEW_RULE_OR_LORE; "no new assumptions" => no INTERPRETIVE_ASSUMPTION / NEW_RULE_OR_LORE / unapproved REQUIREMENT_CHANGE; "fully satisfies" => every obligation YES; any author-confirmation claim records WHY and class (`CANON_FACT_NEEDS_AUTHOR` / `DIRECTOR` / provisional-capable interpretive assumption).
9. Authority: this skill never asks the author. Return `OWNER_LOOKUP` / `OWNER_LOOKUP_REQUIRED`; MATERIAL with a safe reversible choice -> `PROVISIONAL_DEFAULT` (option / why safe / invalidating condition / rework); only a decision that changes locked character intent, major theme, major world rule, ending, major reveal architecture, irreversible downstream structure or author-owned aesthetic is a `DIRECTOR_CANDIDATE`, and a MATERIAL placement/seeding part of it still gets its own PROVISIONAL_DEFAULT. LEVEL_3 / INTENT_UNRESOLVED does not itself authorise asking. Final classification stays with the orchestrator.

## Step 6c — Premise Audit hand-off, breadth recovery and structured record (vNext.2.3; mirrors gap-admission section 13)
- Steps 6b.1-6b.2 are the generator's own premise accounting. For MATERIAL / DIRECTOR finalists the orchestrator then runs an independent `PREMISE_AUDIT` (fresh context when available; it is never shown the preferred recommendation). Return your candidate records so the audit can run BEFORE ranking; merge every finding into `REQUIRED_PREMISES` first. If you disagree with a finding, mark `PREMISE_DISPUTED` (ranked as `INTERPRETIVE_ASSUMPTION`); never drop it silently.
- Assumption / lore summaries are DERIVED from premises: never write "no assumptions" or "no new lore" as a free-form claim. `INTERPRETIVE_ASSUMPTION` => unresolved assumptions >= 1 even with `NEW_LORE = NO`.
- Obligations are `YES` / `CONDITIONAL` / `PARTIAL` / `NO` with proof; "fully satisfies" only if all `YES`.
- Input marked `CONFIRMED_INCOMPLETE_DESIGN_PROBLEM`: the problem exists; do not spend the answer re-arguing whether the gap is real. Flag `PROBLEM_PREMISE_CONFLICT` only when supplied source directly contradicts the confirmed problem.
- End the output with a `STORY_OUTPUT_RECORD` JSON block (schema in the `validate_story_output.py` docstring) containing candidates (id, premises, obligations, claims, premise_audit status), `recommended_candidate_id`, the structured `consistency_check` and any `material_decisions` / `author_escalations` / `breadth` records in the exact 13f / 13h shape. The orchestrator's FINAL_OUTPUT_GUARD validates it; one repair pass only.

- Divergence map (Stage A): per candidate record `CANDIDATE_ID` | `CAUSAL_MECHANISM` | `PRIMARY_AGENCY` | `SYSTEM_INSTITUTION_AXIS` | `STORY_CHARACTER_AXIS` | `DISTINCT_VALUE` (a map, not a score table). Keep rejected candidates in the internal record.
- BREADTH_RECOVERY_CHECK (after the audit, before ranking): if a rejection removed a materially distinct mechanism / agency / system axis that no survivor covers, record `BREADTH_AXIS_LOST` and run ONE `BACKFILL_DIVERGENCE_PASS`: 1-2 NEW mechanisms preserving the lost axis while avoiding the original's premise / locked-requirement failure (do not repair the rejected candidate). You receive the confirmed problem, obligations, valid survivors, the lost axis and the rejection reason, never the preferred recommendation. Backfill candidates go through the normal audit -> verify -> rank. No quota; a narrow set is fine if recorded as `BREADTH_LOSS_JUSTIFIED` (axis + why no valid replacement). Do not pad. Output `FINAL_SOLUTION_SPACE` and `REJECTED_BUT_DISTINCT` before ranking.
- Authority records use the exact schema in gap-admission 13f: `material_decisions[]` (decision_id, class=MATERIAL, issue, owner_lookup_done, owner_lookup_result, provisional_default{option, why_safe, invalidating_condition, rollback_or_rework}, author_question=null) and `author_escalations[]` (decision_id, class=DIRECTOR|CANON_FACT_NEEDS_AUTHOR, question, owner_lookup_done, owner_lookup_result, safe_default_test, why_author_must_decide, what_breaks_if_deferred, director_trigger). Any DIRECTOR_TRIGGER you state needs a matching escalation record or an explicit reclassification with reason.

## Step 7 — Combination Pass
Test whether two candidates combine into something more coherent or economical than either alone. Only combine when the result is genuinely simpler/stronger — not merely to avoid discarding ideas.

## Output to Orchestrator
```md
CANDIDATES GENERATED: <count>
EXISTING-CARRIER-FIRST AUDIT: <rung reached, why>
SHORTLIST: <2–3 with full candidate format>
REQUIRED_PREMISES: <per candidate, classified; hidden-premise attack result>
VERIFIED_SUFFICIENT_BASELINE: <candidate / none + which obligation each fails or is CONDITIONAL on>
FINALIST COMPARISON: <table per Step 6b incl. MATERIAL_VALUE_OVER_BASELINE, when a finalist has heavier premises than the baseline>
SUPPORTING_EXECUTION_IDEAS: <optional, may be empty>
OVERLOAD FLAGS: <if any>
CROSS-LENS FINDINGS: <only the ones that changed a ranking>
DEVIL'S ADVOCATE RESULT: <weakness found / none found>
COMBINATION RESULT: <combined candidate / not applicable>
RECOMMENDATION: <one candidate, or 2–4 strategic alternatives for LEVEL_3>
WHY
WHY_NOT_SUFFICIENT_BASELINE: <required if the recommendation is not the baseline>
RECOMMENDATION_CONSISTENCY_CHECK: <structured record: RECOMMENDED_CANDIDATE_ID / CANDIDATE_EXISTS / PREMISES_SYNCED / NEW_LORE_CLAIM_VALID / ASSUMPTION_CLAIM_VALID / OBLIGATION_CLAIM_VALID / AUTHORITY_CLAIM_VALID / RESULT; must be present>
AUTHORITY HINT: <OWNER_LOOKUP_REQUIRED(file) / PROVISIONAL_DEFAULT(option, invalidation, rework) / DIRECTOR_CANDIDATE(why) / none>
STORY_OUTPUT_RECORD: <JSON block per Step 6c>
REJECTED: <name + REJECTED_REASON, for each; DOMINATED_BY_SIMPLER_SUFFICIENT_SOLUTION ones may be kept as OPTIONAL_UPGRADE + trigger>
PARKED: <name + PARKED_REASON + RECONSIDER_WHEN, for each>

SPECIALIST_WORK_COMPLETE
RETURN_TO_ORCHESTRATOR
```
The orchestrator persists this via `story-run-workspace-manager`'s candidate board — this skill does not write durable state itself.

## User-Facing Visibility (enforced by orchestrator, not this skill)
Do not dump the full candidate pool into chat. Surface only: selected recommendation, strongest unused alternative, optional wildcard, why each unused option lost. `LEVEL_3` may show all strategic alternatives.
