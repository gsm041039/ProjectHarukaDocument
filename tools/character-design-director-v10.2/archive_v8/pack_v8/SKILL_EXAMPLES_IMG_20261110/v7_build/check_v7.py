#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Self-check v7: (1) every number in figure lines of v7 example blocks is in REF v7 §10 for that EX;
(2) no void token/phrase from REF v7 §11 appears in that EX block; (3) v6 md5 unchanged.
Figure lines = all block lines except 互評／級別／圖 (bookkeeping, citations, paths).
Stripped before scan: `code`/paths, URLs, 〔tags〕, § refs, ids (EXnn, In, En, Dnn, Rn, vN, hN, B1/B2...), years/dates, version strings."""
import sys, os, hashlib, json, re
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from numlib import SD, blocks, numbers, norm, figure_text
from figures_v7 import VALID, VOID
V6 = f'{SD}/SKILL_DRAFT_character_design_core_v6_20261110.md'
V7 = f'{SD}/SKILL_DRAFT_character_design_core_v7_20261110.md'
REF7 = f'{SD}/SKILL_REF_character_design_sources_v7_20261110.md'
res = {'v6_md5': hashlib.md5(open(V6,'rb').read()).hexdigest()}
res['v6_md5_ok'] = res['v6_md5'] == 'df5dcf499c8761179a6267b362f596c7'
b = blocks(open(V7, encoding='utf-8').read())
# parse §10 from the REF file itself (so the check runs against what was published)
ref = open(REF7, encoding='utf-8').read()
sec10 = ref[ref.index('## 10.'):ref.index('## 11.')]
sec11 = ref[ref.index('## 11.'):ref.index('## 12.')]
def per_ex(sec):
    out = {}; cur = None
    for l in sec.split('\n'):
        m = re.match(r'### (EX\d\d)', l)
        if m: cur = m.group(1); out[cur] = []; continue
        if cur and l.startswith('|') and not l.startswith('|---') and not l.startswith('| 數'):
            out[cur].append(l.split('|')[1])
    return out
v10 = per_ex(sec10); v11 = per_ex(sec11)
problems = []; counts = {}
for ex in sorted(b):
    valid = set(norm(x) for cell in v10.get(ex, []) for x in re.findall(r'`([^`]+)`', cell))
    nums = set(norm(x) for x in numbers(b[ex]))
    missing = sorted(nums - valid, key=float)
    if missing: problems.append((ex, 'not_in_valid', missing))
    ft = figure_text(b[ex]); ftn = set(nums)
    hits = []
    for cell in v11.get(ex, []):
        for tok in re.findall(r'`([^`]+)`', cell):
            if tok.startswith('phrase:'):
                if tok[7:] in ft: hits.append(tok)
            elif norm(tok) in ftn: hits.append(tok)
    if hits: problems.append((ex, 'void_present', hits))
    counts[ex] = {'numbers': len(nums), 'valid_entries': len(valid)}
res['counts'] = counts; res['problems'] = problems; res['ok'] = res['v6_md5_ok'] and not problems
print(json.dumps(res, ensure_ascii=False, indent=1))
json.dump(res, open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'check_v7_result.json'), 'w'), ensure_ascii=False, indent=1)
sys.exit(0 if res['ok'] else 1)
