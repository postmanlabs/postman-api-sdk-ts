import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    root: __dirname,
    environment: 'node',
    // Harness unit tests need no spec file — safe anywhere, anytime.
    include: ['harness/**/*.test.ts', 'unit/**/*.test.ts'],
  },
});
