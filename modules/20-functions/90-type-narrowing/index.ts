function last(value: string | number) {
  if (typeof value === 'number') {
    return String(value).at(-1);
  }

  return value.at(-1);
}

export default last;
