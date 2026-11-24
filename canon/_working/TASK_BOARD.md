# TASK_BOARD

並行 task 清單（durable state file #6，見 `.claude/story_system/state-files.md`）。Haruka Workbench 嘅 Task board／今日面板直接讀呢個表。
規則：開 task、轉狀態、完成 task 嗰一刻就更新；狀態只用 `進行中`／`等作者`／`暫停`／`完成`。完成超過 14 日嘅行可以搬去 `## Archive`。
「屬於」＝呢件工作喺工作樹邊度（例：`Demo 試點・場景設計`、`Act I`），由 `story-work-flow` 填、作者批；步驟計劃喺 `canon/_working/tasks/<ID>.md`。
NEXT_ACTION 仍然係「唯一單一步」；呢度係「而家有幾多條線同時開緊」。

## Tasks

| ID | Task | 狀態 | Session | 相關文件 | 等作者？ | 更新日期 | 屬於 |
|---|---|---|---|---|---|---|---|
| T-001 | Demo Beat 層：由粗到幼重做（逐 beat 用 10 幾個角度；舊版全部留做參考） | 等作者 | — | `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V4_1.md`、`canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V5_BATCH6_M2toM5.md` | YES | 2026-10-31 | Demo 試點・Beat 層 |
| T-002 | 紫音 voice discovery workshop＋表演文件（demo 新角色；Stage 5；微場景齊，auditor 已跑，夠用版達成暫定） | 完成 | — | `canon/_working/character-voice-workshops/shion_voice_discovery.md`、`canon/_working/character-performance-bibles/shion.md` | NO | 2026-10-17 | Demo 試點・人物底 |
| T-003 | Haruka Workbench（網頁工作環境）建立 | 完成 | — | `tools/workbench/server.mjs`、`.claude/story_system/web-ui-protocol.md` | NO | 2026-10-15 | 工具 |
| T-004 | Workbench「今日」頁加咩資訊（傾方向，唔改 code） | 進行中 | — | `tools/workbench/public/views/today.js` | YES | 2026-10-15 | 工具 |
| T-005 | 操×無名男孩「自然感」方向（已揀，DRAFT）＋非講出嚟載體人物層討論（DRAFT；已拉返正題：警戒對比自然＋世界日常溫柔；速寫簿撞位降支線）；待補男孩自身細節 | 等作者 | — | `canon/03_characters/ayakomoji_misao.md`、`canon/_working/story_construction/MISAO_NAMELESS_BOY_CARRIERS_DRAFT.md`、`canon/_working/QUESTION_QUEUE.md` | YES | 2026-11-20 | Act I |
| T-006 | 隊員對晴香創世者身份嘅反應（美夜子＋紫音早知、價值觀衝突；DRAFT，未入 canon） | 等作者 | — | `canon/_working/story_construction/TEAMMATE_FORGIVENESS_CREATOR_DRAFT.md` | YES | 2026-10-18 | 全作（跨幕） |
| T-007 | 新 setting：夕變貓（朔養住，「異世界行者」，有 Alpha 記憶，朔想利用佢搵美夜子真相；朔前期似壞人）創作草稿；已揀同一個體＋壓抑讀數＋揾朔做外面嘅手，「夕代食祝福」只作解讀；已揀：貓借朔入返晴香（直播奪控＝入體）、光幕＋壓抑做鎖、貓入體後消失、貓唔主動搵晴香（草稿 §3.12–3.18）；已揀 X（夕 Act I 全程體外，幕末改接觸；草稿 §3.22）；已採：夕居集體潛意識、貓＝壓抑能量具現物、朔通行＋情報（草稿 §3.28）；漏洞 D–J 已暫定處理、朔聽貓已揀（Alpha 牽連）；2026-11-14 宏觀審視已出，三條上游已揀（草稿 §3.33–3.35）；2026-11-20 核對發現朔公開攔路撞 canon、貓審判場同鏡前攤牌功能重疊（§3.36，待揀甲乙丙） | 等作者 | — | `canon/_working/story_construction/YU_CAT_SAKU_ISEKAI_WALKER_DRAFT.md`、`canon/_working/story_construction/YU_CAT_HOLISTIC_REVIEW_2026-11-14.md`、`canon/03_characters/yu.md`、`canon/03_characters/saku.md` | YES | 2026-11-20 | 全作・世界觀 |
| T-009 | 聲線重做：操／美夜子／晴香按新 workflow（證據重分級、缺口微場景、自稱表、auditor）；①–④ 完成，等作者揀句 | 等作者 | — | `canon/_working/tasks/T-009.md`、`canon/_working/demo_pilot/VOICE_EVIDENCE_REGRADE_T009.md`、`canon/_working/demo_pilot/VOICE_EVIDENCE_REVIEW.md` | YES | 2026-10-19 | Demo 試點・人物底 |
| T-008 | Workbench 作者回饋改善（session 消失、思考深度、網址上一頁／下一頁、討論總結同逐項處理、用量、Enter 送出、作者問法紀錄、流程頁、角度矩陣分組同角度詳情、對話「做緊」條、傾夠落檔）；已加：工作樹、AI 逐步引導（story-work-flow）、輕鬆步用平啲 model；下一步：舊工作補掛（等作者批）、真對話試一次；未做：手機版、真相等級標示、Brief 同新決定邊個優先 | 進行中 | 0f8dcaed | `tools/workbench/`、`.claude/story_system/web-ui-protocol.md`、`.claude/skills/author-lens/SKILL.md` | YES | 2026-10-19 | 工具 |
| T-010 | Workbench 加入 Codex provider：Claude 保持預設，Codex 支援聊天、續談及背景 AI 工作流 | 完成 | — | `canon/_working/tasks/T-010.md`、`canon/_working/workbench/CODEX_PROVIDER_DESIGN.md`、`tools/workbench/providers/` | NO | 2026-10-22 | 工具 |
| T-011 | 晴香「罪孽深重」引入：美夜子失手殺被屍骸奪舍嘅活人後嘅心理描寫，晴香不知情去安慰，日後揭露回想覺得噁心；已加扣凜候選（草稿 v3 DRAFT；待揀呈現形式、扣凜、放邊個 beat） | 等作者 | — | `canon/_working/story_construction/HARUKA_SIN_INTRO_KILL_NARRATION_DRAFT.md` | YES | 2026-10-25 | Act I |
| T-012 | 苦難後心理／睇世界永久改變（好壞並存）：晴香・凜・紫音 DRAFT 已出，其餘角色未做 | 等作者 | — | `canon/_working/story_construction/PERMANENT_WORLDVIEW_SHIFT_HARUKA_RIN_SHION_DRAFT.md` | YES | 2026-10-25 | 全作・主題立場 |
| T-013 | 屍骸真實外貌核對：黑鐵哥德係真、人形一律保留但扭曲程度唔同（DRAFT；2026-11-03 作者揀混合：全城同一過濾遮人形＋部分人隱約感覺，動機＝令人安心殺，完全崩壞型改人形扭曲；待定過濾由誰做、全部人邊界、同夜區設定點接、邊個有隱約感覺） | 等作者 | — | `canon/_working/story_construction/CORPSE_TRUE_FORM_HUMAN_SILHOUETTE_DRAFT.md` | YES | 2026-11-02 | 全作・世界設定核對 |
| T-S01 | 分鏡 Studio：第一切片（劇情→AI 方案→比較採納→分鏡板→Preview→決定紀錄）；下一步見 STUDIO_DESIGN | 進行中 | — | `canon/_working/storyboard/STUDIO_DESIGN.md` | 否 | 2026-11-10 | 工具開發 |
| T-014 | 晴香創世身份太宏觀：已揀「創世只做觸發、主題放隊員對手戲」（DRAFT）；已暫定「晴香視角主角＋美夜子情感另一極」；美夜子人性化已揀「有用先值得留低＋想要漏出嚟」（DRAFT）；待傾三場對手戲位置同操嗰場載體 | 等作者 | — | `canon/_working/story_construction/TEAMMATE_FORGIVENESS_CREATOR_DRAFT.md` | YES | 2026-11-13 | 全作（跨幕）・主題立場 |
| T-016 | 用熵平衡理論（canon 無）借代討論集體潛意識；已揀「只當內部設計指南」，草稿已落檔；待傾 Act IV 債務清零與否、護甲補償來源（DRAFT，未入 canon） | 進行中 | eb0bf79d | `canon/_working/story_construction/ENTROPY_BALANCE_COLLECTIVE_UNCONSCIOUS_DESIGN_GUIDE_DRAFT.md`、`canon/01_world_rules_and_costs.md` | YES | 2026-11-14 | 全作・世界觀 |
| T-015 | 操嘅「過度自我監控／連改變都懷疑係表演／過度獨立」心理機制：作者貼咗一段心理對話做參考，傾點對應操（心理分析已落檔 DRAFT：`story_construction/MISAO_SELF_MONITORING_PSYCHOLOGY_DRAFT.md`，未入 canon）；另記一個押後題目：將「唔審判自己、容許混合動機」呢類練習內化成魔法／情緒系統嘅玩家可感知機制（作者 2026-11-14 提出，未開傾） | 暫停 | — | `canon/03_characters/ayakomoji_misao.md`、`canon/_working/story_construction/MISAO_SELF_MONITORING_PSYCHOLOGY_DRAFT.md`、`canon/_working/story_construction/INDIVIDUAL_CHARACTER_GROWTH_TRACKER.md` | NO | 2026-11-14 | 全作・角色心理（操） |
| T-017 | 晴香／美夜子赤裸感同操比較：小傑模式（尼飛＝經理人）；已揀事件形狀＝晴香執意重創經理人、隊伍被迫轉移、美夜子睇穿；已落檔 DRAFT；已揀隊友知道＋全隊睇穿私心＋兩種人各有反應＋動手變拆穿嘅場合；待定私心分層、外部觸發、玩家控制、操「永遠唔知」確切意思、合併表已出（擺位暫定 E-14 後、E-15 前）；待確認擺位、屍骸女王日期衝突 | 等作者 | — | `canon/_working/story_construction/UNDERGROUND_PERIOD_EVENT_RELATION_TABLE_DRAFT.md`、`canon/_working/story_construction/HARUKA_MIYAKO_RAWNESS_DRAFT.md`、`canon/03_characters/haruka.md`、`canon/03_characters/miyako.md` | YES | 2026-11-14 | 全作・角色心理 |
| T-018 | 全作宏觀診斷：提出所有故事問題同漏洞（7 條根因，DRAFT）；待作者揀先攻邊條上游 | 等作者 | — | `canon/_working/story_construction/HOLISTIC_PROBLEM_GAP_SWEEP_2026-11-14.md` | YES | 2026-11-18 | 全作（跨幕）・宏觀審視 |
| T-019 | 情緒設定深化（DRAFT 討論）：①「觀察自我→理解痛苦→走出傷痛」點具現化；②大石壓落嚟／內心空洞／心如刀割／滲出嚟嘅情緒點具現化；③情緒力量強弱係咪「內心強大」、點定義（借榮格個體化強度？）；承接 T-015 押後題目（將練習內化成玩家可感知機制）；已揀：個體化強度＝同自己痛苦嘅距離同接觸質素、具現化目的＝令玩家認出「我都試過」、載體＝晴香睇到旁人（DRAFT）；待作者講清大石／空洞意思 | 進行中 | — | `canon/_working/story_construction/EMOTION_EMBODIMENT_INDIVIDUATION_STRENGTH_DRAFT.md`、`canon/12_philosophy_and_systems.md`、`canon/01_world_rules_and_costs.md`、`canon/_working/story_construction/MISAO_SELF_MONITORING_PSYCHOLOGY_DRAFT.md` | YES | 2026-11-20 | 全作・情緒系統 |
| T-020 | 00_Story_Brief.html 按最新 canon＋決定紀錄同步（story-static-site-sync；先快照、出改動清單、分類安全／要批） | 完成 | — | `00_Story_Brief.html`、`00_Story_Brief.md`、`canon/_working/CANON_DECISION_LOG.md` | NO | 2026-11-22 | 工具・Brief 同步 |
| T-021 | Demo 試點・場景設計（每場想要咩／阻力／轉折／走位／對白定動作分工）；前置：Beat 層未批，先盤點；作者2026-11-23揀「先批 Beat 層」，場景設計等 T-001 批咗先開 | 暫停 | — | `canon/_working/demo_pilot/DEMO_PILOT_TRACKER.md`、`canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V4_1.md` | YES | 2026-11-22 | Demo 試點・場景設計 |
| T-022 | AI 自主管理創作研究（幾時問／保存未決問題／下一輪思考／幾時收工）：研究現成 skill，隔離環境最小整合＋跨 Session 驗證；唔改 canon | 進行中 | — | `canon/_working/tasks/T-022.md`、`/d/Projects/_HarukaABTest6` | YES | 2026-11-24 | 工具・創作自主管理 |

## Archive

| ID | Task | 狀態 | Session | 相關文件 | 等作者？ | 更新日期 | 屬於 |
|---|---|---|---|---|---|---|---|
