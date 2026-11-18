#!/usr/bin/env python3
"""v10.1 WHOLE-CHARACTER WORKFLOW GUARD (not an art judge).

Usage: python tests/workflow_stage_guard_v101.py <state.json>

Validates evidence needed for a *claimed* stage. It cannot watch ChatGPT image
calls, authenticate human approval, or judge actual aesthetic quality.
"""
import json
import sys
from pathlib import Path

class StageError(ValueError):
    pass

STAGES = ["BRIEF", "HOLISTIC", "WHOLE_CONCEPT", "CONCEPT_IMAGES", "SHORTLIST", "PART_REFINEMENT", "PRODUCTION"]
PARTS = ["head_hair", "upper", "lower", "footwear", "accessories", "views", "silhouette", "palette", "flow"]

def require_text(obj, key, place):
    val = obj.get(key) if isinstance(obj, dict) else None
    if not isinstance(val,str) or len(val.strip())<10:
        raise StageError(f"{place}.{key}: missing or too vague")
    return val

def require_list(obj,key,place,minimum):
    val = obj.get(key) if isinstance(obj,dict) else None
    if not isinstance(val,list) or len(val)<minimum:
        raise StageError(f"{place}.{key}: requires at least {minimum}")
    return val

def check(state, base):
    if not isinstance(state,dict) or state.get('schema_version')!='10.1':
        raise StageError('schema_version must be 10.1')
    stage=state.get('stage')
    if stage not in STAGES:
        raise StageError('invalid stage')
    scope=state.get('scope')
    if scope not in ('WHOLE_CHARACTER','EXPLICIT_LOCAL_EDIT'):
        raise StageError('scope must be WHOLE_CHARACTER or EXPLICIT_LOCAL_EDIT')
    brief=state.get('brief',{})
    for f in ('character_identity','context_and_outfit_use','appeal_goal','author_constraints'):
        require_text(brief,f,'brief')
    if scope=='EXPLICIT_LOCAL_EDIT':
        require_text(brief,'explicit_local_request','brief')
        # Scope exception: local edit need not pretend it's whole-character work.
        if stage in ('SHORTLIST','PART_REFINEMENT','PRODUCTION'):
            require_text(state.get('local_edit',{}),'context_protection','local_edit')
            require_text(state.get('local_edit',{}),'authorized_change','local_edit')
        return 'LOCAL-SCOPE STRUCTURE PASS — no aesthetic judgment'

    index=STAGES.index(stage)
    if index>=1:
        baseline=state.get('baseline',{})
        scan=baseline.get('whole_body_scan',{})
        for part in PARTS:
            require_text(scan,part,'baseline.whole_body_scan')
        require_list(baseline,'strong_cross_part_relations','baseline',2)
        require_text(baseline,'whole_body_opportunity','baseline')
    if index>=2:
        candidates=require_list(state,'candidates','state',2)
        strategies=set()
        for i,c in enumerate(candidates):
            w=f'candidates[{i}]'
            if not isinstance(c,dict): raise StageError(w+': not object')
            s=c.get('strategy')
            if s not in ('AMPLIFY','REIMAGINE'): raise StageError(w+': invalid strategy')
            strategies.add(s)
            for f in ('whole_body_thesis','cross_part_mechanism','appeal_hypothesis','original_loss','failure_condition'):
                require_text(c,f,w)
            body=c.get('body_map',{})
            for f in ('head_hair','upper','lower','footwear','palette','wearing'):
                require_text(body,f,w+'.body_map')
        if strategies!={'AMPLIFY','REIMAGINE'}:
            raise StageError('Global exploration must contain BOTH AMPLIFY and REIMAGINE')
    if index>=3:
        concepts=require_list(state,'exploratory_concepts','state',1)
        # A concept image is permitted without SVG proof / formal front-back settei.
        for i,concept in enumerate(concepts):
            w=f'exploratory_concepts[{i}]'
            if not isinstance(concept.get('candidate_id'),str) or not concept['candidate_id'].strip():
                raise StageError(w+': missing candidate_id')
            for f in ('pre_image_intent','relative_image_file','pose_camera_quality_controls'):
                require_text(concept,f,w)
            path=Path(concept['relative_image_file'])
            if path.is_absolute() or '..' in path.parts:
                raise StageError(w+': unsafe path')
            if not (base/path).is_file():
                raise StageError(w+': exploratory concept image missing')
        require_text(state,'image_comparison_notes','state')
    if index>=4:
        selection=state.get('whole_body_selection',{})
        require_list(selection,'shortlisted_ids','whole_body_selection',1)
        require_text(selection,'whole_body_reason','whole_body_selection')
        require_text(selection,'author_feedback','whole_body_selection')
    if index>=5:
        refinement=state.get('refinement',{})
        require_text(refinement,'selected_whole_body_thesis','refinement')
        require_text(refinement,'local_variable','refinement')
        require_text(refinement,'whole_body_recheck','refinement')
    if index>=6:
        production=state.get('production',{})
        for f in ('explicit_author_approval','full_body_final_direction','front_side_back_plan','precommit_keep_change_forbid','animation_detail_plan'):
            require_text(production,f,'production')
    return 'STAGE STRUCTURE PASS — not an artwork or human-approval assessment'

def main():
    if len(sys.argv)!=2:
        print(__doc__)
        return 2
    p=Path(sys.argv[1])
    try:
        state=json.loads(p.read_text(encoding='utf8'))
        print(check(state,p.parent))
        return 0
    except (ValueError, OSError,TypeError,KeyError) as e:
        print('STAGE FAIL:',str(e),file=sys.stderr)
        return 1
if __name__=='__main__':
    sys.exit(main())
