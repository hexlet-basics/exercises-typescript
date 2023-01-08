// BEGIN
function reverse(coll: ReadonlyArray<number>): Array<number> {
  const result: number[] = [];

  for (let i = coll.length - 1; i >= 0; i -= 1) {
    result.push(coll[i]);
  }

  return result;
}
// END

export default reverse;
