# Image Execution / Post-Audit：避免想法與生成結果脫節

## 輸出前分離兩個 artifacts

1. **Design Decision Record（純文字）**：先寫設計目的與部件差異，固定後才可開始生成。
2. **Image Spec（給圖像生成器）**：只寫身份、可畫改動、鏡頭、背景、正背側、禁止新增件。**唔放「設計報告」「評分」「流程圖」「解釋改進」等詞**，避免生成模型把角色改圖畫成研究報告。

## 圖像 Spec 最小模板

```text
TASK: Edit the attached original character reference; create clean character artwork only.
KEEP: [identity, face, hair, palette anchors, approved garment features]
CHANGE: [EXACT 1-3 visible alterations: location / shape / color / placement / relative proportion]
CONSTRUCTION: [how layers, seams, front/back, motion fit together]
DO NOT ADD: [unapproved trims / stripes / straps / extra motifs / accessories / new clothing pieces]
COMPOSITION: [front/back/side as requested, full body, neutral background]
OUTPUT: Character model sheet art only. No text, no analysis, no comparison chart, no infographic unless requested.
```

請依使用者確定嘅 Art Direction 選禁項，唔將所有裝飾列成永遠禁止。

## 按設計假設執行驗收

- `HIT`：主設計操作真係發生；比較前後輪廓、色塊、穿法。
- `PARTIAL`：做咗一部分；哪些冇畫到？
- `DRIFT`：未授權加件、換身份、改配色／髮帶、改畫面格式、忘記背面特徵。
- `CONSTRUCTION`：正背左右、固定位置、裝飾是否一致？
- `DESIGN GAIN / PRODUCTION FIT`：兩者分開，不能用製作省線代替魅力提升。

## 如何處理失敗

1. `BAD_RENDER`：設計主張本身有理，畫唔到 → 收窄 Prompt／局部受控編輯；相同偏移兩次後停止盲試。
2. `BAD_CONCEPT`：畫得到，但其實變普通、比例失衡／配色無理 → **退返上一步修改設計假設**，唔係再叫模型畫靚啲。
3. `MIXED`：概念與出圖都出問題 → 分開寫兩條解決策略；唔好只怪模型。
4. `UNVERIFIED`：比較條件不足／畫面缺失 → 明示未能判斷，不捏造判定。

## 生成結果≠正式稿

所有圖片均為候選，直至作者確認；獨立保存原圖、候選、Prompt、計劃與實際差異。**事後理由如有新洞察，標 `POST-HOC DISCOVERY`，不可倒填到 `PRECOMMITTED THESIS`**。
