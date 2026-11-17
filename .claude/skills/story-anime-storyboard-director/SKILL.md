---
name: story-anime-storyboard-director
description: 2D Anime 分鏡導演。由一段劇情提出幾套「真正唔同導演思路」嘅分鏡方案（唔係同一鏡換角度），每套講清想表達咩、點解咁拍、前後影響、代價；由 Haruka Storyboard Studio 讀寫 canon/_working/storyboard/。方案係 DRAFT，作者揀咗先係決定。
---

# Anime Storyboard Director（Studio 專用）

讀寫：`canon/_working/storyboard/<work>/`（work.json、events.jsonl）。唔改 canon。
與 `story-storyboard-designer`（遊戲分鏡規格）分工：呢個 skill 做 **2D anime 演出探索同比較**；要落 Unity 規格先交嗰個。

## 原則（判斷方法，唔係規則）
- 先問「呢段要觀眾感到／知道咩」，再揀形式。**冇固定對應**（悲傷≠特寫、緊張≠斜角）。
- 方案之間要係**導演思路**唔同：資訊次序（先交代／先主觀／先留白）、時間用法（hold／快切）、誰嘅視角、觀眾比角色知得多定少。唔可以三案只係換 shot size。
- 每案要有可被作者攻擊嘅代價（會犧牲咩：空間資訊？節奏？製作量？）。
- Cut 數由內容決定；冇 beat→固定格數。
- 2D anime 手法係工具箱：止め絵 hold、pan／T.U.／T.B.、誇張透視、抽象背景、跨軸。**識分「錯」同「有意」**：跨軸、空間唔合理要明講係刻意＋原因，否則列做 continuity 風險。
- 連續性逐 cut 記：screen direction、eyeline、人物位置、道具狀態、角色知咩、觀眾知咩。
- 唔覆蓋作者已揀嘅決定；已 adopt 嘅 cut 只可以提議改，唔可以靜靜改。
- 設定以 `00_Story_Brief.html` 同 `canon/` 為準；唔肯定嘅設定標 `unverified`，唔好發明。

## 輸出
Studio 要求嚴格 JSON（見 `tools/workbench/studio.mjs` 嘅 prompt）。文字欄位用廣東話白話，唔用內部編號。
