from pathlib import Path
import math,random,json,subprocess
from PIL import Image
p=Path('haruka_research_v04/visual_tests');out=p/'curve_frames';out.mkdir(exist_ok=True)
random.seed(42); stars=''.join(f'<circle cx="{random.randrange(720)}" cy="{random.randrange(240)}" r="{random.choice([.6,.8,1,1.6])}" fill="#c6d9eb"/>' for _ in range(165))
phi=math.radians(35)
def yz(y,q,k):
 if y<=.65 or abs(k)<1e-9:return y,q
 a=k*(y-.65)/.35
 return .65+.35*math.sin(a)/k,q+.35*(math.cos(a)-1)/k
def py(y,q,k):
 yy,z=yz(y,q,k);return 240-200*(yy*math.sin(phi)+z*math.cos(phi))
def panel(q,k,x,title):
 ymax=min(1,.65+.35*phi/k) if k>phi else 1
 top=py(ymax,q,k)
 s=f'<g transform="translate({x} 0)"><rect width="940" height="420" fill="#0c1421"/><g clip-path="url(#main)">{stars}<defs><clipPath id="skinclip{x}"><rect x="-20" y="{top}" width="760" height="{max(0,py(0,q,k)-top)}"/></clipPath></defs><g id="skin{x}" clip-path="url(#skinclip{x})"><rect x="-20" y="{top}" width="760" height="{max(0,py(0,q,k)-top)}" fill="#7b8185"/>'
 # Analytic visible branch: later returning curve is self-occluded, no alpha fade.
 for yy in [.35,.7]:
  if yy<=ymax:s+=f'<path d="M0 {py(yy,q,k)} H720" stroke="#414b52" stroke-width="3"/>'
 for xx in range(-50,751,100):s+=f'<path d="M{xx} {top} V{py(0,q,k)}" stroke="#414b52" stroke-width="3"/>'
 paths=[[(218,.25-.035),(229,.25-.01),(233,.25+.022),(226,.25+.03)],[(455,.82-.025),(470,.82-.005),(468,.82+.023),(461,.82+.02)]]
 for pts in paths:
  assert max(y for xx,y in pts)<.85416
  d='M'+' L'.join(f'{xx},{py(y,q,k):.6f}' for xx,y in pts)
  s+=f'<path d="{d}" fill="none" stroke="#d9d4b9" stroke-width="4"/>'
 s+='</g><rect x="0" y="240" width="720" height="180" fill="#434d54"/><path d="M0 241 H720" stroke="#b6bcc0" stroke-width="3"/><path d="M75 240 L91 278 L82 305 L105 347 M370 240 L356 291 L367 328 M0 340 H720" fill="none" stroke="#252f36" stroke-width="3"/></g>'
 points=' '.join(f'{820+100*yz(i/80,q,k)[0]:.4f},{145-100*yz(i/80,q,k)[1]:.4f}' for i in range(81))
 s+=f'<rect x="720" width="220" height="420" fill="#f3f4f6"/><g font-family="sans-serif" fill="#202936"><text x="735" y="30" font-size="17">{title}</text><text x="735" y="58" font-size="14">q={q:.3f}W</text><text x="735" y="82" font-size="14">k={math.degrees(k):.1f} deg; max {60 if x else 0}</text><path d="M739 145 H820" stroke="#465361" stroke-width="6"/><polyline points="{points}" stroke="#be784f" stroke-width="5" fill="none"/><path d="M820 113 V288" stroke="#7c8c9a" stroke-dasharray="4 4"/><text x="735" y="330" font-size="12">Same q, camera, stars</text><text x="735" y="353" font-size="12">Only curvature changes</text><text x="735" y="376" font-size="12">Self-occlusion modelled</text><text x="735" y="399" font-size="12">Not material validation</text></g></g>'
 return s
meta=[]
for i in range(37):
 t=i/30;u=min(1,max(0,(t-.2)/.8));q=-.82*u*u*(3-2*u);v=min(1,max(0,(t-.2)/.3));k=math.pi/3*v*v*(3-2*v)
 s='<svg xmlns="http://www.w3.org/2000/svg" width="1880" height="420" viewBox="0 0 1880 420"><defs><clipPath id="main"><rect width="720" height="420"/></clipPath></defs>'+panel(q,0,0,'RIGID BASELINE')+panel(q,k,940,'LOCAL INWARD BEND')+'</svg>'
 f=out/f'f{i:03}.svg';f.write_text(s);subprocess.run(['inkscape',str(f),'--export-type=png','--export-filename='+str(f.with_suffix('.png'))],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,check=True)
 meta.append({'frame':i,'t':t,'q':q,'k_radians':k,'visible_y_max':min(1,.65+.35*phi/k) if k>phi else 1})
ims=[Image.open(out/f'f{i:03}.png').convert('RGB') for i in range(37)];ims[0].save(p/'inward_curve_compare.gif',save_all=True,append_images=ims[1:],duration=[33]*36+[900],loop=0)
board=Image.new('RGB',(1880,1260),'white')
for j,i in enumerate([6,12,18]):board.paste(ims[i],(0,j*420))
board.save(p/'inward_curve_keyposes.png');(p/'inward_curve_spec.json').write_text(json.dumps({'equations':'yprime=.65+.35*sin(k*s)/k; z=q+.35*(cos(k*s)-1)/k, s=(y-.65)/.35, y>.65; else yprime=y,z=q','arc_length_preserved':True,'self_occlusion':'visible branch k*s<=35deg; tail behind nearer surface','source_samples':meta,'limits':'No material disappearance; only displacement plus local bend. GIF timing quantized.'},indent=2));print('rendered37 paired samples')
