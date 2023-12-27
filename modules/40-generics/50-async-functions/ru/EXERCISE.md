
Реализуйте асинхронный вариант функции `map()` - `asyncMap()`. Первым аргументом `asyncMap()` принимает массив с Promise. Вторым — функцию, которая применяется к каждому элементу. Функция должна вернуть массив с результатами выполнения функции для каждого элемента:

```typescript
const promisedNumbers = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

asyncMap(promisedNumbers, (num, index) => num * index).then((result) => {
  console.log(result); // [0, 2, 6]
});
```
