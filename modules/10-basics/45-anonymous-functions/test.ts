import getEvenNumbers from './index';

test('function', () => {
  expect(getEvenNumbers([1, 3, 12, 30, 43, 54, 68, 97])).toEqual([12, 30, 54, 68]);
});
