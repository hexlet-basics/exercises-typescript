import MySet from './index';

test('function', () => {
  const s1: MySet<number> = {
    items: [],
    has(value) {
      return value in this.items;
    },
    add(value) {
      this.items.push(value);
      return this.items.length;
    },
  };

  expect(s1.has(1)).toBe(false);
  s1.add(1);
  expect(s1.has(1)).toBe(true);
});

test('function', () => {
  const s1: MySet<string> = {
    items: [],
    has(value) {
      return value in this.items;
    },
    add(value) {
      this.items.push(value);
      return this.items.length;
    },
  };

  expect(s1.has('hexlet')).toBe(false);
  s1.add('hexlet');
  expect(s1.has('hexlet')).toBe(true);
});
