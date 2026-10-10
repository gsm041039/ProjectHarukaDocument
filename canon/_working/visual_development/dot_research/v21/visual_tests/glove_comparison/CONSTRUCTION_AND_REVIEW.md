# Native two-cell glove comparison

Status: RESEARCH_ONLY / NEW_LOCAL_COMPOSITION_PROPOSAL / AUTHOR ADOPTION ONLY.

## Delivered work

One original 1800 × 1040 static board, with two label presentations:

- `glove_comparison_XY.svg` and `.png`: X=N, Y=P. Treatment-neutral labels for free description; not randomized, not a blind-test claim.
- `glove_comparison_labeled.svg` and `.png`: the exact same two artwork choices with N/P titles.
- `construction_parameters.json`: complete centerline, width stations, rendering, provenance, assumptions and exclusions.
- `build_glove_comparison.py`: complete native drawing source, shape construction, render and mask measurements.
- `check_glove_comparison.py`: XML reuse and translated-render checks.
- `technical_checks.json`: recorded numerical checks and actual visual QA.
- `RESULT_zh-HK.md`: concise user-ready result and bounded construction account.
- `technical_masks/`: technical measurement intermediates only. These are not additional artistic cells, small-size studies, or review conditions.

Both SVGs define one `body-proxy` group and reference it twice. The shoulder, continuous reaching arm, cuff, palm, four articulated finger shapes, thumb, torso and transverse plain belt are newly drawn schematic elements. No face, crown, emblem or full costume is reconstructed. No source PNG pixels are embedded, repainted, cropped or otherwise edited.

## Source and authority

The observed reference is the exact pinned action PNG at:
https://github.com/gsm041039/ProjectHarukaDocument/blob/dd7ecf83afeff3adef24f0a636d9b5dc62a15aec/art/ConceptArt/Scene/ConceptArt_Haruka_MagicalGirl_Action.png

The local `/tmp/haruka_existing_action.png` was visually inspected before drawing. Its Git blob SHA is `613147ad2be4f4b36d7f49cab7922a182a310118`, verified before and after generation. This establishes file identity and preservation, not author adoption or a complete shot/action/depth specification.

Read before construction:

- `ROLE_TRANSFER_BRIEF.md`: the consolidated source-grounded two-cell brief delivered with this study.
- `haruka_research_v05/PATTERN_GRAMMAR.md`
- `haruka_research_v05/visual_tests/motion_dialects/motion_dialects_parameters.json`
- `haruka_research_v05/visual_tests/motion_dialects/build_motion_plate.py`
- `haruka_research_v05/visual_tests/motion_dialects/CONSTRUCTION_AND_REVIEW.md`
- The actual v05 native-comparison PNG.

The final peer recommendations supersede their four-cell initial proposal. Only N/P on one observed local footprint was constructed. Original source reference remains separate from the new art. No repository files were changed or uploaded.

## Construction choices and limits

The source shows a projecting fist at the end of a continuous shoulder/arm chain, with cyan light to its left and underneath. This comparison uses that observed relation, with enough torso and belt to orient the pose. The new proxy exaggerates clarity through flat, articulated shapes and subdued torso colors. It is not an exact contour trace or approved Haruka settei, and the reference-to-proxy mapping is qualitative rather than recovered camera geometry.

Both choices use the same new cubic centerline, geometric endpoint order, outer pressure boundary, bounds and layer order. P adapts v05's round, unequal-shoulder, open-cavity, single inward-pressure-return grammar to this curve. It is explicitly not the unchanged v05 path. N keeps a broad smooth inner boundary rather than that return. The normal-thickness maximum is approximately 48 in each. Both keep the same cyan gradient, alpha, glow and continuous light ridge. Neither treatment adds branches, emitters, new attack paths, extra endpoint icons or a foreground cuff collision.

Both light shapes are placed behind the same opaque proxy, with only 73 pixels of native-mask overlap. This is a shared depth assumption consistent with the observed rear/under-fist region, not a complete reconstruction. The near-absence of overlap means this board is a narrow contour/gesture comparison, not a demanding occlusion trial.

No claim of strict perceptual single-factor matching is made: the local pressure distribution changes by design, and P has 0.92% less visible thresholded area. The shared centerline highlight may emphasize the carrier's continuity in both choices. Native path area and mask area exclude glow and highlight.

## Technical results

At one local unit per mask pixel:

- N: 19,612 geometric pixels, 19,539 visible pixels; P: 19,432 geometric pixels, 19,359 visible pixels.
- Each shape has one 8-connected foreground component and zero enclosed background components in the rendered technical mask.
- Native outer bounds match: x 103.1955–318; y 122.7473–436.6444.
- Both normal-width maxima are 47.999983 in the sampled path.
- The translated X/Y art comparison places every difference greater than one RGB channel level inside the arc region. Seven body-region pixels differ by one channel level from raster rounding; the underlying proxy group is exactly shared.
- Both SVGs contain no raster `<image>` elements.
- Original reference hash is unchanged.

These are sampled engineering checks, not analytic topology proofs or audience recognition tests.

## Actual image inspection

Both final rendered PNGs were opened and visually inspected at their rendered size. The continuous arm and articulated fist are readable, and the torso/belt provides orientation. No panel/text overlap or clipping was observed. There was one construction-sign correction after the first render so P's intended pressure lobe projects inward into the open cavity rather than outward. It did not add a new composition or treatment, alter the proxy, change the path/endpoints, or add a second pose study. The common pose itself was not revised.

The maker's bounded observation is in `RESULT_zh-HK.md`: N reads as a more uninterrupted light sweep; P adds a deliberate return but has not demonstrated a necessary action-read benefit. Neither is declared a new shield/restraint merely for being crescent-like. Independent reviewers have not been folded into that maker statement.

## Rebuild

From any working directory:

From this artifact directory: `python build_glove_comparison.py`

Then: `python check_glove_comparison.py`

Uses already-installed Python, NumPy, SciPy, Pillow and Inkscape 1.4. No install or browser route was used. Rebuild writes only this deliverable directory; the reference image is read solely for its provenance hash, never for drawing pixels. Author adoption remains open; no further study is scheduled or implied.

The optional source path is used only for provenance hashing, not for drawing. Without that reference at its recorded path, the native artwork can still be rebuilt; the original-source hash check cannot be repeated on that machine. The recorded original check remains scoped to the research run.
