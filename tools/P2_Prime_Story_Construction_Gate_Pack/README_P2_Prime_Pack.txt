P2′ Story Construction Gate from Canon — Updated Pack (Auto-Call Version)

Files
- P2_Prime_Story_Construction_Gate_From_Canon.txt
  主 prompt。現已加入 Auto-Call Workflow Rule。
- Updated_IDE_CLI_Tools_Prompt.txt
  工具治理 prompt。現已加入 Full Story Rough Outline Audit discipline。
- IDE_CLI_Activate_P2_Prime.txt
  IDE / CLI 專用啟動 prompt。現已要求主 prompt + tools prompt 同時生效。
- README_P2_Prime_Pack.txt
  使用說明。

What changed
- AI 會自動先跑 Full Story Rough Outline Audit，而唔係等作者手動揀 07 / 08 / 09 / 10。
- AI 必須主動推薦 single best next step，唔可以只列 options。
- AI 未完成 outline audit 前，不可直接跳去寫單一 Act。

Recommended use
1. 先 load 主 prompt
2. 再 load tools prompt
3. 再貼 IDE CLI activate
4. 再畀 repo / 文件

Honest note
- 真正穩定做法仍然係：主 prompt + tools prompt + activate prompt + working files + 作者 approval gate。
