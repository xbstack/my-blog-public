# Version matrix

| Case | n8n | Database | saveDataSuccessExecution | Result |
|---|---|---|---|---|
| XBSTACK reproduction | 2.36.6 | SQLite | `none` | **Reproduced**: `finished=0`, `status=running`, `stoppedAt=NULL` after HTTP 200 |
| XBSTACK control | 2.36.6 | SQLite | `all` | Normal: `finished=1`, `status=success`, `stoppedAt` populated |
| Upstream issue #37040 | 2.36.6 | PostgreSQL | success storage disabled | Reporter reproduced zombie execution; issue open on 2026-08-29 |

## Not tested locally

- n8n 2.36.6 + PostgreSQL: Docker Hub repeatedly timed out while pulling `postgres:16-alpine`, so XBSTACK did not claim a local PostgreSQL reproduction.
- Earlier/later n8n releases: not part of this first A/B run.
- Queue mode and multi-main: not tested.
- High concurrency: not required to reproduce the SQLite case.

The matrix must be updated when n8n publishes an upstream fix or a release that explicitly closes issue #37040.
