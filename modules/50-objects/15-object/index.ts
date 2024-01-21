// BEGIN
const extract = (obj: object, keys: Array<string>): object => {
  const entries = Object.entries(obj).filter(([key]) => keys.includes(key));

  return Object.fromEntries(entries);
};
// END

export default extract;
