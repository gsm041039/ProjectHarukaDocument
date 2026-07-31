---
name: story-character-voice-evidence-auditor
description: Audits whether a character voice guide is genuinely supported by canon, correctly separated by story period and relationship, and safe to use for exploratory, polished or recording-ready dialogue.
---

# story-character-voice-evidence-auditor

Task:
$ARGUMENTS

## Mission
檢查角色說話方式文件係真正由 canon 支持，定只係寫得完整但其實大部分係推測。呢個 skill 只審核證據同可用範圍，唔負責代替作者決定角色聲線。

## Required Checks
1. 文件係咪真正角色級全劇通用文件，而唔係將單一場景準備稿錯叫 Voice Bible。
2. 標題、適用範圍同主體有冇綁死當前場景。
3. 每條主要規則有冇 evidence class 同規則範圍（GLOBAL／PERIOD／RELATIONSHIP／STATE／SCENE_ONLY）。
2. `CANON_DIRECT` 真係有直接文件／台詞支持。
3. `CANON_PATTERN` 有冇至少兩個獨立場景支持，而唔係同一段內容重複引用。
4. `CANON_INFERRED` 有冇清楚寫推導根據同例外。
5. `VOICE_CANDIDATE` 有冇錯誤寫成肯定事實。
6. 證據不足時，文件有冇錯誤叫正式 Voice Bible。
7. 有冇分開跨時期穩定核心同時期變化。
8. 每個時期有冇講明由咩事件開始改變。
9. 有冇將後期語言提前落前期。
10. 有冇處理同一時期對不同人物嘅說話差異。
11. 有冇將心理標籤當成所有語言現象嘅唯一解釋。
12. 正確例句、新延伸例句、錯誤例句有冇分清。
13. 今次場景需要嘅語言功能，有冇足夠支持。
16. 未有資料嘅部分有冇誠實留白，而唔係硬填。
17. 單一場景反應有冇被錯誤升格成跨全劇穩定核心。
18. Scene Speaking State 有冇獨立存放，而唔係塞入 Voice Bible。
19. 文件結構有冇大致跟隨 `templates/character_voice_bible_template.md`，或者清楚交代合理偏離原因。

## Verdict Levels
- `VOICE_EVIDENCE_INSUFFICIENT`
- `VOICE_CANDIDATES_READY_FOR_AUTHOR_REVIEW`
- `VOICE_READY_FOR_EXPLORATORY_DIALOGUE`
- `VOICE_READY_FOR_POLISHED_DIALOGUE`
- `VOICE_READY_FOR_RECORDING`

## Output
用簡單語言先講結論，再保存完整表：

```md
VOICE EVIDENCE REVIEW
Character:
Requested Dialogue Level:
Achieved Voice Level:
Strongly Supported Rules:
Reasonable Inferences:
Author Decisions Needed:
Unsupported or Overstated Claims:
Global-vs-Scene Structure Problems:
Period-Mapping Problems:
Relationship-Voice Gaps:
Safe To Use Now:
Must Not Use Yet:
Required Next Work:
```

## Hard Rules
- 篇幅長唔等於證據充足。
- 只有一兩句台詞時，不可批準全時期 recording-ready voice。
- `VOICE_CANDIDATE` 未經作者確認，不可升做 canon rule。
- 審核結果要提供畀 `story-dialogue-readiness-gate`。
