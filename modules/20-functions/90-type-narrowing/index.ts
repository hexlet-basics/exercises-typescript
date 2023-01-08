// BEGIN
function last(value: string | number): string | number {
  if (typeof value === 'number') {
    return value % 10;
  }
 
  return value.at(-1) ?? '';
}
// END

export default last;
