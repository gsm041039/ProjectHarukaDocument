"""Check the auto-discussion setup assistant on one topic (USES A LITTLE CLAUDE USAGE).
Round 1 (no answers): should state the current setting, flag big changes, and ask guiding questions instead of proposing.
Round 2 (answers given): should propose directions that fit the answers.
Usage: python tools/workbench/tests/plan_check.py [--port 4399] "<topic>"
"""
import json, sys, urllib.request

PORT = int(sys.argv[sys.argv.index("--port") + 1]) if "--port" in sys.argv else 4399
topic = ([a for a in sys.argv[1:] if not a.startswith("--") and not a.isdigit()] or ["結局可以再諗？例如晴香被救？"])[-1]


def plan(body):
    req = urllib.request.Request(f"http://127.0.0.1:{PORT}/api/discuss/plan", data=json.dumps(body, ensure_ascii=False).encode("utf-8"),
                                 headers={"content-type": "application/json; charset=utf-8"})
    return json.loads(urllib.request.urlopen(req, timeout=400).read())


def show(d):
    if "error" in d: print("ERROR", d["error"]); return
    print("理解：", d.get("understanding"))
    print("而家嘅設定：", d.get("current"))
    print("根據：", [s.get("file") for s in d.get("sources", [])])
    print("大決定：", d.get("big"))
    for q in d.get("questions", []): print("問：", q["q"], "｜", " / ".join(q.get("options", [])))
    for p in d.get("proposals", []): print("方向：", p.get("label"), "—", p.get("why"), "｜範圍：", p.get("range"))


print("=== 第 1 次（未答）"); d1 = plan({"topic": topic, "links": []}); show(d1)
if d1.get("questions"):
    ans = {q["q"]: q["options"][0] for q in d1["questions"] if q.get("options")}
    print("\n=== 第 2 次（每條揀第一個選項）"); show(plan({"topic": topic, "links": [], "answers": ans}))
