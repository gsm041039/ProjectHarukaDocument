"""Structural regression only: no visual scoring or actual approvals."""
import copy, importlib.util
from pathlib import Path
p=Path(__file__).with_name('focal_hierarchy_guard_v102.py')
s=importlib.util.spec_from_file_location('focal_v102',p);m=importlib.util.module_from_spec(s);s.loader.exec_module(m)

def option(kind):
    return {'kind':kind,
      'target_region':'The upper garment collar near the face',
      'contrast_mechanism':'Change adjacency of value and texture without garment replacement',
      'expected_focal_effect':'Create a secondary read then return attention to face',
      'risk':'If too strong, may steal focus from the expression',
      'whole_body_test':'Compare at identical full-body pose with controlled garment structures'}

def valid():
    return {'schema':'focus-v10.2','candidate_id':'EXAMPLE-01',
      'approved_structure':'Keep the original accepted knit outerwear with inner blouse and skirt',
      'primary_identity_color':'The character-approved distinctive peacock green',
      'use_case':'A young singer casually going out without expecting attention',
      'comparison_control':'Same character face hair outfit pose light and camera',
      'observed_focus':{'first':'Golden-haired smiling face and eyes',
          'second':'The sharp light-dark transition around the front collar',
          'third_or_diffuse':'Lower hem and skirt contrast provides tertiary visual mass',
          'evidence_uncertainty':'Manual read from the full-body concept, not measured attention'},
      'focal_intent':{'desired_order':'The face first, collar second, then lower outfit',
          'character_rationale':'Keeps private-outing mood while retaining attractive presence',
          'protect_from_competition':'Never let a vivid waistband dominate the head'},
      'contrast_hypotheses':[option('LOCAL_ACCENT'),option('NO_NEW_ACCENT')]}

def fail(v):
    try:m.check(v)
    except m.FocalPlanError:return
    raise AssertionError('Plan should fail validation')

cases=0
base=valid();assert 'PASS' in m.check(base);cases+=1
for mutate in [
    lambda v:v.pop('primary_identity_color'),
    lambda v:v.pop('approved_structure'),
    lambda v:v.pop('comparison_control'),
    lambda v:v['observed_focus'].pop('first'),
    lambda v:v['observed_focus'].pop('second'),
    lambda v:v['observed_focus'].pop('evidence_uncertainty'),
    lambda v:v['focal_intent'].pop('desired_order'),
    lambda v:v['focal_intent'].pop('character_rationale'),
    lambda v:v['contrast_hypotheses'].pop(),
    lambda v:v['contrast_hypotheses'][0].update(kind='NO_NEW_ACCENT'),
    lambda v:v['contrast_hypotheses'][0].pop('target_region'),
    lambda v:v['contrast_hypotheses'][1].pop('risk'),
]:
    x=copy.deepcopy(base);mutate(x);fail(x);cases+=1
# Even when a final accent is NOT used, planning both passes: optional accents.
no_accent=valid();no_accent['decision']='Use no new accent, only controlled existing value';assert 'PASS' in m.check(no_accent);cases+=1
print(f'PASS: {cases} v10.2 focal-plan structural scenarios (no artwork scoring)')
