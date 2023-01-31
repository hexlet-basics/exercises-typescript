import * as ta from 'type-assertions';

import getEvenNumbers from './index';

test('function', () => {
  expect(getEvenNumbers()).toEqual([8, 100, 34]);

  ta.assert<ta.Equal<ReturnType<typeof getEvenNumbers>, number[]>>();
});
