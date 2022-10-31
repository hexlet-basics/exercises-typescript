import authorize from './index';

test('function', () => {
  expect(authorize({ email: 'test@hexlet.io' })).toBe(true);
  expect(authorize({ email: 'test@example.com' })).toBe(false);
  expect(authorize(null)).toBe(false);
});
