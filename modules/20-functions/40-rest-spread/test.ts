import max from './index';

test('function', () => {
  expect(max(1, 3, 8)).toBe(8);
  expect(max(10)).toBe(10);
  expect(max(4, 1)).toBe(4);
});
