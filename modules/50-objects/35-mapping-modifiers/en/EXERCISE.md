Implement the `deepFreeze()` function that takes an object as input and makes it, its fields and all nested objects immutable and returns that object.
Assume that the fields of the object and the fields of the nested objects do not contain arrays, only simple data types and objects.

```typescript
const user = deepFreeze({
  name: 'John',
  password: '1q2w3e',
  token: 'test',
});

user.name = 'Alex'; // Error: Cannot assign to 'name' because it is a read-only property.
```

You need to use JavaScript's built-in [Object.freeze()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) method.