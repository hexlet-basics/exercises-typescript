// BEGIN
function compact(items: (null | number)[]): number[] {
  const result: number[] = [];

  items.forEach((item) => {
    if (item !== null) {
      result.push(item);
    }
  });

  return result;
}
// END

export default compact;
