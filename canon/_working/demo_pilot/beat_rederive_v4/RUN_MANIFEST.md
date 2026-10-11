# Run Manifest — Demo Beat 層由頭重推（v4）

`[DRAFT / 暫定 — pending full-story beat lock]` ｜ RUN_MODE：PILOT ｜ 開始：2026-10-08
觸發：作者「beat 層可唔可以再用 skill 由頭咁 go through 一次，而唔係用依家有嘅嘢就算」。

## Goal stack
- PRIMARY_GOAL：驗證由粗到幼方法（demo）
- CURRENT_TASK：Beat 層由 Sequence 層（DERIVATION_LEDGER §12–§13）重新推導
- RETURN_TARGET：Beat 層 Layer Review Packet → 作者批 → Scene 層
- CURRENT_LAYER：Beat｜LAYER_STATUS：IN_PROGRESS｜DIRECTOR_REVIEW：PENDING｜TRANSITION_ALLOWED：NO

## 輸入（允許做推導來源）
- 父層：DERIVATION_LEDGER §12.1／§12.2（範圍＋開場）、§13（Sequence 義務 P1–P14、Cost Signal、入出場）、§2 O1–O13（Beat 2 義務）
- 作者決定（AD，照用唔重推）：範圍 SEQ2＋SEQ3（無紫音、基地三人版）；開場只交代「驚」、由對話帶出；好暖＋少少不安（D-13，結尾暖取代勝利後靜默）；真掉牙＋操知而收埋
- 來源包：SRC_1_STRUCTURE／SRC_2_CHARACTERS／SRC_3_WORLD_GAMEPLAY／SRC_4_LEGACY（agent 回收，證據唯一）

## 禁止做推導來源（只可喺 Reference Audit 事後比較）
DEMO_BEAT_LAYER.md、DERIVATION_LEDGER §3／§8／§14／§15／§16 嘅 Beat 表、BEAT_LAYER_V3_2.md、BEAT_LAYER_ANGLE_SCAN.md、blind_audit/、SCOPE_AND_CUT_LIST 場景 cut、ACT_I_BEAT_SHEET 場景級細節（只可標 SR）。
誠實聲明：orchestrator 本人之前寫過 v2–v3.2，記憶有接觸；以「每個元素必須由來源包／父層推出，冇鏈＝刪或標 NC」補償，Reference Audit 會列出同舊版重合嘅位，由盲審判斷有冇抄。

## 流程（story-room Beat Sheet Production Mode＋orchestrator Beat Layer Completeness Gate）
1. Source recovery（4 agent）✅/⏳
2. Parent Consistency Gate（Sequence 層 slice）
3. Narrative obligation pass（九類，逐 beat）
4. Beat 推導（每 beat 全欄位＋beat-grain 分類＋DOWNSTREAM REFERENCES＋Derivation Ledger 行）
5. Inherited Obligation Challenge（5 agent 質疑輪）→ 綜合
6. MATERIAL 問題 → solution-space（候選＋premise audit）
7. Completeness Gate：FULL 28 角度掃描｜知情表｜Gate A/B/C｜obligation pass 對控制表｜coping 對撞｜獨立盲審（≥5＋漏洞搜尋＋提案）→ Diff
8. Reference Audit（對 v3.2）
9. Layer Review Packet → 作者

## 進度 log
- 2026-10-08：manifest 建立；4 來源 agent 已派。
- SRC_4 返（legacy 全 SR；agent 自報 grep 意外帶出 NEXT_ACTION／PROJECT_STATUS 幾行，未用作證據＝exposure 記錄）。
- SRC_3 返（世界／玩法；額外讀 04_timeline、05_outline、02_glossary、CDL:254，非禁讀）。關鍵張力：首次連結成員（canon 四人 vs Outline E-02 合併）、基地四人、血糖手錶未定、首次連結層級未講、街戰日區／夜區未講、天台場冇 source。
- SRC_2 返（角色）。關鍵：晴香 Act I 冇面具（CDL-355）撞舊強制微笑材料；首次連結有冇紫音（CDL-139 vs 121/224）；CDL-141 基地洩露被 CDL-317 取代；操未知自己本來係女仔（CDL-178）。
- SRC_1 返（結構；18 條 source 張力）。4 來源包齊。
- 步驟 2–3 完成：DERIVATION_V4.md §1 Parent Consistency（16 項，含 6 個 STALE parent／1 個父層漏項 O14）、§2 義務重建（+6 新義務）、§3 MATERIAL 問題 MP1–MP6。
- 步驟 5＋6 並行派出：5 個質疑 agent（證據／角色邏輯／主題觀眾／canon 衝擊／魔鬼代言人）＋1 個 solution-space（MP1–MP6）。
- 步驟 6：SOLUTION_SPACE_V4 返（30 候選）；owner lookup：CP5＝天台（AD 原文『晴香、美夜子對話』，0d 只有晴香）；MP2 RC 合法（O:366 [SS] 未鎖）。FINALISTS_V4.md 建立，送獨立 premise audit。
- 步驟 6 完成：premise audit 裁決＋排名（§5）；日區 24h＝PROVISIONAL（學校／屋企非日區，CANON_FACT_GAP）。下一步：落 Beat 表 v4。
- 步驟 7：BEAT_LAYER_V4.md（17 beat）＋SELF_SCAN_V4.md（自掃：28 角度、Gate A/B/C、obligation、coping）。盲審 7 agent 派出後全部撞用量上限、零輸出；作者叫再試 → 已逐個恢復（原 context）。
- 作者叫停：取消盲審 A、B；保留 C、E（只收摘要）；CHECKPOINT.md 已寫；狀態檔已更新。
- v4.1＋Reference Audit 完成；呈 Layer Review。
- 2026-10-09：正式製作 BEAT_LAYER_DEEP_DESIGN Batch 1（N1/N2/N3，N3=原N3+N4合併）完成。validate_beat_layer.py PASS（0 blocking）。角度數：N1=12／N2=11／N3=11。2 個 NEEDS_AUTHOR_DECISION（低優先，唔阻批）。0 sub-agent。產出：BEAT_LAYER_V5_BATCH1.md。下一批（未做）：B1–B4（街戰開場至操到場）。
- 2026-10-09：V5 Batch 1 Creative Revision（N1/N2/N3）完成，用 commit 29c488b 新規則。產出 BEAT_LAYER_V5_BATCH1_R1.md（保留原 BATCH1 不變）。N3 兩個核心問題已解：(A) 接受使命因果主體由美夜子（畀槢）改為晴香自己（扣連E-01先例嘅主動承諾）；(B) 貓形交實物由「魔法推拿」（禁止嘅能力跳躍）改為「普通貓生理行為叼／推急救袋」。validate_beat_layer.py PASS。0 sub-agent，0 改 skill，0 新盲審。兩個原 NEEDS_AUTHOR_DECISION 降級為 HW PROVISIONAL_DEFAULT（唔上報作者）。未自動 commit。
