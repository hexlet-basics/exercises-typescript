
Реализуйте описание обобщенного типа `MyMap`, который представляет собой аналог ассоциативного массива из JavaScript. Пример использования объекта этого типа:

```typescript
const map: MyMap<string, number> = ...;
map.set('one', 1);
map.set('two', 2);

map.get('one'); // 1
map.get('two'); // 2
```

Тип включает в себя два метода `set()` и `get()`. Первый метод принимает два дженерик-параметра: ключ и значение. Второй метод принимает ключ и возвращает значение. Значения хранятся внутри объекта в виде встроенного в JavaScript класса [Map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).
