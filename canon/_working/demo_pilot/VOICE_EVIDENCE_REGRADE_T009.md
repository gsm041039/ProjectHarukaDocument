# 聲線證據重分級（操／美夜子／晴香）— 按新 workflow

`[DRAFT / 暫定 — pending full-story beat lock]` ｜ 2026-10-19 ｜ 對應 tracker Stage 5 「新 workflow 重做聲線（D-12）」①
衍生自：`DEMO_PILOT_TRACKER.md`
依據：`VOICE_EVIDENCE_REVIEW.md`、`character-voice-workshops/misao_voice_discovery.md`、`character-voice-workshops/miyako_voice_discovery.md`、`character-voice-workshops/haruka_voice_discovery.md`、`character-voice-workshops/_YANPIK_PASS_V1.md`、`canon/_working/CANON_DECISION_LOG.md`、`canon/03_characters/miyako.md`、`beat_rederive_v4/BEAT_LAYER_V4_1.md`、`beat_rederive_v4/BEAT_LAYER_V5_BATCH5_B5toB8.md`、`beat_rederive_v4/BEAT_LAYER_V5_BATCH6_M2toM5.md`
舊 bible（`character-voice-bibles/{misao,miyako,haruka}.md`）：**只當線索，唔當證據**；下面凡引舊 bible 嘅句，都已回頭開原始 canon 檔核對先入表。

## 結論（先講）
1. 逐句重分級做完：三人共 **約 45 句／設定**，每句有「來源 → 標籤 → 而家有冇 beat 承載」。
2. **兩個重要改判**（舊工作坊低估咗）：
   - 晴香餵糖句「食粒糖先啦，雖然無魔法咁好味，但係會飽肚㗎。」＝ **`CANON_AC_VERBATIM`**（CDL-052 作者批核逐字句，`ACT_I_OUTLINE.md` 第 156 行同 `iwakura_akane.md` 都有），唔係「待核」。
   - 美夜子燈塔句「我所在之處屍骸必來，無法停用。所以才需要維多利亞天使存在。」＝ **`CANON_AC_VERBATIM`**（CDL-089 作者批核；`miyako.md` 第 180 行）。之前缺口檔 G1 嘅三個候選（A／B／C）**完全冇用呢句**，而且將佢同天台使命說明混咗。兩者要分開：天台講「半真半假嘅使命」（CDL-055／095，無逐字句），燈塔句屬 E-02／B8 嘅明示位（CDL-089）。
3. 一個新發現：canon 燈塔句語料自然度百分位只有 2／15（翻譯腔：所在之處、必來、無法停用）→ canon 原句照留，但要有自然化候選（見 Stage 2）。
4. 一個 Beat 層矛盾（唔係聲線層可以解）：`BEAT_LAYER_V4_1.md` 話燈塔由 B8 移去 M2；`BEAT_LAYER_V5_BATCH5_B5toB8.md` 嘅 B8 仍然有「晴香問→美夜子講燈塔效應」，Batch 6 嘅 M2 冇燈塔。→ 聲線候選兩個位置都兼容，位置交返 Beat 層（標 `REVALIDATE_REQUIRED`）。
5. 另有一個 Beat 層矛盾牽涉聲線：V4.1 M2 寫美夜子講「屍骸會搵上持有裝置嘅人」，但盲審 B 已指出呢句等於交咗「持有＝被迫戰鬥」代價，建議跟 CDL-089 只講「屍骸跟住美夜子」。M2 候選因此兩種都寫（見 Stage 2）。

## 標籤說明（今次重分級用）
| 標籤 | 意思 | 可唔可以當證據 |
|---|---|---|
| `CANON_AC_VERBATIM` | 作者批核嘅 CDL／AC 文件內逐字句 | 可以（句子本身）；用法仍受時期／場合限制 |
| `CANON_FUNCTION_ONLY` | CDL 只定功能／設定，逐字句只係示例 | 功能可以；wording 唔可以 |
| `SCENE_REFERENCE_LINE` | 只喺 `ACT_I_BEAT_SHEET.md` Scene 層參考出現，非批核 beat／canon | 只當參考 |
| `NATURALIZATION` | 上面三類嘅粵語口語自然化候選 | 候選 |
| `AUTHOR_PICK` | 作者已揀（PROVISIONAL）嘅候選 | 作者選擇，唔係 canon |
| `VOICE_CANDIDATE` | 未揀嘅候選 | 否 |
| `SUPERSEDED` | 作者已淘汰／被後面決定取代 | 否 |
| `OLD_BIBLE_CLUE` | 只喺舊 bible 出現，未搵到原始 canon | 否，只做線索 |
| Beat 承載：`CARRIED`／`ORPHAN`／`POSITION_CONFLICT` | 現行 Beat（V4.1＋V5）有冇一個位承載呢句 | — |

## 操（綾小路操）
| # | 句／設定 | 來源 | 標籤 | Beat 承載 |
|---|---|---|---|---|
| M1 | 真難看。這種低級的戰鬥簡直污染我的眼睛。這隻獵物歸我。 | `ACT_I_BEAT_SHEET.md` E-02 Scene 層參考；CDL-050／063／064／065 只定功能 | `SCENE_REFERENCE_LINE` | CARRIED（B4／B5 操到場；V4.1 冇逐字） |
| M1′ | 太難睇。／咁低級嘅打法，污糟晒我對眼。／呢隻獵物，係我嘅。 | M1 嘅自然化；作者揀 | `NATURALIZATION`＋`AUTHOR_PICK` | CARRIED |
| M2 | 做乜擋喺度。 | 無 canon 對應（canon 只寫「呆一秒」）| `AUTHOR_PICK`（VOICE_CANDIDATE 作者揀） | CARRIED（B6 晴香擋） |
| M3a | …為了還這份人情，我勉強答應暫時指導妳們這些庶民。 | CDL-050 功能（「暫時指導庶民」）；逐字 Scene 層參考 | `SCENE_REFERENCE_LINE` | CARRIED（B7） |
| M3a′ | 爭咗你哋個人情。／我唯有指導你哋呢班庶民一陣。 | M3a 自然化；作者揀（「勉強」→「唯有」係語氣改動）| `NATURALIZATION`＋`AUTHOR_PICK` | CARRIED |
| M3b | 唔係入隊。係臨時指導。 | Scene 層參考；本身已係口語 | `SCENE_REFERENCE_LINE` | CARRIED |
| M3c | 那是什麼人？ | Scene 層參考 | `SCENE_REFERENCE_LINE` | **ORPHAN**（場6 已無；自然化冇做）|
| M4-1 | 件衫同條褲唔襯。……過嚟。／企好。衫領翻咗出嚟。 | 無 canon；Beat Sheet 冇場7逐字句 | `VOICE_CANDIDATE`（作者揀 U1 前段）| **ORPHAN**（黃昏 IG 穿搭批評 beat 已冇；現行 M4 係合照鬧劇、操避鏡）|
| M4-2 | 小意思。 | 同上 | `VOICE_CANDIDATE`＋作者保留 | **ORPHAN** |
| M4-3 | 唔好亂講。……下一個，過嚟。 | 同上 | `SUPERSEDED`（作者 2026-09-30 去咗；改「小意思。……下一個，過嚟。」）| ORPHAN＋觸發已失 |
| M5 | （場8 零台詞） | Head Writer 暫定；CDL-233／390 指向無台詞 | `PROVISIONAL`（非 canon）| **POSITION_CONFLICT**：舊場8 已被 V5 M4 掉牙＋M5 入相取代；零台詞原則仍可沿用 |
| Y1 | 對屍骸稱「獵物」 | M1 | `AUTHOR_PICK` 內含 | CARRIED |
| Y2 | 操1 庶民稱呼／操2 先評形／操3 更正句／操4 書面詞＋口語／操5 過嚟 | `_YANPIK_PASS_V1.md`，由已揀句反推 | `VOICE_CANDIDATE`（言癖，作者揀保留；頻率限制作者已撤）| 操2、操5 隨 M4-1 變孤兒；其餘 CARRIED |
| Y3 | B8 冷處理路人道謝（零逐字，CDL-322 定三重解讀）| CDL-322（`CANON_FUNCTION_ONLY`）| 缺 | CARRIED，**冇句**（缺口）|
| Y4 | M2「操嫌但跟」／M3「嫌灰塵、熟死角」 | V5 Batch 6（Scene Reference 欄：無既有對白稿）| 缺 | CARRIED，**冇句**（缺口）|
| Y5 | M5 操閂嘴入相 | V5 Batch 6 M5 | 缺（零台詞預設）| CARRIED |
- 舊 bible 線索：`misao.md` 只提供 Act II 之後語言（Act II「我知妳痛…」等）→ 不屬 Act I，唔入表。

## 美夜子（貓形態）
| # | 句／設定 | 來源 | 標籤 | Beat 承載 |
|---|---|---|---|---|
| Y1 | 用它。現在。 | E-01 Scene 層參考；CDL-109 只定「緊急交付」，且被 CDL-272 修訂（裝置本屬晴香）| `SCENE_REFERENCE_LINE`（**源頭有更新**：CDL-272 令「交予裝置」描述要重核）| **OUT_OF_RANGE**：E-01 發生喺 demo 之前（`BEAT_LAYER_V4.md` N1 起手；範圍外），demo 內無此句位；只可作背景／回憶閃回，唔入稿（審核更正：初稿誤標 POSITION_CONFLICT）|
| Y1′ | 用呢個。而家。 | 自然化；Head Writer 暫定，作者**未明確揀** | `NATURALIZATION`（未揀）| 同上 |
| Y2 | 我以前…同一個人試過。應該有效。 | CDL-084：功能 AC，逐字係「例」| `CANON_FUNCTION_ONLY` | CARRIED（B3）|
| Y2′ | 以前有人用過。有用。 | 作者揀（省咗「同一個人」，凜線索弱，`REVALIDATE_REQUIRED`）| `AUTHOR_PICK`（VOICE_CANDIDATE）| CARRIED（B3）|
| Y3 | 呢邊。／唔好郁。會斷。／後面。 | 無戰鬥逐字 canon | `AUTHOR_PICK` | CARRIED（B1／B2 戰鬥）|
| Y4 | 停下來！妳想被扭斷嗎？！ | **已核**：`canon/03_characters/miyako.md` 第 254 行（光環警戒習慣 #3），逐字 | `CANON_AC_VERBATIM`（習慣句）；**但**作者風格校準已淘汰（反問＋誇張）；而且係凜被扭斷嘅創傷觸發 | 唔用（Act I demo 冇光環警戒觸發 beat）|
| Y5 | **我所在之處屍骸必來，無法停用。所以才需要維多利亞天使存在。** | CDL-089 AC（`miyako.md` 第 180 行）| **`CANON_AC_VERBATIM`**（舊工作坊漏晒）| **POSITION_CONFLICT**（B8 vs M2，見結論 4）|
| Y6 | 天台使命說明（真＝擋屍骸保護人；藏＝代價）| CDL-055／095／103 功能；無逐字 | `CANON_FUNCTION_ONLY` | CARRIED（N3）|
| Y7 | 血糖低就用。 | V4／V5 Beat 原句（Beat 層設計，非 canon 對白）| `BEAT_LINE`（Beat 層寫入嘅一句，非批核 canon）| CARRIED（N3）|
| Y8 | 貓形態街頭公開講嘢 | Brief 只支持私密場合 | **未答**（作者問題）| 影響上面所有句嘅「聽唔聽到」|
| Y9 | 咬唇＋功利藉口（B2）| CDL-083／347／408 | `CANON_FUNCTION_ONLY` | CARRIED，**冇具體句** |
| Y10 | M2 提議夜潛學校；講屍骸現象 | V4.1／V5 M2 | 缺 | CARRIED，**冇句** |
| Y11 | 言癖：言1 單詞命令＋事實後果／言3 唔叫名 | `_YANPIK_PASS_V1.md` | `VOICE_CANDIDATE`（作者揀保留）；言2／言4／言5 作者唔列為言癖 | — |
- 舊 bible 線索：`miyako.md` 第 306 行同一句燈塔句（上面 Y5 已回源核實）；其餘凜、Act II 句不屬 Act I。

## 晴香
| # | 句／設定 | 來源 | 標籤 | Beat 承載 |
|---|---|---|---|---|
| H1 | 好彩趕得切！妳條裙無整污糟呀嘛？ | E-02 Scene 層參考；CDL-050 只定「笑著問條裙有無整污糟」| `SCENE_REFERENCE_LINE`（功能 AC）| CARRIED（B6）|
| H2 | 咁即係入隊囉！／噉咪即係入隊囉！ | Scene 參考／自然化，作者揀後者 | `SCENE_REFERENCE_LINE`／`NATURALIZATION`＋`AUTHOR_PICK` | CARRIED（B7）|
| H3 | 這係——？／咩嚟㗎？／交畀我！ | E-01 Scene 參考；「咩嚟㗎」自然化；「交畀我」無 canon 對應 | `SCENE_REFERENCE_LINE`／`NATURALIZATION`／`AUTHOR_PICK` | **OUT_OF_RANGE**：E-01 接裝置喺 demo 之前；CDL-272 亦令「交予裝置」描述要重核。句留檔，唔入稿（審核更正）|
| H4 | 一齊影張相吖！／喂，唔好啊！ | 無 canon；場1 事件 | `AUTHOR_PICK` | **待確認**：舊 8 場 cut 嘅「場1 街頭 IG」；現行 B1 係直播開場（偽亮色高峰）、冇逐字影相位。M4 合照鬧劇可重用，要 Beat 層確認 |
| H5 | 我得㗎！ | 無 canon | `AUTHOR_PICK` | CARRIED（B1／B2 戰鬥吃力）|
| H6 | 哇，操你好叻喎！ | 無 canon | `AUTHOR_PICK`（對操縮細味，作者接受）| **ORPHAN**（黃昏讚穿搭 beat 已冇）|
| H7 | 你冇事吖嘛／都唔係好痛呀 | — | `SUPERSEDED`（場4 作者揀唔加）| — |
| H8 | 你都係好人嚟㗎嘛／操，你其實係個好人嚟啊 | — | `SUPERSEDED`（作者淘汰）| — |
| H9 | **食粒糖先啦，雖然無魔法咁好味，但係會飽肚㗎。** | CDL-052 AC；`ACT_I_OUTLINE.md` 第 156 行；`iwakura_akane.md` | **`CANON_AC_VERBATIM`**（舊檔標「待核」）| CARRIED（V5 Batch 2 M1）|
| H10 | 對美夜子：美夜子你隻衰貓 | 作者自填 | `AUTHOR_PICK`（公開 vs 秘密身份待核）| — |
| H11 | 天台：晴香直講驚（N2）；問「我可以做啲咩」（N3）| V4.1／Batch 1 R2：行為描述，無逐字 | 缺 | CARRIED，**冇句** |
| H12 | B8：晴香問美夜子「點解操／屍骸…」| V5 Batch 5；CDL-089：「點解美夜子去學校？」| `CANON_FUNCTION_ONLY` | CARRIED，**冇句** |
| H13 | M5：晴香硬拉操入鏡 | V5 Batch 6 M5 | 缺 | CARRIED，**冇句** |
| H14 | 你知我係咩人囉／你OK嗎？下次一齊去食嘢吧。 | canon 句，非 demo 場 | `CANON_AC_VERBATIM?`（未逐句開原檔核）；作者揀 demo 唔用 | 唔用 |
| H15 | 言癖：好彩…／一齊…吖／助詞分工 | `_YANPIK_PASS_V1.md` | `VOICE_CANDIDATE`（作者揀保留）| — |

## 分級後嘅缺口清單（交 Stage 2）
| 優先 | 缺口 | 點解 |
|---|---|---|
| 1 | 天台：美夜子使命說明＋交槍（已有 G1／G2 候選，但冇分析卡）| N3 轉折 |
| 2 | 天台：晴香直講驚＋「我可以做啲咩」 | 同一場另一半 |
| 3 | 燈塔位：晴香問＋美夜子 canon 句自然化（B8 或 M2）| canon 句有，候選漏咗 |
| 4 | 美夜子 M2 提議（含「屍骸現象」兩種寫法）| 冇句 |
| 5 | 晴香餵糖：canon 句升級後重新比較 | 舊 F1／F2／F3 要按新分級重排 |
| 6 | 操 B8 冷處理（G3 已有）| CDL-322 |
| 7 | 操 U1 重配觸發（舊穿搭批評整組變孤兒）| 見 Stage 2 |
| 8 | 晴香 M5 拉人入鏡／操 M2、M3 嫌句 | V5 新增 |

## 仍然開放（唔係聲線層可以答）
- 貓形態街頭公開講嘢。
- 燈塔句放 B8 定 M2；M2 提議講唔講「持有者被追」。
- E-01 句（「用它。現在。」「咩嚟㗎？／交畀我！」）已確認屬範圍外：要唔要用閃回／台詞回聲，交 Beat 層。
- 舊場1 街頭 IG 同黃昏穿搭 beat 喺現行 Beat 冇對應：晴香「一齊影張相吖」可否搬去 M4 合照鬧劇。
