
## Using enums

In this lesson, we will learn about enumerations (commonly known as enums). This language construct allows you to create a set of names and then refer to them.

Enums are used in place of strings for constant values:

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

The most common use case for enums is storing different statuses. But there are other cases as well. For example, they are used to storing various reference data and get rid of magic values:

* Movement directions
* Sides of the world
* Days of the week
* Months

```typescript
enum CardinalDirection {
  North,
  South,
  East,
  West,
}

const direction = CardinalDirection.North;
```

An enum is both a value and a type. It can be specified as a type in function parameters:

```typescript
setStatus(status: OrderStatus)
```

Also, enums are turned into a JavaScript object after compilation, where each value corresponds to a property. This property has type `number` and starts with `0`:

```typescript
const status = OrderStatus.Created;
console.log(status); // 0
```

This allows for convenient use of standard methods - for example, `Object.keys` and `Object.values` - in the future:

```typescript
const statuses = Object.keys(OrderStatus);
console.log(statuses); // ['0', '1', '2', '3', 'Created', 'Paid', 'Shipped', 'Delivered']
```

Among the keys we see the numbers `'0', '1', '2', '3'`. The compiler creates such numeric keys automatically, and the created object looks like this:

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

But we can get rid of creating additional keys by specifying string values:

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
// {
//   'Created': '0',
//   'Paid': '1',
//   'Shipped': '2',
//   'Delivered': '3'
// }
```

## Conclusions

In this lesson, we learned what an enumeration is used for and how it is used. We also learned that it can be specified as a type in function parameters.