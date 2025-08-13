import { expect, expectTypeOf, test } from 'vitest';

import repeat from './index';

test('repeat', () => {
  expect(repeat('wow', 3)).toBe('wowwowwow');
  expect(repeat('s', 2)).toBe('ss');
  expect(repeat('s', 0)).toBe('');

  expectTypeOf(repeat).returns.toMatchTypeOf<string>();
});
