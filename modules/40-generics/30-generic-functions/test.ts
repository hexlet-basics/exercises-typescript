import * as ta from 'type-assertions';

import MyArray from './index';

test('MyArray', () => {
  const coll: MyArray<number> = {
    items: [],
    push(value) {
      return this.items.push(value);
    },
    filter(callback) {
      const newItems = this.items.filter(callback);
      return { ...this, items: newItems };
    },
  };

  expect(coll.push(1)).toBe(1);
  expect(coll.push(2)).toBe(2);
  expect(coll.push(5)).toBe(3);

  ta.assert<ta.Equal<Parameters<MyArray<string>['push']>, [string]>>();
  ta.assert<ta.Equal<ReturnType<MyArray<string>['push']>, number>>();
});
