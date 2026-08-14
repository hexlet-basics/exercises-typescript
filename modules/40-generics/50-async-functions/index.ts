// BEGIN
const asyncMap = async <T, P>(arr: Promise<T>[], fn: (item: T, index: number) => P) => {
  const promises = arr.map(async (item, index) => {
    const result = await item;
    return fn(result, index);
  });

  return Promise.all(promises);
};
// END

export default asyncMap;
