import * as ta from 'type-assertions';

import lastIndex from './index';

test('lastIndex', () => {
  const str = 'jest';
  expect(lastIndex(str, 'j')).toBe(0);
  expect(lastIndex(str, 't')).toBe(3);
  expect(lastIndex(str, 'e')).toBe(1);
  expect(lastIndex(str, 'p')).toBeNull();

  ta.assert<ta.Equal<ReturnType<typeof lastIndex>, number | null>>();
});
