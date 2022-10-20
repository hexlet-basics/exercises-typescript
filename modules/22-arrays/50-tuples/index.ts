// BEGIN
export type Point = [number, number, number];

function isTheSamePoint(p1: Point, p2: Point): boolean {
  return p1.every((el, i) => el === p2[i]);
}
// END

export default isTheSamePoint;
