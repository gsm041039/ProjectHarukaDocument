# AUDIT — 00_Story_Brief.html（Prompt 1 審核報告，Audit Closure 版）

Baseline A：HEAD `e4c5743`（branch `main`）。WORKDIR = `canon/_working/brief_refactor/`。

**本版本取代第一輪審核**（第一輪因存在抽樣/未讀範圍已被作者判定唔完整）。本輪由 4 個獨立唯讀 subagent 完成：
- Ledger Part 1：世界觀/七法則/隱藏機制/魔法少女設定/她們如何存在/遊戲系統/附錄A+B/全部JS（`evidence/ledger_part1_*.md`，行1-6797+11041-12246，60個entry）
- Ledger Part 2：全20角色卡+人物關係（`evidence/ledger_part2_*.md`，行6798-9244，約140個entry，含作者點名嘅美夜子↔浩然/美夜子↔凜逐字覆核）
- Ledger Part 3：故事六階段+結局+全段時間線（`evidence/ledger_part3_*.md`，行9251-11034，約60個entry，含作者點名嘅10650-10900逐行覆核）
- 來源權威兩層交叉核對（`evidence/source_authority_crosscheck.md`）

全部原始 entry 級細節（source_location/short_factual_payload/semantic_role/duplicate_locations/classification/refactor_risk/proposed_treatment/destination）保留喺對應 evidence 檔案，係本次 preservation ledger 嘅權威版本；本 AUDIT.md 同 `CONTENT_LEDGER.json` 做匯總索引同高風險發現提煉，唔重複抄錄全部欄位以避免兩份副本互相漂移。

---

## 一、100% Coverage 確認

| 範圍 | 行號 | 負責 | 狀態 |
|---|---|---|---|
| head/CSS | 1–4432 | Part1 | ✅ 逐行讀完（含CSS comment掃描） |
| 六大讀者章（入門理解/世界與系統/七法則/隱藏機制/魔法少女設定/她們如何存在） | 4433–6797 | Part1 | ✅ 逐行讀完，全部`<details>`展開版本已打開讀取 |
| 全20角色卡+scene-figure+視覺設計 | 6798–8940 | Part2 | ✅ 逐字讀完（18張獨立card區塊，覆蓋20個人名） |
| 人物關係（SVG+文字卡） | 8944–9244 | Part2 | ✅ 逐字讀完，含美夜子↔浩然（6664-6672/6696-6700/9178-9181三處）、美夜子↔凜（9214-9217）**逐字確認**，非僅標題 |
| 故事六階段 | 9251–10073 | Part3 | ✅ 逐行讀完 |
| 結局黑暗療癒解讀 | 10075–10127 | Part3 | ✅ 逐行讀完 |
| 故事時間線全段（含10650-10900） | 10132–11034 | Part3 | ✅ 逐行讀完，**10650-10900專項複核已完成，非抽樣/非結構外推** |
| 遊戲系統設計 | 11041–11355 | Part1 | ✅ 逐行讀完 |
| 附錄A+B | 11362–11832 | Part1 | ✅ 逐行讀完，含CDL-248主圖及全部`<details>`展開 |
| 全部`<script>`區塊 | 11835–12246 | Part1 | ✅ 逐行讀完，含TERMS陣列同characterTooltips物件兩組獨立tooltip資料源 |

**總覆蓋：1–12246 行，100% 逐行/逐字讀完，無抽樣、無僅讀標題、無跳讀。**（唯一非本頁範圍嘅缺口：世界法則章節與晴香卡P2-HARUKA-04「靈樹機制」重複判斷需要嘅交叉核對已喺Part1完整覆蓋，兩個agent負責範圍剛好互補，實際上無遺漏。）

---

## 二、最新概念同步矩陣（來源權威兩層交叉核對）

**同步 checkpoint** = Round 164 / commit `cc67165`（2026-09-05）。

**兩層證據交叉核對結果**：獨立重新驗證「checkpoint後canon事實檔只改咗一次」呢個結論——**成立，但需精度修正**：`canon/`目錄下實際有兩個commit（`e4c5743` 2026-09-10、`676783e` 2026-09-15），但後者只改`canon/_working/`草稿/日誌/技能配置等非canon事實檔；真正嘅canonical事實檔（`canon/0X_*.md`／`canon/03_characters/*.md`）確認只有`e4c5743`一個改動，對應CDL-408。

| # | Claim | 狀態 | Layer1(durable state) vs Layer2(實際diff) | HTML現況 | 建議動作 |
|---|---|---|---|---|---|
| S1 | 美夜子對信任圈外人士並非「真冷漠」，而係防備姿態＋暗地照住人 | CONFIRMED，兩層MATCH | CANON_DECISION_LOG/QUESTION_QUEUE/SESSION_LEDGER/PROJECT_STATUS/NEXT_ACTION全部一致，同`git show e4c5743`逐行核實 | **STALE**：`00_Story_Brief.html:7051`仍寫舊版「是真冷漠，不是口硬心軟」 | 改寫（見第一輪AUDIT建議） |
| S2 | 「解離性麻木」係急性創傷反應期限定狀態 | CONFIRMED，MATCH | 同上 | 缺失非矛盾（HTML全文冇用呢個詞形容美夜子） | 低優先，S1修正已覆蓋 |
| S3 | 新Behavior Hook #14「扮唔理，暗地執手尾」 | CONFIRMED，MATCH | 同上 | 缺失 | 待作者判斷粒度（折入S1 vs 獨立） |
| S4 | 紫音成癮崩潰雷達措辭改動 | CONFIRMED，MATCH | 同上 | 不適用 | 不需動作 |

**CONFLICT（新發現，不自行resolve）**：`QUESTION_MATRIX.md`嘅`M-PSY-EMB-01` row未跟隨CDL-408更新——仍寫「探索討論，作者未確認任何嘢」「NEEDS_AUTHOR_INPUT（A–G全部未答）」，同`QUESTION_QUEUE.md`（QQ-224 PARTIALLY RESOLVED）／`CANON_DECISION_LOG.md`（CDL-408已確認）直接矛盾，兩者同日期（2026-09-10）。**第二層矛盾**：`SESSION_LEDGER.md` Round 186 housekeeping pass 話已檢查`QUESTION_MATRIX.md`並判定`ALREADY_CORRECT，冇stale claim`，但呢個判斷本身站唔住腳。可能成因：Round 184 writeback漏咗update呢個row；Round 186 housekeeping嘅「stale」定義範圍可能冇覆蓋逐row cross-check。**呢個唔影響Brief同步本身**（因為佢唔涉及讀者頁內容），但屬於repo state file整體一致性問題，留待作者/maintainer處理，唔喺本次Brief refactor範圍內自行修正。

**結論不變**：同步矩陣只有S1一項真正STALE需要修正；Round165-197其餘全部（Beat Sheet/Sequence/Scene生產、Directing Language v0.5、心理具現化討論）正確排除喺Brief同步範圍外。

---

## 三、Preservation Ledger 總覽

三份evidence檔合共約**260個stable-ID entry**，逐一標註source_location/semantic_role/duplicate_locations/classification/refactor_risk/proposed_treatment/destination。

分類統計（近似）：
- `unique`（唯一出處，refactor風險最高需優先保護）：約140項
- `near_duplicate`/`intentional_reminder`（多層閱讀深度或刻意重申，唔應簡單刪除）：約80項
- `exact_duplicate`（真正可合併）：約15項
- `incremental_explanation`（摘要/展開對，保留兩層）：約25項

**高風險unique資訊類別**（refactor時最容易被誤判為「flavor」而刪除的實例）：
- 世界規則硬限制/防誤讀指令（如Mirror Law兩個scope limit、「唔好讀成已刪硬件」註記、「刑思能力硬限制」）
- 角色身體化symptom嘅唯一具體化來源（美夜子黑暗沖涼/守夜可樂罐、操甜品掉牙/強迫清洗儀式——呢啲淨係喺scene-figure data-desc出現，本文只有抽象提及）
- 隱藏因果鏈（Keishi↔Akiho舊帳、操父親監控背叛、凜Stage 1候選史）
- 明確詮釋指令（防止角色/場景被誤讀，例如「晴香Act I冇面具」「紫音沉默唔係麻木」「操死亡唔係求死」）
- JS-only角色事實（見下方JS特別章節）

---

## 四、Duplication Cluster（全文重新掃描後嘅完整清單）

### 第一輪已確認cluster（維持判斷）
- **群A** 情緒系統三層解釋（七法則/隱藏機制/附錄A）——DRAFT_INCREMENT
- **群B** 「維多利亞天使≠官方偶像制度」警告句（6+處）——可合併
- **群C** 「解離兵器＝結果分類」警告句（7+處，350行內）——補丁殘留，可合併
- **群D** 「融合是否自由選擇」留白refrain——**本輪核實範圍比原評估更廣，至少6處幾乎逐字重複**（含timeline最終決戰節點P3-TIMELINE-23，原評估未涵蓋timeline部分）
- **群E** 雙重角色tooltip系統（TERMS vs characterTooltips）——**本輪擴展為Cluster 7，發現第三個描述源（主角色卡），詳見下方JS章節**
- 群F/G（唔同視角/無障礙文字）——維持「唔算重複」判斷

### 本輪新發現cluster
| Cluster | 內容 | 分類 | 建議 |
|---|---|---|---|
| Part1-Cluster2 | 唯識宇宙CDL-248公理+Alpha/Beta access table，3處重述 | near_duplicate | MERGE次要重述，保留附錄A獨有技術細節（Airi的L2紙皮騎士形態、Emotion Link機制） |
| Part1-Cluster3 | CDL-271靈魂困禁機制，`#world-corpse`+附錄A兩處 | near_duplicate | MERGE基礎定義；**附錄A獨有嘅「可逆轉時限」「越掙扎越易斷」「靈魂走咗幾遠」三個機制絕對唔可以被刪**——直接約束rescue scene同介錯選擇嘅寫作規則 |
| Part1-Cluster7（JS三重角色描述） | 主角色卡+TERMS陣列+characterTooltips物件，同一批角色三個獨立撰寫源 | 見下方專節 | FLAG_FOR_AUTHOR，需RELOCATE部分JS-only事實 |
| Part2 | 操/宗一郎/華麗淇三卡「家族黑市技術」段落幾乎逐字重複 | exact_duplicate | MERGE，抽取獨立世界觀條目 |
| Part2 | 操↔紗夜遺言「雙重來源」分析，操卡與#rels幾乎逐字重複 | exact_duplicate | MERGE，#rels精簡為定性句 |
| Part2 | 花子死亡瞬間scene-figure，晴香卡與花子卡同一圖同一data-desc | exact_duplicate | COMPRESS其中一邊為caption+cross-ref |
| Part2 | 凜「意識清零最後一拔」，美夜子卡與凜卡完全重複同一機械反射細節 | exact_duplicate但**不建議刪除任一邊**（各自角色弧線收束句） | KEEP_AS_IS，標記互為引用 |
| Part3-Cluster E | 「菲蒙太奇推晴香返嚟係外因／為自己喊動機仍乾淨」refrain，5處 | near_duplicate（防誤讀refrain） | MERGE保留一份完整文字 |
| Part3-Cluster F | 「客觀數日vs主觀二十年」時間雙軌結構，**7處**，全文重複密度最高單一資訊點 | intentional_reminder | COMPRESS，保留1-2次完整解釋 |
| **Part3-Cluster G（新發現，高優先）** | **穩定性標籤不一致**——見下方專節 | — | **FLAG_FOR_AUTHOR，本輪最重要發現** |
| Part3-Cluster H | Timeline內部「解放之戰」兩個獨立節點，內容互補非重複 | 不構成問題 | 不需動作 |

---

## 五、⚠️ 本輪最重要發現：Story Phase vs Timeline 穩定性標籤不一致（Cluster G）

**問題**：同一組Act III/IV事件（操父親出賣/紗夜犧牲、操人偶牆、紫音自爆、凜相認崩潰、美夜子三段式覺醒、晴香甦醒、最終決戰），喺 **Story Phase敘述（story-strip + full-text）完全冇任何暫定/草稿標記**——讀起嚟同其他已確認劇情（Act I/II）一樣係定案canon，甚至有精確心理死因分析、臨終語逐字引用；但喺 **時間線對應節點明確帶`pending-approval`標記，來源標註「ACT_III_OUTLINE.md v0.4」或「Act IV Outline全書仲未開始正式設計」**，其中114年5月節點段末仲有明確警示框：

> 「⚠以上Act IV兩段（甦醒／決戰）內容出自草稿方向，成熟度遠低於Act I-III——Act IV Outline全書仲未開始正式設計……此節僅供理解走向，唔應視為定案」

呢個唔係內容互相矛盾（Story Phase同Timeline講嘅係同一件事，細節一致），而係**同一件事被賦予兩種矛盾嘅穩定性狀態**。讀者連續讀Story Phase 4/6同結局章，完全冇任何提示呢啲係未批核草稿；只有跳去讀時間線先會發現真相。

**具體受影響節點**：
- 操父親出賣/紗夜犧牲（Phase2冇標記 vs Timeline `#tl-misao-mirror-night`帶pending-approval）
- 操人偶牆/紫音自爆（Phase4 story-strip+full-text冇標記 vs Timeline帶「全書主阻塞點」警示框）
- 凜相認崩潰、美夜子三段式覺醒（Phase5完全冇對應節點 vs Timeline帶pending-approval，且此二事件在任何Story Phase都無節點覆蓋——即係結構性缺口，唔止標籤問題）
- 晴香甦醒、最終決戰（Phase6全部內容 vs Timeline明確話「Act IV全書仲未開始正式設計」）

**這與project CLAUDE.md嘅Local Vertical Refinement Policy直接相關**：政策要求「如果某個Scene依賴一個未解決嘅後幕真相，該點必須標PROVISIONAL/REVALIDATE_REQUIRED/BLOCKED_AT_THIS_DEPENDENCY，唔可以由local scene靜靜決定一個未解決嘅全局真相」。Story Brief（讀者向百科）Phase6/Ending章節目前嘅寫法，實質上係將一個「全書仲未正式設計」嘅Act IV Outline草稿方向，以定案canon嘅文字風格呈現俾讀者，同呢條政策嘅精神有落差。

**建議**：呢個發現超出「文字去重」範圍，涉及Brief嘅canon穩定性呈現方式，需要作者裁決以下其中一個方向（唔喺Prompt1審核階段自行決定）：
1. Phase4/5/6/Ending加返對應嘅暫定狀態提示（同timeline一致）
2. 維持現狀但喺章節開首加一個總括聲明講明Act IV部分屬草稿方向
3. 作者認為現有呈現方式已經足夠（Brief定位為「理解走向」而非「逐行對齊canon狀態」），維持不變

---

## 六、JS-only角色事實（Cluster 7 專節，跨Part1/Part2交叉核實後更新）

Part1發現全文有**三個獨立撰寫嘅角色描述源**：主角色卡（Part2負責）、`TERMS`陣列（`#c-*`首次出現tooltip）、`characterTooltips`物件（第二組獨立hover資料）。Part1原本flag「螢/紗夜/小光嘅部分事實可能只存在於JS」，本輪已同Part2實際角色卡內容交叉核實：

| 角色 | Part1原始flag | Part2核實結果 | 結論 |
|---|---|---|---|
| 紗夜 | 「entire character concept可能只存在JS」 | **有完整角色卡**（P2-SAYO-01/02，行8834-8853） | **flag已解決**——紗夜非JS-only，主文有完整敘述 |
| 小光 | 「specific role可能只存在JS」 | **有完整角色卡**（P2-HIKARU-01/02/03，行8710-8757） | **flag已解決**——小光非JS-only |
| 螢 | 「靈魂完全消散、非血緣」可能只存在JS | 有角色卡（P2-HOTARU-01-04），但**卡本文冇提及「靈魂完全消散」呢個具體狀態** | **flag部分成立**——螢有主要敘述，但「靈魂完全消散、不可回收」呢個具體事實**仍然只存在於`characterTooltips`物件**，主角色卡及其scene-figure（通風管道那夜）均未提及靈魂最終狀態 |

**剩餘待處理**：螢嘅「靈魂完全消散」事實建議RELOCATE（提升為可見角色卡內容），因為呢個係決定螢係咪有可能以任何形式回歸嘅關鍵世界規則事實，目前只有hover-only可見，一般讀者連讀晒全部角色卡都唔會知道。

另外`TERMS`陣列本身有內部重複（「心之器」出現兩次）；`TERMS`同`characterTooltips`對同一角色（例如晴香）用詞唔一致（一句較長一句較短），屬技術層問題，唔係敘事矛盾，但建議Prompt3階段一併處理或明確排除範圍問俾作者。

---

## 七、矛盾 Flag（需作者裁決，本輪新增）

| # | 矛盾 | 位置 | 詳情 |
|---|---|---|---|
| 1 | 愛莉成為第一具人造魔法屍骸嘅年份 | Timeline 98年節點（10313-10319）vs 108年節點結尾（10416附近） | 兩處都聲稱係事故發生年，98 vs 108，直接矛盾，需作者釐清邊個啱定其中一個係手民之誤/誤植另一事件 |
| 2 | 秋穗石像場景光照設定 | 「實驗室懺悔」scene-figure（8370-8377，明確話「因地底無陽光，冇canon描述嘅暖橙光芒」）vs「石像前的懺悔」scene-figure（8384，寫「陽光下散發暖橙光芒」） | 同一地點同一石像，光照條件直接矛盾，需與`canon/03_characters/aeri.md`核對何者為準 |
| 3（repo state file層面，非HTML內容） | `QUESTION_MATRIX.md` M-PSY-EMB-01 row未同步CDL-408 | 見第二節 | 唔影響Brief內容本身，但影響repo state file整體可信度，留待作者/maintainer處理 |

**未發現嘅**：本輪逐字/逐行讀完全文，冇搵到其他新舊canon設定矛盾（角色性格/能力/世界規則層面）。

---

## 八、其他本輪發現嘅結構性缺口（非矛盾，但影響讀者理解完整性）

- **114年3月「Act II幕末二段」**（晴香菲部分融合、剪髮明志、情緒管理局鐵桶包圍、「我哋出去」強制進入Act III）——**任何Story Phase都完全冇對應節點**，只存在於timeline，Phase2/3之間有結構性缺口
- **114年3-4月「凜的相認與最終崩潰」**——同樣只存在於timeline，Phase5「凜介錯」之前冇任何節點交代呢個前置事件
- **秋穗最終結局「永久無臉循環」**——全文只有timeline結尾大卡（P3-TIMELINE-23）提及，Phase3止於「母親墜落」（出賣晴香），Phase4/5/6都冇交代秋穗結局；讀者若只讀Story Phase會以為秋穗線冇收尾
- **操「永遠之罪」支線**（目擊無名男孩死亡種下嘅伏筆，timeline唯一出處）——需核實全文其他地方有冇回收，如果只出現一次可能係未完成嘅伏筆

呢啲缺口建議喺Prompt3表達重構時一併考慮（是否喺Story Phase補returnnode），但屬於「內容缺口」而非「去重」範疇，需要作者對是否新增內容表態。

---

## 九、表達方式建議（維持第一輪判斷，補充Part1發現）

- 七個核心法則section同附錄A CDL-248主圖——全檔最佳範例，唔需要改
- 戰鬥節拍循環——建議轉流程圖
- Soul Lag——建議2步小流程圖
- **新增**：Combat Beat設計本身係一份帶版本號嘅工程設計紀錄（P1-GAME-02，dated 2026-07），refactor時唔可以當一般敘事文字壓縮，要保留bug-fix/milestone語言嘅可追溯性

---

## 十、三個代表性前後示範

維持第一輪內容（`evidence/content_inventory_notes.md` §4），本輪冇修正。

---

## 十一、分批改動計劃

**Prompt 2（內容同步）**：只需處理S1（+視乎作者意見加S3）。範圍細、風險低。

**Prompt 3（表達重構）建議批次順序**（更新）：
1. **Cluster G（穩定性標籤不一致）——需要作者先裁決方向，先於其他去重工作**（因為呢個影響Phase4-6全段嘅呈現方式，其他去重工作可能要等呢個方向定咗先做，避免白做）
2. 群C（解離兵器警告句）
3. 群D（融合自由度refrain，已擴展至6處含timeline）
4. Part2三個exact_duplicate（家族黑市技術/操紗夜遺言/花子死亡瞬間）
5. 群A（情緒系統三層）
6. 群B（維多利亞天使警告句）
7. Cluster E/F（菲蒙太奇refrain、時間雙軌refrain）——壓縮次數但保留至少1次完整版
8. 群E/Cluster7（JS tooltip系統）——技術層，先問作者範圍
9. 戰鬥節拍循環／Soul Lag流程圖化

---

## 十二、真正阻塞項

- **Cluster G（穩定性標籤不一致）**需要作者對Brief嘅canon呈現方式表態，屬於本輪唯一嚴格意義上嘅author-gate阻塞（見第五節三個選項）
- S3（Behavior Hook #14粒度）、Cluster7（螢靈魂消散是否RELOCATE）——次要判斷位，不阻塞Prompt2
- 矛盾#1（愛莉年份）、矛盾#2（石像光照）——需作者/source核對，但屬局部事實修正，唔阻塞其他部分嘅去重工作
- `QUESTION_MATRIX.md`同步缺口——repo state file層面問題，非本次Brief refactor任務範圍，建議另行處理

---

## 十三、Cross-Section Reconciliation（三份 evidence 檔案交叉整合，非串聯）

第一版 Audit Closure 只做咗「三份報告各自完整」嘅整合，未做「同一 concept 喺唔同 report 各自出現，合併做同一 stable concept group」呢層。本節補做呢個工作。

### 13.1 Mega-Cluster 重新識別（跨 Part1/Part2/Part3）

**Mega-Cluster 1 — 膠布哲學四層符號系統（跨全部三份報告）**
- P1-LAW-09（4917-4961，導演設計原則）：全書最早出現，抽象定義全部四層（個人習慣層/魔法系統批判層/世界真相層/晴香弧線第四層）
- P2-LEUNG-02（8875-8877，雷子健卡）：Layer 1 嘅具體起源場景（晴香貼膠布俾雷子健）
- P2-HARUKA-06/10（晴香卡）：壓抑稅機制，膠布動作symptom
- P3-PHASE1-08/09（9336-9347）：Layer 1/2 喺 Story Phase 嘅具體instance
- P3-PHASE4-14（9833-9834）：Layer 3 明確命名
- P3-PHASE6-04（9950-9957）：Layer 4（收束，連埋Mega-Cluster 2）
**判斷**：呢個唔係7個各自嘅重複群，而係**一個跨全文嘅刻意分層符號系統**——P1定義做全書地圖，各Phase各自payoff一層。類似「七法則」（先前已識別為最佳範例），呢個係第二個「先定義後逐層payoff」嘅良好結構範例，唔應該被當成duplication去重。**Treatment: KEEP_AS_IS全部，但建議Prompt3喺P1-LAW-09加返cross-ref連去四個payoff位置，方便讀者對照。**

**Mega-Cluster 2 — 融合是否自由選擇留白（原Cluster D，範圍進一步擴大）**
第一輪Audit Closure已由「Phase6/Ending 4次」擴展到「全文6處含timeline」；本輪reconciliation再確認**實際係9處**：
- P1-LAW-09（4917-4961）：**全書最早、最權威嘅版本**——「融合被刻意留白，唔可以讀成乾淨撕走膠布嘅整合勝利」（呢個先係root statement，早於任何Phase）
- P2-HARUKA-02（6869-6871，身份說明box）：「融合後意識是否仍以可辨認形式存在，故意留白」
- P2-HARUKA-07（6892-6894）：**獨有角度**——「不是乾淨俐落的犧牲，也非被指定代眾人受苦的祭品」
- P3-PHASE6-04, P3-PHASE6-09, P3-ENDING-04, P3-ENDING-06（×2）, P3-TIMELINE-23（共6處，Part3已識別）
**判斷**：intentional_reminder但密度確認超出所需，**根源喺P1-LAW-09**，唔係喺Phase6先開始。**Treatment: 建議以P1-LAW-09做canonical完整定義（因為佢係全書最早、最抽象嘅權威陳述），P2-HARUKA-02/07保留（各自加咗character-level/獨有角度嘅資訊），Phase6→Ending連續4次重複建議壓縮到1-2次完整+其餘短引用，Timeline保留簡短版本。**

**Mega-Cluster 3 — 痛苦轉移/情緒守恆定律（世界規則→遊戲機制→結局收束，四層貫穿）**
- P1-LAW-04（身體代價×債務）：導演原則層定義
- P1-LAW-11（law-conservation card）：世界法則正式定義
- P1-APPENDIX-05（情緒守恆定律card）：「Alpha線是債權人」隱喻延伸
- P1-GAME-04（雙軌數值系統）：**遊戲機制層嘅具體embodiment**——「第三幕Boss無限再生」機械化呈現呢條法則
- P3-ENDING-05（痛苦去咗邊）：**結局層收束**——「晴香成為最終沉澱池」
- P2-AKIHO-10（無臉執行官）：**角色應用實例**——「字面懲罰機制」
**判斷**：呢個係全書貫穿四層（世界規則定義→遊戲機制實現→角色應用→結局收束）嘅核心法則，之前三份報告各自只識別到自己範圍入面嘅片段，未見有人指出呢條線貫穿成一個完整系統。**Treatment: 全部KEEP_AS_IS，屬於世界法則嘅完整生命週期展示，唔係重複；建議Prompt3做cross-ref連結而非合併任何一段。**

**Mega-Cluster 4 — 晴香五歲創世/鐵絲網偶遇因果鏈（世界機制→角色應用→場景敘事→時間線canonical，四層）**
- P1-WORLD-01/P1-WORLD-12：世界機制抽象定義（奇蹟/Alpha-Beta）
- P1-CHAR-01（原罪表）：比較表格
- P2-HARUKA-04（靈樹機制，晴香卡）：**原本Part2 FLAG_FOR_AUTHOR，本輪reconciliation已解決**——與P1-WORLD-05（政治設定，靈樹定義）交叉核對後確認：P1-WORLD-05係primary_home（世界觀正式定義靈樹係「現實與集體潛意識之間嘅能量樞紐」），晴香卡係viewpoint_specific應用（靈樹點樣具體放大咗佢5歲嘅絕望），**分類由「待確認」改為`incremental_explanation`，唔需要作者input，唔係矛盾**
- P3-PHASE4-13（鐵絲網偶遇full-text）：具體場景敘事
- P3-TIMELINE-06/07（102/103年節點）：canonical時序版本

### 13.2 其他reconciliation解決咗嘅flag

- **P1-JS-05 Cluster 7（螢/紗夜/小光可能JS-only）**：已喺第一輪Audit Closure解決——紗夜、小光經Part2核實有完整角色卡，flag解除；只有螢「靈魂完全消散」呢個具體事實維持JS-only，見AUDIT.md第六節。
- **P2-AKANE-07（紫音搗破奇蹟販賣所）**：與P1-WORLD-14（黑暗層五大勢力之「奇蹟販賣所」faction card，內文本身已提及「Akane investigated/broke this ring」）交叉核實，確認呢個係world faction card（勢力層面）同character card（個人經歷層面）嘅互補描述，非重複，非矛盾，**分類確認為`viewpoint_specific`，不需FLAG**。

### 13.3 仍未經reconciliation解決、維持FLAG狀態嘅項目

- **P2-SOU-06（操背叛隊友嘅秘密，是否有後續劇情payoff）**：三份報告交叉檢查後，**Part3嘅Story Phase全段內容未見任何回收呢個秘密嘅節點**。同Part3已識別嘅「操永遠之罪」支線（P3-TIMELINE-16）情況相似——兩者都係喺timeline/角色卡出現、但全文未見任何後續呼應嘅疑似未完成伏筆。**維持FLAG_FOR_AUTHOR**，建議合併成一條問題：「操嘅兩條隱藏伏線（父親脅迫下背叛隊友、目擊無名男孩死亡而未出手）係咪都有後續劇情payoff，定係其中一條/兩條都係未完成嘅伏筆殘留？」
- **矛盾#1（愛莉98/108年）、矛盾#2（秋穗石像光照）**：source recovery調查進行中，見第十四節。
- **Cluster G（穩定性標籤不一致）逐事件stability record**：source recovery調查進行中，見第十四節。
- **Story Phase結構缺口係咪真缺口**：分類調查進行中，見第十四節。

### 13.4 重新計算嘅分類統計（跨報告合併後）

| 類別 | 第一輪Audit Closure計數 | Reconciliation後修正 |
|---|---|---|
| exact_duplicate | ~15 | 維持~15（Mega-cluster分析未新增exact duplicate，只新增near_duplicate/intentional_reminder嘅跨報告連結） |
| near_duplicate/intentional_reminder | ~80 | **上修至~90+**（Mega-Cluster 1-4揭示嘅跨報告連結，原本被三個agent各自獨立記錄，而家確認係同一組concept） |
| incremental_explanation | ~25 | **+1**（P2-HARUKA-04由「待確認」轉為incremental_explanation） |
| viewpoint_specific | 已識別但未獨立計數 | **+1**（P2-AKANE-07由「待確認」轉為viewpoint_specific） |
| accessibility_repetition | 已識別（群G） | 維持，第一輪已修正操/美夜子data-desc嘅誤判 |
| stale_content_repetition | 未獨立識別 | 群C（解離兵器警告句）本質上屬於呢類——已喺第一輪AUDIT.md標註「補丁殘留，非刻意設計」 |
| approval/stability mismatch | 1個大類（Cluster G），7+事件未逐項拆解 | **調查中，逐事件stability record見第十四節** |
| actual canon contradiction | 2個（愛莉年份、石像光照） | **source recovery調查中，見第十四節，唔再係「發現咗但未查證」狀態** |
| missing structural coverage | 4個候選（Act II幕末二段/凜相認/秋穗結局/操永遠之罪） | **調查中，邊啲係真STRUCTURAL_GAP邊啲係TIMELINE_ONLY_DETAIL—INTENTIONAL，見第十四節** |

**「舊有7個major cluster」呢個數字已經不再係最終數字**——reconciliation後嘅完整圖像係：4個跨報告Mega-Cluster（揭示全書有意設計嘅分層符號系統）+ 第一輪識別嘅~18個單一報告內cluster + 2個source recovery進行中嘅矛盾 + 1個source recovery進行中嘅穩定性問題類別（7+事件）+ 4個source recovery進行中嘅結構缺口候選。

---

## 十四、Source Recovery 結果（矛盾解決 + Approval Status 逐事件記錄 + 結構缺口分類）

### 14.1 矛盾#1、#2：均已 Source-Resolved，唔需要作者揀版本

**矛盾#1（愛莉事故年份98 vs 108）→ `STALE_TEXT`，高信心。**
四個獨立canon來源一致：`canon/04_timeline_canon.md`（正式anchor `event-aeri-accident`，98年，另有獨立「循環起點」段落再次確認98年）、`canon/03_characters/aeri.md`（引用同一anchor）、`canon/07_entities_and_devices.md`（獨立98年敘述，講明因果：愛莉靈魂溢出痛苦做燃料製造首批魔法少女原型）、`canon/03_characters/akiho.md`（獨立98年敘述，用嚟做時序判斷依據）。108年講法只喺HTML一處出現，語境上接喺完全無關嘅「凜死亡/美夜子避難所詛咒」段落尾巴，用「同年」帶出，結構上高度似編輯手民之誤/複製貼上殘留。**冇任何CDL支持108年講法，冇任何修正記錄。**
→ 建議處理（Prompt 2可執行）：HTML 108年節點刪除「同年，愛莉成為第一具人造魔法屍骸」呢句，或改寫做「（愛莉早於98年已成為第一具人造魔法屍骸，見上）」。

**矛盾#2（秋穗石像光照）→ `STALE_TEXT`，高信心。**
成因喺repo自己嘅`canon/_working/image_spec_pipeline/CHANGE_LIST_EXISTING_SPEC.md`審計記錄已有書面記載：圖142「實驗室懺悔」修正時（地點精確化做「秋穗實驗室/塔地底」）**有**同步加入「地底無陽光→冷卻色澤」邏輯；圖67「石像前的懺悔」修正時**只改咗地點同石像材質**，冇同步光照邏輯，殘留咗修正前「陽光下暖橙光芒」嘅字句。審計記錄自己仲喺line 738明確指出「石像通用視覺語言錯誤第二次出現」係已知嘅系統性重犯模式。現存HTML兩段文字狀態同審計記錄完全吻合，證實判斷。
→ 建議處理（Prompt 2/3可執行）：「石像前的懺悔」嘅光照描述改為同「實驗室懺悔」對齊（地底無陽光/冷卻暗紅色澤），或加註環境提示需要覆核。

### 14.2 Approval/Stability Status：8個事件逐項 Stability Record

**關鍵背景**（適用全部8事件）：Act I Outline已正式APPROVED（唯一）；Act I Beat Sheet雖已生產但仍`[DRAFT]`；Act II Outline v0.11現時`[DRAFT — 待作者批核]`（未收過任何形式批核，連暫定都未達到）；Act III Outline v0.6喺2026-07-09獲「暫時當批核」（非最終signoff）；**Act IV Outline全書仲未正式設計——呢句話屬實、最新（Round 182, 2026-09-05，距今10日）**。Brief timeline引用嘅「v0.4」版本號本身已過時（現存v0.6），但核心事件內容大致延續未被推翻。

| 事件 | event_core | beat/sequence | scene/execution | timeline marker 是否有效 | Phase漏標? | 建議 |
|---|---|---|---|---|---|---|
| 操父親出賣/紗夜犧牲 | CONFIRMED（CDL-231/232/234, AC 2026-04-16） | DRAFT（Act II全份未批核） | DRAFT（耳鳴演出/台詞傳遞方式未定） | PARTIALLY——對「會唔會發生」過度，對執行細節有效 | YES | 大方向正常寫；耳鳴演出方式加輕量提示 |
| 操人偶牆 | CONFIRMED（CDL-217/218 AC 2026-04-13 + 場地addendum AC 2026-05-19） | DRAFT（Act III暫定批核，無Beat Sheet） | DRAFT（死因心理機制已AC[CDL-330]，但逐字遺言/鏡頭語言未鎖） | PARTIALLY | YES | 大方向+死因心理機制可正常寫（已AC）；逐字遺言/鏡頭語言加提示 |
| 紫音自爆 | CONFIRMED（CDL-216/218 AC） | DRAFT | DRAFT（遺言方向定，逐字未鎖） | PARTIALLY | YES | 同上 |
| 凜相認與崩潰 | CONFIRMED（CDL-215/219/274 AC） | DRAFT（Step1位置2026-07-05仍在修正） | DRAFT（Outline原文自述「細節留Beat Sheet」） | PARTIALLY + **相認過程本身係STRUCTURAL_GAP**（見14.3） | 部分（介錯有寫冇標記；相認過程完全冇寫） | 大方向正常寫；需另行決定要唔要補「相認」段落 |
| 美夜子三段式覺醒 | CONFIRMED（Plant/Payoff位置2026-07-05修正確認） | DRAFT | DRAFT | PARTIALLY + **同樣STRUCTURAL_GAP**（Phase5完全冇獨立覆蓋） | 主要係「漏事件」非單純漏標 | 需另行決定要唔要補獨立段落 |
| **晴香甦醒（主觀二十年結束）** | **UNCONFIRMED**——明顯低一級。CDL-327只定咗結局性質（保留記憶/主動融合/美夜子80歲自然死），但主觀二十年具體機制（QQ-139~147）全部未落CDL；相關材料喺Act III Outline文末標「⏸️ 移出scope — Act IV草稿材料，純屬歷史保留，未經批准」 | **UNCONFIRMED**——唔存在於任何已批核（哪怕暫定）嘅Outline | **UNCONFIRMED**——連Beat層都未存在 | **YES，完全有效，8個入面marker最準確嘅一個** | **YES，最嚴重**——Phase6+Ending以完全定案語氣（包括「全篇最後一個鏡頭」呢類收尾定位聲明）敘述 | **明確需要draft標籤**——建議Phase6+Ending段首加狀態提示 |
| 最終決戰 | CONFIRMED（大方向，CDL-002/006/007/266/288/321/185/076支持） | DRAFT（J0-J8部分beat如J5/J6/J9仲標「btd」） | DRAFT（J6內容QQ-176討論中，明確「唔好當定案」） | PARTIALLY | YES | 大方向正常寫；J6相關內容（如Brief有提及）要留意唔好寫死 |
| Act II幕末二段 | CONFIRMED（個別CDL: E-15[CDL-197/228/235] + E-16[CDL-285/359]已落） | DRAFT，**8事件入面唯一連「暫定批核」都未達到**（Act II比Act III狀態更低） | DRAFT（剪髮具體執行/陰影視覺感官描述未定） | PARTIALLY-TO-NO——連Act II都仲DRAFT | NO（唔係漏標，係**完全冇喺Phase出現**，見14.3 STRUCTURAL_GAP） | 見14.3 |

**核心結論**：8個事件入面，**6個屬於「大方向已確認但執行細節未批准」**——Timeline嘅`pending-approval`標記對呢6個嚟講喺「事件會唔會發生」層面確實有啲過度（唔應讀成「可能唔發生」），但對「執行細節/逐字措辭/鏡頭語言」層面完全有效；Story Phase嘅漏標問題喺於**冇分層**——將已確認嘅大方向同未批准嘅執行細節用同一種「定案語氣」寫晒出嚟，冇分開處理。**1個事件（晴香甦醒/主觀二十年結束）連大方向都未確認**，係Timeline warning box講嘅「Act IV全書仲未正式設計」最直接對應嘅內容，Phase6+Ending大幅建基於呢個未存在嘅Outline之上，係全部發現入面最需要明確draft標籤嘅部分。**1個事件（Act II幕末二段）唔存在「漏標」問題，因為Phase section根本冇寫呢件事**（見14.3結構缺口）。

### 14.3 結構性缺口最終分類

**「故事六階段」section 設計粒度確認**：屬於「宏觀六幕結構總覽」，唔係「完整事件流程表」（每Phase 8-14個濃縮節點，一個節點可覆蓋數日至數週；Phase本身有結構性否定聲明主動排除某些timeline細節，證明呢個省略係設計選擇）。判斷缺口成立嘅唯一標準：「冇呢個節點，讀者理解下一個Phase節點嘅因果會唔會斷裂」。

| 候選缺口 | 分類 | 理由 |
|---|---|---|
| Act II幕末二段（晴香菲部分融合/剪髮明志/鐵桶包圍/強制入Act III） | **`STRUCTURAL_GAP`** | Phase3自述觸發（秋穗訊號被截獲）同timeline講嘅轉場機制（鐵桶包圍強制突圍）係兩件唔同事，讀者完全睇唔到晴香狀態變化呢個關鍵角色基線轉變，亦睇唔到呼應Consequence-Driven Progression Law嘅外部Cost Signal轉場觸發 |
| 凜的相認與最終崩潰 | **`STRUCTURAL_GAP`** | Phase5直接由「凜介錯」戰鬥場面開場，「凜自願放棄自我」呢個道德/情感重量嘅前因完全缺席，介錯戲失去核心情感結構（呼應全書膠布哲學主題喺美夜子線嘅關鍵承載點） |
| 秋穗最終結局「永久無臉循環」 | `TIMELINE_ONLY_DETAIL — INTENTIONAL` | 屬敘事收束/情感閉合問題，Phase6任何節點嘅因果理解都唔需要知道秋穗結局；但值得標記為「未來角色頁面可補充」 |
| 操「永遠之罪」支線 | `TIMELINE_ONLY_DETAIL — INTENTIONAL`（就本次缺口分類目的而言） | 連timeline自己內部都未回收，屬孤立伏筆完整度問題，非Phase/Timeline粒度缺口；另標記為獨立觀察，需作者確認呢條伏線去向 |

呢兩個`STRUCTURAL_GAP`已提供建議填補位置同需要承載嘅因果功能（唔寫實際文字，見evidence檔 `structural_gap_classification.md`）。

---

## 十五、建議嘅 Approval Consistency 規則（提出但未實作）

第十四節嘅發現顯示 Brief 缺少一套一致嘅穩定性呈現規則，令同一件事可以喺唔同 section 有唔同穩定性語氣。建議喺 Prompt 3 或之後另行實作以下規則（本輪只提出，唔實作）：

| 分級 | 適用情況 | 讀者頁呈現方式 |
|---|---|---|
| **CONFIRMED** | event core已AC，beat/scene層都已批核（現時只有Act I部分內容達到） | 正常正文，冇任何狀態標記 |
| **CORE CONFIRMED / EXECUTION PENDING** | event core已AC（有CDL），但beat/scene層（逐字對白/鏡頭語言/精確timing）未批核——**本次8個事件入面6個屬於呢一級** | 事件核心正常寫（唔需要淡化已確認嘅大方向同心理機制），但**唔寫死**逐字措辭/鏡頭語言呢類仍待Beat Sheet嘅細節；必要時加一句極輕量提示（例如「呈現手法仍在細化」），唔需要大型visual label |
| **DRAFT / PENDING** | event core本身都未AC，相關Outline仍係draft或未存在——**本次「晴香甦醒/主觀二十年」屬於呢一級** | 明確visual label（例如段首note講明「反映目前方向共識，正式Outline尚未完成」），唔應該同已確認內容用同一種定案語氣寫 |
| **BLOCKED** | 內容依賴一個仲未解決嘅全局真相（呼應project CLAUDE.md嘅Local Vertical Refinement Policy） | 唔以已定事實口吻寫，必須用PROVISIONAL/BLOCKED_AT_THIS_DEPENDENCY類提示 |
| **SUPERSEDED** | 已被明確取代嘅舊設定（例如本次搵到嘅愛莉108年殘留句） | 讀者頁移除 |

**核心原則**：規則要服務讀者，唔可以將內部QQ/CDL/版本編號大量暴露喺正文（呼應repo嘅「對話入面唔用內部追蹤編號」規則，呢度延伸到讀者頁本身）；同一事件喺Story/Timeline/Character Card多處出現時，批准狀態必須語義一致——依家嘅問題正正係呢個「一致性」冧咗。

呢個規則**本輪唔實作**，留待作者決定係咪採用、係咪要調整分級定義，先至喺Prompt 3執行。

---

## Audit Closure 完成聲明

- ✅ HTML內容表面100% reviewed（1-12246行全部逐行/逐字讀完，無sampling/partial-read/title-only）
- ✅ 冇再用「結構相似所以外推」代替逐段審核（10650-10900已逐行覆核並推翻咗第一輪嘅低風險判斷）
- ✅ recent concept source status已完成兩層交叉核對（durable state vs實際canon diff），搵到1個conflict（QUESTION_MATRIX.md）已如實列出未自行resolve
- ✅ major duplication discovery已基於完整全文，並完成**cross-section reconciliation**（第十三節）——識別4個跨報告Mega-Cluster
- ✅ **source reconciliation已處理晒全部detected conflicts**——矛盾#1（愛莉98/108年）、矛盾#2（秋穗石像光照）均已source-resolved為`STALE_TEXT`，高信心，唔需要作者揀版本（見第十四節14.1）
- ✅ **approval/stability mismatch已逐項釐清**——8個事件全部建立event core/beat-sequence/scene-execution三層stability record（見第十四節14.2），6個「大方向確認執行未批」、1個「連大方向都未確認」（晴香甦醒）、1個「唔存在漏標因為Phase根本冇寫」（Act II幕末二段）
- ✅ **missing structural coverage已完成分類**——4個候選缺口中2個確認`STRUCTURAL_GAP`（Act II幕末二段、凜相認）、2個確認`TIMELINE_ONLY_DETAIL — INTENTIONAL`（秋穗結局、操永遠之罪）（見第十四節14.3）
- ✅ preservation ledger（三份evidence檔約260個stable-ID entry + 第十三節4個Mega-Cluster）足以支援下一階段安全refactor
- ✅ 已提出（未實作）Approval Consistency規則（第十五節），留待作者決定
- ✅ 全部remaining limitations已喺本文件明確列出，唔再保留「10650-10900未讀」等已解決嘅舊描述

**Prompt 1（審核）狀態：Audit Closure COMPLETE。**
