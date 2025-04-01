import { expect, test, expectTypeOf } from 'vitest';

import last from './index';

test('function', () => {
  expect(last([])).toBe(null);
  expect(last([3, 4])).toBe(4);
  expect(last(['cat', 'dog'])).toBe('dog');

  expectTypeOf(last<number>).returns.toMatchTypeOf<number | null>();
});
