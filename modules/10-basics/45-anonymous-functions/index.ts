const numbers = [1, 3, 8, 9, 100, 23, 55, 34];

// BEGIN
function getEvenNumbers(): number[] {
  const evenNumbers = numbers.filter((n) => n % 2 === 0);

  return evenNumbers;
}
// END

export default getEvenNumbers;
