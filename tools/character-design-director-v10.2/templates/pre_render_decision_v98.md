# v9.8 Pre-Render Decision — **必須在 image tool 之前完成**

> 簡短可讀版本；如果環境有檔案權限，亦可建立 `preflight.json` 配合 `tests/preflight_guard.py`。precommit 唔可事後修改，post-render 分開寫另一檔。任何測試角色嘅獨特資料放其候選資料夾，唔放通用 Skill。

## 1. 作者方向 & 原版
- 用途 / Anime Detail Level / hard locks / 改動範圍：
- 角色應強化嘅魅力（可見形體如何表達）：
- 原版至少兩個真正成功嘅地方：
- 全身審視（前後輪廓、上下比例、配色含小配件、穿法、細節）：
- 未知：

## 2. 競爭方案（原版算一票）

| | KEEP ORIGINAL | A | B |
|---|---|---|---|
| 具體可畫改動 | 無 | | |
| 預期角色專屬收益 | 保留原有魅力 | | |
| 失去原版乜 | 無 | | |
| 前背/其他部位連鎖效應 | 原有關係 | | |
| Anime details 成本 | 原有 | | |
| 最大反對理由 | | | |
| 更低代價方法 | | | |
| 同尺比較，乜結果就否決 | | | |
| 判決 | BASELINE | SELECT/REWORK | SELECT/REWORK |

## 3. 淘汰結論
- Veto 咗邊個？**唔准用任何理由將 blocker 忽略**：
- 選邊個（或 KEEP ORIGINAL），點解預期比原版值得探索？
- 最大風險（唔係外觀執行風險，而係設計本身）：
- 預期觀眾首先睇到嘅視覺關係：
- **生成前標記**：SELECT FOR TEST / EXPERIMENTAL—UNVERIFIED / KEEP ORIGINAL

## 4. Render Contract
- KEEP：
- CHANGE（具體形狀／比例／位置／色／穿法）：
- FORBID：
- OUTPUT（角色圖、正背、畫面比例等；唔要額外分析文件）：

---

## 5. Post-render（**只可新增，不可倒填上文**）
- Render fidelity: HIT / PARTIAL / MISS / DRIFT；列實際差別
- Design gain: 有無命中原定魅力／比例改善；原版邊度仍較好
- Anime detail fit: 符合作者指定水平嗎
- 結論: 角色設計 / 生成忠實度 / 製作適配分開判
- 下一個設計或圖像執行動作：
