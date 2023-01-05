// BEGIN
function getHiddenCard(cardNumber: string, asterisksCount = 4): string {
  const visibleDigitsLine = cardNumber.slice(12);
  return `${'*'.repeat(asterisksCount)}${visibleDigitsLine}`;
}
// END

export default getHiddenCard;
