// BEGIN
const asyncMap = async <T, P>(
  arr: Promise<T>[],
  fn: (item: T, index: number) => P,
) => Promise.all(arr).then((res) => res.map(fn));
// END

export default asyncMap;
