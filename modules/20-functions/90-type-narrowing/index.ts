// BEGIN
function last(value: string | number): string | number {
  if (typeof value === 'number') {
    return Number(String(value).at(-1));
  }

  return value.at(-1) ?? '';
}
// END

export default last;
