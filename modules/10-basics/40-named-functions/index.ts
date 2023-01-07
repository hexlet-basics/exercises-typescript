// BEGIN
function getHiddenCard(cardNumber: string, hiddenPartLength = 4): string {
  const visibleDigitsLine = cardNumber.slice(-4);
  return visibleDigitsLine.padStart(hiddenPartLength + 4, '*');
}
// END

export default getHiddenCard;
