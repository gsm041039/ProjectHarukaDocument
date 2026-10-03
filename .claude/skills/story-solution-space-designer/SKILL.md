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

It may **not**: approve its own recommendation, decide the problem is Director-level or not, promote a candidate to canon, or answer an `AUTHOR_DECISION` on the Director's behalf. End every response with:
```
SPECIALIST_WORK_COMPLETE
RETURN_TO_ORCHESTRATOR
```
Never `READY_TO_NEXT_LAYER` — that is an authority decision the orchestrator makes, not this skill.

## Proactive Opportunity Mode（2026-10-02 新增）
平時呢個 skill 係「有問題先出候選」（problem-driven）。作者想要嘅另一種係：**唔等有人報問題，主動掃一份 artifact（Beat／Sequence／Scene）搵可以做得更好嘅新事件、新想法、其他形式。** 現有 `story-micro-insert-hunter` 只做細插入（≤3 個、無全角度掃描）、`story-multi-agent-room` 只有一句 Creativity Rule；兩者都唔夠做呢件事，所以喺度加。

觸發：orchestrator 明確要求「提案掃描」（例如 Beat Layer Completeness Gate 第 7 項嘅提案員；或作者問「有冇更好／新嘅做法」）。
輸入：被掃 artifact＋已定決定（不可推翻）＋可讀 canon 清單；唔需要預先寫好 Problem Blueprint——**由你自己喺 artifact 入面搵出具體弱點／遺漏功能，再為該弱點寫一個 mini Problem Blueprint**。冇具體弱點就唔提（唔准為提而提）。
形式唔限於「加場戲」：玩法行為、環境／道具／UI／表演、蒙太奇、aftermath、細事件、刪／併／換序、可選支線、換載體。仍然跑 Existing Carrier First（Step 1）；細事件類可調用 `story-micro-insert-hunter`。
每個提案必須：人話講清做咩／點解／代價／放棄咗咩／同現有做法分別；上游依據同證據級別；Master Angle Registry（`.claude/story_system/angle-system.md` 28 角度）全掃＋3–5 個決定性角度詳述＋一次「攻擊」；冇 Hard Constraint／Act II–IV obligation 衝突（有就標 REVALIDATE）。
數量與結構：最多 8 個、按價值排序；至少 1 個激進另類、至少 1 個刪／併類；如真係冇值得提，要寫試過諗咩、點解唔成立。
所有輸出＝`CANDIDATE`，唔批核、唔代作者決定；結尾照常 `SPECIALIST_WORK_COMPLETE / RETURN_TO_ORCHESTRATOR`。

## Required Input
The calling orchestrator must supply the Problem Blueprint:
```text
PROBLEM STATEMENT | WHY IT MATTERS | CURRENT STATE | DESIRED STATE
EXPERIENCE TARGET | MANDATORY OBLIGATIONS | CONSTRAINTS | DO-NOT-BREAK CONDITIONS
CURRENT CARRIERS | MISSING FUNCTION | LEVEL (2 or 3)
```
If missing, ask the orchestrator for it — do not invent a problem statement from a bare instruction.

## Step 1 — Existing Carrier First
Before generating any new-event candidate, audit in this order and record which rung already solves the problem:
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
- `LEVEL_3`: 2–4 strategic alternatives.

Do not produce multiple candidates that are the same scene with different wording.

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

## Step 7 — Combination Pass
Test whether two candidates combine into something more coherent or economical than either alone. Only combine when the result is genuinely simpler/stronger — not merely to avoid discarding ideas.

## Output to Orchestrator
```md
CANDIDATES GENERATED: <count>
EXISTING-CARRIER-FIRST AUDIT: <rung reached, why>
SHORTLIST: <2–3 with full candidate format>
OVERLOAD FLAGS: <if any>
CROSS-LENS FINDINGS: <only the ones that changed a ranking>
DEVIL'S ADVOCATE RESULT: <weakness found / none found>
COMBINATION RESULT: <combined candidate / not applicable>
RECOMMENDATION: <one candidate, or 2–4 strategic alternatives for LEVEL_3>
WHY
REJECTED: <name + REJECTED_REASON, for each>
PARKED: <name + PARKED_REASON + RECONSIDER_WHEN, for each>

SPECIALIST_WORK_COMPLETE
RETURN_TO_ORCHESTRATOR
```
The orchestrator persists this via `story-run-workspace-manager`'s candidate board — this skill does not write durable state itself.

## User-Facing Visibility (enforced by orchestrator, not this skill)
Do not dump the full candidate pool into chat. Surface only: selected recommendation, strongest unused alternative, optional wildcard, why each unused option lost. `LEVEL_3` may show all strategic alternatives.
