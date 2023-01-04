// BEGIN
function intersection<T extends number | string | boolean | null>(
  ...arrays: T[][]
): T[] {
  const [first, second, ...rest] = arrays;
  if (!second) {
    return Array.from(new Set(first));
  }
  if (!rest.length) {
    return Array.from(new Set(first.filter((el) => second.includes(el))));
  }
  return intersection(
    first.filter((el) => second.includes(el)),
    ...rest,
  );
}
// END

export default intersection;
