# Canon Search Index Spec

## Purpose

`codebase-memory-mcp` can help with repo retrieval, but Project Haruka also needs a narrative-specific canon search index.

This file defines an optional lightweight index that helps AI locate narrative terms without repeatedly reading huge files.

Recommended location:

```text
canon/_working/CANON_SEARCH_INDEX.jsonl
```

This is not a replacement for canon files. It is a retrieval aid.

## Why this exists

Markdown narrative canon uses many aliases. A code graph tool may know file structure, but not that:

```text
情緒毒品 ≈ 情緒藥物 ≈ 情緒抑制劑 ≈ 情緒麻醉 ≈ EMB 副產品
```

The index gives AI a stable map of terms, aliases, source files, and usage notes.

## JSONL schema

Each line is one entry:

```json
{
  "term_id": "TERM-EMO-DRUG-0001",
  "term": "情緒毒品",
  "aliases": ["情緒藥物", "情緒抑制劑", "情緒管理藥", "情緒麻醉"],
  "category": "WORLD_RULE_OR_INSTITUTIONAL_MECHANIC",
  "canonical_status": "CANON | CANDIDATE | DEPRECATED | HISTORICAL | UNKNOWN",
  "source_refs": [
    {
      "file": "canon/01_world_rules_and_costs.md",
      "section": "...",
      "note": "..."
    }
  ],
  "related_terms": ["EMB", "情緒病毒", "夜區", "地下市場"],
  "usage_notes": "Use this when discussing Act III crisis and emotion-control infrastructure.",
  "do_not_assume": ["Do not assume public anti-magical-girl phase unless timeline source supports it."],
  "last_verified": "YYYY-MM-DD",
  "confidence": "HIGH | MEDIUM | LOW"
}
```

## Categories

```text
CHARACTER
CHARACTER_BACKSTORY
WORLD_RULE
ORGANIZATION
DEVICE
MEDICINE_OR_DRUG
LOCATION
EVENT
TIMELINE_NODE
VISUAL_MOTIF
THEME
DIRECTING_RULE
DIALOGUE_VOICE
QUESTION_OR_DECISION
```

## Required fields

```text
term_id
term
aliases
category
canonical_status
source_refs
related_terms
usage_notes
confidence
```

## Status definitions

```text
CANON: current accepted canon.
CANDIDATE: author-interested or proposed but not approved.
DEPRECATED: old version no longer active.
HISTORICAL: old discussion / report, not current canon by itself.
UNKNOWN: indexed as known term but status unresolved.
```

## How AI should use it

Before declaring a gap:

```text
1. Search CANON_SEARCH_INDEX for term and aliases.
2. Use source_refs to read the original source if needed.
3. If index has CANDIDATE or HISTORICAL status, do not treat as canon.
4. If index has CANON status, use it as retrieval pointer, not as final proof unless source_refs confirm.
```

## Minimal initial index entries

Start with high-risk terms likely to cause repeated retrieval failure:

```text
情緒毒品 / 情緒藥物 / 情緒抑制劑
EMB / 情緒管理局
維多利亞之淚
心匣
情緒病毒
集體潛意識 L2
守恆定律
希望之力
魔法屍骸
夜區 / 日區
無臉執行官
秋穗退場
操被迫報串
操母親 / 活體人偶
```

## Example: 情緒毒品

```json
{
  "term_id": "TERM-MED-0001",
  "term": "情緒毒品",
  "aliases": ["情緒藥物", "情緒抑制劑", "情緒管理藥", "情緒麻醉", "毒品"],
  "category": "MEDICINE_OR_DRUG",
  "canonical_status": "UNKNOWN",
  "source_refs": [],
  "related_terms": ["EMB", "情緒管理局", "情緒病毒", "地下市場", "夜區"],
  "usage_notes": "High-priority retrieval term. Do source recovery before treating as missing.",
  "do_not_assume": ["Do not assume it is new canon without searching world rules, glossary, outline, and working files."],
  "last_verified": "",
  "confidence": "LOW"
}
```

## Relation to codebase-memory-mcp

Use both if available:

```text
codebase-memory-mcp: repo-level retrieval / file discovery / structural awareness.
CANON_SEARCH_INDEX: narrative term map / aliases / canon status.
story-source-recovery-gate: decides whether support is sufficient for current reasoning.
```

Do not rely on codebase memory alone for canon truth.
