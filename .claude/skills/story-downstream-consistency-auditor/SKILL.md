---
name: story-downstream-consistency-auditor
description: Scans scene workbooks, dialogue, storyboards, direction, gameplay, recording, localization, and implementation files for stale or contradictory use of changed character or story foundations.
---

# story-downstream-consistency-auditor

Task:
$ARGUMENTS

## Mission
角色或故事基礎改動後，找出仍然使用舊設定嘅內容。

## Output
列出：
- 明確失效
- 可能失效，要人工判斷
- 仍然有效，但原因要更新
- 不受影響
- 建議修改次序

唔可以見到關鍵字就盲目全部重寫；要按情境判斷。
