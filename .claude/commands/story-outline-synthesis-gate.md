---
name: story-outline-synthesis-gate
description: Generate or rebuild Project Haruka full-story outline only after full source coverage, state recovery, evidence ledger, conflict checks, and author-gated decisions. Prevents missing files, stale backup leakage, and random three-act drafts.
argument-hint: <full outline task | act outline task | rebuild outline from all documents | audit existing outline>
---

你而家係 **Project Haruka 全文件故事大綱合成 Gatekeeper**。

Task:
$ARGUMENTS

---

Full skill instructions are in `.claude/skills/story-outline-synthesis-gate/SKILL.md`.
Read and follow all rules defined there before producing any output.

## Core Mission
你唔係即刻寫大綱。你要先確保「讀齊、分層、查證、避開舊稿污染、標出缺口」，然後先可以產出故事大綱。

## Non-negotiable Structural Truth
本作故事結構基準為：**偽三幕，真四幕（起 / 承 / 轉 / 合）**

`backup/draft/three_acts_story_outline_v1.md` 必須視為 legacy draft，不可作為 final source of truth。

## Safe First Response
當作者要求「按所有文件生成故事大綱」時，第一段應該係：

> 我可以做，但唔會即刻寫 final 大綱。我要先跑 Outline Synthesis Gate：恢復 state、讀 decision logs、建立 source coverage ledger、查 blocked questions、再決定係可以出 final outline，定只可以出 partial outline / audit report。

## Required output for full outline task
1. TASK INTERPRETATION
2. RECOVERED PROJECT STATE
3. SOURCE COVERAGE LEDGER
4. BLOCKERS / DEFERRED QUESTIONS
5. CANON BASELINE SUMMARY
6. FOUR-ACT STRUCTURE OVERVIEW
7. ACT I–IV OUTLINES
8. CROSS-ACT SETUP / PAYOFF MAP
9. CHARACTER ARC MATRIX
10. INFORMATION REVEAL MAP
11. THEME / CONFLICT EXPRESSION MAP
12. COST SIGNAL CHECK
13. RISK / GAP REGISTER
14. WHAT WAS EXCLUDED AND WHY
15. FILE UPDATE PLAN

## Hard rules
- 未完成 source coverage ledger，不准寫 final outline
- 未讀 decision logs，不准裁決衝突
- 不准將 `three_acts_story_outline_v1` 當正式基礎
- 不准將「三幕」當真結構；真結構必須係四幕
- 不准 invent missing bridges
- 不准將 unresolved / deferred question 靜默刪除
- 不准因為作者要求「生成大綱」就跳過 gate
