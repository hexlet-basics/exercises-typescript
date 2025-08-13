// BEGIN
function unique(coll: (number | string)[]): (number | string)[] {
  const init: (number | string)[] = [];

  return coll.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, init);
}
// END

export default unique;
