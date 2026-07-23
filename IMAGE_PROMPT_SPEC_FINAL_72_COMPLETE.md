# Project Haruka — 130 場景完整 Image Prompt 規範

**生成日期**：2026-06-28
**基礎資料**：Canon 全幕故事大綱 + 127 個核心場景 + 3 個新增缺失場景（打怪無效、天使變公敵、美夜子介錯）
**策略**：Reference-driven（有圖跟圖）+ Simplified（無圖簡化）+ Private Intimate Moments（私密場景新增）
**用途**：用於 Midjourney / DALL-E / 其他 AI 繪圖工具的提示詞

---

## 📋 場景清單總覽（按劇情/beat次序排列，#1-170，其中 2 個標記已停用重複項）

`[2026-07-23 按beat次序重排]` 呢張表已由原本嘅 SPEC 編號順序，改為**按故事實際發生次序**（前史/源起閃回 → Act I → Act II → Act III → Act IV → 日常／貫穿全程習慣 → 世界觀設定圖 → 已停用重複項）排列。排序依據**已存在於各行嘅 Act／時段欄位**（Phase字母、E-code、Day編號、帝國歷年月）自動運算，唔係重新判斷劇情——**原本嘅「#」SPEC編號完全冇變**（文件其他地方所有「SPEC#N」交叉引用依然有效），新加咗「劇情順序」欄做呢張表本身嘅新排位、「區塊」欄標住所屬幕/類別。**局限**：唔少場景原文只寫咗「Act II」呢類粗略標籤，冇寫明 Phase／日期，呢啲場景嘅 Act 大類位置可信，但同Act內排前定排後純粹跟原表次序頂落，唔代表實際beat順序已確認——日常習慣類（右下角「日常／未定」）同世界觀設定圖本身冇固定beat位置，獨立分區列喺主線之後。如需要精確到beat級別嘅次序，應對照 `ACT_I_OUTLINE.md`／`ACT_II_OUTLINE.md`／`ACT_III_OUTLINE.md` 等 Beat Sheet 正式核實。

| 劇情順序 | # | 區塊 | 場景名稱（中文）| 場景名稱（英文）| 主要角色 | Act | 時段/階段 | ⭐ | 建議文件名 | 有圖 | 簡要描述 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | 79 | 前史／源起閃回 | 通風管道那夜（螢的犧牲） | The Night in the Ventilation Shaft | 彩、螢 | 前史 79年 | 夜區建築通風管道 | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_1_HotaruSacrifice_VentilationShaft.png | ❌ 未有圖 | 靈樹戰爭期間躲避帝國軍搜索（原文誤植「黑奏」在場及「帝國設施處置」，此時應為6歲彩，黑奏人格於此夜誕生）；螢犧牲把熊公仔交給彩 |
| 2 | 78 | 前史／源起閃回 | 鐵絲網偶遇 | Wire Fence Encounter | 晴香、彩 | 前史 102年 | 帝國研究設施外圍 | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_2_WireFenceEncounter.png | ❌ 未有圖 | 5歲晴香目睹渾身傷痕、被守衛拖行嘅彩（此時29歲，非5歲，原文誤植），潛意識許願埋下創世因果信標（CDL-288） |
| 3 | 80 | 前史／源起閃回 | 帝國實驗室：黑奏作為活體樣本 | The Empire Lab: Kurokane as Living Specimen | 彩 | 前史 79-102年間（原文「12-15歲/95-98年」與出生年矛盾，已修正） | 帝國實驗室 | ⭐⭐⭐⭐ | ConceptArt_Scene_3_EmpireLab_KurokaneSpecimen.png | ✅ 有圖 | 彩被囚禁研究期間（此時尚未擁有魔法力量），接受早期情緒壓抑/測量技術測試（原文誤植為「收集魔法輸出數據」） |
| 4 | 154 | 前史／源起閃回 | 花子的死亡瞬間 | The Moment of Creation | 花子、晴香、美夜子 | PRE-STORY / ALPHA LINE | 帝國歷102年（Alpha線，Beta線分歧前，Loop 0起點） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_4_HanakoDeathCreation.png | ❌ 未有圖 | Alpha線的城市，街道上，5歲的晴香蹲在地上。 |
| 5 | 75 | 前史／源起閃回 | 刑思殺出實驗室 | Keishi's Awakening Massacre | 刑思（黑奏） | 前史 103年（原文誤標98年） | 帝國實驗室 | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_5_Keishi_AwakeningMassacre.png | ✅ 有圖 | 黑奏在實驗室中覺醒魔法少女力量（102年鐵絲網偶遇獲得），殺光所有實驗人員，這是她走向帝國統治的起點 |
| 6 | 81 | 前史／源起閃回 | 黑奏弒父篡位 | Kurokane Usurps the Emperor | 黑奏 | 前史 103年（原文誤標98年） | 帝國皇宮 | ⭐⭐⭐⭐ | ConceptArt_Scene_6_KurokaneUsurpation.png | ❌ 未有圖 | 148cm幼童身軀弒殺養父，帝國「刑思」法號確立（CDL-305修正年份） |
| 7 | 76 | 前史／源起閃回 | 凜×美夜子黃金搭檔 | Rin and Miyako's Golden Partnership | 凜、美夜子 | 前史/閃回（103-108年） | 軍方戰場 | ⭐⭐⭐⭐ | ConceptArt_Scene_7_Rin_Miyako_GoldenPartnership.png | ✅ 有圖 | 兩人作為軍方魔法少女的默契巔峰——凜精準打擊，美夜子以琉璃緞帶+能量冰刀掩護收割（原文誤植雙槍，已修正） |
| 8 | 77 | 前史／源起閃回 | 凜殿後最終犧牲 | Rin's Final Rear Guard Sacrifice | 凜、美夜子 | 前史/閃回（108年） | 戰場 | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_8_Rin_FinalSacrifice.png | ❌ 未有圖 | 凜主動引開L3光環掩護美夜子撤退，頸椎被扭斷180度，死亡瞬間眼神是釋然而非恐懼——成為美夜子終身PTSD的聲音 |
| 9 | 153 | 前史／源起閃回 | 秋穗與愛莉的實驗室事故 | The Laboratory Accident | 秋穗、愛莉、黑奏 | PRE-STORY | 帝國歷108年（前史，主線開始前15年） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_9_AkihoAeriAccident.png | ❌ 未有圖 | 實驗室的瞬間：愛莉的手剛接觸到裂開的裝置，石像化從接觸點開始蔓延——手指、掌心、手腕，灰白色的石頭質地快速侵佔皮膚。 |
| 10 | 165 | 前史／源起閃回 | 殿後的前夜 | The Night Before the Rear Guard | 美夜子、凜 | ORIGIN_FLASHBACK | 前史，帝國歷108年（凜光環處決前夜；美夜子PTSD情感根源） | ⭐⭐⭐⭐ | ConceptArt_Scene_10_RinMiyakoLastNight.png | ❌ 未有圖 | 帝國歷108年，某個戰地夜晚，凜與美夜子並排——可能是在臨時據點的地板上，可能是靠牆坐著，可能是背對背沉默地對著各自的方向。 |
| 11 | 152 | Act I | 屍骸的道歉 | The Corpse's Apology | 晴香 | ACT_I | 帝國歷113年，Act I 早期（E-02附近，初入戰鬥期） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_11_CorpseApology.png | ❌ 未有圖 | 街道一角，老婆婆形態的屍骸蹲伏在地——身體已扭曲變形，無法正常站立，眼睛渾濁失焦，嘴巴無法發出聲音。 |
| 12 | 37 | Act I | 彩的日常表演 | Aya's Daily Performance | 彩 | Act I | 學校/公開場所 | ⭐⭐⭐ | ConceptArt_Scene_12_Aya_DailyPerformance.png | ❌ 未有圖 | 彩表演完美學生角色，笑容精致眼神空洞 |
| 13 | 35 | Act I | 凜的情報蒐集現場 | Rin's Intelligence Gathering | 凜 | Act I（108年重組後背景狀態） | 黑暗後巷 | ⭐⭐⭐ | ConceptArt_Scene_13_Rin_IntelligenceGathering.png | ❌ 未有圖 | 凜以情緒管理局公務員身份執行職務（非烏鴉形態，見內文修正） |
| 14 | 69 | Act I | 出門確認儀式`[核心概念已重寫]` | Daily Bear Confirmation Ritual | 彩／黑奏 | 113年 Act I 日常 | 玄關/門口 | ⭐⭐⭐ | ConceptArt_Scene_14_Aya_DailyBearConfirmation.png | ❌ 未有圖 | 出門前確認袋中螢遺物熊公仔，熊「永遠潔淨」；非「囤積多隻新舊破損熊公仔」（原文與canon「永遠潔淨」規則直接矛盾） |
| 15 | 82 | Act I | 晴香遞便當（三層交疊） | Haruka's Lunchbox: Three-Layer Overlap | 晴香、黑奏、彩 | 113年 Act I [NC] | 學校 | ⭐⭐⭐ | ConceptArt_Scene_15_Haruka_Lunchbox_ThreeLayers.png | ✅ 有圖 | 黑奏偽裝「彩」接近晴香 → 晴香真心遞便當（對鐵絲網事件本身無有意識記憶），黑奏精算接受，彩（被困內心）看著 → Act III揭露三層情感炸彈 |
| 16 | 169 | Act I | 悲鳴女妖首戰 | First Battle Against the Banshee | 晴香、美夜子、操 | ACT_I | 帝國歷113年4月（Act I Beat 5，E-04） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_16_BansheeFirstBattle.png | ✅ 有圖 | 夜區某處戰場（廢墟/工業區），無臉執行官以角色設定（ConceptArt_Akiho_Boss.png）為準：177cm 高挑身形，純白緊身戰鬥服（銀白束帶結構，背部脊椎核心裝置發出紫藍光），深紫色長髮部分遮蓋臉部，臉部完全溶解為星空/星雲質感（無眼無鼻無嘴），雙手化為紫藍能量長刃。 |
| 17 | 170 | Act I | 情緒管理局的遠望 | The Bureau's Distant Watch | 晴香、美夜子、凜 | ACT_I | 帝國歷113年4月（Act I Beat 5，E-04 戰後） | ⭐⭐⭐⭐ | ConceptArt_Scene_17_BureauDistantWatch.png | ✅ 有圖 | 高處廢墟邊緣，逆光剪影構圖。 |
| 18 | 98 | Act I | 操の虛榮告白 | Misao's Vanity Confession | 操 | Act I | E-02入隊後 | ⭐⭐⭐ | ConceptArt_Scene_18_Misao_VanityConfession.png | ✅ 有圖 | 操入隊初期首次承認「我不如我以為的那麼好」，驕傲底下第一道裂縫 |
| 19 | 9 | Act I | 變身場景 | Transformation Scene | 晴香 | Act I | 金魚旗環境 | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_19_Haruka_FirstTransform.png | ❌ 未有圖 | 晴香首次變身，金魚旗元素與魔法光芒包覆 |
| 20 | 17 | Act I | 膠布哲學三層 | Bandaid Philosophy Triptych | 晴香 | Act I-III | 多時段 | ⭐⭐⭐⭐ | ConceptArt_Scene_20_BandaidPhilosophy_Triptych.png | ✅ 有圖 | 三場景並置：個人習慣→系統隱喻→存在論批判 |
| 21 | 29 | Act I | 花子的溫柔牢籠 | Mother's Gentle Cage | 花子、晴香 | Act I/IV | 家中/循環 | ⭐⭐⭐ | ConceptArt_Scene_21_Mother_GentleCage.png | ✅ 有圖 | 永遠循環的晨間，母愛的溫暖同時是囚禁 |
| 22 | 30 | Act I | 違和感與對峙 | Dissonance and Confrontation | 晴香 | Act I | 鏡前 | ⭐⭐⭐ | ConceptArt_Scene_22_Dissonance_Confrontation.png | ✅ 有圖 | 鏡中倒影延遲0.3秒，隱約疊著模糊小孩身影，與溫柔形象間的微妙違和 |
| 23 | 33 | Act I | 晴香的城市獨行 | Haruka's Solitary Urban Walk | 晴香 | Act I-II | 日區街道 | ⭐⭐⭐ | ConceptArt_Scene_23_Haruka_SolitaryUrbanWalk.png | ✅ 有圖 | 晴香獨自行走日區城市，試圖融入卻被隔離 |
| 24 | 34 | Act I | 美夜子與小光的對話`[INFERRED]` | Miyako and Hikari Conversation | 美夜子、小光 | Act I | 室內溫馨空間 | ⭐⭐⭐ | ConceptArt_Scene_24_Miyako_Hikari_Conversation.png | ✅ 有圖 | 貓形態美夜子與年幼小光進行對話（此互動canon未見直接記錄） |
| 25 | 38 | Act I | 操的獨舞冥想`[INFERRED]` | Misao's Solitary Dance Meditation | 操 | Act I-II操屍骸化前 | 舞蹈室`[NEEDS_FACT]` | ⭐⭐⭐ | ConceptArt_Scene_25_Misao_DanceMeditation.png | ✅ 有圖 | 操獨舞（舞蹈習慣本身canon未支持，人物心理基礎有依據） |
| 26 | 39 | Act I | 朱音的糖果成癮 | Akane's Candy Addiction | 朱音 | Act I-II | 房間/密閉空間 | ⭐⭐⭐ | ConceptArt_Scene_26_Akane_CandyAddiction.png | ✅ 有圖 | 朱音房間被糖果包圍，無法自拔沉溺逃避 |
| 27 | 41 | Act I | 秋穗的藥物實驗室 | Akiho's Drug Experiment Laboratory | 秋穗 | Act I（`[NEEDS_FACT]`具體時點） | 冷色實驗室 | ⭐⭐⭐ | ConceptArt_Scene_27_Akiho_DrugLab.png | ✅ 有圖 | 秋穗進行祕密實驗，CGM 血糖手錶誕生（早於Act I派發） |
| 28 | 42 | Act I | 花子的溫暖廚房 | Hanako's Warm Kitchen | 花子、晴香 | Act I（記憶碎片，`[INFERRED]`） | 晨間廚房 | ⭐⭐⭐ | ConceptArt_Scene_28_Hanako_WarmKitchen.png | ✅ 有圖 | 記憶碎片中的母愛幻影，非物理現實持續場景 |
| 29 | 120 | Act I | 珍寶珠入隊——朱音加入主角團 | The Lollipop Recruitment | 朱音、晴香 | ACT_I | 夜區後巷 | ⭐⭐⭐⭐ | ConceptArt_Scene_29_Akane_LollipopRecruitment.png | ❌ 未有圖 | 已補全CDL-052完整台詞；地點由「街角」修正為「後巷」；payoff鏈補正至SPEC#104下水道無聲重逢 |
| 30 | 121 | Act I | 操入隊——晴香以身體擋攻擊 | The Skirt Question | 操、晴香 | ACT_I | 屍骸戰場（戰鬥收尾瞬間） | ⭐⭐⭐⭐ | ConceptArt_Scene_30_Misao_SkirtQuestion.png | ❌ 未有圖 | 已補全CDL-050完整台詞；已修正「屍骸已清除」時序誤植（實際發生於戰鬥收尾而非戰後平靜殘局） |
| 31 | 142 | Act I | 秋穗實驗室懺悔 | Akiho's Laboratory Confession | 秋穗（獨處）、愛莉石像 | Act I [NC]全幕反覆 | — | ⭐⭐⭐⭐ | ConceptArt_Scene_31_Akiho_LaboratoryConfession.png | ❌ 未有圖 | 秋穗每天跪在石像前傾訴，石像從不回應；失敗科學家向沉默見證者的循環懺悔 |
| 32 | 130 | Act I | 晴香鏡中整合 | Haruka Mirror Integration | 晴香、夕、彩 | ACT_I_FINALE | 113年 Act I 幕末（E-XX 整合的長線前置） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_32_HarukaMirrorIntegration.png | ✅ 有圖 | 晴香一個人站在黑暗的浴室或房間鏡前，快到疲憊的夜晚。 |
| 33 | 84 | Act II | 美夜子Glitch Form首次 | Miyako's First Glitch Form | 美夜子 | Act II | Phase A，E-06 | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_33_Miyako_FirstGlitch.png | ❌ 未有圖 | 護隊受傷（非PTSD）觸發貓殼首次功能性崩裂，凜的斷刃鏡面反光同步映出人形殘影 |
| 34 | 162 | Act II | 放棄的那一秒 | The Second of Surrender | 紫音、小光 | ACT_II | 帝國歷113年（Act II Phase B，E-07a小光之死後直接觸發，E-07a/b之間的過渡瞬間） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_34_ShionCorpsificationMoment.png | ❌ 未有圖 | 廢棄空間，小光死亡的現場。 |
| 35 | 166 | Act II | 既然如此，讓怪物有個家 | If So, Let the Monsters Have a Home | 紫音、黑奏、小光 | ACT_II | 帝國歷113年5-6月（Act II Phase B，E-07a結束後至E-07b之間） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_35_ShionFallDecision.png | ❌ 未有圖 | 廢棄的空間（即將成為廢棄糖果工廠的地點，或類似的荒廢場所），紫音獨自一人，面前是小光已屍骸化後的殘骸——不再是完整的人形，但紫音仍然坐在其旁邊，或手放在上面。 |
| 36 | 43 | Act II | 朱音的糖果王國展覽 | Akane's Candy Kingdom Exhibition | 朱音 | Act II Phase B，113年5-6月 | 廢棄糖果工廠（糖果王座全景） | ⭐⭐⭐ | ConceptArt_Scene_36_Akane_CandyKingdomExhibit.png | ❌ 未有圖 | 糖果王座全景展示，腐爛融化跡象處處可見（同圖73互補） |
| 37 | 128 | Act II | 打怪無效 | Monster Fighting Proves Ineffective | 晴香、朱音、愛莉 | ACT_II | 帝國歷113年5月末～6月中旬（Act II Phase B～Phase C過渡，E-07b～E-08期間） | `[NEEDS_FACT]` | ConceptArt_Scene_37_TeamCombat_Ineffective.png | ❌ 未有圖 | 主角團在廣場與魔法屍骸戰鬥，晴香以耀眼光芒消滅屍骸，操以精密傀儡絲斬擊，美夜子以黑貓形態敏捷補刀——表面上連貫勝利，屍骸一隻一隻倒下。 |
| 38 | 85 | Act II | 小光之死＋黑奏邏輯侵入 | Hikari's Death + Kurokane's Logic Invasion | 紫音、黑奏 | Act II | Phase B，E-07a | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_38_Hikari_Death_KurokaneInvasion.png | ❌ 未有圖 | 小光斷氣後紫音發癲徒手打崩其他屍骸，骨頭外露仍狂笑，歌德尖刺初現，黑奏邏輯緊接植入 |
| 39 | 86 | Act II | 廢棄糖果工廠三人辯論 | Three-Way Debate in the Abandoned Candy Factory | 晴香、操、紫音 | Act II | Phase B，E-07b | ⭐⭐⭐ | ConceptArt_Scene_39_CandyFactory_ThreeWayDebate.png | ❌ 未有圖 | 操調停失敗後晴香趕到，三種哲學立場正面交鋒，直接導致紫音被放逐 |
| 40 | 94 | Act II | 彩「卡頓」——黑奏系統困惑（第二次） | Aya's "Glitch": Kurokane's System Confusion, Second Occurrence | 晴香、彩（黑奏） | Act II | Phase B，E-08[NC] | ⭐⭐⭐ | ConceptArt_Scene_40_Aya_SystemGlitch_Second.png | ❌ 未有圖 | 晴香無意間的溫暖小動作觸發黑奏系統第二次短暫困惑，眼神紫色閃爍0.5秒+身體輕微僵直 |
| 41 | 96 | Act II | 黑奏農場觀察 | Kurokane's Farm Observation | 黑奏（彩） | Act II | Phase B，E-08高壓期 | ⭐⭐⭐⭐ | ConceptArt_Scene_41_Kurokane_FarmObservation.png | ❌ 未有圖 | 晴香陷入恐怖家家酒高壓痛苦時刻，黑奏在暗處冷靜評估的特寫 |
| 42 | 97 | Act II | 鏡像相簿異變 | Mirror Photo Album Anomaly | 晴香、美夜子 | Act II | Phase B，E-08[NC] | ⭐⭐⭐ | ConceptArt_Scene_42_Haruka_PhotoAlbumAnomaly.png | ❌ 未有圖 | 玻璃反射中美夜子身旁出現模糊異象（手/藍色馬尾影子），Red Herring機制啟動，身份不明 |
| 43 | 73 | Act II | 家長日大作戰 | Parents' Day Infiltration | 小光、紫音、操 | Act II Phase B | 學校 | ⭐⭐⭐ | ConceptArt_Scene_43_ParentsDay_Infiltration.png | ✅ 有圖 | 小光家長日：紫音以「家姐」身份出席，操扮「媽媽」（原文誤植為操扮紫音的家長，已修正） |
| 44 | 47 | Act II | 操的摔碎時刻 | Misao's Breaking Moment | 操 | Act II Phase C，E-09a，113年7-8月 | `[NEEDS_FACT]` | ⭐⭐⭐ | ConceptArt_Scene_44_Misao_BreakingMoment.png | ❌ 未有圖 | 操姿態崩潰跌落，傀儡絲斷裂（Stage 2a） |
| 45 | 129 | Act II | 天使變公敵 | Angel Becomes Public Enemy | 晴香、愛莉、夕 | ACT_II | 帝國歷113年7月中旬（Act II Phase C，E-09直播失控事件當晚） | `[NEEDS_FACT]` | ConceptArt_Scene_45_LightVeil_PublicEnemy.png | ❌ 未有圖 | 直播舞台，晴香以完美的粉紅白色變身出現——然後在同一個畫面，左手變成黑色爪子，眼睛失去人的光芒變成空洞死寂，身體開始本能吸食圍觀者的正面情緒。 |
| 46 | 31 | Act II | 操回歸人類身軀 | Misao Returns to Humanity | 操 | Act II Phase C（E-09a後插曲） | 地點`[NEEDS_FACT]` | ⭐⭐⭐ | ConceptArt_Scene_46_Misao_ReturnHumanity.png | ❌ 未有圖 | 操砸碎人偶鏡子，決定回歸殘缺真實 |
| 47 | 74 | Act II | 甜品局掉牙 | Dessert Party Tooth Drop | 操、晴香、眾人 | Act II Phase C（E-09a起） | 甜品店/餐桌 | ⭐⭐⭐⭐ | ConceptArt_Scene_47_Misao_DessertToothDrop.png | ✅ 有圖 | 操Body Horror Stage 2a（原文誤標Stage 2b）悄悄掉牙，左手掌托著帶血牙齒，其他人渾然不覺仍歡笑食甜品 |
| 48 | 87 | Act II | 紗夜犧牲——耳鳴遮蔽 | Sayo's Sacrifice: Tinnitus Veil | 紗夜、操 | Act II | Phase C，E-09a | ⭐⭐⭐⭐ | ConceptArt_Scene_48_Sayo_Sacrifice_TinnitusVeil.png | ❌ 未有圖 | 紗夜豪宅門口舉槍掩護操逃跑，白色噪音吞沒槍聲與遺言，操只看見她倒下的剪影 |
| 49 | 91 | Act II | 操絲線縫牙 | Misao Sews Her Teeth with Puppet Strings | 操 | Act II | Phase C，E-09a起 | ⭐⭐⭐⭐ | ConceptArt_Scene_49_Misao_PuppetStringTeeth.png | ✅ 有圖 | 鏡像破碎之夜後Body Horror Stage 2a，鏡前用傀儡絲縫合鬆動牙齒，工匠式自我維護 |
| 50 | 92 | Act II | 美夜子無價值留守 | Miyako's Worthless Vigil | 晴香、美夜子 | Act II | Phase C，E-09 | ⭐⭐⭐⭐ | ConceptArt_Scene_50_Miyako_WorthlessVigil.png | ✅ 有圖 | 晴香社會性死亡後躲藏地鐵站，美夜子貓形態遞沒氣可樂靜靜留守，「義務守護」轉為「無條件羈絆」 |
| 51 | 95 | Act II | 飢餓的天使——直播失控（半屍骸） | Hungry Angel: Live Broadcast Out of Control | 晴香（夕接管） | Act II | Phase C，E-09 | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_51_Haruka_LiveBroadcastBreak.png | ✅ 有圖 | 夕接管晴香身體吸取圍觀者正面情緒並撕破光幕濾鏡，SPEC#21光幕破碎前一幀 |
| 52 | 26 | Act II | 操被遺棄 | Misao's Abandonment | 操、父親、紗夜 | Act II Phase C | 大宅夜晚 | ⭐⭐⭐ | ConceptArt_Scene_52_Misao_Abandoned.png | ❌ 未有圖 | 父親親自開門投降，紗夜犧牲掩護女兒逃離 |
| 53 | 123 | Act II | 死前願望清單 | The Before-Death Wish List | 晴香、美夜子、操 | ACT_II | 113年7-10月，Act II Phase D，地下化生存喘息期 | `[NEEDS_FACT]` | ConceptArt_Scene_53_WishList_Underground.png | ❌ 未有圖 | 地下避難所一角，空氣悶熱，燈光昏黃，大家隨意坐臥，各自保持各自的距離感。 |
| 54 | 140 | Act II | 既視感追認 | Dejavu Recognition | 美夜子（Unit 01 貓形態）、朔 | Act II Phase D（113年9-10月） | — | ⭐⭐⭐⭐ | ConceptArt_Scene_54_Saku_DejavuRecognition.png | ✅ 有圖 | 朔從行為習慣認出美夜子，美夜子完全沒有認出朔；「物理極近，記憶極遠」的宿命重逢 |
| 55 | 145 | Act II | 保護的殘響 | Echo of Protection | 朔、成年屍骸+年幼屍骸 | Act II Phase D（113年9-10月） | — | ⭐⭐⭐⭐ | ConceptArt_Scene_55_Saku_EchoOfProtection.png | ❌ 未有圖 | 朔目睹成年屍骸以殘破本能護住年幼屍骸；扳機前最長的停頓；世界觀從「清除者」轉向「解放者」的決定性時刻 |
| 56 | 148 | Act II | 美夜子廢棄地鐵站夜明前 | Miyako's Pre-Dawn in the Abandoned Station | 美夜子、晴香、凜 | ACT_II | 帝國歷113年9月至114年2月（Act II Phase D/E，地下避難期間） | ⭐⭐⭐⭐ | ConceptArt_Scene_56_56.png | ❌ 未有圖 | 深夜廢棄地鐵站，美夜子獨自坐在月台角落，膝蓋抱起，後背靠著冰冷的柱子。 |
| 57 | 168 | Act II | 幻象破滅——屍骸外流城市 | The Illusion Shatters: The Corpses Flood the City | 晴香、紫音、夕 | ACT_II | 帝國歷113年11月～12月（Act II Phase D 末，E-12 前夕） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_57_AkaneCorpseFloodCity.png | ✅ 有圖 | 夜間嘅城市邊緣（夜區街道），一大群失控嘅魔法屍骸從暗巷/下水道湧出，形態各異（廢鐵型、扭曲人形、殘破軀體），居民驚慌逃竄。 |
| 58 | 143 | Act II | 操的夜中人偶製作 | Misao's Midnight Doll Assembly | 操（獨處） | Act II Phase D/E（113年11月-114年1月） | — | ⭐⭐⭐⭐ | ConceptArt_Scene_58_Misao_MidnightDollAssembly.png | ❌ 未有圖 | Body Horror Stage 2b具體呈現——操製作完美人偶時感覺不到手的存在；「完美即地獄」哲學視覺化 |
| 59 | 40 | Act II | 愛莉的童謠救贖 | Aeri's Nursery Rhyme Salvation | 愛莉、晴香 | Act II Phase D（E-10b，`[NEEDS_FACT]`：本場景戲劇規模是否同一事件） | 現實與童話交界 | ⭐⭐⭐⭐ | ConceptArt_Scene_59_Aeri_NurseryRhymeSalvation.png | ✅ 有圖（檔名不同：`ConceptArt_Scene_Aeri_NurseryRhymeWorld.png`） | 愛莉以紙皮騎士形態（非魔法少女服裝）具現化守護晴香 |
| 60 | 89 | Act II | 愛莉具現化擋刀＋石像龜裂 | Aeri's Materialized Shield + Statue Cracks | 愛莉、晴香 | Act II | Phase D，E-10b | ⭐⭐⭐⭐ | ConceptArt_Scene_60_Aeri_PaperKnight_StatueCracks.png | ❌ 未有圖 | 雙格分鏡：紙皮騎士擋刀碎裂 vs 秋穗家石像同步出現第一道細裂縫 |
| 61 | 90 | Act II | 王國邊緣的盛宴 | Feast at the Kingdom's Edge | 紫音、小光（屍骸）、朔 | Act II | Phase D，E-11風暴前夕 | ⭐⭐⭐⭐ | ConceptArt_Scene_61_Akane_FeastAtEdge.png | ❌ 未有圖 | 紫音王座上餵食發霉糖果予屍骸化嘅小光，自以為建立「冇傷害樂園」，朔遠遠目擊 |
| 62 | 93 | Act II | 凜重組後第一次遇見美夜子 | Rin's First Encounter with Miyako After Reassembly | 凜、美夜子 | Act II | Phase D，E-11附近（beat歸屬待QQ-170確認） | ⭐⭐⭐⭐ | ConceptArt_Scene_62_Rin_MiyakoFirstEncounter.png | ✅ 有圖 | 美夜子貓形態近距離擦身而過重組後的凜，凜語義無反應但手指無意識微收緊——單向認出的創傷 |
| 63 | 99 | Act II | 朔看見Unit 01的臉 | Saku Sees Miyako's Face on Unit 01 | 朔、美夜子 | Act II | Phase D，E-11風暴期間 | ⭐⭐⭐⭐ | ConceptArt_Scene_63_Saku_SeesUnit01.png | ❌ 未有圖 | 朔破例現身介入風暴，近距離認出美夜子左耳星形飾物，懷疑升級接近確信但未100%確認 |
| 64 | 12 | Act II | 集體潛意識之城 | Collective Unconscious City | 紙皮騎士、隊伍 | Act II Phase D | 超現實夢境 | ⭐⭐⭐⭐ | ConceptArt_Scene_64_CollectiveUnconscious_Storm.png | ❌ 未有圖 | 後巷唐樓扭曲成超現實，黑色淤泥與痛苦人臉浮現（E-11風暴） |
| 65 | 20 | Act II | 紙皮騎士防禦 | Cardboard Knight Defense | 愛莉 | Act II Phase D | 集體潛意識（現實裂縫瞬間） | ⭐⭐⭐⭐ | ConceptArt_Scene_65_CardboardKnight_Defense.png | ❌ 未有圖 | 愛莉紙皮騎士單次擋刀，盔甲崩碎大半，石像同步裂痕（E-10b，E-11風暴前數日） |
| 66 | 88 | Act II | 困獸的慈悲——朔見証之夜 | Trapped Beast's Mercy: Saku's Witness Night | 晴香、朔 | Act II | Phase D中期，[NC]見証之夜 | ⭐⭐⭐⭐ | ConceptArt_Scene_66_Saku_WitnessNight.png | ❌ 未有圖 | 下水道外圍，晴香自傷式壓制被夕黑色能量異化的左手，再溫柔陪伴屍骸消散至光塵，朔以狙擊鏡遠距目擊 |
| 67 | 147 | Act II | 紫音下水道野獸化 | Shion's Sewer Beastification | 紫音、小光、彩 | ACT_II | 帝國歷113年8月末至114年1月（Act II Phase E/F，流浪期間） | ⭐⭐⭐⭐ | ConceptArt_Scene_67_67.png | ❌ 未有圖 | 城市下水道的某個角落，紫音半蹲在積水裡，周圍聚集著幾隻廢鐵型屍骸和流浪狗。 |
| 68 | 125 | Act II | 無名男孩速寫簿 | The Anonymous Boy's Sketchbook | 操 | ACT_II_III | Act II Phase E，113年11月-114年1月（具體114年1月，Beat E-13） | `[NEEDS_FACT]` | ConceptArt_Scene_68_Misao_SketchbookRevelation.png | ❌ 未有圖 | 操一個人翻開遺物速寫簿。 |
| 69 | 21 | Act II | 光幕濾鏡破碎 | Light Veil Shattered | 晴香 | Act II | 日區公開場所 | ⭐⭐⭐ | ConceptArt_Scene_69_LightVeil_Shattered.png | ✅ 有圖 | 完美魔法少女形象在直播中崩塌，露出滿臉淚水的真實晴香 |
| 70 | 144 | Act II | 操與紗夜最後一晨 | Misao and Sayo's Last Morning | 操、紗夜 | Act II Phase F（114年1月末-2月初） | — | ⭐⭐⭐⭐ | ConceptArt_Scene_70_Misao_Sayo_LastMorning.png | ❌ 未有圖 | 鏡像破碎之夜前的最後平靜；操第一次不需要表演完美；紗夜額頭輕吻，手在顫抖而操未察覺 |
| 71 | 167 | Act II | 母親之愛的背面 | The Other Side of a Mother's Love | 晴香、黑奏、花子 | ACT_II | 帝國歷113年（Act II 中期，秋穗執念頂點期） | ⭐⭐⭐⭐ | ConceptArt_Scene_71_AkihoBetrayal.png | ❌ 未有圖 | 秋穗一個人，在一個私密的空間——實驗室，或者愛莉石像前的角落。 |
| 72 | 5 | Act II | 操的鏡前獨白 | Misao's Mirror Monologue | 操 | Act II | 鏡台（E-09a夜） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_72_Misao_MirrorMonologue.png | ❌ 未有圖 | 父親背叛+紗夜犧牲同一夜，操在鏡前用傀儡絲縫牙自我修補（Stage 2a起點） |
| 73 | 4 | Act II | 廢棄糖果工廠 | Abandoned Candy Factory | 朱音 | Act II | 糖果工廠 | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_73_Akane_CandyFactory.png | ❌ 未有圖 | 朱音以屍骸女皇形態坐在自製糖果王座（113年5-6月，E-07b/E-12） |
| 74 | 6 | Act II | 月下崩潰 | Moonlight Breakdown | 美夜子 | Act II | 窗台/滿月夜 | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_74_Miyako_MoonlightBreakdown.png | ✅ 有圖 | 美夜子貓殼龜裂，進行自我確認測試 |
| 75 | 7 | Act II | Fallen Angel 街道 | Fallen Angel Street | 晴香、彩 | Act II | 日區城市街道 | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_75_Haruka_FallenAngel.png | ❌ 未有圖 | 晴香遇見彩短暫「卡頓」空白瞬間（P-C06，E-05[NC]），光幕濾鏡破碎 |
| 76 | 14 | Act II | 凜的雙面形態 | Rin's Dual Forms | 凜 | Act II-III | 日夜區交界 | ⭐⭐⭐⭐ | ConceptArt_Scene_76_Rin_DualForms.png | ✅ 有圖（檔名不同：`ConceptArt_Scene_Rin_PeacockVsRaven_.png`） | 凜孔雀飛行員（光鮮官方）vs. 烏鴉形態（暗巷真實） |
| 77 | 15 | Act II | 朔的日夜對比 | Saku's Day-Night Duality | 朔 | Act II-III | 日夜區 | ⭐⭐⭐⭐ | ConceptArt_Scene_77_Saku_DayNightDuality.png | ❌ 未有圖 | 朔白色特務形態（日區）vs. 綠松石獵人（夜區） |
| 78 | 16 | Act II | 操的形式主義廢墟 | Misao's Formalism Ruins | 操 | Act II-III | 廢棄工廠 | ⭐⭐⭐⭐ | ConceptArt_Scene_78_Misao_FormalismRuins.png | ❌ 未有圖 | 操在廢棄工廠獨舞，傀儡絲纏繞身體 |
| 79 | 18 | Act II | 首次情緒連結危機 | First Emotion Link Crisis | 晴香、美夜子、朱音、凜 | Act II | 意識連結空間 | ⭐⭐⭐⭐ | ConceptArt_Scene_79_EmotionLink_Crisis.png | ✅ 有圖 | 四人情緒連結失控，創傷記憶亂竄 |
| 80 | 22 | Act II | 小光死亡與屍骸化 | Hikari's Death and Corpse Transformation | 小光、朱音 | Act II | 犠牲地點 | ⭐⭐⭐ | ConceptArt_Scene_80_KoHikaru_Death.png | ❌ 未有圖 | 小光在朱音面前被屍骸襲擊，身體轉化為廢鐵 |
| 81 | 23 | Act II | 恐怖家家酒（學校） | Horrific House Play School | 晴香、彩 | Act II | 校園空間 | ⭐⭐⭐ | ConceptArt_Scene_81_HorrificHouse_School.png | ❌ 未有圖 | 晴香與彩維持致命平衡，表面日常卻充滿暗流 |
| 82 | 24 | Act II | 凜的人性消磨 | Rin's Humanity Erased | 凜 | Act II | 情緒管理局 | ⭐⭐⭐ | ConceptArt_Scene_82_Rin_HumanityErased.png | ❌ 未有圖 | 凜穿制服，體制執行機器，個體特異性被消除 |
| 83 | 25 | Act II | 朱音的背叛與真相 | Akane's Betrayal Truth | 朱音 | Act II | 後巷 | ⭐⭐⭐ | ConceptArt_Scene_83_Akane_BetrawalTruth.png | ❌ 未有圖 | 朱音在後巷注射情緒毒品，對希望發出冷漠嘲笑 |
| 84 | 27 | Act II | 美夜子的三段式覺醒 | Miyako's Three-Stage Awakening | 美夜子 | Act II-III | 多時段 | ⭐⭐⭐ | ConceptArt_Scene_84_Miyako_ThreeStageAwakening.png | ❌ 未有圖 | 貓殼龜裂→月下測試→溫柔擁抱，重生過程 |
| 85 | 36 | Act II | 朔與黑市網絡 | Saku and the Black Market Network | 朔 | Act II | 地下室/廢棄地下道 | ⭐⭐⭐ | ConceptArt_Scene_85_Saku_BlackMarketNetwork.png | ❌ 未有圖 | 朔與黑市線人交易，維持日夜身份平衡 |
| 86 | 124 | Act II | 美夜子鏡像反映 | Miyako's Mirror Death | 美夜子 | MULTI_ACT | 全程恆常背景規則（Beta線詛咒生效期間全程適用，非Act II後才開始；`[NEEDS_FACT: 解除點未落實]`） | `[NEEDS_FACT]` | ConceptArt_Scene_86_Miyako_MirrorDeathReflection.png | ❌ 未有圖 | 普通走廊。 |
| 87 | 157 | Act II | 光環的視覺顯現 | The Halo's Physical Manifestation | 美夜子、凜 | ACT_II_III | Act II-III（任何魔法少女觸及力量上限時；以凜為典型呈現） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_87_HaloManifestation.png | ❌ 未有圖 | 凜在高強度戰鬥中逼近力量上限，肩頸與手腕關節處出現懸浮發光圓環——初期呈半透明神聖金光，隨著超載程度加深，光環顏色開始轉移，轉速加快。 |
| 88 | 44 | Act II | 晴香與影子的雙舞 | Haruka and Shadow Dual Dance | 晴香、夕 | Act II 末，E-15 | 鏡面/夢境空間 | ⭐⭐⭐ | ConceptArt_Scene_88_Haruka_ShadowDualDance.png | ❌ 未有圖 | 晴香放下膠布、伸手貼向夕，動作同步反向的鏡像雙舞 |
| 89 | 11 | Act II | 玻璃庭院茶會 | Glass Garden Tea Party | 彩（黑奏操控）、主角團 | Act II 幕末 | 帝國塔頂溫室 | ⭐⭐⭐⭐ | ConceptArt_Scene_89_GlassGarden_TeaParty.png | ❌ 未有圖 | 彩以自身外觀主持茶會，黑奏聲線滲出宣告虛假黎明破碎（彩/黑奏尚未確認同一人） |
| 90 | 103 | Act III | 糖果唐樓交易 | Candy Tower Block Transaction | 晴香、隊員（具體未指定） | Act III | Phase G3，114年3月，糖果唐樓 | ⭐⭐⭐ | ConceptArt_Scene_90_CandyTowerBlockTransaction.png | ❌ 未有圖 | 主角團潛入黑市據點搜尋紫音下落，護士長形態中間人如品酒師展示情緒結晶（原文誤植紫音在場已移除） |
| 91 | 104 | Act III | 下水道無聲重逢 | Silent Reunion in the Sewers | 晴香、紫音（隱約存在，半屍骸化野獸狀態） | Act III | Phase G4，114年3月，下水道【Fake Climax】 | ⭐⭐⭐⭐ | ConceptArt_Scene_91_SilentReunionSewers.png | ❌ 未有圖 | 晴香找到已半屍骸化嘅紫音但選擇不打擾，留下糖果藥品默默離開；**非最終團圓**，Day14帝國廣場才正式相見（原文誤植payoff為「糖果工廠正面相遇」已修正） |
| 92 | 139 | Act III | 刑思破繭 | Keishi Breaking Free | 刑思、晴香、操 | ACT_III | 帝國歷114年3月初（Act III Phase G） | `[NEEDS_FACT]` | ConceptArt_Scene_92_KeishiEscape.png | ❌ 未有圖 | 秋穗地下實驗室的設備在崩潰。 |
| 93 | 101 | Act III | 嘆息之橋——凜獨角 | Sigh Bridge: Rin's Solo Moment | 凜 | Act III | Phase G-H之間（`[btd 未定案]`） | ⭐⭐ | ConceptArt_Scene_93_Rin_SighBridgeSolo.png | ❌ 未有圖 | `[NEEDS_FACT]` 整個beat canon未設計（地點/內容均btd），暫以推測性獨處場景演繹 |
| 94 | 133 | Act III | 月下相認 | Moonlit Recognition | 晴香、美夜子、凜 | ACT_III_PHASE_H1.5 | 114年4月中，晚間，Act III Phase H1.5 | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_94_MoonlitRecognition.png | ❌ 未有圖 | 月亮很圓，光把兩個人影拉得很長。 |
| 95 | 156 | Act III | 美夜子被迫介錯凜 | Miyako's Final Mercy for Rin | 美夜子、凜 | ACT_III_PHASE_H2 | 帝國歷114年4月末（Act III Phase H2-H3，凜選擇消散之際） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_95_MiyakoKaishakunin.png | ✅ 有圖（檔名不同：`ConceptArt_Scene_Miyako_Kaishakunin.png`） | 混戰廢墟的邊角，凜靠在一段崩塌的牆上，身體已幾乎耗盡，但臉上是接受的平靜。 |
| 96 | 163 | Act III | 我還是人嗎？ | Am I Still Human? | 晴香、美夜子、黑奏 | ACT_III | 帝國歷114年4月中旬（Act III Phase H，晴香陷入集體潛意識中期） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_96_MiyakoBathMirror.png | ❌ 未有圖 | 完全黑暗的浴室，只有牆上某處有一道細光縫。 |
| 97 | 100 | Act III | 凜的最終選擇——Unit 00-Null揭露 | Rin's Final Choice: Unit 00-Null Revelation | 凜、晴香 | Act III | Phase H2，E-III-H2 | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_97_Rin_FinalChoiceUnit00.png | ✅ 有圖 | 凜推開晴香伸出的手，主動回到帝國實驗室要求黑奏挖走所有感情，自願成為Unit 00-Null |
| 98 | 32 | Act III | 美夜子的貓殼復原 | Miyako's Cat Shell Recovery | 美夜子 | Act III Phase H（H1.5後） | 地點`[NEEDS_FACT]` | ⭐⭐⭐ | ConceptArt_Scene_98_Miyako_CatShellRecovery.png | ❌ 未有圖 | 美夜子在鏡前看到腐爛透視的真實自我，已知真相仍選擇沉默 |
| 99 | 102 | Act III | 操の被迫報串 | Misao's Forced Betrayal Report | 操 | Act III | Phase H暗線 | ⭐⭐⭐⭐ | ConceptArt_Scene_99_Misao_ForcedBetrayalReport.png | ✅ 有圖 | 父親以「送返研究室重組變成母親那樣」為最後通牒，操被迫在通訊器前交出隊友坐標 |
| 100 | 105 | Act III | 公告夜（紫音作為處決目標） | Announcement Night: Akane as Execution Target | 紫音（已被捕拘束）、主角團 | Act III | Phase I，114年5月Day13夜 | ⭐⭐⭐⭐ | ConceptArt_Scene_100_AnnouncementNight_AkanePurgeTarget.png | ❌ 未有圖 | **核心機制已修正**：黑奏公開廣播嘅係已被捕紫音嘅「Day14正午帝國廣場公開處決」公告（落戰書），非通緝仍在逃嘅「危險生物」（原文方向相反） |
| 101 | 131 | Act III | 親姊妹揭露現場 | Sisters' Identity Revelation | 晴香、美夜子、秋穗 | ACT_III_FINALE | 114年 Act III 末（Phase J 後） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_101_SistersIdentityRevelation.png | ❌ 未有圖 | 晴香和美夜子（此時為人形）突然在某個瞬間同時靜止，兩人的眼神穿過空氣對上。 |
| 102 | 160 | Act III | 愛不是佔有，是讓她自由 | Love Is Not Possession, It Is Freedom | 彩、黑奏、螢 | ACT_III | 帝國歷114年4月末（Act III Phase J決戰高潮，彩奪回身體主導權後） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_102_AyaLoveDeclaration.png | ❌ 未有圖 | 彩站在天空之中，身體剛剛奪回，金色光芒從內部透出。 |
| 103 | 132 | Act III | 集體潛意識正面衝突 | Collective Unconscious Direct Clash | 晴香、夕、彩 | ACT_III_PHASE_J | 114年5月 Act III Phase J（集體潛意識決戰中） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_103_CollectiveUnconscious_DirectClash.png | ❌ 未有圖 | 晴香和夕在一個不屬於現實的空間裡互相猛衝——那個地方的牆壁正在消融成星空，地板是隨時會碎裂的無底深淵。 |
| 104 | 134 | Act III | 黑奏與晴香的病態愛恨對峙 | Kurokane and Haruka — Pathological Love-Hate Confrontation | 晴香、黑奏、彩 | ACT_III_PHASE_J_CLIMAX | 114年5月 Act III Phase J 決戰高潮 | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_104_KurokaneHaruka_Confrontation.png | ❌ 未有圖 | 黑奏走到晴香面前，兩人距離近得呼吸可以互相感覺到。 |
| 105 | 141 | Act III | 黑奏真身揭露 | Kurokane's True Form Revealed | 黑奏、主角團 | Act III Phase J決戰（114年5月） | — | ⭐⭐⭐⭐ | ConceptArt_Scene_105_Kurokane_TrueFormRevealed.png | ❌ 未有圖 | 皇袍滑落、面具碎裂，148cm幼女雙腳懸空真身暴露；不是展示，是控制崩潰的被迫暴露 |
| 106 | 146 | Act III | 愛莉的第二次改變現實決定 | Aeri's Second Reality Alteration Decision | 愛莉、晴香 | ACT_III_J | 帝國歷114年5月 Act III Phase J（決戰中） | ⭐⭐⭐⭐ | ConceptArt_Scene_106_106.png | ❌ 未有圖 | 在一個無邊際的潛意識空間裡，穿著紙皮盔甲、拿著膠帶修補過無數次的紙劍的愛莉，站在一道由黑色觸手和情緒廢料構成的風暴邊緣。 |
| 107 | 52 | Act III | 彩的靈魂解放之光 | Aya's Soul Liberation Light | 彩 | Act III Phase J（E-III-J8，緊接SPEC#8） | 天空/帝國廣場 | ⭐⭐⭐ | ConceptArt_Scene_107_Aya_SoulLiberationLight.png | ❌ 未有圖 | 彩的靈魂燃燒填補天空裂痕，金光與緋潮猩紅交織（「千萬星辰」意象為`[INFERRED]`延伸） |
| 108 | 49 | Act III | 帝國廣場的市民凝滯 | Empire Plaza Citizens Frozen | 市民眾 | Act III Phase J | 帝國廣場 | ⭐⭐⭐ | ConceptArt_Scene_108_EmpirePlaza_CitizensFrozen.png | ❌ 未有圖 | 數百市民凝滯，表情定格於恐懼無語 |
| 109 | 158 | Act III | 夕嘗試重置世界 | Yu's Attempt to Rewrite Reality | 夕、晴香、彩 | ACT_III_PHASE_K | 帝國歷114年5月底至114年6月（Act III Phase K，偽高潮坍塌後） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_109_YuRealityOverride.png | ❌ 未有圖 | 夕以晴香的身軀站在世界的中心，發動「改變現實」的瞬間：身體發出強烈的光，周圍的時空在她手指間開始撕裂，像玻璃鏡面從中心向外裂開——裂縫裡映照著不同時間線的碎片影像。 |
| 110 | 126 | Act III | 操在集體潛意識尋見母親碎片 | Misao Finds Sayo's Fragments in the Collective Unconscious | 操、愛莉、夕 | ACT_III | 114年5月，Day 13 鋼鐵獨舞前夕（Act III E-III-I1 本身，非獨立場景） | `[NEEDS_FACT]` | ConceptArt_Scene_110_Misao_SayoFragments.png | ❌ 未有圖 | 集體潛意識的深層，沒有具體場景，只有情緒形態的空間——光點、殘影、各種破碎的人類記憶碎片漂浮。 |
| 111 | 164 | Act III | 我選擇停留在我想停留的位置 | I Choose to Stay Where I Want to Stay | 操 | ACT_III | 帝國歷114年5月，Act III Day 13 前夜（鋼鐵獨舞犧牲之前） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_111_MisaoFinalConfession.png | ❌ 未有圖 | 夜晚，一個昏暗的室內小角落，操面對著紗夜說出那句話。 |
| 112 | 1 | Act III | 鋼鐵獨舞 | Steel Solitude Dance | 操 | Act III | 學校瓦礫（Day 13） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_112_Misao_SteelSolitude.png | ✅ 有圖 | 操在學校瓦礫中 Body Horror Stage 3 狀態下獨舞，黑奏撬開口腔揭露縫牙全貌，紗夜遺言回流，最終化為人偶牆 |
| 113 | 3 | Act III | 三重道德處刑 | Triple Moral Execution | 黑奏（彩容器） | Act III | 帝國廣場（處刑室化） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_113_BlackSong_MoralExecution.png | ❌ 未有圖 | 黑奏以三重回憶投影（社會剝奪/身份背叛/創世原罪）逐層刺穿晴香心理防線，非物理武器 |
| 114 | 8 | Act III | 彩奪回身體 | Aya Regains Control | 彩 | Act III | 天空/決戰現場 | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_114_Aya_BodyReclaim.png | ❌ 未有圖 | 彩從黑奏掌控中奪回身體，用金色光輝燃燒自己 |
| 115 | 10 | Act III | 糖果山犧牲 | Candy Mountain Sacrifice | 朱音、小光 | Act III | 帝國廣場（刑場） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_115_Akane_CandyMountain.png | ❌ 未有圖 | 朱音過載變身化為糖晶，成為帝國廣場刑場內的紀念碑 |
| 116 | 19 | Act III | 帝國廣場決戰崩塌 | Empire Plaza Collapse | 晴香、黑奏 | Act III | 帝國廣場 | ⭐⭐⭐⭐ | ConceptArt_Scene_116_EmpirePlaza_Collapse.png | ❌ 未有圖 | 決戰頂點瞬間崩塌，偽勝利假象碎裂 |
| 117 | 45 | Act III | 黑奏的帝國寶座 | Kuroshio's Empire Throne | 黑奏 | Act III | 帝國中心 | ⭐⭐⭐ | ConceptArt_Scene_117_BlackSong_EmpireThrone.png | ❌ 未有圖 | 黑奏以幼女身軀坐在紫黑色巨大寶座 |
| 118 | 48 | Act III | 集體潛意識的淤泥深海 | Collective Unconscious Muddy Deep | 無名者 | `[NEEDS_FACT]`（Act III後段-IV推斷） | 超現實深海（L2/L3） | ⭐⭐⭐ | ConceptArt_Scene_118_CollectiveUnconscious_MuddyDeep.png | ❌ 未有圖 | 視角下沉到無底深海，無數扭曲臉孔糾纏 |
| 119 | 53 | Act III | 朔的雙刃生存 | Saku's Double-Edged Survival | 朔 | Act III（SA-S3融合形態） | 日夜交界 | ⭐⭐⭐ | ConceptArt_Scene_119_Saku_DoubleEdgedSurvival.png | ❌ 未有圖 | 朔同現日夜交界，兩身份合體（Act IV為另一獨立視覺，非同一形態） |
| 120 | 106 | Act III | 彩在心房中摸熊公仔 | Aya Touches the Teddy Bear in Her Heart Chamber | 彩（6歲真身，被囚） | Act III | 貫穿，心房（通風管道那夜重構空間） | ⭐⭐⭐ | ConceptArt_Scene_120_Aya_TeddyBear_HeartChamber.png | ✅ 有圖 | 6歲彩（原文誤植7歲已修正）緊抱螢遺物熊公仔（違反「永遠潔淨」規則的老舊描述已修正），安靜等待；心房空間已修正為「通風管道那夜」重構定義 |
| 121 | 135 | Act III | 夕的臨別頓悟與消散 | Yu's Final Epiphany and Dissolution | 夕、晴香、黑奏 | ACT_III_IV_BOUNDARY | Act III/IV 交界（整合完成後，夕消散前最後時刻） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_121_Yu_FinalEpiphany_Dissolution.png | ❌ 未有圖 | 夕的身體邊緣已經開始消失了——像墨水在水中散開，像煙被風吹散。 |
| 122 | 137 | Act III | 媽媽從未停止愛我 `[DELETE_CANDIDATE]` | Mother Never Stopped Loving Me | 操 | ACT_III | — | — | — | — | **已停用**：2026-07-17跨批次覆核確認與圖110「操在集體潛意識尋見母親碎片」為同一beat重複，原文細節已移除，保留圖110為唯一版本 |
| 123 | 136 | Act III | 糖果山與最後一頓飯 | Candy Mountain and the Last Meal | 美夜子、操、紫音 | ACT_III | 帝國歷114年5月，Day 14 帝國廣場終局 | `[NEEDS_FACT]` | ConceptArt_Scene_123_ShionLastWords.png | ❌ 未有圖 | 帝國廣場的廢墟煙塵中，紫音身穿垃圾拼湊的鎧甲，正在燃燒成形態越來越龐大的糖果山；她的身體已與燃燒的糖果光融為一體，但表情清醒，帶著一種終於放下的輕鬆感。 |
| 124 | 151 | Act III | 彩的永恆輪迴開始 | Aya's Eternal Loop Begins | 彩、黑奏 | ACT_III_IV | 帝國歷114年5月（Act III決戰結束後） | ⭐⭐⭐⭐ | ConceptArt_Scene_124_124.png | ❌ 未有圖 | 在集體潛意識的某個深處，彩以她最真實的樣子站在一個不斷重複的空間門口——那就是通風管道的入口，永恆輪迴的起點。 |
| 125 | 155 | Act III-IV 交界 | 夕完全奪取晴香身體 | Yu's Complete Takeover | 晴香、夕、黑奏 | ACT_III | 帝國歷113年，Act III Phase J決戰後（黑奏真相揭露後；主線接近Act IV前夕） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_125_YuCompleteTakeover.png | ❌ 未有圖 | 晴香的身體站在決戰廢墟中，但裡面的意識不是晴香——眼睛顏色偏移，光芒的質地不對，表情帶著一種晴香從未有過的某種決意和悲涼。 |
| 126 | 161 | Act III-IV 交界 | 二十年的內心地獄 | Twenty Years of Inner Hell | 晴香、美夜子、彩 | ACT_III_IV_GAP | 帝國歷114年-134年（20年間隙，Act III Phase K至Act IV Phase L之間） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_126_HarukaCollectiveUnconscious20Years.png | ❌ 未有圖 | 集體潛意識深處的晴香，她的樣子停留在17歲，但眼神裡是數十年的重量。 |
| 127 | 107 | Act III-IV 交界 | 蜜月困境——K期靈魂監獄 | Honeymoon Trap: Phase K Soul Prison | 晴香 | Act IV（暫定草稿，**非Act III**——2026-07-05已移出Act III scope） | Phase K1，時長`[NEEDS_FACT]` | ⭐⭐⭐ | ConceptArt_Scene_127_PhaseK_SoulPrisonKitchen.png | ❌ 未有圖 | 溫暖日常循環囚禁，窗玻璃反射洩漏真相；Act歸屬已修正，CDL-053誤引已移除，「20年」時長待Act IV Outline確認 |
| 128 | 108 | Act III-IV 交界 | 屍骸覺醒——L4 | Corpse Awakening: L4 Phase | 屍骸群（人偶型/廢鐵型） | Act IV（暫定草稿，**非Act III**——同107同屬已移出範圍嘅Phase K/L） | Phase L4，觸發條件未確認 | ⭐⭐⭐ | ConceptArt_Scene_128_CorpseAwakening_L4.png | ❌ 未有圖 | 城市屍骸集體從沉睡復甦，眼睛逐一亮起人類的光；Act歸屬已修正 |
| 129 | 127 | Act III-IV 交界 | 膠布哲學第四層——覺醒後撕膠布 | Bandage Philosophy Layer 4: After Awakening | 晴香 | ACT_IV | `[INFERRED]` 晴香覺醒後第一個夜晚（Act III E-III-L3「膠布拆下」，Phase L歸屬待... | `[NEEDS_FACT]` | ConceptArt_Scene_129_Haruka_BandageFinalLayer.png | ❌ 未有圖 | 廢墟高處，夜晚，城市在遠處閃爍。 |
| 130 | 150 | Act III-IV 交界 | 夕5歲形態消散 | Yu's Five-Year-Old Form Fades | 夕、晴香 | ACT_IV | 帝國歷134年7月（Act III/IV交界，晴香整合完成時） | ⭐⭐⭐⭐ | ConceptArt_Scene_130_130.png | ❌ 未有圖 | 在集體潛意識的空間裡，夕以5歲晴香的樣子站在晴香面前，黑色的輪廓正在慢慢被光包圍、溶解。 |
| 131 | 138 | Act IV | 二十年後的第一個早晨 | First Morning After Twenty Years | 晴香、美夜子 | ACT_IV | 帝國歷134年7月（Act IV Phase L 覺醒時刻） | `[NEEDS_FACT]` | ConceptArt_Scene_131_HarukaAwakening134.png | ❌ 未有圖 | 帝國歷134年的晴天，一個二十年後的晴香站在變了樣的城市中，她的頭髮是純白的，眼睛是淡灰色近乎透明，臉上沒有表情但眼神深遠。 |
| 132 | 149 | Act IV | 秋穗與愛莉重逢 | Akiho and Aeri's Reunion | 秋穗、愛莉 | ACT_IV | 帝國歷134年7月初（Act IV Phase L） | ⭐⭐⭐⭐ | ConceptArt_Scene_132_132.png | ❌ 未有圖 | 帝國歷134年，在一個普通的室內空間裡，剛從石像甦醒的愛莉坐在床邊，手還有些僵硬，帶著石像的殘餘感。 |
| 133 | 110 | Act IV | 美夜子笨拙演奏（全片最後一幕） | Miyako's Clumsy Playing: The Final Shot | 美夜子 | Act IV Phase L | 時長`[NEEDS_FACT]` | ⭐⭐⭐⭐ | ConceptArt_Scene_133_Miyako_ClumzyFinalShot.png | ❌ 未有圖 | CDL-326「尋回自己之後」，美夜子學彈晴香未完成曲目，全片最後一幕（已補CDL-326引用） |
| 134 | 2 | Act IV | 整合場景 | Integration Scene | 晴香、夕 | Act IV（暫定） | 夢境空間 | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_134_Haruka_Integration.png | ✅ 有圖 | 晴香與夕在三武器揭露/夕接管/彩奪回之後正面碰撞，花子在場與否待確認 |
| 135 | 13 | Act IV | 三位一體永恆守護者終局 `[跨批次覆核修正]` | Eternal Trinity Guardian Final | 晴香 | Act IV | 集體潛意識融合 | ⭐⭐⭐⭐ | ConceptArt_Scene_135_Haruka_TrinityGuardian.png | ❌ 未有圖 | **[概念已被CDL-326取代]** 晴香保留意識記憶，主動融合成三位一體永恆守護者，非粒子化消散（同圖137/139/141同一修正） |
| 136 | 28 | Act IV | 緋潮反噬 | Scarlet Tide Backlash | 晴香、彩 | Act IV（草稿） | 時間線交界 | ⭐⭐⭐ | ConceptArt_Scene_136_ScarletTide_Backlash.png | ❌ 未有圖 | 時間線被撕裂，Alpha 與 Beta 線衝突爆發 |
| 137 | 50 | Act IV | 晴香的融合抉擇瞬間 `[跨批次覆核修正]` | Haruka's Fusion Choice Moment | 晴香 | Act IV（`[NEEDS_FACT]`具體視覺分鏡待Act IV Outline） | 抉擇點 | ⭐⭐⭐ | ConceptArt_Scene_137_Haruka_FusionChoiceMoment.png | ❌ 未有圖 | **[概念已被CDL-326取代]** 晴香清醒抉擇是否主動融合成三位一體永恆守護者，非「沉睡消融 vs 現實戰鬥」二選一（同圖135/139/141同一修正） |
| 138 | 51 | Act IV | 紙皮騎士的最後一擊 | Cardboard Knight's Last Stand | 愛莉 | Act IV（`[NEEDS_FACT]`未批核草稿） | 潛意識戰場 | ⭐⭐⭐ | ConceptArt_Scene_138_CardboardKnight_LastStand.png | ❌ 未有圖 | 愛莉以紙裝備對抗不可抗力，決心不退（同SPEC#20非同一CDL-256事件） |
| 139 | 54 | Act IV | 靜止搖籃的粒子化進程 `[SUPERSEDED_CONCEPT]` | Static Cradle Particularization Process | 晴香 | Act IV | 集體潛意識融合 | ⭐⭐⭐ | ConceptArt_Scene_139_Haruka_ParticularizationProcess.png | ❌ 未有圖 | **[概念已被CDL-326取代]** 晴香保留意識記憶主動融合成三位一體永恆守護者，非粒子化消散 |
| 140 | 55 | Act IV | 美夜子的靈魂雙線`[INFERRED]` | Miyako's Soul Dual Line | 美夜子 | Act IV | 靈魂空間`[NEEDS_FACT]` | ⭐⭐⭐ | ConceptArt_Scene_140_Miyako_SoulDualLine.png | ❌ 未有圖 | 美夜子靈魂狀態意象（雙線交織裝置本身canon未支持，底層依據CDL-271） |
| 141 | 56 | Act IV | 新世界的搖籃曲`[SUPERSEDED_CONCEPT]` | Lullaby of the New World | 晴香、美夜子、全角色 | Act IV | 集體潛意識融合 | ⭐⭐⭐ | ConceptArt_Scene_141_NewWorld_LullabySong.png | ❌ 未有圖 | **[概念已被CDL-326取代]** 晴香保留意識記憶成為三位一體永恆守護者；美夜子完成心願後回歸凡人 |
| 142 | 109 | Act IV | 美夜子終於哭出來 | Miyako Finally Cries | 美夜子、晴香 | Act IV | 時長`[NEEDS_FACT]` | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_142_Miyako_FinallyCries.png | ❌ 未有圖 | **核心情緒已修正**：美夜子一生第一次「痛哭失聲」（依miyako.md§第四幕；原文誤寫「無聲眼淚」方向相反已修正）；檔名西里爾字元「С」已修正為標準「C」 |
| 143 | 159 | Act IV | 時間折返的視覺化 | The Moment Beta Line Solidifies | 晴香、黑奏、夕 | ACT_IV_OPENING | 帝國歷134年7月（Act IV開場，二十年守望結束後） | ⭐⭐⭐⭐⭐ | ConceptArt_Scene_143_BetaLineSolidification.png | ❌ 未有圖 | 帝國歷134年的某個瞬間，Beta線固化發生。 |
| 144 | 46 | 日常／未定 | 凜的孔雀之翼 | Rin's Peacock Wings | 凜 | `[NEEDS_FACT]`（非嚴格幕別鎖定） | 天空/日區 | ⭐⭐⭐ | ConceptArt_Scene_144_Rin_PeacockWings.png | ❌ 未有圖 | 凜展開孔雀綠孔雀羽翼——殘留Alpha線偶像明亮一面 |
| 145 | 57 | 日常／未定 | 黑暗沖涼習慣 | Dark Shower Habit | 美夜子 | 日常 | 黑暗浴室 | ⭐⭐⭐⭐ | ConceptArt_Scene_145_Miyako_DarkShowerHabit.png | ✅ 有圖 | 美夜子習慣性在黑暗中淋浴，自我確認儀式 |
| 146 | 58 | 日常／未定 | 紅線強迫症`[核心概念已修正]` | Red Line Compulsion Habit | 凜 | 日常 | 私人獨處空間 | ⭐⭐⭐⭐ | ConceptArt_Scene_146_Rin_RedLineCompulsion.png | ✅ 有圖 | 凜反覆挑起頸上紅色縫合線疤痕至滲血，非「牆上畫紅線」（原文誤解「紅線」術語） |
| 147 | 59 | 日常／未定 | 研磨凜的斷刃 | Grinding Rin's Broken Blade | 美夜子 | 日常 | 祕密隱蔽處 | ⭐⭐⭐⭐ | ConceptArt_Scene_147_Miyako_GrindingBrokenBlade.png | ❌ 未有圖 | 美夜子無人知曉地研磨凜的斷刃，銷毀執著 |
| 148 | 60 | 日常／未定 | 半首旋律停頓 | Phantom Melody Habit | 凜 | 日常（108年重組後） | 無人時刻 | ⭐⭐⭐⭐ | ConceptArt_Scene_148_Rin_PhantomMelodyHabit.png | ✅ 有圖 | 凜習慣性哼唱殘缺旋律，中途戛然而止（Reference Image已修正為日常/公務員形態） |
| 149 | 61 | 日常／未定 | 強迫清洗儀式`[根源已修正]` | Compulsive Washing Ritual | 操 | 日常（Phase H疊加期尤烈） | 浴室 | ⭐⭐⭐⭐ | ConceptArt_Scene_149_Misao_CompulsiveWashingRitual.png | ❌ 未有圖 | 操以滾燙熱水擦洗全身，試圖洗去父親觸碰/被改造身體/性別認同混亂（CDL-155），非「洗手去背叛罪」 |
| 150 | 62 | 日常／未定 | 透明物執著 | Transparency Obsession Habit | 晴香 | 日常 | 房間角落 | ⭐⭐⭐ | ConceptArt_Scene_150_Haruka_TransparencyObsession.png | ❌ 未有圖 | 晴香蒐集透明物件，透過它觀察背景 |
| 151 | 63 | 日常／未定 | 睡前熱可可成癮`[CDL已修正]` | Hot Cocoa Ritual | 晴香 | 日常 | 房間/夜晚 | ⭐⭐⭐ | ConceptArt_Scene_151_Haruka_HotCocoaRitual.png | ❌ 未有圖 | 晴香每晚必喝溫度恰好熱可可，召喚虛假童年（CDL-123，非CDL-112） |
| 152 | 64 | 日常／未定 | 嚼冰塊危機 | Crisis Ice Chewing | 晴香 | 日常 | 焦慮時刻 | ⭐⭐⭐ | ConceptArt_Scene_152_Haruka_CrisisIceChewing.png | ❌ 未有圖 | 焦慮時晴香嚼冰塊，用痛楚確認存在 |
| 153 | 65 | 日常／未定 | 破弦自傷`[部位已修正]` | Broken Guitar String Self-Harm | 晴香 | 日常（危機期） | 私密時刻 | ⭐⭐⭐ | ConceptArt_Scene_153_Haruka_BrokenGuitarStringSelfHarm.png | ❌ 未有圖 | 晴香反覆彈斷弦致指尖出血、以膠布遮蓋，非「手臂割痕」（原文誤植部位） |
| 154 | 66 | 日常／未定 | 摺紙星星 | Paper Star Folding Habit | 凜 | 日常 | 失眠夜晚 | ⭐⭐⭐ | ConceptArt_Scene_154_Rin_PaperStarFolding.png | ❌ 未有圖 | 凜房間堆積數千摺紙星星，冥想逃避 |
| 155 | 67 | 日常／未定 | 石像前的懺悔`[視覺已修正]` | Statue Confession Ritual | 秋穗 | 日常 | 秋穗實驗室（塔地底） | ⭐⭐⭐ | ConceptArt_Scene_155_Akiho_StatueConfession.png | ❌ 未有圖 | 秋穗在半透明橙色水晶石像前傾訴罪惡感，非「風化石雕/廢棄地點」（原文違反愛莉石像視覺定義） |
| 156 | 68 | 日常／未定 | 儀器掃描愛莉遺物 | Instrument Scanning Ritual | 秋穗 | 日常 | 實驗室 | ⭐⭐⭐ | ConceptArt_Scene_156_Akiho_InstrumentScanningRitual.png | ❌ 未有圖 | 秋穗用儀器反覆掃描愛莉遺物，試圖重建（具體遺物項目`[INFERRED]`） |
| 157 | 70 | 日常／未定 | 病態無痕修補`[根源已修正]` | Compulsive Seamless Mending Habit | 操 | 日常 | 房間工作區 | ⭐⭐⭐ | ConceptArt_Scene_157_Misao_SeamlessMendingHabit.png | ❌ 未有圖 | 操對破損物件病態執著修補，根源係掩蓋自身手術縫線（CDL-155/156），非「恐懼變成母親」（CDL-297） |
| 158 | 71 | 日常／未定 | K房唱歌——雨天 | Karaoke Rain Song | 美夜子＋隊伍 | 日常 | K 房 | ⭐⭐⭐ | ConceptArt_Scene_158_Miyako_KaraokeRainSong.png | ❌ 未有圖 | 隊伍K房日常；美夜子縮沙發角落唱悲傷情歌，意外地痛且好聽（CDL-330修正） |
| 159 | 72 | 日常／未定 | 長泳窒息習慣 | Drowning Swim Habit | 美夜子 | 日常 | 水域 | ⭐⭐⭐ | ConceptArt_Scene_159_Miyako_DrowningSwimHabit.png | ❌ 未有圖 | 美夜子潛水延遲浮起，體驗死亡邊界 |
| 160 | 83 | 日常／未定 | 凜不自知摺星星（美夜子目擊） | Rin Folds Stars Without Knowing, Miyako Watches | 凜、美夜子 | Act I-II | 日常（具體beat待Beat Sheet確認） | ⭐⭐⭐⭐ | ConceptArt_Scene_160_Rin_FoldingStars_MiyakoWatches.png | ✅ 有圖 | 凜以殘影速度摺出幾何完美星星再面無表情掃入垃圾桶，美夜子門邊目擊「身體記憶比語義記憶更頑固」 |
| 161 | 111 | 世界觀設定 | 維多利亞之淚：人造太陽剖面圖 | Victoria's Tear: Artificial Sun Cross-Section | 無角色 | WORLD_BUILDING | 維多利亞之淚 | ⭐⭐⭐⭐ | ConceptArt_Scene_161_VictoriasTear_CrossSection.png | ❌ 未有圖 | 三層剖面：發光蜂巢外殼、情緒廣播管道、深紅汲取核心；日夜區光線差異根本解釋（核對後準確） |
| 162 | 112 | 世界觀設定 | 集體潛意識空間：後巷過渡狀態 | Collective Unconscious: Back Alley Transition | 無角色（魔法少女輪廓） | WORLD_BUILDING | 集體潛意識／夜區後巷 | ⭐⭐⭐⭐ | ConceptArt_Scene_162_CollectiveUnconscious_BackAlleyTransition.png | ❌ 未有圖 | 唐樓後巷磚牆漸變宇宙星空，倒影揭示異空間，集體潛意識視覺語言基礎（核對後準確） |
| 163 | 113 | 世界觀設定 | 心防內化裝置：製造過程 | Trauma Cage: Manufacturing Process | 無角色（The Unlinked，通用） | WORLD_BUILDING | 帝國醫療設施 | ⭐⭐⭐ | ConceptArt_Scene_163_TraumaCage_Manufacturing.png | ❌ 未有圖 | 三格：心匣撬開→鳥籠裝置植入→表情歸零；已修正為The Unlinked（解離兵器）通用機制，非凜（原文誤植已移除） |
| 164 | 114 | 世界觀設定 | 情緒管理局：局內辦公空間 | Emotion Management Bureau: Interior | 凜 | WORLD_BUILDING | 情緒管理局 | ⭐⭐⭐ | ConceptArt_Scene_164_EMB_OfficeInterior.png | ❌ 未有圖 | 純白啞光制服，有機流體情緒波形牆，凜與同事完全一致（核對後準確） |
| 165 | 115 | 世界觀設定 | 靈樹：平時狀態 | Spirit Tree: Normal State | 無角色 | WORLD_BUILDING | 靈樹（夜區谷地） | ⭐⭐⭐ | ConceptArt_Scene_165_SpiritTree_NormalState.png | ❌ 未有圖 | 老樹平常無異狀，普通感是後段伏筆（核對後準確） |
| 166 | 116 | 世界觀設定 | 帝國廣場：常態 | Empire Plaza: Normal Day | 無角色（市民群） | WORLD_BUILDING | 帝國廣場 | ⭐⭐⭐ | ConceptArt_Scene_166_EmpirePlaza_NormalDay.png | ❌ 未有圖 | 非戰鬥展示秩序空間，麻木市民；配色已修正為深淵黑+皇家金+紫水晶（原文誤用白色大理石+帝國藍，違反06_visual_bible帝國皇室美學已修正） |
| 167 | 117 | 世界觀設定 | Emo-Visor Gen 3：日區市民集體成癮 | Emo-Visor Gen 3: Day District Citizens' Collective Addiction | 無角色（市民群） | WORLD_BUILDING | 日區咖啡廳 | ⭐⭐⭐ | ConceptArt_Scene_167_EmoVisorGen3_DayDistrictAddiction.png | ❌ 未有圖 | 已補回安普膠囊消耗品+30分鐘崩潰循環核心機制（原文遺漏成癮主題最重要視覺錨點已修正） |
| 168 | 118 | 世界觀設定 | 屍骸化：心之器燃盡時刻 | Magical Corpse: The Moment the Soul Vessel Burns Out | 無角色（通用） | WORLD_BUILDING | 日區超市 | ⭐⭐⭐⭐ | ConceptArt_Scene_168_MagicalCorpse_SoulVesselBurnout.png | ❌ 未有圖 | 核心機制已修正：靈魂被困以1%控制力掙扎，非「靈魂已離體、空殼繼續動」（CDL-271已取代舊描述，原文方向錯誤已修正） |
| 169 | 119 | 世界觀設定 | 彩的心房：通風管道永恆空間 | Aya's Heart Chamber: Eternal Ventilation Space | 彩（6歲真身，被囚） | WORLD_BUILDING | 彩的心房（通風管道那夜重構） | ⭐⭐⭐ | ConceptArt_Scene_169_Aya_HeartChamber_VentilationEternal.png | ❌ 未有圖 | Reference Image已修正為[NO_REF]（原文誤用便服/偽裝形態reference）；基調已修正為黑暗創傷重演空間，非純美麗夢幻空間 |
| 170 | 122 | 已停用 | 軟接觸——美夜子廢棄地鐵站遞水 | Worthless Vigil: The Underground Station | — | `[DELETE_CANDIDATE]` | — | — | — | — | **已停用**：與SPEC#92為同一beat（CDL-191）但形態/物件/對白互相矛盾，已標記DELETE_CANDIDATE，內容詳見詳細段落說明 |

---

### 📊 場景統計概覽

#### 按 Act 分布

| Act | 場景數量 | 場景類型 |
|---|---|---|
| **Act I** | 12 個 | 建立與揭示（變身、日常、初次接觸） |
| **Act II** | 22 個 | 衝突擴大與秘密暴露（制度碰撞、力量顯露、背叛） |
| **Act III** | 18 個 | 決戰與犧牲（最終對抗、靈魂選擇、崩潰與救贖） |
| **Act IV** | 4 個 | 超越與循環（粒子化、新世界、永恆搖籃） |
| **日常/無時序** | 16 個 | 私密場景（自傷儀式、強迫行為、隱密習慣） |

#### 按優先級分布

| 優先級 | 數量 | 代表場景 |
|---|---|---|
| ⭐⭐⭐⭐⭐（5星） | 10 個 | 頂級視覺場景（變身、整合、三武器、犧牲等） |
| ⭐⭐⭐⭐（4星） | 10 個 | 高度關鍵場景（雙面形態、情緒危機、茶會等）+ 重點私密場景 5 個 |
| ⭐⭐⭐（3星） | 52 個 | 輔助與發展場景（22 個既有場景 + 24 個新增 Beat Sheet 場景 + 6 個簡化私密場景） |

#### 🖼️ Reference Image 可用清單（實際檔案庫存）

`[2026-07-23 補充]` 以下係 `art/ConceptArt/Characters/` 資料夾入面**實際存在**嘅角色參考圖檔完整清單（唔含 `_BAK`／`_REF` 子資料夾同亂碼／UUID命名嘅雜檔），按角色資料夾分。任何場景嘅 Reference Images 都應該只從呢個清單入面揀，唔可以引用清單以外嘅檔名。

`[2026-07-23 修正]` 早前一輪自動補全 Reference Images 用錯咗表格欄位（誤將「英文場景名」當「主要角色」讀），導致部分場景（例如 #9「秋穗與愛莉的實驗室事故」）出現同場景無關嘅角色（例如花子）。已重新對照返總覽表「主要角色」欄，逐個場景重新核對修正。

**Aeri**：`ConceptArt_Aeri_CasualWear.png`、`ConceptArt_Aeri_CasualWear_Child.png`、`ConceptArt_Aeri_Crystal.png`、`ConceptArt_Aeri_MagicalGirl.png`、`ConceptArt_Aeri_MagicalGirl_Action_1.jpg`

**Akane**：`ConceptArt_Akane_CasualWear.png`、`ConceptArt_Akane_MagicCorpse.png`、`ConceptArt_Akane_MagicalGirl.png`

**Akiho**：`ConceptArt_Akiho_Boss.png`、`ConceptArt_Akiho_CasualWear.png`

**Aya**：`ConceptArt_Aya_CasualWear.png`、`ConceptArt_Aya_MagicalGirl_1.png`、`ConceptArt_Aya_MagicalGirl_2.png`、`ConceptArt_Aya_SchoolUnifrom.png`、`ConceptArt_Kurosou_CasualWear.png`

**Hanako**：`ConceptArt_Hanako_CasualWear.png`

**Haruka**：`ConceptArt_Haruka_CasualWear.png`、`ConceptArt_Haruka_CasualWear_Young.png`、`ConceptArt_Haruka_MagicCorpse.png`、`ConceptArt_Haruka_MagicalGirl.png`、`ConceptArt_Haruka_SchoolUnifrom.png`、`ConceptArt_Haruka_Singer.png`

**Ko**：`ConceptArt_Ko_CasualWear.png`

**MagicCorpse**：`ConceptArt_MagicCorpse_Doll_Action.png`、`ConceptArt_MagicCorpse_Scrap_Action.png`、`ConceptArt_MagicalGirlWeapon.png`

**Misao**：`ConceptArt_Misao_CasualWear.png`、`ConceptArt_Misao_MagicalGirl.png`

**Miyako**：`ConceptArt_Miyako_CasualWear.png`、`ConceptArt_Miyako_Cat.png`、`ConceptArt_Miyako_MagicalGirl.png`

**Rin**：`ConceptArt_Rin_CasualWear.png`、`ConceptArt_Rin_MagicCorpse.png`、`ConceptArt_Rin_MagicalGirl_1.png`、`ConceptArt_Rin_MagicalGirl_2.png`、`ConceptArt_Rin_TheAdministrationBureau.png`

**Saku**：`ConceptArt_Saku_CasualWear.png`、`ConceptArt_Saku_TheAdministrationBureau.png`

**Sayo**：`ConceptArt_Sayo_Maidoutfit.png`

**Soichiro**：`ConceptArt_Soichiro_CasualWear.png`

**TheAdministrationBureau**：`ConceptArt_Akane_TheAdministrationBureau.png`

**WaaLaiKei**：`ConceptArt_WaaLaiKei_CasualWear.png`

**Yu**：`ConceptArt_Akane_CasualWear_Action.jpg`、`ConceptArt_Yu_CasualWear.png`

#### 🖼️ Reference Image 使用清單（已修正版）

以下按角色資料夾列出目前有被場景引用嘅參考圖檔，同邊幾個場景用緊佢（欄內 `#N` 對應總覽表「劇情順序」欄）。7 個純世界觀／群像／無名場景（#64 #108 #118 #162 #163 #166 #168）冇具名角色，標 `[NO_REF]`。

| 角色資料夾 | 參考圖檔 | 使用次數 | 使用場景（劇情順序） |
|---|---|---|---|
| Aeri | `ConceptArt_Aeri_CasualWear.png` | 8 | #9、#31、#59、#60、#65、#106、#132、#138 |
| Akane | `ConceptArt_Akane_CasualWear.png` | 12 | #26、#34、#35、#36、#38、#39、#43、#53、#57、#80、#83、#123 |
| Akane | `ConceptArt_Akane_MagicalGirl.png` | 5 | #29、#61、#67、#73、#115 |
| Akiho | `ConceptArt_Akiho_CasualWear.png` | 8 | #9、#27、#31、#79、#101、#132、#155、#156 |
| Aya | `ConceptArt_Aya_CasualWear.png` | 13 | #1、#2、#3、#12、#14、#15、#81、#102、#103、#107、#109、#124、#126 |
| Aya | `ConceptArt_Aya_MagicalGirl_1.png` | 8 | #32、#40、#41、#75、#79、#89、#104、#116 |
| Aya | `ConceptArt_Aya_MagicalGirl_2.png` | 3 | #113、#114、#136 |
| Aya | `ConceptArt_Kurosou_CasualWear.png` | 16 | #6、#9、#14、#15、#35、#38、#71、#92、#96、#102、#104、#105、#117、#121、#125、#143 |
| Hanako | `ConceptArt_Hanako_CasualWear.png` | 3 | #4、#28、#71 |
| Haruka | `ConceptArt_Haruka_CasualWear.png` | 46 | #2、#4、#11、#15、#16、#17、#20、#21、#22、#23、#28、#39、#40、#42、#47、#50、#57、#60、#66、#71、#81、#88、#90、#91、#92、#94、#96、#97、#103、#109、#121、#125、#126、#127、#129、#130、#131、#137、#139、#141、#142、#143、#150、#151、#152、#153 |
| Haruka | `ConceptArt_Haruka_MagicalGirl.png` | 16 | #29、#30、#32、#37、#45、#51、#69、#75、#79、#101、#104、#113、#129、#134、#135、#136 |
| Haruka | `ConceptArt_Haruka_Singer.png` | 1 | #19 |
| Ko | `ConceptArt_Ko_CasualWear.png` | 5 | #24、#34、#35、#43、#80 |
| MagicCorpse | `ConceptArt_MagicCorpse_Doll_Action.png` | 1 | #128 |
| MagicCorpse | `ConceptArt_MagicCorpse_Scrap_Action.png` | 1 | #128 |
| Misao | `ConceptArt_Misao_CasualWear.png` | 18 | #16、#18、#25、#39、#43、#44、#47、#48、#53、#58、#68、#70、#92、#111、#122、#123、#149、#157 |
| Misao | `ConceptArt_Misao_MagicalGirl.png` | 11 | #30、#37、#46、#49、#52、#72、#78、#79、#99、#110、#112 |
| Miyako | `ConceptArt_Miyako_CasualWear.png` | 24 | #4、#10、#16、#17、#24、#33、#53、#74、#86、#87、#94、#95、#96、#123、#126、#131、#133、#140、#141、#145、#158、#159、#160、#170 |
| Miyako | `ConceptArt_Miyako_Cat.png` | 7 | #37、#50、#56、#62、#63、#79、#98 |
| Miyako | `ConceptArt_Miyako_MagicalGirl.png` | 9 | #7、#8、#42、#54、#84、#86、#101、#142、#147 |
| Rin | `ConceptArt_Rin_CasualWear.png` | 12 | #10、#13、#17、#53、#87、#94、#95、#144、#146、#154、#160、#170 |
| Rin | `ConceptArt_Rin_MagicalGirl_1.png` | 4 | #7、#8、#76、#93 |
| Rin | `ConceptArt_Rin_MagicalGirl_2.png` | 1 | #76 |
| Rin | `ConceptArt_Rin_TheAdministrationBureau.png` | 5 | #62、#82、#97、#148、#164 |
| Saku | `ConceptArt_Saku_CasualWear.png` | 8 | #54、#55、#61、#63、#66、#77、#85、#119 |
| Sayo | `ConceptArt_Sayo_Maidoutfit.png` | 3 | #48、#70、#110 |
| Yu | `ConceptArt_Yu_CasualWear.png` | 11 | #32、#57、#88、#103、#109、#113、#121、#125、#130、#134、#143 |

---


---

# 前史／源起閃回

## 圖1：「通風管道那夜（螢的犧牲）」（The Night in the Ventilation Shaft）[ORIGIN_FLASHBACK]

**⚠️ 2026-07-17 批次8審計修正（核心角色/事件錯誤）**：原文將躲藏兒童寫成「黑奏」，並將事件框架寫成「帝國判定螢無研究價值下令最終處置，兩人躲在帝國設施通風管道」——兩點均同 canon 直接矛盾，已重寫。(1) **人物錯誤**：依 `aya.md`（§夜區創傷——螢的死亡；§黑奏誕生）同 `04_timeline_canon.md`（79年「黑奏創傷事件」條目），**「黑奏」呢個保護者人格正正係喺呢一夜、目擊螢犧牲之後先誕生**——事件發生時仍係「彩」，唔可能係已存在嘅「黑奏」躲喺管道入面。(2) **場景設定錯誤**：canon 明確係「靈樹戰爭末期，6歲的彩和螢藏在夜區建築的通風管道中躲避**帝國軍搜索**」（`aya.md` line 63），唔係「帝國判定螢無研究價值下令最終處置」呢個機構化處決敘事；地點係**夜區建築**，唔係「帝國設施」。已按 canon 事實重寫。

**建議輸出文件名**：`ConceptArt_Scene_1_HotaruSacrifice_VentilationShaft.png`

### 劇情背景

帝國歷79年，靈樹戰爭末期，6歲的彩和螢（彩無血緣的姊姊）藏在夜區建築的通風管道中躲避帝國軍搜索。彩因恐懼過度換氣，無法控制呼吸，哭聲穿透薄弱管壁引來士兵腳步聲。螢沒有猶豫，把熊公仔塞進彩懷裡，低聲說「有牠陪著妳，就等於我陪著妳」，然後衝出藏身處引開敵人。彩透過管壁縫隙目睹螢被殺——那一刻，彩的心認定「是我的軟弱殺了螢」，這個 Lie 成為保護者人格「黑奏」誕生的基石（`aya.md` §夜區創傷）。這隻熊公仔此後貫穿全作，是黑奏所有行動的情感錨點；「思螢」（廣東話）亦是後來帝國法號「刑思」真正含義的起源。

### 圖片說明

帝國歷79年，靈樹戰爭末期，6歲的彩和螢一起躲在夜區建築的通風管道裡，躲避帝國軍的搜索。彩因極度恐懼而過度換氣，哭聲引來了搜索的腳步聲。危急關頭，螢把她唯一的熊公仔塞進彩懷裡，低聲說「有牠陪著妳，就等於我陪著妳」，然後轉身衝出藏身處引開敵人。彩透過管壁縫隙目睹螢被殺——這個瞬間，成為彩心中「保護者人格」誕生的起點。這隻熊公仔此後跟隨黑奏走過她人生所有的選擇，是她每一個行動的情感底線。

**劇情位置**：
- **時間點**：前史，帝國歷79年，靈樹戰爭末期
- **CDL追蹤**：`04_timeline_canon.md` #event-hotaru-death（79年黑奏創傷事件）；`aya.md` §夜區創傷——螢的死亡
- **前置事件**：靈樹戰爭爆發，帝國軍搜索夜區；6歲彩因恐懼過度換氣暴露藏身位置
- **本場景功能**：螢（無血緣姊姊）將熊公仔塞入6歲彩懷中，轉身衝出引開帝國軍——以自身為餌保護彩逃脫；彩透過管壁縫隙目睹螢被殺，「黑奏」保護者人格於此夜誕生（螢死亡的同一時刻，非事後）
- **後續payoff**：黑奏（保護者人格）誕生根源；熊公仔作為螢符號物（SPEC#37/#69）貫穿全作；「思螢」——帝國法號「刑思」真正含義的情感錨點；彩其後被帝國回收隊捕獲（SPEC#80前情，CDL-306）

**Reference Images**：
- 彩：`ConceptArt_Aya_CasualWear.png`

**詳細核心描述**（200-350字）：

狹窄的金屬通風管道，只有兩個小孩子能勉強爬行的寬度，位於夜區某建築內部。管壁是冷金屬的暗灰色，隔著薄薄的金屬板能感受到外面帝國軍搜索的腳步聲與燈光——手電筒光從通風格柵的縫隙間掃入，每掃一次，管道內就亮一瞬，然後重回黑暗。

螢在前，6歲的彩在後，因過度換氣而肩膀顫抖，努力屏住呼吸。

關鍵瞬間：螢停下來，轉過身。她用兩隻手捧著一個熊公仔——她把它塞進彩的懷裡，動作輕，但確定，像一個不需要語言的交付。

彩的小手指環住熊公仔，指節發白。

螢轉回身，繼續往相反的方向——朝帝國軍搜索的方向——爬去，用自己作餌引開敵人。她爬了幾格之後，停頓，回頭。

那個回頭是整張畫的核心。螢的臉在金屬管道的黑暗裡，只有一道從格柵透入的細光照在她的眼睛和嘴角。她在笑。不是為了安慰，是她自己決定了某件事，決定之後的那種輕。

彩抱著熊公仔，透過管壁縫隙的視角，目睹螢的背影消失在管道轉角，隨後聽見外面傳來的聲響——這個瞬間，是「黑奏」誕生的起點。

畫面用的是極窄的縱深透視，管道像一條壓縮的隧道通往遠方。螢在遠端，彩在近端，兩者之間的距離是物理的，也是命運的。

**生成提示（Midjourney）**：
```
Style: dark magical girl origin trauma, ultra-detailed painterly illustration, cramped perspective, wartime horror with childhood grief
Mood: quiet sacrifice, a child who has decided, the last look before disappearing, grief without tears, the birth of a protector personality in the same instant as loss
Colors: deep metal grey, shadow black, single streak of cold yellow-white light through ventilation grate, warm brown of worn teddy bear as only warm accent
Composition: narrow ventilation shaft tunnel perspective inside a Night District building, two young girls crawling, Hotaru turning back to look with soft smile, young Aya (6yo, NOT Kurokane) in foreground clutching teddy bear with white-knuckled fingers, extreme depth compression
Lighting: near-total darkness, one thin strip of light through vent grate slashing diagonally across Hotaru's face — eyes and lips only
Special effects: dust motes in light shaft, condensation on metal walls, distant blur of Night District rooftops visible through grate slots
Character: Hotaru (young, non-blood elder sister figure, thin frame, tattered clothes, calm smile with certainty — the smile of someone who has decided); Aya (6yo, slightly smaller, expression frozen — not crying, not moving, just watching; this is Aya, the "Kurokane" protector personality has not yet split off)
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
Two young girls in a dark narrow ventilation shaft inside a night-district building, older girl turning back with a gentle smile handing a worn teddy bear to a younger girl age 6, quiet emotional moment of farewell, cramped metal tunnel, single streak of light, painterly dark anime style, melancholy sacrifice theme, no graphic content
--ar 16:9 --niji 6
```


---

## 圖2：「鐵絲網偶遇」（Wire Fence Encounter）[ORIGIN_FLASHBACK]

**⚠️ 2026-07-17 批次8審計修正（核心概念錯誤）**：原文將彩描繪成「同樣5歲」、同晴香平靜地隔網對視伸手——呢個描述同 canon 有兩個根本性矛盾，已重寫。(1) **年齡錯誤**：依 `04_timeline_canon.md`「73年 澄川彩誕生」，102年鐵絲網偶遇當時彩應為 **29歲**（102-73=29），唔係5歲小孩；「彩=5歲」呢個講法喺全 canon（`04_timeline_canon.md`、`00_Story_Brief.html`、`aya.md`）都搵唔到支持，只有晴香被明確標為5歲。(2) **場景性質錯誤**：canon 明確呢一刻係「彩正被守衛拖走」（`04_timeline_canon.md` line 53；`00_Story_Brief.html` line 8723；canon_fact_map CF-EVT-0047：「Haruka glimpses **bloodied** Aya being **dragged**」）——彩處於被強制拖行、渾身傷痕嘅受難狀態，並有帝國守衛在場，唔係一個平靜嘅隔網對視/伸手场面。已按 canon 事實重寫。

**建議輸出文件名**：`ConceptArt_Scene_2_WireFenceEncounter.png`

### 劇情背景

帝國歷102年，5歲的晴香路過帝國研究設施外圍的鐵絲網，偶然目睹鐵絲網另一邊、渾身傷痕、被帝國守衛強行拖行嘅**彩**（此時彩已 29歲，自79年起已被囚禁研究長達23年——CDL-306）。晴香在潛意識中許下天真願望：「如果有一個好強的人可以永遠保護佢就好了。」（`04_timeline_canon.md` #event-fence-encounter）此善意、幼稚、完全無辜嘅一念，在三年後（102年創世能量爆發那一刻）成為因果信標，精準賦予黑奏人格魔法力量（CDL-288）——是整個故事最深的因果根源，Act III 由黑奏親口揭露（三重道德處刑最後一擊）。此事件**敘事上扣留至 Act III 結尾**，不提前披露。

### 圖片說明

帝國歷102年，五歲的晴香路過帝國研究設施外圍，透過鏽蝕的鐵絲網目睹渾身傷痕的彩被帝國守衛強行拖走。晴香當下並不理解眼前發生的事，只在潛意識裡許下一個天真的願望——希望有一個好強的人可以永遠保護她。這個看似無關痛癢的念頭，三年後成為創世能量精準賦予黑奏力量的因果信標，是全劇最深、最遲揭露的因果根源。

**劇情位置**：
- **時間點**：前史，帝國歷102年
- **CDL追蹤**：CDL-288（鐵絲網偶遇因果信標）；CDL-306（彩79年起被囚禁研究）；CF-EVT-0047
- **前置事件**：彩自79年（螢死亡當夜）起已被帝國捕獲作活體研究樣本，此時已囚禁23年
- **本場景功能**：5歲晴香偶然目睹渾身傷痕、被守衛拖行嘅彩（29歲），潛意識許願——整個故事的因果根源瞬間；**此揭露屬 Act III 結尾專用，前置生成時須留意不可提前用於Act I/II情境**
- **後續payoff**：晴香許願「希望有人永遠保護她」→ 創世能量因果信標；三年後（102年創世覆寫）能量逆流精準賦予黑奏魔法力量；Act III 三重道德處刑最後一擊嘅核心揭示

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`
- 彩：`ConceptArt_Aya_CasualWear.png`

**詳細核心描述**（200-350字）：

灰濛濛的天色，帝國研究設施外圍是一段生鏽的高鐵絲網，網格已被歲月扭曲，部分刺尖朝外彎折。

畫面構圖以鐵絲網為中軸線：鐵絲網外側，5歲晴香站在路邊，穿著日常便服，眼神是乾淨的、困惑的好奇——她不明白眼前發生的事，只是本能地停下腳步。

鐵絲網內側，一名29歲的女性（彩）正被兩名帝國守衛強行拖行——她渾身傷痕，衣衫破損，步伐踉蹌，懷裡緊抱著一隻破舊的熊公仔（螢的遺物）不肯鬆手。她的眼神空洞、疲憊到近乎麻木，早已越過了恐懼本身。

兩人的視線隔著鐵絲網短暫交會——不是伸手觸碰的溫情畫面，而是一個天真的孩子，第一次目睹了她完全無法理解的、成人世界的殘酷。

背景是灰色水泥研究設施建築，氣氛壓抑、冷硬。晴香的位置是畫面中唯一柔軟的存在，同鐵絲網內側嘅暴力形成尖銳對比。

整個畫面色調冷灰、壓抑，鐵鏽的橙棕色與守衛制服的深色形成沉重基調，唯獨晴香作為觀察者的位置帶著一絲不合時宜的柔和光線。

**生成提示（Midjourney）**：
```
Style: dark magical girl origin story, painterly illustration, Studio Ghibli-adjacent melancholy with edge, watercolor texture over digital line
Mood: quiet horror witnessed through a child's uncomprehending eyes; the innocent seed of a catastrophic wish
Colors: cold grey-blue overcast palette, rust-orange wire fence, dull institutional guard uniforms, single soft warm accent on Haruka as the only gentle presence in frame
Composition: wire fence as central vertical axis; foreground 5-year-old Haruka watching quietly outside the fence; background a bloodied 29-year-old woman (Aya) being forcibly dragged by two imperial guards, clutching a worn teddy bear
Lighting: overcast diffused light, no direct shadows, institutional starkness inside the fence
Special effects: rust and grime texture on wire mesh, mud and drag-marks on the ground inside the facility
Character: Haruka (5yo, ordinary clothes, quiet confused gaze, standing still); Aya (29yo, bloodied and disheveled, guards gripping her arms, clutching a worn teddy bear, exhausted hollow expression beyond fear)
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A 5-year-old girl standing outside a rusted wire fence, watching quietly as a bloodied adult woman is forcibly dragged by two guards on the other side, the woman clutching a worn teddy bear, cold grey overcast atmosphere, painterly anime style, melancholy and horror witnessed through a child's eyes
--ar 16:9 --niji 6
```


---

## 圖3：「帝國實驗室：黑奏作為活體樣本」（The Empire Lab: Kurokane as Living Specimen）[ORIGIN_FLASHBACK]

**建議輸出文件名**：`ConceptArt_Scene_3_EmpireLab_KurokaneSpecimen.png`

**⚠️ 2026-07-17 批次8審計修正（年齡數學矛盾 + 實驗性質錯誤）**：原文標「12至15歲」發生於「帝國歷95至98年前後」——但依 `04_timeline_canon.md`「73年 澄川彩誕生」，95-98年時彩應為 **22-25歲**，同「12-15歲」直接數學矛盾（無論如何調整年份都無法同時滿足二者，因為彩79年（6歲）已被捕，103年（30歲）獲釋，全段囚禁期內年齡與「12-15歲」對唔上）。另，`04_timeline_canon.md` line 37 明確呢段囚禁初期（79年起）嘅實驗性質係「早期情緒壓抑/測量技術原型」，**唔係「收集魔法輸出數據」**——因為彩嘅魔法力量要到 **102年鐵絲網偶遇因果信標**先賦予（CDL-288），79-102年呢段長達23年嘅囚禁期內佢根本未有魔法可供收集。已移除具體錯誤年齡數字並修正實驗性質；場景改標為囚禁期內某個未明確年份嘅代表性片段，年齡標 `[NEEDS_FACT: 具體年份/年齡]`。

### 劇情背景

螢犧牲後（帝國歷79年），帝國回收隊在螢死亡現場偵測到異常高讀數，連同螢遺體一併回收研究，年僅6歲的彩因而被捕獲作活體樣本（CDL-306），展開長達24年（79-103年）的研究囚禁。囚禁初期，帝國以彩做「原型體」測試早期情緒壓抑/測量技術（此時彩尚未擁有魔法力量，真正的力量要到102年鐵絲網偶遇因果信標先被賦予）。長年實驗令她習得「解離」作為首要生存技能——人在場但意識出走，是她保護自己的唯一辦法。這段時期積累的「被當作數據而非人」的恨意，是她（及後來誕生的保護者人格黑奏）對帝國「情緒農場」制度深層憎惡的根源，也是SPEC#75覺醒屠殺的間接前置。

### 圖片說明

螢犧牲後，帝國回收隊在死亡現場偵測到異常讀數，將年幼的彩一併捕獲送入實驗室，展開長達24年的活體研究囚禁。囚禁期間，研究人員以她做早期情緒壓抑/測量技術的「原型體」測試——此時她尚未擁有魔法力量。研究員只看儀器上的讀數，不看她的臉——她不是人，是一個數據來源。為了保護自己，她學會了讓意識出走：身體還在台上，但她已經不在那裡了。這段被當作數據物件的年月，是她日後對帝國收割市民情緒能量的制度深層憎恨的根源。

**劇情位置**：
- **時間點**：前史，帝國歷79-102年間（24年囚禁期內，`[NEEDS_FACT: 具體年份]`；102年之前，彩尚未擁有魔法力量）
- **CDL追蹤**：CDL-306（彩被捕/24年囚禁）；`04_timeline_canon.md` line 37（Stage 0原型體研究）
- **前置事件**：螢犧牲（帝國歷79年），彩因回收隊偵測異常讀數而被捕獲作活體樣本
- **本場景功能**：彩被綁在實驗台上，接受早期情緒壓抑/測量技術測試，面無表情與眼神的空洞展示了長年實驗後的心理解離狀態
- **後續payoff**：SPEC#75覺醒屠殺（同一系列囚禁的最終爆發，102年獲得力量之後）；黑奏對「數據化生命」的深層憎恨根源

**Reference Images**：
- 彩：`ConceptArt_Aya_CasualWear.png`

**詳細核心描述**（200-350字）：

帝國研究設施的白色實驗室。不是恐怖電影的那種髒亂，而是更令人不安的——整潔、有條理、高效。一切都有標籤，一切都有記錄，一切都是程序。

畫面中央是一張可調節角度的實驗台，彩（148cm身形，具體年齡`[NEEDS_FACT]`）以45度角斜躺其上，上半身略微抬起。她的雙手腕被束縛裝置固定在台邊，手腕皮膚下能隱約看見壓迫痕跡——不是新傷，是已經習慣的舊痕。

她的胸口正中央（心匣位置）連接著早期情緒壓抑/測量裝置的探針，探針另一端連接著細線電纜，延伸向畫面右側的儀器群。儀器上的螢幕顯示波形圖表，記錄著情緒壓抑測試數據——此時她尚未擁有魔法力量。

她的眼睛是整張畫的重心。她在看天花板。不是看向某個具體的點，而是那種徹底切斷當下感受的眼神——她人在這裡，但她不在這裡。解離是她學會的第一種生存技術。

畫面邊緣出現了研究人員白袍的局部：一隻握著記錄板的手，一個側面的下顎。他們不看她的臉，他們看數據。她不是人，她是數據來源。

整個場景的色調是冷白色和機構藍，唯一的例外是她頸邊掉落的一縷黑髮。

**生成提示（Midjourney）**：
```
Style: clinical horror, dark magical girl tragedy, hyper-clean institutional setting conveying coldness through order not chaos, painterly illustration
Mood: dissociation as survival, the horror of becoming a data point, numbness that is worse than pain
Colors: cold clinical white, institutional pale blue, steel grey equipment, muted flesh tones — no warm colors anywhere
Composition: central figure on adjustable examination table at 45-degree recline, 148cm figure (Aya, age unconfirmed within captivity period), foreground shows researcher's white coat sleeve and clipboard hand only (no face), emotion-suppression measurement probes attached to chest area (NOT magic-output probes — she has no magic yet at this point)
Lighting: flat cold overhead fluorescent institutional lighting, no shadows, no warmth, everything equally visible and equally indifferent
Special effects: monitor screens in background showing waveform readouts, subtle glow from measurement equipment
Character: Aya (age within 79-102 captivity range, unconfirmed, 148cm, black hair spread on table, wrist restraints, eyes open staring at ceiling — completely vacant dissociation expression)
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A young woman lying on a clinical research table with wrist restraints, staring blankly at ceiling, surrounded by medical monitoring equipment, researcher's white coat visible at frame edge, cold institutional white and blue palette, dissociation mood, dark anime painterly style
--ar 16:9 --niji 6
```


---

## 圖4：「花子的死亡瞬間」（The Moment of Creation）[PRE-STORY / ALPHA LINE] ⭐⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_4_HanakoDeathCreation.png`

### 劇情背景

帝國歷102年，Alpha線，Loop 0。5歲的晴香目睹花子（母親）與美夜子（姐姐）在同一意外中同時遇難——黑奏以無魔法的人類身份在黑幫衝突中導致她們死亡，此為意外而非策劃（CDL-290）。5歲晴香的極端悲痛透過靈樹引爆，觸發「第一次改變現實」，將Alpha線覆寫為Beta線，創造了現在的整個世界。這是整個故事世界的創世原罪。（CDL-289 因果閉環；CDL-290 Alpha線死因定案）

### 圖片說明

Alpha線的城市，街道上，5歲的晴香蹲在地上。她的前方是花子和美夜子倒下的位置——場景剛剛發生，塵埃和碎石仍在飄落。5歲晴香的眼睛裡有某種不是兒童應有的東西：一種太大的悲痛，超過了她身體的承載容量，開始從她身體裡溢出——那是創世能量的前一刻。周圍的空氣開始在她身邊扭曲，灰白的光從地面裂縫往上滲，世界即將被改寫。

### 劇情位置

**時間點**：帝國歷102年（Alpha線，Beta線分歧前，Loop 0起點）
**CDL 追蹤**：CDL-290（Alpha線死因定案：花子與美夜子意外遇難，非黑奏策劃）；CDL-289（因果閉環：創世能量賦予黑奏魔法力量）；CDL-066（榮格個體化：改變現實＝將內在問題投射到外在）；CDL-047（晴香陰影：Alpha線失去感情感底層）
**前置 → 本場景 → Payoff**：鐵絲網偶遇（潛意識許願信標）→ 花子美夜子意外遇難（5歲晴香目睹）→ 第一次改變現實（Alpha線→Beta線；夕的誕生；黑奏獲得魔法力量）；整個主線世界的創世原罪；Act III晴香「創世者真相揭露」的情感根源

### 詳細核心描述（250字）

帝國歷102年，Alpha線，初秋。

她才五歲。

她所在的街道不是戰場，只是一個普通的地方，黑幫的衝突偶爾會從這裡路過。那天也路過了。花子和美夜子沒有躲開。

5歲的晴香蹲在地上。她前方的石板上是花子最後的位置，美夜子最後的位置——她不知道用什麼詞去稱呼那件已經發生的事，因為她才五歲，沒有足夠的詞彙去稱呼那種空缺。

但那種空缺比她的整個身體還大。

悲痛超過了承載容量的臨界點，開始溢出。

不是哭聲，是某種更大的東西——5歲晴香的身體周圍，空氣開始以肉眼可見的方式扭曲。灰白色的光從她腳下的地面裂縫往上滲出，細小的石子在沒有風的情況下懸浮，周圍的顏色開始褪去，彷彿現實本身在某個地方失去了連接。

靈樹感應到了那份悲痛的規模。

改變現實的能量在她身體裡引爆，在這一刻，Alpha線開始崩解，Beta線開始被寫入。

她不知道她在做什麼。她只是覺得太痛了，她不要這個世界。

這就是這個世界的起點。

### Midjourney 標準版

```
Dark anime. Pre-story flashback. Alpha Line, Year 102, autumn city street. A child of five, small and alone, crouching on stone pavement. The immediate aftermath of an accident — dust and debris still settling. Hanako and Miyako's positions implied by context (not graphic — emptiness where they were). The child's eyes: not crying normally — something too large for a child's body, grief exceeding containment capacity, beginning to overflow. Around the child: air visibly distorting — small stones levitating without wind, colors desaturating at the edges, grey-white light seeping upward from pavement cracks. The moment before reality is overwritten. Alpha Line visual palette: lower saturation, more physical and grounded than Beta Line's high-magic aesthetic. Child's clothes simple and worn. Emotional tone: a five-year-old deciding she doesn't want this world, not knowing she has the power to change it. 8k, wide shot with child small in frame against beginning of cosmic distortion, niji 6, style raw. --ar 9:16
```

**視覺重點**：
- 5歲晴香的極小身形對比開始扭曲的整個世界——「一個孩子的悲痛改寫了現實」的規模感
- Alpha線視覺調色：低飽和度、實體感更強，與Beta線高魔法美學明確區分
- 創世能量的視覺徵兆：漂浮的碎石、地裂縫的灰白光、邊緣褪色——不是爆炸式，而是「現實在鬆動」的感覺
- 花子和美夜子的「缺席」——用空間暗示，不用直接展示，令觀眾自行填充那個空缺

⭐⭐⭐⭐⭐

**Reference Images**：
- 花子：`ConceptArt_Hanako_CasualWear.png`
- 晴香：`ConceptArt_Haruka_CasualWear.png`
- 美夜子：`ConceptArt_Miyako_CasualWear.png`



---

## 圖5：「刑思殺出實驗室」（Keishi's Awakening Massacre）[ORIGIN_FLASHBACK]

**建議輸出文件名**：`ConceptArt_Scene_5_Keishi_AwakeningMassacre.png`

### 劇情背景

**⚠️ 2026-07-17 批次8審計修正**：原文標「帝國歷98年前後」，同引用「CDL-198」——兩者均與 canon 矛盾，已修正。(1) 依 `04_timeline_canon.md` CDL-305（黑奏政變年份修正說明）：黑奏嘅魔法力量係 102年「鐵絲網偶遇」（CDL-288）晴香許願觸發嘅因果信標，喺創世能量逆流時精準賦予；**102年之前黑奏完全冇魔法力量**（79-102年僅為被囚禁研究對象），故「力量第一次爆發」不可能發生在98年，必然喺 **102年之後**——CDL-305 明確政變（緊接呢次爆發）修正為 **103年**，本場景應同步改為 103年。(2) `aya.md` 全文檢索無 CDL-198 條目，此引用屬張冠李戴（同已知圖117審計發現嘅 CDL-198 誤用同一模式），已移除。

帝國歷103年，黑奏（本名刑思）長期作為帝國活體實驗品，心匣被強制解析——螢已於79年犧牲，黑奏此時已無任何情感錨點（`aya.md` §黑奏誕生根源）。前一年（102年）鐵絲網偶遇因果信標賦予嘅創世力量，在徹底感官剝奪與情感清空的狀態下，於某次實驗中第一次以無法控制的方式爆發，摧毀了整個地下實驗室。這一刻是黑奏從「帝國受害者」轉為「主動力量」的起點——她發現自己比任何人預計的都要強大，但力量的根源是痛苦而非意志。此場景連接Act III「三重道德處刑」（SPEC #3）及黑奏「痛苦是死亡噪音」意識形態的根源；亦緊接 SPEC #81「黑奏弒父篡位」（同一時期，103年）。

### 圖片說明

黑奏在帝國地下實驗室以活體實驗品身份被囚禁多年，靈魂容器被強制解析，所有情感錨點已在十九年前隨著螢的犧牲消失；在一次實驗中，她積壓的魔法力量首次以無法控制的方式爆發，整個地下實驗室在一瞬間被摧毀。這不是勝利，而是痛苦找到了第一個出口——她就是從這個廢墟中站起來，決定讓整個帝國感受到同樣的代價。

**劇情位置**：
- **時間點**：前史，帝國歷**103年**（CDL-305 修正——緊接102年鐵絲網偶遇獲得力量之後）
- **CDL追蹤**：CDL-305（政變/覺醒年份修正）；CDL-288（鐵絲網偶遇力量賦予）；`canon/03_characters/aya.md §黑奏誕生根源`
- **前置事件**：黑奏長期作為帝國活體實驗品（心匣被強制解析）；螢已犧牲（帝國歷79年），黑奏已無情感錨點；102年鐵絲網偶遇獲得創世因果力量
- **本場景功能**：黑奏從「受害者」轉為「主動力量」的起點；展示她的力量根源是痛苦而非意志；篡位帝國的動機前置
- **後續payoff**：Act III Phase J 三重道德處刑（SPEC #3）；黑奏「痛苦是死亡噪音」意識形態的根源；與「黑奏弒父篡位」（SPEC #81，同一時期）接續

**Reference Images**：
- 黑奏：`ConceptArt_Aya_MagicalGirl_1.png`（原引用檔案不在實際檔案庫存清單內，已替換為現有魔法少女形態，貼合力量首次爆發的戰鬥感）

**Creative Enhancements**：
- 場景：帝國地下實驗室，非哥德廢墟——冷色鋼鐵牆面、測試裝置、監控儀器
- 將參考圖的「廢墟殿堂」替換為「地下實驗室倒塌崩解」：牆面裂縫、儀器倒塌、管道爆裂
- 角色保持黑奏的 148cm 小身軀——力量與體型的落差是視覺核心衝擊
- 鮮血：地板、牆面、倒地的實驗人員（背景可用剪影處理）
- 魔法力量：第一次爆發的暗紫/深紅色光，從胸腔心匣位置向外擴散，尚未完全控制——粗糙、爆炸性，非之後精緻的「黑奏式」能量
- 表情：不是喜悅，不是憤怒——是空洞的、第一次感受到「力量」的茫然，微微睜大的眼睛，嘴角帶著一絲剛意識到自己能力的困惑

**詳細核心描述**（300-400字）：

帝國地下實驗室。一切已經結束。

148cm 的少女站在房間中央，赤腳踩在冰冷的地板上——地板已被鮮血染成深紅。她穿著實驗室制服（或被束縛的裝置剛剛脫落的殘件），鎖鏈斷口仍掛在手腕。

周圍是倒下的實驗人員——視覺上以剪影或背影處理，可見死狀但無需直接描繪傷口細節。牆上有血跡，監控儀器已因能量爆發而燒毀冒煙，天花板的照明設備一半熄滅，剩餘的燈光在閃爍。

她的胸口（心匣位置）正在發出不穩定的深紫紅色光芒——這是第一次覺醒的魔法力量，尚未被她掌控。光芒不是優雅的，而是爆發性的、不規則的，像是被硬生生撕開的傷口在發光。

她低頭看著自己的手——手上有血，但她並不害怕，也不後悔。她的表情是空洞的、茫然的：這是第一次感受到力量的人，發現自己比想象中更強大的瞬間，還沒有意義，還沒有方向，只有「原來如此」的空白確認。

這個瞬間是整個帝國噩夢的起點。

**所需資源**：
- 黑奏（刑思）的幼年/少女形態設定（真實年齡外表，非 Act III 的「7歲外表帝國君主」）
- 帝國實驗室環境設定

**生成提示（Midjourney）**：
```
Style: Dark gothic horror meets cold institutional horror; anime painterly illustration
Mood: Birth of a monster; not evil but empty — the moment power fills a void
Colors: Cold industrial gray-steel base; deep crimson floor and walls; unstable dark violet-red magical glow at chest
Composition: Small central figure standing amid destruction; carnage rendered as silhouettes in background
Lighting: Half-dead flickering institutional lights; chaotic magical energy glow from chest; deep shadows
Special effects: Broken restraint chains hanging from wrists; cracked floor; burning monitors; unstable magical particle burst
Character: 148cm slight figure; blank expression; power too large for the body holding it; bare feet on bloodstained floor
Canvas: 3:4 portrait ratio --ar 3:4 --niji 6 --style raw
```


---

## 圖6：「黑奏弒父篡位」（Kurokane Usurps the Emperor）[ORIGIN_FLASHBACK]

**建議輸出文件名**：`ConceptArt_Scene_6_KurokaneUsurpation.png`

**⚠️ 2026-07-17 批次8審計修正**：原文標「帝國歷98年」，但依 `04_timeline_canon.md` CDL-305（黑奏政變年份修正說明）：「黑奏政變原定98年，與102年鐵絲網偶遇『被帝國拘束』矛盾（98年已政變奪權，102年點解仲被自己帝國拘束？）。修正後政變移至**103年**（即黑奏攞到創世因果力量之後）」——已同步修正為103年。另，原「所需資源」提及嘅「7歲外表帝國君主」係 Act III 講法，本場景（篡位當刻）身體年齡應對齊103年（彩73年出生，103年應為30歲，惟其身軀因長期實驗停留在148cm「幼童身軀」——身高定格但非7歲外表，年齡表述標`[NEEDS_FACT: 篡位當刻具體外觀年齡]`。

### 劇情背景

帝國歷103年，SPEC#75覺醒屠殺後不久，黑奏憑102年鐵絲網偶遇（CDL-288）獲得的創世因果力量，殺出實驗室，穿越帝國皇宮，以148cm的身軀終結了收養並暗中將她當研究對象多年的養父皇帝，令宮廷衛兵全部倒地（CDL-305）。這不是黑奏渴望的勝利，而是達到目的的起點——她需要帝國的全部資源去做一件事：找到螢。她的站姿沒有昂揚，只有「終於抵達，但路才剛開始」的了結。她在此建立帝國法號「刑思」，啟動靈魂農場計劃，開始幾十年後SPEC#3三重道德處刑積累的漫長布局。

### 圖片說明

帝國歷103年，黑奏憑鐵絲網偶遇獲得的創世因果力量，以148公分的身軀終結了收養並暗中將她當研究對象多年的養父皇帝的統治，讓宮廷所有衛兵倒地。她站在御座台階底部，沒有昂頭，也沒有勝利者的姿態——她只是抵達了一個起點。她需要整個帝國的資源去做一件事：找到螢。她的沉默不是因為冷血，而是因為她知道路才剛剛開始。

**劇情位置**：
- **時間點**：前史，帝國歷**103年**（CDL-305修正，SPEC#75覺醒屠殺同期/緊接發生）
- **CDL追蹤**：CDL-305（政變年份修正）；`aya.md` §篡位——從保護者到獨裁者
- **前置事件**：102年鐵絲網偶遇獲得創世因果力量；SPEC#75覺醒屠殺，黑奏殺出實驗室，穿越帝國皇宮
- **本場景功能**：148cm的黑奏站在巨大的帝國皇宮御座前，養父皇帝倒下，宮廷衛兵全部倒地，她的表情是空洞的平靜——不是勝利，而是目的
- **後續payoff**：帝國法號「刑思」確立；靈魂農場計劃啟動；SPEC#3三重道德處刑積累的幾十年跨度由此開始

**Reference Images**：
- 黑奏：`ConceptArt_Kurosou_CasualWear.png`

**詳細核心描述**（200-350字）：

帝國皇宮的中央大廳，天頂高達數十公尺，以黑色大理石和金色雕刻構成的巨型建築。大廳正中是御座——高台，台階共十二級，每一級都比一個成年人的膝蓋還高。

148cm的黑奏站在御座台階的底部，仰頭。

她背對觀者，面向御座方向——但養父皇帝的身體在台階上半段倒下，一隻手仍抓著扶手，衣袍散開在台階上。周圍的宮廷衛兵以不規則的角度倒在大廳的各個位置，像被颶風掃倒的人形擺設。沒有血腥，只有靜止。

黑奏身上的力量還沒有完全穩定。暗紫色的能量從她的輪廓往外散逸，形狀不定，有時像翅膀，有時像裂縫，有時只是純粹的光的不穩定。她的頭髮因能量干擾而微微漂浮。

她的姿勢不是勝利者的站姿。她沒有昂頭，沒有舒展，她只是站著，像一個剛走完很長的路、終於抵達起點的人。因為這不是終點——這是起點。她需要這個帝國的每一個資源去做一件事：找到螢。

大廳的窗戶很高，光線從上方斜入，在黑色大理石地面投下長長的幾何陰影。黑奏是這個場景裡唯一站立的人，148cm的身軀在御座的巨大尺度面前顯得渺小，但她的暗紫色能量讓這個渺小變得比任何龐大都更不可輕視。

**生成提示（Midjourney）**：
```
Style: dark epic magical girl usurpation, grand palace architecture meets small figure, painterly illustration with theatrical composition
Mood: hollow victory, a child who became an emperor not for power but for grief, quiet dread
Colors: black marble and gold palace architecture, cold imperial gold and deep shadow, unstable dark violet-purple energy from small figure
Composition: extreme scale contrast — 148cm girl figure from behind standing at base of massive twelve-step imperial throne dais, fallen emperor on mid-stairs, scattered fallen guards in background
Lighting: high angled light from tall palace windows creating long geometric shadows on black marble floor, violet energy glow as secondary light source
Special effects: dark violet-purple magical energy flickering unstably around Kurokane's silhouette, hair floating slightly, energy edges shifting between wing shapes and fracture patterns
Character: Kurokane (age unconfirmed — 148cm childlike frozen physique despite chronological adulthood, back to viewer, standing straight but not triumphant, unstable purple energy aura, black hair floating)
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
Small young woman 148cm standing at base of enormous imperial throne staircase in vast dark marble palace, fallen guards around her in background, unstable purple magical energy aura surrounding her silhouette, back to viewer facing the throne, scale contrast emphasizing lone figure in massive space, dark epic anime painterly style
--ar 16:9 --niji 6
```


---

## 圖7：「凜×美夜子黃金搭檔」（Rin and Miyako's Golden Partnership）[ORIGIN_FLASHBACK]

**建議輸出文件名**：`ConceptArt_Scene_7_Rin_Miyako_GoldenPartnership.png`

### 劇情背景

帝國歷103-108年，凜（軍方兵器4號）與美夜子（Unit 01）在軍方任務中建立起超越語言的默契——凜負責精準打擊，美夜子負責掩護與收割，背對背覆蓋360度無死角，不需要對視確認，因為另一個人「一定在那裡」（rin.md §與美夜子的羈絆）。這是凜唯一允許自己擁有的「人類連結」，也是美夜子在死亡與兵器化之後，第一次感受到「被信任、不需要解釋」的存在狀態。此場景連接圖8（凜犧牲）形成直接對比：同樣的兩個人，同樣的戰場——黃金搭檔是失去的頂點，犧牲是失去的終點。觀眾在Act III看到Unit 00凜的空洞眼神時，能回望此刻感受失去的全部重量。

### 圖片說明

凜與美夜子在軍方任務中背靠背作戰，不需要對視確認，因為另一個人「一定在那裡」——這是凜唯一允許自己擁有的人類連結，也是美夜子在被拼接式技術復活後第一次感受到「被信任、不需要解釋」的存在狀態。兩人的默契在這個瞬間達到巔峰，而觀眾知道這也是失去的頂點，因為凜最終將主動引開追捕者，以死亡終結這段羈絆。

**劇情位置**：
- **時間點**：前史，帝國歷103-108年（凜被武器化後至犧牲前的黃金期）
- **CDL追蹤**：；`canon/03_characters/rin.md §與美夜子的羈絆`；`canon/04_timeline_canon.md #event-rin-sacrifice`
- **前置事件**：兩人均被軍方武器化（凜：兵器4號；美夜子：Unit 01）；建立起超越語言的默契
- **本場景功能**：確立「失去後才可見的黃金時代」——觀眾在 SPEC #77 凜犧牲和 Act III Unit 00 揭露時，能回望此刻感受失去的重量
- **後續payoff**：SPEC #77 凜犧牲（同一對角色的悲劇終局）；Act III Phase H2 Unit 00 揭露的情感衝擊；美夜子的終身 PTSD 根源

**⚠️ 2026-07-17 批次8審計修正**：原文將美夜子嘅武器寫成「雙槍/雙持衝鋒槍」，但依 `DIGEST_CHARACTER_STATES.md` MY-S5/MY-S6，美夜子雙持 HK MP7A1 衝鋒槍係**凜犧牲後（Act II中段起）**因光環PTSD、刻意減少魔法依賴先出現嘅武裝轉變；**凜存活時期（本場景，103-108年）美夜子應使用琉璃緞帶（可硬化為刀刃）+ 能量冰刀**，非槍械——已修正。另，Reference Image `ConceptArt_Miyako_MagicalGirl_Action_1.jpg` 依 `DIGEST_REFERENCE_IMAGES.md` 未見收錄（UNVERIFIED），已改用已存在嘅 `ConceptArt_Miyako_MagicalGirl.png`。

**Reference Images**：
- 凜：`ConceptArt_Rin_MagicalGirl_1.png`（聖耀之翼・艾莉西亞，綠金色天使翼形態）
- 美夜子：`ConceptArt_Miyako_MagicalGirl.png`（凜存活期武裝：琉璃緞帶+能量冰刀，非後期雙槍形態）

**Creative Enhancements**：
- 場景：帝國歷108年前的軍方戰場，非個人情感場景——這是她們的巔峰配合，pure combat efficiency
- 構圖：Back-to-back 或 V字型夾擊陣形，各自朝向不同方向的威脅
- 凜（前景右側）：天使翼展開，冰藍色精準打擊，姿勢優雅、零多餘動作
- 美夜子（前景左側）：琉璃緞帶硬化為刀刃＋能量冰刀掩護收割，冰晶碎片飛濺、白翼、冷色調，攻防一體（**非雙槍**——雙槍係凜犧牲後嘅PTSD武裝轉變，此刻尚未發生）
- 兩人之間：**不需要任何語言或對視**——她們背對彼此卻完全同步，這才是視覺重點
- 背景：戰場廢墟，但整體畫面有一種「軍事芭蕾」的美感——混亂中的絕對默契

**詳細核心描述**（300-400字）：

這是她們最好的時刻，也是唯一的好時刻。

帝國歷108年前，軍方戰場。凜與美夜子在人群的戰鬥中形成完美的作戰陣形：背對背，各覆蓋180度，360度無死角。

凜（右側）以冰藍色精準能量打擊遠端目標，動作優雅得像舞蹈——每一個姿勢都是最小化的、最有效率的。她的天使翼（綠金色）展開作為視覺錨點，卻不帶任何裝飾目的，只是飛行推進器。

美夜子（左側）以琉璃緞帶硬化為刀刃、配合能量冰刀近身掩護，冰晶碎片充當護盾同時傷害近端敵人。她的動作比凜粗糲，但準確度是相同的絕對精準。

她們從未對視。這不是因為關係冷淡，而是因為她們對彼此的位置和動向有完全的信任——不需要確認，因為另一個人一定在那裡。

背景是戰場廢墟，但整張圖有一種奇異的美感：在混亂中，這兩個人是完美的秩序。

**所需資源**：
- 凜魔法少女全身圖（已有：`ConceptArt_Rin_MagicalGirl_1.png`）
- 美夜子魔法少女全身圖（已有：`ConceptArt_Miyako_MagicalGirl.png`）

**生成提示（Midjourney）**：
```
Style: Military anime action; clean composition amid chaos; painterly illustration
Mood: Perfect partnership; no words needed; trust expressed through physical synchronization
Colors: Warm green-gold (Rin, right) contrasting cold blue-white (Miyako, left); battle debris neutral gray
Composition: Back-to-back formation; both facing outward; implied threats at frame edges
Lighting: Battle scene lighting; magical glow from both characters; debris dust catching light
Special effects: Ice crystal shield particles and hardened ribbon-blade (Miyako, NOT firearms); precision energy beams (Rin); golden angel wings spread
Character sync: Both in motion but perfectly mirrored in discipline and precision; no eye contact needed
Canvas: 16:9 widescreen --ar 16:9 --niji 6
```


---

## 圖8：「凜殿後最終犧牲」（Rin's Final Rear Guard Sacrifice）[ORIGIN_FLASHBACK]

**建議輸出文件名**：`ConceptArt_Scene_8_Rin_FinalSacrifice.png`

### 劇情背景

帝國歷108年，L3光環（帝國對「超出控制的魔法少女」的清除機制）追捕，撤退路線被截斷。凜主動引開光環，正面張開雙臂迎接那個壓迫性的機械光圈——帝國以光環強行扭轉她的頭顱180度，頸椎斷裂，「喀嚓」一聲（rin.md §犧牲——光環處決；timeline #event-rin-sacrifice）。凜在死亡瞬間眼神是釋然，不是恐懼：「終於完成任務」——她一直在等一個值得犧牲的理由。那聲「喀嚓」成為美夜子此後終身的PTSD觸發點，是她從介錯人轉為「送行者」的心理創傷根源，也是她後來用雙持衝鋒槍拒絕一切魔法輸出的直接原因。此場景是全作最重要的情感錨點之一：凜的選擇是主動的，不是被迫的——這一點在Act IV才真正被美夜子接受。

### 圖片說明

凜主動張開雙臂迎向帝國光環，引開正在追捕隊伍的機械裝置——那個顯示她知道自己在做什麼的姿勢，是她多年等待一個「值得犧牲的理由」之後的最終選擇。美夜子在她身後聽見了那聲頸椎斷裂的聲音，那聲音此後成為她終身的PTSD觸發點，也是她從介錯人轉為「送行者」的心理創傷根源。

**劇情位置**：
- **時間點**：前史，帝國歷108年（美夜子 PTSD 的起源事件）
- **CDL追蹤**：；`canon/03_characters/rin.md §犧牲——光環處決`；`canon/04_timeline_canon.md #event-rin-sacrifice`；CF-TIME-0068（凜犧牲事件條目）
- **前置事件**：SPEC #76 黃金搭檔期（同一對角色的全盛態）；帝國 L3 光環追捕，撤退路線被截斷
- **本場景功能**：凜弧光的最終一幕——「終於完成任務」的釋然；美夜子 PTSD（「喀嚓」聲觸發）的視覺原點；凜的選擇是主動的，不是被迫的
- **後續payoff**：Act II Phase A（E-05）美夜子認出重組的凜（SPEC #24）；Act III Phase H2 凜拒絕治癒（候選場景 W）；SPEC #6 月下崩潰（美夜子精神狀態根源）；Act IV 美夜子終於哭出來（候選場景 FF）

**⚠️ 2026-07-17 批次8審計修正**：Reference Image `ConceptArt_Miyako_MagicalGirl_Action_1.jpg` 依 `DIGEST_REFERENCE_IMAGES.md` 未見收錄（UNVERIFIED），已改用已存在嘅 `ConceptArt_Miyako_MagicalGirl.png`。

**Reference Images**：
- 凜：`ConceptArt_Rin_MagicalGirl_1.png`
- 美夜子：`ConceptArt_Miyako_MagicalGirl.png`

**Creative Enhancements**：
- 這是#76「黃金搭檔」的直接悲劇反轉——同一戰場，同樣的兩個人，但一切都在終結
- 核心構圖：**凜在前景張開雙翼正面迎接 L3 光環，美夜子在遠景背面逃離**
- L3 光環（Halo）：視覺化為一個巨大的壓迫性機械光圈/鐵環，帶著帝國的冷藍色調，從天而降
- 凜的翅膀：原本的綠金色天使翼，此刻被光環壓力所扭曲，羽毛碎散，但她仍然張開——用翅膀攔截而非逃跑
- 最重要：**凜的表情**——她回頭望了一眼美夜子逃跑的方向，眼神是釋然（「完成任務了」），不是恐懼
- 光環即將觸碰她的瞬間——定格在頸部即將被扭轉之前的那一幀
- 美夜子的背影：她在跑，但構圖上可以看到她的動作有一瞬間的猶豫（手背轉了半步），但最終繼續跑

**詳細核心描述**（300-400字）：

帝國歷108年，某場戰役的最後一刻。

L3 光環從上方壓下來，以帝國機械的冷藍色調覆蓋整個戰場。這不是可以打敗的東西——這是回收機制，是帝國對「超出控制的魔法少女」的清除程序。

凜站在前景，正面面對光環，雙臂張開，綠金色天使翼也盡力張開——她的整個身體就是盾牌。她的翅膀已經開始被光環的壓力所扭曲，金色羽毛在空中碎散，但她沒有收縮，沒有逃。

她的頭微微偏轉，用眼角的餘光瞥向後方——美夜子的背影正在快速縮小。

那一個眼神的表情：**釋然**。不是悲傷，不是恐懼，不是遺憾。是「終於完成任務」的、近乎平靜的釋然——她一直在等一個值得犧牲的理由。

背景遠處，美夜子在跑。她的右腳在某一步停頓了零點幾秒——她聽到了什麼——但她繼續跑。

光環觸碰凜頸部的前一幀。

這張圖定格在那一幀。

**所需資源**：
- L3 光環（Halo）設計圖（帝國回收機制的視覺設計）
- 凜魔法少女形態（已有）
- 美夜子魔法少女背影

**生成提示（Midjourney）**：
```
Style: Tragic climax; anime painterly illustration; frozen decisive moment
Mood: Sacrifice as relief, not tragedy — the expression is peace, not fear; duty fulfilled
Colors: Green-gold (Rin) crushed under cold imperial blue (Halo); warm tones extinguishing
Composition: Foreground: Rin facing camera with arms spread, wings partially broken; Background: Miyako's silhouette running away; Descending Halo as dominant compositional frame
Lighting: Cold blue wash from above (Halo); dying warm gold glow from Rin's wings; dramatic contrast
Special effects: Feathers scattering mid-air; Halo's mechanical rings rotating; one last glance from Rin toward Miyako's direction
Character (Rin): Arms spread; wings extended despite damage; eyes showing relief not fear; slight head turn toward Miyako
Character (Miyako): Distant running silhouette; one step mid-hesitation; continuing forward
Canvas: 16:9 widescreen --ar 16:9 --niji 6 --style raw
```

---


---

## 圖9：「秋穗與愛莉的實驗室事故」（The Laboratory Accident）[PRE-STORY] ⭐⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_9_AkihoAeriAccident.png`

### 劇情背景

帝國歷108年，東雲秋穗的軍方研究實驗室。當時愛莉僅5-6歲，闖入母親的實驗室，意外觸碰了正在研究中的情緒力量裝置原型。那一刻，愛莉成為了世界上第一個人造魔法屍骸——石像化開始。這是秋穗所有黑暗選擇的根源，是她與黑奏訂立契約的根本動機，也是她所有罪孽的起點。CDL-013確認愛莉前史事故係她視覺連結（紙皮騎士形態）的設計起點。

### 圖片說明

實驗室的瞬間：愛莉的手剛接觸到裂開的裝置，石像化從接觸點開始蔓延——手指、掌心、手腕，灰白色的石頭質地快速侵佔皮膚。秋穗的臉從「緊急」切換到「崩潰」的瞬間，那是整個人的崩塌，不只是表情的變化。實驗室的冷光讓一切更殘酷。

### 劇情位置

**時間點**：帝國歷108年（前史，主線開始前15年）
**CDL 追蹤**：CDL-013（愛莉揭示線設計：前史事故形態＝紙皮騎士前身）；`canon/03_characters/aeri.md §第一個人造屍骸`；`canon/03_characters/akiho.md §愛莉的意外`；`canon/04_timeline_canon.md #event-aeri-accident`
**前置 → 本場景 → Payoff**：秋穗「超越花子」執念驅動的瘋狂研究 → 愛莉觸碰裝置石像化（秋穗弧光起點）→ 秋穗與黑奏訂立契約；情緒毒品研發動機（「為救愛莉不惜一切」）；圖31秋穗懺悔場景；圖132秋穗×愛莉重逢（Act IV）

### 詳細核心描述（250字）

帝國歷108年，冬。

軍方情緒力量研究實驗室，冷白燈管的光。

愛莉當時只有五六歲。她跟著母親來了不該來的地方。

沒有人告訴她那個裝置不能碰。或者有人說了，但她是個孩子，孩子不懂「不能碰」的意思有時候比「危險」更嚴重。

她的手碰上了裝置的外殼，那個外殼上有一道秋穗試驗時留下的微小裂縫，正在滲出某種不穩定的情緒能量。

石像化從接觸點開始，沒有聲音，只有速度。

手指灰化，然後掌心，然後手腕——那是一種往骨子裡蔓延的冷，愛莉還沒有來得及叫痛，身體就已經開始失去移動的能力。

秋穗的反應分成兩個階段：第一個瞬間是「緊急」——職業性的即時反應，她同時想到了三種緊急處理方法。然後是第二個瞬間。

她看見了愛莉的臉，還是疑惑的表情，還不知道發生了什麼。

第二個瞬間，秋穗的臉崩了。

不是哭，是整個人的結構同時失去支撐的那種崩潰——那個表情在秋穗臉上出現的時間不超過兩秒，但那兩秒是她所有選擇的原點。

### Midjourney 標準版

```
Dark anime. Pre-story flashback. Imperial military research laboratory, Year 108. Cold white fluorescent light, clinical metal surfaces, experimental equipment. Aeri, age 5-6, small girl in simple clothes, hand just touching a cracked prototype device — petrification spreading visibly from contact point: fingertips turning grey-white stone texture, spreading to palm, wrist, climbing fast. Aeri's expression still confused, not yet registering pain. Akiho (researcher form, late 30s, white lab coat, hair pulled back severe) — face captured in the exact transition moment: professional emergency response collapsing into maternal devastation. Not crying yet — structural collapse of composure. Two-phase expression in one face. Cold laboratory colors: white, steel grey, pale blue equipment glow. Single warm element: the small child against clinical coldness. Emotional tone: the two seconds that decided everything she would do for the next twenty years. 8k, dramatic close-up composite (hands petrifying + Akiho face), niji 6, style raw. --ar 9:16
```

**視覺重點**：
- 石像化從接觸點蔓延的視覺——灰白質地侵佔皮膚，強調速度感（沒有聲音，只有進展）
- 愛莉的表情仍是「疑惑」——她還不知道發生了什麼，這個時間差令場景更殘酷
- 秋穗的雙段式表情：「職業緊急」→「母親崩潰」的瞬間切換，兩秒內的轉變
- 實驗室的冷白光——科學理性的環境烘托感情崩潰的反差

⭐⭐⭐⭐⭐

**Reference Images**：
- 秋穗：`ConceptArt_Akiho_CasualWear.png`
- 愛莉：`ConceptArt_Aeri_CasualWear.png`
- 黑奏：`ConceptArt_Kurosou_CasualWear.png`



---

## 圖10：「殿後的前夜」（The Night Before the Rear Guard）[ORIGIN_FLASHBACK] ⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_10_RinMiyakoLastNight.png`

### 劇情背景

帝國歷108年，凜殿後犧牲的前夜。這不是犧牲瞬間（SPEC#77），而是決定的那一刻——凜知道自己明天要做什麼，美夜子是否也知道？這個夜晚是美夜子終身PTSD情感根源的更早一層：不是「喀嚓」聲（那是創傷的聲音化），而是「我看到她的眼神，我已經知道了，但我們都沒有說」（rin.md §犧牲——光環處決；miyako.md §凜的犧牲與詛咒首次觸發；CDL-271）。美夜子和凜的連結核心在於「一個眼神就是一整套戰術」——這個前夜，她們在不需要語言的靜默中完成了最後的道別。凜「終於等到一個值得犧牲的理由」的釋然，在這一夜已在她臉上隱隱出現。美夜子倖存者罪疚的根源不只是「沒有阻止」，而是「我看到了她的眼神，我知道，但我仍然繼續睡去」——那份「我知道」的沉默成為她此後多年無法觸碰的深處。

### 圖片說明

帝國歷108年，某個戰地夜晚，凜與美夜子並排——可能是在臨時據點的地板上，可能是靠牆坐著，可能是背對背沉默地對著各自的方向。不需要對話，不需要告別的話語。凜的臉上有一種微妙的東西，美夜子看見了，或者沒有說她看見了。這個夜晚的核心在於：有些事情說出來反而不真實，沉默才是最重的重量。

### 劇情位置

**時間點**：前史，帝國歷108年（凜光環處決前夜；美夜子PTSD情感根源）
**CDL 追蹤**：CDL-271（美夜子Unit 01靈魂困禁；倖存者罪疚根源）；rin.md §犧牲——光環處決；rin.md §與美夜子的羈絆；miyako.md §凜的犧牲與詛咒首次觸發；timeline #event-rin-sacrifice
**前置 → 本場景 → Payoff**：SPEC#76 凜×美夜子黃金搭檔期（巔峰默契） → 本場景：前夜沉默，沒有說出口的「我知道」 → SPEC#77 凜殿後犧牲（「喀嚓」聲）；美夜子的倖存者罪疚成為其此後一切行為的底層驅動；SPEC#6 月下崩潰（美夜子精神狀態根源）

### 詳細核心描述（240字）

帝國歷108年，某個戰地夜晚。

臨時據點，燈光微弱或沒有燈光。地板是冰冷的。

凜和美夜子並排坐著，或者靠著，或者背對背——不是為了策略，只是因為兩個人都不想走遠。她們的戰術配合已經到達了某個境界：不需要語言，一個眼神是一整套作戰計劃。

今晚沒有眼神交換。

凜看著她自己的前方，美夜子也看著她自己的前方。

但有什麼東西在空氣裡，像一首沒有唱出來的歌的最後一個音符。凜的臉上有一種東西——不是悲傷，不是恐懼——是「終於等到了」的微微鬆開。那個表情在被感知到的一刻，又收回去了，如果有的話。

美夜子的手指沒有動。

她的眼角沒有轉向凜。

但她知道了。就像她總是知道——這就是為什麼她們不需要語言。

她知道了，但她沒有說話。

就是這個沉默，在第二天的「喀嚓」之後，成為美夜子此後十幾年都無法觸碰的那個地方。

### Midjourney 標準版

```
Dark anime. Wartime temporary shelter, dim night. Rin and Miyako side by side — sitting on floor or leaning against wall, not facing each other, each looking at their own direction. The silence between them heavier than any speech. Rin's face: almost imperceptible expression of something finally settled — not fear, not sorrow, something closer to release. Miyako's expression: still, controlled, knowing but unspoken. No dramatic lighting. Their postures suggest two people who have never needed words, and tonight words would break something that silence preserves. Colors: muted grey-blue military shelter interior, dim warm light source, worn gear visible. Emotional tone: the night before, the thing that was not said, which became the weight of survival. 8k, niji 6, style raw. --ar 9:16
```

**視覺重點**：
- 兩人並排但各看各的方向——「不用語言」的羈絆設計，沉默比對話更重
- 凜臉上「終於等到了」的微妙鬆開感——不是恐懼，是釋然的輕微外露
- 美夜子的靜止——「知道但不說」比「不知道」更沉重
- 臨時戰地據點的環境：磨損感、疲憊感、軍事實用主義美學
- 構圖：兩個人之間的小小距離，那段距離是整幅圖情感最重的地方

⭐⭐⭐⭐

**Reference Images**：
- 美夜子：`ConceptArt_Miyako_CasualWear.png`
- 凜：`ConceptArt_Rin_CasualWear.png`

---

# Act I


## 圖11：「屍骸的道歉」（The Corpse's Apology）[ACT_I] ⭐⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_11_CorpseApology.png`

### 劇情背景

Act I 早期戰鬥中，晴香遭遇一具老婆婆形態的屍骸。屍骸已失去語言能力，卻以某種殘存意識引導附近路過的小孩開口說話：「有個婆婆說她很抱歉。」這是整個故事中「屍骸其實不是怪物」主題的最初萌芽。屍骸保留了人性殘骸，以傳話方式道歉，令晴香第一次正面懷疑「屍骸＝怪物」這個被灌輸的認知框架。同時，這個場景也是「膠布哲學」遭遇第一次質疑的時刻——帝國的「掩蓋問題」方法論，是否真的解決了問題？（CDL-070 膠布哲學第一層種子；CDL-031 屍骸形態）

### 圖片說明

街道一角，老婆婆形態的屍骸蹲伏在地——身體已扭曲變形，無法正常站立，眼睛渾濁失焦，嘴巴無法發出聲音。旁邊一個五六歲的小孩站著，表情茫然但說出了那句話。晴香握著武器，怔在原地，無法繼續戰鬥姿態。

### 劇情位置

**時間點**：帝國歷113年，Act I 早期（E-02附近，初入戰鬥期）
**CDL 追蹤**：CDL-031（屍骸形態：人形扭曲版，被強烈情緒佔據的人）；CDL-033（屍骸態度選擇示範）；CDL-070（膠布哲學種子）；CDL-053（晴香拯救者情結首次動搖）
**前置 → 本場景 → Payoff**：E-01首戰「屍骸＝敵人」既定認知 → 老婆婆屍骸以孩子傳話道歉（「屍骸＝怪物」認知首次裂縫）→ Act II 晴香開始質疑帝國「維多利亞天使」體系的道德基礎；Act III 屍骸解放者主題的遠端種子

### 詳細核心描述（250字）

帝國歷113年，早秋，日區街道一角。

晴香在戰鬥剛結束的一片混亂中，遠遠看見一個蹲伏在牆角的老婆婆形態屍骸。屍骸的身體已嚴重扭曲——手臂角度不對，脊椎已彎成不可能的弧線，眼睛渾濁，焦距消失——是典型的被情緒完全佔滿的狀態，已不具備任何正常行動能力。

在它旁邊，站著一個五六歲的小孩。小孩表情茫然，像是剛剛被人說了什麼，又不確定那話是不是真的。

然後小孩轉向晴香，說：「有個婆婆說她很抱歉。」

小孩說完，仍是茫然的表情，說不清楚剛才那句話是怎麼來的。

晴香的手握著武器，動作停住了。

屍骸仍然蹲在那裡，身體繼續輕微抽搐，眼睛沒有焦距。但剛才那句話確實發生了。某個意識碎片，某個被情緒的重量壓住而無法說話的東西，選擇了道歉。

晴香不知道該怎麼做。

這是她第一次意識到，帝國教她「消滅屍骸」的所有邏輯裡，有一個地方有問題。

### Midjourney 標準版

```
Dark anime. Act I early street battle aftermath. Corner of a residential street, dim grey autumn light. An elderly-woman-form magical corpse crouching against a wall — body severely distorted (arm angle wrong, spine bent in impossible arc, eyes clouded and unfocused), unable to move or speak normally. A small child aged five or six standing nearby, expression blank and uncertain, just having delivered a message they don't fully understand. Haruka standing opposite, weapon still in hand but body frozen — not battle-ready anymore. Emotional pivot: the moment she can't continue. The corpse continues twitching slightly, no awareness. The child looks between the corpse and Haruka. Colors: muted grey street, faint warm amber from distant street lamp, Haruka's outfit contrast. Emotional tone: the first crack in a certainty she didn't know she had. 8k, niji 6, style raw. --ar 9:16
```

**視覺重點**：
- 老婆婆屍骸的扭曲身體——失去行動能力但不是威脅，視覺上打破「屍骸＝怪物」的既定符碼
- 小孩的茫然表情——傳話媒介本身對發生的事也不理解，增加超自然感
- 晴香握著武器但「動作停住」——不是進攻也不是撤退，是第一次無法判斷的時刻
- 屍骸繼續輕微抽搐——它還在，但傷害已成，道歉本身就是存在的證明

⭐⭐⭐⭐⭐

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`



---

## 圖12：「彩的日常表演」（Aya's Daily Performance）[BEAT_SHEET_PREP]

**建議輸出文件名**：`ConceptArt_Scene_12_Aya_DailyPerformance.png`

### 劇情背景

Act I 期間，黑奏以「彩」的身份潛伏在晴香身邊執行三重任務：持續為自身充能、從晴香的情緒痛苦中收割高純度情感貨幣、並對晴香作為復活儀式節點進行頻率校準（CDL-079）。整個學校環境的日常表演是黑奏「偽裝設計原則」的具現——以真話構成假身份，讓「孤兒彩」的形象在晴香及旁人的腦補中自然成形，無需主動說謊。真正的彩被囚禁在心房深處，只能以觀察者視角目睹黑奏用她的笑容和聲音行事，偶爾透過晴香的善意感受到微弱的情緒波動。這個場景是 Act I 全段偽裝機制的縮影，同時埋下後段揭露黑奏真身時最大衝擊的伏線。

### 圖片說明

在學校裡，「彩」是一個完美的轉校生——笑容精緻、措辭得體、對晴香真誠友善。但眼神背後沒有任何屬於一個少女的東西，只有精密的計算和目的。真正的彩被困在身體深處，只能無聲地觀望著另一個意識用她的臉、她的聲音，一點一點地接近晴香。笑容是真實的，但背後的人，不是她。

**Reference Images**：
- 彩：`ConceptArt_Aya_CasualWear.png`

**簡化核心描述**：
學校或公開場所，彩表演著完美的學生與朋友角色，笑容精致但眼神空洞。身邊人物模糊，只有彩清晰——演員被聚光燈困住。

**所需資源**：彩的日常與魔法形態


---

## 圖13：「凜的情報蒐集現場」（Rin's Intelligence Gathering）[BEAT_SHEET_PREP]

**建議輸出文件名**：`ConceptArt_Scene_13_Rin_IntelligenceGathering.png`

### 劇情背景

**[角色形態修正 2026-07-17]**：原文將凜嘅「烏鴉形態」用於 Act I-II 早期日常監視職務，但依 `DIGEST_CHARACTER_STATES.md` R-MG2 同 `rin.md` §魔法少女形態二（痛苦化身/烏鴉），呢個形態明確對應「痛覺信仰達到頂點……Unit 00 自願兵器化前後」——即 **Act III** 心理狀態極端化嘅產物（C型金屬扣插肉身連鐵鏈嘅痛覺儀式化造型），唔係 Act I-II 凜以情緒管理局公務員身份執行監視職務時嘅形態。canon 亦未見凜有「烏鴉外勤監視」呢個具體職務設計（`rin.md` 冇「監視／外勤」相關段落）。**已修正**：時間點同角色狀態改為 Act I 全程（108年重組後貫穿背景狀態，見圖82審計已confirm），凜以**情緒管理局公務員制服身份**（`ConceptArt_Rin_TheAdministrationBureau.png`，R-S1）執行職務，非烏鴉魔法少女形態；「見到特定戰術節奏手指無意識收緊」呢個身體記憶反應本身有 canon 支持（`rin.md` §核心創傷—感官剝奪），予以保留。

Act I 全程，凜被重組為情緒管理局公務員後（`rin.md` R-S1，108年死後重組完成），以制服公務員身份執行職責。記憶語義被清除的她不記得任何過去，但靈魂印痕殘留——她不記得美夜子，卻在見到特定戰術移動節奏時，手指會無意識地收緊（`rin.md` §核心創傷—感官剝奪）。此場景是凜作為體制執行者、與主角團尚未正式交會前嘅背景狀態縮影，具體任務內容 `[NEEDS_FACT]`。

### 圖片說明

凜失去了所有的記憶，以情緒管理局公務員的身份在暗處執行職責——這是帝國給她的職責，也是她在失去感官之後確認自己還存在的方式。她不記得曾有過的一切，但那隻在特定節奏出現時會無意識收緊的手，仍然保留著靈魂最深處的印記。

**Reference Images**：
- 凜：`ConceptArt_Rin_TheAdministrationBureau.png`（原檔為CasualWear，本場景明確係情緒管理局公務員制服身份執行職務，改用對應制服形態更貼合）

**簡化核心描述**：
黑暗後巷或監控據點，凜以情緒管理局公務員制服身份執行職務，神情統一規格化。陰影中她是無聲的執行者，具體職務內容 `[NEEDS_FACT]`。

**所需資源**：凜的角色形態設計（情緒管理局公務員制服形態，參考 `ConceptArt_Rin_TheAdministrationBureau.png`，非烏鴉魔法少女形態）


---

## 圖14：「出門確認儀式」（彩／黑奏 / Daily Bear Confirmation Ritual）[PRIVATE_INTIMATE_MOMENT] `[核心概念已重寫 2026-07-17，原標題「熊公仔囤積」與canon「永遠潔淨」規則矛盾，已更名]`

**建議輸出文件名**：`ConceptArt_Scene_14_Aya_DailyBearConfirmation.png`（原檔名 `ConceptArt_Scene_Aya_BearHoardingCompulsion.png` 已棄用，見下方修正說明）

### 劇情背景

`[WRONG→已修正 2026-07-17，概念性重寫]` 原文「囤積數百至數千隻熊公仔、新舊有別、最舊嘅磨損破舊」呢個核心概念，喺 `aya.md` 全文搵唔到支持，屬舊72圖檔自行延伸創作；更嚴重嘅係，原文「最舊嘅熊已破損不堪、matted fur、missing eyes」直接違反 `aya.md` §學生偽裝（日常）明文規定嘅「**熊公仔『永遠潔淨』動態規則**」——「無論彩摔倒、弄髒衣服、在泥水中奔跑或哭泣時擁壓，熊公仔的絨毛**永遠保持完全潔淨**——沒有污漬，沒有壓痕，沒有任何使用痕跡。此屬性是揭示『熊是被精心以魔法維護的神器』的首要視覺線索」。canon 明確只有**一隻**熊公仔（螢的遺物，彩與黑奏共享的契約信物），唔存在「多隻新舊熊公仔囤積」呢個設計。已改為 canon 確認嘅「出門確認儀式」（habit-daily-confirmation）：帝國歷79年，螢在通風管道替6歲的彩引開敵人前，將這隻熊公仔塞進彩懷裡說「有牠陪著妳，就等於我陪著妳」（aya.md §螢的遺物）。螢被殺的那一刻，彩的靈魂被鎖入心房最深層，身體控制權轉移給黑奏。每次「彩」要出門，被困心房的彩在意識深處都會確認袋中有這隻熊公仔——這份確認穿透黑奏的控制，讓她偶爾在門口停留幾秒，做出「確認袋子」的動作卻說不出理由（aya.md §出門確認儀式）。此習慣連接Act III彩奪回身體的場景——彩能再次主動握住這隻熊，是她從「被保護者」回歸「可承擔者」的象徵起點。

### 圖片說明

彩的靈魂長年被困在自己意識最深處，只有螢留下的那一隻熊公仔連接著她與最後守護她的人的記憶。每次「彩」要出門，黑奏操控下的身體都會不自覺地在門口停留幾秒，確認袋中有這隻熊——這份確認穿透黑奏的控制，是彩唯一能主動發起的行為。無論經歷任何弄髒、摔倒、擁壓的情境，這隻熊的絨毛永遠保持完全潔淨，是「熊被精心以魔法維護」的視覺線索。

### 詳細 Prompt（內核描述）

彩／黑奏準備出門前，在玄關停下腳步。她（黑奏操控下的身體）的手伸進背包，觸碰到那隻殘舊卻異常潔淨的熊公仔——寒酸的外表下藏著頂級深紅絲絨、真寶石眼睛、金線縫線，愛的真實形態不在表面，在縫線裡。這個動作看似隨意，實則是每次出門前不可省略的確認儀式。

黑奏的表情帶著一絲困惑——她不明白自己為何要做這個動作，只知道不確認就無法離開。這正是被困在心房深處的彩，唯一能穿透黑奏控制、主動發起的行為：確認熊還在，就等於確認螢還在她身邊。

無論這隻熊經歷過幾多年、幾多次的貼身攜帶，牠的絨毛依然完全潔淨——沒有污漬，沒有壓痕，沒有任何使用痕跡。這份不自然的潔淨本身就是線索：這不是普通玩偶，而是被精心以魔法維護的神器，是彩與黑奏共享的契約信物。

**視覺重點**：玄關/門口場景、伸進背包觸碰熊公仔的手、熊公仔本身（**必須完全潔淨**，寒酸外表但質感高級、真寶石眼睛、金線縫線）、黑奏臉上困惑而停頓的表情、彩的意識殘留於這個動作中的暗示。

### Midjourney 標準版

```
A girl pausing at a doorway, one hand reaching into her school bag,
fingers touching a single worn-looking teddy bear—
yet despite its shabby, modest appearance, the bear's fur is
completely spotless, pristine, without a single stain or crease,
hinting at something unnaturally well-preserved beneath its humble look.
Faint glimpses of deep red velvet lining and a tiny gem-like eye
suggest hidden quality beneath the shabby exterior.
Her expression shows a flicker of confusion—
as if performing a ritual she cannot explain to herself,
her body pausing for a few seconds before she can leave.
The doorway framing suggests a threshold moment, private and unnoticed by others.
Color palette: soft indoor light, warm brown bear fur (spotless),
deep red velvet glimpse, muted school-uniform tones.
Lighting: soft ambient light at the doorway, gentle focus on the hand-and-bear contact.
Emotional tone: an unconscious ritual of confirmation,
love surviving in a single object, quietly defying control,
purity preserved against all odds.
-- ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A young girl pausing at a doorway before leaving, her hand reaching
into her bag to touch a single small teddy bear. Despite its modest,
worn appearance, the bear looks oddly clean and well-cared-for.
Her expression shows brief confusion, as if compelled by habit
she doesn't understand. The moment is quiet and private,
suggesting an unconscious ritual repeated many times before.
Soft indoor lighting emphasizes the intimacy of the small gesture.
Atmosphere emphasizes a hidden, protected attachment
surviving beneath an otherwise controlled exterior.
-- ar 16:9 --niji 6
```

**Reference Images**：
- 彩：`ConceptArt_Aya_CasualWear.png`
- 黑奏：`ConceptArt_Kurosou_CasualWear.png`



---

## 圖15：「晴香遞便當（三層交疊）」（Haruka's Lunchbox: Three-Layer Overlap）[ACT_I]

**建議輸出文件名**：`ConceptArt_Scene_15_Haruka_Lunchbox_ThreeLayers.png`

### 劇情背景

**⚠️ 2026-07-17 批次8審計核對**：三層意識並存機制（黑奏精算/彩被困旁觀）同 `aya.md` §彩的囚禁機制一致，CDL-079（黑奏三大潛伏物理需求）核實存在且內容相符。惟「晴香懷著對『鐵絲網另一邊那個女孩』的深厚記憶」呢句——依已核實嘅 CDL-288，鐵絲網偶遇對晴香而言係**潛意識許願**，且事件本身「敘事上扣留至Act III結尾」，晴香本人**不應在Act I對此事有任何有意識記憶**（願望係無意識埋下，非記得的往事）；此句用詞需標 `[NEEDS_FACT: 晴香對鐵絲網記憶的意識層級——應為潛意識層面而非有意識記憶]`，避免同 CDL-288「敘事扣留」設計矛盾。「便當」本身呢個具體 vignette canon 未見逐字記載，機制合理，標 `[NEEDS_FACT: 具體遞便當情節]`。

帝國歷113年Act I日常段落，黑奏已以「彩」的外貌偽裝轉入晴香的學校，兩人建立了日常信任關係（CDL-079）。晴香用心準備了兩人份的便當，以純粹的喜悅遞給「彩」——她不知道接受便當的那雙手背後同時存在三個意識：精算情緒數據的黑奏、被困在最深處無聲旁觀的真實彩。這個單一的遞便當動作，是Act I「表面正常」最尖銳的濃縮，也為Act III揭露時三層情感同時引爆埋下最沉重的炸點（CDL-082「下次呢？」的植入瞬間）。

### 圖片說明

晴香雙手捧著精心準備的兩人份便當盒，帶著純粹的笑容遞向「彩」——單純出於對眼前這個朋友的真心喜悅（此刻晴香對鐵絲網偶遇本身並無有意識記憶，那是深埋在潛意識裡的願望）。接過便當盒的那雙手在畫面上疊著三層現實：最外層是黑奏偽裝的溫和表情，底下是她正在精算晴香情緒的內部狀態，最深處是真實的彩被困在自身內部、透過黑奏的眼睛看著這一切卻發不出任何聲音。

**劇情位置**：
- **時間點**：帝國歷113年 Act I [NC] 段落，學校午餐時間
- **CDL追蹤**：CDL-079；CDL-082
- **前置事件**：黑奏以「彩」的身份偽裝轉入晴香學校（SPEC#37），晴香已對「彩」建立信任
- **本場景功能**：三層交疊的心理現實同時存在於一個遞便當的日常動作中——晴香的真心、黑奏的精算、彩的被囚
- **後續payoff**：Act III揭露時三層情感同時引爆；CDL-082「下次呢？」的植入瞬間

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`
- 黑奏：`ConceptArt_Kurosou_CasualWear.png`
- 彩：`ConceptArt_Aya_CasualWear.png`

**詳細核心描述**（200-350字）：

學校天台或教室角落，午餐時分，陽光普通，場景本身再日常不過。

晴香雙手捧著便當盒，微微彎腰，朝「彩」方向遞出。便當盒是精心準備的：兩層，多色，顯然是特別為兩個人準備的份量。她的臉是那種純粹、不帶任何算計的笑容——她在做一件讓她快樂的事，因為她終於找回了那個被鐵絲網隔開的女孩。

這張畫的核心設計是三層半透明疊加，以「接受便當盒的那雙手」為焦點：

**第一層**（最前景，實線）：黑奏以「彩」外貌接過便當盒的手。她的眼神在晴香視角是溫和的，但有一種細微的計算距離感——她在記錄晴香的反應、情緒數據、信任指數。

**第二層**（半透明疊加，藍色調）：黑奏的真實狀態——同一雙手，但從內部視角看是精算的、分析的。

**第三層**（最深層，更暗更模糊）：彩被困在自身內部的視角——她透過黑奏的眼睛看著晴香的笑容，看著那雙遞出便當的手，她認得晴香，但她的聲音無法發出。

三層共用同一個便當盒，三層共用同一個光源，但三層之間的情感距離是無限的。畫面邊緣有顏色編碼：暖橙（晴香/信任）、冷藍（黑奏/精算）、暗灰（彩/囚禁）。

**生成提示（Midjourney）**：
```
Style: psychological layered illustration, dark magical girl deception theme, visual metaphor for multiple simultaneous realities, painterly with translucent overlay technique
Mood: warmth weaponized, genuine kindness meeting calculated reception, a third consciousness trapped and watching
Colors: warm orange-gold for Haruka's sincere warmth, cold blue-grey for Kurokane's calculation layer, dark muted grey for Aya's imprisoned perspective — three palettes blending at the central lunchbox
Composition: center focus on lunchbox being handed over, Haruka's face in background with genuine smile, three semi-transparent layered visual realities at the hands/lunchbox focal point
Lighting: ordinary school lunch daylight for outer layer, inner layers progressively cooler and dimmer
Special effects: semi-transparent layering effect at receiving hands, subtle color temperature shift between layers, Aya's innermost perspective as faint silhouette
Character: Haruka (16yo, warm smile, two-tier lunchbox, completely sincere); Kurokane-as-Aya (calibrated warm expression with micro-distance in eyes); Aya-imprisoned (faint inner visual layer, silent and still)
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
High school girl sincerely handing a two-tier lunchbox to her friend at school, warm genuine smile, the receiving girl appears friendly but distant, subtle layered visual effect suggesting multiple psychological realities, warm and cold color contrast, school setting, dark magical girl psychological thriller anime style
--ar 16:9 --niji 6
```


---

## 圖16：「悲鳴女妖首戰」（First Battle Against the Banshee）[ACT_I] ⭐⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_16_BansheeFirstBattle.png`

### 劇情背景

帝國歷113年4月，Act I Beat 5，E-04。晴香團隊（晴香、美夜子、紫音、操；彩在場）遭遇「無臉執行官」——帝國高階執行體，代號「悲鳴女妖」（ACT_I_OUTLINE.md Beat 5；CDL-019/043/068/136/140/151/184）。呢個敵人純功能暴力+精神攻擊，壓倒性強大；主角團完全唔知呢個敵人嘅底層真相係「未來失敗時間線嘅秋穗」（呢刻淨係黑奏同玩家知道）。戰鬥中晴香等人不敵，紫音被逼到嘗試超載（CDL-043），美夜子強硬阻止，紫音肢體扭曲受傷——**手臂留下嘅傷口就係 Act II E-12「三重癱瘓」第三重觸發器嘅伏筆**（CDL-240 payoff）。晴香喺呢刻對呢個敵人有一種講唔清嘅直覺熟悉感（無意識認出秋穗執念/靈魂層共鳴），但無人察覺、無人指出。呢場係「偽英雄旅程」第一個系統性裂縫——體制壓迫感首次取代咗「隨機怪物」嘅質感。

### 圖片說明

夜區某處戰場（廢墟/工業區），無臉執行官以角色設定（ConceptArt_Akiho_Boss.png）為準：177cm 高挑身形，純白緊身戰鬥服（銀白束帶結構，背部脊椎核心裝置發出紫藍光），深紫色長髮部分遮蓋臉部，臉部完全溶解為星空/星雲質感（無眼無鼻無嘴），雙手化為紫藍能量長刃。佢單方面壓制主角團——晴香狼狽招架，美夜子強硬拉住紫音（阻止超載），紫音嘅手臂已經扭曲變形、流血。彩喺場邊（攻擊即將波及佢嗰下有極短暫嘅卡頓/軌跡偏移，幾乎唔可見）。整體氣氛係「打唔贏嘅絕望」，唔係熱血戰鬥爽感。

### 劇情位置

**時間點**：帝國歷113年4月（Act I Beat 5，E-04）
**CDL 追蹤**：CDL-136（無臉執行官身份+晴香熟悉感）；CDL-019/043（紫音超載衝動+美夜子阻止）；CDL-140（凜PTSD前史種子）；CDL-151（戰後彩留低幫手）；CDL-184（主角團認知=未知恐怖，完全唔知帝國背景）；CDL-240（紫音手臂傷口=Act II P-A09 payoff伏筆）；akiho.md §未來形態（無臉執行官視覺設定）
**前置 → 本場景 → Payoff**：E-1.5彩/黑奏切換初感知（本場景前）→ 本場景：悲鳴女妖首戰，紫音受傷+晴香直覺熟悉感埋種 → SPEC#170 情緒管理局遠景彩蛋（戰後同一場景延伸）→ Act II E-12 三重癱瘓第三重（傷疤payoff，CDL-240）→ Act III/IV 無臉執行官真相揭露（04_timeline_canon.md event-faceless-truth）

### 詳細核心描述（250字）

夜區廢墟戰場。

一個純白色嘅身影，安靜到唔似戰鬥中應有嘅動態。

佢嘅臉——本來應該係臉嘅位置——係一片深邃嘅星空，冇眼冇鼻冇嘴，只有星光喺深紫色嘅虛空入面閃爍。長髮垂落，半遮住呢個「非臉」。

雙手化成咗紫藍色嘅能量長刃，每一下揮動都帶住冷靜到殘忍嘅精準——冇怒氣，冇殺意嘅興奮，只有純粹嘅執行。

晴香喺度硬撐，招架住每一下攻擊，但明顯已經跟唔上。

美夜子一手拉住紫音——紫音想超載，眼神已經開始失控，手臂喺對抗中扭曲變形，滲出血。

彩喺後方，某一下攻擊軌跡本應波及佢，卻在極短嘅瞬間偏移咗——冇人留意到呢個唔對勁。

晴香望向敵人「面孔」嘅時候，心入面掠過一絲講唔出嘅熟悉感——像見過，又肯定未見過。

呢場仗，佢哋輸緊。

### Midjourney 標準版

```
Dark anime. Night district ruins/industrial battleground. The Faceless Executor: tall (177cm) humanoid figure in a skin-tight pure white bodysuit with silver-white harness straps and a glowing purple-blue energy core line down the spine, dark purple long wavy hair partially covering the face, face completely dissolved into a deep starfield/nebula void — no eyes, no nose, no mouth, just scattered starlight in dark violet space. Both hands transformed into long blades of purple-blue crackling energy. She moves with cold, precise, almost gentle violence — no rage, no bloodlust, pure execution. Haruka struggling to block attacks, clearly overwhelmed. Miyako forcibly restraining Akane, whose arm is twisting unnaturally from an overload attempt, bleeding. Aya standing slightly apart in the background, unnoticed. Colors: stark white armor against dark rubble, deep violet-black night sky, cold blue-purple energy glow, desperate exhausted character expressions. Emotional tone: overwhelming, hopeless first encounter with an unbeatable enemy — not a triumphant fight, a crushing one. 8k, niji 6, style raw. --ar 16:9
```

**視覺重點**：
- 無臉執行官造型嚴格對應 `art/ConceptArt/Characters/Akiho/ConceptArt_Akiho_Boss.png`：純白緊身戰鬥服+銀白束帶、背脊發光核心線、深紫長髮半遮「無臉」星空面、雙手能量長刃
- 主角團狼狽感：晴香招架唔住、美夜子強硬拉住紫音、紫音手臂扭曲流血——三個人物各自嘅崩潰細節
- 彩嘅極短暫卡頓：唔可以太明顯，觀眾初讀應該完全睇唔出異樣
- 晴香嘅表情要帶一絲講唔出嘅熟悉感/困惑——為二周目「原來係秋穗」埋伏筆
- 氣氛：絕望嘅一戰，唔係熱血爽感——呼應「偽英雄旅程第一個系統性裂縫」

⭐⭐⭐⭐⭐

**Reference Images**：
- 晴香：`ConceptArt_Haruka_MagicalGirl.png`（原檔為CasualWear，本場景係戰鬥決戰情境，改用MagicalGirl更貼合）
- 美夜子：`ConceptArt_Miyako_MagicalGirl.png`（原檔為CasualWear，本場景係戰鬥情境，改用MagicalGirl更貼合）
- 紫音：`ConceptArt_Akane_MagicalGirl.png`（原引用漏咗紫音——內文多次明確描述紫音被美夜子強硬拉住、手臂扭曲流血，係本場景實際核心受傷角色，原表格「主要角色」欄漏列，已補回並用MagicalGirl形態）
- 操：`ConceptArt_Misao_MagicalGirl.png`（原檔為CasualWear，本場景係戰鬥情境，改用MagicalGirl更貼合）



---

## 圖17：「情緒管理局的遠望」（The Bureau's Distant Watch）[ACT_I] ⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_17_BureauDistantWatch.png`

### 劇情背景

帝國歷113年4月，Act I Beat 5，E-04 戰後（ACT_I_OUTLINE.md Beat 5；CDL-140）。悲鳴女妖首戰結束後，情緒管理局（凜+朔）暗中出手輕微干預令執行官退場——晴香等人誤以為係管理局逼退咗怪物，實情係黑奏保護彩嘅指令生效。戰鬥結束、主角團狼狽收拾之際，夜區高處嘅廢墟陰影中，兩個純白緊身西裝剪影俯視住呢個場面，睇唔清樣貌，零對話。凜嘅手指無意識咁撫摸頸上被遮住嘅位置（紅線習慣，凜身份嘅早期伏筆）。美夜子喺遠處感受到一絲講唔清嘅熟悉感，唔明所以。兩個剪影轉身消失。

### 圖片說明

高處廢墟邊緣，逆光剪影構圖。兩個穿住純白緊身西裝嘅人影並排企喺廢墟頂，俯視住遠處戰鬥剛結束嘅現場（主角團嘅身影渺小咁喺下方）。前景/中景嘅剪影樣貌因為逆光同距離而完全睇唔清——只見輪廓：一高一略矮，衣著俐落冷峻。其中一個（凜）手指無意識咁觸碰自己頸側，好似掩住啲乜嘢。冷靜、疏離、旁觀者嘅氣場，同下方戰場嘅狼狽混亂形成強烈對比。無對話、無動作，純粹靜態嘅監視感。下一刻，兩人轉身，消失喺陰影入面。

### 劇情位置

**時間點**：帝國歷113年4月（Act I Beat 5，E-04 戰後）
**CDL 追蹤**：CDL-140（凜前史種子+情緒管理局遠景彩蛋）；CDL-136（誤導退場——晴香誤以為管理局逼退執行官，實情係黑奏保護彩）；CDL-022（美夜子孤獨感建立+熟悉感）
**前置 → 本場景 → Payoff**：SPEC#169 悲鳴女妖首戰（戰鬥本身）→ 本場景：戰後遠景彩蛋，情緒管理局身份未知嘅第一次感知 → 後續凜身份逐步揭露線（Act II/III）；美夜子「熟悉感」伏筆同凜嘅關係前置

### 詳細核心描述（200字）

戰鬥聲已經停歇。

夜區嘅高處，一片廢墟嘅邊緣，兩個人影靜靜企喺度。

純白色嘅緊身西裝，喺遠處嘅光源逆光下只剩輪廓——睇唔清樣貌，睇唔出表情，只有兩個乾淨、冷峻嘅剪影，並排俯視住下面。

下面，主角團嘅身影顯得渺小、狼狽——啱啱先經歷咗一場打唔贏嘅仗。

其中一個剪影嘅手指，無意識咁移到頸側，輕輕觸碰住一個被衣領遮住嘅位置。呢個動作冇被下面任何人睇見，甚至冇被自己察覺。

冇對話。冇任何表示佢哋做過乜嘢嘅動作。

然後，兩個剪影轉身，一齊步入更深嘅陰影，消失。

美夜子喺下面偶然抬頭嘅一瞬，見到咗呢兩個身影嘅背影——一種講唔出嘅熟悉感掠過心頭，然後又消失。

### Midjourney 標準版

```
Dark anime. High ruins overlooking a battlefield at night, backlit silhouette composition. Two figures in sleek pure-white fitted suits standing side by side atop rubble, their faces and details completely obscured by backlighting and distance — only clean, cold, composed silhouettes visible, one slightly taller than the other. One figure's fingers unconsciously touch the side of their own neck, half-hidden by a collar, an absent-minded gesture. Below, small and distant, the exhausted protagonist group recovers from a losing battle. No dialogue, no dramatic gesture — pure quiet surveillance atmosphere, detached and clinical, in sharp contrast to the chaos below. Colors: deep indigo night sky, cold silver-white suit silhouettes against warm distant battlefield embers, strong rim-light separation. Emotional tone: an unexplained, unsettling watchfulness — observers who were never supposed to be seen. 8k, niji 6, style raw. --ar 16:9
```

**視覺重點**：
- 兩個剪影必須睇唔清樣貌——刻意嘅視覺懸念，呼應「身份未知」設計意圖
- 其中一人觸碰頸側嘅細節動作：細微但關鍵，係凜身份伏筆嘅視覺錨點
- 構圖對比：高處冷靜嘅剪影 vs 低處狼狽嘅主角團
- 唔可以流露任何表情或動作透露呢兩人係敵係友——維持「情緒管理局」呢個第三方勢力嘅神秘感
- 整體氣氛：靜態、疏離、監視感，同SPEC#169嘅激烈戰鬥形成強烈節奏對比

⭐⭐⭐⭐⭐

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`
- 美夜子：`ConceptArt_Miyako_CasualWear.png`
- 凜：`ConceptArt_Rin_TheAdministrationBureau.png`（原檔為CasualWear，本場景明確描述凜以「純白緊身西裝」情緒管理局公務員身份現身，改用制服形態更貼合）



---

## 圖18：「操の虛榮告白」（Misao's Vanity Confession）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_18_Misao_VanityConfession.png`

### 劇情背景

`[已修正 2026-07-17]` 原文「E-05a後，操剛被迫加入主角團」有雙重錯誤：(1) E-05a（總部被襲）已於CDL-317正式移除，全文件此前已多次發現殘留引用（圖84/33等）；(2) 依 `ayakomoji_misao.md` CDL-322，操實際係喺 **Act I Beat E-02**（入隊戰混戰中）已經加入隊伍——「晴香擋攻擊+問裙子」係佢入隊嘅衝擊點，唔係 Act II Phase A 先加入。「misao.md §隊伍融入」亦非有效CDL引用格式。本場景若定位為「入隊初期」，時間應改為 **Act I，E-02後**；具體是否有這場「虛榮告白」對話，canon未見逐字記載，屬合理延伸，標 `[NEEDS_FACT]`。

帝國歷113年3-5月，Act I，Beat E-02入隊戰後，操剛以「被降格的恥辱」心態加入主角團。在某次任務後的空檔，她靠牆側身，不看人，用一種仍然帶著驕傲尾音的語氣說出了她人生中第一次「我不如我以為的那麼好」——眼眶微紅，但妝容完整，因為她絕對不會在說這種話的時候同時讓自己看起來「不行」。這個場景是操弧光從「形式主義作為全部」向「接受真實自我」的第一個真正轉折，也是後續SPEC#5操的鏡前獨白（下一個轉折點）的情感前置——操在形式完美的鏡中看見空洞，這場坦白是她第一次允許那個空洞被另一個人看見一點點。

### 圖片說明

帝國歷113年，操加入主角團初期，在某次任務後的空檔，她靠著牆，側身，不看人，用一種仍然帶著驕傲尾音的語氣說出了她人生中第一次「我不如我以為的那麼好」。眼眶微紅，但妝容完整——她永遠不會在說這種話的時候同時讓自己看起來不行。這份說法的方式仍然帶著她的稜角，但那個稜角已經有了一條細微的裂縫，是她第一次讓人看見一點點真實的自己。

**劇情位置**：
- **時間點**：帝國歷113年3-5月 Act I，Beat E-02入隊戰後（操加入主角團初期；原文「E-05a後」已修正——E-05a已被CDL-317移除，且操實際於Act I E-02入隊）
- **CDL追蹤**：CDL-322（入隊戰意外救人/多重解讀）；`ayakomoji_misao.md` §入隊前的獨行俠心理
- **前置事件**：操被迫加入主角團（她認為自己是被降格了），CDL-322入隊戰意外救人事件後的某個空檔
- **本場景功能**：操弧光的第一個真正轉折——她第一次說出「我不如我以為的那麼好」，但說出口的方式仍然是操式的：驕傲的、側身的、不看人的。這是放下傲慢但不放棄尊嚴的微妙平衡。具體對話內容 `[NEEDS_FACT]`：canon未見逐字記載此場景，屬合理延伸演繹。
- **後續payoff**：操弧光從形式主義到真實的第一步；SPEC#5操的鏡前獨白（下一個轉折點）

**Reference Images**：
- 操（便服）：`ConceptArt_Misao_CasualWear.png`

**詳細核心描述**（200-350字）：


廢棄場所，可以是廢棄倉庫或已關閉的商場走廊。光源昏黃，不是戲劇性的黑暗，是被遺棄場所的日常昏暗。

操靠在牆上，側身，不面對任何人——這個姿勢本身就是她的保護機制，她不會在說這種話的時候直視對方。她的妝容完整，頭髮整齊，這是她的裝甲，她永遠不會在說「我不行」的同時讓自己看起來「不行」。

但仔細看，眼眶微紅。不是哭過，是快要哭但忍住了。

她說的話，在場景中不用呈現文字，但她的肢體語言說出了：她的手指有輕微收緊（握著牆壁邊緣或什麼），嘴角有一個不完整的動作，像是要說什麼、說了一半、停下來換了一種說法。她說的不是「對不起」，不是「謝謝」，是某種第一次承認自己不足的陳述，但陳述的語氣是平靜的，甚至仍然帶一點點驕傲的尾音——因為就算承認不足，這個承認本身也是她主動做出的，不是被人逼出來的。

旁邊的人（晴香或其他隊員）的反應不是重點，他們可以只呈現剪影或局部。重點在操本身。

構圖核心：中近景，操側身靠牆，側臉朝向畫面外，眼眶輕微紅，妝容完整，姿態仍有稜角，但比平時多了一絲不穩定的人味。


**生成提示（Midjourney）**：
```
Style: dark magical girl illustration, character close study, interior emotional moment
Mood: pride refusing to die even when admitting defeat, the first crack in armor that does not shatter it
Colors: dim abandoned interior warm-gray, girl's makeup perfect red lips and liner intact, slight redness at eye corners, cool wall she leans against
Composition: medium close shot, girl in three-quarter profile leaning against wall, not facing the viewer, slight turn of head, hands at sides with fingers slightly curled
Lighting: dim ambient only, no dramatic source, makes everything feel quiet
Special effects: none needed
Character: teenage girl with full dramatic makeup, perfectly styled, leaning sideways against wall, eye corners very slightly red, posture defensive but with one hairline vulnerability
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A teenage girl with dramatic makeup leans sideways against a wall in an abandoned building, eyes slightly red at corners, not looking at the viewer. Her expression is proud but fragile. Character study. Dark anime art style.
--ar 9:16 --niji 6
```


---

## 圖19：「變身場景」（晴香 / Transformation Scene）

**建議輸出文件名**：`ConceptArt_Scene_19_Haruka_FirstTransform.png`

### 劇情背景

113年3月 Act I，E-01/E-02 期間。晴香的「幽靈重量」症狀（記憶空白、低語聲、莫名站在陌生地方）令她主動尋求魔法少女契約——她以為魔法能治癒這些症狀，不知道那其實是被強行切割出去的陰影人格「夕」的存在壓力（haruka.md §締約前的症狀）。E-01 屍骸攻入學校，晴香第一次變身，金魚旗元素與魔法光芒包覆——此刻她的內心是極端的「拯救者情結」與童年雙重喪失創傷孕育出的渴望：成為「能保護重要之人的公主女武神」（CDL-053）。她完全沒有意識到這次變身啟動了「燈塔效應」（CDL-064），她從此成為全城魔法屍骸的獵殺目標；也沒有意識到美夜子向她所描述的魔法少女使命，是「半真半假」的資訊過濾（CDL-055）。這是 SPEC#21 光幕破碎的對照起點。

### 圖片說明

晴香一直以為魔法少女是能保護重要之人的美麗力量，於是她在怪物攻入學校的那一夜第一次變身，被金魚旗的圖案和魔法光芒包覆。這一刻她心中充滿了成為英雄的渴望，完全不知道自己的變身已經在整座城市引起了連鎖反應，更不知道她的旅程將會走向哪裡。這是她故事的最美好的起點，也是日後一切悲劇的源頭。

**Reference Images**：
- 晴香：`ConceptArt_Haruka_MagicalGirl.png`（原檔為Singer歌手形態，本場景係晴香首次變身成為魔法少女，改用MagicalGirl更貼合）

**Creative Enhancements**：
- Show magical transformation sequence: goldfish flag elements merging with magical light
- Body transitioning: casual clothing DISSOLVING into magical girl suit
- Goldfish flag motifs in hair/ribbons becoming prominent
- Color burst: pink and cyan magical light radiating
- Include first vulnerability/fear expression (not confident hero pose)

**簡化核心描述**：
晴香首次變身，身體被金魚旗元素與魔法光芒包覆，粉紅色的旗幡與青色光線在她周圍舞動。這一刻她還不知道自己將要經歷什麼，表情混著期待與恐懼。

**所需原圖資源**：
- 晴香的日常形態
- 晴香的魔法少女形態
- 金魚旗的視覺元素與色彩

**生成提示**：
```
Style: Magical transformation; sparkling light effects; anime-inspired energy
Mood: Wonder mixed with apprehension; the moment before everything changes
Colors: Sakura pink, cyan, gold; warm artificial light; magical particle effects
Composition: Central figure; light radiating outward; goldfish flag motifs floating
Lighting: Soft magical glow mixed with stage lighting
Special effects: Particle burst; clothing transformation effect; light trails
Canvas: 3:4 portrait ratio
```


---

## 圖20：「膠布哲學三層」（Bandaid Philosophy Triptych）

**建議輸出文件名**：`ConceptArt_Scene_20_BandaidPhilosophy_Triptych.png`

### 劇情背景

膠布哲學係全作晴香成長弧的核心視覺語言（CDL-070）。Act I [NC] 種入習慣（第一層：個人掩蓋），Act I 末 E-04 後緩衝段，紫音批判「貼住張貼紙就唔代表個傷口會好」（第二層：系統隱喻，CDL-120），E-XX 整合高潮晴香放下膠布將手貼向鏡面（第三層：存在論轉化，CDL-070）。三聯畫並置這三個時間節點，呈現「用掩蓋逃避痛苦→被批判掩蓋無效→主動直面陰影」的弧線精華。此弧線最終在 Act III 陰影治癒場景中完成反轉（CDL-269），晴香撕走舊膠布，以額頭貼近他人傷口，說出「你有資格痛」——由逃避者蛻變為真正承接世人痛苦的魔法少女。

### 圖片說明

晴香有一個貼膠布的習慣——每次受傷就貼上膠布，掩住傷口、假裝沒事。這個習慣從她個人的逃避，慢慢演變成對整個世界的隱喻：社會用各種漂亮的遮蓋物掩住所有不願看見的痛苦。三個時間點的晴香並置，呈現她從「貼住傷口就沒事了」到「傷口不需要被遮住」的成長歷程。

**Reference Images**：
- 晴香（便服）：`ConceptArt_Haruka_CasualWear.png`

**簡化描述**（150-200字）：
三個場景並置：（左）晴香用膠布包裹手指的日常習慣；（中）膠布作為系統暴力的隱喻；（右）膠布揭示為世界真相本身的虛偽遮蔽。從個人習慣升級為存在論批判。

**生成提示**：
```
Style: Triptych conceptual art; visual metaphor progression
Mood: Personal to political; philosophical escalation
Colors: Consistent warm skin tones; bandages in different contexts
Composition: Three equal panels; visual echo/progression
Canvas: Widescreen triptych (3×square or one wide panel)
```


---

## 圖21：「花子的溫柔牢籠」（Mother's Gentle Cage）

**建議輸出文件名**：`ConceptArt_Scene_21_Mother_GentleCage.png`

### 劇情背景

**`[NEEDS_FACT]` 概念釐清（2026-07-17）**：原速查表將本場景註為「秋穗模仿花子語調」（CDL-126，Act I Beat 0 confirmed 事件），但本段落實際描繪嘅係「花子本人」以永遠循環早餐姿態物理在場——呢兩件事係唔同層次，唔應該混為一談：(1) **CDL-126（confirmed，Act I Beat 0）**：秋穗（阿姨偽裝）在廚房方向叮囑聲，聲音刻意模仿已故花子語調，晴香全程未見花子本人，只聞其聲；Act II 揭露為秋穗扮演。(2) **CDL-036（confirmed，AKS-H1）**：晴香透過夕嘅記憶碎片「見到」花子/美夜子/夕一齊生活嘅片段，晴香不認識花子——呢個係短暫記憶碎片閃回，唔係持續循環早餐場景。(3) 本段落描述嘅「花子端住熱湯、永遠循環嘅晨早」呢個獨立敘事裝置，canon 未見直接支持，可能係作者對 Phase K「蜜月困境靈魂監獄」（見SPEC#107 `PhaseK_SoulPrisonKitchen`）概念嘅延伸演繹，屬 Act IV 草稿範疇，並非現行確認場景。花子是晴香與美夜子的母親，同時是秋穗的妹妹（CDL-044）。在 Alpha 線，花子與美夜子同時意外遇難，晴香在場目睹（04_timeline_canon.md event-sisters-execution）。Beta 線設定中花子為難產身亡——晴香從未真正認識過自己的母親。生成時建議以 (1) CDL-126 confirmed 版本為準（僅聞其聲、不見其人，或以模糊剪影呈現），如需保留「永遠循環早餐囚禁」意象，須標記為 `[INFERRED — 待Act IV Outline/作者確認是否落實此裝置]`。

### 圖片說明

花子是晴香從未真正認識的母親——晴香以改變現實的方式讓她還活著，卻在那個過程中抹去了真正連結的可能性。晨間廚房的場景以永遠循環的方式出現：溫暖的金色陽光、熱騰騰的湯、母親的聲音——一切都是愛，但晴香卻感到無法觸及的陌生。這份溫暖是她給自己的禮物，也是她困住自己的牢籠。

**Reference Images**：
- 晴香（便服）：`ConceptArt_Haruka_CasualWear.png`
- 花子：`ConceptArt_Hanako_CasualWear.png`（原引用漏咗花子——本場景圖片說明明確描述「花子端住熱湯」係畫面中在場人物，原表格「主要角色」欄亦列明花子、晴香兩人，已補回）

**簡化描述**（150-200字）：
永遠循環的晨間，花子端著熱湯，陽光開始暗淡。母愛的溫暖同時是囚禁，無論晴香如何逃脫，都會被溫柔地拉回到這個循環。夢境與現實的邊界已然消失。

**生成提示**：
```
Style: Soft dreamlike horror; domestic uncanny
Mood: Love as prison; comfort as trap; infinite loop
Colors: Warm kitchen golds and creams; subtle darkening at edges
Composition: Mother figure offering; daughter figure receiving/trapped
Lighting: Warm interior light slowly dimming; no external light source
Special effects: Time loop visual indicators; subtle repetition clues
Canvas: 3:4 portrait or square (cyclic framing)
```


---

## 圖22：「違和感與對峙」（Dissonance and Confrontation）

**建議輸出文件名**：`ConceptArt_Scene_22_Dissonance_Confrontation.png`

### 劇情背景

**[已修正 2026-07-17]** Act I 開場 Beat 0，晴香在接觸魔法少女契約之前已有「幽靈重量」症狀 Stage 1——依 `ACT_I_OUTLINE.md`（CDL-128）具體症狀係「照鏡倒影慢 0.3 秒」，晴香揉眼歸因「琴晚夜瞓，眼花添」，係一個極度細微、可否認嘅日常異常，並非明顯的「戰士形象」。**視覺概念修正**：原文「鏡中顯露滿身傷痕的戰士形態」同 canon 對夕嘅鏡中顯現規格矛盾——依 `DIGEST_CHARACTER_STATES.md` Y-S1 及 QQ-23（RESOLVED，CDL-094）確認，夕 Act I 隱匿期嘅鏡中顯現係「**特定姿勢/動作可辨識但面目模糊嘅小孩身影**」（5歲兒童視覺年齡），唔係戰士／傷痕成人形態——戰士感嘅具現化屬於後段（Act III H-S5 晴香自己嘅視覺演變，非夕本身）。原文引用嘅 CDL-030 亦誤植：CDL-030 實際對應 Beat 4.5「彩/黑奏切換目睹」場景（`ACT_I_OUTLINE.md` 行124），同本鏡前場景無關；正確引用應為 CDL-072/077/094（夕噪訊視覺型）。此場景是 Act I 播下的「覺醒種子」，payoff 於 Act I 幕末 E-XX 整合場景，晴香向 5 歲的自己道歉（CDL-077）。

### 圖片說明

在成為魔法少女之前，晴香就已經察覺到奇怪的事——鏡子裡的倒影會慢了0.3秒，讓她揉眼睛歸咎於「琴晚夜瞓」。這一次她定睛細看，鏡中彷彿疊著一個模糊的小孩身影——姿勢、動作依稀可辨，面目卻看不真切，一閃即逝。那個身影不是幻覺，而是她一直未曾察覺、被自己遺忘的另一半自己，用唯一可能的方式對她投下第一絲存在的痕跡。

**Reference Images**：
- 晴香（便服/家居）：`ConceptArt_Haruka_CasualWear.png`（原引用 MagicalGirl 形態不符——本場景為 Act I Beat 0 家中日常，晴香此刻未變身，已更正）

**簡化描述**（150-200字）：
鏡中倒影延遲0.3秒，隱約疊著一個面目模糊、動作可辨的小孩身影，與晴香在鏡前的溫柔形象形成微妙但不安的違和感。這是覺醒的第一步——極細微、可否認的異常，被遺忘的另一半在鏡中留下第一絲痕跡。

**生成提示**：
```
Style: Mirror duality; subtle psychological unease (not overt horror)
Mood: Faint dissonance between self-image and truth; the first deniable crack
Colors: Soft reflection (false) vs. faint cold blue-tinged shadow silhouette (true); mirror frame emphasized
Composition: Central mirror; Haruka in front, a small blurred child-shaped silhouette barely visible layered within the reflection
Lighting: Soft interior light on Haruka; the silhouette barely catches any light, near-invisible
Special effects: 0.3-second reflection delay implied; mirror distortion at edges; silhouette recognizable only by posture/motion, face indistinct
Canvas: 3:4 portrait or square (mirror centered)
```


---

## 圖23：「晴香的城市獨行」（Haruka's Solitary Urban Walk）[BEAT_SHEET_PREP]

**建議輸出文件名**：`ConceptArt_Scene_23_Haruka_SolitaryUrbanWalk.png`

### 劇情背景

Act I-II 過渡期（帝國歷 113 年），晴香以「維多利亞天使」偶像形象在日區公開活動，但光幕濾鏡與 Reality Show 包裝（CDL-057）令她的在場本質上是商品化演出而非真實融入。情緒增幅器體質令她在人群中無屏障地感知他人真實情緒輻射（CDL-195），表面被萬人簇擁，實際徹底孤立。此場景是晴香「將自己擺在拯救者位置」的行動縮影（haruka.md §倖存者的缺失與孤獨）——她試圖以無處不在的在場感彌補無法真正連結的恐懼，卻發現日區高飽和日常是另一種囚籠。payoff 於 Act II 社會性死亡後，那個一直融入不了的城市，將她徹底排出。

### 圖片說明

晴香以偶像的形象走在人工光線飽和的城市街道上，周圍是人群和廣告牌，一切看起來完美而熱鬧。但她的身體能感受到每個人的情緒，讓她始終無法真正融入任何人之中——她被萬人簇擁，卻是徹底孤立的。那個城市的繁華，是另一種囚籠。

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`

**簡化核心描述**：
日區城市街道，晴香獨自行走，周圍是人工光源與人群。她試圖融入日常但卻發現自己被隔離，完美假象下隱藏著深層孤獨。色彩飽和但冷漠。

**所需資源**：日區城市背景


---

## 圖24：「美夜子與小光的對話」（Miyako and Hikari Conversation）[BEAT_SHEET_PREP]

**建議輸出文件名**：`ConceptArt_Scene_24_Miyako_Hikari_Conversation.png`

### 劇情背景

**[NEEDS_FACT 2026-07-17]**：`ko_hikaru.md` §關係網絡只列出小光與紫音、黑奏、晴香、操四者的關係，並無美夜子與小光直接互動的記錄；`miyako.md` 亦未見同小光相關段落。「美夜子以貓形態陪伴小光」呢個具體互動場景 canon 未有直接支持，屬舊72圖檔自行延伸嘅推測畫面，生成時應標 `[INFERRED]`。以下時間點/主題脈絡有 canon 依據，可保留：Act I 中期，美夜子以黑貓形態守護晴香身邊，因靈魂本能殘留而將晴香視為唯一的熟悉錨點（`miyako.md` CDL-060：「大腦說『晴香是工具』，但靈魂本能殘留令晴香成為……唯一感到熟悉與安全的錨點」，Act I 寫法 = 口裡說不身體本能守護）。小光是紫音的溫暖錨點，也是隊伍非正式成員中最年幼的存在（`ko_hikaru.md`）。此場景的溫暖顏色逐漸褪去，預示著小光的屍骸化命運（SPEC#22），這份溫暖確實喺 **Act II Phase B，Beat E-07a（113年5月）**被徹底終結（`ko_hikaru.md` §悲劇的背叛與轉變；`ACT_II_OUTLINE.md` Phase B = E-07a～E-07b～E-08，113年5-6月），成為紫音墮落為屍骸首領的直接起因——呢部分時間點準確，只係「美夜子在場陪伴小光」呢個具體畫面待補證據。

### 圖片說明

美夜子以黑貓的形態默默存在，口裡說著一切都只是職責，但她的身體本能讓她靠近每一個需要守護的人。小光是隊伍裡最年幼的孩子，她不需要知道為什麼，只是自然地對那隻貓伸出手。溫暖的室內場景漸漸褪色——這份安靜，是悲劇到來之前最後的平靜。

**Reference Images**：
- 美夜子：`ConceptArt_Miyako_Cat.png`（原檔為CasualWear，本場景明確描述美夜子以黑貓形態陪伴小光，改用Cat形態更貼合）
- 小光：`ConceptArt_Ko_CasualWear.png`

**簡化核心描述**：
室內溫馨空間，貓形態的美夜子與年幼的小光進行對話。貓與孩童的視角對稱，背景家居感溫暖但顏色逐漸褪去。

**所需資源**：美夜子貓形態，兒童小光


---

## 圖25：「操的獨舞冥想」（Misao's Solitary Dance Meditation）[BEAT_SHEET_PREP]

**建議輸出文件名**：`ConceptArt_Scene_25_Misao_DanceMeditation.png`

### 劇情背景

**[NEEDS_FACT 2026-07-17]**：`ayakomoji_misao.md` 全文未見「舞蹈室」「跳舞」相關描述——操嘅表演型逃避機制 canon 明確落於「魔法少女傀儡師戰鬥」「24小時完美女性表演」（CDL-063「恐懼露出破綻的人」），並無獨立「日常舞蹈冥想」呢個習慣設定；本場景嘅「舞蹈」意象屬舊72圖檔自行延伸，同已confirm嘅「鋼鐵獨舞」（Day13終局，`DIGEST_LOCATIONS.md` §3 學校瓦礫）亦係唔同性質嘅事件，唔可以混用。生成時「舞蹈」呢個具體行為須標 `[INFERRED]`。以下角色心理背景本身有 canon 支持，可保留：操「恐懼露出破綻的人」這一核心創傷驅使 24 小時完美表演（CDL-063）——父親以男性繼承人名義強行重塑她的身份並安排物理性別重置手術（CDL-155），母親被改造成無情感的活體人偶作為「破綻的代價」的活生生警告（`ayakomoji_misao.md` §母親——完美的活體人偶），令操從小學會以完美表演換取不被改造的生存空間。此時期紗夜仍在守護她，但她還未能接受「被不完美的自己接納」的可能。

### 圖片說明

操從小就知道破綻的代價——母親就是那個代價的活生生示範。她在舞蹈室的鏡前一遍又一遍地重複同樣的動作，不是為了追求藝術，而是為了通過那個總在腦中評判的目光。她的動作精確到毫無人性，也正因為如此，才能換來暫時的安全。舞蹈是她的生存方式，也是讓她慢慢失去自己的過程。

**Reference Images**：
- 操：`ConceptArt_Misao_CasualWear.png`

**簡化核心描述**：
操在空曠的舞蹈室內獨舞，姿態優雅卻充滿悲傷感。鏡子映照出她無數次重複的動作，完美但機械化。舞蹈成為逃避真實的手段。

**所需資源**：操的形態；舞蹈室環境 `[INFERRED — canon 未見此習慣設定]`


---

## 圖26：「朱音的糖果成癮」（Akane's Candy Addiction）[BEAT_SHEET_PREP]

**建議輸出文件名**：`ConceptArt_Scene_26_Akane_CandyAddiction.png`

### 劇情背景

小光在紫音懷中消散（CDL-229）之後，紫音的邏輯世界崩潰，隨即在黑奏的操縱下建立「屍骸樂園」。然而對於始終在旁的紫音而言，糖果早已從小光給予的善意象徵，轉化為一種無法自控的自我懲罰儀式（CDL-229）。波板糖是小光的遺物，同時也令她想起弟弟因誤食情緒結晶而帶著甜蜜死笑離世的恐怖。她以糖果淹沒自己，是為了同時接近並懲罰「那份她無力守護的溫暖」——甜蜜愈多，窒息感愈深，罪惡感愈難逃。這個場景發生在紫音向屍骸首領墮落的中途，是她在「給予」的短暫光明熄滅後、重新跌回「索取與施暴」周期的心理斷口視覺化。

### 圖片說明

朱音的弟弟死於糖果般的甜蜜，而她對小光的守護也隨小光的離去一起消散了。她用糖果淹沒自己，同時接近又懲罰那份她無力守護的溫暖——窗簾緊閉、糖果堆積、色彩開始扭曲。甜蜜愈多，窒息感愈深，她早已分不清楚自己是在自我懲罰，還是在試圖麻醉。

**Reference Images**：
- 朱音：`ConceptArt_Akane_CasualWear.png`

**簡化核心描述**：
朱音在房間內被糖果包圍，窗簾緊閉，她無法自拔地沉溺。甜蜜的堆積象徵著逃避現實，但色彩開始扭曲、變質，甜蜜變成窒息。

**所需資源**：朱音的角色設計，糖果環境視覺


---

## 圖27：「秋穗的藥物實驗室」（Akiho's Drug Experiment Laboratory）[BEAT_SHEET_PREP]

**建議輸出文件名**：`ConceptArt_Scene_27_Akiho_DrugLab.png`
**依據版本**：`akiho.md` §與魔鬼的契約；CDL-110/114（2026-07-17 審計修正，見 CHANGE_LIST_EXISTING_SPEC.md 圖27項）

### 劇情背景

秋穗與黑奏的魔鬼契約（`akiho.md` §與魔鬼的契約）要求她以科學服務帝國，換取繼續研究復活愛莉的資源與特權；CGM 血糖手錶正是這份契約的具體產物（CDL-110/114）。`[TIME_REVISED]` 原速查表標「113年 Act II」有誤——血糖手錶已於 **Act I**（CDL-110，E-01/E-02後[NC]秋穗茶餐廳場景）以「健康監測儀器」名義交予晴香，本場景（裝置研發/後門植入的實驗室工作現場）邏輯上須發生於 Act I 派發之前或同期，唔可以標喺 Act II；具體研發時間點 canon 未落實，標 `[NEEDS_FACT]`。

### 圖片說明

秋穗是一位以科學研究換取救女機會的母親，她在冷色系的私人實驗室中獨自工作，試管、儀器和數據螢幕是她日夜相伴的世界。她製造出了一款能監測魔法少女生命狀態的腕錶，卻不知道這款裝置同時充當了帝國收集情感數據的隱藏後門。她為女兒做的每一件事，都在不知不覺中傷害著其他女孩。實驗室是這份交易的物理具現——她在此同時研發「能讓女兒甦醒的技術」與「能讓帝國收割更多情緒數據的工具」，兩者無法分割。CGM 血糖手錶的誕生是她能力的展現，亦是其「瘋狂結果論」的縮影：裝置透過後門收集晴香的情感生命數據，供黑奏提煉「Fallen Angel」情緒毒品（CDL-244）。她開發的每一項技術都同時傷害一批女兒，而她為女兒做的一切又繼續將自己推入更深的罪孽。冷色系實驗室的孤寂亦映照她始終在花子陰影下「必須超越才有價值」的核心創傷——超越的代價，是親手製造出讓更多孩子受苦的武器。

**Reference Images**：
- 秋穗：`ConceptArt_Akiho_CasualWear.png`

**簡化核心描述**：
冷色系實驗室，秋穗在其中進行祕密實驗。試管、儀器、數據螢幕構成了她的世界。CGM 血糖手錶在此誕生，連接科技與生命的漆黑線。

**所需資源**：秋穗的角色設計，實驗室環境


---

## 圖28：「花子的溫暖廚房」（Hanako's Warm Kitchen）[BEAT_SHEET_PREP]

**建議輸出文件名**：`ConceptArt_Scene_28_Hanako_WarmKitchen.png`
**依據版本**：`ACT_I_OUTLINE.md`（CDL-126）；`ayakomoji`—誤；正確為 `haruka.md` CDL-036/047；`CHANGE_LIST_EXISTING_SPEC.md` 圖21/28項（2026-07-17 審計修正）

### 劇情背景

`[WRONG→已修正]` 原文引用「CDL-112」作為本場景依據，但 CDL-112 實際內容係「haruka.md habit #6『規律節拍控制』DROPPED（刪除）」，同花子/廚房完全無關，屬張冠李戴誤植。

`[NEEDS_FACT]` 本場景「花子永遠停留在同一個早晨、循環監獄」嘅具體意象，同已於圖21（花子的溫柔牢籠）審計確認嘅結論屬**同一類未落實推演**——canon 已確認嘅事實只有兩層：**CDL-126**（confirmed，聲音層：秋穗喺廚房方向模仿花子語調叮囑，晴香只聞其聲，Beta 線晴香從未真正見過花子本人在廚房）與 **CDL-036**（confirmed，記憶碎片層：晴香透過夕見到夕/美夜子/花子一起生活嘅片段，晴香不認識花子，觸發 AKS-H1 記憶矛盾型感知）。「花子本人物理在場、永遠循環的溫暖早晨」呢個具體場景設定，canon 未見直接支持，屬舊72圖檔自行延伸嘅創作意象，同圖21 為同一虛構裝置嘅重複演繹，並非兩個獨立場景。

### 圖片說明

`[INFERRED]` 花子是晴香記憶中的母親形象——但依 CDL-126，Beta 線晴香實際上從未真正在廚房見過花子本人，只聽過秋穗刻意模仿嘅語調叮囑聲；依 CDL-036，晴香透過夕見到嘅係花子/美夜子一起生活嘅零碎記憶片段，並非持續存在嘅晨間場景。若要以視覺化方式呈現「母愛的溫暖幻影」，須明確標示呢個係晴香透過陰影/記憶碎片感知到嘅片段畫面（而非物理現實中反覆發生嘅場景），廚房邊角淡出可保留作為「記憶碎片非完整現實」嘅視覺暗示。

**Reference Images**：
- 花子：`ConceptArt_Hanako_CasualWear.png`
- 晴香：`ConceptArt_Haruka_CasualWear.png`

**簡化核心描述**：
晨間廚房記憶碎片，花子的身影模糊浮現，金色陽光透窗照入。邊角開始淡出——暗示這只是晴香透過夕感知到的破碎記憶，不是持續存在的現實。

**所需資源**：花子的角色設計，廚房環境（`[NEEDS_FACT]`：實體家居場景 canon 未有視覺定義，見 `DIGEST_LOCATIONS.md` §12）


---

## 圖29：「珍寶珠入隊——朱音加入主角團」（The Lollipop Recruitment）[ACT_I]

**建議輸出文件名**：`ConceptArt_Scene_29_Akane_LollipopRecruitment.png`
### 劇情背景

帝國歷113年3-4月，Act I E-02 系列後段。朱音此前被帝國體制招募為清剿魔法少女的工具，同時長期情緒毒品成癮令她陷入反復斷癮循環。晴香在夜區街角遇到斷癮症狀發作的朱音，沒有說教，沒有救援方案，只是遞出一粒糖（CDL-052；05_story_outline_canon §Act I E-02）。這是朱音加入主角團的弧光起點——她習慣了一切善意都有代價，無法計算這個舉動的意圖，於是系統暫時停止運作。

### 圖片說明

`[已修正 2026-07-17]` 原文台詞「食粒糖先啦」為 CDL-052 原句嘅截斷版，canon完整台詞為「食粒糖先啦，雖然無魔法咁好味，但係會飽肚㗎。」——已補全。地點原文「夜區街角」，canon（CDL-052）明確係「後巷」，已修正。「後續payoff」原文只點名Act III糖果山犧牲，但依`ACT_III_OUTLINE.md`（E-III-G4，行143）記載，珍寶珠意象嘅直接文本呼應係Phase G4「下水道無聲重逢」（晴香「留下一包糖與醫療物資，呼應入隊時的珍寶珠」），糖果山犧牲屬更後段嘅廣義情感收束，已補正確payoff鏈次序。

夜區後巷，潮濕青石板地面，路燈昏黃。朱音蜷縮在牆根，斷癮症狀讓她四肢痙攣、冷汗滲出，但她的脊背仍以某種荒謬的倔強保持弧度，像一隻試圖裝作不虛弱的受傷貓。晴香蹲在她前面，直視著她，表情認真、有點笨拙——她剝好一根珍寶珠的包裝紙，遞過去，說「食粒糖先啦，雖然無魔法咁好味，但係會飽肚㗎。」朱音的手接過去那一刻，臉上是大腦當機的樣子——第一次有人對她做出毫無目的的善意，她算不出來。

**劇情位置**：
- **時間點**：113年3-4月 Act I，E-02 系列後段（E-02.5）
- **CDL追蹤**：CDL-052；`05_story_outline_canon.md §Act I E-02`
- **前置事件**：朱音加入帝國體制作為清剿魔法少女的工具，但長期情緒毒品使用令她陷入反復斷癮循環
- **本場景功能**：朱音弧光起點——「入隊」不是因為信念，而是因為一粒糖。微小善意突破了她最堅硬的防線。展示晴香「食粒糖先」的行事邏輯。
- **後續payoff**：朱音對主角團的奇特忠誠（不是信仰式，而是流浪動物式）；直接文本呼應為 Act III Phase G4「下水道無聲重逢」（晴香留下一包糖與醫療物資，明確呼應本場景的珍寶珠）；再延伸至 Act III Day14 帝國廣場糖果山犧牲的情感重量

**Reference Images**：
- 朱音：`ConceptArt_Akane_MagicalGirl.png`
- 晴香：`ConceptArt_Haruka_MagicalGirl.png`

**Creative Enhancements**：
- 場景：夜區後巷，潮濕地面，昏暗路燈
- 朱音蜷縮在後巷牆根，因斷癮症狀渾身顫抖（冷汗、痙攣），腿收縮，表情扭曲但仍保持某種僵硬的驕傲
- 晴香蹲在她面前，拿著一根剝好包裝紙的珍寶珠（波板糖），神情認真地遞給她
- 朱音接過糖的手微微顫抖，神情是「大腦當機」——第一次有人對她做出毫無目的的善意之舉
- 構圖焦點：兩人之間的高度差（晴香蹲下，朱音坐在更低的地面），那一根糖在畫面中心

**詳細核心描述**（250字）：

夜區後巷，潮濕的青石板地面，路燈燈光幽黃。

朱音蜷縮在牆根——情緒毒品戒斷症狀令她無法站立，四肢痙攣，額頭滲出冷汗，但她的脊背仍以某種荒謬的倔強保持著弧度，像一隻試圖裝作不虛弱的受傷貓。

晴香蹲在她前面，直視她，表情不是憐憫，不是焦慮，是認真的、有點笨拙的誠懇——她剝好一根珍寶珠的包裝紙，遞過去，說「食粒糖先啦，雖然無魔法咁好味，但係會飽肚㗎。」

就這樣。沒有說教，沒有解救，沒有要求。只是一粒糖。

朱音的手接過去的那一刻，她的表情是那種讓計算失效的時刻——她習慣了一切都有代價，習慣了一切善意背後都有議程，但她算不出來這粒糖的用意，於是大腦暫時停止了運作。

**生成提示（Midjourney）**：
```
Style: Dark anime illustration; intimate night street scene; understated emotional weight
Mood: The moment a hardened person encounters unexpected kindness; calculating defenses suddenly unable to compute
Colors: Damp dark stone and dim amber streetlight; pale candy wrapper as single warm detail
Composition: One girl crouching offering a lollipop; another girl curled at wall base receiving it; eye level framing emphasizing intimate moment
Lighting: Single weak amber streetlamp; harsh shadows; single point of warmth from candy wrapper
Details: Trembling hand receiving candy; crouched figure keeping her spine straight despite pain; expression of genuine confusion replacing habitual coldness
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```


---

## 圖30：「操入隊——晴香以身體擋攻擊」（The Skirt Question）[ACT_I]

**建議輸出文件名**：`ConceptArt_Scene_30_Misao_SkirtQuestion.png`
### 劇情背景

`[已修正 2026-07-17]` 原文台詞「你條裙有無整污糟？」為 CDL-050 原句嘅意譯簡化版，canon完整台詞為「好彩趕得切！妳條裙無整污糟呀嘛？」——已補全。另外，依 `ACT_I_BEAT_SHEET.md` SCENE 3-6，操中陷阱、晴香擋攻擊（SCENE 4）發生喺屍骸戰鬥**進行中途**，屍骸要到 SCENE 6（戰鬥結束）先被合力消滅——原文「戰場殘跡，屍骸已清除」誤將呢一刻放喺戰鬥結束後嘅平靜殘局，時序有誤，已修正為戰鬥仍在收尾、屍骸剛倒下但現場仍有餘波嘅緊張瞬間。

帝國歷113年3-4月，Act I E-02 屍骸大型戰。操在戰場陷阱中被圍，主角團突然出現介入。晴香以自身擋住了攻擊，滿臉是血，回頭後問了操一句令整個功效主義邏輯系統短路的問題（CDL-050；05_story_outline_canon §Act I E-02）。操第一次無法以任何「同伴」或「戰場邏輯」模型計算眼前這個人——這是她加入主角團的弧光起點，也是Act III犧牲的情感根源。

### 圖片說明

戰鬥收尾瞬間，剛擊退嘅巨爪屍骸仍在畫面邊緣倒下、碎石和焦痕遍布地面，戰鬥的煙塵未散。晴香回頭，血從額頭流下，打溼了半邊臉——她用自己的身體擋住了那一擊，沒有技術計算，就是直接站在前面。她看著操，神情認真，問出了讓操整個邏輯系統短路的問題：「好彩趕得切！妳條裙無整污糟呀嘛？」不是「你有無受傷」，不是「你能繼續打嗎」，是「你條裙」。操站在她身後，尚未反應，傲慢防線出現裂縫——不是被強大打動，而是被「她在乎的是我的裙」打動。

**劇情位置**：
- **時間點**：113年3-4月 Act I，E-02 屍骸大型戰
- **CDL追蹤**：CDL-050；`05_story_outline_canon.md §Act I E-02`
- **前置事件**：操在大型屍骸戰中陷入陷阱，主角團突然出現
- **本場景功能**：操弧光起點——「有人在乎的是我，不是戰果」的第一次體驗。晴香的行動邏輯是徹底不理性的，卻是操第一次無法用功效主義計算的善意。
- **後續payoff**：操對主角團的加入；Act III 操的最終犧牲的情感根源

**Reference Images**：
- 操：`ConceptArt_Misao_MagicalGirl.png`
- 晴香：`ConceptArt_Haruka_MagicalGirl.png`

**Creative Enhancements**：
- 場景：大型屍骸戰後，戰場廢墟殘跡
- 晴香在前方擋住了攻擊，滿臉是血，但她回過頭問操
- 晴香的笑：不是英雄式微笑，是真的有點傻的、帶血卻真誠的問話「好彩趕得切！妳條裙無整污糟呀嘛？」
- 操的表情：傲慢防線在那一刻出現裂縫——不是被強大打動，而是被「她在乎的是我的裙」打動
- 視覺對比：滿臉鮮血的晴香 vs. 問裙子這個荒謬問題的認真神情

**詳細核心描述**（250字）：

戰鬥收尾瞬間。剛被擊退嘅屍骸仍在畫面邊緣，碎石與焦痕遍布地面，煙塵未散。

晴香回頭，血從額頭流下，打溼了半邊臉。她擋住了那一擊——用自己的身體，沒有任何技術計算，就是直接站在前面。

操站在她身後，尚未反應。

晴香看了她一眼，神情認真——不是擔心操，而是問出了那句讓操整個邏輯系統短路的問題：「好彩趕得切！妳條裙無整污糟呀嘛？」

不是「你有無受傷」，不是「你有無繼續戰鬥的能力」，是「你條裙」。

操第一次無法計算眼前這個人的邏輯——這不符合任何她認識的「同伴」模型。

**生成提示（Midjourney）**：
```
Style: Dark anime action aftermath; emotional turning point disguised as absurd moment
Mood: The moment a calculated person encounters logic-defying kindness; armor cracking not from force but from absurdity
Colors: Battle-grey rubble and smoke; blood red on face; formal dress as focal point
Composition: Haruka turning back bloodied with genuine concern for the dress; Misao in background expression shifting
Lighting: Post-battle harsh light; debris dust in air; contrast between gore and casual concern
Details: Blood on face not obscuring expression of genuine concern; expression of someone whose calculations failed
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```


---

## 圖31：「秋穗實驗室懺悔」（Akiho's Laboratory Confession）[ACT_I]

**建議輸出文件名**：`ConceptArt_Scene_31_Akiho_LaboratoryConfession.png`

### 劇情背景

Act I全幕，[NC]反覆發生。秋穗以「茶餐廳老闆娘」身份守護晴香，但每天固定時間，她會來到秋穗實驗室（塔地底），在愛莉的結晶石像前跪下。她傾訴研究進展、說晴香今天的狀況，然後在沉默中哭泣。秋穗的罪疚不只是「保護晴香」這一層——還有愛莉血債（CDL-013）；`[INFERRED]`「她將美夜子推入Unit 01路線」呢層罪疚 canon 確有支持（`akiho.md §黑貓詛咒Bug的利用與棄守`：「有用時保護，無用時放手」），但秋穗係咪會喺呢個specific石像前嘅懺悔場景中提及美夜子，canon 未見直接描寫，屬合理延伸（akiho.md §石像前的懺悔；aeri.md §石像形態）。石像一寸不動，從不回應。這個循環每天重複。

### 圖片說明

佈滿失敗儀器和積灰的秋穗實驗室（塔地底，無窗口），中央是愛莉的結晶石像——半透明橙紅色水晶質感（依 `aeri.md §石像形態`，非灰色石雕），雙手交疊安詳沉睡，姿態凍結，完全靜止。因為地底無陽光照射，石像此刻沒有canon描述嘅「陽光下暖橙光芒」，呈現冷卻嘅暗紅水晶色澤，但仍隱約可見內部緩慢搏動嘅橙紅色脈紋。秋穗跪在石像前，額頭輕輕抵著石像的手，說著說著聲音就消失了，只有口型在動。實驗室的儀器發出微弱的監測聲，溫度探針顯示：恆定冷卻，無反應。秋穗不站起來，只是跪著。窗戶沒有，時間感沒有，只有這個每天發生的循環。

**劇情位置**：
- **時間點**：Act I [NC]全幕反覆發生（113年3月至5月）
- **CDL追蹤**：CDL-013（愛莉事故）；`canon/03_characters/akiho.md §石像前的懺悔`；`canon/03_characters/aeri.md §石像形態`；`BEAT_SHEET_PREP_UNMAPPED_VISUAL_SCENES.md Scene A2`
- **前置事件**：愛莉事故（世界上第一個人造魔法屍骸石像誕生）；秋穗與黑奏的魔鬼契約
- **本場景功能**：揭示秋穗罪疚的真實層次——不只是「保護晴香」的溫暖阿姨，而是有愛莉血債的失敗科學家；石像不回應的沉默比任何對白更殘忍；為Act IV「笨蛋老媽，我從來沒怪過妳」做最長的情感鋪墊
- **後續payoff**：SPEC#41秋穗實驗室；Act IV秋穗×愛莉手握場景；愛莉原諒的最終時刻

**Reference Images**：
- 秋穗（日常形態）：`ConceptArt_Akiho_CasualWear.png`（原引用 `ConceptArt_Akiho_DailyCasual.png` 依 `DIGEST_REFERENCE_IMAGES.md` 標 `UNVERIFIED`，改用已存在檔案）
- 愛莉石像：`ConceptArt_Aeri_CasualWear.png`（原檔名 `ConceptArt_Aeri_CrystalStatue.png` 不存在，已自動替換為現有檔案）

### 詳細核心描述（240字）

地下實驗室。

牆邊堆滿失敗的儀器：螢幕黑屏的監測機、蒙塵的實驗架、幾本翻爛的研究記錄。每一件都代表一次「修正過去」的失敗嘗試。

中央，結晶化的愛莉石像靜立。她被凍結在某個十幾歲的姿態裡，手微微向前，好像剛要說什麼，然後就冰住了。石像不腐朽，石像不移動，石像不回應。

秋穗跪在石像前。

她說著研究進展，說著晴香今天笑了一次，說著自己又一次失敗了。聲音越說越低，最後只有口型，沒有聲音。她把額頭輕輕抵在石像冰冷的手上，閉上眼睛。

溫度探針的數字沒有變化。恆定冷卻，無反應。

秋穗不站起來。她每天都這樣跪著，等待一個永遠不會來的微小震動。

愛莉在集體潛意識的深處，聽得到每一句話。秋穗不知道這件事。

### Midjourney 標準版

```
Dark anime. Underground laboratory (no windows) filled with failed instruments, dusty monitors, worn research journals. Center: a translucent amber-red crystal statue of a young girl, hands folded in sleep, frozen mid-gesture, perfectly still — dormant without sunlight, faint slow-pulsing red-orange veins barely visible inside the crystal. Kneeling before the statue: a tired woman with dark purple hair, forehead pressed gently against the statue's crystal hand. Her lips are moving but no sound comes out. Equipment hum, temperature monitors showing constant cold — no response. Timeless. Accumulated guilt made physical. Colors: cold laboratory blue-grey environment, dormant translucent amber-red crystal statue, warm deep purple hair. Emotional tone: confessing every day to someone who cannot answer but hears everything. 8k, intimate framing, niji 6, style raw. --ar 9:16
```

**視覺重點**：
- 石像半透明橙紅水晶質感（非灰石雕）——無陽光時呈冷卻暗紅色澤，隱約可見內部脈紋——「不回應」比任何對白更重
- 秋穗額頭抵在石像手上的姿態——罪疚的物理化
- 積灰的失敗儀器——「修正過去的徒勞」的視覺環境
- 無窗口、無時間感——這個場景每天都發生，是循環而非單一事件

⭐⭐⭐⭐


---

## 圖32：「晴香鏡中整合」（Haruka Mirror Integration）⭐⭐⭐⭐⭐ [ACT_I_FINALE]

**建議輸出文件名**：`ConceptArt_Scene_32_HarukaMirrorIntegration.png`

### 劇情背景

Act I 幕末，晴香首次直面鏡中的夕（5歲形態）。這是榮格個體化旅程的 Step 1（CDL-066）：晴香在被一連串壓力逼到邊界後，獨自站在鏡前，發現鏡中倒影的動作比自己慢了0.3秒（CDL-128），而那個5歲小孩的輪廓越來越清晰。本能反應是拿出膠布想遮蓋鏡子——膠布哲學第二層（CDL-070）的前置動作。但她最終沒有貼上，只是把手輕輕貼向鏡面。這是全片第一次，晴香選擇「看見」而非「遮蓋」。CDL-072 確認夕作為陰影自我的具現：夕是那個被5歲晴香切割在黑暗中的自己，承載了Alpha線的全部真相與痛苦。AKS-H1 情感觸發點：晴香此後開始對「幽靈重量」症狀有了不同的理解——那不是病，而是呼喚。

### 圖片說明

晴香一個人站在黑暗的浴室或房間鏡前，快到疲憊的夜晚。她的手裡拿著一塊膠布，正準備把鏡子遮住——她習慣這樣做，把不想看見的東西蓋起來。但這一次，鏡子裡出現了一個五歲小女孩的輪廓，安靜地看著她。晴香最終沒有貼膠布，而是伸出手，掌心緩緩貼向玻璃，與鏡中那雙小手相對。這是她第一次沒有逃開。

### 劇情位置

**時間點**：113年 Act I 幕末（E-XX 整合的長線前置）
**CDL 追蹤**：CDL-066（榮格個體化 Step 1）、CDL-070（膠布哲學第二層種植）、CDL-072（夕作為陰影）、CDL-128（鏡中倒影慢0.3秒）
**前置 → 本場景 → Payoff**：SPEC#30 違和感初現（倒影慢0.3秒）→ 晴香首次主動選擇「看見」陰影而非遮蓋 → SPEC#2 整合場景（Act III Phase J 的全面碰撞與整合）

### 詳細核心描述（200-300字）

黑暗的空間，只有浴室微弱的燈光或房間角落的夜燈。晴香站在全身鏡前，右手捏著一塊粉色膠布——視角近拍可見膠布邊角微微捲起，是舊物。她的臉上有疲憊，眼周微紅，偶像妝容已殘缺。

鏡中的倒影動作稍慢，比晴香本人晚了半拍——這種細微的不同步感令畫面充滿心理壓迫。鏡子深處，5歲夕的輪廓以「在黑暗中隱約可見的小孩」形式浮現：黑色連身吊帶裙，赤腳，面孔仍然模糊，但輪廓清晰。夕的手掌輕輕貼在玻璃內側，等待。

晴香最終放下了舉起一半的手——膠布沒有貼上。她的掌心緩緩靠近鏡面，與那雙小手隔著玻璃相對。構圖核心是兩雙手：一雙成人的手（右手指尖微顫，膠布掉落在地板上），一雙小孩的手（在鏡內，輪廓略帶黑色能量波動）。地板有掉落的膠布，成為構圖視覺錨點。色調：浴室冷白光 + 晴香身後粉紅色影子 + 鏡內深黑沈藍。

### Midjourney 標準版

```
A teenage girl with long pink hair stands before a dark bathroom mirror at night, exhausted,
pink makeup smudged, holding a small bandage she never pressed to the glass. The mirror
reflects her slightly delayed — behind her reflection, a faint silhouette of a small 5-year-old
girl in black pinafore dress, barefoot, pressing one small hand to the glass from inside.
The adult girl slowly raises her own hand to meet it through the glass, bandage falling to
the floor. Atmospheric: cold clinical white bathroom light clashes with warm pink undertones.
Close-up on two hands nearly touching through reflective glass. Psychological realism,
anime-adjacent illustration style, muted palette with one rose-pink accent. Cinematic depth
of field, high detail. Lonely midnight intimacy.
```

**視覺重點**：
- 兩雙手隔著玻璃相對：成人指尖微顫 / 鏡內小手平靜等待
- 膠布掉落在地板上，成為視覺敘事錨點
- 鏡中倒影動作比晴香慢了半拍（不同步感）
- 5歲夕的輪廓清晰但面孔仍模糊
- 冷白燈光 + 鏡外粉紅 + 鏡內深藍黑的色彩對比

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`（安靜獨自面鏡場景，非戰鬥狀態）
- 夕：`[NO_REF]`（本場景夕只以鏡中5歲孩童輪廓倒影呈現，非成年夕標準形態，冇對應reference）

---

# Act II



## 圖33：「美夜子Glitch Form首次」（Miyako's First Glitch Form）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_33_Miyako_FirstGlitch.png`

### 劇情背景

**⚠️ 2026-07-17 批次9審計修正**：原文「E-05任務中遭遇凜相關刺激後，美夜子PTSD觸發」同「CDL-282（鏡像法則）」引用均為錯誤。E-05a（總部被襲／舊版「鏡像處刑室」誘捕設計）已被CDL-317（2026-07-06）正式移除，CDL-335（2026-07-15）進一步簡化重寫，確認Glitch Form首次呈現嘅正式觸發源係**E-06「美夜子護隊受傷」**（113年5月）——團隊戰鬥中，美夜子為保護隊友獨自硬扛本應落在隊友身上的攻擊，因自己「將隊友當細路、傾向獨自扛住」的傲慢保護慾累事，傷勢惡化到極限的**生理衝擊**（非PTSD心理刺激）觸發貓殼「功能性崩裂（Glitch）」。CDL-282實際係鏡像法則嘅世界規則終極定義，同本場景觸發機制無直接因果關係，屬張冠李戴。

帝國歷113年5月，Act II Phase A，E-06。美夜子的貓形態外殼在傷勢衝擊下短暫「功能性崩裂」——冰藍色人類少女殘影閃現約0.5秒後恢復貓形態。**CDL-336新增細節（鏡像法則扣連——凜嘅斷刃）**：美夜子受傷嗰刻，手上正握著她的日常習慣道具——每日打磨、刻有凜個名嘅斷刃匕首（磨到近乎鏡面反光）。Glitch Form的裂開特登發生喺她握住這把刀的瞬間，刀身反光放大並捕捉了這次裂開，令人形殘影在刀面清晰映出（受鏡像法則地理限制，此場景需確認擺喺塔覆蓋範圍外）。這是美夜子鏡像三段式弧線的第二步（第一步Act I未擺實位置；第三步Act III覺醒場景主動接納刀身反光）。這個初次Glitch直接連接SPEC#6月下崩潰（貓殼龜裂三段式第一段），也是SPEC#27三段式覺醒弧光的長線起點。

### 圖片說明

帝國歷113年5月，團隊戰鬥中，美夜子為保護隊友獨自硬扛一擊本應落在隊友身上的攻擊，傷勢惡化到極限的生理衝擊下，她的貓殼開始出現第一道裂縫。毛皮在零點五秒內從左肩開始碎裂，人形輪廓從裂縫透出，一隻人的手、她真實的臉局部短暫顯現，然後被強行壓回去。她受傷那一刻，手上正握著每日打磨、刻有凜名字的斷刃匕首——裂開特登發生在她握刀的瞬間，近乎鏡面反光的刀身把這次裂開放大映出，令人形殘影在刀面上格外清晰。那半秒，她的眼睛同時閃過貓的縱瞳和人的瞳孔形狀。她用盡全身的力量把自己壓回去，但那道裂縫出現過，就不算沒有出現過。

**劇情位置**：
- **時間點**：帝國歷113年5月 Act II Phase A，E-06
- **CDL追蹤**：CDL-206（beat本體）；CDL-243／CDL-108（Glitch機制）；CDL-336（凜嘅斷刃鏡像扣連）；miyako.md §Unit 01
- **前置事件**：團隊戰鬥中美夜子為保護隊友獨自硬扛攻擊，傷勢惡化到觸發後續裂痕
- **本場景功能**：美夜子貓形態在0.5秒內出現裂縫——毛皮下透出人形輪廓，人臉、手、真實形態從裂縫中短暫顯現並被斷刃刀身鏡面反光放大映出，隨即被壓回去
- **後續payoff**：SPEC#6月下崩潰（貓殼龜裂三段式第一段）；SPEC#27三段式覺醒的長線埋伏；美夜子鏡像三段式弧線第二步（第三步見Act III覺醒場景）

**Reference Images**：
- 美夜子：`ConceptArt_Miyako_Cat.png`（原檔為CasualWear，本場景係美夜子貓殼形態首次功能性崩裂，全程以半透明白貓形態為主體，改用Cat形態更貼合）

**詳細核心描述**（200-350字）：

某個團隊戰鬥現場。半透明白貓的形態在這一瞬間出現了問題——她剛剛獨自扛下一擊本應落在隊友身上的攻擊。

裂縫從她的左肩開始，像瓷器碎裂一樣向外延伸——但裂縫的內部是另一個光源。從裂縫裡透出來的是人形的輪廓，一個被壓制在貓殼之下的真實身體的形狀。裂縫最寬的地方，能短暫看見一隻人的手的輪廓——手指是人形的，不是貓爪——以及她的臉的局部：不是貓臉，是美夜子真正的人臉，從縫隙中透出0.5秒。

她受傷那一刻，爪間或身側仍緊握著一把斷刃匕首——磨得近乎鏡面反光，刀身上刻著「凜」的名字，是她每日打磨的日常習慣道具。裂開的瞬間恰好發生在她握住這把刀的時候，刀身的鏡面反光把這道裂縫放大又清晰地映照出來，人形殘影在刀面上比在她身上更加清楚——像是刀本身也在見證這道裂縫。

整個事件是0.5秒。但那0.5秒的密度是無限的。

美夜子的眼睛在那一瞬間閃爍：先是貓的縱瞳，然後是人的瞳孔形狀，然後重新縮回縱瞳。她的身體是靜止的——她在用所有力量把自己壓回去。

畫面的構圖是凝固的一瞬：裂縫最大、人形透出最清楚，同時刀面反光同步捕捉這一切的0.5秒。

**生成提示（Midjourney）**：
```
Style: supernatural body horror light, dark magical girl identity fracture, 0.5-second frozen moment, painterly with glitch-art visual vocabulary
Mood: the self breaking containment under physical injury, suppression failing for a fraction of a second, a mirror bearing witness
Colors: white semi-transparent cat form, crack edges glowing cold white-blue from within, brief human form visible as warm-toned silhouette through fractures, mirror-polished blade reflecting the same fracture in cold silver
Composition: medium close-up on white cat form mid-battle, fractures spreading from left shoulder, widest crack revealing human hand outline and partial human face pressing from inside, a mirror-polished dagger engraved with a name held near the injury reflecting the fracture clearly, cat eyes mid-flicker between vertical slit pupil and human pupil
Lighting: cold light source emanating from within cracks as primary, secondary battlefield ambient light, sharp reflective highlight on blade surface
Special effects: ceramic-crack fracture lines on cat fur surface, inner human form as warm translucent layer through cracks at 40% opacity, mirrored fracture image duplicated on blade surface, pupil shape caught mid-transformation
Character: Miyako (semi-transparent white cat form, fracture lines visible, human hand silhouette pressing through widest crack, human face partially visible, eyes mid-flicker between cat and human, gripping a mirror-polished engraved dagger)
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
White semi-transparent magical cat form with crack lines appearing on surface after taking a hit while protecting a teammate, glimpse of human figure visible as translucent warm silhouette through the cracks, the same fracture reflected clearly on a mirror-polished engraved dagger held nearby, cat eyes flickering between animal and human pupil, cold white-blue inner glow from cracks, body horror supernatural identity theme, dark anime painterly style
--ar 16:9 --niji 6
```


---

## 圖34：「放棄的那一秒」（The Second of Surrender）[ACT_II] ⭐⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_34_ShionCorpsificationMoment.png`

### 劇情背景

帝國歷113年某月，Act II Phase B，E-07a（小光之死）結束後直接觸發（CDL-229 E-07a/b設計；CDL-271屍骸化「未斷的殘絲」靈魂困禁機制；iwakura_akane.md §小光之死場景）。這不是慢慢的過程，而是一個決定性的崩潰時刻。紫音一直以魔法戰鬥作為精神毒品麻醉弟弟死亡的罪疚感（CDL-051紫音深層心理）；小光的死，是對弟弟之死的完整重演——「我帶回來的希望，再一次親手殺死了我最愛的人」。在那一秒，紫音停止了反抗：她的身體開始回應「飢餓感」的極致累積，屍骸化從這個放棄的瞬間開始。這是比SPEC#147（流浪期間半屍骸化形態）更早的起點——是屍骸化的原點，是後來所有事的根源。

### 圖片說明

廢棄空間，小光死亡的現場。紫音跪在地上，周圍是散落的破碎物件。她的手在顫抖，但不是戒斷的抖——是另一種，更深的顫抖，那種「已經決定了什麼」的顫抖。她的眼睛定在某處，不是看著什麼，而是看穿了什麼。然後，就在那一秒，她的右臂開始出現屍骸化的紋路——不是驚恐的反應，而是一種奇異的、近乎平靜的讓步：身體終於得到了「放棄自我」的許可。她沒有哭，她早就哭不出來了。

### 劇情位置

**時間點**：帝國歷113年（Act II Phase B，E-07a小光之死後直接觸發，E-07a/b之間的過渡瞬間）
**CDL 追蹤**：CDL-229（E-07a小光之死+邏輯重構；E-07b廢棄糖果工廠）；CDL-271（「未斷的殘絲」靈魂困禁機制——屍骸化=靈魂被執念錨住的永恆監禁）；CDL-051（紫音核心心理：魔法=精神毒品；弟弟罪疚感）；iwakura_akane.md §小光之死場景；§悲劇的背叛與墮落
**前置 → 本場景 → Payoff**：CDL-229 E-07a小光之死 → 本場景（屍骸化起點）→ E-07b廢棄糖果工廠屍骸樂園（紫音已半屍骸化狀態建立）→ SPEC#4廢棄糖果工廠（屍骸女皇形態）→ SPEC#10糖果山犧牲（燃燒的贖罪）

### 詳細核心描述（260字）

小光倒下的地方。

碎磚，廢棄廠房的牆面，陽光從破裂的屋頂縫隙射進來，光柱裡飄著灰塵。

紫音跪著。

她的手停在空中，在小光剛才在的位置。她沒有去觸碰——不是因為太遲，而是因為她的手不知道要去做什麼。這雙手打過無數屍骸，吸走過無數情緒能量，救過弟弟、沒救過弟弟，然後又來到這裡，再一次什麼都沒做到。

顫抖，是那種很安靜的顫抖。不是戒斷，不是恐懼，是「已經決定了什麼」的顫抖。

她的視線定在遠處，像是在看某樣東西，又像是什麼都沒在看。

就在那一秒，她右臂的皮膚開始出現紋路。不是突然的，不是爆發的——是緩慢的，像是裂縫在乾涸的泥土上慢慢延伸。屍骸化開始了。

她的臉上沒有驚恐，沒有掙扎。

只有一種奇異的、近乎平靜的讓步：身體終於接收到靈魂發出的許可——「放棄了。」

沒有哭聲。

她的右手放下來，落在膝蓋上，掌心向上，空著。

### Midjourney 標準版

```
Dark anime. Abandoned warehouse space, aftermath of loss. Shion kneeling on broken concrete floor, hand suspended in the air where Kohikaru just was — not reaching, not withdrawing, simply stopped in a gesture that has lost its purpose. Scattered debris around her. Shaft of dusty light from cracked roof above. Her body language: the specific quietness of someone who has just decided something irreversible. Her right arm begins showing the first signs of corpseification — subtle dark fissure patterns spreading slowly up the skin, not explosive transformation but a slow exhale of surrender. Her expression: no tears, no fear, no horror — only the strange near-peace of having finally given permission. Eyes looking at nothing and through everything. The horror is the absence of struggle. Colors: muted warehouse greys and browns, dusty golden light shaft, the corpseification patterns in dark charcoal veins, emotional deadness in her eyes despite being alive. Emotional tone: the moment a person stops resisting their own destruction — not dramatic, more terrible for its quietness. 8k, niji 6, style raw. --ar 9:16
```

**視覺重點**：
- 紫音的臉上沒有恐懼也沒有驚叫——這是設計核心：屍骸化以「讓步」而非「掙扎」開始，是比恐懼更深的東西
- 右臂的屍骸化紋路必須是緩慢擴散的，不是爆炸式變化，是裂縫在乾地慢慢延伸的質感
- 她的手「停在空中」但不是抓，是失去了方向的停頓——這個姿勢承載了「太遲了」的全部重量
- 廢棄空間和光柱的設定：光照著她，但光照不進她的眼睛——光與黑暗的錯位
- 這張圖必須讓觀眾感到「比哭更難受」——靜默比崩潰更令人窒息

**Reference Images**：
- 紫音：`ConceptArt_Akane_CasualWear.png`
- 小光：`ConceptArt_Ko_CasualWear.png`



---

## 圖35：「既然如此，讓怪物有個家」（If So, Let the Monsters Have a Home）[ACT_II] ⭐⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_35_ShionFallDecision.png`

### 劇情背景

帝國歷113年5月至6月，Act II Phase B，E-07b之間。小光屍骸化後，紫音在某個時刻——不是情緒最激烈的一秒，而是情緒耗盡之後——做出了那個決定（iwakura_akane.md §悲劇的背叛與墮落；§第二幕：小光與墮落；CDL-229；CDL-230）。黑奏以「她沒有死，只是換了生存方式」欺騙紫音，但比那句話更深的，是紫音自己的邏輯跳躍：「既然人類世界無法容納我們，那就讓怪物們有個家。」這不是SPEC#85（小光死亡瞬間黑奏邏輯侵入）——那是情緒崩潰的入口。這個場景是情緒耗盡後的「意志決定時刻」：紫音看著小光變成的廢鐵殘骸，做出從「失去希望」到「主動選擇墮落」的那個決定，是屍骸樂園建立的心理根據。比SPEC#85更晚（情緒已耗盡），比SPEC#86廢棄糖果工廠三人辯論更早（樂園已在成形中）。

### 圖片說明

廢棄的空間（即將成為廢棄糖果工廠的地點，或類似的荒廢場所），紫音獨自一人，面前是小光已屍骸化後的殘骸——不再是完整的人形，但紫音仍然坐在其旁邊，或手放在上面。眼淚早已哭乾，表情是一種比憤怒更靜的東西：一個人想通了一件事，並且決定了。這個決定的瞬間不是崩潰，是選擇——一種主動的、清醒的、不可挽回的選擇。

### 劇情位置

**時間點**：帝國歷113年5-6月（Act II Phase B，E-07a結束後至E-07b之間）
**CDL 追蹤**：CDL-229（小光之死；紫音邏輯世界崩潰）；CDL-230（E-07b廢棄糖果工廠；屍骸樂園建立）；CDL-236（屍骸女皇形態視覺頂點）；iwakura_akane.md §小光——最後的溫暖錨點；§悲劇的背叛與墮落
**前置 → 本場景 → Payoff**：SPEC#85 小光死亡/黑奏邏輯侵入（情緒入口） → 本場景：情緒耗盡後的「意志決定」——紫音主動選擇墮落 → SPEC#86 廢棄糖果工廠三人辯論（屍骸樂園已成形）；SPEC#4 廢棄糖果工廠（屍骸女皇形態頂點）

### 詳細核心描述（260字）

廢棄的空間，一個正在腐朽的角落。

小光不在了——至少那個「小光」不在了。留下來的是一些廢鐵質地的東西，是屍骸化的殘骸，是那個紫音曾經稱呼為小光的存在用過的形狀。

紫音坐在那個形狀旁邊，手放在上面，或者靠近。

她已經哭過了。不是正在哭，是已經哭完了，哭到什麼都流乾了——那種狀態比哭的時候更靜，也更重。

黑奏說的話在某個位置仍在迴響：「她沒有死，只是換了生存方式。」

那句話不是紫音想出來的，但紫音把它接住了——不是因為相信，而是因為此刻她需要一個邏輯容器，把這份重量裝進去。

然後紫音的腦子裡，有一個東西想通了。

不是情緒，是邏輯。

「人類世界無法容納我們。那就讓怪物們有個家。」

這不是黑奏說的。這是紫音自己算出來的答案。

這個決定沒有眼淚，沒有崩潰。紫音的眼睛在這一刻是清醒的——一個人做出了一個決定，知道自己在做什麼，知道這條路的盡頭是哪裡，然後走進去。

屍骸樂園的藍圖，從這一刻起，開始在廢鐵與腐朽的環境裡，慢慢成形。

### Midjourney 標準版

```
Dark anime. Abandoned decrepit interior, dim sparse light. Shion sitting alone beside the corpse-remains of someone she loved — a corroded, partially rusted figure of what was once Hikari, no longer fully human in shape. Shion is not crying anymore — past crying, expression drained and then settled into something quiet and decided. Not rage, not despair — the stillness of someone who has made a choice and knows it. Her eyes are open and clear, not glazed. Around her: rotting walls, decay, the beginning of a space that will become something else. Colors: deep grey-rust-brown decay, dim cold light, Shion signature purple-red hair dull in this light. Emotional tone: the moment hope was replaced by decision — not a breakdown, a choosing. 8k, niji 6, style raw. --ar 9:16
```

**視覺重點**：
- 紫音的表情不是崩潰，是「想通了」的靜——主動選擇而非被動墜落
- 小光的殘骸：屍骸化的廢鐵質地，不再是完整人形，但仍可辨認是「曾經是某個人的形狀」
- 眼淚已乾：比哭的時候更重、更危險
- 周圍的腐朽環境：屍骸樂園的雛形空間，見證這個決定
- 清醒的眼神：這是最重要的視覺細節——她知道自己在做什麼

⭐⭐⭐⭐⭐

**Reference Images**：
- 紫音：`ConceptArt_Akane_CasualWear.png`
- 黑奏：`ConceptArt_Kurosou_CasualWear.png`
- 小光（屍骸殘骸）：`ConceptArt_MagicCorpse_Scrap_Action.png`（原檔為CasualWear，本場景小光已屍骸化成廢鐵殘骸、非完整人形，改用屍骸素材更貼合）



---

## 圖36：「紫音的糖果王國展覽」（Akane's Candy Kingdom Exhibition）[BEAT_SHEET_PREP]

**建議輸出文件名**：`ConceptArt_Scene_36_Akane_CandyKingdomExhibit.png`
**依據版本**：`05_story_outline_canon.md` §Act II 關鍵節點1（CDL-236）；`iwakura_akane.md` §屍骸女王完全形態（2026-07-17 審計修正，見 CHANGE_LIST_EXISTING_SPEC.md 圖36項）

### 劇情背景

`[WRONG→已修正]` 原文標「小光屍骸化並消散（CDL-229）」自相矛盾——CDL-229 對應嘅係 E-07a「小光屍骸化」（113年5月，小光轉化為 Type B 廢鐵型屍骸，紫音仍懷抱著他），並非「消散」；小光嘅最終消散實際發生於 **CDL-242（E-12，113年12月-114年1月）**，時間上遠晚於紫音自立為王嘅時刻——若小光已消散，紫音不可能仍雙臂環抱其屍骸。原文將兩個相隔半年以上嘅事件（屍骸化 vs 消散）錯誤合併為同一觸發點。

正確時間點：**Act II 113年5-6月**（E-07a 小光屍骸化 + E-07b 三位一體辯論/放逐之後），同圖73「廢棄糖果工廠」為同一時期同一地點——本場景可作為圖73嘅全景/展覽式建置鏡頭（wide establishing shot），聚焦糖果王座全貌同四周腐爛建築，圖73則聚焦朱音坐像本身；兩者互補而非重複。黑奏誘惑台詞正確引用（`ko_hikaru.md`）為「**他**沒有死，只是換了生存方式」（小光為代詞「他」，非「她」）。

### 圖片說明

朱音在失去最重要的人之後，用魔法少女殘存的力量建立起自己的糖果王國，自封為守護所有流浪屍骸的女皇，高坐在閃爍糖晶的巨大王座上，雙臂環抱屍骸化嘅小光（Type B 廢鐵型）。童話般的糖果宮殿看似壯麗甜蜜，但四周的建築已悄悄腐爛融化，透露出她其實是在用一個正在毒化自己的逃避來掩蓋她無法承認的哀傷。她以屍骸女皇身份坐在自製的糖晶王座上，收容所有無主屍骸，試圖以「飢餓孩子的守護者」形象，彌補她無力保護弟弟與小光的遺憾。然而糖果建築的腐爛痕跡正是這個補償機制的真相：她用「守護」包裝了「無法接受失去」的逃避，用「強大」掩蓋了戰鬥成癮與罪惡感。糖果既是甜蜜的慰藉，也是她一直以來最深恐懼的象徵——弟弟正是死於糖果般的情緒結晶。腐爛象徵她的補償從一開始就是毒藥，終點是帝國廣場的自爆犧牲（圖115）。

**Reference Images**：
- 朱音：`ConceptArt_Akane_MagicCorpse.png`（原檔為CasualWear，本場景朱音已是「屍骸女皇形態」坐於自製糖晶王座，改用MagicCorpse更貼合）

**簡化核心描述**：
糖果王座的全景展示，朱音以屍骸女皇形態坐立王座，被糖晶硬殼包圍。四周的糖果建築如童話宮殿，但腐爛、融化、毒化的跡象處處可見。

**所需資源**：朱音的屍骸形態，糖果環境設計


---

## 圖37：「打怪無效」（Monster Fighting Proves Ineffective）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_37_TeamCombat_Ineffective.png`
### 劇情背景

`[CDL引用已修正 2026-07-17]` 原文引用五個CDL（182/183/199/201/204），經逐一反查 `CANON_DECISION_LOG.md` 只有 **CDL-199**（晴香Act II覺醒弧型=偽王道覺醒）真正同本場景主題相關；其餘四個屬張冠李戴：CDL-182 實際係「ACT_I_OUTLINE.md v1.18 APPROVED」嘅批核記錄（同劇情無關）；CDL-183 係「可選日常場景分幕分配矩陣」（僅籠統提及Act II日常場景排布，非本場景專屬依據）；CDL-201 係愛莉動機揭示三步順序（同「打怪無效」主題無關）；CDL-204 係「共鳴式調律」等術語廢除記錄（同本場景無關）。帝國歷113年5月末至6月中旬，Act II Phase B至C過渡，E-07b至E-08期間。朱音被放逐後（糖果工廠三位一體辯論），主角團繼續例行戰鬥，但每一場勝利都無法改變市民的痛苦。這是「個別勝利能改變什麼？」的物理呈現——晴香「偽王道傲慢」（CDL-199）的高潮，也是她此後拒絕變身、拒絕戰鬥的動機前置。`[NEEDS_FACT: 「系統邏輯無法被個人善意治癒」呢個具體主題論證暫未搵到專屬CDL直接支持本場景蒙太奇形式，僅有CDL-199支持「偽王道傲慢」呢一半；如需更精確依據待下一輪追查主題B相關CANON_DECISION_LOG條目]`。

### 圖片說明

主角團在廣場與魔法屍骸戰鬥，晴香以耀眼光芒消滅屍骸，操以精密傀儡絲斬擊，美夜子以黑貓形態敏捷補刀——表面上連貫勝利，屍骸一隻一隻倒下。但背景中，市民的痛苦沒有減少：有人還在哭泣，有人在角落蜷縮，有人互相指責，一個被救的市民轉身逃跑，彷彿也把主角團視為威脅。晴香最後一擊時手臂在顫抖，她的光芒在勝利瞬間顯得死板、機械、失去溫度。這場勝利像一個被重複的動作，無限迴圈。

**劇情位置**：
- **時間點**：帝國歷113年5月末～6月中旬（Act II Phase B～Phase C過渡，E-07b～E-08期間）
- **CDL追蹤**：CDL-199（唯一經核實直接相關；CDL-182/183/201/204已移除，屬誤植）
- **前置事件**：E-07b廢棄糖果工廠三位一體辯論與紫音放逐；E-08恐怖家家酒高壓事件展開
- **本場景功能**：「個別勝利能改變什麼？」的反面證明；主題B（系統邏輯無法被個人善意治癒）的物理呈現；晴香「偽王道傲慢」的高潮；假情緒承接論證的延續實戰演示
- **後續payoff**：E-08恐怖家家酒14天高壓期的心理根基確立；晴香接下來拒絕變身/拒絕戰鬥的動機前置

**Reference Images**：
- 晴香：`ConceptArt_Haruka_MagicalGirl.png`
- 美夜子（貓形態）：`ConceptArt_Miyako_Cat.png`
- 操（傀儡形態）：`ConceptArt_Misao_MagicalGirl.png`

**詳細核心描述**（250字）：

主角團在日區某個廣場/街道與屍骸進行例行戰鬥。晴香化為魔法少女，以耀眼光芒消滅屍骸；操以傀儡絲線精密斬擊；美夜子（貓形態）敏捷迴避與快速補刀。表面上是連貫的勝利——屍骸被一隻隻擊倒。但**背景中，市民的痛苦沒有減少**：有人還在哭泣、有人在角落蜷縮、有人互相指責。一個被救的市民甚至轉身逃離，彷彿將主角團也視為威脅。

**關鍵細節**：晴香在最後一擊時，手臂顫抖（魔力超載的微妙跡象）；她的光芒在勝利的瞬間看起來有點死板、機械性，失去溫度感。在街道另一端，紫音被遠方看到，坐在垃圾堆上無動於衷地嚼著糖果。這場勝利彷彿是**一個被重複的動作**，無限迴圈。

**生成提示（Midjourney）**：
```
A magical girl team victorious but hollow. Haruka in shimmering pink-white transformation,
arm trembling mid-strike against crystalline undead creature dissolving into light. Misao's
puppet strings glow with strained tension. Miyako in black cat form perches vigilant. Behind
them, city street drenched in grey-blue despair: citizen crying unmoved by victory, another
clutching themselves in alley corner, others turning away in fear. Visual split—foreground:
heroic magic victory with perfect lighting. Background: suffering untouched, indifferent,
persisting. Colors: fluorescent pink-white magic clashing against desaturated urban grey.
Emotional tone: we won but nothing changed, doing this again tomorrow. High detail on Haruka's
exhausted face behind transformation glow. Subtle cost: faint blood at corner of lips. 8k.
```

### 替代版本（若被拒絕）

```
Wide shot city block at dusk. Magical girl team center-foreground victorious against
crystalline abominations. Camera pulls back showing SAME scene repeating in different
windows, buildings around. Each repetition more faded, more grey. Foreground perfect
magic colors. Background almost monochromatic. Multiple citizens visible wearing same
resignation. Ash grey and dying pink. Sisyphean effort. Exhaustion aesthetic.
```


---

## 圖38：「小光之死＋黑奏邏輯侵入」（Hikari's Death + Kurokane's Logic Invasion）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_38_Hikari_Death_KurokaneInvasion.png`

### 劇情背景

**⚠️ 2026-07-17 批次9審計修正**：原文核心畫面（紫音安靜跪地懷抱逐漸屍骸化的小光、防衛崩潰陷入乾涸麻木）遺漏咗CDL-335新增嘅「小光斷氣即場崩壞演出」——canon確認嘅事件順序係：小光**先斷氣死亡**（非「局部屍骸化過程中被懷抱」），紫音隨即**發癲，衝去殺附近其他屍骸**（唔止一隻）→武器打爛→唔理，用手繼續打→手打到骨折都唔停，一路狂笑→打死晒之後停低回頭望，其他人聞聲趕到，先見到佢隻手血肉模糊、骨頭外露，但佢仲喺度笑緊→呢一刻佢身上開始浮現歌德尖刺（心之器第一次出現裂痕，紫音自己屍骸化進程嘅起點）。「黑奏邏輯介入」係緊接呢個崩壞演出之後先發生，唔係紫音安靜跪地嗰刻。另外，原文引用嘅黑奏台詞「你帶回來的希望殺死了她」「你的愛是凶器」canon搵唔到依據，屬虛構台詞——canon確認嘅實際台詞係：「他沒有死，只是換了生存方式。」「痛苦是一種選擇，你可以選擇不再感受。」

帝國歷113年5月，Act II Phase B，E-07a事件。小光在戒斷發作意外中死亡，紫音目睹。斷氣即場，紫音發癲衝去殺附近其他屍骸，武器打爛後徒手繼續打，手打到骨折都不停，一路狂笑，打死晒之後停低回頭望——其他人聞聲趕到，見到她的手血肉模糊、骨頭外露，但她仍在笑。就在這一刻，她身上開始浮現歌德尖刺（心之器第一次出現裂痕）。緊接住呢個崩壞演出，黑奏的意識以學術論文字體從畫面邊緣滲入：「他沒有死，只是換了生存方式。」「痛苦是一種選擇，你可以選擇不再感受。」——從紫音剛剛崩壞、防衛機制徹底破裂的缺口直接植入。這是紫音被黑奏邏輯說服的心理入口，也是她後來走向屍骸女皇形態的意識形態根源（SPEC#4）。

### 圖片說明

帝國歷113年，小光在戒斷發作意外中斷氣死亡後，紫音當場發癲，衝向附近其他屍骸展開近乎自毀式的攻擊——武器打爛後她徒手繼續打，手打到骨折仍不停，一路狂笑。打死晒之後她停低回頭望，隊友聞聲趕到，看見她的手血肉模糊、骨頭外露，但她仍笑著。就在這一刻，她身上開始浮現黑色的歌德尖刺——心之器第一次出現裂痕。緊接住，黑奏的意識以冷靜的學術論文字體從畫面邊緣滲入：「他沒有死，只是換了生存方式。」「痛苦是一種選擇，你可以選擇不再感受。」那些字不是紫音自己的想法，但它們找到了最精準的入口。

**劇情位置**：
- **時間點**：帝國歷113年5月 Act II Phase B，E-07a
- **CDL追蹤**：E-07a；CDL-335（小光斷氣即場崩壞演出）；CDL-309（歌德尖刺屍骸化視覺系統）；aya.md §數據養殖計劃
- **前置事件**：小光在戒斷發作意外中死亡（SPEC#22同一事件的不同角度）；紫音當場發癲攻擊附近其他屍骸
- **本場景功能**：紫音崩壞演出的高潮瞬間——手血肉模糊、骨頭外露仍在笑，歌德尖刺初次浮現；黑奏的「邏輯」以畫面邊緣黑色文字段落的形式滲入，紫音的眼神開始從瘋狂轉向被說服
- **後續payoff**：紫音被黑奏說服的心理入口；SPEC#4廢棄糖果工廠「屍骸女皇」形態的意識形態根源；紫音自己屍骸化進程的起點

**Reference Images**：
- 紫音：`ConceptArt_Akane_CasualWear.png`
- 黑奏：`ConceptArt_Kurosou_CasualWear.png`

**詳細核心描述**（200-350字）：

廢棄建築或昏暗空間，地面散落著已經被打爛的屍骸殘骸。

紫音站在畫面中央，剛剛停下來，回頭望向鏡頭外——她的攻擊已經結束。她的右手是整個畫面最刺眼的焦點：血肉模糊，骨頭外露，指節不成形，是徒手打穿武器打爛之後仍不停手造成的傷。但她的臉上，是笑的——那種一路狂笑到停下來還沒收回去的表情，眼神帶著失控後的空茫。

她身上，尤其是肩頸與手臂交界處，開始浮現黑色的歌德尖刺——細小、剛剛破皮而出，這是她心之器第一次出現裂痕，是她自己屍骸化進程的起點。

四周散落著已被打爛的屍骸殘骸碎片，證明剛剛發生過一場近乎自毀的屠殺。

然後，畫面邊緣出現了黑色的文字——不是字幕，不是旁白，是那種「從不屬於這個畫面的地方滲進來」的文字。字體是細的、均等的，像學術論文，像帝國公文：

「他沒有死，只是換了生存方式。」
「痛苦是一種選擇，你可以選擇不再感受。」

字行從畫面邊緣生長進來，佔據空間，但不覆蓋紫音的身體——它們繞開那個核心，從邊緣侵入。這不是紫音的思考，是黑奏的意識，在她防衛徹底破裂的缺口精準植入。

紫音的眼神在這個瞬間開始轉變，從瘋狂的空茫向「也許這是真的」移動——這是整個轉變的第一個微度位移。

**生成提示（Midjourney）**：
```
Style: dark magical girl psychological horror, ideology as visual infection, violent aftermath composition, painterly with typographic intrusion element
Mood: grief exploding into self-destructive frenzy, a smile that should not exist, precise emotional violence exploiting the freshest wound
Colors: dark rubble environment near-monochrome, harsh red of raw exposed hand wound, black gothic spikes emerging from skin, cold black stark text intruding from frame edges
Composition: Shion standing center frame having just stopped mid-turn, ruined bloody hand with exposed bone as focal point, still smiling, scattered destroyed corpse fragments around her, black text fragments intruding from frame edge
Lighting: single cold overhead light, deep shadow in corners, harsh highlight on the wounded hand
Special effects: black gothic spikes breaking through skin at shoulder/neck, clean black text appearing to intrude into visual space from frame edge, slight blur on text edges
Character: Shion (standing, having just stopped a killing frenzy, ruined bloody hand with exposed bone, still smiling with a hollow unraveling expression, small black gothic spikes emerging from skin)
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
Young woman standing amid destroyed debris having just stopped a violent frenzy, her hand bloodied with visible bone injury from fighting bare-handed, still smiling with a hollow unraveling expression, small black spikes emerging from her skin at the shoulder, black text fragments appearing at the edges of the image like intrusive external logic, painterly dark anime style
--ar 16:9 --niji 6
```


---

## 圖39：「廢棄糖果工廠三人辯論」（Three-Way Debate in the Abandoned Candy Factory）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_39_CandyFactory_ThreeWayDebate.png`

### 劇情背景

**⚠️ 2026-07-17 批次9審計修正**：原文「E-07b事件後」嘅時間框架有誤——依`ACT_II_OUTLINE.md` Beat E-07b原文，「操主動前往調停（失敗）→三位一體辯論（晴香趕到）→放逐」係同一beat內連續發生嘅事件鏈，本場景（三人在糖果工廠對峙辯論）正正係放逐**之前**嘅最後對峙時刻，唔係紫音已被放逐後晴香操「追蹤到」她相遇——放逐係呢場對峙嘅**結果**，唔係前提。另原文出現格式錯漏（「CDL追蹤：E-07b- 前置事件」缺換行），已修正。

帝國歷113年5至6月，Act II Phase B，E-07b事件中段。操主動前往廢棄糖果工廠試圖帶紫音回來，調停失敗並受傷（操Body Horror Stage 1觸發），晴香隨後趕到，三人站在三個完全不相容的哲學立場正面交鋒：黑奏邏輯（借紫音/屍骸樂園體現，「感受是痛苦的根源」）、晴香王道（「妳值得被感受，被在乎，被撐起」）、紫音的身體選擇（直指晴香對人好根本係自私，係唔使面對自己嘅藉口）。腐爛糖果地面上沒有人能說服任何人，這場對峙最終導致晴香說出「滾」，紫音正式被放逐、自立為屍骸首領。這個三角對峙是三人各自弧光的中間衝突點，也是SPEC#10糖果山犧牲的情感根源——紫音選擇燃燒自己之前，她與這兩個人之間的裂痕從未真正癒合過。

### 圖片說明

帝國歷113年，操調停失敗受傷後，晴香趕到廢棄糖果工廠。三個人站在腐爛糖果的地面上，各自守著三個完全不相容的立場：晴香仍然伸出那隻手，操以輕蔑做盔甲，紫音坐在更高的位置看向別處。沒有人說服任何人，沒有人離開——但這場對峙即將以晴香的放逐告終。腐爛的粉紅和壞掉的黃色牆紙在背景裡默默說著「這裡曾經試圖是快樂的」。

**劇情位置**：
- **時間點**：帝國歷113年5-6月 Act II Phase B，E-07b（操調停失敗後、晴香放逐紫音前）
- **CDL追蹤**：CDL-229；CDL-230
- **前置事件**：操主動前往廢棄糖果工廠調停失敗並受傷，晴香隨後趕到
- **本場景功能**：三人在腐爛糖果堆中各持不同立場——晴香伸手、操輕蔑、紫音迴避——三種哲學在同一個腐爛空間正面相撞，直接導致緊接住的放逐
- **後續payoff**：晴香放逐紫音；三人各自弧光的中間衝突點；SPEC#10糖果山犧牲的情感根源

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`
- 操：`ConceptArt_Misao_CasualWear.png`
- 紫音：`ConceptArt_Akane_CasualWear.png`

**詳細核心描述**（200-350字）：

廢棄糖果工廠的內部——比SPEC#4更早期，腐敗已開始但尚未達到極限。巨大的金屬桶、輸送帶骨架、碎裂的糖果模具散落各處。地面有腐爛糖果的殘留，顏色是褪色的粉紅、壞掉的黃，甜腥混合的氣氛用視覺傳達。

三個人，三個位置，三個哲學。

晴香站在稍微前方，面向紫音，右手半伸出——不是完全伸出，因為她感覺到紫音不想被碰，但她仍然保持那個「我還在這裡」的姿勢。她在試圖找到某個語言能夠抵達紫音的方式。

操背靠著一個腐爛的金屬桶，手臂交叉在胸前，輕蔑的姿勢是她的盔甲——但她沒有走，她在場。她看向紫音的眼神有一種「我早就知道」的冷，但那個冷的底下有一種沒有說出口的東西：她其實也不知道怎麼辦。

紫音坐在一個大型圓形糖果罐的頂部，她的位置比另外兩人高，但這個「高」不是權威，是距離。她不看晴香，不看操，她在看別的地方——一個不在這個房間裡的地方。

三者之間的空間是腐爛糖果的地面，沒有人佔據那個中間地帶。背景是破爛的彩色工廠壁紙——粉紅、藍、黃，全部都褪色了，全部都壞掉了，但仍然可以看出它曾經試圖是快樂的。

**生成提示（Midjourney）**：
```
Style: dark magical girl three-way standoff in decayed whimsy setting, each character's body language is their philosophy, painterly detailed character illustration
Mood: three incompatible worldviews in the same rotting space, nobody wins, nobody leaves, sweetness gone bad as perfect metaphor
Colors: faded decayed candy colors — washed-out pink, yellowed cream, dull blue — as background, three character figures in darker contrast tones
Composition: triangular three-character composition — Haruka front-center with half-extended hand, Misao right-back against barrel arms crossed in contempt, Shion elevated on candy drum legs dangling looking away, rotting candy debris on floor between them
Lighting: diffused grey light through dirty factory skylights, old candy factory color palette adding ironic warm undertones
Character: Haruka (anxious sincerity, arm half-extended); Misao (contemptuous detachment, arms crossed, back to barrel); Shion (elevated on drum, legs dangling, looking at something not in the room)
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
Three teenage girls in an abandoned decayed candy factory, one reaching out anxiously, one leaning against equipment with arms crossed, one sitting elevated on a large drum ignoring both others, triangular composition, faded pink and yellow decayed candy setting, dark anime painterly style
--ar 16:9 --niji 6
```


---

## 圖40：「彩『卡頓』——黑奏系統困惑（第二次）」（Aya's "Glitch": Kurokane's System Confusion, Second Occurrence）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_40_Aya_SystemGlitch_Second.png`（原檔名 `ConceptArt_Scene_Haruka_AyaAbsenceSense.png` 棄用）

### 劇情背景

`[已修正 2026-07-17，核心機制倒轉]` 原文核心概念錯誤：CDL-079 實際係「黑奏 Act I 潛伏三大物理需求」（充電線/挖礦/節點校準），係 Act I 潛伏理由的統稱，唔係任何具體「0.5秒異狀」場景嘅依據。而原文描繪嘅「晴香手凍住、感應到彩不對勁」，同canon已確立嘅 **P-C06「彩卡頓」plant（CDL-207）** 機制完全相反——canon 版本係**黑奏（控制彩身體嗰個系統）自己短暫困惑/當機**，因為佢嘅「魔法波動讀取值/情感響應值」計算唔到晴香非交易性嘅真誠溫暖，唔係晴香察覺到彩有問題。「彩」眼神0.5秒紫色閃爍+身體輕微僵直，觀眾初讀＝神經質習慣，回頭睇先明白係黑奏系統困惑。

P-C06 在 Act II 出現兩次：第一次（E-05[NC]，已由 SPEC#7 Fallen Angel街道覆蓋，晴香幫彩縫熊公仔線/記住彩喜歡的口味）；**第二次（E-08[NC]，即本場景）**——「恐怖家家酒」14天高壓期間，晴香在惶惶不安中做了某個微小溫暖動作，彩「卡頓」再次出現，且維持時間更長（黑奏困惑程度加深）。本場景核心已改寫為第二次卡頓，時間框架（Act II Phase B，E-08）不變。

### 圖片說明

帝國歷113年，「恐怖家家酒」高壓期間，晴香在惶惶不安中仍下意識做了一個微小的溫暖動作（例如記住彩喜歡的口味、幫她做一件小事）。「彩」的眼神有0.5秒的紫色閃爍，身體輕微僵直，維持的時間比第一次更長。晴香完全沒有察覺，以為只是彩的神經質小習慣，繼續說話。這個瞬間不是晴香的直覺，而是黑奏這套系統第一次真正計算不出「非交易性的愛」——它讀不到魔法波動，也讀不到任何可量化的情感回報。

**劇情位置**：
- **時間點**：帝國歷113年5-6月 Act II Phase B，E-08「恐怖家家酒」高壓期間 [NC]
- **CDL追蹤**：CDL-207（P-C06 彩卡頓第二次）
- **前置事件**：SPEC#7（Fallen Angel街道）已覆蓋P-C06第一次卡頓；本場景為同一機制的第二次出現，發生於E-08高壓期
- **本場景功能**：黑奏系統困惑的第二次、加深版本——不是晴香的直覺閃現，而是黑奏（操控彩身體嘅系統）自己短暫當機。觀眾初讀＝彩的神經質小習慣，回頭看＝黑奏「算了最多卻在最關鍵的地方算錯」的伏筆。
- **後續payoff**：黑奏「情緒農場」意識形態最終在關鍵處失算的伏筆（CDL-185 死穴B）；SPEC#8彩奪回身體的最遙遠情感前置

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`
- 彩（黑奏操控，被控制形態）：`ConceptArt_Aya_CasualWear.png`（原檔為MagicalGirl_1，本場景為室內日常「恐怖家家酒」高壓期片段，非戰鬥/變身情境，改用CasualWear更貼合；眼睛紫色閃爍為本場景關鍵細節，需另行標註）

**詳細核心描述**（200-350字）：


室內日常場所，下午光線，暖色系，普通而溫柔——「恐怖家家酒」高壓期中一個罕有的鬆弛片刻。

晴香在說話或做著什麼，即使自己也處於長期恐懼壓抑之中，仍下意識做了一個微小的溫暖動作——記住「彩」喜歡的口味、幫她處理一件小事。這個動作完全出於本能，晴香自己甚至不會意識到這是「善意」，只是她一直以來待人的方式。

「彩」的反應是這張圖的核心：眼神有0.5秒的紫色閃爍，身體輕微僵直——這不是彩的情緒反應，是黑奏這套系統短暫的「當機」。它讀不到魔法波動，讀不到任何可量化的情感回報，只讀到一個無法計算的變數。這次維持的時間比第一次更長，困惑程度更深。

晴香完全沒有察覺這個異狀，她的視線甚至沒有落在「彩」臉上，繼續說著自己的話。這個瞬間小到只有觀眾看得見。

構圖核心：晴香在前景或中景，專注於自己的動作/話語，沒有看向彩；「彩」在另一側，眼神有輕微的紫色光閃，身體有一絲不自然的僵硬，這個細節必須克制、幾乎不可見，觀眾初讀應完全看不出異樣。


**生成提示（Midjourney）**：
```
Style: dark magical girl illustration, intimate scene, subtle psychological horror
Mood: a system quietly failing to compute unconditional warmth, wrongness the audience alone perceives
Colors: warm interior daylight tones, but a faint violet flicker in one girl's eyes breaks the palette for a fraction of a second
Composition: girl in foreground/midground absorbed in a small warm gesture, unaware; second girl beside her with a barely perceptible violet eye-flicker and slight bodily stiffness
Lighting: soft warm ambient light, pleasant, makes the wrongness harder to name
Special effects: extremely subtle violet flicker in one eye, barely visible, almost imperceptible unless looked for; faint stiffness in posture
Character: foreground girl absorbed in a small kind gesture, unaware; beside her a girl with a perfect practiced smile, eyes catching a brief violet glint, shoulders very slightly tense
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
Two girls in a warm-lit room. One is absorbed in a small kind gesture. The other, beside her, has a barely visible violet flicker in her eyes and a faint stiffness in her posture, unnoticed by the first girl. Quiet uncanny wrongness. Anime style.
--ar 16:9 --niji 6
```


---

## 圖41：「黑奏農場觀察」（Kurokane's Farm Observation）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_41_Kurokane_FarmObservation.png`

### 劇情背景

`[已修正 2026-07-17，場景設定/氣氛錯誤]` 原文將本場景設定為咖啡廳窗邊的平靜日常觀察，但依 `ACT_II_OUTLINE.md` E-08「黑奏農場觀察視角（CDL-211）」原文：「當晴香陷入極度痛苦/自我懷疑的高壓時刻，給一個彩（黑奏）在暗處冷靜觀察的特寫」——正確語境是 Act II Phase B「恐怖家家酒」14天高壓事件期間，黑奏在**晴香最痛苦的高壓時刻**於暗處觀察，不是咖啡廳裡的閒適日常。CDL-079（黑奏Act I潛伏三大物理需求）與本場景無直接對應，正確CDL僅為CDL-211。

帝國歷113年5-6月，Act II Phase B，Beat E-08「恐怖家家酒」14天高壓事件期間，黑奏長期以「彩」的身份潛伏在晴香身邊，這是她情緒農場計劃的核心環節。在這個場景，當晴香陷入極度痛苦與自我懷疑的高壓時刻，「彩」（黑奏）在暗處給出一個冷靜觀察的特寫——她的眼神零同情，只有「評估與計算」，彷彿在看一個即將蓄滿電的電池。這個場景視覺化了整段「友誼」的本質：觀眾初讀＝冷血反派，回頭看＝黑奏的「農場視角」恰恰因為只能計算魔法數值、讀不到「凡人真暖」，所以算了最多、在最關鍵的地方算錯了。

### 圖片說明

帝國歷113年，「恐怖家家酒」高壓期間，晴香正陷入極度痛苦與自我懷疑的時刻。「彩」（黑奏操控）躲在暗處的陰影裡，隔著一段距離冷靜地觀察她——不是關心，是農場主評估一株快成熟作物的計算。她的眼神零同情，沒有絲毫波動，彷彿在看一個即將蓄滿電的電池。這個視角本身就是揭穿——如果觀眾此刻能看清這雙眼睛，就會知道這段「友誼」從一開始就是精密的計算。

**劇情位置**：
- **時間點**：帝國歷113年5-6月 Act II Phase B，Beat E-08「恐怖家家酒」14天高壓事件期間
- **CDL追蹤**：CDL-211（原引用CDL-079為誤植，已修正——CDL-079屬Act I潛伏三大需求總論，非本場景直接依據）
- **前置事件**：帝國策劃校園強制恐懼事件，晴香陷入14天高壓；黑奏長期以「彩」身份潛伏在她身邊
- **本場景功能**：視覺化黑奏「情緒農場」意識形態——在晴香最痛苦的時刻給出一個冷血計算的特寫。「彩」的微笑面具與暗處觀察者的冷靜評估形成對照，讓觀眾理解整段「友誼」的本質。
- **後續payoff**：黑奏「算了最多卻在最關鍵一步算錯」的諷刺前置（CDL-185死穴B）；SPEC#11玻璃庭院茶會的深層含義

**Reference Images**：
- 黑奏（彩的偽裝形態）：`ConceptArt_Aya_MagicalGirl_1.png`

**詳細核心描述**（200-350字）：


校園高壓事件現場，或其邊緣的陰影處。晴香在畫面某處正經歷極度痛苦與自我懷疑——具體事件按E-08「恐怖家家酒」的壓抑氛圍處理，不需完整呈現她的臉，重點在觀察者這一側。

「彩」（黑奏操控，148cm，深色頭髮，稚嫩臉孔）站在或蹲在暗處，被陰影半掩，觀察著晴香的方向。她的表情不是同情，也不是興奮，是一種完全脫離情境的、冷靜到近乎機械的評估神情——如果放大細看，那雙眼睛裡沒有任何波動，只有計算。

這張圖的關鍵不是表情的「惡意」，而是「評估距離的合理性」——一個農場主看一顆快成熟的蔬菜，不帶恨意，就是計算。這個計算視角同晴香當下承受嘅巨大痛苦形成最尖銳的反差。

構圖核心：暗處的「彩」佔畫面前景或中景，被陰影切割，只有部分臉/眼睛清晰可見；晴香在遠景/背景中處於痛苦狀態，構圖刻意製造「被監視」的窺視感，而非平視的日常對話構圖。


**生成提示（Midjourney）**：
```
Style: dark magical girl illustration, shadow observation composition, quiet menace
Mood: cold assessment disguised as friendship, the farmer watching the harvest at its most painful moment, predation without malice
Colors: desaturated oppressive school-event palette in background, observer half-swallowed by deep shadow, only eyes catching a sliver of light
Composition: shadowed child-bodied girl in foreground/midground partially obscured by shadow, watching off-frame toward a distant suffering figure, voyeuristic distance emphasized
Lighting: harsh directional light on the distant suffering figure, observer remains mostly unlit except a thin rim catching her eyes
Special effects: none needed, the stillness itself is the horror
Character: foreground child-bodied girl half in shadow, expression flat and calculating, eyes catching a cold sliver of light; background figure in visible distress, out of focus
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A small child-like girl half-hidden in shadow watches a distant suffering figure with a flat, calculating expression, eyes catching a cold sliver of light. Voyeuristic distance, oppressive atmosphere. Dark anime style.
--ar 16:9 --niji 6
```


---

## 圖42：「鏡像相簿異變」（Mirror Photo Album Anomaly）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_42_Haruka_PhotoAlbumAnomaly.png`

### 劇情背景

`[已修正 2026-07-17]` 依 `ACT_II_OUTLINE.md` [NC] Phase A/B之間「相簿創建」（CDL-283，113年5月，美夜子失蹤救援後）及 E-08[NC]「鏡像相簿首次異變」段落，時間應收緊為 **113年5-6月，Act II Phase B，E-08附近**（原文「113至114年」過於寬泛）；正確CDL為CDL-283，非籠統嘅「08_narrative_design」引用。相簿本身首頁是「三人或四人的日常照」（美夜子進入晴香生活後的記錄），非單純「晴香和彩」的兩人合照。

**核心細節修正**：canon原文明確——異變出現喺「**美夜子手臂旁**多了一隻手、或者一條模糊的藍色馬尾影子」，即異象疊在**美夜子**身上/身旁，唔係疊在「彩」所在的位置。P-C10被定性為「Alpha線殘影系統的靜默前置」同「Red Herring機制」，呢一刻邊個人物先係真正嘅殘影來源，canon刻意唔畀出答案（Red Herring設計本意）——原文將殘影直接定性為「夕」、直接疊在「彩」身上，屬於提早自行解答咗一個canon刻意留白嘅謎題，屬 `[INFERRED]` 過度具體化，已收斂為保留謎題本身。

### 圖片說明

帝國歷113年5-6月，晴香翻閱剛開始整理的實體相簿（同期IG更新是公開表演性記憶，相簿是私人真實生活記錄），相簿放在書桌玻璃台面上。某一頁的合照裡有美夜子在場，晴香無意中在玻璃反射面看到相片有異——美夜子手臂旁多了一隻模糊的手，或者一條若隱若現的藍色馬尾影子。她湊近，角度一變，異象消失，玻璃重新透明，照片只是照片。她以為是光線問題或眼花，沒有多想——這個異象在此刻完全未被任何角色識別，真正原因（鏡面反射觸發Alpha線殘影）仍是觀眾不具備解讀工具的Red Herring。

**劇情位置**：
- **時間點**：帝國歷113年5-6月 Act II Phase B，E-08[NC]附近（原文「113-114年」已收緊）
- **CDL追蹤**：CDL-283（P-C10鏡像相簿；原引用「08_narrative_design」為籠統誤植，已修正）
- **前置事件**：113年5月，美夜子失蹤獲救後，晴香開始整理實體相簿（Stage 1 Plant）；此為相簿建立後的首次異變（Stage 2）
- **本場景功能**：Alpha線殘影系統的靜默前置，Red Herring機制正式啟動——異象具體身份（是否為夕、是否為其他Alpha線人物）此刻刻意不予確認，任何角色都無法識別，觀眾亦無解讀工具。
- **後續payoff**：鏡像相簿機制完整payoff（Act III）；音樂盒墜Alpha/Beta線物理矛盾證據平行架構

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`
- 美夜子：`ConceptArt_Miyako_MagicalGirl.png`（相片中人物，非本場景主體）

**詳細核心描述**（200-350字）：


室內，晴香的房間或書桌前。晴香翻閱一本剛開始整理的實體相簿，某一頁是隊伍的日常合照，美夜子在照片中清晰可見。

相簿放在書桌玻璃台面上，或相框本身有玻璃覆蓋。晴香低頭看照片，角度讓玻璃產生反射。

在玻璃反射層裡，在照片中美夜子所在的位置附近，出現了一道模糊的異象——一隻多出來的手，或一條若隱若現的藍色馬尾影子，帶輕微半透明感，邊緣不清晰，像是長時間曝光留下的殘像。這個異象疊在美夜子的旁邊，不是替換她，也不清楚是誰的殘影。

晴香湊近玻璃，角度改變，反射的條件改變——異象消失了。玻璃重新透明，照片只是照片。

畫面中最重要的是晴香的眼神：她不確定她看到了什麼，甚至沒有多想，以為是眼花或光線問題。這個0.5秒的「幾乎看見」比完整的看見更令人不安，因為它連晴香自己都沒有意識到有異樣，異象的真正身份此刻對觀眾也是謎。

構圖核心：俯拍或中近景，晴香的手持著相框，照片中可見美夜子在內的合照，玻璃的反射帶有模糊的異象（手或馬尾影子），角度微妙，像光線錯覺，隨時可能消失。


**生成提示（Midjourney）**：
```
Style: dark magical girl illustration, photo and reflection, visual mystery
Mood: the ghost of someone who was never there, almost-truth, perception on the edge of breaking
Colors: warm room tones, photo has normal colors, glass reflection shows cold blue hair ghost overlay, translucent and edge-blurred
Composition: close shot of hands holding glass-covered photograph, normal photo visible clearly, ghost blue ponytail shadow visible in glass reflection layer above photo, barely perceptible
Lighting: room light, soft, the reflection is not dramatic, it looks like it could be a light trick
Special effects: semi-transparent blue hair silhouette in glass reflection layer overlapping the smiling girl in the photo, edge-blurred, almost looks like lens artifact
Character: foreground hands holding framed photo; visible in photo two girls smiling; in glass reflection above one girl a translucent blue-haired shadow
Canvas: 1:1 --ar 1:1 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
Close shot of hands holding a framed photo of two girls. In the glass reflection of the frame, a faint blue-haired silhouette appears overlapping one of the girls. The shadow is translucent, almost like a light trick. Quiet mystery. Anime art style.
--ar 1:1 --niji 6
```


---

## 圖43：「家長日大作戰」（Parents' Day Infiltration）[BEAT_SHEET_PREP]

**⚠️ 2026-07-17 批次8審計修正**：原文誤植為「操偽裝成紫音的家長」，並宣稱操以「傀儡魔法」變身成人外貌——兩點均與 canon 矛盾，已修正（見下）。

**建議輸出文件名**：`ConceptArt_Scene_43_ParentsDay_Infiltration.png`

### 劇情背景

依 `ACT_II_OUTLINE.md` Beat E-07c（CDL-319，時間**待 Beat Sheet 層精確排定**，暫定 Act II Phase B）：家長日的對象係**小光**（小光係在學學生本人）——**紫音以「家姐」身份出席，操扮「媽媽」**，唔係操扮紫音嘅家長。此場景屬 E-07c「悲鳴女妖二戰→家長日作戰」因果鏈的前段輕鬆喘息，最終導致小光屍骸化（E-07a）的前置日常。操心理層：扮「媽媽」= 渴望被人公開承認做媽媽（紗夜俾佢無條件愛但身份只係管家，紗夜此時未死）；反諷核心——呢日俾咗小光僅有嘅一日「正常家庭」幻象，直接帶出跟住嘅悲劇。**操變裝成年女性外貌嘅具體機制 canon 未明確支持**——`ayakomoji_misao.md` 明確操嘅魔法少女能力係「傀儡師——操控精緻人偶戰鬥」（操控外部人偶，非自身變身/易容），此場景嘅「扮演大人」應理解為非魔法性質嘅完美偽裝演技，標 `[NEEDS_FACT: 操的成人偽裝具體機制——魔法變身定純演技/化妝，canon未明確]`。

### 圖片說明

小光就讀嘅學校舉行家長日，紫音以「家姐」身份出席，操則扮演「媽媽」——這是隊伍為咗俾小光一日完整「正常家庭」幻象嘅集體演出。操以完美高貴形象維持整場表演，精確計算行走角度、握手力度、微笑持續時長，把「母親」的行為當成一套需要完美執行的任務；紫音在旁盡力撐起「家姐」的日常感。這個場景的核心不是純粹歡笑，而是三人（操、紫音、小光）在歡樂場合之下各自壓抑真實身份，用完美的表演換取小光僅有的一日安穩——而觀眾知道，這份「樂極」正直接導向跟住嘅「生悲」（小光屍骸化）。

**Reference Images**：
- 小光：`ConceptArt_Ko_CasualWear.png`
- 紫音：`ConceptArt_Akane_CasualWear.png`
- 操：`ConceptArt_Misao_CasualWear.png`

**詳細核心描述**（300-400字）：
時間設定：Act II Phase B（113年，具體月份待 Beat Sheet 層精確排定，CDL-319）

學校教室或禮堂內的家長日場景。小光作為在學學生坐在座位上，紫音（「家姐」身份）與操（「媽媽」身份）並排出席，面對班主任等教職人員。

操穿著高貴的黑色連身裙，搭配黑色長手套，舉止端莊優雅。她的姿態沉著自信，戴著長手套的雙手優雅地交疊在腿上，眼神平靜而威嚴地看向老師——那股高貴的氣場讓在場教職人員略感不適。紫音則以「家姐」身份，語氣比平時收斂，時不時看向小光確認他是否自在。小光本人難得露出屬於這個年紀的、單純的緊張與期待。

老師們正在詢問小光的學習情況和近期表現。操用成熟、溫柔卻又帶著威嚴的語調回應，彷彿在無言地展示著她作為「家長」的關切與掌控。

整個場景既日常溫馨，又因為三人各自真實身份（魔法少女/屍骸獵人相關人物）與眼前扮演的「正常家庭」角色之間的落差，充滿荒誕的喜劇張力與不易察覺的悲劇伏筆。

**所需資源**：
- 操的成熟高貴「母親」偽裝形態（機制 `[NEEDS_FACT]`）
- 紫音的「家姐」偽裝
- 小光本人（在學學生）
- 學校家長日環境（教室/禮堂）

**視覺重點**：
- 三人（操/紫音/小光）並排出席，構成臨時「家庭」
- 操的完美貴婦偽裝與其精密計算的肢體語言
- 小光難得的、屬於孩子的單純情緒
- 場景整體溫馨表象下的伏筆張力

---


---

## 圖44：「操的摔碎時刻」（Misao's Breaking Moment）[BEAT_SHEET_PREP]

**建議輸出文件名**：`ConceptArt_Scene_44_Misao_BreakingMoment.png`
**依據版本**：`ayakomoji_misao.md` §Body Horror 傀儡絲線縫牙分層設計 CDL-233 Stage 2a（2026-07-17 審計修正，見 CHANGE_LIST_EXISTING_SPEC.md 圖44項）

### 劇情背景

`[WRONG→已修正]` 父親背叛（以EMB技術向帝國出賣操的藏身據點）與紗夜犧牲在同一夜發生，將操推入半屍骸化邊緣狀態——此為 **Stage 2a**（`ayakomoji_misao.md` CDL-233），發生於 **Act II Phase C，E-09a，113年7-8月**，同已於圖72/圖52/圖46 審計確認嘅「鏡像破碎之夜」屬同一事件（同一批次已修正嘅事件群）。原文標「廢棄工廠」為地點，canon 未見對此夜嘅具體地點描述支持，標 `[NEEDS_FACT]`。

原文稱「這一幕緊接在操選擇『停留』守護隊友的鋼鐵獨舞之前」——依 canon Stage 弧線（Stage 2a → Phase D 六個月嘅 Stage 2b → Act III Day13 嘅 Stage 3「停留」選擇），呢兩個時刻中間相隔**大半年**（Stage 2b 過渡期），並非「緊接」，容易誤導為同一夜或相鄰場景。原文引用嘅「CDL-298被迫報串」屬 **Act III Phase H** 另一件完全獨立事件（父親以「醫療回收」脅迫操交出隊伍坐標，冇紗夜、冇鏡子場景），同本場景（E-09a夜）唔屬同一時刻，只能作為同一角色弧線嘅後續呼應，不可暗示因果緊鄰。

在這個終極崩潰時刻，操長期以「完美表演換取不被改造」的生存策略徹底失效——父親的背叛證明了完美表演從來無法換來真正的安全，只是延後了被丟棄的時機。傀儡絲的斷裂是雙重意義的：她的身體機制崩潰，同時也是她與「必須控制一切才能存活」的執念徹底決裂的瞬間。

### 圖片說明

父親的背叛與紗夜的犧牲在同一夜（Act II，E-09a）摧毀了操維持多年的完美表演，她長期依賴的傀儡絲在這個崩潰時刻大量斷裂、斷牙鬆動（Stage 2a），身體崩潰跌落。這不僅是身體機制的失控，更是她開始以殘缺之身面對自己嘅心理轉折起點——距離她 Act III Day13 主動選擇「停留」嘅鋼鐵獨舞終局，仍有大半年嘅麻木化過渡期（Stage 2b）。

**Reference Images**：
- 操：`ConceptArt_Misao_CasualWear.png`

**簡化核心描述**：
操終於承受不住，完美的姿態崩潰，身體跌落。傀儡絲在此刻大量斷裂，她的尖叫聲（無聲）象徵著靈魂防衛的初步崩解。地點 `[NEEDS_FACT]`，不預設「工廠倒塌」畫面。

**所需資源**：操的形態與表情變化


---

## 圖45：「天使變公敵」（Angel Becomes Public Enemy）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_45_LightVeil_PublicEnemy.png`
### 劇情背景

`[CDL引用已修正 2026-07-17]` 原文引用五個CDL（180/201/227/259/282），經反查只有 **CDL-259**（E-09「飢餓的天使」完整方案，2026-04-28 Story Room Master最終拍板）係本場景嘅正確核心依據。其餘四個屬誤植：CDL-180 係「維多利亞之淚特寫鏡頭設計」（Beat 0b/E-04，同本場景無關）；CDL-201 係愛莉動機揭示三步順序（無關）；CDL-227 係「QQ-52 E-09社死觸發C修正版（紀錄片方案）」——此設計已於2026-04-28被CDL-259完全取代（見CDL-258「[SUPERSEDED]」記錄），引用已廢棄版本；CDL-282 係鏡像法則定義（同直播失控場景無直接關係）。另發現**前置事件因果關係錯誤**：原文將「E-09a父親背叛+紗夜犧牲」列為 E-09 嘅「前置事件」，但依 `ACT_II_OUTLINE.md` 明文「**E-09 與 E-09a 為平行發生的雙線災難（非線性 A→B）**」（Phase D背景框架，行365），兩者係同期平行事件，唔存在「E-09a→E-09」嘅前置因果關係。帝國歷113年7月中旬，Act II Phase C，E-09直播失控事件當晚，與E-09a（鏡像破碎之夜）平行發生。前置：E-08恐怖家家酒14天高壓積累+夕在E-08末期刻意讓晴香遭屍骸爪擊觸發半屍骸化。夕在半屍骸狀態下情緒飢渴到極限，劫持晴香身體主導權，在直播舞台上撕毀光幕濾鏡裝置（CDL-259）。晴香的社會性死亡起爆點，也是帝國媒體倒戈、公眾從崇拜轉為恐懼的30秒決定性轉變。

### 圖片說明

直播舞台，晴香以完美的粉紅白色變身出現——然後在同一個畫面，左手變成黑色爪子，眼睛失去人的光芒變成空洞死寂，身體開始本能吸食圍觀者的正面情緒。光幕濾鏡被物理撕毀，碎成無數片，每一片都倒映出真實的扭曲身體。圍觀者瞬間從崇拜轉為恐懼，向後退、捂著臉、舉起手機錄影。直播鏡頭完整記錄了整個過程，社交媒體在同一瞬間爆炸。

**劇情位置**：
- **時間點**：帝國歷113年7月中旬（Act II Phase C，E-09直播失控事件當晚）
- **CDL追蹤**：CDL-259（唯一經核實直接相關；CDL-180/201/227/282已移除，CDL-227另屬已被CDL-259取代嘅廢棄設計）
- **前置事件**：E-08恐怖家家酒14天高壓積累+夕E-08末期刻意讓晴香遭屍骸爪擊（半屍骸化觸發）；E-09a（父親背叛+紗夜犧牲）為**平行發生**事件，非本場景前置因果鏈的一部分
- **本場景功能**：晴香「國民天使」→「情緒吸血鬼」的30秒決定性轉變；光幕濾鏡（完美主義視覺保護）的物理摧毀；社會性死亡的起爆點；媒體/輿論倒戈的visual anchor
- **後續payoff**：E-09後晴香拒絕變身；CDL-191美夜子「無價值留守」場景；Phase D地下化的開始信號

**Reference Images**：
- 晴香（變身態崩潰）：`ConceptArt_Haruka_MagicalGirl.png`
- 晴香（左手黑爪／屍骸化細節）：`ConceptArt_Haruka_MagicCorpse.png`（新增，本場景係「維多利亞天使」變身態與屍骸化左爪同時並存嘅雙重曝光瞬間，單靠MagicalGirl不足以覆蓋屍骸化細節）
- 市民（圍觀者）：*background characters*

**詳細核心描述**（280字）：

城市廣場直播舞台。主角團表演中，晴香以完美的粉紅-白色變身出現，被稱為「維多利亞天使」。光幕濾鏡（視覺安全屏障，讓一切看起來完美理想）保護著舞台。但E-08的高壓積累加上**半屍骸身份帶來的情緒飢渴**瞬間爆發：**夕接管晴香的身體**。在失控的那一刻，晴香的左手異變為黑色爪子；眼睛失去人類的光芒，變成屍骸的空洞死寂；她開始**本能地吸食圍觀者的正面情緒**。

**決定性瞬間**：夕的怒火中，**物理上撕毀光幕濾鏡裝置**。圍觀者看到「無濾鏡版本」：扭曲的身體、闇黑的氣息、不是拯救者的東西。直播鏡頭完整記錄了整個過程。**立刻**，社交媒體爆炸——片段無法刪除地傳播，「維多利亞天使 = 情緒吸血鬼」瞬間成為全城共識。

**生成提示（Midjourney）**：
```
Broadcast stage dramatic lighting failure. Center: Haruka dual-aspect—front: shimmering
angel pink-white light (moments before). Simultaneously: black claws, dead eyes, twisted
pose (after). Shattering light veil itself visual: crystalline dome exploding violently
outward, each shard reflects true form fragmenting perfect illusion. Around stage: crowds
switching adoration to horror mid-moment. Hands covering faces, backing away, filming on
phones recording the monster reveal. Brilliant pink-white Angel light violently colliding
dark purple-black shadow. Sharp violent boundary, no transition. Broadcast cameras
recording unflinching. Sky: first moment red alert sirens, visual distortion. 8k cinematic
high dynamic range showing beauty and horror simultaneously.
```

### 替代版本（若被拒絕）

```
Split-screen: Left Perfect broadcast image "Victorious Angel Haruka" pink light, smiling
crowds. Right: Same moment, true form—twisted body, black energy, crowds running. Below
both: smartphone screens showing clips going viral—video thumbnails multiplying, share
counts rising, hashtags flooding, comments hostile. Moment of social death from multiple
perspectives. Harsh fluorescent whites and blacks. Media saturation. Inevitable spread
contagion aesthetic. Digital apocalypse meets magical girl tragedy.
```


---

## 圖46：「操回歸人類身軀」（Misao Returns to Humanity）

**建議輸出文件名**：`ConceptArt_Scene_46_Misao_ReturnHumanity.png`

### 劇情背景

**[時間點修正 2026-07-17]**：Act II Phase C，E-09a「鏡像破碎之夜」（父親背叛+紗夜犧牲，113年7-8月）之後的插曲（`ayakomoji_misao.md` M-S6a，非獨立主線時序節點）。操在極度崩潰狀態中製作了一具完美的女性人偶軀殼，將意識注入其中——她終於「擁有」了沒有性別焦慮、沒有厭食症代價的完美肉體（ayakomoji_misao.md §無心完美人偶：「紗夜死後，操製作了一具完美的女性人偶軀殼」）。然而人偶無法感受冷暖、無法流淚、無法觸碰任何事物：「沒有痛覺的完美，比地獄更可怕。」砸碎人偶的選擇是操全作最硬的 Body Horror 轉折點——她放棄了一生追求的「形式完美」，主動回到殘缺但真實的身體。此決定直接連通 Day 13 鋼鐵獨舞：操選擇停留在「真實的自我」，而非用完美人偶逃避痛苦。**地點 `[NEEDS_FACT]`**：canon 未明確此場景的物理地點（唔可以假設為「廢棄工廠」——呢個地點名已喺圖112/圖78審計中確認同操嘅其他場景搞混，本場景地點需另行 source check，生成時暫以中性室內空間處理）。

### 圖片說明

操曾經製造出一具完美的人偶軀殼，把自己的意識注入其中，終於擁有了她一生渴望的完美形體——但沒有痛覺的完美，比地獄更可怕。感受不到冷暖、無法流淚的她，最終選擇砸碎那個完美的人偶，回到那個有缺陷、會痛、但確確實實屬於她自己的身體。殘缺，比完美更真實。

**Reference Images**：
- 操：`ConceptArt_Misao_CasualWear.png`（原引用MagicalGirl，但本場景係操獨處製作/砸碎人偶嘅私密室內場景，非戰鬥/變身情境，改用CasualWear更貼合，同圖58「操的夜中人偶製作」同一事件參照一致）

**簡化描述**（150-200字）：
操砸碎完美人偶鏡子，決定回歸殘缺的真實身體。碎裂的鏡片反射著廢棄工廠，完美的虛假在此刻化為利刃。殘缺比完美更真實，更珍貴。

**生成提示**：
```
Style: Breaking the illusion; rejection of perfection
Mood: Liberation through imperfection; choosing authenticity
Colors: Mirror shatter silver-white; neutral cold interior tones [NEEDS_FACT: exact location undetermined]; warm flesh tones emerging
Composition: Figure among mirror fragments; choosing broken reality
Lighting: Breaking light through shattered pieces; cold interior light mixed with flesh warmth
Special effects: Glass breaking effect; debris floating; light refraction
Canvas: 3:4 portrait
```


---

## 圖47：「甜品局掉牙」（操、晴香、眾人 / Dessert Party Tooth Drop）[PRIVATE_BODY_HORROR_MOMENT]

**建議輸出文件名**：`ConceptArt_Scene_47_Misao_DessertToothDrop.png`

### 劇情背景

**⚠️ 2026-07-17 批次8審計修正**：原文標「Body Horror Stage 2b」，但依 `ayakomoji_misao.md` CDL-233，Stage 2b（Phase D地下化六個月）明確定義為「外表依然維持完美（縫牙保持不變），**外觀無新增破損**」——牙齒鬆動/脫落屬於 **Stage 2a**（Act II中期，E-09a，父親背叛+紗夜犧牲期間高壓魔法使用觸發）。本場景描繪嘅正正係牙齒「剛剛從牙槽脫落不久，仍然濕潤」嘅新鮮脫落瞬間，屬 Stage 2a 症狀，已修正如下。

操因**長期使用魔法少女變身**積累了嚴重的**身體崩壞（Body Horror CDL-233 Stage 2a）**。這是變身的代價——她的身體正在從內部分解，牙齒開始鬆動脫落只是表徵之一。此時她已進入「日常生活中突然發作」的階段：在任何平凡時刻，身體就會無預警地毀損。她必須維持「完美公務員」的笑容與舉止，但內部的崩壞與恐懼正在吞沒她的理智。這一刻，她在歡樂的社交場合中突然掉牙，象徵著**她無法再控制自己的身體，死亡正在一點點奪走她的完整性**。

### 圖片說明

操因長期使用魔法而積累了嚴重的身體崩壞，但她必須在一切平凡時刻維持完美的公務員形象；甜品聚會中的掉牙，是身體在她最無法防備的時刻發出的訊號，讓她無聲面對一個無法對任何人說出口的事實——她正在被自己的力量從內部消耗殆盡。她悄悄把那些牙齒藏入掌心，嘴角仍維持著笑容，眼神已蒼涼如故人。

### 詳細核心描述（300-400字）

甜品店或室內餐桌場景，氣氛溫馨輕鬆。操與晴香及其他人圍桌而坐，桌上擺放著各式甜品——蛋糕、馬卡龍、布丁、鬆餅，色彩繽紛，燈光明亮溫暖。所有人都在笑、在聊天、在享受當下。

過肩鏡頭角度（Over-the-shoulder shot）：鏡頭從操的後方越過她的肩膊，捕捉到她的左手伸在身體側面，掌心微微向上，托著兩至三隻帶血的牙齒。牙齒白色，牙根末端有深紅血跡，剛剛從牙槽脫落不久，仍然濕潤。

操的面部表情——透過鏡頭邊緣或側臉隱約可見——呈現極度驚恐的神態：眼睛瞪大、瞳孔收縮、嘴唇微微顫抖，彷彿剛剛意識到自己正在以某種難以言說的方式走向死亡。那是一種「我快死了」的本能恐懼——不是痛，而是察覺到身體正在崩壞、失控、脫離自己的那種存在性的恐懼。她的右手仍機械性地握著甜品餐具，動作僵住了一半，停在半空中。

背景中，晴香和其他人仍然笑著交談，沒有人看向操的方向，沒有人察覺任何異樣。歡笑聲與操臉上的死亡恐懼形成最殘忍的對比——她被困在那份恐懼裡，四周卻是完全正常的甜品局氣氛。

**視覺重點**：
- 過肩鏡頭構圖：主焦點在操的左手掌，2-3隻帶血牙齒在掌心清晰可見
- 操的側臉表情（部分可見）：眼白放大、瞳孔縮小、嘴唇微顫，驚恐如臨死亡邊緣
- 右手動作僵住：餐具懸在半空，動作被恐懼凍結
- 背景散焦：晴香與其他人模糊但仍可辨認，歡笑吃甜品，與前景形成強烈情感落差
- 色彩對比：桌上甜品的馬卡龍粉、奶黃色、薄荷綠 vs. 手掌上的血紅深色
- 燈光：室內暖光，甜品店溫馨氛圍，暖光打在操驚恐的側臉上，令恐懼更顯孤立無援

### Midjourney 標準版

```
Over-the-shoulder shot from behind a young woman with dark hair at a dessert table.
Focus on her left hand held low near her side, palm facing up,
cradling 2-3 small teeth with bloodied roots—
freshly shed, still glistening with moisture.
The teeth are white-yellowish with dark red blood at the root ends.
Her right hand still holds a dessert fork, frozen mid-motion—
suspended in the air, movement arrested by shock.
Her face, partially visible at the frame edge:
eyes wide and dilated with terror, pupils contracted,
lips trembling slightly, expression of someone confronting their own death—
not pain, but the existential dread of realizing the body is breaking down,
slipping out of control, unraveling without permission.
In the soft-focus background:
a cheerful group of girls—including a girl with warm brown hair—
laugh, chat, and eat from colorful desserts:
pastel macarons, layered cakes, creamy puddings spread across a warmly-lit table.
None of them look toward her. None have noticed.
The left hand with the teeth is kept slightly away from the table,
concealed from the group's line of sight.
Color contrast: the pastel pinks, mint greens, and warm yellows of the dessert spread
against the deep crimson of blood on white teeth.
The warm light falls across her terrified profile, isolating her fear
against the backdrop of ordinary cheerful noise.
Lighting: warm indoor cafe or home lighting, soft and inviting—
the warmth makes her terror more lonely, not less.
Style: Painterly illustration with fine detail on the focal hand and face; soft bokeh on background figures.
Mood: Mortal terror hidden in plain sight; a body failing while those around her remain oblivious;
the cruelty of being alone in a moment of existential dread.
Canvas: 16:9
-- ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
Over-the-shoulder composition at a cheerful dessert gathering.
A young woman with dark hair sits at a table covered with colorful cakes and sweets.
Her left hand, held slightly apart from the table, holds several small objects—
small white fragments with reddish marks at their bases.
Her right hand holds a fork, frozen mid-air, movement halted.
Her face—partially visible at the frame edge—shows an expression of acute fear:
wide eyes, trembling lips, the look of someone suddenly aware of their own mortality.
Her body has gone rigid, posture locked in a moment of shock.
Behind her in soft focus, several other young women laugh
and enjoy the colorful desserts spread across the table.
None of them look in her direction.
Warm cafe lighting. Inviting, cheerful atmosphere overall.
The contrast between the festive, oblivious gathering behind her
and the terror visible in her partial profile
creates a deeply isolating emotional atmosphere.
-- ar 16:9 --niji 6
```

**Reference Images**：
- 操：`ConceptArt_Misao_CasualWear.png`
- 晴香：`ConceptArt_Haruka_CasualWear.png`


---


---

## 圖48：「紗夜犧牲——耳鳴遮蔽」（Sayo's Sacrifice: Tinnitus Veil）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_48_Sayo_Sacrifice_TinnitusVeil.png`

### 劇情背景

帝國歷113年，Act II Phase C，CF-TIME-0068時間節點，SPEC#26「操被父親出賣」事件的決定性後果。操的父親親自開門向帝國投降，帝國特務抵達豪宅門口。在這個無路可退的瞬間，管家紗夜做出了她人生中不屬於「服務角色」的最後選擇——舉槍，用凡人的方式擋住追擊者，讓操逃跑。觀眾透過全畫面的白色噪音線條（象徵槍聲後的耳鳴）感受到這一刻：紗夜的最後幾個字被吞沒，只剩口型；操在逃跑中回頭，看見紗夜的剪影在噪音裡倒下。這個場景是操CDL-298被迫報串的最深罪疚根源，也是SPEC#1鋼鐵獨舞時她帶著的不可卸下的重量。

### 圖片說明

豪宅正門，夜間，管家紗夜穿著一生的制服站在門口舉槍，用凡人的方式擋住追擊者。整個畫面被白色噪音線條覆蓋——那是槍聲之後的耳鳴，把聲音都吞沒了，只剩下紗夜嘴唇的輪廓在說某些話，但那句話消失在噪音裡。深景中，操在逃跑中回頭，透過白色噪音看見紗夜的剪影從垂直變成水平：她倒下了，而倒下的位置，是整張畫面噪音最密集的地方。

**劇情位置**：
- **時間點**：帝國歷113年7-8月 Act II Phase C，E-09a（CF-TIME-0068交叉確認事件日期為Y113-07-08，與SPEC#1/5/26已confirm嘅E-09a「鏡像破碎之夜」為同一晚，2026-07-17批次9審計新增此beat編號以統一全文件跨場景引用）
- **CDL追蹤**：E-09a；CF-TIME-0068；CDL-233
- **前置事件**：SPEC#26操被父親出賣，紗夜選擇開槍掩護操逃跑
- **本場景功能**：紗夜在豪宅門口舉槍那一瞬間；畫面被白色噪音線條覆蓋象徵耳鳴，觀者只能看口型，操在逃跑中回頭只看見紗夜倒下的剪影
- **後續payoff**：操CDL-298被迫報串的最深罪疚根源；SPEC#1鋼鐵獨舞時操帶著這份罪疚起舞

**Reference Images**：
- 紗夜：`ConceptArt_Sayo_Maidoutfit.png`
- 操：`ConceptArt_Misao_CasualWear.png`

**詳細核心描述**（200-350字）：

豪宅正門，夜間，大門是高聳的金屬質感。建築本身的豪奢感與正在發生的事情形成對比。

畫面中心的前景是紗夜：她穿著一生的身份——管家制服，或女傭制服，總之是「服務於操的家族的那個人」。她的手持槍，不是魔法少女的武器，是普通的槍，一種凡人選擇的凡人方式。她整個身體是一道門。

她的臉是整個畫面最清晰的部分——但是沉默的。

整個畫面被白色噪音線條覆蓋。不是完全遮蔽，而是像電視雪花點，密度不均。這象徵耳鳴——槍聲之後的那種白色噪音，把所有聲音都消除，把現實的質地替換成空洞的嗡鳴。

觀眾看不見聲音，只能看見口型。紗夜嘴唇的輪廓在說某些話，但那句話被白色噪音吞掉了。

畫面深景（透過白色噪音線條隱約可辨）是操在奔跑，她剛剛回頭，她看見的是：紗夜的剪影在噪音線條裡倒下，一個垂直的身影變成水平的身影，白色噪音在那個倒下的位置密度最高，幾乎完全覆蓋。

紗夜倒下前，臉是平靜的。她做了這個選擇，她知道代價，她接受了。

**生成提示（Midjourney）**：
```
Style: dark magical girl sacrifice through static interference, TV-noise-overlay aesthetic as emotional veil, painterly base with analog glitch texture
Mood: a servant's whole life distilled into one choice, tinnitus as the only way to represent unbearable sound, death seen but not heard
Colors: night blue-grey exterior, mansion warm light creating backlight on Sayo, white noise static overlay across entire frame at variable density
Composition: Sayo centered foreground holding gun pointed toward background threat, face clear and calm, full white static/noise overlay on entire image — densest at moment of falling in background, Misao small figure deep background mid-run turning to see
Lighting: backlight from mansion interior creating silhouette rim on Sayo, harsh exterior night light, white noise layer diffusing all lighting
Special effects: analog television static overlay across entire frame, density increases toward background where silhouette falls, Sayo's lips visible as clear contour only
Character: Sayo (foreground, formal service uniform, holding gun, face calm with the calm of someone who has decided, lips forming words swallowed by static); Misao (background small silhouette turning mid-run)
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
Woman in formal service uniform at mansion gate at night, holding a gun protectively, expression of calm acceptance, entire scene overlaid with white TV static noise effect of varying density, small figure of young woman visible running away in background turning to look, painterly dark anime style with analog glitch aesthetic
--ar 16:9 --niji 6
```


---

## 圖49：「操絲線縫牙」（Misao Sews Her Teeth with Puppet Strings）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_49_Misao_PuppetStringTeeth.png`

### 劇情背景

**⚠️ 2026-07-17 批次9審計修正**：原文時間點「Act II Phase A至B，E-08後」有誤——依`DIGEST_CHARACTER_STATES.md` M-S3同`ACT_II_OUTLINE.md`，Body Horror Stage 2a（牙齒鬆動乃至脫落，操以傀儡絲縫回）嘅明確觸發點係**E-09a「鏡像破碎之夜」**（父親背叛判定為廢品交予帝國+紗夜犧牲同時發生，Act II Phase C，113年7-8月），唔係E-08（Phase A-B，「恐怖家家酒」高壓事件）——E-08後、E-09a前操只處於Stage 1（牙齦滲血，外表仍完美壓制）。此修正同SPEC#47「操的摔碎時刻」、SPEC#74「甜品局掉牙」已confirm嘅Stage 2a／E-09a時間點對齊。

帝國歷113年7-8月，Act II Phase C，E-09a起，操的身體崩壞（Body Horror）已進入Stage 2a——父親背叛+紗夜犧牲（鏡像破碎之夜）後，操開始出現牙齒鬆動乃至脫落。操對身體崩壞的態度不是恐懼，而是工匠式的自我維護：她用傀儡絲把鬆動的牙縫合回牙齦，面對鏡子，妝容完整，嘴角滲血也不擦，繼續進行下一針。這是「形式主義作為自我控制」的最純粹表達——她無法阻止死亡，但她可以把死亡管理成一個可以繼續完成的工序。這個場景直接連接SPEC#74甜品局掉牙（Stage 2a同期，縫也縫不住了）以及SPEC#1鋼鐵獨舞（Stage 3，最終接受身體崩壞）。

### 圖片說明

帝國歷113年7-8月，鏡像破碎之夜（父親背叛+紗夜犧牲）後，操的身體開始崩壞，牙齒鬆動乃至脫落是這個過程的表徵之一。她站在鏡前，用傀儡絲把鬆動的牙縫合回牙齦，妝容完整，嘴角滲血也不擦，繼續進行下一針。她的表情是工作中的人的表情，不是恐懼，是計算——就像在修補一件複雜的衣物。她無法阻止身體的損耗，但她可以把損耗管理成一個可以繼續完成的工序。

**劇情位置**：
- **時間點**：帝國歷113年7-8月 Act II Phase C，E-09a起（Body Horror Stage 2a）
- **CDL追蹤**：CDL-233 Stage 2a；misao.md §Body Horror
- **前置事件**：E-09a鏡像破碎之夜（父親背叛判定為廢品交予帝國、紗夜犧牲），操的Body Horror由Stage 1（牙齦滲血）轉入Stage 2a：牙齒開始鬆動、失去固著
- **本場景功能**：視覺化操面對身體崩壞的核心態度——不是恐懼，是工匠式的自我維護。這是她「形式主義作為自我控制」最純粹的表達：用能力去縫合自己正在失去的東西。
- **後續payoff**：SPEC#74甜品局掉牙（Stage 2a同期，縫也縫不住了）；SPEC#1鋼鐵獨舞（Stage 3，最終接受身體崩壞）

**Reference Images**：
- 操：`ConceptArt_Misao_CasualWear.png`（原引用MagicalGirl，但本場景係浴室/梳妝台前嘅私密日常場景，非戰鬥/變身情境，改用CasualWear更貼合）

**詳細核心描述**（200-350字）：


浴室或梳妝台前。光源是正面的冷白鏡燈，把一切打得無陰影、清晰、過度明亮——沒有藏身之處。

操站在鏡前，左手拿著一面小手鏡（讓她能同時看自己的正面和側面），右手操控傀儡絲。傀儡絲是她魔法能力的具現——半透明，帶微弱金屬光澤，直徑比縫衣線細，強度遠超。她把絲線穿過正在鬆動的臼齒牙齦，一針一針，把牙齒固定回去。

她的表情是工作中的人的表情：專注，眉頭輕微收攏，不是痛苦，是計算。就像在修一件複雜的衣服，某個接縫鬆了，需要重新縫過。她的嘴角滲出一細線血，她沒有擦，繼續進行下一針。

妝容是完整的。口紅，眼線，睫毛，全部還在。只有右手角度稍微偏移了正常的動作弧度，因為牙齦有點腫。

構圖核心：鏡像構圖——畫面左半是真實的操（側臉），右半是鏡中的她（正臉）。兩個她都在執行同一個動作，只是角度不同。傀儡絲在鏡子兩側都可見，像是把兩個「她」縫在一起。前景非常近，能看見傀儡絲的細節和牙齦的微紅。整體色調偏冷白，只有血的細節帶一點暗紅。


**生成提示（Midjourney）**：
```
Style: dark magical girl illustration, clinical detail, close-up character study
Mood: cold precision over pain, self-maintenance as self-control, horror through composure
Colors: cold white mirror lighting, pale skin, full makeup intact, thin dark red blood trace at gum, translucent golden thread
Composition: mirror split composition, left side profile view of real girl, right side front-facing reflection in mirror, symmetrical, very close up on face and hands
Lighting: harsh flat frontal bathroom light, no shadows, clinical
Special effects: semi-transparent golden puppet strings visible threading through teeth and gum, hair-thin, faintly gleaming
Character: teenage girl with full perfect makeup, concentrated expression, threading puppet strings through her own loosening teeth, blood at gum corner, does not flinch
Canvas: 1:1 --ar 1:1 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A teenage girl with perfect makeup calmly sews glowing golden threads through her own teeth in front of a bathroom mirror. Clinical lighting. Mirror reflection visible. Focused, not pained. Dark magical girl art style. No extreme gore.
--ar 1:1 --niji 6
```


---

## 圖50：「美夜子無價值留守」（Miyako's Worthless Vigil）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_50_Miyako_WorthlessVigil.png`

### 劇情背景

帝國歷113年7月，Act II Phase C，E-09後，SPEC#21光幕濾鏡破碎事件——晴香被全城定性為「失控殺手」，躲在廢棄地鐵站，手機不斷跳出死亡威脅。美夜子以貓形態找到她，用爪子把手機翻面蓋住屏幕，然後從月台角落叼來一罐癟掉的舊可樂放在晴香身旁，退開，側坐，不看她，不靠近，不叫。大腦說「這是任務義務」，靈魂本能說「我不能讓她一個人」——這個場景是美夜子×晴香關係從功利守護轉向無條件羈絆的決定性臨界點（CDL-191），也是SPEC#109「美夜子終於哭出來」二十年後才兌現的情感根源。

### 圖片說明

帝國歷113年，晴香被全城定性為「失控殺手」，躲在廢棄地鐵站，手機不斷震動跳出死亡威脅。以貓形態存在的美夜子找到她，用爪子把手機翻面蓋住屏幕，然後叼來一罐癟掉的舊可樂放在她身旁，退開，側坐，不看她，不靠近，不出聲。大腦說「這是任務義務」，但她沒有離開。這一刻是兩人關係從義務守護轉向無條件羈絆的臨界點，也是二十年後美夜子第一次哭出來的情感根源。

**劇情位置**：
- **時間點**：帝國歷113年7月 Act II Phase C，E-09後（晴香「社會性死亡」之後）
- **CDL追蹤**：CDL-191；miyako.md §美夜子×晴香
- **前置事件**：SPEC#21光幕濾鏡破碎，晴香被全城定性為「失控殺手」，躲在廢棄地鐵站
- **本場景功能**：確立美夜子×晴香關係從「任務義務」轉向「無條件羈絆」的臨界點。美夜子不說話、不安慰，以行動表達陪伴。貓形態強化了「她不知道如何作為人類去安慰，但她仍在這裡」的主題。
- **後續payoff**：美夜子×晴香關係從義務守護轉為無條件羈絆的分水嶺；SPEC#FF美夜子終於哭出來的情感根源

**Reference Images**：
- 美夜子（貓形態）：`ConceptArt_Miyako_Cat.png`
- 晴香（便服）：`ConceptArt_Haruka_CasualWear.png`

**詳細核心描述**（200-350字）：


廢棄地鐵站。月台燈有一半壞了，剩下的燈管發著間歇性的白光。軌道上有積水反光。整個場景冷而寬闊，人在這裡顯得很小。

晴香坐在月台邊緣的牆腳，膝蓋抱起，後背靠牆。她的手機在她前方的地板上震動，屏幕碎裂，但通知還在不停跳出——死亡威脅、謾罵、曝光截圖。屏幕的光一閃一閃打在她臉上，她不去看。

美夜子以貓形態走過來。她用爪子碰了一下手機，把它翻面，屏幕朝地。然後她消失了片刻，再回來，嘴裡叼著一罐可樂——罐身有點凹，是在月台另一端的角落找到的，早就沒氣了。她把它放在晴香的膝蓋旁邊，然後退開，在距離晴香一個身位的地方蹲下，側對著她，看著對面的牆壁。

她沒有靠近晴香，沒有蹭她，沒有喵叫。只是——在那裡。

整個畫面的光線重心在晴香那邊，手機被翻面後，那片光消失了，畫面變得更暗更靜。美夜子是畫面裡一個白色的小點，不發光，只是存在。可樂罐在兩者之間，作為唯一的連接物。

構圖核心：廣角構圖顯示廢棄月台的空曠，晴香在左側牆腳，美夜子在右側稍遠處，之間留有距離。可樂罐在中央地板，輕微反光。


**生成提示（Midjourney）**：
```
Style: dark magical girl illustration, wide environment shot, cinematic desolation
Mood: silent companionship, powerless love, the value of just being present
Colors: cold fluorescent flicker white, deep station shadow blues, cracked screen light already gone, single cola can catching faint gleam
Composition: wide shot of abandoned subway platform, girl curled at left wall, small white cat crouched at right giving space, empty distance between them, cola can on floor between them
Lighting: intermittent broken fluorescent overhead, asymmetric cold light, mostly shadow
Special effects: cracked phone screen face-down, barely glowing edge
Character: teenage girl in hiding hugging knees, face turned away from phone; white cat with ice-blue eyes crouching apart looking at wall, not at girl
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A girl hiding alone in an abandoned subway station with knees pulled up. A small white cat quietly places a soda can near her and sits at a distance, looking away. Silent companionship. Cold fluorescent light. Dark anime style.
--ar 16:9 --niji 6
```


---

## 圖51：「飢餓的天使——直播失控（半屍骸）」（Hungry Angel: Live Broadcast Out of Control）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_51_Haruka_LiveBroadcastBreak.png`

### 劇情背景

`[已修正 2026-07-17，CDL誤引]` 原文引用「CDL-180」實際係「維多利亞之淚特寫鏡頭設計（Beat 0b神聖幻象+E-04後遠景工業現形）」，同本場景完全無關（張冠李戴）；正確依據為 `ACT_II_OUTLINE.md` Beat E-09（CDL-203；CDL-259）。

帝國歷113年7月中旬，Act II Phase C，Beat E-09「飢餓的天使」直播失控事件，SPEC#21光幕破碎的前一幀。前置危機：E-08末期夕在失控中刻意讓晴香遭屍骸爪擊，晴香進入「半屍骸化」狀態，對正面情緒產生近乎成癮的飢渴（CDL-259）。E-09主體：直播進行中，「夕」突然接管晴香的身體，晴香因半屍骸身份的飢渴而失控，開始吸食舞台周圍圍觀者（粉絲+一般民眾）的正面情緒（崇拜/恐懼/期待的反向吸取）；夕在失控瞬間物理撕破/摧毀保護直播畫面的「光幕濾鏡」裝置，圍觀者看到無濾鏡版本的失控場景——晴香左手化為黑色爪子、眼睛發出屍骸死寂光芒。這個瞬間建立了「夕」接管時的視覺語言（雙重曝光眼睛：右眼仍是天使的光，左眼已開始黑化），也是直播後光幕濾鏡破碎、晴香「社會性死亡」（帝國藉此推動反魔法少女法案，CDL-203）的直接觸發點。

### 圖片說明

帝國歷113年，晴香在帝國授權的公開戰鬥直播中精神邊界崩潰，另一個人格在這零點五秒接管了她的身體。她的左手——已開始黑化的那隻手——轉向封鎖線外的圍觀市民，強行抽取他們的情緒能量，受害者感到突然的空洞與無故悲傷。她的右眼仍帶著原本的光，左眼已開始黑化，兩種狀態同時存在，不是切換，是閃爍。接管的那個人格的表情：飢餓，冷靜，沒有任何掩飾。

**劇情位置**：
- **時間點**：帝國歷113年7月中旬 Act II Phase C，E-09（直播失控事件，SPEC#21前一秒）
- **CDL追蹤**：CDL-203；CDL-259；`ACT_II_OUTLINE.md` Beat E-09（原引用「CDL-180」為誤植，已修正——CDL-180實屬維多利亞之淚鏡頭設計，與本場景無關）
- **前置事件**：E-08恐怖家家酒高壓，晴香在直播戰鬥，精神邊界臨界
- **本場景功能**：視覺化「夕」接管的0.5秒——這是SPEC#21「光幕破碎」的前一幀，比破碎更原始的那一刻。「維多利亞天使」身份和半屍骸狀態之間的重疊閃爍，是整個Act II最危險的視覺時刻。
- **後續payoff**：直接接入SPEC#21光幕濾鏡破碎；夕接管的視覺語言建立，為後續出現奠定識別基礎

**Reference Images**：
- 晴香：`ConceptArt_Haruka_MagicalGirl.png`
- 晴香（左眼黑化／半屍骸細節）：`ConceptArt_Haruka_MagicCorpse.png`（新增，本場景係「維多利亞天使」形態同半屍骸化雙重曝光同時並存嘅瞬間，單靠MagicalGirl不足以覆蓋左眼黑化/黑爪細節）

**詳細核心描述**（200-350字）：


城市廣場。這是一場戰鬥直播現場——帝國授權的魔法少女公開戰鬥，配備直播攝影機和光幕濾鏡裝置。周圍是圍觀市民，本來安全地站在封鎖線外觀看「英雄打倒屍骸」的直播節目。光幕濾鏡的作用是把戰鬥畫面過濾成正向、英雄主義的視覺語言——觀眾以為他們在看一個光明的表演。

夕接管的這0.5秒，晴香的身體還是「維多利亞天使」的戰鬥姿態，但控制者已經換了。左手（半屍骸化，指尖和手背有黑化紋路從皮下蔓延）向前伸出，掌心朝向封鎖線外的圍觀者——不是對著屍骸，是對著市民。這是攻擊，是掠奪：她在強制抽取圍觀者的情緒能量，受害者感到突然的空洞、暈眩、無故悲傷。能量以可見粒子形式流動，從人群方向被她的手掌強行抽走，像是有人把光從他們身上撕下來。

她的眼睛是這張圖的核心。維多利亞天使的眼睛是明亮、光芒的；屍骸的眼睛是空洞、漆黑的。這個0.5秒，兩種狀態同時存在——右眼還帶著天使的光，左眼已開始黑化，不完整，撕裂，閃爍。雙重曝光，不是切換，是同時。

廣場的自然光和直播燈光讓她的輪廓清晰，但表情已不屬於晴香——那是夕的表情：飢餓，冷靜，沒有任何痛苦的掩飾。

構圖核心：低角度仰視，晴香在廣場中央，左手伸向畫面右側的圍觀人群，能量粒子從人群方向流向她的掌心。背景可見封鎖線和攝影機，遠處可見模糊的市民剪影。眼睛的雙重狀態是中心細節。


**生成提示（Midjourney）**：
```
Style: dark magical girl illustration, urban battle scene, dual exposure identity fracture
Mood: predatory hunger disguised as performance, the moment a hero becomes a threat, cold consumption
Colors: city plaza natural light + broadcast camera lighting, left hand dark corruption veins navy-black crawling under skin, right eye still bright magical girl glow, left eye hollow dark void, visible emotion particles pulled from crowd in cold blue-white wisps
Composition: low angle upshot, girl in center of open city plaza, left hand extended palm outward toward crowd at right side of frame, energy particles streaming from civilian silhouettes toward her palm, broadcast cameras and cordon visible in background
Lighting: mixed urban daylight and broadcast flood lights, no single overhead spotlight, face lit from multiple angles revealing the dual eye state
Special effects: left hand corruption vein pattern spreading, emotion particle drain from crowd flowing toward palm, right eye bright magical girl glow overlapping with left eye hollow darkness simultaneously — dual exposure not switch
Character: magical girl in battle costume mid-combat, left hand turned toward the crowd not the enemy, expression cold and hungry rather than heroic, eyes in split state
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A magical girl in a city plaza during a battle, one hand extended toward the watching crowd rather than the enemy, one eye glowing and one eye hollow dark, emotion energy particles visibly drained from civilians into her palm. Cold expression, body horror corruption veins on hand. Dark magical girl horror, urban outdoor setting.
--ar 9:16 --niji 6
```


---

## 圖52：「操被遺棄」（Misao's Abandonment）

**建議輸出文件名**：`ConceptArt_Scene_52_Misao_Abandoned.png`

### 劇情背景

**[已修正 2026-07-17]** Act II Phase C，Beat E-09a（113年7-8月，CDL-231/232/233/234；CF-TIME-0067/0068），鏡像破碎之夜——原文誤標「Act III Phase E-F，CDL-218」：CDL-218 實際係另一件事（紫音/操 Act III 錯位雙殺嘅CDL編號，同本場景無關），已更正為 CDL-231/232/233/234。父親判定操的心匣污染指數達到臨界，啟動「廢品交出」程序——親自打開大宅大門，將操移交帝國軍（此為與 E-09「飢餓的天使」平行發生的雙線災難之一，CDL-250/253）。這是兩層背叛同時爆發的夜晚：父親用「最後的生產力轉化」完成對女兒的清算，而管家紗夜選擇以身相護，掩護操逃離並犧牲（ayakomoji_misao.md §鏡像破碎之夜）。紗夜在臨終時揭露真相「妳根本唔係少爺……妳係我最靚嘅女」——此遺言因創傷衝擊被封印為耳鳴，在 Act III Day13 鋼鐵獨舞（學校瓦礫，見SPEC#1）操面臨抉擇時才逐步解鎖（CDL-231/232）。此場景是操從「完美表演」走向「殘缺真實」的心理斷裂點，直接觸發後續的半屍骸化危機（Body Horror Stage 2a 首次觸發）與 Day 13 鋼鐵獨舞的隱含贖罪層。

### 圖片說明

操的父親親自打開大宅的門，把她交給外面等候的人——這是一個父親親手清算自己女兒的夜晚。而管家紗夜在這一刻站出來，用自己的身體掩護操逃離，在臨終前說出一句從未說過的話。操帶著這個沒有來得及消化的背叛和犧牲逃走了，那個「家」，在那一夜，徹底不再存在。

**Reference Images**：
- 操：`ConceptArt_Misao_CasualWear.png`（原引用MagicalGirl，但本場景係大宅門口父親開門投降、紗夜犧牲嘅家庭場景，非戰鬥/變身情境，改用CasualWear更貼合；`[NEEDS_FACT]` 待確認是否需另產出 Stage 2a 專屬圖）

**簡化描述**（150-200字）：
操的父親親自打開大門投降，紗夜犧牲掩護女兒逃離。大宅在夜晚化為監獄，最親密的人成為最深的背刺。操在此刻失去對「家」與「父愛」的最後幻想。

**生成提示**：
```
Style: Dramatic family tragedy; institutional collapse
Mood: Ultimate abandonment; protective sacrifice
Colors: Mansion interior darkness; door frame as threshold; military harsh light
Composition: Multiple figures (father, daughter, Sayo); emotional distance emphasized
Lighting: Cold artificial light from outside; warm interior collapsing
Canvas: Widescreen to show spatial separation
```


---

## 圖53：「死前願望清單」（The Before-Death Wish List）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_53_WishList_Underground.png`
### 劇情背景

帝國歷113年7-10月，Act II Phase D 地下生存期（地下化）的罕見喘息窗口。主角團進入地下避難生活後，資源縮減、帝國包圍圈收緊（CDL-250、CDL-255），心理壓力持續積累。某次喘息時段，四人各自說出死前最想做的一件事——這是在極高壓下對「正常生活」的橫截面掃描，揭示每個角色真實的心理底層（`05_story_outline_canon.md` §附錄：可選場景框架 §生死態度章「⑤死前願望清單」，作者裁決 Q-DECIDE-1 列入 canon）。canon 明確此刻在場並發言的四人為**美夜子、紫音、操、凜**（`[NEEDS_FACT: 晴香是否同場但未發言，canon原文未明確排除或確認，此刻標記為僅取canon已confirm嘅四人]`）。凜的回答「我想再見到某人一次」是她對美夜子記憶碎片的最接近表達。

### 圖片說明

地下避難所一角，空氣悶熱，燈光昏黃，大家隨意坐臥，各自保持各自的距離感。美夜子說「自然死，八十歲，在醫院」，語氣平靜得像在說天氣。朱音說「食頓飽」，沒有停頓，骨子裡的實在。操說「想拆一個完美的線稿」，傲慢的說法，但「想」字停頓了一秒。凜沉默很長時間，長到大家以為她不會回答了，然後說「我想再見到某人一次」——她沒有說是誰。四個人，面向不同方向，說出這些話。

**劇情位置**：
- **時間點**：113年7-10月，Act II Phase D，地下化生存喘息期
- **CDL追蹤**：`05_story_outline_canon.md` §附錄：可選場景框架 §生死態度章「⑤死前願望清單」（Q-DECIDE-1 作者裁決列入canon）
- **前置事件**：主角團進入地下避難生活（E-10地下化），壓力積累期的罕見喘息窗口
- **本場景功能**：以輕盈形式揭示每個角色對「正常生活」和死亡的真實態度；四人心理深度的橫截面
- **後續payoff**：各人弧光完成後回看此刻的對比——她們說出的願望，哪些實現了，哪些再也沒有機會了

**Reference Images**：
- 美夜子（便服）：`ConceptArt_Miyako_CasualWear.png`
- 凜（便服）：`ConceptArt_Rin_CasualWear.png`
- 朱音（便服）：`ConceptArt_Akane_CasualWear.png`
- 操（便服）：`ConceptArt_Misao_CasualWear.png`

**Creative Enhancements**：
- 場景：地下避難所某個牆角，昏暗燈光，大家隨意坐臥
- 四人各自保持各自的距離感——不是強迫溫馨的圍坐，而是各自的姿勢
- 視覺重點：凜沉默最長，最後說「我想再見到某人一次」時幾乎看不到的表情變化

**詳細核心描述**（220字）：

地下避難所一角，空氣悶熱，燈光昏黃。

美夜子：「自然死。八十歲。在醫院。」——語氣平靜，像在說天氣，但這對她來說是最不可思議的奢望。

朱音：「食頓飽。」——沒有停頓，直接，帶著某種骨子裡的實在。

操：「想……拆一個完美的線稿。」——傲慢的說法，但「想」字停頓了一秒。

凜沉默了很長時間。長到大家以為她不會回答了。然後：「我想再見到某人一次。」

她沒有說是誰。也不需要說。

畫面的構圖不是溫馨的聚會，而是四個在不同方向看著虛空的人，剛好說出了這些話。

**生成提示（Midjourney）**：
```
Style: Dark anime; underground shelter; quiet ensemble character study
Mood: The weight of ordinary wishes in extraordinary circumstances
Colors: Underground amber lamplight; grey concrete; simple muted clothing
Composition: Four figures in loose arrangement in cramped space; each facing different direction; ensemble but not unified
Lighting: Single warm lamp; deep shadows; intimate but not cozy
Details: Miyako calm statement; Akane direct practicality; Misao one-second pause; Rin long silence then quiet weight of answer
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```


---

## 圖54：「既視感追認」（Dejavu Recognition）[ACT_III]

**建議輸出文件名**：`ConceptArt_Scene_54_Saku_DejavuRecognition.png`

### 劇情背景

`[WRONG→已修正 2026-07-17]` 原文將本場景標為「Act II Phase D，113年9-10月」，但依 `saku.md §既視感追認`（「中段踏腳石」段）及 `ACT_II_OUTLINE.md` E-11（CDL-336）明確記載：113年9-10月 E-11 愛莉潛意識風暴期間，朔近距離目擊黑貓左耳星形飾物，懷疑只由「懷疑」升級到「接近確信」，**未到100%確認**——呢個只係既視感追認嘅 Plant（前置鋪墊），唔係完整事件。真正嘅「既視感追認」正式完整發生於 **帝國歷114年4月，Act III Phase H（月光對峙期）**（`04_timeline_canon.md #event-saku-miyako-dejavu`：「朔與美夜子的既視感追認｜114年4月｜將朔/美夜子關係由『臉孔識別』升級為『行為與態度識別』」）。

Alpha線中，朔與美夜子是青梅竹馬戀人；美夜子在Alpha線死亡後，朔親手參加了她的葬禮。此後再度相遇，眼前的Unit 01長著愛人的臉，卻是一具被兵器化的空殼。114年4月某次夜區衝突中（E-11 Plant 之後數月），朔在暗處觀察Unit 01（美夜子人形戰鬥形態）的戰鬥動作，從她的戰術習慣、保護優先序、停頓節奏中完整辨認出「那就是她」——但美夜子完全沒有認出朔（saku.md §既視感追認；miyako.md §既視感追認）。

### 圖片說明

夜區廢棄街道，穿著Unit 01變身服的美夜子在陰影中以精準動作護住隊友位置。朔站在更遠的暗處，側臉，十字弓垂在手邊沒有舉起。他的視線落在她的某個動作上——那個習慣性的停頓，那個保護優先序。瞳孔瞬間放大（驚訝），眉毛微微上揚（難以相信），嘴唇無聲地張開。他没有上前，沒有說話，只是看著，用盡全力確認眼前不是幻覺。她的眼睛從未望向他所在的方向。兩人之間隔著整個夜區的黑暗。

**劇情位置**：
- **時間點**：帝國歷114年4月（Act III Phase H，月光對峙期）——完整既視感追認事件；113年9-10月E-11嘅目擊只係前置Plant，非本場景時間點
- **CDL追蹤**：`04_timeline_canon.md #event-saku-miyako-dejavu`；`canon/03_characters/saku.md §既視感追認`；`canon/03_characters/miyako.md §既視感追認`；前置Plant見 `ACT_II_OUTLINE.md` E-11（CDL-336）
- **前置事件**：美夜子（Unit 01）被帝國定性為「缺陷半成品」邊緣化；113年9-10月 E-11 朔已有「接近確信」嘅Plant；朔以黑市網絡支援主角團（CDL-255，Phase D生存邏輯背景）
- **本場景功能**：朔由「外觀識別」升級為「行為識別」的關鍵轉折——不再依賴「她長得像美夜子」，而是從戰鬥節奏、保護習慣確認「那就是她」；美夜子完全沒有認出朔，構成「物理極近但記憶極遠」的宿命感
- **後續payoff**：朔弧光 Archetype 轉向（復仇者→守護者）；SPEC#15朔的日夜對比；SPEC#145保護的殘響（Act II Phase D世界觀轉折，時間早於本場景）；Act IV重逢與放手

**Reference Images**：
- 朔（夜晚形態）：`ConceptArt_Saku_CasualWear.png`（原檔名 `ConceptArt_Saku_NightHunter.png` 不存在，已自動替換為現有檔案）
- 美夜子（Unit 01 人形戰鬥形態）：`ConceptArt_Miyako_MagicalGirl.png`（原引用 `ConceptArt_Miyako_Unit01.png` 依 `DIGEST_REFERENCE_IMAGES.md` 標 `UNVERIFIED`，改用已存在嘅同義形態檔案）

### 詳細核心描述（230字）

夜區廢棄街道。帝國巡邏剛剛掃過，殘留的藍色探照光痕跡在積水裡消散。

Unit 01的美夜子在陰影中移動。她掩護身邊的隊友退到安全位置，然後在轉角停了0.3秒——評估，確認無危，才繼續移動。那個停頓的習慣，那個保護優先序，那個動作節奏。

朔站在更遠的廢棄建築二樓，側臉，十字弓垂在手邊，沒有舉起。

第一秒：瞳孔放大。那個停頓——她獨有的停頓。

第二秒：眉毛微皺。難以相信。那一定是巧合，許多人都會有類似的戰鬥習慣。

第三秒：嘴唇無聲地張開。不，那不是巧合。那是她。那整套只屬於她的動作語言——她永遠先確認別人安全才確認自己、她在轉角停頓的特定時長、她撤退路線的習慣優先序。這些不可能重複。

第四秒：眼神定住。她就在那裡。活著。在執行任務。在保護其他人。

她的眼睛從未望向他所在的方向。她不知道他在這裡。她甚至沒有她的記憶。

朔的表情在黑暗中逐漸冷靜下來——從驚訝變成難以相信，再變成某種淒涼的確認。

兩人之間隔著整個夜區的黑暗。他認出了她；她認不出他。

### Midjourney 標準版

```
Dark anime. Night district abandoned street. Unit 01 Miyako in magical girl human form crouching in shadow with precise protective movement, teal eyes focused forward, guarding a retreating figure. Far behind in darkness: a tall figure watching from second floor ruins, crossbow lowered at his side, face partially visible with subtle expression shift — pupils dilating (shock) → eyebrows micro-rising (disbelief) → lips slightly parted (certainty) → eye softening (loneliness). He does not call out. She never looks back. Between them: the entire weight of the dark street, broken neon reflections in puddles. Split framing: close detail of habitual pause mid-movement in combat stance / distant silhouette of the watcher whose face cycles through recognition emotions. Colors: deep shadow blue, teal-white magical girl silhouette, faint crossbow glint. Emotional tone: seeing someone you lost still alive but unreachable, and they cannot remember you exist. 8k, niji 6, style raw. --ar 9:16
```

**視覺重點**：
- Unit 01 美夜子動作中的停頓習慣——「行為識別」的視覺化（轉角 0.3 秒停頓）
- 朔臉部四秒的表情變化循環：驚訝→難以相信→確認→淒涼接納（每秒一個微妙轉變）
- 朔的十字弓垂著，沒有舉起（不是任務，是認出；手始終沒有移動）
- 兩人之間沒有視線交換——「物理極近，記憶極遠」
- 積水中的霓虹殘影作為距離與孤獨的符號

⭐⭐⭐⭐


---

## 圖55：「保護的殘響」（Echo of Protection）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_55_Saku_EchoOfProtection.png`

### 劇情背景

帝國歷113年9-10月，Act II Phase D，夜間巡邏。朔以屍骸獵人身份在夜區行動，同時暗中為主角團提供黑市支援（CDL-255）。某次巡邏中，他目睹了一個改變他世界觀的場景：一具成年魔法屍骸，已經失去記憶和情感，以殘破的身體本能地護住一具年幼屍骸，讓它不被另一波威脅傷到（saku.md §保護的殘響；§Archetype & Symbolism）。朔在此之前是「清除者」——消滅威脅。這個瞬間讓他意識到，即使是失去人性的存在，也保留著「保護」的本能殘響。他的世界觀從「清除威脅」決定性地轉向「解放被囚禁的靈魂」。

### 圖片說明

夜區廢棄街道深處，朔持十字弓站在轉角。前方：一具成年魔法屍骸——身體破損，部分已廢鐵化，動作遲鈍，眼睛無焦距。它正用自己破碎的身軀擋在一具更小的屍骸前，對著威脅方向。那個「保護」的動作沒有意識，只有本能——它甚至沒有臉部表情，只是擋在那裡。朔的十字弓已經舉起瞄準，然後停住了，沒有扣下去。他的手指在扳機前停頓，比平常的0.5秒更長。

**劇情位置**：
- **時間點**：帝國歷113年9-10月（Act II Phase D，夜間巡邏）
- **CDL追蹤**：CDL-255（Phase D生存邏輯，朔黑市網絡）；`canon/03_characters/saku.md §保護的殘響`；`canon/03_characters/saku.md §Archetype & Symbolism`
- **前置事件**：朔以雙面身份（帝國特工/屍骸獵人）行動；SPEC#140既視感追認（同時期）；朔「扳機前的猶豫」習慣（行為錨點）
- **本場景功能**：朔 Archetype 決定性轉折——從復仇者轉向解放者；「清除者」認知框架被打破的那一刻；即使是魔法屍骸也保留「保護」本能的世界觀震撼；確立朔後來成為「屍骸解放者」的情感根源
- **後續payoff**：朔Archetype轉向守護者/解放者；SPEC#15朔的日夜對比；Act III解放者覺醒；對朱音×小光線的主題呼應

**Reference Images**：
- 朔（夜晚形態）：`ConceptArt_Saku_CasualWear.png`（原檔名 `ConceptArt_Saku_NightHunter.png` 不存在，已自動替換為現有檔案）

### 詳細核心描述（250字）

夜區廢棄街道，深處。

朔靠在轉角的牆壁，十字弓舉起，瞄準線已對準前方。

前方：一具成年魔法屍骸。身體的右臂已廢鐵化，移動緩慢，眼睛沒有焦距，完全喪失了作為「人」的跡象。在它面前，地上縮著一具更小的屍骸，同樣碎裂，同樣失去意識。

成年屍骸感應到某個威脅方向，用那具破損的身軀，擋在小屍骸前面。

它沒有表情，沒有語言，不知道自己在做什麼。只是擋在那裡。那個姿態是純粹的本能——在99%的人性已經消失的地方，最後1%選擇了「保護」。

朔的手指停在扳機前。

0.5秒。他每次都猶豫0.5秒，這是所有同僚取笑他「心太軟」的那個停頓。但這一次的0.5秒比任何時候都更長。

他把十字弓放下。

即使是失去一切的存在，也保留著「保護」的殘響。這個發現顛覆了他「清除威脅」的全部認知。

### Midjourney 標準版

```
Dark anime. Night district abandoned street. Saku at corner, crossbow raised but not firing — finger at trigger, stopped. In front: damaged adult magical corpse, right arm partially rusted, no expression, no focus in dead eyes. Its broken body positioned between a smaller crouching child-sized corpse and a threat direction — pure instinct, no consciousness. Protective stance with zero awareness. Saku watching. His trigger finger held longer than usual. The crossbow slowly lowering. Colors: dark teal night, broken moonlight, rust-grey corpse damage, Saku crossbow faint energy glow. Emotional tone: the last echo of protection in something that should feel nothing. 8k, niji 6, style raw. --ar 9:16
```

**視覺重點**：
- 成年屍骸用破損身軀擋住小屍骸——「殘響」的視覺化：無意識的保護本能
- 朔十字弓舉起但扳機前停頓——標誌性的0.5秒猶豫，這次更長
- 兩具屍骸的體型對比（成年vs年幼）——呼應小光×紫音的情感層
- 朔把弓放下的動作——世界觀轉折的行為標誌

⭐⭐⭐⭐


---

## 圖56：「美夜子廢棄地鐵站夜明前」（Miyako's Pre-Dawn in the Abandoned Station）[ACT_II] ⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_56_56.png`

### 劇情背景

帝國歷113年9月至114年2月，Act II Phase D/E，晴香「社會性死亡」後的長期地下避難期間。美夜子以貓形態伴隨晴香藏匿於廢棄地鐵站，但並非每一刻都是陪伴——也有美夜子獨自坐在月台黑暗角落的時候（BEAT_SHEET_PREP Scene B1；miyako.md §Act II）。這個場景捕捉那些時刻：借來的生命信念壓到最沉重的夜晚，她坐在廢棄月台的角落，地上有她用手指劃過積塵留下的痕跡，像是在記錄她的存在。她已失去的朋友、她從未被允許表達的軟弱，都在這個沒有人看見的夜明前時刻壓到她身上。

### 圖片說明

深夜廢棄地鐵站，美夜子獨自坐在月台角落，膝蓋抱起，後背靠著冰冷的柱子。這個場景沒有戰鬥，沒有任務，只有一個借來的命在黎明前的最重的時刻。遠處月台燈有幾盞壞了的，剩下的一盞在她身後，把她的影子拉得很長。地上積塵裡有她的手指劃過的痕跡——不成字，只是線條。她的手裡有凜那把斷刀。

**劇情位置**：
- **時間點**：帝國歷113年9月至114年2月（Act II Phase D/E，地下避難期間）
- **CDL 追蹤**：CDL-191附近；miyako.md §Act II；BEAT_SHEET_PREP Scene B1
- **前置 → 本場景 → Payoff**：晴香社會性死亡後避難地下（Phase C末） → 本場景：美夜子獨處時刻，「借來的命」信念最沉重的靜默 → Act III月下崩潰（貓殼龜裂真正意義的心理前置）

**Reference Images**：
- 美夜子（貓形態或人形態）：`ConceptArt_Miyako_Cat.png`

### 詳細核心描述（250字）

廢棄地鐵站。月台燈只剩一盞在她身後勉強運作，發著間歇性白光。軌道上有積水，偶爾從頭頂某處滲下一滴水——下水道或雨水——打破唯一的安靜。

美夜子膝蓋抱起，側靠著月台的混凝土柱。她的姿態是一樣的：沒有崩潰，只是非常、非常疲倦。

她的手觸碰月台的積塵。不知道從什麼時候開始，她用手指在積塵裡劃線——不成文字，只是線，橫的豎的，像是在告訴自己「我現在在這裡，這個時刻存在過」。凜那把斷刀靠在柱子旁邊。她偶爾看一眼，然後移開目光。

沒有眼淚。不是因為她不痛，而是她還不被允許——她自己不允許自己。她的Need（「在信賴的人面前大哭一場」）在這個時刻是最清晰的缺席。這是全片最靜默的「沒有辦法哭」的場景。

構圖核心：月台縱深，美夜子在近景角落，身後那盞燈的光把她的影子拉向遠處，強調孤獨的物理長度。凜的斷刀靠在她旁邊，積塵裡有細小的線條痕跡，星月飾品在唯一光源下微微反光。

### Midjourney 標準版

```
Style: dark magical girl illustration, environmental solitude, quiet despair
Mood: the weight of borrowed time, the loudest silence of someone who is not allowed to cry, pre-dawn alone
Colors: cold abandoned subway station, single broken fluorescent light behind her casting long shadow toward camera, track with shallow reflective water, dusty platform surfaces, star and moon motifs barely visible on her accessories
Composition: subway platform depth shot, girl curled alone at base of concrete pillar in near foreground, her long shadow extending away from her toward track, broken sword leaning against pillar beside her, finger-traced lines in platform dust barely visible
Lighting: single flickering fluorescent light source behind her, creating silhouette and backlit hair, everything else in deep shadow
Special effects: faint traces of finger-drawn lines in dust on platform floor, barely visible
Character: girl curled against concrete pillar, knees to chest, eyes open and exhausted but dry, not crying, hand trailing in dust beside her, broken dagger nearby, star-moon hair accessories faintly catching the light
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

**視覺重點**：
- 沒有眼淚是這張圖的核心——她想哭但不允許自己，觀者應能感受到「壓住的痛苦」而非「已釋放的悲傷」
- 積塵裡的手指痕跡要微妙，可辨認但需要細看
- 凜的斷刀要在構圖中，作為無聲的情感錨點


---

## 圖57：「幻象破滅——屍骸外流城市」（The Illusion Shatters: The Corpses Flood the City）[ACT_II] ⭐⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_57_AkaneCorpseFloodCity.png`

### 劇情背景

帝國歷113年11月至12月，Act II Phase D 末，E-12「屍骸女王討伐」前夕（CDL-311；呼應 CDL-241/257「王國邊緣的盛宴」已埋嘅「完美的幻象」伏筆）。紫音喺廢棄糖果工廠建立嘅「屍骸樂園」表面上係一個「冇傷害」嘅收容所——但工廠本身早已廢棄，冇任何人類居民或獵物。佢收容嘅屍骸群飢餓本能（情緒侵蝕）持續累積，終於到達臨界，循住連接工廠與夜區嘅下水道/暗巷邊緣（CDL-241 已確立嘅王國邊界）湧向城市覓食。紫音冇阻止佢哋，甚至跟隨屍骸群一齊行動——唔係主動指揮或利用屍骸作攻擊武器（呢一點不違反 CDL-236 佢自立為王、非帝國兵器嘅設定），而係扭曲母性嘅伴隨姿態：佢哋要去邊，佢都跟住去。呢個事件成為帝國「衛生行動」最終將屍骸樂園列入清剿名單嘅具體治安理由，同時亦係晴香得知消息後罪疚感全面爆發、強行帶隊出擊（E-12 主動機 B）嘅直接導火線。

### 圖片說明

夜間嘅城市邊緣（夜區街道），一大群失控嘅魔法屍骸從暗巷/下水道湧出，形態各異（廢鐵型、扭曲人形、殘破軀體），居民驚慌逃竄。紫音**企喺一輛被撞翻/棄置嘅車輛頂上**，居高臨下俯視住呢場混亂——姿態借用咗「王座」嘅構圖邏輯（呼應糖果王座嘅視覺母題，但呢次冇糖果，只有金屬同灰塵），一隻手可能高舉或攤開，像係女王喺檢閱自己嘅子民，但佢嘅表情係**瘋狂**：嘴角扯開嘅笑或喊，眼神失焦但異常明亮。呢個構圖刻意將「女王氣派」同「精神崩潰」焊接埋一齊——**瘋狂女王**：居高臨下嘅姿勢同瘋狂嘅表情同時存在，先係全劇最駭人嘅一幕視覺矛盾。呢種瘋狂唔係惡意嘅征服狂喜，而係「調停失敗——被理解恐懼的反彈」（iwakura_akane.md）嘅極端延伸：被看見等於威脅，於是佢用最後嘅崩潰姿態把自己同呢個世界嘅關係徹底燒斷，同時仍然無意識咁保留住「我係呢班孩子嘅女王」嘅本能姿態。遠處城市燈光同眼前嘅混亂形成強烈對比。

### 劇情位置

**時間點**：帝國歷113年11月～12月（Act II Phase D 末，E-12 前夕）
**CDL 追蹤**：CDL-311（屍骸外流事件；紫音跟隨不阻止）；CDL-241/257（王國邊緣的盛宴——完美的幻象伏筆）；CDL-236（紫音自立為王，非帝國兵器）；CDL-238（E-12 觸發 B+D）；ko_hikaru.md §第三幕：屍骸樂園（屍骸開始對紫音以外嘅人伸手撕扯）
**前置 → 本場景 → Payoff**：SPEC#166 既然如此讓怪物有個家（決定建立樂園）→ [NC] 王國邊緣的盛宴（自以為冇傷害嘅幻象）→ 本場景：幻象破滅，屍骸外流城市 → SPEC#10 糖果山犧牲（E-12 討伐，紫音燃燒贖罪）

### 詳細核心描述（240字）

夜區嘅暗巷同下水道口，一個接一個，湧出扭曲嘅身影。

金屬碎片拼湊嘅軀體，殘破嘅人形輪廓，本應早已死去嘅嘢，正朝住有燈光、有人聲嘅方向爬去、走去、衝去。

居民嘅尖叫聲斷斷續續地響起，然後被更多嘅腳步聲同刮擦聲蓋過。

紫音企喺一輛翻側或者棄置嘅車頂上，比周圍嘅屍骸群、比逃竄嘅居民都高。

呢個位置唔係佢揀嘅戰略高地——係佢身體本能記得嘅嘢：喺糖果王座度坐慣咗嘅人，去到邊都會揾一個高過人嘅位置企。

一隻手可能攤開向前，好似女王喺檢閱自己嘅子民，好似佢真係喺度指揮緊呢場混亂——但佢冇下過一句命令，佢哋自己就識得點去。

佢嘅表情係瘋狂：嘴角扯開，眼神失焦但發亮，可能喺笑，可能喺喊，甚至兩樣同時。呢個唔係得意嘅狂笑，係一個人終於冇力氣再扮「我掌控緊」之後，將呢半年嚟嘅崩潰一次過爆晒出嚟。

女王嘅姿勢，瘋子嘅臉——兩樣嘢揸手揸埋一齊，冇一樣蓋過另一樣。

遠處城市嘅燈光仍然亮住，冷靜地，同眼前呢場混亂完全唔搭調。

呢個唔係一場侵略。呢個係一個幻象終於撐唔住，連同紫音自己嘅理智一齊垮咗嘅瞬間。

### Midjourney 標準版

```
Dark anime. Night district street/alley, panicked residents fleeing. A swarm of feral magical corpses — mismatched rusted-metal and distorted humanoid forms — flooding out from a sewer/alley opening toward the lit city beyond. Shion standing on top of an overturned/abandoned car, elevated above the corpse swarm and the fleeing residents like a queen on a throne of scrap metal, one hand possibly raised or open as if surveying/commanding her subjects — but her expression is manic: mouth stretched into a broken laugh or scream (possibly both at once), eyes unfocused yet unnervingly bright. A deliberate visual collision of regal composure and total mental collapse — a Mad Queen. Not gleeful conquest — the sound of half a year of suppressed collapse finally breaking loose, fused with an unconscious instinct to still stand above her "children." Distant city lights calm and indifferent against the chaos in the foreground. Colors: cold night blues and sickly streetlamp orange, rusted corpse textures, Shion's purple-red hair wild and disheveled. Emotional tone: not an invasion — the moment a fragile illusion of control collapses along with her own sanity, while the posture of a queen remains. 8k, niji 6, style raw. --ar 16:9
```

**視覺重點**：
- 紫音嘅位置：企喺翻側/棄置車輛頂上，高於屍骸群同居民——構圖借用「王座」邏輯（呼應糖果王座母題），但呢次冇糖果，只有廢鐵
- 姿態：一隻手可能攤開/高舉，似係檢閱子民嘅女王姿勢，但佢從未下過命令——屍骸自己識行
- 表情：瘋狂——嘴角扯開嘅笑或喊，眼神失焦但發亮；**女王姿勢 + 瘋子表情同時存在，冇一樣蓋過另一樣**，呼應「調停失敗——被理解恐懼的反彈」嘅心理設計
- 屍骸群形態多樣：呼應現有屍骸樂園收容「無主屍骸」嘅設定，唔止得小光一個
- 遠景城市燈光冷靜對比前景混亂——強化「幻象破滅」嘅諷刺感
- 範圍（夜區局部 / 波及日區）：本圖以夜區街道為準，日區波及範圍留待作者確認後再調整構圖

**Reference Images**：
- 紫音：`ConceptArt_Akane_CasualWear.png`（原列表另有晴香、夕，但本場景嘅圖片說明／詳細核心描述全程只描寫紫音企喺車頂嘅畫面，晴香同夕僅係劇情背景提及嘅事後因果角色、並無實際出現喺呢個畫面，已移除）



---

## 圖58：「操的夜中人偶製作」（Misao's Midnight Doll Assembly）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_58_Misao_MidnightDollAssembly.png`

### 劇情背景

`[WRONG→已修正 2026-07-17，時序+重複場景衝突]` 原文將本場景標為「113年11月至114年1月，Act II Phase D/E」，但依 `ayakomoji_misao.md §無心完美人偶`：「**紗夜死後**，操製作了一具完美的女性人偶軀殼……她親手打碎人偶，選擇回到殘缺但真實的身體」——紗夜死於「鏡像破碎之夜」（父親背叛+紗夜犧牲同一夜，E-09a，**Act II Phase C，113年7-8月**）；同一件事（人偶製作+打碎）在圖46「操回歸人類身軀」已於前一批次審計確認時間點為「Act II Phase C，E-09a後插曲，113年7-8月」——本場景時間應與圖46對齊，唔應標到數月後的Phase D/E。另外，原文「打碎人偶」結局動作同圖46 100%重複（同一事件、同一動作），造成兩個 spec 覆蓋同一高潮瞬間的重複問題；本場景收窄聚焦「製作」過程，打碎動作交由圖46專屬承載。

帝國歷113年7-8月，Act II Phase C，鏡像破碎之夜（父親背叛+紗夜犧牲）後的插曲。紗夜死後，操獨自在據點角落，用傀儡絲和零件製作一具完美的女性人偶軀殼，將自己的意識注入其中（ayakomoji_misao.md §無心完美人偶）。製作過程中手指滲血，她感覺不到痛，也感覺不到手的存在——這是Body Horror縫牙傷痛麻木化嘅延伸具現，唔嚴格對應CDL-233分期表入面嘅任何單一Stage（CDL-233主要描述牙齒/縫線階段，「無心完美人偶」屬另一條獨立嘅「插曲」，`DIGEST_CHARACTER_STATES.md` M-S6a 標記為非嚴格對應主線時序嘅事件）。完成時，她看著人偶，感受到一種冰冷的空洞——她終於擁有「完美的身體」，卻無法感受冷暖、無法流淚、無法觸碰（「沒有痛覺的完美，比地獄更可怕」）。→ 打碎人偶回到殘缺身體嘅動作見圖46「操回歸人類身軀」。

### 圖片說明

廢棄據點的深夜角落，一盞低光燈。操坐在地板上，面前是組裝到尾聲的人偶軀幹——精緻，完美，沒有臉部表情。她的手在縫製最後的細節，左手食指有一個滲血的小傷口，血珠凝在邊緣，沒有擴散——她感覺不到疼痛，感覺不到自己的手在哪裡，只有傀儡絲在動。完成的人偶在燈前靜立，操看著它的眼神：不是滿足，是冰冷的空洞感。她的手懸在人偶肩上，尚未動作——下一刻（見圖46）她將親手打碎它。

**劇情位置**：
- **時間點**：帝國歷113年7-8月（Act II Phase C，E-09a鏡像破碎之夜後插曲，與圖46同期對齊）
- **CDL追蹤**：`canon/03_characters/ayakomoji_misao.md §無心完美人偶`（主要依據）；CDL-233（Body Horror總體框架，僅作背景參照，唔直接對應本場景任何單一Stage）；`BEAT_SHEET_PREP_UNMAPPED_VISUAL_SCENES.md Scene B2`（來源文件本身標「Phase D/E 113年11月-114年1月」與canon對照後確認過時，已依`ayakomoji_misao.md`原文修正，未同步修改來源working檔）
- **前置事件**：SPEC#91操絲線縫牙（Body Horror Stage 2a物理層，同夜稍早）；鏡像破碎之夜（父親背叛+紗夜臨終揭露真相）
- **本場景功能**：「無心完美人偶」插曲的製作階段——感覺逐漸消失的「完美地獄」；「沒有痛覺的完美，比地獄更可怕」這句話的行為根源視覺化；同圖46構成同一事件嘅「製作」與「打碎」兩個階段，不重複覆蓋打碎瞬間
- **後續payoff**：圖46操回歸人類身軀（打碎人偶回到殘缺身體，本場景直接續接）；SPEC#1鋼鐵獨舞（同一角色弧線終局）

**Reference Images**：
- 操（便服）：`ConceptArt_Misao_CasualWear.png`

### 詳細核心描述（240字）

廢棄據點深夜角落。一盞電池燈，光圈很小。紗夜剛死去不久。

操坐在地板上，面前是組裝到尾聲的人偶軀幹：縫線精密，比例精準，關節活動範圍設計完美，手部的細節甚至有靜脈紋路。

她的左手食指有一個小傷口，血珠凝在邊緣。她不知道那個傷口什麼時候造成的——她感覺不到。她感覺不到手指的存在，只有傀儡絲在移動，只有縫製的動作在繼續。

人偶的臉是空白的，等待被填寫。

縫好最後一針，她把人偶放在燈前，看著它。

完美的比例。完美的縫線。完美的關節角度。沒有一絲誤差。

那份感覺不到任何溫度的注視持續了幾秒。她的手懸在人偶肩上。

她坐在那裡，沒有立刻移動——下一刻她會伸手打碎它（見圖46）。

### Midjourney 標準版

```
Dark anime. Abandoned hideout, late night corner with a single battery lamp, shortly after Sayo's death. Misao sitting on floor, having just finished assembling a perfectly crafted female doll — precise proportions, flawless seams, realistic vein details on hands. Her left index finger has a small wound, blood bead at the edge not spreading — she does not feel it. Puppet strings moving her fingers automatically. The completed doll lit by lamp. Her hand hovering at the doll's shoulder, not yet moving. Her face watching it: not satisfaction, only cold emptiness — the moment right before she will shatter it (continued in a separate scene). Colors: deep navy shadow, warm lamp circle, pale perfect doll surface, red blood detail. Emotional tone: perfect craftsmanship with zero sensation — the horror of feeling nothing at all, poised on the edge of destroying it. 8k, niji 6, style raw. --ar 9:16
```

**視覺重點**：
- 手指滲血但操沒有反應——「感覺不到自己的手」的行為化
- 傀儡絲控制縫製動作——魔法自動化與人格退場的視覺
- 人偶的空白臉部——完美外殼但無靈魂的鏡像
- 手懸在人偶肩上、尚未打碎——本場景停在「製作完成」瞬間，打碎動作交由圖46承載，避免重複
- 低光、孤獨的場景設計——這是沒有任何人知道的時刻

⭐⭐⭐⭐


---

## 圖59：「愛莉的童謠世界」（Aeri's Nursery Rhyme World）[BEAT_SHEET_PREP]

**建議輸出文件名**：`ConceptArt_Scene_Aeri_NurseryRhymeWorld.png`

### 劇情背景

**[CDL/規模修正 2026-07-17]**：本場景引用嘅 CDL-256，依已於圖65審計確認嘅結論（`ACT_II_OUTLINE.md` Sub-beat E-10b，113年9月，Act II Phase D），實際對應嘅係一次**單一防禦瞬間**——「紙皮騎士現實裂縫具現化擋刀一瞬，盔甲崩碎大半，石像同步深裂痕流血」，唔係本場景描述嘅「全副魔法少女形態揮劍力戰、救晴香於遍體鱗傷絕境」呢種大規模場面。兩者規模明顯唔夾，重複引用同一 CDL 描繪唔同尺度嘅事件（同圖65/圖64曾經出現嘅「CDL重用致規模混淆」屬同一類問題）。另外「愛莉第2次真正改變現實」呢個講法，`aeri.md` 同 timeline 只見「紙皮騎士守護（一）（二）」兩個錨點（分別對應美夜子噩夢場域、紫音崩潰期），並無明確嘅「晴香深度絕境全副武裝救援」場景記錄。**已標記**：本場景嘅具體戲劇規模（全副魔法少女形態、揮劍救晴香）`[NEEDS_FACT]`，只有「愛莉以有限材料（紙裝備/蠟筆太陽盾）換取沉重守護代價、持續消耗最終走向緋雨消失」呢個主題方向有 canon 依據（`aeri.md` §紙皮騎士守護、§緋雨）。以下敘述若生成時使用，須降低戲劇規模以貼近 canon 已confirm 嘅「紙皮盔甲擋刀」尺度，或明確標示為超出 canon 嘅戲劇化演繹：愛莉原本是石像，現實中毫無行動能力；然而當晴香陷入絕境時，愛莉以集體潛意識守門人身份具現出守護形態，用兒時親手為母親畫的蠟筆太陽盾（「給媽媽的太陽」在精神世界具現化為盾牌）和廉價紙裝備，以最脆弱的材料擋住最無法承受的力量。愛莉的出現不是奇蹟降臨，而是她長期作為情緒廢料濾心、每一道新裂縫每一圈新膠帶積累的代價，在關鍵一刻爆發成守護。她的持續消耗是後段緋雨（Crimson Storm）失控而消失的視覺預言（`aeri.md` §緋雨）。

### 圖片說明

愛莉長期以石像形式存在，默默承受著整座城市所有被壓抑的情緒廢料，每一道裂縫都是她為別人付出的代價。在晴香陷入最深絕境的瞬間，她用自己積累已久的全部代價化為守護——穿著廉價紙裝備，手握一把孩子的劍，站在遍體鱗傷的晴香面前。她知道自己用完這份力量後就會消失，仍然選擇站出來。

**詳細核心描述**（300-400字）：
**[視覺形態修正 2026-07-17]**：原文「紅紫色魔法少女服裝、銀色長劍」與 canon 確立嘅愛莉「紙皮騎士」視覺設計直接矛盾——`aeri.md` §紙皮騎士形態同 `DIGEST_CHARACTER_STATES.md` AE-S3 明確定義為「瓦楞紙箱盔甲+膠帶纏繞紙劍+蠟筆笑臉太陽紙盾（馬克筆寫『最強』）」，隨戰鬥損耗膠帶痕跡累積，唔係華麗長劍魔法少女服。已修正如下：

愛莉具現化守護——她以紙皮騎士形態出現在晴香面前。穿著瓦楞紙箱盔甲，手握膠帶纏繞的紙劍，另一手持蠟筆畫笑臉太陽紙盾（盾上馬克筆寫著歪歪斜斜的「最強」），紙裝備上佈滿累積的膠帶修補痕跡，她穩穩地站在晴香前面，架起紙劍作戰鬥姿態。

對比鮮明的是地上的晴香——滿面傷痕、瘡痍，衣衫破碎，整個身體都是戰鬥的痕跡。她舉起頭，眼神中充滿絕望與哀求，望向前方穩穩挺立的愛莉。在這一刻，愛莉成為了唯一的光——用最廉價的紙裝備擋住最無法承受的力量，為晴香築起防線。

童謠世界已碎裂，現實與魔法的界線模糊。愛莉的出現象徵著最後的救贖與希望，但同時也預示著她將付出最終的代價（緋雨消散）。呢種「以脆弱材料對抗巨大力量」嘅反差是愛莉角色設計嘅核心，唔應該用華麗魔法少女形態取代。**本場景嘅具體戲劇規模同對應 beat 仍 `[NEEDS_FACT]`（見上方劇情背景說明）。**

**Reference Images**：
- 愛莉（紙皮騎士形態）：`ConceptArt_Aeri_CasualWear.png`（原檔名 `ConceptArt_Aeri_CardboardKnight.png` 不存在，已自動替換為現有檔案）

**所需資源**：
- 愛莉的紙皮騎士形態（瓦楞紙盔甲/膠帶紙劍/蠟筆太陽盾，非魔法少女服裝）
- 地上傷痕累累的晴香形態
- 破碎的光幕濾鏡視覺效果
- 現實與童話世界衝突的環境


---

## 圖60：「愛莉具現化擋刀＋石像龜裂」（Aeri's Materialized Shield + Statue Cracks）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_60_Aeri_PaperKnight_StatueCracks.png`

### 劇情背景

Act II Phase D，E-10b附近。愛莉自Act I起以石像形式存在於秋穗家，她在集體潛意識中以「紙皮騎士」形態守護隊友——用紙板拼湊的騎士輪廓，沒有金屬，沒有魔法光輝，只有紙。這個場景以雙格分鏡呈現代價的雙重性：左格，紙皮騎士在戰場上擋住攻擊，紙板碎裂；右格，相隔空間的秋穗家石像同一瞬間出現第一道細裂縫。愛莉的每一次保護，都在遙遠的地方以靜止的方式被身體記錄。這條石像龜裂的長線積累終點是SPEC#40童謠救贖，是她以「人」而非「功能」的方式最終存在的前置代價。

### 圖片說明

愛莉在集體潛意識中以紙板拼湊的騎士輪廓守護隊友，紙板在碰撞中碎裂，她仍然站在晴香前方。同一瞬間，在遠處秋穗家的普通房間角落，愛莉以石像形式存在的身體悄悄出現了第一道細小的裂縫——沒有爆炸，沒有光效，只是靜靜地出現了那條縫。每一次保護都在另一個空間以這種安靜的方式被記錄，那些裂縫的積累，是她最終能以「人」的方式存在的前置代價。

**劇情位置**：
- **時間點**：Act II Phase D，E-10b附近
- **CDL追蹤**：CDL-256（石像龜裂）；aeri.md §紙皮騎士
- **前置事件**：愛莉自Act I起以石像形式存在，在集體潛意識中以「紙皮騎士」形態活動
- **本場景功能**：雙格分鏡——左格：紙皮騎士形態擋在晴香前方，紙板碎裂；右格：遠景中秋穗家石像出現第一道細裂縫；兩件事同時發生，象徵在物理世界留下代價
- **後續payoff**：SPEC#40童謠救贖；SPEC#20紙皮騎士防禦；石像龜裂的長線積累終點

**Reference Images**：
- 愛莉：`ConceptArt_Aeri_CasualWear.png`
- 晴香：`ConceptArt_Haruka_CasualWear.png`

**詳細核心描述**（200-350字）：

這張畫以雙格分鏡為核心視覺語言。左右兩格同一時間發生，共用同一條時間線，但空間完全不同。

**左格**（主要格，佔畫面三分之二）：

戰鬥現場，晴香身前。一個形態從現實邊緣具現化——這是愛莉的「紙皮騎士」形態：用紙板、撕裂的包裝材料、扁平的廢棄物拼湊而成的騎士輪廓。沒有金屬，沒有魔法光輝，只是紙板。它的形狀是「騎士」的——頭盔輪廓、肩甲輪廓、舉起的前臂——但材質完全不堅固。

攻擊剛剛發生。紙板在碰撞中碎裂——不是爆炸，是紙的方式的撕裂和碎散，碎片往四面散開，帶著空氣阻力緩慢飄落。紙皮騎士的形態因為這次碎裂而出現缺口，但它仍然站著，仍然在晴香前方。

晴香在後面，表情是震驚和不解——她不完全知道這是什麼，她只知道某個東西擋住了那次攻擊。

**右格**（次要格，佔畫面三分之一，細邊框）：

遠景，秋穗家的普通房間一角。靜物構圖，沒有人在場。石像佇立在其慣常的位置。

然後：一道細小的裂縫，從石像的左肩開始，向下延伸到胸口位置。裂縫窄，幾乎是頭髮絲的寬度，但清晰可辨。沒有爆炸，沒有光效，沒有聲音——只是靜靜的出現了這道縫。

兩格之間：左格動態（碎裂、散落），右格靜態（安靜的裂縫）。代價在另一個空間以靜止的方式被記錄。

**生成提示（Midjourney）**：
```
Style: split-panel manga-influenced illustration, dual simultaneous consequence, dark magical girl improvised defense, painterly with panel composition
Mood: protection that costs exactly what it can least afford, cardboard armor as tender absurdity, a crack appearing far away at the moment of sacrifice here
Colors: left panel — battle space dark neutrals, cardboard tan-brown of paper knight, white debris; right panel — quiet domestic room, stone grey of statue, single thin crack as only event
Composition: vertical split-panel format, left panel (2/3 width) — paper knight silhouette from cardboard scraps facing threat, shielding Haruka, cardboard pieces mid-scatter from impact; right panel (1/3 width, thin border) — static corner of ordinary room, stone statue with single hairline crack
Lighting: left panel dramatic battle light, right panel ordinary ambient room light making the crack the only visual event
Special effects: left panel — cardboard pieces in scattered slow-motion fall, paper knight edges slightly translucent; right panel — hairline crack as only focal element
Character: Paper Knight (humanoid silhouette from cardboard and packaging, shape of a knight but no structural integrity); Haruka (behind it, mid-shock); Statue (right panel, single thin crack only)
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
Split-panel composition: left two-thirds shows cardboard shield-shape stopping an attack in front of shocked teenage girl, cardboard scraps falling mid-air; right one-third shows stone statue in quiet ordinary room with single thin hairline crack appearing, both panels simultaneous, dark anime painterly style
--ar 16:9 --niji 6
```

---

**版本信息**：IMAGE_PROMPT_SPEC_FINAL_119_COMPLETE.md v3.0（持續更新中）
**最後更新**：2026-06-26
**內容完成度**：圖758-89 已完成；圖190-119 待 agent 結果寫入
**準備就緒**：可直接用於 Midjourney / DALL-E 3 生成及概念美術委外


---

## 圖61：「王國邊緣的盛宴」（Feast at the Kingdom's Edge）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_61_Akane_FeastAtEdge.png`

### 劇情背景

**⚠️ 2026-07-17 批次9審計修正**：原文將紫音照料嘅對象寫成「流浪貓」，但canon（`ACT_II_OUTLINE.md` [NC]暗線「王國邊緣的盛宴」，CDL-241/257）明確定義呢個場景嘅照料對象係**屍骸化後嘅小光**（Type B廢鐵型），唔係流浪貓——紫音「給變成廢鐵屍骸的『小光』餵食發霉糖果，以為自己『掌控』局面，建立了一個『冇傷害』的樂園（主題B：完美的幻象）」，呢個「扭曲母性」意象係E-07b已confirm嘅核心設計（「永遠懷抱屍骸化小光」），本場景將對象換成流浪貓會削弱呢條主題線嘅連貫性。時間點亦已精確化為「113年9月，E-11風暴前夕」（非跨年嘅「113至114年」），且屬平行剪接結構嘅一部分——同期主角團正經歷夜區絕望躲藏、剛經歷愛莉具現化擋刀嘅罪疚衝擊。

帝國歷113年9月，Act II Phase D，E-11風暴前夕。E-07b事件後紫音被主角團放逐，坐在廢棄糖果工廠自製嘅王座上，周圍是順從的屍骸群，給變成廢鐵屍骸嘅「小光」餵食發霉糖果——她以為自己「掌控」了局面，建立了一個「冇傷害」的樂園。這是同「幻象破滅——屍骸外流事件」（113年11-12月，E-12前夕）形成因果鏈嘅前段：本場景嘅「完美的幻象」將在數月後徹底破滅。白銀朔在夜區巡邏中遠遠目擊這一切，不靠近、不介入，但看見了「一個人在墮落為王之後，本質依然是暗巷餵食者」的悲劇底色。這個場景是SPEC#10糖果山犧牲前嘅情感蓄壓前置，也是「嘆息之橋」情感蓄壓的一部分。

### 圖片說明

帝國歷113年9月，紫音被放逐後盤踞在廢棄糖果工廠自製的王座上，周圍是順從她的屍骸群。她從皺縮的糖果紙袋裡取出一顆發霉的糖果，餵向懷中或身旁廢鐵屍骸化的小光——空洞的紅色眼窩微光、生鏽金屬拼湊的軀體仍保留兒童比例，右手仍握著發黑發霉、糖棍已鏽蝕嵌入手指無法放下的舊波板糖。紫音的神情是滿足的、平靜的，她以為自己建立了一個「冇傷害」的樂園。遠處，白銀朔站在陰影裡目擊這一切，沒有靠近。

**劇情位置**：
- **時間點**：帝國歷113年9月 Act II Phase D，E-11風暴前夕
- **CDL追蹤**：CDL-241／CDL-257（王國邊緣的盛宴，位置精確化）
- **前置事件**：E-07b紫音被放逐、小光已死並屍骸化（Type B廢鐵型）；紫音在廢棄糖果工廠建立屍骸樂園
- **本場景功能**：展示紫音自以為「掌控」局面、建立「冇傷害樂園」的幻象頂點——餵食對象是屍骸化的小光而非流浪貓，強化「扭曲母性」主題；白銀朔作為遠距見証者，平行剪接同期主角團的絕望躲藏
- **後續payoff**：SPEC#10糖果山犧牲的情感前置（她燃燒前的最後平靜）；「幻象破滅——屍骸外流事件」（113年11-12月）將徹底戳破本場景嘅「完美的幻象」

**Reference Images**：
- 朱音：`ConceptArt_Akane_MagicalGirl.png`
- 朔：`ConceptArt_Saku_CasualWear.png`
- 小光（屍骸形態）：`[NO_REF — 需另查ko_hikaru.md屍骸形態Type B廢鐵型描述]`

**詳細核心描述**（200-350字）：


廢棄糖果工廠深處，紫音自製的「糖果王座」——融化糖果與屍骸碎片堆成，四周有幾具順從的屍骸靜靜佇立。遠端一道冷白LED光柱從工廠破窗射入，把地面切成兩塊：帝國的光與被放逐的陰影。

紫音坐在王座上，皇袍裙擺拖在地面糖漬邊緣。這套袍子曾是白色的，現在混雜著糖漬的黃、灰塵的褐、夜區濕氣的黑。她的屍骸女皇狀態尚未完整，皮膚沒有完全碎裂，但嘴角有乾涸的糖漬。

她從一個皺縮的糖果紙袋裡取出一顆發霉的糖果，動作溫柔地餵向懷中的小光——100-120cm的廢鐵型屍骸，生鏽金屬碎片拼湊但保留兒童比例，空洞眼窩透出紅色微光，依然掛著破爛紅書包，右手握著發黑發霉、糖棍已鏽蝕嵌入手指無法放下的波板糖。糖果自然不會被「吃下」，但紫音的神情是滿足而平靜的，彷彿這個儀式本身已經足夠。

工廠另一端，朔遠遠站在陰影裡，沒有靠近。他看見這一幕，看見一個人如何在墮落為王之後，本質依然是暗巷餵食者——一個自以為「冇傷害」卻終將破滅的幻象。

構圖核心：低角度仰視，紫音與懷中小光在畫面中央偏下，LED光柱在後景斜切，朔的剪影在遠端，幾乎融入陰影。靜止。沒有風。


**生成提示（Midjourney）**：
```
Style: dark magical girl illustration, painterly ink wash, cinematic still
Mood: desolate tenderness turned into distorted maternal ritual, quiet devastation, the last warmth before extinction, a perfect illusion about to shatter
Colors: cold LED white light from far end of factory, deep shadow blues and grays, faint amber from old candy wrapper, desaturated purple robe stained with brown and black, rusted red-orange of the corpse child
Composition: low angle, wide shot, girl seated on a throne of melted candy and corpse fragments in lower center, cradling a rusted scrap-metal child-corpse and feeding it moldy candy, distant male silhouette barely visible at factory entrance, light column cutting diagonally across mid-ground
Lighting: harsh cold LED ambient from afar, no warmth at foreground, slight rim light on girl's shoulder and the corpse's rusted surface
Special effects: faint red glow from the corpse child's hollow eye sockets
Character: teenage girl in ruined white-purple robe covered in dried sugar and grime, hollow eyes, content faint smile, holding moldy candy toward a rusted scrap-metal child corpse with red-glowing eye sockets held in her arms, distant male silhouette watching from the shadows
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A teenage girl in a torn stained robe sits on a throne made of melted candy and scrap metal in an abandoned factory, tenderly feeding moldy candy to a small rusted scrap-metal child corpse with faintly glowing red eye sockets cradled in her arms. Distant cold LED light. A lone male figure watches silently from far away in the shadows. Melancholy, distorted maternal tenderness. No gore. Painterly dark anime style.
--ar 16:9 --niji 6
```


---

## 圖62：「凜重組後第一次遇見美夜子」（Rin's First Encounter with Miyako After Reassembly）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_62_Rin_MiyakoFirstEncounter.png`

### 劇情背景

`[已修正 2026-07-17]` 原文時間/CDL引用錯誤：CDL-215 實際係「凜三連爆兩個Outline beat設計」（E-III-01/02，Unit 00-Null 揭露，Act III），同凜/美夜子重逢完全無關（張冠李戴，全文件已知累計最高頻誤用編號之一）；E-05（偽王道二戰）內容亦同凜無關。

依 `ACT_II_OUTLINE.md` 行572-573 及 `rin.md` 行144，凜重組後同美夜子隊伍嘅接觸實際分兩層：**第一次**（Act I，普通交戰，「未有相認跡象」——雙方均無反應，非本場景描繪嘅「單向認出」）；**第二次**（Act II Phase D，E-11 愛莉潛意識風暴期間，「中段踏腳石」）——凜以管理局人員身份近距離接觸美夜子，觸發一次**無意識生理反應**（手指無意識收緊/見冰藍色心跳短暫停頓），冇對白冇自覺認知，純粹身體記憶碎片。至於「美夜子見到紅線、『喀嚓』記憶回潮、PTSD全面爆發」呢個完整揭露場景，`rin.md` 本身標為「第二幕」，但 `ACT_III_OUTLINE.md` E-III-H1（CDL-215 E-III-01）將「觀眾知道凜已死並被重組」明確安排喺 **Act III Phase H（114年4月）**——rin.md 同 ACT_III_OUTLINE.md 對呢件事嘅 Act 歸屬有直接矛盾，已入 QUESTION_QUEUE（QQ-170），唔可以自行判斷邊個先啱。

本場景原文「凜評估、排除威脅、繼續走，毫無反應」呢個設計，同任何一個版本嘅canon都唔夾——canon 三個版本（Act I 首次交戰、E-11踏腳石、rin.md紅線觸發）全部都有凜嘅身體無意識反應（手指收緊/短暫失神），冇一個版本係「凜完全冇反應、乾脆利落走過」。

### 圖片說明

`[NEEDS_FACT：具體beat歸屬待QQ-170解決，暫按E-11「中段踏腳石」處理，場景細節按此收斂]` 帝國歷113年，美夜子以貓形態在機構走廊裡近距離接觸被帝國改造成情緒管理局公務員的凜——同一張臉，但記憶已被全部抹除。美夜子的爪子往前伸出，不是攻擊，是「你認得我嗎」的本能姿勢。凜的語義記憶對此毫無反應，但她的手指在美夜子擦身而過的瞬間無意識地微微收緊——她自己都察覺不到，這是身體比大腦更早「知道」某件事的痕跡。她繼續走，背影筆直，腳步沒有停頓，只有那個瞬間的手指洩露了一切。美夜子的爪子懸在空中，什麼都沒抓到，看著凜的背影縮小消失在走廊盡頭。

**劇情位置**：
- **時間點**：帝國歷113年9-10月 Act II Phase D，E-11「中段踏腳石」附近（`[NEEDS_FACT]`：確切beat歸屬待QQ-170——rin.md標「第二幕」/ACT_III_OUTLINE.md標Act III Phase H，兩者矛盾未解決）
- **CDL追蹤**：`ACT_II_OUTLINE.md` 行572-573（凜嘅無意識反應Plant）；rin.md §被重組、§中段踏腳石；miyako.md §凜之死PTSD（CDL-215 已移除，實際屬 Act III Unit 00-Null 揭露，與本場景無關）
- **前置事件**：凜108年重組為情緒管理局公務員；此為凜同美夜子隊伍第二次近距離接觸（第一次為Act I普通交戰，未有相認跡象）
- **本場景功能**：以美夜子的視角展示「她認出了她，但她不認識我」的單向創傷。凜並非完全無反應——她有一絲自己都無法解讀的無意識生理反應（手指收緊），但沒有語義層面嘅認知。這一幕是美夜子PTSD弧光其中一個關鍵鋪墊點。
- **後續payoff**：美夜子PTSD弧光鋪墊；`rin.md`「紅線觸發」完整PTSD爆發場景（beat歸屬待QQ-170）；CDL-274月下相認才能彌合的傷口

**Reference Images**：
- 凜（情緒管理局制服）：`ConceptArt_Rin_TheAdministrationBureau.png`
- 美夜子（貓形態）：`ConceptArt_Miyako_Cat.png`

**詳細核心描述**（200-350字）：


某條建築物的走廊，或是機構通道。光線是正常的辦公室日光，平凡而無情。

凜穿著情緒管理局制服（深色，正式），步伐穩定，目視前方。她的頸上有紅色縫合線，但在這個光線角度下不明顯，只是一道淡痕。她是一個工作中的公務員，什麼都沒有。

美夜子（貓形態，白色毛，冰藍眼睛）從側面的角落走出來，擋在走廊裡。她的爪子向前伸出——這個姿勢是什麼？不是攻擊，不是阻攔，更像是「我在這裡，你認得我嗎」。她的貓毛在肩線處微微豎起，不是威脅的豎毛，是身體自己反應了某個東西，她控制不了。

凜的視線幾乎沒有落在她身上——語義層面完全沒有反應。但繞過美夜子的瞬間，她的手指有一絲極輕微的收緊，一閃即逝，連她自己都不會意識到。繼續前進。背影筆直，腳步沒有停頓。

美夜子的爪子懸在空中，什麼都沒抓到。她沒有追，沒有叫，她只是停在那裡，爪子還停在空中，看著凜的背影縮小消失在走廊盡頭。

構圖核心：縱深走廊構圖，凜的背影在遠端，美夜子在近景，爪子向前伸出但抓空。畫面的焦點在美夜子，凜的背影是虛化的遠景但構圖重心，兩者之間的距離是這張圖的主題。


**生成提示（Midjourney）**：
```
Style: dark magical girl illustration, corridor depth, emotional restraint
Mood: one-way recognition, grief without receiver, the horror of being unknown
Colors: cold institutional corridor lighting, neutral gray-blue walls, white cat fur, dark uniform receding in distance
Composition: deep corridor perspective, white cat in foreground with paw extended forward reaching nothing, dark-uniformed girl walking away in far background, backs turned
Lighting: flat institutional overhead, no drama, ordinary light makes it worse
Special effects: faint red scar line at neck of distant figure, barely visible
Character: small white cat with ice-blue eyes, paw raised and reaching, fur slightly raised at shoulders; distant girl in dark uniform walking away, posture neutral, does not look back
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A white cat in a hallway extends its paw toward a girl in a dark uniform who walks away without looking back. Empty corridor. Cold fluorescent light. Quiet devastation. Dark anime style.
--ar 9:16 --niji 6
```


---

## 圖63：「朔看見Unit 01的臉」（Saku Sees Miyako's Face on Unit 01）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_63_Saku_SeesUnit01.png`

### 劇情背景

`[已修正 2026-07-17，核心細節錯誤]` 原文以「眼睛」作為識別錨點、以「遠距離」構圖，同canon不符。依 `ACT_II_OUTLINE.md` 行568-571（2026-07-06 co-design）：朔嘅識別依據係**近距離**目擊黑貓（美夜子）打鬥/護人一刻，見到佢**左耳的星形飾物**——同自己一直隨身戴住嘅月亮耳環對應（「星月相隨」約定），呢一刻令佢懷疑由「懷疑」升級到「接近確信」，但**未到100%確認**；真正嘅既視感追認完整Payoff留返114年4月正式發生（Act III）。事件本身發生喺 **E-11 愛莉潛意識風暴**嘅混亂現場（朔為咗貼近黑貓求證而破例現身介入危機處理），唔係一次獨立、平靜嘅遠距離監視任務；美夜子此刻仍為**貓形態**（人形戰鬥形態Unit 01要到Act III先穩定出現），Reference Image需相應修正。

帝國歷113年9-10月，Act II Phase D，E-11愛莉潛意識風暴期間，朔一反常態破例現身直接介入危機處理，藉機貼近黑貓求證自己一直懷疑的事。近距離目擊美夜子（黑貓形態）打鬥/護人一瞬，見到她左耳的星形飾物——同自己一直隨身戴著的月亮耳環對應。這一刻朔的懷疑由「懷疑」升級到「接近確信」，但未到100%確認；真正的既視感追認留待114年4月正式發生。風暴平息後，朔繼續退返暗中觀察模式，不向隊伍表露身份。

### 圖片說明

Act II Phase D，愛莉潛意識風暴的混亂現場，朔破例現身介入危機處理。近距離目擊黑貓（美夜子）打鬥護人的一瞬，他的視線落在她左耳一枚小小的星形飾物上——同自己耳上那枚月亮耳環對應。他的表情不是震驚，是一個「懷疑升級到接近確信」的靜止，但仍未到百分之百確定。風暴平息後，他不動聲色地退回暗處，繼續他一直以來的觀察模式，不向任何人表露身份。

**劇情位置**：
- **時間點**：帝國歷113年9-10月 Act II Phase D，E-11愛莉潛意識風暴期間（原文「Act II Phase D」大方向不變，具體事件已收斂為E-11）
- **CDL追蹤**：`ACT_II_OUTLINE.md` 行568-571（朔嘅證據Plant：星形耳飾/月亮耳環對應）；`saku.md` §既視感追認——從臉孔辨識到行為辨識（原引用「saku.md §美夜子」格式無效，已修正）
- **前置事件**：愛莉潛意識風暴爆發，朔以外勤特工身份破例現身直接介入危機處理，藉機貼近黑貓求證
- **本場景功能**：朔嘅識別Plant——近距離目擊星形耳飾，懷疑升級到接近確信，但非100%確認。這確立了朔作為「見証者」而非「介入者」的位置，也是他114年4月正式既視感追認的鋪墊。
- **後續payoff**：114年4月正式既視感追認（行為辨識，非外觀辨識）；CDL-274月下相認相關線

**Reference Images**：
- 朔：`ConceptArt_Saku_CasualWear.png`
- 美夜子（貓形態）：`ConceptArt_Miyako_Cat.png`（原引用MagicalGirl人形戰鬥形態有誤——此階段美夜子應為貓形態）

**詳細核心描述**（200-350字）：


E-11愛莉潛意識風暴的混亂現場——扭曲的後巷唐樓、崩塌的建材、慌亂的人群與屍骸交戰的痕跡。朔難得地破例現身，直接介入危機處理。

美夜子（貓形態，白色毛皮，冰藍眼睛）正在打鬥或護人，動作迅捷。她左耳上有一枚不起眼的小小星形飾物，在混亂中隨著動作偶爾閃現。

朔貼近她的距離很近——這是他長期以來刻意保持距離之後罕有的例外。他的視線精準地落在那枚星形飾物上，不是她的臉，不是她的眼睛，而是那個具體的、對應著他自己耳上月亮耳環的細節。

他的表情是一種混合了震動與克制的靜止——不是完全的確認，是「懷疑被大幅推進」的那種顫動。他沒有說話，沒有伸手，風暴平息後他便退回暗處，繼續他一直以來的觀察者姿態。

構圖核心：近景或中近景，美夜子（貓形態）在動態打鬥/護人姿勢中，左耳星形飾物是畫面的視覺焦點之一；朔在稍遠但仍屬近距離的位置，視線精準對準那枚飾物，背景是風暴造成的混亂場景。


**生成提示（Midjourney）**：
```
Style: dark magical girl illustration, chaotic urban unconscious-storm backdrop, close-range recognition
Mood: recognition through a single specific detail, doubt escalating toward near-certainty but not confirmed, restraint amid chaos
Colors: storm-distorted back-alley palette (collective unconscious erosion), white cat fur catching stray light, a tiny star-shaped ear ornament as the one precise focal detail
Composition: close-to-mid distance, white cat mid-motion in combat/protective stance with star-shaped ear ornament clearly visible, male figure close by with focused gaze locked on the ornament, chaotic storm debris in background
Lighting: harsh fragmented light from the collective-unconscious storm, ornament catches a distinct glint
Special effects: star-shaped ear ornament rendered as the single sharpest, most detailed element in the frame
Character: white cat with ice-blue eyes in dynamic action pose, small star-shaped ornament on left ear; nearby male figure with quiet trembling-restrained expression, eyes fixed on the ornament, not her face
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A white cat with ice-blue eyes fights in a chaotic storm-torn back alley, a small star-shaped ornament visible on its ear. A young man stands close by, his gaze fixed intently on that ornament rather than the cat's face — quiet, trembling recognition amid chaos. Dark anime style.
--ar 16:9 --niji 6
```


---

## 圖64：「集體潛意識之城」（Collective Unconscious City）

**建議輸出文件名**：`ConceptArt_Scene_64_CollectiveUnconscious_Storm.png`

### 劇情背景

集體潛意識空間（CDL-193）係帝國 Emo-Visor 長期壓制全城情緒廢料所形成的共同夢境基質，以無盡後巷與舊唐樓景觀具現。Act II Phase D 末期，愛莉作為「活體濾心」長達六個月承接全城負面情緒廢料，帝國衛生行動引發群體恐慌成為最後一根稻草（CDL-252），潛意識盾牌碎裂，風暴爆發。從未被消化的全城創傷以黑色淤泥與扭曲人臉的形式浮現，守恆定律 Layer 2（CDL-247）的代價在此具現：主角團六個月的僥倖生存，全數建立在一個孩子透支靈魂的基礎之上。愛莉以「紙皮騎士」形態在此空間守護隊伍（CDL-256），成為後段 Act III 決戰的情感前置。

### 圖片說明

整座城市長期被情緒壓抑系統管控，那些從未被正視過的恐懼和痛苦沉積在每個人心底，最終在一個共同的夢境空間中爆發——後巷的唐樓扭曲成噩夢景觀，黑色淤泥從地面湧出，無數張痛苦的臉從水面浮現。一個穿著紙板盔甲的小女孩站在暴風的中心，用最脆弱的材料守護著她身旁的每一個人。

**Reference Images**：
- `[NO_REF]`（本場景以「紙皮騎士」「隊伍」統稱，冇明確指名個別角色（愛莉具現化形態，但表格主要角色欄未直接列出人名））

**簡化描述**（150-200字）：
後巷唐樓景觀扭曲成超現實夢境空間，黑色淤泥與痛苦人臉從水面浮現。紙皮騎士守護隊伍，紙盔甲在風暴中飄零。集體潛意識的底層恐怖以具體視覺化呈現。

**生成提示**：
```
Style: Surreal dreamscape; horror elements; urban decay meets psychological horror
Mood: Collective trauma; protection in impossible spaces
Colors: Deep gray-blue, black sludge, translucent ghostly faces
Composition: Towering buildings warped; foreground figures; storm elements
Lighting: Diffuse dream-like glow with dark shadows
Canvas: Widescreen to emphasize landscape scope
```


---

## 圖65：「紙皮騎士防禦」（Cardboard Knight Defense）

**建議輸出文件名**：`ConceptArt_Scene_65_CardboardKnight_Defense.png`

### 劇情背景

`[OUTDATED，已修正]` 原文將本場景籠統標為「集體潛意識風暴（CDL-188/252）」，同 E-11 全面風暴（圖64「集體潛意識之城」）混淆。依 `ACT_II_OUTLINE.md` Sub-beat E-10b（CDL-256，113年9月，E-11 前數日），本場景實際係一個獨立、更早、更短暫嘅單一時刻，唔係 E-11 嘅持續性風暴守護：夢中一直沉默的紙皮騎士（愛莉）突然在現實裂縫中具現化一瞬，用紙劍強行擋下攻擊——盔甲崩碎一大半；同一瞬間，愛莉石像在日區實驗室同步出現深裂痕、流出深紅色液體。此為晴香首次將「夢中守護者+石像裂痕」連成一線，為數日後 E-11 風暴全面爆發做最後情感鋪墊。愛莉的紙皮騎士形態係前史事故遺留的靈魂形態（CDL-013）。**與圖64區分**：圖64「集體潛意識之城」係 E-11 本身（113年9-10月，全面風暴、紙皮騎士持續守護隊伍）；本場景係 E-11 前數日嘅單一防禦瞬間（E-10b），規模同性質都唔同，唔可以互相替代。

### 圖片說明

愛莉是一個以石像形式存在的小女孩，長期默默承受著整座城市所有被壓抑的情緒，沒有任何人知道她為此付出了多大的代價。在一次現實裂縫的瞬間，她以紙板盔甲和紙劍具現化，用一個孩子所能給予的最大力量擋住了攻擊——代價是盔甲崩碎大半，而在她存在的地方，石像也同時出現了深深的裂縫。這是全面風暴爆發前的最後一次獨自守護。

**Reference Images**：
- 愛莉：`ConceptArt_Aeri_CasualWear.png`

**簡化描述**（150-200字）：
穿著紙盔甲的愛莉（小女孩形態），手持紙盾守護隊友對抗集體潛意識風暴。紙盔甲看起來脆弱但堅定，這是夢境中愛莉能提供的最大保護——希望本身。

**生成提示**：
```
Style: Whimsical yet serious; paper craft aesthetics in dream space
Mood: Childlike courage; fragile but determined protection
Colors: Cardboard browns, pale dream-space blues, warm character highlights
Composition: Small figure central; shadowy threats surrounding; shield forward
Lighting: Soft dream-like glow; contrast with threatening darkness
Canvas: 3:4 portrait ratio
```


---

## 圖66：「困獸的慈悲——朔見証之夜」（Trapped Beast's Mercy: Saku's Witness Night）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_66_Saku_WitnessNight.png`

### 劇情背景

**⚠️ 2026-07-17 批次9審計修正（核心概念全面重寫）**：原文將本場景寫成「朔帶食物到廢棄地鐵站陪伴躲藏中嘅晴香」——呢個內容完全係錯誤挪用咗SPEC#92「美夜子無價值留守」（CDL-191，美夜子帶沒氣可樂陪伴晴香）嘅情節結構，再將主角由美夜子換成朔、地點沿用同一個廢棄地鐵站。但canon（`ACT_II_OUTLINE.md` [NC]暗線「見証之夜」，CDL-260）明確定義嘅「困獸的慈悲——朔見証之夜」係完全不同嘅內容：**地點係下水道外圍**（主角團秘密活動區域邊界），唔係廢棄地鐵站；**朔嘅視角係透過狙擊鏡遠距觀察**，唔係到場遞食物；核心事件係晴香遭遇夕嘅黑色能量從地面逆流纏住她左半身、異化為黑色爪子準備掠食性吸取一隻衰弱屍骸，晴香用右手死命叉住自己左手手腕、以自傷般的痛楚強行壓制掠食本能，壓制成功後再用那雙流血的手爬向屍骸溫柔安慰陪伴直至它化為光塵消散——朔目睹嘅係「自殘式的殘暴」與「溫柔的照顧」同時發生在同一雙手上，因而由「視晴香為異常個體/監控獵物」轉變為「心理盟友」。CDL-191（美夜子留守遞可樂）係另一個獨立場景，已由SPEC#92正確覆蓋，唔應該同本場景混用。

帝國歷113年8月中旬，Act II Phase D中期，[NC]暗線「見証之夜」（CDL-260）。主角團在下水道外圍遭遇一隻衰弱屍骸。法則·熵增的黑色能量從地面逆流纏住晴香左半身，將她的左手異化為黑色爪子，準備對屍骸進行掠食性吸取。關鍵時刻，晴香的右手死命叉住自己的左手手腕，用自傷般的痛楚強行壓制黑色爪子的掠食本能——滿頭大汗、渾身顫抖、血液滲出、呼吸急促，完全的物理對抗。完成壓制後，她用那雙流血的手爬向屍骸，溫柔地撫摸、安慰、陪伴它，直到它化為光塵消散。朔透過狙擊鏡在遠處目擊了這一切：不是主動的善良，而是被強制進行的選擇——壓制自己的怪物本能與保護他者的溫柔，兩種相反的衝動同時生效在同一雙手上。朔由此意識到「晴香的溫柔不是天生天性，而是每一次都在深淵邊緣用鮮血與意志力強行扼殺自己的惡意」——這是朔從「冷血獵人」變成「死忠盟友」的不可逆轉點。

### 圖片說明

帝國歷113年8月中旬，下水道外圍。晴香的左半身被黑色能量纏繞，左手異化成黑色的爪，正準備向一隻衰弱屍骸掠食性撲去。她用右手死命叉住自己的左手手腕，指節因用力而發白，血從指縫滲出，滿頭大汗、渾身顫抖——那是一場只靠自傷痛楚才能壓下的物理對抗。壓制成功後，她用那雙流血的手緩緩爬向屍骸，溫柔地撫摸它，陪伴它直到化為光塵消散。遠處，朔透過狙擊鏡的圓形視野注視著這一切——他看見的是同一雙手，既是自殘的兇器，也是溫柔的照顧。

**劇情位置**：
- **時間點**：帝國歷113年8月中旬 Act II Phase D中期，[NC]暗線「見証之夜」
- **CDL追蹤**：CDL-260；saku.md §見証
- **前置事件**：主角團在下水道外圍遭遇衰弱屍骸；夕的黑色能量從地面逆流纏住晴香左半身
- **本場景功能**：晴香以自傷式壓制對抗自己被異化的黑色爪子，成功後溫柔陪伴屍骸消散至光塵；朔透過狙擊鏡遠距目擊「自殘的殘暴」與「溫柔的照顧」同時發生在同一雙手上
- **後續payoff**：朔從「冷血獵人」升級為「心理盟友」的不可逆轉點；Phase D隱形支援升級的心理錨點；Act III倖存者身份確認前置

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`
- 朔：`ConceptArt_Saku_CasualWear.png`

**詳細核心描述**（200-350字）：

下水道外圍，主角團秘密活動區域邊界。潮濕陰暗，管道與磚牆交錯，遠處有滴水聲。

畫面中心，晴香跪在地上，她的左手已經異化——不再是人的手，是黑色的、帶著獸性尖爪的形狀，正伸向一隻蜷縮在角落、明顯衰弱的屍骸，一種掠食性的姿態。她的右手死命叉住自己的左手手腕，指節因用力泛白，皮膚被自己的指甲掐出血痕。她滿頭大汗，渾身在顫抖，呼吸急促——這是一場純粹的、物理性的自我對抗。

壓制成功後（或畫面呈現壓制剛剛完成的瞬間），她的雙手已沾血，卻緩緩伸向那隻屍骸，輕輕撫摸它的殘破軀體。她的表情從對抗的猙獰轉為近乎母性的溫柔。屍骸開始在她的觸碰下化為微光的塵粒，緩緩消散。

遠景，畫面邊緣或一角，能看見一個圓形的狙擊鏡視野暗角——朔正透過鏡頭觀察這一切，距離遙遠，他的表情藏在鏡頭之外，但那個圓形取景本身就在訴說「他在看，但他沒有靠近」。

整個畫面的色調是下水道的濕冷藍灰，唯一的暖色是晴香手上的血與屍骸消散時的微光。

**生成提示（Midjourney）**：
```
Style: dark magical girl body horror + tenderness duality, sniper-scope framing device, painterly with cinematic distance
Mood: self-inflicted violence as the only way to protect others, mercy earned through pain, being watched without being saved
Colors: cold damp sewer blue-grey, harsh black corruption on Haruka's left arm, red blood at wrist, faint warm dissolving light from the dying corpse, distant cold scope-vignette
Composition: Haruka center, right hand clawing down on her own black-clawed left arm, blood visible, trembling; corpse creature crouched nearby beginning to dissolve into light particles under her other tender touch; circular sniper-scope vignette at frame edge implying distant observer
Lighting: dim sewer ambient, single distant light source, faint warm glow from dissolving corpse as contrast
Special effects: black clawed corruption on left arm with sharp irregular edges, blood at wrist, soft dissolving light particles rising from the corpse, circular scope-vignette darkening frame corners
Character: Haruka (kneeling, left arm transformed into a black claw reaching toward a corpse, right hand clawing her own wrist to suppress it, sweating, trembling, blood visible, expression shifting from feral struggle to tenderness); distant corpse creature (weak, dissolving into light); Saku (implied only through distant sniper-scope vignette, not directly visible)
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A girl kneeling in a damp sewer tunnel, her left arm transformed into a black clawed monstrous shape reaching toward a weak corpse creature, her other hand clawing at her own wrist in bloody self-restraint, sweating and trembling; the corpse creature beginning to dissolve into soft light particles under her other tender touch; a circular sniper-scope vignette at the frame edge suggesting a distant hidden observer, cold damp blue-grey palette, painterly dark anime style
--ar 16:9 --niji 6
```


---

## 圖67：「紫音下水道野獸化」（Shion's Sewer Beastification）[ACT_II] ⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_67_67.png`

### 劇情背景

帝國歷113年8月末至114年1月，Act II Phase E/F，紫音被放逐後的流浪期間。失去小光、被隊友「放逐」、屍骸樂園崩潰——這連串事件讓紫音陷入最深的孤獨。她在夜區下水道半屍骸化流浪，身體崩壞緩慢但持續進行。她幾乎失去語言，只剩本能：囤積食物、照料流浪屍骸、珍藏小光的波板糖包裝紙殘片（CDL-213/229；BEAT_SHEET_PREP Scene B3）。這個場景是Act III主角團找到她時「太晚了」感受的情感前置——她是可以被救的，但需要付出比想象中更大的代價。

### 圖片說明

城市下水道的某個角落，紫音半蹲在積水裡，周圍聚集著幾隻廢鐵型屍骸和流浪狗。她的魔法少女服破損嚴重，沾滿污泥，嘴角沒有收起，低階的鯊魚齒在昏暗中隱約可見。她的眼睛還有人的光，但已經需要努力維持。她的手裡攥著一個皺縮的糖果包裝紙——那是小光給過她的波板糖的遺物，她一直帶在身上。

**劇情位置**：
- **時間點**：帝國歷113年8月末至114年1月（Act II Phase E/F，流浪期間）
- **CDL 追蹤**：CDL-213；CDL-229；iwakura_akane.md §流浪期間
- **前置 → 本場景 → Payoff**：小光屍骸化+紫音被放逐（Act II Phase B） → 本場景：下水道流浪、身體崩壞持續、人性仍在艱難維持 → Phase G主角團搜索、找到她時的情感衝擊（「太晚了」）

**Reference Images**：
- 紫音（半屍骸化流浪版）：`ConceptArt_Akane_MagicCorpse.png`（原檔為MagicalGirl，本場景描述紫音「魔法少女服破損嚴重、低階鯊魚齒隱約可見」屬半屍骸化狀態，改用MagicCorpse更貼合）

### 詳細核心描述（250字）

夜區下水道。混凝土拱頂滲水，城市的霓虹通過格柵蓋滲入一道道冷色光紋，把積水切成紫藍和暗橙。下水道另一頭傳來遠處城市的聲音——但這裡只有積水聲和屍骸的機械低嗚。

紫音半蹲在水裡，蹲姿比坐姿更接近動物——重心低、膝蓋外展、本能地縮小佔地。她周圍聚集了幾隻廢鐵型低階屍骸，和兩條流浪狗。她沒有說話，偶爾發出低沉的聲音，不完全是人的語言，但屍骸和狗都理解。

她的右手攥著一個小小的東西——皺縮到幾乎無法辨認的糖果包裝紙。彩虹色的，上面印著卡通圖案，那是小光給過她的波板糖的包裝紙殘片。她沒有展開它看，只是攥著，像是要通過握住它來維持某個比野獸更多一點的記憶。

她的眼睛還有人的光。這是整張圖最重要的細節：她沒有完全失去自己，但已經需要非常努力地維持。

構圖核心：下水道橫截面廣角，紫音在畫面中央偏下，屍骸和流浪狗在她周圍，城市格柵光紋從頭頂斜切下來，她是被遺忘的空間中最後一個還有人的光的東西。

### Midjourney 標準版

```
Style: dark magical girl illustration, grimy environmental realism, character study
Mood: abandoned despair, the last remnant of humanity in a feral body, tenderness among ruins
Colors: dark sewer tunnel with cold neon-purple and dim amber light filtering through street grates above, polluted standing water reflecting city colors, torn dirty magical girl costume in purple and candy colors
Composition: wide angle cross-section of sewer tunnel, girl crouching low center frame with animal posture, two or three iron-scrap undead creatures nearby, stray dog curled by her knee, city grate light cutting diagonally from above
Lighting: harsh neon filtered through sewer grates from above, creating stripe patterns on water, face partially lit with one cold light source
Special effects: very faint shark teeth visible in shadow, crumpled candy wrapper clutched in hand barely visible
Character: teenage girl in torn dirty magical girl costume crouching with unnaturally low center of gravity, hollow-seeming eyes still holding a faint human light, holding something small and crumpled, surrounded by scrapped figures and a stray dog
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

**視覺重點**：
- 眼睛仍有人的光是這張圖的核心——不是完全的獸，還是人，但在艱難的臨界邊緣
- 糖果包裝紙要微小，攥在手中，觀者可能需要仔細看才發現，但一旦看見就明白一切
- 下水道環境要有城市聲光的滲入，強調「被遺忘於城市之下」的對比


---

## 圖68：「無名男孩速寫簿」（The Anonymous Boy's Sketchbook）[ACT_II_III]

**建議輸出文件名**：`ConceptArt_Scene_68_Misao_SketchbookRevelation.png`
### 劇情背景

`[時間已修正 2026-07-17]` 原文標「Act II末至Act III初」有誤——依 `04_timeline_canon.md` §event-nameless-boy-death 及 `ACT_II_OUTLINE.md` Beat E-13（CDL-145，行644），無名男孩之死明確屬 **Act II Phase E（英雄の刑場），113年11月-114年1月，具體114年1月**，非跨Act II/III邊界事件。操此前於 Act I 隊伍日常期間（CDL-146）與一個普通男孩建立了她人生中第一段「非功效主義」的關係——不是有目標的連結，只是存在。男孩於 E-13（114年1月）死去，操在遺物中發現速寫簿（CDL-143/145；`ayakomoji_misao.md` §無名男孩與速寫簿）。速寫簿記錄的全是操「以為沒人看到」的不完美時刻——歪著頭看書、睡著、說了讓自己尷尬的話之後的表情。配上那句旁注，這是操「永遠之罪」誕生的時刻（P-C02 Plant），也是她後來 Act III Day13 選擇接受自身不完美的三層動機之一（CDL-148/300：紗夜之死+無名男孩之死+母親靈魂碎片重逢）。

### 圖片說明

操一個人翻開遺物速寫簿。每一幅都是她——但沒有一幅是她刻意呈現的完美版本：歪著頭看書，皺眉計算，睡著了，說了什麼讓自己尷尬的話之後的表情。旁邊的字寫得認真：「其實她不那麼完美的時候，才是最美的。想告訴她，不用那麼用力也可以。」操的手停在那一頁上。沒有翻頁。沒有哭。但有些什麼停住了。

**劇情位置**：
- **時間點**：Act II Phase E，113年11月-114年1月（具體114年1月，Beat E-13）
- **CDL追蹤**：CDL-143/144/145/147；`canon/03_characters/ayakomoji_misao.md §無名男孩與速寫簿`
- **前置事件**：操與某個普通男孩建立了第一段「非功效主義」的關係（Act I CDL-146暗戀線植入），男孩於 E-13 死去
- **本場景功能**：操「永遠之罪」誕生（P-C02 Plant）；操第一次理解她的「不完美」對另一個人來說恰恰是「最美的」
- **後續payoff**：`[已修正：原文列SPEC#5為後續payoff時序有誤——SPEC#5「操的鏡前獨白」發生於Act II E-09a（113年7-8月），早於本場景（114年1月），不能作為本場景嘅下游payoff]`。正確下游：Act III Day13 SPEC#1「鋼鐵獨舞」——CDL-148/300 三層動機（紗夜之死＋無名男孩之死＋母親靈魂碎片重逢）疊加，令「鋼鐵獨舞」與「人偶牆」從罪疚驅動昇華為主體性聲明

**Reference Images**：
- 操（便服）：`ConceptArt_Misao_CasualWear.png`

**Creative Enhancements**：
- 場景：遺物速寫簿，操一個人翻開的瞬間
- 速寫簿內頁：全是日常的操——歪著頭看書、皺眉計算、睡著了、說話說到一半表情漏出來
- 每一幅都是「她以為沒人看到」的時刻，沒有一幅是她刻意呈現的完美面
- 畫面中手寫旁注（部分可見）：「其實她不那麼完美的時候，才是最美的。」
- 操的反應：手停在速寫簿上，沒有翻頁，整個計算系統停止

**詳細核心描述**（200字）：

操一個人，遺物，速寫簿。

每一幅都是她——但是她從未選擇展現的自己。歪著頭、皺著眉、睡著了、剛剛說了什麼讓自己尷尬的話之後的表情。都是「不完美的她」。

旁邊的字寫得不特別工整，但很認真：「其實她不那麼完美的時候，才是最美的。想告訴她，不用那麼用力也可以。」

操的手停在那一頁上。沒有翻頁。

沒有哭。但有些什麼停住了。

**生成提示（Midjourney）**：
```
Style: Dark anime; intimate close-up study; quiet emotional weight
Mood: Discovering someone loved exactly the part of yourself you were most ashamed of
Colors: Warm paper tone of sketchbook; pencil sketch grey; cool dark background; single light on the page
Composition: Close-up of hands on open sketchbook; sketches of candid unguarded moments visible; handwritten note partially readable
Lighting: Single focused lamp on page; everything else in shadow
Details: Sketches show off-guard moments — none show the perfect version; hand frozen mid-page not turning
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```


---

## 圖69：「光幕濾鏡破碎」（Light Veil Shatters）

**建議輸出文件名**：`ConceptArt_Scene_69_LightVeil_Shattered.png`

### 劇情背景

E-09「飢餓的天使」直播事件（CDL-259）係 Act II Phase C 的核心崩塌節點。夕在 E-08 末刻意令晴香遭屍骸爪擊，觸發「戒斷反應型情緒飢渴」的半屍骸化副作用。E-09 直播中夕接管晴香，晴香因半屍骸身份失控開始吸食圍觀者正面情緒，夕隨即物理撕破光幕濾鏡裝置——無濾鏡版本的失控（左手黑色爪、屍骸眼光芒、扭曲吸食）被直播鏡頭完整記錄並即時傳播（CDL-259）。SNS 輿論逆轉「維多利亞天使」→「情緒吸血鬼」，帝國以此作法律依據推動反魔法少女法案，主角團從「非法默許」直接跌入「公開通緝」。此場景是晴香「偽王道覺醒」中最深的羞辱，亦是 Act II Phase D 地下化的直接前置。

### 圖片說明

晴香一直以「維多利亞天使」的完美形象活躍在公眾眼前，但在這一次的直播中，她身體裡的另一個自己突然接管——她的手變成黑色的爪，眼睛散發著屍骸的光，失控地吸食著周圍人的情緒。整個過程被直播鏡頭完整記錄，完美天使的形象在所有人眼前公開崩潰，她在廣場中央跪倒，而圍觀的人群中已經開始出現指責的聲音。

**Reference Images**：
- 晴香：`ConceptArt_Haruka_MagicCorpse.png`（原檔為MagicalGirl，本場景描述明確為半屍骸化失控——黑色爪、屍骸眼光，改用MagicCorpse更貼合）

**簡化描述**（150-200字）：
城市廣場中，無數市民圍觀現場。完美魔法少女的形象在眾人眼前開始閃爍、扭曲——光幕濾鏡在此刻全數破碎。晴香疲軟地雙膝跪地在廣場中央，整個身體向下崩潰。滿臉淚水、渾身發抖，衣衫凌亂，她用雙手撐著地面才勉強不倒下。她的說話方式改變了——不再是預錄的播報辭令，而是帶著哽咽與絕望的真實聲音，甚至發不出完整的句子。人群中傳出不同的反應：有人驚愕、有人尖叫、有人面露反感，還有人開始竊竊私語指責。市民首次親眼看見被隱藏的真相——曾經高高在上的「光之天使」，現在正在眾人面前崩潰、跪地、哭泣。

**生成提示**：
```
Style: Horror moment; mask breaking; raw exposure
Mood: Shame and exposure; the lie revealed
Colors: Warm gold (false) BREAKING to red (raw); white shatter lines
Composition: Central figure; broken shell pieces surrounding
Special effects: Glass/shell breaking effect; blood dripping
Canvas: 16:9 portrait
```


---

## 圖70：「操與紗夜最後一晨」（Misao and Sayo's Last Morning）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_70_Misao_Sayo_LastMorning.png`

### 劇情背景

`[WRONG→已修正 2026-07-17，時序不可能]` 原文將本場景標為「114年1月末至2月初，Act II Phase F，鏡像破碎之夜前」——但依已於多批次審計確認嘅結論（圖72/圖52/圖46/圖44），「鏡像破碎之夜」（父親背叛+紗夜犧牲）發生於 **Act II Phase C，E-09a，113年7-8月**；Phase F（母愛の琥珀）依 `ACT_II_OUTLINE.md` Phase 表係 **114年1月-3月**，時序上遠遠**遲於**113年7-8月——一件「發生在鏡像破碎之夜前」嘅事件，唔可能標喺比鏡像破碎之夜遲成半年嘅 Phase F。呢個時序矛盾同其來源 `BEAT_SHEET_PREP_UNMAPPED_VISUAL_SCENES.md Scene B5` 標註嘅日期一致，證明錯誤源自該working檔本身未同步 `ACT_II_OUTLINE.md` Phase 表；本次以outline為準修正。

帝國歷113年6月末至7月初，Act II Phase B末／Phase C初，鏡像破碎之夜前夕。在地下化前的家族生活中，操和管家紗夜仍保持某種殘存的家族食卓節奏。紗夜是操在現實中唯一能感受到無條件愛的人（ayakomoji_misao.md §紗夜——唯一的無條件之愛）。在這頓早餐裡，操第一次不需要表演完美——不需要計算每個動作，不需要審核每句話。紗夜只是看著她，準備她喜歡的食物，然後在她起身的瞬間，在額頭上輕吻了一下。紗夜的手在顫抖，操沒有察覺。這是她們之間最後一個「正常」的早晨——數日/數週後即為鏡像破碎之夜（E-09a）。

### 圖片說明

昏黃燈光的小小食桌，桌上是操喜歡的食物——不豐盛，每樣都是她的喜好。操坐著，動作還是精準的，但少了那層計算的殼。紗夜站在一邊，不說什麼，只是看著她吃。操放下筷子，紗夜的手微微在顫抖——觀眾看得見，操沒有注意到。操起身，紗夜的手輕輕落在她額頭上，親了一下。「今日也……很漂亮。」話說完了，兩個人都沒有說出其他的話。

**劇情位置**：
- **時間點**：帝國歷113年6月末至7月初（Act II Phase B末／Phase C初，鏡像破碎之夜〔E-09a，113年7-8月〕前夕）
- **CDL追蹤**：`canon/03_characters/ayakomoji_misao.md §紗夜——唯一的無條件之愛`；CDL-299（紗夜之死與坦白為操最終救贖第一階段依據，相關但非本場景直接內容）；原引用「CDL-297」實際係「母親——完美的活體人偶」條目（`ayakomoji_misao.md` 第70行），同紗夜無關，屬CDL誤植已移除；`BEAT_SHEET_PREP_UNMAPPED_VISUAL_SCENES.md Scene B5`（來源日期已確認過時，見上方說明）
- **前置事件**：紗夜在Act I已有輕量出場（CDL-071）；操以完美表演加入隊伍
- **本場景功能**：紗夜無條件愛的唯一正面呈現（此後紗夜犧牲）；操第一次不需要表演完美的時刻；紗夜手在顫抖（她預知即將到來的災難）vs操沒有察覺的對比
- **後續payoff**：鏡像破碎之夜（父親背叛+紗夜犧牲，E-09a）；SPEC#26操被遺棄；SPEC#87紗夜犧牲耳鳴遮蔽；SPEC#126操在集體潛意識尋見母親碎片；SPEC#1鋼鐵獨舞

**Reference Images**：
- 操（便服）：`ConceptArt_Misao_CasualWear.png`
- 紗夜：`ConceptArt_Sayo_Maidoutfit.png`

### 詳細核心描述（230字）

昏黃燈光的小桌子。

食桌不大，就兩個人的位置。桌上是操喜歡的那幾樣食物，不豐盛，每樣都是她的喜好。

操坐下來，拿起筷子。她的動作仍然精準，但少了那層審核的殼——她沒有在計算自己的坐姿角度，沒有在腦中事先審核每個動作。只是坐著，只是吃。

紗夜站在桌邊，不坐下，只是看著她。

沒有多餘的話。沒有叮囑，沒有教導，沒有評估。只是看著她吃飯。

操快吃完的時候，紗夜的手微微在顫抖——那種細微的顫抖，在昏黃燈光下只有鏡頭能捕捉到。操沒有注意到。

操放下筷子，起身。

紗夜的手輕輕落在她額頭上，低下頭，親了一下。

「今日也……很漂亮。」

沒有其他話了。兩人都沒有說出其他的話。

### Midjourney 標準版

```
Dark anime. Warm amber small dining table, two-person setting. Simple meal with each dish chosen to preference, not lavish. Misao sitting eating without her usual self-monitoring — no posture calculation, simply present. Sayo standing beside the table, not sitting, just watching her. Sayo's hands barely trembling — camera captures what Misao does not notice. Final moment: Sayo's hand gently landing on Misao's forehead, a brief tender kiss. Warm amber against deep shadow background. Colors: warm lamp light, worn wood table, quiet tenderness. Emotional tone: the only morning she did not have to perform being perfect. 8k, intimate framing, niji 6, style raw. --ar 9:16
```

**視覺重點**：
- 操的動作「少了審核的殼」——這頓飯與平常不同的微妙差異
- 紗夜的手在顫抖（她知道即將發生什麼）vs操沒有察覺
- 額頭上的輕吻——無條件愛的唯一正面呈現
- 昏黃燈光、安靜的構圖——「平靜」是即將到來的暴風前的最後一刻

⭐⭐⭐⭐


---

## 圖71：「母親之愛的背面」（The Other Side of a Mother's Love）[ACT_II] ⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_71_AkihoBetrayal.png`

### 劇情背景

帝國歷113年，Act II 中期，秋穗執念達到頂點時。秋穗在「救愛莉」的執念驅動下，最終做出了出賣晴香、與黑奏陣營私下交易的選擇。這不是一個戲劇化的面對面場景，而是秋穗「最後一刻理性」消失的內化時刻：她一個人，在某個私密空間——可能是愛莉石像前，可能是實驗室裡——做出了這個決定（akiho.md §與魔鬼的契約；§瘋狂的結果論；§第三幕最後抉擇；CDL-015）。三層動機在這個瞬間同時運作：救愛莉（表面）、超越花子的潛意識僭越（底層暗流）、以及「結果才是一切」信念在最後防牆崩潰前的一次極端擴張。秋穗不是惡人——她是一個用愛做出了傷害最深的選擇的人，這才是她弧光的核心悲劇。愛莉石像的靜默見證，使這個「以愛之名」的決定具有最殘酷的諷刺：她聲稱「為了救愛莉」的行為，在愛莉的石像面前完成。

### 圖片說明

秋穗一個人，在一個私密的空間——實驗室，或者愛莉石像前的角落。她沒有奸笑，沒有悲傷崩潰。她的表情是一種比兩者都更難看見的東西：一個人清楚自己在做什麼、知道這樣做是錯的、然後仍然選擇做下去的那一刻。手上可能有某件物品（通訊裝置、數據晶片）——那個決定的物質媒介。眼鏡的反光遮住了她眼神的深處。背景是愛莉石像的輪廓，靜默地在那裡。

### 劇情位置

**時間點**：帝國歷113年（Act II 中期，秋穗執念頂點期）
**CDL 追蹤**：CDL-015（秋穗Act IV缺席式收結，承責弧線）；akiho.md §與魔鬼的契約；§三層動機（救愛莉/超越花子/結果論）；§罪孽的繼承者；§石像前的懺悔
**前置 → 本場景 → Payoff**：SPEC#142 秋穗實驗室懺悔（每天的石像懺悔，執念積累） → 本場景：最後一刻理性消失，出賣晴香的決定時刻 → SPEC#41 秋穗藥物實驗室（身份暴露後的科學家真面目）；秋穗弧光「瘋狂科學家→悔恨的母親→放手者」的關鍵轉折節點；SPEC#67 石像前的懺悔（每天的懺悔，罪疚的日常化）

### 詳細核心描述（230字）

某個空間，某個深夜。

秋穗一個人。

背景是愛莉石像的輪廓——那座永遠靜止的結晶雕像，仍然站在那裡，永遠不會說什麼。或者是實驗室的冷白光。

秋穗的手上有某件東西：通訊裝置，或者數據載體，或者某份協議的物質形式。

她的眼鏡反著光，那個反光讓她的眼神難以看清。

她不是正在哭。她也不是冷酷無情。

她的表情是一種很難在人臉上看見的東西——一個人在「知道這是錯的」和「但我還是要做」之間，那個極短的、幾乎不存在的縫隙。那個縫隙在她臉上閉合的那一刻，就是她做出決定的那一刻。

她的手指動了。

「結果才是一切。」這句話她在心裡說過太多次，這次不需要再說出來，它已經是空氣，已經是她呼吸的一部分。

手指動的那個動作，讓一個人的「最後一刻理性」消失，讓另一個人（晴香）從此成為棋局的一部分。

背景的石像什麼也不知道，或者什麼都知道。

### Midjourney 標準版

```
Dark anime. Private space, deep night. Akiho alone — laboratory cold light or dim stone space with Aeri crystallized statue silhouette in background. She holds something in hand: communication device or data chip. Her glasses reflect the light, partially obscuring her eyes. Expression: not evil, not grief — the specific look of someone who knows what they are about to do is wrong, and is choosing to do it anyway, in the moment before that last rationality closes. The threshold crossing. Colors: cold lab white-blue or dim stone space, Akiho dark purple hair dull in harsh light, Aeri statue silhouette as background witness. Emotional tone: the moment love became the vehicle for harm — not malice, something worse: conviction. 8k, niji 6, style raw. --ar 9:16
```

**視覺重點**：
- 秋穗的表情：不是惡意，不是崩潰，而是「知道是錯的仍選擇做」那個特定的臉
- 眼鏡反光遮住眼神——設計上的刻意遮蔽，映照「無臉執行官」形態的前兆（akiho.md §未來形態）
- 手上的物質媒介（通訊裝置/數據晶片）——決定的物質化，讓「選擇」有具體的形
- 愛莉石像輪廓作為背景見證——她聲稱「為了愛莉」的行為，在愛莉雕像的靜默下完成
- 環境：冷白實驗室光或石像前陰影——兩種都是秋穗日常的「聖地」，在聖地完成背叛

⭐⭐⭐⭐

**Reference Images**：
- 秋穗：`ConceptArt_Akiho_CasualWear.png`（原檔列出晴香/黑奏/花子與本場景內容完全無關——本場景全程只有秋穗一人獨處做決定，無晴香/黑奏/花子在場，已修正為正確角色）



---

## 圖72：「操的鏡前獨白」（操 / Misao's Mirror Monologue）

`[RENAMED — 2026-07-17]` 原標題「鏡像處刑室」棄用：此術語目前屬於 `ACT_II_OUTLINE.md`（CDL-317/CDL-335）美夜子 E-06 一度規劃使用嘅陷阱局名稱（⚠️ 2026-07-15 CDL-335 已將該陷阱局設計整個取消簡化，術語現時喺 canon 內其實冇任何 beat 在正式使用；但為避免歷史歧義/未來重新引用時撞名，操的場景仍改用新命名）。詳見 `CHANGE_LIST_EXISTING_SPEC.md` 圖72項。

**建議輸出文件名**：`ConceptArt_Scene_72_Misao_MirrorMonologue.png`（原檔名 `ConceptArt_Scene_Misao_MirrorChamber.png` 建議棄用）
**依據版本**：`ayakomoji_misao.md` §Body Horror 傀儡絲線縫牙分層設計（CDL-233 Stage 2a）、§鏡中層 Shadow Passion；CDL-231/232（紗夜遺言延遲呈現機制）（2026-07-17 修正，見 `CHANGE_LIST_EXISTING_SPEC.md` 圖72項）

### 劇情背景

`[TIME_REVISED — Act II E-09a，非 Act III Phase H]` 原稿將「父親背叛+紗夜犧牲」（操被遺棄之夜）錯誤安放喺 114年4月 Act III Phase H，並與 CDL-298「被迫報串」（操向帝國交出隊伍坐標）混為同一夜。依 `ayakomoji_misao.md`，呢兩件事係完全不同時間、不同內容嘅事件：
- **Act II 中期 E-09a（鏡像破碎之夜）**：父親啟動最後勒索、紗夜開槍犧牲掩護操逃離，雙重打擊令操進入半屍骸化 **Stage 2a**——操在巨大情感創傷中用傀儡絲把鬆動的牙縫回，強行維持外觀完整，是「形式執念」肉體層嘅起點；同一瞬間，紗夜臨終遺言被創傷性耳鳴封印（CDL-231/232）。本場景屬於呢一晚。
- **Act III Phase H（114年4月，CDL-298 被迫報串）**：是另一件事——帝國以黑材料脅迫操交出隊友情報，冇紗夜、冇鏡子場景，見圖112「鋼鐵獨舞」劇情背景引用。

操獨自面對鏡子，Stage 2a 的身體開始從內部崩壞卻仍保持無懈可擊的外表——冷靜地用絲線縫合鬆動的牙齒，鏡中浮現當晚破碎的片段：父親的背叛、紗夜倒下的剪影。她唯一能確認「自己仍在」的方式，就是繼續這個近乎儀式的自我修補動作。此場景是操「形式主義作為自我控制」弧光嘅肉體層起點，為後續 Stage 2b（摔碎時刻）、Stage 3（鋼鐵獨舞，圖112）鋪墊。

### 圖片說明

操的身體因這一夜的雙重創傷開始從內部崩壞，卻仍然保持著無懈可擊的外表——她獨自面對鏡子，用傀儡絲冷靜地把鬆動的牙齒縫回牙齦，妝容完整，嘴角滲血也不擦。鏡子的邊緣浮現當晚破碎的片段：父親轉身背叛的剪影、紗夜倒下的殘影。她無法讓自己崩潰，只能繼續這個近乎儀式性的自我修補動作，把死亡管理成一道可以繼續完成的工序。

**Reference Images**：
- 操：`ConceptArt_Misao_MagicalGirl.png`（`[NOTE]` 原標記 `_Action` 後綴版本依 `DIGEST_REFERENCE_IMAGES.md` 為 `UNVERIFIED`，暫改用已存在檔案）

**Creative Enhancements**：
- Single bedroom/bathroom mirror scene (NOT an impossible multi-mirror chamber — that "shatter the final mirror" climax belongs to a later, separate scene: 操回歸人類身軀／SPEC#31)
- Show Misao mid-stitching: puppet-string thread through gum line, calm/composed expression, doll-like precision in the ritual
- Incorporate faint distorted echoes of father and Sayo at the mirror's edge (memory intrusion, not literal figures in the room)
- Temperature contrast: cold mirror-lit precision vs. the raw wound of that night's betrayal, still fresh
- `[NOTE]` 呢個場景**唔包含**「砸碎鏡子」嘅結局動作——嗰個屬於後續獨立場景（操回歸人類身軀），此處操仍處於「用完美修補逃避崩潰」嘅階段

**簡化核心描述**：
操在鏡前用傀儡絲冷靜地縫合鬆動的牙齒，鏡子邊緣浮現父親背叛與紗夜倒下的破碎殘影。她無法讓自己崩潰，只能繼續這個近乎儀式性的自我修補動作——這是 Stage 2a「形式主義作為自我控制」的起點，不是终局。

**所需原圖資源**：
- 操的魔法少女形態（過渡到 Stage 2a 半屍骸樣態）
- 家居鏡台/浴室鏡子場景參考（非多鏡幻想房間）

**生成提示**：
```
Style: Intimate mirror-side scene; psychological horror; doll aesthetics; restrained ritual rather than surreal chamber
Mood: Isolation in precision; suppressed grief; the desperate maintenance of composure
Colors: Cold silver mirror light, pale porcelain skin, faint warm-toned distorted echoes at mirror's edge (father/Sayo)
Composition: Misao centered at a single mirror, mid-stitching gesture; faint ghostly reflections bleeding at the mirror's periphery
Lighting: Harsh artificial light from nowhere; cold white glow
Canvas: 1:1 square (mirrors) or 3:4 portrait
```


---

## 圖73：「廢棄糖果工廠」（朱音 / Abandoned Candy Factory）

**建議輸出文件名**：`ConceptArt_Scene_73_Akane_CandyFactory.png`
**依據版本**：`05_story_outline_canon.md` §Act II 關鍵節點1（CDL-236）、§英雄の刑場（CDL-237~242，E-12屍骸女王討伐）；`DIGEST_LOCATIONS.md` §2（2026-07-17 修正，見 `CHANGE_LIST_EXISTING_SPEC.md` 圖73項）

### 劇情背景

`[TIME_REVISED]` 原稿標「114年3月 Act III Phase G4」有誤——依 canon，紫音放逐後自立為屍骸首領（廢棄糖果工廠+糖果王座）同「三位一體辯論」（E-07b）發生喺 **Act II 113年5-6月**；「屍骸女王討伐」（E-12，三重癱瘓矩陣道德拷問，主角團主動攻入廢棄糖果工廠）亦屬 **Act II** 事件，唔係 Act III Phase G4——Phase G4 實際地點係下水道（現有圖91 `ConceptArt_Scene_91_SilentReunionSewers.png` 已覆蓋）。

正確時間點：**Act II 113年5-6月**。紫音（方曉彤）在小光之死（E-07a）與三位一體辯論（E-07b）後被主角團放逐，在廢棄糖果工廠自立為屍骸首領，開始獨自生活。她的心理狀態進入屍骸女皇形態——魔法戰鬥作為精神毒品的依賴（CDL-051）與因弟弟誤食情緒結晶而死的罪惡感（akane.md §甜蜜的屍體）共同扭曲了她對「甜蜜」的認知。她把整座工廠改造成自己的腐爛王國，懷抱屍骸化的小光（Type B 廢鐵型）作為存在宣言，糖晶硬殼從身體外溢，成為對童年失落的極端紀念物。此場景亦是後續「屍骸女王討伐」（E-12）——主角團主動攻入、三重癱瘓矩陣道德拷問令晴香徹底失語崩潰撤退——嘅同一物理地點。此場景與 Day14 帝國廣場糖果山犧牲（圖115）為同一角色弧光嘅前後兩個階段，但物理地點不同，不可混同。

### 圖片說明

朱音是一個靠著糖果和魔法戰鬥麻醉自己的少女，因為弟弟死於和糖果相似的東西，她的罪惡感從未消散。被隊友放逐後，她獨自躲在廢棄糖果工廠，將整座廠房改造成屬於她的腐爛王國，以糖晶覆蓋的身體坐在王座上，成為一個扭曲的童話女皇。這是她把無法面對的失去，用甜蜜包裹成慢性毒藥的最後形態。

**Reference Images**：
- 朱音：`ConceptArt_Akane_MagicCorpse.png`（原檔為MagicalGirl，本場景明確描述「屍骸女皇形態」「translucent ghost-like with candy crystalline hardshell」，改用MagicCorpse更貼合）

**Creative Enhancements**：
- Show Akane in corpse-girl form: translucent ghost-like with candy crystalline hardshell exterior
- Sitting on candy/sugar throne of her own making
- Candy factory setting: melted machinery, hardened sugar formations, toxic sweet atmosphere
- Lighting: sickly-sweet amber glow mixed with cold shadow (abandoned factory decay)
- Small Hikari corpse-form visible nearby (tragic detail)

**簡化核心描述**：
朱音以屍骸女皇的形態坐在自己編織的糖果王座上，身體被糖晶硬殼包覆，四周是腐爛甜蜜的廢棄工廠景觀。這是她對童年純真的扭曲紀念。

**所需原圖資源**：
- 朱音的魔法少女形態與屍骸轉變參考
- 廢棄工廠與糖果融合的視覺概念

**生成提示**：
```
Style: Haunting illustration; decay mixed with sweetness; corpse aesthetics with candy elements
Mood: Corruption of innocence; twisted thrones; the death of childhood joy
Colors: Amber-yellow decay, brown hardened sugar, pale corpse skin with translucent effect
Composition: Centered throne; corpse figure elevated; factory decay surrounding
Lighting: Sickly-sweet amber glow mixed with cold shadow
Canvas: 3:4 portrait ratio
```


---

## 圖74：「月下崩潰」（美夜子 / Moonlight Breakdown）

**建議輸出文件名**：`ConceptArt_Scene_74_Miyako_MoonlightBreakdown.png`
**依據版本**：`DIGEST_CHARACTER_STATES.md` MY-S3；`ACT_III_OUTLINE.md` Phase H1.5 月下崩潰（2026-07-17 修正 reference 檔名，見 `CHANGE_LIST_EXISTING_SPEC.md` 圖74項）

### 劇情背景

114年4月 Act III Phase H1.5。美夜子是 Alpha 線唯一真正死亡的角色，以 Unit 01 身份被拼接式復活，靈魂結構徹底碎裂，99% 的情緒廢料漫流其中（CDL-271，Unit 01 靈魂困禁狀態）。此時她已知凜是重組體（CDL-215，Unit 00 Null），記憶逐步重連令避難所詛咒的生理排斥愈發嚴重——貓殼不再是保護，而是一具正在腐朽的牢籠。她進行自我確認測試（CDL-282，鏡像法則），強迫自己直面「我是人還是空殼」的問題：滿月照亮身上每一道傷痕，讓她無處可藏。此刻她同時是人類與貓，又不屬於任何一個——是一生所承受的一切在一個夜晚到達臨界，為 CDL-274 月下相認做出最後一步的情感準備。

### 圖片說明

美夜子曾經真正死過，被人拼接復活後以貓的形態存在，99%的靈魂深處充滿無法宣洩的恐懼與哀痛。在這個滿月的夜晚，她坐在破碎的窗台邊，強迫自己直視「我還算是一個人嗎」的問題——月光照亮她身上每一道傷口，讓她無處可藏。她既不完全是人，也不完全是貓，只是一個被囚禁在自己身體裡的倖存者，在臨界點上孤獨地搖晃。

**Reference Images**：
- 美夜子：`ConceptArt_Miyako_CasualWear.png`（原檔名 `ConceptArt_Scene_74_Miyako_MoonlightBreakdown.png` 不存在，已自動替換為現有檔案）

**Creative Enhancements**：
- Broken window frame with jagged shattered glass reflecting moonlight
- Miyako sitting on crumbling windowsill, legs extended into void
- Massive full moon behind her (pale ice-blue, dominating composition)
- Black shadow wings or dark form emerging from her silhouette
- Starfield and night sky visible through broken windows
- Temperature: absolute cold isolation, no warmth except moon glow
- Capture the exact pose and broken elegance from reference

**詳細核心描述**：
美夜子坐在破碎的窗台邊緣，身後是佔據整個背景的巨大滿月——冷得刺骨的冰藍色。窗戶已完全碎裂，玻璃碎片懸掛如同時間靜止。她的身形裹著黑色，彷彿陰影本身，但眼神穿透月光向下看去。這不是優雅，而是一種墜落——從信仰的高度跌落，在月光下赤裸地確認自己的真實狀態。

貓形態的殼已經龜裂到無法修復的程度，人類形態和貓形態在這一刻同時存在——她既不屬於任何一個，又同時屬於兩個。月光照亮了她身上的每一道傷痕、每一個缺口，讓她無處可藏。

**所需原圖資源**：
- 美夜子的貓形態與人類形態混合狀態
- 破碎玻璃窗的細節（尖銳、懸掛、反光）
- 巨大滿月的冷藍光源
- 夜間星空與無限墜落感

**生成提示**：
```
A young girl with dark hair sits on a crumbling, broken window frame
against a massive pale blue full moon that fills the entire background.
Behind her, the window is completely shattered, jagged glass fragments catching moonlight.
She wears dark clothing; her silhouette blends into shadow.
Her legs dangle into the void below, extending beyond the windowsill.
Her expression is hollow, traumatized, facing the moonlight without flinching.
Black wings or shadow-form visible in her outline.

Style: Anime-inspired illustration; psychological trauma visualization; cold elegance mixed with despair
Mood: Absolute isolation; moment of truth; self-awareness through moonlight; falling without landing
Colors: Dominant pale ice-blue moon (#B0E0E6); deep black silhouette; night sky navy; shattered glass white highlights
Composition: Girl center-right; massive moon filling background; broken window frame; legs extending into darkness
Lighting: Cold moon as sole light source; harsh shadows; emphasizing isolation
Special effects: Glass reflection glints; moonlight on tears; shadow wings; starfield visible
Canvas: 16:9 landscape; high definition
-- ar 16:9 --niji 6 --style raw
```


---

## 圖75：「Fallen Angel 街道」（晴香 / Fallen Angel Street）

**建議輸出文件名**：`ConceptArt_Scene_75_Haruka_FallenAngel.png`
**依據版本**：`ACT_II_OUTLINE.md` v0.11（CDL-317/CDL-335 changelog）；P-C06 彩「卡頓」plant（CDL-207）（2026-07-17 修正，見 `CHANGE_LIST_EXISTING_SPEC.md` 圖75項）

### 劇情背景

`[CAUSAL_REVISED]` 原稿因果掛勾已過時：(1) 原本嘅 E-05a（總部被襲）已於 CDL-317 整個被移除；(2) 「美夜子認出重組後的凜」嘅觸發源後來一度改喺 E-06，但 CDL-335（2026-07-15）已將該陷阱局設計整個取消簡化，E-06 現時只係「美夜子護隊受傷——Glitch Form首次呈現」，同美夜子認凜、同晴香目睹彩眼神空洞都無關。E-05 本身（偽王道二戰）內容係假情緒承接第一段弧、傲慢種子、彩「卡頓」，冇提及美夜子認凜。

`[NEEDS_FACT]`：晴香目睹「彩眼神空洞」呢個具體畫面，現行 outline 冇獨立成 beat，最接近嘅是 P-C06「彩卡頓」plant（CDL-207，黑奏系統讀不到非魔法愛而產生的短暫困惑/停頓）——標記位置為 **E-05[NC] + E-08[NC]**（未定案具體場景，僅為 plant 節點），非傀儡式空白眼神嘅完整揭露。本場景暫按「E-05 附近，彩卡頓 plant 的其中一次」處理，具體 beat 歸屬待 Beat Sheet 層設計確認。時代/地點（113年4-5月 Act II Phase A，日區街道）本身不變。Act I 期間晴香已與她以為是「彩」的轉校生建立了真摯友誼（CDL-082），完全不知道對方 90% 的時間是黑奏在控制身體（CDL-079）；晴香第一次在公開街道目睹「彩」出現短暫的空白/停頓，是她首次被迫直視「彩不對勁」的可能性，光幕濾鏡在她眼前開始破碎。這個場景是 SPEC#8 彩奪回身體的最遙遠的情感前置。

### 圖片說明

晴香和彩本是學校裡的好友，但這一天在街道上，晴香第一次看見彩的眼睛裡沒有任何東西——像是空洞的人偶，不再是她認識的那個人。城市的人工光線在她眼前開始龜裂，那個她一直相信的「彩真的是她朋友」的信念，在這一刻第一次動搖了。晴香不知道那個空洞背後其實有人一直被困著，她只知道她必須把那個朋友找回來。

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`（原檔為MagicalGirl，本場景係日常街道偶遇、無戰鬥/變身情境，改用CasualWear更貼合，與同類日常場景#81一致）
- 彩：`ConceptArt_Aya_MagicalGirl_1.png`（作為 Aya 被控制形態）

**Creative Enhancements**：
- Show sunlit street where light filters (日區 characteristic)
- Haruka encountering Aya as hollow puppet/slave form
- Light veil filter effect beginning to BREAK/SHATTER around them
- Citizens oblivious or distorted around the two figures
- Color shift: warm artificial yellow BLEEDING into exposed cold truth

**簡化核心描述**：
晴香在街道上遇見淪為黑奏傀儡的彩，光幕濾鏡開始在兩人周圍破碎。人工的溫暖光線漸漸露出底下的冷酷真相，完美的日區假象在此刻崩塌。

**所需原圖資源**：
- 晴香的魔法少女形態
- 彩的被控制/hollow 形態
- 日區城市街道的人工光源參考

**生成提示**：
```
Style: Surreal urban scene; light corruption; false reality breaking
Mood: Disillusionment; puppet strings becoming visible; the lie exposed
Colors: Warm artificial yellow (#FFF9E6) BLEEDING into cold truth tones; cyan distortion
Composition: Two figures center-street; citizens blurred in background; light veil SHATTERING
Lighting: Artificial Day District glow breaking to reveal harsh truth light
Canvas: Widescreen (16:9) to emphasize street depth
```


---

## 圖76：「凜的雙面形態」（Rin's Dual Forms）

**建議輸出文件名**：`ConceptArt_Scene_76_Rin_DualForms.png`

### 劇情背景

凜在帝國歷 108 年已死（頸部被強行扭斷），被情緒管理局重組為 Unit 00 公務員（CDL-215）。孔雀飛行員形態係帝國官方面具，烏鴉形態係重組後殘留的靈魂碎片在制度壓制下的真實湧現。Act III E-III-02，凜在完全清醒的狀態下自願回到帝國實驗室，挖走所有感情、痛覺、回憶，變成 Unit 00-Null——此場景是凜尚存雙面的最後時刻，代表「拒絕治癒的信徒」的意志選擇（CDL-215）。凜×美夜子的複雜互相責任關係（CDL-022）是雙面形態存在的情感根源，凜的消亡是美夜子 Act III 崩潰的前置觸發。

### 圖片說明

凜曾經是一個溫柔的偶像歌手，在一次任務中以頸骨被扭斷的方式死去，卻被帝國的技術拼接復活，成為一個完全沒有記憶的公務員。她的金藍色孔雀翼是帝國賦予的官方面具，而暗巷裡那個偶爾在制度縫隙中湧現的烏鴉形態，才是靈魂深處最後一點殘存的真實。同一個靈魂，兩張截然不同的臉。

**Reference Images**：
- 凜：`ConceptArt_Rin_MagicalGirl_1.png`
- 凜（第二形態）：`ConceptArt_Rin_MagicalGirl_2.png`

**簡化描述**（150-200字）：
凜的孔雀飛行員形態（光鮮官方）與痛苦烏鴉形態（暗巷真實）並置對比。同一靈魂卻被分裂成兩個角色，象徵制度對個體的扭曲與控制。

**生成提示**：
```
Style: Duality portrait; split-screen or mirror comparison
Mood: Institutional erasure; dual identity struggle
Colors: Peacock golds and blues vs. raven blacks and silvers
Composition: Two forms mirroring each other; central division line
Canvas: Widescreen (16:9) for side-by-side comparison
```


---

## 圖77：「朔的日夜對比」（Saku's Day-Night Duality）

**建議輸出文件名**：`ConceptArt_Scene_77_Saku_DayNightDuality.png`

### 劇情背景

`[WRONG，已修正]` 原文標「朔在 Act I 以校霸身份出現（CDL-025）」，同 canon 直接矛盾——`saku.md`（CDL-086/090）明確：「Act I 出場方式：學校場景完全無朔（避免資訊過載）。Act I 後段夜區（E-03前後）：朔以純『屍骸獵人』姿態短暫影子過場——無身份說明，無對話，觀眾只知道有一個神秘戰鬥者。帝國特工白西裝身份、既視感追認全部推至 Act II 正式引爆。」即 Act I 完全冇「校霸」呈現，日區特工身份要到 Act II 先正式揭露。Act II 起，朔逐步升級為主角團的夜區無聲盟友：Phase D 期間暗中為主角團提供黑市物資補給路線（CDL-255），亦曾在愛莉潛意識風暴（E-11）中例外破例現身介入危機（見 rin.md §中段踏腳石），親眼目睹晴香在半屍骸化壓力下的真實掙扎（「困獸的慈悲——見証之夜」，圖66場景），完成從「冷血復仇者」到「心理認可者」的不可逆轉點。日區白色特務身份係帝國情緒管理局制度面具，夜區綠松石獵人係在制度縫隙中維持人性的真實角色——此雙重身份對比本身無誤，只係「Act I 已出現」嘅時間點錯誤，須改為「Act II 正式揭露，Act I 僅有無身份神秘剪影」。

### 圖片說明

朔在 Act II 起逐漸向觀眾展開她的雙重身份——日間以帝國特工姿態出現，白色制服、冷靜的眼神；夜晚則換上綠松石色的獵人裝備，在城市陰暗處以另一套規則生存（Act I 她只以無名神秘戰鬥者剪影短暫掠過，冇人知道呢係同一個人）。這兩個身份都是她在帝國制度下為了活下去而必須維持的面具，但當日與夜的交界出現，兩個自己撕裂又共存的代價，就沒有辦法再藏起來了。

**Reference Images**：
- 朔：`ConceptArt_Saku_CasualWear.png`

**簡化描述**（150-200字）：
朔的白色完美特務形態（日區）與綠松石獵人形態（夜區）對置。同一個人在兩個世界中的雙重角色。日區的優雅 vs. 夜區的殘暴，都是生存的必要。

**生成提示**：
```
Style: Duality portrait; professional vs. hunter aesthetic
Mood: Double agent; survival in dual worlds
Colors: White/cream (Day District) vs. turquoise/teal (Night District)
Composition: Split or mirror layout; both forms equally prominent
Canvas: Widescreen or square
```


---

## 圖78：「操的形式主義廢墟」（Misao's Formalism Ruins）

**建議輸出文件名**：`ConceptArt_Scene_78_Misao_FormalismRuins.png`

### 劇情背景

操的形式主義強迫症根源（CDL-063）：既然被魔法少女身份定義，消滅怪物就係必須遵守的全套戲碼，否則恐慌假身份穿崩。燈塔效應（CDL-064）令操啟動裝置後無法不戰鬥。此時期操已進入 Body Horror Stage 2b「人偶化狀態」（CDL-233）——Act II Phase D 六個月地下化期間，外表依然完美（傀儡絲縫牙保持），靈魂卻逐步冷化離體，每次與晴香的衝突後都選擇進一步「自我修復」成人偶。獨舞的完美和孤獨對應的正是操深層心理：「存在本身是表演，需要觀眾和明確規則，獨處時崩潰」（CDL-050）。**與圖112「鋼鐵獨舞」區分**：圖112係 Act III Day13 學校瓦礫嘅 Stage 3 終局場景（黑奏撬嘴揭露+紗夜遺言回流+縫入人偶牆）；本場景係 Phase D 地下化六個月間反覆發生嘅 Stage 2b 麻木化獨舞，屬過程性場景非終局，兩者唔係同一事件。`[NEEDS_FACT]` 具體獨舞場地——canon（`ayakomoji_misao.md`）未明確指定 Phase D 獨舞地點係「廢棄工廠」，此為沿用舊 spec 描述、未見 canon 明確支持，生成時應視為合理推斷而非已confirm事實。

### 圖片說明

操從小被教導必須以完美表演換取安全，魔法少女的身份也成了她必須照本宣科演出的另一套戲碼。她在廢棄工廠裡獨舞，傀儡絲纏繞著身體，動作精確卻空洞——她的身體知道怎麼跳，但靈魂已經不在了。她需要觀眾、需要規則才能存在，而此刻沒有人看她，只有冷色的工業廢墟見證著她的孤獨。

**Reference Images**：
- 操：`ConceptArt_Misao_MagicalGirl.png`（原引用 `ConceptArt_Misao_MagicalGirl_Action.png` 依 `DIGEST_REFERENCE_IMAGES.md` 標 `UNVERIFIED`，repo 內搵唔到，改用已存在版本；如需獨舞動作專屬圖仍待另行產出）

**簡化描述**（150-200字）：
操在工廠廢墟中獨舞（Phase D 地下化期間反覆發生，非圖112嘅 Day13 終局場景），傀儡絲綾麗而危險地纏繞身體。她的舞蹈完美但詭異，控制與自由的邊界已然模糊。背景冷色工業感襯托孤獨的芭蕾。

**生成提示**：
```
Style: Ballet in ruins; puppet aesthetics; industrial setting
Mood: Solitary beauty; dangerous perfection
Colors: Cold grays, industrial rust, pale skin, violet puppet strings
Composition: Central dancing figure; factory elements framing
Lighting: Cold industrial light; magical glow from strings
Canvas: 3:4 portrait
```


---

## 圖79：「首次情緒連結危機」（First Emotion Link Crisis）

**建議輸出文件名**：`ConceptArt_Scene_79_EmotionLink_Crisis.png`

### 劇情背景

情緒連結（empath power）在 E-02 首戰中由美夜子提出（CDL-032），作為四人合力打敗屍骸的手段。然而真實機制是強制性的心理入侵——各人最深層的創傷記憶被迫相互滲透（CDL-121），觀眾從四人意識中分別閃見紫音細佬臨死前笑臉、操被帶進手術室的瞬間、美夜子目睹凜被扭斷脖子的場景。晴香在後遺症中身體反應最嚴重（CDL-078），倒下成為 Act II 黑奏利用晴香脆弱點的 Plant-A 起點（CDL-048）。此事件同時係全作最大 Peak Moment of Doubt（CDL-224）：「友情合體技」被扭曲為精神強暴式強制透明化，令四人心照不宣停止使用情緒連結，亦令 Act IV 晴香拒絕全人類情緒互聯計劃取得最深情感根據。

### 圖片說明

四個魔法少女嘗試以情緒連結合力戰鬥，卻沒有人告訴她們這個技能的真相：它會強制打開每個人心底最深的創傷，讓所有人都暴露在彼此的最深恐懼之中。接連幾秒內，每個人都在別人的靈魂裡看見了最不願看見的記憶——那一次的衝擊，讓所有人心照不宣地再也不肯使用這個力量。

**Reference Images**：
- 晴香：`ConceptArt_Haruka_MagicalGirl.png`
- 美夜子（貓形態）：`ConceptArt_Miyako_Cat.png`
- 秋穗：`ConceptArt_Akiho_CasualWear.png`
- 彩：`ConceptArt_Aya_MagicalGirl_1.png`
- 操：`ConceptArt_Misao_MagicalGirl.png`

**簡化描述**（150-200字）：
戰鬥場景中，四人一貓情緒連結失控——四人在地上劇烈抽搐、掙扎，彷彿被無形的力量撕扯著。他們的身體蜷曲、扭動，手臂無力地拍打著地面。創傷記憶在彼此的腦中亂竄，造成現實中的生理痛楚——他們用力咬著牙、眼睛圓睜、額頭滲出冷汗。痛苦的呻吟與喘息聲混成一片。這不是視覺混雜，而是真實的、肉體的、無法承受的痛苦。

**生成提示**：
```
Style: Psychedelic mind-meld chaos; overlapping consciousness
Mood: Loss of boundaries; trauma contagion; beautiful horror
Colors: Mixed character color palettes bleeding together; distorted saturation
Composition: Four figures overlapping; consciousness tendrils connecting
Special effects: Image ghosting; color bleeding; temporal distortion
Canvas: Square or widescreen
```


---

## 圖80：「小光死亡與屍骸化」（Ko Hikaru's Death）

**建議輸出文件名**：`ConceptArt_Scene_80_KoHikaru_Death.png`

### 劇情背景

小光（Ko Hikaru）係紫音在夜區遇到的流浪少年，成為她情感腐化弧中唯一真心連結者。E-07a 事件（113年5月，CDL-229）：小光在戒斷發作中意外死亡，紫音目睹。此係紫音 cascade 的起點——黑奏立刻介入「誘導解讀」，從情感創傷缺口滲入，令紫音的情緒毒品 Coping 策略面臨崩潰。**本場景視覺化的正是 E-07a 呢一刻本身**（小光死亡瞬間、身體轉化為廢鐵型屍骸）。小光屍骸化後，紫音在 E-07b 進入廢棄糖果工廠建立屍骸樂園，長期懷抱已屍骸化的小光坐在糖果王座上（CDL-236）——此為另一獨立時刻，見 SPEC#4。到 113年12月-114年1月 E-12「屍骸女王討伐」時，小光在紫音懷中徹底最終消散（CDL-242）——此為第三個、時間上分開好幾個月嘅獨立時刻（目前 130 場景清單未有專屬 spec 覆蓋），成為引爆紫音三位一體終極問題的導火線，亦是整個紫音悲劇弧中最深的珍寶珠符號回收節點（CDL-226）。呢三個時刻（E-07a死亡→E-07b屍骸樂園棲身→E-12最終消散）唔可以喺 spec 撰寫時混為同一場景。

### 圖片說明

小光是朱音在一片絕望中遇到的孩子，她把對弟弟的愧疚和對守護某人的渴望都投射在這個小女孩身上。然而小光就在朱音眼前死去，身體在崩潰中轉化為廢鐵般的形態——那一刻，朱音內心最後一點相信「我能保護重要之人」的希望也隨之破碎，她滑入了更深的黑暗。

**Reference Images**：
- 小光：`ConceptArt_Ko_CasualWear.png`
- 朱音：`ConceptArt_Akane_CasualWear.png`

**簡化描述**（150-200字）：
小光在朱音面前被屍骸化，身體在崩潰中轉化為廢鐵型屍骸。這一刻朱音內心崩潰，她無法保護最重要的人，最後的希望在此破碎。視覺上呈現血與機械零件混雜。

**生成提示**：
```
Style: Tragic transformation; body horror without gore; machinery corruption
Mood: Irreversible loss; the breaking point
Colors: Pale childhood innocence corrupting to industrial gray-red
Composition: Young girl in center; corpse machinery surrounding/consuming
Lighting: Cold shadow with hints of warning red
Canvas: 3:4 portrait or widescreen
```


---

## 圖81：「恐怖家家酒（學校）」（Horrific House Play）

**建議輸出文件名**：`ConceptArt_Scene_81_HorrificHouse_School.png`

### 劇情背景

**[已修正 2026-07-17]** Act II Phase B（帝國歷 113 年 5-6 月），黑奏以彩的身份滲透晴香身邊已久，校園成為長達 14 天「恐怖家家酒」（Beat E-08，CDL-188 G2=A）的主要場域——原文誤標「Act I，113年4月，CDL-082/E-03」，依 `ACT_II_OUTLINE.md` E-08（行251）「恐怖家家酒」14天高壓事件明確屬 Act II Phase B，CDL-082/E-03 為 Act I 另一件事，同本場景無關，已更正。黑奏的策略是將學校轉化為情緒壓力爐——令數千師生在強制壓抑的恐懼中持續生產情緒廢料，同時作為採集晴香情緒數據的近距離節點（CDL-079 三大需求之「節點校準」與「挖礦」）。晴香與「彩」（黑奏主導）在校園裡維持表面日常，但每一次互動底下都是黑奏精密的計算（CDL-081 天台午餐場景）。此場景是恐怖家家酒高壓期的環境縮影，payoff 於 Act III 彩覺醒——觀眾回看所有「日常」，原來都是精密偽裝。

### 圖片說明

晴香相信彩是她的好朋友，她們在學校一起過著看似正常的日子。但鏡頭拉遠，每一個笑容底下都藏著不屬於這個年紀的緊繃——晴香不知道那個彩其實大部分時間是另一個意識在操控，而學校整個環境也被悄悄改造成製造恐懼和收集情緒數據的壓力爐。日常的場景顯得格外詭異，因為一切都不是表面的樣子。

**Reference Images**：
- 晴香（便服）：`ConceptArt_Haruka_CasualWear.png`
- 彩（便服）：`ConceptArt_Aya_CasualWear.png`

**簡化描述**（150-200字）：
晴香與彩在校園內維持致命的平衡——表面日常但充滿暗流。彼此的笑容背後是對方可能隨時背刺的恐懼。學校場景被陰影籠罩，日常物件顯得詭異且威脅。

**生成提示**：
```
Style: Uncanny school setting; psychological tension in mundane space
Mood: Fragile trust; surface normality hiding danger
Colors: School grays and yellows overlaid with shadow; normal palette made wrong
Composition: Two figures in shared space but emotionally distant
Lighting: School fluorescent harshness with dark corners
Canvas: Widescreen to show full classroom space
```


---

## 圖82：「凜的人性消磨」（Rin's Humanity Erased）

**建議輸出文件名**：`ConceptArt_Scene_82_Rin_HumanityErased.png`

### 劇情背景

**[已修正 2026-07-17]** 凜以黑奏重組後的「情緒管理局公務員」形態出現——靈魂碎片被冰封於 EMB 裝置，記憶語義被清除，只剩身體記憶殘痕（rin.md §被重組段落，CDL-215）。**時間點澄清**：依 `DIGEST_CHARACTER_STATES.md` R-S1 及 `rin.md`，凜嘅重組發生於 108 年（死亡後），**Act I 開場時已經完成**，此形態貫穿 Act I 全程，並非「Act II Phase A，E-05」嘅事件——E-05（113年4月，偽王道二戰）內容同凜完全無關，原文引用 CDL-215/E-05 屬誤植，已更正為背景狀態描述，唔綁定單一 beat。她被作為情緒管理局公務員重新具現化，在制度框架下執行魔法少女回收任務，個體特異性被徹底抹除。她不記得美夜子，不記得犧牲，只剩下脖子上淡淡的紅線縫痕，以及在接觸冰藍色魔法時心跳短暫停頓的身體反應（此身體反應實際觸發於 Act II E-11 愛莉風暴期間近距離接觸美夜子時，見 `ACT_II_OUTLINE.md` 行572）。此場景展示了帝國對一個人完整人格的系統性消化：凜曾是溫柔偶像，最終成為制度的執行面孔。payoff 於 Act III 凜拒絕治癒（CDL-215 E-III-H2）——她見過一切，仍主動選擇清除感情。

### 圖片說明

凜曾是一個以歌聲守護粉絲的溫柔偶像，但死而復生之後，她的記憶被清除，被改造成帝國管理局的公務員，在制度框架下執行任務。她的身上只剩下脖子上一道淡淡的縫痕，提醒著她曾經歷過的一切——但那段記憶，已經不屬於她了。她成為了制度的面孔，一個沒有個體名字的職位。

**Reference Images**：
- 凜（情緒管理局制服）：`ConceptArt_Rin_TheAdministrationBureau.png`

**簡化描述**（150-200字）：
凜穿著情緒管理局制服，個體特異性被消除，成為體制的執行機器。官方記錄身份掩蓋了她的人性。制服是枷鎖，職位是身份，這是制度對靈魂的物化。

**生成提示**：
```
Style: Official documentation aesthetic; authoritarian uniform
Mood: Institutional erasure; loss of individuality; soul commodification
Colors: Bureaucratic grays, whites, institutional navy; personality drained
Composition: Formal portrait; background of filing cabinets or documents
Lighting: Harsh fluorescent institutional light
Canvas: 3:4 portrait (ID photo style)
```


---

## 圖83：「朱音的背叛與真相」（Akane's Betrayal Truth）

**建議輸出文件名**：`ConceptArt_Scene_83_Akane_BetrawalTruth.png`

### 劇情背景

**[已修正 2026-07-17]** Act II Phase B，Beat E-07a（113年5月，小光之死當晚，非E-07b）：依 `ACT_II_OUTLINE.md` 行165「P-A21 PAYOFF：晴香目睹紫音在後巷/秘密空間自行注射情緒抑制劑」明確屬 E-07a（小光死亡→紫音崩壞→黑奏邏輯介入之後），原文標記 E-07b 屬誤植，已更正。晴香親眼目睹紫音在後巷對自己注射情緒抑制劑——魔法對紫音而言早已從「戰鬥工具」蛻變為麻醉弟弟死亡罪惡感的精神毒品（CDL-051）。晴香試圖用 E-05 同一招「發光/給糖」安撫紫音（假情緒承接失效，CDL-208第二段），卻被強烈排斥和嘲諷（台詞方向：「妳以為貼張貼紙就會好？」）。她的「背叛」並非惡意，而是一個在極度絕望中選擇用毒品繼續存活的人，對任何救贖論述發出的本能嘲諷。這一幕令晴香的偽王道覺醒動搖（CDL-199），同時埋下 Act III 紫音最終以自爆回歸的情感對比。

### 圖片說明

朱音的弟弟死了，而那件事的罪惡感是她再也無法消化的重量。她用情緒抑制劑麻醉自己，讓那份痛楚暫時沉默——這不是惡意，只是一個在極度絕望中選擇繼續存活的方式。晴香拿著「希望」來找她，她只能對那份天真發出冷漠的嘲笑，因為她比任何人都清楚希望是多麼脆弱的東西。

**Reference Images**：
- 朱音：`ConceptArt_Akane_CasualWear.png`

**簡化描述**（150-200字）：
朱音在後巷注射情緒毒品，對晴香的「希望」發出冷漠的嘲笑。她的背叛不是因為邪惡，而是徹底的絕望與現實妥協。這一刻她選擇了逃避而非戰鬥。

**生成提示**：
```
Style: Gritty realism; dark alley setting; addiction aesthetics
Mood: Despair; betrayal; loss of idealism
Colors: Alley grays, injection amber, poison green tones
Composition: Figure in shadow; injection device prominent; cold distance to viewer
Lighting: Low, threatening; minimal illumination
Canvas: 3:4 portrait or widescreen alley view
```


---

## 圖84：「美夜子的三段式覺醒」（Miyako's Three-Stage Awakening）

**建議輸出文件名**：`ConceptArt_Scene_84_Miyako_ThreeStageAwakening.png`

### 劇情背景

**[已修正 2026-07-17]** 此三聯畫跨越 Act II Phase A 至 Act III，呈現美夜子靈魂困禁狀態（CDL-271）逐步崩裂的完整過程。第一階段：**113 年 5 月，Beat E-06**，美夜子為保護隊友（擋落一擊本應落在隊友身上的攻擊）主動硬頂受重傷，觸發貓殼龜裂、人形 Glitch Form 閃現 0.5 秒（CDL-243/CDL-108，依 2026-07-15 CDL-335 定案：觸發源為「物理護隊受傷」，非舊版「PTSD 觸發／認出凜」——原 E-05a「總部被襲＋鏡像處刑室誘捕」設計已於 CDL-317/CDL-335 整個取消，原文引用已過時，已更正）——支撐靈魂 1% 意志的鎖鏈首次公開顯露。第二階段：Act III Phase H1.5 月下窗台自我確認測試（見SPEC#6），是 1% 意志逼近臨界極限的外化，體現「不是強，是在無法倒下的結構中撐著」的悲劇本質。第三階段：晴香溫柔擁抱，美夜子第一次在信賴的人面前鬆開防禦——這是她深層 Need「在信賴的人面前大哭一場」（miyako.md §故作堅強）的部分實現，為 Act III 揭露姊妹關係（CDL-062）奠定情感基礎。

### 圖片說明

美夜子長期以貓的形態存在，靠著極細的一絲意志支撐著整個偽裝，不讓任何人看見她身體內部的崩壞。三個時間點並置：貓殼在一次衝擊中出現裂縫、月光下她孤身確認自己是否還算一個人、以及晴香的擁抱讓她第一次在某人面前放下了防衛。這三刻構成了她從「不能倒下」到「允許被接住」的旅程。

**Reference Images**：
- 美夜子：`ConceptArt_Miyako_MagicalGirl.png`

**簡化描述**（150-200字）：
貓殼龜裂→月下窗台自我測試→晴香溫柔擁抱，三個階段連貫成美夜子的重生過程。她從被動保護者轉為主動選擇者，從虛假化身恢復為真實自我。

**生成提示**：
```
Style: Three-stage visual progression; transformation journey
Mood: Awakening; choosing to be real; acceptance of pain
Colors: Transition from cat-form pale to human-form vital; moonlight blessing
Composition: Three panels or flowing narrative from left to right
Lighting: Cracking light (stage 1) → cold moon (stage 2) → warm embrace (stage 3)
Canvas: Triptych or widescreen progression
```


---

## 圖85：「朔與黑市網絡」（Saku and the Black Market Network）[BEAT_SHEET_PREP]

**建議輸出文件名**：`ConceptArt_Scene_85_Saku_BlackMarketNetwork.png`

### 劇情背景

Act II 期間，朔以雙面身份運作：白天是情緒管理局冷酷外勤特工，夜晚是夜區屍骸獵人（saku.md §以身飼虎）。加入情緒管理局是為了接近 Unit 01 真相——確認那具長著美夜子臉的軍方兵器是否仍保有意識（saku.md §最痛苦的目擊者）。黑市網絡是他維持夜間調查線路的關鍵資訊來源，也是他在帝國管控系統下唯一能夠不留紀錄換取情報的通道。此場景呈現了朔長期分裂生存的代價：每一次黑市交易都在加深他在制度內的偽裝，距離「真實的朔」越來越遠。payoff 於 Act III 朔從「復仇者」轉變為「解放者」（saku.md Archetype），接受美夜子已改變但仍連續的現實。

### 圖片說明

朔加入帝國是為了接近一個秘密：那個長著美夜子臉的軍事武器，裡面是否仍然有意識。在昏暗紅燈籠光線照映的廢棄地下道裡，朔與黑市線人進行無聲的情報交易——這是她在帝國管控之外唯一能不留紀錄行事的方式。每一次交易，她都更深地藏在偽裝之後，離真實的自己更遠一步。

**Reference Images**：
- 朔：`ConceptArt_Saku_CasualWear.png`

**簡化核心描述**：
地下室或廢棄地下道，朔與黑市線人進行交易。昏暗紅燈籠光線映照出危險的協力。朔維持著日夜兩面身份的無聲平衡。

**所需資源**：朔的角色設計，黑市環境


---

## 圖86：「美夜子鏡像反映」（Miyako's Mirror Death）[MULTI_ACT]

**建議輸出文件名**：`ConceptArt_Scene_86_Miyako_MirrorDeathReflection.png`
### 劇情背景

`[TIME_REVISED 2026-07-17]` 原文將時間窗定為「Act II詛咒觸發後至Act III覺醒前」，但依 `miyako.md` §鏡像反映規格原文（見下）同 `DIGEST_CHARACTER_STATES.md` MY-S9，呢條鏡像規則係**避難所詛咒本身自帶嘅恆常背景規則**——美夜子貫穿 Act I 全程已處於詛咒穩定狀態（MY-S1），冇任何獨立「詛咒喺Act II先觸發」嘅事件；規則生效期應為**全程**（詛咒生效期間內恆常存在），劇情無明示解除點（`[NEEDS_FACT: 具體終止/解除時間點canon未落實]`），唔應窄化為「Act II後至Act III前」。美夜子在Alpha線已冰封死亡11年（Y92年冰封，Y103年靈魂碎片縫合復生，但Alpha線肉體的狀態以鏡像形式殘存）。任何反光面映照出的不是Beta線現在的美夜子，而是Alpha線11年冰封後的真實狀態（`miyako.md` §鏡像反映規格；CDL-282鏡像法則終極定義）。這是美夜子「已經死過、正在活著」的日常視覺化。

### 圖片說明

普通走廊。美夜子走過一面大型落地鏡。現實中的她：步伐正常，外觀完整，眼神平靜。鏡中的她：紫黑色凍傷覆蓋頸部、手背、臉部邊緣，皮下組織的凍損呈樹狀紋路，眼睛存在但那個使眼神成為眼神的東西不在了——冰封的死眸，不是閉合。鏡中的影像動作略滯後，像另一個時間線的訊號延遲。美夜子看見了，面無表情，繼續走。這是她每天的日常。

**劇情位置**：
- **時間點**：全程恆常背景規則（Beta線詛咒生效期間全程適用，非Act II後才開始；`[NEEDS_FACT: 解除點未落實]`）
- **CDL追蹤**：`canon/03_characters/miyako.md §鏡像反映規格`；CDL-282
- **前置事件**：美夜子在 Alpha 線已冰封死亡11年；詛咒本身自帶此鏡像規則，反光面恆常映照 Alpha 線的真實狀態
- **本場景功能**：視覺化美夜子詛咒的外部呈現——她在行走，鏡子裡的她是屍體
- **後續payoff**：SPEC#6 月下崩潰；SPEC#27 美夜子三段式覺醒

**Reference Images**：
- 美夜子：`ConceptArt_Miyako_MagicalGirl.png`
- 美夜子（便服）：`ConceptArt_Miyako_CasualWear.png`

**Creative Enhancements**：
- 場景：走廊或任何有大型反光面的地方
- 現實中的美夜子：外觀正常，直立行走，表情平靜
- 鏡中的美夜子：Alpha 線 11 年冰封的真實狀態——大面積紫黑色凍傷，眼神渙散如死眸
- 鏡中影像若隱若現，像透過霧玻璃
- 美夜子本人的表情：她看見了，面無表情，繼續走

**詳細核心描述**（230字）：

普通走廊。美夜子走過一面大型落地鏡。

現實中的她：步伐正常，外觀完整，眼神平靜。

鏡中的她：Alpha 線 11 年冰封後的真實樣子。紫黑色凍傷覆蓋頸部、手背、臉部邊緣，皮下組織的凍損呈樹狀紋路。眼睛存在，但眼神是「有眼睛，但沒有人在後面」的死眸——冰封而非閉合。

她的鏡中身影動作略滯後，像另一個時間線的訊號延遲。

美夜子看見了。她是知道的。她沒有停步，繼續走。

這是她每天的日常。

**生成提示（Midjourney）**：
```
Style: Dark anime; split reality visualization; quiet horror in ordinary space
Mood: Living past your own death; the mundanity of carrying a corpse reflection
Colors: Ordinary corridor warm-neutral tones; reflection shows blue-black frost discoloration; slight color temperature shift in mirror zone
Composition: Figure walking past large mirror; real figure and mirror figure both visible; clear visual distinction between living exterior and frost-death reflection
Lighting: Normal corridor lighting; slightly colder and dimmer within mirror frame
Special effects: Mirror image slightly offset in timing; frost-damage texture visible on reflected skin; death-still eyes in reflection vs. alert eyes outside
Details: Bruise-pattern frostbite on neck/hands/face in reflection; hollow death-eyes in mirror vs. calm live eyes outside; zero hesitation in walking step
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```


---

## 圖87：「光環的視覺顯現」（The Halo's Physical Manifestation）[ACT_II_III] ⭐⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_87_HaloManifestation.png`

### 劇情背景

Act II至III（任何魔法少女觸及力量上限時），以凜作為典型呈現場景。帝國設計的情緒力量裝置內建安全閥機制——當持有者魔法輸出超過容量閾值時，光環從關節處的透明薄膜狀顯現，逐漸具體化為旋轉發光的圓環，透過旋轉榨取體內情緒能量。失控時光環顏色由神聖金光轉為血紅或慘白，扭力直接作用於骨骼肌肉。這是主角第一次親眼見到這個系統的殘酷運作：光環不是榮耀，是倒數計時器，是帝國制度暴力的具體可見化（02_glossary.md §光環；01_world_rules_and_costs.md §光環處決機制）。觀眾透過這個場景第一次真正理解凜後來選擇消散的底層恐懼，也理解美夜子為何對光環有PTSD——因為她108年親眼看見這個機制如何扭斷凜的脊椎。

### 圖片說明

凜在高強度戰鬥中逼近力量上限，肩頸與手腕關節處出現懸浮發光圓環——初期呈半透明神聖金光，隨著超載程度加深，光環顏色開始轉移，轉速加快。環的外型精確幾何，懸浮在關節外側，旋轉的動態感暗示著越來越強的扭力。美夜子在遠端看見顏色變化的瞬間，身體在思考之前已經移動——粗暴衝過來打斷凜的施法。

### 劇情位置

**時間點**：Act II-III（任何魔法少女觸及力量上限時；以凜為典型呈現）
**CDL 追蹤**：02_glossary.md §光環（Halo）；02_glossary.md §光環處決（Halo Execution）；01_world_rules_and_costs.md §光環處決機制；miyako.md §行為鉤（光環警戒）；rin.md §犧牲——光環處決
**前置 → 本場景 → Payoff**：帝國情緒力量裝置的安全閥設計存在（世界規則） → 光環視覺顯現（主角第一次目睹） → 凜犧牲（108年光環處決，頸椎斷裂）→ 美夜子的光環PTSD；凜重組後頸上紅縫合線的由來

### 詳細核心描述（240字）

戰場的某個瞬間，凜的輸出已超過容量的邊界。

她的肩頸、手腕的關節處，薄膜狀的發光圓環開始凝聚——從透明到半透明，從靜止到緩緩旋轉。光的顏色是神聖的金色，美得不真實，像是某種祝福的象徵。但轉速在加快。

環並不貼合皮膚。它懸浮在關節外側，像是某種外掛的機械部件，但又是活的、動的、持續旋轉的。它的幾何形態精確到不像魔法，而更像工程設計——帝國工程師的設計意圖在光環的輪廓裡清晰可讀：這是一個斷路器，一個安全閥，只是代價是扭斷施術者的骨骼。

光環轉速再提升一級，顏色開始向血紅偏移。

美夜子在遠端看到這個顏色變化的瞬間，身體在思考之前已經移動——她衝過去，用最粗暴的方式打斷凜的施法。她的口型是「停下來！妳想被扭斷嗎！」——聲音大到不像平時的她。

整個場景構圖的核心是光環本身：那個旋轉、轉速加快、顏色漸變的圓環，懸浮在凜的關節處，美得令人窒息，危險得令人窒息。

### Midjourney 標準版

```
Dark anime. Magical girl combat scene. Girl with pale blue-tinted hair and dark eyes pushing past her power limit in mid-battle — joints at shoulders, wrists, and neck-adjacent area showing levitating luminous rings: The Halo. Rings start translucent gold, now spinning faster, color shifting toward crimson at the edges. Rings hover at joint level, precisely geometric, engineered-looking, not organic. Visible rotation suggesting increasing torque on her skeletal structure. Another girl (dark hair, school uniform with tactical gear) frozen mid-distance, eyes fixed on the color change — body already moving toward her without thinking. Composition: dramatic mid-shot, foreground girl with active rings visible at shoulder, wrist and upper chest joints, spinning light-trails; background girl mid-sprint toward her. Colors: battle setting dark blues and greys, Halo luminous gold-to-crimson gradient, translucent ring geometry. Emotional register: the beauty that kills, visible countdown. 8k, niji 6, style raw. --ar 9:16
```

**視覺重點**：
- 光環的幾何精確感——不是有機魔法，而是工業設計的殘酷美學，讓觀眾感受到「帝國設計了這個」
- 顏色從金色向血紅漸變的過程——死亡倒數的視覺化，轉速加快是視覺上可讀的
- 光環的懸浮旋轉——不是靜態的裝飾，而是動態的、帶扭力感的機制
- 美夜子的本能反應——身體在思考前已移動，這是她對光環的極度敏感（PTSD前置呈現）
- 環的懸浮位置在關節處，讓觀眾聯想到枷鎖、頸圈，但由光構成——帝國制度暴力的美麗外殼

⭐⭐⭐⭐⭐

**Reference Images**：
- 美夜子：`ConceptArt_Miyako_MagicalGirl.png`（原檔為CasualWear，本場景明確係「戰場的某個瞬間」「高強度戰鬥中」，改用MagicalGirl更貼合）
- 凜：`ConceptArt_Rin_MagicalGirl_1.png`（原檔為CasualWear，本場景係凜在高強度戰鬥中逼近力量上限觸發光環，改用MagicalGirl更貼合）



---

## 圖88：「晴香與影子的雙舞」（Haruka and Shadow Dual Dance）[BEAT_SHEET_PREP]

**建議輸出文件名**：`ConceptArt_Scene_88_Haruka_ShadowDualDance.png`
**依據版本**：`12_philosophy_and_systems.md` §七 榮格個體化過程具現化系統（CDL-066）；`yu.md` §第二幕末：部分融合（CDL-069/070）（2026-07-17 審計修正，見 CHANGE_LIST_EXISTING_SPEC.md 圖88項）

### 劇情背景

`[WRONG→已修正]` 晴香的潛意識人格「夕」在5歲創世那夜從靈魂分裂而出，兩者關係確為榮格「個體化過程」具現化：Persona（魔法少女變身）對抗 Shadow（夕）（CDL-066，`12_philosophy_and_systems.md` §七）——呢部分依據正確。但原文將雙舞場景放喺「**Act III** 心理整合危機」，並描述「晴香嘗試用魔法力量壓制夕」，同 canon 已確立嘅**三級整合進程**矛盾：Act I 幕末 E-XX（暫時性初裂，CDL-069/070）→ **Act II E-15（部分融合，本場景最貼近的原型）** → Act IV（完全整合）——**冇獨立嘅「Act III」整合階段**。更關鍵嘅係，原文「晴香壓制夕、夕以力量反擊」嘅對戰式框架，同 `12_philosophy_and_systems.md` §七明確主張嘅治癒機制**直接相反**：「晴香的『改變現實』= 將內在問題投射到外在，問題無法被解決。真正的治癒只能向內接納陰影（夕整合，CDL-069）」——即「壓制/戰勝陰影」正正係故事否定嘅偽解法，唔係整合本身嘅正確描繪。

建議修正為 **Act II E-15（部分融合）**場景：依 CDL-070，晴香整合高潮時本想用膠布蓋住鏡子/傷口，最終放下膠布、主動把手貼向鏡面/夕的手——以「伸手貼近/接納」取代「壓制/對戰」，並移除虛構台詞「你逃避的一切才是你真正的力量」（yu.md 未見此句，標 `[INFERRED]`，如保留須註明為演繹對白非原文引用）。「動作同步方向相反」嘅雙舞視覺構圖可保留作為鏡像對稱嘅藝術化演繹（`[INFERRED]`，構圖層面唔涉及劇情事實）。

### 圖片說明

`[TIME_REVISED]` 晴香在鏡面/夢境空間中與自己內心深處的陰影人格「夕」相對而立，兩人動作同步、方向相反，彷如鏡中鏡——但這不是對戰或壓制，而是晴香主動放下防衛（膠布哲學：放下膠布），伸手貼向鏡面/夕的手，象徵接納而非戰勝。從正上方俯瞰，兩個身影形成對稱的幾何圖案，揭示她們本質上是同一個人。

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`
- 夕：`ConceptArt_Yu_CasualWear.png`

**簡化核心描述**：
晴香與自己的陰影夕進行詭異的雙人舞，動作同步卻方向相反。從上往下俯瞰，兩個身影形成對稱幾何，背景世界在其旋轉中扭曲。

**所需資源**：晴香的形態，陰影視覺設計


---

## 圖89：「玻璃庭院茶會」（Glass Garden Tea Party）

**建議輸出文件名**：`ConceptArt_Scene_89_GlassGarden_TeaParty.png`

### 劇情背景

玻璃庭院茶會係 Act II 幕末最後一個 beat（Beat Act II-XX，CDL-202），114年3月，「虛假的黎明」三段序列（E-15→Act II-XX→E-16）中段。晴香完成與夕的和解、完成儀式性剪髮之後（E-15），主角團短暫以為迎來轉機。彩邀請主角團赴茶會，表面溫柔精緻，卻在場中被黑奏強行滲出冰冷聲線（詛咒型切斷機制，CDL-246），以超現實宣告切斷虛假希望——「偽三幕黎明」在此碎裂，直墜 Act III（緊接 E-16 EMB 鐵桶包圍）。此時「彩/黑奏同一人」尚未向觀眾/主角團正式確認（AKS 進程 P1 仍在積累階段，要到 Act III 前才確認），故此場景中在場的仍是「彩」這個人物身份，由黑奏在背後操控／透過彩的身體滲出聲線，唔係黑奏以自己嘅「皇袍/全覆蓋帝國面具」真身現身——ACT_II_OUTLINE 原文冇提及任何「皇袍」或「幼童身軀暴露」描寫，呢個係本次審計發現嘅角色形態誤植（見下方修正說明）。

### 圖片說明

主角們以為終於迎來了喘息的機會，受邀參加帝國塔頂精緻茶會，玻璃構造映照著整座城市，光線優雅卻冷漠。彩坐在桌邊招待眾人，笑容溫柔得體——直到某一刻，一把不屬於彩的冰冷聲線從她口中滲出，宣告一切根本沒有結束。這場茶會是友善假象的最後一幕，裂縫瞬間拆穿。

**Reference Images**：
- 彩（第一形態／被控制形態）：`ConceptArt_Aya_MagicalGirl_1.png`（本場景彩仍以自身外觀出現，黑奏尚未真身現身，故不應使用「第二形態／真身覺醒後」）

**簡化描述**（150-200字）：
帝國塔頂的透明溫室茶會，彩以自身外觀待客，玻璃構造映照三人與城市，光線冷漠而壓抑。黑奏聲線突然從彩口中滲出宣告一切未完——這場茶會是最後的虛偽友善，暴露將至。

**所需原圖資源**：
- 彩的魔法少女形態（被控制形態）
- 玻璃建築的透明感參考——帝國塔頂溫室具體空間造型 canon 未落實，`[NEEDS_FACT: 見 DIGEST_LOCATIONS.md §5，黑金+紫水晶美學延伸屬合理推斷但非confirm canon]`


---

# Act III

## 圖90：「糖果唐樓交易」（Candy Tower Block Transaction）[ACT_III]

**建議輸出文件名**：`ConceptArt_Scene_90_CandyTowerBlockTransaction.png`

### 劇情背景

帝國歷114年3月，Act III Phase G3，主角團在Phase G階段尋找紫音下落，進入地下情報市場「糖果唐樓」尋求線索（CDL-213/214）。這個場景呈現地下世界的美學質感：舊式香港唐樓的殘舊外殼裡，護士長形態的中間人以博物館館長的職業精確，向前來交易的主角團介紹情緒結晶——每件結晶如名酒一樣分類展示，每次交換都有代價。主角團處於緊繃的評估位置，這是「資訊有價，而且代價不是錢」的世界。成功的線索追蹤直接連接CDL-214「下水道無聲重逢」場景（SPEC#104），是找到紫音的中間步驟。

### 圖片說明

帝國歷114年，主角團進入地下情報市場「糖果唐樓」尋找紫音的下落。舊式唐樓裡，以護士長形態出現的中間人把各種形態的情緒結晶整齊陳列在長桌上，如同博物館館長介紹展品。每一件情緒結晶的顏色和形態各不相同，每一次交換都有代價——這個地方不假裝自己高尚，但它知道自己是什麼，並以此為傲。主角團站在桌前，評估，緊繃。

**劇情位置**：
- **時間點**：帝國歷114年3月 Act III Phase G3
- **CDL追蹤**：CDL-213/214；07_entities §糖果唐樓
- **前置事件**：主角團在Phase G尋找紫音下落，走入地下情報市場尋求線索
- **本場景功能**：展示地下世界的美學質感——「即使是黑市也有它的尊嚴與品味」。情緒結晶如名酒一樣分類展示，中間人以專業態度接待。主角團處於評估與交換的緊張位置。
- **後續payoff**：CDL-214下水道無聲重逢（線索追蹤成功）；世界觀中地下經濟的視覺具象化

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`（潛入黑市非變身狀態，宜用便服參考）
- `[NEEDS_FACT]`：紫音此時已自我放逐至下水道半屍骸化野獸狀態（見 SPEC#104），並非本場景在場角色——主角團在 Phase G3 潛入糖果唐樓是為咗**尋找**紫音下落，唔係同紫音一齊交易；具體邊幾位隊員在場 canon 未指定，原文引用「朱音：ConceptArt_Akane_MagicalGirl.png」屬誤植，已移除

**詳細核心描述**（200-350字）：


香港舊式唐樓的某層。走廊盡頭的一個大房間，低矮天花，牆上剝落的舊漆露出更舊的磚。但房間內部被刻意佈置過：巴洛克式的天鵝絨扶手椅，椅墊磨損，絲線微微起毛；一盞水晶吊燈，積了薄塵，但吊燈本身的切割仍然精緻，燈光透過舊水晶折射出稍微渾濁的彩虹。

桌子是整個房間的核心：長形，鋪著深酒紅桌布，上面整齊陳列著不同形態的「情緒結晶」——有的裝在小玻璃瓶中，有的放在精緻的托盤上，有的像礦石標本一樣附有標籤說明。它們的色澤各不相同：有的透明如水晶，有的帶著模糊的色彩，有的邊緣有裂紋。像一個古老藥鋪與品酒室的混合體。

中間人站在桌後：護士長形態，白色舊制服，髮型整齊，態度不冷漠但絕對不親切——她以職業性的精確與客人介紹每一件展品，如同博物館館長。

畫面前方，主角團的一兩個人站在桌前，面向桌上的結晶評估。他們的姿態是緊繃的：這是交換，不是購物，每一步都有代價。

整個房間的矛盾感是重點：殘舊的外殼，精心維持的內部秩序，地下世界的美學尊嚴。這個空間從不假裝自己高尚，但它知道自己是什麼，並以此為傲。


**生成提示（Midjourney）**：
```
Style: dark fantasy noir anime, Hong Kong old tenement building interior, baroque decay aesthetic
Mood: underground market professionalism, tension beneath decorum, old-world dignity in shadow economy
Colors: deep burgundy, faded gold, dusty crystal refractions, muted skin tones, amber lamp light, grey-green wall plaster
Composition: long table center covered in emotion crystals in glass vials and specimen trays, nurse-uniform figure behind table, two figures evaluating from near side, crystal chandelier above shedding dusty prismatic light
Lighting: chandelier ambient with aged crystal diffusion, warm but slightly murky, shadow corners
Special effects: emotion crystals glowing faintly with varied hues, each slightly different color and opacity
Character: neat but worn nurse uniform figure as vendor, two young magic-user figures as buyers, formal body language, no smiling
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
anime interior Hong Kong old apartment room, baroque worn velvet chairs, dusty crystal chandelier, long table with glowing crystal vials arranged like wine collection, nurse-uniformed woman presenting items to two young visitors, dark underground market atmosphere, muted burgundy and gold palette
--ar 16:9 --niji 6
```


---

## 圖91：「下水道無聲重逢」（Silent Reunion in the Sewers）[ACT_III]

**建議輸出文件名**：`ConceptArt_Scene_91_SilentReunionSewers.png`

### 劇情背景

帝國歷114年3月，Act III Phase G4（**Fake Climax 標記**），糖果唐樓情報交易後，主角團追蹤線索找到紫音的藏匿地點（CDL-214）。依 `ACT_III_OUTLINE.md` E-III-G4，此刻紫音已處於「半屍骸化野獸狀態」，用殘破身軀護著流浪狗與低階無名屍骸自建秩序；晴香原本準備「拯救或介錯」，但見到紫音已有自己的存在方式，選擇不打擾——她沒有走進去，沒有呼喚，沒有強迫接觸，只是把一袋糖果和藥品放在下水道入口前的地面，然後轉身離開，留下足夠的空間和尊嚴。**這不是最終團圓**：outline 明確此後「接下來一個月（Phase G/H），晴香透過朔的黑市網絡定時收到『防線未破』情報，每一次『紫音還活著』都是『紫音在替我哋死』的罪疚感疊加」，直到 Day 14 才在帝國廣場正式相見（SPEC#10）。場景的主角是那袋被遺留的東西，和下水道黑暗中隱約可感覺到的存在——紫音在看，她收到了，但她不需要被看見。

### 圖片說明

帝國歷114年，晴香追蹤線索找到紫音藏匿地點附近，但她沒有走進下水道，沒有呼喚，沒有強迫接觸——她只是把一袋糖果和藥品放在入口前的地面，然後轉身離開。她的腳印走到袋子旁邊，停了一下，然後轉身消失在畫面邊緣。下水道黑暗中有一個隱約可感覺到的存在，紫音在看，她收到了，但她不需要被看見。那個被遺留的布袋，是整個場景的情感重心。

**劇情位置**：
- **時間點**：帝國歷114年3月 Act III Phase G4
- **CDL追蹤**：CDL-214；05_story_outline §Phase G
- **前置事件**：糖果唐樓獲得線索，主角團找到紫音藏匿地點附近
- **本場景功能**：展示晴香對紫音的照顧方式——她不強迫接觸，她放下東西，然後離開，給紫音保留空間和尊嚴。這是一種「懂得怎樣愛人」的無聲示範。場景的主角是那袋被遺留的東西，不是人。
- **後續payoff**：**已修正**——原文誤植「SPEC#4廢棄糖果工廠正面相遇」，但紫音自 Act II 已放逐至糖果工廠（SPEC#4為Act II事件），Act III此刻藏身地點係下水道，並非糖果工廠。正確payoff：接下來一個月晴香透過朔的黑市網絡收到「防線未破」情報，罪疚感持續累積 → 直到 Day 14 SPEC#10帝國廣場救援（I3，紫音見證被無條件拯救後主動過載化為糖果山），呢個先係二人「正式相見」嘅場景，唔係走出來團圓

**Reference Images**：
- 晴香（便服）：`ConceptArt_Haruka_CasualWear.png`
- 紫音：`[NO_REF]`——此刻紫音為「半屍骸化野獸狀態」，同已有嘅 `ConceptArt_Akane_MagicalGirl.png`（標準魔法少女形態）唔對應，且本場景刻意只呈現隱約存在感（陰影中一雙眼睛反光），唔需要完整形態reference；如需具體野獸狀態設計待另行 source check

**詳細核心描述**（200-350字）：


下水道入口附近，不是下水道深處，是入口前的過渡地帶——半露天，地面潮濕，苔跡與滲水的痕跡沿磚縫生長。燈光是外面城市的漫射光，帶著橙黃色的夜色，透不進來多少，形成一個半明半暗的閾值空間。

地面中央：一個普通的布袋，或者是用紗布隨手捆起來的小包。可以透過布料的輪廓看出裡面有圓形的東西（糖果包）和幾個小方形（藥品包裝）。袋口沒有特別紮緊，像是隨手放的，不是鄭重的「贈禮」，就是順路帶來的東西。

袋子旁邊地上，可以看到一個細小的細節：晴香的腳印走到這裡，然後在袋子旁邊停了一下，然後轉身，離開。這是可以從腳印方向推斷出的東西，也可以是晴香的側影剛剛轉身、已走到畫面邊緣，只留下半個背影正在消失。

距離幾步的地方，下水道入口的黑暗中：隱約可見極輕的一點存在感——可能是暗影中一個輪廓，可能只是一雙眼睛反光。也可能什麼都看不到，只是觀者知道那裡有人在看。

整個構圖的重心是地上的布袋，和袋子佔據的那一個稍微被燈光照到的空間。那是一個小小的、溫暖的、不強迫任何人的空間。


**生成提示（Midjourney）**：
```
Style: dark magical girl anime, quiet emotional realism, urban undercity
Mood: one-sided tender care, deliberate space-giving, heavy implied presence
Colors: damp grey concrete, orange-yellow urban light diffused, deep shadow, pale cloth of small bundle
Composition: small cloth bundle of candy and medicine packages at center of frame, girl's back/half-silhouette at far left edge turning away, sewer entrance dark on right with barely perceptible shadow presence
Lighting: low diffused urban nightlight from outside, warm amber tinge, harsh shadow boundary
Special effects: very faint eye-reflection glint in deep shadow near sewer entrance, barely visible
Character: departing figure (back only, school uniform), implied hidden watcher in darkness, no faces visible
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
anime sewer entrance urban night, small cloth bundle left on wet ground, girl silhouette walking away at frame edge, deep shadow beyond entrance with faint presence implied, muted warm grey palette, quiet emotional scene, no characters facing viewer
--ar 16:9 --niji 6
```


---

## 圖92：「刑思破繭」（Keishi Breaking Free）[ACT_III]

**建議輸出文件名**：`ConceptArt_Scene_92_KeishiEscape.png`

### 劇情背景

帝國歷114年3月初，Act III Phase G，黑奏（刑思身份，武器形態）逃出秋穗的實驗室。秋穗對刑思的控制在Phase G開始崩潰，刑思的身體自主性重新甦醒——這不是外力救援，而是身體本能對長期壓制的反抗（aya.md §第三幕；BEAT_SHEET_PREP_UNMAPPED_VISUAL_SCENES.md scene C1；ACT_III_OUTLINE.md Phase G）。此場景與同期晴香精神崩潰並行，是「多重自解放」敘事的物理面：晴香在心理上開始整合陰影，刑思在肉體上開始拒絕操控——兩個不同層面的自主性覺醒同步發生。這也是黑奏物理形態覺醒的另一面，不同於Y98年覺醒屠殺：這一次，是一種有意識的、艱難的、脊椎對抗信號的抵抗。

### 圖片說明

秋穗地下實驗室的設備在崩潰。刑思（黑奏的武器形態，148cm的小小身體）在機械拘束開始失效的瞬間緩緩站起來——不是爆發式的掙脫，而是逐步的、痙攣的、對抗控制信號的身體重新啟動。她的手指在顫抖，背對著鏡頭，從設備碎片和磁性拘束中走出，每一步都像是要用盡全身力量。

### 劇情位置

**時間點**：帝國歷114年3月初（Act III Phase G）
**CDL 追蹤**：aya.md §第三幕；BEAT_SHEET_PREP scene C1；ACT_III_OUTLINE Phase G
**前置 → 本場景 → Payoff**：Phase G 秋穗控制崩潰 → 刑思逃出實驗室（與晴香精神崩潰並行）→ 黑奏的帝國控制鏈開始動搖；後段彩奪回身體的前置

### 詳細核心描述（230字）

秋穗的地下實驗室。警報聲在遠處迴響，磁性拘束裝置的嗡嗡聲開始變得不穩定。

刑思（黑奏武器形態）原本站在固定位置，動作精確、機械、符合控制程序。然後，身體出現第一次痙攣。

不是訓練程序，不是攻擊模式——而是抵抗。

她緩緩地、費力地抬起頭。磁性拘束裝置發出金屬應力的聲音，像是有東西從內部試圖撐開。她的手指開始顫抖——那種顫抖不是魔力過載，而是有東西想要控制手指、有東西在抵抗那個控制，兩股力量在同一組肌肉裡拉鋸。

她走了第一步。

設備發出警告聲，控制信號試圖讓她停下——她的腳停頓了半秒，然後繼續邁出去。

背對著鏡頭，148cm的小小身體在倒塌的實驗室設備中穿行，每一步都帶著一種不屬於武器的東西：選擇。

她沒有回頭看秋穗，也沒有說話。

她只是繼續走，往上，往外，往那個被關閉太久的出口走去。

### Midjourney 標準版

```
Style: Dark psychological body horror escape; painterly illustration; tension of resistance
Mood: Not dramatic explosion but grinding internal resistance — the moment a weapon remembers it has a will; slow difficult freedom more powerful than sudden burst
Colors: Cold grey-blue laboratory environment; magnetic restraint device harsh white-blue warning light; Keishi's figure in deep black-violet (Kurokane weapon form); single warm light source from direction of exit (upper)
Composition: Back-shot of 148cm small figure standing among collapsing laboratory equipment; restraint devices breaking away; body posture conveying resistance rather than ease; exit visible in upper distance as only warm light
Lighting: Cold laboratory fluorescent contrast against restraint device failure sparks; warm light from exit direction as destination; harsh shadows in mid-ground of broken equipment
Special effects: Magnetic restraint field flickering and shorting; metal stress fractures along restraint structures; Keishi's form emitting faint violet energy against the control signal; each step leaving faint resistance trace
Character (Keishi/Kurokane): Seen from behind; 148cm small frame in weapon form; trembling fingers visible at sides; posture showing effortful resistance — not easy escape but step-by-step reclamation of autonomy; black-violet deep color form
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 背面構圖是核心——不見臉，只見身體在抵抗的姿態
- 148cm 的小小身體在廢墟設備中的尺度對比，強調這個「武器」的身體本質上是個孩子
- 顫抖的手指是最重要的細節：不是恐懼，是兩股意志在同一組肌肉裡拉鋸
- 出口方向的暖光是唯一的目的地，不需要解釋
- 與晴香精神崩潰並行的意義：一個向內整合，一個向外逃脫——同一個方向，不同層面

**Reference Images**：
- 刑思：`ConceptArt_Kurosou_CasualWear.png`（原檔多列晴香、操，但本場景全程只有刑思一人獨自逃出實驗室，晴香/操均無實際在場，已移除）



---

## 圖93：「嘆息之橋——凜獨角」（Sigh Bridge: Rin's Solo Moment）[ACT_III]

**建議輸出文件名**：`ConceptArt_Scene_93_Rin_SighBridgeSolo.png`

### 劇情背景

`[已修正 2026-07-17，重大標記：整個beat未定案]` 依 `04_timeline_canon.md#event-bridge-of-sighs` 及 `rin.md` 行100，「嘆息之橋——凜獨立場景」明確標為 **[btd — 具體設計待Beat Sheet確認]**：事件內容、情感意義、與主角團的關係、甚至物理地點本身，canon全部未定案，只確認時間窗口大致落喺 Phase G或H（114年3-4月）某處。原文將「候選W的決定在此完成」「霧中石橋」「以完整意識站在世界上的最後一刻」等具體敘事全部寫成既定事實，係將一個canon明確標記為留白嘅beat自行填滿內容，違反pipeline「冇依據支撐嘅內容須標NEEDS_FACT」規則。

另需注意：`DIGEST_LOCATIONS.md` §13 已明確警告「嘆息之橋」在canon中有雙重用法容易混淆——(1) Act III紫音+操雙殺嘅隱喻總稱（物理地點已改為帝國廣場/學校瓦礫，唔係實體橋樑）；(2) 凜的獨立場景代稱（物理地點未定案）。原文將本場景畫成實體「老石橋」，若果日後Beat Sheet層確認凜嘅版本唔係實體橋樑，呢個構圖方向需要整個重做。

本場景暫按digest既有提示（Phase G/H，114年3-4月某處，物理地點未定案）處理，核心情緒方向（凜獨處、已知真相但未揭露、內心已有決定的平靜）保留作為`[INFERRED]`合理演繹，但所有具體細節（實體橋樑造型、霧、路燈、「候選W」措辭）標記為未經Beat Sheet確認的推測內容，待Act III Beat Sheet層正式設計後可能需要整體重做甚至更換地點。

### 圖片說明

`[NEEDS_FACT：地點/內容均未定案，見04_timeline_canon.md#event-bridge-of-sighs]` 凜獨自一人，在Phase G或H某處（114年3-4月，具體地點待Beat Sheet確認），已在內心完成了對自身真實身份的認知，但尚未向其他人揭露。她的姿態沒有掙扎的成分——不是平靜，是更深的東西：了結。昏黃的光源恰好照在她頸部，紅色的縫合線是這個場景裡唯一清晰的色彩。她的臉沒有悲傷，只有一種安靜的確認。（以下沿用原文「霧中石橋」構圖作為暫定演繹，待Beat Sheet層確認具體地點後可能需要更換）

**劇情位置**：
- **時間點**：帝國歷114年3-4月 Act III Phase G-H之間（`[NEEDS_FACT]`：具體beat歸屬、內容、地點全部待Beat Sheet層設計確認）
- **CDL追蹤**：`04_timeline_canon.md#event-bridge-of-sighs`；`rin.md` §嘆息之橋獨立場景（btd，未設計）
- **前置事件**：凜已知自己是重組體（自我認知已完成），尚未向其他人揭露；具體觸發事件、與主角團的關係canon未定義
- **本場景功能**：`[INFERRED]` 凜在揭露前可能的最後獨處瞬間演繹——她不哭，不掙扎，已有決定的平靜。此功能定位為合理推測，非canon confirmed，待Beat Sheet層正式設計後可能整體調整。
- **後續payoff**：`[NEEDS_FACT]`——canon未明確此beat連接到哪個後續場景；暫時參考推測連接E-III-H2凜的最終選擇

**Reference Images**：
- 凜：`ConceptArt_Rin_TheAdministrationBureau.png`（原檔為MagicalGirl_1，但場景明確描述「她的情緒管理局制服在夜色中是深色的輪廓」，改用TheAdministrationBureau更貼合）

**詳細核心描述**（200-350字）：


嘆息之橋。帝國某處的老橋，石材建造，年代久遠。夜間，有霧，但不是伸手不見五指的霧，是讓遠景失焦、讓這個場景與城市其他地方輕微隔離的霧——橋的兩端消失在霧裡，橋上只有她。

凜雙手放在石材欄杆上，身體輕微前傾，看著橋下。橋下有什麼——水，霧，或什麼都沒有可以確定的。她的情緒管理局制服在夜色中是深色的輪廓。頸上的紅縫合線在這個場景的燈光下是最清晰可見的——橋上有路燈，是舊式的昏黃，恰好照在她頸部的位置。

她的姿勢沒有掙扎的成分。她不是一個在欄杆上考慮跳下去的人，她是一個把決定做完、來這裡站最後一次的人。背部是直的，肩膀是放鬆的——不是平靜，是更深的東西：了結。

霧讓橋的遠端不可見，但凜本人非常清晰——她是這個場景裡唯一清晰的存在。

她向下看的眼神是唯一的情緒出口，觀眾看不見她的眼睛（因為她在向下看），但從她頭部的角度和頸部的弧線，可以感受到那個眼神不是虛無，是某種非常安靜的確認。

構圖核心：橋上橫向構圖或縱深構圖，凜在橋中央，霧消去遠景，路燈昏黃照在她的頸部和肩膀，紅縫合線清晰，橋下黑暗。她的背影或四分之三側身，不完全給出正臉。


**生成提示（Midjourney）**：
```
Style: dark magical girl illustration, atmospheric night scene, final interior moment
Mood: a decision already made, the last moment of being whole, quiet completion not despair
Colors: night fog blue-gray, old stone bridge texture, amber-warm old streetlamp limited pool of light, deep shadow below, red suture scar line catching lamp light
Composition: figure standing at stone bridge railing looking down, fog erasing both ends of bridge so only she and immediate surroundings are visible, lamp light pools on her neck and shoulders
Lighting: single old amber streetlamp, creates warm isolated pool, everything else dark or fogged
Special effects: fog softly erases distance, her figure crisp against soft surroundings, red neck scar in lamp light is the one sharp color accent
Character: girl in dark official uniform at stone bridge railing, both hands on stone, head tilted forward looking down, posture settled not distressed, red suture scar line at neck visible in lamplight
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A girl in a dark uniform stands alone on an old stone bridge at night in the fog, hands on the railing, looking down. Amber streetlamp. A red scar line at her neck catches the light. Fog obscures both ends of the bridge. Dark anime style. Atmospheric.
--ar 9:16 --niji 6
```


---

## 圖94：「月下相認」（Moonlit Recognition）⭐⭐⭐⭐⭐ [ACT_III_PHASE_H1.5]

**建議輸出文件名**：`ConceptArt_Scene_94_MoonlitRecognition.png`

### 劇情背景

114年4月中，晚間，Act III Phase H1.5。CDL-274 核心場景：「靈魂比語言更早認出彼此。」美夜子的貓殼在此時已出現龜裂（CDL-282）——得知凜的 Unit 00 真相後，美夜子的自我確認儀式崩潰，貓殼於月光下短暫龜裂，人形輪廓從裂縫處透出。晴香在旁邊，什麼都沒說，甚至沒有確認。但那一瞬間，她們都感覺到了。這是 P-A12 Step 1 回收的場景：晴香曾在某個早期場景伸出手，這裡的晴香再次伸手——但這次美夜子沒有離開。這也是全作三個治癒時刻的第一層：不依靠語言、不依靠記憶，而是靈魂層面的辨認。對比凜的失憶（凜重組後無法辨認美夜子），美夜子此刻的「被辨認」構成全作最深的情感反差。

### 圖片說明

月亮很圓，光把兩個人影拉得很長。美夜子的身上有細細的裂紋在發光——那是一種她平時藏起來的東西，在這個夜晚沒藏住。晴香沒有問為什麼，也沒有說任何話，只是在那裡，在月光下，伸出了一隻手。沒有碰觸，只是放在那裡，讓美夜子決定。這個瞬間不需要任何解釋，因為靈魂在語言之前就已經知道了。

### 劇情位置

**時間點**：114年4月中，晚間，Act III Phase H1.5
**CDL 追蹤**：CDL-274（月下相認「靈魂比語言更早認出彼此」）、CDL-282（鏡像法則/貓殼龜裂機制）、miyako.md §Unit 01（Unit 01 靈魂困禁狀態）
**前置 → 本場景 → Payoff**：SPEC#6 月下崩潰（自我確認儀式失控）→ 貓殼龜裂瞬間，晴香無言伸手，靈魂層辨認發生 → SPEC#27 美夜子三段式覺醒（此場景是第二段的核心心理觸發）

### 詳細核心描述（200-300字）

戶外夜景，月光場景。地點：屋頂、廢棄碼頭、或高樓外牆窗台——任何一個與「夜空直接接觸」的邊緣空間。滿月，高掛，月光以藍白冷色鋪灑。

美夜子：貓殼狀態，但肩頸與手臂的皮膚上出現細密龜裂，白光從裂縫滲出（比 Glitch Form 更輕微，但更持久）。她的眼睛——即使在貓殼狀態——有一種「被看見了」的震驚與某種接近悲傷的東西。姿勢微微僵硬，像是不確定是否該移動。

晴香：站在美夜子旁邊偏後，視線在月亮與美夜子之間。她的右手緩緩舉起，掌心朝上，放在兩人之間的空氣裡——不強迫，不追近，只是放在那裡。臉上沒有眼淚，只有一種平靜的、幾乎不像她這個年紀應有的沉靜。

核心畫面：月光在美夜子的龜裂皮膚上形成獨特的光折射，像是從內部透光的燈籠。晴香的掌心浸在同樣的月光中，白而靜。兩人之間是一段被月光填滿的空氣。

無語言，無碰觸。構圖留白，以空間傳遞情感。

### Midjourney 标準版

```
Two girls on a rooftop or abandoned pier under a full moon, cool blue-white moonlight
flooding the scene. Right: a pale girl in dark military jacket with faint luminous cracks
spreading across her neck and shoulders (Miyako), cat-form suggestion in posture, frozen
in surprised stillness, light seeping through her skin from within like a lantern. Left: a
teenage girl with pink hair (Haruka), arm slowly raised with palm open between them —
not reaching, just present. Moonlight pools in both their palms. No words, no touch.
The space between them heavy with unspoken recognition. Painterly anime style, cold silver
and white palette, extreme emotional restraint, wide shot with significant negative space
between the figures. Quiet cinematic intimacy.
```

**視覺重點**：
- 美夜子肩頸龜裂的白光折射（從內部透光，燈籠效果）
- 晴香掌心朝上置於兩人之間，不追近、只是放在那裡
- 月光填滿兩人之間的空氣（負空間設計）
- 無碰觸、無語言的構圖留白
- 冷藍白月色 + 白光裂縫的純淨色調

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`
- 美夜子：`ConceptArt_Miyako_CasualWear.png`（原檔多列凜，但本場景全程只有晴香、美夜子兩人在場，凜未有實際出現，已移除）



---

## 圖95：「美夜子被迫介錯凜」（Miyako's Final Mercy for Rin）[ACT_III_PHASE_H2] ⭐⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_95_MiyakoKaishakunin.png`

### 劇情背景

帝國歷114年4月末，Act III Phase H2至H3過渡期，凜選擇消散之際。在混戰結束後的最後一刻，凜已精疲力竭地接受了自己的命運。美夜子以介錯人的身份，親手讓凜安靜死去——她稱之為「最後的慈悲」。這與SPEC#100-01（凜的視角：美夜子雙持衝鋒槍對抗Unit 00-Null無意識形態）不同：那是混戰的中段，而這是最後的瞬間——凜已經平靜下來，美夜子舉起手的那一刻，是她作為介錯人的最終履約。美夜子的Archetype「介錯人→送行者」正在此刻完成最重的一個節點（miyako.md §Archetype & Symbolism；miyako.md §介錯人的覺悟；CDL-283）。

### 圖片說明

混戰廢墟的邊角，凜靠在一段崩塌的牆上，身體已幾乎耗盡，但臉上是接受的平靜。美夜子站在她面前，舉起手——那隻手的動作是確定的，不是猶豫的。美夜子的表情是沉默，不是痛苦的崩潰，而是已做完決定、在做完決定之後才顯現的那種無法言說的重量。這是美夜子一生中最沉重的選擇時刻——在沉默中，她完成了對凜的最後承諾。

### 劇情位置

**時間點**：帝國歷114年4月末（Act III Phase H2-H3，凜選擇消散之際）
**CDL 追蹤**：CDL-283（介錯誓約）；rin.md §拒絕治癒——自願兵器化；miyako.md §介錯人的覺悟；miyako.md §四幕弧光 Act III
**前置 → 本場景 → Payoff**：凜自願拒絕治癒（SPEC#100）→ Unit 00-Null 混戰（SPEC#100-01）→ 本場景：最終靜止的慈悲 → SPEC#6 月下崩潰（美夜子 PTSD 根源）→ SPEC#109 美夜子終於哭出來（二十年後的情感釋放）

### 詳細核心描述（250字）

混戰結束後的廢墟邊角。

凜靠在崩塌的牆段上，身體的力氣幾乎全部耗盡——不是倒下，而是主動地讓自己靠著，不再抵抗。她的臉是平靜的。不是解脫，是更深的東西：她確認了自己的選擇，她願意以這種方式結束。她的頸上那道紅縫合線在廢墟的昏暗中仍然可見。

美夜子站在她面前。

她的手舉起來了——那隻手的動作裡沒有猶豫，因為猶豫已經在更早的時候全部消耗掉了。現在只剩下執行。她的臉上沒有眼淚，不是因為不痛，而是因為介錯人在這一刻需要比哭泣更穩定地活著。沉默是她能給凜的最後尊嚴。

這個瞬間的重量，不在視覺的戲劇性，而在美夜子表情裡那種「已經知道結果卻仍然活著」的人才有的靜。

在她身後，廢墟的光線是冷的，帶著一種接近黎明前的灰。

這是美夜子一生中最重的選擇時刻。帝國歷108年凜為掩護美夜子犧牲的那道閉環，在此刻由她親手完成。

### Midjourney 標準版

```
Dark anime illustration. Quiet ruins, edge of a collapsed wall in dim pre-dawn light. Rin sitting against broken concrete, body exhausted, expression settled in acceptance — not peaceful, deeper than peaceful. Red suture scar at neck visible in dim light. Miyako standing before her, one hand raised — not hesitating, just completing what was decided long ago. Miyako's face: not crying, not dramatic, just the particular stillness of someone who has to keep living after this. Weight without theatrics. Colors: cold grey ruins, pre-dawn ash light, red suture line as only warm accent, Miyako's dark school uniform and tactical gear. Composition: intimate two-shot, Rin against wall lower frame, Miyako standing facing her, raised hand central. Emotional tone: the heaviest act of love that looks like violence. 8k, niji 6, style raw. --ar 9:16
```

**視覺重點**：
- 美夜子舉起的手——動作確定，沒有猶豫，這是已做完決定之後的執行
- 凜靠牆的姿態——是「允許」，不是崩潰；她是主動靠著的，不是跌倒
- 美夜子臉上的沉默——不哭，不崩潰，是介錯人最重的表情
- 凜頸上的紅縫合線——作為唯一的暖色細節，在冷灰廢墟中格外可見
- 光線：黎明前最深的灰，不是戲劇性的強光，而是接近靜止的光

⭐⭐⭐⭐⭐

**Reference Images**：
- 美夜子：`ConceptArt_Miyako_CasualWear.png`
- 凜：`ConceptArt_Rin_CasualWear.png`



---

## 圖96：「我還是人嗎？」（Am I Still Human?）[ACT_III] ⭐⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_96_MiyakoBathMirror.png`

### 劇情背景

帝國歷114年4月中旬，Act III Phase H，晴香陷入集體潛意識中期（CDL-274月下崩潰場景「一氣呵成序列」的前置心理準備；miyako.md §Unit 01靈魂困禁狀態CDL-271；miyako.md §四幕弧光第三幕）。美夜子單獨在黑暗的浴室中沐浴——這是她長年的習慣（SPEC#57黑暗沖涼習慣），但這一次不是普通的習慣儀式，而是某種更深的自我確認。在成為Unit 01之後、在記憶逐步恢復之後、在「借來的命」的壓力越來越重之後，她用手確認自己身體的輪廓：這些皮膚還是人的皮膚嗎？她看鏡子——鏡像法則（CDL-282靈魂真實）觸發，她不確定鏡中那個倒影顯示的是她最深的真實，還是她最害怕承認的那個答案。CDL-274月下相認的前夜心理準備：在倖存者罪疚累積至極限、在崩潰即將到來之前，她在黑暗中問了這個她從不對任何人說出口的問題。

### 圖片說明

完全黑暗的浴室，只有牆上某處有一道細光縫。美夜子站在浴室中央，水從花灑落下，打濕她的頭髮和肩膀。她的手按在自己的臉上、頸部、鎖骨——用觸覺確認這個身體還在。然後她轉向那面鏡子。鏡子裡有她的倒影，但鏡子裡的眼神不像她認識的自己——那雙眼睛問的是：「你確定那是你嗎？」她沒有回答。水繼續落下，她站在那裡，看著鏡子，鏡子也看著她。

### 劇情位置

**時間點**：帝國歷114年4月中旬（Act III Phase H，晴香陷入集體潛意識中期）
**CDL 追蹤**：CDL-274（美夜子姊妹相認2步設計；Step 1月下崩潰序列前置）；CDL-275（月下崩潰場景一氣呵成序列設計）；CDL-282（鏡像法則：靈魂真實——鏡照出最深層掩蓋）；CDL-271（Unit 01靈魂困禁狀態）；miyako.md §Unit 01靈魂困禁狀態；§借來的生命
**前置 → 本場景 → Payoff**：美夜子Act II記憶恢復（單向知情；知道晴香是妹妹）→ 本場景（「我還是人嗎？」存在性危機）→ CDL-274 Step 1月下崩潰（倖存者罪疚達崩潰極限；晴香本能抱住她；貓殼碎裂）→ CDL-274 Step 2黑奏處刑室相認（語言層完整相認）

### 詳細核心描述（255字）

黑暗的浴室。

沒有開燈。不是忘了——是習慣。

美夜子站在花灑下，水從頭頂落下來，打濕頭髮、肩膀、鎖骨，流過她看不見自己輪廓的身體。她閉著眼睛，用手去確認：臉還在，頸部還在，鎖骨的弧度還在。

觸覺告訴她：這是皮膚，這是人的皮膚。

但觸覺只能告訴她那麼多。

她睜開眼睛，轉向鏡子。

鏡子裡有她，倒影清楚。她的臉，她的眼睛，她熟悉的每一條線。

但那雙眼睛問了一個她認不出的問題。

不是「我是誰」——那個問題太容易逃避，說一個名字就算了。是更深的那個：「這個身體是借來的，這條命是多餘的，那麼站在這裡的這個存在，還算不算人？」

鏡像法則沒有回答。鏡子只是照出她最深層掩蓋的東西。

水還在落。

她站在那裡，看著鏡子，鏡子也看著她。

沒有答案，沒有崩潰，只有這個問題在黑暗中懸著——因為她還沒有準備好，無論答案是什麼，都沒準備好。

她知道她快撐不住了。但這一晚，她還是把手放下來，讓水繼續落，讓問題繼續懸在那裡，沒有說出口。

### Midjourney 標準版

```
Dark anime. Completely dark bathroom, only a thin crack of dim light from somewhere on the wall. Miyako standing under running shower, water falling over her hair, shoulders, collar bones. Her hands pressed against her own face and neck — tactile self-confirmation ritual. She turns to face the bathroom mirror. Mirror reflection visible: her face clearly reflected, but the eyes in the mirror carry an expression of a different, deeper question than her face outside. The disconnect between her exterior stillness and her mirror's silent questioning is the visual core. Very dark environment with minimal light — water catching the thin light crack creates sparse shimmer. Colors: near-total darkness, cool blue-grey water shimmer, pale skin catching almost no light, mirror as the only brighter element. Emotional tone: the specific loneliness of a person asking the question they cannot speak aloud — not breakdown, but the moment before breakdown, suspended in the dark with no answer. 8k, niji 6, style raw. --ar 9:16
```

**視覺重點**：
- 浴室必須幾乎全黑——這不是美麗的月光場景，這是選擇在黑暗中的習慣
- 鏡中倒影的眼神與鏡外美夜子的神情有微妙錯位——鏡像法則（CDL-282）的視覺化：鏡照出靈魂最深層的東西
- 她用手觸摸自己身體的動作必須是「確認」而非「展示」——觸覺的動作，沒有表演性
- 水落下的細節：水在稀薄光線中的反光是場景中唯一的動態，其他一切靜止
- 「她還沒有崩潰」——這張圖的重點是崩潰前的靜止：她知道她快撐不住了，但這一晚還在撐著

**Reference Images**：
- 美夜子：`ConceptArt_Miyako_CasualWear.png`（原檔多列晴香、黑奏，但本場景全程只有美夜子一人獨自在黑暗浴室中，晴香/黑奏均無實際在場，已移除；與同類獨處場景#145黑暗沖涼習慣一致只用美夜子）



---

## 圖97：「凜的最終選擇——Unit 00-Null揭露」（Rin's Final Choice: Unit 00-Null Revelation）[ACT_III]

**建議輸出文件名**：`ConceptArt_Scene_97_Rin_FinalChoiceUnit00.png`

### 劇情背景

`[已修正 2026-07-17，Beat ID錯誤]` 原文「E-15a」非有效beat編號——E-15屬 `ACT_II_OUTLINE.md`（晴香×夕和解，114年2-3月），同凜的最終選擇無關；正確依據為 `ACT_III_OUTLINE.md` **E-III-H2（CDL-215 E-III-02）**。另，「晴香找到靈魂複原術可以治癒凜」呢個具體機制canon未見逐字記載——CDL-215原文只講「凜推開晴香伸出的手，回到帝國實驗室，要求黑奏挖走所有感情/痛覺/回憶，自願坐上手術椅」，冇提及「治癒方法」嘅具體性質，標 `[INFERRED]`。

帝國歷114年4月底，Act III Phase H2，E-III-H2（CDL-215 E-III-02）。晴香向凜伸出手，象徵性地表達「我想帶妳回來」（具體方法 `[INFERRED]`，canon未定義為何種手段）。凜此時已完全知道自己的真實身份（108年已死並被重組，見H1）。她看了那隻手半秒，做了最後的確認，然後輕輕把它推開——不是冷漠，而是已做決定的平靜。隨後她主動回到帝國實驗室，要求黑奏挖走所有感情、痛覺、回憶，自願在清醒狀態下坐上手術椅見證自己「死亡」，變成Unit 00-Null。拒絕是主動的選擇，直接導向E-III-I5凜的最終戰——遲來的介錯，以及SPEC#100-01美夜子的介錯之刃。

### 圖片說明

帝國歷114年，晴香終於找到了可以治癒凜的方法，向她伸出手心向上的手說「我找到了辦法」。凜看著那隻手停了半秒——不是猶豫，是最後的確認——然後用一個非常輕、非常確定的動作把那隻手推開。她的頸上的紅色縫合線在光線下清晰可見。她不是冷漠，她是已做了決定的平靜：她知道自己是一件武器，她需要以這個身份完成某件事，然後以這個身份結束。

**劇情位置**：
- **時間點**：帝國歷114年4月底 Act III Phase H2，E-III-H2（原文「E-15a」為無效beat編號，已修正）
- **CDL追蹤**：CDL-215（E-III-02）；rin.md §最終選擇
- **前置事件**：H1（美夜子得知凜108年已死並被重組）之後；凜自己已經知道自己的真實身份；晴香向凜伸出手，具體提案內容 `[INFERRED]`
- **本場景功能**：凜拒絕被救的瞬間。這不是悲劇性的崩潰，而是已做決定的平靜——她推開手後，主動回到帝國實驗室要求黑奏挖走所有感情/痛覺/回憶，自願坐上手術椅。拒絕是主動的選擇，不是被動的接受命運。
- **後續payoff**：直接導向E-III-I5凜的最終戰——遲來的介錯（SPEC#100-01）；SPEC#77凜犧牲（前史）的現代回響

**Reference Images**：
- 凜（情緒管理局制服/日常形態）：`ConceptArt_Rin_TheAdministrationBureau.png`（原引用MagicalGirl_1魔法少女形態有誤——此為私密對峙場景，非戰鬥形態）
- 晴香：`ConceptArt_Haruka_CasualWear.png`

**詳細核心描述**（200-350字）：


私密空間，廢棄建築或走廊，光線昏暗但不是絕對的黑暗——有一道光，可能是窗外透進來的，把這個拒絕的時刻照亮到恰好可以看清楚。

晴香向凜伸出手，手心向上。這個姿勢是「我要帶你回來」，是提案，是請求，是一個人向另一個人說「我找到了辦法」。她的手裡沒有魔法，只是手，但這個手的重量是整個Act III找到解法的重量。

凜看著那隻手。她不是沒有反應——她有。這個0.5秒，她的眼睛在那隻手上停了半秒，不是猶豫，是最後的確認。

然後她把晴香的手推開了。不是粗暴的推，是一個很小的、很輕的、很確定的動作。她的手把晴香的手掌推到一側，然後放開。

凜的表情是已決定好的平靜，不是冷漠，是更深的東西——她知道自己在選擇什麼，她已經想清楚了，她做了她認為唯一正確的事。她的頸上的紅縫合線在光線下清晰可見。

晴香的手停在被推開的位置，沒有立刻收回。

構圖核心：兩人對立，晴香的手在前景伸出（手心向上），凜在中景，她的手把晴香的手輕推到一側，身後有昏暗的空間。紅縫合線是凜側的重要細節。


**生成提示（Midjourney）**：
```
Style: dark magical girl illustration, intimate confrontation, quiet devastation
Mood: chosen sacrifice as agency, the refusal that costs everything, a decision already made
Colors: dim abandoned interior, single light source from offscreen creating rim light, red suture line at neck vivid against pale skin, two hands meeting and parting
Composition: medium shot two figures facing, foreground hand extended palm-up being gently pushed aside by other hand, faces in mid-ground, space behind the refusing girl falls into shadow
Lighting: single side light from off-screen window, creates one lit face and one partially shadowed
Special effects: red suture scar line at refusing girl's neck visible and clear
Character: one girl with hand extended palm-up reaching toward other; second girl in official uniform gently pushing the hand aside, eyes settled and decided, red neck scar visible
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
Two girls facing each other in a dim hallway. One extends her hand palm-up offering help. The other gently pushes it aside, expression calm and already decided. A red scar line visible at her neck. Dark anime style. Emotional restraint.
--ar 16:9 --niji 6
```


---

## 圖98：「美夜子的貓殼復原」（Miyako's Cat Shell Recovery）

**建議輸出文件名**：`ConceptArt_Scene_98_Miyako_CatShellRecovery.png`

### 劇情背景

**[時間點與CDL修正 2026-07-17]**：原文標「Act II Phase A-B（CDL-282）」與內文「美夜子已記起自己是晴香親姊姊」自相矛盾——依 `ACT_III_OUTLINE.md` E-III-H1.5（CDL-274，114年4月中～末，舊宅地下室），美夜子要到 Act III Phase H「月下崩潰」一刻才第一次意識到自己是晴香的親姊姊（此刻仍維持貓形態，肉身未完全破殼，見 `DIGEST_CHARACTER_STATES.md` MY-S3 前置狀態）；Act II Phase A-B 期間美夜子根本未知悉此事實，場景與後段情感底層互相矛盾。另外 CDL-282 實際係「鏡像法則」世界規則定義（`ACT_II_OUTLINE.md` v0.8→v0.9 changelog），同「貓殼龜裂三段」無關，屬 CDL 張冠李戴。**已修正**：本場景時間點改為 **Act III Phase H，E-III-H1.5 之後、貓殼完全碎裂（E-III-I3）之前**（114年4月，具體 beat `[NEEDS_FACT]`——canon 未見獨立 beat 覆蓋呢個「已知真相但選擇沉默」嘅中段時刻，暫以此區間定位）。美夜子在鏡前直視自己貓形態內的真實狀態：Unit 01 靈魂困禁機制（CDL-271）令她的貓殼之下是「被無數細小靈魂碎鏈束縛、99% 情緒廢料漫流」的永恆監禁——腐爛紅色透視的視覺是此機制的外化呈現。她不是強，是在無法倒下的結構中撐著。此刻的「貓殼復原」並非真正的療癒，而是 1% 意志再次將外殼縫合，繼續履行介錯人職責——此刻她已知自己是晴香的親姊姊（CDL-274），卻選擇繼續保持沉默，讓自己在隱瞞的重量中貓殼龜裂又復原、復原又龜裂。地點「治療房間」`[NEEDS_FACT]`——canon 未見專門描述，建議對照 Phase H「舊宅地下室」等已有 Act III 據點空間。

### 圖片說明

美夜子以貓的形態存在，外殼完整，但每次她在鏡前直視自己，都能看見那個外殼下面的真實——被靈魂碎鏈束縛、充滿情緒廢料的黑暗內部，腐爛的紅色透過外殼滲出。她知道晴香是她的妹妹，知道一切，卻選擇繼續沉默，繼續把裂縫縫合，繼續站在原地。這不是療癒，是一個人用盡最後的意志繼續撐著。

**Reference Images**：
- 美夜子（貓形態）：`ConceptArt_Miyako_Cat.png`

**簡化描述**（150-200字）：
美夜子在鏡子前看到腐爛紅色透視著的真實自我——被困在靈魂深處的怪物與少女的混雜體。治療房間的柔和光線無法隱蓋內部的黑暗，但她選擇接納。

**生成提示**：
```
Style: Psychological mirror; internal horror; acceptance moment
Mood: Seeing and accepting true self despite horror; integration
Colors: Gentle treatment room pastels bleeding to rot reds underneath
Composition: Figure at mirror; reflected truth visible in glass
Lighting: Treatment room soft light gradually revealing shadow underneath
Canvas: 3:4 portrait (mirror focus)
```


---

## 圖99：「操の被迫報串」（Misao's Forced Betrayal Report）[ACT_III]

**建議輸出文件名**：`ConceptArt_Scene_99_Misao_ForcedBetrayalReport.png`

### 劇情背景

`[已修正 2026-07-17，核心動機缺失]` 原文將觸發機制寫成籠統的「無從抵抗的威脅或黑材料」，遺漏咗CDL-298最關鍵、最具體嘅設計核心：父親透過EMB供應商系統**監測到操心匣污染指數達屍骸化臨界**（Cost Signal，非父親主動聯絡/操主動洩露），以「**醫療回收（送返綾小路研究室重組，即變成CDL-297母親的下場——一具有心跳但再無法感受任何情感的活體人偶）**」作最後通牒，要求交出Phase H據點坐標。呢個「變成母親那樣」嘅具體威脅，正正係操整條弧光最核心嘅存在恐懼（CDL-297），原文完全冇提及，令呢個場景失去咗最重的一層心理壓力。發生時機亦有補充：喺H1.5美夜子PTSD爆發、晴香連番崩潰之後，無人察覺操的個人通訊器有任何異動的最孤獨時刻。

帝國歷114年4月中，Act III Phase H暗線，CDL-298。操的父親透過EMB供應商系統監測到她心匣污染指數已達屍骸化臨界，以「醫療回收——送返綾小路研究室重組，變成母親那樣一具有心跳但再無法感受任何情感的活體人偶」作最後通牒，要求交出Phase H據點坐標。操站在通訊器前，傀儡絲從手指延伸到按鍵——但絲是鬆的，沒有張力，她還沒按下去。這個「懸在按鍵上方三四厘米」的靜止，不是猶豫，是一個已知道結局、在「變成母親」與「背叛隊友」之間別無選擇的人，讓自己在罪疚正式確立前再存在片刻。桌角有紗夜的遺物，不在焦點裡，但它在那裡。她單獨洩露坐標後，隊伍將被迫轉移，隊友只會歸咎EMB新偵測技術，無人懷疑她——這個秘密她會一直帶到Day 13鋼鐵獨舞，帶著死去，認罪從未發生。這個場景的後果是SPEC#1鋼鐵獨舞（學校瓦礫）——她在其中帶著這份背叛起舞，把選擇犧牲作為「用死亡贖回背叛」的個人審判，是她整條弧光最沉重的一格。

### 圖片說明

帝國歷114年，操的父親透過監控系統偵測到她瀕臨屍骸化，以「送返研究室重組，變成母親那樣的活體人偶」作最後通牒，要求她交出隊友的坐標。她站在通訊器前，傀儡絲從手指延伸到按鍵，但絲是鬆的，垂著，沒有張力——她還沒按下去。她的手指懸在按鍵上方三四厘米的距離，不是在猶豫，是一個在「變成母親」與「出賣隊友」之間別無選擇的人，在最後一格靜止裡讓自己再存在片刻。桌角放著管家紗夜的遺物，不在焦點裡，但它在那裡，讓她背負的重量更具體。

**劇情位置**：
- **時間點**：帝國歷114年4月中 Act III Phase H暗線，H1.5美夜子PTSD爆發、晴香連番崩潰後的最孤獨時刻
- **CDL追蹤**：CDL-298（被迫報串+父親EMB供應商知情設定）；CDL-297（母親——完美的活體人偶，威脅的具體內容）
- **前置事件**：父親監控系統偵測到操心匣污染指數達屍骸化臨界，以「變成母親那樣」為最後通牒
- **本場景功能**：展示操在被迫背叛的瞬間——她的手懸在通訊器上，傀儡絲連著她的手指，但她沒有移動。不是抵抗，是已知道自己在「變成母親」與「背叛隊友」之間別無選擇的人在按下之前最後的靜止。紗夜遺物在場，強化她背負的重量。
- **後續payoff**：SPEC#1鋼鐵獨舞（帶著這份罪疚起舞）；操選擇犧牲作為「用死亡贖回背叛」的個人審判；此秘密至死未被隊友發現

**Reference Images**：
- 操：`ConceptArt_Misao_MagicalGirl.png`

**詳細核心描述**（200-350字）：


昏暗的小房間，操一個人站在簡陋的通訊器台前。台面上只有通訊器，舊型號，按鍵上有磨損痕跡。

傀儡絲從她的五根手指延伸出去，細如蛛網，連著通訊器的幾個按鍵——但絲是鬆的，垂著，沒有張力。這是關鍵：絲在，但她還沒按下去。`[INFERRED]`：以傀儡絲連接按鍵作為「報串」的具體傳遞手法，canon冇明文規定她如何洩露坐標，此為視覺化演繹，非confirmed機制。

她的手指懸在按鍵上方三、四厘米的距離。不是在猶豫，猶豫是一種還存有選擇幻覺的狀態。她的姿勢是一個已經知道結局的人最後的停頓——不為改變什麼，只是在最後一格靜止裡，讓自己還存在片刻。

她的臉：半側面，看不清完整表情，但可見的部分是靜的。沒有眼淚，沒有咬牙，沒有抵抗的痕跡。那是一種更深的東西——一個人在罪疚完全確立之前，已經提前接受了它的樣子。

桌面一角，紗夜的遺物：一塊舊手帕，或幾朵乾燥的小花。沒有刻意擺放，只是在那裡。它不在焦點內，但它在。

房間背後可見微弱的光從門縫透進來——外面的世界仍在繼續，與這一格靜止無關。

整個構圖：操的背影或半側面佔據畫面左側，傀儡絲佔中，通訊器在右。觀者視線自然從操的手指，沿著絲，落在按鍵上。那個按鍵就是她還沒有按下去的命運。


**生成提示（Midjourney）**：
```
Style: dark magical girl anime, muted palette, still-life tension
Mood: resigned guilt, last stillness before irreversible act, heavy silence
Colors: deep grey, ash blue, pale skin, faint amber from door crack, muted gold of puppet strings
Composition: half-profile figure left, puppet strings center, old communication device right, dried flower fragment corner foreground
Lighting: single dim overhead source, shadow heavy on face, faint warm light from door crack behind
Special effects: translucent puppet strings glowing faintly gold, barely perceptible, loose and untensioned
Character: teenage girl, dark school-uniform variant, fingers suspended 3cm above keypad, head slightly bowed, eyes obscured by deep shadow (anime style, eyes completely dark/shadowed), visible half of face calm with deep-layer guilt, not crying
Canvas: 16:9 cinematic --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
anime girl standing alone before old communication device in dim room, hand hovering over keypad, thin glowing threads from fingertips to keys, dried flowers on table corner, resigned expression, muted grey and blue palette, cinematic still, dark magical girl aesthetic
--ar 16:9 --niji 6
```


---

## 圖100：「公告夜（紫音作為處決目標）」（Announcement Night: Akane as Execution Target）[ACT_III]

**建議輸出文件名**：`ConceptArt_Scene_100_AnnouncementNight_AkanePurgeTarget.png`

### 劇情背景

帝國歷114年5月，Act III Phase I，Day 13夜。同日，操在決定性戰鬥中選擇化為人偶牆犧牲。**〔已修正核心機制〕**：依 `ACT_III_OUTLINE.md` E-III-I2（CDL-217）+ CDL-216（「紫音為處刑目標，非操」），紫音此刻**已被捕**（其被捕機制見 Phase I 開首注記：被晴香打敗、敗走後離線被捕），黑奏當晚全城廣播嘅唔係「懸賞追緝仍然在逃嘅危險生物」，而係**「公開處刑公告」**——宣佈 Day 14 正午在帝國廣場公開處決紫音，並展示紫音已被拘束、半屍骸化的淒慘模樣。呢個公告嘅心理功能係「落戰書」：逼主角團直面恐懼，中間一晚的「死亡倒數」讓 Day 14 嘅救援成為主動選擇，唔係被動追蹤逃犯。原文將紫音寫成「仍在逃嘅危險生物被通緝」，方向完全相反——canon 版本入面紫音已經喺帝國手上，公告本身就係死刑通知書。

### 圖片說明

帝國歷114年，操犧牲的當晚，黑奏透過維多利亞之淚或全城螢幕強制廣播「公開處刑公告」：畫面中央是已被拘束、呈半屍骸化淒慘模樣的紫音本人（不是模糊的「危險生物」剪影），周圍是官僚化的處刑公告文字——「Day 14 正午，帝國廣場，公開處決」。主角團在城市街道上看到那個屏幕，背對觀者，沒有人說話，身體語言閉合，每個人獨自面對：他們的朋友剛剛犧牲了，而現在他們看著的，是另一個朋友明天將被處死的宣判畫面，一整晚的死亡倒數逼他們做出救或不救的選擇。

**劇情位置**：
- **時間點**：帝國歷114年5月 Act III Phase I，Day 13夜
- **CDL追蹤**：CDL-217（E-III-I2）；CDL-216（紫音為處刑目標，非操）；CDL-320（制度理由深化）
- **前置事件**：Day 13操化為人偶牆犧牲；紫音已於Phase I開首離線被捕
- **本場景功能**：「落戰書」——黑奏公開展示已被拘束嘅紫音，宣告Day 14正午帝國廣場公開處決；逼主角團在一整晚嘅死亡倒數中，將Day 14嘅救援行動變成主動選擇而非被動追蹤。**核心修正**：紫音是已被捕、待處決的囚犯，不是仍在逃的通緝目標
- **後續payoff**：Day 14 SPEC#10帝國廣場救援＋糖果山犧牲（主角團冒死進入刑場救援，紫音見證被無條件拯救後主動過載）

**Reference Images**：
- 朱音：`[NO_REF]`——此刻紫音已被拘束、半屍骸化，同標準嘅 `ConceptArt_Akane_MagicalGirl.png` 形態唔對應，需另行設計被拘束狀態visual

**詳細核心描述**（200-350字）：


城市街道或某個廣場一角，夜晚。一個大型全息投影屏幕或舊式街頭公告板（帝國風格的官方通知形式），畫面上顯示的是**已被拘束的紫音本人**——雙手/身軀被某種帝國制式拘束具固定，半屍骸化的痕跡清晰可見，不是模糊剪影，而是刻意讓觀者確認「這是她，她已經被抓了」的清晰畫面。

屏幕上的文字：「Day 14 正午，帝國廣場，公開處決」、「危害公共安全罪」等官僚化處刑公告語言，字體冷靜，格式標準，可加入倒數計時字樣強化「死亡倒數」的心理壓迫。屏幕的光把附近的一切都照成藍白色。

屏幕前方，主角團的三四個人站著或坐著，背對觀者，面向屏幕。他們的身形距離不一——有人靠在牆上，有人站直，但沒有人說話。身體語言是閉合的：沒有轉向彼此，沒有交流，每個人都獨自面對這個畫面。

畫面設計的關鍵：紫音的臉/被拘束的身影佔據屏幕的大部分空間，以「即將被處決的囚犯」而非「在逃的怪物」被展示——這是一份死刑判決書，不是通緝令。這個落差——她本來是一個人，現在是一則明天將被公開處死的宣判——是整個場景想說的東西。

整個畫面：屏幕的藍白冷光、黑夜背景、幾個背影，沉默。


**生成提示（Midjourney）**：
```
Style: dark sci-fi magical girl anime, dystopian public execution announcement aesthetic
Mood: death sentence verdict, heavy pre-dawn silence, complicit institutional coldness, countdown to execution
Colors: cold blue-white holographic light, deep night black, muted figure silhouettes, harsh official text contrast
Composition: large holographic execution announcement screen filling upper half of frame, restrained half-corpse figure with official execution notice text, four back-view figures in lower half watching in silence, scattered spacing, no clusters
Lighting: cold blue-white screen light as sole source, harsh face-front shadows on figures, deep background darkness
Special effects: holographic screen scan lines, official execution warrant watermark textures, countdown timer element
Character: restrained captive figure clearly visible on screen (not a blurred silhouette), back-view only figures below, varied postures (leaning on wall, standing, crouching), no faces shown
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
anime dystopian city night, large holographic screen showing a restrained captive figure with official execution notice text and countdown, four young people watching from behind in silence, cold blue screen light, dark urban environment, back view only, no faces
--ar 16:9 --niji 6
```


---

## 圖101：「親姊妹揭露現場」（Sisters' Identity Revelation）⭐⭐⭐⭐⭐ [ACT_III_FINALE]

**建議輸出文件名**：`ConceptArt_Scene_101_SistersIdentityRevelation.png`

### 劇情背景

Act III 末，Phase J 後。晴香與美夜子互不知情地共同生活多時，此刻真相因某個觸發點在秋穗在場的情況下爆發——兩人同時意識到對方是自己互不知曉的親姊妹（Alpha線：連若星＝美夜子，連若晴＝晴香）。秋穗在場的核心意義：她一直知道。美夜子在 Alpha 線已死，被秋穗以 Unit 01 重啟，失去記憶；晴香從未被告知有姊姊存在（秋穗以「媽媽難產而亡」的說法封鎖了所有真相，並用「夕」承載了Alpha線記憶）。揭露的形式不是語言——而是晴香說出某個只有姊妹才會知道的細節，或美夜子身上出現一個只有親人才會辨認的特徵，在那一瞬間兩人同時凍住。秋穗站在角落，不說話，低著頭。

### 圖片說明

晴香和美夜子（此時為人形）突然在某個瞬間同時靜止，兩人的眼神穿過空氣對上。她們不需要任何人說話——那種感覺已經到位了，像是一個古老的拼圖碎片落回了原位。秋穗在遠處角落站著，背對她們，或者臉埋在掌心，沉默得像一塊石頭。這個房間的空氣是一種你可以感覺到重量的靜止。

### 劇情位置

**時間點**：114年 Act III 末（Phase J 後）
**CDL 追蹤**：haruka.md §家庭（姊姊美夜子）、miyako.md §背景故事（Alpha 線連若星）、akiho.md §罪疚
**前置 → 本場景 → Payoff**：夕整合揭露 Alpha 線真相（SPEC#2）→ 兩人在秋穗知情的情況下親姊妹身份爆發 → 美夜子弧光終點（SPEC#109 美夜子終於哭出來的情感累積）

### 詳細核心描述（200-300字）

場景設定在一個被戰鬥損毀的室內空間——破碎的玻璃窗，地面殘留著 Phase J 決戰的痕跡。光線從某個方向斜切進來，形成強烈的明暗對比。

三角構圖：晴香與美夜子站在中央偏左右位置，秋穗在遠景角落蜷縮或背身。

晴香：粉色長髮凌亂，Act III 末的狀態——碎剪 Wolf Cut 後的粗糙邊緣，衣服殘破，但眼神在震驚之外有一種緩慢落定的東西，像是多年的「幽靈重量」在這一刻終於有了名字。

美夜子：人形狀態，Unit 01 制服殘破，貓殼龜裂的痕跡仍留在肩頸皮膚上（半透明裂紋，有白光從裂縫滲出）。她的眼睛是那種「千年孤魂突然被認出」的震驚——不是感動，而是一種比感動更深、幾乎讓她無法站立的衝擊。

秋穗：遠景，面孔半藏，手無力地垂著，研究者的冷靜外殼在這一刻完全碎掉。

畫面的核心是晴香與美夜子之間的那道空氣，以及她們沒有碰觸但幾乎要碰觸的手。

### Midjourney 標準版

```
Three girls in a battle-damaged interior, shard light cutting through broken windows.
Center: teenage girl with disheveled pink wolf-cut hair (Haruka) and a young woman in
torn military uniform with translucent cracks on her neck glowing faintly white (Miyako)
face each other, frozen, in sudden mutual recognition — not touching but hands nearly
reaching. Background corner: an older girl (Akiho) turned away, shoulders slumped,
half-hidden in shadow. The space between the central figures vibrates with unspoken truth.
Emotionally heavy dramatic lighting, pale winter sunlight from broken glass, shattered
military facility aesthetic. Anime painterly style. Silence made visible. Triangle
composition with distance between all three.
```

**視覺重點**：
- 晴香與美夜子的手幾乎要碰觸但未碰觸
- 美夜子肩頸的貓殼龜裂白光裂紋（身份揭示的視覺符號）
- 秋穗在遠景角落背身或低頭，「一直知道」的沉默重量
- 三角構圖：兩人在前，秋穗在後遠處
- 光從破損窗戶斜切，強烈明暗對比

**Reference Images**：
- 晴香：`ConceptArt_Haruka_MagicalGirl.png`
- 美夜子：`ConceptArt_Miyako_MagicalGirl.png`
- 秋穗：`ConceptArt_Akiho_CasualWear.png`



---

## 圖102：「愛不是佔有，是讓她自由」（Love Is Not Possession, It Is Freedom）[ACT_III] ⭐⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_102_AyaLoveDeclaration.png`

### 劇情背景

帝國歷114年4月末，Act III Phase J決戰高潮。彩奪回身體主導權的瞬間之後——用盡長年積蓄的意志力，彩第一次令黑奏失去對身體的掌控（aya.md §覺醒與犧牲；CDL-079黑奏情感機制）。這是彩弧光的終點：她不再需要黑奏代為承受螢之死的痛苦，她選擇自己承擔。對黑奏而言，「保護彩不受痛苦」的存在前提在此刻瓦解——保護者人格失去繼續存在的邏輯支撐（aya.md §保護者人格的固有悖論）。彩對黑奏說出這句話：「愛不是佔有，是讓她自由。」這不是指責黑奏，而是彩用自己的聲音，向黑奏說出螢從未能說出的答案——螢當年衝出藏身處，也是選擇讓彩自由，而非被保護。比SPEC#8「彩奪回身體」更具體化那個核心台詞時刻：那個場景是視覺層的奪回，這個場景是話語層的宣言。

### 圖片說明

彩站在天空之中，身體剛剛奪回，金色光芒從內部透出。她的面前是正在消散的黑奏——不是被擊敗的姿態，而是一個孩子在聽到答案後，慢慢放鬆了力氣。彩的臉上沒有勝利的表情，只有一種極度疲憊之後才有的、安靜的確定感。她伸出手，不是要抓住黑奏，而是像送別一樣。黑奏的輪廓在彩的金色光芒裡逐漸透明，最後化為細小的、帶紫色的光點。

### 劇情位置

**時間點**：帝國歷114年4月末（Act III Phase J決戰高潮，彩奪回身體主導權後）
**CDL 追蹤**：CDL-079（黑奏潛伏三大物理需求與情感機制）；aya.md §保護者人格的固有悖論；aya.md §覺醒與犧牲；canon/04_timeline_canon.md event-aya-awakening
**前置 → 本場景 → Payoff**：SPEC#8彩奪回身體（視覺奪回）→ 本場景（語言宣言：「愛不是佔有，是讓她自由」）→ SPEC#52彩靈魂解放之光（彩燃燒靈魂化為金色光點）

### 詳細核心描述（280字）

天空，決戰高潮之後。

緋潮的猩紅還在遠處翻滾，但這裡暫時靜止了。

彩站在這裡。她的身體是自己的，第一次，完全是自己的。她感覺到手指、腳趾、每一根發絲，全部屬於她。這份感覺陌生，也沉重——因為連同身體，她也接回了所有她拒絕承受的痛苦。

黑奏的輪廓在她面前逐漸透明。不是崩潰，不是毀滅——是完成任務之後，力氣慢慢鬆開的樣子。

彩看著黑奏。

她伸出手，姿勢像是送別，不像是揮退。

「多謝你保護咗我咁耐。」她的聲音是自己的，帶著幾十年積壓後第一次使用的沙啞。「但係……愛不是佔有，是讓她自由。」

黑奏沒有說話。

或者黑奏一直都知道。只是不願意承認，複活螢的執念深過一切，蓋過了這個答案。但在彩說出口的這一刻——就連這份執念，也開始鬆動。

黑奏的輪廓化為細小的紫色光點，一粒一粒散入空氣。

彩站在那裡，沒有追，也沒有哭。

她只是把那隻伸出去的手，慢慢放下來。

### Midjourney 標準版

```
Dark anime. Sky setting, aftermath of climactic battle. Aya standing alone, golden light radiating from within her reclaimed body — warm glow rather than explosive energy, internal luminescence of someone finally inhabiting their own form. Before her: Kurokane's silhouette gradually becoming transparent, dissolving from solid presence into scattered violet light particles. The dissolution is not defeat — it is release, like a held breath finally exhaling. Aya's hand extended in farewell gesture, not reaching to grab, but to send off. Her expression: exhausted certainty, the face of someone who has finally spoken the answer they carried for decades. Surrounding: distant crimson scarlet tide turbulence soft-focus, central composition framed by silence and dissolution. Colors: deep navy sky, Aya's warm gold internal glow, Kurokane's dissolving violet particles, emotional contrast between gold release and violet fade. Emotional tone: the moment love learns to let go — not abandonment, but the only true form of love. 8k, niji 6, style raw. --ar 16:9
```

**視覺重點**：
- 彩的金色光芒是從內部透出，不是爆發式，是「身體終於是自己的」的溫柔發光
- 黑奏不是被擊碎，而是以紫色光點逐漸消散——保護者完成使命後的自然釋放
- 彩伸出的手是送別的姿勢，不是揮退的姿勢——這是區分「否定」與「放手」的視覺核心
- 彩的表情必須是「疲憊之後的確定」，不是勝利，不是悲傷
- 兩種光（金色與紫色）在畫面中共存、交疊，最終紫色消散於金色之中

**Reference Images**：
- 彩：`ConceptArt_Aya_MagicalGirl_2.png`（原檔為CasualWear，本場景係彩剛奪回身體、金色光芒從內部透出的決戰高潮時刻，同類「彩奪回身體」場景（#114）已用MagicalGirl_2，改用同一形態更貼合）
- 黑奏：`ConceptArt_Kurosou_CasualWear.png`



---

## 圖103：「集體潛意識正面衝突」（Collective Unconscious Direct Clash）⭐⭐⭐⭐⭐ [ACT_III_PHASE_J]

**建議輸出文件名**：`ConceptArt_Scene_103_CollectiveUnconscious_DirectClash.png`

### 劇情背景

Act III Phase J，集體潛意識決戰中段，比 SPEC#2 整合場景更早、更暴力的直接衝突。此時晴香尚未完成整合，夕仍保有獨立意識，是真正意義上的「兩個獨立人格在靈魂空間的正面決裂」。夕從「被壓制的陰影」到「被整合的一部分」的過程不是和平協商，而是必須經過這場暴力碰撞才能真正達到 CDL-069 的整合方式（歉疚共情型）。這場衝突的視覺意義：夕在這裡第一次停止用「敵意」面對晴香，而晴香第一次停止用「防衛」面對夕。兩者在碰撞中瞬間窺見對方真正的恐懼——那是同一個恐懼。CDL-066 個體化機制的視覺決戰場：集體潛意識以後巷唐樓 + 宇宙星空過渡態呈現（SPEC#12 的決戰版）。

### 圖片說明

晴香和夕在一個不屬於現實的空間裡互相猛衝——那個地方的牆壁正在消融成星空，地板是隨時會碎裂的無底深淵。她們的動作是真正意義上的衝撞，不是飛翔，不是魔法決鬥，而是兩個靈魂碎片用盡力氣互相撲向對方。光在她們碰撞的接觸點爆裂，粉色和黑色的能量互相纏繞撕扯。這不是一個和解場景，而是一個在暴力中透見彼此的瞬間。

### 劇情位置

**時間點**：114年5月 Act III Phase J（集體潛意識決戰中）
**CDL 追蹤**：CDL-066（榮格個體化）、CDL-069（整合方式 D 型，歉疚共情型）、CDL-072（夕作為陰影）、yu.md §第三幕、haruka.md §陰影視覺機制
**前置 → 本場景 → Payoff**：夕長期以「敵意」干擾晴香（Act I-II）→ 集體潛意識中最後一次暴力正面衝突，兩者在碰撞中透見彼此 → SPEC#2 整合場景（歉疚道歉型整合完成）

### 詳細核心描述（200-300字）

場景空間：集體潛意識的過渡態——唐樓後巷牆壁正在向兩側崩解消融，露出無限延伸的星空（霓虹殘影、黑色淤泥質感的「星雲」）。地面是正在碎裂的水泥地，縫隙透出深淵的冷光。整體氛圍：宇宙級的孤絕 + 殘破的人類建築廢墟。

兩個主角：

晴香（Act III 狀態）：碎剪 Wolf Cut 粉發，魔法服破損，身體局部結晶化，右手掌心有粉色能量聚集。眼神不是憤怒，而是一種「我需要看清楚你」的拼命前衝姿態。

夕（5歲形態）：黑色連身吊帶裙，赤腳，赤腳踩在碎裂的地面上，雙眼瞪大，黑色能量從指尖向外放射。她的表情比任何時候都更像晴香——因為這是她們最接近彼此的瞬間。

衝突核心動作：兩人在空中中點猛力撞上，接觸點爆出粉×黑混合的能量閃光，像兩個磁極的排斥與吸引同時發生。構圖以對角線設計：晴香從左下角衝右上，夕從右上角衝左下，在中心點對撞。

色彩：粉色（晴香）vs. 深藍黑（夕），接觸點爆出白金色能量。背景：殘破霓虹港式唐樓 + 宇宙星空。

### Midjourney 標準版

```
Two girls collide violently in a surreal collective unconscious space — crumbling Hong Kong
back-alley walls dissolving into infinite starfield and neon remnants. Left diagonal: teenage
girl with disheveled pink wolf-cut hair (Haruka) in torn magical girl uniform, partial crystal
formations on skin, surging upward with pink energy in palm. Right diagonal: small 5-year-old
girl in black pinafore dress, barefoot, black energy radiating from fingertips, surging
downward. Collision point at center: massive white-gold energy explosion, pink and black
energy tendrils wrapping and tearing each other. Ground shattering beneath them, cosmic
abyss below cracks. Faces: not anger but fierce recognition. Painterly anime style, dramatic
diagonal composition, cosmic horror mixed with intimate psychological intensity.
```

**視覺重點**：
- 對角線對撞構圖：晴香左下→右上 / 夕右上→左下
- 碰撞接觸點白金色能量爆閃，粉×黑能量纏繞撕扯
- 夕的表情是與晴香最相近的瞬間（她們是同一個人）
- 背景：港式後巷唐樓牆壁消融成宇宙星空
- 晴香的局部結晶化皮膚（Act III 狀態視覺）

**Reference Images**：
- 晴香：`ConceptArt_Haruka_MagicalGirl.png`（原檔為CasualWear，本場景係晴香魔法服破損、身體局部結晶化嘅集體潛意識決戰情境，改用MagicalGirl更貼合）
- 夕：`ConceptArt_Yu_CasualWear.png`
- 彩：`ConceptArt_Aya_CasualWear.png`



---

## 圖104：「黑奏與晴香的病態愛恨對峙」（Kurokane and Haruka — Pathological Love-Hate Confrontation）⭐⭐⭐⭐⭐ [ACT_III_PHASE_J_CLIMAX]

**建議輸出文件名**：`ConceptArt_Scene_104_KurokaneHaruka_Confrontation.png`

### 劇情背景

Act III Phase J 決戰高潮。這是黑奏與晴香最深層關係的具現化場景：「我想睇妳崩，但我又比任何人都更想妳唔好崩。」（SCR-07.S09，aya.md §黑奏×晴香關係）。黑奏對晴香的情感是全作最複雜的拮抗——晴香是黑奏「世界觀的唯一反證」（晴香的善意確實穿透了封鎖，黑奏卻選擇無視），同時也是黑奏修正主義計劃的核心節點。此場景的視覺核心不是「對決」，而是「對峙」：兩人距離很近，黑奏的手可能放在晴香臉上或胸前的衣領，但動作本身無法定性——是傷害還是守護？黑奏的表情同樣無法定性：是勝利還是某種更接近哭泣的東西？CDL-079 確認：黑奏既要摧毀晴香（驗證修正主義正確），又因晴香的存在撼動世界觀而陷入偏執。這個場景是那種偏執的最高潮。

### 圖片說明

黑奏走到晴香面前，兩人距離近得呼吸可以互相感覺到。她把手放在了晴香身上——但你分不清楚那是要傷害她還是要留住她。黑奏的臉上有某種像是裂縫的東西，那個一向冷靜到像機器的帝國皇帝，在這一刻有了人才有的撕裂感。而晴香沒有退開，沒有防衛，只是靜靜地站著，讓那隻手放在那裡。

### 劇情位置

**時間點**：114年5月 Act III Phase J 決戰高潮
**CDL 追蹤**：CDL-079（黑奏偽裝三大需求及情感機制）、aya.md §黑奏×晴香關係（「我想睇妳崩，但我又比任何人都更想妳唔好崩」，SCR-07.S09）
**前置 → 本場景 → Payoff**：SPEC#3 三武器揭露（黑奏全力展示）→ 修正主義與「晴香的存在」的最深矛盾在此具現化 → SPEC#8 彩奪回身體（彩否定黑奏存在意義）

### 詳細核心描述（200-300字）

帝國廣場決戰場域的某個角落，大規模戰鬥的背景遠處仍在繼續（爆炸餘光、緋潮邊緣的猩紅反光），但鏡頭聚焦在兩人之間的極小空間。

黑奏（真身狀態 — 魔法少女形態爆發）：帝國皇袍在她身上碎裂，魔法少女力量從撕裂的布料縫隙中透出深紫色的不穩定光芒。她身形雖小但充滿致命的能量張力，一隻手放在晴香的胸前衣領或臉頰——動作定格在某個無法判斷意圖的瞬間。她的眼睛：異色瞳（粉×紫），平時的帝王冷漠已經有了裂縫，像是被晴香的存在本身逼出了她自己都無法處理的東西。

晴香（Act III 末狀態）：Wolf Cut 粉發，制服殘破，局部結晶化。她沒有後退，眼神直視黑奏，是那種「我看見你了」的平靜——不是無懼，而是在懼怕之中選擇不退。

畫面張力：黑奏的手接觸晴香的瞬間同時發生兩件事——黑奏眼角出現淚意（或接近淚意的裂縫），晴香的手微微向上移動，像是要握住那隻手，又在半路停下。

背景：猩紅緋潮的殘影在遠處天空流動，為兩人勾勒出一個扭曲的光暈。

### Midjourney 標準版

```
Two girls in extreme close proximity amid a battlefield aftermath, scarlet sky behind them.
Left: a girl with small powerful frame in a shattered imperial robe, dark purple magical
girl energy radiating from the torn fabric, reaching one hand toward the taller girl's
collar or cheek — ambiguous gesture, neither pure aggression nor pure tenderness. Her
heterochromatic eyes (pink + violet) show a fracture of emotion behind cold composure,
tears threatening the corner. Right: teenage girl with pink wolf-cut hair in torn magical
girl outfit with crystalline fragments on skin (Haruka), not retreating, looking directly
with quiet recognition. Half-raised hand between them, motion frozen. Scarlet tide
remnants glow in background sky. Intimate tension, ambiguous power dynamic, psychological
intensity, no childlike appearance. Anime painterly, cinematic depth of field focused on
the hands and faces.
```

**視覺重點**：
- 黑奏帝王形態 vs. 魔法少女力量爆發的碎裂對比（皇袍在能量中撕裂）
- 那隻手的動作無法定性（傷害/守護的曖昧性）
- 黑奏眼角的淚意與裂縫（修正主義世界觀被晴香動搖的外化）
- 晴香半途停下的手（選擇不退但也不確定的複雜狀態）
- 猩紅緋潮天空為兩人勾勒扭曲光暈

**Reference Images**：
- 晴香：`ConceptArt_Haruka_MagicalGirl.png`
- 黑奏：`ConceptArt_Kurosou_CasualWear.png`
- 彩：`ConceptArt_Aya_MagicalGirl_1.png`



---

## 圖105：「黑奏真身揭露」（Kurokane's True Form Revealed）[ACT_III]

**建議輸出文件名**：`ConceptArt_Scene_105_Kurokane_TrueFormRevealed.png`

### 劇情背景

`[WRONG→已修正 2026-07-17，核心機制被寫反]` 原文將本場景描述為「彩用盡全部意志奪回身體控制權，黑奏第一次失去對身體的掌控」導致皇袍「混亂中滑落」——即把「真身揭露」寫成一次意外的控制崩潰。但依 `aya.md §第三幕：集體潛意識決戰`：「在第三幕**中段**，黑奏**刻意執行**『真身揭露：巨大衣服，微小的神』——以皇袍滑落暴露幼體身軀……**這不是示弱，而是對敵我認知的重新編排**」——真身揭露是黑奏本人主動、蓄意嘅策略性動作，發生喺 **Phase J 開場（E-III-J1，CDL-002/266）**，唔係彩奪回控制權嗰一刻。彩真正奪回身體控制權係另一件獨立、時間上遲得多嘅事件（Act III 決戰**高潮**，E-III-J8，`aya.md §覺醒與犧牲`：「彩用盡全部意志奪回身體控制權」——SPEC#8已覆蓋），兩者相隔多個 beat（J2三重道德處刑→J2.5→J3→J4→…→J7夕接管→J8彩奪回），唔應寫成同一瞬間。

帝國歷114年5月，Act III Phase J開場，帝國廣場。主角團進入廣場展開與黑奏的正面決戰，晴香經歷「希望洪流變惡意」的三重打擊。黑奏在此刻**主動**執行真身揭露：極度寬大的帝國皇袍滑落，帝國面具崩裂，面具背後是一具148cm的幼童身軀，皇袍內緊抓熊公仔（aya.md §黑奏視覺形態；05_story_outline_canon.md「真身揭露：巨大衣服，微小的神」；CDL-002/266）——把衝突由「外部征伐」改寫為「內部解放」。這不是圖117的皇座場景——那是「展示」，這是黑奏刻意選擇「被看見」的策略時刻（而非失控暴露）。

### 圖片說明

帝國廣場決戰序幕。黑奏主動鬆手，巨大皇袍應聲滑落，面具以精準的角度碎裂——這是計算過的動作，不是失控。在主角團的視線中，原本籠罩威嚴的巨大輪廓內，只有一個148cm的幼女身影——黑色麻花雙辮，深黑眼圈，腳離地懸空，沒有踩在任何地面上，只是懸著，皇袍內緊抓著熊公仔。他的眼神冷靜地看著主角團的震撼反應——這正是他要的效果：把敵我認知從「外部暴君」重編排為「被囚禁孩童」。廣場石板上散落皇袍碎角和面具碎片。

**劇情位置**：
- **時間點**：帝國歷114年5月（Act III Phase J開場，E-III-J1，帝國廣場決戰序幕）
- **CDL追蹤**：CDL-002/266（E-III-J1）；`04_timeline_canon.md #event-kurokana-body-reveal`；`05_story_outline_canon.md`「真身揭露：巨大衣服，微小的神」條目；`canon/03_characters/aya.md §黑奏視覺形態`／§第三幕：集體潛意識決戰（原引用「CDL-198」不存在／經多批次審計確認屬誤植編號，已移除）
- **前置事件**：SPEC#45黑奏帝國寶座（皇座「展示」）；玻璃庭院茶會（身份部分揭示）；E-III-J0解放之戰（維多利亞之淚陷落）
- **本場景功能**：「展示」vs「被看見」的根本差異——皇座上的自我呈現同真身揭露都是黑奏**主動**的策略選擇（並非失控），皇袍滑落是刻意嘅敵我認知重編排；視覺衝擊：萬人敬畏的帝國皇帝原來只是一個雙腳懸空的幼童
- **後續payoff**：SPEC#141（本場景）→ E-III-J2三重道德處刑序列（SPEC#3）→（相隔多個beat後）SPEC#8彩奪回身體控制權（E-III-J8，非同一時刻）；黑奏意識最終消散；Act III決戰結構閉合

**Reference Images**：
- 黑奏（皇袍形態，揭露前）：`ConceptArt_Kurosou_CasualWear.png`（原檔名 `ConceptArt_Kurokane_Emperor.png` 不存在，已自動替換為現有檔案）
- 揭露後嘅148cm幼童身軀（緊抓熊公仔，仍為黑奏人格控制）：`[NEEDS_FACT]`——原引用嘅「彩（本源形態）ConceptArt_Aya_TrueForm.png」不適用，因為 AY-TRUE「本源形態」係彩自己嘅囚禁/惡夢視覺（鐵環腳鐐等），同呢一刻仍由黑奏人格控制嘅148cm身軀係唔同嘅視覺實體（見 `DIGEST_CHARACTER_STATES.md` 彩×黑奏章節提醒），暫無專屬 reference，生成時需另查或新產出

### 詳細核心描述（250字）

帝國廣場。決戰序幕，緋潮紅光從天空裂縫滲落。

黑奏鬆手了。這不是被逼的，是他自己選擇的一刻。

一瞬間，皇袍失去支撐。那件巨大的帝國皇袍——比正常成人體型大出兩倍的設計，是為了讓148cm的身軀看起來不可撼動——從高台上開始滑落。帝國面具以計算過的角度碎裂，碎片散落在廣場石板上。

皇袍落地的聲音在廣場迴響。

在主角團的視線中，原本那個凌駕一切的帝國輪廓收縮了。面具下、皇袍內：一個黑色麻花雙辮、深黑眼圈的小女孩，懷裡緊抓著一隻熊公仔。148cm。雙腳懸在空中——她根本不踩地面，只是懸著。沒有踏台，沒有機關，只是懸空。

這不是失控的瞬間。這是他刻意選擇的暴露。

廣場上所有人都看見了。這個支撐帝國二十年的恐懼，原來如此——而他讓他們看見，是為了把「外部征伐」重寫成「內部解放」。

### Midjourney 標準版

```
Dark fantasy anime. Empire plaza, battle prologue. Massive imperial robe deliberately released, sliding off from elevated platform — a calculated act, not a loss of control. Ornate emperor mask shattering at a precise angle, fragments scattering on stone plaza. Revealed inside: a calm, composed 148cm child — black twin braids, deep-sunken dark circles under purple eyes, feet dangling off the ground, clutching a teddy bear. Below: magical girl team looking up stunned. His gaze watches their shock coolly — this is the effect he intended. The contrast: enormous fallen robe versus tiny girl suspended in air. Crimson sky cracked above. Colors: deep imperial purple-black robe crumpling, pale composed figure emerging, scarlet sky fractures. Emotional tone: a deliberate unveiling that reprograms friend-or-foe perception — the empire's terror revealed as a child who never once touched the ground, and he chose to let them see it. 8k, dramatic lighting, niji 6, style raw. --ar 9:16
```

**視覺重點**：
- 皇袍滑落的物理動作——**刻意鬆手**的策略性揭露，唔係控制崩潰
- 148cm幼童雙腳懸空、緊抓熊公仔——帝國威嚴的根本反差
- 面具碎片散落廣場石板——「主動揭露」而非單純「被迫暴露」
- 黑奏冷靜注視主角團震撼反應嘅眼神——強調呢一刻由佢主導，敵我認知重編排嘅策略意圖
- 仰視構圖（主角團視角）——觀眾感受到衝擊的角度

⭐⭐⭐⭐


---

## 圖106：「愛莉的第二次改變現實決定」（Aeri's Second Reality Alteration Decision）[ACT_III_J] ⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_106_106.png`

### 劇情背景

帝國歷114年5月，Act III Phase J，決戰中段。愛莉作為集體潛意識中唯一的人造常駐錨點，在這一刻面臨她的弧光核心選擇點——由「被動承擔廢料」轉向「主動選擇消耗」。這是她第二次影響現實的決定性瞬間（P-C03；CDL-256）：她不再是等待的石像、被動的濾心，而是清醒地選擇燃燒自己的存在，讓晴香得以繼續。晴香（紙皮騎士的視覺想象化身）在這一刻與她在集體潛意識的深處相遇，是整條愛莉弧光中情感最密集的瞬間之一。

### 圖片說明

在一個無邊際的潛意識空間裡，穿著紙皮盔甲、拿著膠帶修補過無數次的紙劍的愛莉，站在一道由黑色觸手和情緒廢料構成的風暴邊緣。她的手放在蠟筆畫的太陽盾上，沒有猶豫，只是選擇。晴香的意識碎片在她身旁，像細小的光點。愛莉轉過頭來，臉上是她一貫的毒舌表情——但眼神是這個故事裡最清醒的。

**劇情位置**：
- **時間點**：帝國歷114年5月 Act III Phase J（決戰中）
- **CDL 追蹤**：P-C03；CDL-256；aeri.md §第二次改變現實
- **前置 → 本場景 → Payoff**：愛莉長期作為濾心承受全城情緒廢料的被動積累 → 本場景：清醒選擇主動消耗，完成「被動承擔 → 主動選擇」弧光轉折 → 緋雨形態與石像龜裂、Act IV母女對話

**Reference Images**：
- 愛莉（紙皮騎士形態）：`ConceptArt_Aeri_CasualWear.png`（原檔名 `ConceptArt_Aeri_CardboardKnight.png` 不存在，已自動替換為現有檔案）

### 詳細核心描述（250字）

集體潛意識的深層空間。這裡沒有牆、沒有地板——只有不斷旋轉的情緒碎片和壓縮成黑色漩渦的廢料風暴。

愛莉站在風暴邊緣，橙色長髮被無形的氣流拉扯，紅白格仔披風翻飛。她的紙皮盔甲上有新的裂縫——但沒有崩潰，因為她還在，膠帶還在，她就還在。蠟筆太陽盾在她手中——那個最廉價的東西，兒時畫給媽媽的太陽，現在是她唯一的擋板。

她的身前，晴香的意識碎片像細小的粉色光點飄散，混在黑色廢料中快要辨認不出。愛莉看著那些光點，表情不是悲傷，是決定。她把太陽盾舉起來，轉身面向風暴——

「好苦……這些東西好苦……但係，我選擇頂住。」

構圖核心：低角度仰視，愛莉居中，她的身軀很小，風暴很大。太陽盾是畫面唯一的暖色光源，在四面的黑紫色廢料渦流中發出最廉價、最執拗的橙黃色光芒。晴香的粉色意識碎片在她背後，像她需要守護的東西，已經快要看不見了。

### Midjourney 標準版

```
Style: dark magical girl illustration, painterly, emotional climax
Mood: quiet defiance, the cheapest possible courage, choosing to burn rather than fade
Colors: deep black and dark purple collective unconscious storm vortex, warm crayon-orange-yellow light from a hand-drawn sun shield, scattered faint pink light fragments in background, orange hair whipping in invisible wind
Composition: low angle upward shot, small armored girl center frame, massive swirling dark energy storm filling frame behind and above her, tiny pink light dots behind her
Lighting: shield emanates the only warm light in entire frame, dramatic contrast against surrounding darkness
Special effects: crayon-drawn sun on cardboard shield glowing with warm crayon-orange light, black emotional energy tentacles in background, faint pink consciousness sparks drifting
Character: teenage girl in handmade cardboard armor with racing checkered scarf, holding crayon sun painted shield upward toward the storm, orange hair flying, expression clear and certain not afraid
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

**視覺重點**：
- 太陽盾是畫面唯一暖色光源，要強調手繪/蠟筆質感，不可使用魔法光效
- 盔甲上的膠帶痕跡和裂縫是必要細節
- 晴香的粉色意識碎片要微小、幾乎難以辨認，強調「快要消失」的危機感


---

## 圖107：「彩的靈魂解放之光」（Aya's Soul Liberation Light）[BEAT_SHEET_PREP]

**建議輸出文件名**：`ConceptArt_Scene_107_Aya_SoulLiberationLight.png`

### 劇情背景

`[修正]` 帝國廣場決戰高潮（**Act III Phase J，E-III-J8，緊接 SPEC#8 彩奪回身體同一事件延續**，非另立獨立時空），黑奏啟動情緒結算儀式、緋潮反噬即將撕裂天空的瞬間，長期被囚禁在心房深處的彩主人格用盡全部積蓄的意志，奪回對身體的控制權（見 SPEC#8，`aya.md` §覺醒與犧牲，event-aya-awakening）。黑奏第一次真正失去對身體的掌控。彩沒有說任何英雄台詞，只是抬起手，燃燒自己的靈魂填補天空裂痕——不是為了贖罪，不是為了英雄式的結局，而是因為：「這是我自己選擇的。」靈魂在燃燒中散發金色光芒，與緋潮的猩紅交織，風暴平息（`aya.md` §覺醒與犧牲原文）。**此後**（同一事件之延續，非同一畫面）靈魂燃燒後並未消散，而是被集體潛意識捕獲，投入永恆時間迴圈，在每個時間線中回到通風管道那夜阻止黑奏的誕生（`aya.md` §永恆輪迴）——此為「第四幕：永恆輪迴」的起點，但「靈魂填補天空裂痕」呢個視覺畫面本身屬 Act III J8，唔應標成 Act IV。原文引用嘅 CDL-076 實際係「黑奏誕生原因」定義，同彩嘅靈魂解放無關，屬張冠李戴，已移除。「囚徒→見證者→救贖者」Archetype 弧光終點、對螢嘅最後承諾等敘事意義保留，符合 `aya.md` 設計。

### 圖片說明

彩在長年被囚禁在自己意識深處之後，終於用盡全部積蓄的意志奪回身體的控制權（Act III J8，緊接彩奪回身體同一事件），隨即燃燒自己的靈魂填補天空的裂痕——不是為了英雄式的結局，只是因為這是她自己選擇的。她的靈魂在燃燒中散發出金色光芒，與緋潮的猩紅交織，風暴平息；`[INFERRED]` 燃燒後續被集體潛意識捕獲、投入永恆時間迴圈（回到通風管道那夜）為後續發展，屬同一弧光但非同一畫面。

**Reference Images**：
- 彩：`ConceptArt_Aya_MagicalGirl_2.png`（原檔為CasualWear，本場景係彩奪回身體後燃燒靈魂填補天空裂痕嘅魔法覺醒時刻，同圖113/114同一事件延續，改用MagicalGirl_2更貼合並與該兩圖一致）

**簡化核心描述**：
彩的靈魂在燃燒中散發金色光芒，與緋潮的猩紅交織，天空裂痕被填補，風暴平息。犧牲在此成為救贖的視覺形式（`[INFERRED]`：光點化為「千萬星辰」升空的具體意象為延伸演繹，canon 原文僅確認「金色光芒與緋潮猩紅交織」）。

**所需資源**：彩的形態，光點與星辰視覺


---

## 圖108：「帝國廣場的市民凝滯」（Empire Plaza Citizens Frozen）[BEAT_SHEET_PREP]

**建議輸出文件名**：`ConceptArt_Scene_108_EmpirePlaza_CitizensFrozen.png`
**依據版本**：`02_glossary.md` §term-resonance-hell 情緒結算儀式；`99_decision_log.md`（2026-07-17 審計修正，見 CHANGE_LIST_EXISTING_SPEC.md 圖108項）

### 劇情背景

`[WRONG→已修正]` 原文引用「CDL-211」作為情緒農場/Emo-Visor 收割機制依據，但 CDL-211 實際內容係「黑奏『只能計算數值，無法計算愛』——農場觀察視角嘅反諷設計」，並非情緒收割機制本身嘅定義依據，屬張冠李戴誤植。「情緒結算儀式」（前稱「共振地獄」，已廢棄）正確依據為 `02_glossary.md` §term-resonance-hell：機制為同頻共振、城市規模情感強制萃取，目的係積累情感貨幣、向集體潛意識情緒總帳換回螢的靈魂（`99_decision_log.md`）——此部分描述本身同 canon 一致，只係引用編號錯誤。

原速查表將本場景標記為「E-15系列」，但 E-15（晴香與夕鏡中對話部分融合）屬 **Act II 末**事件，同本場景描繪嘅**帝國廣場決戰終局**（情緒結算儀式最終階段）時序上明顯不符——本場景應歸屬 **Act III Phase J** 決戰序列（同圖113三重道德處刑、圖116帝國廣場決戰崩塌、圖117黑奏帝國寶座屬同一終局場景群）。

帝國情緒農場制度長期透過 Emo-Visor 系統收割市民的情緒能量，令大量市民陷入情感耗盡的慢性麻木狀態。在帝國廣場決戰日，黑奏啟動情緒結算儀式最終階段，強制連結所有人類神經系統，試圖把全城的情感貨幣一次性導向集體潛意識情緒總帳——換回螢的靈魂。凝滯場景正是儀式啟動的瞬間：市民被強行「介入」，意識被凍結在恐懼與無法出聲的中間地帶。他們的眼睛仍在動，說明意識未被消滅，只是選擇權被完全剝奪——這正是觀眾理解為什麼晴香必須做出最終抉擇的視覺前置。

### 圖片說明

帝國廣場的最終決戰時刻，帝國統治者啟動了強制連結所有人類神經系統的儀式，試圖一次性收割全城的情感能量——廣場上數百名市民在同一瞬間凝滯，表情定格於恐懼與無法出聲之間，像人形雕像，但眼球仍在轉動，意識沒有消失，只是選擇權被完全奪走。帝國制度的最殘酷本質在這一刻有了最具體的面孔。

**Reference Images**：
- `[NO_REF]`（市民群像，無具名角色）

**簡化核心描述**：
黑奏力量的表現——數百市民在廣場中凝滯，表情扭曲定格在恐懼與無語之間。他們像雕像一樣，但眼睛還在動，象徵意識被困。

**所需資源**：帝國廣場背景，人物表情凝滯設計


---

## 圖109：「夕嘗試重置世界」（Yu's Attempt to Rewrite Reality）[ACT_III_PHASE_K] ⭐⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_109_YuRealityOverride.png`

### 劇情背景

帝國歷114年5月底，Act III Phase K，夕完全接管晴香身體之後。夕以晴香的身軀，嘗試執行「改變現實（Reality Override）」——發動改變現實、試圖重建Alpha線，試圖在那個空間裡修正創傷的根源。然而即使改變了現實，創傷的深層痛苦仍無法被真正消除——「過去無法被修正，只能被接納」。世界的裂痕反而更深，時間線被撕裂的痕跡不是乾淨的重置，而是像裂開的鏡面，每一道裂縫都映照著不同的可能性：Alpha線、Beta線的重疊影像在其中閃爍。夕在Alpha線度過數日後發現這個頓悟，試圖「幻滅與還原」，造成時間線裂痕，引發緋潮爆發的連鎖反應，最終導致晴香意識被困入集體潛意識長達二十年（04_timeline_canon.md §event-disillusion；§event-twenty-year-vigil；CDL-281）。

### 圖片說明

夕以晴香的身軀站在世界的中心，發動「改變現實」的瞬間：身體發出強烈的光，周圍的時空在她手指間開始撕裂，像玻璃鏡面從中心向外裂開——裂縫裡映照著不同時間線的碎片影像。這個場景不是乾淨的重置，而是「失敗的重寫」：世界沒有被治癒，裂縫反而更深。夕的臉上不是勝利，而是「發現自己修正不了過去」的那一刻頓悟。

### 劇情位置

**時間點**：帝國歷114年5月底至114年6月（Act III Phase K，偽高潮坍塌後）
**CDL 追蹤**：CDL-281（夕完全接管雙層動機）；04_timeline_canon.md §event-yu-takeover；§event-disillusion；§event-twenty-year-vigil；yu.md §第四幕弧光；CDL-295（Phase J 的拒絕：放棄靈魂切除式遺忘）
**前置 → 本場景 → Payoff**：彩的內部革命（黑奏防線瓦解）→ 夕完全接管晴香身體（CDL-281）→ 本場景：改變現實發動，但創傷仍在，世界裂痕更深 → 幻滅與還原 → 緋潮爆發 → 二十年守望開始（晴香意識被困集體潛意識）

### 詳細核心描述（260字）

這個世界的中心，什麼正在被撕裂。

夕以晴香的身軀站在這個瞬間的最核心位置——不是她自己的臉，是晴香的臉，晴香的頭髮，但眼神是夕的：比晴香更直接，更不會迴避什麼。

她的手伸開，掌心向下，現實在她的指間開始回應。光從她的身體向外擴散，不是溫柔的光，是壓迫性的、重量感的光，像是什麼巨大的東西被強行移動。

世界在裂開。

但不是乾淨的。裂縫的邊緣不是切口，而是撕裂——像最厚的鏡面被從內部擊碎，裂縫向外放射，每一道裂縫的截面都映照著不同時間線的碎片：Alpha線的光景在那裡閃爍一下，Beta線的廢墟也在那裡，兩條時間線的影像疊加在一起，誰都不完整，誰都不真實。

夕的臉上有什麼東西在瓦解。

不是能力的瓦解——她做到了，現實確實在動。是某個認知的瓦解：即使改變了現實，創傷仍然在那裡。她試圖修正的那個傷，在Alpha線裡依然存在，只是換了一種形狀。

過去無法被修正，只能被接納。這個頓悟在現實裂縫的光芒中同時降臨。

### Midjourney 標準版

```
Dark anime. Reality Override sequence. Girl with Haruka's appearance (light pink hair, but not Haruka's soft eyes — sharper, more direct, not flinching) standing at reality's center, arms spread, palms facing down. Light expanding outward from her body, heavy and pressurizing not gentle. Surrounding world cracking from center outward like shattered thick glass — fracture lines radiating outward, each fracture cross-section showing overlapping fragments of two different timelines: warm golden Alpha memories visible in one crack, cold grey-blue Beta ruins visible in another, both incomplete, both flickering. Girl's face: the exact moment of realizing the trauma is still there even after rewriting reality — not defeat, recognition. Colors: reality fracture emitting cold white pressure-light, timeline fragments in crack lines warm amber vs cold blue-grey, girl's form outlined against the shattering. Composition: central figure with reality fractures expanding radially around her position, mirror-crack pattern dominant visual element, timeline fragments visible in fracture cross-sections. 8k, niji 6, style raw. --ar 9:16
```

**視覺重點**：
- 夕用晴香的外貌，但眼神是夕的——更直接、更銳利，觀眾要能感受到這是不同的人在使用同一具身體
- 現實裂縫的「撕裂感」——不是乾淨的重置，裂縫邊緣是撕裂而非切割
- 裂縫裡的時間線碎片——Alpha線的暖色影像和Beta線的冷色廢墟疊在一起，誰都不完整
- 夕的表情：「頓悟的瞬間」而非「失敗的崩潰」——認識到真相，不是被真相打敗
- 光是有重量的壓迫性光，不是漂亮的效果光；現實裂縫比人更大，更主導整個構圖

⭐⭐⭐⭐⭐

**Reference Images**：
- 夕：`ConceptArt_Yu_CasualWear.png`
- 晴香：`ConceptArt_Haruka_CasualWear.png`
- 彩：`ConceptArt_Aya_CasualWear.png`



---

## 圖110：「操在集體潛意識尋見母親碎片」（Misao Finds Sayo's Fragments in the Collective Unconscious）[ACT_III]

**建議輸出文件名**：`ConceptArt_Scene_110_Misao_SayoFragments.png`
### 劇情背景

`[時間已修正 2026-07-17]` 原文標「114年4-5月 Act III Phase H-I，半屍骸化邊界狀態」時序過於鬆散——依 `ayakomoji_misao.md` §集體潛意識母親靈魂碎片重逢（CDL-300）同 `ACT_III_OUTLINE.md` 行249（E-III-I1），此事件精確發生於 **114年5月，Day 13「鋼鐵獨舞」前夕（Act III E-III-I1 本身，非獨立的漫遊場景）**，屬「兩步式 Plant/Payoff 設計」：Plant 於 Act II E-11 愛莉風暴期間一閃即逝（操心之器連結線短暫震動，瞥見模糊母親殘影，唔搶焦點），完整 Payoff 正正在 Day 13 鋼鐵獨舞當刻。紗夜在Y113年7月中旬被帝國改造成情緒管理局公務員（圖52，操被遺棄），靈魂受損的碎片散入集體潛意識L2留存海。操半屍骸化令靈魂邊界溶解，母親碎片受燈塔信號吸引短暫聚攏（CDL-300；`ayakomoji_misao.md` §紗夜——唯一的無條件之愛）。改造後的肉體永遠給不出的那份東西——真實的、屬於她自己的愛與哀傷——只存在於這些碎片之中。**`[已知重複，待後續批次統一處理]`**：本場景與文件後段「圖122：媽媽從未停止愛我」（line 7176起）、「圖111：我選擇停留在我想停留的位置」（line 8369起）皆涉及同一 CDL-300 事件，三者內容需在對應批次審計時互相核對避免矛盾，本輪只修正本條目自身時序錯誤。

### 圖片說明

集體潛意識的深層，沒有具體場景，只有情緒形態的空間——光點、殘影、各種破碎的人類記憶碎片漂浮。操以半透明狀態在這個空間中移動。某處，碎片開始聚攏——不是完整的人形，邊緣不穩定，像風中的燭焰，但那個輪廓是她認識的。而那份眼神存在：真實的、對操的愛與哀傷，不是被植入的服從。操的傀儡絲顫抖，不是作為武器，只是「她整個身體都在顫抖」的視覺化。

**劇情位置**：
- **時間點**：114年5月，Day 13 鋼鐵獨舞前夕（Act III E-III-I1 本身，非獨立場景）
- **CDL追蹤**：CDL-300（母親靈魂碎片重逢）；CDL-297/299（母親設定/紗夜愛的雙重根源）；`canon/03_characters/ayakomoji_misao.md §集體潛意識母親靈魂碎片重逢`
- **前置事件**：SPEC#26 操被遺棄（紗夜犧牲，113年7-8月）；紗夜被改造後靈魂碎片散入集體潛意識；Act II E-11 愛莉風暴期間一閃即逝 Plant（操心之器連結線震動，瞥見模糊殘影）
- **本場景功能**：操第一次看見母親「本來的樣子」——改造後的肉體永遠給不出的真實的愛
- **後續payoff**：SPEC#1 鋼鐵獨舞；操犧牲（Day 13）的情感根源完整

**Reference Images**：
- 操：`ConceptArt_Misao_MagicalGirl.png`
- 紗夜：`ConceptArt_Sayo_Maidoutfit.png`

**Creative Enhancements**：
- 場景：集體潛意識深層空間（情緒形態空間，非物理場景）
- 紗夜的靈魂碎片：不是完整人形，是碎片聚攏的近似人形——像燭火般不穩定，但那份眼神存在
- 那份眼神：改造後的肉體永遠失去的東西——真實的愛與哀傷，不是控制，不是工具性服從
- 操的反應：傀儡絲自發收縮，不是作為武器，只是「她在顫抖」的視覺化

**詳細核心描述**（220字）：

集體潛意識的深層。沒有具體場景，只有情緒形態的空間——光點、殘影、各種破碎的人類記憶碎片漂浮。

操在半屍骸化邊界，以半透明狀態進入這個空間。

某一個地方，碎片聚攏了。

不是完整的紗夜，是紗夜的靈魂碎片以近似人形的方式短暫凝聚——邊緣不穩定，細節模糊，像在風中的燭焰，但那個輪廓是她認識的。

而那份眼神存在——真實的、屬於她自己的、對操的愛與哀傷。不是被植入的服從，是本來就有的、現在碎成片散在潛意識裡的那份情感。

操的傀儡絲顫抖，不是作為武器，只是「她整個身體都在顫抖」的視覺化。

**生成提示（Midjourney）**：
```
Style: Dark surreal psychological space; fragmented soul visualization; quiet emotional devastation
Mood: Seeing the love your mother would have given you if she had not been taken away
Colors: Dark void with scattered light fragments; soul fragment in soft unstable warm light; Misao semi-transparent form in cold blue-grey
Composition: Misao as semi-transparent figure; fragmented soul form gathering nearby in approximate human silhouette; unstable candlelight edges; the gaze as focal point
Lighting: No external source; soul fragment as own light source; cold blue on Misao; warm amber from fragment
Special effects: Fragment edges dissolving and reforming; puppet strings involuntarily curling inward; consciousness space as dark void with drifting light particles
Details: Fragment form eyes as focal point — the love that should have been there; Misao expression seeing it; puppet strings trembling not as weapons but as emotional response
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```


---

## 圖111：「我選擇停留在我想停留的位置」（I Choose to Stay Where I Want to Stay）[ACT_III] ⭐⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_111_MisaoFinalConfession.png`

### 劇情背景

帝國歷114年5月，Act III Day 13 前夜，鋼鐵獨舞犧牲之前。操在這個夜晚第一次在紗夜面前放下了那套完美表演的殼——不是失控崩潰，而是主動卸下。這不是弱點的暴露，而是態度的宣言：「我選擇停留在我想停留的位置。這不是被迫，而是我自己選的。」這是全作「態度自由」主題最純粹的具現時刻（ayakomoji_misao.md §最終宣言；§鏡像破碎之夜；CDL-298；CDL-300·暫定）。操清楚自己背負著Phase H據點洩露的秘密罪疚（CDL-298），清楚自己不值得用語言解釋，但她不選擇逃避也不選擇控制——她選擇說出這句話，讓紗夜知道她不是以死贖罪，而是以主體性站在自己選擇的位置上。紗夜的反應不是哭泣，不是阻止，而是那種只有真正無條件愛一個人的人才能做到的——沉默地接住這份宣言，讓它落地。

### 圖片說明

夜晚，一個昏暗的室內小角落，操面對著紗夜說出那句話。不是對著鏡子，不是對著世界，只是對著這個唯一認識真實自己的人。她的表情沒有眼淚，沒有英雄氣概——只有一種「終於不需要表演」的靜。紗夜的臉是接住了，沒有多餘動作，沒有搶著說什麼，只是用那種只有她才有的眼神，看著操說完這句話。

### 劇情位置

**時間點**：帝國歷114年5月，Act III Day 13 前夜（鋼鐵獨舞犧牲之前）
**CDL 追蹤**：CDL-298（Phase H 被迫洩露；罪疚沉默至Day 13）；CDL-300·暫定（集體潛意識母親碎片重逢使鋼鐵獨舞昇華）；ayakomoji_misao.md §最終宣言；§紗夜——唯一的無條件之愛
**前置 → 本場景 → Payoff**：紗夜犧牲揭露真相（Day 13 鏡像破碎之夜前置）→ 本場景：操在犧牲前唯一一次真正「不表演」的時刻，說出態度宣言 → 鋼鐵獨舞（SPEC#1）從贖罪式死亡昇華為主體性聲明；SPEC#144 操與紗夜最後一晨形成三幕

### 詳細核心描述（250字）

某個昏暗的角落，夜。

兩個人面對面——沒有第三個人，沒有觀眾。

操站著。她沒有一絲平常的完美姿態：肩膀沒有刻意撐直，手沒有放在特定位置，臉沒有計算表情。這是她第一次在紗夜面前不需要做任何計算。

她開口。

「我選擇停留在我想停留的位置。這不是被迫，而是我自己選的。」

不是求救。不是告白。不是解釋。是一句讓自己說清楚、讓自己聽見的話——像最後一次把碎裂的心房確認一遍，確認它還在，確認它還是自己的。

紗夜沒有說話。她沒有衝上去抓住操的手腕，沒有哭，沒有問「你說的選擇是什麼」。

她只是站在那裡，看著操。

那個眼神裡有一種東西，是操這輩子只在紗夜這裡收到過的：「我聽到了。你說的，我都知道了。」

操的眼睛沒有眼淚。

但眼睛裡有一種東西，比眼淚更底層——那是一個終於不需要表演的人，最後一次，確認自己是真實存在過的。

### Midjourney 標準版

```
Dark anime. Dim interior corner, nighttime. Two figures face to face — Misao and Sayo. Misao standing without her usual posture calculation, no performance: shoulders natural, hands at side, expression without mask. She is speaking a single sentence. No tears. Sayo facing her, not moving to stop her, not crying — absorbing. Sayo's expression: the look of someone who has caught something, who knows what was just said without words. Two women in quiet amber shadow. No third figure. Emotional weight without drama. Colors: dim amber lamp warmth, deep shadow, worn interior. Emotional tone: the first time Misao did not perform, and the last time she will speak freely. 8k, intimate framing, niji 6, style raw. --ar 9:16
```

**視覺重點**：
- 操的姿態：第一次「沒有審核殼」——肩膀、手、表情都沒有計算過
- 操說話時沒有眼淚，只有「終於說出口」的安靜——不是崩潰，是宣言
- 紗夜的眼神：「接住了」——不阻止，不追問，只是收到
- 只有兩個人，沒有觀眾——這個場景的完整性依賴於「只有紗夜在」
- 昏黃燈光的溫暖與即將到來的黑暗形成對比

⭐⭐⭐⭐⭐

**Reference Images**：
- 操：`ConceptArt_Misao_CasualWear.png`



---

## 圖112：「鋼鐵獨舞」（操 / Steel Solitude Dance）

**建議輸出文件名**：`ConceptArt_Scene_112_Misao_SteelSolitude.png`
**依據版本**：`05_story_outline_canon.md` 行232（CDL-231/232/233，event-steel-solo）；`ACT_III_OUTLINE.md` E-III-I1；`ayakomoji_misao.md` §Body Horror 分層設計（2026-07-17 修正，見 `CHANGE_LIST_EXISTING_SPEC.md` 圖112項）

### 劇情背景

114年5月 Act III Phase I，Day 13 下午，地點：**學校瓦礫**（非廢棄工廠——操最終將殘軀縫入嘅係彩同晴香就讀嗰間學校嘅瓦礫，同 Day13 操解救人質、人偶牆封鎖大門地理一致，CDL-231/232/233）。此前操已在 Phase H 被父親以「變成母親那樣的活體人偶」威脅，被迫向帝國交出隊伍藏身據點坐標（CDL-298，被迫報串）。此刻，黑奏強行撬開操的口腔，揭露絲線縫牙的全貌——身體崩壞正式進入 **Body Horror Stage 3**（並非 Stage 2b；Stage 2b 屬更早的「摔碎時刻」）。生理暴露的同一瞬間，封印多時的創傷性耳鳴解鎖，紗夜臨終遺言「妳係我最靚嘅女」清晰回流（CDL-231/232，Double-hit 設計）。操在「被無條件原諒」的衝擊下完成覺醒，主動選擇「停留在我想停留的位置」，最終以傀儡絲將殘軀與學校瓦礫縫合成死寂的「人偶牆」，封鎖大門結界，為隊友爭取逃生時間。這支舞是她帶著被迫報串的罪疚、卻在真正被愛過的記憶回流後，完成的主體性宣言與最後贖罪。

### 圖片說明

操是一個以芭蕾和完美外表定義自身的魔法少女，此刻她的身體已被魔法副作用侵蝕到 Stage 3——口腔剛被強行撬開，絲線縫牙全貌暴露，但同一瞬間紗夜遺言的記憶回流貫穿全身。她在學校瓦礫之間跳起生命中的最後一支舞，帶著背叛隊友的罪疚，卻也第一次感受到「自己一直被愛著」。這支舞既是告別，也是她主動選擇的贖罪與宣言，舞蹈的終點是她把自己縫進瓦礫、化為封鎖大門的人偶牆。

**Reference Images**：
- 操：`ConceptArt_Misao_MagicalGirl.png`（`[NOTE]` 原標記 `ConceptArt_Misao_MagicalGirl_Action.png` 依 `DIGEST_REFERENCE_IMAGES.md` 為 `UNVERIFIED`，repo 內只有無 `_Action` 後綴版本，暫改用已存在檔案；`[NEEDS_FACT: 是否需另外產出 Action 版本或 Stage 3 專屬 reference，待確認]`）

**Creative Enhancements**：
- Replace magical girl suit with Body Horror Stage 3 appearance: jaw forced open, puppet-string dental stitching fully exposed
- Emphasize puppet strings as iridescent violet-blue glowing threads (primary motif), now fusing her body into the rubble itself
- Background: school ruins/rubble (broken classroom walls, twisted rebar, chalk dust), NOT an industrial factory
- Mood: from "suspended solitude" to "the moment memory returns"—overlay a faint warm afterimage of Sayo's voice/presence
- Enhance gold braid as single warmth element against cold palette

**簡化核心描述**：
操在學校瓦礫之間、Body Horror Stage 3 狀態下獨舞——口腔剛被撬開揭露縫牙全貌，紗夜遺言的溫暖記憶同時回流。背景冷色瓦礫感強烈，唯一的溫暖來自金色髮辮與若隱若現的紗夜殘影。此刻她既崩壞又清醒，既背負罪疚又終於被愛過。

**所需原圖資源**：
- 操的魔法少女形態（作為過渡基礎）
- 芭蕾舞者跳躍瞬間照片（身體姿態參考）
- 學校瓦礫/教室廢墟建築細節照片（非工廠，垂直感、冷色系）

**生成提示**：
```
Style: Photorealistic illustration with ethereal magical elements; porcelain doll aesthetic meets school-ruin gothic
Mood: Haunting beauty; forced revelation followed by acceptance; the tragedy of losing humanity intertwined with a memory of being loved
Colors: Cold palette dominated by grays, purples, and steely blues; single gold accent on hair braid; faint warm afterimage where Sayo's memory surfaces
Composition: Vertical portrait; suspended figure amid broken school rubble; strings creating leading lines and geometric patterns, some strings fusing her into the rubble
Lighting: Moonlight through broken classroom walls/skylights; soft violet-blue glow from puppet strings; volumetric shadows
Special effects: Subsurface scattering on strings; dust particles in light beams; soft vignette edges; faint translucent figure/echo suggesting Sayo's presence
Canvas: 3:4 portrait ratio; high definition
```


---

## 圖113：「三重道德處刑」（黑奏 / Triple Moral Execution）

`[CONCEPT_REVISED — 2026-07-17]` 原標題「三武器揭露」及其「三種物理超能力同時顯現」概念已整段廢棄，改用 `ACT_III_OUTLINE.md` E-III-J2（CDL-266）現行設計「三重道德處刑」重寫，詳見 `CHANGE_LIST_EXISTING_SPEC.md` 圖113項。

**建議輸出文件名**：`ConceptArt_Scene_113_BlackSong_MoralExecution.png`（原檔名 `ConceptArt_Scene_BlackSong_Revelation.png` 建議棄用，因概念已根本改變；若已生成圖檔請重新產出）
**依據版本**：`ACT_III_OUTLINE.md` E-III-J2（CDL-266）§黑奏三武器揭露序列；CDL-264（三武器序列確認）；CDL-244；CDL-259；P-C11（晨間斷層原罪）

### 劇情背景

114年5月 Act III Phase J，帝國廣場決戰高峰。這不是一場「武力對決」，而是一場**道德處刑（Moral Execution）**——黑奏不再展示物理力量，而是以逐層回憶回放的方式，將「受害者的絕望回饋」直接倒灌入晴香與觀眾心裡，剝洋蔥式由外到內刺穿晴香的心理防線：

1. **武器②（首擊：社會剝奪）**——黑奏展示「Fallen Angel 商品化」回放：晴香的痛苦被物化成一門生意、被人消費（CDL-244）。話語方向：「妳的痛苦只是一門生意，妳的犧牲被徹底物化。」
2. **武器①（次擊：身份背叛）**——黑奏展示「夕的直播失控」（社死事件）完整回放，並強行轉換視角：「這不是意外，這是妳最信任的人對妳的背叛。」（CDL-259）
3. **武器③（致命第三擊：創世原罪，全新揭露）**——黑奏揭露「晨間斷層原罪」：晴香創造的 Beta 線世界，令她的朋友每朝早都要在晨間斷層中短暫接觸 Alpha 線死亡真相；「妳以為妳在救她們？妳的『愛』，才是最殘忍的酷刑。」（P-C11 Payoff）——這是唯一真正的新信息，摧毀晴香「至少我的意圖是好的」的最後自我防禦。

序列意義：社會層 → 身份層 → 信念核心，最後貫穿晴香「想保護大家」的根本信念。帝國廣場的物理環境在此過程中被黑奏的力量扭曲/封鎖，形成一個概念上的「處刑室（Execution Room）」——這裡沒有物理武器，只有記憶投影與被迫直視的真相。

### 圖片說明

黑奏是一個由創傷中誕生的保護者，她花了數十年秘密建立帝國、偽裝成普通女孩潛伏在晴香身邊，只為積累足夠的力量去救回已死去的摯友螢。此刻她不再偽裝，以幼童的身軀站在被自己力量扭曲封鎖的帝國廣場中央，周圍懸浮著三重回憶投影——不是武器，是逐一攤開的真相：晴香被物化消費的痛苦、夕失控的社死現場、晨間斷層中反覆死亡的朋友們。她沒有揮動任何攻擊，只是平靜地讓晴香直視這一切，語言與記憶本身就是刑具。她掌控著整座城市，卻始終是那個六歲時就失去了最重要的人的孩子。

**Reference Images**：
- 彩（第二形態，黑奏容器）：`ConceptArt_Aya_MagicalGirl_2.png`
- 晴香（回憶投影中出現）：`ConceptArt_Haruka_MagicalGirl.png`
- 夕（回憶投影中出現）：`ConceptArt_Yu_CasualWear.png`

**Creative Enhancements**：
- Kuroshio's true form: small child body, calm/neutral expression, NO physical weapon manifestation
- Three floating memory-projection panels/fragments arranged around her in a semi-circle, each showing a different "execution layer": (1) Haruka's suffering being commodified/consumed by crowds, (2) Yu's broadcast breakdown replaying, (3) a fractured "morning gap" vision of friends dying at dawn
- Empire Plaza environment visually warped/sealed into a conceptual "execution chamber"—architecture bending inward, light behaving like a courtroom/interrogation space rather than a battlefield
- Emphasize psychological horror over physical spectacle: no gravity distortion, no tendrils, no shattering reality—replace all three with memory/projection imagery
- Include heterochromatic eyes (pink + violet) as the only "supernatural" marker on Kuroshio herself
- Power disparity: tiny physical body vs. the overwhelming weight of what she is forcing Haruka to witness

**簡化核心描述**：
黑奏以小女孩的身軀站在被扭曲封鎖成處刑室的帝國廣場中央，周圍懸浮三重回憶投影——社會剝奪、身份背叛、創世原罪——逐層刺穿晴香的心理防線。這不是武力展示，是語言與記憶的處刑，她的中性表情顯示絕對的精算與克制。

**所需原圖資源**：
- 彩的魔法少女形態（作為黑奏容器基礎）
- 帝國廣場的建築參考（扭曲/封鎖成處刑室的變體）
- 記憶投影/全息回放的視覺效果參考（非武器特效）

**生成提示**：
```
Style: Photorealistic with psychological-horror magical elements; courtroom/interrogation atmosphere rather than battle spectacle
Mood: Cold, deliberate cruelty; moral execution rather than physical combat; the horror of memory used as a weapon
Colors: Deep purple-black (#2F0854), violet (#6B2C7D) dominant on Kuroshio; each memory projection carries its own desaturated palette (commodification=sickly gold, betrayal=harsh broadcast-white/red, morning gap=pale dawn grey-blue)
Composition: Kuroshio centered, calm and small; three memory-projection panels arranged in a semi-circle around her like evidence displays; Empire Plaza architecture warping inward to frame the scene as an execution chamber
Lighting: Courtroom-like directional light on Kuroshio; each projection self-lit like a screen/hologram
Special effects: Translucent memory-projection panels with slight chromatic aberration/static at the edges (representing recollection, not destruction); no gravitational lensing, no energy tendrils, no reality fractures
Canvas: 3:4 portrait or 16:9 widescreen
```


---

## 圖114：「彩奪回身體」（彩 / Aya Regains Control）

**建議輸出文件名**：`ConceptArt_Scene_114_Aya_BodyReclaim.png`

### 劇情背景

114年5月 Act III Phase J，帝國廣場決戰。自 79 年螢死亡起，彩的主人格就被黑奏封禁在心房最深層，以通風管道那夜永恆停留的空間形式存在（aya.md §被囚禁的孩子）。黑奏啟動情緒結算儀式，強制連結所有人類神經，緋潮反噬正要撕裂天空——正是彩長年積蓄的全部意志破繭而出的時刻（aya.md §覺醒與犧牲）。SPEC#3 三武器揭露（黑奏全力）是此場景的直接前置：黑奏已傾盡一切，但這反而令彩的意識看到了縫隙。彩沒有說話，只是抬起手，以靈魂燃燒填補天空裂痕——不是贖罪，不是英雄式結局，只是「這是我自己選擇的」的最終表達，通往 SPEC#52 靈魂解放之光。

### 圖片說明

彩從六歲起就被困在自己身體的最深處，只能隔著一道透明的牆看著另一個意識用她的臉、她的聲音做著各種事。這一刻，她積累了數十年的全部意志衝破了那道牆，奪回了屬於她自己的身體。她沒有說任何英雄台詞，只是抬起手，讓自己的靈魂燃燒起來，因為這是她這一生第一次真正屬於自己的選擇。

**Reference Images**：
- 彩（第二形態）：`ConceptArt_Aya_MagicalGirl_2.png`

**Creative Enhancements**：
- Show moment of internal rebellion: Aya's consciousness rupturing through Kuroshio's control
- Body transformation: neural corruption patterns BREAKING as golden light floods internally
- Include heterochromatic eye flashing as control switches
- Sky visible TEARING OPEN (reality being rewritten)
- Final sacrifice visual: golden light burning through her form to seal the sky

**簡化核心描述**：
彩從黑奏的掌控中奪回身體，內部綻放金色光芒，瞳孔恢復正常。她用最後的力量燃燒自己，金色的光輝填補天空的裂痕，完成最終的犧牲與救贖。

**所需原圖資源**：
- 彩的魔法少女形態（健康與被控制的對比）
- 光芒破裂、身體發光的視覺參考

**生成提示**：
```
Style: Explosive moment; golden light; transcendence through sacrifice
Mood: Rebellion; redemption; the final choice to burn oneself
Colors: Deep purple (Kuroshio's control) BREAKING to golden yellow (#FFD700); white light
Composition: Central figure; light exploding outward; sky above showing tears
Lighting: Golden internal glow overpowering external corruption
Special effects: Light shattering effect; neural network corruption breaking apart
Canvas: 3:4 portrait with sky visible above
```


---

## 圖115：「糖果山犧牲」（朱音 / Candy Mountain Sacrifice）

**建議輸出文件名**：`ConceptArt_Scene_115_Akane_CandyMountain.png`
**依據版本**：`ACT_III_OUTLINE.md` E-III-I3（CDL-218）；`DIGEST_LOCATIONS.md` §1/§13（2026-07-17 修正地點，見 `CHANGE_LIST_EXISTING_SPEC.md` 圖115項）

### 劇情背景

`[LOCATION_REVISED]` 原稿地點「嘆息之橋」有誤——依 `DIGEST_LOCATIONS.md` §13，「嘆息之橋」係 Act III 雙重代價事件（操+紫音雙殺）嘅**隱喻總稱**，唔係實體橋樑。紫音 Day14 犧牲場景嘅實際物理地點是**帝國廣場**（主角團冒死進入刑場救援）；糖果山是帝國廣場刑場內因紫音過載而形成嘅結晶化地標，非獨立橋樑場景。

114年5月 Act III Phase I Day 14，**帝國廣場**。Day 13 操化為人偶牆犧牲後，帝國以公開廣播宣佈紫音（方曉彤）為清剿目標（CDL-217，公告夜）——那是一夜靜止的死刑等待感。Day 14，主角團冒死進入帝國廣場刑場救援，紫音見證自己被無條件拯救後主動過載——在雙重代價的重壓下（弟弟誤食結晶的罪惡感、守護小光這個「弟弟替代」的最後執念），選擇讓心之器燃盡（akane.md §魔法即病症）。她的身體在能量爆發中化為糖晶，在帝國廣場刑場內形成永久的糖果山地標，成為 Act IV 新世界的一部分。遺言「我唔想再一個人食飯」；小光的安全是她能以「我終於用力量做了一件對的事」作結的唯一支撐點。

### 圖片說明

朱音背負著弟弟因為她的錯而死去的罪惡感，又在眼前再次失去了她當成弟弟般守護的小光。在帝國廣場刑場，她見證主角團冒死趕來救她，此刻她選擇燃盡自己最後的魔法力量，讓身體在爆發的能量中化為永久的糖晶地標——不是因為她想死，而是因為她終於找到了一件「用自己的力量做對的事」，可以帶著這個心情離開了。她的犧牲在帝國廣場刑場永遠留下一座糖果山，成為這座城市的一部分。

**Reference Images**：
- 朱音（過載前）：`ConceptArt_Akane_MagicalGirl.png`

**Creative Enhancements**：
- Show Akane at moment of overload transformation
- Body beginning to crystalize/harden into candy-like material
- Energy explosion creating candy mountain terrain beneath her
- Hikari's safety visible at cost of Akane's self-destruction
- Color transition: warm human pink CRYSTALLIZING into brittle candy amber
- Background: Empire Plaza execution ground becoming candy landmark (black+gold imperial architecture, NOT a bridge)

**簡化核心描述**：
朱音過載變身，身體在能量爆發中化為糖晶硬殼，壯麗而悲劇地成為帝國廣場刑場內的糖果山紀念碑。這是她為了保護小光而付出的最終代價。

**所需原圖資源**：
- 朱音的過載變身形態
- 結晶化/糖果化的視覺轉變參考
- 帝國廣場（黑金主色調、皇家刑場）的環境背景

**生成提示**：
```
Style: Explosive transformation; crystallization effect; tragic monument
Mood: Sacrifice; overload; the price of love; beautiful ending
Colors: Warm pink transitioning to amber, honey, and translucent candy gold against Empire Plaza's black-and-gold palette; warm sunlight breaking through imperial gloom
Composition: Figure at center; energy explosion creating mountain shape; Empire Plaza execution ground architecture visible in background
Lighting: Golden sunlight catching crystalline surfaces; backlit glow
Special effects: Crystallization spreading effect; energy particles; light refraction through crystal
Canvas: 3:4 portrait or widescreen to show landscape
```


---

## 圖116：「帝國廣場決戰崩塌」（Empire Plaza Collapse）

**建議輸出文件名**：`ConceptArt_Scene_116_EmpirePlaza_Collapse.png`

### 劇情背景

`[WRONG，已修正]` 原文「黑奏在場中開始三武器揭露（CDL-266）」概念錯誤，已依圖113審計結果同步修正——canon 設計係「三重道德處刑」（語言/回憶攻擊：武器②社會剝奪→武器①身份背叛→武器③創世原罪），唔係物理力量展示，詳見圖113條目。帝國廣場決戰係 Act III Day 14 的核心事件（CDL-217/218）。紫音在此被帝國以「終極變異體」名義公開處刑（CDL-216），晴香與美夜子殺入刑場救援——卻在紫音自爆化為糖果山犧牲之後，面對比想象中更龐大的崩塌：黑奏在場中對晴香展開三重道德處刑（CDL-266，見圖113），帝國廣場的「決戰」轉為對晴香的精神審判。場景崩塌係緋潮裂縫具現（CDL-289 因果閉環開始運行）、亦是晴香「偽王道覺醒」被徹底摧毀（CDL-199）的視覺表達。連失操（Day 13，學校瓦礫人偶牆，見圖112）與紫音（Day 14，帝國廣場糖果山，見圖115）的極端悲痛、黑奏攤牌的道德處刑，令決戰假象在頂點瞬間碎裂。此刻「彩/黑奏同一人」尚未由彩本人奪回控制（彩奪回身體屬後續 E-III-J8，見圖114），本場景中執行處刑嘅係黑奏操控下嘅身體，非彩本人清醒狀態。

### 圖片說明

兩天之內晴香連續失去了隊友，帶著這份極端悲痛衝進帝國廣場的她以為迎來了最終決戰，卻發現眼前的「勝利」是一場謊言——廣場在她們腳下崩塌，建築扭曲，市民凝滯，黑奏透過回憶投影逐層攤開了一切底牌。真正的戰鬥從來不是她以為的那樣，而這個認識，比任何物理打擊都要致命。

**Reference Images**：
- 彩（第一形態／被控制形態）：`ConceptArt_Aya_MagicalGirl_1.png`（本場景彩仍未奪回身體控制權，唔應使用「第二形態／真身覺醒後」；如需呈現黑奏操控者面貌，另見黑奏相關 reference，`ConceptArt_Kurokane_Emperor.png` 為 `UNVERIFIED`）

**簡化描述**（150-200字）：
帝國廣場決戰頂點瞬間崩塌——偽勝利的假象碎裂，色彩消失，寂靜地震。黑奏對晴香展開三重道德處刑（回憶/真相投影，非物理武器），晴香隊伍發現真正的敵人不是想像的那樣，世界的邏輯完全改變。建築扭曲，市民凝滯。

**生成提示**：
```
Style: Apocalyptic urban collapse; moment of revelation
Mood: False victory shattering; reality breaking; cosmic dread
Colors: Color draining from landscape; blacks, grays, impossible neon
Composition: Massive plaza; buildings distorting; figures small against chaos
Lighting: Contradictory light sources; none dominant
Special effects: Reality fractures; architectural distortion; particle effects
Canvas: Widescreen to show epic scale
```


---

## 圖117：「黑奏的帝國寶座」（Kuroshio's Empire Throne）[BEAT_SHEET_PREP]

**建議輸出文件名**：`ConceptArt_Scene_117_BlackSong_EmpireThrone.png`
**依據版本**：`aya.md` §篡位——從保護者到獨裁者（CDL-076/305）（2026-07-17 審計修正，見 CHANGE_LIST_EXISTING_SPEC.md 圖117項）

### 劇情背景

`[WRONG→已修正]` 原文引用「CDL-198」作為篡位依據，但 CDL-198 實際內容係「黑奏動機揭示兩步設計（Act II/Act III 兩階段揭露節奏）」，同「弒殺養父篡位」呢個具體事件無關，屬張冠李戴誤植（本文件速查表同一行反而正確引用咗 CDL-076，證明本段內文同速查表曾分開編輯冇同步核對）。正確依據：黑奏弒殺養父帝國皇帝並篡位事件見 `aya.md` §篡位——從保護者到獨裁者，篡位動機根源見 CDL-076（螢死亡當夜6歲彩人格分裂誕生黑奏）；篡位事件本身另見 `04_timeline_canon.md#event-kurokana-usurp`。

黑奏在弒殺養父帝國皇帝後篡位，以彩的身體坐上帝國最高權位。然而真正的黑奏是148cm的幼童身軀——巨大皇袍和全覆蓋面具的設計，正是為了讓帝國的臣民以為皇帝是一個高大威嚴的統治者，而非一個被創傷囚禁在6歲的孩子。坐在王座上時，她的雙腳根本碰不到地，必須單手托腮讓另一隻手在袖中摸螢的熊公仔耳朵——「保護者變獨裁者」這個弧光的荒誕與哀傷，在這個細節中得到最完整的具現。她在此發號施令推動情緒結算儀式三階段計劃，卻始終坐在一個遠大於她身體的寶座上：她掌控著一切，卻從未擁有任何東西。

### 圖片說明

黑奏是帝國的最高統治者，但她真實的身體是一個不足一百五十公分的幼童——她坐在遠超自身體型的巨大紫黑色王座上，雙腳懸空碰不到地，一隻手藏在袖中悄悄觸摸一隻舊熊公仔的耳朵。掌控整個帝國的那個人，始終是一個被創傷困住的孩子，建立國家規模的力量只為了追尋一個已不再存在的人。

**Reference Images**：
- 黑奏：`ConceptArt_Kurosou_CasualWear.png`

**簡化核心描述**：
黑奏以幼女身軀坐在巨大紫黑色寶座上，寶座由現實碎片與絕望凝聚而成。她的身體散發著三種力量的光線，周圍帝國建築在她意念下扭曲。

**所需資源**：黑奏的形態，帝國建築視覺


---

## 圖118：「集體潛意識的淤泥深海」（Collective Unconscious Muddy Deep）[BEAT_SHEET_PREP]

**建議輸出文件名**：`ConceptArt_Scene_118_CollectiveUnconscious_MuddyDeep.png`
**依據版本**：`02_glossary.md` §term-collective-unconscious（CF-T13三層結構）；`DIGEST_LOCATIONS.md` §16（2026-07-17 審計修正，見 CHANGE_LIST_EXISTING_SPEC.md 圖118項）

### 劇情背景

`[WRONG→已修正]` 集體潛意識在此故事中是一個可物理進入的超現實空間，三層結構正確依據為 `02_glossary.md` §term-collective-unconscious（CF-T13），非原文引用嘅「CDL-053」（CDL-053 實際內容係「Beta修正機制＝絕境許願先觸發覺醒」，同集體潛意識三層結構無關，屬張冠李戴誤植）：**L1回聲層**（表層情緒殘留，做夢即入）／**L2留存海**（沉澱記憶存檔，魔法少女可達）／**L3冥河**（未處理哀傷終點，市井稱「陰渠水/苦水井」，僅晴香/黑奏/夕等最深潛者可達）。

`[WRONG→已修正]` 原文將本場景嘅觸發歸因為「E-11」，但依已於圖64/圖65 審計確認結論，E-11（113年9-10月，Act II Phase D）對應嘅係集體潛意識**過渡狀態**（後巷唐樓向內剝落，接通星空——`DIGEST_LOCATIONS.md` §16「過渡狀態」），屬 L1/表層事件，並非本場景描繪嘅 L2/L3「淤泥深海」最深層——兩者深度層級不同，唔應共用同一觸發點。淤泥深海嘅具體觸發時機 canon 未落實，標 `[NEEDS_FACT]`；較合理嘅推斷方向係晴香掌握「陰影視覺雙層感知」（H-S6，CDL-268，Act III後段–Act IV）之後嘅深潛能力，但呢個推斷本身亦未經作者確認。

無數市民長期受情緒農場機制剝削後，被 Emo-Visor 抽走的情緒廢料沉積在集體潛意識最深層，形成濃稠的創傷淤泥。每一張浮現的臉都是一個在現實中被麻木的個體靈魂的最後掙扎。這個場景是後段晴香選擇以自身成為世界情緒濾網（「三位一體永恆守護者」，CDL-326，見圖135/圖137 2026-07-17跨批次覆核修正）的前置必要理解——她需要先看見最深的黑暗，才能理解自己要承擔什麼。

### 圖片說明

這是城市集體潛意識空間的最深層：長年被帝國情緒收割制度剝奪情感的市民，其靈魂廢料在此沉積成濃稠的黑色淤泥，無數扭曲的臉孔從深處浮現，每一張都是一個在現實中被麻木的靈魂最後的掙扎。視角緩緩沉入無底深海，光線越來越稀薄，整個城市最深的集體痛苦在此凝聚成可以觸碰的重量。

**Reference Images**：
- `[NO_REF]`（無名者（集體潛意識深層扭曲臉孔），無具名角色）

**簡化核心描述**：
視角從人臉浮面逐漸下沉到無底深海，淤泥中無數個扭曲的臉孔與身體糾纏。越向下，光線越稀薄，絕望感越濃。這是集體創傷的最深處。

**所需資源**：集體潛意識環境設計，身體與臉孔視覺


---

## 圖119：「朔的雙刃生存」（Saku's Double-Edged Survival）[BEAT_SHEET_PREP]

**建議輸出文件名**：`ConceptArt_Scene_119_Saku_DoubleEdgedSurvival.png`

### 劇情背景

`[修正]` 為了接近 Unit 01（美夜子）的真相，朔加入情緒管理局成為雙面特工——白天以純白西裝的冷酷特工身份執行清剿屍骸任務，夜晚以綠松石獵裝在夜區巡邏並暗中收集情報（CDL-255）。**注意**：原文引用嘅 CDL-025 已於圖77/85審計確認屬完全錯誤嘅「Act I校霸身份」設定殘留，同朔嘅日夜雙重身份無關，已移除。依 `saku.md` 視覺演變表，兩套形態嘅正式融合（日側制服+夜側綠松石飾品同時呈現）發生喺 **Act III（SA-S3）**——「保護的殘響」理念徹底覺醒、解放者身份確立之時；Act IV（SA-S4）則係另一個唔同嘅視覺狀態：「放棄制服，穿回夜區傳統服飾——回歸真實自我」，唔再係日夜合體嘅交界形象。呢種雙重生活喺 Act III 達到臨界，因為兩個身份的要求越來越直接衝突：白天的「清除任務」要求他以屍骸為敵，夜晚的「保護殘響」覺醒卻讓他明白屍骸是需要被解放的靈魂。日夜交界場景是他最誠實的存在狀態——在沒有制服偽裝的瞬間，兩個身份並存而相互撕裂。此為 Act III 融合形態，Act IV 朔的終局為另一獨立視覺（見內文修正）。

### 圖片說明

朔長期以雙重身份生存——白天是冷酷的帝國特工，夜晚是在暗中保護弱者的獵人，兩個身份的要求越來越直接衝突，讓她在日夜交界的瞬間感受到最真實的撕裂。這個場景是她最誠實的存在狀態，日側制服與夜側獵裝同時呈現，眼神中透著長年生存於矛盾之間所積累的重量。

**Reference Images**：
- 朔：`ConceptArt_Saku_CasualWear.png`

**簡化核心描述**：
朔同時現身於日區與夜區的交界，兩個身份的合體。日側穿著完美特務服，夜側配備狩獵工具，交界線上她的眼神透著生存的代價。

**所需資源**：朔的雙重形態，日夜交界視覺


---

## 圖120：「彩在心房中摸熊公仔」（Aya Touches the Teddy Bear in Her Heart Chamber）[ACT_III]

**建議輸出文件名**：`ConceptArt_Scene_120_Aya_TeddyBear_HeartChamber.png`

### 劇情背景

帝國歷114年，Act III貫穿。黑奏長期使用彩（葉語彩）的身體作容器，彩被困在身體最深處的心房空間。**〔已修正〕**依 `aya.md` §被囚禁的孩子：彩的心房被黑奏重構為「一個永遠停留在通風管道那夜的空間——黑暗、狹窄、充滿螢的血腥氣味」，即她 6 歲時螢犧牲當晚的通風管道本身，唔係泛用嘅「通風管道+廢棄地下室混合」空間，亦冇canon支持嘅苔蘚/情緒結晶生長描述（已標`[INFERRED]`）。外面的世界在Act III的所有事件中繼續發生，彩什麼都看得見但什麼都觸摸不到。在這個等待中，她的懷裡有螢的遺物——那隻殘舊熊公仔，係彩與黑奏共享的契約信物（心匣條目），她用手指輕輕觸摸它的一隻耳朵，像在確認它存在，或者問它問題。那個安靜的等待，是她對Act III最後時刻（SPEC#8彩奪回身體）的全部準備。

### 圖片說明

帝國歷114年，黑奏長期使用彩的身體作容器，彩被困在身體最深處——一個被黑奏重構為永遠停留在「通風管道那夜」的空間，黑暗、狹窄。她 6 歲的身體蜷縮在牆角，懷裡緊抱著螢的遺物熊公仔（永遠潔淨如新，不見任何使用痕跡——這是熊被精心以魔法維護的神器嘅視覺線索），用手指輕輕觸摸它的一隻耳朵，像是確認它存在，或者問它問題。外面的世界繼續發生，彩什麼都看得見但什麼都觸摸不到。她在等待，她知道要等，她不知道要等多久。

**劇情位置**：
- **時間點**：帝國歷114年 Act III，彩被囚禁狀態（貫穿Act III）
- **CDL追蹤**：aya.md §被囚禁的孩子；§螢的遺物——殘舊熊公仔；CDL-076
- **前置事件**：黑奏長期使用彩的身體作容器，彩被困在心房（通風管道那夜的重構空間），Act III所有事件在外面進行
- **本場景功能**：展示彩的囚禁狀態、她在等待中的堅持，以及熊公仔這個螢的遺物所帶來的奇特溫度——她的懷裡有螢，她在觸摸它。
- **後續payoff**：SPEC#8彩奪回身體（她一直在等待，這一刻是等待的具象化）；候選B通風管道那夜（螢的犧牲）場景的主題呼應

**Reference Images**：
- 彩：**已修正**——原文引用 `ConceptArt_Aya_MagicalGirl_1.png`（學生偽裝/被控制形態），但本場景是彩 6 歲真身在心房被囚狀態，並非「彩」偽裝形態，用學生偽裝reference屬形態混淆。改為 `[NO_REF]`——彩的本源真正形態（惡夢/囚牢）暫無confirmed exists的reference image（`ConceptArt_Aya_TrueForm.png`為`UNVERIFIED`），生成時需另查或參照aya.md§本源變身/真正形態文字描述

**詳細核心描述**（200-350字）：


心房空間：黑暗、狹窄，被黑奏重構為永遠停留在「通風管道那夜」的空間，空氣中隱約殘留著那夜的血腥氣味（象徵性視覺化，非直接畫出血跡）。管壁狹窄壓迫，天花板低。空間本身有一種長期被壓縮、被凍結在同一個創傷時刻的感覺，不是整潔的囚室，是一個被遺忘的、勉強能存在的地方。`[INFERRED]`：具體磚縫苔蘚/情緒結晶生長細節canon未有直接支持，如需要視覺豐富度可保留但應知悉為演繹而非confirmed事實。

彩（葉語彩，**6歲**外表，小小的身體——原文誤植「7歲」已修正，canon明確「6歲起被困」）蜷縮在牆角。她坐在地上，膝蓋靠近胸口，懷裡抱著螢的遺物熊公仔——**〔已修正〕**：依「永遠潔淨」動態規則，熊公仔絨毛永遠保持完全潔淨，沒有污漬、沒有壓痕、沒有任何歲月磨損痕跡（原文「顏色因歲月褪色、耳朵歪了」直接違反此規則，已移除）；寒酸外表下藏著頂級深紅絲絨、真寶石眼睛、金線縫線——愛的真實形態不在表面，在縫線裏。

她的手指正在輕輕觸摸熊公仔的一隻耳朵。不是擁抱，是輕觸。像是確認它存在，或者在問它問題。她的表情沒有哭，沒有恐懼，是一種非常小的孩子才有的、安靜的等待——她在等，她知道要等，她不知道要等多久。

畫面的右側或後方`[INFERRED]`：半透明心房壁透出外面模糊光影嘅設計canon未直接支持，屬合理演繹而非confirmed視覺規格，可保留作構圖手法但生成時不應視為既定事實。

整體：小小的 6 歲彩，永遠潔淨的螢的遺物熊公仔，通風管道那夜的凍結空間。


**生成提示（Midjourney）**：
```
Style: dark magical girl anime, claustrophobic surreal interior, muted emotional palette
Mood: quiet endurance, isolated waiting, small warmth in constriction
Colors: dark cramped ventilation shaft tones, deep shadow, muted greys, pristine dark red velvet teddy bear with gold thread stitching and gem eyes standing out immaculate against the grime
Composition: small child figure curled in lower left corner hugging a pristine, clearly well-preserved teddy bear, narrow ventilation-shaft-like walls, low ceiling, claustrophobic framing
Lighting: no direct source, ambient dim light, oppressive darkness with minimal relief
Special effects: none — the bear's untouched pristine condition against the decayed space is the key visual contrast, no membrane wall or crystal glow (unconfirmed embellishment removed)
Character: small girl approximately 6 years old, dark simple dress, hugging an immaculately clean dark red velvet teddy bear with gold stitching and gem eyes, fingertips touching bear's ear, calm enduring expression
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
anime small 6-year-old girl child in dark cramped ventilation-shaft-like space, hugging a pristine immaculate dark red velvet teddy bear with gold stitching, no dirt or wear on the bear, quiet isolated mood, muted dark grey palette
--ar 9:16 --niji 6
```


---

## 圖121：「夕的臨別頓悟與消散」（Yu's Final Epiphany and Dissolution）⭐⭐⭐⭐⭐ [ACT_III_IV_BOUNDARY]

**建議輸出文件名**：`ConceptArt_Scene_121_Yu_FinalEpiphany_Dissolution.png`

### 劇情背景

Act III/IV 交界，夕整合前的最後時刻。這是 P-E03 保護者自解植入的最終交付場景（yu.md §第四幕，CDL-066 個體化完成）。夕在完全消散前，以「臨別頓悟」形式點出「保護者人格依附主人格存在前提」的心理學原理，並以間接方式暗示黑奏——對白方向：「無論係我……定係『佢』」（具體 wording 留待 Beat Sheet；此為 Outline 層方向確認）。視覺意義：夕在此從「5歲的被囚禁陰影」開始向消散形態過渡——身體邊緣開始像墨水入水一樣向外擴散，但表情是有史以來最接近平靜的。這是全片 payoff 樞紐：夕 = 觀眾的機制教學；黑奏消散 = 教學的終極 payoff。CDL-070 膠布哲學第二層收尾：晴香在這裡放下了最後一塊膠布（與圖32的膠布呼應），把手貼向夕，夕的手在接觸的瞬間開始消散。

### 圖片說明

夕的身體邊緣已經開始消失了——像墨水在水中散開，像煙被風吹散。她站在晴香面前，比任何時候都更像五歲的孩子，但眼神裡有一種孩子本不該有的古老和沉靜。晴香伸出手，這一次夕沒有迴避。她們的手指碰上的瞬間，夕繼續消散。最後的光從她的指尖一直往上蔓延，像是一朵緩慢開放的黑色花。地板上有一塊膠布，是晴香剛剛放下的。

### 劇情位置

**時間點**：Act III/IV 交界（整合完成後，夕消散前最後時刻）
**CDL 追蹤**：CDL-066（榮格個體化完成）、CDL-069（整合方式 D 型最終確認）、CDL-070（膠布哲學第二層收尾）、yu.md §第四幕、CROSS_ACT_FORESHADOW_MANIFEST P-E03（保護者自解植入）
**前置 → 本場景 → Payoff**：SPEC#2 整合場景（碰撞與道歉）→ 夕的臨別頓悟，以間接方式暗示黑奏的消散機制 → 黑奏在彩選擇自己承擔痛苦後自行瓦解（P-E03 教學 payoff 完成）

### 詳細核心描述（200-300字）

場景：集體潛意識的某個邊界空間，或是實體世界的某個安靜角落——決戰的喧囂已遠去，這裡只剩兩個人。空間本身是過渡態：地板是真實的，但天花板已向上延伸進星空。光是那種「黎明前最後一刻的深藍」。

夕（消散形態）：5歲外形，但身體邊緣開始向外擴散——從腳趾開始，墨色的微粒輕輕脫離身體，像羽毛落水的慢動作。她的頭髮和裙擺已有部分變成了漂浮的黑色碎光。但她的臉是清醒的、平靜的，眼神直視晴香。

晴香：右手伸向夕，掌心朝上——與圖32中那個動作幾乎完全相同，但這一次她沒有猶豫。左手旁邊的地板上有一塊膠布，剛剛被放下（皺褶清晰，還帶著體溫的形狀）。

關鍵瞬間：夕的手指與晴香的掌心接觸的那一刻，消散加速——指尖的墨色光點向四面八方漂散，像一朵緩慢盛開的黑色星雲。夕的表情在消散的瞬間有一個微小的變化：從平靜變成了接近微笑的東西。

構圖：垂直畫面，夕在下方（較小）仰視晴香，晴香在上方（較大）俯視夕，但兩人的眼神對等，沒有從屬感。地板上的膠布在構圖最下方，作為視覺收尾。

### Midjourney 標準版

```
A teenage girl (Haruka, pink wolf-cut hair, torn magical girl outfit) kneeling or bending
forward, right palm extended toward a small dissolving figure of a 5-year-old child (Yu)
in a black pinafore dress, barefoot. The child's body is dissolving from feet upward —
dark ink-like particles drifting softly outward into the air like smoke in reverse,
fingertips becoming scattered black light-points. Child's face: ancient calm, hint of
a smile forming as she fades. Their fingertips just touching — the moment of contact
accelerating the dissolution. On the floor between them: a single small bandage (just
released), wrinkled, still warm-looking. Background: transitional space, real floor
dissolving into deep blue pre-dawn starfield ceiling. Black particle bloom radiating
from their joined hands. Slow, tender, inevitable. Painterly anime style, vertical
composition, emotional weight of farewell without grief.
```

**視覺重點**：
- 夕從腳趾向上消散的墨色微粒（慢動作離散感）
- 手指接觸瞬間消散加速（黑色星雲盛開效果）
- 地板上剛放下的膠布（圖32膠布哲學的閉環回收）
- 夕表情從平靜到接近微笑的微小變化（臨別頓悟的具現）
- 深藍前黎明光色 + 地板向星空的過渡空間

**Reference Images**：
- 夕：`ConceptArt_Yu_CasualWear.png`
- 晴香：`ConceptArt_Haruka_CasualWear.png`
- 黑奏：`ConceptArt_Kurosou_CasualWear.png`



---

## 圖122：「媽媽從未停止愛我」（Mother Never Stopped Loving Me）[ACT_III] `[DELETE_CANDIDATE — 2026-07-17跨批次覆核，與圖110重複]`

**建議輸出文件名**：`ConceptArt_Scene_122_MisaoMotherFragment.png`

### 劇情背景

`[跨批次覆核結論 2026-07-17]` 本場景與**圖110「操在集體潛意識尋見母親碎片」為同一個 beat**——相同事件（CDL-300 母親靈魂碎片重逢）、相同時間點（114年5月，Day 13 鋼鐵獨舞前夕）、相同地點（集體潛意識 L2 留存海）、相同核心內容（碎片聚攏成「幾乎是媽媽」的近似人形、眼神帶著改造肉身永遠傳遞不到的真實的愛與哀傷、操沒有崩潰只是確認自己從未被遺棄）。兩者文字演繹幾乎完全一致，屬於「重複場景」而非互補內容。

關鍵差異：本場景嘅 CDL 追蹤仍標「CDL-300·暫定」，但 `ayakomoji_misao.md` §集體潛意識母親靈魂碎片重逢及 `CANON_DECISION_LOG.md` 顯示 CDL-300 已於後續 co-design 正式解決並移除「暫定」標記（見 `SESSION_LEDGER.md`「CDL-300 Q3.1 正式解決」）；圖110已同步更新為正式版CDL-300、並補充咗 Act II E-11「一閃即逝 Plant」→ Act III I1「完整 Payoff」嘅兩步式設計說明（呼應CDL-274美夜子兩步相認手法），本場景（圖122）未反映呢個較完整嘅設計脈絡，屬版本較舊嘅重複條目。

**處理方式**：本場景標記 `DELETE_CANDIDATE` 並停用，保留圖110作為此beat嘅唯一版本（圖110已核實準確、CDL-300已確認、並包含完整Plant/Payoff設計）。本條目原文細節已移除，僅保留標題供追溯用途。同批次曾懷疑嘅圖111「我選擇停留在我想停留的位置」**經核實並非重複**——圖111描繪嘅係 Day 13 前夜操對紗夜嘅口頭態度宣言（CDL-298，紗夜物理在場），同圖110/122嘅集體潛意識無聲碎片重逢（CDL-300）係兩個獨立嘅前後beat，予以排除。

**Reference Images**：
- 操：`ConceptArt_Misao_CasualWear.png`



---

## 圖123：「糖果山與最後一頓飯」（Candy Mountain and the Last Meal）[ACT_III]

**建議輸出文件名**：`ConceptArt_Scene_123_ShionLastWords.png`

### 劇情背景

帝國廣場終局日（Day 14），紫音以垃圾鎧甲和生鏽電鋸回到隊伍，觸發過載變身加上吞下過期糖果毒素自爆，將自己燃燒成一座巨大糖果山護盾，保護隊友撤退。在那一刻，她對著美夜子說出最後一句遺言——「我唔想再一個人食飯」（iwakura_akane.md §第四幕；miyako.md §Relationships；CDL-217/218）。這是美夜子作為介錯人身份的最重要一幕：她見證並承接了紫音的最後意志，送行而不是放棄，完成了「介錯人→送行者」弧光中最沉重的一個瞬間。Day 13 操鋼鐵獨舞之後，Day 14 紫音帝國廣場犧牲——兩人連續錯位雙殺，美夜子是唯一見證者。

### 圖片說明

帝國廣場的廢墟煙塵中，紫音身穿垃圾拼湊的鎧甲，正在燃燒成形態越來越龐大的糖果山；她的身體已與燃燒的糖果光融為一體，但表情清醒，帶著一種終於放下的輕鬆感。美夜子站在她面前，是唯一沒有逃跑的人，雙眼直視著紫音消散的臉，神情壓抑、沉默、帶著已知結局的克制。紫音嘴唇動了——那是整個故事裡最簡單也最沉的一句話。

### 劇情位置

**時間點**：帝國歷114年5月，Day 14 帝國廣場終局
**CDL 追蹤**：CDL-217；CDL-218；CDL-229（小光之死根源）；CDL-236（糖果山形態）
**前置 → 本場景 → Payoff**：Day 13 操鋼鐵獨舞犧牲 → 紫音帝國廣場自爆護隊 → 美夜子成為連續雙殺唯一見證者，完成「介錯人→送行者」最重的一擊

### 詳細核心描述（220字）

帝國廣場。爆炸的塵埃和糖果燃燒的甜膩氣味混在空氣裡。

紫音的身體已開始燃燒——不是普通的火，而是帶著青藍鬼火漸變的糖果光，從她的雙腳往上蔓延，每一道光紋都對應著她鎧甲上的垃圾碎片融化後的形狀。她的身型在膨脹，正在成為那座巨大的糖果山護盾。

但她的臉是清醒的。

美夜子沒有逃。她站在距離紫音只有幾步之遠的位置，身體沒有防禦的姿態，雙眼直視著那張正在消散的臉。她的表情不是哭泣——是介錯人接受既成事實的靜默，是送行者深呼吸後的壓抑，是知道「留下來比逃跑更難」的人才有的臉。

紫音嘴唇動了一下。音量很小，幾乎被爆炸的餘震蓋過。

「我唔想再一個人食飯。」

美夜子閉上眼睛一秒。然後重新睜開，把這句話記住。

糖果山在她身後展開，把帝國廣場的威脅全部擋住。

### Midjourney 標準版

```
Style: Dark magical girl climax; painterly illustration; intimate farewell within catastrophe
Mood: The farewell that isn't dramatic — quiet, inevitable, witnessed; sacrifice as the simplest human desire finally spoken aloud
Colors: Candy-flame gradient (blue-violet candy glow eating warm amber) rising from Shion's dissolving body; Miyako's dark silhouette standing still against expanding candy mountain; ash grey plaza background
Composition: Foreground — Miyako facing camera, expression controlled grief; mid-ground — Shion's burning figure with candy-light expanding outward like a shield; composition showing Miyako as the only witness who stayed
Lighting: Candy-mountain fire as primary light source, warm-cold candy spectrum casting against Miyako's still face; debris dust catching the glow
Special effects: Candy shards crystallizing and expanding into massive shield formation; Shion's form dissolving into the candy light gradient; scrap armor pieces fusing with burning candy lattice
Character (Shion): Body mid-transformation into candy mountain shield; face still recognizably human and clear-eyed with expression of release; lips parting for last words
Character (Miyako): Standing still, not fleeing; eyes direct; expression controlled grief of someone who knew and stayed anyway
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

**視覺重點**：
- 紫音的臉在消散前仍然清醒，不是恐懼而是放下
- 美夜子是唯一沒有逃跑的人，這個「留下」比任何行動都更重
- 糖果山的光是暖冷混合的——甜蜜與毒素、保護與自毀的視覺統一
- 美夜子的臉是送行者的臉，不是崩潰的臉——介錯人懂得如何在場
- 背景的帝國廣場廢墟暗示Day 13操犧牲之後的連續性

**Reference Images**：
- 美夜子：`ConceptArt_Miyako_CasualWear.png`
- 操：`ConceptArt_Misao_CasualWear.png`
- 紫音：`ConceptArt_Akane_MagicalGirl.png`（原檔為CasualWear，本場景係紫音過載燃燒化為糖果山嘅魔法犧牲情境，同圖115同一事件，改用MagicalGirl更貼合並與該圖一致）



---

## 圖124：「彩的永恆輪迴開始」（Aya's Eternal Loop Begins）[ACT_III_IV] ⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_124_124.png`

### 劇情背景

帝國歷114年5月，Act III決戰結束後，彩燃燒靈魂填補天空裂縫之後的瞬間（aya.md §永恆輪迴；CDL-076；CDL-248）。彩的靈魂沒有消散——它被集體潛意識捕獲，轉入永恆輪迴的起點。她回到了6歲那一晚的通風管道，但這次不同：她沒有在哭，她沒有在換氣過度。她選擇了留在這裡，在每一個時間線中守護那個6歲的自己，讓那個孩子學會面對恐懼，讓黑奏不必再誕生。這不是懲罰，這是她選擇的答案——痛苦可以承受，但不應再外判給另一個自己。

### 圖片說明

在集體潛意識的某個深處，彩以她最真實的樣子站在一個不斷重複的空間門口——那就是通風管道的入口，永恆輪迴的起點。她的靈魂以半透明的金色光芒形式存在，身後的帝國廣場、天空裂縫、燃燒的光已經遠去。她面向的是那個通風管道，那個6歲夜晚的入口，她即將再次進入它，但這一次，她是自己走進去的。

**劇情位置**：
- **時間點**：帝國歷114年5月（Act III決戰結束後）
- **CDL 追蹤**：CDL-076（彩靈魂機制）；CDL-248（集體潛意識捕獲）；aya.md §永恆輪迴
- **前置 → 本場景 → Payoff**：彩燃燒靈魂填補天空裂縫（Act III Phase J終局） → 本場景：靈魂被集體潛意識捕獲，永恆輪迴起點 → 每一個時間線中彩守護6歲自己、讓黑奏不必誕生（全作「時間循環」主題的人物具現化）

**Reference Images**：
- 彩（學生偽裝形態）：`ConceptArt_Aya_CasualWear.png`（原檔名 `ConceptArt_Aya_StudentDisguise.png` 不存在，已自動替換為現有檔案）
- 彩（本源形態）：`ConceptArt_Aya_CasualWear.png`（原檔名 `ConceptArt_Aya_TrueForm.png` 不存在，已自動替換為現有檔案）

### 詳細核心描述（260字）

集體潛意識的深層空間，無時間的地方。

彩的靈魂在這裡呈現為半透明的人形，帶著金色的光——不是帝國的金，不是黑奏的皇袍，而是燃燒的、消耗的、一個人用盡自己換來的那種金色。她148cm，幼小的身體，黑色麻花雙辮，深紫色眼睛。她的手裡沒有熊公仔——熊公仔在現實裡留給了她愛的人——她的手是空的，但沒有握成拳頭，只是自然地垂著。

她面對的是一扇門，或者說一個入口——通風管道的入口。黑暗的，狹窄的，能隱約聽到戰爭年代夜區的聲音從裡面傳出來。這是永恆輪迴的起點。她即將走進去，回到79年的那個夜晚，再一次，站在6歲的彩旁邊。

她沒有猶豫。不是因為不痛——因為她決定了。

她身後，集體潛意識的背景是無邊際的深空，帶著舊時的帝國廣場碎片、星辰和緋潮平息後殘留的暗紅光線，都在她身後，像一幅她剛剛離開的世界的最後影像。

她往前一步，走向那個入口。

這個步伐不是英雄主義，不是犧牲——這是一個人選擇用什麼方式繼續存在的選擇，是彩最終版本的答案。

構圖核心：背面構圖，彩的背影面對通風管道入口，身後是整個集體潛意識的宇宙深空，她在構圖中心，既小又確定。

### Midjourney 標準版

```
Style: dark magical girl illustration, cosmic spiritual finale, quiet determination
Mood: not punishment but chosen fate, the beginning of an eternal loop entered willingly, small figure against infinite space
Colors: translucent golden soul-light outlining small girl figure, deep space collective unconscious behind her with fragments of broken imperial plaza and fading crimson tide remnants, dark narrow ventilation shaft entrance before her
Composition: back-view composition, small translucent golden girl facing dark narrow passage entrance in center frame, infinite deep space collective unconscious with star fragments behind her, she stands between the cosmic past and the narrow future
Lighting: soul translucence emitting soft gold from within the figure outline, deep space behind has distant red-gold glow from faded battle aftermath, ventilation entrance ahead is dark
Special effects: translucent soul-body with golden luminous edge, space background shows floating fragments of broken architecture and fading colored light, ventilation entrance ahead is realistic and ordinary in contrast to the cosmic backdrop
Character: very small translucent golden girl from behind, short stature, dark hair in double braids, hands naturally at sides not clenched, posture steady not heroic, facing dark narrow entrance to her eternal choice
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 背面構圖是這張圖的關鍵——我們不看彩的臉，只看她的選擇（走向那個入口）
- 她的身體要很小，入口和背後的宇宙要很大，強調「一個人的選擇在巨大命運前的份量」
- 通風管道的入口要足夠普通和真實，與身後的宇宙深空形成強烈對比——那個起點就是那麼日常，那麼黑暗，那麼狹窄

---


---

# Act III-IV 交界

## 圖125：「夕完全奪取晴香身體」（Yu's Complete Takeover）[ACT_III] ⭐⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_125_YuCompleteTakeover.png`

### 劇情背景

Act III Phase J決戰後，黑奏真相揭露衝擊令晴香精神崩潰。夕趁著晴香意識防線徹底瓦解，完全掌控了晴香的身體——這是夕（菲）從「保護性陰影」變成「不受控的主體」的臨界點。夕企圖以晴香之身強行使用「改變現實」的力量，重置整個世界，消滅所有痛苦（包括所有屍骸，即所有曾經是人的靈魂）。這是直接導致此後20年靈魂風暴的機制前置。（CDL-066 個體化危機；CDL-003 夕Act IV終局設計）

### 圖片說明

晴香的身體站在決戰廢墟中，但裡面的意識不是晴香——眼睛顏色偏移，光芒的質地不對，表情帶著一種晴香從未有過的某種決意和悲涼。黑色的能量從她身體滲出，與晴香本色的粉色光產生撕裂感的混合。這個身體試圖做一件太大的事，而那件事已不在晴香的意識控制之內。

### 劇情位置

**時間點**：帝國歷113年，Act III Phase J決戰後（黑奏真相揭露後；主線接近Act IV前夕）
**CDL 追蹤**：CDL-066（榮格個體化危機：夕完全接管＝Shadow吞噬Persona的極端形態）；CDL-003（夕Act IV終局：改變現實→反悔→undo→消散）；CDL-047（Alpha線記憶積累的最終爆發）；CDL-038（夕妒嫉動機在崩潰臨界的極端化）
**前置 → 本場景 → Payoff**：Phase J黑奏三段揭露（鐵絲網偶遇真相+創世原罪+晴香是她力量來源）→ 晴香精神崩潰（夕完全接管）→ 夕以晴香之身使用「改變現實」重置世界企圖 → 力量過載引爆靈魂風暴（20年靜止搖籃的直接前置）；Act IV夕最終決定（反悔undo消散）

### 詳細核心描述（250字）

帝國歷113年，晚秋。

帝國廣場的廢墟。決戰結束的方式不是晴香想要的那種結束。

黑奏揭露了三件事，任何一件單獨拿出來都足以令人崩潰，三件同時壓來，晴香的意識防線在那一刻徹底瓦解——不是戰鬥傷，是結構性的崩解。

夕進入了空置的地方。

晴香的身體站在廢墟中，但眼睛不對。瞳色偏移了，那是晴香粉色系混入了某種更深的冷色，那種混合在現實中不應該存在。表情也不對——有一種晴香從未有過的東西，那是夕才有的那種悲涼和決意，是一個在黑暗中獨自承受了十一年的存在才有的表情。

我知道怎麼解決這一切。

夕以這個身體，企圖把「改變現實」推到它的極限——消滅所有痛苦，連同痛苦的容器一起消滅。所有屍骸，所有困在情緒裡的靈魂，連帶整個Beta線世界的構造，全部歸零。

那件事太大了。這個身體承受不了那件事的重量。

黑色的能量從她皮膚往外滲，與身體原有的粉色光產生不相容的撕裂感，廢墟的地面開始從她腳下往外碎裂，空氣中出現了緋潮來臨前的那種顏色。

### Midjourney 標準版

```
Dark anime. Act III finale, imperial plaza ruins, late autumn night. Haruka's body standing in rubble — but it's not Haruka inside. Eyes shifted: her characteristic warm pink irises overtaken by cold deep-water blue-black, an unnatural hybrid that should not exist. Expression alien on her face: not Haruka's performed warmth or real vulnerability — instead a grief-heavy determination that belongs to someone who endured alone in darkness for eleven years. Black energy seeping from skin, incompatible with her body's existing pink-gold light, creating visible tearing where they meet. Ground cracking outward from her feet. Air taking on the color preceding scarlet tide. Haruka's clothes partially torn from battle, now surrounded by energy she didn't choose to release. The body attempting something too large for it. Colors: cold night blue-black, fragments of warm pink/gold struggling against the dark, rubble grey, crimson tide red beginning at edges. Emotional tone: a shadow finally taking the wheel, not from cruelty but from despair — the worst kind of decision made by someone who has been waiting too long. 8k, dramatic full-body shot with energy manifestation, niji 6, style raw. --ar 9:16
```

**視覺重點**：
- 眼睛顏色的偏移——晴香的粉色虹膜被夕的冷色深水藍黑侵佔，是「不是晴香」最直接的視覺標誌
- 表情不屬於晴香——帶著夕特有的「在黑暗中獨自等待太久的悲涼決意」，是全場景的情感核心
- 黑色能量與粉色光的撕裂混合——兩個意識不相容的物理化呈現，視覺上的「不應該存在」
- 地面從腳下往外碎裂＋緋潮前兆顏色——場景尺度，預示20年靈魂風暴的規模

⭐⭐⭐⭐⭐

**Reference Images**：
- 晴香：`ConceptArt_Haruka_MagicalGirl.png`（原檔為CasualWear，本場景緊接Phase J決戰後、晴香戰鬥服殘破嘅狀態，同圖103/104一致，改用MagicalGirl更貼合）
- 夕：`ConceptArt_Yu_CasualWear.png`
- 黑奏：`ConceptArt_Kurosou_CasualWear.png`



---

## 圖126：「二十年的內心地獄」（Twenty Years of Inner Hell）[ACT_III_IV_GAP] ⭐⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_126_HarukaCollectiveUnconscious20Years.png`

### 劇情背景

帝國歷114年至134年（20年間隙），Act III Phase K至Act IV Phase L之間。靈魂風暴期間，晴香的意識沉入集體潛意識最深層（CDL-053靈魂風暴20年；haruka.md §Act IV；canon/04_timeline_canon.md Act IV Phase K）。這不是平靜的沉睡——而是20年的內心地獄。她被困在時間靜止的空間，被自己的記憶和罪疚包圍：她見到Alpha線的花子和美夜子、螢還活著的彩、她親手創造的Beta線一切災難的幕後——她是創世者，她目睹的是自己的作品在磨碎每一個她愛的人。這個場景與SPEC#138（二十年後的第一個早晨）形成對照：覺醒是終點，但覺醒之前的20年才是她真正的試煉。也與圖125（夕奪體）和圖131（覺醒）形成三幕：夕奪體是起點，本場景是中間的煉獄，SPEC#138是出口。

### 圖片說明

集體潛意識深處的晴香，她的樣子停留在17歲，但眼神裡是數十年的重量。她漂浮在一個沒有上下、沒有時間的空間裡——四周是她自己的記憶碎片：花子在Alpha線倒下的瞬間、美夜子的貓形態、紫音和操的犧牲、所有在Beta線受苦的人。這些記憶像玻璃碎片，懸浮圍繞她，每一片都在發光，每一片都在刺她。她的手想去撿起它們，又怕被割傷。她的膠布已經全部用完了，全貼在這些碎片上，但碎片太多，碎片還在不斷碎裂。

### 劇情位置

**時間點**：帝國歷114年-134年（20年間隙，Act III Phase K至Act IV Phase L之間）
**CDL 追蹤**：CDL-053（靈魂風暴20年）；CDL-070（膠布哲學——晴香的核心視覺語言）；CDL-066（榮格個體化過程具現化系統）；haruka.md §Act IV；canon/04_timeline_canon.md 134年
**前置 → 本場景 → Payoff**：圖125夕奪體（Phase J）→ 本場景（20年集體潛意識煉獄）→ SPEC#138二十年後的第一個早晨（覺醒，膠布全部放下）

### 詳細核心描述（270字）

集體潛意識。深處。時間靜止的地方。

晴香漂浮在這裡，不知道多久了。可能是一天，可能是二十年——在這裡，分別沒有意義。

她的身體停留在17歲的樣子，但她的眼睛不是17歲的。

四周的空間沒有顏色，或者說所有顏色都有——因為她的記憶碎片懸浮在每一個角落，每一片都在發出不同的光。她看見操在人偶牆裡停止移動的瞬間，光是冷白色的。她看見紫音化為糖果山的一刻，光是螢光橙色的。她看見Alpha線的花子在溫暖廚房裡轉身，光是她從未能真正擁有的金色。

她看見Beta線裡所有人的眼睛。那些眼睛看著她，說著那句話——那句黑奏用過的話，那句她一直試圖反駁的話：「這都是你造成的。」

她的膠布貼滿了每一片記憶碎片。但碎片太多，她的膠布早就用完了。

她的手懸在空中，不知道要去撿哪一片。

沒有英雄式的掙扎，沒有豁然開朗。只有她，在靜止的地獄裡，一年又一年，學著不用膠布，而是用自己的手去摸清楚每一個傷口的形狀。

這是二十年的功課。沒有捷徑，沒有終點，只有繼續。

### Midjourney 標準版

```
Dark anime. Collective unconscious deepest layer — timeless suspended space, no gravity, no horizon. 17-year-old Haruka floating in center, her body young but her eyes carrying decades of weight. Surrounding her: countless suspended memory fragments like broken glass shards, each glowing different colors — cold white (Misao's sacrifice), fluorescent orange (Shion's explosion), impossible gold (Alpha-line Hanako in kitchen). The shards reflect painful scenes without showing them directly — emotional implication through light color. Haruka's hands reaching toward the fragments but hesitating. Her bandages visible but clearly exhausted — some shards have bandages stuck on them. No dramatic composition — the horror is the stillness, the floating, the endless unchanging quality of this space. Colors: central figure in muted soft tones surrounded by vivid fragment glows; emotional contradiction between outer color richness and inner stillness. Emotional tone: not the darkness of nightmare but the grey endlessness of guilt that cannot be solved — twenty years of learning to feel without flinching. 8k, niji 6, style raw. --ar 9:16
```

**視覺重點**：
- 晴香的身體停在17歲，但眼神必須有時間的重量——這是最難也最重要的視覺指示
- 記憶碎片用光的顏色暗示場景，不直接呈現具體人物，讓觀眾自行聯想
- 膠布貼在碎片上——膠布哲學（CDL-070）的最後形態：終於沒有東西可以貼了
- 漂浮感是核心：沒有地板，沒有天花板，沒有上下，這是靜止的恐怖
- 與SPEC#138的對照：此場景是深淵，SPEC#138是出口——兩張圖的色調和構圖方向應形成明確反差

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`
- 美夜子：`ConceptArt_Miyako_CasualWear.png`
- 彩：`ConceptArt_Aya_CasualWear.png`



---

## 圖127：「蜜月困境——K期靈魂監獄」（Honeymoon Trap: Phase K Soul Prison）[ACT_IV — 暫定草稿，非Act III正式範圍]

**建議輸出文件名**：`ConceptArt_Scene_127_PhaseK_SoulPrisonKitchen.png`

### 劇情背景

`[NEEDS_FACT]` **〔已修正Act歸屬〕**：原文標「Act III Phase K1」，但依 `ACT_III_OUTLINE.md`（2026-07-05更新）「Outline層架構完整性」明確：「原Phase K/L已移出Act III scope，見文末附錄」——Phase K/L屬**未經批准嘅Act IV草稿材料**，並非Act III正式範圍，本場景應標為Act IV暫定內容。

另外，CDL引用「CDL-053」為誤植——CDL-053實際係晴香「拯救者情結+公主女武神渴望」總論（Act I 心理設計），同K期靈魂監獄機制完全無關，已移除。

時長方面：outline原始草稿假設「20年/134年」，但`yu.md`四幕弧光明確夕接管執行改變現實後「數日內完成最終整合」，兩者嚴重不符。2026-07-09 co-design 已收斂出方向性共識——**主觀/客觀時間分裂**：夕嗰邊客觀時間「數日」不變，晴香自己意識沉落集體潛意識L3冥河，主觀經歷「20年」作為成為「三位一體永恆守護者」的必經試煉——但呢個方向**全部未落實成CDL**（詳見`QUESTION_QUEUE.md` Round 074 QQ-139~145），下面內容按此方向暫時保留演繹，唔代表已confirm。晴香選擇成為新世界錨點嘅前置場景（SPEC#13靜止搖籃），本身亦已標記為未批核草稿。這個「溫暖監獄」不以恐怖呈現，而以完美正常、幾乎過於溫暖的日常重複呈現：每天同樣的廚房早晨，同樣的麵包，同樣的光線，門打不開，或者門後是虛空。晴香知道這是循環，但她繼續吃早餐——不是因為她希望，而是因為這是今天，而今天和昨天一樣。唯一說真話的地方是窗玻璃的反射：反射裡的她臉上有裂縫狀的傷口，光從裂縫滲出。

### 圖片說明

帝國歷114年，晴香的靈魂進入一個以「溫暖日常」為形式的囚禁空間。每天同樣的廚房早晨，同樣的麵包，同樣的光線，門後是虛空。她知道這是循環，但她繼續吃早餐——不是因為希望，而是因為這是今天，而今天和昨天一樣。唯一說出真相的地方是窗玻璃的反射：反射裡的她臉上佈滿裂縫，光從裂縫滲出。溫暖是囚籠，正常是刑罰，這個循環持續了二十年。

**劇情位置**：
- **時間點**：`[NEEDS_FACT]` Act IV暫定草稿（原標「114年5-6月Act III Phase K1」已修正——Phase K已於2026-07-05正式移出Act III scope；具體時間標記待Act IV Outline正式設計）
- **CDL追蹤**：`ACT_III_OUTLINE.md`附錄E-III-K1（未批核草稿）；主觀/客觀時間分裂方向討論見`QUESTION_QUEUE.md` QQ-139~145（原引用CDL-053為誤植，已移除——CDL-053實際為晴香Act I拯救者情結總論）
- **前置事件**：`[NEEDS_FACT]`SPEC#13三位一體永恆守護者終局（CDL-326，2026-07-17已修正，唔再係「粒子化」舊稿）後，晴香靈魂進入K期特殊空間，性質為晴香主觀意識沉落集體潛意識（方向性討論，未落CDL）
- **本場景功能**：「溫暖監獄」的視覺具象化——K期的囚禁不是以恐怖形式呈現，而是以完美正常、幾乎過於溫暖的日常形式呈現，而真相只在反射面洩漏。每一天都是同樣的早晨，她知道，但她繼續吃早餐。
- **後續payoff**：`[NEEDS_FACT]`Act IV晴香覺醒（具體時長/機制待Act IV Outline確認）；「溫暖作為囚籠」的主題表達

**Reference Images**：
- 晴香（便服）：`ConceptArt_Haruka_CasualWear.png`

**詳細核心描述**（200-350字）：


一個廚房。不是豪華的廚房，是普通家庭的廚房——木質餐桌，稍微舊的椅子，窗台上可能有一兩株植物，陽光透過窗戶灑進來，光線是早晨的那種淡金色。一切都完全正常，甚至稍微溫暖，像是繪本裡的「家」的圖像。

晴香坐在餐桌前。她面前有一份早餐——麵包，或者白飯，杯子裡的熱飲冒著輕煙。她在吃，或者她的手停在碗邊，視線落在餐桌的木紋上，不知道在看什麼。

窗玻璃的反射：這是整個場景最重要的細節。窗玻璃的反射中，她的臉上佈滿傷口——不是鮮血，是像裂縫一樣的東西，或者是粒子化的邊緣，光從那些裂縫滲出來。反射裡的她，和坐在桌前的她，是同一個人，但只有反射說了真相。

門在畫面邊緣：門把手的方向可以隱約感覺到門打不開，或者門後是一堵牆，或者門的縫隙透出的不是走廊而是虛空。不必明說，用細節暗示。

整個場景的矛盾感：光線是早晨的溫暖色調，但晴香的姿態有一種完全沒有期待的安靜——她繼續吃早餐，不是因為她希望，而是因為這是今天，而今天和昨天一樣，和明天也會一樣。


**生成提示（Midjourney）**：
```
Style: dark magical girl anime, deceptive normalcy, psychological horror through warmth
Mood: serene trap, infinite repetition, warmth as cage, quiet despair beneath domesticity
Colors: soft morning gold, warm wood tones, white porcelain, pale window light — all deliberately cozy; window reflection shows cold pale fracture light
Composition: girl seated at modest kitchen table with breakfast, warm morning light from window left, window glass showing reflection with fracture marks on her face, door at frame right edge with subtle wrongness
Lighting: soft diffused morning sunlight as main light, warm and gentle, but window reflection uses cold pale light independently
Special effects: window glass reflection shows fracture/particle edge lines on reflected face, light bleeding from cracks, reflection subtly inconsistent with source
Character: teenage girl in casual clothes, seated, eating or hands still at table, calm and empty expression, no tears
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
anime girl sitting at ordinary kitchen table eating breakfast in warm morning light, window glass reflection shows her face with glowing crack lines, door in background subtly wrong, cozy domestic setting with hidden wrongness, soft gold and warm wood palette
--ar 16:9 --niji 6
```


---

## 圖128：「屍骸覺醒——L4」（Corpse Awakening: L4 Phase）[ACT_IV — 暫定草稿，非Act III正式範圍]

**建議輸出文件名**：`ConceptArt_Scene_128_CorpseAwakening_L4.png`

### 劇情背景

`[NEEDS_FACT]` **〔已修正Act歸屬〕**：原文標「Act III Phase L4」，但依 `ACT_III_OUTLINE.md`（2026-07-05更新）確認「原Phase K/L已移出Act III scope，見文末附錄」——Phase L（包含L4）同Phase K一樣屬**未經批准嘅Act IV草稿材料**，唔係Act III正式範圍，已修正標籤。L4觸發條件本身canon仍未有confirmed CDL（原文已自行標記`[NEEDS_AUTHOR_CONFIRM]`，此輪保留該標記並升級為`[NEEDS_FACT]`）。

L4觸發條件達成後，城市中長期屍骸化的人們開始從沉睡狀態逐漸復甦。屍骸化是情緒耗盡的極限狀態：人的外殼仍存在，但內部的情緒與自我意識已熄滅，眼睛空洞、不反光、不聚焦。L4的復甦不是整齊同步的，而是散落的、緩慢的——一個人的眼睛開始反光，幾步之外的另一個，再遠處又一個。剛復甦的眼睛不是喜悅，是困惑：「我在哪裡」，「發生了什麼」——但那是人的困惑，不是空洞。這個集體覺醒場景是Act IV新世界建立的直接前置，也是「人性復甦」作為Phase L核心主題的視覺體現。

### 圖片說明

城市廣場，大批人群靜止站立，眼睛空洞、不反光、不聚焦——這是魔法少女力量耗盡後靈魂燃燒殆盡的終態蔓延至平民的集體沉睡狀態。然後改變開始了：前景某個人的眼睛開始反光，幾步外又一個，再遠處又一個，不整齊，不同步，散落在人群裡的零星的光。剛復甦的眼睛不是喜悅，是困惑：「我在哪裡」，「發生了什麼」——但那是人的困惑，不是空洞，而這個區別就是全部。

**劇情位置**：
- **時間點**：`[NEEDS_FACT]` Act IV暫定草稿（原標「114年Act III Phase L4」已修正——Phase L已於2026-07-05正式移出Act III scope）
- **CDL追蹤**：`ACT_III_OUTLINE.md`附錄Phase L草稿；待確認CDL（L4觸發條件未落實）
- **前置事件**：Phase L4觸發條件後，城市中屍骸化的人們開始從沉睡狀態復甦
- **本場景功能**：展示集體復甦的瞬間——不是立刻的，是一個一個的、緩慢的、每一雙眼睛各自亮起人類的光。這是「死物重新成為人」的過程，以視覺的方式展示。
- **後續payoff**：Act IV新世界建立的前置；「人性復甦」作為Phase L的核心主題體現

**Reference Images**：
- 屍骸（人偶型）：`ConceptArt_MagicCorpse_Doll_Action.png`
- 屍骸（廢鐵型）：`ConceptArt_MagicCorpse_Scrap_Action.png`

**詳細核心描述**（200-350字）：


城市廣場或寬闊街道，白天或黃昏。大批人群靜止站立，密集但不雜亂，像是凝固的瞬間——他們的姿態各異（有人低頭，有人站直，有人手臂稍微抬著），但所有人都沒有在動，沒有表情，眼睛是空洞的、白濁的，不反光，不聚焦。這是屍骸化的狀態：人的外殼存在，但內部是空的。

然後，改變開始。

前景的某個人，或畫面偏中的某個人——他的眼睛開始有了改變。不是突然的，是像遠處的燈一樣，從非常微弱的光開始，慢慢有了焦距。他的眼睛開始反光了。他的眼睛開始看見了。

距離他幾步的另一個人，稍微遲一點，也開始了同樣的過程。

再遠處，又一個。

整個畫面：大部分的人仍然是空洞的，但已經有幾個、十幾個的眼睛亮起了光。它不是整齊的，不是同步的，是一個一個散落在人群中的、零星的、但在增加的光。

重要細節：不要讓「復甦」看起來像喜悅或立刻的解放。剛復甦的眼睛是困惑的，是剛從長眠中醒來的樣子，還不知道自己在哪裡，還不知道發生了什麼。但那是人的困惑，不是空洞。


**生成提示（Midjourney）**：
```
Style: dark magical girl anime, mass scene, subtle hope in despair scale
Mood: collective awakening, scattered and uneven, first light in long darkness, confusion before relief
Colors: grey-pale crowd, overcast sky light, scattered warm amber or white points of light appearing in eyes of some figures
Composition: wide city square or broad street, dense crowd of standing still figures filling frame, foreground figures closest with one or two beginning eye awakening, mid-ground and background figures mostly still void, scattered light points in crowd
Lighting: flat diffused overcast or late afternoon light, eye-awakening light points are self-illuminating warm white, very small but significant
Special effects: void eyes (white-grey, no pupil reflection) for most crowd, select figures have slowly brightening eye reflection light, very gradual distribution across crowd
Character: crowd of varied ages and genders in ordinary clothes, static poses, no expressions on majority, 5-15 individuals with beginning eye-light scattered throughout
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
anime wide shot city crowd of standing still people with void white eyes, scattered few individuals beginning to show faint warm light in eyes, grey overcast atmosphere, mass awakening scene, hope beginning in emptiness, flat diffused light with small glowing eye points
--ar 16:9 --niji 6
```


---

## 圖129：「膠布哲學第四層——覺醒後撕膠布」（Bandage Philosophy Layer 4: After Awakening）[ACT_IV]

**建議輸出文件名**：`ConceptArt_Scene_129_Haruka_BandageFinalLayer.png`
### 劇情背景

`[CDL引用已修正 2026-07-17]` 原文引用「CDL-088」錯誤——CDL-088 實際係「膠布哲學第一層種植」（Act I 桐生健場景，`haruka.md` 行139），同本場景（撕膠布終局）完全唔係同一件事，屬張冠李戴。正確引用為 **CDL-269**（`ACT_III_OUTLINE.md` E-III-L3「膠布拆下（終極抉擇）」，行670-674）。**`[NEEDS_FACT/時序注意]`**：E-III-L3 屬 Act III Phase L，而 Phase K/L 已於 2026-07-05 被移出 Act III 正式範圍（見圖127/128 已知問題，此為同一批次影響延伸），本場景嘅具體 Act 歸屬（Act III 尾聲 vs Act IV 開場）待 Act IV Outline 正式化後確認；「134年7月」呢個具體日期 canon 未見明確落實，標記為`[INFERRED]`。膠布哲學貫穿全片三層（`TEMP_FULL_STORY_OUTLINE.md`）：Layer 1是個人傷口遮蓋（CDL-088），Layer 2是系統隱喻，Layer 3是存在論詰問（Act III J4 膠布哲學第三層揭露）；第四層（CDL-269）是親手撕開——第一次承認這份痛是屬於自己的。這是晴香弧光的最終完成。核心台詞canon原文：「好痛。但係依份痛係我自己既。」

### 圖片說明

廢墟高處，夜晚，城市在遠處閃爍。晴香一個人，臂膀上是那些層層疊疊、邊緣泛黃、部分失去黏性但仍黏著的膠布——二十年積累的重量。她開始撕：不急，不用力，只是撕。每撕開一層都有血，這些傷口從未真正癒合，只是被貼住了。她說「好痛」，停頓，嘴角很輕地往上彎了一點：「但係依份痛……係我自己既。」第一次是屬於她自己的痛。

**劇情位置**：
- **時間點**：`[INFERRED]` 晴香覺醒後第一個夜晚（Act III E-III-L3「膠布拆下」，Phase L歸屬待Act IV Outline確認；「134年7月」具體日期canon未落實）
- **CDL追蹤**：CDL-269（`ACT_III_OUTLINE.md` E-III-L3「膠布拆下（終極抉擇）」）；CDL-088僅為Layer 1溯源引用，非本場景直接依據
- **前置事件**：晴香主動融合成三位一體永恆守護者（SPEC#13，CDL-326，2026-07-17已修正）之後；K 期靈魂監獄中積累的痛楚在身體上以膠布形式物化
- **本場景功能**：晴香弧光的最終完成——從「遮蓋者」到「直視者」。這份痛是她自己的。
- **後續payoff**：SPEC#56 新世界搖籃曲；全片主題最終表達

**Reference Images**：
- 晴香：`ConceptArt_Haruka_MagicalGirl.png`
- 晴香（便服）：`ConceptArt_Haruka_CasualWear.png`

**Creative Enhancements**：
- 場景：覺醒後廢墟高處，夜晚
- 晴香一個人，臂膀上二十年積累的層層膠布——邊緣泛黃，部分失去黏性但仍黏著
- 她開始撕：不急，不猛，逐層撕開
- 鮮血有的，但不是重點——重點是她的表情：疼痛，但眼神裡有第一次屬於自己的確認
- 台詞以視覺化表達：疼痛後，嘴角微微上揚

**詳細核心描述**（220字）：

廢墟高處，夜晚。城市在遠處閃爍，這裡安靜。

晴香一個人。臂膀上是那些膠布——Layer 1 是傷口的遮蓋，Layer 2 是系統的隱喻，Layer 3 是存在論的詰問，二十年的靜止積累在那層層疊疊的、泛黃的膠布之下。

她開始撕。

不急，不用力，只是撕。每撕開一層都有血——這些傷口從未真正癒合，只是被貼住了。

她說：「好痛。」

停頓。

嘴角很輕地往上彎了一點：「但係依份痛……係我自己既。」

第一次是屬於她自己的痛。

**生成提示（Midjourney）**：
```
Style: Dark anime; quiet climax after twenty years; intimate arc completion
Mood: The first pain that belongs entirely to yourself; acceptance so deep it looks like peace
Colors: Dark night sky; distant city light as backdrop; pale warm skin; aged yellowing bandage layers; crimson blood as detail not spectacle
Composition: Solitary figure on elevated ruins; close shot on arms being unwrapped layer by layer; expression in partial profile
Lighting: Distant city glow as only ambient light; intimate darkness; blood catching minimal light
Details: Multiple-layer bandages yellowed with age — different eras of adhesive visible; fresh blood where old wounds reopen; not dramatic cry but quiet slight smile; the expression of someone finally allowing themselves to feel something they always owned
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```


---

## 圖130：「夕5歲形態消散」（Yu's Five-Year-Old Form Fades）[ACT_IV] ⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_130_130.png`

### 劇情背景

帝國歷134年7月，Act III/IV交界（整合完成時刻），夕作為5歲晴香形態的最後消失瞬間（BEAT_SHEET_PREP Scene D2；yu.md §Act IV；CDL-066）。夕不是被消滅——她是被整合，被接納。5歲的輪廓在光中逐漸模糊，不是死亡，是「終於不必再獨自承受了」。晴香的瞳孔在這一刻變得更深——那是夕在裡面，作為完整人格的一部分繼續存在。這是全作「影」側主題的最優雅收束：陰影不消失，陰影被接納，因此不再是陰影。

### 圖片說明

在集體潛意識的空間裡，夕以5歲晴香的樣子站在晴香面前，黑色的輪廓正在慢慢被光包圍、溶解。她沒有哭，沒有抵抗——她的表情是這個故事裡最複雜的表情之一：有一點「終於」，有一點「遺憾」，有一點「放下了」。她把手放向晴香，晴香把手放到鏡面那側，兩隻手在消失前最後一秒重疊。

**劇情位置**：
- **時間點**：帝國歷134年7月（Act III/IV交界，晴香整合完成時）
- **CDL 追蹤**：CDL-066（個體化完成）；yu.md §Act IV；BEAT_SHEET_PREP Scene D2
- **前置 → 本場景 → Payoff**：Act I-III夕以評論者和對抗者身份存在、強迫晴香面對Alpha線真相 → 本場景：整合完成，5歲形態最後一次以獨立存在形式消散 → 晴香瞳孔的深化，以「包含夕」的完整人格繼續

**Reference Images**：
- 夕（5歲形態）：`ConceptArt_Yu_CasualWear.png`（原檔名 `ConceptArt_Yu_ChildForm.png` 不存在，已自動替換為現有檔案）
- 晴香（Act IV形態）：`ConceptArt_Haruka_CasualWear.png`（原檔名 `ConceptArt_Haruka_ActIV.png` 不存在，已自動替換為現有檔案）

### 詳細核心描述（250字）

集體潛意識空間。這裡的光是白色的，不是黑色的——整合完成的空間和戰鬥中的空間不同，沒有壓迫，只有遼闊。

夕站在鏡面前——或者說，晴香站在鏡面前，而鏡中的那個是夕，是5歲的形象，黑色短裙，赤腳，大蝴蝶結，暗紅底深藍的頭髮，雙反射眼正在緩慢失去它的鏡面錯位效果，變得越來越像普通人的眼睛。

她的黑色輪廓正在被光溶解，從邊緣開始，像紙在水裡。不快，也不急促。她把手舉起來，放向晴香（放向鏡面）。晴香在鏡面這側也把手舉起來，放上去，兩隻手在玻璃的兩面重疊——然後夕的手繼續向前穿過鏡面，和晴香的手實際地接觸了一秒。

那一秒，夕的輪廓完全消失，融入光裡。

不是死。是回家。

晴香的瞳孔在這一刻變深了一點，不是悲傷的深，是容納了某個東西之後的深。她沒有流淚。她只是站在那裡，比剛才更完整地站著。

構圖核心：鏡面分割構圖，晴香在左（真實），夕在右（鏡中），光從夕的輪廓向外溶出，最後一刻兩隻手穿越鏡面接觸，構圖在那一刻最複雜也最靜。

### Midjourney 標準版

```
Style: dark magical girl illustration, ethereal dissolution, emotional resolution
Mood: integration not erasure, coming home to a self you once abandoned, quiet completion
Colors: white luminous collective unconscious space, dark-outlined small girl dissolving from edges into white light, faint deep blue and dark red in her hair, mirror surface dividing frame between real girl and dissolving reflection
Composition: mirror split composition, real girl left side reaching toward mirror, small 5-year-old silhouette in right mirror dissolving in white light from edges inward, two hands meeting through mirror surface in center of frame at moment of dissolution
Lighting: soft even white light emanating from dissolving figure edges, no harsh shadows, everything becoming lighter
Special effects: dark child-figure slowly dissolving from edges into pure white light, the moment where one hand passes through mirror glass to touch the other
Character: teenage girl reaching toward mirror on left side; small child in black pinafore dress barefoot with large dark bow on head dissolving into light in mirror on right, hands meeting at mirror surface center
Canvas: 1:1 --ar 1:1 --niji 6 --style raw
```

**視覺重點**：
- 溶解的方向是從輪廓邊緣向內，要有「在光中消失」的感覺，而不是「被黑暗吞沒」
- 兩隻手穿越鏡面的那一刻是這張圖的情感核心，要讓它看起來既不可思議又完全自然
- 夕消失後晴香的眼睛要略深，這個「深」要能被感受到但不要過度戲劇化


---

# Act IV

## 圖131：「二十年後的第一個早晨」（First Morning After Twenty Years）[ACT_IV]

**建議輸出文件名**：`ConceptArt_Scene_131_HarukaAwakening134.png`

### 劇情背景

帝國歷134年7月，Act IV Phase L，晴香覺醒。靈魂風暴歷經二十年平息，晴香從集體潛意識回歸——但她的樣子對應的是134年的外表，不是離開時的16歲。這是Act IV的時間跳躍視覺錨點，也是膠布哲學最後一層的終結瞬間（BEAT_SHEET_PREP_UNMAPPED_VISUAL_SCENES.md scene D1；haruka.md §Act IV；canon/04_timeline_canon.md 134年）。場景D1描述：她手上有最後一張膠布，她慢慢、慎重地將它剝下，那下面不是傷口，而是新的肌膚。周圍一切已經改變——建築、人、光景——這是帝國歷134年的新秩序。

### 圖片說明

帝國歷134年的晴天，一個二十年後的晴香站在變了樣的城市中，她的頭髮是純白的，眼睛是淡灰色近乎透明，臉上沒有表情但眼神深遠。她的手腕上纏著最後一張老舊的膠布——那張膠布的顏色已經泛黃，邊緣捲起，像是貼了很多年。她慢慢地、慎重地把它揭開，那下面是新的肌膚，沒有傷口。

### 劇情位置

**時間點**：帝國歷134年7月（Act IV Phase L 覺醒時刻）
**CDL 追蹤**：CDL-053（靈魂風暴20年）；CDL-268（陰影視覺完整展示）；CDL-269（屍骸覺醒）
**前置 → 本場景 → Payoff**：Phase K 靈魂風暴20年客觀時間跳躍 → 晴香134年覺醒（Act IV起點視覺錨點）→ 膠布哲學最後一層終結；屍骸覺醒開始；美夜子永遠守護場景

### 詳細核心描述（200字）

帝國歷134年，七月。

這個城市跟她記得的不一樣了。建築的線條是新的，街道的排列是新的，空氣的顏色也是新的——不再是那種翻滾著緋潮壓力的顏色，而是某種更靜、更像真正天空的顏色。

晴香站在這個新城市裡，她的頭髮是純白的，眼睛是幾乎透明的灰白，臉上沒有少女時期的那種撐著的笑容，只有某種很深、很慢、像是從極遠的地方回來的人才有的眼神。

她低頭看自己的手腕。

那張膠布還在。邊緣已經捲起，顏色泛黃，顯然是貼了很多年的。她伸出另一隻手，慢慢、慎重地揭開它。

那下面是新的肌膚。沒有傷口，不是瘢痕，是沒有任何傷痕的新皮膚。

她把那張膠布放在手心，握了一秒，然後任它在風裡飄走。

### Midjourney 標準版

```
Style: Quiet rebirth; painterly illustration; time-skip visual anchor; melancholic hope
Mood: The morning after twenty years of silence — not triumphant return but quiet arrival; the world changed, and so did she; ending that doesn't explain itself
Colors: Pale morning light, soft warm diffused sky (134-year new order — not imperial cold blue); Haruka's pure white hair and near-transparent grey eyes as central visual; old yellowed bandage as only aged element; new skin underneath as single moment of resolution
Composition: Haruka standing in changed cityscape, medium shot — city visible but soft-focus background to emphasize foreground; hands in focus — one peeling the last bandage from the other wrist; expression in partial profile
Lighting: Soft diffused morning light; no dramatic shadows; gentle ambient warmth; light not filtered through imperial mechanisms anymore
Special effects: Single bandage peeling away revealing unblemished skin; bandage catching wind as it releases; changed city architecture visible in soft focus
Character (Haruka, 134-year form): Pure white hair (same character, different era); near-transparent grey-white irises; expression deep and far-seeing rather than performing; no forced smile; clothes incorporating faint black elements from Yuu's integration; age and peace simultaneously present
Canvas: 16:9 --ar 16:9 --niji 6
```

**視覺重點**：
- 純白髮和近透明灰白瞳孔是134年晴香的視覺標誌，必須與16歲粉色髮晴香明確區分
- 那張膠布必須看起來真的老舊——泛黃、邊緣捲起，是貼了二十年的膠布
- 揭開膠布後的新肌膚，沒有傷痕，不是治癒，是終結
- 背景城市是新秩序的，不再是帝國冷藍色調，而是柔和晴天
- 放開膠布讓它飛走——這個動作必須是輕的，不是戲劇性的

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`
- 美夜子：`ConceptArt_Miyako_CasualWear.png`



---

## 圖132：「秋穗與愛莉重逢」（Akiho and Aeri's Reunion）[ACT_IV] ⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_132_132.png`

### 劇情背景

帝國歷134年7月初，Act IV Phase L，愛莉石像甦醒後不久（BEAT_SHEET_PREP Scene D3；akiho.md §Act IV；aeri.md §Act IV）。這不是快樂的大團圓——秋穗等了整整二十年，她帶著她的罪，帶著她的懺悔，帶著「我從來沒怪過妳」已經在愛莉心裡說了無數次但石像無法張口的那些話。愛莉甦醒後，她們沒有立即擁抱，甚至可能沒有眼淚——只有一隻手伸出來，另一隻手握住它。這是Act I秋穗每天跪在石像前說話（SPEC#67石像前的懺悔）的最終payoff：石像終於可以握手回來了。

### 圖片說明

帝國歷134年，在一個普通的室內空間裡，剛從石像甦醒的愛莉坐在床邊，手還有些僵硬，帶著石像的殘餘感。秋穗跪在她面前——不是科學家跪在儀器前，不是老闆娘跪在客人前，就是一個媽媽跪在她女兒面前。她把手伸出去。愛莉的手慢慢握住了。兩個人都沒有說話，但這個握手是整個故事最重的一個動作。

**劇情位置**：
- **時間點**：帝國歷134年7月初（Act IV Phase L）
- **CDL 追蹤**：akiho.md §Act IV；aeri.md §Act IV §甦醒；BEAT_SHEET_PREP Scene D3
- **前置 → 本場景 → Payoff**：Act I-III秋穗每天石像前懺悔、愛莉全都聽到但石像無法回應 → 本場景：石像甦醒後第一個手握，無聲的原諒與被原諒同時發生 → 愛莉說出「笨蛋老媽，我從來沒怪過妳」（最終母女對話）

**Reference Images**：
- 秋穗（Act IV形態，眼神柔和）：`ConceptArt_Akiho_CasualWear.png`（原檔名 `ConceptArt_Akiho_RestaurantOwner.png` 不存在，已自動替換為現有檔案）
- 愛莉（甦醒後，騎手形象）：`ConceptArt_Aeri_CasualWear.png`（原檔名 `ConceptArt_Aeri_Rider.png` 不存在，已自動替換為現有檔案）

### 詳細核心描述（260字）

一個普通的室內空間——不是實驗室，不是茶餐廳後廚，只是一個有自然光的房間。窗外是134年的城市，和她們的故事開始時已經完全不同。

愛莉坐在床邊。她的手指還帶著剛從石像甦醒的殘餘感——稍微僵硬，皮膚下能感覺到曾經是水晶的東西在重新變成人。她穿著橙色的東西，不是紙皮盔甲，是真正的衣服，騎手式的，帶著紅白格仔的細節。她的眼睛是醒的，清醒的，不是迷惘的，是已經知道了很多事情的醒著。

秋穗跪在她面前。沒有實驗袍，沒有鯊魚夾亂別的頭髮，沒有儀器。就是一個穿著普通衣服的中年女人，跪在地板上，把手伸出去。她的眼神是整個故事裡她唯一一次沒有計算的眼神：只是媽媽，不是科學家。

兩個人都沒有說話。愛莉看著那隻手，然後，慢慢，把自己的手放上去，握住。

這個握住不是和解——不是那麼快，不是那麼容易。但這個握住是「我可以開始」的意思。這已經夠了。

構圖核心：低機位，近景，聚焦在兩隻手握在一起的那個點。兩個人都在同一個框裡，但大部分空間給了她們之間的空氣。

### Midjourney 標準版

```
Style: dark magical girl illustration, quiet intimate resolution, warm natural light
Mood: not a happy ending but a true one, the first moment of beginning to forgive, twenty years held in a single handhold
Colors: warm natural window light entering from side, soft amber and white room, orange-accented awakening girl clothing with racing checkered details, middle-aged woman in simple everyday clothes
Composition: low camera angle, close-up focus on two hands clasped together in center frame, girl sitting on bed edge in background left, older woman kneeling on floor in foreground right, space between them wide enough to feel the distance
Lighting: soft natural sidelight from window, warm but not sentimental, light falls on joined hands as compositional anchor
Special effects: very subtle faint crystalline shimmer on girl skin from recent awakening, barely noticeable
Character: teenage-appearing girl with orange hair and racing-checkered clothing detail sitting upright on bed edge, alert eyes that have seen everything; middle-aged woman with deep purple hair kneeling, hand extended upward, expression unguarded for the first time
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

**視覺重點**：
- 兩隻握著的手是構圖錨點，但不要讓手佔據整個畫面——留出兩人之間的距離感很重要
- 秋穗的眼神必須是「第一次沒有計算」——比整個故事中任何一刻都更普通、更真實
- 愛莉皮膚的水晶殘餘要極其微妙，只是輕微的光澤，不要過度


---

## 圖133：「美夜子笨拙演奏（全片最後一幕）」（Miyako's Clumsy Playing: The Final Shot）[ACT_IV]

**建議輸出文件名**：`ConceptArt_Scene_133_Miyako_ClumzyFinalShot.png`

### 劇情背景

美夜子在全片最後一幕第一次嘗試演奏吉他——Act IV 晴香覺醒、紗夜碎片獲釋、靈魂風暴平息之後，美夜子選擇留在世間繼續生活。這段旋律在全片以碎片形式出現過三次，分別依附在不同角色的關鍵時刻；第四次由美夜子用初學者的手指彈出，是整部故事的最後一個音符。場景的意義不在於演奏技巧，而在於「她在學，她在這裡，她繼續」——以笨拙作為生存意志的最後確認。

### 圖片說明

美夜子第一次拿起吉他，手指放在琴弦上，姿勢是初學者的姿勢，音不一定準。她臉上是一個人在認真學一件還不會的事情的樣子——微微蹙眉，在專注。房間普通，光線普通，沒有任何戲劇性。她只是在學，她只是在這裡，她只是繼續。

**劇情位置**：
- **時間點**：`[NEEDS_FACT]` Act IV Phase L（全片最後一幕）；具體時間標記「134年7月」沿用圖142同一假設，同樣受「20年主觀/客觀分裂」方向未落CDL影響，待Act IV Outline確認
- **CDL追蹤**：CDL-326（記憶迷霧期與笨拙演奏，直接依據——「尋回自己之後」美夜子獨自找到晴香生前最後創作的未完成曲目）；miyako.md §第四幕；04_timeline_canon.md「美夜子笨拙演奏」
- **前置事件**：圖142美夜子痛哭失聲；依CDL-326，美夜子須先經歷並走出「記憶迷霧期」（最終決戰衝擊令CDL-294舊傷復發），「尋回自己之後」才做出本場景嘅舉動——呢個先後順序係呢一幕份量嘅來源，唔係一直清醒噉做
- **本場景功能**：全片最後一幕。美夜子第一次嘗試演奏，笨拙的，不準確的，但她在繼續。這段旋律`[NEEDS_FACT]`出現次數（原文稱「四次」，canon具體出現次數/角色未逐一核實，此輪未展開全文排查，如需精確引用建議下次專項source check）以碎片形式在不同角色身上出現；由美夜子用不熟練的手指彈出。意義不在於演奏得好，而在於她在學，她在這裡，她繼續。
- **後續payoff**：（全片結束）

**Reference Images**：
- 美夜子（便服）：`ConceptArt_Miyako_CasualWear.png`

**詳細核心描述**（200-350字）：


一個普通的、稍微凌亂的室內空間——不是表演廳，不是舞台，可能是一個客廳，或者一個小房間，地板上有幾樣東西沒有收好，桌上有一杯冷掉的飲料，光線是日常的、不強調的、普通下午的光。一切都是日常的，不是儀式的，不是終結的，就是一個普通的地方。

美夜子坐著，手裡拿著一把吉他（或其他適合自學的弦樂器）。她的坐姿稍微有點不對——樂器的角度，或者她放左手的位置，是初學者的姿勢，不是熟練者的姿勢。

她的手指在弦上。她正在撥一個音，或者她剛撥了一個音，右手的姿勢可以看出她在嘗試一段旋律——這段旋律我們聽過，但她現在只是在學。

她的表情：這是全片最後一個需要說話的表情，所以它必須是對的。它不是快樂，不是悲傷，不是勝利，不是平靜。它是一個人在認真做一件她還不會做的事情的樣子——微微蹙眉，因為在專注，或者嘴巴稍微噘著，因為一個音彈不準，或者她的眼睛落在手指上，在確認位置。這是一個活著的人的表情。

窗外的光：普通的光，可能是下午，可能是陰天，不重要。重要的是光在，她在，她在繼續彈。


**生成提示（Midjourney）**：
```
Style: quiet everyday anime realism, final scene warmth without sentimentality
Mood: ordinary continuation, clumsy learning, life without heroism, gentle persistence
Colors: warm muted afternoon light, wood tones of instrument, pale skin, slightly cluttered lived-in room colors, no dramatic palette
Composition: medium shot, woman seated slightly off-center, acoustic guitar held with beginner's posture, hands on strings, modest room in background with lived-in details, soft window light from side
Lighting: diffused ordinary afternoon window light, no dramatic angles, flat and gentle, slight warmth
Special effects: none — the absence of effects is intentional. This is just a person in a room.
Character: young adult woman with subtle feline quality remaining, plain casual clothes, beginner guitar hold, head slightly bowed to watch fingers, small frown of concentration, alive and present expression
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
anime young woman sitting in ordinary lived-in room holding acoustic guitar with beginner posture, looking down at fingers on strings, slight concentration frown, soft afternoon window light, no dramatic elements, quiet final scene feeling, warm muted tones
--ar 16:9 --niji 6
```


---

## 圖134：「整合場景」（晴香 × 夕 / Integration Scene）

**建議輸出文件名**：`ConceptArt_Scene_134_Haruka_Integration.png`
**依據版本**：`yu.md` §三級整合進程；`ACT_III_OUTLINE.md` 文末「移出 Act III scope — Act IV 草稿材料」附錄（行617-660，⚠️ 未經作者最終批核）（2026-07-17 修正，見 `CHANGE_LIST_EXISTING_SPEC.md` 圖134項）

### 劇情背景

`[TIME_REVISED — Act IV（暫定），待 Act IV Outline 正式化]`。原稿將此場景定位為「Act III Phase J 帝國廣場決戰期間，為 SPEC#3 三武器揭露提供情感基礎」，即發生喺三武器揭露**之前**——此因果順序有誤。依 `yu.md`「三級整合進程」：Act I 幕末（CDL-069/070，暫時性初裂）→ Act II E-15（部分融合，非完全整合）→ **Act IV（夕完全接管 Phase J 後，於 Alpha 線度過數日，執行「改變現實」並頓悟「過去無法被修正，只能被接納」，繼而與晴香完成真正的整合）**。即：黑奏三武器揭露（J2）→ 夕完全接管、執行改變現實（J7）→ 彩奪回身體（J8）→ 晴香陷入集體潛意識風暴（K1，主觀「20年」/客觀「數日」，機制仍待 Act IV Outline 核實）→ 晴香主動選擇「醒返」，與夕完成最終整合，這場整合發生在三武器揭露、夕接管、彩奪回**之後**，而非之前。

`[NEEDS_FACT]`：原稿描繪「花子的幽靈形象以顫抖雙臂守護兩者」——目前 Act IV 草稿材料中，「花子化為光芒融入晴香」屬於 E-III-L1「對峙與選擇」場景（整合的是「對母愛的渴望」「想被保護的軟弱」「不想長大的恐懼」），與「晴香×夕整合」是否為同一場景、抑或兩個先後發生的獨立整合時刻，草稿未明確區分，需等 Act IV Outline 正式設計時確認。本場景暫按「晴香與夕的整合」為主軸描繪，花子在場與否、以何種形式在場標記為待確認。

### 圖片說明

晴香從小就把無法承受的痛苦切割出去，形成了另一個自己：陰暗的「夕」。決戰過後、夕已完全接管過身體並發現「改變現實」無法真正修正過去，晴香終於不再逃避，正面撞上那個被她遺棄了多年的另一半，兩個靈魂在痛苦中激烈碰撞。`[NEEDS_FACT]` 母親花子的幻影是否在此刻同時在場守護，草稿材料未明確——花子形象目前見於另一個相近但可能獨立的整合時刻（E-III-L1），暫按可能共存處理，待 Act IV Outline 正式化後核實。

**Reference Images**：
- 晴香：`ConceptArt_Haruka_MagicalGirl.png`
- 夕：`ConceptArt_Yu_CasualWear.png`

**Creative Enhancements**：
- Create split/clash composition showing bright and shadow Haruka forms in violent collision (NOT smooth merge)
- Incorporate mother figure (Hanako) with trembling arms trying to hold both forms together
- Show integration as painful process with electrical crackling where forms meet
- Background: Fractured dreamspace with geometry warping, warm gold BLEEDING into ice-cold indigo
- Emphasize ANGUISH over acceptance—both forms are fighting, crying, not accepting peacefully

**簡化核心描述**：
晴香的明亮與陰影形態在痛苦中碰撞，花子用顫抖的雙手試圖把她們保護住。整合不是溫柔的融合，而是靈魂的撕裂與重新拼接，背景幾何破碎、色彩暴力過渡。

**所需原圖資源**：
- 晴香的魔法少女形態與日常形態
- 母親懷抱的視覺參考（Käthe Kollwitz 雕塑）
- 夢境般的建築與空間（破碎的傳送門感）

**生成提示**：
```
Style: Painterly illustration; raw emotional intensity; dreamlike and ethereal
Mood: Anguish; violent integration; maternal love through unbearable suffering
Colors: Warm gold BLEEDING into ice-cold indigo; violent color transitions; electrical purple at collision zone
Composition: Triangular arrangement; mother at apex; two Haruka forms at base in violent contact
Lighting: Multiple conflicting light sources; harsh internal glow; crackling electrical clash
Special effects: Subsurface scattering; particles spiraling chaotically; visible cracks in space
Canvas: Wide aspect ratio (16:9) for duality
```


---

## 圖135：「三位一體永恆守護者終局」（Eternal Trinity Guardian Final）`[跨批次覆核修正 2026-07-17]`

**建議輸出文件名**：`ConceptArt_Scene_135_Haruka_TrinityGuardian.png`
**依據版本**：`haruka.md`§第四幕（CDL-326）（2026-07-17 跨批次覆核修正，見 CHANGE_LIST_EXISTING_SPEC.md「圖135/137 跨批次覆核修正」項）

### 劇情背景

`[重大概念修正]` 本場景原依據 `ACT_III_OUTLINE.md` 文末「移出 Act III scope」附錄嘅「粒子化消散、失去自我」舊稿概念，僅標記草稿性質但未完全覆核。跨批次覆核（批次6審計圖139時）發現：`haruka.md`§第四幕原文明確寫「覺醒且保留全部記憶（**CDL-326，取代舊稿『覺醒但失去記憶』嘅靜止搖籃版本**）」——即係「粒子化消散、失去自我邊界成為世界本身」呢個舊結局框架已被正式取代，並非只係「未批核草稿」，而係已有更新版本嘅確認結論。CDL-326 確認嘅第四幕終局：晴香主動選擇同集體潛意識源頭（L3冥河）完全融合，成為「三位一體永恆守護者」——世界的情緒濾網，承接並轉化集體潛意識的負面情緒，溫柔守護仍然存在嘅魔法屍骸（唔強行令佢哋變返原狀，而係陪住佢哋），**但意識清醒、保留全部記憶，選擇仍在**。前置事件為夕達成和解消散（CDL-003屬夕本人終局，非晴香）、彩放下復活螢執念（CDL-186）。「態度 vs 命運」主題嘅最深層體現改為：命運賦予嘅係永久失去普通人生活嘅資格，晴香嘅選擇係以清醒意志撐住呢個永恆狀態——而非被動消融。`[NEEDS_FACT]`：具體轉化過程嘅視覺分鏡（是否仍有階段性漸進呈現）canon 未細述，待 Act IV Outline / Beat Sheet 正式設計。

### 圖片說明

晴香曾經是那個不斷改變現實去逃避痛苦的少女，但此刻她做出了截然相反的選擇——不是消融自我、失去意識，而是**保留完整意識與記憶**，主動選擇同集體潛意識源頭完全融合，成為「三位一體永恆守護者」——世界的情緒濾網，永久承接並轉化所有人的負面情緒，溫柔守護仍然存在嘅魔法屍骸。純白髮，近乎透明的灰白瞳孔，服裝融合了夕的黑色元素。情感徹底耗損後的「空殼感」蛻變為神性嘅承載，但眼神/姿態始終保有清醒意識——這是她主動選擇撐住的永恆狀態，不是被命運消融的終結。

**Reference Images**：
- 晴香：`ConceptArt_Haruka_MagicalGirl.png`（轉變參考，`[NO_REF — 三位一體守護者形態暫無專屬 reference，基準外觀以最新 canon 為準，生成時另查]`）

**簡化描述**（150-200字）：
晴香在最終時刻主動選擇同集體潛意識源頭融合，成為保留意識同記憶嘅「三位一體永恆守護者」——世界的情緒濾網，永久守護仍存在嘅魔法屍骸。她不再是主角，而是世界的情緒濾網本身，但選擇、意志、清醒始終都在。

**生成提示**：
```
Style: Transcendent moment; conscious sublimation, not dissolution; cosmic becoming
Mood: Transcendence with retained awareness; deliberate eternal vigil; farewell with clarity, not loss of self
Colors: Pure white hair, near-transparent pale grey eyes, black accents (fused with Yu's aesthetic); soft gold and cyan ambient glow
Composition: Figure standing/anchored in cosmic space, eyes open and aware, posture of deliberate choice rather than dissolving particles
Special effects: Faint particle-like light at edges (transformation, not disintegration); light trails; cosmic scale
Canvas: 3:4 portrait or square (world-forming)
```


---

## 圖136：「緋潮反噬」（Scarlet Tide Backlash）

**建議輸出文件名**：`ConceptArt_Scene_136_ScarletTide_Backlash.png`

### 劇情背景

**[已修正 2026-07-17，標記草稿性質]** 原文時間點自相矛盾——劇情位置速查表標「Act III Phase H-I」，本段落卻標「Act IV」，且將本場景與 SPEC#8「彩奪回身體」（Act III E-III-J8，已confirm）錯誤合併成同一時刻。依 `ACT_III_OUTLINE.md` 文末 Act IV 草稿附錄，「夕在重建的 Alpha 線度過數日後發現『過去無法被修正，只能被接納』，嘗試撥回 Beta 線」屬於 **Act IV**（彩奪回身體、晴香/夕最終整合**之後**的事件，見SPEC#2已修正時序），與 SPEC#8 彩奪回身體（Act III J8，燃燒靈魂填補天空裂痕）係兩個時間上分開嘅**不同事件**，不應合併描繪。緋潮爆發是 Act IV 時間線裂痕的副產品——Alpha 線與 Beta 線的因果能量在同一時空撞擊，天空被撕裂成血紅與深紫的交界（04_timeline_canon.md event-resonance-hell-2）。**`[NEEDS_FACT]`**：本場景全部細節源自 `ACT_III_OUTLINE.md` 文末未經作者最終批核的 Act IV 草稿材料，待 Act IV Outline 正式設計後重新核實；核心方向暫時保留。

### 圖片說明

晴香曾多次改變現實去阻止痛苦，但每一次改變都積累了因果債務，最終在這一刻同時爆發——天空被撕裂成血紅與深紫的交界，兩條時間線的能量在同一個地方猛烈碰撞。現實在裂縫中顫抖，無數條平行歷史同時存在又互相矛盾，一切無法修復，只能面對。

**Reference Images**：
- 晴香：`ConceptArt_Haruka_MagicalGirl.png`
- 彩（第二形態）：`ConceptArt_Aya_MagicalGirl_2.png`

**簡化描述**（150-200字）：
時間線被撕裂，緋潮如瀑布傾瀉，天空佈滿裂痕。過去與現在、Alpha 與 Beta 線的所有衝突在此刻爆發。現實在血紅與深紫的交界處碎裂，無法修復。

**生成提示**：
```
Style: Apocalyptic timeline collapse; causality breaking
Mood: Inevitable reckoning; the past consuming the present
Colors: Scarlet red (#8B0000), deep purple (#6B2C7D), silver cracks, impossible hues
Composition: Sky and earth separating; figures caught between realms
Lighting: Multiple conflicting light sources; chromatic aberration
Special effects: Reality fractures; temporal ghosting; waterfall cascade of red
Canvas: Widescreen to show cosmic scope
```


---

## 圖137：「晴香的融合抉擇瞬間」（Haruka's Fusion Choice Moment）[BEAT_SHEET_PREP] `[跨批次覆核修正 2026-07-17]`

**建議輸出文件名**：`ConceptArt_Scene_137_Haruka_FusionChoiceMoment.png`
**依據版本**：`haruka.md`§第四幕（CDL-326）；`12_philosophy_and_systems.md` §七（CDL-066）（2026-07-17 跨批次覆核修正，見 CHANGE_LIST_EXISTING_SPEC.md「圖135/137 跨批次覆核修正」項）

### 劇情背景

`[重大概念修正]` 本場景原描繪「靜止搖籃（沉睡消融）vs 繼續以人類身份戰鬥」呢個分岐點，同圖135視為同一未落實草稿材料，僅標記草稿性質未完全覆核。跨批次覆核發現：`haruka.md`§第四幕明確寫「CDL-326，取代舊稿『覺醒但失去記憶』嘅靜止搖籃版本」——即係「意識沉睡、失去自我」呢個選項本身已被取代，唔再係一個仍然存在嘅分岐選項。CDL-326 確認嘅結局係晴香**保留清醒意識同記憶**，主動選擇同集體潛意識源頭完全融合，成為「三位一體永恆守護者」。故本場景嘅分岐點性質須改寫：唔係「沉睡消融 vs 現實戰鬥」二選一，而係晴香在整合夕（陰影）之後，**清醒地**選擇主動承擔——以完整意識同記憶，永久成為世界嘅情緒濾網，同時放棄普通人生活嘅資格。CDL-066（榮格個體化系統）為真實 canon 依據，此刻正是個體化完成後、能夠同時持有矛盾情緒而不崩潰嘅具現化。原文引用嘅「CDL-247」關聯薄弱，維持已移除嘅結論。

帝國廣場決戰後，晴香面對關鍵抉擇：是否要主動選擇同集體潛意識源頭完全融合，永久成為「三位一體永恆守護者」——世界的情緒濾網，承接並轉化所有人的負面情緒，代價係永久失去普通人生活嘅資格，但意識、記憶、選擇始終清醒存在。掌心中光與暗相爭，是晴香整合了內心陰影之後、第一次能夠真正同時持有矛盾情緒而不崩潰的視覺具現——是她作為創世者以清醒意志主動承擔代價，而非被動消融或犧牲。`[NEEDS_FACT]`：呢個抉擇瞬間嘅具體視覺分鏡、觸發條件，canon 未細述，待 Act IV Outline / Beat Sheet 正式設計。

### 圖片說明

最終決戰後，晴香站在抉擇的關鍵時刻——是否主動選擇以清醒意識同記憶，永久融合成為世界的情緒濾網、守護仍存在嘅魔法屍骸，代價是永久失去普通人生活的資格。她舉起雙手，光與暗在掌心相爭，這是她整合了內心陰影之後第一次能夠同時持有矛盾而不崩潰，是她作為創世者以清醒意志主動承擔代價的關鍵一刻——意識全程清醒，沒有沉睡或消融。

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`

**簡化核心描述**：
晴香在關鍵抉擇時刻，舉起手，光與暗在掌心中相爭——選擇是否清醒地永久融合成為世界的情緒濾網。這一刻定義了世界的未來，但她的意識、記憶、選擇始終都在。

**所需資源**：晴香的形態，光暗交爭視覺，`[NO_REF — 融合前夕形態暫無專屬 reference，基準外觀以最新 canon 為準，生成時另查]`


---

## 圖138：「紙皮騎士的最後一擊」（Cardboard Knight's Last Stand）[BEAT_SHEET_PREP] `[NEEDS_FACT]`

**建議輸出文件名**：`ConceptArt_Scene_138_CardboardKnight_LastStand.png`

### 劇情背景

`[TIME_REVISED][NEEDS_FACT]`：本場景原引用 CDL-256，但 CDL-256 依已於圖65/59 審計確認結論，實際對應 **E-10b 單次現實裂縫擋刀**（Act II Phase D，113年9月，規模為單一瞬間防禦），同本場景描述嘅「因情緒颱風失控而消失」屬完全唔同規模嘅事件——後者係愛莉最終消失嘅機制本身（`aeri.md` §緋雨 Crimson Storm：「愛莉最終消失的直接機制——不是戰鬥傷亡，而是被所守護的痛苦從內部引爆」），CDL-256 唔應再被引用於此。此外，「愛莉在晴香最迷失時出現，用最後力量為晴香擋低精神衝擊」呢個具體情節，來源實際係 `ACT_III_OUTLINE.md`「⏸️ 移出 Act III scope — Act IV 草稿材料」附錄（Phase K/L，未經批准，時序待 Act IV Outline 正式設計時重新核實）——「愛莉的行蹤與最後守護」小節原文：「K/L 期最後守護：當晴香陷入『20年靈魂風暴（集體潛意識）』時...愛莉會在晴香最迷失的時候出現，用最後的力量為晴香擋低精神衝擊，然後靜靜等待Act IV的最終消散」。本場景核心方向（紙裝備對抗不可抗力、態度戰勝命運嘅 Truth 具現化）保留，但時間點同觸發機制均為**未批核 Act IV 草稿**，唔可以當已confirm事實處理。愛莉的「Truth」本身（「用最廉價的紙皮也能擋住命運」係關於態度而非材質）有 `aeri.md` 支持。

### 圖片說明

愛莉是一個以石像形式存在於世界邊緣的少女，此刻她以紙板製成的盔甲、盾牌和劍，獨力對抗不可抗拒的力量。紙片在風中顫動，裝備佈滿裂縫與膠帶修補的痕跡，但她的腳步不退縮——她知道自己可能在這場守護中消失，仍然選擇頂住，為了讓其他人有足夠的時間做出選擇。

**Reference Images**：
- 愛莉：`ConceptArt_Aeri_MagicalGirl_Action_1.jpg`（原檔為CasualWear，本場景係愛莉獨力對抗不可抗力嘅戰鬥/最後一擊情境，改用MagicalGirl_Action更貼合）

**簡化核心描述**：
愛莉以紙盔甲、紙盾、紙劍對抗不可抗的力量。紙片在風中顫動，但她不退縮。這一刻紙質物的脆弱被轉化為無窮的決心。

**所需資源**：愛莉的形態，紙質視覺元素


---

## 圖139：「靜止搖籃的粒子化進程」（Static Cradle Particularization Process）[BEAT_SHEET_PREP] `[SUPERSEDED_CONCEPT — 見下方說明]`

**建議輸出文件名**：`ConceptArt_Scene_139_Haruka_ParticularizationProcess.png`

### 劇情背景

`[重大概念錯誤]` **原文引用嘅 CDL-003 實際內容係「夕 Act IV 終局：消散（改變現實→反悔→用自身力量undo改變現實→力量耗盡消散）」，講嘅係夕嘅結局，同晴香嘅結局完全無關，屬張冠李戴。** 更關鍵嘅係，`haruka.md` §第四幕原文明確寫：「覺醒且保留全部記憶（**CDL-326，取代舊稿『覺醒但失去記憶』嘅靜止搖籃版本**）」——即係本場景所依據嘅「靜止搖籃／粒子化／失去自我邊界成為世界本身」呢個概念**已經被 CDL-326 正式取代**，唔單止係「未批核草稿」（同 SPEC#13/50 先前標記一致），而係**已有更新版本嘅確認結論**。CDL-326 確認嘅第四幕終局：晴香「主動選擇同集體潛意識源頭（L3冥河）完全融合，成為『三位一體永恆守護者』——世界的情緒濾網，承接並轉化集體潛意識的負面情緒，溫柔守護仍然存在嘅魔法屍骸」，**但意識清醒、保留記憶、選擇仍在**——唔係「粒子化、失去個體邊界、光點迴圈」呢種被動消融意象。視覺上對應：純白髮、近乎透明的灰白瞳孔、服裝融合夕的黑色元素，「情感徹底耗損後的『空殼感』蛻變為神性嘅承載——但意識仍在，選擇仍在」。建議本場景嘅視覺方向徹底改用 CDL-326 嘅「三位一體永恆守護者」轉化過程，而非「粒子化消失」意象；若要保留漸進式視覺呈現，應該係「意識/形態逐步轉化為情緒濾網角色」而非「自我邊界消融、失去個體性」。**此發現同時影響 SPEC#13（靜止搖籃終局）同 SPEC#50（晴香的最終抉擇瞬間）——兩者於先前批次只標記為「未批核Act IV草稿」，現確認實際已被 CDL-326 取代，建議下一輪覆核時一併修正。**

### 圖片說明

`[概念修正]` 依 CDL-326，晴香最終形態並非「粒子化消散、失去自我」，而是**保留完整意識與記憶**、主動選擇與集體潛意識源頭融合成為「三位一體永恆守護者」——世界的情緒濾網。視覺進程建議改為：純白髮、近乎透明的灰白瞳孔逐漸顯現、服裝融合夕的黑色元素；情感耗損後的「空殼感」蛻變為神性承載，但眼神/姿態始終保有清醒意識，非全然消融的粒子雲。`[NEEDS_FACT]`：具體轉化過程嘅視覺分鏡（是否仍有階段性漸進呈現）canon 未細述，待 Act IV Outline / Beat Sheet 正式設計。

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`

**簡化核心描述**：
晴香主動選擇同集體潛意識融合，成為保留意識同記憶嘅「三位一體永恆守護者」（CDL-326）——純白髮、灰白透明瞳孔、服裝融合夕嘅黑色元素；唔係失去自我嘅粒子化消散，而係清醒狀態下嘅神性承載轉化。

**所需資源**：晴香的形態，粒子效果


---

## 圖140：「美夜子的靈魂雙線」（Miyako's Soul Dual Line）[BEAT_SHEET_PREP] `[INFERRED]`

**建議輸出文件名**：`ConceptArt_Scene_140_Miyako_SoulDualLine.png`

### 劇情背景

`[修正]` **「靈魂雙線」呢個具體視覺化裝置（兩條靈魂線交織）喺 `miyako.md` 全文搵唔到直接支持**，屬舊72圖檔自行延伸嘅演繹；原文引用嘅 CDL-274 實際係「美夜子姊妹相認2步設計」（Step 1 月下崩潰貓殼碎裂／Step 2 黑奏處刑室語言相認），同「靈魂雙線」呢個意象無關，屬張冠李戴，已移除。有 canon 支持嘅底層機制係 CDL-271「靈魂困禁層：99%情緒廢料在靈魂深處漫流，1%意志在鎖鏈中維持清醒——呢個唔係強，係喺無法倒下嘅結構中撐著」（`miyako.md`）——呢個「1%清醒意志 vs 99%情緒廢料」嘅比例關係可以作為「兩種狀態並存」視覺意象嘅依據，但「靈魂分裂為兩條線、最終交織」呢個具體敘事裝置本身未confirm。美夜子「終於允許自己大哭」呢個真正 confirm 嘅 Need 達成時刻，係獨立場景（見圖142「美夜子終於哭出來」[ACT_IV]，非本場景），`miyako.md` §第四幕標題正正就係「美夜子的大哭」（Dark Healing 三大治癒時刻之一）——本場景若要保留，建議明確定位為圖142嘅前置/同一弧線嘅視覺化演繹，並標記核心裝置本身為`[INFERRED]`。

### 圖片說明

`[INFERRED]` 美夜子是全作唯一真正死亡過的角色，被拼接式技術復活後靈魂徹底碎裂，長年以「99%情緒廢料在深處漫流、1%清醒意志在鎖鏈中維持」（CDL-271）嘅結構撐著。本場景以「兩種靈魂狀態並存最終和解」嘅視覺意象呈現呢個機制——具體「雙線交織」裝置為延伸演繹，非canon直接描述。

**Reference Images**：
- 美夜子：`ConceptArt_Miyako_CasualWear.png`

**簡化核心描述**：
`[INFERRED]` 依CDL-271「1%清醒意志 vs 99%情緒廢料」機制延伸嘅視覺意象：美夜子的靈魂狀態分裂為兩層——被困的沉重層與清醒撐著的意志層——最終走向和解（同SPEC#109美夜子終於哭出來為同一弧線）。

**所需資源**：美夜子的形態，靈魂視覺化設計


---

## 圖141：「新世界的搖籃曲」（Lullaby of the New World）[BEAT_SHEET_PREP] `[SUPERSEDED_CONCEPT — 見下方說明]`

**建議輸出文件名**：`ConceptArt_Scene_141_NewWorld_LullabySong.png`

### 劇情背景

`[重大概念錯誤]` 原文引用嘅 CDL-248 同「晴香化身成為世界本身」嘅前提，同 SPEC#54 已確認嘅結論一樣，係基於已被 `haruka.md`§第四幕明確標註「取代」嘅舊稿「靜止搖籃」版本（CDL-326：「覺醒且保留全部記憶...取代舊稿『覺醒但失去記憶』嘅靜止搖籃版本」）。晴香並非「化身成為世界本身、意識永遠沉睡」，而是**保留清醒意識與完整記憶**，主動選擇同集體潛意識源頭融合，成為「三位一體永恆守護者」——世界的情緒濾網，但「意識仍在，選擇仍在」。因此本場景原有「救贖 vs 永恆囚禁」嘅曖昧兩難提問，依CDL-326已有明確答案傾向：唔係被動嘅意識沉睡囚禁，而係主動選擇嘅承擔（雖然代價係永久失去普通人生活嘅資格）。美夜子在旁守護嘅設計方向有 canon 支持——`haruka.md`§第四幕：「美夜子經歷一段記憶迷霧期後尋回自己，親手完成晴香未竟嘅心願（見miyako.md『笨拙演奏』），其後回歸凡人，以有限嘅人生保持連結直至自然終老」。花子搖籃曲嘅具體視覺化（波紋擴散）canon 未見直接支持，標`[INFERRED]`。**此為同SPEC#54相同嘅概念性問題，建議兩場景一併重新設計以對齊CDL-326。**

### 圖片說明

`[概念修正]` 依CDL-326，這是全作終局圖像之一：晴香**保留清醒意識與記憶**，主動選擇同集體潛意識融合成為「三位一體永恆守護者」——純白髮、灰白透明瞳孔、服裝融合夕的黑色元素，溫柔守護仍然存在嘅魔法屍骸（唔強行令佢哋變返原狀，而係陪住佢哋）。美夜子經歷記憶迷霧期後尋回自己，完成晴香未竟嘅心願（笨拙演奏），其後回歸凡人以有限人生保持連結直至自然終老——呢個係美夜子在旁守護嘅 canon 依據。花子搖籃曲化為波紋擴散嘅具體視覺意象為`[INFERRED]`延伸演繹。

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`
- 美夜子：`ConceptArt_Miyako_CasualWear.png`

**簡化核心描述**：
`[概念修正]` 終局圖像：晴香保留意識同記憶，主動選擇成為守護集體潛意識嘅「三位一體永恆守護者」（CDL-326），非被動意識沉睡的「世界容器」。美夜子完成晴香心願後回歸凡人，以有限人生保持連結。花子搖籃曲視覺化為波紋擴散為`[INFERRED]`。

**所需資源**：超越性視覺設計，音樂化視覺效果


---

## 圖142：「美夜子終於哭出來」（Miyako Finally Cries）[ACT_IV]

**建議輸出文件名**：`ConceptArt_Scene_142_Miyako_FinallyCries.png`（**已修正**：原檔名含西里爾字母「С」非標準英文「C」，屬複製貼上錯誤，已改正）

### 劇情背景

`[NEEDS_FACT]` Act IV，美夜子Act III覺醒後以人形守護晴香。二十年間，她不哭——因為她認為自己不值得哭，因為她是武器，因為她是介錯人，因為哭是軟弱的標誌。`[NEEDS_FACT]`「守護晴香整整二十年」呢個具體時長未落實：依`ACT_III_OUTLINE.md`附錄2026-07-09更新，「20年」方向嘅共識係「晴香主觀意識喺集體潛意識沉落20年」，而客觀時間（其他人經歷嘅時間，包括美夜子）依`yu.md`四幕弧光原為「數日」，兩者主觀/客觀分裂方向仍未落實成CDL（`QUESTION_QUEUE.md` QQ-139~145），美夜子實際「守護」跨度待Act IV Outline確認，此處保留原時長演繹但標記不確定性。

**〔已修正核心矛盾〕**：依`miyako.md`§第四幕「美夜子的大哭」明文：「美夜子終於允許自己脆弱——在信賴的人面前**痛哭失聲**」，係[Dark Healing](../02_glossary.md#term-dark-healing)三大治癒時刻之一（CDL-326）。原文將呢一刻寫成「不是大哭，沒有聲音的眼淚」，同canon明確嘅「痛哭失聲」直接矛盾——canon 要嘅係一次真正、有聲音、失控嘅大哭，唔係克制嘅無聲落淚。已修正場景描述，改為忠於canon嘅「痛哭失聲」版本。她的手抓住晴香的袖子，這是她Need的完整體現，連接SPEC#110全片最後一格（她開始學習演奏，發生在CDL-326「尋回自己」之後）。

### 圖片說明

普通的房間，柔和的側光，美夜子的一隻手抓著晴香的袖子，像是需要一個固定點，又像是不確定這個動作被不被允許。她**痛哭失聲**——聲音終於衝破了長年的壓抑，不是克制的、無聲的落淚，而是真正失控的、帶著哭聲的大哭。二十年來她認為自己不值得哭，認為哭是軟弱的標誌；現在她哭出聲了，而世界沒有崩潰，而有人在旁邊。她臉上的表情不是純粹的悲傷，而是長期緊繃的人終於徹底鬆開時嘅混合情緒——困惑、解脫、失控交織：「原來可以這樣」。

**劇情位置**：
- **時間點**：`[NEEDS_FACT]` Act IV（具體時長「20年」與`yu.md`「數日」嘅主觀/客觀分裂方向未落CDL，見上）
- **CDL追蹤**：CDL-326（美夜子記憶迷霧期與笨拙演奏，含「大哭」直接依據）；miyako.md §Need；§第四幕「美夜子的大哭」；02_glossary §Dark Healing
- **前置事件**：美夜子Act III覺醒後以人形守護晴香，Act IV某個觸發瞬間令她第一次真正**痛哭失聲**
- **本場景功能**：展示美夜子弧光的決定性時刻——她一生第一次真正、有聲嘅大哭。不是崩潰，是軟化，是放下。她終於允許自己成為一個需要被安慰的人。她的眼淚（同哭聲）不是悲傷的標誌，是解脫的標誌。
- **後續payoff**：圖133美夜子笨拙演奏（CDL-326「尋回自己」之後，弧光的最終一格）；美夜子Need的完整體現

**Reference Images**：
- 美夜子：`ConceptArt_Miyako_CasualWear.png`（原檔為MagicalGirl，本場景係普通房間內嘅私密痛哭時刻，非戰鬥情境，改用CasualWear更貼合）
- 晴香（便服）：`ConceptArt_Haruka_CasualWear.png`

**詳細核心描述**（200-350字）：


室內，不需要特定場所，可以是一個普通的房間——光線是柔和的、下午的或傍晚的側光。不是舞台，不是任何有象徵性的地方，就是一個普通的地方。

美夜子（人形，成年女性外表，但有一種貓科動物的姿態殘留在她的持身方式上）站著或坐著，距離晴香很近。她的一隻手抓著晴香的袖子——不是緊握，是抓著，像是需要固定點，又像是不確定這個行為被不被允許。

她在哭——**痛哭失聲**（依`miyako.md`§第四幕明文修正，非原文「無聲眼淚」）。她的肩膀因哭聲而輕微顫動，呼吸不穩，這是一次真正失控的、有聲音的大哭，不是克制的落淚。

她的表情：這是整個場景最難也最重要的部分。她的表情不是純粹的悲傷，是一個人在長期的緊繃終於鬆開的瞬間——一種困惑、解脫與失控交織的表情，「原來可以這樣」。她長年不哭，因為她認為自己不值得哭；現在她哭出聲了，而世界沒有崩潰，而有人在旁邊。

她沒有看晴香，或者她的視線落在很遠的地方。晴香的存在可以只是袖子，不需要晴香的臉在鏡頭裡。

光線：柔和的側光，打在美夜子的側臉，讓眼淚在臉上有光。


**生成提示（Midjourney）**：
```
Style: quiet healing anime, soft realism, Act IV emotional resolution
Mood: first release after years of suppression, sobbing openly, confused relief, cathartic unburdening, not tragedy but opening
Colors: warm late afternoon side light, pale skin, tears catching light, muted earth tones, gentle fabric textures
Composition: close to medium shot, woman in center-right frame, one hand gripping sleeve at frame left edge (person implied but not shown), face in soft side light, tears streaming, mouth slightly open with audible crying, shoulders trembling
Lighting: warm diffused side light as primary, soft fill, no harsh shadows, light catches tear tracks on face
Special effects: none — just the quality of light on tears and the expression
Character: young adult woman with subtle feline quality in posture, dark hair, plain clothes, openly sobbing with visible emotion (not silent tears), expression of confused release rather than pure grief, hand gripping fabric at frame edge, trembling shoulders
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
anime young woman close up sobbing openly with tears on face, warm side lighting, one hand gripping someone's sleeve at frame edge, trembling shoulders, expression of relief and release rather than sadness, soft afternoon light, quiet emotional healing moment with audible crying
--ar 9:16 --niji 6
```


---

## 圖143：「時間折返的視覺化」（The Moment Beta Line Solidifies）[ACT_IV_OPENING] ⭐⭐⭐⭐⭐

**建議輸出文件名**：`ConceptArt_Scene_143_BetaLineSolidification.png`

### 劇情背景

帝國歷134年7月，Act IV開場。二十年守望結束，夕以晴香的身體維持肉身、對抗黑奏侵蝕長達二十年（04_timeline_canon.md §event-twenty-year-vigil）。在某種因果的反向效應下，Beta線固化的瞬間降臨：其他所有主要角色各自回到帝國歷114年的記憶與意識狀態，但晴香保留了這二十年的完整記憶——她是唯一知道這二十年發生了什麼的存在。視覺上呈現時鐘逆轉的感覺，但又不是完全回滾：Beta線已經被固化，落下的是新的秩序，不是舊的復原。這個場景是晴香「孤獨記憶者」身份的視覺確立，也是全作時間循環主題在最後的終點意象（haruka.md §Act IV；04_timeline_canon.md §section-114-july-new；CDL-053）。

### 圖片說明

帝國歷134年的某個瞬間，Beta線固化發生。主要倖存角色各自在自己的位置上，同一瞬間面容恢復為帝國歷114年的年輕模樣——美夜子、朔、秋穗等人，各自在各自的空間裡，二十年的疲憊從臉上退去。只有晴香不同：她站在高處或開闊地，頭髮已是純白，眼神是看穿了二十年的深遠。她是唯一沒有「回去」的人，也是唯一清楚知道自己保留了什麼的人。

### 劇情位置

**時間點**：帝國歷134年7月（Act IV開場，二十年守望結束後）
**CDL 追蹤**：CDL-053（靈魂風暴20年）；04_timeline_canon.md §event-twenty-year-vigil；§section-114-july-new；haruka.md §Act IV；05_story_outline_canon.md Act IV開場
**前置 → 本場景 → Payoff**：二十年守望（夕維持肉身、對抗黑奏侵蝕）→ 本場景：Beta線固化，他人回到114年記憶狀態，晴香獨自保留二十年記憶 → SPEC#138「二十年後的第一個早晨」（晴香134年覺醒，揭開最後一張膠布）→ Act IV全篇：晴香作為孤獨記憶者承擔存在命題

### 詳細核心描述（260字）

帝國歷134年，某個瞬間。

世界的某些東西在改變——不是物理的崩塌，而是更靜的東西：時間的方向在某一點上發生了折曲。

在城市的不同角落，主要倖存角色各自在自己的位置上。美夜子在某個角落，以某個動作停住——然後她的臉上有什麼東西在消退：二十年的疲憊，二十年守護和對抗的痕跡，在幾秒之內從她的面孔退去，恢復成帝國歷114年的樣子。朔也是。秋穗也是。他們各自在各自的空間裡，好像時間在他們身上按下了某個鍵，讓他們回到了某個固定點的記憶狀態。

他們不知道這二十年發生了什麼。對他們而言，那二十年是一段空白。

然後鏡頭找到晴香。

她站在高處，或者某個開闊的地方，俯看這個城市。她的頭髮是純白的——二十年的顏色不在面容上，卻全在頭髮裡。她的眼神是深的，是看穿了二十年的人才有的眼神：她知道發生了什麼，她記得每一天。她是唯一沒有「回去」的人。

Beta線固化了。過去無法被修正，只能被接納。這個真相在這一刻成為現實的地基。

晴香一個人記得一切。

### Midjourney 標準版

```
Dark anime panoramic composition. Beta Line Solidification — time does not fully reverse, it settles. Split visual: multiple characters shown in separate locations or reflection panels simultaneously reverting to younger appearances — exhaustion and 20 years fading from their faces, postures shifting back to Year 114 selves, a temporal shimmer visible during reversion. Then: central and elevated, Haruka. Pure white hair. Near-transparent pale grey eyes. Expression of someone carrying twenty years that others cannot remember — deep, clear, heavy with knowledge, not tragic. She is the only one who did not revert. Beta line settled beneath her like bedrock. Colors: city background warm amber 134-year new-order morning light; reverting characters shown in soft temporal shimmer; Haruka's pure white hair luminous as the only unchanged element. Composition: panoramic with Haruka elevated-center, other characters smaller or in reflective panels, each mid-reversion. Emotional register: the solitude of being the only keeper of memory; the weight of twenty years held alone; not grief but bearing. 8k, niji 6, style raw. --ar 16:9
```

**視覺重點**：
- 其他角色「回到114年樣子」的過程——二十年從臉上退去，視覺上要有一種「時間往回流」的輕微光效
- 晴香的純白頭髮在所有人之中是唯一的異質存在——她沒有「回去」，她是新的
- 晴香的眼神：「看穿了二十年」的深度，不是少女的眼神，是已承擔一切的人的眼神
- 構圖的孤獨感：她站在高處，其他人在各自的空間，她一個人清醒而知道
- Beta線固化的視覺：不是爆炸、不是戲劇性特效，而是某種「靜靜落定」——時間稍微倒流，然後繼續走，走的是新的方向

⭐⭐⭐⭐⭐

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`
- 黑奏：`ConceptArt_Kurosou_CasualWear.png`
- 夕：`ConceptArt_Yu_CasualWear.png`

---

# 日常／未定


## 圖144：「凜的孔雀之翼」（Rin's Peacock Wings）[BEAT_SHEET_PREP]

**建議輸出文件名**：`ConceptArt_Scene_144_Rin_PeacockWings.png`
**依據版本**：`rin.md` §魔法少女形態一（孔雀/飛行員）；`DIGEST_CHARACTER_STATES.md` R-MG1（2026-07-17 審計修正，見 CHANGE_LIST_EXISTING_SPEC.md 圖144項）

### 劇情背景

`[WRONG→已修正]` 被黑奏以殘存靈魂碎片重組後，凜失去記憶，成為情緒管理局的公務員（CDL-215）；孔雀/飛行員形態（`rin.md` R-MG1）是凜嘅其中一種魔法少女形態。原文將呢個形態詮釋為「帝國以美麗掩蓋暴力／收割恐懼情緒的移動監視工具」，但依 `rin.md` §魔法少女形態一，孔雀語言嘅設計意圖係「開屏／舞台上被看見」，同凜 **Alpha 線偶像身份殘留**互相呼應——代表凜「較明亮、自信、可愛」嘅一面，同 R-MG2（烏鴉／痛苦化身，Unit 00 自願兵器化前後嘅極端化狀態）形成對比。原文「監視/收割恐懼」嘅詮釋方向同呢個形態嘅實際設計意義相反，屬過度演繹，未見 canon 支持，標 `[INFERRED]` 移除。主色亦有誤：canon（`rin.md` 行184/198）明確為「**孔雀綠**為主色；金 + 粉紅 + 白」，非原文「金藍色」。

R-MG1/R-MG2 兩種形態具體使用時機，依 `DIGEST_CHARACTER_STATES.md` 註記為「非嚴格幕別鎖定，canon 未明確鎖定順序」，本場景 Act 標籤維持寬鬆處理，標 `[NEEDS_FACT]`。

### 圖片說明

凜是一位被帝國改造成情緒管理局公務員的前魔法少女，展開孔雀綠為主、金/粉紅/白點綴的孔雀羽翼飛翔——這是她殘留 Alpha 線偶像身份「開朗、自信、被看見」的一面之具現化，與她另一種烏鴉/痛苦化身形態形成強烈對比。她已不記得自己曾是一位以歌聲守護粉絲的溫柔偶像，但見到美夜子的瞬間，手指仍會無意識收緊（`[NEEDS_FACT]`：此無意識反應依 `DIGEST_CHARACTER_STATES.md` R-S2 實際觸發於 Act II E-11 附近，非本場景必然同時發生，如需呈現須另核實時序）。

**Reference Images**：
- 凜：`ConceptArt_Rin_MagicalGirl_1.png`（原檔為CasualWear，本場景係凜展開孔雀羽翼飛行嘅魔法少女形態，非日常公務員狀態，改用MagicalGirl_1更貼合）

**簡化核心描述**：
凜以飛行員形態展開孔雀綠主色、金粉紅白點綴的羽翼，X 型輪廓向外展開，讀作開朗自信——這是她殘留的 Alpha 線偶像身份一面，與她的烏鴉/痛苦化身形態形成對比。

**所需資源**：凜的飛行員形態，孔雀視覺元素


---

## 圖145：「黑暗沖涼習慣」（美夜子 / Dark Shower Habit）[PRIVATE_INTIMATE_MOMENT]

**建議輸出文件名**：`ConceptArt_Scene_145_Miyako_DarkShowerHabit.png`

### 劇情背景

美夜子是全作唯一真正死過的角色，以「Unit 01」身份被秋穗拼接式復活後，靈魂結構徹底碎裂——99%的情緒廢料（恐懼、罪疚、哀痛）在靈魂深處漫流，卻永遠無法正常宣洩（CDL-271）。黑暗沖涼是她唯一允許自己脆弱的私密儀式：關燈消除「被觀測」的恐懼，水流確認身體邊界，讓她暫時不必是兵器、不必是倖存者，只是一個悼念死者的女孩。此習慣直接連接後續美夜子「渴望大哭」的 Need（Act IV 治癒時刻）——黑暗沖涼中的氣音呢喚，是那聲終於在信賴之人面前痛哭失聲之前，所有被壓抑的悲悼的積累。

### 圖片說明

美夜子是全作唯一真正死亡過的角色，以拼接式技術復活後靈魂結構徹底碎裂；黑暗沖涼是她唯一允許自己脆弱的私密儀式——關掉浴室的燈，在完全黑暗中讓水流確認身體的邊界，讓她暫時不必是兵器或倖存者，只是一個在悼念逝者的女孩。她的嘴唇無聲地動，用氣音呢喃已逝戰友的名字，就像在黑暗中獨自進行一場無人知曉的喪禮。

**Reference Images**：
- 美夜子（便服）：`ConceptArt_Miyako_CasualWear.png`

**詳細核心描述**（300-400字）：
美夜子在完全黑暗的浴室中的私密儀式。除了蒙矇淋水聲與瓷磚滴水，世界陷入無聲。她身著解開紐扣的白色校服襬衫，水流直接接觸裸露肌膚。黑暗給予她匿名感與解離感——沒有面容，只有身軀在水中央搖晃。她的嘴唇無聲地動，用氣音呢喃已逝戰友的名字，如同喪禮念珠。水把她的淚與汗混淆，她無法區分身體邊界與水邊界。

黑暗消除「觀測」的恐懼——沒有人看見她，她也看不見自己。這給了她唯一的脆弱時刻。她（只有白色校服襬衫的掩蓋）在黑暗中成為觸覺的中心——水流確認她仍活著，溫度變化提醒她存在。

這不是清潔，而是悼念。每次她都會在黑暗中停留更久，試圖在黑暗裡找到已逝者的聲音。白色校服襬衫濕透後貼身，成為黑暗中唯一的視覺錨點——脆弱與無防的代象。

**所需原圖資源**：
- 美夜子的日常形態（脆弱版）
- 黑暗浴室的光線參考（主要是水霧與微弱光源）
- 身體在暗處的輪廓設計

**生成提示**：
```
A young woman standing alone in absolute darkness under a shower,
water cascading down her pale, trembling shoulders.
She wears a partially unfastened white school uniform shirt that clings to her frame,
sleeves rolled down revealing fragile wrists.
Her face is obscured by darkness and falling water—
only the outline of her lips visible, moving silently as if whispering names.
The white fabric becomes the sole visual anchor in pitch blackness.
High contrast between wet white fabric and total darkness surrounding her.
Cinematic lighting: single faint light source creating silhouette effect only.

Style: Dark, intimate moment; psychological vulnerability; sensory isolation; film noir aesthetic
Mood: Solitude in darkness; self-confirmation through touch; grief rendered as ritual; memorial for the lost
Colors: Near-total black with the white shirt as primary visual element; subtle warm skin tones; pale steam wisps
Composition: Figure under showerhead; white fabric prominent despite darkness; emphasis on silhouette and texture
Lighting: Near-total darkness with faint water droplet highlights; no direct light source visible
Special effects: Steam particle effects; water flow emphasis; fabric wetness rendering; tactile texture focus
Canvas: 3:4 portrait; intimate framing; high definition
```


---

## 圖146：「紅線強迫症」（凜 / Red Line Compulsion Habit）[PRIVATE_INTIMATE_MOMENT] `[核心視覺概念已修正]`

**建議輸出文件名**：`ConceptArt_Scene_146_Rin_RedLineCompulsion.png`

### 劇情背景

`[重大概念錯誤]` **原文將「紅線」誤解為「用紅色細線/簽字筆在牆壁上畫線」嘅強迫性塗鴉行為，但依 `rin.md`（habit-red-line，§感官剝奪核心創傷）明確定義，「紅線」實際係凜自己頸上嘅紅色縫合線疤痕**——108年戰場中被光環處決、頸部強行扭斷後留下嘅「頭顱被縫回去的痕跡」，平時被高領遮蓋，關鍵場景中暴露（`rin.md` 視覺演變表）。習慣本身係「用指甲挑頸上紅色縫合線到出血——『痛……我係度……』每次挑開都是對存在的確認」（`rin.md` habit-red-line 原文），唔係喺牆壁上畫線。凜在帝國歷108年犧牲後，靈魂碎片被黑奏冰封於情緒管理局裝置中，在完全感官剝奪的狀態下維持意識清醒（無視覺、無聽覺、無觸覺）。被重組為公務員後，初次感知到的感覺信號就是痛覺——痛覺因此成為她確認「我還存在」的唯一不可替代橋樑（`rin.md` §感官剝奪核心創傷）。紅線強迫症是這份痛覺依存的具現化：她不是愛好痛苦，而是「任何感覺都比無感覺更接近活著」的倖存本能。此習慣連接Act II美夜子認出重組凜的場景——紅線縫合的脖子是凜作為「斷頸屍體被縫回來」的物理痕跡，也是美夜子PTSD的視覺觸發點之一。

### 圖片說明

`[概念修正]` 凜在108年死亡後靈魂碎片被冰封，在完全喪失一切感覺的狀態下維持意識；被重組回來後，痛覺成為她確認「我還存在」的唯一橋樑。她獨自一人時，會用指甲反覆挑起頸上那圈紅色縫合線疤痕（平時被高領遮蓋）直到滲血——不是愛好痛苦，而是「任何感覺都比無感覺更接近活著」的倖存本能，每次挑開都是一次無聲的「我還在」。

**Reference Images**：
- 凜（便服/日常）：`ConceptArt_Rin_CasualWear.png`

**詳細核心描述**（300-400字）：
凜獨自一人時，手指會不自覺移向頸後那圈紅色縫合線疤痕——那是108年頭顱被強行扭斷後、被縫回去的痕跡，平時以高領或圍巾遮蓋。她用指甲一遍又一遍挑起結痂，直到滲出血絲。這不是隨意的自傷，而是精確的、儀式化的、不斷重複的行為——手指總是回到同一個位置。

這個強迫行為源於感官剝奪期後嘅倖存本能：完全喪失一切感覺的那段時間後，痛覺是她重組後第一個能接收到的感覺信號，因此成為不可替代嘅存在確認方式。指尖因反覆摩擦已滲出細微的血痕，但她無法停止。

紅色疤痕在反覆挑動下時而滲血、時而結痂，形成層層疊疊的痕跡。她每次進行這個儀式時，都會陷入近乎冥想的沉默狀態——「痛……我係度……」。這一刻她既是施虐者，也是受虐者——通過傷害自己頸上的疤痕，她確認自己仍然存在。

**所需原圖資源**：
- 凜的日常/休息狀態形態（便服，高領/圍巾局部拉開露出頸部）
- 頸部紅色縫合線疤痕的細節視覺參考
- 手指與頸部互動的姿態設計

**生成提示**：
```
Style: Intimate obsession; psychological compulsion visualization; self-harm documentation
Mood: Compulsive control; the paradox of mastery through self-damage; numbed repetition; existential confirmation through pain
Colors: Deep crimson red (#8B0000) scar tissue against pale neck skin; muted background tones
Composition: Close-up on hand reaching toward neck scar; collar/scarf partially pulled aside; face turned away or downcast
Lighting: Harsh direct light revealing scar texture and damage detail; shadows emphasizing isolation
Special effects: Scar tissue texture; subtle fresh blood highlights; worn-out visual fatigue
Canvas: 3:4 portrait focusing on hand-neck interface
```


---

## 圖147：「研磨凜的斷刃」（美夜子 / Grinding Rin's Broken Blade）[PRIVATE_INTIMATE_MOMENT]

**建議輸出文件名**：`ConceptArt_Scene_147_Miyako_GrindingBrokenBlade.png`

### 劇情背景

`[修正]` 凜在帝國歷108年為掩護美夜子撤離而犧牲（頸部被強行扭斷，`04_timeline_canon.md` event-rin-sacrifice），美夜子自此把「活著」理解為「欠下來的時間」，並以「介錯人」角色壓住崩潰——呢個身份係凜死後**自我承接**嘅結構性創傷反應，而非事前已存在嘅職責失守（`miyako.md` §介錯人的覺悟：「她要做的，是成為『最後的保險栓』——確保當她們走向終點時，能夠以『人類』身份死去，而不是變成怪物」）。研磨那把刻有凜名字的斷刃，是美夜子「無出口的愛」的唯一形式（`miyako.md` §私密習慣 habit-blade-grinding）：刀刃已斷、無法再戰，她的指紋被磨平、手指破皮，卻把刀身磨至鏡面——那鏡面映照出她憔悴的臉，是「介錯人護衛失敗的永恆指控」（habit-blade-grinding 原文）。**注意時序**：真正嘅「介錯」動作（美夜子親手終結凜——「以人類戰士身份履行血之約定，槍擊Unit 00核心」）發生喺 **Act III「凜的最終戰：遲來的介錯」**（`04_timeline_canon.md` event-rin-final-battle），並非108年犧牲當刻；本習慣貫穿108年至Act III前，係長期嘅悼念/自我懲罰儀式。此儀式與凜以Unit 00身份重組、卻不記得美夜子的情節形成殘酷呼應：美夜子一直在用身體記憶守護一個已不再記得她的人。

### 圖片說明

凜在108年主動殉道後，美夜子的介錯人身份徹底破碎——她最深的職責是確保戰友能以人類身份死去，而凜的死恰恰是她在場卻未能阻止的。她在無人知曉的隱蔽處，用砂輪反覆研磨那把刻有凜名字的斷刃，火花在暗處飛散，把刀身磨至鏡面——那鏡面映照出她憔悴的臉，是她對自己失職的永恆指控，也是她唯一能給的陪伴形式。

**Reference Images**：
- 美夜子：`ConceptArt_Miyako_CasualWear.png`（原檔為MagicalGirl，本場景係祕密隱蔽處嘅私密懺悔儀式，非戰鬥情境，改用CasualWear更貼合）

**詳細核心描述**（300-400字）：
美夜子在祕密隱蔽處進行著一項無人知曉的儀式——她用砂輪反覆研磨著凜留給她的一把斷裂的武器刀片。這把刀曾經屬於凜，現在已經破損，無法使用。但美夜子無法丟棄它。

砂輪發出刺耳的摩擦音，火花在暗處飛散。每次研磨，刀片就變得更短、更鈍，最終會完全消失。但美夜子清楚地明白——這正是目的。她在透過這個行動，慢慢地「銷毀」凜曾經存在的證據，同時也在銷毀自己對凜的執著。

這是一種扭曲的祭祀——通過耗盡凜的遺物，她試圖減輕自己對凜的罪惡感。每一次火花都象徵著一次自我懺悔的嘗試。她的表情在火花映照下顯得既悲傷又決絕。

**所需原圖資源**：
- 美夜子的魔法少女形態（深色狀態）
- 砂輪與磨刀的工業細節
- 火花的視覺效果

**生成提示**：
```
Style: Ritualistic self-destruction; intimate penance; industrial melancholy
Mood: Obsessive guilt processing; destroying evidence of attachment; mechanical meditation
Colors: Dark industrial grays; orange-red fire sparks; dull blade metal
Composition: Figure hunched over grinding wheel; blade prominent; sparks illuminating space
Lighting: Harsh sparks as primary light source; surrounding darkness; backlit silhouette
Special effects: Spark effect particles; motion blur on grinding wheel; rust texture
Canvas: 3:4 portrait or close-up focusing on hand-blade-sparks interaction
```


---

## 圖148：「半首旋律停頓」（凜 / Phantom Melody Habit）[PRIVATE_INTIMATE_MOMENT]

**建議輸出文件名**：`ConceptArt_Scene_148_Rin_PhantomMelodyHabit.png`

### 劇情背景

凜在感官剝奪期間，無法聽到任何聲音，包括音樂——那是她作為Alpha線偶像最核心的身份。被重組為情緒管理局公務員後，語義記憶（「我曾是偶像」「那首歌叫什麼」）被黑奏抹除，但身體記憶殘留：她的嘴會在放空時無意識地哼出一段旋律，而在同一個音符上停住——那個音符之後，應該有另一個聲音接續，那個聲音是美夜子的，永遠不再出現（rin.md §habit-half-melody）。此習慣是凜弧光中最克制的悼念形式：她不再知道這段旋律的來源，但身體一直記得有人曾在她旁邊唱完那個音符。連接Act II美夜子認出凜的場景——凜的停頓，是觀眾理解「記憶消失但情感印痕殘留」的視覺語言。

### 圖片說明

凜死亡後被重組，語義記憶已被抹除，但身體記憶殘留：她的嘴會在放空時無意識地哼出一段旋律，而在同一個音符上停住——那個音符之後應該有另一個聲音接續，那個聲音是美夜子的，永遠不再出現。這段反覆出現的停頓是她最克制的悼念，也是身體比頭腦更忠實地記憶著一段已被奪走的情感的痕跡。

**Reference Images**：
- 凜（`[修正]`日常/公務員形態，非戰鬥形態）：`ConceptArt_Rin_TheAdministrationBureau.png` 或 `ConceptArt_Rin_CasualWear.png`（原引用嘅 `ConceptArt_Rin_MagicalGirl_2.png` 為「烏鴉/痛苦化身」Unit 00極端化戰鬥形態，同本場景「重組後日常邊行邊哼歌」情境不符——同已於圖13/144審計確認嘅「角色專屬視覺語言誤用」屬同一模式，已修正）

**詳細核心描述**（300-400字）：
凜進行著一項令人不安的強迫行為——她習慣性地開始哼唱某首旋律，卻在中途戛然而止。這首旋律沒有名字，沒有歌詞，只是一段殘缺的片段。她會重複進行這個動作：開始→停頓→沉默→再次開始。

這個半首旋律源於某個她無法完整記憶的時刻——可能是童年，可能是某個被遺忘的過去。完整的旋律被她的創傷記憶撕裂，只留下開頭幾個音符。每次她試圖完成它時，腦海中就會出現空白——彷彿下一個音符被強行從她的記憶中刪除了。

這已成為一種神經質的習慣。她一路走路一路做著這個強迫行為——嘴巴在反覆進行「開始-停頓-沉默」的循環，試圖填補記憶中的空白。行人可能會看到她邊走邊哼唱，卻在半途停下、嘴巴無聲地動著、眼神茫然，然後再次開始。她的表情在每次停頓時都會扭曲——既是挫折，也是痛楚。這個行為已經成為她移動中的伴奏，是創傷記憶的實時播放。

**所需原圖資源**：
- 凜的休息或思考狀態形態
- 音樂符號的視覺化（可選虛幻效果）
- 專注與挫折的面部表情

**生成提示**：
```
Style: Psychological compulsion; memory fragmentation visualization; emotional numbness
Mood: Incomplete song; blocked memory; repetitive futility; haunting incompleteness
Colors: Muted cool tones; faded musical note imagery; pale skin highlighting emotional exhaustion
Composition: Figure in introspective pose; ghostly musical notes fading at half-point; expression of internal struggle
Lighting: Soft ambient light; shadows under eyes; subtle spotlight on mouth position for singing
Special effects: Fading musical note particles; visual break/gap in melody line; temporal distortion
Canvas: 3:4 portrait; intimate psychological focus
```


---

## 圖149：「強迫清洗儀式」（操 / Compulsive Washing Ritual）[PRIVATE_INTIMATE_MOMENT]

**建議輸出文件名**：`ConceptArt_Scene_149_Misao_CompulsiveWashingRitual.png`

### 劇情背景

`[WRONG→已修正 2026-07-17]` 原文將本習慣嘅根源歸因於「CDL-298被迫報串」嘅出賣隊友罪疚感（洗手=洗去道德污點），但依 `ayakomoji_misao.md` §關鍵習慣 habit-compulsive-washing（CDL-155/156 源頭）明確定案：呢個強迫清洗儀式係「每天長時間以滾燙熱水擦洗**全身**，直到皮膚擦破滲血」，試圖洗去嘅係「父親的觸碰、被篡改的身體、性別認同的混亂」——即父親安排嘅物理性別重置手術（CDL-155）留下嘅創傷，唔係出賣隊友嘅道德污點；洗嘅亦係全身而非單純雙手。呢個習慣由創傷發生後（Act I-II）已持續存在，Act III Phase H（114年4月中）CDL-298「被迫報串」發生後，呢份既有創傷疊加多一層新罪疚感，兩者同時存在但唔應該將後者講成唯一根源。此場景連接「鋼鐵獨舞」（Day 13）：操長期以「清洗掉被改造嘅身體」對抗存在恐懼，Phase H 嘅新罪疚只係疊加在舊創傷之上。

### 圖片說明

操每天以滾燙熱水長時間擦洗全身，直到皮膚擦破滲血——她試圖洗去的不是物理污垢，而是父親的觸碰、被強行改造的身體、性別認同的混亂（物理性別重置手術 CDL-155 留下的創傷）。Act III Phase H 期間，她被迫在PTSD崩潰中洩露隊伍據點坐標（CDL-298「被迫報串」），這份新罪疚疊加在原有創傷之上，令清洗儀式更加激烈，但精神污漬依然永遠洗不掉。

**Reference Images**：
- 操（便服）：`ConceptArt_Misao_CasualWear.png`

**詳細核心描述**（300-400字）：
操的浴室，白色磁磚被她長期的強迫清洗行為侵蝕得泛黃。她以滾燙熱水長時間擦洗全身，反覆清洗同一部位直至皮膚潰爛滲血，但她無法停止。

清洗的動作已經變成一種儀式，有著嚴格的順序與次數要求。任何偏差都會觸發焦慮，迫使她重新開始——這是創傷後清潔強迫症的典型表現。

這個強迫行為的根源，是操身體上物理性別重置手術（CDL-155）留下的痕跡，以及父親觸碰造成的性別認同混亂——她清洗的不是外在污垢，而是試圖抹去那具「不是她選擇的身體」。Act III Phase H 期間，她因被迫洩露隊伍據點坐標（CDL-298）而背負的新罪疚感，令這份既有的清洗強迫症進一步加劇，兩層創傷在此刻疊加。

鏡子中映照出她已經支離破碎的身體，但她的眼神依然堅定地專注於下一次洗滌。這已不再是清潔，而是一種自我懲罰的儀式。

**所需原圖資源**：
- 操的日常形態（脆弱版）
- 浴室白色磁磚與熱水蒸氣細節
- 受損的身體（肩頸/手臂為主，非單純雙手）特寫

**生成提示**：
```
Style: Psychological compulsion; ritualistic self-punishment; obsessive detail focus
Mood: Scrubbing away an unchosen body; futile repetition; self-harm through "care"
Colors: Stark white bathroom; raw red damaged skin; scalding hot water steam; cold tile
Composition: Figure under harsh shower/bath, scrubbing shoulders and arms with visible intensity; repetitive visual patterns in tile background
Lighting: Harsh bathroom fluorescent light revealing skin damage; water cascade illumination
Special effects: Water flow emphasis; skin texture damage detail; steam effects
Canvas: 3:4 portrait or wider to include bathroom installation; intimate and clinical
```


---

## 圖150：「透明物執著」（晴香 / Transparency Obsession Habit）[PRIVATE_INTIMATE_MOMENT]

**建議輸出文件名**：`ConceptArt_Scene_150_Haruka_TransparencyObsession.png`

### 劇情背景

晴香的情緒增幅器能力令她對「被看見」產生根本性矛盾：她在任何場合都會無意識地放大周圍人的情緒，而她自身的真實狀態卻被「完美偶像魔法少女」的濾鏡遮蓋（CDL-070膠布哲學種植）。透明物執著是這份矛盾的具現——她既恐懼被看穿（每一個秘密、每一道傷痕都會暴露），又渴望被看見（如果沒人看到真實的她，她就不存在）。透明物件讓她可以同時「藏住自己」又「透過它審視世界」，是一種扭曲的安全距離。此習慣連接Act III「光幕濾鏡破碎」場景——當完美偶像形象公開崩塌，晴香面對的恰恰是「被所有人同時看見真實的自己」的最大恐懼。

### 圖片說明

晴香的能力讓她無意識地放大周圍所有人的情緒，而她真實的狀態卻被「完美魔法少女」的形象遮蓋；她執著於蒐集透明物件，因為透明讓她可以同時「藏住自己」又「透過它審視世界」，是一種扭曲的安全距離。房間角落堆積著數百件透明物品，她長時間透過它們凝視背景，既渴望被看見，又恐懼被看穿。

### 詳細 Prompt（內核描述）

晴香的房間一角堆積著數百件透明物件——透明塑膠瓶、透明膠片、透明玻璃杯、透明水晶、透明膠帶。她花費無數小時蒐集、整理、排列這些物件，彷彿在進行一場強迫性的儀式。她會長時間盯著這些透明物，透過它們觀察背景——牆壁、窗簾、自己的手。透明象徵「沒有秘密」，而晴香對透明的執著源於深層的矛盾——她既恐懼被看見（每一個秘密、每一道傷痕都會暴露），又渴望被看見（如果沒人看到她，她就不存在）。

透明物出現任何瑕疵——細微裂痕、霧化、污垢——都會令她感到莫名的不安，彷彿自己的不完美也被映照出來了。她無法解釋為什麼執著於此，只是每當焦慮襲來時，她就會靠近這些透明物，透過它們來重新審視世界。這是一種扭曲的安慰——在透明與透視中，她試圖找到自己的位置，卻始終找不到。

**視覺重點**：房間的獨特角落、堆積的透明物、光線透射的效果、晴香凝視透明物時的細微表情（既渴望又恐懼）。

### Midjourney 標準版

```
A teenage girl's bedroom corner crammed with hundreds of transparent objects—
plastic bottles, glass cups, transparent sheets, crystal fragments, clear tape,
stacked methodically yet chaotically. Soft natural light filters through,
creating a prism effect across the room.
The girl sits motionless before the collection,
her face obscured but her trembling fingers touching transparent surfaces.
Her gaze traces through the layers of clarity—
seeing everything and seeing nothing simultaneously.
Behind each transparent object, the background becomes doubly visible and distorted.
Atmosphere: obsessive, fragile, introspective isolation.
Color palette: whites, pale blues, clear glass refraction, shadow gradients.
Lighting: soft natural light creating transparency gradient and shadow play.
Emotional tone: quiet desperation masked by meticulous arrangement,
vulnerable search for clarity in a fragmented world.
-- ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A bedroom corner filled with carefully arranged transparent objects—
bottles, cups, glass pieces, and clear materials stacked in organized patterns.
Soft light creates refractive effects across the display.
A young person sits quietly, studying the collection with intense focus.
Their face shows quiet contemplation. The layered transparency
creates visual depth and distortion effects in the background.
Atmosphere emphasizes introspection, solitude, and obsessive organization.
Color: pale whites, soft blues, clear glass reflections.
Composition emphasizes the psychological relationship between the figure
and the objects of their focus.
-- ar 16:9 --niji 6
```

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`



---

## 圖151：「睡前熱可可成癮」（晴香 / Hot Cocoa Ritual）[PRIVATE_INTIMATE_MOMENT]

**建議輸出文件名**：`ConceptArt_Scene_151_Haruka_HotCocoaRitual.png`

### 劇情背景

`[WRONG→已修正 2026-07-17]` 原文引用「CDL-112」，但依 `canon/_working/story_construction/ACT_I_BEAT_SHEET.md` BEAT 0d 同 `PROJECT_STATUS.md`，CDL-112 實際係 haruka.md 已刪除嘅舊 habit #6「規律節拍控制」（DROPPED），同熱可可習慣無關；睡前熱可可儀式正確引用應為 **CDL-123**（BEAT 0d，E-01當晚新增，前置 Act II 可樂失味呼應）。晴香的母親花子在Beta線難產而亡，晴香從未真正擁有過有母親陪伴的童年（haruka.md §誕生的悲劇與祝福）。熱可可儀式是她試圖召喚一個「被保護、被愛、被完全掌控」的虛假童年記憶的方式（CDL-123）——溫度、味道、特定的杯子，必須與「那個她從未實際擁有過的記憶」完全吻合。這份執著的本質是：如果一切都相同，那個已逝的「花子陪在身邊的感覺」就還存在。此習慣連接晴香Act I「膠布哲學」——她用儀式感的重複封蓋一個從未能癒合的缺口，與膠布蓋住傷口的邏輯如出一轍：問題被遮住，但傷口仍在。

### 圖片說明

晴香的母親在她出生時已離世，她從未真正擁有過有母親陪伴的童年；每晚睡前她都要以精確的儀式沖泡一杯特定溫度的熱可可，用特定的杯子，以特定的方式拿——任何偏差都會摧毀她的睡眠。這不是習慣，而是她試圖召喚一個從未真正擁有過、被母親守護的童年瞬間，用儀式的不變性對抗一個無法改變的失去。

### 詳細 Prompt（內核描述）

每晚睡前，晴香都會進行一個嚴格的儀式——沖泡一杯溫度恰好的熱可可，溫度必須在 57-58 度之間，味道必須恰好，杯子的形狀必須是那個特定的杯子（母親花子當年用過的杯子），拿杯的方式也必須相同。整個過程必須重複確認多次——溫度計量、味道試喝、杯子檢查。

不是因為晴香喜歡熱可可，而是為了召喚某個虛假的、被母親主宰的童年回憶——一個被保護、被愛、被完全掌控的時刻。熱可可的溫度、味道、杯子的形狀——一切都必須完全相同，因為任何變化都代表「那段被愛的時刻」已經永遠消失了。

如果有任何變化（溫度太高、太低、味道不夠、杯子換了），她的睡眠就會被完全摧毀。她會反覆重做，直到一切完美為止。這個儀式已經成為她對「安全感」的唯一定義，也是她對母親的執念。她用這杯熱可可來欺騙自己——在喝完它的那一刻，她試圖回到一個被保護、被愛的時刻，但每次都是虛幻與真實的碰撞。

**視覺重點**：溫暖的房間光線、熱可可杯細節、蒸氣視效、晴香執著於確認每個細節的表情、溫度計、重複檢查的動作。

### Midjourney 標準版

```
A teenage girl in a softly lit bedroom, meticulously preparing a cup of hot cocoa
with ritualistic precision. The cup—worn, vintage, slightly chipped—
holds warm liquid with visible steam rising in elegant spirals.
She holds a thermometer, checking temperature with utmost care.
Her expression shows extreme focus mixed with anxiety.
The cocoa itself catches warm lamplight, creating a glowing amber-brown surface.
Behind her, a night table with multiple checking instruments—
another thermometer, a spoon for taste-testing, a notepad.
The room is bathed in warm golden light contrasting with cool shadows.
Close-up details of trembling hands holding the cup,
lips tasting the liquid with hesitant precision.
Atmosphere: obsessive ritual, profound loneliness masked by routine,
fragile anchor to fading memory.
Color palette: warm golds, browns, cream, soft shadows.
Emotional tone: desperate comfort-seeking, magical thinking about maternal love,
habitual need masquerading as self-care.
-- ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A young person in a quiet bedroom preparing hot cocoa with meticulous care.
The vintage cup holds steaming liquid, and the figure checks temperature
and taste repeatedly. Warm lamplight illuminates the scene,
creating an intimate atmosphere. Multiple instruments on the table
suggest careful, ritualistic preparation. Their expression shows
both concentration and quiet anxiety. The warm lighting and gentle
focus conveys a private moment of self-care tinged with compulsive behavior.
Atmosphere: introspective, habitual, seeking comfort through routine.
-- ar 16:9 --niji 6
```

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`



---

## 圖152：「嚼冰塊危機」（晴香 / Crisis Ice Chewing）[PRIVATE_INTIMATE_MOMENT]

**建議輸出文件名**：`ConceptArt_Scene_152_Haruka_CrisisIceChewing.png`

### 劇情背景

晴香的情緒增幅器能力讓她的感受永遠比普通人更強烈、更難控制——焦慮一旦觸發，就會超出言語和理性所能承受的範圍。嚼冰塊是她在情緒崩潰邊緣的物理錨點：冰塊在牙齒間碎裂的痛楚和寒冷，是唯一能將她拉回「我還在這個身體裡、我還是真實的」的感覺。這與美夜子的長泳窒息、凜的痛覺依存共享同一個底層邏輯——身體感覺作為心理錨點，用痛楚確認存在。此習慣在Act II「社會性死亡」後尤其頻繁：當晴香的公共身份被徹底摧毀，這種自我確認就是她維持心理邊界的最後防線。

### 圖片說明

晴香的情緒增幅器能力讓她的感受永遠比普通人更強烈，焦慮一旦觸發就超出言語和理性所能承受的範圍；嚼碎冰塊的痛楚和寒冷是她在崩潰邊緣將自己拉回「我還在這個身體裡」的物理錨點。她已因此磨損了幾顆牙齒，但只有冰在牙齒間碎裂的那一刻，她才確認自己仍然真實存在。

### 詳細 Prompt（內核描述）

當焦慮達到無法承受的程度時——心跳加速、呼吸困難、思想混亂——晴香會從冰箱拿出冰塊，放入口中。冰塊在牙齒間碎裂的聲音與感觸成為了她的自我確認方式——痛楚與寒冷證明她還活著、還能感受、還能控制某種東西。這是一種非自殺性的自傷，但同樣成癮：她已經無數次咀嚼冰塊至嘴唇流血、牙齒磨損。

她已經因此磨損了幾顆牙齒，牙醫多次警告，但她無法停止。在危機時刻，冰塊的冷感與碎裂聲是唯一能將她拉回現實的東西——當世界看起來像是要崩潰時，冰塊的物理存在感是確認「我還在」的唯一證據。她甚至會在公開場所做這個動作，只要沒人注意到。嘴角可能帶著血跡，但她不在乎。

每次危機後，她會檢查口腔，確認損傷程度，彷彿在給自己的痛楚評分。這個行為已經成為她情緒調節系統的一部分——沒有它，她不知道如何活下去。

**視覺重點**：晴香的臉部特寫、嘴裡的冰塊、牙齒咀嚼時的力度、嘴角的血跡或損傷、焦慮情緒的視覺化（背景失焦、光線扭曲、內心風暴）。

### Midjourney 標準版

```
Close-up of a teenage girl's face, eyes wide with anxiety,
mouth filled with ice cubes caught between her teeth.
The ice cracks audibly in the moment—visible fragments and shine
catch cold fluorescent light. Her expression shows both pain and relief,
trembling lips parted slightly. Visible small wounds on her lips
suggest repeated habit—faint blood traces, healed scars.
Behind her face, the background blurs and distorts,
suggesting internal panic or emotional overwhelm.
Her trembling hands partially visible at frame edge.
The overall atmosphere conveys crisis moment—
seeking grounding through sensory input and self-controlled pain.
Color palette: pale skin tone, frost blue from ice, red from minor wounds,
clinical fluorescent cast. Lighting: harsh overhead light highlighting trauma markers.
Emotional tone: desperate grounding ritual, silent scream of overwhelm
masked by physical sensation, addiction to pain as proof of existence.
-- ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
Close-up of a young person's face showing distress,
mouth containing ice cubes. Their expression shows
a mix of pain and focus, with visible tension.
Faint marks on lips suggest repeated habit.
The background shows subtle visual distortion conveying
internal emotional overwhelm. Soft cold lighting from the ice
contrasts with the figure's warm skin tones.
Atmosphere emphasizes grounding through sensory experience
during moments of anxiety or crisis.
The image suggests coping mechanisms and internal struggle
without explicit harm depiction.
-- ar 16:9 --niji 6
```

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`



---

## 圖153：「破弦自傷」（晴香 / Broken Guitar String Self-Harm）[PRIVATE_INTIMATE_MOMENT]

**建議輸出文件名**：`ConceptArt_Scene_153_Haruka_BrokenGuitarStringSelfHarm.png`

### 劇情背景

`[WRONG→已修正 2026-07-17]` 原文將傷口位置寫成「手臂內側割痕」，但依 `haruka.md` §關鍵習慣 habit-broken-guitar（habit #9）明確定案：呢個習慣係「反復彈奏一根刻意弄斷的吉他弦，持續直到弦割破**指尖**出血」——傷口喺**手指/指尖**（彈弦動作造成），唔係用弦當刀片喺手臂上劃割痕；遮蓋方式係「手指上的細小傷口被膠布遮掩，外觀『只是貼膠布的手』」，呢個「貼膠布的手」嘅偽裝正正同「膠布哲學」（habit #1）直接呼應，比「手臂割痕」更貼近 canon 原意。晴香的核心謊言是「我的真實情感是一把失控且致命的武器」——她相信自己的情緒一旦真正釋放，就會傷害周圍所有人（因為情緒增幅器的能力本身就可能做到這件事）。在所有情緒出口都被封閉的時刻，破弦自傷是她「讓痛楚有一個出口」的扭曲解決方案：不是求死，而是「我需要被感受到，但我沒有安全的方式表達它」。此習慣連接「膠布哲學」的深層邏輯：兩者都不是真正的治癒，都在等待Act IV整合夕、學會「被愛不需要完美」的那一刻；危機解除後此習慣停止。

### 圖片說明

晴香相信自己的情緒一旦真正釋放，就會傷害周圍所有人，因此在危機期獨處時，她反覆彈奏一根刻意弄斷的吉他弦，直到弦割破指尖出血——不是求死，而是讓痛楚代替那些無法說出口的話。傷口很小，很快被膠布遮住，外觀「只是貼膠布的手」不會引發旁人追問，與她日常的膠布哲學融為一體。

### 詳細 Prompt（內核描述）

晴香保留著一根刻意弄斷的吉他弦。當她無法言說痛楚時，當所有的言語都變得蒼白無力時，她會在危機期獨處時反覆彈奏這根弦——手指一次次撥過斷裂的弦口，直到指尖被割破出血。這不是尋死，而是在聲稱「我感受到痛楚，因此我存在」。

外人幾乎看不出異常——指尖的傷口很小，總是很快被膠布蓋住，彷彿只是「貼膠布的手」，不會引發任何人追問。這正是她隱密性的來源：同一種膠布哲學語言，掩蓋著截然不同的傷口。

她用指尖的痛楚來代替言語，用血珠來代替眼淚。每次彈弦時，她會感受到微微的釋放——彷彿那些被囚禁在身體內部的痛楚終於有了一個出口。之後，她會仔細清理傷口，貼上膠布，回到「正常的晴香」。危機解除後，這個習慣便會停止。

**視覺重點**：晴香的手指與指尖、刻意弄斷的吉他弦、指尖出血與貼膠布的細節、她凝視傷口時的表情（既恐懼又滿足）、光線照射在指尖上的陰影。

### Midjourney 標準版

```
A close-up of a teenage girl's trembling fingers,
plucking a deliberately broken guitar string held taut in her other hand.
Her fingertips show small, fresh cuts from repeated plucking—
evidence of a private, repeated ritual rather than a single act.
A few strips of colorful bandage lie nearby on the surface,
ready to conceal the marks afterward.
A single drop of fresh blood catches light on a fingertip—raw, immediate, real.
Her face is partially visible above her hands—
expression shows quiet desperation and strange calm,
as if this ritual brings paradoxical peace.
Atmospheric: intimate trauma, coded language of pain,
solitary communication through the body, hidden in plain sight as "just a bandaged hand."
Color palette: pale skin, deep red of blood, dark shadow, metallic glint of string, colorful bandage strips.
Lighting: soft focus on the fingertips, slight highlights on the fresh wound.
Emotional tone: self-harm as language, pain as proof of feeling,
a wound easily disguised as an ordinary bandaged hand.
-- ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
Close-up of a young person's hand and fingertips showing small marks.
A broken string is held taut between their fingers. Their trembling grip
suggests emotional distress. Faint marks tell a story
of repeated difficult coping, easily hidden by bandages nearby.
Their face is partially visible above, showing a mixture of calm focus and internal pain.
The intimate composition conveys psychological struggle
and non-verbal communication through the body.
Atmosphere emphasizes the personal meaning of physical markers
as records of internal suffering. Lighting is soft and focused.
-- ar 16:9 --niji 6
```

**Reference Images**：
- 晴香：`ConceptArt_Haruka_CasualWear.png`



---

## 圖154：「摺紙星星」（凜 / Paper Star Folding Habit）[PRIVATE_INTIMATE_MOMENT]

**建議輸出文件名**：`ConceptArt_Scene_154_Rin_PaperStarFolding.png`

### 劇情背景

Alpha線的凜是偶像，通宵達旦手摺星星送給粉絲——每一顆都帶著純粹的愛與祝福，笨拙緩慢，是她「相信小小的善意有用」的具體行動。被軍方武器化後，植入的精細操作能力讓她能以殘影速度單手摺出幾何完美的星星（CDL-154）。被黑奏重組後，她不再知道這個習慣的來源——放空時雙手不受控地摺出一堆完美的星星，然後面無表情全部掃入垃圾桶（「不具備戰術價值的無意義行為」）。她失去了愛的能力，但身體還記得愛的形狀。此習慣是Act I觀眾視角轉移的關鍵：初見讀作「冷血特工的恐怖手指靈活度」，Act III凜前史揭露後回溯，才讀懂那雙手一直在追尋當年通宵摺星星的自己。

### 圖片說明

凜在生前曾是以摺紙星星送給粉絲的溫柔偶像，被重組為情緒管理局公務員後，她不再記得這個習慣的來源，但放空時雙手仍不受控地摺出幾何完美的星星，然後面無表情全部掃入垃圾桶。她的房間堆積著數千顆星星——身體一直記得愛的形狀，即使頭腦已不知道那是什麼。

### 詳細 Prompt（內核描述）

凜的房間被數千個手工摺紙星星填滿——堆積在書架上、床底下、抽屜裡、牆角。每個星星都是她在失眠夜裡用碎紙片摺成的——白紙、舊報紙、包裝紙、甚至被撕碎的信件和筆記。這個重複行為已成為她的冥想——在摺疊的過程中，她可以短暫逃離思考，將注意力完全集中在一個簡單、可控、可完成的動作上。

她摺星星的速度越來越快，技巧越來越純熟，但內心卻越來越空洞。摺星星讓她的雙手忙碌，這樣她的腦子就不會去想那些她無法停止的想法。每個星星代表一個被逃避的時刻、一個無法言說的恐懼、一個她想遺忘卻無法遺忘的記憶。

她甚至會在白天——在學校、在工作、在人前——暗中進行這個動作，手指在口袋裡摺著紙片。沒人知道她為什麼這樣做，她自己也無法解釋。這些星星沒有特別的意義，但它們的存在本身就是她存在的證明。她會偶爾看著這些星星，試圖在其中找到某種秩序或意義，但最終只是感到更深的空虛。

**視覺重點**：凜的房間被星星填滿（數千個）、凜摺紙的特寫、手部細節與傷口（可能因長期摺紙磨損）、混雜的紙張顏色、凜坐在星星堆中失神的表情。

### Midjourney 標準版

```
A bedroom completely filled with thousands of tiny paper stars—
white, printed, colored paper folded into delicate five-pointed forms.
They cover every surface: shelves overflowing, floor carpeted,
piled on the bed, cascading from drawers. Each star catches soft light
creating a sea of subtle shadows and highlights.
A teenage girl sits in the center, surrounded by her creation,
hands folded with a fresh star half-completed.
Her face shows quiet desperation disguised as peaceful focus.
Her fingers show calluses and minor paper cuts from countless folds.
The composition emphasizes obsessive accumulation and
repetitive coping mechanism manifested as physical space invasion.
Color palette: whites, pale paper shades, shadows between stars,
muted daylight filtering through.
Lighting: soft natural light creating depth through star layering.
Emotional tone: meditative escape masked as productive habit,
accumulation of avoidance, numbness achieved through repetition.
-- ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A bedroom filled with countless handmade paper stars in various colors and paper types.
Stars cover shelves, the floor, and most surfaces,
creating a textured, accumulated space.
A young person sits among the stars, hands holding a partially folded star.
Their expression shows focused contemplation mixed with quiet melancholy.
Calluses and marks on fingers suggest long-term repetitive crafting.
The overwhelming quantity of stars suggests obsessive creative channeling.
Atmosphere emphasizes meditative escape through repetitive craft
and the accumulation of coping through hands-on activity.
Soft natural lighting creates depth through the layered stars.
-- ar 16:9 --niji 6
```

**Reference Images**：
- 凜：`ConceptArt_Rin_CasualWear.png`



---

## 圖155：「石像前的懺悔」（秋穗 / Statue Confession Ritual）[PRIVATE_INTIMATE_MOMENT]

**建議輸出文件名**：`ConceptArt_Scene_155_Akiho_StatueConfession.png`

### 劇情背景

`[WRONG→已修正 2026-07-17]` 原文將石像描述為「廢棄公園/建築內的風化石雕，missing fingers, weathered」，但依 `aeri.md` §石像形態（現實世界）明確定案：愛莉的石像係「**半透明橙色水晶寶石質感**，雙手交疊安詳沉睡；陽光照射時散發暖橙色光芒；特定光線角度下可見水晶內部流動的橙紅色脈紋，如心跳般緩慢搏動」——唔係普通風化石雕（無缺損、無苔蘚、無missing fingers），姿態亦「不像普通屍骸的扭曲凝固」。石像位置依 `DIGEST_LOCATIONS.md` §8a 應為**秋穗實驗室（塔地底）**，唔係公園/廢棄建築等不明地點。另外原文引用「CDL-013」實際係「愛莉揭示線設計（AKS-A1，紙皮騎士外形→魔法少女騎士形態嘅視覺連續性設計）」，同石像前懺悔呢個日常習慣無關，屬張冠李戴——正確依據應為 `akiho.md` §石像前的懺悔（habit-statue-confession，無獨立CDL編號）。秋穗的女兒愛莉在她主導的情緒力量裝置實驗中意外屍骸化，成為石像——這是秋穗「結果論」行事方式產生的第一個直接代價，也是她此後所有罪行的起點（akiho.md §愛莉的意外）。她每天到愛莉石像前說話，傾訴研究進展、哭訴罪孽——而她不知道的是，愛莉在集體潛意識深處仍能聽見一切（「愛莉的濾心機制」）。石像前的懺悔是秋穗試圖用儀式性自我懲罰代替真正和解的心理機制：石像不評判、不原諒，她因此可以無限重複懺悔，卻永遠不必面對真正的赦罪——或者被拒絕。此場景連接Act IV秋穗弧光的終點：真正的救贖不是修正過去，而是接受愛莉說出「我原諒你」。

### 圖片說明

秋穗的女兒愛莉在她主導的實驗中意外變成半透明橙色水晶質感石像，雙手交疊安詳沉睡，陽光下散發暖橙光芒——這是秋穗此後所有罪行的起點。在秋穗實驗室（塔地底）深處，她每天到石像前說話、傾訴、懺悔，在石像腳下放置各種祭品。石像不評判、不原諒，她因此可以無限重複懺悔，卻永遠不必面對真正的赦罪——或被拒絕，而她不知道的是，愛莉在集體潛意識深處仍能聽見一切。

### 詳細 Prompt（內核描述）

秋穗經常在秋穗實驗室（塔地底）深處，於愛莉的水晶石像前進行獨白。石像呈半透明橙色水晶寶石質感，雙手交疊安詳沉睡，光線照射時散發暖橙色光芒，特定角度下可見水晶內部流動的橙紅色脈紋如心跳般緩慢搏動——她不像普通屍骸般扭曲凝固，而是安詳完整。秋穗向這座水晶石像傾訴她的罪惡感——她用情緒毒品傷害了朱音、她用科技控制了無數人的心理與決定、她曾經是一個無情的執行者。

石像聆聽但不評判，這給了她一種虛假的救贖感。她在石像前進行的懺悔帶著一種自我中心的哀痛——不是真正為傷害過的人哀痛，而是為自己曾經做過的事而感到羞愧。石像成為了她的告解神父，儘管它無法真正寬恕她。

每次懺悔後，她都會在石像前留下某樣物品——一張寫著「對不起」的紙條、一朵白色花朵（象徵純潔，她永遠不會擁有的）、一滴血（象徵她的虧欠）、甚至她親手製造的毒品（象徵她的罪)。這已成為她尋求原諒的唯一方式，儘管她知道這是徒勞的。石像永遠不會原諒她，所以她必須一遍遍地懺悔。

**視覺重點**：半透明橙色水晶質感石像（非風化石雕）、水晶內部橙紅色脈紋、實驗室地下環境、石像上的祭祀物品、秋穗的面部表情（既虔誠又絕望）、光線照亮她的臉和水晶石像、她跪或站在石像前的姿勢。

### Midjourney 標準版

```
A translucent orange crystal statue of a young girl, deep in an underground laboratory beneath a tower—
hands folded peacefully, sleeping serenely, not contorted like a typical corpse.
Warm amber-orange light glows softly from within the crystal itself;
at certain angles, faint red-orange veins pulse slowly inside, like a heartbeat.
A middle-aged woman in a lab coat kneels before it, hands pressed to its warm-glowing surface,
face tilted upward in an expression of anguished confession.
Her lips move, words forming in the quiet of the laboratory.
At the statue's base, offerings accumulate:
crumpled handwritten notes, wilted white flowers, dried blood drops,
small vials suggesting guilt-offerings, alongside failed scientific prototypes.
Atmospheric lighting: dim laboratory light mixed with the statue's own warm glow,
casting long shadows that emphasize isolation and penance.
Her face shows profound shame, desperation for forgiveness,
and the knowledge that redemption is impossible.
Color palette: warm translucent orange crystal, cool clinical lab tones, pale skin, faded white flowers,
deep shadows. Atmosphere: ritualized guilt,
seeking absolution from the sleeping crystal figure,
performative penance that changes nothing.
-- ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A translucent amber crystal statue of a sleeping young girl in an underground laboratory space,
hands folded peacefully, glowing faintly from within.
A woman kneels before it with an expression of deep contrition.
Her hands touch the statue's warm, glowing surface. At the base,
various offerings are placed: flowers, notes, other symbolic objects
suggesting a ritual of confession and penance.
Dim, atmospheric laboratory lighting mixed with the crystal's inner glow
emphasizes the solemnity and isolation of the moment.
Her face expresses shame and desperate seeking for forgiveness.
The composition suggests a ritualized attempt at redemption
through communication with the sleeping figure.
-- ar 16:9 --niji 6
```

**Reference Images**：
- 秋穗：`ConceptArt_Akiho_CasualWear.png`



---

## 圖156：「儀器掃描愛莉遺物」（秋穗 / Instrument Scanning Ritual）[PRIVATE_INTIMATE_MOMENT]

**建議輸出文件名**：`ConceptArt_Scene_156_Akiho_InstrumentScanningRitual.png`

### 劇情背景

`[INFERRED]`：具體遺物項目（頭髮膠囊、布娃娃、金屬盒、字條）canon 未逐一列出，屬合理延伸演繹；核心概念（秋穗以科學儀器嘗試「修正過去」）有 `akiho.md` §關鍵習慣 2「科學儀器修復嘗試」支持。秋穗是頂尖生命機械學家，是情緒力量裝置的原型研發者——她唯一真正精通的語言是科學與數據。面對愛莉屍骸化為（仍存在、仍有意識的）水晶石像，秋穗無法以母親的方式靠近失去，只能以科學家的方式靠近：用儀器嘗試新方案、記錄數據、企圖「修正過去」（akiho.md §關鍵習慣 2；§石像前的懺悔）。這是科學家用她僅有的工具試圖對抗她無法接受的現實——她比任何人都更清楚死亡是終局，卻仍然重複掃描、記錄、保存，給自己一種「還在做某事」的假象。此場景與圖155（石像懺悔）形成一對：石像前的懺悔是情感出口，儀器掃描是理智防衛，兩者都是同一份無法放手的執念的不同表達，共同指向Act IV秋穗必須學會「放手讓愛莉走」的弧光終點。

### 圖片說明

秋穗是一位頂尖生命機械學家，面對女兒變成石像這件事，她唯一精通的語言是科學與數據——她用儀器反覆掃描愛莉的遺物，記錄數據，試圖用科技重建愛莉的存在，盡管她比任何人都更清楚這是徒勞的。這是科學家用她僅有的工具試圖對抗她無法接受的現實，是一種用「還在做某事」的假象來對抗真正失去的逃避。

### 詳細 Prompt（內核描述）

秋穗用各種科學儀器反覆掃描愛莉遺留下來的物品——一根棕色頭髮（保存在透明膠囊中）、一件破舊的布娃娃、一個裝過她最愛點心的金屬盒、手寫的字條。她使用DNA掃描儀、光譜分析儀、微觀鏡頭、甚至某種她自製的「生命檢測儀」，試圖通過數據來重建愛莉——彷彿科學儀器能讓已死去的人復活。

她深知這是無用的。她比任何人都更理解死亡是終局，沒有任何儀器能改變這個事實。但她無法停止。每次掃描，她都會記錄數據，將其保存在一個精心整理的檔案中——温度記錄、化學成分分析、微觀影像、頻率數據。彷彿這些數據本身就能讓愛莉繼續存在。

這已成為她對愛莉的執念表現——用理性與科技來對抗無法接受的現實。她甚至曾經嘗試用掃描數據來「還原」愛莉的樣貌，生成3D模型，但最終還是失敗了。失敗本身已經令她崩潰。現在，她只是重複地掃描、記錄、保存，給自己一種「還在做某事」的假象。

**視覺重點**：秋穗周圍堆積的科學儀器、掃描中的遺物、螢幕上的數據與影像、秋穗的面部表情（專注又絕望）、儀器發出的冷光。

### Midjourney 標準版

```
A young woman in a small, cluttered laboratory or bedroom workspace,
surrounded by scientific instruments and scanning devices.
She focuses intently on scanning items:
a preserved hair strand in a clear capsule, a worn cloth doll, a small metal box,
papers with handwriting—relics of someone deceased.
Various instruments glow with cold scientific light—
spectrometers, microscopes, custom-built scanning devices,
some configurations suggest obsessive modification.
Holographic or screen displays show data streams,
DNA sequences, spectral analyses, frequency readouts.
Her expression combines scientific focus with profound grief—
she searches data as if numbers could resurrect the past.
Her hands move with precision and ritual repetition,
scanning the same object multiple times.
The workspace is meticulously organized yet obsessive—
data fills every available space, files stack densely.
Atmospheric: clinical despair, technological necromancy,
data as substitute for presence.
Color palette: cool blues from instruments, warm amber from relics,
cool screen light, grief-stricken shadows.
Emotional tone: grief channeled through rationality,
impossible hope that data preserves the dead,
obsessive documentation as coping mechanism.
-- ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A young woman in a workspace filled with scientific instruments and devices.
She carefully scans personal items—preserved items, cherished objects,
memorabilia of someone no longer present.
Computer screens display data analysis and measurements.
Her expression shows intense focus mixed with profound sadness.
The instruments glow with cool scientific light.
Her movements are precise and ritualistic, suggesting
repeated attempts to preserve or understand through data.
The workspace is meticulously organized, filled with files and records.
Atmosphere emphasizes grief expressed through scientific methodology,
and the human impulse to preserve memory through technology.
Lighting is cool and clinical, emphasizing the separation
between emotional content and rational process.
-- ar 16:9 --niji 6
```

**Reference Images**：
- 秋穗：`ConceptArt_Akiho_CasualWear.png`



---

## 圖157：「病態無痕修補」（操 / Compulsive Seamless Mending Habit）[PRIVATE_INTIMATE_MOMENT]

**建議輸出文件名**：`ConceptArt_Scene_157_Misao_SeamlessMendingHabit.png`

### 劇情背景

`[WRONG→已修正 2026-07-17]` 原文將呢個修補習慣嘅根源歸因於「目睹母親因無法自我修復而被改造成活體人偶」（CDL-297，恐懼變成母親）。但依 `ayakomoji_misao.md` §關鍵習慣 habit-seamstress（**CDL-155/156**）明確定案，「病態無痕修補」嘅真正心理根源係操自己身體上嘅創傷：父親安排嘅物理性別重置手術（CDL-155）在她身體上留下縫合痕跡——她的身體像被強行剪開又醜陋縫合的科學怪人；對修補「絕對不能留縫線痕跡」的病態執著，是潛意識試圖掩蓋自身肉體那些手術縫線的心理投射。AKS 埋位設計明確：「那雙靈巧的手，不是貴族教養，而是一個拼命掩蓋自己身體傷口的重症患者的手」——即修補習慣嘅根源係「掩蓋自己嘅傷口」，唔係「恐懼變成母親」（CDL-297 母親創傷雖然真實存在，且同傀儡魔法的象徵根源相關，但唔係呢個特定修補習慣嘅主要驅動源）。病態無痕修補是這份自身創傷的日常儀式：她能把物件修補到「從未被破壞過」的完美，卻無法修補自己身體上真正的手術縫線、被父親否定的身份、被迫出賣隊友的靈魂。此習慣連接Act III「無心完美人偶」段落——操製作了完美的女性人偶殼卻無法感受冷暖，最終打碎它：「沒有痛覺的完美比地獄更可怕」，是她對這份修補強迫症的最終清醒。

### 圖片說明

操隨身攜帶細針與絲線，對破損的東西有不可抑制的修補衝動——隊友撕裂的戰鬥服、任何出現裂縫的布料，她補過的東西連縫合痕跡都看不見，完美得如同從未破裂。Act I 觀眾初讀為「千金大小姐教養極好」；但這雙靈巧的手真正的根源，是她潛意識試圖掩蓋自己身體上那些手術縫線（父親安排的物理性別重置手術，CDL-155）——衣服上的裂縫和線頭喚起「被改造的不正確身體」的羞恥感，她必須將它們全部抹去。

### 詳細 Prompt（內核描述）

操對破損的東西有著病態的執著。她的房間裡堆積著需要修補的物品——隊友撕裂的戰鬥服、任何出現裂縫的布料、破損的玩具。她必須修補每一根斷裂的線、每一道裂縫、每一個缺口，用針線進行著近乎藝術級別的修補，目標是讓被破壞的東西看起來從未被破壞過——連縫合痕跡都看不見。

她可以花費數小時修補一件衣物，使用最細的線、最小的針跡，直到修補處完全不可見。這不是為了實用性，而是絕對不能留下縫線痕跡的病態執著。

這份執著的真正根源，是操自己身體上物理性別重置手術（CDL-155）留下的縫合痕跡——她的身體像被強行剪開又醜陋縫合的科學怪人。她無法修補自己身體上真正的傷口，只能將這份潛意識的羞恥感投射到外部物件上：衣服上的裂縫和線頭喚起「被改造的不正確身體」的羞恥感，她必須將它們全部抹去。

修補變成了一種冥想，也是一種逃避。當她在修補時，她可以假裝身體上的傷口也能被同樣無痕地修復。她甚至會修補本來已經修好的東西，尋找那些不存在的缺陷，重複修補，直到線變得模糊、顏色變淡為止。那雙靈巧的手，不是貴族教養，而是一個拼命掩蓋自己身體傷口的重症患者的手。

**視覺重點**：操坐著修補、周圍堆積的待修補物品、細緻的針線工作細節（放大鏡視角）、操的臉上專注與哀痛的混合表情、燈光照在工作上。

### Midjourney 標準版

```
A young woman sitting in meticulous focus,
performing needlework on damaged fabric with surgical precision.
Around her workspace, accumulated objects wait for repair—
torn clothing, damaged books, cracked ceramics, broken items
organized by severity of damage. She works with finest needle and thread,
using a magnifying glass to examine stitches,
ensuring perfection that borders on obsession.
Her workspace is immaculate:
organized threads by color, precise tools,
documentation of repairs with photographs or notes.
The scene shows paradox:
perfect exterior repair vs. her internal emptiness—
the emotional void behind the perfect stitches.
Her expression combines meditative calm with underlying desperation,
working as if these repairs might somehow heal her own fractures.
The lighting emphasizes the microscopic detail of her work,
shadows between threads highlighting the obsessive nature.
Color palette: pale fabric tones, thread colors,
clinical work light, shadows of damaged items.
Emotional tone: mending as compulsion,
surface perfection masking internal brokenness,
obsessive control through needlework,
impossible restoration of self through objects.
-- ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A young person concentrating intently on careful needlework and mending.
Damaged items—torn fabric, cracked objects, worn clothing—
surround the workspace, organized carefully. They use fine techniques
and tools including magnifying glass to ensure precise repairs.
Their expression shows both calm focus and underlying emotional weight.
The workspace is meticulously organized with color-coded threads
and documentation of repairs. Lighting emphasizes the detailed craftwork.
Atmosphere conveys meditative focus channeled into perfectionist restoration,
suggesting how physical mending might represent attempts
at emotional repair or control.
-- ar 16:9 --niji 6
```

**Reference Images**：
- 操：`ConceptArt_Misao_CasualWear.png`



---

## 圖158：「K房唱歌——雨天」（美夜子＋隊伍 / Karaoke Rain Song）[DAILY_WARMTH]

**建議輸出文件名**：`ConceptArt_Scene_158_Miyako_KaraokeRainSong.png`

> ⚠️ **CDL-330 修正（2026-07-14）**：本圖舊版「廢棄K房獨自尖叫唱到喉嚨流血」係本 spec 自行扭曲嘅版本，同 canon（miyako.md habit #11 / CDL-153 / `backup/screenwriter/10_Girl_Daily_Social_Interaction_Setting.md` §4.1 / 00_Story_Brief.html）不符，作者確認流血版唔存在，已按 canon 重寫。

### 劇情背景

隊伍日常出行嘅 K 房場景（CDL-153，作者確認 2026-04-08）。晴香啱啱又唱又跳完自己嘅《Happy Sugar Magic》，桌上堆滿飲料零食，氣氛熱烈。輪到美夜子，她切掉歡快伴奏，縮在沙發角落，雙手握著麥克風，點了一首關於失去與被留下來的人的情歌（暫代表曲：《雨天》，最終為原創歌，情感對標）——聲音低沉、乾淨，帶著讓人想哭的壓抑感，全場靜下來。晴香問「妳係咪受過好重嘅情傷」，美夜子答：「我沒有談過戀愛。……『失去』的感覺是通用的。不管是失去戀人、失去戰友，或者是失去自己原本應該有的人生。」她拒唱晴香建議的快樂歌：「太亮了。對一直待在陰影裡的人來說，那種光是刺眼的。」**情緒設定根據**：她唱得好不是天份——Alpha線未經折磨的美夜子歌聲平凡；Beta線的她，死亡→冰封→改造→目睹凜被處決的創傷疊加成靈魂的重量，灌入了聲音。**AKS 埋位**：Act I 觀眾只見「這個前輩很有故事」；Alpha 線揭露後回溯：那份心碎的歌聲，是晴香創世者原罪刻在姊姊靈魂上的傷痕。

### 圖片說明

熱鬧的 K 房包廂裡，晴香等人圍坐，桌上堆滿飲料零食。美夜子縮在沙發角落，雙手握著麥克風唱一首悲傷的情歌，聲音低沉乾淨、壓抑得讓人想哭。剛才還在鬧的隊友們安靜下來看著她。在其他人眼中，這個沒有戀愛經驗的前輩，竟然能把地獄情歌唱得如此之痛。

### 詳細 Prompt（內核描述）

畫面核心係對比：包廂前一秒仲係晴香式嘅熱鬧（散落嘅麥克風、飲品、零食、閃燈），下一秒被美夜子嘅歌聲改變咗空氣。美夜子唔企出嚟，縮喺沙發角落，膝頭微收，雙手握米，眼望螢幕歌詞，唱得極投入——彷彿每一個字都在咀嚼自己的命運。冇眼淚、冇嘶叫、冇任何自毀元素——力量全部收喺壓抑入面。隊友反應各異：晴香瞪大眼聽到入神（想喊），操放低咗手機，紫音咬住零食停咗。螢幕藍光打喺美夜子面上，同包廂暖色燈形成「雨天/陽光」對比。

**視覺重點**：正常營業嘅 K 房包廂（非廢棄）、沙發角落縮起嘅美夜子、雙手握麥克風、螢幕悲傷歌詞、桌上飲料零食、隊友安靜聽住嘅反應、冷暖光對比。

### Midjourney 標準版

```
A cozy karaoke room scene: a group of teenage girls on sofas,
table crowded with drinks and snacks, warm party lighting.
In the corner of the sofa, one silver-blue haired girl curls up,
holding the microphone with both hands, singing a sad ballad—
eyes fixed on the lyric screen, posture withdrawn but voice deeply felt.
No tears, no theatrics: restrained, quiet intensity,
as if chewing her own fate with every word.
Her friends have gone silent mid-celebration—
one bright pink-haired girl leans in, eyes wide and glistening,
another lowers her phone, another stops mid-snack.
Cold blue light from the lyric screen washes over the singer's face,
contrasting with the warm amber party lights around her friends—
a visual of "rain versus sunshine" in one room.
Color palette: warm karaoke neon, scattered snack colors,
the singer isolated in a pool of cool blue screen light.
Emotional tone: an unexpectedly devastating love song
sung by someone who has never been in love—
grief that is universal, loss poured into borrowed lyrics,
a rare quiet moment of ordinary girlhood shared by the team.
-- ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A group of teenage girls in a karaoke room, drinks and snacks on the table.
One girl curls up in the sofa corner singing a melancholic ballad
into a microphone with both hands, restrained and deeply moving.
The others, previously partying, now listen in silence.
Cool light from the lyric screen on her face contrasts
with the warm room lighting. The mood is bittersweet:
an ordinary teenage hangout pierced by an unexpectedly
heartfelt performance about loss.
-- ar 16:9 --niji 6
```

**Reference Images**：
- 美夜子：`ConceptArt_Miyako_CasualWear.png`



---

## 圖159：「長泳窒息習慣」（美夜子 / Drowning Swim Habit）[PRIVATE_INTIMATE_MOMENT]

**建議輸出文件名**：`ConceptArt_Scene_159_Miyako_DrowningSwimHabit.png`

### 劇情背景

美夜子作為Alpha線唯一真正死亡的角色，以「借來的生命」在Beta線存活——她的核心謊言是「我的命是借來的，所以我沒有軟弱的權利」（miyako.md §故作堅強——被強加的身份）。長泳窒息是她的存在確認儀式（miyako.md §habit-long-swim）：在水下延遲浮起，在肺部灼痛、視野模糊之際，體驗死亡與活著的邊界——只有在必須用力才能呼吸的瞬間，她才真實感受到這具借來的身體仍然完整。此習慣與黑暗沖涼（圖145）形成一組：沖涼是悼念已逝者，長泳是確認自身仍存。兩者都是她在「已死但活著」的永恆懸空狀態中，維持對自我存在感知的方式——連接Act III月下崩潰（圖74），那是她的存在確認儀式徹底失效、靈魂1%意志逼近臨界的頂點。

### 圖片說明

美夜子以「借來的生命」在世界存活，她的核心謊言是「我的命是借來的，所以我沒有軟弱的權利」。她潛入水中故意延遲浮起，在肺部灼痛、視野模糊之際體驗死亡與活著的邊界——只有在必須用力才能呼吸的瞬間，她才真實感受到這具借來的身體仍然完整。這是她確認自己仍存在的最危險的日常儀式。

### 詳細 Prompt（內核描述）

美夜子會進行一項極度危險的習慣——她潛入水中（游泳池、湖、任何水域），故意延遲浮起。她會在水下停留，直到肺部開始灼痛、視野開始模糊、意識開始飄散，只有在最後一刻、在真正無法呼吸之前，她才會急促地浮出水面。

在那一刻，她體驗到了「死亡」與「活著」之間的邊界——呼吸第一口空氣時的痛楚、眼睛睜開時的刺痛、意識回歸時的震撼。這讓她感到「活著」——彷彿只有在經歷死亡邊緣時，她才能確認自己還活著。

每次她都會延遲得更久、更危險。她開始計算能在水下停留多長時間，挑戰自己的極限。這已成為她對生死的一種扭曲的遊戲——一種確認「她還想活著」的危險方式。在水下的那一刻，她的思想完全停止，沒有痛楚、沒有記憶、沒有責任。

她甚至計畫過讓自己溺水——試過多次，每次都在最後一刻改變主意。有時她會故意不帶救生衣去游泳，增加風險。有時她會在天黑後獨自去游泳，這樣沒人會知道她發生了什麼事。

一旦她停止了這個習慣，就表示她已經放棄了生存的意志。所以她必須持續這個習慣——這是她對生活的最後執著。

**視覺重點**：美夜子在水中的身體、從下方或上方看她潛水的視角、光線穿透水的效果、她的臉（眼睛緊閉或睜大、嘴部緊閉）、浮出水面時的瞬間、水濺起、她上岸後的表情。

### Midjourney 標準版

```
An underwater or water-level view of a young woman
suspended in water, deliberately avoiding surfacing.
Her body floats at the boundary between consciousness and oxygen deprivation—
muscles slightly tense, eyes closed or rolling back,
lips sealed tight despite lung-burning desperation.
The water above forms a rippling barrier between her and air.
Sunlight filters through the water surface in wavering patterns,
creating ethereal but suffocating atmosphere.
Her pale skin contrasts against dark water depth below.
Bubbles escape from her nose or mouth—
involuntary responses her will fights against.
The composition captures the moment between living and dying,
where consciousness begins to slip.
Time seems suspended; only her internal timer counts down
to the moment she must break surface.
Visual metaphor: water as both escape and danger,
submersion as temporary freedom from pain and identity.
The moment carries paradox:
seeking death while desperately clinging to life.
Her body position suggests neither complete surrender nor fighting,
but rather a strange peace in the boundary.
Color palette: deep blues and teals, filtered golden sunlight from surface,
her pale luminescence against darkness, bubble shimmer.
Lighting: natural filtered underwater light creating surreal dreamscape.
Emotional tone: suicidal ideation expressed through water ritual,
seeking oblivion while confirming aliveness,
dangerous boundary-play between existence and void.
-- ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
An underwater perspective showing a young woman suspended in water,
approaching the limits of breath-holding.
Her body is calm but physiologically stressed—
face serene despite internal physical struggle.
Sunlight filters through the water surface above in beautiful patterns.
Her pale form contrasts against the surrounding water depth.
The composition captures the meditative quality
of being between the conscious and unconscious,
between struggle and surrender.
Air bubbles rise from her lips,
subtle indicators of her body's autonomous responses.
The water creates a visual barrier to the air above.
The scene emphasizes the sensory experience of submersion
and the psychological boundary between being alive and being released.
The peaceful expression suggests paradoxical emotions:
seeking escape while maintaining connection to life.
-- ar 16:9 --niji 6
```

**Reference Images**：
- 美夜子：`ConceptArt_Miyako_CasualWear.png`



---

## 圖160：「凜不自知摺星星（美夜子目擊）」（Rin Folds Stars Without Knowing, Miyako Watches）[ACT_II]

**建議輸出文件名**：`ConceptArt_Scene_160_Rin_FoldingStars_MiyakoWatches.png`

### 劇情背景

**⚠️ 2026-07-17 批次9審計修正**：原文「美夜子在E-05任務中認出了被重組的凜（SPEC#24）」同「CDL-215」引用均為錯誤——E-05（偽王道二戰）同凜完全無關，已於SPEC#24/27審計確認；CDL-215實際係「凜三連爆兩個Outline beat設計」（E-III-01/02，Unit 00揭露，Act III），同本場景（凜無意識摺星星）無關，屬張冠李戴。核心視覺概念亦有誤：依`rin.md` habit-paper-stars（CDL-154）明確定案，凜被軍方植入頂級精細操作能力後，摺星星係「以殘影般的速度，單手摺出幾何比例完美的星星，然後面無表情地全部掃入垃圾桶（『不具備戰術價值的無意義行為』）」——原文「歪歪的、不均」嘅摺法同「散落在桌面」嘅結局同canon完全相反：真正嘅悲劇核心係「速度完美、成品完美，但她自己毫無所覺，亦不會留下任何一顆」。

帝國歷113年，凜（108年犧牲、黑奏重組後）以情緒管理局公務員身份存在（Act I全程背景狀態，見SPEC#24已confirm修正）。美夜子在日常追蹤觀察凜嘅過程中（具體任務內容`[NEEDS_FACT]`，見SPEC#35已confirm修正），目擊到凜在放空狀態下雙手不受控地高速摺出一堆完美星星，然後面無表情地全部掃入垃圾桶。凜自己不記得呢個習慣嘅來源。美夜子的貓形態在門邊靜止：她看見嘅唔係「破綻」，而係「一個失去愛的能力的人，身體依然記得愛的形狀」——這是身體記憶比語義記憶更頑固的第一個實證，也是`rin.md` CDL-274月下相認的情感鋪墊（AKS埋位：Act I旁觀者初讀=「冷血特工在炫耀恐怖的手指靈活度」；Act II/III凜前史揭露後回溯=「原來她不受控的雙手，一直在追尋當年通宵摺星星的自己」）。

**[NEEDS_FACT：具體beat歸屬]** `rin.md`原文只標「第二幕：紅線觸發」段落內描述呢個習慣，`ACT_II_OUTLINE.md`未見獨立beat編號記載本場景，唔可以假設掛喺任何已知beat（E-05/E-06/E-07等）之下——時間點暫標「Act I-II日常」，具體歸屬留待Beat Sheet層確認。

### 圖片說明

凜坐在桌邊的燈光下，眼神空洞放空，她自己不知道她的雙手正以超乎常人的速度摺著紙——單手，殘影般的動作，幾何比例完美無瑕的星星一顆接一顆成形。摺完，她面無表情地將整把星星掃進垃圾桶，沒有一顆留下。門框邊角，美夜子以貓的形態半隱在陰影裡，只露出半個身形和一雙圓而靜止的眼睛：她看見的不是笨拙的痕跡，而是完美到近乎可怕的手藝，同凜整個人的漠然形成最尖銳的對比——一個失去愛的能力的人，身體依然記得愛的形狀。她沒有走進去，沒有出聲，只是靜靜地確認了這個脆弱的可能性。

**劇情位置**：
- **時間點**：帝國歷113年 Act I-II 日常（`[NEEDS_FACT]` 具體beat歸屬待Beat Sheet層確認）
- **CDL追蹤**：CDL-154（摺紙星星習慣定案）；`rin.md` §摺紙星星（武器化的溫柔）；`miyako.md` §PTSD／跟蹤觀察（具體任務內容`[NEEDS_FACT]`，見SPEC#35）
- **前置事件**：凜108年重組後以情緒管理局公務員身份存在；美夜子日常追蹤觀察凜（見SPEC#35已confirm修正，非源自E-05）
- **本場景功能**：凜無意識地以殘影速度摺出幾何完美的星星，再面無表情掃入垃圾桶——她自己毫無所覺；美夜子在門邊目擊，這是她第一次看見「身體記憶比語義記憶更頑固」的實證
- **後續payoff**：美夜子持續關注凜的核心動機之一；`rin.md` CDL-274月下相認的情感鋪墊

**Reference Images**：
- 凜：`ConceptArt_Rin_CasualWear.png`
- 美夜子：`ConceptArt_Miyako_Cat.png`（原檔為CasualWear，本場景明確描述美夜子以貓形態在門邊目擊，改用Cat更貼合）

**詳細核心描述**（200-350字）：

辦公室或宿舍的一個不起眼的角落。夜間，只有一盞桌燈或走廊透進來的細光。

凜坐在桌邊，眼神空洞放空，沒有看手，沒有看任何地方。她的雙手卻在以超乎常人的速度動作——這是被軍方改造植入的頂級精細操作能力，殘影般的速度，單手就能摺出幾何比例完美無瑕的星星，邊角精準、對稱到近乎機械。

一顆接一顆，桌面上短暫堆起一小疊完美的星星。然後她面無表情地伸手，將整把星星一次掃進垃圾桶——沒有猶豫，沒有留戀，像是清理一份「不具備戰術價值的無意義行為」的殘餘。

這是身體的記憶，也是身體記憶最殘忍的地方：速度和精準都還在，但溫柔的意義已經被清空。

門縫旁，美夜子貓形態（半透明白貓）擠在門框邊角，只露出半個身形。她的貓眼是圓的，是靜止的——她看見的不是笨拙，而是完美到令人心碎的手藝，同凜整個人的麻木漠然形成最尖銳的對比。

美夜子沒有走進去。沒有出聲。她在看凜的手，直到最後一顆星星被掃進垃圾桶。

整個場景的重量在於對比：凜的漠然（她不知道自己在做什麼，也不會留下任何痕跡）和美夜子的張力（她完全知道這代表什麼）。

**生成提示（Midjourney）**：
```
Style: quiet emotional revelation, dark magical girl intimate moment, observer and observed composition, painterly soft atmosphere
Mood: body memory as hope, perfection without meaning, the weight of recognition, holding still so as not to disturb something fragile
Colors: warm single lamp light on Rin's figure and hands, cold corridor blue on Miyako's position, small golden origami stars as fleeting warm accent before being swept away
Composition: foreground center — Rin sitting at desk, hands moving at inhuman speed folding geometrically perfect lucky stars, gaze vacant; background at door frame edge — semi-transparent white cat form, only half-body visible, large still eyes catching light
Lighting: single warm desk lamp on Rin's hands as focus, cold corridor light edge-lighting Miyako, deep shadow filling rest of space
Special effects: subtle motion-blur afterimage on Rin's hands showing superhuman speed, perfect geometric paper stars briefly visible before being swept into a wastebasket, subtle translucency of Miyako's cat form
Character: Rin (blank expression, hands moving at inhuman speed folding flawless stars then sweeping them away without hesitation); Miyako (semi-transparent white cat at door edge, round unblinking eyes, completely still)
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
Young woman sitting alone at night, blank vacant expression, her hands moving at inhuman blurred speed folding geometrically perfect small paper lucky stars without realizing it, then sweeping them all into a wastebasket with no hesitation, small white semi-transparent cat watching from the doorway with large still eyes, warm lamp light on hands, quiet intimate atmosphere, dark anime painterly style
--ar 16:9 --niji 6
```


---

# 世界觀設定

## 圖161：「維多利亞之淚：人造太陽剖面圖」（Victoria's Tear: Artificial Sun Cross-Section）[WORLD_BUILDING]

**建議輸出文件名**：`ConceptArt_Scene_161_VictoriasTear_CrossSection.png`

### 劇情背景

維多利亞之淚是帝國城市的唯一人造光源，同時也是情緒管理廣播系統的發射核心——它的光照射哪裡，情緒過濾頻率就覆蓋哪裡，令日區市民在生理層面無法感受到未被校準的情緒。表面上是壯麗的工程奇蹟，實質上其核心是一個汲取裝置，以收集而非放射為真正運作方向，是帝國情緒農場機制的物質基礎。Act III 決戰中維多利亞之淚的崩潰，標誌著帝國情緒控制系統的徹底瓦解，也是日區vs夜區光線差異的根本解釋。

### 圖片說明

一個巨大的人造太陽懸浮在城市上空，剖面圖揭開三層構造：外層是精密排列的發光蜂巢，中層是輸送淡藍色流體的神經管網，最深處是一顆深紅色的、像心臟一樣跳動的核心——流體方向向內，不是放射，而是汲取。城市在下方，左側明亮，右側昏暗。

**劇情位置**：
- **時間點**：世界觀設定（無特定時間點，適用全片）
- **CDL追蹤**：07_entities_and_devices §維多利亞之淚；01_world_rules §能量來源
  世界功能：帝國城市的唯一光源和能量來源，同時是情緒管理廣播的發射器。其存在使日區的「人造幸福」成為可能，並將帝國對情緒的控制以物理形式廣播至全城。
  視覺功能：建立帝國城市的視覺基礎設定；展示「人造美好」包裹黑暗核心的意識形態；令觀眾在早期就隱隱感知到帝國美好表象之下有不可告人的機制。
- **後續payoff**：Act III決戰中維多利亞之淚的崩潰視覺；日區vs夜區光線差異的根本解釋；EMB情緒廣播機制的技術基礎。

**Reference Images**：
- `[NO_REF]`（本場景屬世界觀設定圖，無角色出場）

**詳細核心描述**（約300字）：


畫面採用剖面圖設計語言，呈現維多利亞之淚的三層結構。整體外形為巨大球體，懸浮於城市上空，體積令人震撼——與下方城市比較，它幾乎佔天空的三分之一。

最外層是燦爛的光照系統：由數千個精密排列的光子放射器組成，向外投射均勻、溫暖的黃白光。這一層在剖面圖中呈現為整齊的蜂巢結構，帶有近未來的精密美感，像一件壯麗的工程藝術品。

中層是情緒廣播管道：細密的管道網絡從核心延伸至外層，每條管道中流動著淡藍色的半透明流體（情緒頻率載體）。這一層的剖面顯示出大量分支節點，像神經系統，也像某種工業管線。設計語言在此開始變得更工業、更機械，與外層的精美形成反差。

最深層是核心：一個深紅色的、幾乎像心臟的裝置。標示文字刻意用帝國技術語言（設計成觀眾無法立即讀懂的符號），但視覺上清晰呈現出這是一個汲取裝置而非放射裝置——流體方向向內，而非向外。

圖的下方，城市作為對比出現：左側日區光明整齊，右側夜區昏暗零亂，兩者在維多利亞之淚的光照下呈現出截然不同的命運。


**生成提示（Midjourney）**：
```
Style: dark anime illustration, painterly, technical cross-section diagram aesthetic, detailed mechanical design
Mood: awe-inspiring yet unsettling, imperial grandeur hiding dark machinery
Colors: warm gold and white for outer shell, cold blue for mid-layer conduits, deep crimson and black for inner core, muted city tones below
Composition: central cross-section of a massive sphere dominating upper two-thirds, city skyline comparison at bottom, left side bright day district, right side dim night district
Lighting: the sphere itself radiates intense warm light outward, inner layers progressively darker, core glows red-black
Special effects: flowing luminescent blue fluid in conduit layer, barely visible inner core pulsing like a heart
Details: honeycomb light emitter array on outer shell, branching nervous-system-like conduit network in mid-layer, extraction device at core with fluid flowing inward, imperial technical annotations in fictional script
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A massive artificial sun floating above a dystopian city, cross-section view revealing three layers: brilliant outer light array, blue fluid conduit network, dark crimson pulsing core. City below shows bright left district and dark right district. Technical diagram aesthetic, dark anime style, no characters.
--ar 16:9 --niji 6
```


---

## 圖162：「集體潛意識空間：後巷過渡狀態」（Collective Unconscious: Back Alley Transition）[WORLD_BUILDING]

**建議輸出文件名**：`ConceptArt_Scene_162_CollectiveUnconscious_BackAlleyTransition.png`
### 劇情背景

集體潛意識是故事世界中靈魂存在的底層維度，由億萬個靈魂的共同意志具現化而成（CDL-248，唯識宇宙第一公理）。屍骸化後意識碎片的去向、超自然戰場的本質、夜區某些特定場所成為臨界入口的世界規則，都在這個設定中得到物理解釋。集體潛意識空間在Act II E-11首次成為戰場，並貫穿Act III決戰——主角必須進入這個空間尋找靈魂碎片、對抗黑奏的集體共鳴地獄計畫。01_world_rules §集體潛意識。

### 圖片說明

夜區一條舊式後巷，磚牆、鐵管、霓虹燈招牌——一切看起來都很熟悉。但後巷某段牆壁正在悄悄變成別的東西：磚塊的形狀還在，裡面卻換成了深藍色的宇宙星空，像水彩暈染一樣慢慢向外蔓延。地面積水的倒影映出一個完全不同的廣闊空間。一個魔法少女站在那段磚牆邊緣，一隻腳剛踏進去，消失了。

**劇情位置**：
- **時間點**：世界觀設定（無特定時間點，適用全片）
- **CDL追蹤**：01_world_rules §集體潛意識；06_visual_bible §夜區視覺
  世界功能：夜區某些地點在特定條件下會成為進入集體潛意識空間的臨界入口，日常空間與深層心理空間之間的滲透界面。
  視覺功能：建立集體潛意識空間的視覺語言和進入規則；為NC段落和Act II E-11提供視覺基礎；令觀眾理解「現實」在這個世界中的邊界是模糊的。
- **後續payoff**：SPEC#12集體潛意識之城；SPEC#48淤泥深海；SPEC#2整合場景；整個集體潛意識系列場景的視覺一致性基礎。

**Reference Images**：
- `[NO_REF]`（世界觀設定圖，僅魔法少女輪廓剪影，無具名角色）

**詳細核心描述**（約280字）：


畫面設定在夜區一條典型的舊唐樓後巷：青苔磚牆、鏽蝕鐵管、殘破的霓虹燈招牌。這是完全可信的夜區日常空間，觀眾應在第一眼感到「熟悉」。

然而，後巷的某一段牆壁正在發生轉變。磚牆的材質開始「溶解」——不是崩塌，而是磚塊的形狀保留著，但材質變成了深藍色的宇宙星空，每一塊磚的輪廓都在，只是其中是無盡的虛空與星點。這個過渡是漸進的：過渡帶的邊緣，磚牆與星空互相滲透，像水彩暈染。

霓虹燈招牌的殘影繼續存在，但顏色開始產生偏移——紅色偏向洋紅，藍色偏向紫羅蘭，像在夢中看到的顏色，「差一點但不對」。地板仍然是普通瀝青，但地面的積水倒影已經是完全不同的空間：倒影中映出的是一個廣闊的空曠空間，不是後巷。

一個魔法少女的輪廓站在過渡帶邊緣，面對著「星空磚牆」。她的一隻腳踩在普通瀝青上，另一隻腳剛剛跨入那段磚牆——腳尖進入後消失，沒有穿透感，只是「不在了」。

整體色調：夜區的髒橙霓虹 vs 過渡帶的深藍宇宙，兩個色域並存但互不溶合。


**生成提示（Midjourney）**：
```
Style: dark anime illustration, painterly, atmospheric, urban supernatural
Mood: liminal dread, quiet awe, the uncanny threshold between real and impossible
Colors: dirty orange neon and wet grey for the real alley, deep cosmic blue and violet for the dissolving wall section, the two palettes coexisting without mixing
Composition: narrow vertical back alley, one wall partially dissolved into cosmic void while maintaining brick outlines, a lone magical girl silhouette at the threshold, foreground normal asphalt with impossible reflection
Lighting: warm degraded neon from above, cold cosmic glow from the dissolving wall section, puddle reflection showing entirely different space
Special effects: brick-shaped voids containing star fields, neon signs with subtly wrong color shifts, foot disappearing into the transition zone, ground reflection showing open void
Details: old Hong Kong-style tenement building back alley, rusty pipes, mossy bricks, partial brick-to-starfield dissolution at mid-wall section
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A dark urban back alley in a dystopian city at night, one brick wall partially dissolving into deep cosmic space while maintaining brick shape outlines, a silhouette standing at the threshold. Neon reflections on wet ground show impossible space. Liminal supernatural atmosphere, dark anime style.
--ar 9:16 --niji 6
```


---

## 圖163：「心防內化裝置：製造過程」（Trauma Cage: Manufacturing Process）[WORLD_BUILDING]

**建議輸出文件名**：`ConceptArt_Scene_163_TraumaCage_Manufacturing.png`
### 劇情背景

`[已修正 2026-07-17]` 原文將本裝置錯誤關聯到「凜」，屬角色/系統張冠李戴——依 `rin.md`（§身份、§被重組）明確記載，凜係**黑奏借維多利亞之淚集體潛意識深層讀寫功能重組**為情緒管理局公務員（記憶被改寫），其核心創傷「感官剝奪」源自呢個重組過程，同心防內化裝置完全係兩套獨立機制，凜全篇canon都未見同 Trauma Cage 有任何關聯。心防內化裝置（Trauma Cage）依 `07_entities_and_devices.md §section-trauma-cage` 明確定位係軍方「人型兵器計劃 Phase 1」廢棄後，針對 **The Unlinked（解離兵器——不在晴香五歲願望護甲範圍內、心之器結構性毀滅的普通少女）** 研發嘅第三代強制改造硬件，唔係用於凜呢類主角團成員（主角團因 Alpha 線因果牽連而有「護甲」保護，唔會被心防內化裝置處理）。

核心機制實際為三層（非單純「植入一個籠子」）：① 心匣熔焊——暴力撬開並熔斷心匣物理介面，令持有者永久鎖死變身狀態；② 創傷反芻注射——與維多利亞之淚逆向連接，向大腦持續化學式注入原初創傷情緒；③ 成癮性代償回饋——戰鬥造成傷害時系統短暫回饋快樂幻覺，形成「只有摧毀時才能暫停痛苦」的病理驅動。三格構圖嘅「鳥籠骨架被植入」屬呼應裝置命名嘅象徵化視覺演繹 `[INFERRED]`，非逐字canon描述；如需更貼近三層機制本身，可考慮以「發光管線連接」取代單一鳥籠物件，但核心「情緒合規化」恐怖日常化主題方向不變。

### 圖片說明

三格橫向圖，呈現同一個人在同一個白色醫療室裡的三個時刻：第一格，胸腔被打開，一個發光的半透明容器被撬開，手緊握手術台邊緣；第二格，一個小型鳥籠骨架被精準固定進去，電焊工具留下光點，臉上有一絲痛苦；第三格，手術完成，生命體征顯示平穩，表情完全空白——不是平靜，是什麼都沒有了。醫療人員在後方記錄數據，程序完成，一切如常。

**劇情位置**：
- **時間點**：世界觀設定（無特定時間點，適用全片）
- **CDL追蹤**：07_entities_and_devices §心防內化裝置（Trauma Cage）；02_glossary §trauma-cage
  世界功能：帝國強制格式化 The Unlinked（解離兵器）的標準化程序，令持有者永久鎖死變身狀態並被迫陷入創傷反芻的成癮性驅動循環，是帝國最核心的社會控制/兵器製造技術。
  視覺功能：建立帝國「情緒工程」的恐怖日常化視覺；解釋 The Unlinked 呢類無名兵器角色體驗到的痛苦驅動來源；強調這不是例外，而是制度的標準作業。
- **後續payoff**：The Unlinked（解離兵器）機制的制度根源；Body Horror機制的制度對照（非同一系統，僅美學呼應）；Act III體制崩潰的視覺對應。`[NOTE]` 凜的感官剝奪創傷成因為黑奏/維多利亞之淚重組，非本裝置，唔應交叉引用。

**Reference Images**：
- `[NO_REF]`（世界觀設定圖，The Unlinked 為通用解離兵器機制，非特定角色）

**詳細核心描述**（約320字）：


畫面採用三格橫向構圖，呈現心防內化裝置植入的三個步驟，三格之間以纖細的白線分隔，背景為統一的冷白色醫療空間。整體美學：帝國醫療程序的日常化——這不是秘密地下室，而是光線充足、器械整潔的常規設施。

第一格：準備。一個人躺在金屬台上，身穿帝國醫療白袍，臉部虛化（不顯示具體面孔）。胸腔被手術燈照亮，一個半透明的發光容器（心匣，約拳頭大小，有機形態）懸置在胸腔中，其表面有微弱的彩色光紋流動。一個精密器械在心匣側面施力，剛剛將其撬開。這個人的手緊握手術台邊緣，但沒有掙扎的姿態——似乎被鎮靜了，但不完全。

第二格：植入。心匣完全打開，內部可見複雜的有機組織。一個小型裝置（Trauma Cage本體，形狀像鳥籠骨架的微縮版，金屬）被精準地固定在心匣內壁的特定位置。焊接工具留下的光點。這個人的表情在這一格仍有一絲可辨認的痛苦——皺眉，嘴角下壓。

第三格：封閉。心匣重新閉合，胸腔縫合。這個人靜靜躺著，儀器顯示生命體征平穩。臉部表情：完全空白。沒有痛苦，沒有平靜，沒有任何東西。醫療人員在後方記錄數據，程序完成，一切如常。

三格中，醫療人員的表情始終是例行公事的專注，令「恐怖日常化」的主題不言而喻。


**生成提示（Midjourney）**：
```
Style: dark anime illustration, painterly, clinical body horror, triptych panel layout
Mood: bureaucratic horror, the normalization of violation, cold procedural dread
Colors: cold white and pale grey medical environment throughout, warm amber glow from the soul vessel (heart container), clinical blue-white surgical lighting, muted skin tones
Composition: three horizontal panels separated by thin white lines, left panel preparation, center panel implantation, right panel completion — consistent clinical setting across all three
Lighting: harsh overhead surgical lamp, no shadows allowed, everything visible and documented
Special effects: glowing translucent soul vessel with color-pattern flow on surface, tiny cage-like device, faint weld light in center panel, complete blankness replacing expression in final panel
Details: sterile imperial medical facility, metal operating table, faceless patient in white gown, hands gripping table edge in first panel relaxing to stillness in third, medical staff recording data matter-of-factly
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
Three-panel sequence in a sterile white medical facility. Panel 1: person lying on table, glowing heart container being opened. Panel 2: tiny cage device implanted inside. Panel 3: procedure complete, person's face gone blank. Clinical dystopian body horror, dark anime style, no graphic gore.
--ar 16:9 --niji 6
```


---

## 圖164：「情緒管理局：局內辦公空間」（Emotion Management Bureau: Interior）[WORLD_BUILDING]

**建議輸出文件名**：`ConceptArt_Scene_164_EMB_OfficeInterior.png`
### 劇情背景

情緒管理局（EMB）是帝國情緒監控與鎮壓的行政核心，表面是公務機構，實質是情緒農場收割體制的執行基地。凜在Y108犧牲後被黑奏重建、植入假記憶，成為EMB公務員——她的職位是帝國制度抹除個人記憶與身份的最直接體現（rin.md §公務員身份；CDL-154記憶狀態）。局內空間的設計美學是「壓迫感不來自恐怖，而來自完美的標準化」——這是制度暴力在視覺上的日常化呈現。

### 圖片說明

大型開放式辦公室，一眼望不到頭，天花板極高，整個空間感覺像被計算過的容器。所有人穿著一模一樣的啞光灰白制服，正坐，表情一樣，步伐一樣，桌面一樣，沒有任何私人物品。每個座位上方飄著一個顯示冷藍色數據波形的屏幕。窗外是真實的日光，溫暖而明亮——但玻璃經過特殊處理，陽光進不來，室內只有均勻的人工冷白。凜坐在中景，和旁邊所有人完全一樣。

**劇情位置**：
- **時間點**：世界觀設定（無特定時間點，適用全片）
- **CDL追蹤**：06_visual_bible §情緒管理局；07_entities §EMB；凜相關檔案 §公務員身份
  世界功能：帝國情緒管理機構的日常運作空間，魔法少女被武器化的組織核心，制度暴力的執行基地。表面是公務機構，實質是情緒監控與鎮壓的行政中心。
  視覺功能：建立凜「人性消磨」的日常環境的視覺定義；呈現帝國制度美學——壓迫感不來自恐怖，而來自完美的標準化；為帝國制度vs個體主題提供視覺基礎。
- **後續payoff**：凜雙面形態相關場景；凜人性消磨相關場景；制度vs個體的主題基礎；Act III制度崩潰時EMB辦公空間的對比。

**Reference Images**：
- 凜（情緒管理局制服）：`ConceptArt_Rin_TheAdministrationBureau.png`

**詳細核心描述**（約290字）：


大型開放式辦公空間，以廣角仰視呈現其規模。天花板極高，整個空間感覺像一個計算精準的容器而非工作場所。

色調是帝國標準的純白色和冷灰色：白色天花板、白色地板、白色隔板（低矮，剛好夠隔開座位但不隔開監視）、灰色辦公桌。所有材質都是啞光的，完全吸收光線，不留反光。

員工穿著統一的啞光制服（灰白色，剪裁精確），髮型整齊，全部正坐。每個座位上方懸浮著一個有機流體波形顯示器（情緒監控數據），波形呈冷藍色，數字緩慢滾動。這些顯示器是唯一有動態的東西，令整個空間顯得更加靜止。

窗外（後方落地玻璃窗）可見日區城市的陽光——明亮、溫暖、真實的日光打在玻璃外牆上。但玻璃經過特殊鍍膜，陽光無法進入，室內只有均勻的冷白人工照明。窗景和室內是兩個截然不同的光源世界，卻被一層玻璃永遠隔開。

畫面中景，凜的座位。她的桌面和旁邊所有人完全一樣：顯示器、標準器材、空無一物。沒有個人物品，沒有任何使座位顯得是「她的」的東西。她的姿態和周圍人一模一樣，正確到令人不安。


**生成提示（Midjourney）**：
```
Style: dark anime illustration, painterly, architectural, oppressive institutional aesthetic
Mood: dehumanizing normalcy, the horror of perfect standardization, institutional erasure of self
Colors: pure white and cold grey throughout interior, cold blue floating data displays, warm natural sunlight visible through tinted glass windows but unable to enter
Composition: wide-angle slightly low perspective showing vast open office floor, rows of identical workstations, floating organic waveform monitors above each seat, character in mid-ground indistinguishable from coworkers
Lighting: uniform cold white artificial light inside, warm daylight locked outside behind tinted floor-to-ceiling windows, no shadows, no warmth
Special effects: floating blue organic fluid waveform monitors above each desk showing scrolling emotion data
Details: matte white and grey everything, identical grey-white uniforms with precise cuts, perfectly aligned postures, zero personal items on any desk, low white dividers just high enough to separate but not to hide
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
Vast open-plan government office in a dystopian empire. Pure white and cold grey interior, rows of identical desks, employees in matching matte uniforms sitting perfectly upright. Floating blue waveform monitors above each seat. Warm sunlight visible through tinted windows but excluded from inside. Oppressive institutional atmosphere, dark anime style.
--ar 16:9 --niji 6
```


---

## 圖165：「靈樹：平時狀態」（Spirit Tree: Normal State）[WORLD_BUILDING]

**建議輸出文件名**：`ConceptArt_Scene_165_SpiritTree_NormalState.png`
### 劇情背景

靈樹是夜區的古老神聖節點，不屬於帝國管轄的獨立自然力量殘留，亦是帝國無法完全控制夜區的核心原因之一（02_glossary §spirit-tree；07_entities §靈樹）。靈樹在平時完全不顯現任何超自然力量——這種「沉默」本身是世界觀設定的一部分，也是視覺伏筆的核心：必須令觀眾在前期完全忽略它，才能在Act III靈樹作用的關鍵時刻產生最大衝擊。

### 圖片說明

夜區一處低窪谷地，夜色。一棵極大的老樹，樹冠覆蓋大半個畫面，根系龐大到形成大片隆起的地面，像古老生物的骨架。樹皮斑駁，有青苔，有風化裂紋，部分樹枝是枯的。沒有任何發光，沒有任何神聖感。樹根旁，一個老人在天然凹洞旁鋪毯子睡覺，兩個小孩在根系上跳來跳去，旁邊有一個賣普通食物的攤檔。這棵樹只是個大樹，是這個地方的遮風處。

**劇情位置**：
- **時間點**：世界觀設定（無特定時間點，適用全片）
- **CDL追蹤**：02_glossary §spirit-tree；01_world_rules §夜區力量；07_entities §靈樹
  世界功能：夜區的古老神聖節點，自然力量的殘留，不屬於帝國管轄的空間。它的力量在平時完全不顯現，這種「沉默」本身是世界觀設定的一部分。
  視覺功能：建立靈樹的平時外觀——普通到讓觀眾忽略，製造關鍵時刻作用時的反差震撼；伏筆其不屬於帝國系統的獨立性。
- **後續payoff**：Act III靈樹作用的關鍵時刻（待確認CDL）；日夜區力量對比；帝國無法控制夜區的核心原因之一。

**Reference Images**：
- `[NO_REF]`（本場景屬世界觀設定圖，無角色出場）

**詳細核心描述**（約260字）：


夜區一處低窪谷地，夜色。沒有維多利亞之淚的直接照射，光線來自遠處城市的散射光——昏黃、柔和、不確定。

畫面中央：一棵極大的老樹，樹冠覆蓋半個畫面，根系龐大到地面形成連片的隆起，像某種古老生物的骨架。樹皮斑駁，有青苔，有風化痕跡，有幾個深褥的縱裂。樹形並不完美：部分樹枝是枯的，樹冠不對稱，整棵樹看起來就是一棵歷盡風霜的普通大樹。

沒有任何明顯的「神聖」視覺元素：沒有光暈，沒有發光，沒有飄散的孢子或光點，沒有任何超自然的視覺效果。

樹根旁：幾個夜區居民。一個老人在樹根的一個天然凹洞旁鋪開毯子準備睡覺。兩個孩子在巨大的根系上跳來跳去。一個攤檔在旁邊擺攤，賣的是普通食物。這些人完全不把這棵樹當作任何特別的東西——它只是這個地方的一個大樹，是天然的避風處和集合點。

「普通感」是整張圖最核心的視覺語言：任何看到這張圖的人，不應覺得這棵樹有任何不對勁。


**生成提示（Midjourney）**：
```
Style: dark anime illustration, painterly, naturalistic, deliberately understated
Mood: quiet mundanity, ancient presence disguised as ordinary, unheroic atmosphere
Colors: muted olive and dark grey-green foliage, dark brown textured bark, warm amber scattered light from distant city, dim blue-grey night sky
Composition: massive ancient tree centered, enormous root system spreading across ground creating natural shelters, small scale human figures at base emphasizing tree's size while treating it as completely ordinary
Lighting: no direct moonlight, diffused amber glow from distant city lights, deep shadows under canopy, zero supernatural illumination
Special effects: none — the absence of magic effects is the point
Details: heavily textured bark with deep vertical fissures, moss and weathering, asymmetric canopy with some dead branches, sleeping elderly figure in root hollow, children playing on roots, small street vendor stall nearby, everything mundane and lived-in
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A massive ancient tree in a dark urban valley at night in a dystopian city. Enormous gnarled roots spread across the ground. Small ordinary people nearby treating it as completely normal — someone sleeping, children playing, a street vendor. No magical effects, no glow, purely naturalistic. Dark anime style, muted earthy tones.
--ar 9:16 --niji 6
```


---

## 圖166：「帝國廣場：常態」（Empire Plaza: Normal Day）[WORLD_BUILDING]

**建議輸出文件名**：`ConceptArt_Scene_166_EmpirePlaza_NormalDay.png`
### 劇情背景

`[已修正 2026-07-17]` 原文配色「白色大理石+帝國藍」直接違反canon已確立的帝國皇室美學規格——依 `06_visual_bible.md §section-art-imperial`「帝國皇室（The Imperial Court）」表，核心概念為「黑暗的威權 & 停滯的奢華」，配色明確定義為「深淵黑（基底）+ 皇家金（刺繡）+ 紫水晶（點綴）」，並非白色+藍色；`DIGEST_LOCATIONS.md §1 帝國廣場`亦已預先標註帝國廣場適用同一套「黑+金主色調，深淵黑基底配皇家金刺繡與紫水晶點綴」規格。原文全篇（詳細描述/Midjourney prompt/替代版本）配色已同步修正。

帝國廣場是帝國秩序的展示空間與政治表演舞台，「帝國美好生活」的對外形象核心地點（06_visual_bible §帝國廣場）。日常狀態下的廣場是帝國情緒控制最集中的物理呈現——人造太陽的均勻照射、Emo-Visor的集體佩戴、步伐與情緒被同步校準的市民。朱音在Act III在此引爆自己（CDL-218，Day 14），廣場從「秩序展示空間」變為「尊嚴取回的地點」；此場景是對比基準。

### 圖片說明

白天，大型廣場，中央是幾何精準的黑色磨光石材地面圖案，鑲嵌皇家金色線條向四周放射。修剪成完全相同形狀的樹木，間距完全一致地排列。廣場中央有一塊大屏幕，播放著笑臉和上升的光。市民穿著相似的深色/黑色素色衣服，步伐有節奏，保持恰好的間距——沒有人停下來，沒有人看手機，沒有人看旁邊的人。仔細看才會發現：這不是一個廣場，而是一場排練。

**劇情位置**：
- **時間點**：世界觀設定（無特定時間點，適用全片）
- **CDL追蹤**：06_visual_bible §帝國廣場；07_entities §帝國廣場；SPEC#19的對比基準
  世界功能：帝國秩序的展示空間，日常政治表演的舞台，「帝國美好生活」的對外形象核心地點。
  視覺功能：建立帝國廣場的「正常」外觀，作為SPEC#19決戰崩塌的對比基準；令觀眾記住「這個地方原來是這樣的」，以在後期的崩塌場景中獲得最大反差震撼。
- **後續payoff**：SPEC#19帝國廣場決戰崩塌（同一個廣場，完全相反的狀態）；SPEC#49市民凝滯；帝國秩序崩解的視覺基準線。

**Reference Images**：
- `[NO_REF]`（世界觀設定圖，市民群像，無具名角色）

**詳細核心描述**（約300字）：


白天，維多利亞之淚的光線從高空均勻投下，照亮帝國廣場每一個角落。廣場面積極大，中央有幾何精準的深淵黑石材地面拼圖，鑲嵌皇家金色線條與紫水晶點綴，從中心放射。周邊種植著完全對稱修剪的樹木（每一棵形狀相同，間距相同）。

帝國旗幟沿廣場四周高桅懸掛，旗幟靜止——沒有風，或者說帝國廣場有防風設計，一切都是被計算的秩序。建築立面是帝國標準的深淵黑基底配皇家金色線條，線條簡潔而宏偉，有一種刻意塑造的「永恆感」（依06_visual_bible §帝國皇室：黑暗的威權 & 停滯的奢華）。

廣場中央設有一塊巨型屏幕（有機弧面設計，與建築融合），正在播放帝國公告或「維多利亞天使」的正能量廣播：畫面中是笑臉，是上升的光，是幸福的家庭圖像。屏幕光芒在陽光下依然可見。

人流有序：市民穿著整潔，顏色不超過三種基本色（帝國著裝文化），步伐有節奏，保持社交距離。每個人臉上都帶著「恰好合適」的平靜表情（Emo-Visor效果）——不是笑，是靜，是沒有皺紋的平坦表情。

仔細看才能發現「過度整齊」：路線太平行，步伐節奏太接近，沒有人停下來，沒有人看手機，沒有人看旁邊的人。這是一個廣場，但感覺是一場排練。


**生成提示（Midjourney）**：
```
Style: dark anime illustration, painterly, architectural grandeur, subtly uncanny
Mood: controlled beauty with underlying wrongness, the performance of happiness, eerie perfection
Colors: abyssal black and royal gold geometric ground pattern with amethyst purple accents, dark stone building facades with gold trim, warm artificial sunlight from above contrasting against the dark palette, muted dark-toned clothing
Composition: wide establishing shot of vast plaza, perfectly symmetrical tree rows, central large curved display screen, ordered human figures in mid-ground maintaining precise spacing
Lighting: uniform warm artificial sunlight from Victoria's Tear above, no harsh shadows, everything evenly lit in a way natural sunlight never achieves
Special effects: large central display screen showing smiling faces and light imagery, subtly synchronized pedestrian movement patterns
Details: identical trimmed trees at exact intervals, stationary flags despite open space, citizens in coordinated dark muted colours, perfectly blank facial expressions, geometric abyssal-black-and-gold ground pattern radiating from center with amethyst accents
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A grand imperial plaza in a dystopian city on a bright day. Abyssal black and royal gold geometric stonework with amethyst accents, symmetrical trimmed trees, imperial flags, large display screen showing happy imagery. Citizens in matching dark muted clothes walking in synchronized orderly patterns with blank calm expressions. Dark opulent authority, uncanny perfection, dark anime style.
--ar 16:9 --niji 6
```


---

## 圖167：「Emo-Visor Gen 3：日區市民集體成癮」（Emo-Visor Gen 3: Day District Citizens' Collective Addiction）[WORLD_BUILDING]

**建議輸出文件名**：`ConceptArt_Scene_167_EmoVisorGen3_DayDistrictAddiction.png`
### 劇情背景

`[已修正 2026-07-17]` 原文完全遺漏 Gen 3 Emo-Visor 最核心嘅硬體機制：依 `02_glossary.md §term-emo-visor` 同 `07_entities_and_devices.md §section-emo-visor`（Gen 3小節），裝置實際使用「安普膠囊（透明子彈狀發光彈夾）」作消耗品，一支膠囊只維持 **30 分鐘**，效力過後使用者會「突然跌回殘酷現實」——呢個「必須不斷補充膠囊、用完即墜落」嘅成癮循環，正正係「Emo-Visor Gen 3：集體成癮」呢個標題想表達嘅核心視覺重點，原文卻只畫咗一個靜態、持續佩戴嘅頭戴裝置，完全冇畫出膠囊消耗品同崩潰週期，令「成癮」主題失去咗最重要嘅物件錨點。已補上膠囊細節同暗示落差感嘅視覺線索。

Emo-Visor Gen 3 是帝國情緒管理局向日區市民推廣的第三代情緒過濾頭戴裝置，通過過濾負面情緒頻率使「快樂」成為強制的生理狀態（02_glossary §emo-visor；07_entities §Emo-Visor）。使用者逐漸對過濾後的感覺產生依賴，無法回到未過濾的感官狀態。裝置搭配透明發光「安普膠囊」作消耗品，一支維持30分鐘，膠囊耗盡瞬間使用者會毫無緩衝地跌回未過濾的殘酷現實，此落差正是驅動下一支膠囊消費的成癮機制。帝國情緒農場通過Emo-Visor批量收集日區市民的表層情緒能量（L1回聲層損耗，01_world_rules §三層連動）。此設定是「光幕破碎」場景（圖69）的視覺前提。

### 圖片說明

日區一家咖啡廳，早上，陽光過度完美。所有坐著的客人都戴著同款頭戴式裝置，覆蓋眼睛周圍，邊緣有微弱的藍色光點，太陽穴側面插著透明發光的安普膠囊，作為消耗品可見。每個人臉上都有幅度完全一致的微笑——不是開心的笑，是被校準的笑。他們喝咖啡、看報紙，動作流暢但整個場景有一種電視廣告的溫度。外賣員走進來，也戴著一樣的裝置，遞交包裹，表情和所有人一樣。畫面一角，一個客人的膠囊剛好耗盡熄滅，那一瞬間他臉上的微笑正在崩裂剝落，眼神暴露出底下未經過濾的疲憊與痛苦——這是全場唯一一個「真實」的表情，也是30分鐘循環即將重新開始（換上新膠囊）的訊號。畫面右側邊緣，有一個裝置邊緣有一個細小缺口，光膜略有破損。

**劇情位置**：
- **時間點**：世界觀設定（無特定時間點，適用全片）
- **CDL追蹤**：02_glossary §emo-visor；07_entities §Emo-Visor；待確認CDL
  世界功能：第三代情緒過濾器，日區市民幾乎全員佩戴。通過過濾負面情緒頻率，令「快樂」成為強制的生理狀態，同時使用者逐漸對「過濾後的感覺」產生依賴，無法回到未過濾的感官狀態。
  視覺功能：建立日區「過濾版幸福」的視覺定義；展示Emo-Visor的設計語言和佩戴普及度；為SPEC#21光幕破碎的對比衝擊奠定基礎。
- **後續payoff**：SPEC#21光幕濾鏡破碎（脫下Emo-Visor後的感官對比衝擊）；帝國情緒管理制度的日常化呈現。

**Reference Images**：
- `[NO_REF]`（本場景屬世界觀設定圖，無角色出場）

**詳細核心描述**（約280字）：


日區咖啡廳，早上。陽光透過大落地窗投入（維多利亞之淚的人造陽光，均勻、金黃、幾乎過於完美）。咖啡廳裝潢是帝國風格的簡潔現代感：白色、木色、幾何形。

所有坐著的顧客都佩戴著Emo-Visor Gen 3：設計為一種頭戴式設備，覆蓋眼部周圍和太陽穴位置（類似大型滑雪護目鏡的形態，但薄而貼面），材質半透明，邊緣有微弱的帝國藍光點，太陽穴側面插著一支透明子彈狀的發光安普膠囊，作為看得見的消耗品部件。佩戴後，使用者眼部周圍有一層幾乎看不見的光膜。

每個人臉上都有「恰好合適」的微笑——幅度精確，持續穩定，完全一致。這不是開心的笑，是被校準的笑。他們喝咖啡、看報、低頭看桌面設備，動作自然流暢，但整個場景有一種被校準的溫度，像電視廣告的場景。

一個外賣員走進門，也戴著Emo-Visor，遞交包裹，表情和所有人一樣。

畫面中景一角，一位顧客的膠囊光芒剛好熄滅——那一瞬間，他臉上校準的微笑正在如面具般剝落崩裂，眼神暴露出底下真實的疲憊與空洞。這是全場唯一「未過濾」的表情，暗示 30 分鐘循環即將重新開始：他即將換上新的安普膠囊，重新跌回「完美」。

畫面右側邊緣，另一個座位。空的，或者說，那個座位上的人的Emo-Visor有一個細節不同——一個微小的、似乎是手動修改過的缺口在邊緣，光膜的均勻度略有破損。這個人的臉不在畫面中心，是一個可以忽略的細節。

色調：全圖過度飽和的暖色（金黃、米白、咖啡褐），「太美好了」的視覺感。


**生成提示（Midjourney）**：
```
Style: dark anime illustration, painterly, commercial-advertisement-gone-wrong aesthetic
Mood: uncanny happiness, the texture of mandatory joy, collective addiction dressed as normalcy
Colors: oversaturated warm gold, cream, and coffee brown throughout, faint imperial blue edge glow on visor devices, everything too warm and too bright
Composition: interior cafe scene, multiple customers at tables all wearing matching head-mounted visor devices, delivery worker entering with same device, far edge detail of slightly different modified visor
Lighting: perfect uniform warm artificial sunlight through floor-to-ceiling windows, no harsh shadows, commercial-quality warmth
Special effects: thin barely-visible light film around eyes of all wearers, precisely identical smile expressions across all faces, one figure mid-ground with capsule light extinguished and calibrated smile visibly cracking apart to reveal raw exhaustion underneath
Details: semi-transparent head-mounted eye visor with faint blue edge lights covering eye area and temples, visible glowing bullet-shaped ampoule capsule inserted at the temple as a consumable component, calibrated identical smile expressions, natural fluid movements that feel subtly rehearsed, one figure's capsule just burned out marking the mandatory 30-minute crash-and-refill cycle, one barely-visible modified visor in far edge of frame
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A bright café in a dystopian city where every customer wears matching semi-transparent head-mounted eye visor devices with faint blue glow. Everyone has identical perfectly calibrated smiles. Oversaturated warm colour palette, too cheerful, too perfect. A delivery person enters also wearing the device. Dark anime style, uncanny normalcy.
--ar 16:9 --niji 6
```


---

## 圖168：「屍骸化：心之器燃盡時刻」（Magical Corpse: The Moment the Soul Vessel Burns Out）[WORLD_BUILDING]

**建議輸出文件名**：`ConceptArt_Scene_168_MagicalCorpse_SoulVesselBurnout.png`
### 劇情背景

`[已修正 2026-07-17，核心機制方向錯誤]` 原文核心視覺前提（「人失去意識主體」「靈魂已經不在了」「有眼睛但沒有人在後面」）依 `01_world_rules_and_costs.md §rule-corpseification`（CDL-271）已被明確取代——canon 舊描述（靈魂已離體、新軀殼填入）已作廢，現行機制係「**靈魂困禁**」：屍骸化不是靈魂永久離體，而是靈魂因執念被困肉體，仍以 1% 控制力對抗 99% 情緒廢料，「屍骸是被困在地獄中的靈魂，不是無意識的空殼」。canon 明確容許嘅唯一「靈魂完全離開、肉體變無主容器」情況（§corpseification「靈魂距離光譜」段），前提係當事人「執念不足／全無執念」——但呢個 spec 嘅後續 payoff 明確指向 SPEC#22 小光屍骸化，而小光屍骸化嘅執念錨點正正係紫音（canon §corpseification 例子直接點名「小光想起紫音」），即小光屬於「有執念錨點」嘅困禁案例，唔係「靈魂完全離開」嘅無主容器案例。故本場景作為「屍骸化」通用視覺語言基礎，核心視覺必須改為「靈魂被困、微弱掙扎」，而非「靈魂已經消失」。原文全篇（詳細描述/Midjourney prompt/替代版本）已同步修正。

屍骸化（Magical Corpse）是魔法少女面對的最終命運威脅：長期高壓創傷令靈魂本能地想扯斷因果線逃入集體潛意識深海，但0.1秒決定時刻，對某人某事的執念會強行扣住即將斷裂的因果線，令靈魂被困於已被情緒廢料倒灌、異化成怪物的肉體內——只能控制1%的動作，其餘99%被怪物本能主導（01_world_rules §rule-corpseification，CDL-271）。三位一體光譜顯示人類、魔法少女、魔法屍骸是同一條情感耗損光譜上的不同狀態，屍骸化是光譜的最終端。此場景的核心恐怖不是「靈魂已經不在了」，而是相反——靈魂仍在，仍清醒，卻只能以1%的力量困在自己已經失控的身體裡，從外面完全看不出這場無聲的囚禁。

### 圖片說明

普通超市，日光燈白色照明，背景音樂，一切日常。一個女人正在推購物車，伸手拿貨架上的商品——動作完全普通。她胸腔有一個極微弱的光點，正在劇烈地明滅掙扎：光點試圖維持，卻一次次被更強大的黑暗拉扯壓下，最終被壓縮到只剩針尖大小，穩定在一個極度微弱但沒有完全熄滅的狀態。她的手繼續拿起商品，放進購物車，購物車繼續前進，動作是怪物本能的自動導航。但她的眼睛裡有一瞬間的違和——不是完全空洞，而是像隔著厚重毛玻璃仍能看到裡面有人在用盡全力凝視、卻無法讓身體停下來的絕望眼神，隨即那道目光又被壓回深處。周圍所有人繼續購物，沒有人注意到。

**劇情位置**：
- **時間點**：世界觀設定（無特定時間點，適用全片）
- **CDL追蹤**：01_world_rules §rule-corpseification（CDL-271 靈魂困禁機制）；02_glossary §magical-corpse；SPEC#22小光死亡視覺語境
  世界功能：屍骸化（Magical Corpse）是靈魂因執念被困肉體的悲劇結果——靈魂僅存1%控制力對抗99%情緒廢料主導的怪物本能，並非意識完全消失。這是故事世界中魔法少女面對的最終命運威脅。
  視覺功能：建立「屍骸化」的靜止恐怖視覺語言；呈現這個過程的核心恐怖：靈魂仍在，仍清醒，卻被困無法喊停自己的身體，從外面完全看不出任何異常；為故事中多個屍骸化角色（尤其有執念錨點者）的場景提供視覺定義。
- **後續payoff**：SPEC#22小光屍骸化（小光的執念錨點為紫音，屬於「有執念、靈魂被困」案例，非靈魂已離體）；SPEC#10紫音過載（她是主動靈魂抽離／過載消散，屬於另一套「不可逆死亡」機制，同本場景的「靈魂困禁」明確區分，不可混用）。

**Reference Images**：
- `[NO_REF]`（世界觀設定圖，通用機制展示，無具名角色）

**詳細核心描述**（約330字）：


日區一家普通超市，日光燈的白色照明，貨架整齊，有背景音樂。這是日常生活中最普通的場景。

畫面中央：一個女性（面目中性化，不具體呈現某角色）正在推購物車，手伸向貨架，準備拿一件商品。這個動作完全普通，完全日常，但帶著一絲肉眼難以言明的機械感——像是身體在自動導航，而不是「她」在決定拿哪件商品。

她的胸腔位置有一個光點，極微弱，用散焦的方式呈現——不是清晰可見的發光，而是「如果你仔細看才會發現的微弱暖光」。在畫面的時間軸上，這個光點正在進行一場無聲的拉鋸：光點試圖維持存在，邊緣被更巨大的黑暗情緒廢料侵蝕、拉扯、壓縮，最終被壓制到僅剩針尖大小——但沒有完全熄滅，仍在1%的微光裡頑強閃動。

她的手繼續伸向貨架，拿起商品，放入購物車。動作流暢，節奏機械，是怪物本能的99%在主導。

但她的眼睛裡，有一瞬間的違和。

這是整張圖最核心的視覺細節：不是「空洞」，而是「被困」。瞳孔存在，眼白正常，眼神方向正確——但在那一瞬間，觀眾能感覺到，隔著一層厚重的毛玻璃，裡面仍有一個人用盡全力在凝視、在掙扎，卻連讓自己的手停下來這麼簡單的事都做不到。隨即，那道目光的重量又被壓回深處，恢復成表面上「正常購物」的平靜。

周圍超市的其他顧客繼續購物，完全沒有注意到任何異常。收銀員在遠處掃描商品。一切如常。

圖的構圖建議：略微偏側的中近景，讓觀眾看得到眼睛和胸腔位置，同時能看到日常超市背景。


**生成提示（Midjourney）**：
```
Style: dark anime illustration, painterly, quiet horror, hyper-realistic mundane setting
Mood: still horror, a trapped soul screaming in silence behind a body on autopilot, the terror of consciousness with no control
Colors: cold white fluorescent supermarket lighting, ordinary product colours, the struggling soul vessel as the only warm colour point — a faint amber pinprick at chest flickering against encroaching darkness
Composition: medium close-up slightly off-center, female figure reaching for shelf with shopping cart, chest area in focus showing the soul light straining against suppression, other customers and cashier visible in background continuing normally
Lighting: flat cold fluorescent retail lighting throughout, tiny struggling warm glow at sternum visible only on careful inspection
Special effects: soul vessel light locked in a losing struggle against dark corruption, a fleeting instant where the eyes show someone still awake and pleading behind glass, then the look sinks back beneath the surface
Details: completely ordinary supermarket interior, ordinary groceries, normal clothing, other shoppers and staff unaware, the horror is a trapped consciousness glimpsed for a split second — not emptiness, but imprisonment
Canvas: 16:9 --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
A woman in an ordinary supermarket reaching for items on a shelf. At her sternum, a tiny warm light flickers, straining against encroaching darkness but not extinguished. Her hand continues the motion on autopilot, but for one fleeting instant her eyes show someone still trapped inside, aware and pleading, before the look sinks away again. Other shoppers continue normally, unaware. Still horror, ordinary setting, dark anime style, no graphic content.
--ar 16:9 --niji 6
```


---

## 圖169：「彩的心房：通風管道永恆空間」（Aya's Heart Chamber: Eternal Ventilation Space）[WORLD_BUILDING]

**建議輸出文件名**：`ConceptArt_Scene_169_Aya_HeartChamber_VentilationEternal.png`
### 劇情背景

`[已修正 2026-07-17]` 原文 Reference Image 用 `ConceptArt_Aya_CasualWear.png`（彩學生偽裝/便服形態，屬黑奏操控下嘅少女外觀）套用喺一個「非常小的女孩」（6歲真身）身上——同批次11圖120已確認嘅同類錯誤（彩/黑奏真身vs偽裝形態混淆）同一模式，已修正為 `[NO_REF]`。另外原文將呢個空間定調為「美麗與囚禁同在」「如夢似幻」，但依 `aya.md`（§葉語彩）明文，彩嘅心房「被黑奏重構為一個永遠停留在通風管道那夜的空間——**黑暗、狹窄、充滿螢的血腥氣味**」——呢個係一個創傷重演空間，唔係一個客觀上美麗嘅囚牢；已補回呢層核心基調，情緒結晶苔嘅視覺點綴（沿用批次11圖120已接受嘅 `[INFERRED]` 演繹）保留但降低「夢幻」比重，強化「創傷現場」定性。

彩的主意識被黑奏人格囚禁在自身身體的深層意識空間，以通風管道形態呈現——源自Y079年彩六歲時、螢被殺害那夜躲藏的通風管道的創傷記憶，空間本身重構自「螢死去那夜」，黑暗狹窄，帶著揮之不去的血腥氣味殘留（aya.md §葉語彩；CDL-076；候選B通風管道場景）。彩在這個空間能透過縫隙觀察外界——看到黑奏的行動，聽到晴香的笑聲——但無法干預，無法接觸。這個空間既是她的監獄，也是創傷記憶的永恆重演，直到Act III她奪回身體（圖114）。

### 圖片說明

狹窄的工業通風管道，金屬壁，螺釘，轉彎，分叉，有鏽跡有歲月感。但管道的牆縫和角落長出了情緒結晶，像苔蘚一樣自然積累，半透明的，帶著淡淡的顏色，在沒有光源的情況下微微發光，讓整個管道有一種幽微的彩光。一個非常小的女孩蜷縮在管道拐角，背對著我們，臉朝向一道金屬板縫隙——縫隙透進外面世界的光，隱約可見另一個人在做什麼，但那道光在邊緣就停住了，進不來，她也出不去。

**劇情位置**：
- **時間點**：世界觀設定（無特定時間點，適用全片）
- **CDL追蹤**：aya.md §葉語彩；CDL-076；候選B通風管道那夜（79年）的回響
  世界功能：彩被囚禁在自己身體深處的意識空間，以通風管道形態呈現。這個空間既是她的監獄，也是她的保護殼；她能觀察外界（透過縫隙），但無法干預，無法接觸。
  視覺功能：呈現彩的主觀被囚世界的視覺定義；連結候選B中螢×黑奏的通風管道主題回響，建立跨時間的空間echo；展示美麗與囚禁共存的矛盾視覺語言。
- **後續payoff**：SPEC#106彩在心房中摸熊公仔；SPEC#8彩奪回身體（從這裡突破出去）；候選B通風管道場景的主題共鳴。

**Reference Images**：
- 彩（6歲真身，被囚狀態）：`[NO_REF — 本場景為彩的6歲真身在心房被囚狀態，非黑奏操控下的少女偽裝形態，暫無對應reference image]`

**詳細核心描述**（約330字）：


狹窄的通風管道，但「永恆化」了——這是螢死去那夜的空間，被強行凝固、重複播放。

管道的基本形態是舊式工業通風管：金屬壁，螺釘，矩形截面，管道轉彎，分叉。這些都是真實的通風管道元素，可以辨認，有質感，有鏽跡，有歲月感。空間整體基調黑暗、狹窄、壓迫，帶著揮之不去的血腥氣味殘留感——這個空間的根基是一場真實的創傷記憶，不是夢境的隨機生成，也不是一個純粹供人欣賞的美麗囚牢。

管道壁上、角落、接縫處——情緒結晶隱約在生長`[INFERRED]`。不是入侵性的生長，而是緩慢的、有機的積累，像苔蘚在石縫中生長一樣自然。這些結晶呈半透明，帶著壓抑的暗色調（淡紫羅蘭是悲傷，暗玫瑰是憤怒，冰藍是恐懼，暗金是渴望），只微微發出幽暗的光——不是浪漫化的裝飾，而是長期壓抑情緒的沉澱物，與周遭的黑暗和壓迫感並存，而非蓋過它。

彩的身影蜷縮在一個管道轉彎的角落，非常小——這是她6歲時的真身尺度，她在這裡永遠是那個小孩的大小。她抱著膝蓋，臉朝著管道的縫隙方向，但我們看不到她的臉——只有她的背影和蜷縮的輪廓。

管道的縫隙（金屬板之間的接縫）透出外面世界的光：隱約可見黑奏在做什麼（日常行為的影像，模糊，像隔著霧玻璃），或者可以聽到晴香的笑聲（用視覺化的聲波紋理表達），但這些光和聲音在縫隙邊緣就停住了，進不來，彩也出不去。

囚禁與殘留創傷同在：情緒結晶的微光沒有洗去這個空間的黑暗與壓迫本質，每一道縫隙都在提醒彩，外面的世界觸手可及卻永遠不屬於她，而身後的黑暗，永遠是那一夜。


**生成提示（Midjourney）**：
```
Style: dark anime illustration, painterly, surreal psychological space, claustrophobic trauma-space
Mood: a trauma frozen and replayed forever, imprisonment without beauty to soften it, the ache of witnessing but not touching
Colors: industrial metal grey and rust as dominant base, muted dark violet/rose/ice-blue/dark-gold crystal glow kept subdued and secondary, light seeping through seams from outside world in distant warm gold fragments
Composition: narrow industrial ventilation duct interior, tight oppressive perspective showing the confined space extending into darkness, very small girl figure curled in a corner bend, faint crystal growth on walls barely catching light, shaft of outside-world light through seam cracks staying distant and unreachable
Lighting: overwhelmingly dark, only the faint organic glow of emotion crystals barely visible on walls, warm gold seam light from outside visible but contained and small
Special effects: translucent crystalline growth in muted emotional colours emerging organically from metal seams and corners as sediment not decoration, blurred impressions of outside world visible through seam gaps, implied sound visualised as gentle waveform texture near gaps
Details: weathered industrial metal ventilation duct with visible screws and joints, aged texture, dominant darkness and oppressive tightness, faint crystal formations growing like moss in corners, a very small 6-year-old girl figure curled facing away toward a seam gap, outside world impressions fragmented and unreachable
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
Interior of an old industrial ventilation duct, narrow, dark, and oppressively confined. Faint crystalline growths in muted violet, rose, and blue glow barely visible on the metal walls like sediment, not decoration. A very small child curled up in a corner, facing away, looking toward a thin crack of light from outside that never reaches her. Imprisonment and frozen trauma, not beauty. Surreal psychological space, dark anime style.
--ar 9:16 --niji 6
```


---

# 已停用

## 圖170：「軟接觸——美夜子廢棄地鐵站遞水」（Worthless Vigil: The Underground Station）[ACT_II] `[DELETE_CANDIDATE — 已停用，與 SPEC#92 重複衝突]`

`[已修正 2026-07-17，DELETE_CANDIDATE]` 本場景同 **SPEC#92「美夜子無價值留守」完全係同一個 beat**——相同 CDL（CDL-191）、相同時間點（113年7月 Act II Phase C，E-09後）、相同地點（廢棄地鐵站）、相同「後續payoff」（美夜子三段式覺醒/終於哭出來），但兩者對同一場戲嘅具體演繹**互相矛盾**：

| 項目 | SPEC#92（已核實ACCURATE） | 本場景（原文） |
|---|---|---|
| 美夜子形態 | 貓形態（`ConceptArt_Miyako_Cat.png`） | 人形態（`ConceptArt_Miyako_MagicalGirl.png`）——依`DIGEST_CHARACTER_STATES.md` MY-S1/S2，Act II Phase C此刻美夜子人形戰鬥形態仍未穩定（要到Act III MY-S3先穩定），人形態reference有誤 |
| 遞出物件 | 沒氣可樂罐（叼來） | 常溫水（塑料杯） |
| 對白 | 全程無對白（純沉默陪伴） | 「妳依家確實係一件廢物。但係，我唔會走。」 |

依 `ACT_II_OUTLINE.md`（E-09，CDL-191原文）：「美夜子拿走手機關機，遞沒氣可樂...核心台詞：『妳依家確實係一件廢物。但係，我唔會走。我哋邊度都唔去。』」——canon 原文其實**同時包含遞可樂嘅動作同呢句台詞**，兩個spec各自只擷取咗一半，互相矛盾地各自宣稱另一半唔存在。保留兩個各執一半、互相矛盾嘅spec條目對生成流程有害（AI唔知該用貓定人形、可樂定水、有對白定無對白）。

**處理方式**：本場景（SPEC#122）標記 `DELETE_CANDIDATE` 並停用，避免同SPEC#92同時被引用產生矛盾生成結果。如需保留「遞水/對白」呢個角度嘅獨立畫面，建議留待下一輪修正SPEC#92時，將完整canon台詞（含「我哋邊度都唔去」缺漏部分）一併補入SPEC#92本體，而非另開一個矛盾版本。本條目原文細節已移除，僅保留標題供追溯用途，`場景清單總覽`同`劇情位置速查表`已同步標記為DELETE_CANDIDATE並指向SPEC#92。


---

# 附錄：文件建構統計（原始批次記錄，非劇情順序）

## 文件統計與完成

**完整 72 場景結構**：
- **TOP 10 詳細版**：圖 1-10（各 300-500 字，含 Reference Image 或簡化描述 + 生成提示）
- **既有 32 場景優化版**：圖1121-42（各 150-300 字，應用新策略）
- **新增 24 場景簡化版**：圖733-56（各 150-200 字，[BEAT_SHEET_PREP] 標記）
- **新增 16 個私密場景**：圖727-72（各 300-400 字，[PRIVATE_INTIMATE_MOMENT] 標記）
  - 重點 5 個（57-61）：詳細版 300-400 字 ✅
  - 其他 11 個（62-72）：詳細版 300-400 字 ✅

**生成策略應用統計**：
- ✅ 有參考圖的場景：標記 **Reference Image** + Creative Enhancements
- ✅ 無參考圖的場景：簡化為核心描述 + 所需資源列表
- ✅ 所有場景包含：輸出文件名 + 詳細描述（300-400字）+ Midjourney 標準版 + 替代版本 + Canvas 16:9
- ✅ 新增 24 場景標記：[BEAT_SHEET_PREP]（準備進入 Beat Sheet 層設計）
- ✅ 新增 16 私密場景標記：[PRIVATE_INTIMATE_MOMENT]（角色私密習慣與自傷儀式）

**私密場景特性**：
- 聚焦於角色無人知曉的創傷應對機制
- 呈現強迫行為、自傷儀式、心理成癮的視覺化
- 保持道德邊界：記錄而非美化、理解而非譴責
- 色彩與燈光設計強調隔離、內向、心理黑暗
- 可作為角色心理層深度探索的視覺參考

**可直接用於**：
- Midjourney / DALL-E 3 提示詞生成
- 概念美術委外與整合
- Beat Sheet 與 Scene 層視覺參考建立
- 全故事視覺層規劃與心理深度設計
- 角色主觀視角與內心世界的視覺化


---

# 附錄：未編號場景（不屬於總覽表 1-170 序列）

## 圖100-01：「介錯之刃——美夜子的最終溫柔」（Kaishakunin: Miyako's Final Mercy）[ACT_III]

**建議輸出文件名**：`ConceptArt_Scene_Miyako_Kaishakunin.png`

### 劇情背景

帝國歷114年4月末，Act III Phase H2至I過渡期。SPEC#100事件後，凜完全失去意識，化為Unit 00-Null——一件由傀儡絲驅動的純粹無意識兵器，四肢以非人類角度扭曲，空洞眼神，攻擊不止。美夜子雙持MP7A1面對著這個已不再是凜的軀殼，一次次扣下扳機——不是為了勝利，而是為了讓她「不以怪物的身份死去」，履行她對凜的最終承諾。每一槍都像殺死一部分自己。這場戰鬥是美夜子整條PTSD弧光的最深根源，是SPEC#6月下崩潰（介錯後的創傷反應）和SPEC#109「美夜子終於哭出來」（二十年後才兌現的情感釋放）的起點。

### 圖片說明

帝國歷114年，凜完全失去意識，成為一件由傀儡絲驅動的純粹無意識兵器，四肢以非人類的角度扭曲，空洞眼神，攻擊不止。美夜子雙持衝鋒槍面對著這個已不再是凜的軀殼，一次次扣下扳機——不是為了勝利，而是為了讓她「不以怪物的身份死去」。每一槍都像殺死一部分自己。這場戰鬥是美夜子一生中最沉重的事，也是她二十年守護和最終哭出來的那一刻的最深起點。

**劇情位置**：
- **時間點**：帝國歷114年4月末 Act III Phase H2-I過渡期
- **CDL追蹤**：新增 CDL-283；rin.md §最終犧牲；miyako.md §介錯誓約
- **前置事件**：SPEC#100 凜的最終選擇（Unit 00-Null 揭露）→ 凜完全失去意識，化為純粹的無意識兵器
- **本場景功能**：美夜子履行終極承諾——不是為了「戰勝」凜，而是為了讓凜「不作為怪物而死」。這是全作中最沉痛的溫柔：美夜子以介錯人的身份，用最後的尊嚴終結凜的生命。這個時刻既是美夜子與凜關係的終章，也是她 PTSD 創傷根源的最深處。
- **後續payoff**：SPEC#6 月下崩潰（美夜子的貓殼龜裂與存在確認測試，介錯後的創傷反應）；SPEC#109 美夜子終於哭出來（20年守護後，第一次真正哭泣）

**Reference Images**：
- 美夜子：`ConceptArt_Miyako_CasualWear.png`（原檔名 `ConceptArt_Miyako_Kaishakunin.png` 不存在，已自動替換為現有檔案）
- 凜（Unit 00 無意識形態）：`ConceptArt_Rin_CasualWear.png`（原檔名 `ConceptArt_Rin_Unit00Null.png` 不存在，已自動替換為現有檔案）

**詳細核心描述**（280-350字）：

廢墟戰場——崩塌的混凝土、斷裂的鋼筋。槍聲還在空氣中迴盪。光線冷硬而蒼白，滿地是彈殼反光。

凜已經不是凜了。她的身體被淡金色的傀儡絲徹底改造，4肢以非人類的角度扭曲著，關節反向彎折。她像一隻巨大的、被操縱的怪物，張牙舞爪地蜷縮在半蹲的戰鬥姿態裡。她的口腔張開，發出無聲的嘶鳴——那種聲音應該是人類發不出來的。她的眼睛空洞而獵食性的，沒有一絲人性。Unit 00-Null 正在做它被設計來做的事：進攻。

美夜子面對著這個怪物，雙手各握一把 MP7A1 衝鋒槍，槍口指向前方。她的制服已經被血和塵埃弄髒，她的呼吸在面罩後沉重而急促。每一次凜撲來，她都扣動扳機——子彈掃過那具扭曲的身軀，傀儡絲在槍火下閃爍著詭異的光。

在她們之間的空間裡，充滿了火力與鮮血。凜一次次地從地上爬起來，向美夜子撲去，傀儡絲驅使著這具軀殼不知疲倦地攻擊。美夜子的手指在扳機上，她已經開了無數槍，但每一槍都像是在殺死一部分自己。

她需要結束這個。不是因為她想要戰勝，而是因為她必須讓凜停止痛苦——讓這個已經不是凜的怪物停止被操縱。在火力和淚水中，介錯成為了一種殘酷的必然。

**生成提示（Midjourney）**：
```
Style: dark anime action, gunfire combat, emotional devastation amid violence
Mood: desperate mercy, the saddest battle, duty forcing love into bloodshed, final sacrifice through violence
Colors: grey + ash, golden puppet strings glowing against dark, pale skin stained with blood, cold steel blue, muzzle flash amber
Composition: two figures in ruins, Miyako left (dual-wielding MP7A1s, stance ready), Rin center (crouching attacking, limbs twisted at inhuman angles), shell casings scattered on ground, debris floating
Lighting: harsh muzzle flash creating dramatic shadows, rim light from gunfire, cold industrial overhead
Special effects: translucent golden puppet strings covering Rin's entire twisted body, visible and luminous, gunfire tracers, smoke from gunfire, blood spray
Characters:
- Miyako: teenage girl with dark hair, tactical gear/school uniform variant, dual-wielding assault rifles MP7A1, eyes cold and tearful, expression determined but anguished, breathing heavily
- Rin (Unit 00-Null): twisted non-human posture with limbs bent backward, mouth open in soundless shriek, eyes hollow and predatory, body covered entirely in glowing golden threads, clawing/attacking mid-leap
Canvas: 16:9 cinematic combat --ar 16:9 --niji 6 --style raw
```

### 替代版本（若被拒絕）

```
magical girl with dual assault rifles in ruins, facing twisted monster-like creature covered in glowing threads, combat scene, gunfire flashes, shell casings, desperate mercy killing, dark anime violence, emotional climax, muted industrial palette with golden glow
--ar 16:9 --niji 6
```


---

