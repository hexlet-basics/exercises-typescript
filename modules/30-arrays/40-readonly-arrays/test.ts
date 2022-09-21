import isTheSamePoint, { Point } from './index';

test('function', () => {
  const p1: Point = [1, 2, 3];
  const p2: Point = [1, 2, 3];
  const p3: Point = [0, 2, 3];

  expect(isTheSamePoint(p1, p2)).toBe(true);
  expect(isTheSamePoint(p1, p3)).toBe(false);
});
