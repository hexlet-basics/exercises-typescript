import intersection from './index';

test('intersection', () => {
  expect(intersection([])).toEqual([]);
  expect(intersection([0, true, false, null, 'str'])).toEqual([
    0,
    true,
    false,
    null,
    'str',
  ]);
  expect(intersection([0, true, false, null, 'str'], [0, false], [])).toEqual(
    [],
  );
  expect(intersection([0, true, false, null, 'str'], [0, false])).toEqual([
    0,
    false,
  ]);
  expect(
    intersection([0, true, false, null, 'str'], [0, true, false, null, 'str']),
  ).toEqual([0, true, false, null, 'str']);
  expect(intersection([0, null], [1, null], [2, null])).toEqual([null]);
});
