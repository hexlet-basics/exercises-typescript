import { expect, test } from 'vitest'
import lessonsCount from './index';

test('function', () => {
  expect(lessonsCount({ lessons: [] })).toBe(0);
  const course = { lessons: ['intro'] };
  expect(lessonsCount(course)).toBe(1);
});
