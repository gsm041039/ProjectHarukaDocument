> **用途**：呢個表係俾之後 image spec 生成時引用 reference image 用。生成新 spec 時**只可以引用呢度列出嘅檔名**，唔可以自己作新檔名。
>
> **⚠️ UNVERIFIED 警告**：呢啲檔名絕大部分係 `IMAGE_PROMPT_SPEC_FINAL_72_COMPLETE.md`（下稱「來源 spec 文件」）入面提及嘅「建議輸出文件名」或「Reference Images」建議檔名，**未必已經有實際圖片產出**。本表已逐一同 repo 內 `art/ConceptArt/**/*.png` 實際檔案做過交叉比對（2026-07-17）：
> - 標 `EXISTS` = 喺 `art/ConceptArt/` 資料夾內搵到完全同名（不分大小寫）嘅實際 png 檔案，已列出實際路徑。
> - 標 `UNVERIFIED` = 只喺來源 spec 文件入面提及，repo 內搵唔到對應檔案，**generation 時如果要用，必須當作「未生成，需要另外產出」，唔可以假設已存在**。
> - `EXISTS` 唔代表個檔案張圖已核實內容同 spec 描述相符，只代表檔案存在。
>
> 來源：`IMAGE_PROMPT_SPEC_FINAL_72_COMPLETE.md`（根目錄，8625行），透過 Grep 搜尋所有 `.png` 檔名提及並讀取上下文建立。掃描日期：2026-07-17。

---

## 索引統計

- 來源文件內提及嘅唯一 `.png` 檔名總數：**214**（另有 1 個因來源文件內非 ASCII 字元 `С`（西里爾字母）導致擷取異常：`ConceptArt_Scene_Miyako_FinallyСries.png`，見表末備註）
- `EXISTS`（repo 內確認存在）：**55**
- `UNVERIFIED`（repo 內搵唔到，只係文字建議）：**159**
- Repo 內 `art/ConceptArt/` 資料夾實際 png 檔案總數：664（當中大部分係 `_BAK` 備份資料夾內嘅 UUID 命名歷史檔案，同來源 spec 文件提及嘅命名唔對應，唔在本表逐一列出，除非被 spec 明確引用）

---

## Part A：角色基準/形態 Reference Images（跨場景重複使用）

呢批檔案唔綁定單一場景，係角色喺唔同形態/服裝狀態下嘅基準圖，被多個場景 spec 引用做 reference。

| 檔名 | 對應角色 | 對應形態/狀態 | 對應地點 | 來源場景編號 | 存在狀態 |
|---|---|---|---|---|---|
| ConceptArt_Haruka_MagicalGirl.png | 晴香 | 魔法少女形態（標準） | — | 多場景引用（圖2/7/13/18/28/30/95/97/100/103/109/120-122/127/129/150等） | EXISTS（`art/ConceptArt/Characters/Haruka/`） |
| ConceptArt_Haruka_CasualWear.png | 晴香 | 便服/日常狀態 | — | 多場景引用（圖17/23/29/33/42/62-65/92/104/107/109/122-123/127等） | EXISTS（`art/ConceptArt/Characters/Haruka/`） |
| ConceptArt_Haruka_Singer.png | 晴香 | 歌手形態 | — | 圖9 變身場景 | EXISTS（`art/ConceptArt/Characters/Haruka/`） |
| ConceptArt_Haruka_ActIV.png | 晴香 | Act IV 形態（20年後） | — | 圖150 夕5歲形態消散 | UNVERIFIED |
| ConceptArt_Aya_MagicalGirl_1.png | 彩 | 第一形態／被控制形態 | — | 圖7/18/106 | EXISTS（`art/ConceptArt/Characters/Aya/`） |
| ConceptArt_Aya_MagicalGirl_2.png | 彩 | 第二形態（真身覺醒後） | — | 圖3/8/11/28 | EXISTS（`art/ConceptArt/Characters/Aya/`） |
| ConceptArt_Aya_CasualWear.png | 彩 | 便服/學生日常 | — | 圖23/94/119 | EXISTS（`art/ConceptArt/Characters/Aya/`） |
| ConceptArt_Aya_StudentDisguise.png | 彩 | 學生偽裝形態 | — | 圖151 彩的永恆輪迴開始 | UNVERIFIED |
| ConceptArt_Aya_TrueForm.png | 彩 | 本源形態 | — | 圖141/151 | UNVERIFIED |
| ConceptArt_Kurosou_CasualWear.png | 黑奏（借用彩身體） | 便服偽裝狀態 | — | 一般參考 | EXISTS（實存於 `art/ConceptArt/Characters/Aya/`，命名雖含 Kurosou 但存放喺 Aya 資料夾） |
| ConceptArt_Kurokane_Emperor.png | 黑奏 | 皇袍/帝王形態 | 帝國中心 | 圖141 黑奏真身揭露 | UNVERIFIED |
| ConceptArt_Akane_MagicalGirl.png | 朱音 | 魔法少女形態（過載前/標準） | — | 多場景引用（圖4/10/90/103-105/120/147等） | EXISTS（`art/ConceptArt/Characters/Akane/`） |
| ConceptArt_Akane_CasualWear.png | 朱音 | 便服 | — | 圖25/123 | EXISTS（`art/ConceptArt/Characters/Akane/`） |
| ConceptArt_Misao_MagicalGirl.png | 操 | 魔法少女標準形態 | — | 多場景引用（圖18/91/98/102/126/128等） | EXISTS（`art/ConceptArt/Characters/Misao/`） |
| ConceptArt_Misao_MagicalGirl_Action.png | 操 | 魔法少女戰鬥/動作形態 | — | 圖1/5/16/26/31 | UNVERIFIED（同 EXISTS 之 `ConceptArt_Misao_MagicalGirl.png` 唔同檔，未搵到 Action 版） |
| ConceptArt_Misao_CasualWear.png | 操 | 便服 | — | 圖61/98/104/125/143-144 | EXISTS（`art/ConceptArt/Characters/Misao/`） |
| ConceptArt_Miyako_MagicalGirl.png | 美夜子 | 魔法少女/人形戰鬥形態 | — | 多場景引用（圖27/32/59/93/99-100/109/122/124等） | EXISTS（`art/ConceptArt/Characters/Miyako/`） |
| ConceptArt_Miyako_CasualWear.png | 美夜子 | 便服 | — | 圖57/110/123-124 | EXISTS（`art/ConceptArt/Characters/Miyako/`） |
| ConceptArt_Miyako_Cat.png | 美夜子 | 貓形態（偽裝日常） | — | 多場景引用（圖18/32/92-93/128/148等） | EXISTS（`art/ConceptArt/Characters/Miyako/`） |
| ConceptArt_Miyako_Unit01.png | 美夜子 | Unit 01 人形戰鬥形態（帝國兵器編號） | — | 圖140 既視感追認 | UNVERIFIED |
| ConceptArt_Miyako_Kaishakunin.png | 美夜子 | 介錯人形態 | — | 圖100-01 介錯之刃 | EXISTS（`art/ConceptArt/Scene/`，注意檔名同時被當成場景檔名及角色狀態 reference 使用） |
| ConceptArt_Rin_MagicalGirl_1.png | 凜 | 第一形態（聖耀之翼・艾莉西亞，綠金色天使翼） | — | 多場景引用（圖14/76-77/100-101等） | EXISTS（`art/ConceptArt/Characters/Rin/`） |
| ConceptArt_Rin_MagicalGirl_2.png | 凜 | 第二形態 | — | 圖14/60 | EXISTS（`art/ConceptArt/Characters/Rin/`） |
| ConceptArt_Rin_CasualWear.png | 凜 | 便服 | — | 圖123 | EXISTS（`art/ConceptArt/Characters/Rin/`） |
| ConceptArt_Rin_TheAdministrationBureau.png | 凜 | 情緒管理局制服形態 | 情緒管理局 | 圖24/93/114 | EXISTS（`art/ConceptArt/Characters/Rin/`） |
| ConceptArt_Rin_Unit00Null.png | 凜 | Unit 00 無意識兵器形態 | — | 圖100-01 介錯之刃 | UNVERIFIED |
| ConceptArt_Saku_CasualWear.png | 朔 | 便服（帝國特工日間形態） | — | 圖15/36/90/99 | EXISTS（`art/ConceptArt/Characters/Saku/`） |
| ConceptArt_Saku_NightHunter.png | 朔 | 夜間獵人形態（綠松石獵人裝備） | — | 圖140/145 | EXISTS（實存路徑喺 `art/ConceptArt/Scene/`，非 Characters/Saku） |
| ConceptArt_Akiho_CasualWear.png | 秋穗 | 便服 | — | 圖18情緒連結危機 | EXISTS（`art/ConceptArt/Characters/Akiho/`） |
| ConceptArt_Akiho_Boss.png | 秋穗 | 無臉執行官/Boss形態 | — | 圖169 悲鳴女妖首戰 | EXISTS（`art/ConceptArt/Characters/Akiho/`）——注意 spec 內文另有明確指定路徑 `art/ConceptArt/Characters/Akiho/ConceptArt_Akiho_Boss.png` |
| ConceptArt_Akiho_DailyCasual.png | 秋穗 | Act I 日常形態 | 實驗室 | 圖142 秋穗實驗室懺悔 | UNVERIFIED（同 CasualWear 疑似重複命名，未確認是否同一檔） |
| ConceptArt_Akiho_RestaurantOwner.png | 秋穗 | Act IV 形態（餐廳老闆，眼神柔和） | — | 圖149 秋穗與愛莉重逢 | UNVERIFIED |
| ConceptArt_Aeri_MagicalGirl.png | 愛莉 | 魔法少女形態 | — | 圖40 愛莉的童謠救贖 | EXISTS（`art/ConceptArt/Characters/Aeri/`） |
| ConceptArt_Aeri_CardboardKnight.png | 愛莉 | 紙皮騎士形態 | — | 圖146 愛莉的第二次改變現實決定 | UNVERIFIED |
| ConceptArt_Aeri_CrystalStatue.png | 愛莉 | 石像形態 | — | 圖142 秋穗實驗室懺悔 | UNVERIFIED |
| ConceptArt_Aeri_Rider.png | 愛莉 | 甦醒後騎手形象 | — | 圖149 秋穗與愛莉重逢 | UNVERIFIED |
| ConceptArt_Yu_CasualWear.png | 夕 | 便服 | — | 圖2 整合場景 | EXISTS（`art/ConceptArt/Characters/Yu/`） |
| ConceptArt_Yu_ChildForm.png | 夕 | 5歲兒童形態 | — | 圖150 夕5歲形態消散 | UNVERIFIED |
| ConceptArt_Sayo_Maidoutfit.png | 紗夜 | 女僕裝（管家） | — | 圖126/144 | EXISTS（`art/ConceptArt/Characters/Sayo/`） |
| ConceptArt_MagicCorpse_Doll_Action.png | 魔法屍骸（通用） | 人偶型 | — | 圖108 屍骸覺醒L4 | EXISTS（`art/ConceptArt/Characters/MagicCorpse/`） |
| ConceptArt_MagicCorpse_Scrap_Action.png | 魔法屍骸（通用） | 廢鐵型 | — | 圖108 屍骸覺醒L4 | EXISTS（`art/ConceptArt/Characters/MagicCorpse/`） |
| 9e344a9e-a688-4fa8-b0d1-fbbf6f76b262.png | 黑奏/刑思（角色表情設定） | 「血之雨的幕始」表情格 | 帝國實驗室 | 圖75 刑思殺出實驗室 | EXISTS（`art/ConceptArt/Characters/Aya/`，UUID 命名，非描述性檔名，需另核對內容是否真係對應呢個表情） |

---

## Part B：場景專屬 Concept Art（Scene 系列，一場景一檔）

依來源文件場景編號排序。「對應角色」「對應地點」「來源場景編號」欄位資料主要來自文件開頭「場景清單總覽（130個）」表格及各圖詳細段落；圖78起源自「新增候選場景」及後續補充章節。

| 檔名 | 對應角色 | 對應形態/狀態 | 對應地點 | 來源場景編號 | 存在狀態 |
|---|---|---|---|---|---|
| ConceptArt_Scene_Misao_SteelSolitude.png | 操 | 半屍骸狀態，傀儡絲控制 | 廢棄工廠（夜） | 圖1 鋼鐵獨舞 | EXISTS |
| ConceptArt_Scene_Haruka_Integration.png | 晴香、夕、花子 | 整合/碰撞 | 夢境空間 | 圖2 整合場景 | EXISTS |
| ConceptArt_Scene_BlackSong_Revelation.png | 黑奏（彩容器） | 小女孩真身，三力量顯現 | 帝國廣場 | 圖3 三武器揭露 | UNVERIFIED |
| ConceptArt_Scene_Akane_CandyFactory.png | 朱音 | 屍骸女皇形態 | 糖果工廠 | 圖4 廢棄糖果工廠 | UNVERIFIED |
| ConceptArt_Scene_Misao_MirrorChamber.png | 操 | 鏡像完美形態，最終砸鏡 | 鏡子房間 | 圖5 鏡像處刑室 | UNVERIFIED |
| ConceptArt_Scene_Miyako_MoonlightBreakdown.png | 美夜子 | 貓殼龜裂，自我確認測試 | 窗台/滿月夜 | 圖6 月下崩潰 | EXISTS |
| ConceptArt_Scene_Haruka_FallenAngel.png | 晴香、彩 | 光幕濾鏡破碎瞬間 | 日區城市街道 | 圖7 Fallen Angel 街道 | UNVERIFIED |
| ConceptArt_Scene_Aya_BodyReclaim.png | 彩 | 奪回身體，金色光輝燃燒 | 天空/決戰現場 | 圖8 彩奪回身體 | UNVERIFIED |
| ConceptArt_Scene_Haruka_FirstTransform.png | 晴香 | 首次變身 | 金魚旗環境 | 圖9 變身場景 | UNVERIFIED |
| ConceptArt_Scene_Akane_CandyMountain.png | 朱音、小光 | 過載變身化為糖晶 | 嘆息之橋/糖果山 | 圖10 糖果山犧牲 | UNVERIFIED |
| ConceptArt_Scene_GlassGarden_TeaParty.png | 彩、黑奏、晴香 | 皇袍掩蓋幼女真身 | 帝國塔頂溫室 | 圖11 玻璃庭院茶會 | UNVERIFIED |
| ConceptArt_Scene_CollectiveUnconscious_Storm.png | 紙皮騎士、隊伍 | 超現實扭曲 | 集體潛意識（後巷唐樓） | 圖12 集體潛意識之城 | UNVERIFIED |
| ConceptArt_Scene_Haruka_StaticCradle.png | 晴香 | 粒子化，新世界錨點 | 新世界基礎 | 圖13 靜止搖籃終局 | UNVERIFIED |
| ConceptArt_Scene_Rin_DualForms.png | 凜 | 孔雀飛行員 vs. 烏鴉形態 | 日夜區交界 | 圖14 凜的雙面形態 | UNVERIFIED |
| ConceptArt_Scene_Saku_DayNightDuality.png | 朔 | 白色特務 vs. 綠松石獵人 | 日夜區 | 圖15 朔的日夜對比 | UNVERIFIED |
| ConceptArt_Scene_Misao_FormalismRuins.png | 操 | 傀儡絲纏繞獨舞 | 廢棄工廠 | 圖16 操的形式主義廢墟 | UNVERIFIED |
| ConceptArt_Scene_BandaidPhilosophy_Triptych.png | 晴香 | 三時段並置（個人習慣→系統隱喻→存在論批判） | 多時段 | 圖17 膠布哲學三層 | UNVERIFIED |
| ConceptArt_Scene_EmotionLink_Crisis.png | 晴香、美夜子、朱音、凜 | 情緒連結失控，創傷記憶亂竄 | 意識連結空間 | 圖18 首次情緒連結危機 | EXISTS |
| ConceptArt_Scene_EmpirePlaza_Collapse.png | 晴香、黑奏 | 決戰崩塌，偽勝利碎裂 | 帝國廣場 | 圖19 帝國廣場決戰崩塌 | UNVERIFIED |
| ConceptArt_Scene_CardboardKnight_Defense.png | 愛莉 | 紙盔甲守護隊友 | 集體潛意識 | 圖20 紙皮騎士防禦 | UNVERIFIED |
| ConceptArt_Scene_LightVeil_Shattered.png | 晴香 | 完美形象崩塌，露出真實晴香 | 日區公開場所（直播） | 圖21 光幕濾鏡破碎 | EXISTS |
| ConceptArt_Scene_KoHikaru_Death.png | 小光、朱音 | 屍骸襲擊，身體轉化為廢鐵 | 犧牲地點 | 圖22 小光死亡與屍骸化 | UNVERIFIED |
| ConceptArt_Scene_HorrificHouse_School.png | 晴香、彩 | 表面日常，暗流洶湧 | 校園空間 | 圖23 恐怖家家酒（學校） | UNVERIFIED |
| ConceptArt_Scene_Rin_HumanityErased.png | 凜 | 制服，體制執行機器 | 情緒管理局 | 圖24 凜的人性消磨 | UNVERIFIED |
| ConceptArt_Scene_Akane_BetrawalTruth.png | 朱音 | 注射情緒抑制劑，冷漠嘲笑 | 後巷 | 圖25 朱音的背叛與真相 | UNVERIFIED |
| ConceptArt_Scene_Misao_Abandoned.png | 操、父親、紗夜 | 父親投降，紗夜犧牲掩護 | 大宅（夜） | 圖26 操被遺棄 | UNVERIFIED |
| ConceptArt_Scene_Miyako_ThreeStageAwakening.png | 美夜子 | 貓殼龜裂→月下測試→擁抱 | 多時段 | 圖27 美夜子的三段式覺醒 | UNVERIFIED |
| ConceptArt_Scene_ScarletTide_Backlash.png | 晴香、彩 | 時間線Alpha/Beta衝突爆發 | 時間線交界 | 圖28 緋潮反噬 | UNVERIFIED |
| ConceptArt_Scene_Mother_GentleCage.png | 花子、晴香 | 永遠循環的晨間 | 家中/循環 | 圖29 花子的溫柔牢籠 | UNVERIFIED |
| ConceptArt_Scene_Dissonance_Confrontation.png | 晴香 | 鏡中傷痕戰士倒影 | 鏡前 | 圖30 違和感與對峙 | UNVERIFIED |
| ConceptArt_Scene_Misao_ReturnHumanity.png | 操 | 砸碎人偶鏡子，回歸殘缺 | 廢棄工廠 | 圖31 操回歸人類身軀 | UNVERIFIED |
| ConceptArt_Scene_Miyako_CatShellRecovery.png | 美夜子 | 鏡前看見腐爛透視真實自我 | 治療房間 | 圖32 美夜子的貓殼復原 | UNVERIFIED |
| ConceptArt_Scene_Haruka_SolitaryUrbanWalk.png | 晴香 | 獨自行走，試圖融入卻被隔離 | 日區街道 | 圖33 晴香的城市獨行 | UNVERIFIED |
| ConceptArt_Scene_Miyako_Hikari_Conversation.png | 美夜子、小光 | 貓形態與年幼小光對話 | 室內溫馨空間 | 圖34 美夜子與小光的對話 | UNVERIFIED |
| ConceptArt_Scene_Rin_IntelligenceGathering.png | 凜 | 烏鴉形態潛伏監視 | 黑暗後巷 | 圖35 凜的情報蒐集現場 | UNVERIFIED |
| ConceptArt_Scene_Saku_BlackMarketNetwork.png | 朔 | 與黑市線人交易 | 地下室/廢棄地下道 | 圖36 朔與黑市網絡 | UNVERIFIED |
| ConceptArt_Scene_Aya_DailyPerformance.png | 彩 | 表演完美學生角色，眼神空洞 | 學校/公開場所 | 圖37 彩的日常表演 | UNVERIFIED |
| ConceptArt_Scene_Misao_DanceMeditation.png | 操 | 空曠舞蹈室獨舞 | 舞蹈室 | 圖38 操的獨舞冥想 | UNVERIFIED |
| ConceptArt_Scene_Akane_CandyAddiction.png | 朱音 | 房間被糖果包圍，沉溺逃避 | 房間/密閉空間 | 圖39 朱音的糖果成癮 | UNVERIFIED |
| ConceptArt_Scene_Aeri_NurseryRhymeSalvation.png | 愛莉、晴香 | 童謠世界救贖，愛莉第2次改變現實 | 現實與童話交界 | 圖40 愛莉的童謠救贖 | UNVERIFIED |
| ConceptArt_Scene_Akiho_DrugLab.png | 秋穗 | 秘密實驗，CGM血糖手錶誕生 | 冷色實驗室 | 圖41 秋穗的藥物實驗室 | UNVERIFIED |
| ConceptArt_Scene_Hanako_WarmKitchen.png | 花子、晴香 | 晨間廚房，金色陽光 | 晨間廚房 | 圖42 花子的溫暖廚房 | UNVERIFIED |
| ConceptArt_Scene_Akane_CandyKingdomExhibit.png | 朱音 | 糖果王座全景，腐爛融化跡象 | 糖果王座全景 | 圖43 朱音的糖果王國展覽 | UNVERIFIED |
| ConceptArt_Scene_Haruka_ShadowDualDance.png | 晴香、夕 | 詭異雙人舞，同步反向 | 扭曲世界 | 圖44 晴香與影子的雙舞 | UNVERIFIED |
| ConceptArt_Scene_BlackSong_EmpireThrone.png | 黑奏 | 幼女身軀坐巨大寶座 | 帝國中心 | 圖45 黑奏的帝國寶座 | UNVERIFIED |
| ConceptArt_Scene_Rin_PeacockWings.png | 凜 | 展開金藍色孔雀羽翼 | 天空/日區 | 圖46 凜的孔雀之翼 | UNVERIFIED |
| ConceptArt_Scene_Misao_BreakingMoment.png | 操 | 姿態崩潰跌落，傀儡絲斷裂 | 廢棄工廠 | 圖47 操的摔碎時刻 | UNVERIFIED |
| ConceptArt_Scene_CollectiveUnconscious_MuddyDeep.png | 無名者 | 無底深海，扭曲臉孔糾纏 | 超現實深海 | 圖48 集體潛意識的淤泥深海 | UNVERIFIED |
| ConceptArt_Scene_EmpirePlaza_CitizensFrozen.png | 市民眾 | 凝滯，表情定格恐懼 | 帝國廣場 | 圖49 帝國廣場的市民凝滯 | UNVERIFIED |
| ConceptArt_Scene_Haruka_FinalChoiceMoment.png | 晴香 | 分岐點抉擇 | 分岐點 | 圖50 晴香的最終抉擇瞬間 | UNVERIFIED |
| ConceptArt_Scene_CardboardKnight_LastStand.png | 愛莉 | 紙裝備對抗不可抗力 | 潛意識戰場 | 圖51 紙皮騎士的最後一擊 | UNVERIFIED |
| ConceptArt_Scene_Aya_SoulLiberationLight.png | 彩 | 身體化為金色光點 | 天空/星辰 | 圖52 彩的靈魂解放之光 | UNVERIFIED |
| ConceptArt_Scene_Saku_DoubleEdgedSurvival.png | 朔 | 日夜身份合體 | 日夜交界 | 圖53 朔的雙刃生存 | UNVERIFIED |
| ConceptArt_Scene_Haruka_ParticularizationProcess.png | 晴香 | 逐漸粒子化 | 新世界形成 | 圖54 靜止搖籃的粒子化進程 | UNVERIFIED |
| ConceptArt_Scene_Miyako_SoulDualLine.png | 美夜子 | 靈魂分裂為兩線 | 靈魂空間 | 圖55 美夜子的靈魂雙線 | UNVERIFIED |
| ConceptArt_Scene_NewWorld_LullabySong.png | 晴香、全角色 | 化身新世界 | 新世界 | 圖56 新世界的搖籃曲 | UNVERIFIED |
| ConceptArt_Scene_Miyako_DarkShowerHabit.png | 美夜子 | 黑暗中淋浴，悼念儀式 | 黑暗浴室 | 圖57 黑暗沖涼習慣 | EXISTS |
| ConceptArt_Scene_Rin_RedLineCompulsion.png | 凜 | 紅線強迫性標記牆壁 | 房間角落 | 圖58 紅線強迫症 | EXISTS |
| ConceptArt_Scene_Miyako_GrindingBrokenBlade.png | 美夜子 | 研磨凜的斷刃 | 祕密隱蔽處 | 圖59 研磨凜的斷刃 | UNVERIFIED |
| ConceptArt_Scene_Rin_PhantomMelodyHabit.png | 凜 | 哼唱殘缺旋律，戛然而止 | 無人時刻 | 圖60 半首旋律停頓 | EXISTS |
| ConceptArt_Scene_Misao_CompulsiveWashingRitual.png | 操 | 強迫清洗雙手 | 浴室 | 圖61 強迫清洗儀式 | UNVERIFIED |
| ConceptArt_Scene_Haruka_TransparencyObsession.png | 晴香 | 蒐集透明物件 | 房間角落 | 圖62 透明物執著 | UNVERIFIED |
| ConceptArt_Scene_Haruka_HotCocoaRitual.png | 晴香 | 每晚熱可可儀式 | 房間/夜晚 | 圖63 睡前熱可可成癮 | UNVERIFIED |
| ConceptArt_Scene_Haruka_CrisisIceChewing.png | 晴香 | 焦慮時嚼冰塊 | 焦慮時刻 | 圖64 嚼冰塊危機 | UNVERIFIED |
| ConceptArt_Scene_Haruka_BrokenGuitarStringSelfHarm.png | 晴香 | 破弦割痕自傷 | 私密時刻 | 圖65 破弦自傷 | UNVERIFIED |
| ConceptArt_Scene_Rin_PaperStarFolding.png | 凜 | 摺紙星星堆積 | 失眠夜晚 | 圖66 摺紙星星 | UNVERIFIED |
| ConceptArt_Scene_Akiho_StatueConfession.png | 秋穗 | 石像前傾訴罪惡感 | 廢棄地點 | 圖67 石像前的懺悔 | UNVERIFIED |
| ConceptArt_Scene_Akiho_InstrumentScanningRitual.png | 秋穗 | 儀器掃描愛莉遺物 | 實驗室 | 圖68 儀器掃描愛莉遺物 | UNVERIFIED |
| ConceptArt_Scene_Aya_BearHoardingCompulsion.png | 彩 | 熊公仔囤積 | 房間 | 圖69 熊公仔囤積 | UNVERIFIED |
| ConceptArt_Scene_Misao_SeamlessMendingHabit.png | 操 | 病態無痕修補物件 | 房間工作區 | 圖70 病態無痕修補 | UNVERIFIED |
| ConceptArt_Scene_Miyako_KaraokeRainSong.png | 美夜子＋隊伍 | K房縮沙發角落唱歌 | K 房 | 圖71 K房唱歌——雨天 | UNVERIFIED |
| ConceptArt_Scene_Miyako_DrowningSwimHabit.png | 美夜子 | 潛水延遲浮起 | 水域 | 圖72 長泳窒息習慣 | UNVERIFIED |
| ConceptArt_Scene_ParentsDay_Infiltration.png | 紫音、操 | 操偽裝家長 | 學校 | 圖73 家長日大作戰 | EXISTS |
| ConceptArt_Scene_Misao_DessertToothDrop.png | 操、晴香、眾人 | 悄悄掉牙 | 甜品店/餐桌 | 圖74 甜品局掉牙 | EXISTS |
| ConceptArt_Scene_Keishi_AwakeningMassacre.png | 刑思（黑奏） | 實驗室覺醒，殺光實驗人員 | 帝國實驗室 | 圖75 刑思殺出實驗室 | EXISTS |
| ConceptArt_Scene_Rin_Miyako_GoldenPartnership.png | 凜、美夜子 | 軍方默契巔峰 | 軍方戰場 | 圖76 凜×美夜子黃金搭檔 | EXISTS |
| ConceptArt_Scene_Rin_FinalSacrifice.png | 凜、美夜子 | 頸椎扭斷，殿後犧牲 | 戰場 | 圖77 凜殿後最終犧牲 | UNVERIFIED |
| ConceptArt_Scene_WireFenceEncounter.png | （未在已讀段落確認具體角色，標題暗示鐵絲網偶遇） | — | — | 圖78 鐵絲網偶遇 [ORIGIN_FLASHBACK] | UNVERIFIED |
| ConceptArt_Scene_HotaruSacrifice_VentilationShaft.png | 螢（黑奏摯友） | 犧牲 | 通風管道 | 圖79 通風管道那夜（螢的犧牲） [ORIGIN_FLASHBACK] | UNVERIFIED |
| ConceptArt_Scene_EmpireLab_KurokaneSpecimen.png | 黑奏 | 活體樣本 | 帝國實驗室 | 圖80 帝國實驗室：黑奏作為活體樣本 [ORIGIN_FLASHBACK] | EXISTS |
| ConceptArt_Scene_KurokaneUsurpation.png | 黑奏 | 弒父篡位 | 帝國 | 圖81 黑奏弒父篡位 [ORIGIN_FLASHBACK] | UNVERIFIED |
| ConceptArt_Scene_Haruka_Lunchbox_ThreeLayers.png | 晴香 | 遞便當，三層交疊 | — | 圖82 晴香遞便當（三層交疊） [ACT_I] | UNVERIFIED |
| ConceptArt_Scene_Rin_FoldingStars_MiyakoWatches.png | 凜、美夜子 | 凜不自知摺星星，美夜子目擊 | — | 圖83 凜不自知摺星星 [ACT_II] | EXISTS |
| ConceptArt_Scene_Miyako_FirstGlitch.png | 美夜子 | Glitch Form 首次 | — | 圖84 美夜子Glitch Form首次 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_Hikari_Death_KurokaneInvasion.png | 小光、黑奏 | 死亡＋邏輯侵入 | — | 圖85 小光之死＋黑奏邏輯侵入 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_CandyFactory_ThreeWayDebate.png | （朱音相關三人，具體未確認） | 三人辯論 | 廢棄糖果工廠 | 圖86 廢棄糖果工廠三人辯論 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_Sayo_Sacrifice_TinnitusVeil.png | 紗夜 | 犧牲，耳鳴遮蔽視角 | — | 圖87 紗夜犧牲——耳鳴遮蔽 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_Saku_WitnessNight.png | 朔 | 困獸的慈悲見証之夜 | — | 圖88 困獸的慈悲——朔見証之夜 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_Aeri_PaperKnight_StatueCracks.png | 愛莉 | 具現化擋刀，石像龜裂 | — | 圖89 愛莉具現化擋刀＋石像龜裂 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_Akane_FeastAtEdge.png | 朱音、朔 | 屍骸女皇雛形，遠距見証 | 嘆息之橋附近 | 圖90 王國邊緣的盛宴 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_Misao_PuppetStringTeeth.png | 操 | Body Horror Stage 2a，絲線縫牙 | — | 圖91 操絲線縫牙 [ACT_II] | EXISTS |
| ConceptArt_Scene_Miyako_WorthlessVigil.png | 美夜子、晴香 | 貓形態陪伴，不說話守候 | 廢棄地鐵站 | 圖92 美夜子無價值留守 [ACT_II] | EXISTS |
| ConceptArt_Scene_Rin_MiyakoFirstEncounter.png | 凜、美夜子 | 重組後首次相遇，單向創傷 | — | 圖93 凜重組後第一次遇見美夜子 [ACT_II] | EXISTS |
| ConceptArt_Scene_Haruka_AyaAbsenceSense.png | 晴香、彩（黑奏偽裝） | 0.5秒直覺閃現「彩不在」 | — | 圖94 晴香感應到「彩不在」 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_Haruka_LiveBroadcastBreak.png | 晴香 | 「夕」接管前一幀，維多利亞天使/半屍骸重疊閃爍 | 直播現場 | 圖95 飢餓的天使——直播失控 [ACT_II] | EXISTS |
| ConceptArt_Scene_Kurokane_FarmObservation.png | 黑奏 | 情緒農場觀察者視角 | — | 圖96 黑奏農場觀察 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_Haruka_PhotoAlbumAnomaly.png | 晴香 | 合照殘影異變 | — | 圖97 鏡像相簿異變 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_Misao_VanityConfession.png | 操 | 「我不如我以為的那麼好」，驕傲側身告白 | — | 圖98 操の虛榮告白 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_Saku_SeesUnit01.png | 朔、美夜子 | 單方面認出美夜子（Unit 01） | — | 圖99 朔看見Unit 01的臉 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_Rin_FinalChoiceUnit00.png | 凜 | 拒絕被救，Unit 00-Null 揭露 | — | 圖100 凜的最終選擇 [ACT_III] | EXISTS |
| ConceptArt_Scene_Miyako_Kaishakunin.png | 美夜子 | 介錯之刃，終結凜生命 | — | 圖100-01 介錯之刃 [ACT_III] | EXISTS |
| ConceptArt_Scene_Rin_SighBridgeSolo.png | 凜 | 揭露前最後獨處，已決定 | 嘆息之橋 | 圖101 嘆息之橋——凜獨角 [ACT_III] | UNVERIFIED |
| ConceptArt_Scene_Misao_ForcedBetrayalReport.png | 操 | 被迫透露隊友情報，手懸通訊器 | — | 圖102 操の被迫報串 [ACT_III] | EXISTS |
| ConceptArt_Scene_CandyTowerBlockTransaction.png | 晴香、朱音 | 地下情報市場交易 | 糖果唐樓 | 圖103 糖果唐樓交易 [ACT_III] | UNVERIFIED |
| ConceptArt_Scene_SilentReunionSewers.png | 晴香、朱音 | 無聲留物離開，保留空間尊嚴 | 下水道 | 圖104 下水道無聲重逢 [ACT_III] | UNVERIFIED |
| ConceptArt_Scene_AnnouncementNight_AkanePurgeTarget.png | 朱音 | 帝國公告清剿令 | — | 圖105 公告夜（紫音作為清剿目標） [ACT_III] | UNVERIFIED |
| ConceptArt_Scene_Aya_TeddyBear_HeartChamber.png | 彩 | 心房中摸熊公仔，等待具象化 | 心房空間 | 圖106 彩在心房中摸熊公仔 [ACT_III] | EXISTS |
| ConceptArt_Scene_PhaseK_SoulPrisonKitchen.png | 晴香 | K期靈魂監獄，溫暖監獄 | 廚房（循環空間） | 圖107 蜜月困境——K期靈魂監獄 [ACT_III] | UNVERIFIED |
| ConceptArt_Scene_CorpseAwakening_L4.png | 屍骸群（人偶型/廢鐵型） | 集體復甦 | 城市 | 圖108 屍骸覺醒——L4 [ACT_III] | UNVERIFIED |
| ConceptArt_Scene_Miyako_FinallyСries.png | 美夜子 | 第一次真正哭泣（**注意：來源檔名含西里爾字母「С」非標準英文C，屬來源文件疑似打字錯誤，生成時需向作者確認正確拼法**） | — | 圖109 美夜子終於哭出來 [ACT_IV] | UNVERIFIED |
| ConceptArt_Scene_Miyako_ClumzyFinalShot.png | 美夜子 | 笨拙演奏，全片最後一幕 | — | 圖110 美夜子笨拙演奏 [ACT_IV] | UNVERIFIED |
| ConceptArt_Scene_VictoriasTear_CrossSection.png | 世界觀（無角色） | 人造太陽剖面圖 | 維多利亞之淚 | 圖111 [WORLD_BUILDING] | UNVERIFIED |
| ConceptArt_Scene_CollectiveUnconscious_BackAlleyTransition.png | 世界觀（無角色） | 後巷過渡狀態 | 集體潛意識空間 | 圖112 [WORLD_BUILDING] | UNVERIFIED |
| ConceptArt_Scene_TraumaCage_Manufacturing.png | 世界觀（無角色） | 心防內化裝置製造過程 | — | 圖113 [WORLD_BUILDING] | UNVERIFIED |
| ConceptArt_Scene_EMB_OfficeInterior.png | 凜（環境為主） | 制服日常環境 | 情緒管理局辦公空間 | 圖114 情緒管理局：局內辦公空間 [WORLD_BUILDING] | UNVERIFIED |
| ConceptArt_Scene_SpiritTree_NormalState.png | 世界觀（無角色） | 平時狀態 | 靈樹 | 圖115 [WORLD_BUILDING] | UNVERIFIED |
| ConceptArt_Scene_EmpirePlaza_NormalDay.png | 世界觀（無角色） | 常態日常 | 帝國廣場 | 圖116 [WORLD_BUILDING] | UNVERIFIED |
| ConceptArt_Scene_EmoVisorGen3_DayDistrictAddiction.png | 市民眾 | 集體成癮 | 日區 | 圖117 Emo-Visor Gen 3 [WORLD_BUILDING] | UNVERIFIED |
| ConceptArt_Scene_MagicalCorpse_SoulVesselBurnout.png | 屍骸（通用） | 心之器燃盡瞬間 | — | 圖118 屍骸化：心之器燃盡時刻 [WORLD_BUILDING] | UNVERIFIED |
| ConceptArt_Scene_Aya_HeartChamber_VentilationEternal.png | 彩 | 被囚禁意識空間，通風管道形態 | 彩的心房 | 圖119 彩的心房：通風管道永恆空間 [WORLD_BUILDING] | EXISTS |
| ConceptArt_Scene_Akane_LollipopRecruitment.png | 朱音、晴香 | 因一粒糖入隊 | — | 圖120 珍寶珠入隊 [ACT_I] | UNVERIFIED |
| ConceptArt_Scene_Misao_SkirtQuestion.png | 操、晴香 | 晴香以身體擋攻擊，操入隊起點 | — | 圖121 操入隊 [ACT_I] | UNVERIFIED |
| ConceptArt_Scene_Miyako_WorthlessVigil2.png | 美夜子、晴香 | 廢棄地鐵站遞水，軟接觸 | 廢棄地鐵站 | 圖122 軟接觸 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_WishList_Underground.png | 晴香、美夜子、凜、朱音 | 死前願望清單 | 地下避難所 | 圖123 死前願望清單 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_Miyako_MirrorDeathReflection.png | 美夜子 | 鏡中映照Alpha線死亡真身 | — | 圖124 美夜子鏡像反映 [MULTI_ACT] | UNVERIFIED |
| ConceptArt_Scene_Misao_SketchbookRevelation.png | 操 | 無名男孩速寫簿，形式主義崩潰起點 | — | 圖125 無名男孩速寫簿 [ACT_II_III] | UNVERIFIED |
| ConceptArt_Scene_Misao_SayoFragments.png | 操、紗夜 | 集體潛意識中尋見母親碎片 | 集體潛意識 | 圖126 操在集體潛意識尋見母親碎片 [ACT_III] | UNVERIFIED |
| ConceptArt_Scene_Haruka_BandageFinalLayer.png | 晴香 | 覺醒後20年，主動撕膠布 | — | 圖127 膠布哲學第四層 [ACT_IV] | UNVERIFIED |
| ConceptArt_Scene_TeamCombat_Ineffective.png | 晴香、美夜子、操 | 個別勝利無法改變系統痛苦 | — | 圖128 打怪無效 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_LightVeil_PublicEnemy.png | 晴香（變身態崩潰） | 國民天使→情緒吸血鬼，30秒轉變 | — | 圖129 天使變公敵 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_130_HarukaMirrorIntegration.png | 晴香 | 鏡中整合 | — | 圖130 晴香鏡中整合 [ACT_I_FINALE] | EXISTS |
| ConceptArt_Scene_131_SistersIdentityRevelation.png | （親姊妹相關，具體角色未在已讀段落確認） | 身份揭露現場 | — | 圖131 親姊妹揭露現場 [ACT_III_FINALE] | UNVERIFIED |
| ConceptArt_Scene_132_CollectiveUnconscious_DirectClash.png | （未確認） | 正面衝突 | 集體潛意識 | 圖132 集體潛意識正面衝突 [ACT_III_PHASE_J] | UNVERIFIED |
| ConceptArt_Scene_133_MoonlitRecognition.png | 凜、美夜子（推測，同月下崩潰/相認主題相關） | 月下相認 | — | 圖133 月下相認 [ACT_III_PHASE_H1.5] | UNVERIFIED |
| ConceptArt_Scene_134_KurokaneHaruka_Confrontation.png | 黑奏、晴香 | 病態愛恨對峙 | — | 圖134 黑奏與晴香的病態愛恨對峙 [ACT_III_PHASE_J_CLIMAX] | UNVERIFIED |
| ConceptArt_Scene_135_Yu_FinalEpiphany_Dissolution.png | 夕 | 臨別頓悟與消散，表情漸微笑 | 深藍前黎明光色空間 | 圖135 夕的臨別頓悟與消散 [ACT_III_IV_BOUNDARY] | UNVERIFIED |
| ConceptArt_Scene_146.png | 愛莉 | 紙皮騎士形態，第二次改變現實決定（被動→主動轉折） | — | 圖146 愛莉的第二次改變現實決定 [ACT_III_J] | UNVERIFIED |
| ConceptArt_Scene_147.png | 朱音（紫音） | 日常形態崩潰版，下水道野獸化 | 下水道 | 圖147 紫音下水道野獸化 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_148.png | 美夜子 | 貓形態或人形態，獨處靜默 | 廢棄地鐵站 | 圖148 美夜子廢棄地鐵站夜明前 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_149.png | 秋穗、愛莉 | Act IV形態重逢，手握 | — | 圖149 秋穗與愛莉重逢 [ACT_IV] | UNVERIFIED |
| ConceptArt_Scene_150.png | 夕、晴香 | 5歲形態最後消散 | — | 圖150 夕5歲形態消散 [ACT_IV] | UNVERIFIED |
| ConceptArt_Scene_151.png | 彩 | 學生偽裝形態/本源形態，永恆輪迴起點 | — | 圖151 彩的永恆輪迴開始 [ACT_III_IV] | UNVERIFIED |
| ConceptArt_Scene_136_ShionLastWords.png | 朱音（紫音） | 糖果山與最後一頓飯 | 糖果山 | 圖136 糖果山與最後一頓飯 [ACT_III] | UNVERIFIED |
| ConceptArt_Scene_137_MisaoMotherFragment.png | 操 | 「媽媽從未停止愛我」 | — | 圖137 媽媽從未停止愛我 [ACT_III] | UNVERIFIED |
| ConceptArt_Scene_138_HarukaAwakening134.png | 晴香 | 二十年後第一個早晨 | — | 圖138 第一個早晨 [ACT_IV] | UNVERIFIED |
| ConceptArt_Scene_139_KeishiEscape.png | 刑思（黑奏） | 破繭 | — | 圖139 刑思破繭 [ACT_III] | UNVERIFIED |
| ConceptArt_Scene_Saku_DejavuRecognition.png | 美夜子（Unit 01貓形態）、朔 | 行為識別升級，物理極近記憶極遠 | — | 圖140 既視感追認 [ACT_II] | EXISTS |
| ConceptArt_Scene_Kurokane_TrueFormRevealed.png | 黑奏、主角團 | 皇袍滑落，148cm幼女真身暴露 | — | 圖141 黑奏真身揭露 [ACT_III] | UNVERIFIED |
| ConceptArt_Scene_Akiho_LaboratoryConfession.png | 秋穗、愛莉石像 | 每日跪石像懺悔 | — | 圖142 秋穗實驗室懺悔 [ACT_I] | UNVERIFIED |
| ConceptArt_Scene_Misao_MidnightDollAssembly.png | 操 | Body Horror Stage 2b，人偶製作 | — | 圖143 操的夜中人偶製作 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_Misao_Sayo_LastMorning.png | 操、紗夜 | 最後平靜的晨，額頭輕吻 | — | 圖144 操與紗夜最後一晨 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_Saku_EchoOfProtection.png | 朔 | 目睹成年屍骸護幼屍骸 | — | 圖145 保護的殘響 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_156_MiyakoKaishakunin.png | 美夜子 | 被迫介錯凜（另一版介錯場景） | — | 圖156 美夜子被迫介錯凜 [ACT_III_PHASE_H2] | UNVERIFIED |
| ConceptArt_Scene_157_HaloManifestation.png | （未確認具體角色） | 光環的視覺顯現 | — | 圖157 [ACT_II_III] | UNVERIFIED |
| ConceptArt_Scene_158_YuRealityOverride.png | 夕 | 嘗試重置世界 | — | 圖158 夕嘗試重置世界 [ACT_III_PHASE_K] | UNVERIFIED |
| ConceptArt_Scene_159_BetaLineSolidification.png | （時間線相關，無單一角色） | 時間折返視覺化，Beta線固化瞬間 | — | 圖159 [ACT_IV_OPENING] | UNVERIFIED |
| ConceptArt_Scene_152_CorpseApology.png | 屍骸（通用） | 屍骸的道歉 | — | 圖152 [ACT_I] | UNVERIFIED |
| ConceptArt_Scene_153_AkihoAeriAccident.png | 秋穗、愛莉 | 實驗室事故（愛莉誕生起源） | 實驗室 | 圖153 秋穗與愛莉的實驗室事故 [PRE-STORY] | UNVERIFIED |
| ConceptArt_Scene_154_HanakoDeathCreation.png | 花子 | 死亡瞬間（創造/Alpha線起源） | — | 圖154 花子的死亡瞬間 [PRE-STORY / ALPHA LINE] | UNVERIFIED |
| ConceptArt_Scene_155_YuCompleteTakeover.png | 夕 | 完全奪取晴香身體 | — | 圖155 夕完全奪取晴香身體 [ACT_III] | UNVERIFIED |
| ConceptArt_Scene_160_AyaLoveDeclaration.png | 彩 | 愛不是佔有，是讓她自由 | — | 圖160 [ACT_III] | UNVERIFIED |
| ConceptArt_Scene_161_HarukaCollectiveUnconscious20Years.png | 晴香 | 二十年的內心地獄 | 集體潛意識 | 圖161 [ACT_III_IV_GAP] | UNVERIFIED |
| ConceptArt_Scene_162_ShionCorpsificationMoment.png | 朱音（紫音） | 放棄的那一秒，屍骸化瞬間 | — | 圖162 放棄的那一秒 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_163_MiyakoBathMirror.png | 美夜子 | 「我還是人嗎？」，浴室鏡前 | 浴室 | 圖163 [ACT_III] | UNVERIFIED |
| ConceptArt_Scene_164_MisaoFinalConfession.png | 操 | 「我選擇停留在我想停留的位置」 | — | 圖164 [ACT_III] | UNVERIFIED |
| ConceptArt_Scene_165_RinMiyakoLastNight.png | 凜、美夜子 | 殿後前夜 | — | 圖165 [ORIGIN_FLASHBACK] | UNVERIFIED |
| ConceptArt_Scene_166_ShionFallDecision.png | 朱音（紫音） | 「既然如此，讓怪物有個家」 | — | 圖166 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_167_AkihoBetrayal.png | 秋穗 | 母親之愛的背面 | — | 圖167 [ACT_II] | UNVERIFIED |
| ConceptArt_Scene_168_AkaneCorpseFloodCity.png | 朱音 | 幻象破滅，屍骸外流城市 | 城市 | 圖168 [ACT_II] | EXISTS |
| ConceptArt_Scene_169_BansheeFirstBattle.png | 秋穗（無臉執行官形態，對應 `ConceptArt_Akiho_Boss.png`） | 悲鳴女妖首戰 | — | 圖169 [ACT_I] | EXISTS |
| ConceptArt_Scene_170_BureauDistantWatch.png | （未確認具體角色，情緒管理局視角） | 遠望 | 情緒管理局 | 圖170 情緒管理局的遠望 [ACT_I] | UNVERIFIED |

---

## 備註 / 已知資料缺口

1. **圖78、圖86、圖131-132、圖157、圖159、圖170** 等場景，因來源文件段落過長或本次掃描未完整讀取詳細內文，「對應角色」欄只能依標題/上下文推斷，已在表內標註「未確認」。下一階段（階段1審計 / 階段2生成）如需用到呢啲場景，Agent A 應重新針對該場景做完整段落 source check，唔可以直接假設本表推斷正確。
2. **`ConceptArt_Scene_Miyako_FinallyСries.png`**：來源文件內呢個檔名用咗西里爾字母「С」（U+0421）代替標準英文「C」，懷疑係打字/字型自動更正錯誤。生成 spec 時必須向作者確認正確英文檔名，唔可以直接沿用呢個含非標準字元嘅檔名。
3. **`ConceptArt_Misao_MagicalGirl_Action.png`**（操戰鬥動作形態）被圖1/5/16/26/31 等多個重要場景引用為 reference，但 repo 內只搵到 `ConceptArt_Misao_MagicalGirl.png`（無 `_Action` 後綴），需確認係咪同一檔案改咗名，定係真係未生成。
4. **`ConceptArt_Akiho_DailyCasual.png`** vs 已存在嘅 `ConceptArt_Akiho_CasualWear.png`：命名相似，可能係同一狀態嘅重複命名，需作者/下一階段核實。
5. 部分「已存在」檔案實際存放路徑同來源文件暗示嘅資料夾分類唔一致（例如 `ConceptArt_Saku_NightHunter.png` 同 `ConceptArt_Kurosou_CasualWear.png` 分別存放喺 `Scene/` 同 `Aya/` 資料夾而非預期嘅 `Characters/Saku/`、`Characters/Kurosou 或 BlackSong/`），使用時要用返本表列出嘅實際路徑，唔好假設路徑規律。
6. 本表未收錄 `art/ConceptArt/**/_BAK/` 資料夾內大量 UUID 命名嘅歷史備份檔案（約600+個），因為佢哋同來源 spec 文件嘅具名引用冇對應關係，如果之後需要用呢啲舊檔做 reference，要另外做一次針對性比對。
