# Claude Code Story Skill Pack

呢個 zip 係根據你原本 `tools prompt` workflow 轉成 Claude Code 可用嘅 project skill pack。

## 核心設計目標
- 保留你原本既 phase thinking：Story Room / Canon / Atom Gate / Writeback / Resume
- 補強你最在意既功能：
  - 問題前一定先做 source check
  - reconstruction-level 問題一定先過 Question Matrix
  - 問題可 deferred，但唔可以消失
  - 每輪做完一定更新 durable state files
  - 換電腦 / 新 session 都可以沿住同一工作繼續
- 新增一個更適合跨電腦續做既主進度檔：`canon/_working/PROJECT_STATUS.md`
- 新增一個可從唔同 section 開始，但都會拉返同一工作流既萬用入口：`/story-router`

## 放入 repo 後建議用法
1. 把整個 `.claude/` 資料夾放入你的 story repo 根目錄
2. 把 `CLAUDE.md` 放到 repo 根目錄
3. 把 `canon/_working/` 內模板／初始檔一併放入 repo
4. 開 Claude Code 後，優先用：
   - `/story-router <你今次想做既 section / 問題 / 任務>`
   - 或 `/story-resume`（如果係新 session / 新電腦）

## 建議 slash commands
- `/story-router <task>` = 萬用入口 / 自動決定 mode / 同步狀態
- `/story-room <topic>` = 問題引擎 + Story Room
- `/story-canon <task>` = 文件 intake / register / sectioning / audit
- `/story-atom-gate <task>` = candidate / duplicate / conflict / author gate
- `/story-writeback <task>` = 已批准內容寫回 canon
- `/story-resume <optional note>` = 新 session / 新電腦安全接手

## 你原本 pack -> 新 skill 對應
見 `MIGRATION_MAP.md`

## 最重要新規則
- `PROJECT_STATUS.md` 係主 resume anchor
- `NEXT_ACTION.md` 係唯一單一步安全下一步
- `QUESTION_QUEUE.md` 係未答 / deferred / resolved 問題真相來源
- `QUESTION_MATRIX.md` 係 reconstruction-level 提問前既可查核拆題表

## 如果你唔用 skill，只想 copy prompt
可直接打開：
- `.claude/story_system/standalone-prompts/UNIVERSAL_START_PROMPT.md`
- `.claude/story_system/standalone-prompts/QUICK_RESUME_PROMPT.md`
