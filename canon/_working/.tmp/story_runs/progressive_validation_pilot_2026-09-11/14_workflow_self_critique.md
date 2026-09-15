# 14 — Workflow Self-Critique (honest, not defensive)

## Top finding, stated plainly
**The single biggest weakness this pilot surfaced is that the previous round (before this pilot) actually asked the author an over-ask question** ("亮 vs 不安 比例") **that this pilot then proved was already answered in the approved outline.** The patched orchestrator did not *procedurally force* the synthesis step that would have caught this before framing the question. This pilot only caught it because the re-test explicitly demanded re-checking "existing evidence" field by field. Left unforced, the same failure mode can recur on the next tone/atmosphere-shaped question.

## A. Current-level detection
Correct outcome (Beat Sheet identified; Beat 0 chosen as earliest unit). **Weakness:** the detection leaned on files already read earlier in *this* session. A genuinely cold session has to re-read `ACT_I_OUTLINE.md` + `ACT_I_BEAT_SHEET.md` in full before detection is trustworthy — nothing in the orchestrator text currently *requires* a full read vs. a skim.
- Owner: `story-orchestrator` Progressive Mode step 2 (current-level detection).
- Minimal improvement: add "read the full target-Act Outline and existing Beat Sheet file end-to-end before classifying layer state; a partial read is not sufficient for current-level detection."
- Regression test: fresh session, no prior reads, same Beat 0 request → verify full-file reads occur before any layer claim.

## B. Source recovery
Adequate for Beat 0 (outline + 2 character sheets, targeted and justified). **Gap:** `06_visual_bible.md` was never checked, even though the Scene-Reference material names a specific visual tier ("Stage 1夢幻鏡") for the ghost-weight symptom — if that tier system is defined in the visual bible, the Beat Sheet's "emotional value shift" / visual-motif framing could be more precisely grounded.
- Owner: `story-room` Beat Sheet Mode entry-read list (currently doesn't name `06_visual_bible.md` even conditionally).
- Minimal improvement: add "if a beat references a named visual-tier system, check `06_visual_bible.md` for its definition" to the Beat-Specific manifest tier.
- Regression test: a beat citing a named visual/symbolic tier → verify visual bible gets checked.

## C. Freshness
Handled correctly — `CONTROL_OBJECTIVES_MASTER` / `HARD_CONSTRAINTS_TABLE` were consulted, found STALE/PARTIALLY_STALE (their own banners from the prior pass), and **not cited** for Beat 0 content; the approved outline + character sheets were used instead. No stale data leaked into the candidate.

## D. AI agency
Real design work happened this turn (tone-curve synthesis, Beat 0 field derivation) with zero new invention. This is the corrected behavior; see "Top finding" for why it wasn't reliable the round before.

## E. Author burden
Zero unnecessary questions this turn. But this is the *second* attempt — the first attempt (prior round) over-asked. The fix needs to be structural (see A/Top finding), not just "this time it worked."

## F. Question quality
N/A this turn (no questions asked). The one deferred fork (AG-5, 操 father-shadow) was correctly *not* forced into this turn and not silently dropped either — logged for when its own beat is reached.

## G. Obligation coverage
Character/reveal/relationship/gameplay obligations were explicitly checked (`04`). **Gap:** theme-Gate obligations (`IDEOLOGY_THEME_STANCE_MATRIX.md`, `THEME_CONFLICT_EXPRESSION_TABLE.md`) were not explicitly consulted for Beat 0 — arguably correct since Beat 0 is pre-inciting and carries no theme-conflict weight yet, but the workflow didn't *state* that reasoning; it just didn't check.
- Owner: `story-room` Beat Sheet Mode obligation-pass list (currently doesn't name the two Gate B/C tables).
- Minimal improvement: add Gate B/C tables to the obligation-pass checklist with an explicit `NOT_RELEVANT (pre-inciting beat)` allowed outcome, rather than silent omission.
- Regression test: a later beat that DOES carry theme weight (e.g. E-XX) → verify Gate B/C tables get checked and cited.

## H. Beat grain
`TRUE_BEAT_GRAIN_PASS`. One borderline item (inherited 10-second pan timing from the Outline layer itself, not authored at Beat Sheet layer) — correctly flagged rather than silently carried or silently stripped.

## I. Traceability
Strong — every field in the candidate traces to a named outline row or character-sheet section (`10`). No guessing required by an external reviewer.

## J. Resume
`PASS` — cold resume correctly distinguishes real durable state (no Beat Sheet work started for real) from the pilot's clearly-labeled TEST-ONLY artifact. This distinction only holds because the pilot's hard rules (no writeback to durable state) were followed; nothing in the *skills themselves* would have stopped a less careful execution from writing pilot output into `NEXT_ACTION.md`. Worth noting as a process-discipline dependency, not a skill safeguard.
- Owner: none currently — this is enforced by task instructions, not a skill-level gate.
- Minimal improvement (future, not applied now): `story-run-workspace-manager` could gain an explicit `PILOT_MODE` flag that mechanically blocks writes to the 5 durable state files for the run's duration.
- Regression test: run a pilot without an explicit "don't touch durable state" instruction → verify a mechanical gate still prevents durable-state writes.

## K. Change impact
Correctly scoped (`13`) — only ~7 artifacts flagged, not the whole project.

## L. User experience
The Turn 1 response (`05`) is more Head-Writer-collaborator than database form (leads with plain-language status, ends with a real next-step offer). **Minor risk:** the Beat 0 field table is fairly dense/technical for something that isn't even a question — could be trimmed to "here's Beat 0, done, want to see it in full or should I keep going" with the full table available on request, closer to the author's stated preference for compact, non-checklist communication (even though that preference is specifically about *questions*, the spirit likely extends to routine status updates).
- Owner: `story-orchestrator` "Compact Skill Log" / "Plain-language Rule" sections.
- Minimal improvement: for AUTO_RESOLVABLE/no-question turns, default to a one-paragraph summary + "full detail in workspace file" instead of inlining the full field table.
- Regression test: a no-question turn → verify the default response is compact, with detail available on request rather than always inlined.

## Not applied yet
Per task instruction §17, none of the above improvements have been applied to the actual skill files. They are logged here for external review before any further patch.
