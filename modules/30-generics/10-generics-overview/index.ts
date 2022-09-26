function last<T>(coll: Array<T>): T | null {
  return coll.length > 0 ? coll[coll.length - 1] : null;
}

export default last;
