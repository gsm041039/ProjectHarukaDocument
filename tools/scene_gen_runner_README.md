# scene_gen_runner

Python runner for Project Haruka ChatGPT web scene-image generation.

What it does:

- parses scene blocks from `IMAGE_PROMPT_SPEC_FINAL_72_COMPLETE.md`
- resolves every `Reference Images` filename to an actual repo path
- builds the final prompt from:
  - full scene block
  - fixed anime screenshot template from `SCENE_IMAGE_GENERATION_PROTOCOL.md`
- opens ChatGPT web in a normal browser session
- uploads all refs
- submits the prompt
- polls DOM for result / retry / policy-block state
- downloads the generated image
- copies the image into `art/ConceptArt/Scene/`
- writes a JSON state file under `tmp/`

Prerequisites:

1. Python 3.10+
2. Install Playwright:

   `pip install -r tools/scene_gen_runner_requirements.txt`

3. Install browser support:

   `python -m playwright install chrome`

4. Use one of these browser/session modes:

   - preferred: connect to an already logged-in Chrome via CDP
   - or: launch a persistent Chrome profile with `--user-data-dir`

Recommended first run:

```powershell
python tools/scene_gen_runner.py inspect 15
python tools/scene_gen_runner.py run 15 --dry-run
```

Example: connect to an existing Chrome debug session:

```powershell
python tools/scene_gen_runner.py run 15 --connect-cdp-url http://127.0.0.1:9222
```

Example: use a dedicated persistent profile:

```powershell
python tools/scene_gen_runner.py run 15 --user-data-dir D:\tmp\haruka-chatgpt-profile
```

Useful commands:

```powershell
python tools/scene_gen_runner.py inspect 15 16-18
python tools/scene_gen_runner.py build-prompt 15 --output tmp\scene15_prompt.txt
python tools/scene_gen_runner.py run 15-18 --dry-run
python tools/scene_gen_runner.py run 15-18 --max-tabs 5 --user-data-dir D:\tmp\haruka-chatgpt-profile
```

Current implementation notes:

- the runner now supports a real scheduler:
  - it prepares up to `--max-tabs` scenes into active generating tabs
  - then polls only due tabs
  - downloads completed scenes and backfills the next pending scene
- UI-changing actions are still serialized in one browser session; only generation wait is parallel
- upload failure that looks like the known homepage chooser bug is treated as `BROKEN_HOMEPAGE_UPLOAD_TAB`
- `預覽` / `Mapped characters to settings` are treated as intermediate state, not success
- generated-image download uses fallback matching:
  1. `生成圖像：...`
  2. `已產生圖像`
  3. last loaded large image candidate
- on explicit generation failure with a visible retry button, the runner retries in-page first

Other-PC setup checklist:

1. Copy repo to the other PC.
2. Open PowerShell in repo root.
3. Install dependency:

   `pip install -r tools/scene_gen_runner_requirements.txt`

4. Install Playwright browser support:

   `python -m playwright install chrome`

5. Choose one login mode:

   - easier to debug: persistent profile
   - cleaner reuse of an already open Chrome: CDP

Persistent-profile first run:

```powershell
python tools/scene_gen_runner.py inspect 15
python tools/scene_gen_runner.py run 15 --dry-run
python tools/scene_gen_runner.py run 15 --user-data-dir D:\tmp\haruka-chatgpt-profile --max-tabs 1
```

After that, batch run:

```powershell
python tools/scene_gen_runner.py run 15-18 --user-data-dir D:\tmp\haruka-chatgpt-profile --max-tabs 5
```

CDP mode first run:

1. Start Chrome manually with remote debugging:

   `chrome.exe --remote-debugging-port=9222 --user-data-dir=D:\tmp\haruka-chatgpt-debug`

2. Log into ChatGPT in that Chrome window.
3. Run:

```powershell
python tools/scene_gen_runner.py run 15 --connect-cdp-url http://127.0.0.1:9222 --max-tabs 1
python tools/scene_gen_runner.py run 15-18 --connect-cdp-url http://127.0.0.1:9222 --max-tabs 5
```

Known limits:

- this depends on the live ChatGPT web DOM and labels, so selectors may need maintenance
- first-time login / MFA still depends on your ChatGPT account state
- policy-block fallback prompt rewriting is not automated yet
