#!/usr/bin/env python3
"""v10.0 PRE-RENDER STRUCTURE GUARD (not an art judge)
Usage:
  python tests/preflight_guard.py check <preflight.json>
  python tests/preflight_guard.py lock <preflight.json>
  python tests/preflight_guard.py verify <preflight.json>

Proof files must be relative to skill directory (or alongside record). Files are
validated for existence and basic format only, not their artistic quality.
"""
import hashlib, json, re, sys
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]

class GateError(ValueError): pass

def fail(msg):raise GateError(msg)

def needtext(d,key,where):
    if not isinstance(d,dict):fail('Not an object: '+where)
    val=d.get(key)
    if not isinstance(val,str) or len(val.strip())<8 or val.strip().lower() in {'unknown','not sure','tbd','todo','none','n/a','keep','change','same','better'}:
        fail('Missing / vague '+where+'.'+key)
    return val

def needlist(d,key,where,n=1):
    a=d.get(key) if isinstance(d,dict) else None
    if not isinstance(a,list) or len(a)<n:fail('Missing '+where+'.'+key)
    for i,v in enumerate(a):
        if not isinstance(v,str) or len(v.strip())<8:fail('Vague '+where+'.'+key+'['+str(i)+']')
    return a

def get_proof_path(record_path,relative):
    if not isinstance(relative,str) or not relative or Path(relative).is_absolute() or '..' in Path(relative).parts:
        fail('Proof file must use a safe relative path')
    local=(record_path.parent/relative).resolve()
    fallback=(ROOT/relative).resolve()
    valid_roots=(record_path.parent.resolve(),ROOT.resolve())
    for p in (local, fallback):
        if p.is_file() and any(root==p or root in p.parents for root in valid_roots):
            return p
    fail('Visual proof file does not exist: '+relative)

def check_visual(path):
    if path.suffix.lower()=='.svg':
        try:
            svg=ET.parse(path).getroot()
        except (ET.ParseError,OSError) as e:fail('Unreadable SVG proof: '+str(e))
        if not svg.tag.endswith('svg'):fail('Proof SVG has no SVG root')
        drawable={'path','rect','ellipse','circle','polygon','polyline','line','image'}
        found=sum(1 for item in svg.iter() if item.tag.split('}')[-1] in drawable)
        if found<4:fail('SVG proof too empty to show before/after shape')
    elif path.suffix.lower()=='.png':
        with path.open('rb') as f:sig=f.read(24)
        if not sig.startswith(b'\x89PNG\r\n\x1a\n'):fail('Invalid PNG proof signature')
    else:fail('Proof must be SVG or PNG')
    if path.stat().st_size<150:fail('Proof file too small')

def validate(record, record_path):
    if not isinstance(record,dict) or record.get('schema_version')!='10.0':fail('schema_version must be 10.0')
    run_mode=record.get('run_mode','REAL_CHARACTER')
    if run_mode not in ('REAL_CHARACTER','SCHEMA_FIXTURE_ONLY'):
        fail('Unknown run_mode')
    brief=record.get('brief',{})
    for k in ('reference','scope','art_direction','anime_detail_target'):needtext(brief,k,'brief')
    exploration_mode=brief.get('exploration_mode','BOTH')
    if exploration_mode not in ('BOTH','AMPLIFY_ONLY','REIMAGINE_ONLY'):
        fail('Invalid brief.exploration_mode')
    feedback=record.get('author_feedback')
    if feedback is not None:
        if not isinstance(feedback,dict) or feedback.get('approval_scope') not in ('PART_ONLY','WHOLE_OPTION'):
            fail('author_feedback.approval_scope required')
        if not isinstance(feedback.get('origin_candidate'),str) or not feedback['origin_candidate'].strip():fail('author_feedback.origin_candidate required')
        needlist(feedback,'approved_parts','author_feedback')
        needtext(feedback,'next_variable','author_feedback')
        if feedback['approval_scope']=='PART_ONLY':
            needtext(feedback,'keep_other_parts','author_feedback')
        for k in ('rejected_parts','undecided_parts'):
            if k in feedback and not isinstance(feedback[k],list):fail('author_feedback.'+k+' must be a list')
    baseline=record.get('baseline',{})
    for k in ('appeal_target','proportions','color_front_back','wearing_identity','detail_hierarchy'):needtext(baseline,k,'baseline')
    needlist(baseline,'strengths','baseline',2)
    candidates=record.get('candidates')
    minimum = 1 if brief['scope']=='minor-local-only' else 2
    if not isinstance(candidates,list) or len(candidates)<minimum:fail('Need distinct design alternatives, not only original redraw')
    ids=set(); strategies=set(); maps=[]; vis=[]
    for i,c in enumerate(candidates):
        w=f'candidates[{i}]'
        if not isinstance(c.get('id'),str) or not c['id'].strip():fail('Missing candidate ID: '+w)
        strategy=c.get('strategy')
        if strategy not in ('AMPLIFY','REIMAGINE'):fail(w+'.strategy invalid')
        strategies.add(strategy)
        for k in ('creative_thesis','identity_boundary','why_character_specific','distinctive_gain'):
            needtext(c,k,w)
        if strategy=='AMPLIFY':needtext(c,'existing_appeal_anchor',w)
        else:needtext(c,'new_visual_principle',w)
        for k in ('mechanism','cross_part_effect','appeal_gain','baseline_loss','strongest_objection','failure_test','lower_cost_alternative','anime_impact','decision_reason'):
            needtext(c,k,w)
        needlist(c,'visible_changes',w)
        if c['id'] in ids:fail('Duplicate candidate ID')
        ids.add(c['id'])
        proof=c.get('visual_proof')
        if not isinstance(proof,dict) or proof.get('front_and_back') is not True:
            fail(w+'.visual_proof must be front and back before/after comparison')
        needtext(proof,'delta_visible_in_schematic',w+'.visual_proof')
        proof_ref=proof.get('file')
        if run_mode!='SCHEMA_FIXTURE_ONLY' and str(proof_ref).startswith('templates/generic_proofs/'):
            fail('Generic fixture proof cannot authorize real-character render')
        fpath=get_proof_path(record_path,proof_ref)
        check_visual(fpath)
        vis.append((c['id'],fpath,hashlib.sha256(fpath.read_bytes()).hexdigest()))
        design=c.get('design_map')
        if not isinstance(design,dict):fail(w+'.design_map missing')
        num_change=0
        for axis in ('proportion','silhouette','palette','wearing','appeal','anime_detail'):
            d=design.get(axis)
            if not isinstance(d,dict) or d.get('action') not in ('KEEP','CHANGE'):fail(w+'.design_map.'+axis+' must state KEEP or CHANGE')
            for field in ('before','after','why'):needtext(d,field,w+'.design_map.'+axis)
            if d['action']=='CHANGE':
                if d['before'].strip().casefold()==d['after'].strip().casefold():fail('Changed axis has identical before/after: '+w+'.'+axis)
                if axis in ('proportion','silhouette','palette','wearing'):num_change+=1
        if c.get('verdict') not in ('SELECT_FOR_TEST','REWORK_IDEA','DEVELOP_IDEA','KEEP_ORIGINAL'):fail(w+'.verdict invalid')
        blockers=c.get('blockers')
        if not isinstance(blockers,list):fail(w+'.blockers must be list')
        allowed={'NO_APPEAL_MECHANISM','NO_VISIBLE_DESIGN_GAIN','IDENTITY_LOSS','WHOLE_BODY_LOSS','DETAIL_OR_BRIEF_VIOLATION','BASELINE_DOMINATES','NO_VISUAL_PROOF'}
        if any(b not in allowed for b in blockers):fail(w+'.blockers invalid')
        if c['verdict']=='SELECT_FOR_TEST' and blockers:fail('Cannot select a blocked candidate: '+w)
        if c['verdict']=='SELECT_FOR_TEST' and num_change<1:fail('No explicit substantive design-axis change: '+w)
    if brief['scope']!='minor-local-only':
        required={'AMPLIFY','REIMAGINE'} if exploration_mode=='BOTH' else ({'AMPLIFY'} if exploration_mode=='AMPLIFY_ONLY' else {'REIMAGINE'})
        if not required.issubset(strategies):fail('Missing creative strategy: '+','.join(sorted(required-strategies)))
    if len({a[2] for a in vis})!=len(vis):fail('Two candidates use identical proof files')
    verdict=record.get('overall_verdict')
    if verdict not in ('SELECT_FOR_TEST','KEEP_ORIGINAL','DEVELOP_IDEA','EXPERIMENTAL_UNVERIFIED'):fail('Invalid overall_verdict')
    selected=record.get('selected_id')
    if verdict=='SELECT_FOR_TEST':
        if selected not in ids:fail('selected_id missing')
        if next(c for c in candidates if c['id']==selected)['verdict']!='SELECT_FOR_TEST':fail('Selected candidate failed gate')
        needtext(record,'selection_reason','record')
        needtext(record,'visual_reviewer_note','record')
        render=record.get('render_contract',{})
        for k in ('keep','change','forbid'):needlist(render,k,'render_contract')
        needtext(render,'output','render_contract')
    elif verdict in ('KEEP_ORIGINAL','DEVELOP_IDEA'):
        if selected is not None:fail(verdict+' cannot select a final-render candidate')
    else:
        if selected not in ids or record.get('author_wants_exploration') is not True:fail('Experimental requires author authorization and selected candidate')
        render=record.get('render_contract',{})
        for k in ('keep','change','forbid'):needlist(render,k,'render_contract')
        needtext(render,'output','render_contract')
    return verdict,vis,run_mode

def digest(path):return hashlib.sha256(path.read_bytes()).hexdigest()

def main():
    if len(sys.argv)!=3 or sys.argv[1] not in ('check','lock','verify'):
        print(__doc__);return 2
    op,p=sys.argv[1],Path(sys.argv[2])
    try:
        record=json.loads(p.read_text(encoding='utf-8'))
        verdict,vis,run_mode=validate(record,p)
        receipt=p.with_suffix(p.suffix+'.receipt.json')
        if op=='lock':
            if receipt.exists():fail('Precommit already locked; use new record')
            obj={'schema_version':'10.0','sha256':digest(p),'verdict':verdict,'run_mode':run_mode,'proofs':{ident:{'file':str(path),'sha256':hash_} for ident,path,hash_ in vis}}
            receipt.write_text(json.dumps(obj,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
            print(('FIXTURE VALIDATED, NOT AUTHORIZED FOR RENDER' if run_mode=='SCHEMA_FIXTURE_ONLY' else 'STRUCTURE PASS; precommit and proof hashes locked (NOT a design-quality pass)'))
        elif op=='verify':
            if not receipt.exists():fail('Missing receipt')
            old=json.loads(receipt.read_text(encoding='utf8'))
            if old.get('sha256')!=digest(p):fail('PRECOMMIT MODIFIED after lock')
            for ident,path,h in vis:
                entry=old.get('proofs',{}).get(ident)
                if not entry or entry.get('sha256')!=h:fail('PROOF MODIFIED after lock: '+ident)
            print('RECEIPT MATCH; text and visual proofs unchanged')
        else:print('SCHEMA FIXTURE PASS — NOT RENDER AUTHORIZED' if run_mode=='SCHEMA_FIXTURE_ONLY' else 'STRUCTURE PASS; visual content and artistic quality NOT assessed')
        return 0
    except (GateError,KeyError,ValueError,TypeError,OSError,json.JSONDecodeError) as e:
        print('GATE FAIL:',str(e),file=sys.stderr)
        return 1

if __name__=='__main__':sys.exit(main())
