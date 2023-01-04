// BEGIN
function fromEntries<
  K extends number | string,
  V extends number | string | boolean | null,
>(entries: [K, V][]) {
  return entries.reduce(
    (acc, [key, value]) => ({ ...acc, [key]: value }),
    {} as { [Key in K]: V },
  );
}
// END

export default fromEntries;
