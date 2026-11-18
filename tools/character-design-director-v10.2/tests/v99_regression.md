# v9.9 Regression tests — enforce *visible design proof*, not just prose

1. Old v9.8 text-only sample: **FAIL** (version and absent proof/design map).
2. Correct v9.9 sample with actual A/B comparison SVGs: **PASS structural checks**, not aesthetic certification.
3. Candidate missing proof file: **FAIL**.
4. Proof path exists but blank/minimal SVG: **FAIL**.
5. Proof files A and B identical byte-for-byte: **FAIL** (must show independent proposals).
6. `proportion`, `silhouette`, `palette`, `wearing`, `appeal`, `anime_detail` any missing before/after/why: **FAIL**.
7. Candidate marked SELECT with blocker / absent substantive design-axis change: **FAIL**.
8. Render after precommit is locked; changing either JSON or proof image breaks `verify`: **FAIL**.
9. Explicit `KEEP ORIGINAL` with documented candidates is supported, without falsely passing a redesign.
10. Test example does not constitute evidence a new candidate is aesthetically superior. Visual sketches use hypothetical shapes only.

**Additional human creative review required before render:** Read same-scale drawings without captions. If no notable *useful* difference or proposed improvement harms a stronger baseline trait, veto concept, even if script passes.

11. Generic sample proof files **cannot** be reused to authorize a real-character render; only schema fixture mode permits them.
