import compact from './index';

test('function', () => {
  expect(compact([])).toEqual([]);
  expect(compact([2, 3, -100])).toEqual([2, 3, -100]);
  expect(compact([null, 9, 3, null, 8])).toEqual([9, 3, 8]);
});

