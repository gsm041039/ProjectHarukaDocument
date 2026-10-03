# POST_HOC_VERIFICATION: mechanical cell parse of reports A-E (F/G have different formats, handled separately).
import re, os, csv, collections
ROOT = os.path.join("D:", os.sep, "Projects", "ProjectHarukaDocument", "canon", "_working", "demo_pilot")
BA = os.path.join(ROOT, "blind_audit")
OUT = os.path.join(ROOT, "audit_debug")
files = {"A": "agent_A_character.md", "B": "agent_B_information.md", "C": "agent_C_structure_canon.md",
         "D": "agent_D_experience.md", "E": "agent_E_craft.md"}
VERD = re.compile(r"(FINDING|CLEAN_AFTER_ATTACK|NOT_APPLICABLE|NEEDS_AUTHOR|CLEAN)")
rows_out = []
summary = []
for X, fn in files.items():
    lines = open(os.path.join(BA, fn), encoding="utf-8").read().split("\n")
    section = ""
    for i, l in enumerate(lines, 1):
        if l.startswith("#"):
            section = l.strip("# ").strip()[:40]
        if not l.startswith("|"):
            continue
        cells = [c.strip() for c in l.strip().strip("|").split("|")]
        if len(cells) < 4 or set("".join(cells)) <= set("-: "):
            continue
        # verdict = first cell (from the right) that starts with a verdict token
        v = None
        for c in reversed(cells):
            m = VERD.match(c.replace("*", "").strip())
            if m:
                v = m.group(1)
                break
        if v is None:
            continue
        rows_out.append({"agent": X, "line": i, "section": section, "ncells": len(cells), "verdict": v,
                         "first": cells[0][:20], "second": cells[1][:30] if len(cells) > 1 else "",
                         "verify": cells[-3][:200] if len(cells) >= 5 else "", "attack": cells[-2][:200] if len(cells) >= 5 else "",
                         "concl": cells[-1][:300], "full": l[:600]})
with open(os.path.join(OUT, "04_cell_rows_raw.csv"), "w", encoding="utf-8-sig", newline="") as f:
    w = csv.DictWriter(f, fieldnames=list(rows_out[0].keys()))
    w.writeheader(); w.writerows(rows_out)
by = collections.defaultdict(collections.Counter)
for r in rows_out:
    by[r["agent"]][r["verdict"]] += 1
print("agent  rows  " + "  ".join(["FINDING", "CLEAN_AFTER_ATTACK", "CLEAN", "NOT_APPLICABLE", "NEEDS_AUTHOR"]))
for X in files:
    c = by[X]
    print(X, sum(c.values()), [c[k] for k in ["FINDING", "CLEAN_AFTER_ATTACK", "CLEAN", "NOT_APPLICABLE", "NEEDS_AUTHOR"]])
print("TOTAL", len(rows_out))
# validity heuristics
inv = []
for r in rows_out:
    if r["verdict"] in ("CLEAN_AFTER_ATTACK", "CLEAN"):
        if "攻擊" not in r["full"]:
            inv.append((r["agent"], r["line"], "CLEAN without 攻擊 text"))
        if not r["verify"] or len(r["verify"]) < 4:
            inv.append((r["agent"], r["line"], "CLEAN without 核對 cell"))
    if r["verdict"] == "NOT_APPLICABLE" and not re.search(r"[「『`]|L\d+|CDL|v3|Beat|beat", r["full"]):
        inv.append((r["agent"], r["line"], "NA without quote/anchor"))
dup = collections.Counter(r["concl"][:60] for r in rows_out)
dups = [(k, n) for k, n in dup.items() if n >= 3]
print("heuristic-invalid:", len(inv)); print(inv[:30])
print("repeated conclusion prefixes (>=3):", dups[:15])
