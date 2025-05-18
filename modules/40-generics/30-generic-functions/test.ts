import { expect, test, expectTypeOf } from 'vitest';

import MyArray from './index';

test('MyArray', () => {
  const coll: MyArray<number> = {
    items: [],
    push(value) {
      return this.items.push(value);
    },
    filter(callback) {
      const newItems = this.items.filter(callback);
      return { ...this, items: newItems };
    },
  };

  expect(coll.push(1)).toBe(1);
  expect(coll.push(2)).toBe(2);
  expect(coll.push(5)).toBe(3);

  expectTypeOf(coll.push).parameters.toMatchTypeOf<[number]>();

  const coll1: MyArray<string> = {
    items: [],
    push(value) {
      return this.items.push(value);
    },
    filter(callback) {
      const newItems = this.items.filter(callback);
      return { ...this, items: newItems };
    },
  };

  expectTypeOf(coll1.push).parameters.toMatchTypeOf<[string]>();
});
