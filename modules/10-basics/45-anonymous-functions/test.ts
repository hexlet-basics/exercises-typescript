import { expect, test, expectTypeOf } from 'vitest';

import getEvenNumbers from './index';

test('function', () => {
  expect(getEvenNumbers()).toEqual([8, 100, 34]);

  expectTypeOf(getEvenNumbers).returns.toMatchTypeOf<number[]>();
});
