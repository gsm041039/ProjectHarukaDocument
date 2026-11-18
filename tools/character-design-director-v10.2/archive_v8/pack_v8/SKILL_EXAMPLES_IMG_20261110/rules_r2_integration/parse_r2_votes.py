"""Parse 14 R2 vote files directly (votes for 12 rules; G14/G15 x 14 matrices). Hand table HAND is the integrator's
reading of each file; the script cross-checks parsed vs hand and fails loudly on mismatch."""
import re,json,hashlib
D=['audience_market','color_value','commercial','construction_fashion','flow_structure','head_hair','identity_canon',
   'motif_world','originality','performance_motion','production_critic','psychology','silhouette_cast','tv_simplify']
AB={'audience_market':'AM','color_value':'CV','commercial':'CO','construction_fashion':'CF','flow_structure':'FS','head_hair':'HH',
    'identity_canon':'IDC','motif_world':'MW','originality':'OR','performance_motion':'PM','production_critic':'PC','psychology':'PSY',
    'silhouette_cast':'SC','tv_simplify':'TVS'}
R=['G03','G05','G06','G07','G08','G09','G10','G11','G12','G13','G14','G15']
def cell(c):
    c=c.strip().strip('*')
    if re.match(r'S（[^）]*）＋C',c): return 'S/C'  # PM EX14: 'S（外包絡）＋C（入頭框）'
    m=re.match(r'(S/C|S|C|NA|NT)\b',c); return m.group(1) if m else None
HAND={ # integrator reading (EX01..EX14)
'AM':  {'G14':'S NA NA S S NA NA NA S S NA S S S','G15':'NA NA NA S S NA NA NA NA NA NA S NA S'},
'CV':  {'G14':'S S S S S S NA S S S S S S S','G15':'NA NT NA S S NA NA NA NA NA NA S NA S'},
'CO':  {'G14':'S S S S S S NA S S S S S S S','G15':'NA NT NA S S NA NT NA S NA NA S NT S'},
'CF':  {'G14':'S S S S S S S S S S S S S S','G15':'NA S NA S S NA NA NA NA NA NA S NA S'},
'FS':  {'G14':'S S S S S S NT S S S S S NT S','G15':'NA S/C NA S S NA NA NA S NA NA S NA S'},
'HH':  {'G14':'S S S S S S S S S S S S S S','G15':'NA NA NA S S NA NA NA S NA NA S NA S'},
'IDC': {'G14':'S S S S S S S S S S S S S S','G15':'NA NA NA S S NA NA NA NA NA NA S NA S'},
'MW':  {'G14':'S S S S S S S S S S S S S S','G15':'NA NT NA S S NA NA NA S NA NA S NA S'},
'OR':  {'G14':'S S S S S S NT S S S S S S S','G15':'NA NA NA S S NA NA NA NA NA NA S NA S'},
'PM':  {'G14':'S S S S S NA NT S S S NT S S S','G15':'S S NA S S NA NT NA S NA NA S NA S/C'},
'PC':  {'G14':'S S S S S S NA S S S NA S S S','G15':'NA NA NA S S NA NA NA NA NA NA S NA S'},
'PSY': {'G14':'S S S S S S NA S S S NA S S S','G15':'NA NA NA S S NA NA NA NA NA NA S NA S'},
'SC':  {'G14':'S S S S S S NA S S S S S S S','G15':'NA NA NA S S NA NA NA NA NA NA S NA S'},
'TVS': {'G14':'S S S S S S NT S S S S S S S','G15':'NA NA NA S S NA NA NA NA NA NA S NT S'},
}
out={'files':{},'votes':{},'matrix':{}}
for d in D:
    p=f'/workspace/haruka/research/{d}/RULES_FROM_EXAMPLES_R2_VOTE_20261110.md'; t=open(p,encoding='utf-8').read(); a=AB[d]
    out['files'][a]={'path':p,'md5':hashlib.md5(t.encode()).hexdigest()}
    sec1=t.split('## 2')[0]; v={}
    for g in R:
        m=re.search(r'^\|\s*'+g+r'\s*\|\s*\**(ACCEPT_WITH_EDITS|ACCEPT|REJECT)\**\s*\|',sec1,re.M)
        v[g]=m.group(1) if m else None
    assert all(v.values()),(a,v); out['votes'][a]=v
    # matrix: row style
    mat={}
    for g in ('G14','G15'):
        m=re.search(r'^\|\s*'+g+r'\s*\|(.+)$',t.split('## 2',1)[1],re.M)
        if m:
            cells=[cell(c) for c in m.group(1).split('|')[:14]]
            if all(cells): mat[g]=cells
    if a=='OR':  # per-example rows
        rows=re.findall(r'^\|\s*EX(\d\d)\s*\|\s*(\S+)\s*\|\s*(\S+)\s*\|',t,re.M)
        mat={'G14':[r[1] for r in rows][:14],'G15':[r[2] for r in rows][:14]}
    for g in ('G14','G15'):
        h=HAND[a][g].split()
        if g in mat: assert mat[g]==h,(a,g,mat[g],h)
        else: print('hand-only (cells are prose):',a,g)
        out['matrix'].setdefault(g,{})[a]=h
json.dump(out,open('parsed_r2_votes.json','w'),ensure_ascii=False,indent=1)
from collections import Counter
c=Counter(x for a in out['votes'] for x in out['votes'][a].values()); print(c)
for a in out['votes']: print(a,[g for g,x in out['votes'][a].items() if x!='ACCEPT'])
