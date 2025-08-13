// BEGIN
function map(
  numbers: number[],
  callback: (n: number, index: number) => number,
): number[] {
  const result: number[] = [];
  numbers.forEach((n, index) => result.push(callback(n, index)));
  return result;
}
// END

export default map;
