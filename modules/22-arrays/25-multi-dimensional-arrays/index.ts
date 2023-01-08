// BEGIN
function getField(size: number): null[][] {
  const row = Array<null>(size).fill(null);
  return Array<null[]>(size).fill(row);
}
// END

export default getField;
