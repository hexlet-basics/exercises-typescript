import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    include: ['**/*.test.ts', '**/*.spec.ts', '**/test.ts'],
  },
  cacheDir: false
})
