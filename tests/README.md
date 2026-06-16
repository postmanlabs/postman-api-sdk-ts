# SDK test suite

Self-contained, **dynamic** test suite for this SDK: instead of hand-written per-endpoint
tests, one test per OpenAPI operation is generated at runtime from `integration/openapi.yaml`
(the same document the SDK was generated from). Regenerating the SDK from a newer spec
automatically re-covers it — no test code changes needed.

This directory is scaffolded by the SDK factory (`src/sdk-tests-template/` +
`pnpm tests:scaffold` in `postman-eng/postman-api-sdk-factory`). Edit it there, not here —
the next scaffold run overwrites local changes.

## Layout

| Path | What |
|---|---|
| `harness/` | Pure spec/SDK tooling: operation enumeration, minimal-example generation from JSON schemas, client reflection, argument building. Unit-tested, no spec file needed. |
| `integration/dynamic-requests.test.ts` | Per-operation wire assertions via a sinon fetch stub: URL path, HTTP method, `x-api-key` header, required query params, JSON body. |
| `integration/e2e-mock-server.test.ts` | Per-operation end-to-end sweep through the full SDK stack against a local express mock server (supertest verifies the mock's contract). |
| `integration/coverage.test.ts` | Two-way guarantee: every spec operation has a generated SDK method and every generated SDK method is driven by a spec operation. |
| `integration/openapi.yaml` | The OpenAPI document the suite derives tests from. Override with the `SDK_SPEC_PATH` env var. |
| `integration/client-under-test.ts` | Rendered at scaffold time: re-exports the generated client class as `SdkClient` — the only per-SDK file. |

## Running

The suite is hoisted into the SDK's own package: the scaffolder merges its test
devDependencies and `test:*` scripts into the SDK's root `package.json`, so a
single install at the SDK root covers everything (no separate `tests/` package).

```bash
# from the SDK root
npm install

npm run test:integration  # full dynamic sweep (2 tests per operation + coverage)
npm run test:all          # the above plus the harness unit tests
```

## Notes

- Tests import the SDK from `../src` — they exercise this exact checkout, not a published build.
- No network access is required: requests terminate in a sinon fetch stub or a local express server.
- `integration/helpers.ts` documents the generator conventions the harness relies on
  (positional arg order, camelCase application shape, auth header handling).
