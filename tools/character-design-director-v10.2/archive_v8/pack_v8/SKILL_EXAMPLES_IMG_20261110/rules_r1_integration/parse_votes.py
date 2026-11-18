import re,json,glob,os
R='/workspace/haruka/research'
DIRS=[('audience_market','AM'),('color_value','CV'),('commercial','CO'),('construction_fashion','CF'),('flow_structure','FS'),('head_hair','HH'),('identity_canon','IDC'),('motif_world','MW'),('originality','OR'),('performance_motion','PM'),('production_critic','PC'),('psychology','PSY'),('silhouette_cast','SC'),('tv_simplify','TVS')]
G=[f'G{i:02d}' for i in range(1,14)]
out={}
for d,ab in DIRS:
    t=open(f'{R}/{d}/RULES_FROM_EXAMPLES_R1_VOTE_20261110.md',encoding='utf-8').read()
    votes={};texts={};mat={}
    for line in t.splitlines():
        m=re.match(r'^\|\s*\**(G\d\d)\**\s*\|(.*)\|\s*$',line)
        if not m: continue
        g=m.group(1); cells=[c.strip() for c in m.group(2).split('|')]
        v=re.sub(r'[*`]','',cells[0]).strip()
        if g not in votes and v in('ACCEPT','ACCEPT_WITH_EDITS','REJECT'):
            votes[g]=v; texts[g]=cells[1:]
        elif g not in mat and len(cells)>=14 and all(re.fullmatch(r'\**(S|C|NA|NT|P)\**\*?',re.sub(r'\s','',c)) for c in cells[:14]):
            mat[g]=[re.sub(r'[\s]','',c).replace('**','') for c in cells[:14]]
    out[ab]={'votes':votes,'texts':texts,'mat':mat}
    miss=[g for g in G if g not in votes]; missm=[g for g in G if g not in mat]
    print(ab, ''.join({'ACCEPT':'A','ACCEPT_WITH_EDITS':'E','REJECT':'R'}[votes[g]] for g in G if g in votes), 'missV',miss,'missM',missm)
json.dump(out,open('parsed_votes.json','w'),ensure_ascii=False,indent=1)
