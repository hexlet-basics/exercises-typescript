import { expect, expectTypeOf, test } from "vitest";

import type MyArray from "./index";

test("MyArray", () => {
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

  expectTypeOf(coll.push).parameters.toEqualTypeOf<[number]>();
  expectTypeOf(coll.push).returns.toEqualTypeOf<number>();
  expectTypeOf(coll.filter).parameters.toEqualTypeOf<
    [(value: number, index: number, array: Array<number>) => boolean]
  >();
  expectTypeOf(coll.filter).returns.toEqualTypeOf<MyArray<number>>();

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

  expectTypeOf(coll1.push).parameters.toEqualTypeOf<[string]>();
  expectTypeOf(coll1.filter).returns.toEqualTypeOf<MyArray<string>>();
});
