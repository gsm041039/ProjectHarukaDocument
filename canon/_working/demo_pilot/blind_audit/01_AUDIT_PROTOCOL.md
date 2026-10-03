# 盲審協議（所有審核 agent 必讀）

目的：獨立檢驗 Beat v3 對「全部角度」嘅考慮係咪真係做到。你**唔係**批核者，唔可以話「Beat 層通過／可以落下一層」；你只出證據、攻擊同發現。

## 1. 角度 20–28（補充角度；1–19 見 .claude/story_system/angle-system.md，一律先讀）
20. **Character Knowledge State（角色知情）**：每個 beat，每個角色知／唔知／隱瞞咩；入場同出場狀態；有冇角色對未收到嘅資訊作出反應。
21. **Audience Knowledge State（觀眾知情）**：每個 beat 觀眾知道咩、比角色知得多／少；同作者想觀眾得到嘅讀法有冇出入。
22. **Causality / Cost Signal Chain（因果鏈）**：先後次序、外部觸發→被迫反應→後果；有冇「角色突然覺得 X 所以做 Y」（見 consequence-driven-progression.md）。
23. **Gameplay / Player Agency（玩法／控制權／資訊負載）**：呢個 beat 玩家做咩、有冇控制權、勝負條件、UI 資訊量、戰鬥與劇情切換；呢份係遊戲 demo，唔係電影。
24. **Directing / Staging Opportunity（導演／調度可能性）**：Beat 層有冇俾到可視覺化嘅行為載體（唔係寫鏡頭角度）；有冇太多靠對白／內心先成立嘅 beat。
25. **Pacing / Breathing（節奏／呼吸）**：beat 之間張力曲線、連續同調性長度、有冇喘息位／有冇突然跳。
26. **Redundancy / Function Overlap（功能重複／過載）**：兩個 beat 係咪做同一件事；一個 beat 係咪疊太多功能。
27. **Production Complexity / Scope（製作量／範圍）**：新場景、新角色動作、特殊資產、UI 製作量對 demo 係咪合理。
28. **Cross-Act / Downstream Impact（跨幕／下游影響）**：對 Act II–IV 已有 obligation、plant、reveal 嘅影響；邊啲要 REVALIDATE。

## 2. 你嘅工作
輸入：`00_INPUT_BEAT_V3.md`（被審對象）＋你被分配嘅角度＋canon 來源（只准讀入面列出嘅）。
對**每個被分配角度 × 每組 beat**（SEQ2 N1–N4／SEQ3a B1–B10／SEQ3b M1–M4／H1，共 4 組；組內有需要就逐 beat 拆開）寫一行：

| 角度 | Beat | 呢個角度向呢個 beat 問咩（用自己嘅話，具體到 beat 內容） | 實際核對咗咩（檔案＋行號／引文；或「只憑 Beat 表」） | 攻擊：呢個 beat 最可能喺呢個角度點樣失敗？ | 結論 |

結論只准用：
- `FINDING`（有問題；要寫嚴重度＋改邊個 beat 點改＋人話解釋）
- `CLEAN_AFTER_ATTACK`（我試過攻擊、仍然站得住；**必須寫攻擊內容同點解攻唔入**）
- `NOT_APPLICABLE`（**必須引用 beat 內容講點解角度唔觸及**；套話無效）
- `NEEDS_AUTHOR`（canon 冇答、真係要作者定）

**無效格：** 冇「實際核對咗咩」同冇「攻擊」嘅 CLEAN；理由係「合理」「冇問題」「符合 canon」而冇引文；一個角度對四組 beat 用同一句話。呢啲格會被當作冇做。
**Canon 引文必須現場讀原文核實**，唔准憑記憶；引錯就係 FINDING 嘅反面證據，會被扣信譽。

FINDING 格式（每個一段，人話，作者冷讀要睇得明）：
- 嚴重度：`BLOCKS_BEAT_LAYER`（唔改就唔應該批 Beat 層）／`SHOULD_FIX`／`NOTE`
- 發生咩問題（具體 beat）
- 點解係問題（上游依據，附檔案行號）
- 建議點改（唔含對白／鏡頭／timing）＋代價＋放棄咗咩＋同現有做法真正分別

## 3. 每個角度做完之後
用一句寫：「如果冇呢個角度，Beat 層會漏咗咩？」（具體；如果答案係『冇漏』，就講你試過搵咩但搵唔到。）

## 4. 角度以外
最後加「未列入角度嘅關注點」：你睇 beat 時注意到、但分配角度唔包括嘅問題（任何類型）。

## 5. 輸出
寫入你被指定嘅檔案（blind_audit/agent_<代號>.md）；**只准寫呢個檔，唔准改其他任何檔**。語言：廣東話書面語＋表格；檔案同編號可用原名。回覆 orchestrator 只要 ≤200 字：FINDING 數量（按嚴重度）、最重要 3 個、你覺得角度定義有咩含糊。

## 6. 禁止
- 讀禁讀檔案（見 00_INPUT_BEAT_V3.md §D）；一旦發現自己讀咗，喺輸出頂部講明。
- 批核／宣稱 Beat 層完成／代作者答決定。
- 為求有發現而硬造問題；但亦唔可以為求交差剔晒。每個角度最少要有一次認真攻擊。
