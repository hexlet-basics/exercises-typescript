
Try defining the `forEach()` function for numbers on your own:

```typescript
forEach([1, 2, 3], (n) => console.log(n));
// 1
// 2
// 3

const result = [];
forEach([1, 2, 3], (n) => result.push(n));
// [1, 2, 3]
```

Function parameters:

1. Array of numbers
2. Anonymous function that takes a number as input and returns `void`. This function has an optional parameter - the index of the element in the array

```typescript
forEach([8, 9], (n, index) => console.log(index + n));
// 8
// 10
```
