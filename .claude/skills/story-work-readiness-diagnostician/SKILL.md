---
name: story-work-readiness-diagnostician
description: Scans existing work, identifies which preparation would materially improve the requested deliverable, explains it in plain language, and asks whether to begin before launching the full production route.
---

# story-work-readiness-diagnostician

Task:
$ARGUMENTS

## Purpose
唔係只出 checklist，亦唔係未問就自行做到成品。要先知道現有材料同真正缺口，再問作者係咪開始做有價值嘅前置。

## Required Output
用簡單語言講：
- 已經有咩可以直接使用
- 仲欠咩
- 每樣缺口會點影響最終成果
- 邊啲可以自動做
- 邊啲完成第一版後需要同作者細執

最後問：
```md
我可以而家開始做以上前置。
你想：
A. 我先自動做第一版，再逐項同你細執
B. 我哋由第一項開始逐步一齊做
```

若角色未有完整說話方式文件，要額外指出之後會再畀兩個 Voice Bible 做法選擇。

## Do Not
- 唔好只話「資料不足」。
- 唔好因全劇流程未完成而拒絕。
- 唔好直接跳去寫完整稿。

## Workbench Choices
<!-- Haruka Workbench 讀呢段做成一撳掣。格式：- <emoji> <短標籤> | <開場指示>。改呢段唔影響 skill 其他規則。 -->
- 🔍 診斷欠咩 | 為{goal}掃現有材料，用白話講已經有咩、仲欠咩、每樣點影響成品；最後用選項卡問我自動做一版定逐項一齊做。
- ⚡ 只講可直接用 | 只列出可以直接用嘅現有材料，同邊啲可以自動做。
- 🗣️ 查說話方式文件 | 檢查角色有冇完整說話方式文件；冇就講清，並用選項卡問我用邊種做法建立。
