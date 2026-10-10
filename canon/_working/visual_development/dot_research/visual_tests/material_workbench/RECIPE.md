# Material-layer workbench: controlled native-vector A/B

## What this tests

One shape, one size, two material treatments:

- **A:** smooth glossy cyan control.
- **B:** proposed variable thickness, uneven internal light, tapered molten-glass highlights, and **three** irregular faceted inclusions.

This is a reproducible **native SVG prototype**, not polished raster material validation. The source remains the hook-C silhouette candidate. Its silhouette alone does not establish that it is liquid.

The source wording supplied for this study is canon06, commit `dd7ecf83afeff3adef24f0a636d9b5dc62a15aec`, lines 309–320 and 758–781: viscous luminous Cosmic Fluid, molten-glass edges, and burning emotional crystal fragments within the fluid. This work translates those material directions into a test; the exact paths, highlight treatment, three-inclusion count, inclusion facets/placement, and mint-yellow glints are new research proposals. Cyan is borrowed as a test color, not a permanent character magic palette. No character assignment, attack ability, or canon change is made.

## Open these files

- `AB_preview.png`: side-by-side review on a dark display background.
- `AB_preview.svg`: editable native-vector contact sheet. The two samples are each displayed at their original 840 × 660 pixel size; the full sheet is 1680 × 748.
- `A_smooth_cyan.svg` and `A_smooth_cyan.png`: standalone transparent control, 840 × 660.
- `B_viscous_material.svg` and `B_viscous_material.png`: standalone transparent proposal, 840 × 660.
- `source_mask.svg` and `source_mask.png`: unchanged source geometry and its Inkscape reference render.
- `B_ablated.svg` and `B_ablated.png`: verification-only state with all four optional B groups removed. This is the opaque body, not another material candidate.
- `verification.json`: structural and pixel-alpha checks, including the all-optional-groups-off state.
- `build_workbench.py`: complete vector recipe and renderer/audit script; no embedded raster assets.

The preview's dark background and labels are presentation-only. They are not part of either standalone mask or material.

## Geometry lock

Copied byte-for-byte from `haruka_research_v03/visual_tests/pattern_identity_alpha.svg`.

- Width: `840`
- Height: `660`
- viewBox: `-1.5 -2 14 11`
- Source-copy SHA-256: `3bf555f1200af840ca677e2d308c048cc055d444dffc7901bcd55b80dd5f09e8`
- The source's complete `d` string is retained as `identity-path` in SVG defs.
- The **entire painted stack** is inside `identity-locked-material`, which has `clip-path="url(#identity-clip)"`.
- Every material layer inherits that single exact source-path clip. No layer can paint outside it or into the central keepout.
- An opaque rectangle under the stack preserves the source's alpha coverage. “Internal light” and “glass” here describe native-vector value/color cues; this study does not simulate real transmitted transparency.
- No external bloom, blur/filter, raster texture, silhouette bulge, or geometric rescaling is used.

Keep `identity-path`, `identity-clip`, `identity-locked-material`, and the `material-base` rectangle unchanged. Toggle or edit only the four optional material groups for the controlled test.

## Native layers and recipe

Open `B_viscous_material.svg` in Inkscape and use Layers and Objects. The labels and stable XML IDs are:

| Group ID | Display label | Purpose and construction |
| --- | --- | --- |
| `material-base` | 00 — opaque cyan body (retain) | Same base as A: one cyan linear gradient, from `#58D9F0` through `#2ABBDE` and `#127F9F` to `#28C9DB`. This is the alpha-preserving underlayer. |
| `thickness` | 10 — thickness and inner refraction (toggle) | Dark, uneven return-side bands inside the inner C, left edge and lower rim. Deep blue-cyan `#043649` to `#08556B`; variable widths suggest a depth change. |
| `internal-glow` | 20 — viscous internal light (toggle) | Broad nonuniform mint-cyan ribbons plus two gradient pools. `#64FFF0`, `#17CDDD`, and `#8FFFE9` provide internal variation; smaller pale ribbons break an otherwise uniform gloss. No blur or outside light. |
| `highlights` | 30 — molten-glass highlights (toggle) | Asymmetric tapered filled paths and two short fine strokes. Pale mint/ivory glints, approximately `#EDFFF5` to `#F2FFF0`, stay inside the clip. They follow local edges without changing the source contour. |
| `crystals` | 40 — three irregular faceted inclusions (toggle) | Three six-corner fragments with unequal facets. One shallow upper shard, one taller left shard, one lower shard. Muted teal bodies, proposed mint-yellow hot faces, subdued internal occlusion and crossing translucent fluid veils. All share the source clip. |

A uses that same `material-base`, with a broad radial gloss, a smooth top sheen, and a single understated lower glint. A has no inclusions or internal thickness bands.

The top and bottom light ribbons intentionally vary in width. The inclusions intentionally differ in proportions and angle. Their narrow warm glints are only a readability proposal; they do not establish a canon crystal palette or crystal count.

## Reproduce

Requirements used for the checked build:

- Python 3 with Pillow 12.3.0 (used for pixel-alpha inspection only).
- Inkscape 1.4 (`e7c3feb100`, 2024-10-09), command-line exporter.

From this directory:

```sh
python3 build_workbench.py --omit thickness internal-glow highlights crystals
```

This regenerates the standard A/B SVGs and PNGs, the preview, the source render, the all-optional-groups-off verification state, and the audit JSON. It writes only beside the script.

To rebuild just the standard A/B pair and audit:

```sh
python3 build_workbench.py
```

To test a single layer removal, for example crystals:

```sh
python3 build_workbench.py --omit crystals
```

That writes the chosen toggle state to `B_ablated.svg/.png` and includes that state in the audit. The ordinary A/B files remain the same. To reproduce the delivered all-off test afterward, use the first command again.

Manual toggling: set a named optional group's display to none (or use its visibility eye in Inkscape). Do not toggle the retained opaque body. No UI application, external texture library, or network access is required to regenerate the study.

## Verified result

The standalone A, standalone B, and all-four-optional-layers-off renders were checked against the source at **840 × 660**:

- Exact source path and viewBox retained.
- Unique SVG IDs; no raster image nodes; no filter nodes.
- All painted elements inside the shared identity clip.
- **Bit-identical alpha:** zero changed alpha pixels and maximum alpha difference zero.
- Zero new nontransparent pixels outside the source support.
- Zero source-support pixels lost.
- Zero fully opaque source pixels changed to nonopaque.
- Identical alpha bounding box: `(45, 48, 810, 600)`; right and bottom are exclusive.
- Source nonzero-alpha pixels: `212827`; fully opaque pixels: `209548`.
- Central C-void and three exterior keepout probes are alpha zero.

The A/B preview and standalone B render were visually inspected after Inkscape export. Highlights, internal bands and all three facets are visible; there is no visible exterior glow or clip escape. These checks establish mask fidelity and reproducibility in the named renderer at the specified size, not cross-renderer guarantees or material perception validity.

## Reading the result responsibly

B has stronger depth and internal-value cues than A, while retaining exactly the same coverage. It remains deliberately graphic. The crisp inner band can still read as carved glass, resin or enamel, and the faceted fragments may still read as surface details rather than fully suspended pieces. Viscosity, emotional burning, and perceived submersion are therefore **unvalidated** in this native-vector study.

A useful next authorized test would keep this exact mask and compare a painted/raster or shader rendering with depth-softened suspended fragments and more continuous viscous refraction. That is outside this workbench; no such render is represented as completed here.

## 精準失敗判讀（保留控制成果）

B 相對 A 已增加內部明暗分帶與切面訊息，但目前的主要讀感仍偏硬玻璃／冰質雕件：沿輪廓連續追隨的硬亮邊與寬暗內緣，容易被理解為固定倒角、硬殼厚度，而非黏滯液體的體積與折射；三顆晶體的外輪廓、亮面與暗面過於完整清晰，雖有局部流光遮覆，仍更像貼在表面的寶石，沒有建立液內懸浮與前後深度。因此本稿只證實「相同遮罩內可分層控制、可關閉與可重現」，沒有證實厚液、熔融玻璃或情緒燃燒質感成立，也不能由 hook-C 外形推論其為液體。保留此 SVG 作精確守界控制件；後續限定材料的生成／繪製研究應獨立評估，並明示生成輪廓漂移風險，不能把那類結果的視覺表現回算成這個控制件已驗證成功。
