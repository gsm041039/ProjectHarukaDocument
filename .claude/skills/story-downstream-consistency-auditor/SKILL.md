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

## Workbench Choices
<!-- Haruka Workbench 讀呢段做成一撳掣。格式：- <emoji> <短標籤> | <開場指示>。改呢段唔影響 skill 其他規則。 -->
- 🔍 掃晒受影響檔 | 就{goal}呢個改動，掃 scene、對白、分鏡、導演、gameplay 等下游檔，分出明確失效、可能失效、仍有效但理由要更新、不受影響四類；只出報告，唔改任何檔。
- ⚠️ 只列明確失效 | 只列出仲用緊舊設定、肯定已經失效嘅下游內容同位置，唔做修改。
- 🤔 列要我判斷嘅 | 列出可能失效但要按情境判斷嘅位，每個講清點解唔肯定；最後用選項卡問我逐個點處理。
- 📋 出修改次序 | 根據掃描結果建議修改先後次序同理由，只係建議，唔郁任何檔。
