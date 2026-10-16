"""Make a small JPEG thumbnail for the Workbench gallery: python thumb.py <src> <dst> [width]."""
import sys
from PIL import Image

src, dst = sys.argv[1], sys.argv[2]
width = int(sys.argv[3]) if len(sys.argv) > 3 else 360
with Image.open(src) as im:
    im.thumbnail((width, width * 2))
    if im.mode not in ("RGB", "L"):
        bg = Image.new("RGB", im.size, (255, 255, 255))
        bg.paste(im, mask=im.convert("RGBA").split()[-1])
        im = bg
    im.save(dst, "JPEG", quality=82)
