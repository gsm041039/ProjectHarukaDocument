# Native timing research artifact

Open timing_comparison.gif for the four-cell sampled loop. Open timing_comparison.html locally for the same native-vector formulas and pause/scrub control; it has no external assets, server, app framework or deployment. Browser playback was not verified in this execution environment. Read RESULTS_zh-TW.md before interpreting the pictures.

## Files

- timing_comparison.gif: 50 frames at 20 ms, encoded 1.000 s loop; white background, fixed layout
- timing_comparison.html: self-contained original SVG paths plus exact gate functions
- keyframes.svg / keyframes.png: repeated samples of the same four variants
- area_time.svg / area_time.png / area_time_samples.csv: area exposure, not a success score
- local_scales.svg / local_scales.png: selected candidate freezes at local 128 / 64 px viewports
- source_inputs/: unchanged v05 SVG mothers, shared centerline and pressure parameters
- native_frames/: editable SVGs for sampled times
- rendered_frames/: actual Inkscape rasterizations (transparent background; the GIF adds white only)
- sampled_checks.json / checks_summary.json: 60 Hz plus boundary checks at 420 px
- boundary_switch_checks.json: measured antialias difference at exact-maximum switching
- playback_verification.json: GIF decode and JS geometry verification, with browser limitation explicit
- manifest.json: source hashes, formulas' landmarks, sampling and construction limits
- JOINT_SPEC.md: jointly agreed production specification

## Rebuild

Run from any working directory:

    python /path/to/timing_study/rebuild.py
    python /path/to/timing_study/verify_artifact.py

The scripts use installed Python, NumPy, SciPy, Pillow, Inkscape and Node only. They do not install anything, access the network, change the original v05 files or push to a repository. Images here are rasterizations of authored native geometry, not modified generated raster art.

Four fixed variants only: A/control, A/candidate, B/control, B/candidate. Both use literal original maxima. Transition polygons are clipped to their respective original mother. The viewport is the original 0 -1 14 10, including its inherited candidate left-edge clipping. q=0 intervals are omitted; only a terminating zero-width boundary point is retained. The original source stations and pressure scheme are preserved; an exact moving support boundary uses linear interpolation of source centerline and normalized interpolated normal, with original PCHIP/control-ramp width. Polygon coordinates are rounded to five decimals as in v05.

The GIF uses 20 ms sampling rather than sub-20 ms delays. This avoids relying on very short GIF frame delays but does not certify a particular viewer's wall-clock timing. The continuous formulas use T1=1/3, T2=13/30 and T3=9/10; the GIF's literal maximum sample-and-hold window is 340–440 ms. The native HTML's actual refresh depends on the browser.

This is sampled geometry validation and viewed frozen-render evidence, not a human blind test, 1× perceptual validation, continuous topology proof, physical viscosity result, hit timing or completion of the original 20-test protocol. No extra parameter search or mother-shape beautification is included.
