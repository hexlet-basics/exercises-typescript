// BEGIN
const init: (number | string)[] = [];

function uniq(coll: (number | string)[]): (number | string)[] {
  return coll.reduce(
    (acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]),
    init
  );
}
// END

export default uniq;
