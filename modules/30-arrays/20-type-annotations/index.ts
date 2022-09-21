function compact(items: (number | null)[]) {
  return items.filter((item) => item !== null);
}

export default compact;
