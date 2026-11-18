"""R2 integration check (c): EX14 with-sword vs v2 no-sword IoU under several alignment protocols (same pose).
Masks: official alpha>=128 tight bbox; tv_simplify v2 silhouette_game_nosword_v2.png white>=128 tight bbox (hand-polygon derived).
Both height-normalised to H=256 (NEAREST), bottoms aligned; IoU at horizontal offset dx (px at H=256).
P1a = search +-38 (15% H) around LEFT-edge origin (reproduces CV-type bounded result).
P1b = search +-38 around bbox-CENTRE origin (PM/integrator rerun protocol; PM reports best_dx relative to centre).
P2 = left edges aligned, no search. P3 = centres aligned, no search. P4 = unrestricted search (global optimum)."""
import json,hashlib
import numpy as np
from PIL import Image
O='/workspace/haruka/research/tv_simplify/img_examples_20261110/'
def tight(m):
    ys,xs=np.where(m); return m[ys.min():ys.max()+1,xs.min():xs.max()+1]
def norm(m,H=256):
    w=max(1,round(m.shape[1]*H/m.shape[0])); return np.array(Image.fromarray((m*255).astype(np.uint8)).resize((w,H),Image.NEAREST))>127
a=tight(np.array(Image.open(O+'official/game_pecorine_astrum_whole.png').convert('RGBA'))[:,:,3]>=128)
b=tight(np.array(Image.open(O+'analysis_v2/silhouette_game_nosword_v2.png').convert('L'))>=128)
A,B=norm(a),norm(b)
def iou(dx):
    W=A.shape[1]+B.shape[1]+200; ca=np.zeros((256,W),bool); cb=ca.copy(); o=100
    ca[:,o:o+A.shape[1]]=A
    s=o+dx
    if s<0: return 0
    cb[:,s:s+B.shape[1]]=B; return (ca&cb).sum()/(ca|cb).sum()
def best(rng):
    v=[(iou(d),d) for d in rng]; return max(v)
res={'A_w':A.shape[1],'B_w':B.shape[1],
 'P1a_leftorigin_pm38':best(range(-38,39)),
 'P1b_centreorigin_pm38':best(range((A.shape[1]-B.shape[1])//2-38,(A.shape[1]-B.shape[1])//2+39)),
 'P2_left_aligned':(iou(0),0),
 'P3_centre_aligned':(iou((A.shape[1]-B.shape[1])//2),(A.shape[1]-B.shape[1])//2),
 'P4_unrestricted':best(range(-B.shape[1],A.shape[1]))}
res={k:([round(float(v[0]),4),int(v[1])] if isinstance(v,tuple) else v) for k,v in res.items()}
res['inputs_md5']={p:hashlib.md5(open(O+p,'rb').read()).hexdigest() for p in ['official/game_pecorine_astrum_whole.png','analysis_v2/silhouette_game_nosword_v2.png']}
json.dump(res,open('EX14_iou_protocols.json','w'),indent=1); print(json.dumps(res,indent=1))
