import map from './index';

test('function', () => {
  const result = map([], (n) => n + 3);
  expect(result).toEqual([]);

  const result2 = map([3, 9], (n) => n - 3);
  expect(result2).toEqual([0, 6]);

  const result3 = map([8, 9], (n) => n + 8);
  expect(result3).toEqual([16, 17]);
});
