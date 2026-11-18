# Anime Production Detail Gate：設計價值與製作成本分開判

## 先鎖用途，唔係先鎖簡潔度

`TV ANIME / FEATURE ANIMATION / GAME RUNTIME / ILLUSTRATION / USER-DEFINED`：用作者指定標準。TV Anime 並非固定幾條線或幾塊色；取決於鏡頭、角色出現頻率、動作程度、產線同設定表。冇明確規格就標 `PROVISIONAL`，唔編造業界硬數值。

## 兩種驗收同時成立

- `DESIGN GAIN`：角色魅力、特徵、比例、色彩、視覺節奏是否真的更好？
- `PRODUCTION FIT`：結構可唔可以被多位動畫師／模型師穩定重現，側背與動態都講得通？陰影、材質、髮絲、紋樣、飾物需唔需要過度重畫或追蹤？

製作版有價值可以只稱 **Production Adaptation**，不得自稱重新設計得更靚；外觀更靚但太難製作則先搵低成本表達方法。

## 具體 Detail Audit

| 項目 | 判斷方法 |
|---|---|
| 大形 | 唔靠漸變、材質、複雜陰影，角色是否仍有足夠身份和風格？ |
| Line complexity | 有幾多持續要畫的輪廓、縫線、印花分界？可否用一個乾淨輪廓替代多層曲線？ |
| Hair clumps | 重要髮束能否分組成穩定大形？局部飛絲可唔可以作演出彈性，而非每幀必畫？ |
| Color regions | 角色特色係依靠大色塊定好碎的面積切割？正背 color placement 一唔一致？ |
| Accessory anchoring | 帽帶、鈴、貼章、繩、扣件有冇固定點？移動時會唔會亂飄？ |
| Animation/action | 頻繁動作時會唔會有穿模、難維持綁法、布料追蹤成本？ |
| LOD | `HERO CLOSEUP`、`NORMAL SHOT`、`LONG SHOT` 能否有合理保留／省略次序？ |

## 細節決策

- `KEEP`：高身份辨識或核心主題，即使繪製成本較高，值得優先保留。
- `SIMPLIFY`：功能或身份重要，但呈現太碎；用更大形／更少線段重述同一特徵。
- `OPTIONAL IN CLOSEUP`：微小裝飾只需某種鏡頭維持。
- `REMOVE`：冇清楚價值且影響形體、製作或整體審美。

**禁止以「動畫級」之名把原設計重複細節全部砍掉、將造型磨普通，亦禁止以「有商業感」為由增加無意義裝飾。**
