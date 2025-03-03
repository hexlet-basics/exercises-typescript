 
 
 
/* eslint-disable @typescript-eslint/no-explicit-any */

// BEGIN
function getParams(query: string) {
  const parts = query.split('&');
  const init: any = {};
  const result = parts.reduce((acc, part) => {
    const [key, value] = part.split('=');
    acc[key] = value;
    return acc;
  }, init);

  return result;
}
// END

export default getParams;
