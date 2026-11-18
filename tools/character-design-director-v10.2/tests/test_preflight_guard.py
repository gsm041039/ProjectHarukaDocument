#!/usr/bin/env python3
import copy,json,subprocess,sys,tempfile
from pathlib import Path
root=Path(__file__).resolve().parents[1]
script=root/'tests'/'preflight_guard.py'
fixture=json.loads((root/'templates'/'preflight_example_generic_v100.json').read_text('utf8'))

def cmd(op,p):return subprocess.run([sys.executable,str(script),op,str(p)],capture_output=True,text=True)
def save(p,d):p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n',encoding='utf8')

def main():
    checks=0
    with tempfile.TemporaryDirectory() as tmp:
        p=Path(tmp)/'preflight.json'
        save(p,fixture)
        assert cmd('check',p).returncode==0,'valid scenario fails'
        checks+=1
        assert cmd('lock',p).returncode==0 and cmd('verify',p).returncode==0,'receipt fails'
        checks+=1
        def bad(mut,reason):
            nonlocal checks
            d=copy.deepcopy(fixture);mut(d);save(p,d)
            outcome=cmd('check',p)
            assert outcome.returncode!=0,(reason,outcome.stdout,outcome.stderr)
            checks+=1
        bad(lambda d:d.update(schema_version='9.9'),'old schema')
        bad(lambda d:d['candidates'][0]['visual_proof'].update(file='missing.svg'),'missing proof')
        bad(lambda d:d['candidates'][0].pop('strategy'),'missing strategy')
        bad(lambda d:d.update(author_feedback={'origin_candidate':'B','approval_scope':'PART_ONLY','approved_parts':['One sleeve shape only'],'next_variable':'Re-evaluate color while preserving sleeve shape'}),'missing feedback lock')

        bad(lambda d:d['candidates'][1].update(strategy='AMPLIFY'),'missing REIMAGINE track')
        bad(lambda d:d['candidates'][1].update(new_visual_principle=''),'empty new visual thesis')
        bad(lambda d:d['candidates'][0].update(existing_appeal_anchor=''),'no existing appeal to amplify')
        bad(lambda d:d.update(author_feedback={'origin_candidate':'Option B candidate','approval_scope':'PART_ONLY','approved_parts':['Sleeve colour only'],'next_variable':'Test sleeve silhouette while freezing current sleeve colour'}),'partial feedback cannot silently approve unselected parts')

        bad(lambda d:d.update(run_mode='REAL_CHARACTER'),'generic sample proof in real case')
        bad(lambda d:d['candidates'][1]['design_map'].pop('palette'),'missing palette map')
        bad(lambda d:d['candidates'][1]['design_map']['silhouette'].update(after=''), 'vague after')
        bad(lambda d:d['candidates'][1].update(blockers=['BASELINE_DOMINATES']),'selected w blocker')
        bad(lambda d:d['candidates'][1].update(visual_proof=copy.deepcopy(d['candidates'][0]['visual_proof'])),'same image')
        bad(lambda d:d['candidates'][1]['design_map'].update(**{a:{'action':'KEEP','before':'Retain the existing shape','after':'Retain the same shape','why':'The existing part works'} for a in ('proportion','silhouette','palette','wearing')}),'no substantive change')
        save(p,fixture)
        assert cmd('verify',p).returncode==0,'fixture should still match after resetting'
        checks+=1
        d=copy.deepcopy(fixture);d['candidates'][1]['appeal_gain']='Nothing useful happens at all'
        save(p,d)
        assert cmd('verify',p).returncode!=0,'mutated precommit verified'
        checks+=1
        save(p,fixture)
        original=(root/'templates'/'generic_proofs'/'option_B.svg')
        before=original.read_text('utf8')
        try:
            original.write_text(before.replace('Generic concept B','Generic concept B changed'))
            assert cmd('verify',p).returncode!=0,'mutated visual proof verified'
        finally: original.write_text(before)
        checks+=1
        d=copy.deepcopy(fixture);d['overall_verdict']='DEVELOP_IDEA';d['selected_id']=None
        d['candidates'][1]['verdict']='DEVELOP_IDEA'
        save(p,d)
        assert cmd('check',p).returncode==0,'DEVELOP IDEA should stay non-render approved'
        checks+=1
        d=copy.deepcopy(fixture);d['overall_verdict']='KEEP_ORIGINAL';d['selected_id']=None
        d['candidates'][1]['verdict']='REWORK_IDEA'
        save(p,d)
        assert cmd('check',p).returncode==0,'keep original rejected'
        checks+=1
    print(f'PASS: {checks} v10.0 structural and receipt regression checks')
if __name__=='__main__':main()
