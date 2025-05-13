
Implement a description of the generalized type `MySet`, which is an analog of the JavaScript set `Set`. An example of using an object of this type:

```typescript
const s: MySet<number> = ...;
// Adding an item returns the number of items
s.add(1); // 1
s.add(10); // 2

s.has(1); // true
s.has(8); // false
```

The type includes two methods: `add()` and `has()`. The data inside must be stored in the `items` property.