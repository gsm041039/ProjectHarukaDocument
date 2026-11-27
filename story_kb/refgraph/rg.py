"""Reference graph over raw canon (no LLM, no DB, derived & deletable). Units = headings / decision rows; edges = explicit IDs, anchored links,
character-name mentions, supersession phrases; every edge keeps file:line provenance. Incremental by file hash.
usage: rg.py build [--root R] | q <terms…> [--top N] [--no-expand] | impact <ID or terms> | ent <alias> | issues"""
import re, sys, json, hashlib, pathlib, time, math, collections
ROOT = pathlib.Path(__file__).resolve().parent.parent.parent; IDX = pathlib.Path(__file__).parent / 'index.json'
SCOPES = ['canon/*.md', 'canon/03_characters/*.md', 'canon/_working/story_construction/*.md', 'canon/_working/CANON_DECISION_LOG.md']
SKIP = ('SESSION_LEDGER', 'PROJECT_STATUS', 'NEXT_ACTION', 'QUESTION_QUEUE', 'QUESTION_MATRIX', 'TASK_BOARD', 'LAYER_MANIFEST', 'REVALIDATE_LEDGER', 'REASONING_LOG', 'DISCUSSION_LOG')
ID = re.compile(r'(CDL-\d+|HC-\d+[a-z]?|QQ-\d+|E-(?:[IVX]+-)?[A-Z]?\d+(?:\.\d+)?[a-z]?|P-[A-Z]\d+|CF-T\d+)')
ROW = re.compile(r'^\| ?(CDL-\d+|HC-\d+[a-z]?|QQ-\d+) ?\|')
LINK = re.compile(r'\]\(([^)#\s]*\.md)(?:#([^)\s]+))?\)'); ANCH = re.compile(r'<a id="([^"]+)"')
SUP = re.compile(r'(SUPERSEDED|取代|推翻|覆蓋|作廢|WITHDRAWN|撤回)')
def files(root):
    for pat in SCOPES:
        for f in sorted(root.glob(pat)):
            if not any(k in f.name for k in SKIP): yield f
def parse(f, root):
    rel = f.relative_to(root).as_posix(); L = f.read_text(encoding='utf-8', errors='replace').split('\n'); units = []; cur = None
    def new(i, title, own=None):
        nonlocal cur
        cur = {'file': rel, 'start': i, 'end': i, 'title': title[:60], 'own': own, 'lines': []}; units.append(cur)
    new(1, '(檔頭)')
    for i, l in enumerate(L, 1):
        m = ROW.match(l)
        if m: new(i, m.group(1), m.group(1))
        elif l.startswith('#'):
            t = l.lstrip('#').strip(); mm = ID.search(t[:30]); new(i, re.sub(r'<[^>]+>', '', t), mm.group(1) if mm and mm.group(1).startswith(('E-', 'P-', 'CF-')) else None)
        cur['lines'].append((i, l)); cur['end'] = i
    out = []
    for u in units:
        text = '\n'.join(l for _, l in u['lines'])
        u['text'] = text[:6000]; u['ids'] = sorted(set(ID.findall(text)) - {u['own']}); del u['lines']
        u['anchors'] = ANCH.findall(text); u['links'] = [(x if x.startswith('/') else (pathlib.PurePosixPath(rel).parent / x).as_posix(), a) for x, a in LINK.findall(text)]
        u['sup'] = [(i, ID.findall(l)) for i, l in enumerate(text.split('\n'), u['start']) if SUP.search(l) and ID.findall(l)][:3]
        out.append(u)
    return out
def norm(p):
    parts = []
    for x in p.split('/'):
        if x == '..': parts and parts.pop()
        elif x not in ('', '.'): parts.append(x)
    return '/'.join(parts)
def build(root=ROOT, full=False):
    t0 = time.time(); old = json.load(open(IDX, encoding='utf-8')) if IDX.exists() and not full else {'files': {}, 'units': {}}
    changed, kept = [], 0
    for f in files(root):
        rel = f.relative_to(root).as_posix(); h = hashlib.sha1(f.read_bytes()).hexdigest()
        if old['files'].get(rel) == h: kept += 1; continue
        old['files'][rel] = h; old['units'][rel] = parse(f, root); changed.append(rel)
    for rel in [r for r in old['files'] if not (root / r).exists()]: del old['files'][rel]; old['units'].pop(rel, None); changed.append(rel + '(removed)')
    json.dump(old, open(IDX, 'w', encoding='utf-8'), ensure_ascii=False)
    return old, changed, kept, time.time() - t0
def load():
    d = json.load(open(IDX, encoding='utf-8')); U = [u for f in d['units'].values() for u in f]
    for k, u in enumerate(U): u['k'] = k
    defs = collections.defaultdict(list); anc = {}
    for u in U:
        if u['own']: defs[u['own']].append(u['k'])
        for a in u['anchors']: anc[(u['file'], a)] = u['k']
    out = collections.defaultdict(set); inn = collections.defaultdict(set)   # edges with kind/provenance
    E = []
    for u in U:
        for i in u['ids']:
            for t in defs.get(i, []): E.append((u['k'], t, 'ref:' + i))
        for p, a in u['links']:
            t = anc.get((norm(p), a)) if a else None
            if t is not None and t != u['k']: E.append((u['k'], t, 'link'))
        for ln, ids in u['sup']:
            for i in ids:
                for t in defs.get(i, []):
                    if t != u['k']: E.append((u['k'], t, 'sup?:' + i))
    for a, b, k in E: out[a].add((b, k)); inn[b].add((a, k))
    return d, U, defs, out, inn
def terms_score(U, terms):
    N = len(U); df = {t: sum(1 for u in U if t in u['text'] or t in u['title']) for t in terms}
    idf = {t: math.log((N + 1) / (df[t] + 1)) for t in terms}
    sc = []
    for u in U:
        s = sum(idf[t] for t in terms if t in u['text'] or t in u['title'])
        if s > 0: sc.append((s, u['k']))
    return sorted(sc, reverse=True), df
def show(u, why=''): return f"{u['file']}:{u['start']}-{u['end']} 「{u['title']}」{(' ← ' + why) if why else ''}"
def cmd_q(terms, top=8, expand=True):
    d, U, defs, out, inn = load(); sc, df = terms_score(U, terms)
    seeds = [k for _, k in sc[:max(3, top // 2)]]
    res = [(k, 'seed') for k in seeds]
    if expand:
        cand = collections.defaultdict(list)
        for k in seeds:
            for t, kind in out[k]: cand[t].append(f'{kind}←{U[k]["file"].split("/")[-1]}:{U[k]["start"]}')
            for t, kind in inn[k]: cand[t].append(f'被引用:{kind}→{U[k]["file"].split("/")[-1]}:{U[k]["start"]}')
        ex = sorted(((t, w) for t, w in cand.items() if t not in seeds), key=lambda x: -len(x[1]))
        res += [(t, '; '.join(w[:2])) for t, w in ex[:top - len(seeds)]]
    return [(U[k], why) for k, why in res[:top]]
def cmd_impact(arg, hops=1):
    d, U, defs, out, inn = load(); keys = defs.get(arg) or [k for _, k in terms_score(U, arg.split())[0][:2]]
    seen = collections.OrderedDict(); frontier = list(keys)
    for h in range(hops):
        nxt = []
        for k in frontier:
            for a, kind in sorted(inn[k]):
                if a not in seen and a not in keys: seen[a] = f'{kind}→{U[k]["title"]}（第{h+1}跳）'; nxt.append(a)
            if h == 0:
                for b, kind in sorted(out[k]): seen.setdefault(b, f'本身引用 {kind}')
        frontier = nxt
    return [(U[k], why) for k, why in seen.items()]
def cmd_issues():
    d, U, defs, out, inn = load(); dup = {i: [f"{U[k]['file']}:{U[k]['start']}" for k in ks] for i, ks in defs.items() if len(ks) > 1 and i.startswith(('CDL', 'HC'))}
    alld = {i for u in U for i in u['ids']}; dang = sorted(i for i in alld if i not in defs and i.startswith(('CDL', 'HC')))
    return dup, dang
if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf-8'); c = sys.argv[1]
    if c == 'build':
        d, ch, kept, t = build(full='--full' in sys.argv); print(f'units {sum(len(v) for v in d["units"].values())}, files {len(d["files"])}, reparsed {len(ch)}, unchanged {kept}, {t:.2f}s')
    elif c == 'q':
        a = [x for x in sys.argv[2:] if not x.startswith('--')]
        for u, w in cmd_q(a, expand='--no-expand' not in sys.argv): print('-', show(u, w))
    elif c == 'impact':
        for u, w in cmd_impact(' '.join(sys.argv[2:])): print('-', show(u, w))
    elif c == 'issues':
        dup, dang = cmd_issues(); print('重複定義 ID:', json.dumps(dup, ensure_ascii=False)[:600]); print('被引用但搵唔到定義:', dang[:30], len(dang))
