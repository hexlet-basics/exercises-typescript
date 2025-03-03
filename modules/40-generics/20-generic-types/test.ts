import * as ta from 'type-assertions';
import { expect, test } from 'vitest';

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

  ta.assert<ta.Equal<Parameters<typeof s1.has>, [number]>>();
  ta.assert<ta.Equal<Parameters<typeof s1.add>, [number]>>();
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

  ta.assert<ta.Equal<Parameters<typeof s1.has>, [string]>>();
  ta.assert<ta.Equal<Parameters<typeof s1.add>, [string]>>();
});
