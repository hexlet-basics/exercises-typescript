// BEGIN
type MySet<T> = {
  items: Array<T>;
  has(value: T): boolean;
  add(value: T): number;
};
// END

export default MySet;
