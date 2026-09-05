# -*- coding: utf-8 -*-
import re
from pathlib import Path

path = Path(r"D:\Projects\ProjectHarukaDocument\00_Story_Brief.html")
out = Path(r"D:\Projects\ProjectHarukaDocument\canon\_working\.tmp\brief_stale_scan_5200.txt")
lines = path.read_text(encoding="utf-8").splitlines(True)

patterns = [
    ("清醒", r"清醒"),
    ("承擔代價", r"承擔代價"),
    ("清醒姿態", r"清醒姿態"),
    ("面具", r"面具"),
    ("官方偶像", r"官方偶像"),
    ("偶像制度", r"偶像制度"),
    ("偶像認證", r"偶像認證"),
    ("見證守則", r"見證守則"),
    ("見證", r"見證"),
    ("身體代價", r"身體代價"),
    ("債務", r"債務"),
    ("夜區", r"夜區"),
    ("日區", r"日區"),
    ("靈樹", r"靈樹"),
    ("聖女騎士", r"聖女騎士"),
    ("愛莉", r"愛莉"),
    ("留白", r"留白"),
    ("英雄式", r"英雄式"),
    ("討好", r"討好"),
    ("犧牲", r"犧牲"),
    ("三位一體", r"三位一體"),
    ("永恆守護", r"永恆守護"),
    ("意識", r"意識"),
]

hits = []
for i, line in enumerate(lines[:5200], 1):
    matched = [name for name, p in patterns if re.search(p, line)]
    if not matched:
        continue
    snippet = re.sub(r"\s+", " ", line.strip())
    if len(snippet) > 320:
        snippet = snippet[:320] + "..."
    hits.append(f"L{i} [{'|'.join(matched)}]: {snippet}")

parts = [f"Total lines: {len(lines)}", f"Hits in 1-5200: {len(hits)}", ""]
parts.extend(hits)
parts.append("\n\n===== RAW INTRO BLOCKS =====\n")
for start, end in [(4550, 4655), (4700, 4920), (4960, 5035), (5120, 5200)]:
    parts.append(f"\n----- {start}-{end} -----\n")
    parts.append("".join(lines[start - 1 : end]))

out.write_text("\n".join(parts), encoding="utf-8")
print(f"Wrote {len(hits)} hits to {out}")
