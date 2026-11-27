"""Pilot repair of fact-map rows for 美夜子／凜／晴香／黑奏(彩)／夕. Rows are re-verified against CURRENT sources, not copied from the old map.
Output: PILOT_FACTS.md (human table, old table columns + time tag + verification) and fact_stamps.json (source-range hashes for drift/radar).
Run from repo root: python canon/_working/canon_fact_map/pilot_2026-11/build_pilot.py"""
import json, hashlib, pathlib, re, sys
sys.stdout.reconfigure(encoding='utf-8')
ROOT = pathlib.Path(__file__).resolve().parents[4]; OUT = pathlib.Path(__file__).parent
VERIFIED_THROUGH = 430; VERIFIED_ON = '2026-11-27'
L='canon/_working/CANON_DECISION_LOG.md'; T='canon/04_timeline_canon.md'; M='canon/03_characters/miyako.md'; R='canon/03_characters/rin.md'; H='canon/03_characters/haruka.md'; A='canon/03_characters/aya.md'
HC='canon/_working/story_construction/HARD_CONSTRAINTS_TABLE.md'; O2='canon/_working/story_construction/ACT_II_OUTLINE.md'; O3='canon/_working/story_construction/ACT_III_OUTLINE.md'
# id, 人物, 內容, 時間標籤, 適用時間(原文), 知道 vs 真相, 來源, 取代舊行, 核實, 備註
ROWS = [
('CFR-KNOW-MIYAKO-SISTER-01','美夜子','唔知自己係晴香親姊；靈魂本能殘留，感知晴香係唯一錨點；口講「有用工具」、身體本能守護','A1|A2','Act I～Act II 前期（Stage 1）','相信＝自己係工具；真相＝晴香親姊','%s:173-174'%L,'CF-KNOW-SISTER-02','VERIFIED_CURRENT','舊行寫「Y102+ 已知」，同 CDL-060「失去記憶」矛盾，屬建立時已錯'),
('CFR-KNOW-MIYAKO-SISTER-02','美夜子','記憶恢復：記起係晴香親姊＋變貓係晴香 5 歲避難所詛咒；選擇繼續隱瞞（介錯人職責）','A3','114 年 4 月中旬（CDL-061 稱 Act II 後期；時間線同大綱將 4 月列入 Act III Phase H）','美夜子知，晴香唔知','%s:175 | %s:240-242 | %s:39-39'%(L,T,O3),'—','CONFLICT_IN_SOURCES','日期一致（4 月中旬）、Act 標籤唔同；Act II 結尾係 3 月，所以 Act II 結尾時仍未恢復'),
('CFR-KNOW-HARUKA-SISTER-01','晴香','唔知黑貓美夜子係親姊，直至 Act III 貓殼碎裂後先無語言相認；語言確認留 Step 2（黑奏處刑室）','A3','Act III（I4 之後；Step 2＝J2 期）','相信＝美夜子係夥伴／大姐姐；真相＝親姊','%s:442-442 | %s:105-105'%(L,L),'CF-KNOW-SISTER-01','VERIFIED_CURRENT','舊行寫「Act IV 先發現」；CDL-314 推翻 CDL-274 Step 1 位置，Step 2 不變'),
('CFR-STATE-MIYAKO-FORM-01','美夜子','黑貓形態；貓殼完全碎裂延後到 E-III-I4（紫音死後、凜介錯前）','A1|A3','Act I～Act III 中段','—','%s:105-105'%L,'CF-STATE-MIYAKO-BETA-05','VERIFIED_CURRENT','舊行「permanent curse form」過時'),
('CFR-STATE-MIYAKO-END-01','美夜子','Act IV 結局：以人類身份活落去、八十歲自然死亡（CDL-327 唯一定局）','A4','Act IV','—','%s:93-93 | %s:224-226'%(L,M),'CF-STATE-MIYAKO-BETA-06','VERIFIED_CURRENT','舊行「Alive (cat form, guardian)」過時；作者 2026-11-26 另有意圖「美夜子親手殺凜」（未登記，喺 story_kb，唔喺本表）'),
('CFR-STATE-RIN-01','凜','103–108 年：軍方魔法少女兵器 4 號（Stage 1）；唔係 Unit 01（Unit 01＝美夜子）','pre','帝國歷 103–108 年','—','%s:3-3 | %s:23-23 | %s:40-40'%(R,R,M),'CF-STATE-RIN-01','WRONG_AT_ORIGIN','舊行寫「Unit 01 soldier」，同美夜子 Unit 01 撞'),
('CFR-STATE-RIN-02','凜','108 年為掩護美夜子撤離犧牲，頸部被光環扭斷','pre','帝國歷 108 年','—','%s:78-78'%T,'CF-STATE-RIN-02','VERIFIED_CURRENT',''),
('CFR-STATE-RIN-03','凜','109 年被黑奏借維多利亞之淚重組為情緒管理局公務員，記憶被改寫（Unit 00 原型）','pre','帝國歷 109 年','—','%s:81-81 | %s:25-25'%(T,R),'CF-STATE-RIN-03／04（部分）','VERIFIED_CURRENT',''),
('CFR-STATE-RIN-04','凜','自願兵器化→Unit 00-Null（要求黑奏挖走所有感情）：發生時間四處記述矛盾；狀態＝意識近清零，殘存本能避開人群、向美夜子求乾淨結束','A2_END|A3','見「核實」欄來源','—','%s:848-848 | %s:243-243 | %s:34-34 | %s:37-37 | %s:149-149'%(O2,T,HC,HC,R),'CF-KNOW-UNIT00-04（混淆 109 重組同自願兵器化）','CONFLICT_IN_SOURCES','Act II 大綱：114/2 底～3 初；時間線列 114/4；HC-2g：Act II 末；HC-2j：不早於 Act III'),
('CFR-KNOW-TEAM-RIN-01','主角團／觀眾','Act II 結尾唔知凜已兵器化（大綱故意不呈現）；觀眾要到 Phase H 先知凜 108 年已死並被重組','A2_END|A3','Act II 結尾→Phase H','隊伍同觀眾唔知；真相＝凜已兵器化（見 CFR-STATE-RIN-04，時間有爭議）','%s:848-848 | %s:240-240'%(O2,T),'CF-KNOW-UNIT00-02／05','VERIFIED_CURRENT',''),
('CFR-KNOW-RIN-OATH-01','凜','知道美夜子嘅介錯人誓言（確保隊友以人類身份死去）；賭美夜子一定會嚟搵自己、放自己走','A2_END|A3','（CDL-351，作者決定）','凜知；誓言對象泛指隊友','%s:89-93'%M,'（舊 Fact Map 冇）','VERIFIED_CURRENT','舊 Fact Map 完全冇呢條關係'),
('CFR-KNOW-MIYAKO-RIN-01','美夜子','見證凜完成改造嗰刻按生物本能反射式拔紅線，確認「凜已經唔喺度」','A2_END|A3','凜完成自願兵器化嗰刻','—','%s:95-95'%M,'（舊 Fact Map 冇）','VERIFIED_CURRENT','同「主角團唔知」嘅關係未理順（美夜子是否在場）'),
('CFR-KNOW-HARUKA-CREATOR-01','晴香','創世者身份：硬約束表 HC-2d＝Act II 暗示（晴香知而拒絕承認）、Act III 由黑奏正式揭露；角色檔寫「創世者（不自知）」；時間線 AKS-H1 時唔知','A2|A3','Act II～Act III','來源互相矛盾：「知而拒絕」對「不自知」','%s:31-31 | %s:24-24 | %s:156-156'%(HC,H,T),'CF-KNOW-CREATOR-01','CONFLICT_IN_SOURCES','舊行寫「Act IV 先 explicit」，同 HC-2d（AC）衝突；HC 表自標部分過時'),
('CFR-KNOW-HARUKA-AYA-01','晴香','彩同黑奏係同一身體：Act III J1 黑奏喺鏡前脫下彩嘅面具，真面目登場（雙重背叛）','A3','Act III J1','晴香之前唔知','%s:335-338 | %s:39-41'%(O3,A),'CF-KNOW-DUAL-02','VERIFIED_CURRENT','J1 內容引用 CDL-002/266；舊行寫「endgame or Act IV」'),
('CFR-STATE-HARUKA-A2END-01','晴香','Act II 結尾：認知崩壞、同夕部分融合、獲陰影視覺、被 EMB 鐵桶包圍','A2_END','Act II 結尾（114 年 3 月）','—','%s:244-246 | %s:234-236'%(H,T),'—','VERIFIED_CURRENT',''),
('CFR-STATE-HARUKA-A3-01','晴香','Act III J6：用最後意志想做點嘢，被系統排斥，肉體癱瘓（大綱標 btd，作者未定案）','A3','Act III J6','—','%s:412-424'%O3,'—','OPEN_UNREGISTERED','未登記決定'),
('CFR-STATE-HARUKA-A4-01','晴香','Act IV：主觀二十年、客觀現實數日（CDL-430）；結局清醒、保留記憶，主動同 L3 融合成世界濾網（CDL-326/344）','A4','Act IV','—','%s:6-6 | %s:94-94 | %s:265-267'%(L,L,H),'CF-STATE-HARUKA-03／05／06','VERIFIED_CURRENT','舊行「stasis／filter form」「Y134+」過時'),
('CFR-STATE-YU-01','夕','Act II 結尾同晴香部分融合；Act III J7 被迫接管晴香身體並改變現實（HC-2h）','A2_END|A3','Act II 末～Act III J7','—','%s:244-246 | %s:35-35 | %s:425-436'%(H,HC,O3),'CF-STATE-YU-04／05（部分）','VERIFIED_CURRENT','Act IV 整合時間以 CDL-430 為準'),
('CFR-STATE-KUROKANE-01','黑奏','彩 Act III 尾奪回身體犧牲後，黑奏仍然存在並獨佔身體，失去彩後更失控；Act IV 最後先消散','A3|A4','Act III 尾～Act IV 最後','—','%s:9-10'%L,'CF-STATE-KUROKANE-04／05／06','VERIFIED_CURRENT','舊行「Y114 endgame 分散」過時'),
('CFR-STATE-AYA-01','彩','Act III 尾奪回身體並犧牲（利他），被平衡機制捕獲入永恆輪迴；真正放低失去螢嘅痛係 Act IV','A3|A4','Act III 尾～Act IV','—','%s:9-10'%L,'CF-STATE-AYA-03／04／05（時間）','VERIFIED_CURRENT','決定記錄入面有兩條都叫 CDL-428（編號撞），本行取「彩弧線分法」嗰條'),
('CFR-RULE-KUROKANE-01','黑奏','力量本質＝操控奇蹟（只可扭曲、改導、污染現存奇蹟，唔能自行發動第四層現實覆寫）；力量來源＝晴香 102 年創世逆流＋鐵絲網許願信標','always','全劇','—','%s:492-492 | %s:457-457'%(L,L),'（WORLD_RULE_FACTS 部分）','VERIFIED_CURRENT',''),
('CFR-KNOW-KUROKANE-CREATOR-01','黑奏','是否明知晴香係創世者（舊行：Y102+ 明知）：現行來源只直接支持「力量嚟自晴香創世逆流」，未見明寫「明知身份」','always','—','未知','%s:457-457'%L,'CF-KNOW-CREATOR-03','UNKNOWN','唔好當已證實'),
]
def rng(s):
    out=[]
    for part in s.split('|'):
        m=re.match(r'\s*(.+?):(\d+)(?:-(\d+))?\s*$',part)
        if m: out.append((m.group(1),int(m.group(2)),int(m.group(3) or m.group(2))))
    return out
def text(p,a,b,root=ROOT): return '\n'.join((root/p).read_text(encoding='utf-8').split('\n')[a-1:b])
def log_rows(root=ROOT):
    d={}
    for l in (root/L).read_text(encoding='utf-8').split(chr(10)):
        m=re.match(r'^\| (CDL-\d+)[ -]?[^|]*\|',l)
        if m: d.setdefault(m.group(1),[]).append(hashlib.sha1(l.encode()).hexdigest())
    return d
def stamp(root=ROOT):
    st={'verified_through_CDL':VERIFIED_THROUGH,'verified_on':VERIFIED_ON,'facts':{},'log_rows':log_rows(root)}
    for r in ROWS:
        srcs=[]
        for p,a,b in rng(r[6]):
            t=text(p,a,b,root); d={'file':p,'start':a,'end':b,'sha1':hashlib.sha1(t.encode()).hexdigest(),'cdl':sorted(set(re.findall(r'CDL-\d+',t)))}
            if p==L: d['rows']=[m.group(1) for m in (re.match(r'^\| (CDL-\d+)',x) for x in t.split(chr(10))) if m]
            srcs.append(d)
        st['facts'][r[0]]={'who':r[1],'time':r[3],'verification':r[8],'sources':srcs}
    return st
if __name__=='__main__':
    hdr='| ID | 人物 | 內容（知道／相信／狀態） | 時間標籤 | 適用時間（原文） | 知道 vs 真相 | 來源 | 取代舊行 | 核實 | 備註 |\n|---|---|---|---|---|---|---|---|---|---|\n'
    md=['# PILOT_FACTS — 美夜子／凜／晴香／黑奏(彩)／夕 嘅重新核實事實（試點）\n',
        f'核實基準：決定記錄至 CDL-{VERIFIED_THROUGH}（{VERIFIED_ON}）。每行都對返**當下原文**核過，唔係抄舊 Fact Map。舊 Fact Map 唔改、唔刪。',
        '核實欄：VERIFIED_CURRENT＝對原文核過；CONFLICT_IN_SOURCES＝來源互相矛盾（並列，唔裁決）；WRONG_AT_ORIGIN＝舊行建立時已錯；OPEN_UNREGISTERED＝未登記決定；UNKNOWN＝資料未能確立。',
        '時間標籤：pre／A1／A2／A2_END／A3／A4／always；`X/Y`＝來源對時間有分歧或橫跨（表內用斜線）。範圍：只覆蓋上面五位人物，唔代表全作。\n',hdr]
    for r in ROWS: md.append('| '+' | '.join([r[0],r[1],r[2],r[3].replace('|','/'),r[4],r[5],r[6].replace('|',' ; '),r[7],r[8],r[9]])+' |'+chr(10))
    (OUT/'PILOT_FACTS.md').write_text(''.join(md),encoding='utf-8'); (OUT/'fact_stamps.json').write_text(json.dumps(stamp(),ensure_ascii=False,indent=1),encoding='utf-8')
    c={}; 
    for r in ROWS: c[r[8]]=c.get(r[8],0)+1
    print(len(ROWS),'rows',c)
