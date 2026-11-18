"""Definition: extreme rows = rows whose left (right) mask edge is within 3 px of the bbox edge; t = (row - bbox top)/bbox height.
R2 integration check (e): EX02 — do the guns set the bbox side extremes? Uses performance_motion I3 tight silhouettes
(official sheet, paper-white mask, read-only). For each view: rows where the left/right extreme of the mask occurs,
as t = row / bbox height. Visual sheet with extreme rows marked for integrator QC."""
import json,hashlib
import numpy as np
from PIL import Image,ImageDraw
P='/workspace/haruka/research/performance_motion/i3_img/EX02/'
res={};tiles=[]
for v in ['b1_front','b1_back','b2_front','b2_back']:
    sil=np.array(Image.open(P+f'{v}_sil.png').convert('L'))<128  # figure is black on white
    ys,xs=np.where(sil); y0,y1=ys.min(),ys.max(); H=y1-y0+1
    xl,xr=xs.min(),xs.max()
    L=np.array([np.argmax(r) if r.any() else 10**6 for r in sil]); R=np.array([len(r)-1-np.argmax(r[::-1]) if r.any() else -1 for r in sil])
    tl=np.where(L<=L.min()+3)[0]; tr=np.where(R>=R.max()-3)[0]
    res[v]={'md5_sil':hashlib.md5(open(P+f'{v}_sil.png','rb').read()).hexdigest(),'bbox':[int(xl),int(y0),int(xr),int(y1)],
            't_left_extreme':round(float((np.median(tl)-y0)/H),4),'t_right_extreme':round(float((np.median(tr)-y0)/H),4),'t_left_rows':[round(float((tl.min()-y0)/H),3),round(float((tl.max()-y0)/H),3)],'t_right_rows':[round(float((tr.min()-y0)/H),3),round(float((tr.max()-y0)/H),3)]}
    col=Image.open(P+f'{v}_color.png').convert('RGB') if v!='b2_back' or True else None
    c=col.resize((sil.shape[1],sil.shape[0])) if col.size!=(sil.shape[1],sil.shape[0]) else col
    d=ImageDraw.Draw(c)
    for t,x in ((res[v]['t_left_extreme'],xl),(res[v]['t_right_extreme'],xr)):
        y=int(y0+t*H); d.ellipse([x-25,y-25,x+25,y+25],outline=(255,0,0),width=6)
    s=500/c.size[1]; tiles.append(c.resize((int(c.size[0]*s),500)))
W=sum(t.size[0] for t in tiles)+10*len(tiles); sh=Image.new('RGB',(W,500),'white'); x=0
for t in tiles: sh.paste(t,(x,0)); x+=t.size[0]+10
sh.save('EX02_gun_vs_bbox_extremes.png'); json.dump(res,open('EX02_gun_vs_bbox_extremes.json','w'),indent=1); print(json.dumps(res,indent=1))
