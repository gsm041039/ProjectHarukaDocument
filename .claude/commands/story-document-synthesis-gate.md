---
name: story-document-synthesis-gate
description: Reading-first synthesis gate before creating, rebuilding, patching, or updating any Project Haruka story document. Ensures source coverage, canon hierarchy, prerequisite concepts, and claim evidence are verified before writing.
argument-hint: <target file | STORY_BRIEF_UPDATE | FULL_STORY_OUTLINE_REBUILD | DRAFT_AUDIT | patch proposal>
---

Use story-document-synthesis-gate v3.

Task:
$ARGUMENTS

First perform the Reading Logic Gate:
1. Identify target document type
2. Build prerequisite knowledge map
3. State reading order
4. Build source coverage ledger
5. Build claim ledger
6. Run no-invention checklist
7. Run reading comprehension check

Do not write final prose unless the gate passes.

Do not invent new characters, systems, diseases, artifacts, mentors, world rules, or bridge events.
Do not use TEMP / backup / draft files as final truth.
If a transition or concept is not sourced, mark SOURCE NEEDED or AUTHOR GATE.
Preserve Project Haruka canon terms exactly.

---

Full skill instructions are in `.claude/skills/story-document-synthesis-gate/SKILL.md`.
Read and follow all rules defined there before producing any output.
