#!/usr/bin/env python3
"""Rebuild the controlled Haruka v4 native-vector material A/B study.

All artwork is native SVG. Inkscape is used for rendering; Pillow only audits
alpha channels. No image generation, raster texture, blur, or outside bloom.
Writes only beside this script. See RECIPE.md for interpretation limits.
"""
from pathlib import Path
import argparse
import hashlib
import json
import os
import subprocess
import tempfile
import xml.etree.ElementTree as ET
from PIL import Image, ImageChops

HERE = Path(__file__).resolve().parent
_runtime = tempfile.TemporaryDirectory(prefix='.render-runtime-', dir=HERE)
RUNTIME = Path(_runtime.name)
RENDER_ENV = dict(os.environ, INKSCAPE_PROFILE_DIR=str(RUNTIME / 'inkscape'), XDG_CONFIG_HOME=str(RUNTIME / 'config'), XDG_CACHE_HOME=str(RUNTIME / 'cache'))
NS = {'svg': 'http://www.w3.org/2000/svg'}
SOURCE = HERE / 'source_mask.svg'
root = ET.parse(SOURCE).getroot()
D = root.find('svg:path', NS).attrib['d']
VIEWBOX = root.attrib['viewBox']
WIDTH, HEIGHT = int(root.attrib['width']), int(root.attrib['height'])
assert (WIDTH, HEIGHT, VIEWBOX) == (840, 660, '-1.5 -2 14 11')

DEFS = f'''
  <path id="identity-path" d="{D}"/>
  <clipPath id="identity-clip" clipPathUnits="userSpaceOnUse"><use href="#identity-path"/></clipPath>
  <linearGradient id="body-cyan" x1="0.8" y1="-0.5" x2="7.3" y2="8" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#58d9f0"/><stop offset="0.28" stop-color="#2abbde"/>
    <stop offset="0.63" stop-color="#127f9f"/><stop offset="1" stop-color="#28c9db"/>
  </linearGradient>
  <radialGradient id="smooth-gloss" cx="0.7" cy="0.5" r="8.3" gradientTransform="translate(0 0.3) scale(1 0.55)" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#ecffff" stop-opacity="0.83"/>
    <stop offset="0.48" stop-color="#b7ffff" stop-opacity="0.23"/><stop offset="1" stop-color="#afffff" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="smooth-top-sheen" x1="4" y1="-0.6" x2="4" y2="1.1" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#f3ffff" stop-opacity="0.84"/>
    <stop offset="1" stop-color="#9af7ff" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="thickness-band" x1="0" y1="1" x2="5" y2="7.6" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#134f67" stop-opacity="0.7"/><stop offset="0.5" stop-color="#043649" stop-opacity="0.94"/>
    <stop offset="1" stop-color="#08556b" stop-opacity="0.88"/>
  </linearGradient>
  <linearGradient id="outer-thickness" x1="-0.75" y1="4" x2="2.2" y2="4" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#075267" stop-opacity="0.88"/><stop offset="0.5" stop-color="#086c81" stop-opacity="0.45"/>
    <stop offset="1" stop-color="#49f3ed" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="flow-core" x1="1" y1="0.3" x2="7" y2="7.6" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#aafff3" stop-opacity="0.62"/><stop offset="0.35" stop-color="#64fff0" stop-opacity="0.89"/>
    <stop offset="0.67" stop-color="#17cddd" stop-opacity="0.6"/><stop offset="1" stop-color="#8fffe9" stop-opacity="0.91"/>
  </linearGradient>
  <linearGradient id="flow-ridge" x1="2" y1="0.4" x2="4" y2="7" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#f2fff5" stop-opacity="0.69"/><stop offset="0.42" stop-color="#c0fff2" stop-opacity="0.9"/>
    <stop offset="1" stop-color="#a7ffe9" stop-opacity="0.57"/>
  </linearGradient>
  <radialGradient id="pool-left" cx="1.0" cy="3.9" r="2.55" gradientTransform="translate(0.25 -0.9) scale(0.8 1.22)" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#ddfff1" stop-opacity="0.61"/><stop offset="0.45" stop-color="#72fff1" stop-opacity="0.34"/>
    <stop offset="1" stop-color="#51ffff" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="pool-lower" cx="4.5" cy="6.94" r="2.6" gradientTransform="translate(0 4.51) scale(1 0.35)" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#e4fff0" stop-opacity="0.7"/><stop offset="0.58" stop-color="#7bffeb" stop-opacity="0.3"/>
    <stop offset="1" stop-color="#5cffe9" stop-opacity="0"/>
  </radialGradient>
  <linearGradient id="molten-top" x1="1" y1="0" x2="11.7" y2="-0.9" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#ddfff2" stop-opacity="0.58"/><stop offset="0.38" stop-color="#f6fff1"/>
    <stop offset="0.79" stop-color="#c5fff6" stop-opacity="0.88"/><stop offset="1" stop-color="#c8ffff" stop-opacity="0.15"/>
  </linearGradient>
  <linearGradient id="molten-lower" x1="0" y1="7.7" x2="7.5" y2="7" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#d4fff1" stop-opacity="0.19"/><stop offset="0.48" stop-color="#f2fff0" stop-opacity="0.93"/>
    <stop offset="1" stop-color="#caffec" stop-opacity="0.28"/>
  </linearGradient>
  <linearGradient id="crystal-body" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#0a586b"/><stop offset="0.42" stop-color="#367f8d"/><stop offset="1" stop-color="#76d6c8"/>
  </linearGradient>
  <linearGradient id="crystal-hot" x1="0" y1="1" x2="1" y2="0">
    <stop offset="0" stop-color="#55d4c2"/><stop offset="0.56" stop-color="#eaffbf"/><stop offset="1" stop-color="#ffffe9"/>
  </linearGradient>
'''

BASE = '''<g id="material-base" inkscape:groupmode="layer" inkscape:label="00 — opaque cyan body (retain)">
  <rect x="-1.5" y="-2" width="14" height="11" fill="url(#body-cyan)"/>
</g>'''
SMOOTH = '''<g id="smooth-gloss-control" inkscape:groupmode="layer" inkscape:label="A — smooth glossy cyan control">
  <rect x="-1.5" y="-2" width="14" height="11" fill="url(#smooth-gloss)"/>
  <path d="M0.23 0.16 C4 -0.39 8 -0.17 11.47 -0.91 C10.95 -0.37 10.68 0.17 10.41 0.65 C7.32 0.30 3.48 0.24 0.04 0.88 Z" fill="url(#smooth-top-sheen)"/>
  <path d="M0.48 7.67 C2.8 7.54 5.26 7.58 7.44 7.72" fill="none" stroke="#c0fff8" stroke-opacity="0.45" stroke-width="0.055" stroke-linecap="round"/>
</g>'''
THICKNESS = '''<g id="thickness" inkscape:groupmode="layer" inkscape:label="10 — thickness and inner refraction (toggle)">
  <!-- Darker return side tracks the void without changing the identity path. -->
  <path d="M11.4 -0.76 C10.48 0.14 10.8 2.12 8.82 3.71 C9.06 2.39 9.12 1.61 8.55 1.27 C7.88 0.77 5.11 1.43 3.73 2.36 C2.69 3.02 2.40 4.26 2.96 5.31 C3.41 6.04 5.51 6.36 7.35 6.45 L8.16 8.18 L6.77 7.25 C4.25 7.15 2.49 6.92 1.80 5.80 C0.91 4.35 1.61 2.59 3.30 1.59 C4.98 0.59 7.08 0.69 8.69 0.48 C10.09 0.43 10.21 -0.24 11.4 -0.76 Z" fill="url(#thickness-band)"/>
  <path d="M0 -0.1 C-1.08 2.58 -1.19 5.4 0 8.16 L1.52 7.96 C0.18 5.57 0.05 2.84 0.85 -0.13 Z" fill="url(#outer-thickness)"/>
  <path d="M0 7.98 C2.29 7.78 4.73 7.71 7.96 8.04 L7.49 7.31 C5.12 7.19 2.73 7.36 -0.03 7.62 Z" fill="#07566a" fill-opacity="0.69"/>
  <path d="M1.48 1.74 C2.53 0.86 5.02 0.74 6.40 0.53 C4.07 0.62 2.34 0.31 1.18 1.29 C0.14 2.17 0.05 3.53 0.3 4.33 C0.27 3.22 0.78 2.38 1.48 1.74 Z" fill="#0b7289" fill-opacity="0.45"/>
  <path d="M1.28 5.44 C1.62 6.93 3.86 7.35 5.70 7.07 C4.22 7.0 2.15 6.83 1.28 5.44 Z" fill="#053d52" fill-opacity="0.38"/>
</g>'''
GLOW = '''<g id="internal-glow" inkscape:groupmode="layer" inkscape:label="20 — viscous internal light (toggle)">
  <!-- Uneven ribbons and broad pools suggest suspended light and thickness. -->
  <path d="M0.32 0.25 C2.54 -0.19 5.23 0.07 8.15 -0.25 C9.29 -0.35 10.35 -0.62 11.55 -0.90 C10.52 -0.27 10.33 0.81 9.78 1.67 C9.92 0.72 9.35 0.08 8.07 0.42 C5.5 0.94 3.58 0.92 2.33 2.17 C1.53 2.97 1.37 4.30 1.83 5.40 C2.23 6.28 3.54 6.77 5.21 6.72 C6.08 6.68 6.72 6.59 7.22 6.84 L7.61 7.51 C5.84 7.06 3.95 7.80 2.21 6.99 C0.32 6.15 0.14 4.73 0.29 3.19 C0.34 2.23 0.84 1.37 0.32 0.25 Z" fill="url(#flow-core)"/>
  <rect x="-1.5" y="-2" width="14" height="11" fill="url(#pool-left)"/>
  <rect x="-1.5" y="-2" width="14" height="11" fill="url(#pool-lower)"/>
  <path d="M0.94 0.36 C2.36 0.20 4.72 0.44 6.53 0.20 C4.87 0.73 3.19 0.71 2.10 1.47 C0.91 2.29 0.72 3.17 0.82 4.67 C0.37 3.53 0.54 2.24 1.33 1.47 C1.74 1.07 1.95 0.62 0.94 0.36 Z" fill="url(#flow-ridge)" fill-opacity="0.69"/>
  <path d="M0.61 4.66 C0.79 5.54 1.04 6.28 2.22 6.87 C3.08 7.34 4.21 7.24 5.23 7.28 C3.18 7.68 1.40 7.15 0.85 6.01 C0.58 5.46 0.60 5.18 0.61 4.66 Z" fill="url(#flow-ridge)" fill-opacity="0.9"/>
  <path d="M3.29 1.48 C4.8 0.80 7.23 0.83 8.70 0.48 C7.95 0.91 5.74 1.11 4.83 1.24 C4.19 1.32 3.70 1.47 3.29 1.48 Z" fill="#87fbed" fill-opacity="0.59"/>
  <path d="M1.24 4.13 C1.21 4.70 1.40 5.30 1.93 5.74 C1.71 5.38 1.48 4.66 1.47 4.22 C1.46 3.77 1.34 3.67 1.24 4.13 Z" fill="#d0ffed" fill-opacity="0.42"/>
  <path d="M5.48 6.95 C6.02 6.85 6.64 6.77 6.91 6.88 C6.32 6.97 6.05 7.12 5.48 6.95 Z" fill="#f3ffda" fill-opacity="0.65"/>
</g>'''
HIGHLIGHTS = '''<g id="highlights" inkscape:groupmode="layer" inkscape:label="30 — molten-glass highlights (toggle)">
  <!-- Asymmetric, tapered hot edges are painted inside the same clip. -->
  <path d="M0.18 0.06 C3.31 -0.50 7.83 -0.37 11.77 -1.11 C9.86 -0.45 6.46 -0.34 3.43 -0.13 C1.78 -0.03 0.61 0.20 0.08 0.42 Z" fill="url(#molten-top)"/>
  <path d="M0.19 0.09 C-0.49 2.03 -0.60 3.62 -0.43 4.77 C-0.25 2.56 -0.03 1.69 0.43 0.45 Z" fill="#edfff5" fill-opacity="0.82"/>
  <path d="M-0.4 5.02 C-0.35 6.03 -0.05 7.05 0.19 7.60 C0.03 6.62 -0.18 5.89 -0.23 5.06 Z" fill="#baffeb" fill-opacity="0.66"/>
  <path d="M0.29 7.74 C2.38 7.52 4.87 7.82 7.69 7.88 C5.02 7.58 3.95 7.53 2.44 7.56 C1.49 7.54 0.73 7.54 0.29 7.74 Z" fill="url(#molten-lower)"/>
  <path d="M3.22 2.98 C2.83 3.83 2.98 4.75 3.35 5.18 C3.62 5.54 4.01 5.66 4.62 5.78 C3.36 5.63 2.91 5.04 2.83 4.31 C2.72 3.70 2.95 3.19 3.22 2.98 Z" fill="#dffff0" fill-opacity="0.87"/>
  <path d="M4.78 5.9 C5.69 6.02 6.46 5.99 6.88 6.05 L7.61 7.52 C7.15 6.92 6.96 6.58 6.78 6.26 C5.79 6.28 5.27 6.11 4.78 5.9 Z" fill="#ceffea" fill-opacity="0.77"/>
  <path d="M10.81 0.17 C10.34 1.48 9.83 2.45 9.34 2.96 C10.21 2.42 10.62 1.48 10.81 0.17 Z" fill="#e9fff4" fill-opacity="0.88"/>
  <path d="M6.77 1.18 C7.38 1.06 8.4 0.99 8.94 1.28 C8.8 0.94 7.72 0.96 6.77 1.18 Z" fill="#aafff2" fill-opacity="0.65"/>
  <path d="M0.54 1.97 C0.64 1.37 0.87 1.10 1.18 0.91" fill="none" stroke="#f4fff0" stroke-opacity="0.75" stroke-width="0.047" stroke-linecap="round"/>
  <path d="M2.11 6.84 C2.54 7.03 2.89 7.07 3.30 7.09" fill="none" stroke="#efffe8" stroke-opacity="0.71" stroke-width="0.040" stroke-linecap="round"/>
</g>'''
CRYSTALS = '''<g id="crystals" inkscape:groupmode="layer" inkscape:label="40 — three irregular faceted inclusions (toggle)">
  <!-- Three designed inclusions. Their number, facets, placement and warmth are research proposals. -->
  <g id="crystal-1" opacity="0.84">
    <path d="M6.50 0.04 L7.03 -0.10 L7.84 0.02 L7.40 0.47 L6.74 0.49 L6.61 0.30 Z" fill="#063b4d" fill-opacity="0.16" transform="translate(0.025 0.035)"/>
    <path d="M6.50 0.04 L7.03 -0.10 L7.84 0.02 L7.40 0.47 L6.74 0.49 L6.61 0.30 Z" fill="url(#crystal-body)"/>
    <path d="M6.50 0.04 L7.03 -0.10 L7.17 0.15 L6.61 0.30 Z" fill="#baffdb" fill-opacity="0.73"/>
    <path d="M7.03 -0.10 L7.84 0.02 L7.17 0.15 Z" fill="url(#crystal-hot)"/>
    <path d="M7.84 0.02 L7.40 0.47 L7.17 0.15 Z" fill="#338b90"/>
    <path d="M6.61 0.30 L7.17 0.15 L7.40 0.47 L6.74 0.49 Z" fill="#52b9aa"/>
    <path d="M6.60 0.05 L7.03 -0.06 L7.64 0.02" fill="none" stroke="#efffd8" stroke-width="0.026" stroke-linecap="round"/>
    <path d="M7.16 0.16 L7.34 0.39" stroke="#e7ffb9" stroke-width="0.030" stroke-opacity="0.73"/>
    <path d="M6.4 0.35 C6.78 0.18 7.10 0.34 7.58 0.24 L7.46 0.37 C7.09 0.45 6.74 0.35 6.4 0.35 Z" fill="#91ffe5" fill-opacity="0.49"/>
  </g>
  <g id="crystal-2" opacity="0.83">
    <path d="M0.88 2.67 L1.19 2.48 L1.64 3.01 L1.56 3.76 L1.19 3.61 L0.94 3.19 Z" fill="#063c4e" fill-opacity="0.17" transform="translate(0.025 0.035)"/>
    <path d="M0.88 2.67 L1.19 2.48 L1.64 3.01 L1.56 3.76 L1.19 3.61 L0.94 3.19 Z" fill="url(#crystal-body)"/>
    <path d="M0.88 2.67 L1.19 2.48 L1.29 3.07 L0.94 3.19 Z" fill="#a6e7ca"/>
    <path d="M1.19 2.48 L1.64 3.01 L1.29 3.07 Z" fill="url(#crystal-hot)"/>
    <path d="M1.64 3.01 L1.56 3.76 L1.29 3.07 Z" fill="#205f70"/>
    <path d="M0.94 3.19 L1.29 3.07 L1.56 3.76 L1.19 3.61 Z" fill="#51b6a6"/>
    <path d="M0.92 2.69 L1.18 2.54 L1.55 2.97" fill="none" stroke="#f4ffd8" stroke-width="0.032" stroke-linecap="round"/>
    <path d="M1.29 3.09 L1.51 3.67" stroke="#e5ffc1" stroke-width="0.024" stroke-opacity="0.64"/>
    <path d="M0.98 3.36 C1.26 3.44 1.47 3.12 1.74 3.24 L1.75 3.36 C1.46 3.32 1.25 3.53 0.98 3.44 Z" fill="#9affeb" fill-opacity="0.50"/>
  </g>
  <g id="crystal-3" opacity="0.85">
    <path d="M4.59 6.63 L4.99 6.43 L5.60 6.62 L5.47 6.93 L4.93 7.31 L4.70 6.95 Z" fill="#064050" fill-opacity="0.16" transform="translate(0.025 0.035)"/>
    <path d="M4.59 6.63 L4.99 6.43 L5.60 6.62 L5.47 6.93 L4.93 7.31 L4.70 6.95 Z" fill="url(#crystal-body)"/>
    <path d="M4.59 6.63 L4.99 6.43 L5.03 6.78 L4.70 6.95 Z" fill="#9fe8c3"/>
    <path d="M4.99 6.43 L5.60 6.62 L5.03 6.78 Z" fill="url(#crystal-hot)"/>
    <path d="M5.60 6.62 L5.47 6.93 L4.93 7.31 L5.03 6.78 Z" fill="#296e76"/>
    <path d="M4.70 6.95 L5.03 6.78 L4.93 7.31 Z" fill="#60bda5"/>
    <path d="M4.63 6.66 L4.99 6.47 L5.47 6.62" fill="none" stroke="#faffd2" stroke-width="0.03" stroke-linecap="round"/>
    <path d="M5.03 6.80 L4.96 7.19" stroke="#edffc5" stroke-width="0.028" stroke-opacity="0.83"/>
    <path d="M4.39 6.92 C4.75 6.79 4.92 7.03 5.37 6.91 L5.20 7.05 C4.87 7.15 4.64 6.97 4.39 6.98 Z" fill="#95ffe3" fill-opacity="0.50"/>
  </g>
</g>'''

LAYERS = {'thickness': THICKNESS, 'internal-glow': GLOW, 'highlights': HIGHLIGHTS, 'crystals': CRYSTALS}


def svg(label, layers):
    return f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="{WIDTH}" height="{HEIGHT}" viewBox="{VIEWBOX}">
<title>{label}</title>
<desc>Controlled native-vector material research. Exact unchanged hook-C candidate mask; cyan is a test color. No character assignment, ability, or canon change. Single shared clip bounds every painted layer. Opaque base preserves source alpha.</desc>
<defs>{DEFS}</defs>
<g id="identity-locked-material" clip-path="url(#identity-clip)">
{BASE}
{''.join(layers)}
</g>
</svg>
'''


def render(name):
    subprocess.run(['inkscape', str(HERE / f'{name}.svg'), '--export-type=png', f'--export-filename={HERE / (name + ".png")}'], check=True, capture_output=True, text=True, env=RENDER_ENV)


def prefix_ids(body, prefix):
    import re
    ids = re.findall(r'id="([^"]+)"', body)
    for ident in sorted(set(ids), key=len, reverse=True):
        body = body.replace(f'id="{ident}"', f'id="{prefix}{ident}"')
        body = body.replace(f'url(#{ident})', f'url(#{prefix}{ident})')
        body = body.replace(f'href="#{ident}"', f'href="#{prefix}{ident}"')
    return body


def build_contact(a_svg, b_svg):
    # At 60 px per source unit, both copies remain exactly 840 by 660.
    a_inner = a_svg.split('<defs>', 1)[1].rsplit('</svg>', 1)[0]
    b_inner = b_svg.split('<defs>', 1)[1].rsplit('</svg>', 1)[0]
    a_inner = prefix_ids('<defs>' + a_inner, 'a-')
    b_inner = prefix_ids('<defs>' + b_inner, 'b-')
    preview = f'''<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="1680" height="748" viewBox="0 0 1680 748">
<title>Native vector material study: controlled A / B</title>
<rect width="1680" height="748" fill="#111b25"/>
<path d="M840 0V748" stroke="#32404b"/>
<g font-family="DejaVu Sans, sans-serif" fill="#ecf4f6"><text x="38" y="36" font-size="19" font-weight="bold">A / SMOOTH GLOSSY CYAN</text><text x="878" y="36" font-size="19" font-weight="bold">B / INTERNAL LIGHT + MOLTEN EDGES + 3 INCLUSIONS</text></g>
<g fill="#9fb4bf" font-family="DejaVu Sans, sans-serif" font-size="13"><text x="38" y="59">Control: smooth body and broad surface gloss</text><text x="878" y="59">Proposal: layered thickness, uneven light ribbons, irregular facets</text></g>
<svg x="0" y="64" width="840" height="660" viewBox="{VIEWBOX}">{a_inner}</svg>
<svg x="840" y="64" width="840" height="660" viewBox="{VIEWBOX}">{b_inner}</svg>
<text x="38" y="735" fill="#a8bac4" font-family="DejaVu Sans, sans-serif" font-size="12">Identical source mask and size · Transparent standalone SVGs/PNGs · Native-vector research, not raster material validation · Cyan remains a test color</text>
</svg>'''
    (HERE / 'AB_preview.svg').write_text(preview)
    render('AB_preview')


def audit(names):
    reference = Image.open(HERE / 'source_mask.png').convert('RGBA')
    source_alpha = reference.getchannel('A')
    result = {
        'source': 'haruka_research_v03/visual_tests/pattern_identity_alpha.svg',
        'source_copy_sha256': hashlib.sha256(SOURCE.read_bytes()).hexdigest(),
        'source_identity_path': D, 'viewBox': VIEWBOX, 'width': WIDTH, 'height': HEIGHT,
        'renderer': subprocess.run(['inkscape', '--version'], capture_output=True, text=True, env=RENDER_ENV).stdout.strip(),
        'reference_nonzero_alpha_pixels': sum(v > 0 for v in source_alpha.tobytes()),
        'reference_opaque_pixels': sum(v == 255 for v in source_alpha.tobytes()),
        'reference_bbox': source_alpha.getbbox(),
        'keepout_probe_pixels_xy': {'C_void': [600, 360], 'outside_upper': [420, 30], 'outside_right': [810, 420], 'outside_lower': [420, 630]},
        'results': {}
    }
    for name in names:
        im = Image.open(HERE / f'{name}.png').convert('RGBA')
        alpha = im.getchannel('A')
        diff = ImageChops.difference(alpha, source_alpha)
        hist = diff.histogram()
        pairs = list(zip(source_alpha.tobytes(), alpha.tobytes()))
        art_root = ET.parse(HERE / f'{name}.svg').getroot()
        identity = art_root.find('svg:defs/svg:path[@id="identity-path"]', NS)
        wrapped = art_root.find('svg:g[@id="identity-locked-material"]', NS)
        element_ids = [node.attrib['id'] for node in art_root.iter() if 'id' in node.attrib]
        result['results'][name] = {
            'size': list(im.size),
            'unique_svg_ids': len(element_ids) == len(set(element_ids)),
            'raster_images': len(art_root.findall('.//svg:image', NS)),
            'filters': len(art_root.findall('.//svg:filter', NS)), 'same_viewBox': art_root.attrib['viewBox'] == VIEWBOX,
            'identity_d_matches_source': identity.attrib['d'] == D,
            'all_painted_layers_inside_identity_clip': wrapped is not None and wrapped.attrib.get('clip-path') == 'url(#identity-clip)' and all(n.tag.endswith(('defs', 'title', 'desc')) or n is wrapped for n in art_root),
            'alpha_bit_identical': diff.getbbox() is None,
            'alpha_differing_pixels': len(pairs) - hist[0],
            'max_alpha_difference': max(i for i, count in enumerate(hist) if count),
            'nonzero_alpha_outside_source_support': sum(a == 0 and b != 0 for a, b in pairs),
            'lost_nonzero_source_pixels': sum(a != 0 and b == 0 for a, b in pairs),
            'changed_fully_opaque_source_pixels': sum(a == 255 and b != 255 for a, b in pairs),
            'keepout_probe_alpha': {k: alpha.getpixel(tuple(v)) for k, v in result['keepout_probe_pixels_xy'].items()},
            'bbox': alpha.getbbox(),
        }
    (HERE / 'verification.json').write_text(json.dumps(result, indent=2) + '\n')
    print(json.dumps(result, indent=2))
    assert all(r['alpha_bit_identical'] and r['identity_d_matches_source'] and r['all_painted_layers_inside_identity_clip'] and r['unique_svg_ids'] and r['raster_images'] == 0 and r['filters'] == 0 for r in result['results'].values()), 'Mask audit failed; inspect verification.json.'


def main():
    p = argparse.ArgumentParser()
    p.add_argument('--omit', nargs='*', default=[], choices=list(LAYERS), help='Render an additional B_ablated.svg/png with selected layers hidden.')
    args = p.parse_args()
    a = svg('A — smooth glossy cyan baseline', [SMOOTH])
    b = svg('B — viscous internal light, molten glass and irregular crystal inclusions', list(LAYERS.values()))
    (HERE / 'A_smooth_cyan.svg').write_text(a)
    (HERE / 'B_viscous_material.svg').write_text(b)
    for name in ['source_mask', 'A_smooth_cyan', 'B_viscous_material']:
        render(name)
    names = ['A_smooth_cyan', 'B_viscous_material']
    build_contact(a, b)
    if args.omit:
        ablated = svg('B — layer ablation: ' + ', '.join(args.omit), [s for k, s in LAYERS.items() if k not in args.omit])
        (HERE / 'B_ablated.svg').write_text(ablated)
        render('B_ablated')
        names.append('B_ablated')
    audit(names)

if __name__ == '__main__':
    main()
