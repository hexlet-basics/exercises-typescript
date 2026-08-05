import { expect, expectTypeOf, test } from 'vitest';

import type MyMap from './index';

test('MyMap of strings to numbers', () => {
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

  expectTypeOf(map.set).parameters.toEqualTypeOf<[string, number]>();
  expectTypeOf(map.get).parameters.toEqualTypeOf<[string]>();
  expectTypeOf(map.get).returns.toEqualTypeOf<number | undefined>();
});

test('MyMap of numbers to arrays of strings', () => {
  const map: MyMap<number, string[]> = {
    values: new Map(),
    set(key, value) {
      this.values.set(key, value);
    },
    get(key) {
      return this.values.get(key);
    },
  };

  map.set(1, ['one']);
  map.set(2, ['two', 'three']);

  expect(map.get(1)).toEqual(['one']);
  expect(map.get(2)).toEqual(['two', 'three']);
  expect(map.get(3)).toBe(undefined);

  expectTypeOf(map.set).parameters.toEqualTypeOf<[number, string[]]>();
  expectTypeOf(map.get).parameters.toEqualTypeOf<[number]>();
  expectTypeOf(map.get).returns.toEqualTypeOf<string[] | undefined>();
});
