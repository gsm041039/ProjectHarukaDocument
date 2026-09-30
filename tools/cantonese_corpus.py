#!/usr/bin/env python
"""粵語對白語料檢索 + 自然度檢查（CantoCaptions，只作分析參考；語料本身唔入 repo）。

  python tools/cantonese_corpus.py build                 # clone 人手配音／原創字幕 → 建 corpus.tsv + model
  python tools/cantonese_corpus.py q "獵物|歸我" [-k dub|orig|all] [-n 20] [-c 1]   # 功能檢索（-c 前後文行數）
  python tools/cantonese_corpus.py score "真難看。/呢隻獵物，歸我。"           # 候選自然度檢查；「/」或標點分句
  python tools/cantonese_corpus.py stats                 # 基準（句長、助詞、的/嘅）

環境變數 CANTO_DIR：語料目錄（預設 Windows=C:/ccx，其他=~/.cache/cantocaptions；路徑要短，否則 Windows 會 Filename too long）。
限制：字幕冇聲調／停頓／說話人；分數只量「似唔似大量真人配音嘅口語」，唔係角色辨識度，亦唔可以代替作者聽感。
"""
import os, re, sys, csv, math, pickle, random, argparse, subprocess, collections

D = os.environ.get('CANTO_DIR') or ('C:/ccx' if os.name == 'nt' else os.path.expanduser('~/.cache/cantocaptions'))
TSV, MODEL = os.path.join(D, 'corpus.tsv'), os.path.join(D, 'model.pkl')
KINDS = {'dub': ('Series/Dubbed', 'Movies/Dubbed'), 'orig': ('Series/Original', 'Movies/Original')}
KINDS['all'] = KINDS['dub'] + KINDS['orig']
PUNCT = r'[\s，。？！、…—～「」『』《》,.?!:：；;"“”‘’\-/]'
TAG = r'\[[^\]]*\]|［[^］]*］|（[^）]*）|\([^)]*\)'
SFP = '啊喇啦囉喎吖呀㗎嘅咩呢噃啫咋哦嘛喔'
# 翻譯腔／書面腔句型（命中只係「可疑」，唔係錯）
SMELL = [r'的', r'你(不|唔)可以', r'請你(不要|唔好)', r'我會(補償|彌補)', r'非常', r'這(種|個|樣|是)', r'那(種|個|樣|是)',
         r'因為.+所以', r'能夠', r'必須要', r'我們|妳們|你們|他們|她們']


def norm(s): return re.sub(PUNCT, '', re.sub(TAG, '', s))


def build():
    if not os.path.isdir(os.path.join(D, '.git')):
        os.makedirs(os.path.dirname(D) or '.', exist_ok=True)
        subprocess.check_call(['git', '-c', 'core.longpaths=true', 'clone', '-q', '--depth', '1', '--filter=blob:none', '--sparse',
                               'https://github.com/notHulK11/CantoCaptions.git', D])
        subprocess.check_call(['git', 'config', 'core.longpaths', 'true'], cwd=D)
        subprocess.check_call(['git', 'sparse-checkout', 'set', '--no-cone'] + [f'Subtitles/{k}/' for k in KINDS['all']], cwd=D)
    root, rows = os.path.join(D, 'Subtitles'), []
    for dp, _, fn in os.walk(root):
        for f in fn:
            if not (f.endswith('.yue.cht.srt') or f.endswith('.cht.yue.srt')): continue  # 剔 OCR／簡體／AI 生成
            rel = os.path.relpath(os.path.join(dp, f), root).split(os.sep)
            txt = open(os.path.join(dp, f), encoding='utf8', errors='ignore').read().replace('\r', '').lstrip('\ufeff')
            for blk in re.split(r'\n\s*\n', txt):
                ls = [l for l in blk.split('\n') if l.strip()]
                if len(ls) < 3 or '-->' not in ls[1]: continue
                for l in ls[2:]:
                    l = re.sub(r'<[^>]+>', '', l).strip()
                    l = re.sub(r'^[-–]\s*', '', l)
                    if l and not re.fullmatch(r'[［\[（(《].*[］\]）)》]', l): rows.append((rel[0] + '/' + rel[1], rel[2], f, l))
    csv.writer(open(TSV, 'w', encoding='utf8', newline=''), delimiter='\t').writerows(rows)
    train_model(rows)
    print(len(rows), 'lines →', TSV)


def train_model(rows):
    seen, tri, bi, held = set(), collections.Counter(), collections.Counter(), []
    chars = set()
    for k, t, f, l in rows:
        n = norm(l)
        if not 2 <= len(n) <= 40 or n in seen: continue
        seen.add(n)
        if hash(n) % 5 == 0 and len(held) < 20000:
            held.append(n); continue  # 20% 留作百分位基準，唔入模型
        s = '^^' + n + '$'; chars.update(n)
        for i in range(2, len(s)): tri[s[i-2:i+1]] += 1; bi[s[i-2:i]] += 1
    m = {'tri': tri, 'bi': bi, 'V': len(chars) + 2}
    m['held'] = sorted(lp(m, h) for h in held)
    pickle.dump(m, open(MODEL, 'wb'))


def lp(m, n):
    s = '^^' + n + '$'; V = m['V']
    return sum(math.log((m['tri'][s[i-2:i+1]] + 0.1) / (m['bi'][s[i-2:i]] + 0.1 * V)) for i in range(2, len(s))) / (len(s) - 2)


def load(): return list(csv.reader(open(TSV, encoding='utf8'), delimiter='\t'))


def q(a):
    rows = load(); kinds = KINDS[a.k]; r = re.compile(a.pattern)
    idx = [i for i, x in enumerate(rows) if x[0] in kinds and r.search(x[3])]
    by = collections.defaultdict(list)
    for i in idx: by[rows[i][1]].append(i)
    print(f'## {a.pattern}  命中 {len(idx)} 行 / {len(by)} 套')
    print('   分佈:', dict(collections.Counter({t[:14]: len(v) for t, v in by.items()}).most_common(8)))
    random.seed(0); pool = list(by.values()); random.shuffle(pool); shown, seen = 0, set()
    while shown < a.n and any(pool):  # 逐套輪流攞，避免一套霸晒
        for v in pool:
            while v and rows[v[0]][3] in seen: v.pop(0)
            if v and shown < a.n:
                i = v.pop(0); seen.add(rows[i][3]); shown += 1
                for j in range(max(0, i - a.c), min(len(rows), i + a.c + 1)):
                    if rows[j][1] == rows[i][1]: print(('>> ' if j == i else '   ') + f'[{rows[j][1][:12]}] {rows[j][3]}')
                if a.c: print()


def stats(_):
    rows = load(); g = collections.defaultdict(list)
    for k, t, f, l in rows: g[k].append(l)
    for k, ls in g.items():
        L = [len(norm(x)) for x in ls]; n = len(ls)
        e = collections.Counter(x.rstrip('。！？…～ ,，')[-1:] for x in ls)
        print(k, n, '平均字數', round(sum(L) / n, 1), '≤6字', f'{100*sum(x<=6 for x in L)//n}%', '≥12字', f'{100*sum(x>=12 for x in L)//n}%',
              '的/嘅', sum(x.count('的') for x in ls), sum(x.count('嘅') for x in ls), [(c, v) for c, v in e.most_common(40) if c in SFP][:6])


def score(a):
    m = pickle.load(open(MODEL, 'rb')); held = m['held']
    tri = m['tri']
    for cand in a.cands:
        print('\n候選:', cand); sents = [s for s in re.split(r'[/。？！\n]+', cand) if norm(s)]; tot = 0
        for s in sents:
            n = norm(s); tot += len(n)
            v = lp(m, n); pct = round(100 * sum(x <= v for x in held) / len(held))
            unseen = [n[i:i+3] for i in range(len(n) - 2) if tri.get(n[i:i+3], 0) == 0]
            flags = [p for p in SMELL if re.search(p, s)]
            end = s.strip('，、… ')[-1:]
            print(f'  「{s.strip()}」 {len(n)}字  自然度百分位 {pct}{"  ⚠低" if pct < 10 else ""}{"（≤3字，百分位偏低唔可靠）" if len(n) <= 3 else ""}  句末:{end if end in SFP else "無助詞"}'
                  + (f'  ⚠書面/翻譯腔:{flags}' if flags else '') + (f'  ⚠未見於語料:{unseen}' if unseen else ''))
        print(f'  合計 {tot} 字，{len(sents)} 句（真人配音平均約 8 字／句）')


if __name__ == '__main__':
    sys.stdout.reconfigure(encoding='utf8')
    p = argparse.ArgumentParser(); sp = p.add_subparsers(dest='cmd', required=True)
    sp.add_parser('build'); sp.add_parser('stats')
    x = sp.add_parser('q'); x.add_argument('pattern'); x.add_argument('-k', default='dub', choices=KINDS); x.add_argument('-n', type=int, default=20); x.add_argument('-c', type=int, default=0)
    x = sp.add_parser('score'); x.add_argument('cands', nargs='+')
    a = p.parse_args()
    {'build': lambda: build(), 'stats': lambda: stats(a), 'q': lambda: q(a), 'score': lambda: score(a)}[a.cmd]()
