from __future__ import annotations

import argparse
import json
import re
import shutil
import sys
import time
from dataclasses import asdict, dataclass, field
from pathlib import Path
from typing import Iterable, Optional


REPO_ROOT = Path(__file__).resolve().parents[1]
SCENE_SPEC_PATH = REPO_ROOT / "IMAGE_PROMPT_SPEC_FINAL_72_COMPLETE.md"
PROTOCOL_PATH = REPO_ROOT / "tools" / "SCENE_IMAGE_GENERATION_PROTOCOL.md"
CHARACTER_ROOT = REPO_ROOT / "art" / "ConceptArt" / "Characters"
SCENE_OUTPUT_ROOT = REPO_ROOT / "art" / "ConceptArt" / "Scene"
DEFAULT_RUN_STATE_PATH = REPO_ROOT / "tmp" / "scene_gen_runner_state.json"

SCENE_HEADER_RE = re.compile(r"^## 圖(?P<number>\d+)：", re.MULTILINE)
OUTPUT_FILENAME_RE = re.compile(
    r"\*\*建議輸出文件名\*\*：\s*`(?P<filename>[^`]+)`"
)
REFERENCE_LINE_RE = re.compile(
    r"^\s*-\s*(?P<label>[^：:]+)\s*[：:]\s*`(?P<filename>[^`]+)`\s*$",
    re.MULTILINE,
)

COMPOSER_SELECTORS = [
    "#prompt-textarea",
    "textarea[placeholder]",
    "textarea",
    '[contenteditable="true"]',
]

PLUS_BUTTON_NAMES = [
    "新增檔案和更多內容",
    "加入檔案及更多內容",
    "附加相片及檔案",
    "Attach",
    "Add photos & files",
]

PLUS_BUTTON_TEST_ID = "composer-plus-btn"

UPLOAD_MENU_NAMES = [
    "新增照片和檔案",
    "從電腦上傳",
    "從電腦上載",
    "Upload from computer",
    "Add photos & files",
]

SEND_BUTTON_NAMES = [
    "傳送提示詞",
    "傳送訊息",
    "Send message",
    "Send prompt",
]

SEND_BUTTON_TEST_ID = "send-button"

DOWNLOAD_BUTTON_NAMES = [
    "儲存",
    "下載",
    "Save",
    "Download",
]

STOP_BUTTON_NAMES = [
    "停止生成",
    "Stop generating",
    "停止回應",
    "Stop response",
]

RETRY_BUTTON_NAMES = [
    "重試",
    "Retry",
]

GENERATING_TEXT_PATTERNS = [
    "正在產生圖像",
    "Creating image",
    "Generating",
]

INTERMEDIATE_TEXT_PATTERNS = [
    "預覽",
    "Mapped characters to settings",
]

FAILURE_TEXT_PATTERNS = [
    "圖片生成失敗",
    "Image generation failed",
]

APOLOGY_MARKERS = [
    "抱歉",
    "很遺憾",
    "sorry",
]

APOLOGY_REASON_MARKERS = [
    "出錯",
    "未能成功",
    "未能產生",
    "無法產生",
    "無法生成",
    "失敗",
    "unable to",
    "couldn't generate",
    "could not generate",
    "failed to generate",
]

RATE_LIMIT_MODAL_SELECTOR = '[data-testid="modal-conversation-history-rate-limit"], [id="modal-conversation-history-rate-limit"]'

RATE_LIMIT_DISMISS_BUTTON_NAMES = [
    "知道了",
    "Got it",
    "OK",
]

POLICY_BLOCK_TEXT_PATTERNS = [
    "內容政策",
    "content policy",
    "edit your prompt",
    "修改提示詞",
]


class SceneRunnerError(RuntimeError):
    pass


@dataclass
class ReferenceImage:
    label: str
    requested_filename: str
    resolved_path: Optional[Path]
    exists: bool
    notes: list[str] = field(default_factory=list)

    def to_dict(self) -> dict:
        payload = asdict(self)
        payload["resolved_path"] = str(self.resolved_path) if self.resolved_path else None
        return payload


@dataclass
class SceneSpec:
    scene_number: int
    title_line: str
    scene_block: str
    output_filename: str
    references: list[ReferenceImage]
    scene_summary: str

    def to_dict(self) -> dict:
        return {
            "scene_number": self.scene_number,
            "title_line": self.title_line,
            "output_filename": self.output_filename,
            "scene_summary": self.scene_summary,
            "references": [ref.to_dict() for ref in self.references],
        }


@dataclass
class SceneJob:
    spec: SceneSpec
    prompt: str
    final_output_path: Path
    status: str = "pending"
    latest_url: Optional[str] = None
    tab_id: Optional[str] = None
    downloaded_file: Optional[Path] = None
    sent_at: Optional[float] = None
    next_check_at: Optional[float] = None
    attempts: int = 0
    last_error: Optional[str] = None
    notes: list[str] = field(default_factory=list)

    def to_dict(self) -> dict:
        return {
            "spec": self.spec.to_dict(),
            "final_output_path": str(self.final_output_path),
            "status": self.status,
            "latest_url": self.latest_url,
            "tab_id": self.tab_id,
            "downloaded_file": str(self.downloaded_file) if self.downloaded_file else None,
            "sent_at": self.sent_at,
            "next_check_at": self.next_check_at,
            "attempts": self.attempts,
            "last_error": self.last_error,
            "notes": self.notes,
        }


@dataclass
class ActiveRun:
    job: SceneJob
    page: object
    started_at: float


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def write_json(path: Path, payload: dict) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def emit_text(text: str) -> None:
    try:
        sys.stdout.write(text + "\n")
    except UnicodeEncodeError:
        safe_text = text.encode("ascii", errors="backslashreplace").decode("ascii")
        sys.stdout.write(safe_text + "\n")


def mark_scene_has_image(output_filename: str, notes: list[str]) -> None:
    try:
        spec_text = read_text(SCENE_SPEC_PATH)
    except OSError as exc:
        notes.append(f"overview update skipped: cannot read spec file ({exc})")
        return

    pattern = re.compile(
        r"(\|\s*" + re.escape(output_filename) + r"\s*\|\s*)❌ 未有圖(\s*\|)"
    )
    updated_text, count = pattern.subn(r"\1✅ 有圖\2", spec_text, count=1)
    if count == 0:
        notes.append(f"overview update skipped: no unchecked row found for {output_filename}")
        return

    SCENE_SPEC_PATH.write_text(updated_text, encoding="utf-8")
    notes.append(f"overview table updated to has-image for {output_filename}")


def normalize_whitespace(text: str) -> str:
    return re.sub(r"\s+", " ", text).strip()


def extract_scene_block(source_text: str, scene_number: int) -> tuple[str, str]:
    matches = list(SCENE_HEADER_RE.finditer(source_text))
    for index, match in enumerate(matches):
        if int(match.group("number")) != scene_number:
            continue
        start = match.start()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(source_text)
        block = source_text[start:end].strip()
        title_line = match.group(0)
        return block, title_line
    raise SceneRunnerError(f"Scene {scene_number} not found in {SCENE_SPEC_PATH}")


def extract_output_filename(scene_block: str, scene_number: int) -> str:
    match = OUTPUT_FILENAME_RE.search(scene_block)
    if not match:
        raise SceneRunnerError(f"Scene {scene_number} has no output filename")
    return match.group("filename").strip()


def extract_reference_lines(scene_block: str) -> list[tuple[str, str]]:
    marker = "**Reference Images**"
    marker_index = scene_block.find(marker)
    if marker_index == -1:
        return []

    remainder = scene_block[marker_index:]
    lines = remainder.splitlines()[1:]
    capture: list[str] = []
    for line in lines:
        stripped = line.strip()
        if stripped.startswith("### ") or stripped.startswith("## ") or stripped.startswith("**詳細核心描述**"):
            break
        capture.append(line)

    section_text = "\n".join(capture)
    return [
        (match.group("label").strip(), match.group("filename").strip())
        for match in REFERENCE_LINE_RE.finditer(section_text)
    ]


def infer_summary_from_scene_block(scene_block: str) -> str:
    prioritized_headers = [
        "### 簡化描述",
        "### 簡化核心描述",
        "### 圖片說明",
        "**詳細核心描述**",
    ]

    for header in prioritized_headers:
        summary = extract_section_text(scene_block, header)
        if summary:
            return first_sentences(summary, limit=3)

    stripped = normalize_whitespace(scene_block)
    return first_sentences(stripped, limit=2)


def extract_section_text(scene_block: str, header: str) -> str:
    start = scene_block.find(header)
    if start == -1:
        return ""
    lines = scene_block[start:].splitlines()[1:]
    captured: list[str] = []
    for line in lines:
        stripped = line.strip()
        if stripped.startswith("### ") or stripped.startswith("## "):
            break
        if stripped.startswith("**") and stripped.endswith("**") and stripped != header:
            break
        if stripped.startswith("**劇情位置**") or stripped.startswith("**Reference Images**"):
            break
        captured.append(line)
    return normalize_whitespace("\n".join(captured))


def first_sentences(text: str, limit: int) -> str:
    chunks = re.split(r"(?<=[。！？.!?])\s+", normalize_whitespace(text))
    chunks = [chunk for chunk in chunks if chunk]
    if not chunks:
        return ""
    return " ".join(chunks[:limit])


def resolve_reference_path(filename: str) -> tuple[Optional[Path], list[str]]:
    notes: list[str] = []
    direct_hits = list(CHARACTER_ROOT.rglob(filename))
    if len(direct_hits) == 1:
        return direct_hits[0], notes
    if len(direct_hits) > 1:
        notes.append(f"multiple matches found; using first: {direct_hits[0]}")
        return direct_hits[0], notes

    character_match = re.match(r"ConceptArt_(?P<character>[^_]+)_", filename)
    if character_match:
        character_name = character_match.group("character")
        candidate_dir = CHARACTER_ROOT / character_name
        if candidate_dir.exists():
            alt_candidates = sorted(candidate_dir.glob("ConceptArt_*.png"))
            for candidate in alt_candidates:
                if "_BAK" not in str(candidate):
                    notes.append(
                        f"fallback replacement used because requested file was missing: {candidate.name}"
                    )
                    return candidate, notes

    return None, notes


def extract_anime_template(protocol_text: str) -> str:
    anchor = "**(B) 固定風格模板**"
    anchor_index = protocol_text.find(anchor)
    if anchor_index == -1:
        raise SceneRunnerError("Anime screenshot template anchor not found in protocol")

    start = protocol_text.find("```", anchor_index)
    if start == -1:
        raise SceneRunnerError("Template code fence start not found in protocol")
    end = protocol_text.find("```", start + 3)
    if end == -1:
        raise SceneRunnerError("Template code fence end not found in protocol")
    return protocol_text[start + 3 : end].strip()


def build_prompt(scene_block: str, template: str, scene_summary: str) -> str:
    return f"{scene_block}\n\n{template.replace('[SCENE]', scene_summary)}".strip()


def load_scene_spec(scene_number: int, source_text: str, protocol_text: str) -> SceneSpec:
    scene_block, title_line = extract_scene_block(source_text, scene_number)
    output_filename = extract_output_filename(scene_block, scene_number)
    reference_lines = extract_reference_lines(scene_block)
    scene_summary = infer_summary_from_scene_block(scene_block)

    references: list[ReferenceImage] = []
    for label, filename in reference_lines:
        resolved_path, notes = resolve_reference_path(filename)
        references.append(
            ReferenceImage(
                label=label,
                requested_filename=filename,
                resolved_path=resolved_path,
                exists=resolved_path is not None and resolved_path.exists(),
                notes=notes,
            )
        )

    return SceneSpec(
        scene_number=scene_number,
        title_line=title_line,
        scene_block=scene_block,
        output_filename=output_filename,
        references=references,
        scene_summary=scene_summary,
    )


def build_jobs(scene_numbers: Iterable[int]) -> list[SceneJob]:
    source_text = read_text(SCENE_SPEC_PATH)
    protocol_text = read_text(PROTOCOL_PATH)
    template = extract_anime_template(protocol_text)

    jobs: list[SceneJob] = []
    for scene_number in scene_numbers:
        spec = load_scene_spec(scene_number, source_text, protocol_text)
        prompt = build_prompt(spec.scene_block, template, spec.scene_summary)
        jobs.append(
            SceneJob(
                spec=spec,
                prompt=prompt,
                final_output_path=SCENE_OUTPUT_ROOT / spec.output_filename,
            )
        )
    return jobs


def assert_all_references_resolved(job: SceneJob) -> None:
    missing = [
        ref.requested_filename
        for ref in job.spec.references
        if not ref.exists or ref.resolved_path is None
    ]
    if missing:
        raise SceneRunnerError(
            f"Scene {job.spec.scene_number} has unresolved references: {', '.join(missing)}"
        )


def require_playwright():
    try:
        from playwright.sync_api import TimeoutError as PlaywrightTimeoutError
        from playwright.sync_api import sync_playwright
    except ImportError as exc:
        raise SceneRunnerError(
            "Playwright is not installed. Install it first, e.g. `pip install playwright` "
            "then `python -m playwright install chrome`."
        ) from exc
    return sync_playwright, PlaywrightTimeoutError


def first_visible_locator(page, names: list[str], role: str = "button"):
    for name in names:
        locator = page.get_by_role(role, name=name, exact=True)
        if locator.count() > 0:
            return locator.first
    return None


def first_visible_selector(page, selectors: list[str]):
    for selector in selectors:
        locator = page.locator(selector)
        if locator.count() > 0 and locator.first.is_visible():
            return locator.first
    return None


class ChatGPTImageAutomation:
    def __init__(
        self,
        downloads_dir: Path,
        state_path: Path,
        chatgpt_url: str,
        headless: bool,
        user_data_dir: Optional[Path],
        chrome_executable: Optional[Path],
        connect_cdp_url: Optional[str],
    ) -> None:
        self.downloads_dir = downloads_dir
        self.state_path = state_path
        self.chatgpt_url = chatgpt_url
        self.headless = headless
        self.user_data_dir = user_data_dir
        self.chrome_executable = chrome_executable
        self.connect_cdp_url = connect_cdp_url

    def run(self, jobs: list[SceneJob], max_tabs: int) -> None:
        sync_playwright, PlaywrightTimeoutError = require_playwright()
        self.PlaywrightTimeoutError = PlaywrightTimeoutError

        self.downloads_dir.mkdir(parents=True, exist_ok=True)
        self.state_path.parent.mkdir(parents=True, exist_ok=True)

        with sync_playwright() as playwright:
            browser_or_context, pages = self._open_browser(playwright)
            try:
                if hasattr(browser_or_context, "new_page"):
                    context = browser_or_context
                else:
                    context = browser_or_context.contexts[0]

                self._run_scheduler(context, jobs, max_tabs=max_tabs)
            finally:
                try:
                    browser_or_context.close()
                except Exception:
                    pass

    def _run_scheduler(self, context, jobs: list[SceneJob], max_tabs: int) -> None:
        pending_jobs = list(jobs)
        active_runs: list[ActiveRun] = []
        finished_jobs: list[SceneJob] = []

        while pending_jobs or active_runs:
            while pending_jobs and len(active_runs) < max_tabs:
                job = pending_jobs.pop(0)
                try:
                    active_run = self._start_job_until_generating(context, job)
                    active_runs.append(active_run)
                except Exception as exc:
                    job.status = "failed"
                    job.last_error = str(exc)
                    job.notes.append(f"failed to start: {exc}")
                    emit_text(
                        f"WARNING: Scene {job.spec.scene_number} could not be started: {exc} "
                        "(continuing with remaining scenes)"
                    )
                self._write_state(jobs)
                if pending_jobs and len(active_runs) < max_tabs:
                    time.sleep(4)

            if not active_runs:
                break

            due_runs = [
                active_run
                for active_run in active_runs
                if active_run.job.next_check_at is None or time.time() >= active_run.job.next_check_at
            ]
            if not due_runs:
                next_due = min(
                    active_run.job.next_check_at for active_run in active_runs if active_run.job.next_check_at is not None
                )
                time.sleep(max(1, min(5, next_due - time.time())))
                continue

            for active_run in list(due_runs):
                result = self._advance_active_run(active_run)
                self._write_state(jobs)
                if result == "completed":
                    active_runs.remove(active_run)
                    finished_jobs.append(active_run.job)
                    self._safe_close_page(active_run.page)
                elif result == "failed":
                    active_runs.remove(active_run)
                    self._safe_close_page(active_run.page)
                    emit_text(
                        f"WARNING: Scene {active_run.job.spec.scene_number} failed: "
                        f"{active_run.job.last_error or active_run.job.status} (continuing with remaining scenes)"
                    )

    def _start_job_until_generating(self, context, job: SceneJob) -> ActiveRun:
        assert_all_references_resolved(job)

        last_error: Optional[str] = None
        for attempt in range(1, 3):
            page = context.new_page()
            job.attempts = attempt
            job.tab_id = str(id(page))
            try:
                job.status = "opening_tab"
                self._ensure_homepage_ready(page)

                job.status = "uploading_refs"
                self._upload_references(page, job)

                job.status = "pasting_prompt"
                self._fill_prompt(page, job.prompt)

                job.status = "submitting"
                self._submit_prompt(page, job)
                job.latest_url = page.url
                job.sent_at = time.time()
                job.next_check_at = job.sent_at + 25
                job.status = "waiting_result"
                job.notes.append(f"scene entered generating on attempt {attempt}")
                return ActiveRun(job=job, page=page, started_at=time.time())
            except (SceneRunnerError, self.PlaywrightTimeoutError) as exc:
                last_error = str(exc)
                job.last_error = last_error
                job.notes.append(f"attempt {attempt} failed before generating: {last_error}")
                self._safe_close_page(page)
                if attempt < 2:
                    time.sleep(5)
                    continue
                raise SceneRunnerError(last_error)

        raise SceneRunnerError(last_error or f"Scene {job.spec.scene_number} failed before generating")

    def _advance_active_run(self, active_run: ActiveRun) -> str:
        job = active_run.job
        page = active_run.page

        if job.sent_at and time.time() - job.sent_at > 900:
            job.status = "failed"
            job.last_error = "Timed out waiting for generated image result"
            return "failed"

        status = self._poll_generation_state(page)
        job.latest_url = status["url"]
        job.notes.append(
            f"poll generating={status['generating']} intermediate={status['intermediate']} failed={status['failed']} image={status['generated_image_found']} width={status['natural_width']}"
        )

        if status["policy_blocked"]:
            job.status = "policy_blocked"
            job.last_error = "Prompt was blocked by content policy"
            return "failed"

        if status["failed"] and status["retry_available"]:
            job.status = "retrying"
            self._click_retry(page)
            job.next_check_at = time.time() + 10
            return "active"

        if status["failed"]:
            job.status = "failed"
            job.last_error = "Image generation failed without retry button"
            return "failed"

        if status.get("apology_failure"):
            job.status = "failed"
            job.last_error = f"Assistant reported failure: {status.get('last_assistant_text', '').strip()}"
            job.notes.append(job.last_error)
            return "failed"

        if status["result_ready"]:
            job.status = "downloading"
            downloaded_path = self._download_generated_image(page, job)
            final_path = self._copy_to_repo(downloaded_path, job.final_output_path)
            job.downloaded_file = final_path
            mark_scene_has_image(job.spec.output_filename, job.notes)
            job.status = "completed"
            job.latest_url = page.url
            job.next_check_at = None
            return "completed"

        job.status = "waiting_result"
        job.next_check_at = time.time() + 15
        return "active"

    def _safe_close_page(self, page) -> None:
        try:
            page.close()
        except Exception:
            pass

    def _open_browser(self, playwright):
        launch_kwargs = {
            "headless": self.headless,
            "downloads_path": str(self.downloads_dir),
        }

        if self.connect_cdp_url:
            browser = playwright.chromium.connect_over_cdp(self.connect_cdp_url)
            if not browser.contexts:
                browser.new_context(accept_downloads=True)
            return browser, []

        if self.user_data_dir:
            context = playwright.chromium.launch_persistent_context(
                user_data_dir=str(self.user_data_dir),
                channel="chrome" if not self.chrome_executable else None,
                executable_path=str(self.chrome_executable) if self.chrome_executable else None,
                accept_downloads=True,
                **launch_kwargs,
            )
            return context, context.pages

        browser = playwright.chromium.launch(
            channel="chrome" if not self.chrome_executable else None,
            executable_path=str(self.chrome_executable) if self.chrome_executable else None,
            **launch_kwargs,
        )
        context = browser.new_context(accept_downloads=True)
        return context, context.pages

    def _dismiss_rate_limit_modal(self, page) -> bool:
        try:
            modal = page.locator(RATE_LIMIT_MODAL_SELECTOR)
            if modal.count() == 0:
                return False
        except Exception:
            return False
        try:
            dismiss = first_visible_locator(page, RATE_LIMIT_DISMISS_BUTTON_NAMES)
            if dismiss is not None:
                dismiss.click()
            else:
                page.keyboard.press("Escape")
        except Exception:
            pass
        try:
            page.wait_for_selector(RATE_LIMIT_MODAL_SELECTOR, state="hidden", timeout=5000)
        except Exception:
            pass
        return True

    def _ensure_homepage_ready(self, page) -> None:
        page.goto(self.chatgpt_url, wait_until="domcontentloaded")
        page.wait_for_load_state("networkidle", timeout=30000)
        self._dismiss_rate_limit_modal(page)

        composer = first_visible_selector(page, COMPOSER_SELECTORS)
        if composer is None:
            raise SceneRunnerError("Composer not found. Login may be required.")

    def _upload_references(self, page, job: SceneJob) -> None:
        self._dismiss_rate_limit_modal(page)
        plus_button = None
        test_id_locator = page.get_by_test_id(PLUS_BUTTON_TEST_ID)
        if test_id_locator.count() > 0:
            plus_button = test_id_locator.first
        if plus_button is None:
            plus_button = first_visible_locator(page, PLUS_BUTTON_NAMES)
        if plus_button is None:
            raise SceneRunnerError("Could not find plus/upload button")
        plus_button.click()

        upload_button = first_visible_locator(page, UPLOAD_MENU_NAMES, role="menuitem")
        if upload_button is None:
            upload_button = first_visible_locator(page, UPLOAD_MENU_NAMES)
        if upload_button is None:
            for name in UPLOAD_MENU_NAMES:
                text_locator = page.get_by_text(name, exact=False)
                if text_locator.count() > 0:
                    upload_button = text_locator.first
                    break
        if upload_button is None:
            raise SceneRunnerError("Could not find upload from computer action")

        file_paths = [str(ref.resolved_path) for ref in job.spec.references if ref.resolved_path]

        try:
            with page.expect_file_chooser(timeout=5000) as fc_info:
                upload_button.click()
            file_chooser = fc_info.value
            file_chooser.set_files(file_paths)
        except self.PlaywrightTimeoutError as exc:
            raise SceneRunnerError(
                "Upload chooser did not fire. Treat this as BROKEN_HOMEPAGE_UPLOAD_TAB and retry in a brand-new tab."
            ) from exc

        self._wait_for_attachment_count(page, len(file_paths))

    def _count_attachments(self, page) -> int:
        return page.evaluate(
            """
            () => {
              const composer = document.querySelector('#prompt-textarea') || document.querySelector('[contenteditable="true"]');
              const scope = composer ? (composer.closest('form') || composer.closest('[class*="composer"]') || composer.parentElement) : document;
              const candidates = [
                ...scope.querySelectorAll('img[src^="blob:"], img[alt*="uploaded"], img[alt*="上載"]'),
                ...scope.querySelectorAll('[data-testid*="attachment"], [aria-label*="附件"], [aria-label*="attachment"]')
              ];
              return candidates.length;
            }
            """
        )

    def _wait_for_attachment_count(self, page, expected_count: int) -> None:
        deadline = time.time() + 60
        while time.time() < deadline:
            if self._count_attachments(page) >= expected_count:
                return
            time.sleep(2)
        raise SceneRunnerError(
            f"Reference upload verification failed. Expected {expected_count} attachments."
        )

    def _fill_prompt(self, page, prompt: str) -> None:
        composer = first_visible_selector(page, COMPOSER_SELECTORS)
        if composer is None:
            raise SceneRunnerError("Composer not found while filling prompt")

        composer.click()
        try:
            composer.fill("")
            composer.fill(prompt)
        except Exception:
            page.keyboard.press("Control+A")
            page.keyboard.press("Delete")
            page.keyboard.insert_text(prompt)

        entered_length = page.evaluate(
            """
            (selectorList) => {
              for (const selector of selectorList) {
                const el = document.querySelector(selector);
                if (!el) continue;
                const value = el.value ?? el.innerText ?? '';
                if (value) return value.length;
              }
              return 0;
            }
            """,
            COMPOSER_SELECTORS,
        )
        if entered_length < max(100, len(prompt) // 2):
            raise SceneRunnerError("Prompt fill verification failed")

    def _submit_prompt(self, page, job: SceneJob) -> None:
        expected_refs = len([ref for ref in job.spec.references if ref.resolved_path])
        if expected_refs > 0:
            actual_refs = self._count_attachments(page)
            if actual_refs < expected_refs:
                raise SceneRunnerError(
                    f"Attachment count mismatch before send: expected {expected_refs}, found {actual_refs}. "
                    "Refusing to send without all reference images."
                )

        self._dismiss_rate_limit_modal(page)
        send_button = None
        test_id_locator = page.get_by_test_id(SEND_BUTTON_TEST_ID)
        if test_id_locator.count() > 0:
            send_button = test_id_locator.first
        if send_button is None:
            send_button = first_visible_locator(page, SEND_BUTTON_NAMES)
        if send_button is None:
            raise SceneRunnerError("Send button not found")
        send_button.click()

        deadline = time.time() + 20
        while time.time() < deadline:
            evidence = self._collect_submit_evidence(page)
            if evidence["score"] >= 2:
                job.latest_url = evidence["url"]
                return
            time.sleep(1)
        raise SceneRunnerError("Prompt submit could not be verified")

    def _collect_submit_evidence(self, page) -> dict:
        url = page.url
        textbox_empty = page.evaluate(
            """
            (selectorList) => {
              for (const selector of selectorList) {
                const el = document.querySelector(selector);
                if (!el) continue;
                const value = el.value ?? el.innerText ?? '';
                if (value.length === 0) return true;
              }
              return false;
            }
            """,
            COMPOSER_SELECTORS,
        )
        has_stop = any(page.get_by_role("button", name=name, exact=True).count() > 0 for name in STOP_BUTTON_NAMES)
        route_changed = "/c/" in url
        score = sum([1 if textbox_empty else 0, 1 if has_stop else 0, 1 if route_changed else 0])
        return {
            "score": score,
            "url": url,
            "textbox_empty": textbox_empty,
            "has_stop": has_stop,
            "route_changed": route_changed,
        }

    def _poll_generation_state(self, page) -> dict:
        return page.evaluate(
            """
            ({ generatingTexts, intermediateTexts, failureTexts, policyTexts, stopNames, apologyMarkers, apologyReasonMarkers }) => {
              const bodyText = document.body?.innerText || '';
              const generating = generatingTexts.some(text => bodyText.includes(text)) ||
                stopNames.some(name => {
                  const btn = [...document.querySelectorAll('button')].find(b => (b.innerText || b.getAttribute('aria-label') || '').trim() === name);
                  return !!btn;
                });
              const intermediate = intermediateTexts.some(text => bodyText.includes(text));
              const failed = failureTexts.some(text => bodyText.includes(text));
              const policyBlocked = policyTexts.some(text => bodyText.toLowerCase().includes(text.toLowerCase()));
              const retryAvailable = [...document.querySelectorAll('button')].some(b => ['重試', 'Retry'].includes((b.innerText || b.getAttribute('aria-label') || '').trim()));

              const assistantMessages = [...document.querySelectorAll('[data-message-author-role="assistant"]')];
              const lastAssistantText = assistantMessages.length
                ? (assistantMessages[assistantMessages.length - 1].innerText || '')
                : '';
              const lastAssistantLower = lastAssistantText.toLowerCase();
              const apologyFailure = !generating &&
                apologyMarkers.some(m => lastAssistantText.includes(m) || lastAssistantLower.includes(m.toLowerCase())) &&
                apologyReasonMarkers.some(m => lastAssistantText.includes(m) || lastAssistantLower.includes(m.toLowerCase()));

              const imageCandidates = [...document.querySelectorAll('img')].map((img, index) => ({
                index,
                alt: img.getAttribute('alt') || '',
                naturalWidth: img.naturalWidth || 0,
                naturalHeight: img.naturalHeight || 0,
                width: img.clientWidth || 0,
                height: img.clientHeight || 0,
                src: img.currentSrc || img.src || ''
              }));

              const generatedCandidates = imageCandidates.filter(img => {
                if (img.naturalWidth <= 0) return false;
                if (img.width < 256 && img.height < 256) return false;
                const alt = img.alt || '';
                if (alt.startsWith('生成圖像：')) return true;
                if (alt === '已產生圖像') return true;
                if (!alt && img.width >= 256 && img.height >= 256) return true;
                return false;
              });

              const best = generatedCandidates[generatedCandidates.length - 1] || null;
              const resultReady = !!best && !generating;

              return {
                url: window.location.href,
                generating,
                intermediate,
                failed,
                policy_blocked: policyBlocked,
                retry_available: retryAvailable,
                generated_image_found: !!best,
                natural_width: best ? best.naturalWidth : 0,
                result_ready: resultReady,
                apology_failure: apologyFailure,
                last_assistant_text: lastAssistantText.slice(0, 800),
              };
            }
            """,
            {
                "generatingTexts": GENERATING_TEXT_PATTERNS,
                "intermediateTexts": INTERMEDIATE_TEXT_PATTERNS,
                "failureTexts": FAILURE_TEXT_PATTERNS,
                "policyTexts": POLICY_BLOCK_TEXT_PATTERNS,
                "stopNames": STOP_BUTTON_NAMES,
                "apologyMarkers": APOLOGY_MARKERS,
                "apologyReasonMarkers": APOLOGY_REASON_MARKERS,
            },
        )

    def _click_retry(self, page) -> None:
        retry = first_visible_locator(page, RETRY_BUTTON_NAMES)
        if retry is None:
            raise SceneRunnerError("Retry was expected but not found")
        retry.click()

    def _download_generated_image(self, page, job: SceneJob) -> Path:
        before = {item.name for item in self.downloads_dir.glob("*")}

        image_locator = page.locator(
            'img[alt^="生成圖像："], img[alt="已產生圖像"], img'
        )
        count = image_locator.count()
        if count == 0:
            raise SceneRunnerError("No image elements found for download")

        target = None
        for index in range(count - 1, -1, -1):
            candidate = image_locator.nth(index)
            box = candidate.bounding_box()
            if not box:
                continue
            if box["width"] >= 256 or box["height"] >= 256:
                target = candidate
                break
        if target is None:
            raise SceneRunnerError("No generated image candidate matched download rules")

        target.click()

        download_button = None
        deadline = time.time() + 10
        while time.time() < deadline:
            download_button = first_visible_locator(page, DOWNLOAD_BUTTON_NAMES)
            if download_button is not None:
                break
            page.wait_for_timeout(500)
        if download_button is None:
            raise SceneRunnerError("Download button not found")

        with page.expect_download(timeout=20000) as download_info:
            download_button.click()
        download = download_info.value
        suggested_name = download.suggested_filename
        destination = self.downloads_dir / suggested_name
        download.save_as(str(destination))

        deadline = time.time() + 30
        while time.time() < deadline:
            current = {item.name for item in self.downloads_dir.glob("*")}
            new_names = sorted(current - before)
            if destination.exists():
                return destination
            if new_names:
                candidate = self.downloads_dir / new_names[-1]
                if candidate.exists() and candidate.suffix.lower() == ".png":
                    return candidate
            time.sleep(1)

        raise SceneRunnerError("Downloaded file could not be verified")

    def _copy_to_repo(self, downloaded_path: Path, final_output_path: Path) -> Path:
        final_output_path.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(downloaded_path, final_output_path)
        return final_output_path

    def _write_state(self, jobs: list[SceneJob]) -> None:
        write_json(
            self.state_path,
            {
                "updated_at": time.strftime("%Y-%m-%d %H:%M:%S"),
                "jobs": [job.to_dict() for job in jobs],
            },
        )


def parse_scene_range(values: list[str]) -> list[int]:
    scene_numbers: list[int] = []
    for value in values:
        if "-" in value:
            start_text, end_text = value.split("-", 1)
            start = int(start_text)
            end = int(end_text)
            step = 1 if end >= start else -1
            scene_numbers.extend(list(range(start, end + step, step)))
        else:
            scene_numbers.append(int(value))
    seen: set[int] = set()
    ordered: list[int] = []
    for number in scene_numbers:
        if number not in seen:
            seen.add(number)
            ordered.append(number)
    return ordered


def build_arg_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Automate Project Haruka ChatGPT web scene image generation."
    )
    subparsers = parser.add_subparsers(dest="command", required=True)

    inspect_parser = subparsers.add_parser("inspect", help="Parse scenes and print resolved metadata")
    inspect_parser.add_argument("scenes", nargs="+", help="Scene numbers or ranges, e.g. 15 16-18")

    prompt_parser = subparsers.add_parser("build-prompt", help="Build final prompt text for one scene")
    prompt_parser.add_argument("scene", type=int)
    prompt_parser.add_argument("--output", type=Path, help="Optional output file path")

    run_parser = subparsers.add_parser("run", help="Run browser automation")
    run_parser.add_argument("scenes", nargs="+", help="Scene numbers or ranges, e.g. 15 16-18")
    run_parser.add_argument("--downloads-dir", type=Path, default=REPO_ROOT / "tmp" / "scene_downloads")
    run_parser.add_argument("--state-path", type=Path, default=DEFAULT_RUN_STATE_PATH)
    run_parser.add_argument("--chatgpt-url", default="https://chatgpt.com/")
    run_parser.add_argument("--max-tabs", type=int, default=5)
    run_parser.add_argument("--headless", action="store_true")
    run_parser.add_argument("--user-data-dir", type=Path)
    run_parser.add_argument("--chrome-executable", type=Path)
    run_parser.add_argument("--connect-cdp-url")
    run_parser.add_argument("--dry-run", action="store_true")

    return parser


def command_inspect(scene_values: list[str]) -> int:
    jobs = build_jobs(parse_scene_range(scene_values))
    payload = {"jobs": [job.to_dict() for job in jobs]}
    emit_text(json.dumps(payload, ensure_ascii=False, indent=2))
    return 0


def command_build_prompt(scene_number: int, output: Optional[Path]) -> int:
    jobs = build_jobs([scene_number])
    prompt = jobs[0].prompt
    if output:
        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(prompt, encoding="utf-8")
    else:
        emit_text(prompt)
    return 0


def command_run(args) -> int:
    jobs = build_jobs(parse_scene_range(args.scenes))
    if args.dry_run:
        payload = {
            "jobs": [job.to_dict() for job in jobs],
            "downloads_dir": str(args.downloads_dir),
            "state_path": str(args.state_path),
        }
        emit_text(json.dumps(payload, ensure_ascii=False, indent=2))
        return 0

    automation = ChatGPTImageAutomation(
        downloads_dir=args.downloads_dir,
        state_path=args.state_path,
        chatgpt_url=args.chatgpt_url,
        headless=args.headless,
        user_data_dir=args.user_data_dir,
        chrome_executable=args.chrome_executable,
        connect_cdp_url=args.connect_cdp_url,
    )
    automation.run(jobs, max_tabs=max(1, min(args.max_tabs, len(jobs))))
    emit_text(json.dumps({"jobs": [job.to_dict() for job in jobs]}, ensure_ascii=False, indent=2))
    return 0


def main(argv: Optional[list[str]] = None) -> int:
    parser = build_arg_parser()
    args = parser.parse_args(argv)
    try:
        if args.command == "inspect":
            return command_inspect(args.scenes)
        if args.command == "build-prompt":
            return command_build_prompt(args.scene, args.output)
        if args.command == "run":
            return command_run(args)
        parser.error(f"Unknown command: {args.command}")
    except SceneRunnerError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
