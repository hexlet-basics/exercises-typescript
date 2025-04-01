import { expect, test, expectTypeOf } from 'vitest';

import MySet from './index';

test('function', () => {
  const s1: MySet<number> = {
    items: [],
    has(value) {
      return this.items.includes(value);
    },
    add(value) {
      this.items.push(value);
      return this.items.length;
    },
  };

  expect(s1.has(1)).toBe(false);
  s1.add(1);
  expect(s1.has(1)).toBe(true);

  expectTypeOf(s1.has).parameters.toMatchTypeOf<[number]>();
  expectTypeOf(s1.add).parameters.toMatchTypeOf<[number]>();
});

test('function', () => {
  const s1: MySet<string> = {
    items: [],
    has(value) {
      return this.items.includes(value);
    },
    add(value) {
      this.items.push(value);
      return this.items.length;
    },
  };

  expect(s1.has('hexlet')).toBe(false);
  s1.add('hexlet');
  expect(s1.has('hexlet')).toBe(true);

  expectTypeOf(s1.has).parameters.toMatchTypeOf<[string]>();
  expectTypeOf(s1.add).parameters.toMatchTypeOf<[string]>();
});
