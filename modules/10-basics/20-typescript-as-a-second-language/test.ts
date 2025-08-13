import { expect, expectTypeOf, test } from 'vitest';

import multiply from './index';

test('multiply', () => {
  expect(multiply(1, 3)).toBe(3);

  expectTypeOf(multiply).returns.toExtend<number>();
});
