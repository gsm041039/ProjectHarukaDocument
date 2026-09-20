# CANON COMPLETION & NARRATIVE DEPENDENCY AUDIT — GAP MAP

> 建立日期：2026-09-18
> 性質：唔係 Foundation/Worldbuilding audit（嗰份係 `FOUNDATION_AUDIT_GAP_MAP.md`，作歷史參考，唔刪）。呢份係 backward/forward trace——由已經寫低嘅 scene/角色/設定出發，揾「前後都有嘢，中間嗰件零件唔存在」嘅位。四個 agent 分別做 setup-payoff+設定交界、Act II-III 因果橋、角色知識鏈、continuity+unused canon。
> 規則：每條 GAP 必須指名一個現存場景/角色線正在依賴呢個未知答案，答唔到就冇入呢份清單。

---

## P0 — 現有核心高潮/結局無法成立

### GAP-01｜螢（愛莉）reveal 冇任何具體 beat 承載——「多謝你保護咗我咁耐」冇地基
**Type**: SETUP_PAYOFF_GAP + REVEAL_GAP（兩個獨立 agent 由唔同角度撞到同一個結論，互相印證）

**Existing A（已鎖死嘅方向）**：CDL-010/011/012（2026-03-26/27）早已 confirm 呢個 payoff 嘅方向、時機、媒介——深夜寫信/燒信儀式 + 「多謝你保護咗我咁耐」呢句台詞，鎖定 Act IV、彩講出呢句話嘅嗰一刻（`HARD_CONSTRAINTS_TABLE.md` HC-2c）。`CROSS_ACT_FORESHADOW_MANIFEST.md` P-A14/P-A15（紅絲絨熊公仔 + 「下次呢？」病態執著）Act I 已經種低視覺伏筆。

**Existing B（承載呢個 payoff 嘅場景）**：Act IV 彩對螢嘅告別場景本身——但 `LATE_REVEAL_SEEDING_AUDIT.md` 明講「深夜寫信/燒信儀式」呢兩個指定意象**冇任何一個 outline beat 實際寫低咗內容**，而 Act IV Outline 檔案本身完全唔存在。同時 `KNOWLEDGE_DEPENDENCY_MAP.md` 標記 AKS-S1-S3（螢揭示線跨幕鋪陳）為 **Critical** 風險，指出呢個係「全作最大情感重量」但由 Act I 到而家從未有獨立 beat 系統性建立「螢係邊個、螢同彩嘅關係、螢因何犧牲」。

**Missing Piece**：由「方向已鎖死」到「場景實際寫低」之間，成個 Act IV 冇檔案，連承載呢個 beat 嘅容器都未存在；而事前鋪墊（觀眾對螢呢個角色嘅認知/情感投入）亦都從未系統性建立過，只有彩/黑奏本身嘅鏡像法則埋位。

**Why this is required**：呢個直接係全劇最大情感頂點，唔止一場戲，係整條彩/黑奏弧線嘅情感基礎。

**What currently breaks**：觀眾喺 Act IV 收到嘅唔係「積累多時嘅釋放」，而係「突然被告知一個幾乎冇獨立出場過嘅角色好重要」——犧牲嘅重量會落空。

**Priority**: **P0**

---

### GAP-02｜HC-2b「螢死因機制」同螢實際死亡場景互相矛盾
**Type**: CONFLICTED_CANON

**Existing A**：`HARD_CONSTRAINTS_TABLE.md` HC-2b 講「螢不可復活。原因：**靈樹武器**在**屠殺**時連靈魂一同消滅（非普通死亡）」。

**Existing B**：`canon/03_characters/aya.md` + `canon/04_timeline_canon.md`（event-hotaru-death）寫嘅螢死亡經過——靈樹戰爭末期，6歲彩與螢躲避帝國軍搜索，螢塞熊公仔畀彩後衝出藏身處引開敵人，彩透過縫隙目睹螢被殺。**整場戲完全冇出現「靈樹武器」或「屠殺」，死因係被追捕士兵所殺。**

**Missing Piece**：「不可復活」嘅官方機制解釋（靈樹武器×屠殺）同實際寫定嘅死亡經過（帝國軍追殺）係兩件唔同嘅事。呢兩份文件要麼有一份係舊設定未更新（`HARD_CONSTRAINTS_TABLE.md` 頂部自己都標緊 PARTIALLY_STALE），要麼螢死亡場景仲欠一個「靈樹武器」嘅機制細節。

**Why this is required**：GAP-01 嗰場全作最大情感重量嘅戲，需要一個站得住腳嘅「點解唔可以復活」嘅世界規則支撐，唔可以兩份權威文件自己對唔上。

**What currently breaks**：呢個唔可以由 AI 自行 silent resolve（跌落 CLAUDE.md 嘅硬性規則），需要你決定邊一份係啱。

**Priority**: **P0**（直接卡住 GAP-01 嘅地基，建議同 GAP-01 一齊處理）

**2026-09-19 補充線索（未解決，只係新證據）**：今日 CDL-409（屍骸化觸發門檻）唔直接解決呢條 GAP——螢嘅情況唔係「屍骸化」，而係另一個獨立機制「**靈魂核銷**」（`01_world_rules_and_costs.md` 第783行：「靈魂被外力完全消滅、無碎片可回收（**螢案例**）」，同「靈魂切除」明確區分）。呢個發現本身可能已經足夠答到 GAP-02——「靈魂核銷」呢個機制只需要「外力完全消滅」（例如被殺），唔一定需要 HC-2b 講嘅「靈樹武器×屠殺」呢個特定裝置/場面；即係話 HC-2b 個別提到嘅「靈樹武器」可能先係嗰處 stale 嘅部分，而「螢=靈魂核銷案例」本身其實同已寫定嘅死亡場景（被追兵所殺）唔矛盾。**但呢個判斷未經你確認,唔可以自行 silent resolve,先記低,留返你話事。**

---

## P1 — 影響多個已存在場景

### GAP-03｜秋穗＝無臉執行官身份揭露：E-07c 承諾嘅 payoff 喺 E-11a 從未兌現
**Type**: STORY_DEPENDENCY_GAP

**Existing A（承諾）**：`ACT_II_OUTLINE.md` E-07c 明文限制——呢場戰鬥蒐集嘅情報只可以係戰術/組織層面，「唔可以洩露『無臉執行官=秋穗』，此身份揭露留返 E-11a」。E-04（Act I）同 E-07c 兩場戰鬥已經種低「晴香直覺熟悉感」伏筆。

**Existing B（實際 payoff 位置）**：`canon/04_timeline_canon.md` E-11a 事件本身只有三層坦白（監控真相/守恆法則/愛莉石像動機），**完全冇「無臉執行官=秋穗」呢一項**。真正呢個揭露（`event-faceless-truth`）被放咗喺「114年6月-134年6月：二十年守望」——即 Act IV，同 E-11a 相差成兩年故事時間、隔咗一個完整 Act，而且內容性質都唔同（timeline 講嘅係秋穗最終命運，唔係「曾經打過主角團」呢個角色層追認）。`ACT_III_OUTLINE.md` 更加明文承認呢個連結揭露「仍 btd Beat Sheet」——即根本未設計。

**Missing Piece**：一場令主角團將「E-04/E-07c 打過嘅無臉執行官」同「秋穗」連結返嘅具體場景，完全唔存在。

**Why this is required**：E-11a 已經係秋穗身份危機嘅正式攤牌場，觀眾理所當然會期望連 E-04/E-07c 嘅謎團一併解答。

**What currently breaks**：(1) E-07c 同 E-11a 互相矛盾；(2) E-04/E-07c 種低嘅伏筆懸空；(3) 呢個謎團會喺 Act II 末到 Act III 決戰之間（超過一年故事時間）冇人記得去問。

**Priority**: **P1**

---

### GAP-04｜彩＝黑奏漸進暗示線密度不足，J1「摘面具」恐變機械降神
**Type**: REVEAL_GAP

**Existing A**：`KNOWLEDGE_DEPENDENCY_MAP.md` 標記 AKS-A1（彩/黑奏真實身份揭示線）為「方向確認，具體設計 DEFERRED」。

**Existing B**：`ACT_III_OUTLINE.md` E-III-J1「黑奏摘面具」已排定為具體 beat，J2 明言呢個揭露要達到「道德處刑」級別衝擊力，設計說明自己強調「呢個係確認型揭露，唔係新資訊」。

**Missing Piece**：Act I Beat 4.5（E-1.5「彩/黑奏切換目睹」）只有一次明確懷疑觸發點；Act II 只有零星「彩卡頓」加深。晴香嘅懷疑程度喺漫長嘅 Act II 幾乎冇推進，直到 J1 先第一次確認。

**Why this is required**：J1 設計自己講明要「確認型」效果，前提係觀眾已經累積足夠懷疑。

**What currently breaks**：如果鋪墊密度唔夠，J1 會讀成硬塞反轉，而唔係「早該猜到，卻被殘忍證實」嘅道德重擊——直接違反 beat 自己嘅設計原則。

**Priority**: **P1**

---

### GAP-05｜世界免疫系統理論（魔法=止痛藥/緋潮=排斥反應）幾乎零鋪陳
**Type**: SETUP_PAYOFF_GAP

**Existing A**：`LATE_REVEAL_SEEDING_AUDIT.md`——呢套「魔法系統本質係止痛藥、緋潮係身體排斥反應」嘅框架，連一個 Act I/II 現象級暗示都搵唔到。

**Existing B**：Act III 尾聲一句台詞側面帶過整套框架，冇攤開。

**Why this is required**：呢套理論係維多利亞之淚制度合法性崩潰（`canon/01_world_rules_and_costs.md`「永動機幻象」）嘅機制性解釋骨架。

**What currently breaks**：緋潮真相揭露場景嘅思想衝擊力會被削弱——觀眾冇任何前置認知去理解「魔法＝止痛藥」，翻轉會讀成硬塞資訊而非揭示。

**Priority**: **P1**

---

### GAP-06｜屍骸化機制（1%殘餘意志/99%情緒廢料）現象有，但故事內從未正式揭盅
**Type**: SETUP_PAYOFF_GAP

**Existing A**：`canon/01_world_rules_and_costs.md`（CDL-271）canon 層面機制已經定義清楚。

**Existing B**：Act I「奪舍示範」間接暗示有殘餘意志，但**冇任何正式揭盅 beat 將呢個機制講畀觀眾聽**。

**Why this is required**：E-07b 三位一體道德辯論（「邊個先係弱小？」）、紫音「屍骸女皇」情感前置，全部依賴觀眾理解屍骸有殘餘意志，唔係純粹怪物。

**What currently breaks**：E-07b 嘅道德衝擊會失去理性根基，變成純情緒宣言而唔係推理後嘅震撼。

**Priority**: **P1**

---

## P2 — 局部場景/角色線需要補橋

### GAP-07｜Reality Stitching × E-09 直播失控——「無法修飾」嘅證據可信度邊界未定
**Type**: SETTING_INTERSECTION_GAP

**Existing A**：現實縫合機制講「旁觀者產生邏輯補完與記憶植入」；日常直播「以光幕濾鏡保護」。

**Existing B**：`ACT_II_OUTLINE.md` E-09「飢餓的天使」講呢次直播「無法刪除、無法修飾」，帝國用嚟做法案依據。

**Missing Piece**：故事冇定義光幕濾鏡平時究竟點處理直播畫面——如果平時都會修飾，帝國憑咩令市民相信呢次係未經處理嘅真相？

**Why this is required**：E-09 係晴香社死崩潰、反魔法少女法案（帝國政治線法理起點）嘅核心 beat。

**What currently breaks**：法案依據嘅邏輯漏洞——但帝國本身係專制政權，唔一定需要邏輯自洽，所以呢個優先度中等。

**Priority**: **P2**

---

### GAP-08｜桐生健「凡人反抗組織成員」身份同佢實際嘅經濟動機互相矛盾
**Type**: CONFLICTED_CANON

**Existing A**：`canon/07_entities_and_devices.md` 將桐生健列為凡人反抗組織成員，組織理念係「凡人都能做有意義嘅選擇」。

**Existing B**：`canon/03_character_index.md` + `ACT_II_OUTLINE.md`（Phase D「USB截糧」beat）將佢寫成純粹經濟動機嘅底層跑腿，明確唔係意識形態成員。

**Why this is required**：佢唯一嘅正式 beat 本身就係建基於「一個普通人出於自身生存選擇幫手，唔係因為大理念」——呢個先係嗰場戲想講嘅嘢。

**What currently breaks**：如果按 `07_entities_and_devices.md` 字面理解，會將呢個角色寫扁做通用「反抗軍戰士」，同佢僅有嘅一場戲矛盾。

**Priority**: **P2**

---

### GAP-09｜美夜子介錯凜——前置心理材料（凜母親背景等）仍係 BTD，未落實做正式 beat
**Type**: CHARACTER_KNOWLEDGE_GAP

**Existing A**：`ACT_III_OUTLINE.md` E-III-H2 已經有「新增前置心理材料」（CDL-353），但明文標註「btd Beat Sheet，未定案為正式beat」。

**Existing B**：E-III-I5「凜的最終戰——遲來的介錯」已經係定案 beat，設計說明講明「凜早已知道自己會變成呢個樣，依然選擇放棄治癒」——情感基礎建立喺 H2 材料已被理解之上。

**Missing Piece**：I5 依賴嘅心理材料仲停留喺最粗糙嘅 BTD 狀態。

**注意**：呢個**唔係**「零前置場景」嘅結構性缺口——`ACT_III_OUTLINE.md` H1/H1.5/H2/I4/I5 本身已經有完整、詳細嘅橋接鏈（美夜子雙重揭露→月下崩潰→凜最終選擇→貓殼碎裂→介錯）。之前一輪 audit 引用嘅「凜相認 STRUCTURAL_GAP」嚟自 `structural_gap_classification.md`，嗰個對比嘅係壓縮版 `00_Story_Brief.html` 同 Timeline，唔係 `ACT_III_OUTLINE.md` 本身——**working outline 層面呢個問題其實已經解決**，只係其中一段支撐材料（母親背景）嘅具體措辭仲未定案，屬於較低風險嘅收尾工作。

**Priority**: **P2**（比原本以為嘅低——已經降級）

---

## 已核實、非缺口（唔好再問）

- **食罪者**：完整 setup→payoff 鏈存在（Act I 種、Act III 由黑奏逐句拎返）
- **軍方 Stage 1 徵召**：正確地刻意 unused（CDL-399 已確認刪除且冇殘留細節）
- **維多利亞之淚摧毀後嘅系統凍結**：一致，冇矛盾
- **通緝/fugitive 狀態轉換**：E-09 有完整起源場景同一致嘅後續反應
- **紫音放逐後和解**：E-12→Act III I3 有完整橋接
- **操之父秘密監控身份**：刻意延遲揭露（設計選擇），冇現存 beat 依賴「操已經知道」
- **黑奏 R-7 預謀揭示**：已經有 J2.5「鐵絲網偶遇」具體排定，前置鏈完整
- **晴香/夕融合+剪髮**：已喺 E-15（CDL-235）完整設計，唔係缺口
- **光環處決閾值 × 紫音/凜 overload**：兩人結局都唔需要精確數值先成立（紫音係「揀咗唔再撐」，凜係離線既定選擇）
- **屍骸化可逆時限 × 救援場景**：冇任何現存場景依賴呢個時限數字
- **Lighthouse Effect × 秘密身份**：搵唔到任何場景依賴呢個曝險邊界

---

## Checkpoint

**CONFIRMED（重新核實後降級/排除）**：凜嘅相認橋接鏈喺 `ACT_III_OUTLINE.md` 實際上已經好完整，上一輪引用嘅 STRUCTURAL_GAP 嚟自壓縮版 Story Brief HTML 落後於正式 outline，唔係 working layer 本身嘅缺口。

**最強信度發現**：GAP-01 + GAP-02（螢 reveal 冇地基 + 死因機制矛盾）——兩個獨立 agent 由完全唔同角度（setup-payoff vs 知識鏈 vs 死因矛盾）撞到同一條全作最大情感重量嘅戲度度冇根基，仲夾埋一個文件互相矛盾。呢個係今次 sweep 入面唯一累積咗三重獨立證據嘅缺口。

**NEW GAPS DISCOVERED**：9 條（GAP-01 至 GAP-09），P0×2／P1×4／P2×3。

**建議討論順序**：
1. GAP-02（螢死因機制矛盾）——先決定邊一份文件啱，因為佢直接卡住 GAP-01 嘅地基，係一個具體、細、容易判斷嘅矛盾（唔係開放式設計問題）。
2. GAP-01（螢reveal冇場景）——喺 GAP-02 有答案之後，先設計呢場全作最重情感戲點落地。
3. GAP-03（秋穗身份揭露錯位）——E-07c/E-11a 文件矛盾，都係相對具體嘅判斷。
4. GAP-04/05/06（鋪墊密度問題）——設計工作，唔急。
5. GAP-07/08/09 — 收尾級別，隨時處理。
