
In this lesson we will talk more about Generic Types. Let's take an array as an example.

An array is a container type that stores values of any specified type inside it. The logic of array operation does not depend on the type of data stored inside. This definition automatically indicates that we are dealing with a generalized type.

To work with such a type, we need to instantiate the internal type at the moment when we want to start working with data of this type:

```typescript
const numbers: Array<number> = [];
numbers.push(1);

const strings: Array<string> = [];
numbers.push('hexlet');
```

The type that is specified inside the angle brackets is called **type parameter**. This name was chosen for a reason - specifying a parameter looks like a function call. Below we will see that this way of looking at generics helps us to better understand how they work.

Let's imagine that we want to define our own collection, which works like an array, but with additional features. Such collections are often made in ORMs to work with data loaded from a database. Let's first describe a specific version of this type that works only with numbers and a couple of standard methods:

```typescript
type MyColl = {
  data: Array<number>;
  forEach(callback: (value: number, index: number, array: Array<number>) => void): void;
  at(index: number): number | undefined;
}
```

Here we see that the collection data is stored in a numeric array. There are two methods defined in the type, one of which (`forEach`) passes the elements of the collection to the colback, and the other (`at`) returns the elements of the collection at the specified index. One possible implementation of this type might look like this:

```typescript
// The types can be omitted as they are specified in `MyColl`
const coll: MyColl = {
  data: [1, 3, 8],
  forEach(callback) {
    this.data.forEach(callback);
  },
  at(index) {
    return this.data.at(index); // target >= ES2022
  },
}

coll.at(-1); // 8
```

Now let's try to generalize this type, i.e. make it generic. To do this, we need to do one simple thing: for elements of the collection, instead of `number` write `T` (or any other name starting with a capital letter) and add `T` as a type parameter to the definition:

```typescript
type MyColl<T> = {
  data: Array<T>;
  forEach(callback: (value: T, index: number, array: Array<T>) => void): void;
  at(index: number): T | undefined;
}
```

This type definition can be viewed as a kind of function definition. When a specific type is specified, for example, `MyColl<string>`, then `T` in this situation is replaced by `string` inside the type definition. And if other generics are used inside the type, they "call" the type further. That is, it all works like nested function calls.

## Limitations of generics

Generics can have limitations. For example, we can say that the type that is passed to a generic must implement some interface. This is done using the `extends` keyword. Suppose we can make our `MyColl` type work only with types that implement the `HasId` interface:

```typescript
interface HasId {
  id: number;
}

type MyColl<T extends HasId | number> = {
  data: Array<T>;
  forEach(callback: (value: T, index: number, array: Array<T>) => void): void;
  at(index: number): T | undefined;
}
```

This allows us to use the `MyColl` type only with types that implement the `HasId` interface. For example, such code will not work:

```typescript
const coll: MyColl<number> = {
  data: [1, 3, 8],
  forEach(callback) {
    this.data.forEach(callback);
  },
  at(index) {
    return this.data.at(index); // target >= ES2022
  },
}
```

Generics themselves are found everywhere in the code of libraries and frameworks. For example, in `React` component types are wrapped in generics so that you can specify props types. Generics can be used to create more generic types that can work with different data types, which we will explore in the next lessons.
