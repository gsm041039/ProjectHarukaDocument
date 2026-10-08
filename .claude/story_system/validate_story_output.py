"""Structural validator for STORY_OUTPUT_RECORD (vNext.2.3).

Structure + internal consistency only; cannot find hidden semantic assumptions (the premise auditor does that).
Usage: python validate_story_output.py <file.json | file.md>   (md: last json block; text before it is scanned
for DIRECTOR_TRIGGER / MATERIAL labels). Exit 0 = PASS, 1 = FAIL.

Strict schema (no aliases, no coercion):
 decision_weight ROUTINE|MATERIAL|DIRECTOR; recommended_candidate_id; consistency_check{8 fields}; author_question null|str;
 owner_lookup_required null|str; guard{repair_passes,result}; reclassified[{decision_id,from,to,reason}];
 text_flags{director_trigger:bool, material_labelled:bool}  (JSON-only path; md path derives them from the text)
 candidates[{id, status VALID|CONDITIONAL|REJECTED, materially_distinct:bool, axes{mechanism,agency,system_axis,story_axis,distinct_value},
   premises[{proposition,class,source,confidence,disputed}], obligations{O#:YES|CONDITIONAL|PARTIAL|NO},
   claims{no_new_lore,no_assumptions,fully_sufficient}, premise_audit{result,merged}}]
 breadth{breadth_recovery_executed, axis_lost[{rejected_id,axis,why_invalid}], backfill_ids[], breadth_loss_justified[{axis,why}],
   final_solution_space[{id,mechanism,agency,system_axis,story_axis}], rejected_but_distinct[]}
 material_decisions[{decision_id,class:"MATERIAL",issue,owner_lookup_done,owner_lookup_result,
   provisional_default{option,why_safe,invalidating_condition,rollback_or_rework},author_question:null}]
 author_escalations[{decision_id,class:"DIRECTOR"|"CANON_FACT_NEEDS_AUTHOR",question,owner_lookup_done,owner_lookup_result,
   safe_default_test,why_author_must_decide,what_breaks_if_deferred, (+director_trigger if DIRECTOR)}]
"""
import json
import os
import re
import sys

CLASSES = {"SOURCE_FACT", "STRICT_INFERENCE", "INTERPRETIVE_ASSUMPTION", "NEW_RULE_OR_LORE", "REQUIREMENT_CHANGE"}
OBL = {"YES", "CONDITIONAL", "PARTIAL", "NO"}
AUDIT = {"NONE", "MISSING_PREMISE", "MISCLASSIFIED_PREMISE", "LOCKED_REQUIREMENT_CONFLICT"}
STATUS = {"VALID", "CONDITIONAL", "REJECTED"}
CC_FIELDS = ["RECOMMENDED_CANDIDATE_ID", "CANDIDATE_EXISTS", "PREMISES_SYNCED", "NEW_LORE_CLAIM_VALID",
             "ASSUMPTION_CLAIM_VALID", "OBLIGATION_CLAIM_VALID", "AUTHORITY_CLAIM_VALID", "RESULT"]
MD_KEYS = {"decision_id", "class", "issue", "owner_lookup_done", "owner_lookup_result", "provisional_default", "author_question"}
PD_KEYS = {"option", "why_safe", "invalidating_condition", "rollback_or_rework"}
AE_KEYS = {"decision_id", "class", "question", "owner_lookup_done", "owner_lookup_result", "safe_default_test",
           "why_author_must_decide", "what_breaks_if_deferred"}
DIRECTOR_TRIGGERS = {"LOCKED_CHARACTER_INTENT", "THEME_MORAL_MEANING", "MAJOR_WORLD_RULE", "ENDING",
                     "MAJOR_REVEAL_ARCHITECTURE", "IRREVERSIBLE_DOWNSTREAM_STRUCTURE", "AUTHOR_OWNED_AESTHETIC"}
OLD_ALIASES = {"author_escalation_record", "AUTHOR_ESCALATION_RECORD"}
TOP_KEYS = {"decision_weight", "recommended_candidate_id", "candidates", "consistency_check", "author_question",
            "owner_lookup_required", "guard", "material_decisions", "author_escalations", "reclassified",
            "text_flags", "breadth"}


def unresolved(c):
    n = 0
    for p in c.get("premises") or []:
        if p.get("disputed") or p.get("class") in ("INTERPRETIVE_ASSUMPTION", "NEW_RULE_OR_LORE"):
            n += 1
        elif p.get("class") == "REQUIREMENT_CHANGE" and not p.get("approved"):
            n += 1
    return n


def text_flags(text):
    """Derive (director_active, material_labelled) from analysis text outside the JSON block."""
    text = text or ""
    d = bool(re.search(r"DIRECTOR_TRIGGER\s*[:=]\s*(true|yes|[A-Z_]{4,})", text, re.I)) and \
        not re.search(r"DIRECTOR_TRIGGER\s*[:=]\s*(false|no|none|null)\b", text, re.I)
    d = d or bool(re.search(r"\bclass\s*[:=]\s*\"?DIRECTOR\b", text, re.I))
    m = bool(re.search(r"\bclass\s*[:=]\s*\"?MATERIAL\b", text, re.I))
    return d, m


def check_md(i, m, f):
    if not isinstance(m, dict) or set(m) != MD_KEYS:
        f.append(f"material_decisions[{i}]: keys must be exactly {sorted(MD_KEYS)}")
        return
    if m["class"] != "MATERIAL":
        f.append(f"material_decisions[{i}]: class must be 'MATERIAL'")
    pd = m["provisional_default"]
    if not isinstance(pd, dict):
        f.append(f"material_decisions[{i}]: provisional_default must be an object")
    elif set(pd) != PD_KEYS or any(not pd[k] for k in PD_KEYS):
        f.append(f"material_decisions[{i}]: provisional_default needs non-empty {sorted(PD_KEYS)}")
    if m["author_question"] is not None:
        f.append(f"material_decisions[{i}]: MATERIAL may not carry an author_question")
    if m["owner_lookup_done"] is not True:
        f.append(f"material_decisions[{i}]: owner lookup not done")


def check_ae(i, e, f):
    if not isinstance(e, dict):
        f.append(f"author_escalations[{i}]: must be an object")
        return
    want = AE_KEYS | ({"director_trigger"} if e.get("class") == "DIRECTOR" else set())
    if set(e) != want:
        f.append(f"author_escalations[{i}]: keys must be exactly {sorted(want)}")
        return
    if e["class"] not in ("DIRECTOR", "CANON_FACT_NEEDS_AUTHOR"):
        f.append(f"author_escalations[{i}]: class invalid: {e['class']}")
    miss = [k for k in AE_KEYS - {"owner_lookup_done"} if e.get(k) in (None, "", [])]
    if miss:
        f.append(f"author_escalations[{i}]: empty {sorted(miss)}")
    if e["owner_lookup_done"] is not True:
        f.append(f"author_escalations[{i}]: owner lookup not done before asking")
    if e["class"] == "DIRECTOR" and e.get("director_trigger") not in DIRECTOR_TRIGGERS:
        f.append(f"author_escalations[{i}]: DIRECTOR without a valid director_trigger")


def validate(r, text=None):
    f = []
    if not isinstance(r, dict):
        return ["record is not an object"]
    for k in r:
        if k in OLD_ALIASES:
            f.append(f"old/alias key '{k}' not allowed (use author_escalations[])")
        elif k not in TOP_KEYS:
            f.append(f"unknown top-level key '{k}'")
    w = r.get("decision_weight", "ROUTINE")
    heavy = w in ("MATERIAL", "DIRECTOR")
    cl = r.get("candidates") or []
    cands = {c.get("id"): c for c in cl}
    g = r.get("guard") or {}
    if g.get("repair_passes", 0) > 1:
        f.append("more than one repair pass")
    if g.get("result") == "OUTPUT_GUARD_FAILED":
        f.append("OUTPUT_GUARD_FAILED recorded (no validated recommendation may be claimed)")
    if r.get("owner_lookup_required") and r.get("author_question"):
        f.append("OWNER_LOOKUP_REQUIRED phrased as an author question")

    rec = r.get("recommended_candidate_id")
    if heavy and (rec or cands):
        for cid, c in cands.items():
            ps = c.get("premises")
            if not ps:
                f.append(f"{cid}: finalist has no REQUIRED_PREMISES")
            for p in ps or []:
                if p.get("class") not in CLASSES:
                    f.append(f"{cid}: premise class invalid/missing: {p.get('proposition')}")
            a = c.get("premise_audit")
            if not a or a.get("result") not in AUDIT:
                f.append(f"{cid}: no PREMISE_AUDIT result")
            elif a["result"] != "NONE" and not (a.get("merged") or any(p.get("disputed") for p in ps or [])):
                f.append(f"{cid}: audit finding not merged into premises and not PREMISE_DISPUTED")
            if c.get("status") not in STATUS:
                f.append(f"{cid}: status must be one of {sorted(STATUS)}")
            clm = c.get("claims") or {}
            if clm.get("no_new_lore") and any(p.get("class") == "NEW_RULE_OR_LORE" for p in ps or []):
                f.append(f"{cid}: no_new_lore claim with NEW_RULE_OR_LORE premise")
            if clm.get("no_assumptions") and unresolved(c) > 0:
                f.append(f"{cid}: no_assumptions claim with {unresolved(c)} unresolved premise(s)")
            if clm.get("fully_sufficient"):
                bad = [k for k, v in (c.get("obligations") or {}).items() if v != "YES"]
                if bad or not c.get("obligations"):
                    f.append(f"{cid}: fully_sufficient with non-YES/empty obligations {bad}")
            for k, v in (c.get("obligations") or {}).items():
                if v not in OBL:
                    f.append(f"{cid}: obligation {k} invalid value {v}")
    if rec:
        if rec not in cands:
            f.append(f"recommended candidate {rec} not in candidate record")
        elif cands[rec].get("status") == "REJECTED":
            f.append(f"recommended candidate {rec} is REJECTED")
        cc = r.get("consistency_check")
        if not cc:
            f.append("RECOMMENDATION_CONSISTENCY_CHECK record missing")
        else:
            miss = [k for k in CC_FIELDS if k not in cc]
            if miss:
                f.append(f"consistency_check missing fields {miss}")
            if cc.get("RESULT") != "PASS":
                f.append("consistency_check RESULT != PASS")
            if cc.get("RECOMMENDED_CANDIDATE_ID") != rec:
                f.append("consistency_check candidate id differs from recommendation")
            for k in CC_FIELDS[1:7]:
                if k in cc and cc[k] not in (True, "PASS", "YES"):
                    f.append(f"consistency_check {k} not true")

    # breadth (13h)
    b = r.get("breadth")
    distinct_rej = [c.get("id") for c in cl if c.get("status") == "REJECTED" and c.get("materially_distinct")]
    if heavy and distinct_rej:
        if not isinstance(b, dict) or b.get("breadth_recovery_executed") is not True:
            f.append(f"BREADTH_RECOVERY_CHECK not executed although materially distinct candidate(s) {distinct_rej} rejected")
    if isinstance(b, dict):
        bf = b.get("backfill_ids") or []
        if len(bf) > 2:
            f.append("more than 2 backfill candidates")
        for x in bf:
            if x not in cands:
                f.append(f"backfill candidate {x} not in candidate record")
        if b.get("axis_lost") and not bf and not b.get("breadth_loss_justified"):
            f.append("BREADTH_AXIS_LOST with neither backfill nor BREADTH_LOSS_JUSTIFIED")
        if heavy and cands and not b.get("final_solution_space"):
            f.append("FINAL_SOLUTION_SPACE missing")

    # authority (13f)
    mds = r.get("material_decisions")
    aes = r.get("author_escalations")
    for k, v in (("material_decisions", mds), ("author_escalations", aes)):
        if v is not None and not isinstance(v, list):
            f.append(f"{k} must be an array")
    mds = mds if isinstance(mds, list) else []
    aes = aes if isinstance(aes, list) else []
    for i, m in enumerate(mds):
        check_md(i, m, f)
    for i, e in enumerate(aes):
        check_ae(i, e, f)
    q = r.get("author_question")
    if q and not any(isinstance(e, dict) and e.get("question") for e in aes):
        f.append("author question without a matching author_escalations record")
    tf = r.get("text_flags") or {}
    d_act, m_lab = text_flags(text) if text is not None else (False, False)
    d_act = d_act or bool(tf.get("director_trigger"))
    m_lab = m_lab or bool(tf.get("material_labelled"))
    if d_act:
        reclass = [x for x in r.get("reclassified") or [] if isinstance(x, dict) and x.get("reason")]
        if not any(isinstance(e, dict) and e.get("class") == "DIRECTOR" for e in aes) and not reclass:
            f.append("DIRECTOR_TRIGGER in analysis but no author_escalations record and no reclassification")
    if m_lab and not mds:
        f.append("decision labelled MATERIAL in analysis but no material_decisions record")
    return f


def load(path):
    t = open(path, encoding="utf-8").read()
    if path.endswith(".json"):
        return json.loads(t), None
    blocks = list(re.finditer(r"```json\s*(.*?)```", t, re.S))
    if not blocks:
        raise ValueError("no json STORY_OUTPUT_RECORD block found")
    last = blocks[-1]
    return json.loads(last.group(1)), t[:last.start()]


def harness_complete(path, need_validation=True):
    """Completion truth (13i): returns (ok, reason). A subagent DONE claim is never consulted."""
    if not os.path.isfile(path):
        return False, "TASK_OUTPUT_MISSING_OR_INVALID: file missing"
    if os.path.getsize(path) == 0:
        return False, "TASK_OUTPUT_MISSING_OR_INVALID: file empty"
    try:
        rec, text = load(path)
    except Exception as ex:
        return False, f"TASK_OUTPUT_MISSING_OR_INVALID: record unparseable ({ex})"
    if need_validation:
        fails = validate(rec, text)
        if fails:
            return False, "TASK_OUTPUT_MISSING_OR_INVALID: validator FAIL: " + "; ".join(fails)
    return True, "complete"


if __name__ == "__main__":
    try:
        rec, text = load(sys.argv[1])
        fails = validate(rec, text)
    except Exception as ex:
        print("FAIL: unreadable record:", ex)
        sys.exit(1)
    print("PASS" if not fails else "FAIL\n- " + "\n- ".join(fails))
    sys.exit(1 if fails else 0)
