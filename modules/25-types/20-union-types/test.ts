import { expect, expectTypeOf, test } from 'vitest';

import lastIndex from './index';

test('lastIndex', () => {
  const str = 'jestTest';
  expect(lastIndex(str, 'j')).toBe(0);
  expect(lastIndex(str, 't')).toBe(7);
  expect(lastIndex(str, 'e')).toBe(5);
  expect(lastIndex(str, 'p')).toBeNull();

  expectTypeOf(lastIndex).returns.toMatchTypeOf<number | null>();
});
