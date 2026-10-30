# n8n Baserow parameter dependency regression repro

This experiment isolates the Baserow node parameter tree used by the dependency sets declared by n8n 2.32.7, 2.33.4/2.33.5 and 2.34.2, then feeds the nested filter fields into `n8n-workflow`'s real `getNodeParameters()` resolver.

## What it proves

- n8n 2.32.7 resolves the Baserow filter fields successfully.
- n8n 2.33.4 reproduces the exact error: `Could not resolve parameter dependencies. Max iterations reached!`.
- n8n 2.33.5 stable declares the same `n8n-workflow@2.33.1` and `n8n-nodes-base@2.33.1` package pair as 2.33.4, so the same deterministic resolver reproduction applies to 2.33.5.
- n8n 2.34.2 pre-release declares `n8n-workflow@2.34.1` and `n8n-nodes-base@2.34.1`; that package set still reproduces the same error in this test.
- The affected Baserow definition includes a `timezone` child parameter whose `displayOptions` depends on `../operator`.
- Rewriting that dependency locally to same-level `operator` makes the minimal resolver test pass. This is diagnostic evidence, not an official n8n production fix.

## Install

```bash
cd v232 && npm install
cd ../v233 && npm install
cd ../v234 && npm install
```

## Run

```bash
node repro.cjs v232
node repro.cjs v233
node repro.cjs v233 --patch-display-options
node repro.cjs v234
```

Expected outcomes:

- `v232`: `RESULT: OK`
- `v233`: exact `Max iterations reached` error
- `v233 --patch-display-options`: `RESULT: OK`
- `v234`: exact `Max iterations reached` error

## Version mapping

The `n8n` npm package declares these internal package versions:

- n8n 2.32.7 -> `n8n-workflow@2.32.1`, `n8n-nodes-base@2.32.4`
- n8n 2.33.4 -> `n8n-workflow@2.33.1`, `n8n-nodes-base@2.33.1`
- n8n 2.33.5 stable -> `n8n-workflow@2.33.1`, `n8n-nodes-base@2.33.1`
- n8n 2.34.2 pre-release -> `n8n-workflow@2.34.1`, `n8n-nodes-base@2.34.1`

See `version-matrix.md` for the observed parameter-tree difference and test results.

## Scope

This is a core resolver reproduction. It does not start a complete n8n server, connect to Baserow, exercise Cloudron/n8n Cloud, or prove every Baserow operation fails. The test is intentionally narrow: it demonstrates that the shipped Baserow parameter schema can trigger the same dependency-resolution error before credentials or network calls are involved.

## Primary references

- n8n issue #35783: https://github.com/n8n-io/n8n/issues/35783
- n8n issue #35787: https://github.com/n8n-io/n8n/issues/35787
- Detailed investigation: https://www.xbstack.com/en/ai/n8n-baserow-parameter-dependencies-activation-error/?utm_source=github&utm_medium=referral&utm_campaign=n8n_baserow_parameter_dependencies&utm_content=repository_readme
- Downloadable snapshot: https://www.xbstack.com/downloads/n8n-baserow-parameter-dependencies-repro.zip
