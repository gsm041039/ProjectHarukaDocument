"""Seed / top up AUTHOR_UTTERANCES.jsonl from this computer's local Claude transcripts of this repo.

Usage: python .claude/skills/author-lens/backfill.py [--dry-run]
Only the author's own typed text is kept: tool results, slash-command output, system reminders,
IDE context tags and Workbench button prompts are dropped. Already-logged messages are skipped,
so it is safe to run on each computer, any number of times.
"""
import json, re, sys
from pathlib import Path

REPO = Path(__file__).resolve().parents[3]
LOG = REPO / "canon/_working/author_voice/AUTHOR_UTTERANCES.jsonl"
key = re.sub(r"[^A-Za-z0-9]", "-", str(REPO))
DIRS = [d for d in (Path.home() / ".claude/projects").glob("*") if d.name.lower() == key.lower()]
TAGS = re.compile(r"<(system-reminder|ide_[a-z_]+|local-command-[a-z]+|command-[a-z]+|browser_instruction|pasted_content)[^>]*>.*?</\1>", re.S)
# prompts the Workbench writes for the author (buttons / templates), not their own words
SYSTEM = re.compile(r"^\s*<(task-notification|task-prompt|command-name|local-command)")
BUTTON = re.compile(r"^(（先由你揀 skill|請回顧今次對話|繼續 task|以下係一場 AI 自動討論|請用 `|我想傾 `|以下係.*DRAFT|```ui:intent|你喺一個「AI 編劇室」|你係 Haruka Workbench)")

def texts(msg):
    c = msg.get("content")
    if isinstance(c, str): yield c
    elif isinstance(c, list):
        for b in c:
            if isinstance(b, dict) and b.get("type") == "text": yield b.get("text", "")

def main(dry):
    seen = set()
    if LOG.exists():
        for line in LOG.read_text(encoding="utf-8").splitlines():
            try: r = json.loads(line); seen.add(r["text"].strip())
            except Exception: pass
    rows = []
    for d in DIRS:
        for f in sorted(d.glob("*.jsonl")):
            for line in f.read_text(encoding="utf-8", errors="ignore").splitlines():
                try: e = json.loads(line)
                except Exception: continue
                if e.get("type") != "user" or e.get("isMeta") or e.get("isSidechain") or e.get("toolUseResult") is not None: continue
                for t in texts(e.get("message") or {}):
                    t = TAGS.sub("", t).strip()
                    if len(t) < 2 or BUTTON.search(t) or SYSTEM.search(t) or t.startswith("[Request interrupted") or t in seen: continue
                    seen.add(t)
                    rows.append({"t": e.get("timestamp", ""), "src": "backfill:" + (e.get("entrypoint") or "?"), "session": e.get("sessionId", f.stem), "text": t})
    rows.sort(key=lambda r: r["t"])
    print(f"{len(rows)} new messages from {sum(1 for d in DIRS for _ in d.glob('*.jsonl'))} transcripts")
    if not dry and rows:
        LOG.parent.mkdir(parents=True, exist_ok=True)
        with open(LOG, "a", encoding="utf-8") as fh:
            for r in rows: fh.write(json.dumps(r, ensure_ascii=False) + "\n")

if __name__ == "__main__":
    main("--dry-run" in sys.argv)
