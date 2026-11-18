# BRIEF: Image analysis of the v5 skill examples (2026-11-10)

Author observation (2026-11-10 09:53 HKT): "依家好似都冇對例子作圖像分析" — the 14 examples in skill draft v5 rest on interviews/text only; nobody actually analysed the images.

Scope: generic character-design skill only. Do NOT design or redraw Haruka characters. Read ../SKILL_DRAFT_character_design_core_v5_20261109.md and ../SKILL_REF_character_design_sources_v5_20261109.md §7 (your EX card) first.

## Round I1: analyse YOUR example's images (write research/<your_dir>/SKILL_EXAMPLE_IMG_I1_20261110.md, images under research/<your_dir>/img_examples_20261110/)
1. Download the real official images for BOTH sides of your comparison (official site, setting sheet, official key visual, official trailer still, publisher press kit). Record source URL, retrieval date, md5, and grade. Never generate or redraw a reference; never invent an image. If an official image cannot be obtained, say so and mark the claim IMAGE_UNVERIFIED.
2. Do real image analysis with code (Python/PIL/OpenCV etc.) on those files, at minimum:
   - side-by-side comparison sheet of the two sides;
   - 128 px and 64 px thumbnails (height-normalised) of each side;
   - plus the analyses that fit YOUR direction, e.g. black silhouette / outline overlay (silhouette, flow, head_hair, performance), dominant colour chips with area % and grayscale/value map (color_value, tv_simplify), part/line-count or colour-block count (tv_simplify, production), construction/closure callouts (construction_fashion), motif location map (motif_world), side-by-side vs the nearest external design (originality), etc.
   Save every output PNG and the script used.
3. Write what the images actually show, measured not assumed: does the image evidence SUPPORT, PARTLY SUPPORT, or CONTRADICT the lesson the v5 example block claims? Quote the v5 block. Give honest 64 px calls (what is still readable / what is lost).
4. Proposed edit to the v5 example block (or "no change"), plus the image file paths to cite.
Copyright: keep downloaded images as internal research references only; low-res, not redistributed.

## Round I2: cross-review (write research/<your_dir>/SKILL_EXAMPLE_IMG_I2_REVIEW_20261110.md)
After all I1 files exist, review the 3 assigned I1 analyses from YOUR direction's angle: open the image files, re-run or spot-check the script, check the images are official and the right outfit/version, check the measurement is fair (same scale, same pose type, crop), add one analysis from your own direction, and give a verdict ACCEPT / ACCEPT_WITH_EDITS / REDO.
Rotation (+2, +6, +10, so reviewers differ from round E2):

| Example (author) | Reviewed by |
|---|---|
| EX01 commercial | color_value, motif_world, psychology |
| EX02 flow_structure | silhouette_cast, construction_fashion, audience_market |
| EX03 color_value | identity_canon, head_hair, originality |
| EX04 silhouette_cast | production_critic, performance_motion, tv_simplify |
| EX05 identity_canon | motif_world, psychology, commercial |
| EX06 production_critic | construction_fashion, audience_market, flow_structure |
| EX07 motif_world | head_hair, originality, color_value |
| EX08 construction_fashion | performance_motion, tv_simplify, silhouette_cast |
| EX09 head_hair | psychology, commercial, identity_canon |
| EX10 performance_motion | audience_market, flow_structure, production_critic |
| EX11 psychology | originality, color_value, motif_world |
| EX12 audience_market | tv_simplify, silhouette_cast, construction_fashion |
| EX13 originality | commercial, identity_canon, head_hair |
| EX14 tv_simplify | flow_structure, production_critic, performance_motion |

Integration then writes v6 (v5 untouched, backup first, append-only).
