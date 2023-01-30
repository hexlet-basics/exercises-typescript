import uniq from './index';

test('function', () => {
  expect(uniq([])).toEqual([]);
  expect(uniq([2, 3, -100, -100, -100])).toEqual([2, 3, -100]);
  expect(uniq(['as', 'good', 'as', 'it', 'gets'])).toEqual([
    'as',
    'good',
    'it',
    'gets',
  ]);
  expect(uniq([1, 1, 3, 'oops!'])).toEqual([1, 3, 'oops!']);
});
