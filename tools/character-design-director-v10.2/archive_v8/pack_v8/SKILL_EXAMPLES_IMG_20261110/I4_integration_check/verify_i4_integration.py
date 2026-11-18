#!/usr/bin/env python3
"""Integrator spot-checks for I4 (2026-11-10 HKT). Read-only on official art; writes only into this folder.
Run: python3 verify_i4_integration.py
"""
import json, hashlib, os
import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage

R = '/workspace/haruka/research'
OUT = os.path.dirname(os.path.abspath(__file__))
def md5(p): return hashlib.md5(open(p,'rb').read()).hexdigest()
M = {'date_hkt': '2026-11-10', 'checks': {}}

# --- EX05: does official char_s2 asset contain CODE NAME lettering? ---
P5 = f'{R}/identity_canon/img_examples_20261110/raw_p5'
ex05 = {}; tiles = []
for n in ['hero','anne','makoto','ryuji','futaba','haru','yusuke']:
    s2 = f'{P5}/{n}_char_s2.png'; img2 = f'{P5}/{n}_char_img2.png'
    a = np.array(Image.open(s2).convert('LA')); m = a[...,1] > 128
    _, k = ndimage.label(m); holes = ndimage.binary_fill_holes(m) & ~m; _, hk = ndimage.label(holes)
    ex05[n] = {'s2_md5': md5(s2), 'fg_components': int(k), 'interior_holes': int(hk), 'hole_px': int(holes.sum()),
               'distinct_luma_in_fg': int(len(np.unique(a[...,0][m])))}
    for f in (s2, img2):
        im = Image.open(f).convert('RGBA'); bg = Image.new('RGBA', im.size, (255,255,255,255)); bg.alpha_composite(im)
        bg = bg.convert('RGB'); bg.thumbnail((300,340)); tiles.append(bg)
sheet = Image.new('RGB', (620, 7*350), 'white')
for i,t in enumerate(tiles): sheet.paste(t, ((i%2)*310, (i//2)*350))
sheet.save(f'{OUT}/EX05_char_s2_vs_img2_7.png')
M['checks']['EX05_char_s2_lettering'] = {'per_char': ex05,
  'reading': 'IMAGE_REVIEW: every char_s2 is a single flat-black polygonal silhouette; no glyph islands/holes shaped like CODE NAME (anne holes = whip loop gaps). Lettering exists only on char_img2 colour art and overlaps body.'}

# --- EX13: frame-0 ASU side ponytail tip vs knee (landmarks by eye on 1583x836 frame) ---
gif = f'{R}/originality/img_examples_20261110/raw/asu_vs_old_comparisons.gif'
g = Image.open(gif); g.seek(0); f0 = g.convert('RGB')
LM = {'scalp_topknot_band_y': 88, 'tail_tip_brush_end_y': 545, 'tail_tip_x': 778, 'knee_rings_y': 578, 'boot_sole_y': 755,
      'pc_claimed_tip_xy': [763, 705]}
crop = f0.crop((480,0,880,800)); d = ImageDraw.Draw(crop)
for y in range(0,800,50): d.line([(0,y),(12,y)], fill=(255,255,0)); d.text((15,y-5), str(y), fill=(255,255,0))
for key,col in [('tail_tip_brush_end_y',(0,255,255)),('knee_rings_y',(255,0,255)),('boot_sole_y',(255,255,255))]:
    d.line([(40,LM[key]),(400,LM[key])], fill=col); d.text((300,LM[key]-12), key, fill=col)
px,py = LM['pc_claimed_tip_xy']; d.ellipse([px-480-6,py-6,px-480+6,py+6], outline=(255,0,0), width=2); d.text((px-480+8,py-6),'PC y705',fill=(255,0,0))
crop.save(f'{OUT}/EX13_frame0_asu_side_tip_vs_knee.png')
span = LM['boot_sole_y'] - LM['scalp_topknot_band_y']
M['checks']['EX13_tail_tip'] = {'gif_md5': md5(gif), 'landmarks': LM,
  'tip_frac_scalp_to_sole': round((LM['tail_tip_brush_end_y']-LM['scalp_topknot_band_y'])/span,3),
  'knee_frac_scalp_to_sole': round((LM['knee_rings_y']-LM['scalp_topknot_band_y'])/span,3),
  'pixel_at_pc_claimed_tip_rgb': list(f0.getpixel(tuple(LM['pc_claimed_tip_xy']))),
  'reading': 'IMAGE_REVIEW: tail brush ends ~y545, just above knee rings ~y578; lower calf (wraps y600-720) is not reached. PC landmark (763,705) falls on grass. Agrees with commercial I4 (tip 0.712 of height, knee guard 0.756).'}

# --- EX03: pose attribution ---
CV = f'{R}/color_value/img_examples_20261110'
outs = []
for fn in ('kurumi_portrait1@2x.png','yuzu_portrait2@2x.png'):
    im = Image.open(f'{CV}/{fn}').convert('RGBA'); bg = Image.new('RGBA', im.size, (200,200,200,255)); bg.alpha_composite(im)
    c = bg.crop(im.getbbox()).convert('RGB'); c.thumbnail((450,800)); outs.append(c)
s = Image.new('RGB',(920,800),'white'); s.paste(outs[0],(0,0)); s.paste(outs[1],(470,0)); s.save(f'{OUT}/EX03_pose_kurumi_vs_yuzu.png')
M['checks']['EX03_pose'] = {'md5': {fn: md5(f'{CV}/{fn}') for fn in ('kurumi_portrait1@2x.png','yuzu_portrait2@2x.png')},
  'reading': 'IMAGE_REVIEW: Kurumi = one arm out past skirt, one boot turned out to the side (toe slightly off ground); Yuzu = upright, both hands down, long hair widens both sides. Nobody kicks.'}

# --- EX11: what head_hair "clothing L*" means ---
hh = json.load(open(f'{R}/head_hair/i3_img/EX11/metrics.json'))
M['checks']['EX11_head_hair_clothing_definition'] = {
  'naoto': {k: hh['pair']['a'][k] for k in ('hair_Lstar','clothing_Lstar','hair_frac_of_char','clothing_frac_of_char')},
  'naoya': {k: hh['pair']['b'][k] for k in ('hair_Lstar','clothing_Lstar','hair_frac_of_char','clothing_frac_of_char')},
  'reading': 'head_hair clothing = all figure px minus hair/face (~91-94% of figure, includes trousers/inner layers); not a jacket sample, so naoya 50.42 is not comparable with mint-jacket L* ~73-76.'}

json.dump(M, open(f'{OUT}/metrics.json','w'), ensure_ascii=False, indent=1)
print('ok', OUT)
