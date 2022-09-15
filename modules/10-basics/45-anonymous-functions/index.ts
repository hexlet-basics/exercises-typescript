// BEGIN
function getEvenNumbers(numbers: number[]) {
  const evenNumbers = numbers.filter((n) => n % 2 === 0);
  return evenNumbers;
}
// END

export default getEvenNumbers;
