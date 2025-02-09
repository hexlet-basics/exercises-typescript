import { test, expect } from 'vitest'

import multiply from './index.js'

test('multiply', () => {
  expect(multiply(1, 3)).toBe(3)
})
