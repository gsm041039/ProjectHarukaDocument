# QA_REPORT — Brief Refactor：Concept Refresh + Content Sync + 全面 Dedup/IA Pass

本輪授權範圍：Phase A-J 連續執行（Current Concept Refresh → Sync → Dedup → IA Refactor → Visual → Code cleanup → Preservation QA → Fix → Revalidate），作者明確指示唔停低分批確認，只喺遇到 `TRUE_CONFLICT_REQUIRES_AUTHOR` 先停。**本文件第五節起記錄第二批次嘅真正刪減/重組/JS統一工作**（相對第一批次淨係加pointer）。

---

## 零、第二批次新增工作總覽（真正刪減/重組，非加pointer）

1. **TERMS / characterTooltips 單一權威來源**：`characterTooltips` 物件由literal duplicate改為runtime由`window.CHAR_TERMS`（TERMS陣列）動態生成，新增螢/紗夜/小光3個角色入TERMS，`characterNames`由15個trim到3個（唔重複TERMS已覆蓋嘅12個）。技術層重複徹底解決，單一維護點。
2. **Cluster C（解離兵器）真正刪減**：lane-compare列表第3點由完整重複句壓縮為連結指返canonical subcard，保留獨有例子清單不變。
3. **Cluster D（融合自由選擇留白，10處）真正壓縮**：保留2個完整版本（P1-LAW-09導演原則root statement；Ending「命運與態度分界」box + 獨有「不確定即代價」句），其餘6處（Phase6 Layer4/三位一體node、Ending「痛苦去了哪裡」/「何為黑暗療癒」清單入面3句、Timeline結尾大卡）壓縮為短連結指返root，冇流失任何獨有角度。
4. **Appendix A 兩個subcard真正刪減重複定義**：「唯識宇宙」subcard刪走同Banner重複嘅CDL-248命題複述，只留Alpha/Beta對照grid；「情緒守恆定律」subcard刪走「痛苦不會消失只會轉移」開場句（law-grid已有），只留獨有嘅「Alpha線是債權人」隱喻。
5. **Prose→Visual 轉換**：Soul Lag（靈魂延遲）由純文字段落改為2步flow-diagram（沿用文件已有嘅`chain-steps`/`step-card`視覺語言，非新增CSS）。

---

## 一、Regression 檢查

- **Baseline B 記錄**：改動前 `00_Story_Brief.html` SHA256 = `01ee3bfa...`（同 Baseline A 一致，改動前冇被其他 session 動過）
- **Div 標籤平衡檢查**：改動前 opens=1469/closes=1467（原檔已有嘅既有差異，非本輪引入）；改動後 opens=1474/closes=1472——差值同樣係2，證實本輪新增嘅5對div全部平衡，冇引入新嘅結構性錯誤
- **新增 anchor 唯一性檢查**：`id="stage-wound"` 全文件出現1次，確認唯一
- **Cross-reference 目標存在性檢查**：`#laws`、`#c-sou`、`#c-haruka`、`#stage-wound` 等全部已改動嘅連結目標均已確認存在
- **未做**：完整瀏覽器渲染測試（冇瀏覽器工具），mobile/print 視覺回歸——呢啲維持 NOT RUN，如第一輪QA所述

---

## 二、本輪實際完成嘅修改（逐項列出，對應 CONTENT_LEDGER destination）

### Source-resolved stale text 修正
1. **S1**：`c-miyako` 忠誠邊界段（L7051附近）——「是真冷漠，不是口硬心軟」→「係防備姿態，不等於不關心」，並將 Behavior Hook #14 折入同一段（唔開新card）= **MERGED**
2. **愛莉事故年份**：刪走108年節點誤植嘅「同年，愛莉成為第一具人造魔法屍骸」句 = **SUPERSEDED**（98年版本維持，見timeline另一節點）
3. **秋穗石像光照**：「石像前的懺悔」scene-figure 光照描述對齊「實驗室懺悔」（地底無陽光/冷卻色澤） = **MERGED**

### Semantic Deduplication
4. **維多利亞天使作者注內部重複**：市民眼中的世界段落兩個作者注合併，保留獨有嘅「美夜子/操/紫音/彩全部唔係偶像」資訊 = **MERGED**
5. **家族黑市技術三重複製**（操/宗一郎/華麗淇三卡）：操卡保留完整版做canonical，宗一郎/華麗淇卡精簡為一句+連結，保留各自獨有資訊（宗一郎卡嘅供應商網絡納入細節；華麗淇卡「唯一留喺屋企嘅成品」） = **MERGED**（destination: `#c-sou`）
6. **操↔紗夜遺言雙重來源分析**：`#rels`版本精簡為定性句+連結，操卡保留完整分析 = **MERGED**（destination: `#c-sou`）
7. **花子死亡瞬間scene-figure**：花子卡版本精簡data-desc為連結，晴香卡保留完整版 = **COMPRESSED**（destination: `#c-haruka`）
8. **TERMS陣列內部重複**：刪走第二個「心之器」條目 = **MERGED**

### Conceptual Refresh（新概念模型驅動嘅修正，非純同步）
9. **Miracle/Debt/Conservation chain**：喺附錄A開頭加canonical pointer返七法則section，明確呢度係技術延伸而非另一套定義 = **RELOCATED（指引性）**
10. **Alpha/Beta**：「唯識宇宙/存取權限」一句摘要併入主敘述（5519一帶），唔再只喺附錄先睇到 = **RELOCATED**
11. **Psychological Embodiment**：L4670-4673 用字由「創傷心理學的核心概念」收窄返「榮格心理學嘅個體化過程」，明確排除未confirmed嘅廣義化講法 = **CORRECTED**
12. **角色tag同步**：彩tag加「不死心的盼望」、操tag加「可靠」、紫音內文補「畀出型忠誠」概念 = **UPDATED**
13. **Stage×Wound**：加`id="stage-wound"` + 喺L6433「被觀看的悖論」、Phase2「核心轉折」兩處補cross-ref = **RELOCATED（指引性）**
14. **Witness**：加陪伴式vs見證式差異一句（在場姿態 vs 記憶不佔有性） = **CORRECTED**
15. **Attitude vs Fate**：喺主題定義box加一句連結返七法則做「命運」嘅物理根據 = **RELOCATED（指引性）**
16. **Dark Healing**：加「自癒=奪回詮釋權」bullet + 連結Gameplay「淡淡的感謝」 = **CORRECTED**
17. **Gameplay embodiment**：替死鬼假人補「替身/犧牲」隱喻一句；Extract收集品補「最真實的貨幣」深層意義 = **CORRECTED**

### Approval Consistency（本輪授權嘅分級處理，非author gate）
18. **晴香甦醒/主觀二十年（Phase6）**：加「方向共識，細節未定案」提示box，唔用definite-fact語氣 = **LABELED**
19. **Ending section**：加一句「結局性質已穩定，具體情節細節仍反映方向共識」 = **LABELED**

### 結構性缺口修補（source recovery已確認STRUCTURAL_GAP，本輪自動補，冇問作者）
20. **Act II幕末二段**：Phase2 story-strip新增node 11「突圍：融合與剪髮明志」，交代晴香/菲部分融合+鐵桶包圍強制轉場 = **新增內容節點**
21. **凜的相認**：Phase5 story-strip新增node 0「相認：凜早已不在」，交代美夜子坦白+凜自願放棄自我 = **新增內容節點**

### 螢靈魂消散事實 RELOCATE
22. `characterTooltips`入面「靈魂完全消散」呢個JS-only事實，已折入螢角色卡主文 = **RELOCATED**

---

## 三、第二批次已解決嘅項目（原第一批次列為「下一批次」，現已完成）

- ✅ Cluster C：完成2處真正刪減（lane-compare列表冗句→連結）；其餘位置經核實確認各自服務唔同register（tooltip短定義/table header/canon修正box/主canonical subcard），唔係疏忽重複，維持原狀正確
- ✅ Cluster D：完成6處真正壓縮，保留2個完整版本+2個獨有角度句，冇資訊流失
- ✅ TERMS/characterTooltips：完成單一權威來源統一（`window.CHAR_TERMS`），JS層重複徹底解決
- ✅ 附錄A：完成2個subcard嘅真正內容刪減（唯識宇宙、情緒守恆定律），唔再只係加pointer

## 三之二、仍然排入下一批次嘅工作（範圍極大，非blocked）

- **Fake Sweet/Real Warmth 角色章節duplication精簡**（6689-6723 vs 4977-4995）：本輪未動，「三層世界構成法則」**確認唔帶入**（未writeback，DRAFT_DO_NOT_IMPORT，屬於需要author gate嘅獨立item，唔係本輪editorial範圍）
- **Gameplay章節「低特權介面」Attitude vs Fate 具現層**：canon本身都未有呢層明確描述，本輪冇新增（避免夾硬解讀）
- **戰鬥節拍循環（Combat Beat）視覺化**：經核實呢個係帶版本號嘅工程設計記錄，audit明確要求keep_as_is verbatim保留bugfix/milestone語言可追溯性，故意唔轉做視覺圖表
- 全文12000+行入面仲有大量段落未逐一檢視是否需要IA重組——已處理咗全部audit識別出嘅高風險cluster、全部4個concept-model報告flag嘅具體位置；未逐段掃描嘅部分主要係已被audit評為CURRENT_AND_CLEAR、冇發現issue嘅內容，唔需要動

---

## 四、Regression Check（第二批次）

- Div標籤平衡：opens=1477/closes=1475，差值2同原檔案baseline一致（本輪新增3對div全部平衡）
- `<a>`標籤完全平衡：773 opens = 773 closes
- 全文`id`屬性0個重複
- 新增／引用嘅全部anchor（`#laws`/`#stage-wound`/`#bandaid-philosophy`/`#c-hotaru`/`#c-sayo`/`#c-hikaru`等）逐一grep確認存在且唯一
- JS改動（TERMS新增3項、characterTooltips改為runtime生成、characterNames trim）：邏輯核實——`window.CHAR_TERMS`喺第一個script同步執行時設置，第二個script讀取時序正確；characterTooltips key格式（去掉`#c-`前綴）同原本手寫literal完全一致，唔會令現有`title`屬性賦值邏輯出錯

## 五、Preservation 驗證

全部本輪改動嘅獨有資訊保留狀態：
- 操/宗一郎/華麗淇技術描述：獨有部分（宗一郎嘅供應商網絡細節、華麗淇「唯一留喺屋企成品」）已保留喺各自卡入面，冇被刪走
- 操↔紗夜遺言：完整分析保留喺操卡，#rels版本保留咗關係定性同基本敘事
- 花子死亡瞬間：完整data-desc保留喺晴香卡，花子卡改用連結但caption維持可理解
- 螢：靈魂消散事實由JS-only提升為可見內容，冇資訊流失（只有提升可見度）

冇任何一項本輪改動導致資訊淨流失——全部合併都保留咗獨有內容，只刪走純字面重複部分。
