
To avoid duplication of fields when working with object types and to reuse existing ones, we can use the Lookup Types mechanism:

```typescript
interface Person {
  name: string;
  age: number;
  location?: {
    country: string;
    city: string;
  };
}

interface PersonDetails {
  location: Person['location'];
}
```

The `Type[Key]` construct looks and works just like getting an object's value by key in JavaScript. But point access won't work here.

Lookup Types also allows you to get a union of types from an object by several known keys, combined with a vertical dash `|`:

```typescript
type User = {
  id: number;
  name: string;
  email: string;
}

type UserFields = User['id' | 'name' | 'email']; // string | number
```

To get the union of all keys from an object, we can use the `keyof` operator.

Let's simplify our example:

```typescript
type User = {
  id: number;
  name: string;
  email: string;
}

type UserFields = User[keyof User]; // string | number
```

In order not to duplicate completely all fields of one object type, auxiliary types are used in another:

* `Pick<Type, Keys>` - creates an object type with `Keys` keys from `Type`
* `Omit<Type, Keys>` - creates an object type from which the `Keys` keys of `Type` are excluded

```typescript
interface Person {
  name: string;
  age: number;
  location?: string;
}

const details: Pick<Person, 'name' | 'age'> = {
  name: 'John',
  age: 42,
};

const details2: Omit<Person, 'location'> = {
  name: 'John',
  age: 42,
};
```

In this example, the type resulting from `Pick<Person, “name” | “age”>` and `Omit<Person, “location”>` will be the same.

All Utility Types in TypeScript are written using inline constructs. We have already learnt enough TypeScript concepts to start dealing with them. So we may wonder how they are implemented.

Let's look at how the `Pick` type is implemented:

```typescript
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

`Pick<T, K>` is a generic type with two parameters: `T` and `K`. On `K` we have also imposed the constraint `extends keyof T`. This means that `K` must contain an enumeration of keys from `T`.

The `in` operator works here in the same way as in normal loops: it searches through all elements of the enumeration. In the example above, all elements in `K` are enumerated. At each iteration, `P` will contain the current element from `K`. Each such element of `P` becomes a key, and for the value we look for a suitable type in the object type `T[P]`.

The operators `keyof` (Lookup Types) and `in` (Mapped Types) often go side by side. With `keyof` we access all the property names of an object type, and with `in` we can loop through all the properties. These operations are key when creating your own auxiliary types when working with object data types.
