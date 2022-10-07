// BEGIN
function lastIndex(str: string, char: string): number | null {
  const index = str.lastIndexOf(char);
  return index === -1 ? null : index;
}
// END

export default lastIndex;
