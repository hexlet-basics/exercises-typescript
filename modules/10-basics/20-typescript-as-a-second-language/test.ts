import { expect, test, expectTypeOf } from 'vitest';

import multiply from './index';

test('multiply', () => {
  expect(multiply(1, 3)).toBe(3);

  expectTypeOf(multiply).returns.toMatchTypeOf<number>();
});
