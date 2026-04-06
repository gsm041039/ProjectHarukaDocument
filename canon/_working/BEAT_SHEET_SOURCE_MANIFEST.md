# BEAT SHEET SOURCE MANIFEST
**用途：** 任何 Beat Sheet 或 Outline 設計工作開始前，必須讀完本 manifest 所列文件。
**規則：** 唔可以靠現有 Outline 或 CDL 單獨設計 beat / 更新 Outline——Outline 只係結構骨架，Beat Sheet 同 Outline 更新都需要世界觀、角色習慣、詳細場景庫全部到位。
**對應 skill 規則：** story-room skill（Beat Sheet模式）+ story-canon skill（Outline建立/更新模式）均已引用本 manifest。

---

## 第一層：每次 Beat Sheet 工作必讀（Universal）

| 文件 | 路徑 | 用途 |
|---|---|---|
| ACT_I_OUTLINE.md | `canon/_working/story_construction/ACT_I_OUTLINE.md` | 主結構骨架、已確認 beats |
| CANON_DECISION_LOG.md | `canon/_working/CANON_DECISION_LOG.md` | 所有已確認決定（CDL） |
| PROJECT_STATUS.md | `canon/_working/PROJECT_STATUS.md` | 當前 blockers / deferred |
| QUESTION_QUEUE.md | `canon/_working/QUESTION_QUEUE.md` | 阻塞問題狀態 |
| **完整故事大綱（原始）** | `backup/draft/outline_raw.md` | 開場結構、場景邏輯、完整弧線設計 |
| **詳細場景庫** | `backup/draft/scenes/05_detailed_scenes.md` | 所有已有詳細場景描述（對話/動作） |
| **時間線（原始）** | `backup/draft/timeline_raw.md` | 所有事件時序、角色登場時機 |
| **世界觀設定（完整）** | `backup/screenwriter/03_Worldview_Setting.md` | 城市外觀、帝國設定、場景氣氛底層 |
| **所有角色習慣/感官** | `backup/screenwriter/09_Character_Senses_Private_Habits_Setting.md` | 各角色日常行為、出門習慣、感官細節 |
| **事件關係分析** | `backup/director/Major_Events_Character_Relationships_Analysis.md` | 每個重大事件的角色感受/關係變化分析 |
| **遊戲設計核心** | `backup/gameplay/00_Core_Gameplay_Design_Document.md` | 遊戲開場結構、Act I 關卡設計意圖 |
| 遊戲 bible | `canon/10_gameplay_bible.md` | Act I 遊戲機制、UI設計、玩家體驗框架 |

---

## 第二層：依出場角色決定必讀（Per-Character）

設計某個 beat 前，確認該 beat 有哪些角色出場，對應角色 canon sheet 必讀：

| 角色 | Canon Sheet 路徑 | 關鍵內容 |
|---|---|---|
| 晴香 | `canon/03_characters/haruka.md` | 幽靈重量症狀、出門前行為、情緒增幅器觸發條件、膠布習慣 |
| 美夜子 | `canon/03_characters/miyako.md` | 貓形態機制、靈魂錨點設計、Act I 行為原則 |
| 彩 / 黑奏 | `canon/03_characters/aya.md` | 熊公仔出門確認儀式、接管觸發條件、CDL-082行為模式 |
| 秋穗 | `canon/03_characters/akiho.md` | 家中存在感、暗中守護方式、破綻設計 |
| 朱音 | `canon/03_characters/akane.md` | 戒斷症狀行為、戰鬥模式、入隊前「搶怪黨」行為 |
| 操 | `canon/03_characters/ayakomoji_misao.md` | 出門整儀習慣、傲嬌入隊設計、紗夜關係 |
| 桐生健 | CDL-087/088/100 + `backup/director/Major_Events_Character_Relationships_Analysis.md` | 欺凌者→幫助者弧線、膠布哲學第一層 |
| 夕 | `canon/03_characters/yu.md` | 噪訊呈現形式、Act I 早期症狀強度 |

---

## 第三層：依 Beat 內容決定必讀（Beat-Specific）

| Beat 類型 | 必須額外讀 |
|---|---|
| **開場（家中/出門）** | haruka.md 幽靈重量段落；akiho.md 家中存在感；03_Worldview_Setting.md 城市段落 |
| **世界觀建立（街道/城市）** | 03_Worldview_Setting.md 維多利亞城節；canon/06_visual_bible.md 城市視覺設計 |
| **角色初登場** | 對應角色 canon sheet 全文；timeline_raw.md 登場時機段落 |
| **戰鬥場景** | 10_gameplay_bible.md 戰鬥UI段落；CDL-108（美夜子貓形態）；CDL-073（Reality Show UI） |
| **[NC] 日常場景** | 09_Character_Senses_Private_Habits_Setting.md 相關角色習慣 |
| **世界機制展示** | 01_world_rules_and_costs.md 對應機制段落 |
| **膠布哲學場景** | backup/draft/scenes/05_detailed_scenes.md 膠布哲學 section；CDL-070/088 |
| **[SQ-A] 桐生健場景** | Major_Events_Character_Relationships_Analysis.md 事件一；CDL-087/088/100/113 |

---

## 讀完 manifest 後的強制 checklist

在任何 beat 設計輸出之前，必須過以下問題：

- [ ] 呢個 beat 有冇「開場/出門」元素？→ 讀 haruka.md + akiho.md + 世界觀設定
- [ ] 呢個 beat 有冇世界觀建立需要？→ 讀 03_Worldview_Setting.md
- [ ] 出場每個角色的當日習慣/行為有冇 source？→ 讀 09_Character_Senses_Private_Habits_Setting.md
- [ ] 呢個 beat 有冇詳細場景已係 backup/draft/scenes 入面存在？→ 先讀，唔好重新發明
- [ ] 時間線有冇說明呢個 beat 的角色出場時機？→ 讀 timeline_raw.md 對應時期
- [ ] 遊戲呈現（UI/關卡/機制）有冇特殊要求？→ 讀 gameplay 文件
- [ ] 呢個 beat 係咪係某角色「第一次出場」？→ 讀 Major_Events 分析對應事件

---

## 已知遺漏記錄（Round 017 發現）

| 遺漏項目 | 後果 | 補救狀態 |
|---|---|---|
| 晴香家中出門場景 | E-01 Beat Sheet 缺少最基本開場 | ⬜ 待補設計 |
| 世界觀開場（維多利亞城街道）| E-01 開場缺世界感建立 | ⬜ 待補設計 |
| 彩登場時機（欺凌場景觸發點）| 初版 Beat Sheet 漏掉欺凌場景 | ✅ 已補入 v0.2 |
| 維多利亞天使/直播前置 | 初版 Beat Sheet 缺少世界常態建立 | ✅ 已補入 v0.2 |

---

**Last Updated:** 2026-04-06（Round 017）
