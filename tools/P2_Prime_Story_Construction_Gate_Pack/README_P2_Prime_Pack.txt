P2′ Story Construction Gate from Canon — Question Matrix Timing Updated Pack

本包重點更新：
- Question Matrix 不再視為「任何時候都要做」
- 已明確改成：
  Evidence 抽完之後、正式 Author Gate 之前，先做 Question Matrix
- 一開波未讀文件前，不應做 full Question Matrix
- reconstruction judgments 寫死之後，亦不應太遲先補做 Question Matrix

本包核心文件：
1. P2_Prime_Story_Construction_Gate_From_Canon.txt
   - 主邏輯
   - 自動先做 Full Story Rough Outline Audit
   - 自動判斷 Question Matrix 何時啟動

2. Updated_IDE_CLI_Tools_Prompt.txt
   - 工具治理層
   - working files
   - Evidence-level vs Reconstruction-level
   - Question Matrix Timing Gate
   - Question Matrix Gate
   - Next-Step Recommendation Gate

3. IDE_CLI_Activate_P2_Prime.txt
   - 啟動時明確要求：
     先 audit，再判斷 Question Matrix 時機，再問作者

建議用法：
1. 先 load 主 prompt
2. 再 load tools prompt
3. 再貼 activate prompt
4. 再畀 repo / 文件 / 今輪目標

注意：
- 如果只 load 主 prompt，不 load tools prompt，Question Matrix timing rule 會較弱
- 如果只 load tools prompt，不 load 主 prompt，個 AI 未必會自動先做 outline audit
- 兩份要一齊用
