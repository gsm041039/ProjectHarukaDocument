BATCH 3 README
===============

This batch contains the back-half of the workflow.

Files in this batch:
1. P4_Atom_Candidate_Extraction.txt
2. P5_Author_Gate.txt
3. P6_Canon_Writeback_QA.txt
4. S2_Resume_Recovery.txt
5. ACTIVATE_BATCH3.txt

Purpose of Batch 3:
- P4 extracts candidate atoms only. It must NOT finalize canon, dedupe, or conflict resolution.
- P5 is the mandatory author gate. Any meaningful judgment about atom finalization, duplicate handling, conflict resolution, canon status, ownership, or structural placement must be asked to the author first.
- P6 performs write-back only after the author has answered the blocking questions or an explicit canon decision already exists in the decision log.
- S2 defines how to resume safely after compression, interruption, or a new session.

Critical principle:
Candidate extraction is not canonization.
Question generation is not canon decision.
Write-back is forbidden until the author gate has been cleared.

Recommended order:
1. Batch 1 installed and active
2. Batch 2 active if needed for Story Room or Intake/Register work
3. Use P4
4. Use P5
5. Wait for author answers
6. Use P6
7. Use S2 whenever resuming

Do not skip stages.
Do not silently merge.
Do not silently delete.
Do not silently resolve.
