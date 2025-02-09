import { test, expectTypeOf } from 'vitest'

import multiply from './index.js'

test('multiply', () => {
  expectTypeOf(multiply).returns.toBeNumber()
})
