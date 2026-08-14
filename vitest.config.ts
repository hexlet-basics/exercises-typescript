import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.test.ts", "**/*.spec.ts", "**/test.ts"],
  },
  // cacheDir: false
});
