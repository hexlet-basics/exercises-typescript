// BEGIN
export type Point = [number, number, number];

function isTheSamePoint(p1: Point, p2: Point): boolean {
  if (p1.length !== p2.length) {
    return false;
  }
  
  return p1.every((el, i) => el === p2[i]);
}
// END

export default isTheSamePoint;
