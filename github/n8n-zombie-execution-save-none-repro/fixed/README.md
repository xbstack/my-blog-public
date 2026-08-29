# Fixed case

No upstream fix was linked from n8n issue #37040 when this reproduction was recorded on 2026-08-29.

This directory intentionally does not invent a patched workflow or database edit. Once n8n publishes a fix, add the fixed release/commit here and rerun the same A/B workflow pair.

A temporary operational mitigation is to keep successful production execution saving enabled if your retention/privacy requirements allow it, then monitor storage/pruning until the upstream execution-finalization bug is fixed and verified on your deployment.

Do **not** manually flip `execution_entity.finished` or `status` in production as a generic fix: that bypasses n8n's lifecycle and may leave execution data, pruning, metrics, or related rows inconsistent.
