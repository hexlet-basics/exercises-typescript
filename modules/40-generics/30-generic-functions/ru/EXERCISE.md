
Реализуйте описание обощенного типа `MyArray`, который представляет аналог массива из JavaScript. Пример использования объекта этого типа:

```typescript
const coll: MyArray<number> = ...;
coll.push(1); // 1
coll.push(10); // 2
coll.push(99); // 3

const newColl = coll.filter((value) => value % 2 == 0);
console.log(newColl.items); // [10]
```

Тип включает в себя два метода: [push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) и [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), совпадающие по сигнатуре с методами Array. Данные внутри должны храниться в свойстве `items`. Для `push()` примем соглашение, что метод принимает только один параметр. Игнорируйте остальные параметры.
