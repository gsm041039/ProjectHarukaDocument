"""Look up a tracking ID (CDL-/QQ-/HC-/GAP- etc.) and print EVERY matching table row.

Why: CANON_DECISION_LOG.md has IDs that appear twice (e.g. CDL-176), so `grep -m1` silently picks the
wrong one. This prints all rows, flags duplicates, and shows file:line so citations can be written as
file + id (not a bare line number, which goes stale).

Usage: python lookup_id.py CDL-176 [HC-4f ...] [--width 900]
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SEARCH = [
    ROOT / "canon" / "_working" / "CANON_DECISION_LOG.md",
    ROOT / "canon" / "_working" / "QUESTION_QUEUE.md",
    ROOT / "canon" / "_working" / "story_construction" / "HARD_CONSTRAINTS_TABLE.md",
    ROOT / "canon" / "_working" / "story_construction" / "QUESTION_MATRIX.md",
]


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    width = 900
    if "--width" in sys.argv:
        i = sys.argv.index("--width")
        if i + 1 < len(sys.argv):
            width = int(sys.argv[i + 1])
            args = [a for a in args if a != sys.argv[i + 1]]
    if not args:
        print(__doc__)
        sys.exit(1)
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    for want in args:
        pat = re.compile(r"^\|\s*" + re.escape(want) + r"\s*\|")
        hits = []
        for f in SEARCH:
            if not f.exists():
                continue
            for n, line in enumerate(f.read_text(encoding="utf-8").splitlines(), 1):
                if pat.match(line):
                    hits.append((f.relative_to(ROOT), n, line))
        print(f"== {want}: {len(hits)} row(s)")
        if len(hits) > 1:
            print("!! DUPLICATE ID — read every row below before citing")
        for f, n, line in hits:
            print(f"-- {f.as_posix()}:{n}")
            print(line[:width] + (" …" if len(line) > width else ""))
        if not hits:
            print("(no row starts with this ID; try grep for mentions)")


if __name__ == "__main__":
    main()
