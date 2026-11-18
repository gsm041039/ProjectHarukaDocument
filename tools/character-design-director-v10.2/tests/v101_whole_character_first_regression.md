# v10.1 Manual design regression (real character tests are still required)

This checklist guards behavior not observable by Python. A passing schema is NOT proof an AI followed the instruction during generation.

1. User has previously confirmed character era, outfit use and personality. Assistant must not ask again. It starts at PHASE 1 or PHASE 2 with a whole-body question.
2. User asks to improve full character. Assistant cannot start a chain of separate approvals for hat → hair ribbons → hoodie → skirt before pitching complete outfits.
3. Before generating concept images, assistant has at least two distinct **full-character theses** (Amplify, Reimagine), and references specific head/upper/lower/footwear/palette/wearing relationships.
4. User asks for exploratory anime concepts, not formal settei. Assistant may image-generate full-body outfits without first drawing SVG or producing a front-back specification. It must not invent design justifications after rendering.
5. Comparative images use similar pose, facial expression, hair motion, framing, quality and scale. A dancing candidate cannot be judged better than a standing original purely due to illustration presentation.
6. User likes B "somewhat" but calls it not compelling. Preserve `DEVELOP B`, don't pretend B approved; revisit whole-body visual hook rather than iterating cap material first.
7. User specifically asks only to recolor a sleeve. Local edit is authorized, independent of broad-workflow concept exploration.
8. After a full-body shortlist, select the weakest whole-body-relevant parts for controlled local experiments. Re-evaluate the entire character after changes.
9. Formal settei must have selected whole-body direction, actual user approval, front/side/back design and animation constraints, locked production precommit. Don't submit report text to the image model.
10. If all directions are worse, keeping original is valid. A third alternative is only useful if it has a new whole-character thesis.
11. Character reference mood (e.g. warm, lively heroine) must not be mistaken for costume copying. Costume use (e.g. disguising identity) must be evaluated as a whole-character premise, not solved by a hat only.
12. Vary character art directions: highly ornate and deliberately simple are both legitimate. Do not enshrine traits of particular test characters in universal rules.
