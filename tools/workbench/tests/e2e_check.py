"""Workbench self-test: opens every page in a headless browser and checks the main features.

Free: nothing is sent to Claude (chat requests are intercepted and their message removed).
Usage:  python tools/workbench/tests/e2e_check.py            (starts its own server on port 4399)
        python tools/workbench/tests/e2e_check.py --port 4317 (test a server that is already running)
Needs: Python playwright + Google Chrome. Prints PASS/FAIL per check and exits 1 if anything failed.
"""
import json, socket, subprocess, sys, time, urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent
WB = HERE.parent
PORT = int(sys.argv[sys.argv.index("--port") + 1]) if "--port" in sys.argv else 4399
BASE = f"http://127.0.0.1:{PORT}/"
results = []


def check(name, ok, detail=""):
    results.append((name, bool(ok), detail))
    print(("PASS " if ok else "FAIL ") + name + (f"  — {detail}" if detail and not ok else ""))


def up():
    try:
        urllib.request.urlopen(BASE + "api/health", timeout=2)
        return True
    except Exception:
        return False


def main():
    from playwright.sync_api import sync_playwright
    server = None
    if not up():
        server = subprocess.Popen(["node", "server.mjs"], cwd=WB, env={**__import__("os").environ, "WORKBENCH_PORT": str(PORT)},
                                  stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        for _ in range(30):
            if up():
                break
            time.sleep(1)
    check("server answers", up())
    links_file = WB.parent.parent / "canon/_working/.tmp/workbench/task_sessions.json"
    links_before = links_file.read_text(encoding="utf-8") if links_file.exists() else None
    try:
        with sync_playwright() as p:
            b = p.chromium.launch(channel="chrome")
            pg = b.new_page(viewport={"width": 1400, "height": 850})
            errs = []
            pg.on("pageerror", lambda e: errs.append(str(e)))
            sent = []

            def no_send(route):  # never let a test message reach Claude
                r = route.request
                if r.method == "POST":
                    body = json.loads(r.post_data or "{}")
                    sent.append(dict(body))
                    body.pop("text", None); body.pop("said", None)
                    return route.continue_(post_data=json.dumps(body))
                route.continue_()
            pg.route("**/api/sessions", no_send)

            views = json.loads((WB / "public/views.json").read_text(encoding="utf-8"))
            shots = HERE / "_shots"; shots.mkdir(exist_ok=True)
            for w, hgt in [(1400, 850), (1280, 720)]:  # desktop and a common laptop size
                pg.set_viewport_size({"width": w, "height": hgt})
                for v in views:  # every page renders without an error card, sideways page scroll or clipped toolbars
                    errs.clear()
                    pg.goto(BASE + "#" + v["id"]); pg.reload(); pg.wait_for_timeout(2500)
                    bad = pg.locator("text=畫面出錯").count()
                    wide = pg.evaluate("document.documentElement.scrollWidth > window.innerWidth + 2")
                    # toolbars cut off, or a child sticking out past its card/column (content spilling into the next column)
                    clipped = pg.evaluate("""(()=>{let n=[...document.querySelectorAll('#view .toolbar, #view h2')].filter(e=>e.offsetParent&&e.scrollWidth>e.clientWidth+2).length;
                      for (const box of document.querySelectorAll('#view .card, #view .flow-list, #view .flow-steps')) { if (!box.offsetParent) continue; const r=box.getBoundingClientRect();
                        for (const c of box.querySelectorAll(':scope > *')) { const q=c.getBoundingClientRect(); if (c.offsetParent && q.width && q.right > r.right + 2) { n++; break; } } }
                      return n})()""")
                    pg.screenshot(path=str(shots / f"{w}_{v['id']}.png"))
                    check(f"[{w}] page「{v['name']}」renders", not bad and not errs and not wide and not clipped,
                          "; ".join(errs)[:200] or ("error card" if bad else "page wider than window" if wide else f"{clipped} toolbar(s) cut off"))
            pg.set_viewport_size({"width": 1400, "height": 850})

            # sidebar: usage + lens + model/effort pickers
            pg.goto(BASE + "#today"); pg.wait_for_timeout(3000)
            check("sidebar usage bars", pg.locator("#usage .usage-row").count() >= 1)
            check("sidebar effort picker", pg.locator("#effort-default option").count() >= 2)

            # back / forward keep the page
            pg.goto(BASE + "#today"); pg.wait_for_timeout(1500)
            pg.locator("[data-tab=flow]").click(); pg.wait_for_timeout(1500)
            pg.go_back(); pg.wait_for_timeout(1500)
            check("browser back returns to previous page", pg.evaluate("location.hash").startswith("#today"))

            # work tree + step buttons + checklist items
            pg.goto(BASE + "#flow"); pg.wait_for_timeout(3000)
            check("work tree has groups", pg.locator(".tree-act").count() >= 1)
            check("flow step shows suggestion + buttons", pg.locator(".flow-hint").count() == 1 and pg.locator(".flow-act button").count() >= 3)

            # matrix: grouping + angle detail
            pg.goto(BASE + "#matrix?mode=all"); pg.wait_for_timeout(3000)
            check("matrix grouped by story area", pg.locator(".mx-group").count() >= 2)
            pg.locator(".mx-grid .mx-cell:not(.s-none)").first.click(); pg.wait_for_timeout(600)
            check("matrix cell opens angle detail", pg.locator(".mx-angle").count() == 1)

            # beat board timeline
            pg.goto(BASE + "#beats"); pg.wait_for_timeout(3000)
            pg.locator(".seg-toggle button", has_text="時間線").click(); pg.wait_for_timeout(800)
            check("beat timeline renders", pg.locator(".tl-beat").count() >= 1)

            # chat layout: open an empty chat (nothing sent), header fits, composer compact, messages get room
            pg.goto(BASE + "#chat"); pg.wait_for_timeout(1500)
            sid = json.loads(urllib.request.urlopen(urllib.request.Request(BASE + "api/sessions", data=json.dumps({"title": "e2e"}).encode(), headers={"content-type": "application/json"})).read())["id"]
            pg.goto(BASE + f"#chat/{sid}"); pg.wait_for_timeout(3500)
            fits = pg.evaluate("""(()=>{const h=document.querySelector('#chat-head');const r=h.getBoundingClientRect().right;return [...h.children].filter(e=>e.offsetParent).every(e=>e.getBoundingClientRect().right<=r+1)})()""")
            check("chat header fits (more menu)", fits and pg.locator(".head-more").count() == 1)
            m = pg.evaluate("""(()=>{const q=s=>document.querySelector(s)?.getBoundingClientRect().height||0;return {msgs:q('#messages'),composer:q('#composer'),card:q('.work-card')}})()""")
            check("chat messages get most of the height", m["msgs"] > m["composer"] and m["card"] < 150, json.dumps(m))
            check("quick rows do not scroll sideways", not pg.evaluate("[...document.querySelectorAll('.quick-row')].some(e=>e.scrollWidth>e.clientWidth+1)"))
            check("enter-to-send wired", pg.evaluate("!!document.querySelector('#composer textarea')"))
            # a very tall question card must keep its full height and the message list must scroll (it used to be squashed and clipped)
            tall = pg.evaluate("""(()=>{const m=document.querySelector('#messages');const c=document.createElement('div');c.className='card ask';
              c.innerHTML='<div class="ask-head">Q</div><div style="height:1400px">tall</div><div class="footer"><button class="primary">送出</button></div>';
              m.append(c);const r={clipped:c.scrollHeight>c.clientHeight+2,scrolls:m.scrollHeight>m.clientHeight+2};c.remove();return r})()""")
            check("tall question card is not clipped, messages scroll", not tall["clipped"] and tall["scrolls"], json.dumps(tall))

            # todo page → auto-discussion setup prefilled with the picked items (does not start a discussion)
            pg.goto(BASE + "#todo?tab=ledger&group=none"); pg.wait_for_timeout(3000)
            boxes = pg.locator("#view .list-item input[type=checkbox]")
            if boxes.count() >= 2:
                boxes.nth(0).check(); pg.wait_for_timeout(300); pg.locator("#view .list-item input[type=checkbox]").nth(1).check(); pg.wait_for_timeout(300)
                pg.locator("button", has_text="🤖 自動討論").first.click(); pg.wait_for_timeout(3000)
                check("todo → auto-discussion prefilled", pg.locator("text=📋 處理").count() >= 1)
            else:
                check("todo → auto-discussion prefilled", False, "no todo rows")

            # discussions are sessions: listed in the sidebar, openable, with the same work card
            pg.goto(BASE + "#today"); pg.reload(); pg.wait_for_timeout(4000)
            rows = pg.locator("#session-list .sess", has_text="🤖")
            check("discussions listed in the sidebar", rows.count() >= 1)
            if rows.count():
                rows.first.click(); pg.wait_for_timeout(3000)
                check("clicking a discussion opens it with the work card", pg.locator(".disc").count() == 1 and pg.locator(".work-card").count() == 1)
            check("no JavaScript errors overall", not errs, "; ".join(errs)[:200])
            b.close()
    finally:
        if links_before is not None:  # tests must not leave links behind
            links_file.write_text(links_before, encoding="utf-8")
        if server:
            server.terminate()
    failed = [r for r in results if not r[1]]
    print(f"\n{len(results) - len(failed)}/{len(results)} passed")
    sys.exit(1 if failed else 0)


if __name__ == "__main__":
    main()
