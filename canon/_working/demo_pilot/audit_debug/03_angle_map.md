# 03 角度→agent 對照（取自 raw_agent_extracts/agent_X_task_prompt.txt；CAPTURED）
| Agent | 任務 | 角度 | 備註 |
|---|---|---|---|
| A | 角色 | 1、2、13、14、15、16 | prompt 明文 |
| B | 資訊／知情 | 3、9、10、20、21 | prompt L5 明文（CAPTURED） |
| C | 結構／canon | 6、8、11、22、28 | prompt 明文 |
| D | 體驗 | 4、5、17、18、19、25 | prompt 明文 |
| E | 製作／玩法 | 7、12、23、24、26、27 | prompt 明文 |
| F | 漏洞搜尋 | 唔用清單，之後先對照 | 步驟 (4) 先讀 protocol／angle-system |
| G | 提案員 | 唔係審核 | 讀 angle-system＋protocol |
**覆蓋核對（POST_HOC）**：A–E 合共 28 個角度全部至少有 6 行（最少＝21，6 行；最多＝1，24 行）。見 scripts/coverage_raw_output.txt。
**已知解析缺口**：角度 21、26 嘅 H1 行 parser 漏咗（verdict 唔喺最右），人手 sed 確認存在；故 coverage 輸出「MISSING:H」係 **parser 錯**，唔係 agent 漏。
