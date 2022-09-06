import getEvenNumbers from './index';

test('function', () => {
  expect(getEvenNumbers()).toEqual([8, 100, 34]);
});
