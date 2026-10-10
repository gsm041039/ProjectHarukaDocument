from pathlib import Path
import math,random,json,subprocess
from PIL import Image
p=Path('haruka_research_v04/visual_tests'); frames=p/'sequence_frames'
random.seed(42)
stars=''.join(f'<circle cx="{random.randrange(720)}" cy="{random.randrange(240)}" r="{random.choice([.6,.8,1,1.6])}" fill="#{random.choice(["9cbacb","d2e2ee","f5f6ff"])}"/>' for _ in range(165))
yfar=240-200*math.sin(math.radians(35))
marks=[240-200*y*math.sin(math.radians(35)) for y in [.25,.82]]
def svg(q,annotated=True):
 dy=-200*q*math.cos(math.radians(35))
 s=f'<svg xmlns="http://www.w3.org/2000/svg" width="940" height="420" viewBox="0 0 940 420"><defs><clipPath id="main"><rect width="720" height="420"/></clipPath></defs><rect width="940" height="420" fill="#0c1421"/><g clip-path="url(#main)">{stars}<g id="moving-skin" transform="translate(0 {dy:.6f})"><rect x="-20" y="{yfar}" width="760" height="{240-yfar}" fill="#7b8185"/>'
 for x in range(-50,751,100):s+=f'<path d="M{x} {yfar} V240" stroke="#3e484f" stroke-width="3"/>'
 s+=f'<path d="M0 {yfar+40} H720 M0 {yfar+80} H720" stroke="#495359" stroke-width="3"/>'
 s+=f'<path d="M218 {marks[0]-4} l11 -3 l4 9 l-7 2" fill="none" stroke="#d9d4b9" stroke-width="4"/><path d="M455 {marks[1]-5} l15 4 l-2 6 M461 {marks[1]-5} l2 13" fill="none" stroke="#d9d4b9" stroke-width="4"/></g>'
 s+='<g id="fixed-foreground"><rect x="0" y="240" width="720" height="180" fill="#434d54"/><path d="M0 241 H720" stroke="#b6bcc0" stroke-width="3"/><path d="M75 240 L91 278 L82 305 L105 347 M370 240 L356 291 L367 328 M0 340 H720" fill="none" stroke="#252f36" stroke-width="3"/></g></g>'
 if annotated:
  s+=f'<rect x="720" width="220" height="420" fill="#f3f4f6"/><g font-family="sans-serif" fill="#202936"><text x="736" y="31" font-size="18">SIDE SECTION</text><text x="736" y="59" font-size="15">q = {q:.3f} W</text><text x="736" y="83" font-size="13">Declared normal motion</text><path d="M739 150 H820" stroke="#465361" stroke-width="6"/><path d="M820 {150-q*100} H920" stroke="#be784f" stroke-width="5"/><path d="M820 119 V285" stroke="#7c8c9a" stroke-dasharray="4 4"/><text x="735" y="136" font-size="12">z=0</text><text x="835" y="278" font-size="13">-z / inward</text><text x="736" y="322" font-size="12">Fixed camera 35 deg</text><text x="736" y="344" font-size="12">No rotation or alpha fade</text><text x="736" y="377" font-size="12">Geometry test only</text><text x="736" y="397" font-size="12">Not material validation</text></g>'
 else:s+='<rect x="720" width="220" height="420" fill="#0c1421"/>'
 return s+'</svg>'
qs=[]
for i in range(37):
 t=i/30;u=min(1,max(0,(t-.2)/.8));u=u*u*(3-2*u);q=-.82*u;qs.append(q)
 f=frames/f'f{i:03}.svg';f.write_text(svg(q));subprocess.run(['inkscape',str(f),'--export-type=png','--export-filename='+str(f.with_suffix('.png'))],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL,check=True)
ims=[Image.open(frames/f'f{i:03}.png').convert('RGB') for i in range(37)]
ims[0].save(p/'inward_normal_motion.gif',save_all=True,append_images=ims[1:],duration=[33]*36+[900],loop=0)
# Three actual key poses from the same formula, not separately generated images.
board=Image.new('RGB',(940,1260),'white')
for j,i in enumerate([6,18,30]):board.paste(ims[i],(0,j*420))
board.save(p/'inward_keyposes.png')
# Export unannotated source animation and editable annotated master with declarative transform animation.
text=svg(0)
anim='<animateTransform attributeName="transform" type="translate" values="0 0;0 0;0 134.340936;0 134.340936" keyTimes="0;0.1666667;0.8333333;1" dur="1.2s" calcMode="spline" keySplines="0 0 1 1;0.42 0 0.58 1;0 0 1 1" repeatCount="1" fill="freeze"/>'
# Sampled GIF is authoritative timing; this SVG is an editable illustrative animation with CSS-like easing.
(p/'inward_animation.svg').write_text(text.replace('<g id="moving-skin" transform="translate(0 0.000000)">','<g id="moving-skin">'+anim))
trace={'fps':30,'frame_count':37,'projection':'Y = 240 - 200*y*sin35 - 200*q*cos35','q_curve':'q=-0.82*smoothstep(clamp((t-0.2)/0.8))','key_frames':[6,18,30],'q_key':[qs[i] for i in [6,18,30]],'moving_layer_rotation':0,'moving_layer_alpha':1,'raw_mark_Y':marks,'starfield_seed':42,'fixed_seam_Y':240,'limits':'Declared signed-normal geometry; perspective ambiguity remains. No peel/curl, burnt-paper texture or reader result validated. GIF replay resets after final hold.'}
(p/'inward_motion_spec.json').write_text(json.dumps(trace,indent=2));print(trace)
