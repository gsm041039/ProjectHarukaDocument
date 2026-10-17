"""UserPromptSubmit hook: append what the author typed to canon/_working/author_voice/AUTHOR_UTTERANCES.jsonl.

The log lives in the repo so it follows the author between computers (local chat transcripts do not).
Web Workbench conversations run through the Agent SDK and are logged by the server itself (only text the
author typed, not button prompts), so SDK entrypoints are skipped here. Never blocks or prints anything.
"""
import json, os, sys, time
from pathlib import Path

try:
    data = json.loads(sys.stdin.buffer.read().decode("utf-8") or "{}")
    text = str(data.get("prompt") or "").strip()
    src = os.environ.get("CLAUDE_CODE_ENTRYPOINT", "cli")
    if text and not src.startswith("sdk"):
        log = Path(__file__).resolve().parents[2] / "canon/_working/author_voice/AUTHOR_UTTERANCES.jsonl"
        log.parent.mkdir(parents=True, exist_ok=True)
        row = {"t": time.strftime("%Y-%m-%dT%H:%M:%S%z"), "src": src, "session": data.get("session_id", ""), "text": text}
        with open(log, "a", encoding="utf-8") as f:
            f.write(json.dumps(row, ensure_ascii=False) + "\n")
except Exception:
    pass
