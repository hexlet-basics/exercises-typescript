// BEGIN

function forEach(
  numbers: number[],
  callback: (n: number, index: number) => void,
): void {
    for (let i = 0; i < numbers.length; i++) {
        callback(numbers[i], i);
    }
}
// END

export default forEach;
