 

function repeat(text: string, count: number) {
  // BEGIN
  let result = '';
  for (let i = 0; i < count; i += 1) {
    result += text;
  }

  return result;
  // END
}

export default repeat;
