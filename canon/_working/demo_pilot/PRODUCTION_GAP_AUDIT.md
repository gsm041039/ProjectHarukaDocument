# PRODUCTION GAP AUDIT — Demo 試點段生產缺口（Stage 4）

**[DRAFT / 暫定 — pending full-story beat lock]** ｜ 建立：2026-09-29 ｜ 上游：`SCOPE_AND_CUT_LIST.md`（方案 3 改）、`FACT_AND_KNOWLEDGE_STATE.md`
性質：只列缺口，唔定 art direction（C-5、D-07）。標記：`HAVE`＝已有；`GAP`＝缺；`NEED_AUTHOR`＝我核實唔到（Unity 實作狀態喺 `d:\Projects\ProjectHaruka`，呢個 repo 睇唔到）。

---

## 1. Gameplay（要作者確認 demo 課室版實際有咩）

**設計文件已有（`10_gameplay_bible.md`）：** 戰術視窗、威脅分級、屍骸分類（哭泣型／否認型）、靈魂抽取壓制技能、Reality Show／假數值系統（前期）、風評第一階段、IG 敘事線、敘事攝影機。設計層唔缺基礎。

| # | Demo 需要 | 狀態 | 備註 |
|---|---|---|---|
| G-1 | 街道戰場（一隻大型屍骸＋少量小型） | **HAVE（作者 2026-09-29：gameplay 本身就喺街上，唔係課室版）** | C-1 作廢；唔使評估搬場地 |
| G-2 | 晴香＋美夜子（貓形態）雙角色戰鬥 | NEED_AUTHOR | 課室版係咪已有貓形態支援／冰壁／爪擊 |
| G-3 | 情緒連結首次啟動：力量暴增視覺化 | GAP | demo 可腳本化觸發，唔做完整機制 |
| G-4 | 操：非可玩，cutscene＋腳本化助攻 | GAP | 需要腳本化演出接口；傀儡秒殺一頭＋中陷阱嘅短 cutscene |
| G-5 | 晴香衝去擋攻擊（場 4 一小段可玩） | NEED_AUTHOR | 可以做成 QTE／限時衝刺／純 cutscene；Stage 7 定 |
| G-6 | Reality Show 直播 UI（人數、+Likes、打賞、結算） | NEED_AUTHOR | 課室版係咪已有；假數值系統第一幕形態 |
| G-7 | 市民圍觀／求簽名（群眾） | GAP | 可以只用背景人群＋UI，唔做互動 |
| G-8 | IG 強行營業（拍照玩法或 cutscene） | GAP | 可簡化成 cutscene＋一次按鍵拍照；Stage 7 定 |
| G-9 | 屍骸「正面選擇型消散」演出 | NEED_AUTHOR | 靈魂抽取／消散係咪已有 |
| G-10 | 戰中對白觸發／失敗重試點 | GAP（Stage 7 設計） | 對接 `story-gameplay-dialogue-integrator` |

## 2. 美術（只列需求；已有素材列出方便對）

| # | 需求 | 狀態 | 已有素材／備註 |
|---|---|---|---|
| A-1 | 日區街道（日間、黃昏兩個時間） | 部分 HAVE | `Environment/DayDistrict/ConceptArt_DayDistrict_Street_1.png`（日間街）；黃昏版 GAP；Beta 環境語言（CDL-413）係 Beta 線用，Act I 係 Alpha 亮色，不套用 |
| A-2 | 城市遠景（俯視、光幕）＋戰場遠景暗紅光害（緋潮 Lv.1） | NEED | 遠景圖未逐張核；暗紅光害係新增氣氛層 |
| A-3 | 大型屍骸 | 部分 HAVE | `Characters/MagicCorpse/` Doll／Scrap 動作圖；Act I「日間街道、人形扭曲」大型版 GAP |
| A-4 | 小型屍骸 | 部分 HAVE | 同上 |
| A-5 | 晴香／美夜子（貓）魔法少女＋日常裝 | 部分 HAVE | Haruka 角色圖已有；貓形態圖 `NEED` 核 |
| A-6 | 操魔法少女＋日常裝 | HAVE | `Characters/Misao/ConceptArt_Misao_MagicalGirl.png`、`_CasualWear.png`；動作圖 `Scene/ConceptArt_Misao_MagicalGirl_Action_1/2.png` |
| A-7 | 傀儡（操嘅人偶）＋傀儡絲線特效 | GAP | 操角色檔有設計描述，演出用傀儡美術未核 |
| A-8 | 情緒連結力量暴增特效 | GAP | 簡化版 |
| A-9 | 陷阱＋泥濘（晴香擋攻擊後滿身泥濘） | GAP | 場 4；同泥濘服裝狀態 |
| A-10 | 「裙子問題」演出 | HAVE（參考） | `Scene/ConceptArt_Scene_30_Misao_SkirtQuestion.png` |
| A-11 | 場 8：操口角血線、舌頂牙、無人察覺 | 部分 HAVE（參考，時序不同） | `Scene/ConceptArt_Scene_47_Misao_DessertToothDrop.png`（Stage 2a 級，太重）；場 8 要 Stage 1 級輕版，需新構圖；唔可以直接沿用甜品掉牙圖（已按 CDL-233 標為 Stage 2a） |
| A-12 | UI：直播 UI 皮膚 | NEED | 同 G-6 |

## 3. 文件（人物底）

| # | 文件 | 狀態 |
|---|---|---|
| D-1 | 操 說話方式（voice bible） | **GAP（必補）**——`character-voice-bibles/` 只有 haruka、miyako、kohei |
| D-2 | 晴香 說話方式 | ~~HAVE~~ **REDO（2026-09-29 更正）**——舊 bible 係 2026-07 舊 workflow 產物，未做粵語自然化／說話心理分析／自稱稱呼表／語料對照；需按新 workflow 重做（見 tracker D-12） |
| D-3 | 美夜子 說話方式 | ~~HAVE~~ **REDO（2026-09-29 更正）**——同上 |
| D-4 | 動作表演文件：操（傀儡師走位／傲嬌反應／完美笑容／場 8 隱藏症狀） | **GAP（必補，全部由零）** |
| D-5 | 動作表演文件：晴香（笨拙戰鬥、擋攻擊、IG 強行營業） | **GAP** |
| D-6 | 動作表演文件：美夜子（貓形態、擋鏡頭、猶豫一瞬） | **GAP** |
| D-7 | 路人／直播彈幕若干句、凜信息一句 | GAP（小；Stage 8 順手做） |
| D-8 | 紫音、彩、桐生健、秋穗 | 唔需要（已剪／缺席） |

## 4. 劇情層前置

| # | 項 | 狀態 |
|---|---|---|
| S-1 | Scene 架構（8 場） | 未做（Stage 6） |
| S-2 | 場 1 30–60 秒獨立可理解設計 | 未做（Stage 6） |
| S-3 | 操意外救路人（CDL-322）放邊場 | 未定（Stage 6） |
| S-4 | 場 8 具體演法（強度已默認 Stage 1 級） | 未做（Stage 6） |
| S-5 | Q12 操 E-02 前 NC 前置 | 默認「無」，PROVISIONAL |

## 5. 結論同建議

1. **入 Stage 5 前唔需要作者補新決定。** 街道戰場已確認存在（G-1）；仲有 G-2/G-6/G-9 同操助攻腳本化接口喺 Stage 7 前要作者答。
2. 必補文件：操 voice bible、三份動作表演文件。全部可以由現有 canon 自動做第一版。
3. 美術缺口主要係：黃昏街景、大型屍骸、傀儡演出、情緒連結特效、場 8 輕版牙血。
4. 時長風險：方案 3 約 16–21 分，超時就壓場 1／場 7。

## 6. Stage 4 完成狀態

`DONE`（等作者過目；Gameplay 系列 `NEED_AUTHOR` 項需要作者或 Unity 側資料先可以定案）。
