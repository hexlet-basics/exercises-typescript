import getField from './index';

test('function', () => {
  expect(getField(1)).toEqual([[null], [null]]);
  expect(getField(2)).toEqual([[null, null], [null, null]]);
  expect(getField(3)).toEqual([[null, null, null], [null, null, null]]);
});
