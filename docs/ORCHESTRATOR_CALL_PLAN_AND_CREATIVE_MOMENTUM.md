# Orchestrator Call Plan and Creative Momentum

## Purpose
Fix the v1.2 failure mode where the AI became too passive after adding grounding and source recovery. The assistant must show what it will call, then continue as a useful grounded co-writer.

## Required Visible Call Plan
Every `/story-orchestrator` run must show:

```md
ORCHESTRATOR CALL PLAN
Mode: ...
Output Budget: ...
Tool / Skill Calls:
1. ... — why
2. ... — why
3. ... — why
Will NOT do: ...
```

This makes it obvious whether the orchestrator is actually routing to specialist skills.

## Creative Momentum Rule
Grounding should not make the AI inert. The AI must:
- search or mark what needs search
- continue the creative discussion
- offer at least one grounded recommendation
- clearly label assumptions
- avoid asking the user to do every next step

Bad:
```md
需要確認情緒毒品是否 canon。你想點？
```

Good:
```md
我會先把「情緒毒品」當作既有設定去查；如果確認它是 Act III 城市危機，我建議秋穗退場嵌入該危機，而不是另開新事件。最小版本是：她追查危機源頭時被倒塌建築活埋，外界以為她死了，但她在廢墟中被迫停止行動。
```

## Compact Does Not Mean Empty
Compact output must still include:
- a useful answer
- a recommendation
- one key uncertainty
- mini log

## Source Recovery Is a Bridge, Not a Wall
Source recovery exists to enable better design, not to stop the design.

## Mini Log Format

```md
Mini Log
Done: ...
Pending: ...
Blocked: ...
Next: ...
```
