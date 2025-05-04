
In programming there are situations when we work with a limited set of values of some type, for example, with certain strings. They may include reference data, statuses and so on. How the order status could look like:

```
Created
Paid
Shipped
Delivered
```

The code that handles this data will save it to the database, send and receive it over the network, and check the status of the order.

If we always use only generic types for such data, such as `string`, we will lose many advantages, e.g.:

* The compiler will not see typos
* The compiler will not see the use of invalid statuses
* We won't be able to see what statuses we have.
* The editor's autocomplete won't work

To solve this problem, TypeScript supports literal types. They represent a set consisting of only one element. They are only available for the following types: `string`, `boolean`, `number`, and `BigInt`:

```typescript
type Hexlet = 'hexlet';
type One = 1;
type False = false;
type BigN = 100n;
```

From the point of view of set theory, such a type represents a set that consists of a single element. And for a type system it is a restriction - nothing but the specified value can be assigned to a variable:

```typescript
type TestValue = 'test';
let test: TestValue = 'test';

test = 'string'; // Error: Type '"string"' is not assignable to type '"test"'.
```

## Combining literal types

Using type union, we can get a type that takes only the values we need:

```typescript
type OrderStatus = 'Created' | 'Paid' | 'Shipped' | 'Delivered';
```

Literal types can be also combined with any other types. In this way we can get the restriction that all numbers and `false` fall under:

```typescript
type NumberFalse = number | false;
```

## String enums

The problem described in this tutorial is implemented in most languages through enumerations, which are also added to TypeScript:

```typescript
enum OrderStatus {
  Created = 'Created',
  Paid = 'Paid',
  Shipped = 'Shipped',
  Delivered = 'Delivered',
}
```

But TypeScript is not so good with enumerations.

TypeScript is an add-on to JavaScript that adds types, but does not change the language itself.

This is not the case with Enum. Enums are a language construct that remains to exist in the code after the code is translated into JavaScript.

For this reason, some developers use Union Types instead, which allow you to do pretty much the same thing with string literals.

However, it is still recommended to use Enum in application code, as it provides additional guarantees of reliability. And use Union Types in library code, as it is more flexible and provides additional possibilities.

## Literal objects

When configuring libraries, we encounter cases where we are expected to have one of the strings. For example, we are given a choice of several databases:

```typescript
const dataSourceConfig = {
  type: 'postgre', // can be also mysql
  host: 'localhost',
  port: 5432,
};

const AppDataSource = new DataSource(dataSourceConfig)
```

The object literal type is used to describe such objects, where the fields are initialized with a single literal type or their intersection:

```typescript
type DataSourceOption = {
  type: 'postgre' | 'mysql';
  host: string;
  port: number;
}
```

With this type, we can ensure that the passed object contains only one of the two values in the `type` field, which acts as both documentation and constraint.

This gives library authors an additional documentation tool and developers an autocomplete, and keeps them from making mistakes in the arguments passed.

## Convert to literal type

In the case of configuration objects, we often don't want them to be changed externally and expect specific values internally. This is where type conversion to literal via Type Assertion `as const` comes in handy:

```typescript
const ormConfig = {
  type: 'mysql',
  host: 'localhost',
  port: 5432,
} as const;
```

On the output we get a type with immutable (`readonly`) fields and literal types in the value. This technique also applies to arrays. It turns them into tuples - fixed-length arrays, also protected from change. And it also applies to simple types, such as `string`:

```typescript
const str = 'test' as const;

type Str = typeof str; // 'test'
```

In this way, we can create types that will contain only certain values. This allows us to get additional guarantees from the compiler and simplify code handling.
