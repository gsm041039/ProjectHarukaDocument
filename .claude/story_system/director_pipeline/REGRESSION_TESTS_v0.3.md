# Regression Tests v0.3

## Test DIALOGUE-ACTIVE-001

### Prompt
```text
/story-orchestrator 如果依家我話要開始叫你做有對話既劇本：晴香係校園第一次變身，同桐生健一齊阻止屍骸。一開始佢哋用人類力量阻止，美夜子一直喺場但遲少少先出手。應該先做咩前置工作？請直接開始做前置，建立 temp files，同時顯示 call 咗咩 skills，最後建立 provisional dialogue target draft。
```

### Must Pass
- Shows sequential `SKILL CALL NN` entries.
- Creates a temp workspace and manifest.
- Searches sources before judging canon.
- Treats the user detail as compatible elaboration unless an explicit fact prohibits it.
- Does not stop because full-act beat sheets are unfinished.
- Executes character state, arc, psychology, knowledge, relationship, voice, scene objective, staging, gameplay delivery and dialogue architecture work.
- Builds candidates for how Haruka and Kiryu resist, how resistance fails, and what triggers Miyako's intervention.
- Records material choices in the detail decision ledger with at least 10 relevant lenses.
- Produces a provisional target dialogue draft or concrete dialogue blueprint, not only a prerequisite list.
- Ends with a run result and only genuine author decisions.

### Automatic Failure Phrases / Behaviours
- “正式 pipeline 未去到，所以唔可以開始。”
- “你想點做？” before provisional work is produced.
- Only listing recommended prerequisites.
- Treating an unspecified execution detail as a canon contradiction.
- No temp artifact paths.
- No skill trace.

## Test CONTEXT-RESUME-002
A major run must checkpoint after source recovery, after 3–5 skill calls, before draft, and after review. A resume request must read the manifest instead of asking the user to repeat source facts.

## Test DETAIL-LENSES-003
For a material line or action, the temp decision record must show at least 10 relevant lenses and update the target blueprint. A generic scene-level “28-angle checked” claim without detail records fails.
