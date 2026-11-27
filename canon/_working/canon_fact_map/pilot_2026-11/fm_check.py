"""Maintenance radar for pilot facts: which derived facts need re-verification after sources/decisions change?
 DRIFT              cited source lines changed (hash)         -> re-read source, re-verify fact
 DECISION_CHANGED   a cited CDL row's text changed            -> semantic change in a decision the fact relies on
 NEW_DECISION_TOUCHES a NEW CDL row mentions a CDL id the fact cites (esp. with 取代/推翻/覆蓋 words)
 CHAR_RADAR (noisy) a NEW CDL row mentions the fact's character -> review queue only
Does NOT decide truth and never marks a fact valid. usage: python fm_check.py [--root PATH]"""
import sys, json, re, pathlib, hashlib
sys.stdout.reconfigure(encoding='utf-8'); sys.path.insert(0,str(pathlib.Path(__file__).parent))
import build_pilot as B
ALIAS={'美夜子':['美夜子','Miyako'],'凜':['凜','Rin'],'晴香':['晴香','Haruka'],'夕':['夕','Yu'],'黑奏':['黑奏','刑思','Kurokane'],'彩':['彩','Aya'],'主角團／觀眾':[],'主角團':[]}
SUP=re.compile(r'(SUPERSEDED|取代|推翻|覆蓋|作廢|WITHDRAWN|撤回|修正)')
def check(root, st):
    flags={fid:[] for fid in st['facts']}; log=(root/B.L).read_text(encoding='utf-8').split(chr(10))
    cur=B.log_rows(root); new_ids=[i for i in cur if i not in st['log_rows']]
    rowtext={}
    for l in log:
        m=re.match(r'^\| (CDL-\d+)',l)
        if m: rowtext.setdefault(m.group(1),[]).append(l)
    for fid,f in st['facts'].items():
        cited=set()
        for s in f['sources']:
            cited|=set(s['cdl'])
            if 'rows' in s: continue            # 決定記錄：用編號＋行文 hash 比較（唔靠行號）；見 DECISION_CHANGED
            try:
                lines=(root/s['file']).read_text(encoding='utf-8').split(chr(10)); n=s['end']-s['start']+1
                here=hashlib.sha1(chr(10).join(lines[s['start']-1:s['end']]).encode()).hexdigest()
                if here!=s['sha1']:
                    moved=any(hashlib.sha1(chr(10).join(lines[i:i+n]).encode()).hexdigest()==s['sha1'] for i in range(len(lines)-n+1))
                    if not moved: flags[fid].append(('DRIFT',f"{s['file'].split('/')[-1]}:{s['start']}-{s['end']} 內容改變或搵唔返"))
            except Exception as e: flags[fid].append(('DRIFT',f"{s['file']} 讀唔到"))
        own={i for s in f['sources'] for i in s.get('rows',[])}
        for c in sorted(cited|own):
            if c in st['log_rows'] and cur.get(c)!=st['log_rows'][c]: flags[fid].append(('DECISION_CHANGED',c))
        for nid in new_ids:
            for l in rowtext.get(nid,[]):
                hit=[c for c in cited if c in l]
                if hit: flags[fid].append(('NEW_DECISION_TOUCHES',f"{nid} 提及 {','.join(hit)}"+('（含取代字眼）' if SUP.search(l) else '')))
                elif any(a and a in l for a in ALIAS.get(f['who'],[])): flags[fid].append(('CHAR_RADAR',nid))
    return flags
if __name__=='__main__':
    root=B.ROOT
    if '--root' in sys.argv: root=pathlib.Path(sys.argv[sys.argv.index('--root')+1])
    st=json.load(open(B.OUT/'fact_stamps.json',encoding='utf-8')); fl=check(root,st)
    bad={k:v for k,v in fl.items() if v}; strong={k:[x for x in v if x[0]!='CHAR_RADAR'] for k,v in fl.items() if any(x[0]!='CHAR_RADAR' for x in v)}
    print(f'事實 {len(fl)} 條；需要重新核實（強訊號）{len(strong)} 條；只喺人物雷達 {len(bad)-len(strong)} 條')
    for k,v in strong.items(): print(' ',k,v[:3])
