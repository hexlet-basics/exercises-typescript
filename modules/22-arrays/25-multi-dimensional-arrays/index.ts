// BEGIN
function getField(size: number): null[][] {
  const field: null[][] = Array(size).fill(null).map(() => Array(size).fill(null));
  return field;
}
// END

export default getField;
