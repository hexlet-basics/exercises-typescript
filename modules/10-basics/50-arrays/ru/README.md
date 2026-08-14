В этом уроке мы поговорим про массивы. TypeScript умеет выводить их тип, как и в случае с примитивными типами данных:

```typescript
const fruits = ["banana", "mango", "apple"];
// Все работает
const upperFruits = fruits.map((name) => name.toUpperCase());

// А теперь не работает
// Property 'key' does not exist on type 'string'.
const upperFruits = fruits.map((name) => name.key);
```

**Массив** — это составной тип данных, который представляет собой контейнер для другого типа. Например, массив может быть контейнером для строк или чисел.

Чтобы обозначить такой тип, используются квадратные скобки: `number[]`, `string[]`.

Определение массива выше можно было бы записать так:

```typescript
const fruits: string[] = ["banana", "mango", "apple"];
```

Так же описываются типы в определении функций:

```typescript
function toUpperArray(items: string[]): string[] {
  return items.map((s) => s.toUpperCase());
}
```

В итоге можно сказать, что массивы могут быть полезными инструментами при работе с данными.
