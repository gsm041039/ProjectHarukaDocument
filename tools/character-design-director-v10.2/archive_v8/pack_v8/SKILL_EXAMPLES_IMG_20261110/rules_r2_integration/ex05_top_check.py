"""R2 integration check (b): EX05 thieves — what is the bbox-top pixel? (read-only official images)
Definition: alpha>=128 (also report alpha>=16); bbox top = min y of mask; top-pixel x range; save top-30% crops
with bbox-top row (red) marked, 2x, for visual classification by the integrator."""
import json,hashlib,os
from PIL import Image,ImageDraw
import numpy as np
R='/workspace/haruka/research/identity_canon/img_examples_20261110/raw_p5/'
names=['hero','ryuji','anne','yusuke','makoto','futaba','haru']
out={};tiles=[]
for n in names:
    p=R+f'{n}_char_img2.png'; im=Image.open(p).convert('RGBA'); a=np.array(im)[:,:,3]
    rec={'path':p,'md5':hashlib.md5(open(p,'rb').read()).hexdigest(),'size':im.size}
    for thr in (16,128):
        ys,xs=np.where(a>=thr); y0=int(ys.min()); y1=int(ys.max())
        top=xs[ys<=y0+3]
        rec[f'a{thr}']={'bbox':[int(xs.min()),y0,int(xs.max()),y1],'top_x':[int(top.min()),int(top.max())]}
    b=rec['a128']['bbox'];H=b[3]-b[1]
    crop=im.crop((b[0],b[1],b[2],b[1]+int(0.30*H)))
    bg=Image.new('RGBA',crop.size,(235,235,235,255));bg.alpha_composite(crop)
    d=ImageDraw.Draw(bg); tx=rec['a128']['top_x']
    d.rectangle([tx[0]-b[0]-6,0,tx[1]-b[0]+6,12],outline=(255,0,0,255),width=3)
    for k in range(1,6):
        y=int(k*0.05*H); d.line([0,y,bg.size[0],y],fill=(0,120,255,255),width=1)
    s=420/bg.size[1]; bg=bg.resize((int(bg.size[0]*s),420))
    d=ImageDraw.Draw(bg); d.text((4,400),n,fill=(0,0,0,255))
    tiles.append(bg); out[n]=rec
W=sum(t.size[0] for t in tiles)+10*len(tiles); sheet=Image.new('RGB',(W,420),(255,255,255)); x=0
for t in tiles: sheet.paste(t.convert('RGB'),(x,0)); x+=t.size[0]+10
sheet.save('EX05_thief_bbox_top_top30.png'); json.dump(out,open('EX05_thief_bbox_top.json','w'),indent=1)
print(json.dumps({k:(v['a128'],v['size']) for k,v in out.items()}))
