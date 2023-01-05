// BEGIN
function filter(numbers: number[], callback: (n: number) => boolean): number[] {
  return numbers.filter(callback)
}
// END

export default filter;
