# Haruka Workbench 加入 Codex 支援：技術方案

狀態：完成（Stage 1–4）。只係工具方案，唔涉及故事 canon。
日期：2026-10-22

## 作者決定

- 2026-10-22：Workbench 操作同原有功能保持一致，只更換 backend；Codex 覆蓋聊天及全部背景 AI 功能。
- 根據呢個要求採用 Codex app-server 作 Codex backend，因為需要持續對話、串流、作者提問及執行審批；Claude 保持原 adapter 同預設路徑。

## 目的

保留現有 Claude 操作方式，另外畀作者用本機 Codex 執行 Workbench 對話及其 AI 工作流程。唔改 `.claude/` 工作流程檔；兩邊都沿用 Workbench 現有嘅頁面、任務資料同作者確認卡。

## 已查證現況

- `Workbench_Start.bat` 開 Node 網頁伺服器，依賴缺失時跑 `npm install`；本身冇啟動 provider 嘅選項或認證檢查。
- `tools/workbench/server.mjs` 直接 import Claude Agent SDK。主要聊天、討論設定助手、作者問法整理、用量查詢同 model 清單都直接呼叫 Claude SDK。
- `tools/workbench/discuss.mjs` 逐角色、主持人同總結器直接呼叫 Claude SDK；討論紀錄只存 `model` 同美元 `cost`。
- `tools/workbench/plain.mjs` 用 Claude Haiku 改寫工作紀錄。
- `tools/workbench/public/app.js` 只存全站預設 `model`／`effort`；建立、續談、model/effort 切換都假設係 Claude。對話 UI 讀 Claude tool events 同 Claude 歷史。
- `task_sessions.json` 以工作 ID 對應單一 session ID；舊值都應視為 Claude session，升級時要兼容。
- 目前工作環境已裝 Codex CLI（`codex-cli 0.163.0-alpha.11`），亦可啟動 `codex app-server`。`codex app-server --help` 將 app-server 標為 experimental；正式整合要做啟動／協定檢查，錯誤時留住 Claude 可用。

## 建議架構

### 1. Claude 保持原 adapter，Codex 用本機 app-server

Codex 端建議用 `codex app-server --listen stdio://` 嘅 JSON-RPC 連線，Node server 持有長駐連線，再為每個 Workbench 對話開 Codex thread。Workbench 嘅既有 `/api/sessions`、SSE 事件同頁面仍然係共用入口，後端以 provider adapter 將各自事件正規化。

揀 app-server 係因為 Workbench 係互動式產品：除開新對話、續談同串流活動，仲要接住作者提問卡同執行審批。OpenAI 將 Codex SDK 描述為適合一般程式化串流／續談，而 app-server 係應用要控制對話生命週期、串流同審批時嘅介面。[Codex app-server 選型說明](https://developers.openai.com/blog/codex-as-a-platform) Codex TypeScript SDK 本身亦可開 thread、串流、恢復 thread，但會包裝 `codex` CLI，佢嘅事件同 Workbench 現有 Claude SDK 不同。[Codex SDK README](https://github.com/openai/codex/blob/main/sdk/typescript/README.md)

app-server 標示為 experimental，所以要將已支援嘅 protocol version／feature 喺啟動時核實；唔支援時顯示清楚錯誤，唔影響 Claude provider。版本改動要集中喺 Codex adapter，避免散落喺 UI。

### 2. 對話 provider 由開新對話時揀定

- 設一個全站預設 provider，預設仍然係 Claude，唔影響舊用法。
- 每個新對話保存 `provider`、provider-specific thread ID、model 同 reasoning effort；對話開始後唔做 Claude/Codex 原地轉換。作者要轉 provider 時另開一條對話，避免兩種歷史混埋。
- task-session link 改為能保存 `{ provider, sessionId }`；讀到舊格式純字串時當 Claude session。
- Codex 過往對話由 app-server thread history 讀取；建立一組 Workbench 共通 UI events，唔將 Codex/Claude 原始事件格式直接交畀網頁。
- Codex model catalog 同每 turn model/effort 由 app-server 提供；與 Claude 各用各嘅預設值。

### 3. 所有模型呼叫都用同一 provider router

| 功能 | 建議處理 |
|---|---|
| 一般聊天／resume | 按對話保存嘅 provider 執行；保留原 Claude session。 |
| 自動討論 | 討論建立時保存 provider；每個角色、主持人、總結器都走同一 provider。舊討論檔冇 provider 時當 Claude。 |
| 討論設定助手 | 用全站預設 provider，保持唯讀。 |
| 作者問法整理 | Codex 以唯讀方式產生建議內容，由 Workbench server 寫入固定嘅 `AUTHOR_LENS.md`；避免放寬而家只准改單一檔案嘅保護。 |
| 工作紀錄白話改寫 | 用全站預設 provider；無工具、短輸出。 |
| model／用量 | Claude 繼續顯示現有帳戶用量；Codex 顯示 provider 可提供嘅 thread token 用量／帳戶用量，資料不可用時顯示「讀唔到」，唔混報 Claude 資料。 |

Codex 的原生 tool／sub-agent 名稱同 Claude `Read`、`Grep`、`Bash`、`Agent` 不一樣，Workbench 需要做摘要映射；而家按 Claude `Agent|Task` 計算嘅 sub-agent cap 唔可直接當成 Codex 同一套限制。

## 要保留嘅安全／互動行為

- `AskUserQuestion` 需要送到 Workbench 選項卡，答案再傳返 Codex thread。
- app-server 執行審批需要轉成 Workbench 審批卡；如協定未能安全完成往返，就用拒絕／中止處理，唔可以默認批准。
- `discuss`、設定助手維持唯讀；作者問法整理由 server 固定寫入目標檔，其他寫入繼續經 Workbench 既有作者確認／任務流程。
- Codex CLI 缺失、未登入、app-server 版本不合或連線失敗時，標示 Codex 暫不可用；Claude 保持正常。
- 認證讀取本機 Codex 設定／CLI 登入狀態；唔將秘密放入瀏覽器 localStorage、repository 或 log。

## 最小落地次序

1. 已加 provider-neutral session/link 資料格式，舊值保持 Claude 解讀。
2. 已加 Codex app-server adapter：啟動／初始化、建立及恢復 thread、stream event、問作者、審批回覆、中斷及錯誤收尾。
3. 已加預設 provider 設定同新對話 backend 選擇；對話頁按 provider 顯示 model/effort/history。
4. 討論、planner、作者聲線整理同白話改寫已接到共用 router；Codex 背景工作唯讀，作者聲線內容由 server 寫入固定檔案。
5. Claude／Codex 用量獨立讀取；Codex CLI／認證／協定錯誤會顯示喺 Workbench。舊 Claude sessions、討論、task link 照舊可開。

## 實作界線

- App-server 仍標示為 experimental；Codex adapter 集中處理協定差異及啟動錯誤，Codex 暫不可用時不得影響 Claude。
- Stage 2 先完成 provider backend seam；Stage 3 再接入 UI、背景模型呼叫、續談／歷史與用量顯示。

## Stage 2 落地紀錄

- `tools/workbench/providers/provider-contract.mjs` 定義 provider 名稱、雙 provider session reference 同共通 session 方法；舊嘅字串 session link 仍解讀為 Claude。
- `tools/workbench/providers/codex-app-server.mjs` 管理本機 app-server stdio JSON-RPC，並提供 Codex thread 建立／恢復、message turn、interrupt、model/effort、分頁歷史、model catalog、thread list、rate-limit usage 及 ephemeral read-only one-shot prompt。
- Codex agent message delta／完成文字、命令／檔案／MCP／sub-agent／搜尋活動、plan、token usage、turn 結果及錯誤都轉成 Workbench 共通 event。User input、shell、file-change 同額外權限申請會經 `ask`／`approve` callback 往返；冇 callback 或處理失敗時拒絕批准。
- 一般對話用 `workspace-write` + `on-request`；背景 one-shot prompt 用 `read-only` + `never`。Stage 3 已接通新舊 session route。
- 本機 Codex 0.163.0-alpha.11 產生嘅 app-server bindings 包含以上 request/notification；協定仍屬 experimental，實際接線時需處理 CLI 未安裝、登入狀態及協定錯誤。
- Windows 啟動時優先用 `WORKBENCH_CODEX_CLI`；未有覆寫就會喺 `%LOCALAPPDATA%\\OpenAI\\Codex\\bin\\<version>\\codex.exe` 自動揀最新版本，避免 Workbench server 嘅 PATH 未更新時搵唔到 Codex Desktop CLI。
- 協定參考：[OpenAI Codex app-server README](https://github.com/openai/codex/blob/main/codex-rs/app-server/README.md)；app-server 作為互動產品 backend 嘅選型依據見[官方說明](https://developers.openai.com/blog/codex-as-a-platform)。

## Stage 3 落地紀錄

- 設定頁新增全站 backend 選擇；Claude 仍係預設。model／effort 偏好按 provider 分開保存，Claude 舊 localStorage model／effort key 繼續讀取。
- 對話按 provider 保存及恢復 session；`task_sessions.json` 新值用 `{provider, sessionId}`，舊字串仍代表 Claude。Codex thread 歷史由 app-server 讀取；不會將一邊嘅 session ID 交畀另一邊。
- Codex tool input、審批及作者問題沿用 Workbench 共通卡片；session 指令要求跟 `web-ui-protocol.md`，並按 `AGENTS.md` 使用 Codex `.agents/skills/`，不修改 `.claude/`。
- planner、自動討論角色／主持人／總結器、白話改寫及作者聲線整理都經同一 provider prompt router。背景 Codex 呼叫使用 read-only sandbox；問法整理只由 server 寫 `AUTHOR_LENS.md` 固定路徑。
- 用量查詢按 provider 獨立執行和快取。Codex rate-limit 資料缺失會顯示不可用；不會回退顯示 Claude 用量。
- model catalog 依 provider 讀取；Codex effort choices 取自所選模型支援清單。Codex 輕量工作步驟會按 catalog 優先選 mini/nano model，重／作者 gate 沿用 Codex default/session model；可用 `codex_step_models` 自訂。

## Stage 4 收尾紀錄

- 已人工檢視 provider 路由、歷史恢復、task link 相容、背景唯讀界線同不可用錯誤顯示。
- 未執行測試，符合 T-010 指示。
- 已知限制：Codex app-server 仍屬 experimental，要求本機 Codex CLI 已安裝並登入。Codex app-server 暫無等同 Claude PreToolUse sub-agent cap 嘅預先攔截介面；作者可選助手上限但唔保證同 Claude 完全一致。app-server protocol 升級可能需要更新 adapter。

## 依據位置

- `Workbench_Start.bat`
- `tools/workbench/server.mjs`：`planDiscussion`、`createSession`、`updateLens`、`getUsage`、`/api/models`、session/history endpoints
- `tools/workbench/discuss.mjs`：角色／主持人／總結器呼叫同討論存檔
- `tools/workbench/plain.mjs`：白話改寫呼叫
- `tools/workbench/public/app.js`：provider/model 設定、sessions、history、usage UI
- `tools/workbench/public/views/discuss.js`：自動討論 model 選擇
- `tools/workbench/package.json`、`tools/workbench/package-lock.json`
