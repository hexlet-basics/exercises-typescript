// BEGIN
const sanitize = <T extends object, K extends keyof T>(obj: T, keys: Array<K>) => {
  const entries = Object.entries(obj).filter(([key]) => !keys.includes(key as K));

  return Object.fromEntries(entries) as Omit<T, K>;
};
// END

export default sanitize;
