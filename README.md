# ProjectHaruka_GroundedWorkflow_v1

呢個包係一套「Grounded Writers’ Room + Director Room」workflow / skill spec，用嚟補強現有 Project Haruka `.agents/skills` 同 `canon/_working` 流程。

## 核心目的
- 你唔需要自己揀十幾個 skill；`story-orchestrator` 會自動揀。
- 每次任務有 run log + checklist。
- AI 要主動搵未完成 / blocked / missing support。
- AI 可以創作，但要 evidence level / hypothesis sandbox。
- 防止 AI 無根據幻想角色性格、動機、背景。
- 補回導演層、對白層、scene lab、coverage/table-read。
- 沿用現有 working files，不開平行 working state。

## 文件結構
```text
.agents/skills/
  story-orchestrator/SKILL.md
  story-router/SKILL.md
  story-multi-agent-room/SKILL.md
  story-room/SKILL.md
  story-canon/SKILL.md
  story-atom-gate/SKILL.md
  story-writeback/SKILL.md
  story-resume/SKILL.md
  story-grounding-auditor/SKILL.md
  story-motivation-grounding/SKILL.md
  story-director-room/SKILL.md
  story-dialogue-room/SKILL.md
  story-micro-insert-hunter/SKILL.md
  story-scene-lab/SKILL.md
  story-coverage-table-read/SKILL.md

docs/
  GLOBAL_GROUNDED_WORKFLOW_RULES.md
  24_ANGLE_SUPPORT_CHECKLIST.md
  SIMPLE_USER_GUIDE.md
```

## Existing working files expected
```text
canon/_working/PROJECT_STATUS.md
canon/_working/NEXT_ACTION.md
canon/_working/QUESTION_QUEUE.md
canon/_working/SESSION_LEDGER.md
canon/_working/CANON_DECISION_LOG.md
canon/_working/READ_MANIFEST.md
canon/_working/story_construction/QUESTION_MATRIX.md
```

## Suggested install
1. Copy `.agents/skills/*` into your repo `.agents/skills/`.
2. Copy `docs/*` into a docs/workflow/spec folder, or keep as reference.
3. Keep `.claude/skills` in sync if that is your canonical skill source.
4. Do not replace canon files automatically; review skill diffs first.

## Day-to-day entry
Use `story-orchestrator` as the default entry.

Example:
```text
幫我審美夜子喺呢個事件入面點解咁做，根據現有內容，唔好無根據幻想，Standard mode。
```

Example:
```text
用 Scene Lab 做呢個小章節，experimental only，不可 writeback。
```
