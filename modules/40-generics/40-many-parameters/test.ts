import * as ta from 'type-assertions';

import MyMap from './index';

test('MyMap', () => {
  const map: MyMap<string, number> = {
    values: new Map(),
    set(key, value) {
      this.values.set(key, value);
      return this.values;
    },
    get(key) {
      return this.values.get(key);
    },
  };

  map.set('one', 1);
  map.set('two', 2);

  expect(map.get('one')).toBe(1);
  expect(map.get('two')).toBe(2);
  expect(map.get('three')).toBe(undefined);

  ta.assert<ta.Equal<Parameters<MyMap<string, number>['set']>, [string, number]>>();
  ta.assert<ta.Equal<ReturnType<MyMap<string, number>['get']>, number | undefined>>();
});
