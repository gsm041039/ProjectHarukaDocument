---
name: story-auto-discussion
description: 自動討論（AI 編劇室）。幾時建議作者交畀幾個 AI 角色自己傾、點樣砌題目／範圍／停止點／依據文件／角色，點樣將討論總結（DRAFT）帶返對話照 gate 決定。用 Haruka Workbench 嘅 tools/workbench/discuss.mjs；設定經 ui:next 嘅 discuss 欄送去網頁，作者撳「開始」先會收費。
---

# story-auto-discussion — 交畀 AI 自己傾

## Purpose
有啲問題作者未有傾向、或者需要幾個角度互相攻擊先睇得清（例如兩三個做法各有代價、跨文件一致性、角色會唔會咁做），呢個時候唔使作者逐句同 AI 拉鋸：砌好一場**自動討論**，幾個只讀嘅 AI 角色喺設定範圍入面傾，獨立主持人每輪判斷停唔停，最後出一份 DRAFT 總結。作者睇總結再喺對話入面照正常 gate 揀。

討論引擎：`tools/workbench/discuss.mjs`（角色只可以 Read/Grep/Glob，唔會改檔）；網頁頁面：「🤖 自動討論」。每場討論會記低每個角色讀過邊份文件（文件詳情「💬 相關對話」同討論頁「📚 討論用咗嘅文件」睇得到）。

## 設定助手（網頁自動行）
作者撳自動討論時，網頁會叫一個只讀 AI（`server.mjs` `planDiscussion`）讀呢份 skill 同連住嘅文件，輸出：`understanding`（白話一兩句「我理解你想傾…」）、`proposals`（2–4 個真係唔同嘅設定：label／why／topic／range／stop／roles／rounds／links）、`ranges`、`stops`（按話題）。作者撳一個方向就填好表，再自己改／開始。所以你寫建議時唔使出齊全部欄位，題目同連住嘅嘢夠清楚就得。

## 幾時建議（任何 skill、任何對話都適用）
建議，當：
- 有 2 個或以上可行方向，作者未表態，而且揀錯代價唔細；
- 需要唔同專業角度互相反駁（劇作／角色心理／玩法／canon 一致性／觀眾知情）；
- 要喺一段範圍（例如某幾個 beat、某條角色線）入面搵漏洞或者壓力測試；
- 作者講「你哋自己傾」「我唔知揀邊個」「幫我睇下有冇漏」。

唔建議，當：
- 只係要查一個事實（直接 source check）；
- 作者已經揀咗方向（照做，唔好再開討論拖慢）；
- 涉及要作者先提供嘅新設定事實（先問作者，唔好叫 AI 估）。

## 點樣建議：`ui:next` 加 `discuss`
喺回應尾嘅 `ui:next` 入面放一個建議，帶 `discuss` 欄。作者撳嗰個掣，網頁會開自動討論設定頁並預填好，**唔會自動開始**（作者睇過範圍、角色、預算先撳開始）。

```ui:next
{"suggestions":[
  {"label":"交畀 AI 傾三個收尾做法","why":"三個做法各有代價，你未有傾向；幾個角色互相攻擊會快啲睇到邊個最穩。大約 US$1–3。",
   "discuss":{
     "topic":"Demo 最尾基地嗰場：合照唔影／影成／影成但有破綻，邊個最好？",
     "range":"只限 Demo Beat 層最尾兩場；唔落對白鏡頭；唔改已批 canon",
     "stop":"有 2–3 個成形候選＋推薦",
     "links":[{"id":"canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V4_1.md","title":"Demo Beat 層（修正版）","file":"canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V4_1.md"},{"id":"CHAR:ayakomoji_misao","title":"綾小路操","file":"canon/03_characters/ayakomoji_misao.md"}],
     "skill":"story-co-design-discussion",
     "roles":["主編劇","角色心理","Canon 守門"]
   }}
]}
```

欄位：
- `topic`：一句白話講要傾咩（**唔准有內部編號**，作者睇得到）。
- `range`：AI 唔可以超出嘅範圍（層級、幕、beat 段、唔改 canon）。可以有編號，因為係畀 AI 睇；但盡量用白話。
- `stop`：去到邊度停（「有 2–3 個成形候選＋推薦」「列晒問題同風險就停」「大家達成共識」「搵到最大嘅漏洞就停」）。
- `links`：討論依據，`id` 用網頁實體 id——文件用 repo 相對路徑；問題／決定用編號；角色用 `CHAR:<檔名>`；beat 用 `BEAT:<檔案>#<beat id>`。最多 12 個，揀真正相關嘅。
- `skill`（可選）：全場跟邊個 skill 嘅方法。
- `roles`（可選）：預設開邊幾個角色，名要同 `tools/workbench/discuss_roles.json` 一樣（而家有：主編劇、角色心理、魔鬼代言人、Canon 守門、玩法設計、第一次玩嘅觀眾）；唔肯定就唔填。

## 預算同 sub-agent 政策
自動討論**唔計入** sub-agent 預算（佢唔係你派嘅 agent，係作者喺網頁自己開、自己控制預算），但建議時一定要講大約幾錢、幾多輪。預設 3 輪、US$5 上限；細問題建議 2 輪＋Sonnet。

## 收到討論總結（「▶ 帶入對話決定」）
- 總結係 **DRAFT**，唔係作者批准；唔可以直接寫 canon、唔可以當已決定。
- 先用白話重講要決定咩（第一段＝結論），再用 AskUserQuestion 問作者揀；候選照 Plain-Language Explanation Rule。
- 作者揀咗之後，照正常 gate 寫入（QUESTION_QUEUE／CANON_DECISION_LOG 等），喺記錄度註明「經自動討論」。
- 作者撳「📝 記入討論紀錄」＝ `discussion.save` intent：寫 `canon/_working/<日期>_<題目>_DISCUSSION_LOG.md`，標 DRAFT。

## Workbench Choices
<!-- Haruka Workbench 讀呢段做成一撳掣。格式：- <emoji> <短標籤> | <開場指示>。 -->
- 🤖 幫我砌一場討論 | 就 {goal} 幫我砌一場自動討論：先讀相關文件，揀好範圍、停止點、依據文件同角色，用 ui:next（帶 discuss 欄）畀我一撳開設定頁；講埋大約幾錢。
- 🔍 搵漏洞 | 為 {goal} 砌一場「搵到最大嘅漏洞就停」嘅自動討論，角色揀 Canon 守門、玩法設計、第一次玩嘅觀眾、魔鬼代言人；用 ui:next 帶 discuss 畀我。
- ⚖️ 比較幾個做法 | 先列出 {goal} 嘅 2–4 個做法（白話），再砌一場「有 2–3 個成形候選＋推薦」嘅討論去比較；用 ui:next 帶 discuss 畀我。
- 📋 處理討論總結 | 讀最近一場自動討論嘅總結（canon/_working/.tmp/workbench/discussions/），用白話講結論，再用選項卡問我揀；唔好直接寫 canon。
