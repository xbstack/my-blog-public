# Reproduction

The executable reproduction lives at `../repro.cjs` so both isolated dependency sets can use the same test code.

Run from the repository root of this experiment:

```bash
node repro.cjs v232
node repro.cjs v233
```

`v232` must resolve the nested Baserow filter parameters successfully. `v233` must reproduce the exact `Could not resolve parameter dependencies. Max iterations reached!` error.

The fixture is deliberately small: it loads Baserow's `additionalOptions -> filters -> fields` property tree and calls the exported `getNodeParameters()` resolver. No n8n Cloud account, database, Baserow credential, or model API is required.
