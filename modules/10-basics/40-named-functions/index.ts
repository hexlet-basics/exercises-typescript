// BEGIN
function getHiddenCard(cardNumber: string, starsCount: number = 4): string {
  const visibleDigitsLine = cardNumber.slice(12);
  return `${'*'.repeat(starsCount)}${visibleDigitsLine}`;
}
// END

export default getHiddenCard;
