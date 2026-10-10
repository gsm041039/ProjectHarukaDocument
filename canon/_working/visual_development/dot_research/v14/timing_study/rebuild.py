#!/usr/bin/env python3
"""Native-vector research artifact. Rebuild with existing Python, NumPy, SciPy, Pillow and Inkscape.
No external downloads. Inputs are copied, unchanged v05 sources. No generated raster art.
"""
from pathlib import Path
import json, hashlib, math, re, subprocess, concurrent.futures, csv, html, os
import numpy as np
from scipy.interpolate import PchipInterpolator
from scipy.ndimage import label
from PIL import Image, ImageDraw, ImageFont

OUT=Path(__file__).resolve().parent
INPUT=OUT/'source_inputs'; NF=OUT/'native_frames'; RF=OUT/'rendered_frames'
for p in [NF,RF]: p.mkdir(exist_ok=True)
T1=1/3; T2=13/30; T3=.9; DELTA=.04
C=json.loads((INPUT/'round-centerline.json').read_text()); P=json.loads((INPUT/'motion_dialects_parameters.json').read_text())
S=np.array(C['s']); XY=np.array(C['points']); NN=np.array(C['normals'])
WST=P['width_station_s']; RO=PchipInterpolator(WST,P['round']['outer_half_width']); RI=PchipInterpolator(WST,P['round']['inner_half_width'])
MOTHERS={k:re.search(r' d="([^"]+)"',(INPUT/f'round-{k}.svg').read_text())[1] for k in ['control','candidate']}
CELLS=[('A','control',40,142),('A','candidate',500,142),('B','control',40,502),('B','candidate',500,502)]
BW,BH=960,866

def E(x):
 x=np.clip(x,0,1);return x*x*(3-2*x)
def gate(s,t,method):
 s=np.asarray(s)
 if t<=0 or t>=T3: return np.zeros_like(s)
 if T1<=t<=T2:return np.ones_like(s)
 if method=='A':
  h=(1+DELTA)*t/T1 if t<T1 else 1+DELTA
  r=-DELTA if t<T1 else -DELTA+(1+DELTA)*(t-T2)/(T3-T2)
  return E((h-s)/DELTA)*E((s-r)/DELTA)
 if t<T1:return E((t-s/5)/(2/15))
 return 1-E((t-(T2+3*s/20))/(19/60))
def support(t,method):
 if t<=0 or t>=T3:return None
 if T1<=t<=T2:return 0.,1.
 if t<T1:return 0.,min(1., (1.04*t/T1) if method=='A' else 5*t)
 return max(0.,(-.04+1.04*(t-T2)/(T3-T2)) if method=='A' else (t-T2-19/60)/.15),1.
def points(t,method,kind):
 bound=support(t,method)
 if bound is None:return np.empty((0,2))
 lo,hi=bound
 if hi-lo<1e-14:return np.empty((0,2))
 # Retain source stations. Add only the zero-width support boundary if it lies between stations.
 ss=np.unique(np.r_[lo,S[(S>lo)&(S<hi)],hi])
 p=np.column_stack([np.interp(ss,S,XY[:,i]) for i in range(2)])
 n=np.column_stack([np.interp(ss,S,NN[:,i]) for i in range(2)])
 n/=np.linalg.norm(n,axis=1)[:,None]
 if kind=='candidate':outer,inner=RO(ss),RI(ss)
 else:outer=inner=.62*np.minimum(1,np.minimum(ss/.035,(1-ss)/.05))
 q=gate(ss,t,method)
 # Boundary evaluations may carry 1e-16 residue: exact support endpoints have no area.
 if lo>0:q[0]=0
 if hi<1:q[-1]=0
 up=p+n*(outer*q)[:,None];low=p-n*(inner*q)[:,None]
 v=np.vstack([up,low[::-1]])
 return v

def dpath(v):return '' if not len(v) else 'M '+' L '.join(f'{x:.5f},{y:.5f}' for x,y in v)+' Z'
def path(t,method,kind):
 if t<=0 or t>=T3:return ''
 if T1<=t<=T2:return MOTHERS[kind]
 return dpath(points(t,method,kind))
def esc(s):return html.escape(str(s),quote=True)
def text(x,y,s,size=18,weight=400):return f'<text x="{x}" y="{y}" font-size="{size}" font-weight="{weight}">{esc(s)}</text>'
def defs():return '<defs>'+''.join(f'<clipPath id="mother-{k}"><path d="{d}"/></clipPath>' for k,d in MOTHERS.items())+'</defs>'
def glyph(t,m,k,x,y,w=420):
 d=path(t,m,k);h=w*10/14
 clip='' if T1<=t<=T2 else f' clip-path="url(#mother-{k})"'
 return f'<svg x="{x}" y="{y}" width="{w}" height="{h}" viewBox="0 -1 14 10" overflow="hidden"><path id="shape-{m}-{k}" fill="black"{clip} d="{d}"/></svg>'
def board(t):
 phase='FORMATION' if t<T1 else 'LITERAL MAXIMUM' if t<=T2 else 'DECAY' if t<T3 else 'BLANK'
 a=[f'<svg xmlns="http://www.w3.org/2000/svg" width="{BW}" height="{BH}" viewBox="0 0 {BW} {BH}">',defs(),'<g fill="black" font-family="DejaVu Sans, sans-serif">',text(28,34,'ONE MOTHER / TWO TIME ENVELOPES',27,700),text(28,63,'UNASSIGNED 2D RESEARCH  |  Fixed 1.000 s loop  |  Four cells only',15),text(40,99,'CARRIER CONTROL',18,700),text(500,99,'CANDIDATE PRESSURE',18,700),text(40,131,'A  Narrow reveal / trailing clear',17,700),text(40,491,'B  Distributed lagged thickness',17,700)]
 a +=[glyph(t,m,k,x,y) for m,k,x,y in CELLS]
 a +=[text(28,836,f'{t*1000:07.3f} ms  |  {phase}  |  420 px local viewports; no runtime gate',15),text(28,859,'Native black geometry; no glow, opacity fade, shape edit, character or hit timing.',13),'</g></svg>']
 return '\n'.join(a)
def render(args):
 src,dst=args
 if dst.exists() and dst.stat().st_mtime>=src.stat().st_mtime:return
 env=os.environ.copy();env['INKSCAPE_PROFILE_DIR']='/tmp/haruka-inkscape-profile';env['XDG_CACHE_HOME']='/tmp/haruka-cache'
 r=subprocess.run(['inkscape',str(src),'--export-type=png','--export-filename='+str(dst)],capture_output=True,env=env)
 if r.returncode:raise RuntimeError(r.stderr.decode())

# Fifty 20 ms frames give an actual 1.000 s GIF. Exact functions remain in HTML.
# Separate 60 Hz and critical-time samples are used for checking, not falsely called GIF timing.
gif_times=[i/50 for i in range(50)]
check_times=[i/60 for i in range(61)]
critical=[0,T1-1e-6,T1,T1+1e-6,T2-1e-6,T2,T2+1e-6,T3-1e-6,T3,T3+1e-6,1,
 T2+(.07)*((T3-T2)/1.04),T2+(.07+.04)*((T3-T2)/1.04),.07/5+2/15,T2+3*.07/20,T2+3*.07/20+19/120,T2+3*.07/20+19/60]
key_times=[.1,.2,.3,11/30,7/15,.6,.75,.9]
times=sorted(set(gif_times+check_times+critical+key_times))
name=lambda t: f't_{t*1000000:010.3f}'.replace('.','p')
paths={t:(NF/(name(t)+'.svg'),RF/(name(t)+'.png')) for t in times}
# Remove obsolete outputs from earlier builds of this same authored artifact only.
expected={name(t) for t in times}
for folder,suffix in [(NF,'.svg'),(RF,'.png')]:
 for old in folder.glob('t_*'+suffix):
  if old.stem not in expected:old.unlink()
for t,(src,dst) in paths.items():src.write_text(board(t))
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:list(pool.map(render,paths.values()))
print(f'Rendered {len(times)} native SVG frames',flush=True)

# Encode directly from our own native renders. Palette conversion is format encoding, no art editing.
frames=[]
for t in gif_times:
 im=Image.open(paths[t][1]).convert('RGBA');bg=Image.new('RGBA',im.size,'white');bg.alpha_composite(im)
 frames.append(bg.convert('RGB').quantize(colors=256,method=Image.Quantize.MEDIANCUT,dither=Image.Dither.NONE))
frames[0].save(OUT/'timing_comparison.gif',save_all=True,append_images=frames[1:],duration=[20]*50,loop=0,disposal=2,optimize=False)

# Exact original alpha references at the same viewport.
refs={}
for k in MOTHERS:
 src=INPUT/f'round-{k}.svg';dst=OUT/f'reference_{k}_420.png'
 env=os.environ.copy();env['INKSCAPE_PROFILE_DIR']='/tmp/haruka-inkscape-profile';env['XDG_CACHE_HOME']='/tmp/haruka-cache'
 subprocess.run(['inkscape',str(src),'-w','420','-h','300','-o',str(dst)],check=True,capture_output=True,env=env)
 refs[k]=np.asarray(Image.open(dst).convert('RGBA'))[:,:,3]

def topology(a):
 black=a>=128;labels,n=label(black,np.ones((3,3),dtype=int));sizes=np.bincount(labels.ravel())[1:]
 white=~black;wl,wn=label(white,np.array([[0,1,0],[1,1,1],[0,1,0]]));border=set(np.r_[wl[0,:],wl[-1,:],wl[:,0],wl[:,-1]].tolist());holes=[j for j in range(1,wn+1) if j not in border]
 probe=int(wl[150,180]); corridor=bool(probe and probe in border)
 return n,sorted(map(int,sizes),reverse=True),len(holes),corridor

def strict_crossings(v):
 # Sampled polygon proper crossings only. Collinear overlap/tangencies are not classified as crossings.
 if len(v)<4:return 0
 v=v[np.r_[True,np.linalg.norm(np.diff(v,axis=0),axis=1)>1e-9]]
 if len(v)>1 and np.linalg.norm(v[0]-v[-1])<1e-9:v=v[:-1]
 if len(v)<4:return 0
 a=v;b=np.roll(v,-1,axis=0);d=b-a
 cross=lambda u,w:u[...,0]*w[...,1]-u[...,1]*w[...,0]
 o1=cross(d[:,None,:],a[None,:,:]-a[:,None,:]);o2=cross(d[:,None,:],b[None,:,:]-a[:,None,:])
 o3=cross(d[None,:,:],a[:,None,:]-a[None,:,:]);o4=cross(d[None,:,:],b[:,None,:]-a[None,:,:])
 c=(o1*o2 < -1e-16)&(o3*o4 < -1e-16);return int(np.triu(c,1).sum())

rows=[]
for t in sorted(set(check_times+critical)):
 im=np.asarray(Image.open(paths[t][1]).convert('RGBA'))
 for m,k,x,y in CELLS:
  a=im[y:y+300,x:x+420,3];ref=refs[k]
  n,sizes,holes,corridor=topology(a)
  row=dict(time_s=t,frame_60=t*60,method=m,mother=k,alpha_area_px=float(a.sum()/255),normalised_area=float(a.sum()/ref.sum()),black_components_8conn=n,component_sizes_px=sizes,closed_white_holes_4conn=holes,cavity_probe_connected_to_border=corridor,outside_reference_zero_alpha_pixels=int(((a>0)&(ref==0)).sum()),max_alpha_excess=int(np.maximum(a.astype(int)-ref.astype(int),0).max()),peak_max_alpha_difference=int(np.abs(a.astype(int)-ref.astype(int)).max()) if T1<=t<=T2 else None,raw_polygon_proper_crossings=strict_crossings(points(t,m,k)),empty=bool(a.max()==0))
  rows.append(row)
(OUT/'sampled_checks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2))
with (OUT/'area_time_samples.csv').open('w') as f:
 writer=csv.DictWriter(f,fieldnames=['time_s','frame_60','method','mother','alpha_area_px','normalised_area']);writer.writeheader();writer.writerows({k:r[k] for k in writer.fieldnames} for r in rows)
summary={}
for m,k,_,_ in CELLS:
 rr=[r for r in rows if r['method']==m and r['mother']==k];rr60=[r for r in rr if any(abs(r['time_s']-t)<1e-12 for t in check_times)]
 t=np.array([r['time_s'] for r in rr60]);ar=np.array([r['alpha_area_px'] for r in rr60]);na=np.array([r['normalised_area'] for r in rr60])
 summary[f'{m}_{k}']={'area_time_px_seconds_60hz_trapezoid':float(np.trapezoid(ar,t)),'normalised_area_time_seconds_60hz_trapezoid':float(np.trapezoid(na,t)),'max_outside_reference_zero_alpha_pixels':max(r['outside_reference_zero_alpha_pixels'] for r in rr),'max_alpha_excess':max(r['max_alpha_excess'] for r in rr),'peak_max_alpha_difference':max(r['peak_max_alpha_difference'] or 0 for r in rr),'max_components':max(r['black_components_8conn'] for r in rr),'max_holes':max(r['closed_white_holes_4conn'] for r in rr),'all_probe_open':all(r['cavity_probe_connected_to_border'] for r in rr),'max_proper_crossings':max(r['raw_polygon_proper_crossings'] for r in rr),'blank_required_pass':all(r['empty'] for r in rr if r['time_s']==0 or r['time_s']>=T3),'component_anomalies':[{kk:r[kk] for kk in ['time_s','black_components_8conn','component_sizes_px']} for r in rr if r['black_components_8conn']>1]}
(OUT/'checks_summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2))
print(json.dumps(summary,indent=2),flush=True)

# An editable native keyframe sheet, four variants only; columns repeat those variants in time.
W,H=1540,640
sheet=[f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}">',defs(),'<rect width="100%" height="100%" fill="white"/><g fill="black" font-family="DejaVu Sans, sans-serif">',text(25,32,'NATIVE KEYFRAMES / SAME FOUR CELLS',24,700),text(25,57,'Frozen samples are diagnostic only. They do not establish real-time recognition.',15)]
for i,t in enumerate(key_times):sheet.append(text(180+i*167,91,f'{t*1000:.1f} ms',15,700))
for j,(m,k,_,_) in enumerate(CELLS):
 y=112+j*124;sheet +=[text(20,y+48,m+' / '+k,16,700)];sheet +=[glyph(t,m,k,180+i*167,y,154) for i,t in enumerate(key_times)]
sheet +=[text(25,629,'All maxima use literal v05 paths. End-stage fragments may lose identity. Research only; no hit/material claim.',15),'</g></svg>']
(OUT/'keyframes.svg').write_text('\n'.join(sheet));render((OUT/'keyframes.svg',OUT/'keyframes.png'))

# Area-time plot records the confound; it does not equalize black exposure.
a=[f'<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="660">','<rect width="100%" height="100%" fill="white"/><g font-family="DejaVu Sans, sans-serif" fill="black">',text(35,35,'VISIBLE AREA / OWN ORIGINAL MAXIMUM',25,700),text(35,63,'60 Hz samples; trapezoidal area-time estimates. More ink-time is a confound, not success.',15)]
x0,y0,pw,ph=80,105,860,360
for u in [0,.25,.5,.75,1]:
 y=y0+ph*(1-u);a+=[f'<path d="M{x0} {y} H{x0+pw}" fill="none" stroke="#ddd"/>',text(28,y+5,f'{u:.2f}',14)]
for u in [0,T1,T2,T3,1]:
 x=x0+pw*u;a+=[f'<path d="M{x} {y0} V{y0+ph}" stroke="#ddd"/>',text(x-20,y0+ph+27,f'{u*1000:.0f}',13)]
styles=[('A','control','#888','7 4'),('A','candidate','#000','7 4'),('B','control','#888',None),('B','candidate','#000',None)]
for i,(m,k,color,dash) in enumerate(styles):
 rr=[r for r in rows if r['method']==m and r['mother']==k and any(abs(r['time_s']-t)<1e-12 for t in check_times)]
 pts=' '.join(f'{x0+pw*r["time_s"]:.3f},{y0+ph*(1-r["normalised_area"]):.3f}' for r in rr)
 ds=f' stroke-dasharray="{dash}"' if dash else '';a.append(f'<polyline points="{pts}" fill="none" stroke="{color}" stroke-width="2.5"{ds}/>')
 v=summary[f'{m}_{k}']['normalised_area_time_seconds_60hz_trapezoid'];a.append(text(70+(i%2)*475,545+(i//2)*34,f'{m} / {k}: integral {v:.6f} s',17))
a +=[text(75,635,'Candidate and control are not equal-area. Each curve is normalised by its own literal maximum.',15),'</g></svg>']
(OUT/'area_time.svg').write_text('\n'.join(a));render((OUT/'area_time.svg',OUT/'area_time.png'))

# Export a small local-scale freeze sheet; this is not a game/TV threshold test.
a=['<svg xmlns="http://www.w3.org/2000/svg" width="760" height="710">',defs(),'<rect width="100%" height="100%" fill="white"/><g fill="black" font-family="DejaVu Sans, sans-serif">',text(25,30,'LOCAL 128 / 64 PX FREEZES',24,700),text(25,58,'Candidate only; both methods. No global readability gate.',15)]
for c,t in enumerate([.3,11/30,.6]):
 x=100+c*215;a.append(text(x,91,f'{t*1000:.1f} ms',16,700))
 for j,m in enumerate(['A','B']):
  y=115+j*270;a +=[text(25,y+20,m,19,700),glyph(t,m,'candidate',x,y,128),text(x,y+115,'128 px',13),glyph(t,m,'candidate',x,y+139,64),text(x,y+207,'64 px',13)]
a +=[text(25,692,'Frozen local examples only; terminal aliasing is recorded separately.',15),'</g></svg>']
(OUT/'local_scales.svg').write_text('\n'.join(a));render((OUT/'local_scales.svg',OUT/'local_scales.png'))

# Self-contained native-vector playback: requestAnimationFrame evaluates the agreed functions.
# This is a standalone research artifact, with no server, app framework, external assets or deployment.
data={'s':S.tolist(),'xy':XY.tolist(),'nn':NN.tolist(),'width_stations':WST,'ro_coeff':RO.c.tolist(),'ri_coeff':RI.c.tolist(),'mother':MOTHERS}
base=board(0)
js=r'''
const DATA=__DATA__;const T1=1/3,T2=13/30,T3=.9;
const E=x=>{x=Math.max(0,Math.min(1,x));return x*x*(3-2*x)};
function width(s,co){let i=0;while(i<DATA.width_stations.length-2&&s>=DATA.width_stations[i+1])i++;let x=s-DATA.width_stations[i];return ((co[0][i]*x+co[1][i])*x+co[2][i])*x+co[3][i]}
function interp(s,arr){let i=0;while(i<DATA.s.length-2&&s>DATA.s[i+1])i++;let z=(s-DATA.s[i])/(DATA.s[i+1]-DATA.s[i]);return [arr[i][0]*(1-z)+arr[i+1][0]*z,arr[i][1]*(1-z)+arr[i+1][1]*z]}
function q(s,t,m){if(t<=0||t>=T3)return 0;if(t>=T1&&t<=T2)return 1;if(m==='A'){let h=t<T1?1.04*t/T1:1.04,r=t<T1?-.04:-.04+1.04*(t-T2)/(T3-T2);return E((h-s)/.04)*E((s-r)/.04)}return t<T1?E((t-s/5)/(2/15)):1-E((t-(T2+3*s/20))/(19/60))}
function path(t,m,k){if(t<=0||t>=T3)return '';if(t>=T1&&t<=T2)return DATA.mother[k];let lo=0,hi=1;if(t<T1)hi=Math.min(1,m==='A'?1.04*t/T1:5*t);else lo=Math.max(0,m==='A'?-.04+1.04*(t-T2)/(T3-T2):(t-T2-19/60)/.15);if(hi-lo<1e-14)return '';let ss=[lo,...DATA.s.filter(s=>s>lo&&s<hi),hi],a=[],b=[];for(let s of ss){let p=interp(s,DATA.xy),n=interp(s,DATA.nn),len=Math.hypot(...n);n=n.map(x=>x/len);let z=((lo>0&&s===lo)||(hi<1&&s===hi))?0:q(s,t,m),o,i;if(k==='candidate'){o=width(s,DATA.ro_coeff);i=width(s,DATA.ri_coeff)}else o=i=.62*Math.min(1,s/.035,(1-s)/.05);a.push([p[0]+n[0]*o*z,p[1]+n[1]*o*z]);b.push([p[0]-n[0]*i*z,p[1]-n[1]*i*z])}return 'M '+a.concat(b.reverse()).map(p=>p.map(v=>v.toFixed(5)).join(',')).join(' L ')+' Z'}
let playing=true,epoch=performance.now(),last=0;
function show(t){last=t;for(let m of ['A','B'])for(let k of ['control','candidate']){let node=document.getElementById('shape-'+m+'-'+k);node.setAttribute('d',path(t,m,k));node.setAttribute('clip-path',(t>=T1&&t<=T2)?'none':'url(#mother-'+k+')');}document.getElementById('time').value=(t*1000).toFixed(3);document.getElementById('stamp').textContent=(t*1000).toFixed(3)+' ms';}
function tick(now){if(playing)show(((now-epoch)/1000)%1);requestAnimationFrame(tick)}
document.getElementById('play').onclick=()=>{playing=!playing;if(playing)epoch=performance.now()-last*1000;document.getElementById('play').textContent=playing?'Pause':'Play'};
document.getElementById('time').oninput=e=>{playing=false;document.getElementById('play').textContent='Play';show(Number(e.target.value)/1000)};
window.seekTime=t=>{playing=false;show(t)};window.getNativePath=path;requestAnimationFrame(tick);
'''.replace('__DATA__',json.dumps(data,separators=(',',':')))
# Dynamic timing is in the explicit control line. Remove the static footer's initial phase claim.
base=base.replace('000.000 ms  |  FORMATION  |  ','').replace('0000.000 ms  |  FORMATION  |  ','')
(OUT/'timing_comparison.html').write_text('<!doctype html><html lang="en"><meta charset="utf-8"><title>Native timing comparison</title><style>body{margin:16px;font:16px sans-serif;background:white;color:black}svg{display:block;max-width:960px;width:100%;height:auto}button,input{font:inherit}p{max-width:960px}input{width:380px}</style><p><button id="play">Pause</button> <input id="time" type="range" min="0" max="1000" step="0.001" value="0"> <span id="stamp">0 ms</span></p>'+base+'<p>Exact native functions: formation 0–1/3 s; literal maximum 1/3–13/30 s; decay to 0.9 s; blank to 1.0 s. Display refresh is browser-dependent. GIF is a separate 20 ms sampled encoding.</p><script>'+js+'</script></html>')

manifest={'status':'RESEARCH_ONLY / UNASSIGNED','input_sha256':{p.name:hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(INPUT.iterdir())},'timing_seconds':{'duration':1,'T1':'1/3','T2':'13/30','T3':'9/10'},'sample_counts':{'native_frame_times':len(times),'check_60hz_times':61,'critical_times_including_duplicates':len(critical)},'gif':{'encoded_frames':50,'frame_duration_ms':20,'loop_duration_ms':1000,'sampling':'left endpoint at t=n/50 s; held 20 ms','literal_branch_display_window_ms':[340,440],'limitation':'GIF is sampled/held at 20 ms. Native 333.333–433.333 ms exact maximum appears as sampled literal branch 340–440 ms; no claim of exact subframe GIF landmark timing.'},'geometry':'Original source stations retained; moving zero-width support boundary inserted by linear interpolation of centerline and normalized interpolated normal; pressure at insertion uses unchanged PCHIP (control uses original ramp). Native polygon coordinates rounded to 5 decimals as v05; all transitions clipped to literal mother. Original 0 -1 14 10 viewport retained, including inherited candidate left-edge clipping.','checks':'61 times at 60 Hz plus critical times; alpha coverage and topology at 420 px. Threshold >=128, black 8-connected, white 4-connected. Proper polygon crossings only, not tangencies/collinear overlap. Sampling is not continuous-time proof.','review_limit':'GIF duration/decode and render frames can be verified. No human normal-speed/blind perceptual test is claimed.'}
(OUT/'manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2))
print('Outputs ready in '+str(OUT),flush=True)
