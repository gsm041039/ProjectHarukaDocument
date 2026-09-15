# AUDIT — 00_Story_Brief.html（Prompt 1 審核報告）

Baseline A：HEAD `e4c5743`（branch `main`）。詳見 `WORK_SPEC.md`。
本審核由兩個唯讀 subagent 分工完成：來源同步審核（sync）+ 全頁內容盤點審核（content）。證據全文喺 `evidence/sync_matrix_notes.md` 同 `evidence/content_inventory_notes.md`。

---

## 一、最新概念同步矩陣

**同步 checkpoint** = Round 164 / commit `cc67165`（2026-09-05，「百科 vs 已入檔 canon 全庫對照完成」）。

**核實結果**：`cc67165..HEAD` 之間，`canon/` 目錄底下**只有一個 commit**（`e4c5743`，2026-09-10）改動咗正式 canon 事實檔（`canon/03_characters/miyako.md`、`iwakura_akane.md`）。working tree 入面其餘全部 43 項未 commit 改動都喺 `canon/_working/`（工作記錄/log/DRAFT 生產層），依 repo 規則呢層唔算已批核 canon，唔可以寫入 Brief。

呢個 commit 對應 **CDL-408**（2026-09-10 作者確認）：美夜子「八千代型底色」reframe。

| # | Claim | 狀態 | HTML 現況 | HTML 位置 | 建議動作 |
|---|---|---|---|---|---|
| S1 | 美夜子對信任圈外人士並非「真冷漠」，而係防備姿態＋暗地默默照住人 | CONFIRMED | **STALE — 直接矛盾**。HTML 仍寫「信任圈外……是真冷漠，不是口硬心軟」，正是 CDL-408 明確取代咗嘅舊講法 | `00_Story_Brief.html:7051`（`#c-miyako` 卡，忠誠邊界段） | 改寫成：保留「唔主動熱情/保持距離/外殼拮手」，但將「是真冷漠」換做「係防備姿態，唔等於唔關心；仍會暗地留意、默默照住（否認得到）」 |
| S2 | 「解離性麻木」係急性創傷反應期限定狀態，唔係美夜子日常底色 | CONFIRMED | 缺失（非矛盾）——HTML 全文冇用過「解離性麻木」呢個詞形容美夜子，附近人格 tag（7038-7039）本身同新框架相容 | N/A | 低優先：修正 S1 已經足夠覆蓋；毋須額外新增段落 |
| S3 | 新 Behavior Hook #14「扮唔理，暗地執手尾」 | CONFIRMED | 缺失——角色卡/圖庫全文未見對應行為描述 | 建議加喺 `:7051` 附近 | **需要主 agent／作者判斷**：Brief 係讀者向百科（唔係逐條 behavior hook 帳本），可以將呢個具體例子折入 S1 嘅改寫段，而唔係另開一條 | 
| S4 | 紫音成癮崩潰雷達例子改措辭 | CONFIRMED | 不適用——HTML 呢兩處（7906、9438）本身從未提及美夜子，pre/post CDL-408 都冇矛盾文字 | — | 不需要動作 |
| S5 | QQ-224 A–G 其餘（紫音討喜度/世界帶疤活得好角色/紫音創傷前性格等）、QQ-221、QQ-222 | DRAFT/UNRESOLVED/BLOCKED | 不適用——未經作者確認，唔可以寫入 Brief 無論 HTML 現況點 | — | 不需要動作（正確排除） |
| S6 | Round 187–197 Act I Beat Sheet/Sequence Map/Scene/Dialogue/Script 生產 | DRAFT，全部 `[DRAFT / 暫定 — pending full-story beat lock]` | 未核對（範圍刻意排除） | — | 不需要動作（正確排除） |
| S7 | Round 185 Directing Language v0.5 baseline | DRAFT，未 merge | 未核對 | — | 不需要動作 |
| S8 | Round 183 心理具現化/討喜度討論 | EXPLORATORY，checkpoint BLOCKED | 已確認嘅美夜子半部已入 S1-S3；其餘不適用 | — | 不需要動作 |

**結論**：同步矩陣淨係 1 個真正 STALE 項（S1），1 個可選擴充（S3）。冇搵到「較新日期自動當啱」嘅情況——checkpoint 之後 canon 事實層改動極少，範圍細，風險低。

**已知覆核缺口（未讀範圍，需人手補查）**：
- HTML 入面「美夜子↔浩然」「美夜子↔凜」關係詳述本文（約 6664-6720、9174-9224）只查咗標題，未逐字讀，可能有另一處未用觸發詞（冷漠/麻木/解離等）嘅隱含講法需要人手覆核。
- `QUESTION_MATRIX.md`／`SESSION_LEDGER.md` 同 `CANON_DECISION_LOG.md` 交叉核對未獨立驗證（風險評為低，因為 CANON_DECISION_LOG 係 state-files 規定嘅權威 writeback 帳本）。

---

## 二、全頁內容盤點（已讀範圍）

全檔 12,245 行／871,096 bytes，**逐段完整讀完**，除咗時間線 10650–10900（約 250 行，中段零散事件節點）只做咗抽樣讀，未逐行覆核（結構同已讀部分一致，重複風險用外推評估，建議下輪補讀確認）。

涵蓋：CSS/head、sidebar、六大讀者章（故事是什麼/為何創作/導演設計原則/主題/世界觀速覽/七法則/隱藏機制/魔法少女設定/她們如何存在）、全 20 個角色卡（含 scene-figure data-desc）、人物關係圖、故事六階段、結局解讀、時間線、遊戲系統設計、附錄A/B、全部 `<script>` 區塊（含兩組 tooltip 資料源）。

---

## 三、語義重複群（詳見 evidence 檔完整版）

| 群 | 主題 | 重複密度 | 分類 | 建議 |
|---|---|---|---|---|
| A | 情緒系統三層解釋（七法則 / 隱藏機制 / 附錄A） | 中（6000行跨度） | DRAFT_INCREMENT，保留增量重組 | 附錄A 開場句去重，只保留七法則冇覆蓋嘅技術細節（CDL編號/可逆時限/唯識宇宙公理） |
| B | 「維多利亞天使≠官方偶像認證」警告句 | 高（6+處，含同段內部重複） | EXACT_OR_NEAR_DUPLICATE，可合併 | 只喺 `#world-idol-origin` 保留完整版，其餘改連結+短句 |
| C | 「解離兵器＝結果分類非出廠產品」警告句 | **最高**（7+處，集中350行內） | 建議合併，非刻意設計（文本內部證據顯示係補丁式修訂殘留） | 只喺「解離兵器：結果分類」subcard 保留完整版；lane-compare 入面嘅具體角色例子清單要保留 |
| D | 「融合是否自由選擇」留白 refrain | 高（15+處，橫跨全文） | **REASONABLE_REPETITION**（刻意防誤讀設計）但密度超出所需，尤其 Story Phase 6→Ending 連續4次 | 首次完整定義一次，後續改短提示；Story Phase 6 同 `#ending` 之間嘅逐字重複要精簡 |
| E | 雙重角色 tooltip 系統（`TERMS` vs `characterTooltips`，JS層） | 技術層重複，非正文 | EXACT_DUPLICATE_SYSTEM | 同一角色兩組 tooltip 文字唔一致（hover 位置決定睇邊句）；`TERMS` 陣列內部「心之器」重複兩次（bug級）；決定權可能超出純內容 refactor 範圍，flag 俾主 agent／作者 |
| F | 角色關係喺角色卡 vs `#rels` 各自出現 | — | **唔算重複，保留** | 唔同視角並存合理 |
| G | Scene-figure `data-desc` vs 本文 | — | **唔算重複，保留**（無障礙/美術指導用途） | 除非純複述情節冇新增視覺資訊，先考慮精簡（操、美夜子部分 data-desc 已達700-900字，值得留意） |

**矛盾 Flag**：冇發現需要作者裁決嘅新舊設定矛盾。發現多處文本自我修正痕跡（已刪除硬件機制警告句殘留、時序校訂備註、已記錄嘅重複移除）——呢啲反映過往補丁式修訂習慣，係群C重複密度嘅根源，但唔構成矛盾，唔需要 author gate。

---

## 四、表達方式建議（節錄，完整表見 evidence 檔）

- **戰鬥節拍循環**：純文字步驟列表 → 建議轉流程圖（有返回開始嘅循環性而家文字表達唔出）
- **身體延遲（Soul Lag）**：純文字段落 → 建議 2 步小流程圖（Cost Signal → 麻痺期 → 針刺期）
- **魔法少女三條路線**：lane-compare 卡 + 完整 route-table 兩層並存，本身係合理漸進披露，唔建議減層，但要處理表內重複嘅警告句（見群C）
- **七個核心法則 section**：全檔**最佳範例**（因果鏈圖+角度速覽+QA+完整卡四種形式並存），建議作為其他 section 重構嘅參考模板，本身唔需要改
- **附錄A 分層流程圖**：表達手法本身好，保留；問題在流程圖後面獨立文字卡嘅內容配置（見群A）

---

## 五、三個代表性前後示範

已喺 `evidence/content_inventory_notes.md` §4 詳細寫出（原文位置、原本問題、擬用形式、保留嘅獨特資訊），涵蓋：
1. **系統／世界觀**：情緒系統三層解釋（群A）
2. **角色**：晴香角色卡「融合是否自由選擇」refrain（群D 角色卡部分）
3. **故事／時間線**：Story Phase 6 展開全文 vs `#ending` section（群D 主體，最大重複群）

---

## 六、分批改動計劃（供 Prompt 2/3 參考，本階段唔執行）

**Prompt 2（內容同步）**：只需處理 S1（+ 視乎作者意見加 S3）。範圍細、風險低，一次過可完成。

**Prompt 3（表達重構）建議批次順序**（依 evidence 檔 §6 建議）：
1. 群C（解離兵器警告句）——密度最高、範圍最集中，示範價值高
2. 群D（融合自由度 refrain，尤其 Story Phase 6 ↔ Ending 段）——影響範圍最廣
3. 群A（情緒系統三層）——表達手法冇問題，純粹內容配置
4. 群B（維多利亞天使警告句）
5. 群E（JS tooltip 雙系統）——技術層，建議先向作者確認是否納入呢輪 content refactor 範圍，定係另開技術債任務
6. 戰鬥節拍循環／Soul Lag 流程圖化

---

## 七、真正阻塞項

- **無 author-gate 級阻塞**——S1 修正屬於「已確認 canon 事實 vs 過時讀者頁文字」嘅直接同步，唔涉及新故事決定。
- **一個需要作者／主 agent 判斷嘅細節**：S3（Behavior Hook #14）要唔要喺 Brief 呢種粒度加獨立條目，定係折入 S1 改寫段——不阻塞，Prompt 2 執行時可以擇較保守選項（折入）。
- **群E（tooltip 雙系統）**屬於代碼層而非內容層發現，建議 Prompt 3 開始前先問作者呢輪 refactor 範圍包唔包括修呢個技術重複。
