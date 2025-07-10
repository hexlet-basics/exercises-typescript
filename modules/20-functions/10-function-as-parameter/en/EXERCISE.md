
Implement a `filter()` function that takes an array of numbers and a predicate as input. The latter will be used to check each number for compliance:

```typescript
const numbers = [1, -5, 2, 3, 4, 133];
filter(numbers, (n) => n > 3); // [4, 133]
filter(numbers, (n) => n % 2 == 0); // [2, 4]
```

Function parameters:

1. Array of numbers
2. Anonymous function that takes a number as input and returns a logical value