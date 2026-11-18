"""R2 integration check (a): EX14 — does the sword enter a HEAD-ANCHORED head box?
Inputs (read-only): official game_pecorine_astrum_whole.png; tv_simplify v2 QA overlay (magenta = sword polygon, same
pixel grid as official tight bbox alpha>=128: offset (311,268), size 1342x1803).
Sword mask: overlay R>200 & B>200 & G<80 & A>8 (same rule as silhouette_cast R2).
Head landmarks (integrator, hand-read on a 100 px grid of the official canvas, tolerance ~±20 px):
 head top = bbox top (ahoge, y=268; hair layer counts as head); head centre x = 1160 (face centre between eyes; first read 1040 was wrong, corrected after QC overlay).
Boxes: side s = k*H (H = tight bbox height 1803), k in 0.22/0.25/0.28; top = head top.
 HEAD-anchored: x centre = head centre. NAIVE-A: x centre = bbox centre (MW). NAIVE-B: x centre = alpha centroid of top 0.25H band (FS)."""
import json,hashlib
import numpy as np
from PIL import Image,ImageDraw
O='/workspace/haruka/research/tv_simplify/img_examples_20261110/'
off=Image.open(O+'official/game_pecorine_astrum_whole.png').convert('RGBA')
ov=np.array(Image.open(O+'analysis_v2/qa_game_sword_overlay_v2.png').convert('RGBA')).astype(int)
A=np.array(off)[:,:,3]; ys,xs=np.where(A>=128); x0,y0,x1,y1=xs.min(),ys.min(),xs.max(),ys.max(); H=y1-y0+1
sw=np.zeros(A.shape,bool)
m=(ov[:,:,0]>200)&(ov[:,:,2]>200)&(ov[:,:,1]<80)&(ov[:,:,3]>8)
sw[y0:y0+m.shape[0],x0:x0+m.shape[1]]=m
HEAD_TOP,HEAD_CX=268,1160
band=A[y0:y0+int(0.25*H)]>=128; cxB=int(np.where(band)[1].mean())
res={'inputs':{p:hashlib.md5(open(O+p,'rb').read()).hexdigest() for p in ['official/game_pecorine_astrum_whole.png','analysis_v2/qa_game_sword_overlay_v2.png']},
     'bbox':[int(x0),int(y0),int(x1),int(y1)],'H':int(H),'sword_px_total':int(sw.sum()),'naiveB_cx':cxB,'boxes':{}}
for k in (0.22,0.25,0.28):
    s=int(k*H)
    for name,cx in (('head',HEAD_CX),('naiveA_bboxcentre',int((x0+x1)/2)),('naiveB_topband',cxB)):
        bx=[cx-s//2,HEAD_TOP,cx+s//2,HEAD_TOP+s]
        res['boxes'][f'{name}_{k}']={'box':bx,'sword_px':int(sw[bx[1]:bx[3],bx[0]:bx[2]].sum()),
            'sword_min_x_in_rows':None}
# nearest sword pixel to head box (k=0.25) horizontally
s=int(0.25*H); bx=res['boxes']['head_0.25']['box']; rows=sw[bx[1]:bx[3]]
cols=np.where(rows.any(0))[0]; res['sword_max_x_within_headbox_rows']=int(cols.max()); res['gap_px_to_headbox_left']=int(bx[0]-cols.max())
json.dump(res,open('EX14_sword_headbox.json','w'),indent=1)
bg=Image.new('RGBA',off.size,(235,235,235,255)); bg.alpha_composite(off); bg=bg.convert('RGB')
over=np.array(bg); over[sw]=(over[sw]*0.4+np.array([255,0,255])*0.6).astype(np.uint8); bg=Image.fromarray(over); d=ImageDraw.Draw(bg)
for name,col in (('head_0.25',(0,170,0)),('naiveA_bboxcentre_0.25',(255,0,0)),('naiveB_topband_0.25',(0,90,255))):
    d.rectangle(res['boxes'][name]['box'],outline=col,width=8)
bg.crop((200,150,1750,1150)).resize((930,600)).save('EX14_sword_vs_headbox.png')
print(json.dumps(res,indent=1))
