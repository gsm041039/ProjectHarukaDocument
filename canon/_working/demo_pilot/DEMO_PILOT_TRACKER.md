# DEMO PILOT TRACKER — 15–20 分鐘 MVP Demo 試點段

> ⚠️ **2026-09-30 方向重設：作者要求喺本 demo 範圍內由粗到幼重新討論劇情，試驗方法。** 已有決定（8 場 cut、場8 操縫牙暗示等）＝DOWNSTREAM_EXPERIMENT / NON_BINDING_REFERENCE，於 Sequence／Beat 層重新確認先決定去留；Stage 6 暫停，直至 demo 範圍粗層（段落功能、觀眾感覺）獲作者確認。voice 結果保留，可被 REVALIDATE。


> **呢份係試點段嘅唯一進度追蹤檔。** 任何新 session / 另一部電腦 / context 壓縮後，想繼續呢條線，**先讀呢份**，再讀佢指向嘅檔。
> 建立：2026-09-29 ｜ Run mode：`PRODUCTION`（但全部產出帶 `[DRAFT / 暫定 — pending full-story beat lock]`，唔 writeback canon）
> 授權：作者 2026-09-28 授權呢個試點段由粗到幼做到有對白劇本；Round 196「停喺 Sequence 層」嘅 freeze **只對呢個試點段解除**，其他段落仍然 freeze。

---

## 0. 點樣用呢份檔（Resume Protocol）

1. 讀 §1 目標 + §2 限制 → 知道做緊咩、唔可以做咩。
2. 讀 §4 決定紀錄 → 知道作者已經定咗咩（唔好重問）。
3. 讀 §5 Pipeline Checklist → 搵第一個唔係 `DONE` 嘅 stage，睇佢嘅 gate。
4. 讀 §8 Next Action → 單一步下一步。
5. 如果某 stage 狀態係 `AWAITING_DIRECTOR`，唔可以自己跳過；等作者答 §7 對應問題。
6. 每做完一步：更新 §5 狀態 + §6 產出索引 + §9 Change Log + §8 Next Action；再同步一句去 `canon/_working/PROJECT_STATUS.md` 同 `SESSION_LEDGER.md`。

狀態碼：`TODO` / `IN_PROGRESS` / `AWAITING_DIRECTOR`（等作者）/ `DONE` / `DEFERRED`（刻意延後，有 revisit trigger）/ `CUT`（刻意唔做）/ `BLOCKED`（外部阻塞）

---

## 1. 目標

- **Primary goal：** 一段 15–20 分鐘可玩 MVP demo 嘅完整有對白劇本，包含：日常、對話、小 cutscene、魔法少女戰鬥、靚景。
- **試點意義：** 用呢段驗證「由粗到幼」整條 workflow（範圍 → 人物底 → 場景 → gameplay 對接 → 對話骨架 → 劇本 → 審稿 → 美術／導演補件）。
- **最終交付：** 劇本 + 支撐佢嘅人物說話方式／動作表演文件 + 生產需求清單（gameplay／美術／導演要補咩）。

## 1.5 大局錨點（Big-Picture Anchor）— 唔好行遠

**主線（PRIMARY_GOAL）**：Stage 0 → 13，最終出「有對白劇本＋支撐文件＋生產需求清單」（見 §5）。
**而家位置**：Stage 5（人物底）。Stage 5 入面正做**支線（TEMPORARY_PREREQUISITE）：粵語對白設計方法**（研究、語料、drafting-language 決定 D-10、skill 升級）。

**支線界線（防止離題）**：
- 支線目的只係令 Stage 8／10 嘅對白自然、分到角色；**唔係**做完整 Voice Bible。
- 支線已完成：研究＋skill §3.1／§8B／§8C／§8D＋語料基準＋D-10 落檔。**唔再擴大研究**，除非工作坊發現新缺口。
- **Stage 5 退出條件（Head Writer 建議，作者可改）＝ Demo 夠用版**：操、美夜子（貓形態）、晴香各有：①自稱／稱呼表 ②demo 8 場實際需要嘅對白功能（接手、命令、劃界、道謝、掩飾、沉默）各至少一個經作者聽感確認嘅微場景 ③撞聲對照（操 vs 美夜子）。**唔需要**完整 Voice Bible；其餘留完整版。
- **Stage 6 可以同 Stage 5 並行**（場景設計唔需要最終 voice；預設先行，已喺 §8 寫明）。若工作坊拖過 5 個微場景仍未夠，回主線做 Stage 6，剩餘微場景標 `DEFERRED`。
- 每完成一個微場景，回望一次呢節：仲喺唔喺 Stage 5 退出條件範圍內？

**微場景清單（Stage 5 語音工作坊，對應 demo 場號）**：
| M | 對應 demo 場 | 對白功能 | 狀態 |
|---|---|---|---|
| M1 | 場 4 操登場 | 接手／命令（操） | DONE_PROVISIONAL（作者揀 P1）|
| M2 | 場 4–5 | 被擋一擊＋「條裙」（操→晴香）；canon 已係口語粵語 | DONE_PROVISIONAL（作者揀 S2「做乜擋喺度。」）|
| M3 | 場 5 | 傲嬌入隊／收人情（「唔係入隊。係臨時指導。」） | DONE_PROVISIONAL（作者揀 T1）|
| M4 | 場 7 | 黃昏 IG、嫌穿搭幫搭配 | DONE_PROVISIONAL（作者揀 U1）|
| M5 | 場 8 | 沉默測試（操，掉牙暗示） | DONE_PROVISIONAL（Head Writer：零台詞；待合併問題確認）|
| MY | 場 2–6 | 美夜子（貓形態）短命令＋咬唇；同操撞聲對照 | DONE_PROVISIONAL（作者揀場3「以前有人用過。有用。」＋場2 四句；言癖另開 pass）|
| MH | 場 1–7 | 晴香基線 | DRAFTED（`haruka_voice_discovery.md`；待 auditor＋作者聽感）|

---

## 2. 硬限制（Constraints Register）

| # | 限制 | 來源 | 影響 |
|---|---|---|---|
| C-1 | ~~Gameplay 目前只準備到課室戰鬥嘅程度~~ **作廢（作者 2026-09-29 更正：gameplay 本身就喺街上，唔係課室版）** | 作者 2026-09-29 | 舊修訂紀錄：作者接受街道戰場（想要街景），只要求魔法屍骸戰鬥、晴香＋美夜子已足夠；街道戰場、操腳本化助攻、情緒連結簡化視覺化列為生產需求，Stage 4 評估 |
| C-2 | 可以 cut 內容；章節唔需要完整做晒；劇本入面可以有但 demo 唔一定做 | 作者 2026-09-29 | 範圍 stage 要出「保留／剪走／劇本有但 demo 唔做」三欄 cut list |
| C-3 | 未決定／未 develop 嘅元素可以暫時唔出（例：秋穗） | 作者 2026-09-29 | 唔好為咗試點提早鎖死未定角色；用缺席處理 |
| C-4 | 開場日常細節（照鏡倒影慢 0.3 秒、膊頭重、秋穗叮囑）未穩 | 作者 2026-09-28 | 如揀開場段，呢啲要 cut 或標 PROVISIONAL |
| C-5 | Art direction 做緊中（Beta 環境語言 CDL-413 已落第一層；pipeline P00-P07 未傾） | PROJECT_STATUS | 美術需求只出清單，唔自己定 art direction |
| C-6 | 作者要求「由冇到有」準備所有缺嘅嘢：細至說話方式、動作，大至 art direction 補件 | 作者 2026-09-29 | Stage 5 / 11 / 12 負責；art direction 補件細節「之後再講」→ Stage 12 暫 DEFERRED |
| C-7 | Global Dependency Protection：依賴未解後幕真相嘅點要標 PROVISIONAL / REVALIDATE_REQUIRED | CLAUDE.md | 尤其彩／黑奏、紫音戒斷誤導 |

## 3. 候選段落

| 候選 | 內容 | 戰場契合度（C-1 已作廢，gameplay 喺街上；此欄為舊評估，僅供歷史） | 主要風險 |
|---|---|---|---|
| **A. 開場 → 第一次變身 → 天台**（Act I 第一段） | 城市遠景 → 走廊欺凌（桐生健／彩）→ 屍骸入侵 → 初次變身雙層現實 → 學校內戰鬥 → 膠布尾聲 → 彩「下次呢？」→ 天台使命 | **高**：戰鬥本身喺學校走廊，搬入課室屬細調 | 彩／黑奏 reveal 敏感；戰鬥得晴香一人＋貓；第一印象段；屋企晨早段未穩（可 cut，秋穗可唔出） |
| **B. 操入隊 → 紫音珍寶珠 → 秘密基地**（Act I 第三段） | 街道大型戰鬥＋情緒連結＋操亂入＋陷阱擋攻擊 → 後巷餵糖 → 夜潛學校建秘密基地 | **低**：戰鬥設定明寫「日間街道（非學校）」→ 要新場地，或改戰鬥地點（屬故事改動，要作者批） | 要 cold open 交代；四角色塞 20 分鐘；操／紫音冇 voice 文件；葡萄糖注射槍／血糖手錶時序待核 |

## 4. 決定紀錄（Decision Log）

| # | 日期 | 決定 | 狀態 | 來源 |
|---|---|---|---|---|
| D-01 | 2026-09-28 | Demo 長度 15–20 分鐘，要有日常／對話／小 cutscene／魔法少女戰鬥／靚景 | AC | 作者 |
| D-02 | 2026-09-28 | 呢段作試點，由粗到幼一路做到有對白劇本；freeze 只對此段解除 | AC | 作者 |
| D-03 | 2026-09-29 | ~~Gameplay 只做到課室戰鬥~~ **已作廢：作者更正 gameplay 喺街上（→ C-1）** | SUPERSEDED | 作者 |
| D-04 | 2026-09-29 | 可 cut；未定元素（如秋穗）可唔出（→ C-2/C-3） | AC | 作者 |
| D-05 | 2026-09-29 | 要有完整可追溯 workflow + checklist（= 本檔） | AC | 作者 |
| D-06 | 2026-09-29 | **揀段：操入隊（B）為主體，去掉紫音；要街景；要魔法屍骸戰鬥，只有晴香＋美夜子都得** | AC | 作者 |
| D-08 | 2026-09-29 | 去紫音＝紫音 cameo、Beat 2.5、Beat 2.6 推遲到完整版；demo 可簡化，完整版補返 | AC | 作者 |
| D-07 | 2026-09-29 | Art direction 補件嘅細節「之後再講」 | DEFERRED（trigger：劇本初稿完成後） | 作者 |
| D-09 | 2026-09-29 | **範圍＝方案 3（方案 1＋勝利後靜默尾巴），但尾巴改為操有掉牙暗示，唔係晴香**。Head Writer 默認（作者可推翻）：強度 Stage 1 級（牙齦滲血＋舌尖頂牙，唔真掉牙）；放最後一場（場 8）；晴香／美夜子唔知；唔用鏡。晴香可樂失味 demo 冇，完整版補 | AC（方案）／AI_PROPOSED_CANDIDATE（強度、位置） | 作者 |
| D-10 | 2026-09-29 | **對白由粵語直接落筆，唔由書面語轉換**：書面語只放意思層（canon 原句、功能、目的、真句）；對白層直接用口語粵語寫 2–3 候選；CANON_DIRECT 原句保留，口語版係 NATURALIZATION CANDIDATE；過 Native Cantonese Gate。依據＋代價＋未知見 `character-voice-workshops/_CANTONESE_DIALOGUE_RESEARCH.md` §1 | PROVISIONAL（Head Writer 建議；作者要求討論後提供咗語料，未逐字確認；可推翻） | Head Writer＋作者研究要求 |
| D-11 | 2026-09-29 | 用 CantoCaptions（Hattori 配音、Another World 原創）做粵語對白**自然度基準＋功能對照**；只作分析參考，唔抄句；字幕冇聲調，唔可判斷語氣停頓 | AC（作者提供語料）／用法 AI_PROPOSED_CANDIDATE | 作者 |
| D-12 | 2026-09-29 | **所有進 demo 嘅角色聲線（操／晴香／美夜子）一律按新 workflow 重做**：舊 `character-voice-bibles/{haruka,miyako}.md`（標「正式版」、2026-07 舊 workflow）只當 EVIDENCE INPUT（canon 原句＋舊候選），唔當已確認聲線；新 workflow＝證據分級 → 慢速微場景工作坊（含 §8B 說話分析卡、§8D 語料對照、粵語自然化）→ 自稱／稱呼表 → `story-character-voice-evidence-auditor` → 作者聽感確認 → Stage 8 先用 `story-scene-speaking-state-builder` 套場景。Stage 4 將晴香／美夜子標 HAVE 係錯判，已更正 | AC（作者要求）／HEAD_WRITER 執行 | 作者 |
| D-13 | 2026-09-30 | **Demo 段＝好暖，只有少少不安（作為伏筆）；其餘同之前已定（8 場、操牙暗示 Stage 1 級、去紫音）。粗層範圍取 Act I 六 Sequence，再收窄 demo** | AC（作者；解讀：不安只作伏筆，唔改變其餘決定） | 作者 |

## 5. Pipeline Checklist

每個 stage：目標 → 用咩 skill → 產出檔 → 有冇作者 gate。**有 ◆ 嘅 stage 做完要停低俾作者過目先落下一層。**

### Stage 0 — 開檔與限制收集 `DONE`
- [x] 建立本追蹤檔
- [x] 記錄限制 C-1~C-7、決定 D-01~D-07
- [x] 同步 PROJECT_STATUS / SESSION_LEDGER

### Stage 1 — 揀段 ◆ `DONE`
- [x] 兩段好壞比較（見 §3）
- [x] 作者揀操入隊＋去紫音＋街景（D-06、D-08）

### Stage 2 — Demo 範圍同 cut list ◆ `DONE`（作者揀方案 3 改，D-09）
- Skill：`story-sequence-boundary-designer`（+ `story-audience-experience-designer` 定玩家應該有咩感受）
- [x] 2–3 個範圍方案
- [x] 三欄 cut list
- [x] 每場粗估時間，方案 1 合計約 15–20 分鐘
- [x] 標出每場對戰場／gameplay 嘅需求（見 SCOPE 文件 §5）
- [x] 作者揀範圍方案 → 寫入決定紀錄（D-09）
- 產出：`SCOPE_AND_CUT_LIST.md`（DRAFT，已按 D-09 更新：場 8、cut list、影響核查、補返清單第 7/8 項）

### Stage 3 — 事實回收：呢個時間點角色知道咩、經歷過咩 `DONE`（2026-09-29；產出 `FACT_AND_KNOWLEDGE_STATE.md`）
- Skill：`story-source-recovery-gate` → `story-character-context-recovery` → `story-knowledge-state-mapper` → `story-character-arc-positioner`
- [x] 每個出場角色：已知／未知／隱瞞／身體狀態／關係位置（晴香、美夜子進場心理細節標 NEED，Stage 5 補）
- [x] 觀眾喺每場知道咩（8 場）
- [x] 標 PROVISIONAL / REVALIDATE_REQUIRED 位；核實塔覆蓋範圍規則：場 8 唔撞，但要寫成操個人崩壞起點，唔可以寫成「範圍外代價自留」
- 產出：`FACT_AND_KNOWLEDGE_STATE.md`

### Stage 4 — 生產缺口審查（gameplay / 美術 / 文件） ◆ `DONE`（2026-09-29；產出 `PRODUCTION_GAP_AUDIT.md`；等作者過目，Gameplay `NEED_AUTHOR` 項待作者／Unity 側資料）
- Skill：`story-work-readiness-diagnostician` + `story-character-foundation-planner`
- [x] Gameplay：10 項差距，其中 G-1/2/6/9 要作者確認課室版現況（`NEED_AUTHOR`）
- [x] 美術：12 項，列已有素材；A-11 場 8 輕版牙血要新構圖，唔可沿用甜品掉牙圖（Stage 2a 級）
- [x] 文件：必補＝操 voice bible＋操／晴香／美夜子三份動作表演文件
- ⚠️ **更正（2026-09-29，D-12）**：呢度原本將晴香、美夜子說話方式標 HAVE 係錯判——現有 bible 係舊 workflow 產物，要按新 workflow 重做（見 Stage 5）；動作表演文件亦一樣視為 CANDIDATE
- 產出：`PRODUCTION_GAP_AUDIT.md`

### Stage 5 — 人物底：說話方式 + 動作表演 ◆ `IN_PROGRESS`（2026-09-29 改為逐微場景慢速工作坊；退出條件＝§1.5「Demo 夠用版」）
- Skill：`story-character-voice-designer`；`story-character-performance-bible-designer`
- 範圍：操 voice bible＋操／晴香／美夜子動作表演（紫音、彩、桐生健唔喺 demo 範圍）
- [x] 操 voice bible（Discovery Workshop，DRAFT）：5 個 Voice Engine 候選、5 句禁句、M1–M5 微場景、6 項待作者確認（見該檔 §C4）
- [x] 操／晴香／美夜子動作表演文件第一版（DRAFT）：各自有待作者確認候選（操 4 項、晴香 2 項、美夜子 3 項）
- [x] 支線：粵語對白研究＋skill §3.1／§8B／§8C／§8D＋語料基準（`_CANTONESE_DIALOGUE_RESEARCH.md`）
- [ ] **新 workflow 重做聲線（D-12）**：操（M1–M5＋收尾已寫）／美夜子（已起草）／晴香（已起草）各自：①舊 bible 當證據輸入，重新做證據分級（原句 vs 舊候選）②慢速微場景工作坊（每個含 §8B 分析卡、§8D 語料對照、粵語自然化）③自稱／稱呼表 ④`story-character-voice-evidence-auditor` ⑤作者聽感確認。舊 bible 頂部已加「舊 workflow／CANDIDATE」提示
- [ ] 語音微場景工作坊 M1–M5、MY、MH（進度表見 §1.5）；舊 bible 係 CANDIDATE，唔作定案
- [ ] 表演文件：作者逐項過目候選（操 4／晴香 2／美夜子 3），可同語音工作坊穿插
- [ ] 退出條件達成（§1.5）→ 入 Stage 6（或並行）
- 產出：`character-voice-workshops/misao_voice_discovery.md`（工作坊）、`character-voice-workshops/_CANTONESE_DIALOGUE_RESEARCH.md`（研究）；舊 `character-voice-bibles/misao.md`、`character-performance-bibles/{misao,haruka,miyako}.md` 降級 CANDIDATE

### Stage 6 — 場景設計 ◆ `TODO`
- Skill：`story-scene-objective-architect` → `story-scene-psychology-mapper` → `story-location-stage-director` → `story-scene-expression-planner`
- [ ] 每場：角色想要咩／阻力／轉折／走位／邊啲嘢用對白、邊啲用動作或畫面講
- 產出：`SCENE_ARCHITECTURE.md`

### Stage 7 — Gameplay 對接 `TODO`
- Skill：`story-gameplay-cinematic-integrator` + `story-gameplay-dialogue-integrator`
- [ ] 玩家幾時有控制、戰鬥中對白點觸發／被打斷、失敗重試點處理
- [ ] 貼合現有街上 gameplay；超出現有能力嘅標「需新開發」
- 產出：`GAMEPLAY_INTEGRATION.md`

### Stage 8 — 今場說話狀態 + 對話骨架 `TODO`
- Skill：`story-scene-speaking-state-builder` → `story-scene-performance-state-builder` → `story-dialogue-architect`
- 產出：`DIALOGUE_BLUEPRINT.md`

### Stage 9 — 寫稿前檢查 `TODO`
- Skill：`story-dialogue-readiness-gate`
- [ ] 未夠料嘅項目返去補，唔可以硬寫

### Stage 10 — 有對白劇本 ◆ `TODO`
- Skill：`story-dialogue-script`
- 產出：`SCRIPT.md`（帶 DRAFT 章）

### Stage 11 — 審稿 `TODO`
- Skill：`story-dialogue-room` + `story-coverage-table-read` + `story-experience-alignment-auditor` + `story-character-consistency-tester`
- 產出：`REVIEW_NOTES.md`；修訂返 `SCRIPT.md`

### Stage 12 — 美術／導演補件審查 `DEFERRED`（trigger：Stage 10 初稿完成；細節作者話之後再講）
- Skill 候選：`story-game-director`、`story-directing-language-auditor`、`story-storyboard-designer`、`story-audio-direction`
- [ ] 由劇本反推：美術／鏡頭／聲音要補咩元素
- 產出：`ART_DIRECTING_BACKFILL.md`

### Stage 13 — 交付包 `TODO`
- Skill：`story-director-delivery-builder`
- 產出：`HANDOFF_PACKAGE.md`（劇本 + 需求清單 + 未決項）

## 6. 產出索引（Artifact Index）

| 檔案 | Stage | 狀態 |
|---|---|---|
| `canon/_working/demo_pilot/DEMO_PILOT_TRACKER.md` | 0 | DONE（本檔，持續更新） |
| `canon/_working/demo_pilot/SCOPE_AND_CUT_LIST.md` | 2 | DRAFT，已按 D-09 定範圍（方案 3 改）；含完整版補返清單 §6（8 項） |

| `canon/_working/demo_pilot/FACT_AND_KNOWLEDGE_STATE.md` | 3 | DRAFT，DONE |
| `canon/_working/demo_pilot/PRODUCTION_GAP_AUDIT.md` | 4 | DRAFT，DONE，等作者過目 |
| `canon/_working/demo_pilot/DEMO_BEAT_LAYER.md` | 5.5（Beat 層） | DRAFT，2026-09-30 建立，Director review PENDING；Stage 6 前置 |
| `canon/_working/character-voice-workshops/misao_voice_discovery.md` | 5 | IN_PROGRESS：M1 已有候選、作者揀 C、語料對照 |
| `canon/_working/character-voice-workshops/_CANTONESE_DIALOGUE_RESEARCH.md` | 5（支線） | DONE：研究筆記＋D-10＋語料基準＋使用規程 |
| `canon/_working/character-voice-bibles/misao.md` | 5 | 降級 VOICE CANDIDATE（舊版，逐步用工作坊重做） |
| `canon/_working/character-performance-bibles/misao.md` | 5 | DRAFT 第一版，等作者執 4 項候選 |
| `canon/_working/character-performance-bibles/haruka.md` | 5 | DRAFT 第一版，等作者執 2 項候選 |
| `canon/_working/character-performance-bibles/miyako.md` | 5 | DRAFT 第一版（貓形態為主），等作者執 3 項候選 |

（所有新產出放 `canon/_working/demo_pilot/`；長期角色文件放各自 bible 資料夾。）

## 7. 等作者答嘅問題

| # | 問題 | 阻塞邊個 stage | 狀態 |
|---|---|---|---|
| Q-1 | 揀段 | Stage 1 | RESOLVED 2026-09-29（D-06） |
| Q-2 | 街道戰場 vs 學校 | Stage 2 | RESOLVED 2026-09-29（作者要街景；gameplay 本身就喺街上） |
| Q-3 | 範圍方案 1／2／3？ | Stage 2 → Stage 3 | RESOLVED 2026-09-29（方案 3，尾巴改操掉牙暗示，D-09） |
| Q-4 | 操 M1 語域／殺氣定距離感 | Stage 5 M1 | RESOLVED_PROVISIONAL（2026-09-29 作者揀 P1 半書面口語版；殺氣／距離感冇答，留 M2／M3 對照；M2 作者揀 S2「做乜擋喺度。」→ 傾向責備包裝＋防衛，M3 再對照） |
| Q-5 | D-10（粵語直接落筆）作者係咪接受？有冇偏好嘅粵語動畫作對照？ | Stage 5 全部工作坊 | OPEN（PROVISIONAL 先行；有反對即推翻） |

## 8. Next Action

**單一步**：auditor 已跑（`VOICE_EVIDENCE_REVIEW.md`：三人＝夠做探索性 demo 草稿；原句實為 Scene 參考）→ 對作者發**一次過合併問題**（貓形態街頭係咪公開講嘢、戰鬥加唔加警告、晴香對貓／操稱呼、場8 零台詞確認）→ 作者答完 Stage 5 夠用版 → Stage 6。
**回主線提示**：Stage 5 退出條件見 §1.5；Stage 6 場景設計可預設先行、同工作坊並行；Stage 7 前要答 `PRODUCTION_GAP_AUDIT.md` §1 嘅 NEED_AUTHOR 項（貓形態戰鬥、直播 UI、屍骸消散、操腳本化助攻接口）。
**前置**：無新資料需要；唔需作者額外提供（Q-5 可選）。

## 9. Change Log

- 2026-09-29：建立本檔；記錄 C-1~C-7、D-01~D-07；Stage 0 DONE；Stage 1 AWAITING_DIRECTOR。
- 2026-09-29（第二次）：作者揀操入隊、去紫音、要街景、魔法屍骸戰鬥；D-06/D-08 落檔，C-1 修訂；Stage 1 DONE；新建 SCOPE_AND_CUT_LIST.md（方案 1/2/3＋cut list＋去紫音影響核查＋完整版補返清單）；Stage 2 AWAITING_DIRECTOR。
- 2026-09-29（第三次）：作者揀方案 3，尾巴改為操掉牙暗示（D-09）；Source check：操 Stage 1（牙齦滲血）canon 屬 Act II 前期、Stage 2a 真掉牙屬 E-09a → 暗示強度限 Stage 1 級並標 REVALIDATE_REQUIRED；SCOPE_AND_CUT_LIST 加場 8、cut list、影響核查、補返清單第 7/8 項；Q-3 RESOLVED；Stage 2 DONE。
- 2026-09-29（第四次）：Stage 3 DONE（`FACT_AND_KNOWLEDGE_STATE.md`：進場狀態、8 場觀眾知識、塔範圍規則核實、標記表）；Stage 4 DONE（`PRODUCTION_GAP_AUDIT.md`：Gameplay 10 項、美術 12 項、文件缺口）；停低俾作者過目。
- 2026-09-29（第五次）：作者更正：gameplay 本身就喺街上，C-1 作廢；G-1 改 HAVE。開始 Stage 5。
- 2026-09-29（第六次）：Stage 5 第一版完成：操 voice bible（Discovery Workshop）＋操／晴香／美夜子動作表演文件；清走 §3／D-03／Q-2 嘅過期課室限制字眼；Stage 5 → AWAITING_DIRECTOR。
- 2026-09-29（第七次）：作者糾正「應該用 skill 慢慢做」。已做業界研究（LIWC／會話分析／禮貌理論／粵語語氣詞／雙層語言／停頓與認知負荷），並升級 `story-character-voice-designer`：預設推薦慢速工作坊（§3.1）、新增 §8B 說話心理分析層（10 維度＋Speech Analysis Card）。上一版操 voice bible 及三份表演檔降級為 VOICE／PERFORMANCE CANDIDATE；Stage 5 改為逐微場景工作坊重做（由操 M1 開始）。
- 2026-09-29（第九次）：作者質疑 Stage 1–4 內容同聲線聖經處理。核實後發現 Stage 4 將晴香／美夜子說話方式標 HAVE 係錯判（舊 bible 冇自然化／說話分析／自稱表／語料對照，卻標「正式版」）。已記 D-12：三個角色一律按新 workflow 重做，舊 bible 降級為證據輸入並加頂部提示；gap audit D-2／D-3 改 REDO；Stage 5 加重做清單。
- 2026-09-29（第十次）：作者指出 M1 粵語對白未準確、質疑冇先分析。承認舊 A/B/C 未做分析（丟失 canon 書面語域標記、加咗 canon 冇嘅「行開」）。已按新 workflow 重做：evidence triage、語料補查（書面語喺配音稿＝角色標記／半書面）、Speech Analysis Card、N1–N4 過 Native Cantonese Gate、初步 Swap／Compression；舊 A/B/C 標 SUPERSEDED；Q-4 改問語域。
- 2026-09-29（第十一次）：作者要求善用其提供嘅粵語語料令 output 更準，並叫我自己睇成個 CantoCaptions repo。已探索全 repo（人手配音 28 套動畫＋9 套電影、原創 6 套劇集＋30 套港產片），淨 566 檔／21.6 萬句；建 `tools/cantonese_corpus.py`（功能檢索＋自然度檢查）；skill 加 §8E 必經關卡；研究筆記加 §3.1；操 M1 重跑（`misao_M1_corpus_rerun.md`）：查出「難看／歸我／雙眼／污染」皆非真人配音用法，候選改為 P1–P4。語料檔留本機 C:/ccx，不入 repo。
- 2026-09-29（第十二次）：作者揀操 M1 P1（半書面口語版，PROVISIONAL）。M1 收尾；開始 M2。
- 2026-09-29（第十三次）：作者揀操 M2 S2「做乜擋喺度。」（PROVISIONAL；冇附原因；Head Writer 原傾向 S0，以作者為準）。作者問而家做緊咩 → 答：Stage 5 聲線 bible（Stage 8 場景說話狀態／Stage 10 對白嘅前置）；夠用版＝操 M1–M5＋美夜子＋晴香各自幾個微場景＋稱呼表＋auditor＋聽感確認，唔需要覆蓋晒所有情緒。下一步：M3（場5 傲嬌入隊）。
- 2026-09-29（第十四次）：作者揀操 M3 T1（保留「庶民」；PROVISIONAL）。作者指示：**操做完先再重做美夜子同晴香**。開始 M4：語料查出「色打架／基本嘢」冇用例（改「唔襯」「小意思」），出 U1／U2 候選，等作者。
- 2026-09-29（第八次）：作者要求比較「書面語先寫 vs 粵語先寫」＋跨語言（日文等）研究；完成研究並提供 CantoCaptions 語料（Hattori 配音、Another World）。新建 `_CANTONESE_DIALOGUE_RESEARCH.md`（研究＋D-10 決定＋語料基準＋使用規程）；skill 新增 §8D 並補 Hard Rules；記錄 D-10（PROVISIONAL）、D-11；操 M1 加語料對照；tracker 新增 §1.5 大局錨點（主線／支線界線／Stage 5 退出條件／微場景清單），Stage 5 → IN_PROGRESS。補記：§8C 曾誤解為配音技術，作者更正後已改寫為對白設計參考。
- 2026-09-29（第十五次）：作者揀操 M4 U1，並指示「唔好一次淨係問一題，Loop 完先一次過問」（已存 feedback 記憶）。操 M4 定案；M5 Head Writer 暫定零台詞；操收尾（採用句表、Voice Engine 候選、自稱／稱呼表）完成。已起草 `miyako_voice_discovery.md`（MY1–MY3）同 `haruka_voice_discovery.md`（MH1–MH6，MH6 DEFERRED）。下一步 auditor → 合併問題。
- 2026-09-29（第十六次）：跑 evidence-auditor，新建 `VOICE_EVIDENCE_REVIEW.md`。更正：原標 CANON_DIRECT 嘅原句實為 ACT_I_BEAT_SHEET [SCENE REFERENCE]；CDL-084 逐字句係「例」；貓形態講話引錯 CDL-109（改引 Brief 私密場合）。結論：三人 EXPLORATORY 夠用（美夜子偏弱）。下一步：合併問題。
- 2026-09-29（第十七次）：作者糾正：起草唔應自己揀晒，要攤候選一次過問（已更新 feedback）；並指示美夜子／晴香說話＝功能向、白直、唔含糊（「應該有效」作廢）、唔大話、語言藝術要細；skill 新增 §8F 言癖 Step。美夜子／晴香工作坊加 §7 風格校準 R2＋言癖候選表；等作者揀。
- 2026-09-30（第十八次）：作者揀美夜子場3「以前有人用過。有用。」、場2「呢邊。」「唔好郁。會斷。」「後面。」；指明**言癖獨立再處理**（新增獨立任務 V-1，唔並入微場景）。晴香各場仍未揀，等作者。
- 2026-09-30（第十九次）：作者揀晴香場1「一齊影張相吖！／喂，唔好啊！」、場2「我得㗎！」、場3「咩嚟㗎？／交畀我！」、場4 唔加關心句、場5「噉咪即係入隊囉！」、場7「哇，操你好叻喎！」＋笑（唔戳穿好人）、對貓叫「美夜子你隻衰貓」（詳見 haruka_voice_discovery §9）。下一步＝言癖 pass V-1。
- 2026-09-30（第二十次）：言癖 pass V-1 完成並由作者揀（操：庶民／評形／更正句／書面詞；美夜子：單詞命令＋事實、唔叫名；晴香：好彩起手／一齊…吖／助詞分工）。詳見 character-voice-workshops/_YANPIK_PASS_V1.md。下一步＝auditor 覆核 → Stage 5 夠用版。
- 2026-09-30（第二十一次）：auditor 覆核完成（三人均 EXPLORATORY OK，美夜子範圍窄；抽查糾正 10 個語料數字）。作者定：操場7 改「小意思。……下一個，過嚟。」（去唔好亂講）；言癖冇每句／每場頻率限制。未解：貓形態公開講嘢、美夜子場3 前句、場6/8 及稱呼 → Stage 8。


- 2026-09-30（第二十二次）：作者澄清：喺 demo 範圍內由粗到幼傾（試驗方法）。Stage 6 暫停；已有決定降格待重確認；主線回到 demo 範圍粗層討論。
- 2026-09-30（第二十三次）：作者要求粗層範圍比 demo 大。粗層改為 Act I 六 Sequence，demo 段＝SEQ3 內 Beat 2 之細層。
- 2026-09-30（第二十四次）：作者定 demo＝好暖＋少少不安（伏筆），其餘照舊。建 `DEMO_BEAT_LAYER.md`（8 個 demo beat，Beat 層）；待作者批呢層先入 Stage 6。
- 2026-09-30（第二十五次）：作者質疑「點解一定市民圍觀直播」。跑 story-solution-space-designer，寫 DEMO_BEAT_LAYER §6；建議 C3（UI 常駐＋人群邊緣三時刻反應）；圍觀原本 canon 只係『配合』。待作者答：操答應入隊喺人群面前定私密。
- 2026-09-30（第二十六次）：作者指出要有可推導 pipeline，唔係候選比較。承認第二十五次係事後歸納。重做 DEMO_BEAT_LAYER：§2 加「上游來源＋證據級別」欄；§6 改為 L0–L9 追溯鏈。結果：直播 UI＋人群歡呼／求簽名＝Outline 已寫（人群子句標 NC）；「公眾壓力」係抄 Scene Reference（UNSUPPORTED，已刪）；D2 真後果＝美夜子非計劃保護（Beat 2／CDL-083，原表漏咗）；操入隊公開／私密係 Scene 舞台選擇，預設私密、唔開 Director 問題（撤銷第二十五次待答項）。
- 2026-10-01（第二十七次）：作者要求「由頭慢慢做、有決定先問、過程可推導可改」。orchestrator skill 新增 Derivation Trace Discipline；建 `DERIVATION_LEDGER.md`（Act I 總覽 → SEQ3 → Beat 2 義務 O1–O12 → demo beat B0–B11，每節點有 Derived-from／證據級別／狀態）。舊 DEMO_BEAT_LAYER.md 降格為 Reference-only（事後 audit：D1–D8 與 B0–B11 一致，「公眾壓力」無對應）。NC／HW 待否決：B0 開頭日常、B11 尾鉤操牙（提前 Stage 1）。唯一要作者決定：尾鉤係咪仍用操牙（見 ledger §4 待定 2）。
- 2026-10-01（第二十八次）：作者追問「硬性義務有冇質疑／有冇多 sub agent 提問 skill」——承認上輪漏咗。跑五路盲審（證據／角色邏輯／主題調性／canon 衝擊／魔鬼代言人）。結果：v1 多處錯評（人群位置、B8 臨時留低、B10 暖收束、O5／O10 用詞）；補 CDL-322（操順手救路人）；B2 併入 B3 因果；加 B4b／B6b／B7b；人群歡呼改戰鬥後安全區。作者定尾鉤真掉牙→登記偏離（提前 Stage 2a、燒 Beat 3 首次代價），demo 內 PROVISIONAL。ledger §7–§11 已更新；orchestrator skill 加規則 9–11（Inherited Obligation Challenge／Deviation Register／縮寫核對）。
