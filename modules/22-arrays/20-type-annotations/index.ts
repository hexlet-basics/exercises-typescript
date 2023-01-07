// BEGIN
function compact(items: (number | null)[]): number[] {
  return items.filter((item) => item !== null);
}
// END

export default compact;
