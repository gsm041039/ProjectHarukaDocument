# LAYER_MANIFEST

人手維護嘅「文件屬邊層、由邊份衍生、係咪現行版本」表。Haruka Workbench 文件地圖用佢疊加自動抽出嘅連結（自動抽唔到「衍生」關係，要靠呢度）。
規則：產出新版本／writeback／某份檔降為 Reference 嗰陣，順手改呢個表（見 story-writeback、story-run-workspace-manager）。
層（layer）只用：`baseline`／`act`／`sequence`／`beat`／`scene`／`dialogue`／`state`／`other`。現行（current）只用：`CURRENT`／`REFERENCE`／`SUPERSEDED`。
冇列入嘅檔，網頁會用檔名估層，並標「未登記」。

## Files

| 檔案 | 層 | 父層（逗號分隔） | 現行 |
|---|---|---|---|
| `canon/05_story_outline_canon.md` | baseline | — | CURRENT |
| `canon/_working/story_construction/FULL_STORY_ROUGH_OUTLINE_V2.md` | baseline | `canon/05_story_outline_canon.md` | CURRENT |
| `canon/_working/story_construction/ACT_I_OUTLINE.md` | act | `canon/_working/story_construction/FULL_STORY_ROUGH_OUTLINE_V2.md` | CURRENT |
| `canon/_working/story_construction/ACT_II_OUTLINE.md` | act | `canon/_working/story_construction/FULL_STORY_ROUGH_OUTLINE_V2.md` | CURRENT |
| `canon/_working/story_construction/ACT_III_OUTLINE.md` | act | `canon/_working/story_construction/FULL_STORY_ROUGH_OUTLINE_V2.md` | CURRENT |
| `canon/_working/story_construction/ACT_I_SEQUENCE_MAP.md` | sequence | `canon/_working/story_construction/ACT_I_OUTLINE.md` | CURRENT |
| `canon/_working/story_construction/ACT_I_BEAT_SHEET.md` | beat | `canon/_working/story_construction/ACT_I_OUTLINE.md` | CURRENT |
| `canon/_working/demo_pilot/SCOPE_AND_CUT_LIST.md` | sequence | `canon/_working/story_construction/ACT_I_SEQUENCE_MAP.md` | CURRENT |
| `canon/_working/demo_pilot/DEMO_BEAT_LAYER.md` | beat | `canon/_working/demo_pilot/SCOPE_AND_CUT_LIST.md` | SUPERSEDED |
| `canon/_working/demo_pilot/BEAT_LAYER_V3_2.md` | beat | `canon/_working/demo_pilot/SCOPE_AND_CUT_LIST.md` | REFERENCE |
| `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V4.md` | beat | `canon/_working/demo_pilot/beat_rederive_v4/DERIVATION_V4.md` | SUPERSEDED |
| `canon/_working/demo_pilot/beat_rederive_v4/DERIVATION_V4.md` | beat | `canon/_working/story_construction/ACT_I_BEAT_SHEET.md`, `canon/_working/demo_pilot/SCOPE_AND_CUT_LIST.md` | CURRENT |
| `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V4_1.md` | beat | `canon/_working/demo_pilot/beat_rederive_v4/DERIVATION_V4.md` | CURRENT |
| `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V5_BATCH1.md` | beat | `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V4_1.md` | SUPERSEDED |
| `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V5_BATCH1_R1.md` | beat | `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V4_1.md` | SUPERSEDED |
| `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V5_BATCH1_R2.md` | beat | `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V4_1.md` | CURRENT |
| `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V5_BATCH2.md` | beat | `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V4_1.md` | CURRENT |
| `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V5_BATCH3_M2toM5.md` | beat | `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V4_1.md` | SUPERSEDED |
| `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V5_BATCH4_B1toB4.md` | beat | `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V4_1.md` | CURRENT |
| `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V5_BATCH5_B5toB8.md` | beat | `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V4_1.md` | CURRENT |
| `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V5_BATCH6_M2toM5.md` | beat | `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V4_1.md` | CURRENT |
| `canon/_working/character-voice-workshops/misao_voice_discovery.md` | dialogue | `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V4_1.md` | CURRENT |
| `canon/_working/character-voice-bibles/misao_voice_bible_DRAFT.md` | dialogue | `canon/_working/character-voice-workshops/misao_voice_discovery.md` | CURRENT |
| `canon/_working/character-voice-workshops/shion_voice_discovery.md` | dialogue | `canon/_working/demo_pilot/beat_rederive_v4/BEAT_LAYER_V4_1.md` | CURRENT |
| `canon/_working/story_construction/MISAO_NAMELESS_BOY_CARRIERS_DRAFT.md` | other | `canon/03_characters/ayakomoji_misao.md` | CURRENT |
| `canon/_working/story_construction/MISAO_NAMELESS_BOY_PRINCIPLES_SUMMARY.md` | other | `canon/_working/story_construction/MISAO_NAMELESS_BOY_CARRIERS_DRAFT.md` | CURRENT |
| `canon/_working/author_voice/AUTHOR_UTTERANCES.jsonl` | other | — | CURRENT |
| `canon/_working/author_voice/AUTHOR_LENS.md` | other | `canon/_working/author_voice/AUTHOR_UTTERANCES.jsonl` | CURRENT |
| `canon/_working/demo_pilot/VOICE_EVIDENCE_REGRADE_T009.md` | other | `canon/_working/demo_pilot/DEMO_PILOT_TRACKER.md` | CURRENT |
