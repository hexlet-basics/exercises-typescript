import last from './index';

test('function', () => {
  expect(last('John')).toBe('n');
  expect(last('')).toBe('');
  expect(last(1)).toBe(1);
  expect(last(134)).toBe(4);
});
