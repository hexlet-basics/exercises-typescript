
Along with union, an important operation in set theory is intersection. For developers who are used to the dynamics of JavaScript, this operation may seem less important. But you can't do without it, for example, when describing the merge type of objects.

The intersection is indicated with the `&` symbol, on both sides of which the types are located.

Let's define the type of the object with the order status, and then a stricter type with the exact price:

```typescript
type Order = {
  status: 'Created',
}

type OneHundredOrder = Order & {
  cost: 100
}

const myOrder: OneHundredOrder = {
  status: 'Created',
  cost: 100
}
```

From the intersection of object types with the fields `status` **And** `cost` we get the type `OneHundredOrder`, which contains both of these fields.

A type is a set of values. When we define an intersection of types, we get a new type that contains values that fit the constraints of both types.

![NumberOrString](https://raw.githubusercontent.com/hexlet-basics/exercises-typescript/main/modules/25-types/30-intersection-types/assets/one_hundred_order.png)

If we declare a variable `const StringAndNumber: string & number`, we need to assign to it a value that simultaneously belongs to the sets `string` and `number`. That is, it is both a string and a number. Such a value does not exist, so `StringAndNumber` will be of type `never`. `never` corresponds to an empty set - a type that does not have any value.
