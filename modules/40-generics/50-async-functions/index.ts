// BEGIN
const asyncMap = async <T, P>(arr: Promise<T>[], fn: (item: T) => P) => {
  const promise = arr.map(async (item) => {
    const result = await item;
    return fn(result);
  });

  return Promise.all(promise);
};
// END

export default asyncMap;
