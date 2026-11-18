#!/usr/bin/env python3
"""v7 overview contact sheet (2026-11-10 HKT). Reuses v6 generator's image list/crops (official images only);
adds a head 64 crop (illustrative, auto: top-anchored square, side 0.24 x figure height, centred on alpha of top 12% rows;
only for images with real alpha) and a one-line v7 64 px reading per row. EX13 ASU side box widened to x1=800 so the
gold tail tip (right edge ~x791) is inside. Not a metric source. Deterministic."""
import os, json, importlib.util
from PIL import Image, ImageDraw, ImageFont
import numpy as np
HERE = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location('ov6', os.path.join(HERE, 'generate_overview_20261110.py'))
ov6 = importlib.util.module_from_spec(spec); spec.loader.exec_module(ov6)
OUT = os.path.join(HERE, 'OVERVIEW_EXAMPLES_IMG_v7_20261110.png')
NOTE = {
 'EX01': '全身64：兩形態可分、暗份額降｜頭像64：藍同暗份額都升', 'EX02': '填實剪影冇開背｜彩色背面64見背條，菱形唔驗',
 'EX03': '彩色64同頭肩方框都靠髮色分人｜兩人都冇踢腿', 'EX04': '全身64：槍＋刃翼，丸子2–3 px｜頭部裁切丸子13–20 px',
 'EX05': '剪影資產冇字｜彩色64只目視、標殘字', 'EX06': '全身：禮裝大色塊｜頭肩方框：紅領｜貼臉頭像：髮＋耳飾',
 'EX07': '按畫框高縮：人物約56–59 px、三角消失', 'EX08': '只有全身通道：腰帶明度谷仍在',
 'EX09': '全身：紅vs紺｜貼臉頭像：衣色退出、靠髮明度', 'EX10': '全身：穿法差可讀｜頂錨方框：外套唔入框',
 'EX11': '全身：直人白髮vs黒コート｜頭像：靠領口明暗分兄弟', 'EX12': '全身：小夾LOST｜頭肩方框：色點可見、形狀唔驗',
 'EX13': '側面全身64長垂線在；尾尖約到膝、唔到小腿', 'EX14': '全身64：尖數唔可靠｜官方一覽縮圖已見3尖',
}
def head64(rgba):
    a = np.array(rgba.getchannel('A'))
    if a.min() > 250: return None
    ys, xs = np.nonzero(a > 128)
    if len(ys) == 0: return None
    top, bot = ys.min(), ys.max(); h = bot - top + 1
    sel = ys < top + 0.12 * h; cx = xs[sel].mean(); side = 0.24 * h
    l = int(round(cx - side / 2)); t = int(top); box = (l, t, l + int(round(side)), t + int(round(side)))
    return ov6.flat(rgba.crop(box)).resize((64, 64), Image.LANCZOS)
def main():
    f_id = ImageFont.truetype(ov6.FB, 26); f_w = ImageFont.truetype(ov6.FONT, 15); f_s = ImageFont.truetype(ov6.FONT, 12)
    rows, manifest = [], []
    for ex, work, la, lb, A, B in ov6.EX:
        pa, ca = A; ra = ov6.load(pa); ra = ca(ra) if ca else ra; ia = ov6.flat(ra); srcs = [pa]
        heads = []
        if ex == 'EX13':
            frame = ia; tb_a = frame.crop((1275, 70, 1570, 765)); tb_b = frame.crop((418, 8, 800, 765))
            panels = [ov6.fit(frame, maxw=2 * ov6.MAX_W)]
        else:
            pb, cb = B; rb = ov6.load(pb); rb = cb(rb) if cb else rb; ib = ov6.flat(rb); srcs.append(pb)
            tb_a, tb_b = ia, ib; panels = [ov6.fit(ia), ov6.fit(ib)]
            heads = [head64(ra), head64(rb)]
        thumbs = [ov6.th64(tb_a), ov6.th64(tb_b)]
        w = ov6.LABEL_W + sum(p.width + ov6.PAD for p in panels) + 20 + sum(t.width + ov6.PAD for t in thumbs) + 30 + 2 * (64 + ov6.PAD) + ov6.PAD
        row = Image.new('RGB', (max(w, 1300), ov6.ROW_H), 'white'); d = ImageDraw.Draw(row)
        d.text((10, 10), ex, font=f_id, fill=(0, 0, 0)); d.text((10, 48), work, font=f_w, fill=(0, 0, 0))
        d.text((10, 74), f'A: {la}', font=f_s, fill=(60, 60, 60)); d.text((10, 92), f'B: {lb}', font=f_s, fill=(60, 60, 60))
        y = 112
        for s_ in srcs: d.text((10, y), os.path.basename(s_)[:40], font=f_s, fill=(110, 110, 110)); y += 16
        x = ov6.LABEL_W
        for p in panels: row.paste(p, (x, 10)); x += p.width + ov6.PAD
        x += 12; d.line((x - 6, 10, x - 6, ov6.ROW_H - 40), fill=(180, 180, 180))
        d.text((x, 10), '全身 64（實尺寸）', font=f_s, fill=(60, 60, 60))
        x0 = x
        for t, lab in zip(thumbs, ('A', 'B')):
            row.paste(t, (x, 30)); d.text((x, 30 + 64 + 2), lab, font=f_s, fill=(60, 60, 60)); x += t.width + ov6.PAD
        x = max(x, x0 + 112)
        x += 18; d.line((x - 9, 10, x - 9, ov6.ROW_H - 40), fill=(180, 180, 180))
        d.text((x, 10), '頭框 64（示意）', font=f_s, fill=(60, 60, 60))
        if any(h is not None for h in heads):
            for h, lab in zip(heads, ('A', 'B')):
                if h is not None: row.paste(h, (x, 30)); d.text((x, 96), lab, font=f_s, fill=(60, 60, 60))
                x += 64 + ov6.PAD
        else:
            d.text((x, 40), '—（冇 alpha，唔自動裁）', font=f_s, fill=(110, 110, 110))
        d.text((ov6.LABEL_W, ov6.ROW_H - 28), 'v7：' + NOTE[ex], font=f_w, fill=(20, 20, 120))
        d.line((0, ov6.ROW_H - 1, row.width, ov6.ROW_H - 1), fill=(200, 200, 200))
        rows.append(row); manifest.append({'ex': ex, 'sources': [{'path': s_, 'md5': ov6.md5(s_)} for s_ in srcs]})
    W = max(r.width for r in rows); hdr = 40
    sheet = Image.new('RGB', (W, hdr + ov6.ROW_H * len(rows)), 'white')
    ImageDraw.Draw(sheet).text((10, 8), 'OVERVIEW v7 EX01–EX14 · 官方圖 only · 全身 64＝身高 64 實尺寸 · 頭框 64＝示意裁切（貼頂、邊長 0.24×人高；唔係量度）· 內部研究', font=f_w, fill=(0, 0, 0))
    for k, r in enumerate(rows): sheet.paste(r, (0, hdr + k * ov6.ROW_H))
    assert not os.path.exists(OUT) or os.environ.get('FORCE') == '1'
    sheet.save(OUT, optimize=True)
    json.dump(manifest, open(os.path.join(HERE, 'OVERVIEW_EXAMPLES_IMG_v7_20261110.sources.json'), 'w'), indent=1, ensure_ascii=False)
    print(OUT, sheet.size)
if __name__ == '__main__': main()
