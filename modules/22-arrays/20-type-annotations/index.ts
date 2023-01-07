// BEGIN
function compact(items: (number | null)[]): number[] {
  return items.filter((item) => item !== null) as number[];
}
// END

export default compact;
