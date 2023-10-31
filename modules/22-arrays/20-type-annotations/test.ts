import unique from './index';

test('function', () => {
  expect(unique([])).toEqual([]);
  expect(unique([2, 3, -100, -100, -100])).toEqual([2, 3, -100]);
  expect(unique(['as', 'good', 'as', 'it', 'gets'])).toEqual([
    'as',
    'good',
    'it',
    'gets',
  ]);
  expect(unique([1, 1, 3, 'oops!'])).toEqual([1, 3, 'oops!']);
});
