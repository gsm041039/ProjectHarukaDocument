P2′ Story Construction Gate from Canon — Updated Full Pack

Files
- P2_Prime_Story_Construction_Gate_From_Canon_v2.txt
  主 prompt。用來取代舊 P2。
- IDE_CLI_Activate_P2_Prime_v2.txt
  IDE / CLI 專用啟動 prompt。讀完主 prompt 後再貼。
- README_P2_Prime_Pack_v2.txt
  使用說明。
- Updated_IDE_CLI_Tools_Prompt_v2.txt
  更高約束的 tools / working files / dependency map 規則。

How these 4 files relate
- 原本嗰 3 份仲係主體：
  1) 主 prompt
  2) 啟動 prompt
  3) README
- 我頭先單獨俾你嗰份 tools prompt 係額外加強層，不係取代前面 3 份。
- 呢個 full pack 係將兩者合併返一齊，避免你只拎到 1 個 file 以為覆蓋咗整套。

Recommended use
1. 先讀 README
2. load 主 prompt
3. load tools prompt
4. 再貼 IDE_CLI activate
5. 再畀 repo / 文件

Honest note
- 一份長 prompt 不能保證 100% 做齊所有事。
- 真正穩定做法係：主 prompt + 啟動 prompt + tools prompt + ledger / phase gate + 你作 author approval gate。
- 所以分開通常更穩，而唔係全部塞成一段。
