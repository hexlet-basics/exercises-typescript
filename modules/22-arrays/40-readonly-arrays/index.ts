// BEGIN
function reverse(coll: ReadonlyArray<number>): Array<number> {
  const init: number[] = [];
  const result = coll.reduce((acc, value, index) => {
    acc[coll.length - index - 1] = value;
    return acc;
  }, init);

  return result;
}
// END

export default reverse;
