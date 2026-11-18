# v9.8 Regression — actual structural checks, not proof of artistic quality

## Must happen in workflow

- Before every image tool call (if task is design improvement), produce a **visible** precommit and SELECT/EXPERIMENTAL verdict. A new image must not appear before this. This cannot be machine-enforced across ChatGPT sessions; use process review.
- Two unrelated proposals plus KEEP ORIGINAL, or one for explicitly minor local edits; a deliberately weak filler concept must be rejected.
- Contradiction: a candidate with blocker cannot SELECT FOR TEST.
- After generation, references to precommit must not be rewritten; report Design Gain, Production Fit and Render Fidelity separately.
- If no appeal net gain, keep original rather than inventing modifications. Experimental mode cannot be mislabeled approved.
- The previous design-examples (hat accent palette harmonization, cropped garment without character benefit, decorative piping and TV detail oversimplification) should all be vetoed unless genuinely new visual benefit and mitigation are established.

## Executable test coverage

Run `python tests/test_preflight_guard.py` to check: valid record, missing whole-body review, underspecified candidate, selected blocked proposal, selected rejected proposal, unauthorized experimental mode, immutable receipt verification. **This tool only catches structure/logic contradictions, not aesthetic judgement or image generator compliance.**
