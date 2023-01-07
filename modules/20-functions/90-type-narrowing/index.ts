// BEGIN
function last(value: string | number): string | number {
  return typeof value === 'number'
    ? value % 10
    : value.at(-1) ?? '';
}
// END

export default last;
