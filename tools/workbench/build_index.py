"""Build canon/_working/.tmp/workbench/index.json for Haruka Workbench.

Each view has one parse_<name>() registered in PARSERS. A parser that fails only
breaks its own view (recorded under errors), never the whole index.
Run with --check for the self-test.
"""
import functools
import json
import os
import re
import sys
import time
import traceback
from pathlib import Path

PROTOCOL_VERSION = 1
REPO = Path(__file__).resolve().parents[2]
W = REPO / "canon" / "_working"
OUT = W / ".tmp" / "workbench" / "index.json"

warnings: list[str] = []


def read(p: Path) -> str:
    return p.read_text(encoding="utf-8", errors="replace")


def rel(p: Path) -> str:
    return p.relative_to(REPO).as_posix()


def table_rows(lines):
    """Yield cell lists for markdown table rows, skipping header separators."""
    for ln in lines:
        s = ln.strip()
        if not s.startswith("|") or re.match(r"^\|[\s:|-]+\|$", s):
            continue
        yield [c.strip() for c in s.strip("|").split("|")]


def section(text: str, heading_re: str) -> list[str]:
    """Lines under the first heading matching heading_re, up to the next heading of same or higher level."""
    lines = text.splitlines()
    for i, ln in enumerate(lines):
        m = re.match(r"^(#+)\s", ln)
        if m and re.search(heading_re, ln):
            level = len(m.group(1))
            out = []
            for nxt in lines[i + 1:]:
                m2 = re.match(r"^(#+)\s", nxt)
                if m2 and len(m2.group(1)) <= level:
                    break
                out.append(nxt)
            return out
    warnings.append(f"heading not found: {heading_re}")
    return []


def strip_md(s: str) -> str:
    return re.sub(r"\*\*|`|~~", "", s).strip()


def short_status(cell: str) -> str:
    m = re.search(r"(RESOLVED_PROVISIONAL|RESOLVED|IN PROGRESS|IN_PROGRESS|OPEN|DEFERRED|BLOCKED|PROVISIONAL|DROPPED|SUPERSEDED)", cell)
    return m.group(1).replace("_", " ") if m else strip_md(cell)[:30]


# ---------------- parsers ----------------

def parse_next_action():
    text = read(W / "NEXT_ACTION.md")
    m = re.search(r"^>\s*\*\*單一步（([^）]*)[^*]*\*\*\s*(.+)$", text, re.M)
    if not m:
        warnings.append("NEXT_ACTION: no 單一步 blockquote found")
        return None
    body = m.group(2)
    return {
        "date": m.group(1),
        "text": strip_md(body),
        "needs_author": bool(re.search(r"需要作者 ?input[:：]\s*YES", body)),
        "file": "canon/_working/NEXT_ACTION.md",
    }


def parse_tasks():
    p = W / "TASK_BOARD.md"
    if not p.exists():
        warnings.append("TASK_BOARD.md missing")
        return []
    rows = list(table_rows(section(read(p), r"^## Tasks")))
    out = []
    for r in rows[1:]:
        if len(r) < 6:
            warnings.append(f"TASK_BOARD bad row: {r}")
            continue
        out.append({
            "id": r[0], "task": r[1], "status": r[2], "session": r[3],
            "files": [f.strip(" `") for f in re.split(r"[、,，]", r[4]) if f.strip(" `-")],
            "needs_author": r[5].upper().startswith("Y") or r[5].startswith("是"),
            "updated": r[6] if len(r) > 6 else "",
        })
    return out


OPEN_STATES = {"OPEN", "IN PROGRESS", "BLOCKED", "DEFERRED", "PROVISIONAL", "RESOLVED PROVISIONAL"}


def parse_questions():
    return [q for q in scan_queue() if q["status"] in OPEN_STATES]


@functools.lru_cache(maxsize=1)
def scan_queue():
    """Every QQ row (first occurrence wins), any status. Active table plus every per-round table;
    column sets differ, so map by each table's own header."""
    text = read(W / "QUESTION_QUEUE.md")
    out, seen, col, round_name = [], set(), {}, ""

    def get(r, *prefixes):
        for name, i in col.items():
            if name.startswith(prefixes) and i < len(r):
                return r[i]
        return ""

    for ln in text.splitlines():
        if ln.startswith("## "):
            round_name, col = ln[3:].strip(), {}
            continue
        if not ln.strip().startswith("|"):
            col = {}  # any non-table line ends the current table
            continue
        r = next(table_rows([ln]), None)
        if not r:
            continue
        if not r[0].startswith("QQ-"):
            col = {name: i for i, name in enumerate(r)}
            continue
        qid = strip_md(r[0])
        if qid in seen:
            continue
        seen.add(qid)
        st = short_status(get(r, "Status", "狀態"))
        out.append({
            "id": qid, "topic": strip_md(get(r, "Topic", "主題")), "priority": strip_md(get(r, "Priority")),
            "status": st, "status_note": strip_md(get(r, "Status", "狀態"))[:400],
            "needed_before": strip_md(get(r, "Needed Before")),
            "summary": strip_md(get(r, "Question Summary", "Note", "問題", "內容"))[:600],
            "updated": strip_md(get(r, "Last Updated")), "section": round_name[:80],
        })
    # Matrix rows that point at these questions (author calls it "the matrix").
    mtext = read(W / "story_construction" / "QUESTION_MATRIX.md")
    for q in out:
        q["matrix"] = [strip_md(r[0])[:160] for r in table_rows(mtext.splitlines()) if r and q["id"] in "|".join(r)][:8]
    return out


# Master Angle Registry (.claude/story_system/angle-system.md): n, short label, match keywords.
ANGLES = [
    (1, "角色成長", r"character growth|角色成長|成長弧"), (2, "關係", r"relationship|關係"),
    (3, "揭露控制", r"reveal control|information\s*/|揭露|揭示|資訊控制"), (4, "氣氛張力", r"atmosphere|tension(?!.*pacing)|氣氛|張力"),
    (5, "主題", r"theme expression|主題"), (6, "結構功能", r"structural|beat function|結構"),
    (7, "出場時機", r"entry timing|presence control|出場|入場|存在感"), (8, "世界規則", r"world rule|mechanic pressure|世界規則|設定壓力|規則壓力"),
    (9, "埋位回收", r"setup|payoff|伏線|埋伏|埋位|回收"), (10, "觀眾體驗", r"audience experience|knowledge gap|觀眾體驗"),
    (11, "設定連續", r"canon|continuity|ownership|連續性|一致性"), (12, "可寫性", r"writing execution|draftability|可寫|寫作執行"),
    (13, "防衛機制", r"coping|defen[cs]e|防衛|應對機制"), (14, "價值觀", r"ideology|value system|價值|意識形態"),
    (15, "社會位置", r"social|institutional|社會|制度位置"), (16, "道德取捨", r"moral|tradeoff|trade-off|道德"),
    (17, "象徵儀式", r"symbolic|ritual|象徵|儀式"), (18, "故事認可", r"narrative validation|validation level|敘事認可|故事認可"),
    (19, "形式必要", r"method necessity|form meaning|形式意義|方法必要"), (20, "角色知情", r"character knowledge|角色知情"),
    (21, "觀眾知情", r"audience knowledge|觀眾知情"), (22, "因果鏈", r"causality|cost signal|因果"),
    (23, "玩法", r"gameplay|player agency|玩法"), (24, "調度", r"directing|staging|調度"),
    (25, "節奏", r"pacing|breathing|節奏"), (26, "功能重複", r"redundancy|function overlap|重複"),
    (27, "製作量", r"production complexity|scope|製作"), (28, "跨幕影響", r"cross-act|downstream|跨幕"),
]
ANGLE_RE = [(n, re.compile(rx, re.I)) for n, _, rx in ANGLES]


def angles_in(cell: str, base: set | None = None) -> set:
    """Angles a free-text matrix cell names. Handles 「全12基礎角度」, 「全部」 and bare number lists like 13/14/16."""
    c = strip_md(cell)
    if not c or c in {"—", "-", "–", "無", "None"}:
        return set()
    found = set()
    if re.search(r"全(部)?\s*12|12\s*(個)?基礎|全12", c):
        found |= set(range(1, 13))
    if re.search(r"全部\s*28|28\s*(個)?角度", c):
        found |= set(range(1, 29))
    if base is not None and re.fullmatch(r"全部|全部角度|all", c, re.I):
        return set(base)
    for nums in re.findall(r"(?<![\d-])(\d{1,2}(?:\s*[/／、,]\s*\d{1,2})+)(?![\d-])", c):
        found |= {int(x) for x in re.split(r"[/／、,]", nums) if x.strip().isdigit() and 1 <= int(x) <= 28}
    # Strip parenthetical negations like (15 not relevant) before keyword matching.
    c_kw = re.sub(r"[（(][^）)]*not relevant[^）)]*[）)]", "", c, flags=re.I)
    for n, rx in ANGLE_RE:
        if rx.search(c_kw):
            found.add(n)
    return found


# Matrix cell states, strongest first (a cell keeps the strongest state any row gives it).
STATE_RANK = ["needs", "blocked", "inferred", "stable", "relevant"]


def matrix_state(label: str) -> str | None:
    s = strip_md(label).upper()
    if "NOT_RELEVANT" in s:
        return None
    if "NEEDS_AUTHOR" in s:
        return "needs"
    if "BLOCK" in s:
        return "blocked"
    if "INFERRED" in s:
        return "inferred"
    if re.search(r"SOURCE_SUPPORTED|RESOLVED|CONFIRMED|\bAC\b", s):
        return "stable"
    return "relevant"


def parse_matrix():
    """Two table shapes live in QUESTION_MATRIX.md:
    summary (Topic | Relevant | Stable | Unstable | Needs Author | Suggested IDs) and
    long (Matrix ID | Topic | Angle/主要角度 | … | Status | … | QQ). Resolution-log tables
    (Matrix ID | QID | Author Answer …) mark matrix IDs as answered."""
    text = read(W / "story_construction" / "QUESTION_MATRIX.md")
    qstatus = {q["id"]: q["status"] for q in scan_queue()}
    topics: dict[str, dict] = {}
    answered_ids: set[str] = set()
    col, section_name, unmatched = {}, "", 0

    def find(*keys):
        for name, i in col.items():
            if any(name.startswith(k) for k in keys):
                return i
        return None

    for ln in text.splitlines():
        if ln.startswith("#"):
            section_name, col = ln.lstrip("#").strip(), {}
            continue
        if not ln.strip().startswith("|"):
            col = {}
            continue
        r = next(table_rows([ln]), None)
        if not r:
            continue
        if not col:
            col = {strip_md(name).lower(): i for i, name in enumerate(r)}
            continue
        cell = lambda i: r[i] if i is not None and i < len(r) else ""
        mid = strip_md(cell(find("matrix id")))
        if find("author answer") is not None and find("angle", "主要角度", "relevant") is None:
            if mid:
                answered_ids.add(mid)
            continue
        i_topic = find("topic")
        if i_topic is None:
            continue
        rowtext = "|".join(r)
        qids = sorted(set(re.findall(r"QQ-\d+[a-z]?", rowtext)))
        cells: dict[int, str] = {}
        if find("relevant") is not None:  # summary shape
            rel_ = angles_in(cell(find("relevant")))
            stable, unstable = angles_in(cell(find("stable"))), angles_in(cell(find("unstable")))
            needs = angles_in(cell(find("needs")), base=rel_ | unstable)
            for n in rel_ | stable | unstable | needs:
                cells[n] = "needs" if n in needs else "blocked" if n in unstable else "stable" if n in stable else "relevant"
        elif find("angle", "主要角度") is not None:  # long shape
            st = matrix_state(cell(find("status")))
            if st is None:
                continue
            for n in angles_in(cell(find("angle", "主要角度"))):
                cells[n] = st
        else:
            continue
        if not cells:
            unmatched += 1
        topic = strip_md(cell(i_topic))[:200]
        t = topics.setdefault(topic, {"topic": topic, "section": section_name[:80], "ids": [], "cells": {}, "qids": {}, "notes": []})
        if mid:
            t["ids"].append(mid)
        for n, st in cells.items():
            old = t["cells"].get(n)
            if old is None or STATE_RANK.index(st) < STATE_RANK.index(old):
                t["cells"][n] = st
        for q in qids:
            t["qids"][q] = qstatus.get(q, "?")
        t["notes"].append(strip_md(" ｜ ".join(c for c in r[1:6] if c))[:400])

    rows = []
    for t in topics.values():
        answered = bool(t["ids"]) and all(i in answered_ids for i in t["ids"])
        qs = t["qids"].values()
        q_open = any(s in OPEN_STATES for s in qs)
        q_all_resolved = bool(t["qids"]) and all(s == "RESOLVED" for s in qs)
        pending = any(s in ("needs", "blocked") for s in t["cells"].values())
        t.update(open=q_open or (pending and not answered and not q_all_resolved),
                 stale=pending and (answered or q_all_resolved), notes=t["notes"][:6])
        rows.append(t)
    if unmatched:
        warnings.append(f"QUESTION_MATRIX: {unmatched} rows named no recognisable angle")
    return {"file": "canon/_working/story_construction/QUESTION_MATRIX.md",
            "angles": [{"n": n, "name": name} for n, name, _ in ANGLES], "rows": rows}


def parse_pilot():
    p = W / "demo_pilot" / "DEMO_PILOT_TRACKER.md"
    text = read(p)
    stages = []
    for m in re.finditer(r"^### Stage ([\d.]+) — (.+?)(◆)?\s*`(\w+)`(.*)$", text, re.M):
        stages.append({"n": m.group(1), "title": m.group(2).strip(), "author_gate": bool(m.group(3)),
                       "status": m.group(4), "note": strip_md(m.group(5))[:200]})
    decisions = [{"id": r[0], "date": r[1], "text": strip_md(r[2]), "status": strip_md(r[3])}
                 for r in table_rows(section(text, r"^## 4\.")) if re.match(r"D-\d+", r[0])]
    artifacts = [{"file": r[0].strip("`"), "stage": r[1], "status": strip_md(r[2])}
                 for r in table_rows(section(text, r"^## 6\.")) if r[0].startswith("`")]
    questions = [{"id": r[0], "text": strip_md(r[1]), "blocks": r[2], "status": short_status(r[3])}
                 for r in table_rows(section(text, r"^## 7\.")) if re.match(r"Q-\d+", r[0])]
    return {"file": rel(p), "stages": stages, "decisions": decisions, "artifacts": artifacts, "questions": questions}


BEAT_RE = re.compile(r"^## BEAT:\s*(\S+)\s*$", re.M)  # same anchor as .claude/story_system/validate_beat_layer.py


TRACK_LABEL = {"demo_pilot": "Demo 試點", "story_construction": "正式"}
# Sections that describe the beats (knowledge tables, audits, derivation notes) rather than being beats.
SKIP_SECTION = re.compile(r"SCENE[ _]REFERENCE|Review|Completion|PATCH|Change Log|更新記錄|Resolution|知情|knowledge|Cost Signal|Premise|追溯|Gate|obligation|待作者", re.I)
COMPACT_BEAT = re.compile(r"^\*\*([A-Z]\d+[a-z]?)\s+([^*]+?)\*\*(.*)$", re.M)
HEADING_BEAT = re.compile(r"^###\s+(.+?)\s*$", re.M)
TAG = re.compile(r"`?\[(DRAFT|PROVISIONAL|REVALIDATE_REQUIRED|APPROVED[^\]]*|AC[^\]]*|WIP|SCENE REFERENCE)[^\]]*\]`?")


@functools.lru_cache(maxsize=1)
def read_manifest() -> dict:
    mp = W / "LAYER_MANIFEST.md"
    out = {}
    if mp.exists():
        for r in list(table_rows(section(read(mp), r"^## Files")))[1:]:
            if len(r) >= 4:
                out[r[0].strip("`")] = {"layer": r[1], "parent": [x.strip(" `") for x in re.split(r"[、,，]", r[2]) if x.strip(" `-—")], "current": r[3]}
    return out


def track_of(path: str) -> str:
    parts = path.split("/")
    if "_working" in parts and parts.index("_working") + 1 < len(parts) - 1:
        folder = parts[parts.index("_working") + 1]
        return TRACK_LABEL.get(folder, folder)
    return "Canon"


def beat_status(text: str) -> str:
    m = TAG.search(text) or re.search(r"(?:狀態|STATUS)\**[:：]\**\s*`?(\w+)", text)
    if not m:
        return "DRAFT"
    s = m.group(1).upper()
    return "APPROVED" if s.startswith(("APPROVED", "AC")) else s.replace(" ", "_")


def table_beats(body: str) -> list:
    """Beat tables: header mentions Beat/節點, data rows start with an ID like N1 / B3 / D1."""
    out, col = [], None
    for ln in body.splitlines():
        if not ln.strip().startswith("|"):
            col = None
            continue
        r = next(table_rows([ln]), None)
        if not r:
            continue
        if col is None:
            col = {strip_md(c): i for i, c in enumerate(r)} if re.search(r"beat|節點", ln, re.I) else {}
            continue
        m = re.match(r"([A-Z]\d+[a-z]?)\s*(.*)", strip_md(r[0]))
        if not col or not m:
            continue
        desc = strip_md(r[1]) if len(r) > 1 else ""
        title = m.group(2) or re.split(r"[：:；;，,]", desc)[0][:24]
        st_i = next((i for n, i in col.items() if n.startswith(("狀態", "Status"))), None)
        kind = next((c.strip() for c in r[2:4] if c.strip() in ("R", "N")), "")
        out.append({"id": m.group(1), "title": title, "kind": kind,
                    "status": (re.findall(r"[A-Z_]{3,}", strip_md(r[st_i])) or ["DRAFT"])[0] if st_i is not None and st_i < len(r) else "DRAFT",
                    "changed": "【改" in ln, "summary": desc[:240]})
    return out


def parse_beat_doc(text: str) -> list:
    """Columns = `##` sections; beats = `**ID 標題** — R/N` lines or `### 標題 [STATUS]` headings."""
    cols = []
    secs = list(re.finditer(r"^## (?!BEAT:)(.+)$", text, re.M))
    for i, sm in enumerate(secs):
        head = sm.group(1).strip()
        if SKIP_SECTION.search(head):
            continue
        body = text[sm.end(): secs[i + 1].start() if i + 1 < len(secs) else len(text)]
        beats = []
        compact = list(COMPACT_BEAT.finditer(body))
        table = table_beats(body)
        if table:
            beats = table
        elif compact:
            for j, bm in enumerate(compact):
                block = body[bm.end(): compact[j + 1].start() if j + 1 < len(compact) else len(body)]
                tail = bm.group(3)
                beats.append({"id": bm.group(1), "title": bm.group(2).strip(),
                              "kind": "R" if re.search(r"—\s*R\b", tail) else "N" if re.search(r"—\s*N\b", tail) else "",
                              "status": beat_status(block), "changed": "【改" in tail + block,
                              "summary": strip_md(block.strip().splitlines()[0] if block.strip() else "")[:240]})
        else:
            heads = [hm for hm in HEADING_BEAT.finditer(body) if TAG.search(hm.group(1)) or re.search(r"beat", hm.group(1), re.I) or re.match(r"[A-Z]\d+[a-z]?\s", hm.group(1))]
            for j, hm in enumerate(heads):
                raw = hm.group(1)
                block = body[hm.end(): heads[j + 1].start() if j + 1 < len(heads) else len(body)]
                title = strip_md(TAG.sub("", raw)).strip()
                idm = re.match(r"(?:Beat|BEAT)\s*([\d.]+[a-z]?)\s*[—–-]\s*(.*)", title)
                sid = re.match(r"([A-Z]\d+[a-z]?)\s+(.*)", title)
                fn = re.search(r"\|\s*\**\s*(?:Beat 功能|beat function|功能)[^|]*\|\s*([^|\n]+)", block, re.I) or re.search(r"\*\*功能[:：]\*\*\s*(.+)", block)
                first = next((ln for ln in block.splitlines() if ln.strip() and not ln.startswith("|")), "")
                beats.append({"id": "Beat " + idm.group(1) if idm else sid.group(1) if sid else title[:12], "title": idm.group(2) if idm else sid.group(2) if sid else title,
                              "kind": "", "status": beat_status(raw + block[:400]), "changed": False,
                              "summary": strip_md(fn.group(1) if fn else first)[:240]})
        if beats:
            cols.append({"id": re.sub(r"[（(].*$", "", head)[:24].strip(), "title": head, "beats": beats})
    return cols


def parse_deep(text: str, rel_path: str) -> dict:
    out = {}
    heads = list(BEAT_RE.finditer(text))
    for i, hm in enumerate(heads):
        blk = text[hm.end(): heads[i + 1].start() if i + 1 < len(heads) else len(text)]
        st = re.search(r"^STATUS:\s*(\S+)", blk, re.M)
        fn = re.search(r"^- beat_function:\s*(.+)$", blk, re.M)
        out[hm.group(1)] = {"file": rel_path, "status": st.group(1) if st else "", "function": fn.group(1).strip()[:240] if fn else ""}
    return out


def parse_beats():
    """Boards are generated from LAYER_MANIFEST: every registered beat-layer file that has beats becomes a board,
    grouped into tracks by its folder (demo_pilot → Demo 試點, story_construction → 正式, anything new → its folder name).
    Deep per-beat files (## BEAT:) enrich their manifest parent instead of becoming boards."""
    man = read_manifest()
    boards, deep_by_parent = {}, {}
    for path, m in man.items():
        if m["layer"] != "beat" or not (REPO / path).exists():
            continue
        text = read(REPO / path)
        if BEAT_RE.search(text):
            if m["current"] != "SUPERSEDED":
                for parent in m["parent"] or [path]:
                    deep_by_parent.setdefault(parent, {}).update(parse_deep(text, path))
            continue
        cols = parse_beat_doc(text)
        if not cols:
            continue
        title = re.search(r"^# (.+)$", text, re.M)
        boards[path] = {"file": path, "track": track_of(path), "title": strip_md(title.group(1)) if title else path.split("/")[-1],
                        "current": m["current"], "columns": cols}
    for parent, deep in deep_by_parent.items():
        if parent in boards:
            for c in boards[parent]["columns"]:
                for b in c["beats"]:
                    if b["id"] in deep:
                        b["deep"] = deep[b["id"]]
        else:
            warnings.append(f"Beat detail files point at {parent}, which is not a registered beat board")
    order = {"CURRENT": 0, "REFERENCE": 1, "SUPERSEDED": 2}
    tracks = sorted({b["track"] for b in boards.values()}, key=lambda x: (x != "正式", x))
    return {"tracks": tracks, "boards": sorted(boards.values(), key=lambda b: (order.get(b["current"], 3), b["file"]))}


STATUS_TOKENS = ["REVALIDATE_REQUIRED", "BLOCKED_AT_THIS_DEPENDENCY", "PROVISIONAL", "DRAFT", "SCENE_REFERENCE",
                 "APPROVED_AT_THIS_LAYER", "APPROVED", "SUPERSEDED"]
LAYERS = ["baseline", "act", "sequence", "beat", "scene", "dialogue", "state", "other"]


def guess_layer(path: str) -> str:
    name = path.rsplit("/", 1)[-1].upper()
    if "/_working/" not in path and re.match(r"\d\d_", name):
        return "baseline"
    for key, layer in [("OUTLINE", "act"), ("SEQUENCE", "sequence"), ("BEAT", "beat"), ("SCENE", "scene"),
                       ("DIALOGUE", "dialogue"), ("VOICE", "dialogue"), ("SCRIPT", "dialogue")]:
        if key in name:
            return layer
    if name in {"PROJECT_STATUS.MD", "NEXT_ACTION.MD", "QUESTION_QUEUE.MD", "SESSION_LEDGER.MD",
                "CANON_DECISION_LOG.MD", "TASK_BOARD.MD", "LAYER_MANIFEST.MD"}:
        return "state"
    return "other"


# Lines like 「衍生自：`A.md`」「取代：`B.md`」「影響：`C.md`、`D.md`」 (also English) declare typed relations.
REL_LINE = re.compile(r"^\s*(?:[>*\-|]\s*)*\**\s*(衍生自|父層|來源|Derived from|Source|依據|基於|Based on|取代|Supersedes|Replaces|影響|改動影響|下游|Affects|Revalidate)\s*\**\s*[:：]\s*(.+)$", re.I | re.M)
REL_KIND = {"衍生自": "derived_from", "父層": "derived_from", "來源": "derived_from", "derived from": "derived_from", "source": "derived_from",
            "依據": "based_on", "基於": "based_on", "based on": "based_on",
            "取代": "supersedes", "supersedes": "supersedes", "replaces": "supersedes",
            "影響": "affects", "改動影響": "affects", "下游": "affects", "affects": "affects", "revalidate": "affects"}


def parse_doc_graph():
    files = [p for p in (REPO / "canon").rglob("*.md")
             if ".tmp" not in p.parts and not re.search(r"(?i)bak|backup", p.name)]
    by_rel = {rel(p): p for p in files}
    by_base: dict[str, list[str]] = {}
    for r in by_rel:
        by_base.setdefault(r.rsplit("/", 1)[-1], []).append(r)

    manifest = {}
    mp = W / "LAYER_MANIFEST.md"
    if mp.exists():
        for r in list(table_rows(section(read(mp), r"^## Files")))[1:]:
            if len(r) >= 4:
                manifest[r[0].strip("`")] = {"layer": r[1], "parent": [x.strip(" `") for x in re.split(r"[、,，]", r[2]) if x.strip(" `-")], "current": r[3]}

    nodes, edges = [], set()
    link_re = re.compile(r"\]\(([^)#\s]+\.md)")
    mention_re = re.compile(r"[\w./-]*?([\w-]+\.md)")
    for r, p in by_rel.items():
        t = read(p)
        counts = {tok: t.count(tok) for tok in STATUS_TOKENS if tok in t}
        m = manifest.get(r, {})
        nodes.append({
            "id": r, "layer": m.get("layer") or guess_layer(r), "current": m.get("current", ""),
            "status": counts, "cdl": len(set(re.findall(r"CDL-\d+", t))), "size": p.stat().st_size,
        })
        for target in link_re.findall(t):
            full = (p.parent / target).resolve()
            tr = rel(full) if str(full).startswith(str(REPO)) else None
            if tr in by_rel and tr != r:
                edges.add((r, tr, "link"))
        for base in set(mention_re.findall(t)):
            cands = by_base.get(base, [])
            if len(cands) == 1 and cands[0] != r:
                edges.add((r, cands[0], "mention"))
        for parent in m.get("parent", []):
            if parent in by_rel:
                edges.add((r, parent, "parent"))
        for word, rest in REL_LINE.findall(t):
            kind = REL_KIND[word.lower()] if word.lower() in REL_KIND else REL_KIND.get(word, "based_on")
            for ref in re.findall(r"[\w./-]*?([\w-]+\.md)", rest):
                cands = by_base.get(ref, [])
                if len(cands) == 1 and cands[0] != r:
                    edges.add((r, cands[0], kind))
    return {"nodes": nodes, "edges": [{"from": a, "to": b, "kind": k} for a, b, k in sorted(edges)], "layers": LAYERS,
            "manifest_entries": len(manifest)}


# ---------------- decisions, characters, art, visual language, open ledger items ----------------

def parse_decisions():
    rows = []
    text = read(W / "CANON_DECISION_LOG.md")
    for r in table_rows(text.splitlines()):
        if not re.match(r"CDL-\d+", r[0] or ""):
            continue
        cell = lambda i: r[i] if i < len(r) else ""
        rows.append({"id": strip_md(r[0]), "topic": strip_md(cell(1))[:300], "position": strip_md(cell(2))[:900],
                     "source": strip_md(cell(3))[:300], "downstream": strip_md(cell(4))[:400], "date": strip_md(cell(5))[:20]})
    return {"file": "canon/_working/CANON_DECISION_LOG.md", "rows": rows}


IMG_EXT = {".png", ".jpg", ".jpeg", ".webp", ".avif", ".gif"}
# Single-character names (操、彩、夕…) only count when not inside a common word.
SINGLE_CHAR_COMPOUNDS = {"操": "操作|體操|操心|操控", "彩": "色彩|彩色|精彩|彩蛋|光彩", "夕": "夕陽|七夕|夕照", "凜": "凜冽", "朔": "朔月"}


def alias_re(alias: str):
    if len(alias) >= 2:
        return re.compile(re.escape(alias))
    words = SINGLE_CHAR_COMPOUNDS.get(alias, "").split("|")
    pre = "".join(sorted({w[0] for w in words if len(w) == 2 and w[1] == alias}))
    post = "".join(sorted({w[1] for w in words if len(w) == 2 and w[0] == alias}))
    return re.compile((f"(?<![{pre}])" if pre else "") + re.escape(alias) + (f"(?![{post}])" if post else ""))


def parse_characters():
    tracker = read(W / "story_construction" / "INDIVIDUAL_CHARACTER_GROWTH_TRACKER.md")
    tracker_heads = re.findall(r"^## ([^\n（(]+)[（(]([^）)]*)[）)]", tracker, re.M)
    art_root = REPO / "art" / "ConceptArt" / "Characters"
    folders = {d.name.lower(): d for d in art_root.iterdir() if d.is_dir()} if art_root.exists() else {}
    chars = []
    for f in sorted((REPO / "canon" / "03_characters").glob("*.md")):
        text = read(f)
        h1 = re.search(r"^# (.+)$", text, re.M)
        head = h1.group(1) if h1 else f.stem
        full = re.split(r"[（(×—]", head)[0].strip()
        english = re.search(r"[（(]([A-Za-z][A-Za-z\s]+)[）)]", head)
        extra = [x.strip() for x in re.findall(r"×\s*([^\s—（(]+)", head)]
        short = next(([n.strip() for n in names.split("/")] for names, _ in tracker_heads if full.endswith(names.split("/")[0].strip())), None)
        aliases = list(dict.fromkeys([full] + (short or ([full[-2:]] if len(full) >= 4 else [])) + extra))
        # art folder: English given name, or a token of the file name (iwakura_akane → Akane)
        keys = ([english.group(1).split()[-1].lower()] if english else []) + f.stem.lower().split("_")
        folder = next((folders[k] for k in keys if k in folders), None)
        imgs = [rel(x) for x in sorted(folder.iterdir()) if x.suffix.lower() in IMG_EXT] if folder else []
        tracker_name = next((rest for names, rest in tracker_heads if names.split("/")[0].strip() in aliases), "")
        sec = re.search(r"^## " + re.escape((short or [full])[0]) + r"[（(].*?(?=^## )", tracker, re.M | re.S)
        growth = {s: len(re.findall(r"\b" + s + r"\b", sec.group(0))) for s in ("AC", "SS", "BK", "INFERRED")} if sec else {}
        name = short[0] if short else (full[-2:] if len(full) >= 4 else full)
        chars.append({"id": "CHAR:" + f.stem, "name": name, "full": full, "english": english.group(1) if english else "",
                      "aliases": aliases, "file": rel(f), "art_folder": rel(folder) if folder else "", "images": imgs,
                      "image_total": sum(1 for x in folder.rglob("*") if x.suffix.lower() in IMG_EXT) if folder else 0,
                      "growth": growth, "tracker_name": tracker_name,
                      # tracker uses a different full name for the same character (e.g. 春日井晴香 vs 雨宮晴香)
                      "name_mismatch": bool(tracker_name) and name in tracker_name and full not in tracker_name
                      and tracker_name.split("/")[0].strip() not in text})  # e.g. 春日井晴香 is documented as 藝名 inside haruka.md
    return {"rows": chars}


def parse_art():
    root = REPO / "art"
    groups = []
    concept = root / "ConceptArt"
    for kind_dir in (sorted(concept.iterdir()) if concept.exists() else []):
        if not kind_dir.is_dir():
            continue
        loose = [rel(x) for x in sorted(kind_dir.iterdir()) if x.suffix.lower() in IMG_EXT]
        if loose:
            groups.append({"id": "ART:" + rel(kind_dir), "kind": kind_dir.name, "name": f"（{kind_dir.name} 本層）", "folder": rel(kind_dir), "images": loose, "old": []})
        for g in sorted(kind_dir.iterdir()):
            if not g.is_dir() or g.name.startswith("_"):
                continue
            cur = [rel(x) for x in sorted(g.iterdir()) if x.suffix.lower() in IMG_EXT]
            old = [rel(x) for x in sorted(g.rglob("*")) if x.suffix.lower() in IMG_EXT and x.parent != g]
            if cur or old:
                groups.append({"id": "ART:" + rel(g), "kind": kind_dir.name, "name": g.name, "folder": rel(g), "images": cur, "old": old})
    docs = [rel(x) for x in sorted(root.glob("*.md"))] if root.exists() else []
    docs += [d for d in ["canon/06_visual_bible.md", "canon/_working/BETA_VISUAL_LANGUAGE_REGISTER.md"] if (REPO / d).exists()]
    return {"groups": groups, "docs": docs}


@functools.lru_cache(maxsize=1)
def parse_visual():
    p = W / "BETA_VISUAL_LANGUAGE_REGISTER.md"
    if not p.exists():
        return {"rows": []}
    rows = []
    for r in table_rows(section(read(p), r"^## 3\. Current Register")):
        if not re.match(r"VL-\d+", r[0]):
            continue
        cell = lambda i: strip_md(r[i]) if i < len(r) else ""
        rows.append({"id": r[0], "name": cell(1), "layer": cell(2), "source": cell(3), "owner": cell(4), "state": cell(5), "question": cell(6)[:500]})
    return {"file": rel(p), "rows": rows}


def parse_todos():
    out, sec = [], ""
    for ln in read(W / "SESSION_LEDGER.md").splitlines():
        if ln.startswith("## "):
            sec = ln[3:].strip()
        m = re.match(r"^\s*- \[ \]\s*(.+)$", ln)
        if m:
            date = re.search(r"20\d\d-\d\d-\d\d", sec)
            out.append({"id": f"TODO:{len(out) + 1}", "text": strip_md(m.group(1))[:400], "section": sec[:120], "date": date.group(0) if date else ""})
    return {"file": "canon/_working/SESSION_LEDGER.md", "rows": out}


# ---------------- whole-repo document structure ----------------
DOC_SKIP = re.compile(r"(^|/)(node_modules|\.git|\.obsidian|\.agents|\.tmp|\.story_dashboard_work)(/|$)|^tools/workbench/")
FOLDER_LABEL = {  # display names only; any folder not listed shows its own name
    "(root)": "根目錄", "canon": "Canon 正典", "canon/03_characters": "角色檔", "canon/_working": "工作區",
    "canon/_working/story_construction": "故事結構（Act／Sequence／Beat）", "canon/_working/demo_pilot": "Demo 試點",
    "canon/_working/canon_fact_map": "Canon 事實表", "canon/_working/brief_refactor": "Brief 重整", "canon/_working/image_spec_pipeline": "美術 prompt 流程",
    "canon/_working/conflict_resolution": "矛盾處理", "canon/_working/character-voice-workshops": "角色聲音工作坊",
    "canon/_working/character-voice-bibles": "角色聲音聖經", "canon/_working/character-performance-bibles": "角色表演聖經",
    "canon/_reports": "審計報告", "ledger": "Atom ledger（舊流程）", "backup": "舊來源（backup）", "docs": "流程規格", "tools": "工具",
    ".claude": "AI skills／規則", "art": "美術",
}
VERSION_TAIL = re.compile(r"(?:[_ .-](?:v|V)\d+(?:[._]\d+)*(?:_LITE)?|_R\d+)$")


def version_key(stem: str):
    nums = [int(x) for x in re.findall(r"\d+", stem[len(VERSION_TAIL.sub("", stem)):])] if VERSION_TAIL.search(stem) else []
    return nums or [0]


@functools.lru_cache(maxsize=1)
def parse_docs():
    man = read_manifest()
    files = []
    for root, dirs, names in os.walk(REPO):
        dirs[:] = [d for d in dirs if not DOC_SKIP.search((rel(Path(root) / d) + "/"))]  # prune node_modules, .git, art images…
        for n in names:
            if n.lower().endswith((".md", ".html")):
                p = Path(root) / n
                files.append((rel(p), p))
    groups = {}
    for r, p in files:
        stem = p.stem
        base = stem
        while VERSION_TAIL.search(base):
            base = VERSION_TAIL.sub("", base)
        groups.setdefault((str(p.parent), base, p.suffix), []).append((version_key(stem), r))
    newest = {max(v)[1] for v in groups.values() if len(v) > 1}
    chained = {r for v in groups.values() if len(v) > 1 for _, r in v}
    docs = []
    for r, p in sorted(files):
        try:
            text = read(p)
        except Exception:
            continue
        if p.suffix == ".html":
            title = re.search(r"<title>([^<]+)", text)
            purpose = ""
        else:
            fm = re.match(r"^---\r?\n(.*?)\r?\n---\r?\n", text, re.S)
            if fm:  # skills/commands: use their front-matter description
                text = text[fm.end():]
            title = re.search(r"^# (.+)$", text, re.M)
            pm = re.search(r"^>\s*(?:\*\*[^*]+\*\*[:：]?\s*)?(.+)$", text, re.M)
            first = next((ln.strip() for ln in text.splitlines() if ln.strip() and not ln.startswith(("#", "|", "<!--", "---", "```", ">", "-"))), "")
            desc = re.search(r"^description:\s*(.+)$", fm.group(1), re.M) if fm else None
            purpose = strip_md(desc.group(1) if desc else pm.group(1) if pm else first)[:200]
        m = man.get(r, {})
        if m.get("current"):
            cur = m["current"]
        elif re.search(r"(?i)(^|[_ -])(bak|backup|old|deprecated)([_ .-]|$)", p.stem) or r.startswith("backup/"):
            cur = "OLD?"
        elif r in chained:
            cur = "LATEST?" if r in newest else "OLD?"
        else:
            cur = ""
        folder = "/".join(r.split("/")[:-1]) or "(root)"
        docs.append({"id": r, "folder": folder, "title": strip_md(title.group(1))[:160] if title else p.stem, "purpose": purpose,
                     "layer": m.get("layer") or guess_layer(r), "registered": bool(m), "current": cur,
                     "status": {tok: text.count(tok) for tok in ("REVALIDATE_REQUIRED", "PROVISIONAL", "DRAFT", "SUPERSEDED") if tok in text},
                     "modified": time.strftime("%Y-%m-%d", time.localtime(p.stat().st_mtime)), "size": p.stat().st_size})
    folders = {}
    for d in docs:
        parts = d["folder"].split("/") if d["folder"] != "(root)" else ["(root)"]
        for i in range(1, len(parts) + 1):
            f = "/".join(parts[:i])
            folders.setdefault(f, {"id": f, "label": FOLDER_LABEL.get(f, parts[i - 1]), "count": 0})
            folders[f]["count"] += 1
    for f, info in folders.items():
        idx = next((REPO / f / n for n in ("INDEX.md", "README.md") if f != "(root)" and (REPO / f / n).exists()), None)
        if idx:
            m = re.search(r"^>\s*(?:\*\*[^*]+\*\*[:：]?\s*)?(.+)$", read(idx), re.M)
            info["about"] = strip_md(m.group(1))[:200] if m else ""
    return {"docs": docs, "folders": sorted(folders.values(), key=lambda x: x["id"])}


def parse_brief():
    """00_Story_Brief.html is the author's most accurate source: its parts, and which canon files belong under each part
    (explicit links first, otherwise the part whose text contains most of that file's section headings)."""
    p = REPO / "00_Story_Brief.html"
    if not p.exists():
        return None
    html = read(p)
    heads = list(re.finditer(r'<h2 class="category-title">([^<]+)', html))
    parts = []
    for i, m in enumerate(heads):
        chunk = html[m.end(): heads[i + 1].start() if i + 1 < len(heads) else len(html)]
        sub = [strip_md(re.sub(r"<[^>]+>", "", x)).strip() for x in re.findall(r"<h3[^>]*>(.*?)</h3>", chunk, re.S)]
        text = re.sub(r"<[^>]+>", " ", chunk)
        parts.append({"title": m.group(1).strip(), "sections": [s for s in sub if s][:40],
                      "links": sorted(set(re.findall(r'href="((?:canon|art|docs)/[^"#]+\.md)', chunk))), "_text": text})
    canon_files = sorted(rel(x) for x in (REPO / "canon").glob("*.md")) + [rel(x) for x in sorted((REPO / "canon" / "story").glob("*.md"))]
    for f in canon_files:
        if any(f in pt["links"] for pt in parts):
            continue
        hs = [re.sub(r"<[^>]+>|\{#.*?\}|^[\d.、§\s]+", "", h).strip() for h in re.findall(r"^#{2,3} (.+)$", read(REPO / f), re.M)]
        hs = [re.split(r"[（(：:—]", h)[0].strip() for h in hs]
        hs = [h for h in hs if len(h) >= 3]
        score = [sum(1 for h in hs if h in pt["_text"]) for pt in parts]
        if score and max(score) >= 2:
            parts[score.index(max(score))].setdefault("matched", []).append(f)
    for pt in parts:
        pt.pop("_text")
        pt["files"] = pt.pop("links") + pt.pop("matched", [])
    mtime = time.strftime("%Y-%m-%d", time.localtime(p.stat().st_mtime))
    return {"file": "00_Story_Brief.html", "modified": mtime, "parts": parts}


# ---------------- skills & pipelines (discovered, never hard-coded) ----------------

@functools.lru_cache(maxsize=1)
def parse_skills():
    """Every .claude/skills/*/SKILL.md: name, description, group, and which folders/files it talks about."""
    out = []
    folder_ids = set()
    for d in (out_docs := parse_docs())["docs"]:
        parts = d["folder"].split("/")
        for i in range(1, len(parts) + 1):
            folder_ids.add("/".join(parts[:i]))
    doc_by_base = {}
    for d in out_docs["docs"]:
        doc_by_base.setdefault(d["id"].split("/")[-1], []).append(d["id"])
    for f in sorted((REPO / ".claude" / "skills").glob("*/SKILL.md")):
        text = read(f)
        fm = re.match(r"^---\r?\n(.*?)\r?\n---", text, re.S)
        meta = dict(re.findall(r"^(\w[\w-]*):\s*(.+)$", fm.group(1), re.M)) if fm else {}
        name = meta.get("name", f.parent.name).strip()
        desc = strip_md(meta.get("description", "")).strip()
        if not desc:
            h1 = re.search(r"^# (.+)$", text, re.M)
            desc = strip_md(h1.group(1)) if h1 else ""
        bits = name.split("-")
        group = bits[1] if bits[0] == "story" and len(bits) > 2 else bits[0]
        folders = sorted({fo for fo in folder_ids if fo != "(root)" and len(fo) > 6 and fo in text})
        files = sorted({doc_by_base[b][0] for b in set(re.findall(r"([\w.-]+\.md)", text)) if len(doc_by_base.get(b, [])) == 1})
        sec = re.search(r"^## Workbench Choices\s*$(.*?)(?=^## |\Z)", text, re.M | re.S)
        choices = [{"icon": m.group(1), "label": m.group(2).strip(), "prompt": m.group(3).strip()}
                   for m in re.finditer(r"^- (\S+)\s+([^|\n]+?)\s*\|\s*(.+)$", sec.group(1), re.M)][:8] if sec else []
        out.append({"id": "SKILL:" + name, "name": name, "description": desc[:400], "group": group, "file": rel(f), "choices": choices,
                    "folders": folders[:30], "files": files[:60]})
    return {"rows": out}


STAGE_HEAD = re.compile(r"^(#{2,3}) +((?:Stage|Phase|階段|P)\s?\d+(?:\.\d+)?[A-Z]?(?:-\d+)?)\s*[—:：-]\s*(.+?)\s*$", re.M)
STAGE_STATUS = [("DONE", r"\bDONE(?:_PROVISIONAL)?\b|COMPLETE|已完成|✅"), ("IN_PROGRESS", r"IN[_ ]PROGRESS|進行中|CURRENT NEXT|EXPLORING"),
                ("AWAITING", r"AWAITING|等作者|待作者批"), ("BLOCKED", r"BLOCKED|卡住"), ("DEFERRED", r"DEFERRED|PARKED|稍後|押後|CUT"),
                ("TODO", r"\bTODO\b|NOT STARTED|未開始")]


def stage_status(text: str) -> str:
    for code, rx in STAGE_STATUS:
        if re.search(rx, text):
            return code
    return ""


def parse_pipelines():
    """Any working document with ≥4 stage headings (Stage N / Phase N / 階段 N / P01…) where at least one stage
    has a readable status becomes a pipeline. Skills named inside a stage become that stage's launch buttons."""
    skill_names = [s["name"] for s in parse_skills()["rows"]]
    # Registers whose rows name an owning stage (e.g. VL-001 … Pipeline Owner = P01) fill in stage status.
    owned = {}
    for v in parse_visual()["rows"]:
        for code in re.findall(r"P\d+(?:\.\d+)?[A-Z]?", v["owner"]):
            owned.setdefault(code, []).append(v)
    out = []
    for f in sorted((REPO / "canon" / "_working").rglob("*.md")):
        if ".tmp" in f.parts:
            continue
        text = read(f)
        heads = list(STAGE_HEAD.finditer(text))
        if len(heads) < 4:
            continue
        top = min(len(m.group(1)) for m in heads)
        heads = [m for m in heads if len(m.group(1)) == top]
        stages = []
        for i, m in enumerate(heads):
            end = heads[i + 1].start() if i + 1 < len(heads) else len(text)
            nxt = re.search(r"^#{1,%d} " % top, text[m.end():end], re.M)
            body = text[m.end(): m.end() + nxt.start()] if nxt else text[m.end():end]
            head_status = stage_status(m.group(3))
            status = head_status or stage_status("\n".join(body.strip().splitlines()[:6]))
            reg = [v for code, vs in owned.items() if code == m.group(2) or code.startswith(m.group(2)) for v in vs]
            if not status and reg:  # stage owns register items: DONE only when all of them are done
                sts = [stage_status(v["state"]) for v in reg]
                status = "DONE" if all(s == "DONE" for s in sts) else next((s for s in ("IN_PROGRESS", "BLOCKED", "AWAITING", "TODO", "DEFERRED") if s in sts), "")
            title = strip_md(re.sub(r"`[^`]*`|[◆（(].*$", "", m.group(3))).strip() or m.group(3)
            stages.append({"code": m.group(2), "title": title[:60], "status": status, "author_gate": "◆" in m.group(3),
                           "line": text[: m.start()].count("\n") + 1,
                           "skills": [s for s in skill_names if s in body][:6],
                           # what the step involves: its checklist lines and its 產出 (output) line
                           "checks": [{"done": c[0].lower() == "x", "text": strip_md(c[1])[:160]} for c in re.findall(r"^\s*[-*] \[( |x|X)\] (.+)$", body, re.M)][:12],
                           "outputs": next((strip_md(o)[:200] for o in re.findall(r"產出[：:]\s*(.+)", body)), ""), "note": strip_md(body.strip().splitlines()[0].lstrip("#> -") if body.strip() else "")[:200]})
        if not any(s["status"] for s in stages):
            continue
        h1 = re.search(r"^# (.+)$", text, re.M)
        # active = something is under way, or it has started but isn't finished (a TODO step right after DONE ones counts)
        active = any(s["status"] in ("IN_PROGRESS", "AWAITING", "BLOCKED") for s in stages) or (
            any(s["status"] == "DONE" for s in stages) and any(s["status"] in ("TODO", "") for s in stages))
        title = strip_md(h1.group(1))[:100] if h1 else f.stem
        folder = rel(f.parent)
        # short display name: the folder's label (e.g. demo_pilot → Demo 試點), else the title minus generic words
        short = FOLDER_LABEL.get(folder) if folder != "canon/_working" else None
        if not short:
            short = re.sub(r"(PROGRESS|TRACKER|DRAFT|PIPELINE|Pipeline|WORKING)|[—–-]\s*$", "", title).strip(" —–-") or title
        out.append({"file": rel(f), "title": title, "short": short[:24], "active": active,
                    "done": sum(s["status"] == "DONE" for s in stages), "stages": stages,
                    "modified": time.strftime("%Y-%m-%d", time.localtime(f.stat().st_mtime))})
    out.sort(key=lambda x: (not x["active"], x["modified"]), reverse=False)
    out.sort(key=lambda x: not x["active"])
    return {"rows": out}


# ---------------- scene image specs & dialogue workshops ----------------

def parse_scenes():
    """IMAGE_PROMPT_SPEC overview table (one row per scene) + where its image lives + where its spec block starts."""
    p = REPO / "IMAGE_PROMPT_SPEC_FINAL_72_COMPLETE.md"
    if not p.exists():
        return None
    text = read(p)
    lines = {int(m.group(1)): text[: m.start()].count("\n") + 1 for m in re.finditer(r"^## 圖(\d+)：", text, re.M)}
    images = {x.name: rel(x) for x in (REPO / "art" / "ConceptArt" / "Scene").rglob("*") if x.suffix.lower() in IMG_EXT and "_BAK" not in x.parts}
    rows = []
    for r in table_rows(text[: text.index("## 圖1：")].splitlines() if "## 圖1：" in text else []):
        if len(r) < 12 or not r[0].strip().isdigit():
            continue
        # spec blocks ("## 圖N") and scene_gen_runner use the story-order column, not the legacy "#" id
        n, fname, has = int(r[0]), strip_md(r[9]), strip_md(r[10])
        fail = re.search(r"生成失敗（([^）]*)）", has)
        rows.append({"legacy_id": strip_md(r[1]), "n": n, "block": strip_md(r[2]), "title": strip_md(r[3]), "title_en": strip_md(r[4]),
                     "chars": [c.strip() for c in re.split(r"[、,，/]", strip_md(r[5])) if c.strip()], "act": strip_md(r[6]),
                     "time": strip_md(r[7]), "stars": r[8].count("⭐"), "file": fname, "image": images.get(fname, ""),
                     "status": "ok" if "✅" in has else "failed" if fail or "失敗" in has else "todo", "fail": fail.group(1) if fail else "",
                     "desc": strip_md(r[11])[:300], "line": lines.get(n, 1)})
    return {"file": rel(p), "rows": rows}


def parse_voice():
    """character-voice-workshops/*.md: micro-scenes, their candidate lines (候選 | 百分位 | 備註) and the author's pick."""
    out = []
    d = W / "character-voice-workshops"
    for f in sorted(d.glob("*_voice_discovery.md")) if d.exists() else []:  # every workshop file counts, even before it has candidates
        text = read(f)
        h1 = re.search(r"^# (.+)$", text, re.M)
        secs = list(re.finditer(r"^## (.+)$", text, re.M))
        scenes = []
        for i, m in enumerate(secs):
            body = text[m.end(): secs[i + 1].start() if i + 1 < len(secs) else len(text)]
            cands, col = [], None
            for ln in body.splitlines():
                if not ln.strip().startswith("|"):
                    col = None
                    continue
                r = next(table_rows([ln]), None)
                if not r:
                    continue
                if col is None:
                    col = {strip_md(c): j for j, c in enumerate(r)} if "候選" in r[0] else {}  # evidence tables (原句) are not choices
                    continue
                if col and r[0].strip():
                    pct = next((r[j] for n, j in col.items() if "百分位" in n and j < len(r)), "")
                    note = next((r[j] for n, j in col.items() if ("備註" in n or "功能" in n) and j < len(r)), "")
                    cands.append({"line": strip_md(r[0]), "pct": strip_md(pct)[:30], "note": strip_md(note)[:160]})
            pick = re.search(r"^### [^\n]*(?:作者選擇|結果|已定)[^\n]*\n+(.+?)(?=\n### |\n## |\Z)", body, re.M | re.S)
            if not cands and not pick:
                continue
            scenes.append({"title": m.group(1).strip()[:120], "line": text[: m.start()].count("\n") + 1, "candidates": cands[:24],
                           "pick": strip_md(pick.group(1).strip().split("\n\n")[0])[:400] if pick else "",
                           "decided": bool(pick) or "已定" in m.group(1)})
        out.append({"file": rel(f), "title": strip_md(h1.group(1)) if h1 else f.stem, "scenes": scenes})
    return {"rows": out}


def parse_prompt_lib():
    p = REPO / "tools" / "ImagePrompt.md"
    if not p.exists():
        return {"file": "", "templates": []}
    text = read(p)
    toc = section(text, r"^## 目錄")
    out = []
    for m in re.finditer(r"^\d+\.\s*\[(.+?)\]\(#", "\n".join(toc), re.M):
        title = m.group(1)
        hm = re.search(r"^## " + re.escape(title) + r"\s*$", text, re.M)
        out.append({"title": title, "line": text[: hm.start()].count("\n") + 1 if hm else 1})
    return {"file": rel(p), "templates": out}


# ---------------- cross-links ----------------
ID_RE = re.compile(r"\b(QQ-\d+[a-z]?|CDL-\d+|VL-\d+|T-\d{3})\b")


def link_entities(out: dict) -> dict:
    """One registry of everything the UI can open, plus undirected links found by ID / character-name / file mentions."""
    ents, texts = {}, {}

    def add(eid, typ, title, status="", file="", text=""):
        ents[eid] = {"id": eid, "type": typ, "title": (title or eid)[:200], "status": status, "file": file, "summary": re.sub(r"\s+", " ", text)[:500]}
        texts[eid] = text

    for q in scan_queue():
        add(q["id"], "question", q["topic"] or q["summary"][:80], q["status"], "canon/_working/QUESTION_QUEUE.md", q["topic"] + q["summary"] + q["status_note"])
    for d in (out.get("decisions") or {}).get("rows", []):
        add(d["id"], "decision", d["topic"], d["date"], "canon/_working/CANON_DECISION_LOG.md", " ".join(d.values()))
    mx = out.get("matrix") or {}
    for r in mx.get("rows", []):
        add("MX:" + r["topic"][:60], "matrix", r["topic"], "可能過時" if r["stale"] else "未解決" if r["open"] else "", mx.get("file", ""),
            r["topic"] + " ".join(r["qids"]) + " ".join(r["notes"]))
    for b in (out.get("beats") or {}).get("boards", []):
        if b["current"] != "CURRENT":
            continue
        for c in b["columns"]:
            for x in c["beats"]:
                add(f"BEAT:{b['file']}#{x['id']}", "beat", f"{x['id']} {x['title']}", x["status"], x.get("deep", {}).get("file") or b["file"],
                    x["title"] + x["summary"] + x.get("deep", {}).get("function", ""))
    ddir = W / ".tmp" / "workbench" / "discussions"
    for f in sorted(ddir.glob("*.json")) if ddir.exists() else []:
        try:
            dd = json.loads(read(f))
        except Exception:
            continue
        said = " ".join(e.get("text", "") for e in dd.get("events", []) if e.get("kind") in ("turn", "author"))
        synth = next((e for e in dd.get("events", []) if e.get("kind") == "synthesis"), {})
        add("DISC:" + dd["id"], "discussion", dd.get("topic", "")[:120], {"done": "完成"}.get(dd.get("state"), dd.get("state", "")), "",
            " ".join([dd.get("topic", ""), dd.get("range", ""), dd.get("context", ""), " ".join(l.get("id", "") + " " + l.get("file", "") for l in dd.get("links", [])), said, json.dumps(synth, ensure_ascii=False)]))
        ents["DISC:" + dd["id"]]["summary"] = (synth.get("summary") or dd.get("topic", ""))[:500]
        for l in dd.get("links", []):
            texts["DISC:" + dd["id"]] += " " + l.get("id", "")
        ents["DISC:" + dd["id"]]["links"] = [l.get("id") for l in dd.get("links", [])]
    for td in (out.get("todos") or {}).get("rows", []):
        add(td["id"], "todo", td["text"][:120], td["date"], "canon/_working/SESSION_LEDGER.md", td["text"] + " " + td["section"])
    for t in out.get("tasks") or []:
        add(t["id"], "task", t["task"], t["status"], "canon/_working/TASK_BOARD.md", t["task"] + " ".join(t["files"]))
    vis = out.get("visual") or {}
    for v in vis.get("rows", []):
        add(v["id"], "visual", v["name"], v["state"], vis.get("file", ""), " ".join(v.values()))
    chars = (out.get("characters") or {}).get("rows", [])
    for ch in chars:
        add(ch["id"], "character", ch["name"], "", ch["file"], "")
    for g in (out.get("art") or {}).get("groups", []):
        add(g["id"], "art", f"{g['kind']} / {g['name']}", f"{len(g['images'])} 張", g["folder"], "")
    for n in (out.get("doc_graph") or {}).get("nodes", []):
        ents.setdefault(n["id"], {"id": n["id"], "type": "file", "title": n["id"].split("/")[-1], "status": n.get("current", ""), "file": n["id"]})
    for s in (out.get("skills") or {}).get("rows", []):
        add(s["id"], "skill", s["name"], s["group"], s["file"], s["description"])
        ents[s["id"]]["summary"] = s["description"]
    for pl in (out.get("pipelines") or {}).get("rows", []):
        add("PIPE:" + pl["file"], "pipeline", pl["title"], f"{pl['done']}/{len(pl['stages'])}", pl["file"],
            " ".join(x["title"] + " " + " ".join(x["skills"]) for x in pl["stages"]))
    for d in (out.get("docs") or {}).get("docs", []):
        e = ents.setdefault(d["id"], {"id": d["id"], "type": "file", "title": d["id"].split("/")[-1], "status": "", "file": d["id"]})
        e["status"] = e["status"] or d["current"]
        e["summary"] = (d["title"] + " — " + d["purpose"]).strip(" —")

    links = set()
    typed = set()  # (from, kind, to): directed, typed — what the drawer's 🧬 section and the map's edge filters show
    name_res = [(ch["id"], [alias_re(a) for a in ch["aliases"]]) for ch in chars]
    base_to_file = {}
    for fid in (e for e in ents if ents[e]["type"] == "file"):
        base_to_file.setdefault(fid.split("/")[-1], []).append(fid)
    for eid, text in texts.items():
        for ref in set(ID_RE.findall(text)):
            if ref in ents and ref != eid:
                links.add(tuple(sorted((eid, ref))))
                typed.add((eid, "answers" if ents[eid]["type"] == "decision" and ents[ref]["type"] == "question" else "cites", ref))
        for cid, res in name_res:
            if cid != eid and any(r.search(text) for r in res):
                links.add(tuple(sorted((eid, cid))))
                typed.add((eid, "about", cid))
        for base in set(re.findall(r"([\w-]+\.md)", text)):
            if len(base_to_file.get(base, [])) == 1 and base_to_file[base][0] != eid:
                links.add(tuple(sorted((eid, base_to_file[base][0]))))
        f = ents[eid]["file"]
        if f in ents and ents[eid]["type"] not in ("question", "decision") and f != eid:
            links.add(tuple(sorted((eid, f))))
    for s in (out.get("skills") or {}).get("rows", []):  # skill ↔ files it reads/writes
        for fid in s["files"]:
            if fid in ents:
                links.add(tuple(sorted((s["id"], fid))))
    for pl in (out.get("pipelines") or {}).get("rows", []):  # pipeline ↔ skills its stages use
        for sk in {k for x in pl["stages"] for k in x["skills"]}:
            if "SKILL:" + sk in ents:
                links.add(tuple(sorted(("PIPE:" + pl["file"], "SKILL:" + sk))))
    for eid, e in ents.items():
        for target in e.get("links", []) or []:
            if target in ents and target != eid:
                links.add(tuple(sorted((eid, target))))
                typed.add((eid, "grounded_on", target))
    for ed in (out.get("doc_graph") or {}).get("edges", []):
        kind = {"parent": "derived_from", "link": "links_to"}.get(ed["kind"], ed["kind"])
        if kind != "mention" and ed["from"] in ents and ed["to"] in ents:
            links.add(tuple(sorted((ed["from"], ed["to"]))))
            typed.add((ed["from"], kind, ed["to"]))
    # conversations / auto-discussions that read or changed files (written by the workbench server)
    sf = W / ".tmp" / "workbench" / "session_files.json"
    try:
        touched = json.loads(read(sf)) if sf.exists() else {}
    except Exception:
        touched = {}
    for sid, rec in touched.items():
        cid = sid if sid.startswith("DISC:") else "CONV:" + sid
        if cid not in ents:
            add(cid, "conversation", rec.get("title") or "以前嘅對話", time.strftime("%Y-%m-%d", time.localtime((rec.get("t") or 0) / 1000)), "", "")
            ents[cid]["session"] = sid
        for f, how in (rec.get("files") or {}).items():
            if f in ents:
                links.add(tuple(sorted((cid, f))))
                typed.add((cid, "edited" if how == "edit" else "read", f))
    for ch in chars:  # character ↔ its art folder
        aid = "ART:" + ch["art_folder"]
        if aid in ents:
            links.add(tuple(sorted((ch["id"], aid))))
    rel_map = {}
    for a, b in links:
        rel_map.setdefault(a, []).append(b)
        rel_map.setdefault(b, []).append(a)
    edge_map = {}
    for a, kind, b in typed:
        edge_map.setdefault(a, []).append([kind, "out", b])
        edge_map.setdefault(b, []).append([kind, "in", a])
    for eid, e in ents.items():
        e["rel"] = rel_map.get(eid, [])[:300]
        e["edges"] = edge_map.get(eid, [])[:300]
    out["relations"] = {"count": len(typed), "kinds": sorted({k for _, k, _ in typed})}
    return ents


def build_tree(out: dict) -> list:
    """Nodes {id, title, layer, parent, order, current}. Parents come from LAYER_MANIFEST (first parent) and beat-board sections."""
    nodes = {}
    docs = {d["id"]: d for d in (out.get("docs") or {}).get("docs", [])}
    man = read_manifest()
    for i, (f, m) in enumerate(man.items()):
        parent = next((x for x in m["parent"] if x in man), None)
        title = (docs.get(f) or {}).get("title") or f.rsplit("/", 1)[-1]
        nodes[f] = {"id": f, "title": title, "layer": m["layer"], "parent": parent, "order": i, "current": m["current"]}
    for b in (out.get("beats") or {}).get("boards", []):
        if b["file"] not in nodes:
            nodes[b["file"]] = {"id": b["file"], "title": b["title"], "layer": "beat", "parent": None, "order": 999, "current": b["current"]}
        else:
            nodes[b["file"]]["title"] = b["title"]
        for ci, c in enumerate(b["columns"]):
            sid = f"SEQ:{b['file']}#{ci}"
            nodes[sid] = {"id": sid, "title": c["title"], "layer": "section", "parent": b["file"], "order": ci, "current": b["current"]}
            for bi, x in enumerate(c["beats"]):
                bid = f"BEAT:{b['file']}#{x['id']}"
                nodes[bid] = {"id": bid, "title": x["title"], "layer": "beat_item", "parent": sid, "order": bi, "current": b["current"], "code": x["id"]}
    return list(nodes.values())


PARSERS = {
    "next_action": parse_next_action,
    "tasks": parse_tasks,
    "questions": parse_questions,
    "matrix": parse_matrix,
    "decisions": parse_decisions,
    "characters": parse_characters,
    "art": parse_art,
    "visual": parse_visual,
    "todos": parse_todos,
    "docs": parse_docs,
    "brief": parse_brief,
    "skills": parse_skills,
    "pipelines": parse_pipelines,
    "scenes": parse_scenes,
    "prompts": parse_prompt_lib,
    "voice": parse_voice,
    "pilot": parse_pilot,
    "beats": parse_beats,
    "doc_graph": parse_doc_graph,
}


def build() -> dict:
    warnings.clear()
    for fn in (scan_queue, read_manifest, parse_visual, parse_docs, parse_skills):
        fn.cache_clear()
    out = {"protocol": PROTOCOL_VERSION, "generated_at": time.strftime("%Y-%m-%d %H:%M:%S"), "errors": {}}
    for name, fn in PARSERS.items():
        try:
            out[name] = fn()
        except Exception:
            out[name] = None
            out["errors"][name] = traceback.format_exc(limit=3)
    try:
        out["tree"] = build_tree(out)
    except Exception:
        out["tree"] = []
        out["errors"]["tree"] = traceback.format_exc(limit=3)
    try:
        out["entities"] = link_entities(out)
    except Exception:
        out["entities"] = {}
        out["errors"]["entities"] = traceback.format_exc(limit=3)
    out["warnings"] = list(warnings)
    return out


def check(idx: dict):
    assert idx["protocol"] == PROTOCOL_VERSION
    assert not idx["errors"], idx["errors"]
    assert idx["next_action"] and idx["next_action"]["text"], "next_action empty"
    assert idx["questions"] and all(q["id"].startswith("QQ-") for q in idx["questions"]), "no open questions parsed"
    assert len(idx["pilot"]["stages"]) >= 10, "pilot stages missing"
    assert len(idx["matrix"]["rows"]) > 30, "matrix rows missing"
    assert len(idx["decisions"]["rows"]) > 300 and len(idx["characters"]["rows"]) >= 9, "decisions/characters missing"
    assert idx["entities"] and any(e["rel"] for e in idx["entities"].values()), "entity links missing"
    assert len(idx["docs"]["docs"]) > 400 and idx["brief"]["parts"], "docs/brief missing"
    assert len(idx["skills"]["rows"]) > 30 and idx["pipelines"]["rows"], "skills/pipelines missing"
    assert len(idx["scenes"]["rows"]) > 100 and idx["voice"]["rows"], "scenes/voice missing"
    assert version_key("BEAT_LAYER_V4_1") == [4, 1] and version_key("X") == [0]
    assert not alias_re("操").search("操作") and alias_re("操").search("操同晴香")
    assert angles_in("全12基礎角度 relevant + 13/14/16 relevant（15 not relevant）") == set(range(1, 15)) | {16}
    assert angles_in("—") == set() and angles_in("全部", base={3, 9}) == {3, 9}
    assert idx["beats"]["boards"] and all(b["columns"] for b in idx["beats"]["boards"]), "no beat boards parsed"
    assert len(idx["doc_graph"]["nodes"]) > 100 and idx["doc_graph"]["edges"], "doc graph too small"
    assert REL_LINE.search("衍生自：`A.md`") and REL_LINE.search("> **取代**：`B.md`、`C.md`") and not REL_LINE.search("依據唔夠")
    assert {"derived_from", "cites", "about"} <= set(idx["relations"]["kinds"]), idx["relations"]
    assert any(n["layer"] == "beat_item" for n in idx["tree"]) and any(n["layer"] == "act" for n in idx["tree"]), "tree missing layers"
    print("check OK:", {k: (len(v) if isinstance(v, list) else "ok") for k, v in idx.items() if k in PARSERS},
          "warnings:", len(idx["warnings"]))


if __name__ == "__main__":
    idx = build()
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(idx, ensure_ascii=False), encoding="utf-8")
    if "--check" in sys.argv:
        check(idx)
        for w in idx["warnings"]:
            print("WARN", w)
