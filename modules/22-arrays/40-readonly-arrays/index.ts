// BEGIN
function reverse(coll: ReadonlyArray<number>): Array<number> {
  const init: number[] = [];

  return coll.reduceRight((acc, value) => [...acc, value], init);
}
// END

export default reverse;
