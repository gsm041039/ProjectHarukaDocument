#!/usr/bin/env python3
"""Overview contact sheet for EX01-EX14 (internal research, low-res).
Uses ONLY the researchers' official downloaded images (paths below); crops are plain
rectangles / alpha bbox, no recolouring. Deterministic: no timestamps.
Run: python3 generate_overview_20261110.py
"""
import os, hashlib, json
from PIL import Image, ImageDraw, ImageFont

R = "/workspace/haruka/research"
OUT_DIR = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(OUT_DIR, "OVERVIEW_EXAMPLES_IMG_20261110.png")
FONT = "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc"
FB = "/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc"

MAIN_H, MAX_W, TH = 220, 360, 64
LABEL_W, PAD, ROW_H = 300, 8, 270

def load(p):
    im = Image.open(os.path.join(R, p))
    im.seek(0)
    return im.convert("RGBA")

def flat(im, bg=(255, 255, 255)):
    b = Image.new("RGBA", im.size, bg + (255,)); b.alpha_composite(im); return b.convert("RGB")

def abbox(im):
    bb = im.getchannel("A").point(lambda v: 255 if v > 8 else 0).getbbox()
    return im.crop(bb) if bb else im

def frac(im, l, t, r, b):
    w, h = im.size
    return im.crop((int(l*w), int(t*h), int(r*w), int(b*h)))

# EX12 B and EX14 B are cropped to the figure only (drop catch-copy / profile text panel).
# (id, work, A label, B label, A spec, B spec); spec = (path, crop-fn)
EX = [
 ("EX01", "CRYSTAR (Furyu)", "Nanana private", "Nanana battle",
  ("commercial/img_examples_20261110/src/c_ntny_furyu_a4.png", lambda i: frac(i, 0, 0, .5, 1)),
  ("commercial/img_examples_20261110/src/c_ntny_furyu_a8.png", lambda i: frac(i, 0, 0, .5, 1))),
 ("EX02", "Bayonetta (PlatinumGames)", "B1 sheet (front)", "B2 sheet (front)",
  ("flow_structure/img_examples_20261110/src_b1_final_sheet.jpg", lambda i: frac(i, 0, 0, .5, 1)),
  ("flow_structure/img_examples_20261110/src_b2_sheet.jpg", lambda i: frac(i, 0, 0, .5, 1))),
 ("EX03", "Mahonare / 魔法少女にあこがれて", "Kurumi", "Yuzu",
  ("color_value/img_examples_20261110/kurumi_portrait1@2x.png", abbox),
  ("color_value/img_examples_20261110/yuzu_portrait2@2x.png", abbox)),
 ("EX04", "Climacina / クライマキナ", "Leben private", "Leben battle",
  ("silhouette_cast/img_examples_20261110/leben_private_famitsu_202303.jpg", None),
  ("silhouette_cast/img_examples_20261110/leben_battle_famitsu_202303.jpg", None)),
 ("EX05", "Persona 5 (Atlus)", "Hero student", "Hero Joker",
  ("identity_canon/img_examples_20261110/raw_p5/hero_char_img.png", abbox),
  ("identity_canon/img_examples_20261110/raw_p5/hero_char_img2.png", abbox)),
 ("EX06", "Sai Hito / 彩人", "Scarlett", "Julius",
  ("production_critic/img_examples_20261110/src/chara_image01-1.png", abbox),
  ("production_critic/img_examples_20261110/src/chara_image02.png", abbox)),
 ("EX07", "Black Panther (Marvel)", "Civil War 2016 frame", "BP 2018 (NPR)",
  ("motif_world/img_examples_20261110/selected/cw2016_goldenglobes_filmframe.jpg", None),
  ("motif_world/img_examples_20261110/selected/bp2018_npr_mattkennedy.jpg", None)),
 ("EX08", "=LOVE 9th Anniv. concert costume", "far, worn", "near, zip",
  ("construction_fashion/img_examples_20261110/src/04_far_worn_otani.jpg", None),
  ("construction_fashion/img_examples_20261110/src/09_near_zip.jpg", None)),
 ("EX09", "Lycoris Recoil / リコリス・リコイル", "Chisato (cafe)", "Takina (cafe)",
  ("head_hair/img_examples_20261110/cafe_chisato.png", abbox),
  ("head_hair/img_examples_20261110/cafe_takina.png", abbox)),
 ("EX10", "SYNDUALITY Noir", "Noir", "Mystere",
  ("performance_motion/img_examples_20261110/official/1.webp", abbox),
  ("performance_motion/img_examples_20261110/official/16.webp", abbox)),
 ("EX11", "NIGHT HEAD 2041", "Naoto", "Naoya",
  ("psychology/img_examples_20261110/official2041_thumb2.png", abbox),
  ("psychology/img_examples_20261110/official2041_character_3thumb.png", abbox)),
 ("EX12", "Tropical-Rouge! Pretty Cure", "casual", "transformed",
  ("audience_market/img_examples_20261110/p_02_style3_pc.png", abbox),
  ("audience_market/img_examples_20261110/p_02_style1_pc.png", lambda i: abbox(frac(i, .38, 0, 1, 1)))),
 ("EX13", "League of Legends: Lee Sin ASU", "/dev GIF frame 0 (ASU | old)", "side crops: old | ASU(v2 box)",
  ("originality/img_examples_20261110/raw/asu_vs_old_comparisons.gif", None),
  None),
 ("EX14", "Princess Connect! Re:Dive (game→TV)", "Pecorine game art", "Pecorine TV",
  ("tv_simplify/img_examples_20261110/official/game_pecorine_astrum_whole.png", abbox),
  ("tv_simplify/img_examples_20261110/official/anime_pecorine_default_pc.png", lambda i: i.crop((150, 10, 520, 670)))),
]

def fit(im, h=MAIN_H, maxw=MAX_W):
    w = max(1, round(im.width * h / im.height))
    if w > maxw:
        h = max(1, round(im.height * maxw / im.width)); w = maxw
    return im.resize((w, h), Image.LANCZOS)

def th64(im):
    return im.resize((max(1, round(im.width * TH / im.height)), TH), Image.LANCZOS)

def md5(p):
    return hashlib.md5(open(os.path.join(R, p), "rb").read()).hexdigest()

def main():
    f_id = ImageFont.truetype(FB, 26); f_w = ImageFont.truetype(FONT, 15); f_s = ImageFont.truetype(FONT, 12)
    rows, manifest = [], []
    for ex, work, la, lb, A, B in EX:
        pa, ca = A
        ia = load(pa); ia = ca(ia) if ca else ia; ia = flat(ia)
        srcs = [pa]
        if ex == "EX13":
            # thumbs = side views; boxes from analyze_ex13_v2.py (I1_RECT/V2_RECT)
            frame = ia
            tb_a = frame.crop((1275, 70, 1570, 765))  # old side
            tb_b = frame.crop((418, 8, 782, 765))     # ASU side, v2 box incl. ponytail tip
            panels = [fit(frame, maxw=2 * MAX_W)]
        else:
            pb, cb = B
            ib = load(pb); ib = cb(ib) if cb else ib; ib = flat(ib)
            srcs.append(pb)
            tb_a, tb_b = ia, ib
            panels = [fit(ia), fit(ib)]
        thumbs = [th64(tb_a), th64(tb_b)]
        w = LABEL_W + sum(p.width + PAD for p in panels) + 20 + sum(t.width + PAD for t in thumbs) + PAD
        w = max(w, LABEL_W + sum(p.width + PAD for p in panels) + 12 + 130)  # keep thumb label unclipped
        row = Image.new("RGB", (w, ROW_H), (255, 255, 255))
        d = ImageDraw.Draw(row)
        d.text((10, 10), ex, font=f_id, fill=(0, 0, 0))
        d.text((10, 48), work, font=f_w, fill=(0, 0, 0))
        d.text((10, 74), f"A: {la}", font=f_s, fill=(60, 60, 60))
        d.text((10, 92), f"B: {lb}", font=f_s, fill=(60, 60, 60))
        y = 112
        for s in srcs:
            d.text((10, y), os.path.basename(s)[:40], font=f_s, fill=(110, 110, 110)); y += 16
        x = LABEL_W
        for p in panels:
            row.paste(p, (x, 10)); x += p.width + PAD
        x += 12
        d.line((x - 6, 10, x - 6, ROW_H - 10), fill=(180, 180, 180))
        d.text((x, 10), "64 px tall (actual)", font=f_s, fill=(60, 60, 60))
        for t, lab in zip(thumbs, ("A", "B")):
            row.paste(t, (x, 30)); d.text((x, 30 + TH + 2), lab, font=f_s, fill=(60, 60, 60))
            x += t.width + PAD
        d.line((0, ROW_H - 1, w, ROW_H - 1), fill=(200, 200, 200))
        rows.append(row)
        manifest.append({"ex": ex, "sources": [{"path": s, "md5": md5(s)} for s in srcs]})
    W = max(r.width for r in rows)
    hdr = 40
    sheet = Image.new("RGB", (W, hdr + ROW_H * len(rows)), (255, 255, 255))
    ImageDraw.Draw(sheet).text((10, 8), "OVERVIEW EX01–EX14 · official images only · main panels ≤220 px tall · right: actual 64 px-tall thumbs · internal research", font=f_w, fill=(0, 0, 0))
    for k, r in enumerate(rows):
        sheet.paste(r, (0, hdr + k * ROW_H))
    sheet.save(OUT, optimize=True)
    json.dump(manifest, open(os.path.join(OUT_DIR, "OVERVIEW_EXAMPLES_IMG_20261110.sources.json"), "w"), indent=1, ensure_ascii=False)
    print(OUT, sheet.size)

if __name__ == "__main__":
    main()
