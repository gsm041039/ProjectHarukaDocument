# Patch 3 Final — Regression Test Walkthrough

Validation only. No Act I content touched. TEMP run, not canon.

## A — Internal Question Funnel
Scenario: Act II relationship-pacing problem for 晴香/美夜香 produces 10+ internal questions
(pacing, medium, POV, timing, prop, gameplay tie-in, reuse-vs-new, secondary job, risk of
overload, Director-level stance fork). Applying the Question Value Test (story-orchestrator
§Question Funnel): 8 resolve at `ANSWERED_BY_SOURCE`/`STRONGLY_INFERABLE`/`HEAD_WRITER_DECISION`/
`PROVISIONAL_SAFE` and stay internal; only the stance fork (does this scene validate or
complicate 美夜香's efficiency-mask ideology) reaches `DIRECTOR_DECISION`.
Result: **PASS** — funnel structure forces classification of every question before any reach the Director.

## B — Director Intent Clear
Scenario: a routine bridge beat where existing approved Outline text states the transition directly.
`INTENT_CLEAR` → continue, no question surfaces.
Result: **PASS**.

## C — Director Intent Inferable
Scenario: no single sentence states 美夜香's rooftop behaviour motive, but three converging pieces
of evidence (arc tracker, prior beat, relationship dynamics doc) point the same way.
`INTENT_INFERABLE` → Head Writer records derivation, continues.
Result: **PASS**.

## D — Director Intent Unresolved
Scenario: whether 美夜香's first non-efficiency act is read as genuine care or calculated debt-
building is compatible with two approved-evidence readings, and picking one changes theme meaning.
`INTENT_UNRESOLVED` → Director Decision, natural-language question fired via the Natural Director
Question format.
Result: **PASS**.

## E — Ask Early
Scenario: same fork as D, but caught before 10 Beats are drafted downstream — Question Value Test
rule 5 (delaying causes substantial rework) forces `ASK_NOW` before Beat Sheet work proceeds on
that branch, rather than after.
Result: **PASS** — Ask Early is a rule inside the funnel, not a separate optional step.

## F — Existing Carrier First
Scenario: "美夜香/晴香 relationship needs an intermediate step" problem. story-solution-space-designer
audits rungs 1–8 (existing beat, extension, merge, redistribute, aftermath, gameplay, environment,
micro-event) before any new-full-event candidate is admitted.
Result: **PASS**.

## G — Multi-duty Carrier
Scenario: one existing beat (美夜香 staying behind after curfew) naturally also carries relationship
progression + misinterpretation setup + future payoff seed + breathing room — all arise from the
same action, so they are combined into PRIMARY_JOB + SECONDARY_JOBS rather than split into separate
scenes.
Result: **PASS**.

## H — Overload
Scenario: forcing one beat to also carry a combat mechanic reveal + a theme monologue + a new
character introduction — Overload Guard flags `CARRIER_OVERLOAD_RISK` (information + tonal +
pacing incompatibility) and proposes split/demote.
Result: **PASS**.

## I — Three Levels
Routine transition → LEVEL_1 (quick internal pick, no dump). Relationship-step insertion →
LEVEL_2 (3–5 candidates via solution-space-designer). Ideology-validation fork → LEVEL_3
(2–4 strategic alternatives + Devil's Advocate + Director question).
Result: **PASS** — classification maps cleanly onto existing AUTO_RESOLVABLE/AI_PROPOSED_CANDIDATE/
AUTHOR_DECISION classes, so no duplicate decision system was introduced.

## J — Diverge/Converge
LEVEL_2 case produces 4 mechanism-distinct candidates (extend existing beat / redistribute across
two beats / gameplay behaviour / new micro-event) — not 4 wording variants of one scene.
Result: **PASS**.

## K — Devil's Advocate
Preferred LEVEL_2 candidate (extend existing beat) challenged: strongest argument against it is
that it under-delivers the "audience should feel efficiency-mask cracking" target compared to the
gameplay-behaviour alternative. Candidate set reopened, gameplay-behaviour candidate promoted.
Result: **PASS**.

## L — Rejected Memory
Rejected "new full event" candidate persists in `11_candidate_board.md` with `REJECTED_REASON`
("existing beat rung 2 already covers the obligation cheaper"). On resume, story-resume's Patch 3
recovery step re-surfaces this and blocks it from being silently re-proposed.
Result: **PASS**.

## M — Orchestrator Synthesis
Two specialists disagree (solution-space-designer favors gameplay-behaviour carrier; a character
lens favors dialogue-only). Orchestrator Synthesis section forces the orchestrator to inspect both
actual candidates and state the trade-off itself rather than count PASS votes.
Result: **PASS**.

## N — Director Layer Gate
Beat Sheet for the target Act reaches `LAYER_STATUS = INTERNAL_COMPLETE`; `TRANSITION_ALLOWED`
stays `NO` and Scene Architecture work does not start until the Director gives natural approval
("Beat Sheet OK") which flips `DIRECTOR_REVIEW = GRANTED` / `TRANSITION_ALLOWED = YES` in the
run-workspace-manager manifest.
Result: **PASS**.

---

# Final Verdicts

```text
QUESTION_FUNNEL              = PASS
DIRECTOR_INTENT_GATE         = PASS
ASK_EARLY                    = PASS
PROBLEM_DRIVEN_BLUEPRINT     = PASS
EXISTING_CARRIER_FIRST       = PASS
MULTI_OBLIGATION_CARRIER     = PASS
OVERLOAD_GUARD                = PASS
THREE_LEVEL_DESIGN           = PASS
CANDIDATE_BOARD              = PASS
DEVILS_ADVOCATE              = PASS
ORCHESTRATOR_SYNTHESIS       = PASS
DIRECTOR_LAYER_GATE          = PASS
PATCH_3_FINAL                = PASS
```

Remaining weakness: these are spec-level walkthroughs against the edited SKILL.md files, not a
live multi-turn run — first real Act II/III use should confirm the Question Value Test doesn't
over-trigger `ASK_NOW` in practice, and that candidate-board note-taking doesn't add noticeable
overhead to LEVEL_1 routine beats (it shouldn't — LEVEL_1 explicitly skips the board).
