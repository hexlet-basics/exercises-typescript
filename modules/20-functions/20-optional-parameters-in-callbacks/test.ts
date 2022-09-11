import filter from './index';

test('function', () => {
  const result = filter([], (n) => n > 3);
  expect(result).toEqual([]);

  const result2 = filter([3, 2, 8, 9], (n) => n > 3);
  expect(result2).toEqual([8, 9]);

  const result3 = filter([3, 2, 8, 9], (n) => n < 8);
  expect(result3).toEqual([3, 2]);
});
