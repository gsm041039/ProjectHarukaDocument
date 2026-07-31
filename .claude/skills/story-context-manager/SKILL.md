# story-context-manager — Context Budget and Persistent Run Memory

## Purpose
管理 context，但唔可以用壓縮作為少做工作嘅理由。

## Mandatory Workspace Rule
STANDARD / MAJOR 任務調用 `story-run-workspace-manager`。當符合任一條件，立即 checkpoint：
- 已讀 3 個以上長文件
- 已調用 4 個以上 skills
- 有 8 個以上 material decisions
- 對話／分鏡超過約 1,500 字
- 預計下一階段可能令早期證據離開 context

## Carry-forward Packet
只帶：
```md
RUN PACKET
Target Contract:
Authoritative Evidence Digest:
Active Character Scene States:
Approved / Provisional Decision IDs:
Open Dependencies:
Current Draft Path:
Next Skill:
```

## Visible Output
使用者要見到 skill trace、重要決策、目標文件進度；唔需要見到全部內部 notes。

## Rule
不可因 context 不足叫使用者重新提供已讀資料。先讀 temp files resume。
