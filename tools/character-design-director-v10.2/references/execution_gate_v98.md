> **v10.1 優先修正**：本門檻只適用正式 production settei／已選案的定稿；**探索圖有另一套輕量門檻**，見主 SKILL.md PHASE 3。

# v9.8 Execution Gate — 創作嘅決策流程，唔係評論提綱

## 作用

v9.7 只要求「寫反對理由」，AI 仍可無阻地自行宣告通過，隨即生成。v9.8 將設計流程分成**先篩掉弱候選**同**用圖驗證值得試嘅候選**，兩者必須有獨立紀錄。對不同角色不可沿用上一次角色嘅裝飾密度或色彩規則。

## 通過條件

### A. 覆蓋完整角色（不是逐個地方補一個理由）

回應作者要求之前，觀察 `head+hair / upper garment / waist-bottom / legs-shoes / accessory / front-back / color logic / wearing / production`。唔使每項都改；**每個改動必須知道對其它項嘅影響**。特別留意只在背面出現嘅帶、章、繩、飾品同配色。

### B. 真正對抗兩條概念

基準 `KEEP ORIGINAL` 係有權勝出嘅候選。A/B 必須係不同造型機制，例如：
- A：不加裝飾，用肩袖／腰裙嘅形體節奏改個性；
- B：保留整體輪廓，改穿法及局部高辨識色彩關係；
兩者都應有合理可畫機制。唔可以為咗令 A 過關故意設計差嘅 B。

### C. 五種 blocker（任一個 => 無法 SELECT FOR TEST）

1. **No appeal hypothesis**：只係新、靚、精緻、統一、細節少、動畫便宜等形容，冇講邊種角色專屬魅力會更強。
2. **Identity loss**：無理由破壞被作者鎖定嘅面貌、角色氣質、已授權穿法／特徵。
3. **Whole-body loss**：局部成立，但頭髮×上身×下身比例、前後或配色反而更差，冇可行補救。
4. **Production/brief violation**：超出目標 TV Anime / 其他媒介細節上限、改動權限或風格方向。
5. **Baseline dominates**：原版保住更強優點、或者用更小代價已可達成同一目標，而新方案冇獨立收益。

如被 veto，**先修正概念，唔係修正辯護說詞**。建議最多兩輪候選改寫，仍然冇可證成嘅預期價值，應保留原稿，將設計發現留文件。

### D. 分開三種結果

| 類別 | 可以話乜 | 唔可以話乜 |
|---|---|---|
| `SELECT FOR TEST` | 概念有具體預期收益，值得生成比較 | 已證明更吸引／取代原版 |
| `EXPERIMENTAL—UNVERIFIED` | 作者想睇圖探索，方向冇違硬鎖 | 已經過概念審查 |
| `KEEP ORIGINAL` | 無夠有力嘅新方向，原版暫時較好 | 角色一定冇改善空間 |

## Precommit & postrender 同一輪中點執行

最少：**先喺用戶可見文字展示 precommit 重點**（簡短例子：「A 淘汰，因為削弱 X；揀 B，預期由 X 與 Y 比例令 Z 更突出；風險會失去 W」）。存有檔案工作流則另存 `preflight.json`。只有其 `candidate.verdict` 合格、`blockers` 係空、render contract 不為空，先准標記 SELECT FOR TEST。使用 `tests/preflight_guard.py lock file.json` 可產生內容 hash 同 receipt，出圖後用 `verify` 檢查無倒填；程式無法保證模型有先做創意判斷。

禁止將 `preflight.json` 直接送入 image generator；Image prompt 應只描述改圖畫面，同埋具體保留與禁止改動，不包含 Veto / score / report / info graphic 等字眼。

## 清楚區分設計勝負與出圖忠實度

**只要圖片被擅自加飾物、條紋、內搭、信息板、或者遺失原稿身份細節，就先判 Render drift**。不可以用模型自動加嘅飾物作成功證據。若合約有達成，再判同等尺度下係咪真的更突出角色魅力；最後才判 Anime Detail Fit。三樣分開報告，唔好用「不通過」掩蓋邊種失敗。

## 用於真實迭代而非反覆寫報告

如果候選輸：指出失敗同選擇另一個**設計機制**；如果模型唔遵循合約：修改**圖像執行方法**，唔好無端改角色理論。當作者指定可以自動推進，喺同一任務持續做下一個合理方案，而唔每次交不合格圖就叫作者決定。
