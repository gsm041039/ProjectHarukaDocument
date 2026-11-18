# Evidence integrity & migration notes

## 原始保存

- v8 整個 ZIP 內容原樣保存在 `../archive_v8/pack_v8/`，包括全文、sources、投票 R1/R2、圖像總覽、部分測試圖、腳本、裁決。不要修改 archived files。
- 新 v9 **沒有新增 2026-11-11 外部核實或真人 A/B 測試**；所有 v9 新增方法應標 `DESIGN_METHOD_PROPOSAL`，使用前按個案驗證。

## 路徑限制（重要）

v8 部分路徑指向舊機 `research/...`、`/workspace/haruka/...` 或 `lab/canon/_working/...`；**它們不是本 ZIP 內可保證打開的文件**。ZIP 包含部分衍生圖（例如 `SKILL_EXAMPLES_IMG_20261110/rules_r2_integration/`）、總覽圖及報告，但不包含全部官方圖像／研究檔。若某證據圖缺失：

- `AVAILABLE_BUNDLED`：能打開此 ZIP 的檔案，讀後才引用；
- `REFERENCED_NOT_BUNDLED`：舊報告有圖名／路徑，但此 ZIP 沒有，**不得聲稱重新看過圖片**；
- `URL_LISTED_NOT_RECHECKED`：資料庫有網頁網址，今次未重開，不冒稱最新可讀；
- `HUMAN_TEST_PENDING`：無真人實驗；
- `VISUAL_JUDGMENT`：AI 對當下提供圖嘅分析；唔當成人測。

## 來源引用最低要求

需回答「邊個講／邊張圖／可否驗到／與當前角色有何關係」。將「設計者直述」同「旁觀者推論」分開。原 v8 來源評級與勘誤見 `SKILL_REF...`，失效數不可引用。多個 AI 用同一組圖／報告投票，唔當獨立人類樣本。

## v9 規則升級政策

新觀察先入 `proposed_rules.md`，最少記：主張、適用場合、失敗／反例、可驗證操作、證據級別、是否跨角色成立。只有跨作品反證審查後，才建議更新 v8 G 規則；從 `PROPOSED` 直接叫 `CONFIRMED` 不可。
