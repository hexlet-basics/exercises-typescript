// BEGIN

function forEach(numbers: number[], callback: (n: number, index: number) => void): void {
  numbers.forEach((n, index) => callback(n, index));
}
// END

export default forEach;
