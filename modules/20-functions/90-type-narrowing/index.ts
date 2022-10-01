function last(value: string | string[]) {
  if (typeof value === 'string') {
    return value[value.length - 1];
  }

  return value.at(-1);
}

export default last;
