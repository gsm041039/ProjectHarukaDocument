"""v10.2 archive integrity check: cross-links, manifest, and original v8 files."""
from pathlib import Path
import re,json,hashlib
root=Path(__file__).resolve().parents[1]
source=(root/'SKILL.md').read_text(encoding='utf8')
assert 'version: 10.2.0' in source
assert 'Whole-Character' in source or '全身探索先行' in source
for term in ('AMPLIFY','REIMAGINE','CONCEPT_IMAGES','PART_REFINEMENT','PHASE 6','FOCAL MAP','FOCAL INTENT'):
    # Some terms are in the stage checker rather than Skill header.
    assert term in source or term in (root/'tests/workflow_stage_guard_v101.py').read_text(encoding='utf8'),term
for target in re.findall(r'\[[^]]+\]\(([^)]+)\)',source):
    if not target.startswith(('https://','http://','#')):
        assert (root/target).is_file(),f'Missing linked document: {target}'
manifest=json.loads((root/'MANIFEST_SHA256.json').read_text(encoding='utf8'))
all_files=[p for p in root.rglob('*') if p.is_file() and p.name!='MANIFEST_SHA256.json' and '__pycache__' not in p.parts]
assert len(manifest)==len(all_files),(len(manifest),len(all_files))
for rel,expected in manifest.items():
    p=root/rel
    assert p.is_file(),f'Missing: {rel}'
    assert hashlib.sha256(p.read_bytes()).hexdigest()==expected,f'Hash mismatch: {rel}'
assert len([p for p in (root/'archive_v8').rglob('*') if p.is_file()])>=100
print('PASS: v10.2 links, archive, manifest, core stages')
