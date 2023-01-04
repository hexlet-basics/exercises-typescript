import fromEntries from './index';

test('fromEntries', () => {
  expect(fromEntries([])).toEqual({});
  expect(fromEntries([[0, 0]])).toEqual({ 0: 0 });
  expect(
    fromEntries([
      [0, false],
      [1, true],
    ]),
  ).toEqual({ 0: false, 1: true });
  expect(
    fromEntries([
      ['name', 'Vincent'],
      ['job', 'painter'],
    ]),
  ).toEqual({ name: 'Vincent', job: 'painter' });
});
