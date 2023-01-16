// BEGIN
function reverse(coll: ReadonlyArray<number>): Array<number> {
  const init: number[] = [];

  return coll.reduce((acc, value, index) => {
    acc[coll.length - index - 1] = value;
    return acc;
  }, init);
}
// END

export default reverse;
