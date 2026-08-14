
Implement a description of the generalized type `MyMap`, which is an analog of the associative array from JavaScript. The type takes two parameters — the key type and the value type — and has to work with any combination of them. Example of using an object of this type:

```typescript
const map: MyMap<string, number> = ...;
map.set('one', 1);
map.set('two', 2);

map.get('one'); // 1
map.get('two'); // 2
map.get('three'); // undefined

const tags: MyMap<number, string[]> = ...;
tags.set(1, ['one']);
tags.get(1); // ['one']
```

The type includes two methods. The `set()` method accepts a key and a value and returns nothing. The `get()` method accepts a key and returns the value, or `undefined` if there is no value for that key. Values are stored inside the object in the `values` property as a JavaScript built-in class [Map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).
