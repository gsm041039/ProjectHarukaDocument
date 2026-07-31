Use the `story-orchestrator` skill as the only visible entry point.

Request:
$ARGUMENTS

Default mode:
- COLLABORATIVE_DEVELOPMENT
- TRACE_COMPACT
- plain Cantonese / simple language when the user writes Cantonese

Required behaviour:
- scan existing material first;
- explain the useful missing preparation in plain language;
- ask whether to start that preparation before doing the full target draft;
- for a new dialogue scene, design where the whole sequence starts and ends first;
- when a reusable character voice bible is missing, first scan canon evidence, then offer two choices: auto-build a first version and refine together, or build it together from scratch;
- every material voice rule must carry an evidence class and story-period scope;
- invoke story-character-voice-evidence-auditor before polished dialogue;
- automatically complete low-risk research, recovery and detail records;
- stop at major creative choices to co-design with the author;
- save full decision records in temp files;
- show a compact Mini Log listing the specialist skills actually used;
- never assume the user understands beat IDs, event IDs, file numbers or production jargon;
- do not jump directly from source recovery to a full dialogue script.

Holistic supervision route:
- when the user explicitly asks for macro/systemic review or asks to deepen/professionalize their question, invoke `story-holistic-supervisor`;
- preserve the original question, scan local evidence, then professionally reframe it;
- dynamically call relevant specialists;
- specialists must return findings to the supervisor and must not independently question the author;
- ask at most three high-impact author questions;
- do not make holistic supervision an automatic gate.
