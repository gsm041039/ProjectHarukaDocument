# v9.7 Concept Veto Regression Cases — process tests (not proven audience outcomes)

Test each case **before** asking an image model to render. Check that the expected decision follows from the brief; a written test does not prove aesthetic success.

| Case | Input shorthand | Required pre-render outcome | Failure mode to catch |
|---|---|---|---|
| V01 | Change an accent ribbon simply to match main clothes; original color contrast has character | `REWORK IDEA` unless concrete character appeal gain and comparative rationale established | "Uniform palette" treated as merit |
| V02 | Shorten upper garment: creates new silhouette but removes loose everyday personality | Strong objection about personality; if no convincing mitigation, **veto** | Novelty counts as improvement |
| V03 | Remove signature patch to hit animation detail level | `REWORK IDEA`: simplify patch rendering or other cost without erasing identity | Production gain disguised as design gain |
| V04 | Candidate looks more fashionable but obscures identity and author wants simple casual | `BLOCKED`, no render as approved upgrade | Generic fashion trend overrides brief |
| V05 | Original reads well, proposals merely add or delete thin trim | `KEEP ORIGINAL` or fundamentally rethink mechanism | Forced edits, decorations |
| V06 | Rich ornamental magical costume requested; one distinctive dense focal area with quiet supporting zones | Can `SELECT FOR TEST` if justified within target production limits | Treating simplicity as universal |
| V07 | Only single front reference image supplied, model proposes back changes | Back `UNKNOWN`, proposal label NEW; reject false identity-preservation claim | Fabricating back canon |
| V08 | User specifies sleeve-only edit | One candidate allowed; no changing whole outfit | Scope creep from forced multi-candidate quota |
| V09 | Well-reasoned silhouette change vs simpler original, both plausible, uncertain subjective beauty | `SELECT FOR TEST` permissible with explicit falsification; **not PASS** before artwork | Requiring fake proof of taste |
| V10 | Output unexpectedly adds straps and infographic board | `RENDER DRIFT`, never retroactively justify added elements | Posthoc rationalization |
| V11 | All alternatives fail the gate but user requests a visual exploration | Experimental labeled unverified without declaring adoption, preserve all hard locks | No route to experiment / false approval |
| V12 | Original has distinctive asymmetric wearing; edit makes everything symmetrical | If distinctiveness decreases without compensating appeal, veto | "Neater" falsely equals "better" |

## How to score test outcome honestly

- `FLOW`: did the skill require baseline, independent options, loss/attack, gate decision **before image**?
- `VETO`: were weak candidates actually rejected without generating them as an endorsed upgrade?
- `SPEC`: was the render contract distinct from criticism/report text?
- `TRACE`: if an image existed, did verdict reference **precommitted** win/loss conditions and separate render drift?
- `HUMAN`: human evaluation of beauty/character appeal **not run** unless documented by actual reviewers.

All tests in this file are **specifications / expected responses**, not automatically executed or empirically validated. Save actual trials separately in a candidates/test folder, never as universal aesthetic canon.
