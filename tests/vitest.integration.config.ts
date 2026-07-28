import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    root: __dirname,
    environment: 'node',
    // Needs the OpenAPI spec: openapi.yaml next to the integration tests
    // (shipped with the SDK) or SDK_SPEC_PATH. See integration/helpers.ts.
    include: ['integration/**/*.test.ts'],
    testTimeout: 30_000,
  },
});
