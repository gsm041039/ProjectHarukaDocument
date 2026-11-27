import json,sys,pathlib; sys.stdout.reconfigure(encoding='utf-8'); sys.argv=['x']
R=pathlib.Path(__file__).resolve().parents[4]; sys.path.insert(0,str(R/'story_kb/tools')); import kb
st=json.load(open(pathlib.Path(__file__).parent/'fact_stamps.json',encoding='utf-8')); cards=kb.load(); out=['# 試點事實 ↔ story_kb 知識卡 對照（自動生成；按相同原文位置，唔係合併）','','| 事實 | 重疊嘅卡 |','|---|---|']
for fid,f in st['facts'].items():
    ids=sorted({a['id'] for a in cards for p,x,y in kb.parse_src(a.get('src','')) for s in f['sources'] if s['file']==p and x<=s['end'] and y>=s['start']})
    out.append(f"| {fid} | {', '.join(ids) or '（冇對應卡）'} |")
(pathlib.Path(__file__).parent/'FACTS_TO_CARDS.md').write_text('\n'.join(out)+'\n',encoding='utf-8'); print('ok',len(out)-4,'rows')
