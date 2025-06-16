
Implement an asynchronous variant of the `map()` function - `asyncMap()`. The first argument of `asyncMap()` takes an array with Promise. The second is a function that is applied to each element. The function should return an array with the results of the function execution for each element:

```typescript
const promisedNumbers = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

asyncMap(promisedNumbers, (num, index) => num * index).then((result) => {
  console.log(result); // [0, 2, 6]
});
```
