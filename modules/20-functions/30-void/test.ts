import forEach from './index';

test('function', () => {
  const result: number[] = [];
  forEach([], (n) => result.push(n));
  expect(result).toEqual([]);

  const result2: number[] = [];
  forEach([3, 9], (n) => result2.push(n + 1));
  expect(result2).toEqual([4, 10]);

  const result3: number[] = [];
  forEach([8, 9], (n, i) => result3.push(n + i));
  expect(result3).toEqual([8, 10]);
});
