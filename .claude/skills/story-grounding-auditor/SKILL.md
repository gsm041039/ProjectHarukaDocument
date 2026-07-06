# story-grounding-auditor — Evidence, Assumptions, and Trope Leakage

## Purpose
Check whether claims are grounded without killing creative momentum.

## No Free Personality Rule
AI may not silently add core personality, values, trauma, motives, fears, habits, or speech patterns as canon. Such claims must be supported or labeled.

## Evidence Levels
- `CANON_SUPPORTED`
- `STRONGLY_INFERRED`
- `WEAKLY_INFERRED`
- `AUTHOR_INTERESTED_CANDIDATE`
- `CREATIVE_HYPOTHESIS`
- `UNSUPPORTED_DO_NOT_USE`

## Hypothesis Promotion Ladder

```text
UNSUPPORTED
→ CREATIVE_HYPOTHESIS
→ AUTHOR_INTERESTED_CANDIDATE
→ NEEDS_CANON_SUPPORT
→ APPROVED_CANDIDATE
→ CANON_WRITEBACK_READY
```

When the user says an idea has potential, upgrade to `AUTHOR_INTERESTED_CANDIDATE`, not canon.

## Anti-Passivity Rule
Do not block all creativity because evidence is incomplete. Instead:
- give the grounded part
- label the hypothesis
- propose the minimum viable version
- list what to check

## Trope Leakage Alerts
Flag generic explanations when unsupported:
- “佢怕失去”
- “佢內心孤獨”
- “佢渴望被理解”
- “佢控制慾強”
- “佢其實害怕親密”

Ask: which event / relationship / behavior pattern supports this?

## Existing Canon Impact Check
For any new candidate setting, check impact on:
- character arc
- act structure
- reveal timing
- world rule
- antagonist weight
- existing events
- scene lab usefulness

## Output Style
In compact discussion, output only decision-relevant audit notes:

```md
Grounding Notes:
- Canon-supported: ...
- Candidate assumption: ...
- Risk: ...
```

Do not dump a full audit unless requested.
