import { assert } from 'type-assertions';
import type { Equal } from 'type-assertions';

import lastIndex from './index';

test('lastIndex', () => {
  assert<Equal<ReturnType<typeof lastIndex>, number | null>>();

  const str = 'test';
  expect(lastIndex(str, 't')).toBe(3);
  expect(lastIndex(str, 'e')).toBe(1);
  expect(lastIndex(str, 'p')).toBeNull();
});
