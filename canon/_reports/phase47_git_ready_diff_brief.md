# Phase47 Git-Ready Diff Brief

## Intended Commit Scope (Recommended)
- Canon docs and audit reports only.
- Exclude unrelated workspace/editor/assets/backup churn.

## Canon Core Files (status lines)
```text
 M canon/00_series_bible.md
 M canon/01_world_rules_and_costs.md
 M canon/02_glossary.md
 M canon/03_characters/airi.md
 M canon/03_characters/akiho.md
 M canon/03_characters/antagonist.md
 M canon/03_characters/ayakomoji_sou.md
 M canon/03_characters/haruka.md
 M canon/03_characters/iroha.md
 M canon/03_characters/iwakura_akane.md
 M canon/03_characters/ko_hikaru.md
 M canon/03_characters/miyako.md
 M canon/03_characters/rin.md
 M canon/03_characters/saku.md
 D canon/03_characters/supporting/emperor.md
 D canon/03_characters/supporting/hanako.md
 D canon/03_characters/supporting/kiryu_ken.md
 D canon/03_characters/supporting/manager.md
 D canon/03_characters/supporting/sayo.md
 M canon/03_characters/yu.md
 M canon/04_timeline_canon.md
 M canon/05_story_outline_canon.md
 M canon/06_visual_bible.md
 D canon/07_entities/heart_container_device.md
 D canon/07_entities/magical_corpse.md
 D canon/07_entities/organizations.md
 D canon/08_directing_playbook.md
 M canon/10_gameplay_bible.md
 M canon/99_decision_log.md
?? canon/03_character_index.md
?? canon/07_entities_and_devices.md
```

## Report / Checkpoint Files (status lines)
```text
?? canon/_reports/phase0_duplicate_clusters.md
?? canon/_reports/phase0_entities_index.md
?? canon/_reports/phase0_inventory.md
?? canon/_reports/phase10_character_file_list.txt
?? canon/_reports/phase10_character_oldlink_hits_after.txt
?? canon/_reports/phase10_character_owner_hits.txt
?? canon/_reports/phase10_character_owner_hits_after.txt
?? canon/_reports/phase10_character_owner_markers_after.txt
?? canon/_reports/phase10_character_ownership_fullpass.md
?? canon/_reports/phase10_scope_line_hits.txt
?? canon/_reports/phase11_auto_fullpass_report.md
?? canon/_reports/phase11_fact_style_probe_before.txt
?? canon/_reports/phase11_non_owner_definition_hits_after.txt
?? canon/_reports/phase11_non_owner_definition_hits_before.txt
?? canon/_reports/phase11_non_owner_definition_hits_final.txt
?? canon/_reports/phase11_oldlink_after.txt
?? canon/_reports/phase11_oldlink_before.txt
?? canon/_reports/phase11_oldlink_final.txt
?? canon/_reports/phase11_owner_marker_hits.txt
?? canon/_reports/phase12_link_anchor_full_audit.md
?? canon/_reports/phase12b_link_anchor_full_audit.md
?? canon/_reports/phase13_backup_heading_gap_candidates.md
?? canon/_reports/phase13_backup_heading_gap_candidates.txt
?? canon/_reports/phase13_canon_gap_fill_round1.md
?? canon/_reports/phase13_link_fullcheck.csv
?? canon/_reports/phase13_sensitive_scene_trace.txt
?? canon/_reports/phase14_navigation_rebuild.md
?? canon/_reports/phase15_gameplay_hardening.md
?? canon/_reports/phase16_world_rules_hardening.md
?? canon/_reports/phase17_entities_lowtech_hardening.md
?? canon/_reports/phase18_gameplay_lowtech_alignment.md
?? canon/_reports/phase19_outline_timeline_hard_separation.md
?? canon/_reports/phase1_conflict_list.md
?? canon/_reports/phase1_questions_for_author.md
?? canon/_reports/phase1_resolution_proposals.md
?? canon/_reports/phase20_character_psych_compression_round1.md
?? canon/_reports/phase21_character_psych_compression_round2.md
?? canon/_reports/phase22_character_link_audit_fullcheck.md
?? canon/_reports/phase23_character_psych_compression_round3.md
?? canon/_reports/phase24_character_index_alignment.md
?? canon/_reports/phase25_character_semantic_dedup_batch_a.md
?? canon/_reports/phase25_character_semantic_dedup_batch_b.md
?? canon/_reports/phase26_entities_ownership_compression_round1.md
?? canon/_reports/phase26_ownership_compression_round2.md
?? canon/_reports/phase26_visual_ownership_compression_round1.md
?? canon/_reports/phase27_owner_boundary_probe_core_set.md
?? canon/_reports/phase28_navigation_global_structure_audit.md
?? canon/_reports/phase29_core_owner_compression_and_full_audit.md
?? canon/_reports/phase30_timeline_rules_glossary_boundary.md
?? canon/_reports/phase31_rules_glossary_semantic_dedup.md
?? canon/_reports/phase32_core_owner_compression_round3.md
?? canon/_reports/phase33_core_owner_compression_round4.md
?? canon/_reports/phase34_core_owner_compression_round5.md
?? canon/_reports/phase35_round6_residual_narrative_compression.md
?? canon/_reports/phase36_round7_glossary_lowtech_boundary.md
?? canon/_reports/phase37_owner_boundary_deep_pass_full.md
?? canon/_reports/phase38_paragraph_risk_scan.csv
?? canon/_reports/phase39_owner_boundary_deep_pass.md
?? canon/_reports/phase39_semantic_owner_scan.csv
?? canon/_reports/phase3_audit.md
?? canon/_reports/phase40_owner_boundary_deep_pass.md
?? canon/_reports/phase41_owner_boundary_deep_pass.md
?? canon/_reports/phase42_owner_boundary_deep_pass.md
?? canon/_reports/phase43_ownership_matrix.csv
?? canon/_reports/phase43_ownership_matrix.md
?? canon/_reports/phase44_deepp7_targeted_cleanup.md
?? canon/_reports/phase44_ownership_matrix_after_deepp7.csv
?? canon/_reports/phase45_deepp8_cleanup.md
?? canon/_reports/phase45_ownership_matrix_after_deepp8.csv
?? canon/_reports/phase45_ownership_matrix_after_deepp8.md
?? canon/_reports/phase46_deepp9_baseline_snapshot.md
?? canon/_reports/phase46_ownership_matrix_baseline.csv
?? canon/_reports/phase47_release_candidate_bundle.md
?? canon/_reports/phase4_no_dup_audit.md
?? canon/_reports/phase5_strict_ownership_audit.md
?? canon/_reports/phase6_mechanical_compression_audit.md
?? canon/_reports/phase7_paragraph_ownership_audit.md
?? canon/_reports/phase8_definition_hits.txt
?? canon/_reports/phase8_definition_hits_after.txt
?? canon/_reports/phase8_definition_hits_non_owner_after.txt
?? canon/_reports/phase8_file_line_inventory.txt
?? canon/_reports/phase8_full_sweep_report.md
?? canon/_reports/phase8_oldlink_hits.txt
?? canon/_reports/phase8_oldlink_hits_after.txt
?? canon/_reports/phase8_outline_timeline_overlap_probe.txt
?? canon/_reports/phase8_ownership_markers.txt
?? canon/_reports/phase9_diff_snapshot.txt
?? canon/_reports/phase9_oldlink_hits.txt
?? canon/_reports/phase9_outline_fact_markers_after.txt
?? canon/_reports/phase9_outline_numbered.txt
?? canon/_reports/phase9_outline_owner_markers.txt
?? canon/_reports/phase9_outline_timeline_separation_report.md
?? canon/_reports/phase9_timeline_numbered.txt
?? canon/_reports/source_coverage_matrix.md
?? canon/_reports/source_gap_candidates.md
?? canon/_reports/source_read_manifest.md
```

## Suggested Staging Pattern
```powershell
git add canon/00_series_bible.md canon/01_world_rules_and_costs.md canon/02_glossary.md canon/03_character_index.md canon/03_characters/*.md canon/04_timeline_canon.md canon/05_story_outline_canon.md canon/06_visual_bible.md canon/07_entities_and_devices.md canon/10_gameplay_bible.md canon/99_decision_log.md
git add canon/_reports/phase44_deepp7_targeted_cleanup.md canon/_reports/phase44_ownership_matrix_after_deepp7.csv canon/_reports/phase45_deepp8_cleanup.md canon/_reports/phase45_ownership_matrix_after_deepp8.csv canon/_reports/phase45_ownership_matrix_after_deepp8.md canon/_reports/phase46_ownership_matrix_baseline.csv canon/_reports/phase46_deepp9_baseline_snapshot.md canon/_reports/phase47_release_candidate_bundle.md canon/_reports/phase47_git_ready_diff_brief.md
git add docs_v2/_reports/_checkpoint.md
```

## Notes
- This brief is intentionally scoped to RC ownership work; do not stage unrelated deletions/assets unless intended.
