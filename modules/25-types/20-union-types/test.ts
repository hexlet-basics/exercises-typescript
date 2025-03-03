import * as ta from 'type-assertions';
import { expect, test } from 'vitest';

import lastIndex from './index';

test('lastIndex', () => {
  const str = 'jestTest';
  expect(lastIndex(str, 'j')).toBe(0);
  expect(lastIndex(str, 't')).toBe(7);
  expect(lastIndex(str, 'e')).toBe(5);
  expect(lastIndex(str, 'p')).toBeNull();

  ta.assert<ta.Equal<ReturnType<typeof lastIndex>, number | null>>();
});
