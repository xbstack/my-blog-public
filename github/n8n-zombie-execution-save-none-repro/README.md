# n8n 2.36.6 zombie execution when successful production executions are not saved

Minimal reproduction for n8n issue [#37040](https://github.com/n8n-io/n8n/issues/37040).

## What this reproduces

With the same n8n 2.36.6 instance, database and three-node webhook workflow:

- `saveDataSuccessExecution: "none"` leaves an `execution_entity` row with `finished = 0`, `status = 'running'`, and `stoppedAt = NULL` after the webhook returns HTTP 200.
- `saveDataSuccessExecution: "all"` finishes normally with `finished = 1`, `status = 'success'`, and a non-null `stoppedAt`.

The public upstream report used PostgreSQL. The XBSTACK reproduction below also reproduces the state leak on SQLite, which narrows the problem away from being PostgreSQL-only. This does **not** prove that every n8n 2.36.6 deployment is affected.

## Environment

- n8n: `2.36.6`
- image: `n8nio/n8n:2.36.6`
- host: macOS + Docker Desktop
- container architecture: ARM64 Docker Desktop Linux VM
- database used for this reproduction: SQLite
- execution mode: regular/main
- trigger: production Webhook

## Files

```text
repro/
  workflow-save-none.json
  workflow-save-all-control.json
logs/
  sqlite-result.txt
fixed/
  README.md
version-matrix.md
```

## Reproduction

Create a fresh n8n 2.36.6 instance and import `repro/workflow-save-none.json`. Publish/activate the workflow, then call:

```bash
curl http://127.0.0.1:5678/webhook/xbstack-zombie-save-none
```

After the workflow has completed, inspect `execution_entity`:

```sql
SELECT id, workflowId, finished, status, mode, startedAt, stoppedAt
FROM execution_entity
ORDER BY id DESC;
```

The XBSTACK run produced:

```text
xbstackZombie2366  finished=0  status=running  stoppedAt=NULL
```

Run the control workflow with `saveDataSuccessExecution: "all"`:

```bash
curl http://127.0.0.1:5678/webhook/xbstack-zombie-save-all-control
```

The control produced:

```text
xbstackZombieControl2366  finished=1  status=success  stoppedAt=2026-08-29 02:10:30.826
```

See `logs/sqlite-result.txt` for the exact local query output.

## Important boundary

At the time this reproduction was recorded, n8n issue #37040 was open and had no linked fix/release. Do not patch production databases by manually flipping `finished` or `status` without understanding n8n's execution lifecycle and pruning behavior. A temporary operational mitigation is to keep successful production execution saving enabled if your storage/privacy policy permits it, while monitoring the upstream issue and validating the eventual fix on your exact deployment.

Full analysis: https://www.xbstack.com/ai/n8n-zombie-execution-save-none/?utm_source=github&utm_medium=referral&utm_campaign=n8n_zombie_execution&utm_content=repository_readme
