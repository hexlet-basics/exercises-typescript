
В этом уроке мы поговорим про массивы. TypeScript умеет выводить их тип, как и в случае с примитивными типами данных:

```typescript
const fruits = ['banana', 'mango', 'apple'];
// Все работает
const upperFruits = fruits.map((name) => name.toUpperCase());

// А так уже нет
// Property 'key' does not exist on type 'string'.
const upperFruits = fruits.map((name) => name.key);
```

**Массив** — это составной тип данных, который представляет собой контейнер для другого типа. Например, тип «массив чисел» или «массив строк» — это контейнеры, содержащие в себе строки или числа. 

Чтобы обозначить такой тип, используются квадратные скобки: `number[]`, `string[]`.

Определение массива выше можно было бы записать так:

```typescript
const fruits: string[] = ['banana', 'mango', 'apple'];
```

Так же описываются типы в определении функций:

```typescript
function toUpperArray(items: string[]): string[] {
  return items.map((s) => s.toUpperCase());
}
```

В заключении можно сказать, что массивы могут быть полезными инструментами при работе с данными.
