// BEGIN
function getField(size: number): null[][] {
  const field = Array<null>(size).fill(null).map(() => Array<null>(size).fill(null));
  return field;
}
// END

export default getField;
