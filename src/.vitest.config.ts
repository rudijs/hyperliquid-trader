/// <reference types="vitest" />

import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    testTimeout: 10000,
    coverage: {
      reporter: ["text", "json", "html"],
      all: true,
      include: ["src/lib/**/*.ts"],
      // exclude: ["src/**/test/*"], //"services/test/scratch.test.ts"],
    },
  },
  esbuild: {
    sourcemap: "both",
  },
})
