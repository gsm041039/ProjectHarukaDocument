#!/usr/bin/env python3
"""Non-destructive comparison: fit each existing image within the same 800x450 box.
This never writes either input file. It does not crop, warp, mirror, or colour-grade.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageOps
HERE=Path(__file__).resolve().parent
ROOT=HERE.parent.parent
ref=HERE/'reference/C0_no_crimson_control.png'
if not ref.exists(): ref=ROOT/'haruka_research_v12/visual_tests/C0_no_crimson_control.png'
new=HERE/'cosmic_key_render.png'
canvas=Image.new('RGB',(1648,540),'#e7e9ed')
draw=ImageDraw.Draw(canvas)
fontpath='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
font=ImageFont.truetype(fontpath,17)
small=ImageFont.truetype(fontpath,13)
for left,p,label,sub in [(16,ref,'C0 reference | 1672 x 941','Original file untouched; fit, no crop or stretch'),(832,new,'New native SVG key | 1600 x 900','One original layout; 5 editable groups; no embedded PNG')]:
    im=Image.open(p).convert('RGB')
    preview=ImageOps.contain(im,(800,450),Image.Resampling.LANCZOS)
    canvas.paste(preview,(left+(800-preview.width)//2,49+(450-preview.height)//2))
    draw.text((left,15),label,font=font,fill='#111821')
    draw.text((left,513),sub,font=small,fill='#24303d')
canvas.save(HERE/'C0_and_native_key_same_scale.png')
print('Saved 1648x540 comparison; both images contained in equal 800x450 boxes, original aspect retained.')
