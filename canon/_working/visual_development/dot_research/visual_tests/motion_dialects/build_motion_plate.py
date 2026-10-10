from pathlib import Path
import json, math, subprocess
import numpy as np
from scipy.interpolate import PchipInterpolator

OUT=Path(__file__).resolve().parent
W,H=1960,1530

def bez(p,n=90):
    p=np.array(p,float); t=np.linspace(0,1,n)[:,None]
    q=(1-t)**3*p[0]+3*(1-t)**2*t*p[1]+3*(1-t)*t*t*p[2]+t**3*p[3]
    d=3*(1-t)**2*(p[1]-p[0])+6*(1-t)*t*(p[2]-p[1])+3*t*t*(p[3]-p[2])
    return q,d

def combine(parts):
    pts=[]; ds=[]
    for i,(p,d) in enumerate(parts):
        pts.extend(p if i==0 else p[1:]); ds.extend(d if i==0 else d[1:])
    p=np.array(pts);d=np.array(ds); d=d/np.linalg.norm(d,axis=1)[:,None]
    s=np.r_[0,np.cumsum(np.linalg.norm(np.diff(p,axis=0),axis=1))];s/=s[-1]
    return p,d,s
round_parts=[bez([(12,1),(8.5,.6),(5.1,.6),(2.4,1.8)]),bez([(2.4,1.8),(.4,2.7),(.45,5.25),(2.5,6.5)]),bez([(2.5,6.5),(3.4,7.1),(6.2,7.1),(8,7)])]
rp,rd,rs=combine(round_parts)
# Same curve compressed to an intentionally demanding, very narrow local sample.
tp=rp.copy();tp[:,1]=4+(tp[:,1]-4)*.18
td=rd.copy();td[:,1]*=.18;td/=np.linalg.norm(td,axis=1)[:,None]
ts=np.r_[0,np.cumsum(np.linalg.norm(np.diff(tp,axis=0),axis=1))];ts/=ts[-1]
# Exactly one angular centerline junction; later changes are continuous curves.
hard_parts=[bez([(12,1),(9.667,1),(7.333,1),(5,1)],60),bez([(5,1),(3.833,2.167),(2.667,3.333),(1.5,4.5)],45),bez([(1.5,4.5),(.7,5.3),(1.05,6.1),(2.5,6.5)],50),bez([(2.5,6.5),(4,6.9),(6,7),(8,7)],70)]
hp,hd,hs=combine(hard_parts)
# A tangent-bisector normal at the sole hard join provides a clean miter.
j=np.argmin(np.linalg.norm(hp-[5,1],axis=1)); hd[j]=np.array([-math.cos(math.pi/8),math.sin(math.pi/8)])
S=[0,.025,.07,.13,.23,.46,.63,.82,.95,1]
RO=[0,.55,.9,.95,.85,1.12,1.02,.86,.36,0]
RI=[0,.68,2.35,.78,.68,.85,.88,.64,.32,0]
TO=[0,.08,.12,.105,.09,.155,.12,.07,.035,0]
TI=[0,.08,.42,.10,.075,.125,.105,.065,.035,0]
HO=[0,.95,1.25,1.2,1.2,1.32,1.15,1.02,.48,0]
HI=[0,.65,2.25,.92,.88,1.05,.92,.82,.40,0]

# Offset ribbon: one ordered centerline, two pressure boundaries, no extra islands.
def ribbon(p,d,s,left,right,hard=False):
    if hard:
        a=np.interp(s,S,left);b=np.interp(s,S,right)
    else:
        a=PchipInterpolator(S,left)(s);b=PchipInterpolator(S,right)(s)
    n=np.column_stack([-d[:,1],d[:,0]])
    if hard:
        n[j]/=math.cos(math.pi/8)
    upper=p+n*a[:,None]; lower=p-n*b[:,None]
    if hard:
        keep=(np.linalg.norm(p-[5,1],axis=1)>=1.7); keep[j]=True
        upper=upper[keep];lower=lower[keep]
    v=np.vstack([upper,lower[::-1]])
    return v

def uniform(p,d,s,width,hard=False):
    ramp=np.minimum(1,np.minimum(s/.035,(1-s)/.05))
    n=np.column_stack([-d[:,1],d[:,0]])
    if hard: n[j]/=math.cos(math.pi/8)
    upper=p+n*(width*ramp)[:,None];lower=p-n*(width*ramp)[:,None]
    if hard:
        keep=(np.linalg.norm(p-[5,1],axis=1)>=1.7); keep[j]=True
        upper=upper[keep];lower=lower[keep]
    return np.vstack([upper,lower[::-1]])

def dpath(v):
    return 'M '+' L '.join(f'{x:.5f},{y:.5f}' for x,y in v)+' Z'

def cpath(p): return 'M '+' L '.join(f'{x:.5f},{y:.5f}' for x,y in p)

shapes={
'round-control':uniform(rp,rd,rs,.62),'round-candidate':ribbon(rp,rd,rs,RO,RI),
'thin-control':uniform(tp,td,ts,.072),'thin-candidate':ribbon(tp,td,ts,TO,TI),
'hard-control':uniform(hp,hd,hs,.85,True),'hard-candidate':ribbon(hp,hd,hs,HO,HI,True)}
shapes['thin-fallback']=shapes['thin-control'].copy()
base={'round':(rp,rd,rs),'thin':(tp,td,ts),'hard':(hp,hd,hs)}
params={
 'status':'RESEARCH_ONLY / NEW MOTION PROPOSAL / UNASSIGNED',
 'source_shape':'haruka_research_v03/visual_tests/pattern_identity_alpha.svg',
 'source_grammar':'haruka_research_v02/PATTERN_GRAMMAR.md',
 'interpretation':'Geometry-only transfer from the source open-core family. The source document has unsupported character-motion assignments; none are carried into this plate.',
 'comparison':'Each row uses exactly one shared centerline, direction from A to B, and endpoints. The carrier and candidate differ only in ribbon pressure. Black area is deliberately not equalized.',
 'coordinate_system':'SVG local units, y positive downward. All displays share viewBox 0 -1 14 10. Mothers are 420 px wide. Samples are 128 / 64 px wide at the same geometric scale for the pair.',
 'construction':'A single ordered path is expanded to left and right boundaries using the given pressure tables. Start and end widths are zero. The boundaries are concatenated into one filled polygon. This is a native SVG path, not a bitmap or generated illustration.',
 'width_station_s':S,
 'round':{'centerline_cubics':[[[12,1],[8.5,.6],[5.1,.6],[2.4,1.8]],[[2.4,1.8],[.4,2.7],[.45,5.25],[2.5,6.5]],[[2.5,6.5],[3.4,7.1],[6.2,7.1],[8,7]]], 'control_half_width':.62,'outer_half_width':RO,'inner_half_width':RI,'interpolation':'PCHIP','cavity_probe':[6,4],'gained':'Broad rounded pressure, one inward return, unequal shoulders.','sacrificed':'More mass and a curled-sign tendency; less thread-like economy.'},
 'thin':{'centerline_transform':'Round centerline; y = 4 + (y - 4) * 0.18; normals recomputed after the transform.','control_half_width':.072,'outer_half_width':TO,'inner_half_width':TI,'interpolation':'PCHIP','cavity_probe':[6,4],'fallback':'Same shared centerline and endpoints, uniform half-width 0.072, no pressure lobe; equals carrier control.','gained':'One continuous narrow ribbon with a single local pressure lobe; clean fallback is economical.','sacrificed':'At small displayed sizes the inner return is unstable; the fallback explicitly loses open-core pattern identity. This local test does not limit any character ability.'},
 'hard':{'centerline_description':'A=(12,1) to (5,1), then a 45-degree diagonal to (1.5,4.5); curved recovery to B=(8,7). One angular centerline junction, no repeated serrations.','control_half_width':.85,'outer_half_width':HO,'inner_half_width':HI,'interpolation':'linear pressure + mitered 45-degree joint','cavity_probe':[6,4],'gained':'Weight and one clear angular event while preserving an open cavity.','sacrificed':'Softer material flow is reduced; the thick inner nib may read as a graphic sign.'},
 'readability_limit':'128 px and 64 px describe the width of the SVG sample viewports on this 1x PNG. They are controlled black-on-white display examples only, not game/TV or final-resolution validation.',
 'not_claimed':['character assignment','actual punch or hammer trajectory','ability rules','timing','adopted VFX','universal glyph brand','a final pixel threshold']}
(OUT/'motion_dialects_parameters.json').write_text(json.dumps(params,ensure_ascii=False,indent=2))

# Raw masters and centerline data are retained beside the board for direct editing.
for name,v in shapes.items():
    svg=f'<svg xmlns="http://www.w3.org/2000/svg" width="1120" height="800" viewBox="0 -1 14 10"><path id="{name}" fill="black" d="{dpath(v)}"/></svg>'
    (OUT/f'{name}.svg').write_text(svg)
for name,(p,d,s) in base.items():
    (OUT/f'{name}-centerline.json').write_text(json.dumps({'A':p[0].tolist(),'B':p[-1].tolist(),'direction':'A to B','points':p.tolist(),'normals':np.column_stack([-d[:,1],d[:,0]]).tolist(),'s':s.tolist()},indent=2))

out=[]
def add(s):out.append(s)
def txt(x,y,text,size=20,weight='400',anchor='start',spacing=None):
    sp=f' letter-spacing="{spacing}"' if spacing else ''
    import html
    add(f'<text x="{x}" y="{y}" font-size="{size}" font-weight="{weight}" text-anchor="{anchor}"{sp}>{html.escape(text)}</text>')
def lines(x,y,ss,size=20,lh=30,weight='400'):
    for i,s in enumerate(ss): txt(x,y+i*lh,s,size,weight)
def rect(x,y,w,h,stroke='#000',fill='none',sw=1):add(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>')
def glyph(name,x,y,width):
    # width describes the 14-unit viewport, all comparisons use this same envelope.
    add(f'<svg x="{x}" y="{y}" width="{width}" height="{width*10/14}" viewBox="0 -1 14 10" overflow="visible"><use href="#{name}"/></svg>')
def endpoints(name,x,y,width):
    p=base[name][0]
    # Deliberately outside the silhouettes: labels point at path endpoints without adding black islands.
    for label,idx in [('A',0),('B',-1)]:
        q=p[idx];xx=x+q[0]*width/14;yy=y+(q[1]+1)*width/14
        txt(xx+8,yy-8,label,15,'600')
def smalls(name,y):
    x=1070
    txt(x,y,'128 px',17,'600');txt(x+200,y,'64 px',17,'600')
    txt(x,y+31,'CONTROL',12,'600',spacing='1')
    glyph(name+'-control',x,y+38,128);glyph(name+'-control',x+200,y+38,64)
    txt(x,y+156,'CANDIDATE',12,'600',spacing='1')
    glyph(name+'-candidate',x,y+163,128);glyph(name+'-candidate',x+200,y+163,64)

add(f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{W}" height="{H}" viewBox="0 0 {W} {H}">')
add('<title>Unassigned motion dialects: one-cell pressure studies</title><desc>Research-only native-vector comparison. Every row fixes its centerline, endpoints and direction. Thin fallback loses pattern identity. Size samples are not production readability validation.</desc>')
add('<defs>')
for name,v in shapes.items():add(f'<path id="{name}" fill="#000" d="{dpath(v)}"/>')
for name,(p,d,s) in base.items():add(f'<path id="{name}-shared-axis" fill="none" d="{cpath(p)}"/>')
add('</defs><rect width="1960" height="1530" fill="white"/><g font-family="DejaVu Sans, sans-serif" fill="black">')
txt(54,49,'UNASSIGNED MOTION DIALECTS',31,'700',spacing='1.2')
txt(54,83,'NEW MOTION PROPOSAL  /  RESEARCH ONLY  /  ONE-CELL GEOMETRY',17,'600',spacing='1')
lines(54,113,['One common path per row: same A→B direction and endpoints. Pressure changes; black area is not equalized.',
'No character assignment, action trajectory or ability claim. The open-core motif is a candidate vocabulary, not an adopted mark.'],18,27)
add('<path d="M54 165 H1906" stroke="black" stroke-width="2"/>')
txt(54,198,'CARRIER CONTROL',17,'700',spacing='1');txt(553,198,'CANDIDATE PRESSURE',17,'700',spacing='1');txt(1070,198,'MATCHED SIZE SAMPLES',17,'700',spacing='1');txt(1440,198,'ASSEMBLY / TRADE-OFF',17,'700',spacing='1')
# row1
for y in [625,1055]:add(f'<path d="M54 {y} H1906" stroke="black" stroke-width="1"/>')
for x in [526,1039,1408]:add(f'<path d="M{x} 222 V1450" stroke="black" stroke-width="1"/>')
txt(54,243,'01  ROUND PUSH',22,'700')
txt(553,243,'BROAD / ROUNDED',19,'600')
glyph('round-control',58,262,420);endpoints('round',58,262,420)
glyph('round-candidate',561,262,420);endpoints('round',561,262,420)
lines(54,581,['Uniform pressure; no inward lobe.'],17,25)
lines(553,581,['One open cavity · one return · unequal shoulders'],16,25)
smalls('round',243)
lines(1440,244,['RECIPE 01'],16,25,'700')
lines(1440,276,['1. Keep the shared curved spine.', '2. Broaden the back and long shoulder.', '3. Add one soft inner pressure lobe.', '4. Taper both ends; leave the side open.'],18,29)
lines(1440,427,['GAIN', 'Rounded mass and a readable return.'],18,28,'600')
lines(1440,500,['COST', 'Heavier; can resemble a curled sign.'],18,28)
#row2
txt(54,666,'02  THIN TENSION',22,'700');txt(553,666,'NARROW / LOCAL',19,'600')
glyph('thin-control',58,694,420);endpoints('thin',58,694,420)
glyph('thin-candidate',561,694,420);endpoints('thin',561,694,420)
lines(54,906,['Same narrow path; uniform line weight.', 'One continuous local sample only.'],17,26)
lines(553,906,['One continuous ribbon; local pressure lobe.', 'The core becomes unstable when reduced.'],17,26)
# Same-scale fallback lives in a deliberately separate in-row strip.
txt(553,980,'CLEAN FALLBACK',14,'700',spacing='.7')
glyph('thin-fallback',714,882,260)
txt(553,1024,'Pattern identity lost; no ability restriction implied.',16,'600')
smalls('thin',668)
lines(1070,957,['64 px: the return is no longer', 'a dependable separate feature.'],15,23)
lines(1440,667,['RECIPE 02'],16,25,'700')
lines(1440,700,['1. Compress the shared path to 18% Y.', '2. Recompute normals; narrow the ribbon.', '3. Keep one local pressure lobe only.', '4. If the core collapses, remove the lobe.'],18,29)
lines(1440,851,['GAIN', 'Continuous thin pressure, then a clean line.'],18,28,'600')
lines(1440,925,['COST', 'Fallback loses the open-core identity.', 'This is a local geometry test, not a cap', 'on a character’s line count or abilities.'],17,28)
#row3
txt(54,1096,'03  HARD TURN',22,'700');txt(553,1096,'WEIGHT / ONE 45° EVENT',19,'600')
glyph('hard-control',58,1115,420);endpoints('hard',58,1115,420)
glyph('hard-candidate',561,1115,420);endpoints('hard',561,1115,420)
lines(54,1431,['Same angled path; uniform pressure.'],17,25)
lines(553,1431,['One dominant corner; no all-over serration.'],17,25)
smalls('hard',1099)
lines(1440,1098,['RECIPE 03'],16,25,'700')
lines(1440,1131,['1. Make one explicit 45° path junction.', '2. Recover through a continuous curve.', '3. Broaden the back; keep one hard lobe.', '4. Preserve the open side and short arm.'],18,29)
lines(1440,1282,['GAIN', 'Weight and one clear angular event.'],18,28,'600')
lines(1440,1356,['COST', 'Less fluid; may read as a graphic sign.'],18,28)
add('<path d="M54 1467 H1906" stroke="black" stroke-width="2"/>')
lines(54,1495,['128 / 64 px = sample viewport width in this 1× PNG. High-contrast display examples only; not game/TV readability tests or final resolution targets.'],17,24)
add('</g></svg>')
(OUT/'motion_dialects_comparison.svg').write_text('\n'.join(out))
subprocess.run(['inkscape',str(OUT/'motion_dialects_comparison.svg'),'--export-type=png','--export-filename='+str(OUT/'motion_dialects_comparison.png')],check=True)
print(OUT/'motion_dialects_comparison.png')
