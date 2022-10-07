import lastIndex from './index';

test('lastIndex', () => {
  const str = 'test';
  expect(lastIndex(str, 't')).toBe(3);
  expect(lastIndex(str, 'e')).toBe(1);
  expect(lastIndex(str, 'p')).toBeNull();
});
