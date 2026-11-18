import re,os,sys,hashlib,json
sys.path.insert(0,'../v7_build'); import figures_v7 as F
SD='/workspace/haruka/lab/canon/_working/skill_distill/'; IMG=SD+'SKILL_EXAMPLES_IMG_20261110/'; H='/workspace/haruka/'
md5=lambda p:hashlib.md5(open(p,'rb').read()).hexdigest()
NEW=[IMG+'INTEGRATION_RULES_R2_20261110.md',IMG+'RULES_FROM_EXAMPLES_FINAL_20261110.md',SD+'SKILL_DRAFT_character_design_core_v8_20261110.md',SD+'SKILL_REF_character_design_sources_v8_20261110.md',IMG+'CHANGELOG_v7_to_v8_20261110.md',IMG+'RULES_OVERVIEW_v8_20261110.png',IMG+'RULES_OVERVIEW_v8_20261110.sources.json']
out={}
# 1 paths
miss=[];n=0
for p in NEW:
    if not p.endswith('.md'): continue
    for tok in re.findall(r'`([^`\s]+/[^`\s]*\.(?:png|jpg|md|py|json|txt|pdf))`',open(p).read()):
        if '…' in tok: continue
        n+=1
        c=[H+tok,H+'research/'+tok,SD+tok,IMG+tok,IMG+'rules_r2_integration/'+tok,H+'research/tv_simplify/img_examples_20261110/'+tok]
        if not any(os.path.exists(x) for x in c): miss.append((os.path.basename(p),tok))
for g,l in json.load(open(IMG+'RULES_OVERVIEW_v8_20261110.sources.json')).items():
    for e in l:
        n+=1
        if not os.path.exists(H+e['path']): miss.append(('overview',e['path']))
out['paths_checked']=n; out['paths_missing']=miss
# 2 numbers in v8 §1A
v8=open(NEW[2]).read(); a=v8.index('## 1A.'); b=v8.index('## 2. Brief')
sec=v8[a:b]
valid=set()
for ex,l in F.VALID.items():
    for nums,_,_ in l: valid.update(nums.split())
ref13=open(NEW[3]).read(); r13=ref13[ref13.index('## 13.'):ref13.index('## 14.')]
r1i=open(IMG+'INTEGRATION_RULES_R1_20261110.md').read()
v7=open(SD+'SKILL_DRAFT_character_design_core_v7_20261110.md').read()
def norm(x): return x.rstrip('0').rstrip('.') if '.' in x else x
unm=[]
for line in sec.split('\n'):
    for x in re.findall(r'\d+\.\d+',line):
        ok = x in valid or norm(x) in valid or x in r13 or '方向新量' in line or x in v7
        if not ok: unm.append((x,line[:80]))
out['sec1A_decimals_unmatched']=unm
# 3 VOID
vh=[]
for ex,l in F.VOID.items():
    for tok,_,_ in l:
        if tok.startswith('phrase:'):
            if tok[7:] in sec: vh.append((ex,tok))
        else:
            for m in re.finditer(r'(?<![\d.])'+re.escape(tok)+r'(?![\d.])',sec): vh.append((ex,tok,sec[max(0,m.start()-40):m.end()+20].replace('\n',' ')))
out['void_hits_sec1A']=vh
# 4 forbidden ids
bad=[]
for p in NEW:
    if p.endswith('.png'): continue
    for m in re.finditer(r'CND|SUG|D-',open(p).read()): bad.append((os.path.basename(p),m.group()))
out['forbidden']=bad
# 5 md5 untouched
EXP={'SKILL_DRAFT_character_design_core_v7_20261110.md':'ed7032939f23e4b96a227615ecbe5eb4','SKILL_REF_character_design_sources_v7_20261110.md':'be96876065530a2952ea54e4e2686756',
'SKILL_EXAMPLES_IMG_20261110/RULES_FROM_EXAMPLES_DRAFT_R1_20261110.md':'49970413def0d2ddc87c515384ddd735','SKILL_EXAMPLES_IMG_20261110/BRIEF_RULES_R1_20261110.md':'eda286dae3d8a4735f63129c5d645389','SKILL_EXAMPLES_IMG_20261110/MSG_RULES_R1_20261110.txt':'13d07e56807962229c14d2ad5ac50f06',
'SKILL_EXAMPLES_IMG_20261110/INTEGRATION_RULES_R1_20261110.md':'c56e486c78692062f09ad720f4ef2d58','SKILL_EXAMPLES_IMG_20261110/RULES_FROM_EXAMPLES_DRAFT_R2_20261110.md':'8b874b4c57f08ff394c93ec25027d475','SKILL_EXAMPLES_IMG_20261110/BRIEF_RULES_R2_20261110.md':'8618e7c5eca9e7a1f677431e3b863826','SKILL_EXAMPLES_IMG_20261110/MSG_RULES_R2_20261110.txt':'088da556b1a34e3b114ff14380bfa825'}
out['untouched']={k:md5(SD+k)==v for k,v in EXP.items()}
J=json.load(open(IMG+'rules_r2_integration/parsed_r2_votes.json'))
out['votes_untouched']=all(md5(v['path'])==v['md5'] for v in J['files'].values())
out['bak_match']=md5(SD+'SKILL_DRAFT_character_design_core_v7_20261110.md.bak_20261110_pre_v8')==EXP['SKILL_DRAFT_character_design_core_v7_20261110.md'] and md5(SD+'SKILL_REF_character_design_sources_v7_20261110.md.bak_20261110_pre_v8')==EXP['SKILL_REF_character_design_sources_v7_20261110.md']
# v8 contains v7 body otherwise: diff stats
import difflib
d=[l for l in difflib.unified_diff(v7.split('\n'),v8.split('\n'),lineterm='',n=0) if l.startswith('-') and not l.startswith('---')]
out['v7_lines_removed_in_v8']=d
r7=open(SD+'SKILL_REF_character_design_sources_v7_20261110.md').read()
out['ref7_lines_removed_in_ref8']=[l for l in difflib.unified_diff(r7.split('\n'),open(NEW[3]).read().split('\n'),lineterm='',n=0) if l.startswith('-') and not l.startswith('---')]
out['new_md5']={os.path.relpath(p,SD):md5(p) for p in NEW}
print(json.dumps(out,ensure_ascii=False,indent=1))
json.dump(out,open('check_v8_result.json','w'),ensure_ascii=False,indent=1)
