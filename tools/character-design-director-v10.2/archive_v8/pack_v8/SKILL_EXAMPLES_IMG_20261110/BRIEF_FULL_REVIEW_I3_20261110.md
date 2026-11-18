# BRIEF：I3 全方向圖像互審＋I4 討論（2026-11-10 HKT）

作者指示（2026-11-10 15:38 HKT）：「係每個例子都要通過每個角度討論,仲有要有圖片分析咁討論」。

上一輪 I1／I2 每個例子只由原作者做圖像分析、再由另外 3 個方向互審，**未滿足「每個例子通過全部 14 個角度、而且要用圖片分析嚟討論」**。本輪補齊：14 個方向各自用自己嘅鏡頭，對 **全部 14 個例子** 做程式圖像分析，然後再用圖像證據互相對論到有結果。

範圍：通用角色設計 skill 例子（EX01–EX14，以 **v6** 例塊為審查對象）。**唔好**設計或重繪畫香／Haruka 角色。I1／I2 檔、官方原圖、v6 草稿同 REF **一律唔准覆寫**。新寫嘅報告同輸出全部用新路徑（見下）。紀錄 append-only；改任何已存在檔之前要先備份，但本輪預設唔改舊檔。

## 必讀（先讀再做）

| 檔 | 用途 |
|---|---|
| `../SKILL_DRAFT_character_design_core_v6_20261110.md` | 審查對象。逐例引用 **v6**「比較／教／圖像核對／唔證」句，唔好再審 v5 舊句。 |
| `../SKILL_REF_character_design_sources_v6_20261110.md` **§8** | 官方圖路徑、來源 URL、md5、級別。本 brief §4 有精簡表，以 §8 為準。 |
| `INTEGRATION_I2_20261110.md`（本資料夾） | I1／I2 已發現、已修正、已撤回嘅數字，同跨例規則 R1–R4。 |
| `BRIEF_EXAMPLE_IMAGE_ANALYSIS_20261110.md`（本資料夾） | I1／I2 舊 brief，只作格式參考；本輪覆蓋範圍同輪換表已經被本 brief 取代。 |
| `OVERVIEW_EXAMPLES_IMG_20261110.png` | 14 例官方對照＋實際 64 px 高縮圖總覽，方便先目視。 |
| 各方向 `research/<dir>/SKILL_EXAMPLE_IMG_I1_20261110.md` 同 `SKILL_EXAMPLE_IMG_I2_REVIEW_20261110.md`，以及 `img_examples_20261110/` | 可讀、可重跑核對；**唔准覆寫**。I3 必須自己跑程式分析，唔可以只覆述 I1 數字。 |

研究根目錄：`/workspace/haruka/research/`。以下 `research/<dir>/` 都係呢個根。

## 守則（全程）

- 唔設計 Haruka；唔改官方原圖像素；唔 git merge／push。
- 官方圖只作內部低解像研究參考，唔再分發、唔當新創作發佈。
- 唔發明來源或圖像。設計師意圖只可以引用已核或本輪新核嘅訪談；級別：**A**＝設計師／主創直接引句，**B**＝記者／製作人轉述。評級唔一致就並列，唔自行升級。
- 128／64 px 要誠實：讀得到寫讀到，失去寫失去。程式可見 ≠ 觀眾認得或記得；未做人測就寫未測。
- 量度要可重產：腳本一條指令重跑，輸出同引用嘅 metrics JSON 一致；遮罩註明版本；人手遮罩座標寫死喺腳本或附檔。
- 報告可用粵語或書面中文。**唔好寫出 CND、SUG 或 D- 編號。**
- 唔好自行改 v6 草稿／REF；要改就喺報告入面寫「建議修訂」原文，等整合。
- 唔好補 §9 優先序例子（v6 已標「缺」）；唔好把 IMAGE_UNVERIFIED 項當成已核。

## 量度規則 R1–R4（v6 已入正文；本輪必須遵守）

由 I2 十四例圖像分析歸納，見 `INTEGRATION_I2_20261110.md` §3–§4，同 v6 §5／§8：

- **R1（§8）**：64 px 縮圖多數只存活大形、穿法、大色塊、髮量或長垂件。表面圖案、細飾物、扣件／開合、眉角、細尖數通常消失。呢類主張要近讀或正背圖，**唔准**用 64 px（尤其填實黑剪影）去驗，亦唔准因為 64 px 讀唔到就判主張失敗。可見 ≠ 認得／記得。
- **R2（§5）**：剪影／外包絡主張要寫明量咗乜——寬度、面積、實心度定邊段剖面。換載體可以只加寬唔加面積（EX01：寬度比約 1.20，面積比約 1.01）。
- **R3（§8）**：淡色／白／金髮同膚色、白衣、高光相近時，色閾值或自動去背遮罩會洩漏（EX01 白髮吞戰鬥白衣；EX03 金髮吞靴；EX09 淡金髮＝膚色／舉拳）。要人手遮罩＋疊圖目視 QC，並註明數字出自邊個遮罩版本。
- **R4（§8）**：姿勢、持物、鏡頭距離唔同嘅全身 IoU／寬高比，只量外包絡差，**唔當改稿幅度或身份分**。官方圖好少有同姿勢對照，冇就照報混淆，唔好當已配平。

另外記住（I2 跨例，唔係新規則句，但分析時要跟）：

- 方形頭像／icon 裁切常常睇唔到穿法、長髮下垂或背面開合；主張要同裁切類型對應。
- 引用數字以勘誤後／v2 為準。已撤回或作廢嘅數**唔好再引用**（見 §5）。

---

## Round I3：每方向審全部 14 例（先做完，再等 I4）

每個方向各寫一份：

`research/<your_dir>/SKILL_EXAMPLE_IMG_I3_FULL_REVIEW_20261110.md`

覆蓋 **EX01–EX14 全部**，用**自己方向嘅鏡頭**。包括自己負責嗰例：要對住 **v6 已改過嘅例塊** 重新核對，唔好原封抄 I1。若發現 I1 仲有錯，喺 I3 寫 ERRATUM（日期＋舊數作廢＋新數），**唔好改 I1 檔**。

### 圖像使用

1. **重用** REF v6 §8 已經下載嘅官方圖（路徑同 md5 見 §4）。腳本開頭核對 md5；一致先分析。
2. **只有檔案缺失**先重新下載（URL 用 §8），下載後再核 md5。新下載同清單唔一致：**唔好覆蓋盒上原檔**；另存並報告差異，該側標 IMAGE_UNVERIFIED，或者改用盒上已核檔。
3. 分析時直接讀原路徑即可，唔使複製官方圖。若要複製，只可以複製到自己嘅 `i3_img/`，而且唔改像素。
4. 唔准生成、重繪、或用模型「補」參考圖。官方圖攞唔到就寫明，主張標 IMAGE_UNVERIFIED。
5. I1／I2 已有衍生圖（遮罩、縮圖、並排）可以作對照，但 I3 自己引用嘅數，要由自己嘅腳本重產。EX14 剔劍只用 v2 人手多邊形結果（見 §5），唔好用 v1 `nosword` 檔。

### 每例要做嘅圖像分析（自己跑程式）

腳本放 `research/<your_dir>/i3_scripts/`（建議 `analyze_i3_EXNN_<dir>.py`，或一個可重產全集嘅進入點）。輸出放 `research/<your_dir>/i3_img/EXNN/`。至少包括：

- 該例官方對照嘅並排或分視圖（標明邊張圖、邊個形態、有冇裁切）；
- 同主張相關嘅 **128 px 同 64 px 高正規化縮圖**（寫明縮放方法：nearest／area 等）；若主張只喺頭像或胸像通道成立，另外出對應裁切；
- **你嘅鏡頭專屬量度**（見下表），輸出 PNG／疊圖；
- `metrics.json`：所有被引用嘅數字，可由腳本重產；寫入輸入檔 md5、遮罩版本、對齊方式、裁切框。

鏡頭建議（可加，唔好交白卷；量唔到就寫限制，唔好假數）：

| 方向 | I3 最少要做嘅分析類型 |
|---|---|
| commercial | 用途／載體是否同縮圖或商品頭像通道對得上；64／128 同 icon 裁切下仲讀唔讀到主張 |
| flow_structure | 結構流、下擺／垂墜、寬度剖面；開合是否改咗流，定只係紋樣 |
| color_value | 主色塊面積％、Lab／ΔE00、明度圖、灰階 64 px；簽名色是否最大面積 |
| silhouette_cast | 黑剪影／外包絡；寫明寬度 vs 面積 vs 實心度；遵守 R2、R4 |
| identity_canon | 跨形態／跨服裝仍然連續嘅身份件；同消失嘅細節分開寫 |
| production_critic | 線密度／色塊件數；(C) 可重畫資料喺公開圖齊唔齊；縮圖分 ≠ (C) 通過 |
| motif_world | 母題位置同尺度；表面紋 vs 結構件；64 px 母題仲在唔在 |
| construction_fashion | 構造鏈（根部、開合、穿法）；扣件喺邊個視圖先見 |
| head_hair | 頭／髮量塊、髮 vs 衣物分欄；淡色髮用人手遮罩（R3）＋疊圖 QC |
| performance_motion | 姿勢、重心、持物干擾；靜圖 ≠ 動畫 PASS；裁切對動態可讀性 |
| psychology | 只核像素對比／明暗，唔用衫色診斷性格或創傷；意圖仍要有來源 |
| audience_market | 不同裁切（全身／胸像／方形頭像）下嘅可讀性；可見 ≠ 記得；未測就寫未測 |
| originality | 例內前後或鄰近設計差；外部近似只可用已下載或本輪新核嘅官方圖，唔好發明「好似邊個」 |
| tv_simplify | 大色塊 vs 碎線／細尖；減法有冇真嘅改變外包絡；畫風干擾要寫明 |

### 每例報告欄（14 例都要齊）

對每個 EXNN，用固定小節（建議標題 `### EXNN｜<案例短名>`）：

1. **引用 v6 主張**：用短句引用「比較／教」入面你要核嘅那句（標草稿標題即可，唔使整塊複製）。
2. **官方圖核對**：用咗邊啲 §8 檔、md5 是否一致、日期。
3. **本方向分析**：腳本路徑、輸出路徑、`metrics.json` 路徑；量到啲乜（數字＋條件）。
4. **64／128 px 誠實讀法**：你嘅鏡頭下，縮圖存活／失去乜；呢個尺度驗唔驗到呢句主張（R1）。
5. **判決**：對 **v6 例塊呢句主張** 給 `SUPPORT`／`PARTLY SUPPORT`／`CONTRADICT`。判 CONTRADICT 或同 I2 已採納句衝突時，要指出具體數字或圖。
6. **本鏡頭加咗或反對乜**：新發現、同意 I2 邊點、反對邊點（反對要有圖）。
7. **建議修訂**：例塊或規則嘅具體改句，或寫「無需修改」。只改圖像證據要求改嘅地方；意圖句唔好單憑像素升級或刪走（除非來源都被推翻）。
8. **圖像證唔到／未核**：列明。需要設計師來源時，做真實網絡查核並評 A／B；找不到就寫找不到，**唔好發明**。

文首加一頁總表：14 例判決＋一句理由。文末可寫跨例觀察（仍然要建基於本輪圖像，唔好空講）。

I3 交齊之前，**唔好開始 I4**。

---

## Round I4：讀齊其他人嘅 I3，用圖像證據討論

當 14 份 I3 都存在而且覆蓋 14 例之後，每個方向寫：

`research/<your_dir>/SKILL_EXAMPLE_IMG_I4_DISCUSSION_20261110.md`

做法：

1. 讀晒其餘 13 份 I3（同自己那份對讀），按例子整理同意／分歧。
2. 對每個有分歧嘅例子：**用圖像回應**，唔好純文字駁。可以重跑對方腳本、抽查 md5，或者自己做反證分析。反證腳本同輸出放 `research/<your_dir>/i4_scripts/`、`research/<your_dir>/i4_img/EXNN/`（同樣要 metrics JSON）。唔好改別人嘅 I3 檔或輸出。
3. 每例給一個收斂建議：維持 v6 原文／採納某方向嘅改句／提出合併句。寫明你願意接受嘅最終措辭。
4. 若某例 14 個方向已經一致（判決同主要措辭無實質衝突），寫 `CONVERGED` 同建議最終句。
5. 若仍分裂，寫 `SPLIT`：爭議焦點、兩邊證據、你建議整合者點樣合併，留俾 I5。

---

## Round I5（只對仍分裂嘅例子）

整合者先按 I4 出「合併句」草案（新檔，唔改 v6）。然後各方向對每條仍分裂嘅合併句投票：`ACCEPT`／`ACCEPT_WITH_EDITS`（附一句替代）／`REJECT`（附圖像理由）。報告名：`research/<your_dir>/SKILL_EXAMPLE_IMG_I5_VOTE_20261110.md`。未分裂嘅例子唔使投票。I5 啟動前會另發短指引；而家先集中做 I3。

---

## 覆蓋矩陣（整合者填；研究員唔使填）

I3 收齊後，整合者喺本資料夾新寫 `COVERAGE_MATRIX_I3_20261110.md`（唔改本 brief）。列＝例子 EX01–EX14，行＝14 個方向（次序同下表），格內填該方向 I3 判決：`S`／`PS`／`C`（SUPPORT／PARTLY SUPPORT／CONTRADICT），缺交或無圖像分析留空。I4 之後可以再加一張收斂表（`CONVERGED`／`SPLIT`）。目標係 14×14 格全部有圖像分析判決，唔好再得 3 個互審。

方向固定次序（亦係 EX 作者次序）：

1. commercial　2. flow_structure　3. color_value　4. silhouette_cast　5. identity_canon　6. production_critic　7. motif_world　8. construction_fashion　9. head_hair　10. performance_motion　11. psychology　12. audience_market　13. originality　14. tv_simplify

空白矩陣（整合用）：

| 方向＼例 | EX01 | EX02 | EX03 | EX04 | EX05 | EX06 | EX07 | EX08 | EX09 | EX10 | EX11 | EX12 | EX13 | EX14 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| commercial | | | | | | | | | | | | | | |
| flow_structure | | | | | | | | | | | | | | |
| color_value | | | | | | | | | | | | | | |
| silhouette_cast | | | | | | | | | | | | | | |
| identity_canon | | | | | | | | | | | | | | |
| production_critic | | | | | | | | | | | | | | |
| motif_world | | | | | | | | | | | | | | |
| construction_fashion | | | | | | | | | | | | | | |
| head_hair | | | | | | | | | | | | | | |
| performance_motion | | | | | | | | | | | | | | |
| psychology | | | | | | | | | | | | | | |
| audience_market | | | | | | | | | | | | | | |
| originality | | | | | | | | | | | | | | |
| tv_simplify | | | | | | | | | | | | | | |

---

## 4. 官方圖清單（REF v6 §8；2026-11-10 盒上已核 md5，0 缺）

路徑相對 `research/`。分析前再核一次 md5。完整來源 URL 同級別見 REF §8。

### EX01｜commercial｜CRYSTAR・幡田零（私服 vs バトル）
- `commercial/img_examples_20261110/src/c_ntny_furyu_a4.png`　md5 `a81b516c7ffb1109c9feb8eaba385396`　私服立ち絵（左平靜＝主對）
- `commercial/img_examples_20261110/src/c_ntny_furyu_a8.png`　md5 `b463628848bf536656da6f121707576e`　バトル立ち絵（左平靜＝主對）
- 註：公式私服全身圖 IMAGE_UNVERIFIED；結晶劍唔喺 a8 站立圖。

### EX02｜flow_structure｜Bayonetta 1→2
- `flow_structure/img_examples_20261110/src_b1_final_sheet.jpg`　md5 `427b7986710a13502accb3ef57a9ff04`　B1 最終正背設定
- `flow_structure/img_examples_20261110/src_b2_sheet.jpg`　md5 `731ac7ed43d275cd0277b48123fc1e96`　B2 正背設定
- 註：Jeanne 對照只作用途對照。B1 正面殘墨同 64 px 條標籤重疊仍屬作者待辦，唔影響已引數，但新量度避開殘墨區。

### EX03｜color_value｜まほなれ クルミ／ユズ
- `color_value/img_examples_20261110/kurumi_portrait1@2x.png`　md5 `3696885afbba2bc73945e780dea229a9`　クルミ公式全身
- `color_value/img_examples_20261110/yuzu_portrait2@2x.png`　md5 `b1117ac9f456875efbbeb958684e1a8d`　ユズ公式全身
- 註：紅発動靜圖 IMAGE_UNVERIFIED。髮面積用勘誤後人手／修正遮罩邏輯，唔好用已作廢嘅 44.33%。

### EX04｜silhouette_cast｜クライマキナ レーベン
- `silhouette_cast/img_examples_20261110/leben_private_famitsu_202303.jpg`　md5 `2beb5dceca997eb522dff440d5972c17`　通常形態／私服
- `silhouette_cast/img_examples_20261110/leben_battle_famitsu_202303.jpg`　md5 `52c7b6f4b8ec4ee89ceb8ac29970fff3`　戦闘形態
- 註：站 vs 浮空、持槍；全身 IoU／寬高比同時含姿勢同道具（R4）。彩色並排唔等於頭腳對齊。

### EX05｜identity_canon｜ペルソナ5 主人公（可連其餘隊員官方圖）
- `identity_canon/img_examples_20261110/raw_p5/hero_char_img.png`　md5 `b10ecce516066abbc94cd874303fd834`　学生Ver.全彩
- `identity_canon/img_examples_20261110/raw_p5/hero_char_img2.png`　md5 `cc8230b3e7b34cf29e5a0946654ddbc2`　怪盗Ver.全彩（含字標）
- `identity_canon/img_examples_20261110/raw_p5/hero_char_s.png`　md5 `e0cd38767856e35af80cbef8c19ee68a`　日常剪影資產
- `identity_canon/img_examples_20261110/raw_p5/hero_char_s2.png`　md5 `ee8049f55ae4964a582e4e83658fbe85`　怪盗剪影資產
- 註：其餘六人同路徑模式，見該方向 `download_manifest.json`／`raw_p5/`。`char_r` 唔係第二形態。面積差含姿勢，唔標受控對照。64 px 要用剔字標版本先算公平。

### EX06｜production_critic｜さいひと スカーレット／ジュリアス
- `production_critic/img_examples_20261110/src/chara_image01-1.png`　md5 `56393b7b2971e1264a1422a2e805012c`　スカーレット立ち絵
- `production_critic/img_examples_20261110/src/chara_image02.png`　md5 `f645c9ffa5cd2a8f228515328affc328`　ジュリアス立ち絵
- `production_critic/img_examples_20261110/src/face02-1.png`　md5 `f3dcfa2fda3a69612575b3a76cdcb173`　ジュリアス宣傳臉（眉角唯一採信量測）
- 註：21 種表情集未公開；「2 度」公開像素核唔到。斗篷寫「藍／青」，唔好寫「褐」。

### EX07｜motif_world｜Black Panther 戰衣
- `motif_world/img_examples_20261110/selected/cw2016_goldenglobes_filmframe.jpg`　md5 `bda64dc8cc58a7aedb3450cee7c15f89`　2016 日景中景
- `motif_world/img_examples_20261110/selected/bp2018_npr_mattkennedy.jpg`　md5 `3293cd2672ba1b3004596b7de266b54f`　2018 近鏡
- 註：**唔做跨片**色差或面積量化（鏡頭距離同照明唔同）。2016 中景未見三角 ≠ 2016 冇呢個紋。

### EX08｜construction_fashion｜＝LOVE 9th 衣装
- `construction_fashion/img_examples_20261110/src/04_far_worn_otani.jpg`　md5 `2ee2cb37564037648b75effb1dae5db0`　完成衣遠讀（量度用）
- `construction_fashion/img_examples_20261110/src/09_near_zip.jpg`　md5 `94f32abb66091439345acdc1b3c44eb3`　近讀・背オープンファスナー
- 註：人體模型靜立 ≠ 舞蹈；扣件本體、一次着到、2 分半、アパレル對照仍 IMAGE_UNVERIFIED 或靠 caption。CDN 易碎，必要時跟文章 URL。

### EX09｜head_hair｜リコリス 千束／たきな
- `head_hair/img_examples_20261110/cafe_chisato.png`　md5 `287ffd284044bf965d1baec6cfadc777`　千束 喫茶制服（主對）
- `head_hair/img_examples_20261110/cafe_takina.png`　md5 `0e2ea8ff81ca317cce6cc858efb6c3df`　たきな 喫茶制服（主對）
- `head_hair/img_examples_20261110/lycoris_chisato.png`　md5 `1281f63ed875ce97232f1af862cef066`　千束 リコリス制服
- `head_hair/img_examples_20261110/lycoris_takina.png`　md5 `9234fe12328bdadddbd58cc235ff7176`　たきな リコリス制服
- 註：淡金髮必須人手遮罩。リコリス對抬腿姿勢令全身 IoU 唔能證「差主要在髮」。數字以 10:29 HKT 人手遮罩版方向為準，舊自動分割數作廢。

### EX10｜performance_motion｜SYNDUALITY Noir
- `performance_motion/img_examples_20261110/official/1.webp`　md5 `b9ceebd57edf5241f8e5a9231adb1855`　ノワール
- `performance_motion/img_examples_20261110/official/16.webp`　md5 `3c854a5fad38d7a192cc7e7c2acef2fd`　ミステル
- 註：可用同檔 PNG 轉存做分析，但引用官方原檔 md5 以 webp 為準。下擺短帶兩邊都有；全身框大 ≠ 上半穿法加寬。方形頭像睇唔到穿法。

### EX11｜psychology｜NIGHT HEAD 2041
- `psychology/img_examples_20261110/official2041_thumb2.png`　md5 `42d81ceb308def57a1cb4636f3b9fcb6`　直人立繪（`character_1thumb` 唔係直人）
- `psychology/img_examples_20261110/official2041_character_3thumb.png`　md5 `fa6161e1904b74012ebac157046789db`　直也立繪
- `psychology/img_examples_20261110/genesis2007_official_root_swf_banner.png`　md5 `c01fd907ba24febd50a97e68c9620610`　2007 線稿橫額；唔當彩色 before
- 註：舊作彩色立繪 IMAGE_UNVERIFIED。「希望」只係訪談。朝日 URL 尾斜線存取不穩，兩種寫法當同一頁，唔好各執一詞升級或降級。數字用 v2 腳本方向（室內白髮清洗後約 L* 78.37）。

### EX12｜audience_market｜トロプリ 涼村さんご／キュアコーラル
- `audience_market/img_examples_20261110/p_02_style3_pc.png`　md5 `1b642257b59fef5c730ee672240aa3fc`　日常
- `audience_market/img_examples_20261110/p_02_style1_pc.png`　md5 `d7e7abbbb39e3c643560030d1c79e81e`　變身キュアコーラル
- 註：64 px 日常小夾大多失去；可見 ≠ 記得。全身 IoU 含姿勢。頭區塊跨形態已換載體。

### EX13｜originality｜Lee Sin ASU
- `originality/img_examples_20261110/raw/asu_vs_old_comparisons.gif`　md5 `651dc9671fef0d37dd3eaa54e2f56766`　官方 A-pose 前後轉面
- `originality/img_examples_20261110/raw/leesin_icon_14_8.png`　md5 `1b4a743524b01e0885b8a6e84d5a8663`　頭像 ASU 前（14.8.1）
- `originality/img_examples_20261110/raw/leesin_icon_current.png`　md5 `7c4f185309651cbb268e4a7cf222ae53`　頭像 16.22.1
- 註：數字用 `analysis_v2/`。自動 IoU 已撤回。側裁切唔好再切掉馬尾金尖。頭像幾乎唔反映馬尾改構。「< 8」要寫明定義。splash ΔE00 用 12.15（13.31 作廢）。

### EX14｜tv_simplify｜プリコネ TV ペコリーヌ
- `tv_simplify/img_examples_20261110/official/game_pecorine_astrum_whole.png`　md5 `e78abb35023547a54092ef5eb822888c`　遊戲全身（5 尖）
- `tv_simplify/img_examples_20261110/official/anime_pecorine_default_pc.png`　md5 `56f1ef6435f0a760544a6e01140e4dd1`　TV 資料卡（要切圖身再比）
- `tv_simplify/img_examples_20261110/official/anime_pecorine_thumb_pc.png`　md5 `bc3a632bc4d540dc4d26656c19db27c7`　TV 一覽縮圖（3 尖最清楚）
- 衍生（唔係新官方圖；剔劍用人手多邊形 v2，**唔用 v1 nosword**）：
  - `tv_simplify/img_examples_20261110/analysis_v2/silhouette_game_nosword_v2.png`　md5 `f3c74541ba56682ef9ae9e399057f1cb`（297×512）
  - `…/analysis_v2/qa_game_sword_overlay_v2.png`　md5 `7cd2ba4a6e6b589ef82da7c74e1104fe`
  - `…/analysis_v2/metrics_v2.json`　md5 `96d09edb7ab27d86d9e3e7e977c8c4a6`
  - 腳本 `…/analyze_ex14_pecorine_v2.py`　md5 `a5dfa5be28b4d14dabb0fc89d412390b`
- 註：キャル細節仍未做圖像並排。自動紅面積因靴甲誤入，唔作證據。姿勢：遊戲側身持劍 vs 動畫空手。

---

## 5. I2 已採納要點、作廢數字、未核項（討論前先對過）

I1 十四例全部 PARTLY SUPPORT；I2 四十二份互審：ACCEPT 6、ACCEPT_WITH_EDITS 36、REDO 0。v6 例塊已按 I2 改過圖像核對句。I3 係對 **改完嘅 v6** 再做全方向圖像審查，唔係推翻重來；但若你嘅鏡頭同圖像證明 v6 仲有錯，就判 PARTLY SUPPORT 或 CONTRADICT 並提出改句。

**已作廢／唔好再引用：**

| 例 | 作廢內容 |
|---|---|
| EX01 | 色閾值髮遮罩得出嘅部件面積／銀白佔比（白髮吞咗 a8 白衣） |
| EX03 | ユズ髮 44.33%、髮 ΔE00 35.64、領結 ΔE00 0.39（靴身／腰側誤入髮遮罩）；改用 37.87%、37.08、0.05 |
| EX06 | 「褐斗篷」（應為藍／青） |
| EX09 | HSV 自動分割同錯頸點下嘅全身 IoU 0.395 等；改用人手多邊形 |
| EX13 | 自動去背 IoU 0.5085／0.3952；splash ΔE00 13.31；切咗馬尾尖嘅舊側框 |
| EX14 | 全部 v1 剔劍欄數字；「剔劍後衣物外包絡幾乎不變」；PM I2「持劍約 5%／剔劍後最大全幅幾乎不變」；自動紅面積 11.9 vs 4.3 |

**圖像仍然證唔到（唔好升級成已核）：** 決策／工數／頭骨（EX01、EX04）；紅発動靜圖（EX03）；21 種表情集同「2 度」（EX06）；銀底層、可拆項鍊、隱形拉鏈（EX07）；扣件本體、2 分半、アパレル對照（EX08）；人測同動畫 PASS（多例）；舊作彩色立繪同「希望」意圖（EX11）；觀眾記得小夾或紫髮（EX12、EX03）；遊戲內遠讀同「讀成 Ezreal」（EX13）；「パッと見で気づかない」、キャル並排（EX14）。

**v6 規則句（R1–R4）已經寫入 §5／§8。** I3 若要再改規則，必須有新嘅圖像證據，唔好只重複 I2 已入嘅句。

---

## 6. 本輪交付同停止條件

- **而家要交**：各方向一份 I3 全文（14 例齊、每例有自己嘅程式圖像分析同判決）。
- **之後先交**：I4 討論。I5 只喺整合者啟動後先做。
- 整合者收齊 I3＋I4（同必要時 I5）之後，先備份再考慮寫 v7；本輪研究員唔改 v6 檔。
- 做到有結果為止：每個例子都有 14 個方向嘅圖像判決，分歧用圖像討論收斂，收唔埋就入 I5 投票。

（完）
