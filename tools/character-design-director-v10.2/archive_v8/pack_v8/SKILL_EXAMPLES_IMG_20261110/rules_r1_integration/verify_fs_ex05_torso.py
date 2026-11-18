"""Independent re-implementation (integrator) of FS G11 torso-strip L*<40 share for P5 daily stands.
Definition (from FS vote §3): official alpha>=128, tight bbox, resize to H=800; rows t 0.20-0.42;
columns median x of mask in band ±0.06H; ∩ alpha; L* = OpenCV Lab L*100/255."""
import numpy as np, cv2, json
from PIL import Image
R='/workspace/haruka/research/identity_canon/img_examples_20261110/raw_p5/'
out={}
for who in ['hero','ryuji','anne','makoto','haru']:
    im=Image.open(R+f'{who}_char_img.png').convert('RGBA'); a=np.array(im)
    m=a[:,:,3]>=128; ys,xs=np.nonzero(m); a=a[ys.min():ys.max()+1, xs.min():xs.max()+1]
    H=800; W=int(round(a.shape[1]*H/a.shape[0]))
    a=np.array(Image.fromarray(a).resize((W,H),Image.LANCZOS)); m=a[:,:,3]>=128
    t0,t1=int(0.2*H),int(0.42*H); band=m[t0:t1]; cx=int(np.median(np.nonzero(band)[1])); h=int(0.06*H)
    roi=np.zeros_like(m); roi[t0:t1,max(0,cx-h):cx+h]=True; roi&=m
    L=cv2.cvtColor(np.ascontiguousarray(a[:,:,:3]),cv2.COLOR_RGB2LAB)[:,:,0].astype(float)*100/255
    out[who]=round(float((L[roi]<40).mean()),4)
print(out); json.dump(out,open('verify_fs_ex05_torso.json','w'))
