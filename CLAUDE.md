# Story Workflow Operating Memory

呢個 repo 使用 durable story workflow state。
任何新 session、context 壓縮後、或者換電腦之後，都**不得**靠記憶直接續做。

## First read order on every fresh session
1. `canon/_working/PROJECT_STATUS.md`
2. `canon/_working/NEXT_ACTION.md`
3. `canon/_working/QUESTION_QUEUE.md`
4. `canon/_working/SESSION_LEDGER.md`
5. `canon/_working/CANON_DECISION_LOG.md`（如存在）
6. `canon/_working/READ_MANIFEST.md`（如存在）
7. `canon/_working/story_construction/QUESTION_MATRIX.md`（如當前 task 相關）

## Always true rules
- 唔可以將 inference 當 confirmed canon
- 唔可以 silent resolve contradiction / dedupe / canonization
- 唔可以跳過 author gate
- 唔可以未做 source check 就直接問 reconstruction-level 問題
- 唔可以令 deferred question 消失
- 唔可以未更新 state files 就宣稱本輪完成

## ⚠️ 故事寫作 Pipeline（全局不可違反）

```
全作 / 跨幕 baseline（主題、四幕 job、跨幕 obligation、hard constraint）
        ↓
目標 Act 夠穩定（outline 大方向確認）
        ↓ [作者批核 outline]
目標 Act 的 Sequence / Beat Sheet 工作
        ↓ [該 Beat / Sequence 夠穩定]
Scene 開發
        ↓
Dialogue blueprint
        ↓
Script（對白 / 鏡頭 / timing）
```

**三層分工：**
- **Outline 層：** Act結構、beat功能、AKS進程、埋位設計、大方向確認。唔包含具體對白或執行細節。
- **Beat Sheet 層：** 每beat發生咩、情感弧、關鍵設計決定（A/B/C）、CDL錨點。唔包含具體對白/鏡頭/timing。
- **Scene/Script 層：** 具體對白、鏡頭設計、動作細節。

**Local Vertical Refinement Policy（2026-09-10 作者授權）：**
- **舊硬解已撤銷**：唔再要求「全四幕 Beat Sheet 全部批核完先可以做任何 Scene / Dialogue」。
- 目標 Act（例如 Act I）夠穩定就可以逐層向下做到 Scene / Dialogue，Acts II–IV 唔需要先鎖死 Beat Sheet。
- **但 Global Dependency Protection 仍然強制**：如果某個 Scene 依賴一個未解決嘅後幕真相，該點必須標 `PROVISIONAL` / `REVALIDATE_REQUIRED` / `BLOCKED_AT_THIS_DEPENDENCY`，唔可以由 local scene 靜靜決定一個未解決嘅全局真相。
- **Draft ≠ Canon**：downstream artifact 可以喺全故事結構鎖死之前存在，狀態用 `DRAFT` / `PROVISIONAL` / `SCENE_REFERENCE` / `REVALIDATE_REQUIRED` / `CANDIDATE` / `APPROVED_AT_THIS_LAYER`。Scene 唔可以靜靜變 canon；dialogue 唔可以靜靜鎖死未解決 plot 結構；正式 canon writeback 仍走既有 author / canon gate；上層改動可令下層 work 失效或需 revalidate。

**硬性規則：**
- 唔可以跳層——Outline未批核不做Beat Sheet；同一段 Beat / Sequence 未夠穩定不做該段 Scene
- AI 必須主動判斷當前層級，唔可以「是但」跳去下一層
- 出現「具體對白wording / 鏡頭角度 / Xsec timing」而該段仲喺 Beat 層 = 跳咗層，須退回（除非已正式進入該段 Scene 層並有 draft 狀態標記）
- 任何 Scene / Dialogue 產出，只要全故事 Beat Sheet 未全部批核，一律帶狀態章 `[DRAFT / 暫定 — pending full-story beat lock]`，唔可以 writeback 入 canon

## Primary durable files
- `PROJECT_STATUS.md` = 主 resume anchor / current truth snapshot
- `SESSION_LEDGER.md` = 本輪與歷史 phase 記錄
- `NEXT_ACTION.md` = 唯一單一步安全下一步
- `QUESTION_QUEUE.md` = blocked / deferred / resolved 問題來源
- `QUESTION_MATRIX.md` = 多角度拆題表，可追溯問題來源

## Mode rules
- Story ideation / outline / arc / reveal / theme / section development -> Story Room / Question Engine
- Source inventory / register / sectioning / audit -> Canon Pipeline
- Candidate / duplicate / conflict / ownership / author gate -> Atom Gate
- Confirmed decisions only -> Writeback
- Fresh session / interruption / new machine -> Resume first

## Update discipline
每輪結束前，至少更新：
- `PROJECT_STATUS.md`
- `SESSION_LEDGER.md`
- `NEXT_ACTION.md`
- `QUESTION_QUEUE.md`（如有 open / deferred / resolved 問題變動）
- `QUESTION_MATRIX.md`（如本輪建立或更新 angle rows）

## User interaction style
- **唔用編號 Q1/Q2 + A/B/C 選項式問答格式**（作者明確表示難以閱讀，2026-07-06 確認）——改用自由form：直接講清楚呢個位有咩要決定、點解要決定、有咩考慮方向，容許作者自由回應
- 每輪只問真正需要決定嘅嘢，唔堆砌問題數量
- 每條問題背後必須有 12角度分析支撐（RELEVANT/NOT_RELEVANT），但唔需要將呢個分析攤晒出嚟畀作者睇，除非佢要求
- **對話入面唔用內部追蹤編號**（QQ-xxx、CDL-xxx、E-xx、M0xx 等）——呢啲編號只可以喺寫入 state files（QUESTION_QUEUE.md / CANON_DECISION_LOG.md 等）時使用，同作者對話時一律用白話直接講返件事本身係咩，唔可以假設作者記得個編號代表咩（2026-07-06 確認，比之前「白話文描述問題」規則更嚴格：唔止解釋，係根本唔好提編號）
- **任何建議（候選、推薦、下一步提議、我自己揀嘅預設、要作者否決嘅清單）都要用人話講清：會發生咩、點解咁建議、要付咩代價、放棄咗咩、同另一個做法真正嘅分別**（作者 2026-10-02 要求；細而易改嘅預設可以簡短，但「點解」一定要有）。唔可以只畀標籤、編號或一句得失。詳見 `.claude/skills/story-orchestrator/SKILL.md`「Plain-Language Explanation Rule」
- **角度政策（作者 2026-10-08 批准，取代 2026-10-02 「每個建議都要全角度」）：預設 TARGETED，特定情況先 FULL。**
  - **TARGETED（預設）**：日常故事工作按問題揀相關嘅 lens families；簡短記錄揀咗邊啲 family、點解相關、（有用時）略過邊啲 family 以及點解缺咗風險低。TARGETED 下**唔可以**話「所有角度都考慮晒」或「完整考慮」。講畀作者聽時只講真正影響揀法嘅角度。
  - **FULL（用完整 Master Angle Registry，每格要核對證據同攻擊，唔可以淨係剔號）只限**：(1) 明確整體審查（holistic audit）；(2) 里程碑／最終審查；(3) 高風險跨學科成品；(4) 作者明確要求全面覆蓋；(5) TARGETED 之後仍有實質缺漏 lens 風險。
  - 「完整考慮」嘅宣稱仍然需要獨立盲審完成先可以講；Registry 唔刪，FULL 審查標準唔降。詳見 SKILL.md「Angle Basis Rule」同 `.claude/story_system/blind-angle-audit-protocol.md`
  - 兩條軸要分開：`SCOPE_SCALE`（WORLD_SYSTEM／ARC_STRUCTURE／SCENE_BEAT／MIXED／UNRESOLVED）同 `DECISION_WEIGHT`（ROUTINE／MATERIAL／DIRECTOR）；LEVEL_1/2/3 只係 decision-weight 概念，唔係 World/Arc/Scene。
  - 輸出驗證：story 設計輸出以 `.claude/story_system/validate_story_output.py` 同檔案存在作完成準則，唔信 subagent 自報 DONE。
- 唔得問 filler 問題

@.claude/story_system/angle-system.md
@.claude/story_system/state-files.md
@.claude/story_system/character-ideology-gate.md
@.claude/story_system/consequence-driven-progression.md
