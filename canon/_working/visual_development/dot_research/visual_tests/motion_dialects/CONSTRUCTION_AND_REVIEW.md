# Motion dialect comparison: construction and review

Status: RESEARCH_ONLY / NEW MOTION PROPOSAL / UNASSIGNED.

## Deliverable

- `motion_dialects_comparison.svg`: one editable, native-vector comparison plate, six main cells, three mother candidates, paired 128/64 px viewport samples, one thin-line fallback, and assembly recipes.
- `motion_dialects_comparison.png`: Inkscape-rendered 1960 × 1530 review image.
- `motion_dialects_parameters.json`: shared paths, pressure stations, construction parameters, gains, and sacrifices.
- `motion_dialects_construction_checks.json`: sampled connectivity and open-cavity checks.
- Individual `round-*.svg`, `thin-*.svg`, and `hard-*.svg`: independent native SVG mothers, including control and fallback.
- `build_motion_plate.py`: reproducible vector construction and Inkscape rendering.
- `check_motion_geometry.py`: reproducible construction checks.

## Comparison discipline

Each control/candidate pair shares one exact centerline point array, A→B direction, and endpoints. Pressure boundaries differ. Black area is intentionally not matched because thickness is the experimental variable. A and B identify geometric path order, not action phases or gameplay timing.

The mother shapes are new pressure-ribbon constructions informed by the source alpha's open-side cavity, unequal shoulders, and single inward return. They are not a traced production asset. No new character assignment or effect claim is made. Unsupported character-motion statements in the older grammar are not carried forward.

## Observations

- ROUND PUSH gains broad rounded mass and one soft inward return. It sacrifices economy and still has a C-shaped, curled-sign quality.
- THIN TENSION keeps a single continuous narrow ribbon and a local pressure lobe. At the displayed 64 px viewport width, that lobe is no longer a dependable separate identity feature. The clean uniform-line fallback removes the lobe and explicitly loses the open-core pattern identity. The fallback is this local curve only, not a restriction on any character's line count, motion, or powers.
- HARD TURN gains weight and one dominant 45-degree angular junction, with smooth recovery rather than repeated teeth. It sacrifices fluidity and still has a C-shaped graphic-sign quality.
- These differences are visible on this plate, but do not establish a unique Project Haruka language, production suitability, animation quality, or final target resolution.

128/64 px are SVG viewport widths, not exact ink bounding-box widths. Both sides of a pair use the same local 14 × 10 unit viewport and scale. The larger thin fallback is a construction reference; it is not a second small-size validation result.

## Checks and visual QA

The six main masters were rendered independently through Inkscape at 1120 × 800, equivalent to 80 px per local unit. Alpha ≥128 was classified as black. Each has exactly one 8-connected black component and no enclosed white component. The white cavity probe at (6,4) reaches the exterior, including a clear straight rightward corridor. Interior centerline samples remain inside the black ribbon. All six sampled checks passed.

These are raster-sampled construction checks, not analytic proofs of topology. They do not establish readability under motion blur, compositing, non-white backgrounds, distance, television playback, or an actual game camera.

The final plate was visually inspected after Inkscape rendering. A thin-fallback/text overlap was corrected. The hard-turn offset join was trimmed to remove a small miter sliver. The corrected image was inspected again; labels and silhouettes do not overlap.

## Rebuild

Run `python build_motion_plate.py`, followed by `python check_motion_geometry.py`, from this directory. Dependencies used here: Python, NumPy, SciPy, Pillow, and Inkscape. Every generated file stays in this directory.
