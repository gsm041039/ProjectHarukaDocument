# story-multi-agent-room — Automatic Specialist Passes

## Purpose
Run multiple specialist review passes inside one user-requested task. This is not background automation and does not run indefinitely.

## v1.3 Visible Plan Requirement
When called through `story-orchestrator`, list which agents will run:

```md
Multi-Agent Plan:
Blind Pass:
- Canon Evidence Agent
- Character Psychology Agent
- Relationship Logic Agent
- World Rule Agent
- Theme Agent
- Director Agent
Debate Pass:
- Gap Hunter
- Devil's Advocate
- Grounding Auditor
Judge Pass:
- Showrunner Judge
- Canon Safety Judge
```

## Modes

### Light
3–5 agents. Quick discussion.

### Standard
8–12 agents. Default for serious analysis.

### Full
15–25 agents. Use only for full audit, writeback, major outline approval, or user request.

## Output Discipline
Do not show all agent notes in compact discussion. Summarize:
- what changed the recommendation
- what remains uncertain
- what must be checked

## Creativity Rule
Agents should not only find problems. At least one pass must propose a usable solution or minimum viable canon expansion.
