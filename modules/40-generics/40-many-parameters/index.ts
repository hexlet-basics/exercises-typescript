// BEGIN
type MyMap<K, V> = {
  values: Map<K, V>;
  set(key: K, value: V): Map<K, V>;
  get(key: K): V | undefined;
};
// END

export default MyMap;
