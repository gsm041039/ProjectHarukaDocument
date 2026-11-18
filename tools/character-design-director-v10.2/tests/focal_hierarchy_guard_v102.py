#!/usr/bin/env python3
"""v10.2 structural-only check for selected whole-character concepts before a palette study.
No claim to judge aesthetic quality, actual gaze order, or human approval.
Usage: python tests/focal_hierarchy_guard_v102.py <focal_plan.json>
"""
import sys, json
from pathlib import Path

class FocalPlanError(ValueError): pass

def text(o,k,where):
    v=o.get(k) if isinstance(o,dict) else None
    if not isinstance(v,str) or len(v.strip())<8: raise FocalPlanError(where+'.'+k+' missing/vague')
    return v

def check(plan):
    if not isinstance(plan,dict) or plan.get('schema')!='focus-v10.2':
        raise FocalPlanError('schema must be focus-v10.2')
    for key in ('candidate_id','approved_structure','primary_identity_color','use_case','comparison_control'):
        text(plan,key,'plan')
    fm=plan.get('observed_focus',{})
    for key in ('first','second','third_or_diffuse','evidence_uncertainty'):
        text(fm,key,'observed_focus')
    intent=plan.get('focal_intent',{})
    for key in ('desired_order','character_rationale','protect_from_competition'):
        text(intent,key,'focal_intent')
    options=plan.get('contrast_hypotheses')
    if not isinstance(options,list) or len(options)<2: raise FocalPlanError('requires 2 distinct contrast hypotheses')
    kinds=set()
    for i,opt in enumerate(options):
        where=f'contrast_hypotheses[{i}]'
        if not isinstance(opt,dict): raise FocalPlanError(where+' must be object')
        kind=opt.get('kind');kinds.add(kind)
        if kind not in ('LOCAL_ACCENT','NO_NEW_ACCENT','OTHER'): raise FocalPlanError(where+'.kind invalid')
        for key in ('target_region','contrast_mechanism','expected_focal_effect','risk','whole_body_test'):
            text(opt,key,where)
    if not {'LOCAL_ACCENT','NO_NEW_ACCENT'}.issubset(kinds):
        raise FocalPlanError('must consider both a local accent and an alternative with no new bright accent; either may win')
    return 'FOCAL PLAN STRUCTURE PASS — no aesthetic or author-approval claim'

if __name__=='__main__':
    try:
        p=Path(sys.argv[1]);print(check(json.loads(p.read_text(encoding='utf-8'))))
    except (IndexError, OSError, ValueError, TypeError) as e:
        print('FOCAL PLAN FAIL:',e,file=sys.stderr);sys.exit(1)
