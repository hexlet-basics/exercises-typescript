
Реализуйте описание обобщенного типа `MyMap`, который представляет собой аналог ассоциативного массива из JavaScript. Тип принимает два параметра — тип ключа и тип значения — и должен работать с любым их сочетанием. Пример использования объекта этого типа:

```typescript
const map: MyMap<string, number> = ...;
map.set('one', 1);
map.set('two', 2);

map.get('one'); // 1
map.get('two'); // 2
map.get('three'); // undefined

const tags: MyMap<number, string[]> = ...;
tags.set(1, ['one']);
tags.get(1); // ['one']
```

Тип включает в себя два метода. Метод `set()` принимает ключ и значение и ничего не возвращает. Метод `get()` принимает ключ и возвращает значение либо `undefined`, если значения с таким ключом нет. Значения хранятся внутри объекта в свойстве `values` в виде встроенного в JavaScript класса [Map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).
