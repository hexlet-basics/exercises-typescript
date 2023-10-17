// BEGIN
function getField(size: number): null[][] {
  const field = Array(size).fill(null).map(() => Array(size).fill(null));
  return field;
}
// END

export default getField;
