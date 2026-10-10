"""Verify authored native geometry, GIF timing, input copies and boundary sampling.
No browser or external service required. JS runs in an explicit DOM stub: not browser verification.
"""
from pathlib import Path
from PIL import Image
import json,re,subprocess,hashlib
import numpy as np
P=Path(__file__).resolve().parent
r={}
im=Image.open(P/'timing_comparison.gif');ds=[]
for i in range(im.n_frames):im.seek(i);ds.append(im.info.get('duration',0))
r['gif']={'decoded_frames':im.n_frames,'duration_ms':sum(ds),'each_duration_ms':sorted(set(ds)),'loop':im.info.get('loop')}
html=(P/'timing_comparison.html').read_text();js=re.search(r'<script>(.*?)</script>',html,re.S)[1]
check_times=[0,.1,.2,.3,1/3,13/30,.4666666666666667,.6,.75,.9,1]
stub="""const fs=require('fs'),vm=require('vm');const nodes={};const context={performance:{now:()=>0},requestAnimationFrame:()=>{},window:{},document:{getElementById:id=>nodes[id]||(nodes[id]={setAttribute(k,v){this[k]=v;}})}};vm.createContext(context);vm.runInContext(SOURCE,context);const checks=TIMES.map(t=>{context.window.seekTime(t);return {t,nodes:JSON.parse(JSON.stringify(nodes))}});process.stdout.write(JSON.stringify(checks));""".replace('SOURCE',json.dumps(js)).replace('TIMES',json.dumps(check_times))
q=subprocess.run(['node','-e',stub],capture_output=True,text=True,check=True);checks=json.loads(q.stdout)
res=[]
for check in checks:
 t=check['t'];nodes=check['nodes'];name=f't_{t*1000000:010.3f}'.replace('.','p');svg=(P/'native_frames'/(name+'.svg')).read_text();diff=0.;literal=True
 for m in ['A','B']:
  for k in ['control','candidate']:
   sid=f'shape-{m}-{k}';d=nodes[sid]['d'];py=re.search(f'id="{sid}"[^>]* d="([^"]*)"',svg)[1]
   nums=lambda s:np.array(list(map(float,re.findall(r'-?\d+(?:\.\d+)?',s))))
   a,b=nums(d),nums(py)
   if a.shape!=b.shape:raise ValueError('JS/Python polygon station mismatch')
   if len(a):diff=max(diff,float(np.max(np.abs(a-b))))
   orig=re.search(' d="([^"]+)"',(P/'source_inputs'/f'round-{k}.svg').read_text())[1]
   if 1/3<=t<=13/30:literal=literal and d==orig and nodes[sid]['clip-path']=='none'
 res.append({'time_s':t,'js_python_max_coordinate_difference':diff,'literal_original_unclipped_match':literal if 1/3<=t<=13/30 else None,'blank':all(nodes[f'shape-{m}-{k}']['d']=='' for m in ['A','B'] for k in ['control','candidate'])})
r['native_js_geometry_stub_check']=res
r['browser_validation']={'status':'blocked_not_performed','observed_error':'Installed headless Chromium startup failed: process singleton socket() Operation not permitted. No bypass attempted.','limit':'DOM stub verifies the calculation only; it is not browser playback or 1x perception.'}
(P/'playback_verification.json').write_text(json.dumps(r,indent=2))
# Boundary-switch raster behaviour is recorded rather than silently called continuous.
name=lambda t:f't_{t*1000000:010.3f}'.replace('.','p');out=[]
for t in [1/3,13/30]:
 for sign in [-1,1]:
  im=np.asarray(Image.open(P/'rendered_frames'/(name(t+sign*1e-6)+'.png')).convert('RGBA'));peak=np.asarray(Image.open(P/'rendered_frames'/(name(t)+'.png')).convert('RGBA'))
  for m,k,x,y in [('A','control',40,142),('A','candidate',500,142),('B','control',40,502),('B','candidate',500,502)]:
   a=im[y:y+300,x:x+420,3];b=peak[y:y+300,x:x+420,3];diff=np.abs(a.astype(int)-b.astype(int))
   out.append(dict(boundary=t,sample=t+sign*1e-6,method=m,mother=k,max_alpha_difference=int(diff.max()),different_pixels=int((diff>0).sum()),area_difference_px=float((b.astype(int)-a.astype(int)).sum()/255),area_difference_pct=float((b.astype(int)-a.astype(int)).sum()/b.sum()*100)))
(P/'boundary_switch_checks.json').write_text(json.dumps(out,indent=2))
print(json.dumps(r,indent=2))
