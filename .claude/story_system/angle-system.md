# Story Question Angle System

## vNext role note（EXPERIMENT）
呢份 Registry 係**覆蓋輔助**，唔係每個問題嘅必經關卡，亦唔可以用「全部角度都過咗，所以 ready」做結論。預設流程：`problem → relevant lenses → synthesis`（`TARGETED`：由問題揀相關 lens，每個揀咗嘅要有證據同攻擊）。`FULL`（下面 28 個全掃）只限：(1) 明確整體審計；(2) milestone／最終審核（例如 Layer Review Packet）；(3) 高風險跨領域 artifact；(4) 作者明確要求全面覆蓋；(5) TARGETED 之後仍有實質漏 lens 風險。`TARGETED` 簡短記錄：揀咗嘅 lens family＋一句相關理由、跳過嘅 family（family 層級）、點解漏 lens 風險低。**`AUTHOR_POLICY_DECISION_PENDING`：vNext.2 實驗政策，正式 `CLAUDE.md` 未改。**WORLD_SYSTEM 發現用依賴／介面搜索，唔用呢份清單（見 `gap-admission-and-scope.md` §3）。**唔加新角度 ID。** 下面所有「每次全掃／必須掃描／一律全掃」只喺 `FULL` 模式適用；`TARGETED` 模式下只適用於已揀嘅 lens。

任何 reconstruction-level / blocked decision / outline / reveal / relationship / theme / tone / section 問題，都要先由問題揀相關 angles（`FULL` 模式則全部），再決定邊啲真係需要問作者。

## Pool 1 — Baseline Mandatory Angle Pool（`FULL` 模式每次全掃，angles 1–12）

`FULL` 模式下，每次遇到任何 topic，都必須掃描以下 12 個角度。

1. **Character Growth**
   - 呢個選擇會點改角色內在轉變、缺陷、傷口、態度？
2. **Relationship Dynamics**
   - 會點改人物之間權力、依附、衝突、親密感？
3. **Information / Reveal Control**
   - 資料幾時俾觀眾／角色知道？遮蔽、誤導、回收會點變？
4. **Atmosphere / Tension**
   - 氣氛、壓迫感、節奏、危機感點受影響？
5. **Theme Expression**
   - 主題係被講出、被體現、定被削弱？
6. **Structural Beat Function**
   - 呢段喺 act / beat / fake climax / turn / fallout 上實際功能係乜？
7. **Entry Timing / Presence Control**
   - 某角色／資訊／設定應該幾時出場、幾密、用咩形式存在？
8. **World Rule / Mechanic Pressure**
   - 世界規則、魔法代價、制度壓力、設定邏輯有無被扯爛？
9. **Setup / Payoff**
   - 有冇提早埋位？回收位夠唔夠？會唔會假高潮無後果？
10. **Audience Experience / Knowledge Gap**
    - 觀眾會感到迷、早知、遲知、誤會定反高潮？
11. **Canon / Continuity / Ownership**
    - 同現有 docs、canon、角色 ownership、真相層級有無撞？
12. **Writing Execution / Draftability**
    - 呢個方向寫唔寫得出？會唔會太抽象、太難戲劇化、太難落場？

---

## Pool 2 — Extended Mandatory Relevance Check Pool（angles 13–18）

**`FULL` 模式唔係 opt-in：每次遇到任何 topic，都必須先判斷 13–18 有冇 relevance。（`TARGETED` 模式只喺已揀嘅 lens 入面判斷。）**

規則：
- 唔係全部都要展開
- 但必須先判斷每個角度係 RELEVANT / NOT_RELEVANT / NEEDS_AUTHOR_INPUT
- 判斷為 RELEVANT 的角度，才展開分析
- 判斷為 NOT_RELEVANT 的角度，仍要在 QUESTION_MATRIX.md 記錄判斷理由（唔可以只喺 chat 提過就消失）

13. **Coping / Defense Mechanism**
    - 角色慣常點保護自己 / 避開痛苦？呢個防衛方式點扭曲佢的行為和選擇？
14. **Ideology / Value System**
    - 佢信咩價值排序？願意犧牲乜換取乜？呢種排序點同其他角色 / 群體的價值排序撞？
15. **Social / Institutional Position**
    - 呢個角色 / 群體喺社會 / 制度上的位置係咩？呢個位置點影響佢對主題的理解和選擇？
16. **Moral Tradeoff**
    - 呢條線 / 呢個選擇的真正 tradeoff 係咩？佢揀咗邊種代價？放棄咗咩換取咗咩？
17. **Symbolic / Ritual Behavior**
    - 呢個角色的 stance / 成長有冇透過重複行為、ritual、象徵物件被具體化？呢個 symbol 係被 validate 定被拆穿？
18. **Narrative Validation Level**
    - 故事最終 validate / complicate / reject / transform 呢種 stance？
    - **Hard rule：** 故事對一種 stance 的處理，不等於角色本人對該 stance 的理解。AI 必須分清：角色信乜、故事點對待佢個信念、故事係 validate / complicate / reject / transform 佢——三件事可以完全唔同。

19. **Method Necessity / Form Meaning**
    - 觸發條件：任何重大設定、事件執行方式、reveal 裝置、行為選擇、環境設計、象徵物件、ritual、或事件形式
    - **唔係只問「呢個設計做到咩」，而係問「點解一定要用呢種形式去做到」。**
    - 必須問：
      - 呢個設計想達成咩效果？
      - 有咩其他 plausible 形式都能達到相近的表面功能？
      - 點解最後揀呢個形式？
      - 呢個形式比其他選項多帶咗咩意義？（角色意義 / 主題意義 / 制度意義 / 感受意義 / 媒介意義 / payoff 意義）
      - 如果換另一種形式，會失去咩？
    - **Possible justification categories（常見形式意義解釋，唔係 angle 本身）：**
      - personhood erosion / dignity cost
      - commodification / public circulation
      - forced visibility / exposure
      - ritualization
      - institutional logic
      - emotional displacement
      - medium-specific delivery
      - setup/payoff efficiency
    - **Hard rule：** 呢啲 category 係「可能的答案之一」，唔係 angle 本身。唔可以直接將 category 當作分析結論跳過推理過程。

---

## Pool 3 — Production & State Angles（angles 20–28；2026-10-02 新增，作者要求「所有角度」）

來源：`story-solution-space-designer` 嘅 cross-lens（玩法、導演、節奏、功能重複、製作量、跨幕）＋作者明確提過嘅「角色知情、觀眾知情」＋ Consequence-Driven Progression 嘅因果鏈。Pool 1／2 冇獨立列出，之前只喺個別 skill 入面零散出現。同 Pool 2 一樣，`FULL` 模式**必須做 relevance check**；Beat／Sequence 層嘅高風險 review 用 `FULL`，其他建議由問題揀 lens（見上面 vNext role note）。

20. **Character Knowledge State（角色知情）**：每個 beat，每個角色知／唔知／隱瞞咩；入場同出場狀態；有冇角色對未收到嘅資訊作出反應。
21. **Audience Knowledge State（觀眾知情）**：每個 beat 觀眾知道咩、比角色知得多／少；同作者想觀眾得到嘅讀法有冇出入。（同 3、10 相關但獨立：3＝何時遮／揭，10＝觀眾體驗，21＝逐 beat 嘅知情狀態表。）
22. **Causality / Cost Signal Chain（因果鏈）**：先後次序、外部觸發→被迫反應→後果；有冇「角色突然覺得 X 所以做 Y」（見 `consequence-driven-progression.md`）。
23. **Gameplay / Player Agency（玩法／控制權／資訊負載）**：呢個 beat 玩家做咩、有冇控制權、勝負條件、UI 資訊量、戰鬥同劇情切換。呢個係遊戲，唔係電影。
24. **Directing / Staging Opportunity（導演／調度可能性）**：Beat 層有冇俾到可視覺化嘅行為載體（唔係寫鏡頭角度）；有冇太多靠對白／內心先成立嘅 beat。
25. **Pacing / Breathing（節奏／呼吸）**：beat 之間張力曲線、連續同調性長度、喘息位、有冇突然跳。（同 4 相關：4＝單點氣氛，25＝序列曲線。）
26. **Redundancy / Function Overlap（功能重複／過載）**：兩個 beat 係咪做同一件事；一個 beat 係咪疊太多功能。
27. **Production Complexity / Scope（製作量／範圍）**：新場景、新角色動作、特殊資產、UI 製作量對範圍係咪合理；邊啲成本最高而價值最低。
28. **Cross-Act / Downstream Impact（跨幕／下游影響）**：對其他幕已有 obligation、plant、reveal 嘅影響；邊啲檔要 REVALIDATE。

**清單缺口規則：** 呢 28 個角度係 Master Angle Registry，唔保證窮盡。每次掃完要問「有冇一個相關但冇列嘅角度」；有就記低並建議加入（要作者知道），唔可以靜靜自創或略過。獨立盲審包括一個唔用清單嘅「漏洞搜尋員」，`NO_MATCH` 即係清單漏咗。

---

## How to use

**模式：** `TARGETED`（預設）＝由問題揀相關 lens，每個揀咗嘅有證據＋攻擊，講明點解揀呢啲；`FULL` 只限整體審視／全面覆蓋要求／高風險 artifact review／benchmark 或 deep-review。
**Baseline Pool (1–12)：** `FULL` 模式每次全掃，逐一標記。
**Extended Pool (13–19)：** `FULL` 模式每次先做 relevance check，RELEVANT 者才展開。
**Production & State Pool (20–28)：** `FULL` 模式每次先做 relevance check；Beat Layer Completeness Gate（SKILL.md「Angle Basis Rule」）屬高風險 artifact review，用 `FULL`。

**證據標準（所有角度適用）：** 每個標記要有核對依據（檔案＋行／Beat 表原文）同一次「攻擊」（呢個設計最可能喺呢個角度點失敗？）；冇依據同攻擊嘅 RELEVANT／NOT_RELEVANT 剔號唔算做過。NOT_RELEVANT 要引設計內容講理由。

每個 angle 標記：
- RELEVANT
- NOT_RELEVANT（須在 QUESTION_MATRIX.md 記錄判斷理由）
- SOURCE_SUPPORTED
- INFERRED
- NEEDS_AUTHOR_INPUT

---

## Compression rule

完成 angle scan 之後：
- 先列 stable angles（已有 source support / 可自行判斷）
- 再列 unstable angles（需要作者確認）
- 最後只將真正阻塞 downstream work 的 angle，壓縮成 1–4 條 consolidated author questions
- 如果 topic 真係有多個獨立 blocker，可以擴展至 8–12 條，但唔可以為問而問
