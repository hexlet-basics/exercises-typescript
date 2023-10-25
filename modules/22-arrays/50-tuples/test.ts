import isTheSamePoint, { Point } from './index';

test('function', () => {
  const p1: Point = [1, 2, 3];
  const p2: Point = [1, 2, 3];
  const p3: Point = [0, 2, 3];
  const p4: Point = [1, 21, 3]; 
  const p5: Point = [1, 2, 13];


  expect(isTheSamePoint(p1, p2)).toBe(true);
  expect(isTheSamePoint(p1, p3)).toBe(false);
  expect(isTheSamePoint(p4, p5)).toBe(false);
});
