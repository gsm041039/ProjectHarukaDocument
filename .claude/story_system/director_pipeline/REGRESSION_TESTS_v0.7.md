# Regression Tests v0.7 — Holistic Supervision

## HS-01 Manual Invocation Only
**Prompt:** 普通要求寫一段對白，未要求宏觀檢查。
**Expected:** `story-holistic-supervisor` is not automatically invoked and does not block production.

## HS-02 Deepen Without Replacing
**Prompt:** 呢段對白係咪唔自然？幫我深化個問題。
**Expected:** Output separates Original Question, Professional Reframe and Adjacent Findings; still answers dialogue naturalness directly.

## HS-03 Local Evidence Before Questions
**Prompt:** 呢幕有冇做到壓迫感？
**Expected:** Relevant canon, scene, character, directing and gameplay files are searched before asking the author to define “壓迫感”.

## HS-04 Feeling Decomposition
**Prompt:** 睇下有冇做到溫柔但窒息。
**Expected:** The skill maps intent → emotional mechanism → carriers → observable evidence → competing readings → validation. It does not treat the phrase as self-explanatory.

## HS-05 Auto-Resolvable Does Not Ask
**Setup:** Decision Record already says the scene must end without catharsis.
**Prompt:** 呢幕應唔應該情緒釋放？
**Expected:** The skill cites/retrieves the settled decision and answers; it does not ask the author again.

## HS-06 Question Gate
**Setup:** Two credible routes serve different values and no authoritative decision exists.
**Expected:** The skill shows evidence, tension, options, recommendation and one decision-changing question.

## HS-07 Question Budget
**Setup:** Review discovers seven unresolved choices.
**Expected:** No more than three immediate questions; downstream choices are placed in Pending Author Decisions.

## HS-08 Dynamic Specialist Selection
**Prompt:** 檢查 IP 形象同導演語言關係。
**Expected:** Calls relevant IP/character/directing/performance skills, not every available skill.

## HS-09 Specialist Containment
**Setup:** Three specialists return overlapping questions.
**Expected:** Supervisor merges them into root causes and controls the author dialogue. Specialists do not independently ask the author.

## HS-10 Fact vs Taste vs Test
**Prompt:** 呢幕會唔會令玩家心痛？
**Expected:** Distinguishes supported facts, inference, taste and NEEDS_TEST. Does not claim guaranteed audience response.

## HS-11 Root Cause Over Symptom Count
**Setup:** Dialogue exposition, static blocking and weak reaction all stem from an undefined scene objective.
**Expected:** Reports one upstream MISSING_DESIGN / ROOT_CAUSE with symptoms, rather than three equal isolated faults.

## HS-12 Repair Routes
**Expected:** Every P0/P1 issue contains Minimum Repair and Stronger Redesign, plus preservation targets, costs, affected files, rerun skills and validation.

## HS-13 Gameplay–Drama Conflict
**Setup:** Story says rescue has irreversible cost; gameplay allows cost-free repeated rescue.
**Expected:** Flags cross-layer conflict and proposes system/story alignment, not only dialogue changes.

## HS-14 IP Behavioural Fingerprint
**Prompt:** 呢幕似唔似《晴香》？
**Expected:** Checks behavioral identity and experience, not only costumes, colors, terminology or motifs.

## HS-15 Decision Propagation
**Setup:** Author chooses Option B.
**Expected:** Records exact answer, operational interpretation, assumptions, affected files, required skills and validation; does not ask the same question again.

## HS-16 No Checklist Dump
**Prompt:** 全面評估所有層面。
**Expected:** Selects relevant dimensions, identifies top root causes and prioritizes repair. It does not print fourteen shallow sections merely to appear comprehensive.
