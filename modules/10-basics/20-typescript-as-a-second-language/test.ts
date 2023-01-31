import * as ta from 'type-assertions';

import multi from './index';

test('multi', () => {
  expect(multi(1, 3)).toBe(3);

  ta.assert<ta.Equal<ReturnType<typeof multi>, number>>();
});
