import json
d=json.load(open('/workspace/haruka/lab/canon/_working/skill_distill/SKILL_EXAMPLES_IMG_20261110/rules_r1_integration/parsed_votes.json'))
G=[f'G{i:02d}' for i in range(1,14)]
DIRS=list(d.keys())
def vote_table():
    sh={'ACCEPT':'ACC','ACCEPT_WITH_EDITS':'**AWE**','REJECT':'REJ'}
    L=['| 方向 | '+' | '.join(G)+' |','|---|'+'---|'*13]
    for ab in DIRS: L.append(f'| {ab} | '+' | '.join(sh[d[ab]['votes'][g]] for g in G)+' |')
    L.append('| **ACC／AWE／REJ** | '+' | '.join(f"{sum(d[a]['votes'][g]=='ACCEPT' for a in DIRS)}／{sum(d[a]['votes'][g]=='ACCEPT_WITH_EDITS' for a in DIRS)}／{sum(d[a]['votes'][g]=='REJECT' for a in DIRS)}" for g in G)+' |')
    return '\n'.join(L)
def norm(x):
    x=x.replace('*','')
    return {'P':'S'}.get(x,x)  # HH P (PARTLY) counted as S-partial, shown separately
def matrix():
    L=['| 規則 | '+' | '.join(f'EX{i:02d}' for i in range(1,15))+' |','|---|'+'---|'*14]
    cons={}
    for g in G:
        cells=[]
        for i in range(14):
            vals=[d[a]['mat'][g][i] for a in DIRS]
            S=sum(v.startswith('S') for v in vals); P=sum(v=='P' for v in vals); C=sum(v.startswith('C') for v in vals)
            NA=sum(v=='NA' for v in vals); NT=sum(v=='NT' for v in vals)
            tested=S+P+C
            if C>0: lab='S/C' if S+P>0 else 'C'
            elif tested>=NA and tested>0: lab='S'
            elif NA>tested: lab='NA'
            else: lab='NT'
            cons[(g,i)]=lab
            parts=[f'{S}S'] + ([f'{P}P'] if P else []) + ([f'{C}C'] if C else []) + [f'{NA}NA']+([f'{NT}NT'] if NT else [])
            cells.append(f'**{lab}** '+'·'.join(parts))
        L.append(f'| {g} | '+' | '.join(cells)+' |')
    return '\n'.join(L), cons
if __name__=='__main__':
    print(vote_table()); m,c=matrix(); print(m)
    for g in G: print(g, sum(1 for i in range(14) if c[(g,i)] in('S','S/C')))
