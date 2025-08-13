import { expect, expectTypeOf, test } from 'vitest';

import isComplete from './index';

test('function', () => {
  const course1 = {
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions'],
  };
  expect(isComplete(course1)).toBe(false);

  const course2 = {
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions', 'loops'],
  };
  expect(isComplete(course2)).toBe(true);

  const course3 = {
    name: 'Java',
    lessons: ['variables', 'functions', 'conditions', 'loops', 'cringe'],
  };
  expect(isComplete(course3)).toBe(true);

  expectTypeOf(isComplete).returns.toExtend<boolean>();
  expectTypeOf(isComplete)
    .parameter(0)
    .toExtend<{ name: string; lessons: string[] }>();
});
