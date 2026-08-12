#!/usr/bin/env python3
"""Build deterministic prompt files with the mandatory anime settei block.

This script deliberately does not perform browser automation, login, network I/O,
image generation, or Canon writeback. It prepares a prompt pack for an existing
generation workflow.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Any


def load_fixed_block() -> str:
    here = Path(__file__).resolve().parents[1]
    source = here / "references" / "anime-settei-prompt.md"
    text = source.read_text(encoding="utf-8")
    start = text.index("```text") + len("```text\n")
    end = text.index("\n```", start)
    return text[start:end].strip()


def read_variants(path: Path) -> list[dict[str, Any]]:
    data = json.loads(path.read_text(encoding="utf-8"))
    if isinstance(data, dict):
        data = data.get("variants")
    if not isinstance(data, list) or not data:
        raise ValueError("Input must be a non-empty JSON array or {\"variants\": [...]}")
    result: list[dict[str, Any]] = []
    for index, item in enumerate(data, start=1):
        if not isinstance(item, dict):
            raise ValueError(f"Variant {index} must be an object")
        dominant = str(item.get("dominant_change", "")).strip()
        if not dominant:
            raise ValueError(f"Variant {index} is missing dominant_change")
        result.append(item)
    return result


def render_variant(item: dict[str, Any], fixed: str) -> str:
    def lines(key: str) -> str:
        value = item.get(key, "")
        if isinstance(value, list):
            return "\n".join(f"- {v}" for v in value)
        return str(value).strip()

    header = [
        "PROJECT HARUKA — STAGE × WOUND CHARACTER DESIGN VARIANT",
        f"Variant ID: {lines('id') or 'UNNAMED'}",
        f"Reference image: {lines('reference_image') or 'NOT_SPECIFIED'}",
        "",
        "IDENTITY LOCKS:",
        lines("identity_locks") or "preserve the established character identity and costume concept",
        "",
        "ONE DOMINANT VISUAL CHANGE:",
        lines("dominant_change"),
        "",
        "STAGE × WOUND EXPRESSION:",
        lines("stage_wound_expression") or "make the theme visible through concrete form, performance, or controlled rupture",
        "",
        "PRESERVE:",
        lines("preserve") or "preserve existing identity, face, eyes, hairstyle silhouette, role, and main color blocking",
        "",
        "FORBIDDEN CHANGES:",
        lines("forbidden") or "do not redesign the character or add unrelated decoration",
        "",
        fixed,
    ]
    negative = lines("negative_prompt")
    if negative:
        header.extend(["", "ADDITIONAL NEGATIVE PROMPT:", negative])
    return "\n".join(header).strip() + "\n"


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("input_json", type=Path)
    parser.add_argument("output_dir", type=Path)
    args = parser.parse_args()

    variants = read_variants(args.input_json)
    fixed = load_fixed_block()
    args.output_dir.mkdir(parents=True, exist_ok=True)
    manifest = []
    for index, item in enumerate(variants, start=1):
        variant_id = str(item.get("id") or f"V-{index:03d}")
        output = args.output_dir / f"{variant_id}.txt"
        output.write_text(render_variant(item, fixed), encoding="utf-8")
        manifest.append({"id": variant_id, "prompt_file": str(output), "dominant_change": item["dominant_change"]})
    (args.output_dir / "PROMPT_MANIFEST.json").write_text(
        json.dumps({"variants": manifest, "generation_executed": False}, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(json.dumps({"output_dir": str(args.output_dir), "variants": len(manifest), "generation_executed": False}, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

