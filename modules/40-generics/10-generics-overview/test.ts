import * as ta from 'type-assertions';
import { expect, test } from 'vitest';

import last from './index';

test('function', () => {
  expect(last([])).toBe(null);
  expect(last([3, 4])).toBe(4);
  expect(last(['cat', 'dog'])).toBe('dog');

  ta.assert<ta.Equal<ReturnType<typeof last<number>>, number | null>>();
});
