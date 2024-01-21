// BEGIN
function reverse(coll: readonly number[]): number[] {
  return coll.map((_, index) => coll[coll.length - 1 - index]);
}
// END

export default reverse;
