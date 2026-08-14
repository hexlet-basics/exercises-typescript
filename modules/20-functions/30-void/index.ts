// BEGIN

function forEach(numbers: number[], callback: (n: number, index: number) => void): void {
  for (const [index, n] of numbers.entries()) {
    callback(n, index);
  }
}
// END

export default forEach;
