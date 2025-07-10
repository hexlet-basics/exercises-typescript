
Implement a description of a generic `MyArray` type that represents an analog of an array from JavaScript. Example of using an object of this type:

```typescript
const coll: MyArray<number> = ...;
coll.push(1); // 1
coll.push(10); // 2
coll.push(99); // 3

const newColl = coll.filter((value) => value % 2 == 0);
console.log(newColl.items); // [10]
```

The type includes two methods: [push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) and [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), matching the signature of Array methods. The data inside should be stored in the `items` property. For `push()`, accept the convention that the method takes only one parameter. Ignore the other parameters.
