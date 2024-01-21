
В этом уроке мы познакомимся с перечислением. Такая конструкция языка позволяет создать набор имен, а затем обращаться к ним. 

## Использование перечислений

Перечисления используют вместо строк для постоянных значений:

```typescript
enum OrderStatus {
  Created,
  Paid,
  Shipped,
  Delivered,
}

const order = {
  items: 3,
  status: OrderStatus.Created,
};
```

Самый распространенный пример использования перечислений — хранение разных статусов. Но есть и другие случаи. Например, с их помощью хранят различные справочные данные и избавляются от магических значений:

* Направления движения
* Стороны света
* Дни недели
* Месяцы

```typescript
enum CardinalDirection {
  North,
  South,
  East,
  West,
}

const direction = CardinalDirection.North;
```

Перечисление — это и значение, и тип. Его можно указывать как тип в параметрах функции:

```typescript
setStatus(status: OrderStatus)
```

Также перечисления после компиляции превращаются в JavaScript-объект, в котором каждому значению соответствует свойство. У этого свойства есть тип `number` и начинается он с `0`:

```typescript
const status = OrderStatus.Created;
console.log(status); // 0
```

Это позволяет в дальнейшем удобно использовать стандартные методы — например, `Object.keys` и `Object.values`:

```typescript
const statuses = Object.keys(OrderStatus);
console.log(statuses); // ['0', '1', '2', '3', 'Created', 'Paid', 'Shipped', 'Delivered']
```

Среди ключей мы видим числа `'0', '1', '2', '3'`. Компилятор создает такие числовые ключи автоматически, а созданный объект выглядит так:

```typescript
console.log(OrderStatus); // =>
// {
//   '0': 'Created',
//   '1': 'Paid',
//   '2': 'Shipped',
//   '3': 'Delivered',
//   'Created': 0,
//   'Paid': 1,
//   'Shipped': 2,
//   'Delivered': 3
// }
```

Но можно избавиться от создания дополнительных ключей, если указать строковые значения:

```typescript
enum OrderStatus {
  Created = '0',
  Paid = '1',
  Shipped = '2',
  Delivered = '3',
}

const statuses = Object.keys(OrderStatus);
console.log(statuses); // ['Created', 'Paid', 'Shipped', 'Delivered']

console.log(OrderStatus); // =>
//   'Created': '0',
//   'Paid': '1',
//   'Shipped': '2',
//   'Delivered': '3'
// }
```

## Выводы

В этом уроке мы узнали, для чего и как используется перечисление. Также мы разобрали, что его можно указывать как тип в параметрах функции.
