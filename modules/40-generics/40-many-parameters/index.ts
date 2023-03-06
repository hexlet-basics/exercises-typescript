// BEGIN
type MyMap<K, V> = {
  values: Map<K, V>;
  set(key: K, value: V): void;
  get(key: K): V | undefined;
};
// END

export default MyMap;
