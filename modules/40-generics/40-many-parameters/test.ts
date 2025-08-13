import { expect, expectTypeOf, test } from 'vitest';

import type MyMap from './index';

test('MyMap', () => {
  const map: MyMap<string, number> = {
    values: new Map(),
    set(key, value) {
      this.values.set(key, value);
    },
    get(key) {
      return this.values.get(key);
    },
  };

  map.set('one', 1);
  map.set('two', 2);

  expect(map.get('one')).toBe(1);
  expect(map.get('two')).toBe(2);
  expect(map.get('three')).toBe(undefined);

  expectTypeOf(map.set).parameters.toMatchTypeOf<[string, number]>();
  expectTypeOf(map.get).returns.toMatchTypeOf<number | undefined>();
});
