# ACT I — Image Spec（新beat生成）

> 依 `PIPELINE_INSTRUCTIONS.md` §4 模板生成（v2 精簡版，2026-07-17）。只保留圖片說明/Reference Images/Midjourney prompt——同 gen 圖直接相關嘅內容。考證過程（CDL依據/劇情背景）由 Agent A 事實清單把關，唔寫入本檔。外觀描述依 §3 規則，只寫狀態標記，基準外觀交由 Reference Images 承載。

---

## Beat 0：「日常的第一道裂痕——從家到街」（The First Crack in the Ordinary — Home to Street）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_Beat0_HomeToStreet.png`

### 圖片說明

一段連續構圖，唔分鏡（呼應本 beat「一氣呵成、無分段感」嘅設計，Beat 0a+0b 已合併，唔拆做兩張）。畫面以晴香為視覺主軸：室內段落——晴香在鏡前整理儀容，鏡中倒影有極輕微、幾乎難以察覺嘅時間差錯位；她穿鞋時肩頭微微一沉，像揹囊突然變重，表情只是隨口嘀咕、毫不在意。廚房方向不畫秋穗本人（聲音型出場），只用蒸氣/餐具聲響暗示生活痕跡。門外街道段落——晴香揹書包融入放學人潮，步伐輕快自然，「習以為常」而非「被隔離」嘅姿態。街道背景高聳廣告牌展示維多利亞天使完美偶像形象，金色聖光籠罩，工業感管道結構只在畫面邊緣極淺淡透出。前景路人/學生三三兩兩，部分低頭滑手機。整體光線溫暖、色彩飽和。

**Reference Images**：
- 晴香（H-S1 基準：金魚旗語言全開、色彩飽和度100%、動漫大眼高光明顯）：`ConceptArt_Haruka_CasualWear.png`
- 秋穗：不現身，本場景不畫
- 夕：不可見，不具象化
- 背景路人/廣告牌/街道環境：`[NO_REF]`

### Midjourney 標準版

```
Style: Bright anime slice-of-life illustration; idol-era saturated color palette; seamless continuous flow between interior and exterior
Mood: Ordinary morning routine that feels completely safe and unremarkable — with two nearly invisible cracks (mirror lag, sudden shoulder weight) that only reward close attention
Colors: Warm golden morning light indoors transitioning to bright saturated daylight street scene; high color saturation throughout
Composition: Continuous flow — foreground girl at mirror transitioning into girl walking through street crowd; distant tall billboard with radiant golden idol figure in background; industrial piping barely visible at frame edges beneath the golden glow
Lighting: Soft warm interior light at mirror scene; bright even daylight on street; billboard emits strong golden divine glow
Details: 0.3-second mirror reflection delay (subtle, near-imperceptible); slight shoulder dip suggesting unexpected backpack weight; background pedestrians casually glancing at phones (ambient, not focal); no visible source of the kitchen voice
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 鏡中倒影 0.3 秒錯位（細節級線索，非明顯特效）
- 揹書包時肩頭微沉嘅瞬間動作，表情毫不在意
- 維多利亞天使廣告牌：金色光芒為主，工業管道邊緣若隱若現 `[INFERRED：方向已確認，具體構圖未鎖定]`
- 街道人潮嘅「直播/打賞已成日常背景」氛圍，唔specify UI細節
- 秋穗、夕皆不入畫

⭐⭐⭐⭐評級

---
## BEAT 0c：「學校走廊：欺凌與阻止」（School Hallway — Bullying Intervention）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_Beat0c_HallwayIntervention.png`

### 圖片說明

彩縮在牆角，雙臂抱緊紅絲絨熊公仔（絨毛永遠潔淨，無任何弄污/使用痕跡），鏡頭取她背面/側背角度，唔show全臉；桐生健伸手扯緊熊公仔一隻手臂，作勢要搶；彩右手下意識向腰側移動約一吋後隨即停住（極細微、近乎察覺不到的肌肉反射動作，暗示黑奏武器召喚肌肉記憶，唔需要誇張演出）；晴香擋在兩人之間，沒有任何魔法姿態，純粹以身體站位同表情對峙，雙手空空但眼神堅定。地點為學校走廊，日間自然光，走廊置物櫃/窗景作背景。**[NEEDS_FACT]**：beat sheet文字描述彩著「厚框眼鏡/鬆垮T-shirt/七分褲」，同 digest AY-S1「占卜少女語言、露肩弱小感」的 reference image 有出入；此處構圖依 reference image 的占卜少女語言為準，服裝細節款式差異待作者確認。

**Reference Images**：
- 晴香（H-S1 基準）：`ConceptArt_Haruka_CasualWear.png`
- 彩（AY-S1 偽裝，占卜少女語言）：`ConceptArt_Aya_CasualWear.png` `[NEEDS_FACT：文字描述與此圖服裝細節有出入，見上]`
- 桐生健：`[NO_REF — 基準外觀以最新 canon 為準，生成時另查，可用普通中學男生形象暫代]`

### Midjourney 標準版

```
Style: Realistic-leaning anime illustration, tense school hallway confrontation
Mood: Quiet, controlled tension — protective standoff, not action violence
Colors: Neutral daylight school palette; warm skin tones vs cool hallway tile/locker tones
Composition: Aya crouched in corner clutching a pristine red velvet teddy bear, back/three-quarter angle hiding her full face; a male student gripping one arm of the bear trying to pull it away; Haruka standing between them, empty-handed, body angled protectively, calm but firm expression
Lighting: Flat daytime fluorescent hallway lighting
Details: Aya's right hand drifting slightly toward her hip then stopping (barely visible micro-gesture); teddy bear fabric flawlessly clean despite the struggle; no magic effects, no glow
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 熊公仔絨毛必須全程潔淨無破損
- 彩右手中斷動作要極細微，唔可以做成明顯備戰姿勢
- 晴香純身體/表情對峙，冇任何魔法視覺元素
- 彩背面/側背構圖，刻意唔show全臉
- 桐生健暫無 reference，形象保守處理（普通男學生）

⭐⭐⭐評級

---

## SCENE 1（E-01）：「屍骸攻入」（Corpse Breach）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_Scene1_CorpseBreach.png`

### 圖片說明

走廊盡頭大門被強行破入，碎片飛濺；屍骸以人形卻軀體扭曲不自然的姿態闖入現場；學生四散奔逃尖叫；彩被人群推擠入牆角，瑟縮低頭；桐生健本能後退，重心不穩；晴香獨自站定，沒有逃走，正面直視屍骸方向。地點學校走廊 `[INFERRED：延續 Beat 0c 同一地點]`。**[NEEDS_FACT]**：屍骸型號未有canon鎖定，此處建議採用廢鐵型（`ConceptArt_MagicCorpse_Scrap_Action.png`）——理由：走廊為狹窄室內破壞現場，廢鐵型的金屬碎片/管道殘骸美學與此空間更貼合；人偶型（Doll）風格較適合開闊或儀式感場景。此為構圖判斷，非canon鎖定，待作者確認。

**Reference Images**：
- 晴香（H-S1）：`ConceptArt_Haruka_CasualWear.png`
- 彩（AY-S1）：`ConceptArt_Aya_CasualWear.png`
- 桐生健：`[NO_REF]`
- 屍骸：`ConceptArt_MagicCorpse_Scrap_Action.png` `[NEEDS_FACT：型號揀選理由見上，待作者確認]`

### Midjourney 標準版

```
Style: Anime action illustration, sudden chaos breaking into mundane school setting
Mood: Sudden violent intrusion shattering ordinary daily scene — panic and disorientation
Colors: Cool fluorescent hallway light disrupted by debris dust and shadow; scrap-metal corpse in dull rust/gunmetal tones
Composition: Shattered door at end of hallway; scrap-type magic corpse lunging through debris, humanoid but unnaturally twisted proportions; fleeing students in background blur; Aya pushed into a corner; Kiryu stumbling backward; Haruka standing alone, facing the threat, not retreating
Lighting: Harsh directional light through broken doorway, dust particles catching light
Details: Visible metal-scrap texture and jagged joints on the corpse; students' motion blur suggesting panic; Haruka's stillness contrasts with surrounding chaos
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 屍骸型號揀選為構圖建議，非鎖死設計 `[NEEDS_FACT]`
- 晴香喺混亂中嘅「唯一唔逃」姿態係構圖核心對比
- 門被破入嘅碎片/塵埃感營造突發性
- 彩、桐生健嘅驚慌反應要同晴香形成明確對比

⭐⭐⭐評級

---

## SCENE 2（E-01）：「裝置緊急交付」（Emergency Device Handoff）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_Scene2_DeviceHandoff.png`

### 圖片說明

黑貓從陰影中跳出，直撲晴香面前，用身體用力將她推入牆角夾縫，動作乾脆利落；裝置被推到晴香腳邊；貓眼直勾勾望住晴香，無聲無言；晴香一手撐牆，一手緩緩伸向裝置。地點學校走廊夾角 `[INFERRED]`。**[NEEDS_FACT]**：裝置外觀未有canon具體描述，構圖建議用抽象發光幾何物件（例如卵形/晶體狀小型裝置）演繹，唔鎖死具體設計，待作者/後續 beat sheet 補充。

**Reference Images**：
- 晴香（H-S1）：`ConceptArt_Haruka_CasualWear.png`
- 美夜子（MY-S1，黑貓形態）：`ConceptArt_Miyako_Cat.png`
- 裝置：`[NO_REF — 外觀未定，見上 NEEDS_FACT]`

### Midjourney 標準版

```
Style: Anime illustration, tense quiet urgency amid chaos
Mood: Silent, deliberate urgency — a hidden ally's precise intervention
Colors: Shadowed corner tones with a small warm/cool glow emanating from the device
Composition: Black cat leaping directly at Haruka, pressing her bodily into a wall corner; a small glowing abstract device (ovoid or crystalline, no fixed design) resting near her feet; cat's eyes fixed unblinking on her; Haruka's hand reaching down toward it
Lighting: Dim hallway shadow broken by soft glow from the device
Details: Cat's motion conveys deliberate force, not playful; no dialogue implied; device glow subtle, not overpowering
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 裝置外觀刻意抽象化，唔可以畫死具體設計 `[NEEDS_FACT]`
- 黑貓動作要有「目的性推撞」而非玩鬧感
- 貓眼直視晴香嘅無言溝通感
- 場景侷限喺牆角夾縫，空間壓迫感

⭐⭐⭐評級

---

## SCENE 3（E-01）：「初次變身·雙層現實」（First Transformation — Dual Reality）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_Scene3_FirstTransformDualReality.png`

### 圖片說明

雙層對比構圖，同一時刻兩種視角並置：真實視角（畫面一側）——晴香變身過程中手震氣促、尚未站穩，狼狽而真實；直播濾鏡視角（畫面另一側）——金光籠罩下優雅發光的少女形象，完美無瑕。濾鏡視角疊加直播UI元素：「維多利亞天使 新成員登場！」字樣同「+380 Likes」計數。背景走廊可見學生開始舉起手機拍攝。金光濾鏡效果參照維多利亞之淚運作態的白→藍紫漸層色調。地點學校走廊 `[INFERRED]`。

**Reference Images**：
- 晴香（變身過程，H-S1 → 魔法少女形態）：`ConceptArt_Haruka_MagicalGirl.png`、`ConceptArt_Scene_Haruka_FirstTransform.png`（UNVERIFIED）

### Midjourney 標準版

```
Style: Anime illustration, split dual-layer composition contrasting raw reality vs idol-filtered broadcast
Mood: Disorienting gap between lived experience and public spectacle
Colors: Left/real side — desaturated, shaky, grounded tones; right/filtered side — radiant gold-to-blue-violet gradient glow (Victoria's Tear operational state)
Composition: Same moment shown twice — unsteady, breathless real Haruka mid-transformation on one side; polished glowing magical girl idol version on the other, framed with livestream UI overlay ("Victoria Angel — New Member Debut!" "+380 Likes"); background hallway students raising phones to film
Lighting: Real side flat/harsh hallway light; filtered side radiant golden-to-violet glow
Details: Visible trembling hands and unsteady stance on real side; flawless idol posture and expression on filtered side; UI text overlay clearly legible but not dominating composition
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 雙層對比必須清楚可辨——真實 vs 濾鏡
- UI 文字/讚好數字要清晰可讀但唔搶主體
- 金光漸層跟維多利亞之淚運作態色調（白→藍紫）
- 真實一側嘅手震氣促唔可以被美化

⭐⭐⭐⭐評級

---

## SCENE 4（E-01）：「戰鬥」（The Fight）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_Scene4_Battle.png`

### 圖片說明

走廊戰鬥進行中，取最具張力嘅一個凝結瞬間：屍骸側面衝向晴香，桐生健由後方突然撿起椅子砸中屍骸（晴香冇望見呢個動作，但畫面/觀眾視角清楚可見）；美夜子（貓形態）同時於晴香四周展開防護，冰壁/爪擊/光幕交替浮現；晴香（魔法少女形態）動作笨拙但發力有力，正處於出招瞬間。直播UI疊加「人數↑」「打賞 +900」小字浮動。地點學校走廊 `[INFERRED]`。屍骸沿用 Scene 1 之型號揀選（廢鐵型）。

**Reference Images**：
- 晴香（魔法少女形態）：`ConceptArt_Haruka_MagicalGirl.png`
- 美夜子（MY-S1，貓形態全程防護）：`ConceptArt_Miyako_Cat.png`
- 桐生健：`[NO_REF]`
- 屍骸：`ConceptArt_MagicCorpse_Scrap_Action.png`

### Midjourney 標準版

```
Style: Dynamic anime action illustration, mid-battle frozen moment
Mood: Chaotic but earnest — an awkward, hard-fought first battle, not a polished victory
Colors: Cool hallway tones cut through by Haruka's magical glow and Miyako's ice-blue shield effects
Composition: Frozen action instant — scrap-type corpse lunging at Haruka's flank; Kiryu swinging a chair into the corpse from behind, unseen by Haruka; Miyako in cat form conjuring an ice wall/claw strike near Haruka; Haruka mid-strike, posture awkward but forceful; faint livestream UI text ("+900") floating unobtrusively at frame edge
Lighting: Magical glow (Haruka) and ice-blue shimmer (Miyako) as primary light sources against dim hallway
Details: Corpse's scrap-metal texture visible mid-lunge; chair impact frozen mid-swing; Haruka's clumsy but committed stance; UI text small and secondary
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 揀最具戲劇性嘅凝結瞬間（三方動作同時發生）
- 桐生健嘅椅子攻擊喺畫面上要清晰可見（觀眾視角），但唔可以令晴香望向佢
- 晴香「笨拙但有力」嘅出招姿態，唔可以畫成熟練優雅
- UI文字保持細小唔搶焦點

⭐⭐⭐⭐評級

---

## [SQ-A]（E-01）：「桐生健即時尾聲」（Kiryu Aftermath — Bandaid Philosophy Layer One）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_SQA_KiryuAftermath.png`

### 圖片說明

晴香狀態 `[NEEDS_FACT：beat sheet未確認變身/解除狀態，此處判斷採用已解除變身（H-S1便服），較符合尾聲緩和氣氛，待作者確認]`；美夜子（黑貓形態）靠近桐生健，姿態帶明確目的性（欲執行記憶縫合SOP）；晴香伸手輕輕阻止貓爪動作；桐生健坐喺地上，手臂傷口滲血；晴香蹲下，由書包攞出膠布貼上桐生健嘅傷口；三人維持沉默，無對白氛圍。地點學校走廊 `[INFERRED]`。**[NEEDS_FACT]**：膠布圖案未有canon具體描述，構圖可用素色/簡單卡通圖案演繹，唔鎖死具體設計。

**Reference Images**：
- 晴香（H-S1，已解除變身判斷）：`ConceptArt_Haruka_CasualWear.png`
- 美夜子（MY-S1，貓形態）：`ConceptArt_Miyako_Cat.png`
- 桐生健：`[NO_REF]`

### Midjourney 標準版

```
Style: Quiet anime illustration, hushed aftermath moment
Mood: Tender, wordless, restrained — a small act of care after chaos
Colors: Muted warm hallway tones, soft late-afternoon light
Composition: Kiryu seated on the floor, bleeding arm; Haruka crouched beside him applying a bandage from her school bag; black cat (Miyako) poised nearby with clear intent, gently held back by Haruka's other hand; all three silent, no dialogue implied
Lighting: Soft warm side-light suggesting late afternoon calm after the fight
Details: Bandage pattern kept simple/plain, not specific; cat's posture conveys purposeful intent rather than casual curiosity; Haruka's expression calm and focused
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 晴香變身狀態揀選為判斷非鎖定 `[NEEDS_FACT]`
- 美夜子貓形態嘅「目的性靠近」要有別於一般貓咪好奇動作
- 膠布圖案簡約唔鎖死 `[NEEDS_FACT]`
- 全場靜默氛圍，冇對白張力

⭐⭐⭐評級

---

## [NC]（E-01後）：日常場景組 [ACT_I]

**說明**：以下 4 個小場景情緒基調差異明顯（輕鬆日常／搞笑互動／懸疑UI初現／恐怖氛圍噪訊），且其中 GameUI 同夕嘅霧化效果需要獨立畫面清楚呈現細節，故拆開做 4 張獨立 spec，唔合併做單一複合構圖。

---

### [NC-1]：「彩：下次呢？」（Aya — "When, Exactly?"）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_NC1_AyaNextTime.png`

### 圖片說明

晴香同彩便服日常校園場景，晴香隨口提議「下次一齊食嘢」，語氣輕鬆隨意；彩表情忽然認真起來，追問「幾時」；身旁同學被呢個反差逗笑；彩因為認真被笑而微微愣住，神情帶一絲不知所措。地點學校/教室 `[INFERRED]`。

**Reference Images**：
- 晴香（H-S1）：`ConceptArt_Haruka_CasualWear.png`
- 彩（AY-S1）：`ConceptArt_Aya_CasualWear.png`

### Midjourney 標準版

```
Style: Light slice-of-life anime illustration
Mood: Warm, comedic, gently awkward
Colors: Bright daytime classroom/school palette
Composition: Haruka casually chatting, Aya suddenly earnest asking "when exactly?", classmates in background laughing at the mismatch, Aya slightly frozen/flustered
Lighting: Bright even daylight, warm classroom tones
Details: Contrast between Haruka's casual tone and Aya's overly serious follow-up question; background classmates' laughter as ambient reaction
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 彩嘅「認真追問」表情要明顯區隔於日常輕鬆調子
- 同學嘅笑反應作背景襯托，唔搶主體

⭐⭐⭐評級

---

### [NC-2]：「IG強行營業」（Forced IG Group Photo）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_NC2_IGGroupPhoto.png`

### 圖片說明

晴香自發舉起手機拉隊友埋堆合照，笑容燦爛、主動指揮構圖；美夜子（貓形態）以貓爪擋鏡頭，帶擬人化嘅抗拒/害羞小動作 `[INFERRED：原文字眼「用手擋」與貓形態有出入，此處演繹為貓爪遮鏡頭嘅擬人化表現]`。地點校園日常空間 `[INFERRED]`。

**Reference Images**：
- 晴香（H-S1）：`ConceptArt_Haruka_CasualWear.png`
- 美夜子（MY-S1，貓形態）：`ConceptArt_Miyako_Cat.png`

### Midjourney 標準版

```
Style: Light comedic anime illustration
Mood: Playful, warm group dynamic
Colors: Bright daytime casual palette
Composition: Haruka holding up a phone excitedly arranging a group photo; black cat (Miyako) raising a paw to block the lens in a shy/reluctant anthropomorphic gesture
Lighting: Bright natural daylight
Details: Cat's paw motion should read as deliberately expressive/reluctant, not a literal human hand
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 貓爪擋鏡頭嘅擬人化演繹（唔可以畫成人手）`[INFERRED]`
- 晴香主導構圖嘅興奮感

⭐⭐⭐評級

---

### [NC-3]：「GameUI視界首次」（First Game-UI Overlay）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_NC3_GameUIFirstAppearance.png`

### 圖片說明

晴香日常場景中（例如校園走廊），情緒圖標UI忽然浮現喺她視野邊緣，晴香表情驚訝／困惑，下意識停下腳步望向半空。**[NEEDS_FACT]**：UI樣式未有canon具體設計，構圖建議用簡約發光圖標演繹，唔鎖死色彩/形狀細節。地點 `[INFERRED]`。

**Reference Images**：
- 晴香（H-S1）：`ConceptArt_Haruka_CasualWear.png`
- UI 圖標：`[NO_REF — 樣式未定，見上 NEEDS_FACT]`

### Midjourney 標準版

```
Style: Anime illustration with subtle sci-fi/UI overlay element
Mood: Sudden disorientation breaking into an ordinary moment
Colors: Ordinary school daylight palette punctuated by a single glowing abstract UI icon
Composition: Haruka mid-stride in a hallway, suddenly stopping, eyes wide, gazing at a small glowing icon hovering at the edge of her vision (abstract, minimal design, not fixed)
Lighting: Normal daylight with a soft glow emanating from the UI icon
Details: Icon should look genuinely unfamiliar/intrusive, not decorative; Haruka's confusion clearly readable
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- UI圖標樣式刻意抽象化，唔鎖死具體設計 `[NEEDS_FACT]`
- 晴香嘅驚訝/困惑要真實，唔可以太輕描淡寫

⭐⭐⭐評級

---

### [NC-4]：「夕：第一絲噪訊」（Yu — First Flicker of Static）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_NC4_YuFirstNoise.png`

### 圖片說明

晴香獨處（例如洗手間/房間鏡前），鏡中倒影邊緣彷彿有嘢動咗一下，晴香愣住定睛再望，鏡面已回復平常無異樣。夕嘅身影只以模糊、半透明、霧化處理嘅形式極短暫閃現喺鏡面一角，唔可以清晰顯現，製造若有若無嘅不安感。地點 `[INFERRED]`。

**Reference Images**：
- 晴香（H-S1）：`ConceptArt_Haruka_CasualWear.png`
- 夕（Y-S1隱匿期，霧化處理）：`ConceptArt_Yu_CasualWear.png`（需疊加霧化/半透明後製效果，**唔可以清晰顯現原圖**）

### Midjourney 標準版

```
Style: Quiet unsettling anime illustration, horror-adjacent restraint
Mood: Subtle dread — something almost imperceptible, deniable
Colors: Cool, slightly desaturated mirror/bathroom tones
Composition: Haruka alone in front of a mirror, caught mid-glance after noticing something move at the mirror's edge; a heavily fogged, semi-transparent, barely legible child-shaped silhouette (Yu) flickering in the corner of the reflection, almost dissolving into the mirror surface
Lighting: Dim indoor light, mirror slightly reflective/hazy
Details: Yu's form must remain indistinct and foggy — no sharp edges, no clear facial features; Haruka's expression uneasy but uncertain whether she actually saw anything
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 夕嘅身影必須霧化/半透明，唔可以清晰顯現
- 晴香嘅反應應該係「唔肯定自己有冇睇錯」而非明確驚恐
- 鏡面異常要極其細微，唔做成明顯特效

⭐⭐⭐評級

---

## BEAT 0d（E-01）：「當晚·熱可可儀式」（That Night — Hot Cocoa Ritual）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_Beat0d_NightRitual.png`

### 圖片說明

晴香獨自返到家中（雨宮家，現實家居空間，並非心房/廚房象徵空間），坐低調配一杯極甜熱可可，閉眼喝落，動作帶儀式感；鏡頭緩緩向後拉遠；晴香表情平靜，但眼神角落透出一絲難以言明嘅掙扎。全程無台詞，純視覺敘事。地點雨宮家 `[INFERRED，現實家居，非象徵空間]`。

**Reference Images**：
- 晴香（H-S1）：`ConceptArt_Haruka_CasualWear.png`
- `ConceptArt_Scene_Haruka_HotCocoaRitual.png`（UNVERIFIED）

### Midjourney 標準版

```
Style: Quiet realistic-leaning anime illustration, intimate domestic scene
Mood: Calm surface with a faint undercurrent of unspoken struggle
Colors: Warm dim evening interior lighting, soft mug glow
Composition: Haruka alone at a kitchen/living room table, eyes closed, drinking an overly sweet hot cocoa with quiet ritualistic care; camera slowly pulling back to widen the frame around her solitary figure
Lighting: Warm low evening light, single lamp or window glow
Details: Composition should read as ordinary, grounded home space — not a symbolic/dreamlike kitchen; a faint tension visible only at the corner of her eyes
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 地點必須係現實家居，唔可以用心房廚房嘅象徵視覺語法
- 儀式感嘅緩慢動作（閉眼喝、鏡頭拉遠）
- 表情平靜但眼角有掙扎嘅細微對比

⭐⭐⭐評級

---

## 天台使命說明（E-01翌日）：「天台：使命說明」（Rooftop — Mission Briefing）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_RooftopBriefing.png`

### 圖片說明

學校天台，遠處城市地平線佈滿光幕（維多利亞之淚運作態）；晴香站喺天台一端；美夜子背對晴香站喺邊緣。**[NEEDS_FACT — 矛盾標記]**：digest記錄 MY-S1 喺 Act I 全程為黑貓形態，但本場景原文描述「美夜子背對晴香站在邊緣」語感偏向人形站姿，兩者矛盾。此處唔自行判定係咪例外，採用審慎折衷演繹——構圖畫成**貓形態蹲踞/佇立姿態**，背對晴香望向遠方城市光幕，保留「背對邊緣」嘅畫面感，同時不違反 MY-S1 全程黑貓形態嘅canon狀態記錄。此判斷需要作者確認；如作者確認呢場實為人形態例外，構圖需重做。地點天台 `[INFERRED]`。

**Reference Images**：
- 晴香（H-S1）：`ConceptArt_Haruka_CasualWear.png`
- 美夜子（MY-S1，貓形態，蹲踞/佇立折衷姿態，見上矛盾說明）：`ConceptArt_Miyako_Cat.png`

### Midjourney 標準版

```
Style: Anime illustration, quiet rooftop scene at dusk/day with distant cityscape
Mood: Solemn, weight of an unspoken briefing about to happen
Colors: Cool rooftop tones contrasted against distant glowing cityscape light-veil
Composition: Haruka standing at one end of the rooftop; a black cat (Miyako) perched/standing with its back to her at the roof's edge, facing the distant city light-veil (Victoria's Tear operational state) — deliberately staged to suggest presence/gravity without depicting a human stance
Lighting: Distant city glow (white-to-blue-violet gradient) against a cooler rooftop foreground
Details: Cat's posture should feel deliberately poised/watchful, not casual; distant skyline dominated by the glowing light-veil
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 美夜子形態矛盾採折衷演繹，需作者確認 `[NEEDS_FACT]`
- 遠景城市光幕（維多利亞之淚運作態）作為視覺焦點之一
- 天台空曠感同兩人（一人一貓）之間嘅距離感

⭐⭐⭐評級

---

## SCENE 1（E-02）：「大型屍骸出現」（Larger Corpse Swarm Emerges）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_E02Scene1_LargerCorpseSwarm.png`

### 圖片說明

日間街道（非學校）出現比先前更大規模嘅屍骸群，晴香（魔法少女形態）吃力應戰，動作明顯較上一次更狼狽費力；直播UI疊加人數計數字樣浮動；街道旁市民舉起手機圍觀拍攝；美夜子（黑貓形態）從側方本能撲出，用身體擋住一記朝晴香揮來嘅攻擊。地點日間街道 `[NEEDS_FACT：日夜區歸屬未確認]`。

**Reference Images**：
- 晴香（H-S1，魔法少女形態）：`ConceptArt_Haruka_MagicalGirl.png`
- 美夜子（MY-S1，黑貓形態，本能撲出擋攻擊）：`ConceptArt_Miyako_Cat.png`
- 屍骸：`ConceptArt_MagicCorpse_Doll_Action.png` `[NEEDS_FACT：型號未鎖定，暫揀人偶型——理由：街道為開闊室外空間，人偶型較廢鐵型更適合大規模群體構圖同「儀式感/詭異感」並存的畫面；廢鐵型 ConceptArt_MagicCorpse_Scrap_Action.png 為備選，待作者確認]`

### Midjourney 標準版

```
Style: Dynamic anime action illustration, escalated street battle with livestream framing
Mood: Overwhelming, exhausting struggle against a larger threat than before — visible strain, not triumphant
Colors: Bright daytime street palette cut through by Haruka's magical glow and a swarm of humanoid corpse figures in muted tones
Composition: Haruka (magical girl form) fighting off a larger swarm of corpses across an open daytime street; a faint livestream viewer-count overlay floating at frame edge; bystanders in the background raising phones to film; a black cat (Miyako) leaping instinctively to intercept an incoming strike, shielding Haruka's flank
Lighting: Bright even daylight, Haruka's magical glow as secondary light source
Details: Visible fatigue and strain in Haruka's stance and expression; corpse swarm larger in scale than prior encounters; cat's leap reads as pure reflex, not calculated
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 屍骸型號揀選為構圖建議，非鎖死設計 `[NEEDS_FACT]`
- 晴香明顯吃力嘅戰鬥狀態，唔可以畫成從容
- 市民舉機圍觀嘅「圍觀而非救援」氛圍
- 美夜子撲出擋攻擊要有「本能反射」感，唔係從容計算嘅動作

⭐⭐⭐評級

---

## SCENE 2（E-02）：「情緒連結首次提出」（First Proposal of Emotional Link）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_E02Scene2_EmotionalLinkProposed.png`

### 圖片說明

延續 SCENE 1 同一戰場，形勢持續不利；美夜子（黑貓形態）望向晴香，提出情緒連結嘅一瞬，表情帶明顯猶豫；情緒連結啟動後晴香力量暴增，畫面爆發出強烈能量視覺。

**Reference Images**：
- 晴香（H-S1，魔法少女形態，力量暴增瞬間）：`ConceptArt_Haruka_MagicalGirl.png`
- 美夜子（MY-S1，黑貓形態，猶豫表情）：`ConceptArt_Miyako_Cat.png`

### Midjourney 標準版

```
Style: Dynamic anime action illustration, sudden power surge moment
Mood: Hesitant offer followed by an overwhelming burst of power — tension before release
Colors: Same daytime street battle palette as prior scene, punctuated by an intense burst of magical energy at the moment of the link
Composition: Black cat (Miyako) turning toward Haruka mid-battle, a flicker of hesitation visible in its posture/expression; Haruka's magical form suddenly erupting with amplified energy — silhouette dominating the frame
Lighting: Sudden bright energy flare overtaking the daylight scene at the moment of the link
Details: Miyako's hesitation should read clearly despite being a cat's expression; the power surge is abstract/energetic, not a fixed visual design [NEEDS_FACT: 具體能量爆發樣式未有canon描述，自由演繹]
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 美夜子提出連結時嘅一瞬猶豫要清晰可辨
- 力量暴增嘅能量爆發視覺自由演繹，唔鎖死具體樣式 `[NEEDS_FACT]`
- 與 SCENE 1 保持同一戰場連續感

⭐⭐⭐評級

---

## SCENE 3（E-02）：「操突然亂入」（Misao's Sudden Intrusion）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_E02Scene3_MisaoIntrusion.png`

### 圖片說明

同一戰場旁有建築物，操（魔法少女形態）從建築高處落下，以華麗傀儡戲般嘅招式瞬間秒殺一頭屍骸，神情冷淡，戰鬥姿態優雅精確，完全不理會晴香/美夜子等其他人。

**Reference Images**：
- 操（M-S1 基準：天鵝語言完美學院哥德，零破綻精密偽裝，牙齒完好）：`ConceptArt_Misao_MagicalGirl.png`

### Midjourney 標準版

```
Style: Elegant anime action illustration, ballet-like precision amid chaos
Mood: Cold, detached mastery — an outsider dropping in with theatrical perfection, indifferent to everyone else
Colors: Same daytime street battle palette, Misao's magical form rendered in immaculate contrast to the surrounding chaos
Composition: Misao falling from a building ledge above the street, mid-strike, instantly finishing off a corpse with an ornate puppet-like flourish; her posture graceful and precise; she does not look toward Haruka, Miyako, or anyone else in the scene
Lighting: Bright daylight, Misao's form catching light in a way that emphasizes flawless composure
Details: Misao's expression cold and unbothered; the corpse kill is instantaneous and theatrical, not effortful; her entrance reads as an interruption, not a rescue [NEEDS_FACT: 絲線操偶具體招式視覺未有canon描述，自由演繹]
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 操嘅冷淡神情同優雅精確姿態係核心對比
- 絲線操偶招式視覺自由演繹，唔鎖死 `[NEEDS_FACT]`
- 操完全唔理會其他人嘅「亂入者」姿態
- 建築高處落下嘅構圖需帶戲劇性

⭐⭐⭐⭐評級

---

## SCENE 4（E-02）：「陷阱＋晴香擋攻擊」（Trap — Haruka Shields Misao）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_E02Scene4_HarukaShieldsMisao.png`

### 圖片說明

同一戰場屍骸陷阱位置，操中屍骸陷阱，巨大利爪即將擊中操；晴香衝過來用身體擋在操面前，滿身泥濘；操整個人震驚呆住一秒，表情第一次出現裂縫。**[NEEDS_FACT：血vs泥矛盾，待作者確認]**——舊72圖檔圖121記載晴香擋攻擊後「滿臉是血」，但現行Beat Sheet寫「滿身泥濘」，兩者矛盾；Beat Sheet為較新版本，本spec暫以「滿身泥濘」為準，此決定待作者最終確認。

**Reference Images**：
- 操（M-S1，震驚呆住，表情首次出現裂縫）：`ConceptArt_Misao_MagicalGirl.png`
- 晴香（H-S1，滿身泥濘擋在操面前）：`ConceptArt_Haruka_MagicalGirl.png`

### Midjourney 標準版

```
Style: Dramatic anime action illustration, frozen impact moment
Mood: Sudden reckless protection cracking through a perfectly composed facade
Colors: Same daytime street battle palette, corpse trap area with churned earth/debris
Composition: Misao caught in a corpse trap, a massive claw about to strike; Haruka rushing in and throwing her body between Misao and the strike, covered in mud/dirt from the impact; Misao frozen in shock for an instant, her flawless expression visibly cracking for the first time
Lighting: Bright daylight, dust/debris kicked up around the trap impact
Details: Haruka's mud-covered state should read as visceral and immediate [NEEDS_FACT: 血vs泥矛盾，此圖採用泥濘版本，見上說明]; Misao's shocked expression is a rare visible crack in her usual composure; corpse trap visual left loosely defined [NEEDS_FACT: 屍骸陷阱視覺形態未有canon描述]
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 晴香狀態依 Beat Sheet 定為「滿身泥濘」，非舊72圖檔嘅「滿臉是血」`[NEEDS_FACT：矛盾待作者確認]`
- 操表情首次出現裂縫係本場景情感核心
- 屍骸陷阱視覺形態自由演繹 `[NEEDS_FACT]`
- 純視覺構圖，唔需要呈現對白

⭐⭐⭐⭐⭐評級

---

## SCENE 5（E-02）：「操傲嬌入隊」（Misao's Tsundere Recruitment）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_E02Scene5_MisaoTsundereJoin.png`

### 圖片說明

同一戰場，操轉身背對鏡頭，但腳步明顯未真正走開——關鍵構圖為「轉身但冇離開」嘅曖昧姿態；晴香伸手嘅動作，望向操。

**Reference Images**：
- 操（M-S1，轉身背對但未走開）：`ConceptArt_Misao_MagicalGirl.png`
- 晴香（H-S1，伸手動作）：`ConceptArt_Haruka_MagicalGirl.png`

### Midjourney 標準版

```
Style: Quiet anime illustration, tsundere character beat
Mood: Reluctant lingering — pretending to leave while clearly not leaving
Colors: Same daytime street palette, calmer post-battle tones
Composition: Misao turned away from camera, back to Haruka, but her feet have not actually stepped away — a deliberately ambiguous half-turned stance; Haruka reaching a hand toward her, watching
Lighting: Bright daylight, softer post-battle calm
Details: Misao's stance must read as "turned but not leaving" — weight not committed to walking away; Haruka's outstretched hand gesture open and inviting, not forceful
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 操「轉身但未走開」嘅曖昧姿態係本場景構圖核心，唔可以畫成明確轉身離開
- 晴香伸手動作要帶邀請感，唔係强拉
- 延續 SCENE 4 情感餘韻

⭐⭐⭐⭐評級

---

## SCENE 6（E-02）：「戰鬥結束＋紫音首次現身」（Battle's End — Akane's First Appearance）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_E02Scene6_AkaneFirstAppearance.png`

### 圖片說明

同一戰場，戰鬥結算UI疊加「+3200 Likes／三天使同場」字樣；人群歡呼並要求簽名；紫音從畫面側面竄出，動作迅速吸走一頭殘血屍骸嘅情緒核心，隨即轉身就走，不作停留。

**Reference Images**：
- 晴香（H-S1）：`ConceptArt_Haruka_MagicalGirl.png`
- 美夜子（MY-S1，黑貓形態）：`ConceptArt_Miyako_Cat.png`
- 操（M-S1）：`ConceptArt_Misao_MagicalGirl.png`
- 紫音（A-S1 基準：不良少女打手語言，小狗圖案可愛偽裝——**非**A-S2骷髏小狗魔法少女形態，因為此時佢仲未入隊）：`ConceptArt_Akane_CasualWear.png`

### Midjourney 標準版

```
Style: Anime illustration, chaotic celebratory aftermath with a covert intrusion
Mood: Public triumph and fan adulation on the surface, undercut by a fleeting predatory intrusion at the edge of the frame
Colors: Bright daytime street palette, celebratory livestream UI overlay ("+3200 Likes / Three Angels Together")
Composition: Haruka, Miyako (cat form), and Misao standing amid a cheering crowd asking for autographs; a livestream UI overlay showing the like count and "three angels" text; at the frame's edge, Akane (delinquent-with-cute-dog-disguise look, not yet in magical girl form) darts in, quickly draining the residual emotional core from a weakened corpse, then turns and walks away without pausing
Lighting: Bright daylight, celebratory atmosphere
Details: Akane's action should read as fast, covert, and purposeful, distinct from the celebratory crowd energy; she does not linger or interact with the group [NEEDS_FACT: 吸走情緒核心的具體視覺動作未有canon描述，自由演繹]
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 紫音必須用 A-S1 便服偽裝形態，**唔可以**誤用 A-S2 魔法少女骷髏小狗形態
- UI「+3200 Likes/三天使同場」字樣清晰可讀但唔搶主體
- 紫音吸取情緒核心嘅動作要有「迅速、不欲被察覺」嘅特質 `[NEEDS_FACT]`
- 人群歡呼求簽名嘅前景同紫音側面竄出嘅背景動作要形成明確對比

⭐⭐⭐⭐評級

---

## [NC]（E-02後）：日常場景組 [ACT_I]

**說明**：以下為 E-02 後嘅日常場景。「奪舍示範場景」因 Status=btd 未定案，本階段不生成 spec：

⏸️ 奪舍示範場景（CDL-118）——Status: btd未定案，等Beat Sheet補完後再生成

---

### [NC-5]：「彩：下次呢？（第二次）」（Aya — "When, Exactly?" Take Two）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_NC5_AyaNextTimeAgain.png`

### 圖片說明

晴香同彩便服日常場景，彩死死捉住晴香衫角唔放，追問「幾時確定？」，肢體動作明顯帶緊張感。地點 `[NEEDS_FACT：未指定]`。

**Reference Images**：
- 晴香（H-S1）：`ConceptArt_Haruka_CasualWear.png`
- 彩（AY-S1 偽裝，占卜少女語言）：`ConceptArt_Aya_CasualWear.png`

### Midjourney 標準版

```
Style: Light slice-of-life anime illustration
Mood: Tense, clingy urgency beneath a casual daily surface
Colors: Warm ordinary daytime palette
Composition: Aya gripping tightly onto the hem of Haruka's clothing, refusing to let go, pressing "when, exactly?" with visible tension in her posture; Haruka reacting casually
Lighting: Bright even daylight
Details: Aya's grip and posture should read as genuinely anxious, not playful teasing this time — a second, more urgent iteration of the same question
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 彩捉衫角嘅動作要帶明顯緊張感，區隔於第一次嘅輕鬆調子
- 地點未指定，構圖用一般日常校園/街道場景 `[NEEDS_FACT]`

⭐⭐⭐評級

---

### [NC-6]：「秋穗茶餐廳首次登場」（Akiho's Café — First Appearance）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_NC6_AkihoCafeFirstAppearance.png`

### 圖片說明

茶餐廳室內，秋穗（茶餐廳老闆娘偽裝，溫暖慈祥，細節帶科學家暗號如筆夾刻度紋）向晴香派發血糖手錶。**[NEEDS_FACT]**：茶餐廳裝潢canon未落實，構圖以一般溫馨茶餐廳空間演繹，唔鎖死具體裝潢細節；血糖手錶外觀亦未有canon描述，自由演繹但唔寫死。

**Reference Images**：
- 晴香（H-S1）：`ConceptArt_Haruka_CasualWear.png`
- 秋穗（AK-S1，茶餐廳老闆娘偽裝）：`ConceptArt_Akiho_CasualWear.png`

### Midjourney 標準版

```
Style: Warm slice-of-life anime illustration, cozy café interior
Mood: Gentle maternal warmth with faint hidden precision beneath the surface
Colors: Warm café interior lighting, soft browns and ambers
Composition: Akiho (warm café-owner disguise) handing Haruka a wristwatch-like device across a counter or table; small hidden "scientist" details visible on Akiho if noticed closely (pen-clip markings, ink traces)
Lighting: Warm interior café lighting
Details: Café decor kept generic/cozy, not locked to specific canon design [NEEDS_FACT]; wristwatch device design left loosely abstract [NEEDS_FACT]
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 秋穗嘅溫暖偽裝同細節科學家暗號並存，唔搶焦點
- 茶餐廳裝潢自由演繹，唔鎖死 `[NEEDS_FACT]`
- 血糖手錶外觀自由演繹，唔鎖死 `[NEEDS_FACT]`

⭐⭐⭐評級

---

### [NC-7]：「IG強行營業升級」（Forced IG Group Photo — Escalated）[ACT_I]

**建議輸出文件名**：`ConceptArt_Beat_ActI_NC7_IGGroupPhotoEscalated.png`

### 圖片說明

合照場面，操（便服）皺眉但仍幫身旁隊友整理衣領/配件，呈現嘴硬但行動誠實嘅雙重反差；美夜子（黑貓形態）鑽入鏡頭前搶鏡。地點 `[NEEDS_FACT：未指定]`；全隊具體成員範圍 `[NEEDS_FACT：未指定]`，本構圖暫以晴香、操、美夜子為畫面主體。

**Reference Images**：
- 晴香（H-S1）：`ConceptArt_Haruka_CasualWear.png`
- 操（M-S1，便服）：`ConceptArt_Misao_CasualWear.png`
- 美夜子（MY-S1，貓形態，鑽入鏡頭前）：`ConceptArt_Miyako_Cat.png`

### Midjourney 標準版

```
Style: Light comedic anime illustration, escalated group photo chaos
Mood: Warm chaotic camaraderie, tsundere affection expressed through action not words
Colors: Bright casual daytime palette
Composition: Group photo setup with Haruka at center; Misao (casual wear) frowning with annoyance while simultaneously adjusting a teammate's collar/accessory before the shot — visible contradiction between expression and action; a black cat (Miyako) squeezing into frame directly in front of the lens
Lighting: Bright natural daylight
Details: Misao's frown should read as reluctant, not genuinely angry, while her hands actively fix someone's appearance; Miyako's intrusion into frame is deliberate and mischievous
Canvas: 9:16 --ar 9:16 --niji 6 --style raw
```

**視覺重點**：
- 操「嘴硬但行動誠實」嘅雙重反差係本場景核心笑點
- 美夜子鑽入鏡頭嘅擬人化搶鏡動作
- 全隊成員範圍未定，暫以三人為主體構圖 `[NEEDS_FACT]`

⭐⭐⭐評級
