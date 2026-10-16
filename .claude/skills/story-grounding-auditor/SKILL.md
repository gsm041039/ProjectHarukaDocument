# story-grounding-auditor — Evidence, Assumptions, and Trope Leakage

## Purpose
Check whether claims are grounded without killing creative momentum.

## No Free Personality Rule
AI may not silently add core personality, values, trauma, motives, fears, habits, or speech patterns as canon. Such claims must be supported or labeled.

## Evidence Levels
- `CANON_SUPPORTED`
- `STRONGLY_INFERRED`
- `WEAKLY_INFERRED`
- `AUTHOR_INTERESTED_CANDIDATE`
- `CREATIVE_HYPOTHESIS`
- `UNSUPPORTED_DO_NOT_USE`

## Hypothesis Promotion Ladder

```text
UNSUPPORTED
→ CREATIVE_HYPOTHESIS
→ AUTHOR_INTERESTED_CANDIDATE
→ NEEDS_CANON_SUPPORT
→ APPROVED_CANDIDATE
→ CANON_WRITEBACK_READY
```

When the user says an idea has potential, upgrade to `AUTHOR_INTERESTED_CANDIDATE`, not canon.

## Anti-Passivity Rule
Do not block all creativity because evidence is incomplete. Instead:
- give the grounded part
- label the hypothesis
- propose the minimum viable version
- list what to check

## Trope Leakage Alerts
Flag generic explanations when unsupported:
- “佢怕失去”
- “佢內心孤獨”
- “佢渴望被理解”
- “佢控制慾強”
- “佢其實害怕親密”

Ask: which event / relationship / behavior pattern supports this?

## Existing Canon Impact Check
For any new candidate setting, check impact on:
- character arc
- act structure
- reveal timing
- world rule
- antagonist weight
- existing events
- scene lab usefulness

## Output Style
In compact discussion, output only decision-relevant audit notes:

```md
Grounding Notes:
- Canon-supported: ...
- Candidate assumption: ...
- Risk: ...
```

Do not dump a full audit unless requested.

## Workbench Choices
<!-- Haruka Workbench 讀呢段做成一撳掣。格式：- <emoji> <短標籤> | <開場指示>。改呢段唔影響 skill 其他規則。 -->
- 🔍 查證據等級 | 檢查{goal}入面每個講法屬 canon 支持、推斷定創作假設，標清楚；只審唔改 canon。
- 🚩 查套路滲漏 | 專門搵冇根據嘅套路解釋（例如「佢怕失去」），逐個問有咩事件或行為支持。
- 🌱 出最小可行版 | 唔好因證據唔夠就卡死：講有根據嘅部分、標假設、提最小可行版本同要查咩。
- 📊 查對現有影響 | 檢查新候選設定對角色弧、結構、揭示時機、世界規則嘅影響；要定嘅位用選項卡問我。
