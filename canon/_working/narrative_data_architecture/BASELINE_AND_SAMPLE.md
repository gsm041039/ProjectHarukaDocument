# AI 故事資料架構：接手背景與樣本

日期：2026-11-26  
工作：T-023  
範圍：快速接手，不重做既有研究 audit

## 正式 repo 與工作區狀態

- 正式 repo：`D:\Projects\ProjectHarukaDocument`。本輪開始時工作樹乾淨；研究途中觀察到 `art/ConceptArt/Characters/Aeri/ConceptArt_Aeri_MagicalGirl.png` 出現未提交改動。此檔不屬 T-023，已保留，未讀寫或還原。
- `story_kb/` 在正式 repo 內有 Git 追蹤檔，現有 59 張 fact cards（按 `## F-` 計數），加 6 個未決 thread。README 仍稱它係隔離 prototype，文件描述同目前放置位置有差異。
- `D:\Projects\_HarukaABTest7`、`D:\Projects\_HarukaABTest8` 無 Git metadata；ABTest7 下有多個複製 workspace。已知 `W_gap/story_kb/` 有較新 gap 卡與 probe 版本；ABTest8 有相近的故事知識庫。無 Git 歷史，不能把其「最新」或乾淨狀態當成已驗證事實。
- `D:\Projects\haruka-research-decomp` 係獨立 Unity 遊戲程式碼 repo，Git 工作樹目前乾淨；與本次 narrative knowledge prototype 無直接關係。
- 因歷史 ABTest 根目錄無版本控制，本輪只記錄路徑和少量相關產物，不做全目錄比較或合併。

## 現有知識資料方式（接手所需摘要）

- 卡片以 Markdown 儲存：人物／事件／規則等知識、`kind`、單一故事 `time`、`status`、`authority`、可修改程度、原文來源行、逐字引文，以及 `see`／`conflicts`／`superseded_by` 等手動關係。
- `kb.py` 可查卡、依時間或狀態篩選、逐字引文漂移檢查，以及以原文關鍵詞掃描段落的 `probe`。`probe` 依命中詞數及行數排序；不是語意檢索或自動因果圖。卡與卡之間的關聯主要靠明寫欄位，無一般圖遍歷。
- 新卡／決定目前靠人手寫入；`fill` 從來源行補引文，`check` 驗欄位、引用、連結及替代卡。現有流程可發現來源文字漂移，未見自動識別變更影響範圍、重抽取或局部重建的完整管線。
- 官方創作指引已寫明構思時可選擇做 `probe`，亦可先獨立構思、後比較現有安排；是否自然執行仍屬待驗證能力。
- 歷史報告聲稱先前版本有 57 卡、自我測試 12/12；目前正式 checkout 是 59 卡。本輪未重跑舊測試，亦未將舊報告成績視為本次比較基準。

## 有限真實樣本：晴香的幸福監獄與二十年守望

涵蓋同一故事範圍內的人物、事件、世界規則、時間與版本資料：

- 時間線：`canon/04_timeline_canon.md:278-284` 記二十年守望及晴香被困集體潛意識、夕維持肉身。
- 角色／創作意圖：`canon/03_characters/haruka.md` 的二十年心理階段；`canon/03_characters/yu.md:155-169` 將夕的 Alpha 線數日、拒絕逃避與外界守望連成角色弧。
- 世界規則：`canon/01_world_rules_and_costs.md` 的集體潛意識、連結線及強行進入代價。
- 劇情版本：`canon/_working/story_construction/ACT_III_OUTLINE.md:653-668` 保留蜜月期困境具體內容，包括陽光房間、花子煮早餐、態度剝奪詛咒、違和感與被拉回；此段仍標為 Act IV 草稿材料。
- 現有知識卡：`story_kb/facts/kurokane_haruka.md` F-KH-25（幸福監獄）與 F-KH-26（二十年心理三階段）。F-KH-25 仍標 `disputed`／「時長矛盾」，而卡內 note 已提及 CDL-430 的「現實數日、主觀二十年」；需要核實正式卡是否過時，不自行改作者決定。
- 來源缺口線索：對 `20年／夕／集體潛意識／蜜月期／幸福監獄` 跑正式 `probe`，共命中 567 個段落；排序前列找到蜜月期草稿，但大部分結果與該小樣本無關。F-KH-25 有覆蓋蜜月期段落，卻未收錄原文中所有成因、感知條件、時間尺度與跨人物關係。

## 可比任務與限制

待 Stage 2 選定實作後，以相同原文和明確問題比較：

1. 整理出「晴香何時／如何被困、幸福監獄如何運作、她主觀經歷甚麼、夕在外面做甚麼」，並分開故事時間、主觀時間、作者決定時間、文件版本。
2. 問新構思前，找出已存在的相似劇情及其成因／功能，辨認哪些是 Canon、哪些是草稿或已被取代內容。
3. 假設更改一個事件，找出有來源支持的下游影響；時間先後不得自動當成因果。
4. 以這個範圍做一次非 Canon 的宏觀創作驗證：先獨立構思，再讀取資料比較；不採納、不寫回正式故事。

限制：樣本已有成熟 outline、角色檔及知識卡，不能代表全作；probe 的巨大命中數不等同 LLM 實際輸入量；不同檢索工具與模型提示須分開記錄，避免把更多整理資料誤算成圖檢索收益。
