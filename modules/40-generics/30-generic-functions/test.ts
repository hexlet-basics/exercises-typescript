import MyArray from './index';

test('function', () => {
  const coll: MyArray<number> = {
    items: [],
    push(value) {
      return this.items.push(value);
    },
    filter(callback) {
      const filteredItems = this.items.filter(callback);

      return { ...this, items: filteredItems };
    },
  };

  expect(coll.push(1)).toBe(1);
  expect(coll.push(2)).toBe(2);
  expect(coll.push(5)).toBe(3);
});
