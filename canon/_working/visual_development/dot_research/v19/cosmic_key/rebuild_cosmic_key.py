#!/usr/bin/env python3
"""One original native-vector rough color key. No source PNG is read by the authoring pass.
Usage: python rebuild_cosmic_key.py
Inkscape is an already-installed SVG renderer. The PNG is a rendering of this SVG.
"""
from pathlib import Path
import math, random, subprocess, xml.etree.ElementTree as ET
OUT=Path(__file__).resolve().parent
W,H=1600,900
rng=random.Random(701928)
parts=[]
def put(s): parts.append(s)
def path(d,fill,op=1,stroke=None,sw=1):
    put(f'<path d="{d}" fill="{fill}" opacity="{op}"'+(f' stroke="{stroke}" stroke-width="{sw}"' if stroke else '')+'/>' )
def poly(pts,fill,op=1):
    put('<polygon points="'+' '.join(f'{x:.2f},{y:.2f}' for x,y in pts)+f'" fill="{fill}" opacity="{op}"/>')
def ell(x,y,rx,ry,fill,op=1,rot=0):
    put(f'<ellipse cx="{x:.2f}" cy="{y:.2f}" rx="{rx:.2f}" ry="{ry:.2f}" fill="{fill}" opacity="{op:.3f}" transform="rotate({rot:.2f} {x:.2f} {y:.2f})"/>')
def group(id,label):put(f'<g id="{id}" inkscape:groupmode="layer" inkscape:label="{label}">')
def end():put('</g>')
put('''<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="1600" height="900" viewBox="0 0 1600 900">
<title>斷帶／Black plane across a stellar stratum</title>
<desc>AI-authored original native-vector 16:9 rough colour key. One composition. Cold black masses, clustered white stellar bands, broad black gaps, and one small side-on inward-facing person at lower right. This is neither a tracing of C0 nor an independent human transfer test. Every visible mark is an SVG path or primitive; no embedded raster.</desc>
<defs>
  <linearGradient id="deep" x1="0" y1="0" x2="0.8" y2="1"><stop stop-color="#03060c"/><stop offset="0.7" stop-color="#04070c"/><stop offset="1" stop-color="#090e17"/></linearGradient>
  <linearGradient id="nearPlane" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#020407"/><stop offset="0.63" stop-color="#080c12"/><stop offset="1" stop-color="#101720"/></linearGradient>
  <linearGradient id="nearEdge" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#202b39"/><stop offset="0.55" stop-color="#101820"/><stop offset="1" stop-color="#34404c"/></linearGradient>
  <linearGradient id="ground" x1="0" y1="0" x2="0.3" y2="1"><stop stop-color="#29333f"/><stop offset="0.3" stop-color="#101821"/><stop offset="1" stop-color="#030509"/></linearGradient>
  <radialGradient id="starHalo"><stop stop-color="#eaf6ff" stop-opacity="0.75"/><stop offset="0.25" stop-color="#c6dcf3" stop-opacity="0.2"/><stop offset="1" stop-color="#91b5d7" stop-opacity="0"/></radialGradient>
</defs>''')
group('deep_field','00｜深冷黑底')
put('<rect width="1600" height="900" fill="url(#deep)"/>')
# The black gaps are deliberately sparse, not a uniformly star-sprinkled background.
for _ in range(190):
    x,y=rng.uniform(0,W),rng.uniform(0,H)
    ell(x,y,rng.uniform(.28,.75),rng.uniform(.28,.75),'#84919f',rng.uniform(.10,.38))
end()
group('blackmasses_rear','01｜主要黑形・後方長片')
# Broad slabs whose edges do not form a cave mouth. All leave the image boundaries.
path('M -120 58 L 558 -72 L 1558 -72 L 1295 12 L 1197 37 L 1136 35 L 1074 68 L 869 102 L 817 98 L 671 145 L 614 145 L 427 202 L 330 214 L 132 285 L -95 292 Z','#080d14')
path('M -90 393 L 150 359 L 222 337 L 293 332 L 346 304 L 495 280 L 552 282 L 755 239 L 803 220 L 967 194 L 1077 167 L 1185 158 L 1402 114 L 1667 39 L 1666 219 L 1487 239 L 1417 267 L 1282 283 L 1197 308 L 1028 326 L 862 366 L 679 388 L 467 451 L 325 470 L 141 524 L -85 548 Z','#0a1018')
path('M -90 710 L 85 676 L 123 661 L 245 643 L 294 614 L 452 592 L 595 557 L 667 552 L 840 505 L 967 492 L 1104 459 L 1225 447 L 1404 401 L 1660 356 L 1660 529 L 1471 549 L 1346 583 L 1197 600 L 990 639 L 866 653 L 701 684 L 611 687 L 414 739 L 316 747 L 98 807 L -90 817 Z','#080d14')
# Large muted planar facets, subordinate to silhouette and light channels.
for d,c in [
('M -80 414 L 547 302 L 856 238 L 577 329 L 206 420 L -80 477 Z','#151f2b'),
('M 614 292 L 1183 182 L 1480 120 L 1088 229 L 801 283 Z','#111923'),
('M -80 719 L 470 604 L 747 551 L 439 646 L 135 711 Z','#141e29'),
('M 824 540 L 1440 429 L 1630 388 L 1314 478 L 975 540 Z','#111923'),
('M 1288 309 L 1440 275 L 1675 233 L 1675 296 L 1516 324 L 1397 333 Z','#0d151f')]:path(d,c,.6)
# A few irregular lip facets: not a complete white outline around every plane.
for d in [
'M 0 538 L 133 508 L 169 506 L 227 486 L 254 488 L 362 461 L 417 456 L 492 432',
'M 920 344 L 1008 325 L 1056 326 L 1164 299 L 1236 291 L 1363 269 L 1434 249',
'M 73 806 L 211 774 L 244 775 L 320 750 L 366 751 L 471 725',
'M 1142 616 L 1249 594 L 1291 596 L 1394 568 L 1456 566 L 1588 537']:
    path(d,'none',.46,'#415061',1.3)
end()
group('starbands','02｜集中白星群層帶・可獨立搬動')
# Deliberately unequally spaced, non-concentric channels. Their density is clustered.
def band_y(i,x):
    if i==0:return 315-.269*x+19*math.sin(x/248+0.8)
    if i==1:return 606-.232*x+21*math.sin(x/268+0.1)
    return 875-.215*x+17*math.sin(x/338+0.7)
# Each channel has native-vector nebular ribbons, cloud shreds, and star clusters.
for i in range(3):
    put(f'<g id="stellar_channel_{i+1}">')
    for j in range(9):
        xs=list(range(-90,1691,21))
        phase=rng.uniform(0,6.28)
        pts=[]
        for x in xs:
            n=5*math.sin(x/21+phase)+10*math.sin(x/74+phase)
            w=(21+17*math.sin(x/129+phase)**2)*(1-j*.061)
            pts.append((x,band_y(i,x)+n-w+rng.uniform(-6,6)))
        for x in reversed(xs):
            n=5*math.sin(x/21+phase)+10*math.sin(x/74+phase)
            w=(21+17*math.sin(x/129+phase)**2)*(1-j*.061)
            pts.append((x,band_y(i,x)+n+w+rng.uniform(-6,6)))
        poly(pts,['#718294','#9aadc1','#c2d0df'][j%3],.020+(.004*j))
    centers=[rng.uniform(-30,1620) for _ in range(36)]
    for c in centers:
        cy=band_y(i,c)+rng.uniform(-14,14)
        # Uneven pale cloud fragments, tilted with the band's local direction.
        for _ in range(rng.randint(9,23)):
            x=c+rng.gauss(0,28); y=band_y(i,x)+(cy-band_y(i,c))+rng.gauss(0,12)
            rx=rng.uniform(3,15); ry=rng.uniform(.5,3.8)
            poly([(x-rx,y+ry*.5),(x-rx*.3,y-ry),(x+rx*.4,y-ry*.6),(x+rx,y-ry*.1),(x+rx*.25,y+ry),(x-rx*.45,y+ry*.7)],'#d2deec',rng.uniform(.045,.16))
    for _ in range(2500):
        c=rng.choice(centers); x=c+rng.gauss(0,33)
        y=band_y(i,x)+rng.gauss(0,15 if rng.random()<.90 else 34)
        sz=.25+rng.random()**3*1.85
        col=rng.choice(['#eff7ff','#d5e4f6','#a6bed8','#ffffff'])
        ell(x,y,sz,sz*.79,col,rng.uniform(.30,.96),-15)
    for _ in range(27):
        x=rng.uniform(-30,1630);y=band_y(i,x)+rng.gauss(0,15)
        r=rng.uniform(7,17)
        ell(x,y,r*2.0,r*.65,'url(#starHalo)',.65,-15)
        ell(x,y,rng.uniform(1,2),rng.uniform(.9,1.6),'#fcfdff',.98)
        if rng.random()<.39:
            path(f'M {x-5:.2f} {y+1.1:.2f} L {x+5:.2f} {y-1.1:.2f} M {x-.7:.2f} {y-4:.2f} L {x+.7:.2f} {y+4:.2f}','none',.55,'#eaf4ff',.65)
    end()
# Galaxies have a luminous dense core and broken spiral paths, not giant ring forms.
def galaxy(x,y,rx,ry,rot):
    put(f'<g transform="translate({x} {y}) rotate({rot})">')
    ell(0,0,rx*1.8,ry*2.7,'url(#starHalo)',.6)
    for arm in range(3):
        pts=[]
        for k in range(52):
            t=k/51;r=(.12+.88*t)*rx;ang=arm*2*math.pi/3+4.15*t
            pts.append((r*math.cos(ang),r*ry/rx*math.sin(ang)))
        d='M '+' L '.join(f'{a:.2f} {b:.2f}' for a,b in pts)
        path(d,'none',.40,'#d9e5f3',1.5)
        for a,b in pts[::2]:ell(a+rng.uniform(-2,2),b+rng.uniform(-1,1),rng.uniform(.4,1.3),.5,'#f0f6ff',rng.uniform(.35,.9))
    ell(0,0,rx*.27,ry*.42,'#cbdced',.53)
    ell(0,0,rx*.15,ry*.27,'#f6faff',.8)
    ell(0,0,rx*.063,ry*.18,'#ffffff',1)
    end()
galaxy(227,band_y(1,227)-2,47,11,-13)
galaxy(1437,band_y(1,1437)+3,30,9,-18)
galaxy(963,band_y(2,963)-4,51,13,-10)
galaxy(422,band_y(0,422)-3,19,7,-13)
galaxy(1357,band_y(2,1357),16,5,-20)
end()
group('blackmasses_foreground','03｜近場巨黑斜面・截斷中景星帶')
# One large original foreground silhouette. Its taper moves across the picture
# and interrupts the middle channel. No counterpart to C0's vertical left pillar.
path('M 315 -90 L 963 -90 L 1008 32 L 1011 122 L 1045 180 L 1038 235 L 1073 302 L 1070 360 L 1103 430 L 1088 477 L 1110 518 L 1036 566 L 1001 570 L 948 615 L 895 626 L 852 665 L 797 626 L 788 589 L 736 551 L 708 497 L 652 464 L 634 421 L 573 378 L 551 331 L 496 293 L 482 257 L 423 210 L 414 172 L 369 130 L 344 70 Z','url(#nearPlane)')
# Its thickness reads as a restrained cold bevel; most of the plane stays black.
path('M 963 -90 L 1032 -90 L 1086 61 L 1085 123 L 1119 190 L 1116 240 L 1149 306 L 1145 365 L 1171 431 L 1160 481 L 1176 524 L 1110 569 L 1052 585 L 998 628 L 920 651 L 852 665 L 895 626 L 948 615 L 1001 570 L 1036 566 L 1110 518 L 1088 477 L 1103 430 L 1070 360 L 1073 302 L 1038 235 L 1045 180 L 1011 122 L 1008 32 Z','url(#nearEdge)')
path('M 353 -22 L 479 87 L 658 298 L 768 384 L 792 490 L 852 576 L 824 591 L 744 500 L 680 454 L 584 327 L 498 275 L 422 150 Z','#111923',.72)
path('M 516 -45 L 662 95 L 746 234 L 914 444 L 950 558 L 888 488 L 827 387 L 705 245 L 644 146 Z','#101720',.42)
path('M 882 -46 L 894 110 L 942 215 L 947 284 L 985 341 L 996 434 L 1043 493 L 988 397 L 966 301 L 917 173 Z','#1a2430',.40)
path('M 422 173 L 465 242 L 541 306 L 567 357 L 642 421 L 675 470 L 740 527 L 774 580 L 827 623','none',.56,'#273542',1.15)
# Broken stony chips and immense fracture planes, not edge-hugging decoration.
for pts,co,op in [
([(375,87),(431,152),(441,190),(398,142)],'#26303b',.36),
([(559,320),(624,360),(659,408),(598,370)],'#25313d',.28),
([(721,462),(752,495),(741,505),(708,475)],'#344150',.24),
([(1026,254),(1049,272),(1080,337),(1059,334)],'#36414b',.40),
([(1084,419),(1127,467),(1137,488),(1102,477)],'#44515c',.28),
([(916,617),(958,592),(989,591),(950,624)],'#5a6570',.40),
([(982,72),(1001,123),(997,149),(973,118)],'#32404d',.3)]:poly(pts,co,op)
# Satellite fragments are clustered near the cut, not globally peppered.
for x,y,s in [(337,247,20),(459,372,12),(662,538,11),(747,644,14),(807,697,10),(981,678,9),(1133,607,12),(1184,466,8)]:
    poly([(x-s*.6,y-s),(x+s*.3,y-s*.6),(x+s,y+s*.3),(x+s*.1,y+s),(x-s*.7,y+s*.4)],'#080d14')
    poly([(x-s*.6,y-s),(x+s*.3,y-s*.6),(x+s*.15,y-s*.2),(x-s*.45,y+s*.3)],'#273542',.5)
end()
group('person_nearfield','04｜人物＋近景・側身朝內')
# Nearfield is a small independent ledge. It is not described as holding the cosmos.
path('M 820 900 L 849 869 L 921 854 L 950 831 L 1010 826 L 1043 807 L 1118 801 L 1165 781 L 1212 786 L 1268 774 L 1314 779 L 1362 757 L 1431 752 L 1488 729 L 1610 708 L 1630 930 Z','url(#ground)')
path('M 849 869 L 934 850 L 953 834 L 1017 829 L 1043 811 L 1121 805 L 1165 785 L 1214 790 L 1269 779 L 1312 784 L 1363 762 L 1432 757 L 1491 734 L 1608 714 L 1545 749 L 1469 772 L 1389 785 L 1315 807 L 1214 813 L 1127 836 L 1032 844 L 963 866 Z','#2a3542',.55)
path('M 1299 810 L 1391 788 L 1429 834 L 1392 903 L 1331 900 L 1355 861 Z','#05090f')
path('M 1050 851 L 1128 836 L 1148 899 L 1082 917 Z','#070b11')
path('M 1459 779 L 1556 750 L 1525 818 L 1572 897 L 1506 912 Z','#111923')
for d,op in [('M 900 872 L 1002 849 L 1046 849',.4),('M 1118 807 L 1164 788 L 1216 793 L 1268 783',.75),('M 1271 782 L 1309 787 L 1367 764 L 1430 759',.7),('M 1456 784 L 1538 756',.6)]:path(d,'none',op,'#73818f',1.1)
# Original human silhouette, 116 px tall. Profile faces left, with no reaching gesture.
put('<g id="side_on_person" transform="translate(1250 667)">')
# Long coat and trousers.
path('M 18 38 L 8 49 L 1 75 L -6 91 L 2 96 L 16 83 L 21 64 L 28 63 L 29 89 L 39 94 L 46 82 L 40 60 L 36 43 L 27 37 Z','#111921')
path('M 16 77 L 26 81 L 19 107 L 14 114 L 4 115 L 4 111 L 11 106 Z','#090e14')
path('M 29 79 L 39 78 L 39 110 L 44 114 L 43 119 L 27 118 L 29 113 Z','#0a0f16')
# Lit edge of face is a profile with a readable forehead, nose and chin.
path('M 18 15 L 10 19 L 7 25 L 3 28 L 7 31 L 7 35 L 14 38 L 15 43 L 24 42 L 23 34 L 27 24 Z','#aeb8c1')
path('M 7 25 L 12 24 L 11 30 L 8 31 L 10 34 L 15 35 L 15 38 L 7 35 L 7 31 L 3 28 Z','#dbe4e9',.8)
# Hair follows the bowed side profile, with a short windward tail.
path('M 7 21 C 8 12 18 7 26 13 C 33 17 34 25 31 32 L 37 39 L 27 37 L 24 27 L 18 19 L 12 25 Z','#070b11')
path('M 11 17 Q 22 8 28 18 L 29 23','none',.63,'#667586',1)
path('M 17 38 L 12 45 L 17 58 L 25 45 L 27 39 L 23 41 Z','#6e7d8c',.7)
path('M 25 46 L 33 44 L 36 64 L 31 77 L 35 90 L 29 89 L 28 64 Z','#273542',.8)
path('M 11 50 L 8 66 L 2 87 L -3 91 L 8 79 L 15 57 Z','#293644',.9)
# Relaxed near arm and small ungloved hand; no controlling or supporting claim.
path('M 15 48 L 22 50 L 18 68 L 13 79 L 9 77 L 12 64 Z','#17232e')
path('M 13 75 L 12 83 L 9 86 L 7 85 L 8 78 Z','#aeb8c1')
path('M 18 108 L 14 114 L 5 115 M 39 110 L 42 114','none',.60,'#7d8c9c',1)
end()
# A few small near-field rock planes provide scale without another compositional event.
for pts in [[(1209,790),(1221,781),(1231,785),(1236,793)],[(1318,780),(1334,772),(1340,780),(1333,786)],[(1109,817),(1128,808),(1139,813),(1133,820)],[(1416,765),(1427,747),(1433,753),(1436,764)]]:
    poly(pts,'#111b25');poly(pts[:3],'#465361',.54)
end()
put('</svg>')
svg=OUT/'cosmic_key_native.svg'
svg.write_text('\n'.join(parts),encoding='utf-8')
root=ET.parse(svg).getroot()
ns={'s':'http://www.w3.org/2000/svg'}
assert not root.findall('.//s:image',ns), 'No embedded raster permitted'
assert root.attrib['viewBox']=='0 0 1600 900'
# Render only the newly-authored native-vector file; the reference PNG is never edited.
subprocess.run(['inkscape',str(svg),'--export-type=png',f'--export-filename={OUT / "cosmic_key_render.png"}','--export-width=1600','--export-height=900'],check=True)
print(f'Written {svg}; {len(list(root.iter()))} SVG elements; 0 raster image elements; 1600x900 native 16:9.')
