# 13 — Continue-by-Default Audit

| Beat | Author decision needed? | Did workflow stop? | Correct behavior? |
|---|---|---|---|
| Beat 0 | NO | continued | YES |
| Beat 0c | NO (one micro-choice resolved via existing constraint, not asked) | continued | YES |
| Beat 0d | NO (one observation flagged, not a stop) | continued | YES |
| Beat 1 | NO | pilot range complete — stopped because the requested range ended | YES (this is a legitimate "range complete" stop, not a "continue?" stop) |

## Explicit check: did the workflow ever ask any of the forbidden questions?
- "想唔想我繼續下一 Beat？" — **not asked**
- "要唔要先睇下 Beat 0？" — **not asked**
- "呢個 OK 嗎，可以繼續嗎？" — **not asked**

## Pattern observed
`complete Beat → obligation/grain check → no AUTHOR_DECISION → continue` held for all 4 beats without interruption. The only two candidate stopping points found (0c's arm/eye micro-choice, 0d's ordering oddity) were both resolved or logged as observations without pausing the pilot, per the patched Continue-by-Default rule.

## Verdict
**PASS.** Matches the exact expected chronological pattern from task §27:
```
Beat 0   → NO → continued
Beat 0c  → NO → continued
Beat 0d  → NO → continued
Beat 1   → NO real decision → range complete, stopped for that reason only
```
