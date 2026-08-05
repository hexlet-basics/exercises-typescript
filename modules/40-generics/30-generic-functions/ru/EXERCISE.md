
Реализуйте описание обобщенного типа `MyArray`, который представляет аналог массива из JavaScript. Пример использования объекта этого типа:

```typescript
const coll: MyArray<number> = ...;
coll.push(1); // 1
coll.push(10); // 2
coll.push(99); // 3

const newColl = coll.filter((value) => value % 2 == 0);
console.log(newColl.items); // [10]
```

Тип включает в себя два метода: [push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) и [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). `push()` принимает значение того же типа, что и элементы коллекции — в отличие от метода `Array`, примем соглашение, что параметр только один. `filter()` принимает колбек с такими же параметрами, как у одноименного метода `Array`: `value`, `index` и `array`. Данные внутри должны храниться в свойстве `items`.

А вот возвращаемые значения совпадают не полностью. `push()`, как и в `Array`, возвращает новую длину коллекции. `filter()` же возвращает не массив, а новую коллекцию типа `MyArray<T>` — поэтому в примере выше у результата фильтрации есть свойство `items`.
