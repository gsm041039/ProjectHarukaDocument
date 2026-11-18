"""Procedural regression for v10.1 whole-character-first stage guard."""
import tempfile, importlib.util, copy
from pathlib import Path

modpath=Path(__file__).with_name('workflow_stage_guard_v101.py')
spec=importlib.util.spec_from_file_location('workflow_gate',modpath)
m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)

def baseline():
    return {'whole_body_scan':{p:'Grounded baseline observation about '+p for p in m.PARTS},
            'strong_cross_part_relations':['Head and shoulder relationship from original reference','Top layer and skirt color placement supports identity'],
            'whole_body_opportunity':'Entire character could gain stronger first-read relationship'}

def candidate(strategy):
    return {'strategy':strategy,'whole_body_thesis':'Character-specific complete outfit idea '+strategy,
            'cross_part_mechanism':'Head, upper, lower and color masses coherently change together',
            'appeal_hypothesis':'The full-body color-and-volume relation may enhance character appeal',
            'original_loss':'Some of the original restrained visual character will be lost',
            'failure_condition':'In comparable full-body view, character becomes less identifiable',
            'body_map':{k:'Describe intentional KEEP or CHANGE to '+k for k in ('head_hair','upper','lower','footwear','palette','wearing')}}

def record(stage='BRIEF'):
    return {'schema_version':'10.1','stage':stage,'scope':'WHOLE_CHARACTER',
            'brief':{'character_identity':'Character identity with preserved original face',
                     'context_and_outfit_use':'Character-specific everyday clothing for this story era',
                     'appeal_goal':'Strengthen identifiable charm without visual noise',
                     'author_constraints':'TV anime complexity and specified identity locks'},
            'baseline':baseline(), 'candidates':[candidate('AMPLIFY'),candidate('REIMAGINE')]}

def expect_fail(data,base):
    try: m.check(data,base)
    except m.StageError: return
    raise AssertionError('Expected stage gate to reject invalid workflow')

with tempfile.TemporaryDirectory() as d:
    folder=Path(d)
    (folder/'concept_A.png').write_bytes(b'illustration fixture only')
    state=record('BRIEF'); assert 'PASS' in m.check(state,folder)
    state['stage']='HOLISTIC'; assert 'PASS' in m.check(state,folder)
    state['stage']='WHOLE_CONCEPT';assert 'PASS' in m.check(state,folder)
    bad=copy.deepcopy(state);bad['baseline']['whole_body_scan'].pop('head_hair');expect_fail(bad,folder)
    bad=copy.deepcopy(state);bad['candidates'][0]['body_map'].pop('footwear');expect_fail(bad,folder)
    bad=copy.deepcopy(state);bad['candidates'][1]['strategy']='AMPLIFY';expect_fail(bad,folder)
    state['stage']='PART_REFINEMENT';expect_fail(state,folder) # no concept images / selection
    state['stage']='CONCEPT_IMAGES'
    state['exploratory_concepts']=[{'candidate_id':'A','pre_image_intent':'Before generation a complete whole-body design argument',
                                   'relative_image_file':'concept_A.png',
                                   'pose_camera_quality_controls':'Neutral camera and identical pose for fair design comparison'}]
    state['image_comparison_notes']='Observed change and potential rendering drift versus baseline'
    assert 'PASS' in m.check(state,folder) # NO SVG / no formal settei required
    state['stage']='SHORTLIST';expect_fail(state,folder)
    state['whole_body_selection']={'shortlisted_ids':['A'],
                                    'whole_body_reason':'Whole body reads more clearly without losing persona',
                                    'author_feedback':'Author likes this direction provisionally, not a final design approval'}
    assert 'PASS' in m.check(state,folder)
    state['stage']='PART_REFINEMENT';expect_fail(state,folder)
    state['refinement']={'selected_whole_body_thesis':'Maintain chosen complete silhouette of candidate A',
                          'local_variable':'Investigate brim size without changing full outfit',
                          'whole_body_recheck':'Check against whole figure to prevent oversized head'}
    assert 'PASS' in m.check(state,folder)
    state['stage']='PRODUCTION';expect_fail(state,folder)
    state['production']={'explicit_author_approval':'Author approved complete character concept for production',
                         'full_body_final_direction':'Final full-character wardrobe, silhouettes and colors confirmed',
                         'front_side_back_plan':'Consistent components in front, profile and back views',
                         'precommit_keep_change_forbid':'Explicit full keep change forbid list before settei',
                         'animation_detail_plan':'Check line burden, garment attachment and turnaround consistency'}
    assert 'PASS' in m.check(state,folder)
    state['scope']='EXPLICIT_LOCAL_EDIT';state['stage']='PART_REFINEMENT'
    bad=copy.deepcopy(state);bad['brief'].pop('explicit_local_request',None);expect_fail(bad,folder)
    state['brief']['explicit_local_request']='User explicitly requests only the existing sleeve color change'
    state['local_edit']={'context_protection':'All other layers unchanged and original costume kept',
                         'authorized_change':'Modify the local sleeve color only at explicit author request'}
    assert 'PASS' in m.check(state,folder)
print('PASS: 12 v10.1 workflow checks and progression conditions')
