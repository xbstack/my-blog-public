# Diagnostic fixed case

Run:

```bash
node ../repro.cjs v233 --patch-display-options
```

The diagnostic case clones the n8n 2.33.4 Baserow nested filter definition and changes only the `timezone` dependency key from `../operator` to `operator`. The same `getNodeParameters()` call then resolves successfully.

This proves the failing dependency path is sufficient to trigger the isolated resolver regression. It does **not** mean editing installed n8n package files is an official or recommended production fix. Until n8n publishes an upstream fix, the safer recovery for an affected production instance is to restore a known-good version after taking a backup and validating the workflow state.
