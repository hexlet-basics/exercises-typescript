// BEGIN
function compact(items: Array<number | null>): Array<number | null> {
  return items.filter((item) => item !== null);
}
// END

export default compact;
