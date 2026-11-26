"""story_kb tool. Atoms live in facts/*.md as '## F-xx title' blocks with 'key: value' lines and a verbatim quote.
  kb.py fill            fill/refresh every 'text:' quote verbatim from its src line ranges
  kb.py check           integrity: src exists, quote still equals source (drift), links resolve, superseded has successor
  kb.py threads         list open creative threads (threads/*.md headers) so a new session can pick up unfinished thinking
  kb.py probe <詞…> [--top N]   topic probe: where do these words appear in canon (grouped by section, ranked), and is that spot covered by a card? use the key words of your own idea, not of the question
  kb.py q [--about A B] [--as-of T] [--kind K..] [--plans] [--superseded|--only-superseded] [--id F-xx] [--grep word]   retrieve (field-based, no keyword guessing on content)
Times: pre < A1 < A2 < A2_END < A3 < A4 ; 'always' = timeless (world rule/theme/trait). 'X|Y' = sources disagree on when."""
import re, sys, pathlib, argparse
sys.stdout.reconfigure(encoding='utf-8')
ROOT = pathlib.Path(__file__).resolve().parent.parent
CFG = dict(l.split('=', 1) for l in (ROOT / 'kb.cfg').read_text(encoding='utf-8').split('\n') if '=' in l)
SRC = (ROOT / CFG['SRC_ROOT'].strip()).resolve()
ORDER = ['pre', 'A1', 'A2', 'A2_END', 'A3', 'A4']
FUTURE_KINDS = {'plan', 'direction', 'candidate'}
def load():
    atoms = []
    for f in sorted((ROOT / 'facts').glob('*.md')):
        cur = None
        for i, line in enumerate(f.read_text(encoding='utf-8').split('\n'), 1):
            m = re.match(r'## (F-[\w-]+) (.*)', line)
            if m: cur = {'id': m.group(1), 'title': m.group(2), 'file': f.name, 'line': i, 'text': []}; atoms.append(cur); continue
            if cur is None: continue
            if line.startswith('> '): cur['text'].append(line[2:]); continue
            if line.rstrip() == '>': cur['text'].append(''); continue
            m = re.match(r'([a-z_]+): ?(.*)', line)
            if m and m.group(1) != 'text': cur[m.group(1)] = m.group(2).strip()
            elif line.strip() == 'text:': cur['has_text'] = True
    return atoms
def parse_src(s):
    out = []
    for part in s.split('|'):
        part = part.strip()
        m = re.match(r'(.+?):(\d+)-(\d+)$', part)
        if m: out.append((m.group(1), int(m.group(2)), int(m.group(3))))
    return out
def source_lines(spec):
    res = []
    for p, a, b in spec:
        lines = (SRC / p).read_text(encoding='utf-8').split('\n')
        res.append((p, a, b, lines[a - 1:b]))
    return res
def cmd_fill():
    for f in sorted((ROOT / 'facts').glob('*.md')):
        txt = f.read_text(encoding='utf-8').split('\n'); out = []; i = 0; src = None
        while i < len(txt):
            l = txt[i]
            if l.startswith('## '): src = None
            m = re.match(r'src: ?(.*)', l)
            if m: src = m.group(1)
            if l.strip() == 'text:' and src and not src.startswith('chat'):
                out.append(l); i += 1
                while i < len(txt) and (txt[i].startswith('> ') or txt[i].rstrip() == '>'): i += 1
                for p, a, b, ls in source_lines(parse_src(src)):
                    out.append(f'> 〔{p}:{a}-{b}〕')
                    out += ['> ' + x if x else '>' for x in ls]
                continue
            out.append(l); i += 1
        f.write_text('\n'.join(out), encoding='utf-8')
    print('filled')
def cmd_check():
    atoms = load(); ids = {a['id'] for a in atoms}; bad = 0
    for a in atoms:
        def err(m): nonlocal bad; bad += 1; print(f"FAIL {a['id']}: {m}")
        for k in ('kind', 'about', 'time', 'status', 'authority', 'revisable', 'src'):
            if k not in a: err(f'missing {k}')
        s = a.get('src', '')
        if s and not s.startswith('chat'):
            try:
                want = []
                for p, aa, bb, ls in source_lines(parse_src(s)): want += [f'〔{p}:{aa}-{bb}〕'] + ls
                got = [x for x in a['text']]
                if [w.rstrip() for w in want] != [g.rstrip() for g in got]: err('quote differs from source (source changed or not filled)')
            except Exception as e: err(f'src unreadable: {e}')
        for k in ('supersedes', 'superseded_by', 'conflicts', 'see'):
            for t in re.findall(r'F-[\w-]+', a.get(k, '')):
                if t not in ids: err(f'{k} -> {t} not found')
        if a.get('status') == 'superseded' and 'superseded_by' not in a: err('superseded without superseded_by')
        if a.get('kind') in FUTURE_KINDS and a.get('time') in ('always', 'pre'): err('plan/direction/candidate with past time')
    print(f'{len(atoms)} atoms checked, {bad} problems')
    return bad
def vis(a, as_of):
    ts = a.get('time', 'always').split('|'); idx = ORDER.index(as_of)
    if ts == ['always']: return True
    return any(t in ORDER and ORDER.index(t) <= idx for t in ts)
def cmd_q(args):
    atoms = load()
    for a in atoms:
        if args.id and a['id'] != args.id: continue
        if args.about and not all(any(n in a.get('about', '') for n in [x]) for x in args.about) and not any(x in a.get('about', '') for x in args.about): continue
        if args.kind and a.get('kind') not in args.kind: continue
        if args.grep and args.grep not in ' '.join(a['text']) + a['title']: continue
        isplan = a.get('kind') in FUTURE_KINDS
        if args.as_of and not args.id:
            if isplan and not args.plans: continue
            if not isplan and not vis(a, args.as_of): continue
        if args.only_superseded and a.get('status') != 'superseded': continue
        if a.get('status') == 'superseded' and not (args.superseded or args.only_superseded or args.id): continue
        flag = {'superseded': '【已被取代·歷史紀錄】', 'disputed': '【來源矛盾/時間存疑】', 'unverified': '【未能核實】', 'open': '【開放/未採納】'}.get(a.get('status'), '')
        if '|' in a.get('time', '') and not flag: flag = '【時間存疑·見來源矛盾卡】'
        print(f"## {a['id']} {a['title']} {flag}")
        print(f"kind={a.get('kind')} time={a.get('time')} status={a.get('status')} authority={a.get('authority')} revisable={a.get('revisable')}")
        for k in ('supersedes', 'superseded_by', 'conflicts', 'reveal', 'see', 'note'):
            if k in a: print(f'{k}: {a[k]}')
        print('\n'.join('> ' + t for t in a['text'])); print()
def cmd_probe(args):
    terms = args.terms; top = args.top or 8
    skip = ('SESSION_LEDGER', 'PROJECT_STATUS', 'NEXT_ACTION', 'QUESTION_QUEUE', 'QUESTION_MATRIX', 'TASK_BOARD', 'LAYER_MANIFEST', 'REVALIDATE_LEDGER', 'REASONING_LOG', 'DISCUSSION_LOG')
    files = [f for pat in ('canon/*.md', 'canon/03_characters/*.md', 'canon/_working/story_construction/*.md', 'canon/_working/CANON_DECISION_LOG.md') for f in sorted(SRC.glob(pat)) if not any(k in f.name for k in skip)]
    cov = {}
    for a in load():
        for p, x, y in parse_src(a.get('src', '')): cov.setdefault(p, []).append((x, y, a['id']))
    secs = {}
    for f in files:
        rel = f.relative_to(SRC).as_posix(); head = ('(檔頭)', 0)
        for i, l in enumerate(f.read_text(encoding='utf-8', errors='replace').split(chr(10)), 1):
            if l.startswith('#'): head = (l.lstrip('#').strip()[:44], i)
            elif l.startswith('| CDL-'): head = (l.split('|')[1].strip(), i)
            m = [t for t in terms if t in l]
            if m:
                d = secs.setdefault((rel, head), {'terms': set(), 'n': 0, 'first': i, 'text': l.strip()[:70]})
                d['terms'] |= set(m); d['n'] += 1
    ranked = sorted(secs.items(), key=lambda kv: (-len(kv[1]['terms']), -kv[1]['n']))[:top]
    print(f'詞：{terms}｜命中段落 {len(secs)}（只列前 {len(ranked)}；排序＝命中幾多個不同詞、再睇次數）')
    for (rel, (h, hl)), d in ranked:
        c = [i for (x, y, i) in cov.get(rel, []) if x <= d['first'] <= y]
        print(f"- {rel}:{hl} 「{h}」 詞 {len(d['terms'])}/{len(terms)}、{d['n']} 行｜{'已有卡 ' + c[0] if c else '未有卡'}｜首個命中 L{d['first']}：{d['text']}")
def cmd_threads():
    d = ROOT / 'threads'; n = 0
    for f in sorted(d.glob('*.md')) if d.exists() else []:
        L = f.read_text(encoding='utf-8').split(chr(10)); head = {}
        for l in L[:12]:
            m = re.match(r'(title|status|next|updated): ?(.*)', l)
            if m: head[m.group(1)] = m.group(2)
        print(f"{f.name} [{head.get('status','?')}] {head.get('title','')} | next: {head.get('next','')} | updated: {head.get('updated','')}"); n += 1
    print(f'{n} thread(s)')
if __name__ == '__main__':
    ap = argparse.ArgumentParser(); ap.add_argument('cmd'); ap.add_argument('--about', nargs='*'); ap.add_argument('--as-of'); ap.add_argument('--kind', nargs='*')
    ap.add_argument('--plans', action='store_true'); ap.add_argument('--superseded', action='store_true'); ap.add_argument('--only-superseded', action='store_true'); ap.add_argument('--id'); ap.add_argument('--grep'); ap.add_argument('terms', nargs='*'); ap.add_argument('--top', type=int)
    a = ap.parse_args()
    {'fill': cmd_fill, 'check': cmd_check, 'threads': cmd_threads, 'probe': lambda: cmd_probe(a)}.get(a.cmd, lambda: cmd_q(a))()
