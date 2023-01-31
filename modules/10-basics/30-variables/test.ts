import * as ta from 'type-assertions';

import repeat from './index';

test('repeat', () => {
  expect(repeat('wow', 3)).toBe('wowwowwow');
  expect(repeat('s', 2)).toBe('ss');
  expect(repeat('s', 0)).toBe('');

  ta.assert<ta.Equal<ReturnType<typeof repeat>, string>>();
});
