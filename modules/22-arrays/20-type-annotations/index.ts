// BEGIN
function compact(items: (number | null)[]) {
  return items.filter((item) => item !== null);
}
// END

export default compact;
