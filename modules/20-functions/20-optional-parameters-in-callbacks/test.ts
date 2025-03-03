import { expect, test } from 'vitest'
import map from './index';

test('map', () => {
  const result = map([], (n: number) => n + 3);
  expect(result).toEqual([]);

  const result2 = map([3, 9], (n: number) => n - 3);
  expect(result2).toEqual([0, 6]);

  const result3 = map([8, 9], (n: number) => n + 8);
  expect(result3).toEqual([16, 17]);

  const result4 = map([10, 10, 10], (n: number, index) => n + index);
  expect(result4).toEqual([10, 11, 12]);
});
