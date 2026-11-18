import json
from collections import Counter
J=json.load(open('/workspace/haruka/lab/canon/_working/skill_distill/SKILL_EXAMPLES_IMG_20261110/rules_r2_integration/parsed_r2_votes.json'))
R=['G03','G05','G06','G07','G08','G09','G10','G11','G12','G13','G14','G15']
A=list(J['votes'])
AB={'ACCEPT':'ACC','ACCEPT_WITH_EDITS':'**AWE**','REJECT':'REJ'}
def vote_table():
    L=['| 方向 | '+' | '.join(R)+' |','|---|'+'---|'*len(R)]
    for a in A: L.append(f'| {a} | '+' | '.join(AB[J['votes'][a][g]] for g in R)+' |')
    tot=[Counter(J['votes'][a][g] for a in A) for g in R]
    L.append('| **合計 ACC／AWE／REJ** | '+' | '.join(f"{c['ACCEPT']}／{c['ACCEPT_WITH_EDITS']}／{c['REJECT']}" for c in tot)+' |')
    return '\n'.join(L)
def matrix(g):
    L=['| 方向 | '+' | '.join(f'EX{i:02d}' for i in range(1,15))+' |','|---|'+'---|'*14]
    for a in A: L.append(f'| {a} | '+' | '.join(J['matrix'][g][a])+' |')
    cnt=[Counter(J['matrix'][g][a][i] for a in A) for i in range(14)]
    def s(c): return '·'.join(f'{k}{c[k]}' for k in ('S','S/C','C','NA','NT') if c[k])
    L.append('| **計數** | '+' | '.join(s(c) for c in cnt)+' |')
    return '\n'.join(L),cnt
if __name__=='__main__':
    print(vote_table()); print(matrix('G14')[0]); print(matrix('G15')[0])
