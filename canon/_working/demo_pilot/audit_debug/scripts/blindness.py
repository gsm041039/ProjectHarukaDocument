# POST_HOC_VERIFICATION v2: decoded paths; only Read/Grep/Glob/Bash count as access; also scan search RESULTS for exposure.
import csv, json, re, os
ROOT = os.path.join("D:", os.sep, "Projects", "ProjectHarukaDocument", "canon", "_working", "demo_pilot", "audit_debug")
base = os.path.join(ROOT, "raw_agent_extracts")
ALLOWED_READ = ("blind_audit/00_input_beat_v3.md", "blind_audit/01_audit_protocol.md")
FORB = re.compile(r"(demo_pilot/(?!blind_audit)|PROJECT_STATUS|NEXT_ACTION|SESSION_LEDGER|QUESTION_QUEUE|voice[_-]?bible|performance[_-]?bible|voice-workshops|character-voice|character-performance|DERIVATION_LEDGER|BEAT_LAYER_ANGLE_SCAN|DEMO_PILOT_TRACKER)", re.I)
ANGLE = re.compile(r"angle-system\.md|blind-angle-audit-protocol|01_AUDIT_PROTOCOL", re.I)
out = []
def norm(s): return s.replace("\\", "/")
for X in "ABCDEFG":
    rows = list(csv.DictReader(open(os.path.join(base, f"agent_{X}_toolcalls.tsv"), encoding="utf-8"), delimiter="\t"))
    out.append(f"\n## Agent {X}")
    seen_angle = None
    n_read = n_search = 0
    for r in rows:
        if r["tool"] not in ("Read", "Grep", "Glob", "Bash"):
            continue
        d = json.loads(r["input"])
        txt = norm(json.dumps(d, ensure_ascii=False))
        if r["tool"] == "Read":
            n_read += 1
            p = norm(d.get("file_path", "")).lower()
            if ANGLE.search(p) and seen_angle is None:
                seen_angle = r["seq"]
            if FORB.search(p):
                out.append(f"  READ_OF_FORBIDDEN seq{r['seq']}: {p}")
            elif not p.endswith(ALLOWED_READ):
                pass
        else:
            n_search += 1
            if FORB.search(txt) and "!**/demo_pilot/**" not in txt and "!demo_pilot/**" not in txt and "grep -v" not in txt:
                out.append(f"  SEARCH_TARGETS_FORBIDDEN? seq{r['seq']} {r['tool']}: {txt[:220]}")
            if ANGLE.search(txt) and seen_angle is None:
                seen_angle = r["seq"]
    out.append(f"  reads={n_read} searches={n_search} first angle/protocol touch seq={seen_angle}")
    # exposure in search results
    sr = open(os.path.join(base, f"agent_{X}_search_results.txt"), encoding="utf-8").read()
    lines = [norm(l) for l in sr.split("\n")]
    expo = [l for l in lines if FORB.search(l) and not l.lstrip().startswith(("seq", "###", "==="))]
    # path-only exposure (files_with_matches style lines) vs content lines
    out.append(f"  result lines mentioning forbidden-pattern strings: {len(expo)}")
    for l in expo[:12]:
        out.append("    > " + l[:200])
open(os.path.join(ROOT, "scripts", "blindness_raw_output.txt"), "w", encoding="utf-8").write("\n".join(out))
print("ok")
