"""Live auto-discussion test (USES CLAUDE USAGE): picks the oldest N session to-dos, runs an auto-discussion on them with
the author-lens role, waits for the summary, ticks its per-item suggestions into the tray — and stops before 送出.
Writes everything it saw to tests/_shots/discuss_result.json for checking against the files.
Usage: python tools/workbench/tests/discuss_live.py [--port 4399] [--n 5] [--rounds 2]
"""
import json, sys, time, urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent
arg = lambda k, d: type(d)(sys.argv[sys.argv.index(k) + 1]) if k in sys.argv else d
PORT, N, ROUNDS = arg("--port", 4399), arg("--n", 5), arg("--rounds", 2)
BASE = f"http://127.0.0.1:{PORT}/"
api = lambda path: json.loads(urllib.request.urlopen(BASE + path, timeout=30).read())


def main():
    from playwright.sync_api import sync_playwright
    out = {"started": time.strftime("%H:%M:%S"), "usage_before": api("api/usage")}
    if "--existing" in sys.argv: return tray_only(sys.argv[sys.argv.index("--existing") + 1])
    with sync_playwright() as p:
        b = p.chromium.launch(channel="chrome")
        pg = b.new_page(viewport={"width": 1400, "height": 900})
        errs = []; pg.on("pageerror", lambda e: errs.append(str(e)))
        pg.goto(BASE + "#todo?tab=ledger&group=none"); pg.reload(); pg.wait_for_timeout(3500)
        rows = pg.locator("#view .list-item")
        total = rows.count()
        picked = []
        for i in range(max(0, total - N), total):  # the ledger lists newest first: the last rows are the oldest
            r = rows.nth(i); r.locator("input[type=checkbox]").check(); pg.wait_for_timeout(250)
            picked.append(pg.locator("#view .list-item").nth(i).inner_text().replace("\n", " ｜ ")[:200])
        out["picked"] = picked
        pg.locator("button", has_text="🤖 自動討論").first.click(); pg.wait_for_timeout(3000)
        out["setup_has_items"] = pg.locator("text=📋 處理").count() > 0
        tile = pg.locator(".launch-tile", has_text="作者視角")
        if tile.count() and "on" not in (tile.first.get_attribute("class") or ""):
            tile.first.click(); pg.wait_for_timeout(300)
        out["roles"] = [t.split("\n")[1] if "\n" in t else t for t in pg.locator(".launch-tile.on").all_inner_texts()]
        pg.locator(".disc-setup input[type=number]").fill(str(ROUNDS))
        pg.locator("button", has_text="開始討論").click(); pg.wait_for_timeout(3000)
        out["discussion_url"] = pg.evaluate("location.hash")
        out["url_has_id"] = "id=" in pg.evaluate("location.hash")
        # newest discussion on the server = the one just started (the page address also carries it now)
        did = max(api("api/discuss"), key=lambda x: x.get("created", 0)).get("id", "")
        out["discussion_id"] = did
        # wait for the summary (the discussion runs on the server; poll its saved file)
        f = HERE.parent.parent.parent / f"canon/_working/.tmp/workbench/discussions/{did}.json"
        t0 = time.time()
        while time.time() - t0 < 1500:
            if f.exists():
                d = json.loads(f.read_text(encoding="utf-8"))
                if any(e["kind"] == "synthesis" for e in d["events"]) and d["state"] in ("done", "stopped"):
                    break
            time.sleep(10)
        d = json.loads(f.read_text(encoding="utf-8")) if f.exists() else {}
        ev = d.get("events", [])
        out["minutes"] = round((time.time() - t0) / 60, 1)
        out["turns"] = [{"round": e.get("round"), "role": e.get("role"), "reads": e.get("reads", []), "text": e.get("text", "")[:1500]} for e in ev if e["kind"] == "turn"]
        out["judges"] = [e for e in ev if e["kind"] == "judge"]
        out["synthesis"] = next((e for e in ev if e["kind"] == "synthesis"), None)
        out["items"] = d.get("items"); out["actions"] = d.get("actions")
        # tick the suggestions into the tray (the page's own button) — but do NOT send
        pg.reload(); pg.wait_for_timeout(5000)
        out["suggestion_rows"] = pg.locator(".item-act").count()
        out["pre_ticked"] = pg.locator(".item-act input:checked").count()
        if pg.locator("button", has_text="執行揀咗嘅").count():
            pg.locator("button", has_text="執行揀咗嘅").click(); pg.wait_for_timeout(800)
        out["tray"] = pg.locator("#tray-list li").all_inner_texts()
        pg.screenshot(path=str(HERE / "_shots/discuss_summary.png"), full_page=True)
        out["js_errors"] = errs
        b.close()
    out["usage_after"] = api("api/usage")
    (HERE / "_shots").mkdir(exist_ok=True)
    (HERE / "_shots/discuss_result.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
    print(json.dumps({k: out[k] for k in ("picked", "roles", "minutes", "suggestion_rows", "pre_ticked", "tray", "js_errors")}, ensure_ascii=False, indent=1))


def tray_only(did):  # free: open a finished discussion, tick its suggestions into the tray, do not send
    from playwright.sync_api import sync_playwright
    with sync_playwright() as p:
        b = p.chromium.launch(channel="chrome"); pg = b.new_page(viewport={"width": 1400, "height": 900})
        errs = []; pg.on("pageerror", lambda e: errs.append(str(e)))
        pg.goto(BASE + f"#discuss?id={did}"); pg.reload(); pg.wait_for_timeout(5000)
        rows, ticked = pg.locator(".item-act").count(), pg.locator(".item-act input:checked").count()
        labels = [t.replace("\n", " ")[:80] for t in pg.locator(".item-act").all_inner_texts()]
        if pg.locator("button", has_text="執行揀咗嘅").count(): pg.locator("button", has_text="執行揀咗嘅").click(); pg.wait_for_timeout(800)
        tray = pg.locator("#tray-list li").all_inner_texts()
        pg.screenshot(path=str(HERE / "_shots/discuss_summary.png"), full_page=True)
        print(json.dumps({"rows": rows, "pre_ticked": ticked, "labels": labels, "tray": tray, "js_errors": errs}, ensure_ascii=False, indent=1))
        b.close()


if __name__ == "__main__":
    main()
