// BEGIN
function formatPrice(price?: number | null): string {
  if (price === undefined || price === null) {
    return '$0.00';
  }

  return `$${price.toFixed(2)}`;
}
// END

export default formatPrice;
