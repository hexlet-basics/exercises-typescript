
Implement a description of the generalized type `MyMap`, which is an analog of the associative array from JavaScript. Example of using an object of this type:

```typescript
const map: MyMap<string, number> = ...;
map.set('one', 1);
map.set('two', 2);

map.get('one'); // 1
map.get('two'); // 2
```

The type includes two methods `set()` and `get()`. The first method accepts two generic parameters: a key and a value. The second method accepts the key and returns the value. Values are stored inside the object as a JavaScript built-in class [Map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).
