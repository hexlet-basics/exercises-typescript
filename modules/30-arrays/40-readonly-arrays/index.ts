export type Point = [number, number, number];

function isTheSamePoint(p1: Point, p2: Point): boolean {
  return p1[0] === p2[0] && p1[1] === p2[1] && p1[2] === p2[2];
}

export default isTheSamePoint;
