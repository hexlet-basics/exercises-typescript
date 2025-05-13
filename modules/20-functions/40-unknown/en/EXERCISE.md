
Write the `isPlainObject()` function that checks if the passed value is an object. This function considers that the array is not an object:

```typescript
isPlainObject(1); // false
isPlainObject('hexlet'); // false
isPlainObject({}); // true
isPlainObject({ name: 'code-basics' }); // true
isPlainObject([1, 8]); // false
```
