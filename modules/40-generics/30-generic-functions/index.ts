// BEGIN
type MyArray<T> = {
  items: Array<T>;
  push(value: T): number;
  filter(
    callback: (value: T, index: number, array: Array<T>) => boolean,
  ): MyArray<T>;
};
// END

export default MyArray;
