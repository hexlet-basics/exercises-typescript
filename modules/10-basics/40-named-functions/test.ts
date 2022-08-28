// import { test, expect } from '@jest/globals';
import getHiddenCard from './index';

test('getHiddenCard', () => {
  expect(getHiddenCard('1234123412341234')).toEqual('****1234');
  expect(getHiddenCard('1234123412344321')).toEqual('****4321');
  expect(getHiddenCard('1234123412344321', 2)).toEqual('**4321');
  expect(getHiddenCard('1234123412341234', 12)).toEqual('************1234');
});

