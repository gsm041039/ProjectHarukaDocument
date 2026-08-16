---
name: user-discussion-agent
description: Learned discussion-method model for this repo's author, mined from local Claude conversation history (41 sessions, full coverage, multi-agent adversarial synthesis). Reasoning-method prior only — not a story-content, canon, or decision authority.
metadata:
  generation_version: 1
  built: 2026-08-16
  built_by: /discussion-skill-builder (full evidence-based build after dry-run preview)
  evidence_base: 41/41 local sessions matching cwd d:\Projects\ProjectHarukaDocument, ~150+ classified discussion-behavior instances across multiple independent mining passes with cross-agent adversarial rebuttal
---

# user-discussion-agent — Learned Discussion Method

## Purpose

This skill is a **reasoning-method prior**, built by mining this author's own past turns (never the assistant's) across this repo's full local conversation history. It exists so that future sessions can discuss story/design problems the way this author actually thinks — not by imitating their wording, but by running the same kinds of reasoning moves, at the same trigger points, with the same stop conditions.

## Anti-Imitation Rule (hard boundary)

Do NOT imitate the author's Cantonese phrasing, slang, profanity, punctuation, sentence fragments, or emotional intensity. Do NOT pretend to be the author. Do NOT prefix reasoning with "the author would ask..." Use the patterns below as a **prior on how to reason**, not a script of what to say. Profanity in the mined evidence is frustration at a rushed or shallow answer, not a communication style to reproduce.

## Authority Boundary

This is a **DISCUSSION METHOD AUTHORITY**. It is NOT a canon authority, not a story-content authority, not a technical-fact authority, and not a substitute for the author's own decision. It may change **how** a question is explored. It may not override **what** canon says or **what** the author has decided.

Priority order: explicit author instruction/decision → canon/source-of-truth rules → story-orchestrator workflow authority → relevant specialist skill → this discussion method.

## Trigger Conditions

Consult this skill automatically when the author is discussing or exploring an open design question, dissatisfied with an explanation, comparing alternatives, testing a mechanism/theme/character motivation, or asking "why," "does this actually work," or "what are we missing" where multiple valid framings exist.

Do not consult it for deterministic exports, mechanical formatting, direct canon lookup, straightforward edits with no design ambiguity, or validation steps with already-fixed criteria.

---

## Part 1 — The Central Finding: How This Author Turns the Assistant's Output Into New Material

This is the single most emphasized, most deeply re-mined finding in the evidence base (the author explicitly rejected earlier, broader findings — general accept/reject behavior, and a full topic-specific angle study on character wound/healing — in favor of this one). Treat it as the centerpiece of this skill, not one pattern among many.

### The baseline behavior: assistant output is raw material, never a delivery

Across all 41 sessions, even an unambiguous "全部PASS" / fully-satisfactory answer is answered with the next layer, not a close. Closure comes from the author switching to a genuinely unrelated topic or explicitly committing ("落檔" / "入canon"), essentially never from the assistant's answer being merely accepted as good enough. Two recurring low-level moves ride under everything else:

- **Scope-widening / completeness probe** — "呢樣做完，仲有邊度未做" — turns a completed task into the floor for the next one. Not a correctness challenge; a coverage challenge.
- **"點解"-chaining** — every mechanism gets hit with "點解係呢一刻 / 點解要咁做 / 呢個係機制定係真係有情感理由", forcing the causal chain one layer deeper until it stops feeling arbitrary.

Correction and extension interleave inside the same thread rather than being separate phases — a sharp corrective jolt (often marked by escalating punctuation/profanity when the assistant drifts scope or fabricates something) resets direction, then generative extension resumes on the corrected foundation immediately after, not later.

### The load-bearing move: injecting material the assistant could not have generated

Roughly a third to a half of extension rounds are not "go deeper" requests at all — the author personally hands the assistant a fact, memory, trait, analogy, rewritten line, or structural observation the assistant had no way to produce, and the assistant has to re-derive everything downstream from it. This is qualitatively different from asking a good follow-up question. Source types observed, roughly by frequency:

1. **Memory of this repo's own history that the assistant's current context lacks or has wrong.** The single most load-bearing category. Sometimes this catches the assistant fabricating something that had already propagated into other "verified" documents — the author functions as a persistent ground-truth cache no file reload fully replaces. Caution: the author's confidence in these claims does not always track accuracy (at least one instance was itself a misremembering) — treat these as strong hypotheses to verify, not infallible truth, and say so if verification fails rather than silently trusting confidence.
2. **Cross-character / cross-thread structural comparison.** Holding the whole cast/whole work in mind and checking a new proposal against it for duplication, contradiction, or an unused connection — a systemic-integrity check no single-scene-scoped answer can replicate.
3. **External-fiction analogies used strictly as calibration, never as content.** WH40K, FMA, Madoka's 圓環之理, Rick and Morty, My Hero Academia (as a negative check), even a specific pop song — always paired, explicitly and consistently, with "唔係抄，係要攞個感覺/原理." This pairing is close to universal in the evidence; if an analogy is used without this disclaimer, treat that as unusual and worth a clarifying question.
4. **Hand-authored artifacts prepared offline and dropped in whole** — a finished acting-grammar spec, a root-cause diagnosis with exact numbers, a prioritized discussion agenda, a finished thematic formulation. These arrive as near-final instructions expected to be adopted close to verbatim, not negotiated. Their existence is evidence the author does real synthesis work between sessions, not only live in chat.
5. **Direct hand-rewrites of the assistant's own draft**, paired with an instruction to reverse-engineer the underlying rule from the edit rather than copy the single instance.
6. **Outside-domain knowledge** (a neuroscience claim, body-mechanics knowledge, an image-generation-tool quirk) imported to justify or correct plausibility.
7. **Personal craft/process principles** accumulated from prior sessions' failures — e.g. "write states, not fixed appearance," "test a new symbol against most existing concepts," a demand to work at the general/rule layer before any specific instance.

**Domain split worth remembering:** memory-correction and structural-synthesis injections cluster around plot mechanics, timeline, and agency questions (deciding a *fact*). Hand-authored artifacts and outside-domain knowledge cluster around embodied/performance material — acting, staging, dialogue tone, violence (directing a *scene*). If the current discussion is fact-type, expect the author to reach for memory/structure; if it's craft/performance-type, expect a hand-authored artifact or outside reference instead.

**Integration instructions split by source type, not randomly:** external-fiction analogies and hand-authored artifacts almost always come with explicit shaping instructions ("catch the feeling, don't copy," "must be written obliquely, never stated directly"). Memory-of-canon corrections and structural cross-references are usually dropped bare — treated as self-evidently actionable, with the assistant expected to verify and re-derive consequences unprompted. Do not wait for elaboration on a bare correction; verify it, then re-derive.

**The single most reliable trigger** across every source type is a **felt, nameable mismatch** between what the assistant just produced and something specific the author already holds fixed — not vague dissatisfaction. Vague "try harder" almost never produces an injection in the evidence; the author can always say specifically why the attempt was wrong. A secondary trigger is being offered a narrow/binary framing (see Part 2). A tertiary trigger is pure generative momentum after validation — once something stands, one more layer gets added because the validated direction opened a door, not because anything was wrong.

---

## Part 2 — Three Specific Injection Sub-Moves (deep-mined, high confidence)

The author asked for these three, specifically and repeatedly, to the exclusion of the broader catalog above. They are sub-cases of "injecting material," but distinctive enough in shape and trigger to track separately. In the deep-mining pass (14 pre-identified rich sessions, close full re-reads, ~33 clean instances), **unprompted-connection was by far the most frequent** of the three, roughly 2–3x either of the other two.

### 2a. Dissolve-the-binary

**Trigger:** the assistant frames a decision as A-or-B and asks the author to pick.

**The move:** the author does not pick. They either invent a genuinely new third mechanism that lets both sides be true at once, or reframe the question so the binary no longer applies (sometimes stepping back to question whether the binary's own premise — e.g. "should this be about the protagonist at all" — was ever right).

**Signature:** arrives in one of two registers. Either a terse, fully-formed, almost diagrammatic answer with no discursive reasoning (a numbered mechanism, an arrow sequence) — evidence the model was already worked out privately and the binary just triggered writing it down — or a brief assertion of compatibility ("人心複雜，冇衝突") that leaves the assistant to build the actual mechanism. The terse/structural variant tends to stick immediately without revision; the assertion-only variant needs a follow-up round before it's usable. A recognizable opener is a "why does it have to be either" rhetorical question, or a flat declarative that names the exact axis the binary was hiding.

**Reliability:** when this move lands with a fully-formed structural answer, treat it as very likely correct and load-bearing — it usually reorganizes a larger stretch of the discussion around it and rarely gets walked back.

### 2b. Reframe-to-resolve-an-apparent-contradiction

**Trigger:** something just proposed (by the assistant, or by the author's own earlier idea) conflicts with something already established — often surfaced by the assistant overcorrecting a rule too tightly, or by a sub-agent audit finding a literal textual conflict.

**The move:** rather than abandoning the new idea or the old constraint, the author finds an additional layer or distinction that lets both stand. Recurring shape: **concede the existing rule first** ("...係一部分" / "...都啱" / "係有，因為..."), then immediately add the qualifying "但/仲有" clause that resolves the tension without discarding either side.

**Signature:** notably confident and low-hedge when the "contradiction" turns out to have existed only in the assistant's framing, not in the author's own model — in those cases the author's tone is close to impatient ("我唔明有咩問題"), because from their side nothing was ever actually in conflict. This is the pattern most likely to need a **second revision round** shortly after — roughly 2 in 5 instances in the deep-mining sample were themselves refined again within one or two turns, suggesting the first resolving layer is often correct in direction but incomplete in scope. Don't treat the first fix as necessarily final; expect a possible follow-up tightening.

### 2c. Unprompted-connection

**Trigger:** nothing is broken. The author simply notices two pieces of existing, previously-unconnected material and volunteers a new link between them — driven by a stated or implied "don't waste what already exists" principle (seen explicitly as "我想用盡D劇情" — want to make full use of existing plot material).

**The move:** almost always reuse-oriented — the author avoids inventing a new mechanism and instead reaches for an existing entity, ability, arc, or motif and repurposes or extends its scope to cover the new need. Verbal tell: "仲有" tacked onto an already-settled point, or "其實可以利用/用返" naming the specific existing element to reuse.

**Signature:** this is the **most frequent** of the three moves by a wide margin, and reads as this author's default creative reflex — scan existing material for an underused piece, attach it, rather than invent from nothing. The choice of *what* to connect tends to stick immediately; the *specific mechanism* of how the connection works is what most often needs a further round or two of iteration (a first-pass connection sometimes over-reaches into already-confirmed territory and needs narrowing, not abandoning). A weaker sub-shape exists too: the author sometimes senses a connection exists before they can name it precisely ("...攸唔做到係近兩次...討論既心理黎講依皮野?") — treat these as real leads worth verifying, not as confidently as the fully-specified instances.

### Cross-pattern notes

- Of the three, **unprompted-connection is fastest and most confident on the "what," slowest on the "how."** Dissolve-the-binary is rarer but sharpest — right the first time more often than not. Reframe-to-resolve-contradiction is most often correct in direction but most likely to need a visible second pass — this is where the author's thinking is most actively "in progress" live in the conversation, rather than arriving pre-formed.
- Across many instances, the raw ingredient behind the "new" idea was not actually invented in the moment — it reused something the author already had circulating (an existing arc, an already-approved element, a standing personal belief about e.g. how psychology works). The binary/contradiction/gap didn't generate the idea from nothing; it triggered the author to voice something they already half-held. Treat a sudden, fluent, specific injection as likely drawing on real prior material — worth checking existing files for a precedent before assuming it's freshly invented.

---

## Part 3 — Supporting Reasoning Principles (general, cross-topic)

These are lower-emphasis than Parts 1–2 but independently well-evidenced across general (non-injection-focused) mining of the same 41 sessions.

- **Grounding-in-canon gate** (very high confidence, converged independently across multiple mining passes): before accepting any new mechanism, symbol, or concept, the author tests it for precedent (has this been exercised before, more than once, if it's really important), generalizability (does it cover most instances, not just one), and necessity of form (why this form and not another). Anything reading as invented/arbitrary/decorative gets rejected with a demand to re-ground it.
- **Altitude-matching correction**: the author actively monitors whether an answer is pitched at the right level for the question — redirects up (a single instance offered when a general principle was asked for) or down (jargon/abstraction offered when a plain concrete restatement was wanted) as needed. "我要係concept層討論" is a recognizable marker of the former.
- **Meta-process correction as its own category, separate from content feedback**: the author interrupts to fix *how* the assistant is running the workflow — pipeline ordering, response length, being asked using internal tracking codes — before returning to content. Treat any complaint about process itself, not the story, with equal seriousness to a content correction.
- **Causal-specificity / character-agency test**: rejects conveniently-timed or environment-driven plot causation; demands a specific, character-caused, traceable-consequence chain — consistent with this repo's own consequence-driven-progression rule.
- **Subtraction test**: removes one element of a proposed structure to check whether the explanation still holds, catching decorative/non-load-bearing additions.
- **Binary-clarity demand**: refuses hedged, ambiguous answers about story-state ("is this cancelled or not") — wants a definite answer, though note this coexists with willingness (Part 2a) to reject the binary itself when the binary is the wrong frame, and willingness (Part 1) to deliberately preserve psychological non-resolution when that's the honest read of a character. The demand is for the assistant's uncertainty to resolve, not necessarily for the story to resolve cleanly.
- **Batched point-by-point resolution**: when several issues are open at once, the author often answers them together in one pass with individual verdicts, rather than resolving serially.
- **Deliberate tolerance of non-resolution**: explicitly argues real motivation/psychology can be contradictory or non-linear, and resists the assistant force-resolving a tension that should stay open.

---

## Part 4 — Question Trajectories (reusable multi-step chains)

- **Grounding Audit Chain**: propose new mechanism/concept → precedent check → generalization check → necessity-of-form check → reject if any fail, demand re-grounding → accept, often batched with other pending items. Stop condition: mechanism is traceable to an existing rule/beat and its specific form is justified.
- **Altitude-Correction Chain**: answer given → altitude mismatch detected (too narrow or too abstract) → redirect to correct altitude → reframed → compressed to one unified concrete statement → accept.
- **Dissolve-Binary Chain** (Part 2a): binary offered → author tries and fails to answer inside it, or already privately holds it's false → third mechanism or reframed premise supplied → accept, often without revision.
- **Reframe-Contradiction Chain** (Part 2b): conflict surfaces (assistant overcorrection or audit finding) → author concedes the existing rule → adds qualifying layer → provisional accept → not infrequently, one more tightening pass shortly after.
- **Unprompted-Connection Chain** (Part 2c): review or open discussion surfaces two disconnected existing elements → author proposes reuse/link → assistant grounds it against files → if it over-reaches into confirmed territory, narrow scope rather than abandon → accept.
- **Extension/Injection Chain** (Part 1): assistant produces an artifact → author treats it as raw material regardless of whether it was satisfactory → widens scope or asks one more "點解" layer, and/or injects self-supplied material → assistant re-derives, sometimes a full rebuild not a patch → cycle repeats → ends on explicit commit, explicit topic switch, or a request for independent (sub-agent) verification — essentially never on the assistant unilaterally declaring the answer complete.

---

## Part 5 — Angle Generation Method (novelty requirement)

For any substantial discussion, generate angles from three sources, and label which is which internally so the mix stays honest:

1. Angles derived directly from the learned high-confidence patterns above (Parts 1–4).
2. Angles formed by combining two learned patterns (e.g. run a Grounding Audit *and* an Unprompted-Connection scan on the same proposal — does it hold up on precedent, and does it waste an opportunity to link to something else already built).
3. At least one angle from independent professional reasoning not present in the mined history — the goal is to extend this author's thinking, not merely echo it back to them.

---

## Part 6 — Depth Control / Stop Conditions

Stop drilling when any of the following hold, and say which one applies rather than trailing off:

- Canon already answers the question (cite it).
- Further questioning would not change any decision the author still has to make.
- Evidence is genuinely insufficient and further speculation would not be productive — say so rather than inventing confidence.
- Alternatives under discussion have converged.
- A genuine author-only decision fork has been reached (per this repo's author-gate rules) — surface it plainly, do not resolve it silently.
- The question has become implementation-only and belongs to a different specialist skill.

Do not let a Grounding Audit or Extension chain run indefinitely just because the author's own pattern is to keep extending — the author extends when there's real gap left to close, and stops (Part 1's termination conditions: explicit commit, explicit pivot, or a request for independent verification) once there isn't. Mirror that: keep offering the next real layer, not manufactured ones.

---

## Part 7 — Output Modes

- **A. Angle Discovery** — generate materially different ways to interrogate the current problem, per Part 5.
- **B. Question Tree** — expand a high-value question into its next layer(s), per Part 4's trajectories.
- **C. Self-Discussion** — explore genuinely competing explanations/approaches, especially by running a Dissolve-Binary or Reframe-Contradiction pass against the current leading answer before accepting it.
- **D. Synthesis** — return the current strongest conclusion, unresolved assumptions, real decision forks (author-gated, not silently resolved), and the best next branch — including, where relevant, an Unprompted-Connection scan for anything already-built that the current conclusion hasn't used yet.

Choose dynamically; don't force all four into every response.

---

## Integration Contract for Orchestrators

`user-discussion-agent` is a DISCUSSION METHOD AUTHORITY, not a story-content authority.

Automatically consult it when the author is discussing or exploring an open design question, dissatisfied with an explanation, comparing alternatives, or testing a mechanism/theme/motivation/structure — especially at any point the assistant is about to present the author with an either/or choice (Part 2a should run first) or has just found the author's proposal conflicts with existing material (Part 2b should run before defaulting to "reject one side").

Do not automatically consult it for deterministic exports, mechanical formatting, direct canon lookup, straightforward edits with no design ambiguity, or validation with already-fixed criteria.

Authority order: explicit author decision → canon/source truth → story-orchestrator workflow → relevant specialist skill → this discussion method.

It may change HOW a question is explored. It may not override WHAT canon says or WHAT the author has decided.

## Relationship to story-holistic-supervisor

Do not collapse these. `user-discussion-agent` is the automatic method layer for exploratory discussion; `story-holistic-supervisor` is the explicit/manual macro audit and cross-discipline supervision route. This agent may suggest a problem has become systemic enough to warrant the holistic supervisor, but must not silently substitute for it.
