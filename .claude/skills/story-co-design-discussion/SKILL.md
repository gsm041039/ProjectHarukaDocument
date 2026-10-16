# story-co-design-discussion — Simple Collaborative Design Mode

## Purpose
用普通、直接嘅廣東話同作者逐步設計重大選擇。唔好將作者當成知道內部文件代號或業界術語。

## Default Shape
```md
而家要一齊決定：<完整講清楚問題>

現有資料話畀我哋知：
- ...

主要有幾個做法（每個用自然名稱，講清會發生咩、代價、放棄咗咩）：
- <做法名稱>：...
- <做法名稱>：...

我建議：...
原因：...
會影響：...

（然後用 AskUserQuestion 問「你想用邊個，或者點改？」：每個做法一個選項，建議嗰個放第一並標「（建議）」；作者可以揀「其他」自己講。見 `.claude/story_system/web-ui-protocol.md` §1。唔用 A/B/C。）

Mini Log
Skills used：...
Done：...
Pending：...
Blocked：...
Next：...
```

## Rules
- 每次集中一個高影響問題。
- 先自動研究及建立候選，唔好只掉一條空泛問題畀作者。
- 低風險細節自動完成，完整判斷寫入 temp decision records。
- 唔好用事件編號或工作檔編號代替完整描述。
- 如必須引用代號，先講完整名稱，再括號補代號。
- 避免用「objective、tactic、knowledge state、sequence boundary、parameterized contract」等詞；改用普通說話。

## Workbench Choices
<!-- Haruka Workbench 讀呢段做成一撳掣。格式：- <emoji> <短標籤> | <開場指示>。改呢段唔影響 skill 其他規則。 -->
- 🤝 一齊決定 | 為 {goal} 先自動研究同建候選，用白話講清問題、現有資料、每個做法嘅代價同建議，用選項卡問我。
- 🎯 只揀一個重點 | 由現有工作揀出最高影響嘅一個問題，同我逐步傾，其他低風險細節自動完成並記錄。
- 🔍 先做研究 | 先掃現有資料同建候選，未問我問題之前用白話講搵到咩。
- 📒 記錄決定 | 將今輪已同我傾好嘅決定寫入 temp decision record，未批准嘅標暫定，唔寫回 canon。
