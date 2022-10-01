import last from './index';

test('function', () => {
  expect(last('John')).toBe('n');
  expect(last(['a', 'asdf'])).toBe('asdf');
});
