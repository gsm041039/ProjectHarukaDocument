from pathlib import Path
import subprocess,json
import numpy as np
from PIL import Image
from scipy import ndimage
P=Path(__file__).resolve().parent
result={'method':'Inkscape rendering of individual transparent native SVG masters at 1120x800 (80 px per unit), threshold alpha>=128. 8-connected black and 4-connected white. These are raster-sampled construction checks, not analytic proof, production validation, or final pixel thresholds.','rows':{}}
for row in ['round','thin','hard']:
    center=json.loads((P/f'{row}-centerline.json').read_text())
    info={'shared_centerline_file':f'{row}-centerline.json','A':center['A'],'B':center['B'],'same_direction':'A to B','same_centerline_for_both':True,'shapes':{}}
    for role in ['control','candidate']:
        name=f'{row}-{role}'
        subprocess.run(['inkscape',str(P/f'{name}.svg'),'--export-type=png','--export-filename='+str(P/f'{name}-check.png')],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
        a=np.array(Image.open(P/f'{name}-check.png').convert('RGBA'))[:,:,3]
        black=a>=128
        lab,n=ndimage.label(black,structure=np.ones((3,3)))
        sizes=np.bincount(lab.ravel())[1:]
        wh,nw=ndimage.label(~black,structure=ndimage.generate_binary_structure(2,1))
        exterior=set(np.r_[wh[0],wh[-1],wh[:,0],wh[:,-1]].tolist())
        probe=[6,4];px,py=int(6*80),int((4+1)*80)
        closed_white=[k for k in range(1,nw+1) if k not in exterior]
        path_clear=bool(np.all(~black[py,px:]))
        # Exclude zero-width terminal neighborhoods from interior axis testing.
        pts=np.array(center['points']);s=np.array(center['s']);pts=pts[(s>.04)&(s<.94)]
        xs=np.rint(pts[:,0]*80).astype(int);ys=np.rint((pts[:,1]+1)*80).astype(int)
        interior=bool(np.all(black[ys,xs]))
        info['shapes'][role]={'black_component_count':int(n),'black_component_pixels':sizes.tolist(),'closed_white_regions':len(closed_white),'cavity_probe':[6,4],'cavity_reaches_exterior':int(wh[py,px]) in exterior,'straight_rightward_cavity_corridor_clear':path_clear,'interior_centerline_samples_inside_black':interior,'pass':bool(n==1 and not closed_white and int(wh[py,px]) in exterior and path_clear and interior)}
    result['rows'][row]=info
result['all_pass']=all(v['pass'] for r in result['rows'].values() for v in r['shapes'].values())
(P/'motion_dialects_construction_checks.json').write_text(json.dumps(result,indent=2))
print(json.dumps(result,indent=2))
