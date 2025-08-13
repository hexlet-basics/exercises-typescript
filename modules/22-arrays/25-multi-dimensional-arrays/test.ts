import { expect, test } from 'vitest';
import getField from './index';

test('function', () => {
  expect(getField(1)).toEqual([[null]]);
  expect(getField(2)).toEqual([
    [null, null],
    [null, null],
  ]);
  expect(getField(3)).toEqual([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
});
