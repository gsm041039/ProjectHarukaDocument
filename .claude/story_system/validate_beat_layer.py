"""Structural validator for FULL_BEAT_LAYER markdown (story-room BEAT_LAYER_DEEP_DESIGN mode, 2026-10-08).

Checks STRUCTURE and CHECKABLE content only — it cannot judge analysis quality (that needs a human/
orchestrator semantic spot-check, per the skill's Delivery Gate). Follows the markdown convention
in story-room/SKILL.md "## BEAT_LAYER_DEEP_DESIGN Mode > Markdown Convention".

Usage: python validate_beat_layer.py <file.md> [--expect B1,B2,B3,...]
Exit 0 = PASS (no BLOCKING issues), 1 = FAIL. Always prints a report; FAIL lists every blocking reason.

Checks (maps to Phase 2 spec):
 1. All expected beat IDs present (only if --expect given; otherwise just reports found IDs, no duplicates)
 2/3. Each beat has the full 19-field contract; missing fields listed
 4. "N/A" fields have a reason after " — "
 5. Each beat has its own PER_BEAT_DESIGN_RATIONALE block (not shared/absent)
 6. 10-14 angles, or a DEPTH_EXCEPTION_NEEDS_REVIEW line with a reason
 7. Each angle block has all 5 analysis keys, non-empty
 8. Diff-only delivery detection: no "## BEAT:" blocks at all => whole file flagged INCOMPLETE_BEAT_LAYER
 9. source_obligation_trace field present and non-empty
10. Declared DELIVERY_STATUS (if present) matches the structural verdict
11. ANGLES_SELECTED (if declared) matches the actual count of ANGLE blocks (2026-10-09)

Not checked here (semantic, needs a human/orchestrator per the skill's Delivery Gate): whether
DESIGN_DECISION_RECORD reflects a real alternatives comparison, whether the core turn's causal
chain actually holds, or whether a beat problem was wrongly pushed to Scene layer.
"""
import re
import sys

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

FIELDS = [
    "beat_function", "entry_state", "pressure_trigger", "participant_intentions", "action",
    "reaction", "turn", "consequence", "emotional_value_shift", "relationship_delta",
    "audience_info_delta", "character_knowledge_delta", "setup_payoff", "world_rule_exposure",
    "gameplay_form", "exit_state", "next_beat_pressure", "source_obligation_trace",
    "downstream_references",
]
ANGLE_KEYS = ["DESIGN_REQUIREMENT", "CURRENT_DESIGN", "RATIONALE", "RISK_TRADEOFF", "DESIGN_ACTION"]
DESIGN_ACTIONS = {"KEEP", "REVISE", "VERIFY", "NEEDS_AUTHOR_DECISION"}
BEAT_RE = re.compile(r"^## BEAT:\s*(\S+)\s*$", re.M)
ANGLE_RE = re.compile(r"^### ANGLE:\s*(.+?)\s*$", re.M)


def split_beats(text):
    """Return list of (beat_id, body_text) for each '## BEAT: X' section, body up to next '## ' or EOF."""
    matches = list(BEAT_RE.finditer(text))
    beats = []
    for i, m in enumerate(matches):
        start = m.end()
        end = text.find("\n## ", start)
        end = len(text) if end == -1 else end
        beats.append((m.group(1), text[start:end]))
    return beats


def split_angles(body):
    matches = list(ANGLE_RE.finditer(body))
    angles = []
    for i, m in enumerate(matches):
        start = m.end()
        end_m = ANGLE_RE.search(body, start)
        end = end_m.start() if end_m else len(body)
        angles.append((m.group(1), body[start:end]))
    return angles


def get_field(body, key):
    m = re.search(rf"^- {re.escape(key)}:\s*(.*)$", body, re.M)
    return m.group(1).strip() if m else None


def get_angle_kv(angle_body, key):
    m = re.search(rf"^- {re.escape(key)}:\s*(.*)$", angle_body, re.M)
    return m.group(1).strip() if m else None


def validate_beat(beat_id, body):
    """Return (blocking[], notes[]) for one beat."""
    blocking, notes = [], []

    # 2/3: full field contract
    missing = [f for f in FIELDS if get_field(body, f) is None]
    if missing:
        blocking.append(f"{beat_id}: missing field(s) {', '.join(missing)}")

    # 4: N/A must carry a reason
    for f in FIELDS:
        v = get_field(body, f)
        if v and v.strip().upper() == "N/A":
            blocking.append(f"{beat_id}.{f}: 'N/A' with no reason (expected 'N/A — <reason>')")
        elif v and v.strip().upper().startswith("N/A") and "—" not in v and "-" not in v[3:]:
            blocking.append(f"{beat_id}.{f}: 'N/A' with no reason (expected 'N/A — <reason>')")

    # 9: source_obligation_trace non-empty (already in FIELDS check, but verify not placeholder)
    trace = get_field(body, "source_obligation_trace")
    if trace is not None and trace.strip() in ("", "...", "TBD", "待定"):
        blocking.append(f"{beat_id}.source_obligation_trace: empty/placeholder")

    # 5/6/7: PER_BEAT_DESIGN_RATIONALE
    if "PER_BEAT_DESIGN_RATIONALE:" not in body:
        blocking.append(f"{beat_id}: no PER_BEAT_DESIGN_RATIONALE block")
        return blocking, notes

    rationale_start = body.find("PER_BEAT_DESIGN_RATIONALE:")
    rationale_body = body[rationale_start:]
    angles = split_angles(rationale_body)
    exception_m = re.search(r"^DEPTH_EXCEPTION_NEEDS_REVIEW:\s*(.*)$", rationale_body, re.M)

    # claimed vs actual angle count (2026-10-09)
    claimed_m = re.search(r"^ANGLES_SELECTED:\s*(\d+)", rationale_body, re.M)
    if claimed_m:
        claimed_n = int(claimed_m.group(1))
        if claimed_n != len(angles):
            blocking.append(f"{beat_id}: ANGLES_SELECTED claims {claimed_n} but {len(angles)} "
                             f"ANGLE block(s) found")

    if len(angles) == 0:
        blocking.append(f"{beat_id}: PER_BEAT_DESIGN_RATIONALE has zero ANGLE blocks")
    elif len(angles) < 10:
        if exception_m and exception_m.group(1).strip():
            notes.append(f"{beat_id}: {len(angles)} angles, DEPTH_EXCEPTION_NEEDS_REVIEW stated "
                         f"('{exception_m.group(1).strip()}') — allowed but needs author/orchestrator review")
        else:
            blocking.append(f"{beat_id}: only {len(angles)} angles (<10) and no DEPTH_EXCEPTION_NEEDS_REVIEW reason")
    elif len(angles) > 14:
        notes.append(f"{beat_id}: {len(angles)} angles (>14) — not blocking, but check for padding")

    seen_angle_names = set()
    for name, abody in angles:
        if name in seen_angle_names:
            blocking.append(f"{beat_id}: duplicate ANGLE '{name}'")
        seen_angle_names.add(name)
        for k in ANGLE_KEYS:
            v = get_angle_kv(abody, k)
            if v is None or v == "":
                blocking.append(f"{beat_id}/{name}: missing or empty {k}")
            elif k == "DESIGN_ACTION":
                lead = re.match(r"^(KEEP|REVISE|VERIFY|NEEDS_AUTHOR_DECISION)\b", v)
                if not lead:
                    blocking.append(f"{beat_id}/{name}: DESIGN_ACTION '{v}' does not start with one of "
                                     f"{sorted(DESIGN_ACTIONS)}")

    return blocking, notes


def main():
    if len(sys.argv) < 2:
        print("Usage: python validate_beat_layer.py <file.md> [--expect B1,B2,...]")
        sys.exit(1)
    path = sys.argv[1]
    expect = None
    if "--expect" in sys.argv:
        idx = sys.argv.index("--expect")
        if idx + 1 < len(sys.argv):
            expect = [x.strip() for x in sys.argv[idx + 1].split(",") if x.strip()]

    try:
        text = open(path, encoding="utf-8").read()
    except OSError as e:
        print(f"FAIL: cannot read {path}: {e}")
        sys.exit(1)

    declared_status = None
    m = re.search(r"^DELIVERY_STATUS:\s*(\S+)", text, re.M)
    if m:
        declared_status = m.group(1)

    beats = split_beats(text)
    all_blocking, all_notes = [], []

    # 8: diff-only delivery detection
    if not beats:
        print("FAIL: TASK_OUTPUT_MISSING_OR_INVALID — no '## BEAT: <id>' sections found.")
        print("This looks like PATCH_NOTES / a diff summary, not a FULL_BEAT_LAYER. "
              "A diff-only file cannot be marked DELIVERY_READY.")
        sys.exit(1)

    # 1: duplicate / expected IDs
    ids = [b for b, _ in beats]
    dupes = {i for i in ids if ids.count(i) > 1}
    if dupes:
        all_blocking.append(f"duplicate beat id(s): {sorted(dupes)}")
    if expect:
        missing_ids = [e for e in expect if e not in ids]
        extra_ids = [i for i in ids if i not in expect]
        if missing_ids:
            all_blocking.append(f"expected beat id(s) not found: {missing_ids}")
        if extra_ids:
            all_notes.append(f"beat id(s) present but not in --expect list: {extra_ids}")

    for beat_id, body in beats:
        b, n = validate_beat(beat_id, body)
        all_blocking += b
        all_notes += n

    print(f"Beats found ({len(beats)}): {', '.join(ids)}")
    print(f"BLOCKING issues: {len(all_blocking)}")
    for x in all_blocking:
        print(f"  - {x}")
    print(f"NOTES (non-blocking, needs human review): {len(all_notes)}")
    for x in all_notes:
        print(f"  - {x}")

    verdict = "PASS" if not all_blocking else "FAIL"
    print(f"\nStructural verdict: {verdict}")
    print("Reminder: structural PASS is not enough — orchestrator must still do a semantic "
          "spot-check (are the RATIONALE entries real analysis, not boilerplate) before marking "
          "DELIVERY_READY.")

    if declared_status:
        expected_tag = "DELIVERY_READY" if verdict == "PASS" else "INCOMPLETE_BEAT_LAYER"
        if declared_status != expected_tag and not (declared_status == "DELIVERY_READY" and verdict == "PASS"):
            if declared_status == "DELIVERY_READY" and verdict == "FAIL":
                print(f"\nFAIL: file declares DELIVERY_STATUS: DELIVERY_READY but structural verdict is FAIL.")
                sys.exit(1)
            else:
                print(f"\nNOTE: declared DELIVERY_STATUS: {declared_status} vs structural verdict {verdict} "
                      f"(expected tag: {expected_tag}) — check consistency.")

    sys.exit(0 if verdict == "PASS" else 1)


if __name__ == "__main__":
    main()
