# WORK_SPEC — 00_Story_Brief.html 審核與重構

## 任務目標
`00_Story_Brief.html` = 完整、自足、可自由選擇閱讀深度嘅劇情百科。唔係縮短版 onboarding、唔係 pitch、唔係將詳情搬去外部連結。

四階段（每階段獨立授權，唔可以自動跳下一階段）：
1. Prompt 1｜審核（唔改 HTML/Canon）— **現正執行**
2. Prompt 2｜內容同步（只可改 00_Story_Brief.html，必要時 00_Story_Brief.md）
3. Prompt 3｜表達重構／去重／圖表化（HTML/CSS/JS）
4. Prompt 4｜最終 QA、有限修復、重新驗證

## 寫入邊界（Prompt 1 階段）
- 只可寫入 `canon/_working/brief_refactor/`（WORKDIR）
- 不可修改 00_Story_Brief.html／00_Story_Brief.md／正式 Canon／圖片資產／專案設定
- 不自行 commit/push/reset/clean/stash/切分支

## 來源權威判定（本輪確認）
- `00_Story_Brief.html`：**手工維護**，冇 generator script（搜尋 `.claude/`、`tools/` 冇發現對應同步腳本）。Title 本身帶版本標記（`First Reader Content Review Layout v15-timeline-fork`），近期改動：2026-09-05（Round 163–182「百科 Goal」系列）。
- `00_Story_Brief.md`：最後改動 2026-06-26，**落後 HTML 逾 2 個月**，唔可以用嚟反向覆蓋 HTML 或假設佢更新。本階段唔改 MD，除非後續階段證實有明確維護契約要求同步（現無證據）。
- 判定：HTML 為本任務讀者頁權威；Canon `*.md`（`canon/` 下角色/世界/故事設定檔）為事實來源；MD Brief 只作參考，非權威。

## Baseline A（唯讀，本輪工作樹快照）
- HEAD：`e4c5743aeba67c57c74178d2b896f8d508617922`（branch `main`）
- `00_Story_Brief.html` 最後改動：`cc67165` 2026-09-05 16:09:51 +0800
- `00_Story_Brief.md` 最後改動：`d06ad90` 2026-06-26 17:35:34 +0800
- SHA256（見 `evidence/baseline_A_hashes.txt`）：
  - html: `01ee3bfa1785c35c5c82494c215d75ef18e269...`
  - md: `658f0b4a85107c5fa29baf22f1aa8263e7547...`
- git status snapshot：`evidence/baseline_A_status.txt`（包含大量 unrelated 未 commit 改動，屬其他故事 production 任務，唔屬本任務範圍，唔可覆蓋）

## 同步 checkpoint（本輪選定）
最近一次可核實嘅「百科 Goal」同步完成點 = **Round 164（2026-09-05）**「百科 vs 已入檔 canon 全庫對照完成」。
由 Round 164 之後到現在（Round 165–197）嘅所有 canon 改動（CDL-290 起計，尤其 CDL-408 美夜子八千代型底色 reframe；Round 187–197 Act I Beat Sheet / Sequence Map 生產）**未經證實已同步入 HTML**，屬本輪主要審核對象。

## 驗收條件（Prompt 1）
- AUDIT.md 完整列出同步矩陣（一致／缺失／過時／局部過時／待確認／不適用）
- CONTENT_LEDGER.json 有穩定 ID 覆蓋審核到嘅資訊單位
- 三個代表性前後示範（系統/角色/故事各一）
- 只回報發現，唔寫入 HTML/Canon
