import { expect, expectTypeOf, test } from 'vitest';

import getHiddenCard from './index';

test('getHiddenCard', () => {
  expect(getHiddenCard('1234123412341234')).toEqual('****1234');
  expect(getHiddenCard('1234123412344321')).toEqual('****4321');
  expect(getHiddenCard('1234123412344321', 2)).toEqual('**4321');
  expect(getHiddenCard('1234123412341234', 12)).toEqual('************1234');

  expectTypeOf(getHiddenCard).returns.toMatchTypeOf<string>();
});
