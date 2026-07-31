# GLOBAL VOICE DOCUMENT PROTOCOL v0.6

## Core separation
角色通用說話方式文件同單一場景說話狀態係兩種不同產物。

```text
Global Character Voice Guide
+ Scene Speaking State
= Scene Dialogue Voice
```

## Why
- 防止做邊場就只生成嗰場內容。
- 防止單一場景反應被誤當全劇固定習慣。
- 令角色文件可跨章節、跨 session 重用。
- 令場景仍可因身體、關係、壓力同 gameplay 產生臨時變化。

## Required templates
- `templates/character_voice_bible_template.md`
- `templates/scene_speaking_state_template.md`

Templates provide a target shape, not permission to invent missing facts. Missing evidence remains blank or candidate.
