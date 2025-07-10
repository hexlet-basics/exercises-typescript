
Implement the `map()` function. It should take as input an array of numbers and a callback, which will be used to convert each number in the array to another number. The function returns an array with new numbers:

```typescript
map([3, 9], (n) => n - 3);
// [0, 6]

map([8, 9], (n) => n + 8);
// [16, 17]
```

Function parameters:

1. Array of numbers
2. Anonymous function that takes a number as input and returns a number. This function has an optional parameter - the index of the element in the array

```typescript
map([8, 9], (n, index) => index + n);
// [8, 10]
```
