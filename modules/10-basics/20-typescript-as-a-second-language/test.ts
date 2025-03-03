import * as ta from 'type-assertions';
import { expect, test } from 'vitest';

import multiply from './index';

test('multiply', () => {
  expect(multiply(1, 3)).toBe(3);

  ta.assert<ta.Equal<ReturnType<typeof multiply>, number>>();
});
