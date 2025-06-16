
Generic classes, like generic functions, allow you to create classes that can handle different data types. For example, a `Triple` class can store three values of any type. In this case, instead of creating classes for each type, you can create a generic class that will work with any data type.

```typescript
class Triple<T, U, V> {
  constructor(protected first: T, protected second: U, protected third: V) {}

  getFirst(): T {
    return this.first;
  }

  getSecond(): U {
    return this.second;
  }

  getThird(): V {
    return this.third;
  }
}
```

In this example, the `Triple` class is a generic class into which we can put any data types. In doing so, we still have the type safety guarantees and type inference that we got when using generalized functions:

```typescript
const triple = new Triple(1, 'string', null);
const first = triple.getFirst(); // number
const second = triple.getSecond(); // string
```

It is also possible to inherit from generalized classes. For example, the `Pair` class can be an inheritor of the `Triple` class, which stores two values of any type:

```typescript
class Pair<T, U> extends Triple<T, U, never> {
  constructor(first: T, second: U) {
    super(first, second, undefined as never);
  }

  getFirst(): T {
    return this.first;
  }

  getSecond(): U {
    return this.second;
  }
}
```

Here we have used a cast to type `never` to mark the third parameter as missing.

Like ordinary classes, generalized classes can also be used as types of function parameters:

```typescript
function swap<T, U>(pair: Pair<T, U>): Pair<U, T> {
  return new Pair(pair.getSecond(), pair.getFirst());
}
```

Generic classes are useful when we need to create some kind of container to store data, as in the `Pair` class example. `Array`, `Map`, `Set` are generic classes that store elements of a given type.
