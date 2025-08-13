import { expect, expectTypeOf, test } from 'vitest';
import asyncMap from './index';

test('asyncMap', async () => {
  const result = await asyncMap(
    [Promise.resolve(1), Promise.resolve(2)],
    (item) => item * 2,
  );
  expect(result).toEqual([2, 4]);

  const result2 = await asyncMap(
    [Promise.resolve('one'), Promise.resolve('two'), Promise.resolve('three')],
    (item) => item.toUpperCase(),
  );
  expect(result2).toEqual(['ONE', 'TWO', 'THREE']);

  const result3 = await asyncMap(
    [Promise.resolve(1), Promise.resolve(2)],
    (item, index) => item * index,
  );
  expect(result3).toEqual([0, 2]);

  expectTypeOf(result).toExtend<number[]>();
  expectTypeOf(result2).toExtend<string[]>();
});
