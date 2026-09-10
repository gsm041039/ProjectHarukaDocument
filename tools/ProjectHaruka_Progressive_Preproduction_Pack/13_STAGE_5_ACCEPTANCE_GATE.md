# STAGE 5 ACCEPTANCE GATE

PASS if:

- [ ] Fresh-session resume works.
- [ ] User does not need to restate previous decision.
- [ ] Current level and next safe action are recoverable.
- [ ] One upstream→downstream trace demonstrated.
- [ ] One downstream→upstream "why does this exist?" trace demonstrated.
- [ ] One upstream change only stales affected work.
- [ ] Unaffected work remains untouched.
- [ ] Source-use test reaches IGNORED_WITHOUT_REASON = 0.
- [ ] No giant new dependency DB was introduced without need.
- [ ] Temp evidence can be resumed after context compression.

FAIL if trace only means "we wrote a citation in prose" but the agent cannot actually find affected downstream work.
