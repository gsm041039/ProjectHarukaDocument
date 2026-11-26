"""Deterministic retrieval/integrity tests for story_kb (no LLM)."""
import subprocess, sys, shutil, pathlib, re
R = pathlib.Path(__file__).resolve().parent.parent
def q(*a): return subprocess.run([sys.executable, str(R/'tools/kb.py'), 'q', *a], capture_output=True, text=True, encoding='utf-8').stdout
ids = lambda s: set(re.findall(r'^## (F-[\w-]+)', s, re.M))
res = []
def t(name, ok): res.append(ok); print(('PASS ' if ok else 'FAIL ') + name)
v = q('--about', '美夜子', '凜', '--as-of', 'A2_END')
t('A2_END view contains the pre-existing oath (F-MR-04) and its text mentions 人類身份', 'F-MR-04' in ids(v) and '以「人類」身份死去' in v)
t('A2_END view contains Rin psychology + 殘忍只指向自己', {'F-MR-07', 'F-MR-11'} <= ids(v))
t('default view excludes plans/direction (F-MR-18, F-FB-01, F-MR-17)', not ({'F-MR-18', 'F-FB-03', 'F-MR-17'} & ids(v)))
vp = q('--about', '美夜子', '凜', '--as-of', 'A2_END', '--plans')
t('--plans adds current arrangement + author direction', {'F-MR-18', 'F-FB-03', 'F-MR-17'} <= ids(vp))
t('superseded hidden by default (F-MR-16 absent in --plans view)', 'F-MR-16' not in ids(vp))
vs = q('--about', '美夜子', '凜', '--as-of', 'A2_END', '--plans', '--superseded')
t('--superseded shows F-MR-16 flagged as 歷史紀錄 with successor', 'F-MR-16' in ids(vs) and '已被取代' in vs and 'superseded_by: F-MR-17' in vs)
t('disputed card flagged + time-uncertain cards flagged', '來源矛盾' in v and '時間存疑' in v)
k = q('--about', '黑奏', '--as-of', 'A2_END')
t('late-revealed world rule/secret visible at A2_END (F-KH-01 reveal=Act III, F-KH-02)', {'F-KH-01', 'F-KH-02'} <= ids(k) and 'reveal: Act III' in k)
t('Kurokane current limits present (can-not-originate, cannot-kill-Haruka, miracle limits)', {'F-KH-02', 'F-KH-07', 'F-KH-04'} <= ids(k))
t('author appreciation stays a candidate (F-FB-02) not a plan/rule', 'F-FB-02' not in ids(q('--about', '黑奏', '--as-of', 'A2_END', '--kind', 'rule', 'plan')) and 'kind=candidate' in q('--id', 'F-FB-02'))
t('clarified misunderstanding kept as history, points to current intent', 'superseded_by: F-FB-03' in q('--id', 'F-FB-01') and '已被取代' in q('--id', 'F-FB-01'))
# drift detection on a temp copy
tmp = R.parent / '_kbtmp'; shutil.rmtree(tmp, ignore_errors=True); shutil.copytree(R, tmp)
f = tmp/'facts/miyako_rin.md'; s = f.read_text(encoding='utf-8'); f.write_text(s.replace('確保當她們走向終點時', '確保當她們走向終點時（被改）', 1), encoding='utf-8')
out = subprocess.run([sys.executable, str(tmp/'tools/kb.py'), 'check'], capture_output=True, text=True, encoding='utf-8').stdout
t('drift detector catches an edited quote', 'F-MR-04' in out and 'differs' in out); shutil.rmtree(tmp, ignore_errors=True)
print(sum(res), '/', len(res), 'passed')
