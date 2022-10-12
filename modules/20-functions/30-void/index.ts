// BEGIN
function forEach(numbers: number[], callback: (n: number, index?: number) => void) {
  const result: number[] = [];
  numbers.forEach((n, index) => callback(n, index));
  return result;
}
// END

export default forEach;
