import os,sys,hashlib
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from tables import vote_table, matrix, d, G, DIRS
from collections import Counter
OUT='/workspace/haruka/lab/canon/_working/skill_distill/SKILL_EXAMPLES_IMG_20261110/INTEGRATION_RULES_R1_20261110.md'
c=Counter(v for a in DIRS for v in d[a]['votes'].values())
assert c=={'ACCEPT':125,'ACCEPT_WITH_EDITS':57}, c
m,cons=matrix()
T=open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'integration_text.md'),encoding='utf-8').read()
T=T.replace('{{VOTE_TABLE}}',vote_table()).replace('{{MATRIX}}',m)
T=T.replace('{{SUPPORTCOUNT}}',' ／ '.join(f"{g} {sum(1 for i in range(14) if cons[(g,i)] in ('S','S/C'))}" for g in G))
assert not os.path.exists(OUT) or '--force' in sys.argv
open(OUT,'w',encoding='utf-8').write(T); print(OUT)
