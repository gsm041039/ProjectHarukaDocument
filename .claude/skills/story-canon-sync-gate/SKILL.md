/story-canon-sync-gate

Mode: CANON_FRESHNESS_ARBITRATION_WITH_AUTHOR_GATE

Task:
Compare the files, record freshness and authority, extract claims, and decide which claims are current fact.

Rules:
- Do not assume canon is always correct.
- Do not assume newer files are always correct.
- Decide truth by freshness + authority + CDL support + claim consistency.
- If the conflict cannot be safely resolved, trigger AUTHOR_GATE and ask me.
- Do not invent or silently merge.
- Do not rewrite final prose yet.

First produce:
1. Source Freshness Ledger
2. File Authority Ranking
3. Claim-by-Claim Truth Table
4. Outdated Canon List
5. Promotion Candidates
6. Reverse Update Candidates
7. Unsupported New Claims
8. AUTHOR_GATE Questions
9. Recommended Writeback Order

AUTHOR_GATE must trigger for:
- character backstory conflicts
- Alpha/Beta logic conflicts
- timeline / death order conflicts
- Act structure conflicts
- ending meaning conflicts
- theme meaning conflicts
- two active working files disagree
- newer claim has no CDL support
- AI is not sure which source wins

When asking AUTHOR_GATE questions, use:
Question ID:
Conflict:
Source A says:
Source B says:
Why AI cannot decide:
Options:
A)
B)
C)
D)
Recommended option:
Risk:
Author decision: