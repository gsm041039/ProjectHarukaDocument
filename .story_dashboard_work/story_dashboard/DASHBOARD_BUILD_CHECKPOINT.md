# Dashboard Build Checkpoint
**Updated:** 2026-06-11  
**Status:** Part 1/3 complete — data layer done, UI layer pending

---

## COMPLETED ✅

### data/story_data.js
- `window.SD.characters` — 10 characters (CHAR-001 to CHAR-010), full arc + states + coping + dirs
- `window.SD.events` — 39 events, sorted by `ord` (1000–5500), with:
  - `ci[]` (character_impacts): role, action, inner state, growth, claim tag for directly involved chars
  - `df[]` (direction_functions): dir ID, fn (setup/escalation/reveal/climax/payoff/reference), desc
  - `src[]`, `q[]`, `contra[]`
- `window.SD.contradictions` — 8 items (HC-01, DG-01, DG-02, DG-03, IC-02, IC-03, SG-06, BK-E-04)
- `window.SD.sourceFiles` — 9 source file entries

### data/directions_data.js
- `window.SD_DIRS` — 15 directions (DIR-001 to DIR-015), each with:
  - `pool1[]` — 12 angles, each `{a, q, t}` (quality + text)  
  - `pool2[]` — 7 angles (13–19), each `{a, v, r, x?}` (verdict + reason + expanded if RELEVANT)
  - `chars[]`, `events[]`, `summary`, `core_q`, `emotional_center`, `dramatic_fn`
  - `missing[]`, `questions[]`, `contra[]`
- Last line merges into `SD.directions` automatically

---

## REMAINING ❌

### styles.css (next to write)
Target: ~350 lines. Dark theme. Must support:
- CSS vars: `--bg`, `--bg2`, `--bg3`, `--text`, `--text2`, `--accent`, `--border`
- Sidebar nav (fixed left, ~200px) + main content area (flex)
- `.view` for each section (hidden by default, `.view.active` to show)
- `.timeline-event` card with act color coding (I=green, II=yellow, III=orange, IV=red, 前史=gray)
- `.dir-card` with stability badge, pool1/pool2 expandable sections
- `.matrix-table` for event×char and dir×event matrices
- `.char-card`, `.contra-card`
- `.claim-tag` colors: SOURCED=green, INFERRED=yellow, NEEDS_AUTHOR_INPUT=orange, CONFLICTING=red
- `.quality-tag`: strong=green, moderate=yellow, weak=orange, blocked=red, na=gray
- `.verdict-tag`: RELEVANT=teal, NOT_RELEVANT=gray
- `.fn-tag` for direction function types (setup/escalation/reveal/climax/payoff)
- Event detail panel: `.detail-panel` slide-in from right
- Filter bar: `.filter-bar` at top of main content
- Responsive: sidebar collapses on narrow screens

### app.js (write after styles.css)
Target: ~600 lines. Requires both story_data.js + directions_data.js loaded first.

Must implement:
1. **State**: `{view, selectedEvent, selectedDir, selectedChar, filters: {acts, lines, status, search}}`
2. **Router**: hash-based `#timeline`, `#directions`, `#dir-NNN`, `#events`, `#event-ID`, `#characters`, `#char-ID`, `#matrix-ec`, `#matrix-de`, `#contradictions`, `#files`
3. **Timeline View**: render `SD.events` sorted by `ord`, grouped by act (前史/I/II/III/IV), each event as clickable card
4. **Event Detail Panel**: slide-in showing event.ci table + event.df table + sources + questions + contradictions; triggered by clicking timeline card
5. **Direction Board**: 15 direction cards, each with collapsible pool1 (12 angles) + pool2 (7 angles)
6. **Direction Detail**: click card → show full direction with events sorted chronologically
7. **Event×Char Matrix**: compute from `SD.events[].ci` — for each (event, char) cell: derive role or "—". Color cells by role type.
8. **Dir×Event Matrix**: compute from `SD.events[].df` — for each (dir, event) cell: derive fn or "—". Color cells by fn type.
9. **Character View**: for each char, list events where `char.id in event.chars`, show event cards
10. **Contradiction View**: render `SD.contradictions`, grouped by severity
11. **File Trace View**: render `SD.sourceFiles`
12. **Filter bar**: acts (I/II/III/IV/前史), lines (Alpha/Beta/mixed), status (canon/working/unresolved/blocked), text search
13. **Sidebar nav**: highlight active view, expand sub-items

### index.html (write after app.js)
Target: ~80 lines. Must:
- Load scripts in order: `data/story_data.js` → `data/directions_data.js` → `app.js`
- Link `styles.css`
- DOM structure: `#sidebar` + `#main` + `#detail-panel` + `#overlay`
- Call `app.init()` on DOMContentLoaded

### timeline_dashboard_audit.md (write last)
Answer these 10 questions from the source data:
1. How many events are in the timeline database? (39)
2. Which events have `claim: "[NEEDS_AUTHOR_INPUT]"` or `status: "blocked"`?
3. Which directions have `missing_bridges` listed?
4. Which directions reference HC-01 or DG-01?
5. Which events have no `df[]` entries (not linked to any direction)?
6. Which characters appear in the fewest events?
7. What is the most referenced event across all direction functions?
8. Which pool2 angles (13–19) have the most RELEVANT verdicts across all 15 directions?
9. List all `[CONFLICTING]` claims in the event database
10. Which BD (blocked decisions) are still OPEN and which directions/events they block

---

## DATA LOADING ORDER (for index.html)
```html
<script src="data/story_data.js"></script>    <!-- defines window.SD -->
<script src="data/directions_data.js"></script> <!-- defines SD.directions -->
<script src="app.js" defer></script>           <!-- reads SD.* after DOM ready -->
```

## KEY DESIGN DECISIONS (for app.js author)
- Matrices are COMPUTED from `SD.events[].ci` and `SD.events[].df`, NOT stored separately
- Event ordering: always by `event.ord` (integer), never by id string
- Default view: `#timeline`
- Event detail panel: slide-in from right, not modal (so timeline stays visible)
- Pool1 quality color coding: strong=green, moderate=yellow, weak=orange, blocked=red, na=gray
- Pool2 verdict tags: RELEVANT=teal, NOT_RELEVANT=gray (NOT_RELEVANT angles still listed but visually de-emphasized)
- Character impact cells in Event detail: show role + action + inner (3 rows per char)
- Direction×Event matrix: columns = events sorted by ord, rows = DIR-001 to DIR-015
- Event×Char matrix: columns = CHAR-001 to CHAR-010, rows = events sorted by ord
- All claim tags must be visually styled: SOURCED=green, INFERRED=yellow, NEEDS_AUTHOR_INPUT=orange, CONFLICTING=red
