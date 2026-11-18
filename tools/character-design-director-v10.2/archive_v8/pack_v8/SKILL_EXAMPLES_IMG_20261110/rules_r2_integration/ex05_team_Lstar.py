"""R2 integration check: EX05 everyday (char_img) vs thief (char_img2) mean CIE L* (D65, skimage rgb2lab) over alpha>20,
same definition as psychology R1 (thief art includes CODE NAME lettering -> disclosed confound). Read-only official copies."""
import json,hashlib
import numpy as np
from PIL import Image
from skimage.color import rgb2lab
R='/workspace/haruka/research/identity_canon/img_examples_20261110/raw_p5/'
out={}
for n in ['hero','ryuji','anne','yusuke','makoto','futaba','haru']:
    v={}
    for k,f in (('daily',f'{n}_char_img.png'),('thief',f'{n}_char_img2.png')):
        a=np.array(Image.open(R+f).convert('RGBA')); m=a[:,:,3]>20
        L=rgb2lab(a[:,:,:3][m][None].astype(float)/255)[0,:,0]; v[k]=round(float(L.mean()),2); v[k+'_md5']=hashlib.md5(open(R+f,'rb').read()).hexdigest()
    v['thief_minus_daily']=round(v['thief']-v['daily'],2); out[n]=v
json.dump(out,open('EX05_team_Lstar.json','w'),indent=1)
for n,v in out.items(): print(n,v['daily'],v['thief'],v['thief_minus_daily'])
