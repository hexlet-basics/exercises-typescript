
Implementa una versión asíncrona de la función `map()`: `asyncMap()`. Como primer argumento, `asyncMap()` recibe un array de Promise. Como segundo, una función que se aplica a cada elemento. La función debe devolver un array con los resultados de aplicar la función a cada elemento:

```typescript
const promisedNumbers = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

asyncMap(promisedNumbers, (num, index) => num * index).then((result) => {
  console.log(result); // [0, 2, 6]
});
```
