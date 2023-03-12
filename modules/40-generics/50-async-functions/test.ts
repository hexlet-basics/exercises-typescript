import * as ta from 'type-assertions';
import asyncMap from './index';

test('asyncMap', async () => {
  const result = await asyncMap([Promise.resolve(1), Promise.resolve(2)], (item) => item * 2);
  expect(result).toEqual([2, 4]);

  const result2 = await asyncMap([Promise.resolve('one'), Promise.resolve('two'), Promise.resolve('three')], (item) => item.toUpperCase());
  expect(result2).toEqual(['ONE', 'TWO', 'THREE']);

  ta.assert<ta.Equal<typeof result, number[]>>();
  ta.assert<ta.Equal<typeof result2, string[]>>();
});
