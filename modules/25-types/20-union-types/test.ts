// import { assert } from 'type-assertions';
// import type { Equal } from 'type-assertions';

import lastIndex from './index';

test('lastIndex', () => {
  // https://github.com/sindresorhus/is
  // https://github.com/unional/type-plus
  // https://github.com/colinhacks/zod
  // assert<Equal<ReturnType<typeof lastIndex>, number | null>>();

  const str = 'jest';
  expect(lastIndex(str, 'j')).toBe(0);
  expect(lastIndex(str, 't')).toBe(3);
  expect(lastIndex(str, 'e')).toBe(1);
  expect(lastIndex(str, 'p')).toBeNull();
});
