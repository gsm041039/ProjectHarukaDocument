# Self scan v4（orchestrator 自掃；FULL 28 角度＋Gate A/B/C＋obligation＋coping）

對象：BEAT_LAYER_V4.md。組：G1 N1–N4｜G2 B1–B4｜G3 B5–B8｜G4 M1–M5。**呢份係自寫自剔，唔算驗證；驗證靠 blind_audit_v4/ 同之後嘅 Diff。**
格式：角度｜受影響組（A＝AFFECTED／U＝UNAFFECTED＋理由）｜證據｜攻擊（最可能點失敗）｜結論。

## 1. 28 角度
| # | 角度 | 組判定 | 證據 | 攻擊 | 結論 |
|---|---|---|---|---|---|
| 1 | Character Growth | G1A G2A G3A G4A | GT:20–33 晴香 Act I 冇 change trigger（GT:27）；操入隊觸發 S:251 | 晴香 N4「主動接受」算唔算成長？GT:27 話 Act I 唔應有真實 change trigger | CLEAN：N4 係偽英雄旅程嘅假成長（O:17），唔係真 trigger；操 B6 轉折＝S:251 入隊觸發，非弧線完成 |
| 2 | Relationship | 全 A | CDL-225 病態共識；M:198 圈外待遇 | B8 三人「站埋一齊暖」會唔會令關係進得太快？ | NOTE：要守「未熟、被迫合作」（CDL-254）到 M3；M5 先升格 |
| 3 | Reveal Control | 全 A | 09_info:34 隱形揭示；CDL-089 燈塔 E-02 明示 | B8 燈塔明示 + M1 血糖 + N4 槍，三樣資訊會唔會令觀眾提早推到「魔法有代價」？ | NOTE：燈塔＝CS 明示位；血糖＝隱形層；唔講「代價」。風險可接受 |
| 4 | Atmosphere/Tension | 全 A | D-13；09:340 同場最多兩類不安 | G2 B3 連結入侵＋B4 無；G3 B5 擦傷＋B8 量尺＝兩類；OK | CLEAN（每組≤2 類） |
| 5 | Theme | 全 A | O:21 主題 A/B/D；Brief:4846 溫柔殘酷 | 主題 A「首次代價（可樂失味）」range 外，demo 冇主題 A 主場 | NOTE：demo 主題 A 只 setup（熱可可），payoff 喺 E-03；可接受 |
| 6 | Structural Function | 全 A | SM SEQ2/SEQ3 結束事件 | SEQ3 結束事件原係「四人升格」，三人版仲算唔算完成？ | CLEAN（AD 三人版；P11'） |
| 7 | Entry Timing | G1A G2A G3U（操已登場）G4A | O4 操獨行到場 | 零前情玩家喺 B4 先第一次見操，之前冇任何埋位（CHALLENGE_5 指出） | **FINDING SHOULD_FIX**：操入場前冇預兆；可考慮 B1 直播 UI 一閃「另一個天使」排名（HW 候選），待盲審／提案 |
| 8 | World Rule | 全 A | 01:223 範圍內排走；10:314 假 EXP | B7 屍骸「停止抵抗一拍」會唔會被讀成 glitch（撞 10:314 視覺完整）？ | NOTE：停抵抗＝行為唔係視覺破損；Scene 層驗 |
| 9 | Setup/Payoff | 全 A | N4 槍→B2 用→M1 耗盡；B5 擦傷→M4 | 熱可可 setup payoff 喺 E-03（range 外）＝demo 內只種唔收 | CLEAN（demo 內閉環：槍、牙；熱可可屬跨段） |
| 10 | Audience Experience | 全 A | 作者鎖零前情 | N2 講驚但玩家冇見過首戰，「驚」冇具體指向 | **FINDING SHOULD_FIX**：N1 要有令零前情玩家讀得出「剛發生過大事」嘅可見痕跡（例：傷、制服污糟、手震）＝Scene 義務；唔補演首戰 |
| 11 | Canon Continuity | 全 A | PC17／CDL-233／CDL-141 四人 | 三個已知偏離（首次連結人數、牙、三人基地） | NOTE（全部已記 DEV／REVALIDATE） |
| 12 | Draftability | 全 A | — | B3「當下情緒一瞬互透、冇記憶畫面」點寫得出？ | NOTE：導演文法「差半拍同步」（11:620）可承載；Scene 層 |
| 13 | Coping | 全 A | H:91 膠布；S:310；M:278 | N2 晴香直講驚撞唔撞膠布哲學？ | CLEAN：Act I 冇面具（H:79），膠布係蓋困惑唔係否認存在；講完仍去＝膠布式 |
| 14 | Ideology | G1A G2A G3A G4U（基地冇立場碰撞；理由：純偽亮色材料 BS:388，但見 T13） | IM:47–75 | 美夜子共謀誤導（N3）同晴香天真連結（B6）有冇正面撞？ | NOTE：Act I 只種，唔撞（CDL-225） |
| 15 | Social Position | G2A G3A | CDL-057 Reality Show；Brief:5676 | 操貴族繼承人身份 demo 完全冇露 | NOTE：唔使露（Act I 隱藏 CDL-133）；操避鏡頭係唯一外露 |
| 16 | Moral Tradeoff | G1A G3A | CDL-054 | 美夜子「唔講代價」嘅 tradeoff 觀眾睇唔睇到？ | CLEAN：N3 揀講唔講＋N4 畀槍唔解釋＝行為載體 |
| 17 | Symbolic/Ritual | G1A G4A | 熱可可（H:295）；合照（H:298） | 合照＝晴香儀式；會唔會同 M4 合照重複（M4 搞合照、M5 拉入鏡）？ | **FINDING NOTE**：M4／M5 同一合照行為分兩拍，係因果（避鏡→掉牙→被拉入），唔算重複；但 Scene 要避免拖 |
| 18 | Validation Level | 全 A | IM 晴香 Act I validates | 暖結尾會唔會 validate 咗「拯救＝被需要」？ | CLEAN：Act I 故意 validate（IM:52 Act I＝validates），全作 complicates |
| 19 | Method Necessity | G1A G4A | — | 點解掉牙要喺合照邊緣而唔係獨處？ | CLEAN：人前＝Brief 原圖＋「強忍扮正常」需要觀眾；避鏡＝操嘅 coping 自己製造咗盲區 |
| 20 | Char Knowledge | 全 A | 見知情總表 | B4 晴香睇到救路人：佢喺打緊仗，視線合理？ | CLEAN：連結增幅＝有餘裕（因果） |
| 21 | Audience Knowledge | 全 A | 知情總表 | B3 觀眾分唔分到「外來情緒」係美夜子嘅？ | NOTE：唔使分到；只需「唔對路」 |
| 22 | Causality | 全 A | consequence-driven-progression | B4 操「被引到」靠燈塔，但燈塔喺 B8 先解釋＝先用後解 | CLEAN：先感受後被告知（HC-2e 精神），反而啱 |
| 23 | Gameplay | 全 A | 10:465；10:371 | N2–N4 純對話；M1–M2 純過場；控制權交接多 | **FINDING SHOULD_FIX**：G1 同 M1–M2 玩家冇嘢做；候選＝N1 沖可可互動、天台自由望城市、M2 用地圖揀潛入目標（HW） |
| 24 | Directing | 全 A | 11:170 成形→裂口→結算 | N3 美夜子「揀講唔講」靠對白 | NOTE：視線／背向（Scene） |
| 25 | Pacing | 全 A | — | G1 四個靜態 beat 連住（夜＋三個天台）＝開場慢 | **FINDING SHOULD_FIX**：N2–N4 可能要合併成一至兩個 Scene；Beat 層保留功能分拆 |
| 26 | Redundancy | 全 A | — | 「美夜子口硬身守」N4（交槍）、B2（擋）、M3（擋操）三次 | NOTE：三個對象唔同（工具／晴香／操），遞進；可接受 |
| 27 | Production | 全 A | — | 環境：晴香屋企、天台、日區街道（戰）、安全區、學校夜（走廊／醫療室／實驗室／基地房）＝5–7 | NOTE：學校夜多房＝最貴；可縮做 2 個（走廊＋基地房）（Scene） |
| 28 | Cross-Act | 全 A | CHALLENGE_4 | 見 REVALIDATE 清單 | NOTE（已列） |
**Registry 缺口自問：** 有冇相關但冇列嘅角度？——「零前情玩家可理解度」部分落 10／21，但「demo 獨立性」（一段切片要自成完整體驗）冇獨立角度；建議作者考慮（唔靜靜加）。

## 2. Gate A（引 tracker，唔重寫）
晴香：全欄 SS/AC（GT:20–33），demo 位置＝Act I 起點→偽英雄，無 trigger＝符合。美夜子：主要欲望＝BK（GT:45）＝demo 冇填，記缺口；demo 內佢嘅行為由「保護晴香」驅動＝靈魂本能（CDL-060）。操：Act I coping 代價＝BK（GT:71）——demo 提供候選：「收埋身體裂縫（被掂後整理、掉牙收埋）」，**唔寫入 tracker**（PILOT）。

## 3. Gate B（摘要）
晴香：stated＝幫人係無私；actual＝拯救＝被需要（CDL-355）；Act I treatment＝validates。美夜子：stated＝工具；actual＝守護（CDL-060）；treatment＝BK。操：stated＝規則／表演；actual＝渴望被見證（GT:66）；treatment＝BK。demo 唔填 BK。

## 4. Gate C（重要事件）
| 事件 | 主題問題 | 立場碰撞 | 載體 | 結果 | 只靠對白？ |
|---|---|---|---|---|---|
| N3–N4 使命 | 美好謊言 vs 真相 | 美夜子共謀誤導 vs 晴香天真 | 交槍唔解釋、轉開視線 | 晴香接受 | 否（行為：交槍） |
| B3 連結 | 連結＝力量定入侵 | 友情合體技 vs 強制透明 | 一瞬外來情緒 | 勝利蓋住 | 否 |
| B6 擋 | 態度 vs 命運 | 晴香唔顧儀態 vs 操寧傷唔狼狽 | 身體擋 | 操入隊 | 否 |
| M4 掉牙 | 溫柔的殘酷 | 暖 vs 身體真相 | 掉牙＋收埋 | 冇人知 | 否 |
| B8 道謝 | 被見證 | 路人感激 vs 操否認 | 冷處理 | 晴香見到 | 部分（否認係對白；轉開係行為） |

## 5. Obligation pass（控制表）
CONTROL_OBJECTIVES_MASTER＝空模板（SRC1）；HARD_CONSTRAINTS／KDM／CR＝PARTIALLY_STALE，按 SRC1 行核：HC-1b（唔過早揭黑暗）＝牙 DEV 有風險、已記；HC-4a（魔法消痛要標代價）＝B3 連結代價延到 E-03（T8，已知）；HC-4f 變身代價視覺＝B1 有；HC-7d 低強度滲漏＝N1 幽靈重量 OK；HC-2e＝上游衝突（PC14）；KDM R-3＝N1 疲憊 OK。

## 6. Coping／Ideology 對撞（「角色講出／做出 X」）
- N2 晴香講驚：Act I 冇面具＝可（CLEAN）。
- N4 美夜子交槍：口硬身守＝符合；唔解釋＝共謀誤導（CLEAN）。
- B3 美夜子提連結：等於拆自己防線——動機＝唔夠打＋晴香會死（GT:46 恐懼）＝外部壓力夠（CLEAN）。
- B6 晴香擋：H:83 偏鬆風險評估（CLEAN）。
- B7 操答應：傲嬌包裝（CLEAN）；但佢啱啱被未告知接觸＝不安，入隊同時觸發量尺強迫＝B8 有載體（CLEAN）。
- M2 操跟去夜潛：嫌灰塵但應承咗「指導」＝形式主義規則（CLEAN）。
- M4 操收埋牙：S:205 唔露破綻（CLEAN）。
- M5 晴香拉操入鏡：H:298 強拉影相；但操影相恐懼（S:321）——操會唔會掙開？**NOTE**：操被拉入＝又一次未告知接觸；佢冇掙開可以讀成「第一次肯」——即係提早咗影相恐懼→珍惜嘅成長（S:321 成長弧喺後段）。風險：中。候選：操入咗鏡但用傘／側面遮住半邊（冇完全接受）。
