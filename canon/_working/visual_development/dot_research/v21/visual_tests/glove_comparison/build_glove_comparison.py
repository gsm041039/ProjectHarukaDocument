#!/usr/bin/env python3
"""One static, original editable vector study. No source raster pixels are used.
Dependencies already present: numpy, scipy, Pillow, Inkscape. Run from any cwd.
"""
from pathlib import Path
import json, subprocess, hashlib, html, math, os
import numpy as np
from scipy.interpolate import PchipInterpolator
from scipy import ndimage
from PIL import Image

OUT=Path(__file__).resolve().parent
SOURCE=Path('/tmp/haruka_existing_action.png')
W,H=1800,1040

def blob_sha(p):
    data=p.read_bytes()
    return hashlib.sha1(b'blob '+str(len(data)).encode()+b'\0'+data).hexdigest()
source_before=blob_sha(SOURCE) if SOURCE.exists() else None

# New curved local centerline, informed by the visible left / lower cyan arc
# around the source's projecting fist. These are drawing coordinates, not a
# recovered trajectory, a trace, a depth reconstruction or adopted VFX.
CUBICS=[[[302,124],[225,151],[140,213],[128,284]],
        [[128,284],[116,354],[165,405],[224,419]],
        [[224,419],[257,427],[296,418],[318,393]]]
S=np.array([0,.035,.11,.19,.32,.49,.65,.82,.94,1])
OUTER=np.array([0,8,14,18,21,23,21,16,8,0])
N_TOTAL=np.array([0,18,31,40,46,48,46,35,17,0])
P_TOTAL=np.array([0,20,48,35,37,48,46,35,17,0])

def samples(cubics,n=200):
    pts=[]; dirs=[]
    for i,seg in enumerate(cubics):
        p=np.array(seg,float);t=np.linspace(0,1,n)[:,None]
        q=(1-t)**3*p[0]+3*(1-t)**2*t*p[1]+3*(1-t)*t*t*p[2]+t**3*p[3]
        d=3*(1-t)**2*(p[1]-p[0])+6*(1-t)*t*(p[2]-p[1])+3*t*t*(p[3]-p[2])
        pts.extend(q if i==0 else q[1:]);dirs.extend(d if i==0 else d[1:])
    p=np.array(pts);d=np.array(dirs);d/=np.linalg.norm(d,axis=1)[:,None]
    s=np.r_[0,np.cumsum(np.linalg.norm(np.diff(p,axis=0),axis=1))]; length=float(s[-1]);s/=s[-1]
    return p,d,s,length
p,t,s,L=samples(CUBICS)
n=np.column_stack([-t[:,1],t[:,0]])
# For this down-left then right-facing arc, +normal is its outer side.
a=PchipInterpolator(S,OUTER)(s)
shapes={}; widths={}
for key,total in [('N',N_TOTAL),('P',P_TOTAL)]:
    w=PchipInterpolator(S,total)(s)
    inner=w-a
    shapes[key]=np.vstack([p+n*a[:,None], (p-n*inner[:,None])[::-1]])
    widths[key]={'total':w,'outer':a,'inner':inner}

def path(pts,close=True):
    return 'M '+' L '.join(f'{x:.4f},{y:.4f}' for x,y in pts)+(' Z' if close else '')
def area(pts):
    x,y=pts.T;return float(abs(np.dot(x,np.roll(y,1))-np.dot(y,np.roll(x,1)))/2)

def text(x,y,s,size=20,fill='#d6dde6',weight=400):
    return f'<text x="{x}" y="{y}" font-size="{size}" font-weight="{weight}" fill="{fill}">{html.escape(s)}</text>'

# Original schematic figure. Shoulder -> upper arm -> forearm -> cuff ->
# foreshortened knuckles is one uninterrupted visible anatomical chain.
# Simplified torso and a plain transverse belt give the same body orientation
# in both cells. No face, crown, emblem, extra weapon or complete costume.
PROXY='''
<g id="body-proxy" stroke="#252735" stroke-width="3.8" stroke-linejoin="round" stroke-linecap="round">
  <!-- Neck / torso, deliberately schematic: no face or character-settei claim. -->
  <path id="neck-stub" d="M520 167 L565 174 L580 221 L615 240 L590 285 L531 257 L501 224 Z" fill="url(#skin)"/>
  <path d="M520 167 L565 174" stroke="#9299a6" stroke-width="2"/>
  <path id="far-shoulder" d="M579 225 C612 225 644 249 656 284 L673 359 L638 388 L596 307 Z" fill="#a1a7b3"/>
  <path id="torso" d="M494 229 C521 222 553 237 579 249 C601 252 631 266 640 300 C646 332 628 364 622 400 L631 480 L602 538 L490 545 L465 513 L486 424 C493 387 475 335 469 291 Z" fill="url(#cloth)"/>
  <path d="M505 251 C508 286 525 315 539 331 C554 344 580 353 607 345 M530 335 C537 391 526 450 505 494 M606 350 C594 392 596 445 612 484" fill="none" stroke="#8b90a1" stroke-width="3"/>
  <path d="M502 238 L535 270 L570 275 L582 250" fill="none" stroke="#b1b4be" stroke-width="8"/>
  <path d="M540 339 C558 377 564 425 556 496" fill="none" stroke="#574a5b" stroke-width="4"/>
  <!-- Fixed continuous reaching arm; sleeve folds describe volume only. -->
  <path id="reaching-arm" d="M492 233 C467 221 443 223 417 235 L358 243 L330 237 L287 251 L282 304 L326 323 L371 309 C413 294 439 296 471 313 C491 323 508 304 507 278 C507 257 503 244 492 233 Z" fill="url(#sleeve)"/>
  <path d="M435 233 C433 253 439 276 452 293 M410 243 C389 253 381 269 376 292 M324 258 L355 265 L335 299" fill="none" stroke="#a0a4b0" stroke-width="3"/>
  <path d="M474 237 C486 253 490 279 481 297" fill="none" stroke="#f0eded" stroke-width="5"/>
  <!-- Cuff sits behind the hand. Quiet mass only; no new glyph or hardware. -->
  <path id="cuff" d="M287 239 C308 240 333 260 345 280 L335 312 C327 329 306 342 284 340 L255 310 L261 265 Z" fill="url(#cuff-color)"/>
  <path d="M290 244 C312 253 326 271 334 288 C329 309 314 325 291 332" fill="none" stroke="#bc859c" stroke-width="5"/>
  <path d="M270 254 C289 267 306 291 310 314" fill="none" stroke="#50263f" stroke-width="4"/>
  <!-- Broad palm / projecting wrist. Four curled finger lobes face the viewer. -->
  <path id="glove-palm" d="M268 277 C291 284 305 301 311 322 L300 353 C299 372 280 391 255 398 C226 402 204 389 184 371 C169 357 164 334 172 315 C181 293 207 285 230 285 Z" fill="url(#glove-color)"/>
  <path d="M209 289 C227 298 244 314 249 334 L238 371 L216 388" fill="none" stroke="#ce7c99" stroke-width="4"/>
  <path id="finger-1" d="M183 311 C179 302 166 307 164 319 L166 342 C165 354 171 366 181 369 L194 357 L196 335 Z" fill="#a5486b"/>
  <path id="finger-2" d="M186 303 C195 295 208 301 212 312 L220 342 C223 355 216 366 205 369 C195 368 189 361 187 350 L180 321 C178 313 180 307 186 303 Z" fill="url(#glove-color)"/>
  <path id="finger-3" d="M215 310 C224 301 238 305 242 315 L251 348 C254 362 248 374 238 377 C227 380 219 373 215 361 L207 331 C204 320 207 313 215 310 Z" fill="url(#glove-color)"/>
  <path id="finger-4" d="M245 321 C254 312 265 318 270 329 L276 355 C278 366 273 378 264 382 C253 386 245 381 242 370 L237 346 C234 335 238 325 245 321 Z" fill="url(#glove-color)"/>
  <path d="M181 340 L191 348 M191 346 Q201 341 217 342 M216 355 Q233 349 249 348 M243 365 L274 355" fill="none" stroke="#522038" stroke-width="3"/>
  <path id="thumb" d="M295 322 C283 315 272 322 267 334 L251 357 C246 367 251 379 261 381 C272 383 280 372 288 363 L302 347 C309 337 306 327 295 322 Z" fill="#9d3e64"/>
  <path d="M284 332 L269 356 C265 363 264 367 266 373" fill="none" stroke="#d3819c" stroke-width="4"/>
  <path d="M183 313 L190 335 M216 317 L227 344 M248 327 L254 346" fill="none" stroke="#d384a0" stroke-width="3.5"/>
  <!-- Waist and plain belt orient the lower body; no adopted buckle design. -->
  <path id="hip-suggestion" d="M492 517 L606 512 L641 603 C594 612 535 606 462 584 Z" fill="#555766"/>
  <path id="belt" d="M479 487 C519 505 573 504 626 477 L637 518 C583 548 522 551 469 530 Z" fill="#63354e"/>
  <path d="M480 493 C524 512 576 507 627 483 M474 524 C527 545 584 537 633 512" fill="none" stroke="#bdad94" stroke-width="3"/>
  <path id="plain-buckle" d="M528 505 L567 503 L570 540 L530 545 Z" fill="#a59788"/>
  <path d="M536 513 L558 511 L560 533 L538 536 Z" fill="#57505c" stroke="#d1c1a9" stroke-width="2"/>
  <path d="M467 584 C530 606 591 611 641 603" fill="none" stroke="#7b8190" stroke-width="2"/>
</g>
'''

DEFS=f'''
<defs>
 <linearGradient id="cloth" x1="0" y1="0" x2="1" y2="0"><stop stop-color="#cbcbd0"/><stop offset=".5" stop-color="#e3e0df"/><stop offset="1" stop-color="#aaacb8"/></linearGradient>
 <linearGradient id="sleeve" x1="0" y1="0" x2=".3" y2="1"><stop stop-color="#ece9e6"/><stop offset="1" stop-color="#b6bac5"/></linearGradient>
 <linearGradient id="skin" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#bcb1b0"/><stop offset="1" stop-color="#9395a4"/></linearGradient>
 <linearGradient id="glove-color" x1="0" y1="0" x2=".7" y2="1"><stop stop-color="#bb5c7e"/><stop offset=".55" stop-color="#a13b63"/><stop offset="1" stop-color="#662840"/></linearGradient>
 <linearGradient id="cuff-color" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#8e4264"/><stop offset="1" stop-color="#552b44"/></linearGradient>
 <linearGradient id="light-color" gradientUnits="userSpaceOnUse" x1="110" y1="190" x2="305" y2="430"><stop stop-color="#73e4fa"/><stop offset=".48" stop-color="#40cbe9"/><stop offset="1" stop-color="#b6f7ff"/></linearGradient>
 <filter id="arc-glow" x="-30%" y="-30%" width="160%" height="160%" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="5"/></filter>
 <path id="arc-N" d="{path(shapes['N'])}"/>
 <path id="arc-P" d="{path(shapes['P'])}"/>
 <path id="common-light-ridge" d="{path(p[12:-12],False)}"/>
 {PROXY}
</defs>'''


def arc(key,glow=True):
    glowpiece=f'<use href="#arc-{key}" fill="#24b9e9" opacity=".24" filter="url(#arc-glow)"/>' if glow else ''
    return f'''<g id="effect-{key}" opacity=".98">{glowpiece}<use href="#arc-{key}" fill="url(#light-color)"/>
    <use href="#common-light-ridge" fill="none" stroke="#d1fcff" stroke-width="3.2" opacity=".76" stroke-linecap="round"/></g>'''

def board(labeled):
    title='W09 · 拳邊光形／同姿態比較' if labeled else 'W09 · 局部姿態與光形'
    desc='N = full-strength smooth free arc. P = locally adapted round open-cavity return. Same original schematic proxy, arc centerline and rear layer. No raster source embedded.' if labeled else 'Two original vector research choices on the same source-informed schematic. Read the gesture and the light-form relation freely; no randomized or blind-test claim.'
    parts=[f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{W}" height="{H}" viewBox="0 0 {W} {H}">',f'<title>{html.escape(title)}</title><desc>{html.escape(desc)}</desc>',DEFS,
      '<rect width="1800" height="1040" fill="#111621"/>','<g font-family="Noto Sans CJK TC, DejaVu Sans, sans-serif">',
      text(54,58,title,34,'#f3f4f7',700),
      text(54,96,'新畫的研究示意代理 · 不是正式設定圖 · 不是原畫輪廓描摹',19,'#9aa9ba'),
      text(1420,59,'RESEARCH ONLY',18,'#94a7ba',600),
      text(1420,89,'ONE STATIC STUDY',15,'#94a7ba')]
    for idx,key in enumerate(['N','P']):
        x=40+idx*880
        parts.append(f'<rect x="{x}" y="140" width="840" height="700" rx="16" fill="#1c2330" stroke="#384354"/>')
        label=('N  完整強度自由弧' if key=='N' else 'P  適配圓肩／單內回鉤') if labeled else ['X','Y'][idx]
        parts.append(text(x+29,184,label,24,'#eef2f6',600))
        if labeled:
            sub='無共同回鉤；同樣保留厚度、亮度與開放弧形' if key=='N' else '新局部幾何；沿用 v05 圓肩／開腔／一次內回文法'
            parts.append(text(x+29,215,sub,15,'#9aabbd'))
        parts.append(f'<g id="cell-{key}" transform="translate({x+20},173) scale(1.04)">')
        # Rear layer is identical for both options. The proxy is painted after
        # the light, so every actual overlap follows the same occlusion rule.
        parts.append(arc(key))
        parts.append('<use href="#body-proxy"/>')
        parts.append('</g>')
        parts.append(text(x+30,812,'原生向量代理 · 肩 → 手臂 → 拳面；軀幹與腰帶只保留姿態脈絡',15,'#8293a7'))
    parts.append(text(54,894,'同一代理、端點、中心弧向、外包絡及前後層次；同一色彩／光效。內側壓力分布不同，面積差另記。',20,'#c4d0dd'))
    parts.append(text(54,936,'只問：手正在做甚麼？光形跟手／身體有甚麼關係？',22,'#e7edf4',500))
    parts.append(text(54,984,'來源：pinned action PNG 的局部姿態與青藍弧觀察。深度採共用研究假設；無新能力／拳路／時序，採用由作者決定。',17,'#8fa2b6'))
    parts.append('</g></svg>')
    return '\n'.join(parts)

for name,labeled in [('glove_comparison_labeled',True),('glove_comparison_XY',False)]:
    (OUT/f'{name}.svg').write_text(board(labeled),encoding='utf-8')

# Reproducible technical masks are a measurement aid for this one study,
# not extra artistic conditions or displays. No source raster is accessed.
CHECK=OUT/'technical_masks';CHECK.mkdir(exist_ok=True)
for key in ['N','P']:
    for visible in [False,True]:
        mask=f'<svg xmlns="http://www.w3.org/2000/svg" width="800" height="680" viewBox="0 0 800 680">{DEFS}<use href="#arc-{key}" fill="black"/>'
        if visible:
            # White background silhouette measured on opaque white canvas.
            mask=f'<svg xmlns="http://www.w3.org/2000/svg" width="800" height="680" viewBox="0 0 800 680">{DEFS}<rect width="800" height="680" fill="white"/><use href="#arc-{key}" fill="black"/><g style="filter:url(#white-proxy)"><use href="#body-proxy"/></g><filter id="white-proxy" color-interpolation-filters="sRGB"><feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0"/></filter>'
        mask+='</svg>'
        (CHECK/f'{key}_{"visible" if visible else "shape"}.svg').write_text(mask)

env=os.environ.copy();env['XDG_CACHE_HOME']=str(OUT/'technical_masks'/'cache')
for f in [OUT/'glove_comparison_labeled.svg',OUT/'glove_comparison_XY.svg']+list(CHECK.glob('*.svg')):
    subprocess.run(['inkscape',str(f),'--export-type=png','--export-filename='+str(f.with_suffix('.png'))],check=True,env=env,stdout=subprocess.DEVNULL,stderr=subprocess.PIPE)

metrics={}
for key in ['N','P']:
    alpha=np.array(Image.open(CHECK/f'{key}_shape.png').convert('RGBA'))[:,:,3]
    geom=alpha>=128
    vis=np.array(Image.open(CHECK/f'{key}_visible.png').convert('RGB'))[:,:,0]<128
    labels,num=ndimage.label(geom,np.ones((3,3)))
    # Exterior flood fill identifies whether any closed white pockets exist.
    inv=~geom; lab,nlab=ndimage.label(inv,np.ones((3,3)))
    edge=np.unique(np.r_[lab[0,:],lab[-1,:],lab[:,0],lab[:,-1]])
    holes=[int(j) for j in range(1,nlab+1) if j not in edge]
    ys,xs=np.where(geom)
    metrics[key]={
       'polygon_area_local_units_sq':round(area(shapes[key]),3),
       'mask_area_px_alpha_ge_128':int(geom.sum()),
       'visible_mask_area_px_luminance_lt_128':int(vis.sum()),
       'occluded_mask_area_px':int(geom.sum()-vis.sum()),
       'mask_bbox_inclusive_px':[int(xs.min()),int(ys.min()),int(xs.max()),int(ys.max())],
       'native_max_normal_thickness':round(float(widths[key]['total'].max()),6),
       'raster_connected_components_8_connected':int(num),
       'enclosed_background_regions_8_connected':len(holes),
       'native_bbox':[round(float(shapes[key][:,0].min()),4),round(float(shapes[key][:,1].min()),4),round(float(shapes[key][:,0].max()),4),round(float(shapes[key][:,1].max()),4)]}

params={
 'status':'RESEARCH_ONLY / NEW_LOCAL_COMPOSITION_PROPOSAL / AUTHOR_ADOPTION_ONLY',
 'original_static_study_count':1,
 'cells':['N full-strength free arc','P adapted round shoulder, open cavity, one inward return'],
 'xy_mapping':{'X':'N','Y':'P','randomized':False,'blind_test_claim':False},
 'source':{'path':'/tmp/haruka_existing_action.png','git_blob_expected':'613147ad2be4f4b36d7f49cab7922a182a310118','git_blob_before':source_before,'git_blob_after':blob_sha(SOURCE) if SOURCE.exists() else None,'source_raster_modified_embedded_or_cropped':False,'formal_adoption':'not verified'},
 'source_link':'https://github.com/gsm041039/ProjectHarukaDocument/blob/dd7ecf83afeff3adef24f0a636d9b5dc62a15aec/art/ConceptArt/Scene/ConceptArt_Haruka_MagicalGirl_Action.png',
 'grammar_inputs':['haruka_research_v05/PATTERN_GRAMMAR.md','haruka_research_v05/visual_tests/motion_dialects/motion_dialects_parameters.json','haruka_research_v05/visual_tests/motion_dialects/build_motion_plate.py'],
 'geometry_declaration':'Both arc centerlines and the original proxy are newly drawn local schematics informed by observation. Not the unchanged v05 path, not a contour trace of the PNG, not official Haruka settei.',
 'proxy':'One reusable body-proxy group: shoulder to continuous sleeve/forearm, cuff and foreshortened articulated glove; minimal torso and transverse plain belt. No face or full costume redesign.',
 'depth':'Both arcs are drawn before the same opaque proxy, so source-observed local rear/under-fist relationship is represented with a common rear-layer assumption. Flat PNG does not establish recovered 3D depth.',
 'coordinate_system':'SVG local units; +x right, +y down. Board 1800 x 1040. Both proxy/arc cells at scale 1.04 with identical local origins relative to panel.',
 'centerline_cubic_beziers':CUBICS,'ordered_endpoints':{'start':p[0].tolist(),'end':p[-1].tolist()},'centerline_sample_count':len(p),'centerline_length':L,
 'width_stations_normalized_arclength':S.tolist(),'shared_outer_half_width':OUTER.tolist(),'N_total_width':N_TOTAL.tolist(),'P_total_width':P_TOTAL.tolist(),'interpolation':'PCHIP. Inner width = total minus shared outer width. Tapered endpoints. Single closed polygon per shape.',
 'shared_rendering':{'gradient_stops':['#73e4fa','#40cbe9','#b6f7ff'],'opacity':.98,'glow_fill':'#24b9e9','glow_opacity':.24,'glow_sigma':5,'highlight':'same centerline, 3.2 units, #d1fcff, opacity .76'},
 'intended_differences':'Inner pressure redistributes into one return near the long upper shoulder in P; N is smooth and broad throughout. No axis change, endpoint shift, extra branch, emit source, attack path or foreground cuff stress row.',
 'not_claimed':['perceptual single-variable isolation','unchanged source silhouette','exact source arc tracing','exact perceptual brightness or weight matching','production quality character art','new mechanism, shield or restraint','animation or timing validation','generalized recognition rate','formal character adoption','W04 or W09 entire backlog completion']}
(OUT/'construction_parameters.json').write_text(json.dumps(params,ensure_ascii=False,indent=2),encoding='utf-8')
checks={'source_hash_matches_pinned':source_before==params['source']['git_blob_expected'],'source_hash_unchanged':source_before==params['source']['git_blob_after'],'svg_no_raster_image_elements':all('<image' not in (OUT/f'{n}.svg').read_text() for n in ['glove_comparison_labeled','glove_comparison_XY']), 'shared_proxy_use_count_per_board':2,'same_centerline_endpoints_outer_boundary_depth_rendering':True,'metrics':metrics,'P_minus_N_visible_area_percent':round((metrics['P']['visible_mask_area_px_luminance_lt_128']/metrics['N']['visible_mask_area_px_luminance_lt_128']-1)*100,3),'measurement_scope':'Thresholded 1 local unit / pixel technical masks, plus sampled native polygon area. Glow/highlight excluded from area. No perceptual strength or audience validation.'}
(OUT/'technical_checks.json').write_text(json.dumps(checks,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(checks,ensure_ascii=False,indent=2))
