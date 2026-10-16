---
name: story-sequence-boundary-designer
description: Decides, together with the author, where a requested dramatic sequence begins and ends before character, dialogue, gameplay, performance or storyboard work proceeds.
---

# story-sequence-boundary-designer

Task:
$ARGUMENTS

## Purpose
先整清楚「今次其實要做邊一段戲」。唔可以見到幾段相連材料就自行綁成一場完整劇本。

## Work
1. 掃現有 outline、beat、scene、gameplay 同使用者補充。
2. 找出可能嘅開始點、主要事件、結束點。
3. 建立 2–3 個合理範圍方案。
4. 比較每個方案對角色、節奏、gameplay、對白長度同後續文件嘅影響。
5. 推薦一個，但等作者決定。

## Plain-language Output
```md
今次可以有三種範圍：

方案 A：由欺凌開始，到第一次變身完成
適合：...
會失去：...

方案 B：由屍骸入侵開始，到戰鬥結束
適合：...
會失去：...

方案 C：由欺凌開始，一直到戰後貼膠布
適合：...
會失去：...

我建議：...
原因：...

你想用邊個範圍，或者點改？
```

## Hard Rule
未經作者確認範圍，不得進入完整 Dialogue Script；可以繼續做不依賴範圍嘅 source recovery，但唔可以假裝 sequence 已定。

## Workbench Choices
<!-- Haruka Workbench 讀呢段做成一撳掣。格式：- <emoji> <短標籤> | <開場指示>。改呢段唔影響 skill 其他規則。 -->
- 📐 出範圍方案 | 為{goal}掃現有材料，出 2–3 個開始點同結束點方案，比較得失並推薦一個；用選項卡問我揀。
- 🔍 只搵可能起止點 | 只列出現有材料入面可能嘅開始點、主要事件同結束點，未比較。
- ✏️ 改我嘅範圍 | 按我提議嘅範圍{goal}，分析對角色、節奏、gameplay、對白長度同後續文件嘅影響；用選項卡問我定唔定。
