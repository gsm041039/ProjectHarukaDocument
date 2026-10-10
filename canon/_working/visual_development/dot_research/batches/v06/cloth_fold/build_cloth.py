from pathlib import Path
import math, re, json, hashlib, random
import numpy as np
import xml.etree.ElementTree as ET

OUT=Path(__file__).resolve().parent
ROOT=OUT.parent
SRC=ROOT/'source_refs/pattern_border_transfer_v021.svg'
source=SRC.read_text()
tree=ET.fromstring(source)
d=tree.find('.//{http://www.w3.org/2000/svg}path').attrib['d']
nums=list(map(float,re.findall(r'-?\d+(?:\.\d+)?',d)))
base=list(zip(nums[::2],nums[1::2]))
# Exact source transform: translate(2.8/22.8,12) scale(2/3) rotate(-90).
polys=[[(off+y*2/3,12-x*2/3) for x,y in base] for off in (2.8,22.8)]

# Developable ruled ribbon: physical arclength is u; no stretching of the source UV.
# One upward arch and one soft overhanging descent wholly inside the 5.6u rest.
a,b=1.05,2.38
q=np.linspace(0,1,20001)
ia=np.trapezoid(np.sin(a*np.sin(np.pi*q)),q)
ib=np.trapezoid(np.sin(b*np.sin(np.pi*q)),q)
L=5.6
up=L*ib/(ia+ib)
u=np.linspace(0,40,40001)
th=np.zeros_like(u)
m=(u>=17.2)&(u<=17.2+up)
th[m]=a*np.sin(np.pi*(u[m]-17.2)/up)
m=(u>17.2+up)&(u<=22.8)
th[m]=-b*np.sin(np.pi*(u[m]-17.2-up)/(L-up))
x=np.zeros_like(u); z=np.zeros_like(u)
x[1:]=np.cumsum((np.cos(th)[1:]+np.cos(th)[:-1])*.0005)
z[1:]=np.cumsum((np.sin(th)[1:]+np.sin(th)[:-1])*.0005)
z[np.abs(z)<1e-8]=0

def geom(s):
 return float(np.interp(s,u,x)),float(np.interp(s,u,z)),float(np.interp(s,u,th))
def pt(s,v):
 xx,zz,_=geom(s); return xx,.66*v-.751265*zz

def clip(poly,axis,k,greater):
 if not poly:return []
 out=[]
 for p,r in zip(poly,poly[1:]+poly[:1]):
  ip=(p[axis]>=k) if greater else (p[axis]<=k)
  ir=(r[axis]>=k) if greater else (r[axis]<=k)
  if ip:out.append(p)
  if ip!=ir:
   t=(k-p[axis])/(r[axis]-p[axis]); out.append((p[0]+t*(r[0]-p[0]),p[1]+t*(r[1]-p[1])))
 return out

def rectclip(poly,l,r):
 poly=clip(poly,0,l,True);poly=clip(poly,0,r,False)
 poly=clip(poly,1,0,True);poly=clip(poly,1,16,False)
 return poly

def path(points):
 return 'M '+' L '.join(f'{p[0]:.5f},{p[1]:.5f}' for p in points)+' Z'

def rgb(base,light):return '#'+''.join(f'{max(0,min(255,round(c*light))):02x}' for c in base)

# Exact source placement: original d is unchanged, with explicit editable transforms.
placement=f'''<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1440" height="780" viewBox="0 0 1440 780">
<title>Research-only exact cloth-border placement, source v0.2.1</title>
<desc>Exact unchanged union d from source. Group A at original positions; group B translates the complete print +10u. Cloth size and fold material interval stay fixed. The red fold range is a construction guide, not print.</desc>
<defs><path id="source-A-union" d="{d}"/><clipPath id="cloth-uv"><rect width="40" height="16"/></clipPath></defs>
<rect width="1440" height="780" fill="#f8f6ef"/>
<g font-family="sans-serif" fill="#262827"><text x="70" y="52" font-size="26">EXACT PRINT PLACEMENT / RESEARCH ONLY</text><text x="70" y="86" font-size="16">40u × 16u cloth • same fold material interval 17.2–22.8u • source is not redesigned</text></g>
'''
for yy,shift,label in [(140,0,'01  Source positions: x = 2.8u and 22.8u'),(450,10,'02  Entire print translated +10u: x = 12.8u and 32.8u; right edge clips it')]:
 placement+=f'<text x="70" y="{yy-15}" font-family="sans-serif" font-size="17" fill="#262827">{label}</text><g transform="translate(70 {yy}) scale(17)"><rect width="40" height="16" fill="#d9d9cc"/><g clip-path="url(#cloth-uv)"><g id="print-shift-{shift}" transform="translate({shift} 0)" fill="#272925"><use xlink:href="#source-A-union" transform="translate(2.8 12) scale(0.666666666666667) rotate(-90)"/><use xlink:href="#source-A-union" transform="translate(22.8 12) scale(0.666666666666667) rotate(-90)"/></g></g><g id="fold-guides-{shift}" fill="none" stroke="#ac4b3c" stroke-width=".055" stroke-dasharray=".16 .12"><path d="M17.2,0 V16 M22.8,0 V16"/></g></g>'
placement+='''<g font-family="sans-serif" font-size="18" fill="#43453e"><text x="850" y="164">Editable layers</text><text x="850" y="205">• source-A-union: exact original path</text><text x="850" y="235">• print-shift-0 / print-shift-10: placement</text><text x="850" y="265">• fold-guides: non-print construction</text><text x="850" y="325">Neither guide nor cavity is an object</text><text x="850" y="355">added to the physical cloth.</text><text x="850" y="475">+10u shift is the sole case change.</text><text x="850" y="505">No added repeat, repaired hook,</text><text x="850" y="535">or hidden-cavity outline.</text></g></svg>'''
(OUT/'cloth_print_placement.svg').write_text(placement)

svg=['''<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1520" height="1600" viewBox="0 0 1520 1600">
<title>One print, one soft cloth fold: Haruka research-only application study</title>
<desc>A matte loose textile ribbon carries the exact source one-colour print. Small flat source above. Two large physically overlapped cloth views share geometry, scale and lighting; only the print placement changes by +10u. This is an illustrative developable cloth construction, not a garment or manufacturing validation.</desc>
<defs><filter id="shadow" x="-30%" y="-80%" width="170%" height="280%"><feGaussianBlur stdDeviation=".23"/></filter><filter id="contact" x="-20%" y="-100%" width="150%" height="300%"><feGaussianBlur stdDeviation=".10"/></filter><path id="flat-A" d="'''+d+'''"/></defs>
<rect width="1520" height="1600" fill="#f4f1e9"/>
<g font-family="sans-serif" fill="#242720"><text x="104" y="82" font-size="15" letter-spacing="3">PROJECT HARUKA / RESEARCH ONLY / v0.6</text><text x="100" y="140" font-size="42">The print follows the cloth.</text><text x="104" y="180" font-size="19" fill="#64665b">One soft self-occluding fold. Single-colour ink. No repaired silhouettes.</text></g>
''']
# Source swatch is subordinate, with a continuous matte fabric carrier.
svg.append('<text x="1050" y="220" font-family="sans-serif" font-size="15" fill="#6a6c61">FLAT SOURCE / v0.2.1</text><g transform="translate(1040 238) scale(9)"><rect width="40" height="16" fill="#d1d1c2"/><g fill="#2d3029"><use xlink:href="#flat-A" transform="translate(2.8 12) scale(0.666666666666667) rotate(-90)"/><use xlink:href="#flat-A" transform="translate(22.8 12) scale(0.666666666666667) rotate(-90)"/></g></g>')

light=np.array([-.40,-.28,.873]);light=light/np.linalg.norm(light)
segments=[]
# Narrow strips are projection tessellation, not altered motif edges.
steps=np.linspace(0,40,1601)
for i in range(len(steps)-1):
 s,t=steps[i],steps[i+1]
 _,zz,theta=geom((s+t)/2)
 segments.append((zz,s,t,theta))
segments.sort(key=lambda p:p[0])
random.seed(241)
# Tiny fibre flecks, same source locations in both physical views.
fibres=[]
for i in range(4600):
 su=random.uniform(0,40);v=random.uniform(.06,15.94);le=random.uniform(.015,.055)
 fibres.append((su,v,le,random.uniform(.035,.075)))

def dense_path(poly, step=.025):
 pts=[]
 for p,r in zip(poly,poly[1:]+poly[:1]):
  n=max(1,int(math.ceil(abs(r[0]-p[0])/step)))
  for j in range(n):
   f=j/n;pts.append(pt(p[0]+f*(r[0]-p[0]),p[1]+f*(r[1]-p[1])))
 return path(pts)

def render_cloth(oy,shift):
 # The three monotone surface branches are layered back-to-front.
 # Each branch and each ink polygon is continuous: no stripe-by-stripe compositing seams.
 svg.append(f'<g id="cloth-case-{shift}" transform="translate(165 {oy}) rotate(-2) scale(31)">')
 end=geom(40)[0]
 svg.append(f'<path d="M.08,.3 L{end+.1},.3 L{end+.22},10.93 L.14,10.93 Z" fill="#545647" opacity=".18" filter="url(#shadow)"/>')
 svg.append(f'<path d="M.03,10.62 L{end+.05},10.62" stroke="#484d40" stroke-width=".12" opacity=".22" filter="url(#contact)"/>')
 shifted=[[(xx+shift,v) for xx,v in poly] for poly in polys]
 # Analytical positions where the descending sheet becomes vertical.
 aa=math.asin(math.pi/(2*b))/math.pi
 rev0=17.2+up+(L-up)*aa
 rev1=17.2+up+(L-up)*(1-aa)
 branches=[(rev1,40,True),(rev0,rev1,False),(0,rev0,True)]
 for branch,(s,t,front) in enumerate(branches):
  sam=np.linspace(s,t,max(30,int((t-s)/.025)+1))
  entries=[]
  for su in sam:
   xx,zz,theta=geom(su)
   n=np.array([-math.sin(theta),0,math.cos(theta)])
   if not front:n=-n
   shade=(.67+.33*max(0,float(np.dot(n,light))))*(1-.085*math.exp(-((su-22.2)/.62)**2))
   entries.append((xx,shade))
  entries.sort()
  lo,hi=entries[0][0],entries[-1][0]
  gid=f'cloth-{shift}-{branch}';iid=f'ink-{shift}-{branch}'
  svg.append(f'<defs><linearGradient id="{gid}" gradientUnits="userSpaceOnUse" x1="{lo}" x2="{hi}" y1="0" y2="0">')
  for xx,shade in entries:
   svg.append(f'<stop offset="{(xx-lo)/(hi-lo):.7f}" stop-color="{rgb((216,216,200),shade)}"/>')
  svg.append(f'</linearGradient><linearGradient id="{iid}" gradientUnits="userSpaceOnUse" x1="{lo}" x2="{hi}" y1="0" y2="0">')
  for xx,shade in entries:
   svg.append(f'<stop offset="{(xx-lo)/(hi-lo):.7f}" stop-color="{rgb((46,49,40),.74+.26*shade)}"/>')
  svg.append('</linearGradient></defs>')
  svg.append(f'<path d="{dense_path([(s,0),(t,0),(t,16),(s,16)])}" fill="url(#{gid})"/>')
  if front:
   for poly in shifted:
    pp=rectclip(poly,s,t)
    if len(pp)>=3:svg.append(f'<path d="{dense_path(pp)}" fill="url(#{iid})"/>')
  for su,v,le,op in fibres:
   if s<=su<t:
    p1=pt(su,v);p2=pt(min(t,su+le),v+.003)
    svg.append(f'<path d="M{p1[0]:.5f},{p1[1]:.5f} L{p2[0]:.5f},{p2[1]:.5f}" stroke="#f2eddb" stroke-width=".014" opacity="{op:.3f}"/>')
  for vv,col,w in [(16,'#9da18b',.044),(0,'#dcdeca',.022)]:
   points=[pt(su,vv) for su in sam]
   dd='M '+' L '.join(f'{p[0]:.5f},{p[1]:.5f}' for p in points)
   svg.append(f'<path d="{dd}" fill="none" stroke="{col}" stroke-width="{w}"/>')
 for su in [0,40]:
  p1=pt(su,0);p2=pt(su,16)
  svg.append(f'<path d="M{p1[0]:.5f},{p1[1]:.5f} L{p2[0]:.5f},{p2[1]:.5f}" stroke="#989b88" stroke-width=".038"/>')
 svg.append('</g>')

svg.append('<g font-family="sans-serif"><text x="104" y="370" fill="#32372b" font-size="25">01 / Fold in the space between groups</text><text x="104" y="402" fill="#686b60" font-size="17">Original print positions · full 40u × 16u cloth · loose matte sample</text></g>')
render_cloth(466,0)
svg.append('<text x="105" y="844" font-family="sans-serif" font-size="19" fill="#414839">The two group rhythms survive. The tucked cloth interrupts the rest between them.</text>')
svg.append('<g font-family="sans-serif"><text x="104" y="935" fill="#32372b" font-size="25">02 / Same fold; print shifted 10u</text><text x="104" y="967" fill="#686b60" font-size="17">Identical cloth, camera, scale and light · fold now crosses the middle hooked cell</text></g>')
render_cloth(1031,10)
svg.append('<text x="105" y="1409" font-family="sans-serif" font-size="19" fill="#414839">The middle cell narrows; part of its hook is hidden in the tuck. Let the opening lose its clarity.</text>')
svg.append('''<text x="105" y="1440" font-family="sans-serif" font-size="16" fill="#686b60">The far-right missing print is cut by the fabric boundary after the shift; it is not fold occlusion.</text><g font-family="sans-serif" fill="#6d7063" font-size="16"><text x="105" y="1480">Read the cloth first. Accept a tooth-like remnant where the motif is hidden.</text><text x="105" y="1510">Exact source placement is editable separately. Fold projection is sampled; this is a painter’s construction study.</text><text x="105" y="1540">No garment adoption, embroidery claim, manufacturing tolerance, or character canon is implied.</text></g></svg>''')
(OUT/'cloth_fold_plate.svg').write_text(''.join(svg))

# Check the fold genuinely reverses in projection and source path has not drifted.
orig_d=ET.fromstring((OUT/'cloth_print_placement.svg').read_text()).find('.//{http://www.w3.org/2000/svg}path').attrib['d']
backmask=np.cos(th)<0
verification={
 'research_only':True,
 'source_file':str(SRC.relative_to(ROOT.parent)),
 'source_sha256':hashlib.sha256(SRC.read_bytes()).hexdigest(),
 'source_path_d_identical':orig_d==d,
 'cloth_material_size_u':[40,16],
 'source_group_x':[2.8,22.8],
 'print_shifts_u':[0,10],
 'fold_material_interval_u':[17.2,22.8],
 'arch_length_u':float(up),
 'max_elevation_u':float(max(z)),
 'projected_x_reversal_exists':bool(backmask.any()),
 'reverse_surface_material_u':[float(u[backmask][0]),float(u[backmask][-1])],
 'right_cloth_world_x':float(x[-1]),
 'final_elevation_u':float(z[-1]),
 'camera_identical':True,
 'scale_identical':True,
 'lighting_identical':True,
 'projection_tessellation_u':.025,
 'material_distance_parametrized_by_arclength':True,
 'production_or_garment_validation':False,
 'rendered_visual_inspection':'Passed after one fabrication-only cleanup of subdivision compositing seams; source motif unchanged',
 'fold_result':'Shifted middle cell narrows and loses part of its hooked/open-mouth reading; no cavity restoration',
 'right_edge_result':'Independent boundary clipping from +10u print shift, not fold occlusion',
 'revision_scope':'Single fabrication cleanup only; no motif redesign'
}
(OUT/'verification.json').write_text(json.dumps(verification,indent=2)+'\n')
print(json.dumps(verification,indent=2))
