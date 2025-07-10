
Generics, like ordinary functions, can have several type parameters. In this lesson, we will analyze such generics.

The principle of generics does not change from the number of parameters. The only thing you need to keep an eye on is the names:

```typescript
type Double<T, U> = {
  first: T;
  second: U;
}

const value: Double<string, number> = {
  first: 'code-basics',
  second: 1,
}
```

## Type inference from function arguments

Let's imagine that we need to call a function with several parameters. The arguments are represented by generics.

For example, the function `join()` can be described as follows:

```typescript
function join<T, U>(coll1: (T | U)[], coll2: U[]): (T | U)[] {
  return coll1.concat(coll2);
};

join<number, string>([1, 2], ['one', 'two']); // [1, 2, 'one', 'two']
```

But TypeScript allows us to do this more easily and not have to specify types for all parameters:

```typescript
join([1, 2], ['one', 'two']); // [1, 2, 'one', 'two']
```

TypeScript will infer the types for the function parameters itself. This is called type inference from function arguments. In this case, TypeScript will infer the types `number` and `string` for the parameters `T` and `U` respectively.

We will learn about TypeScript's built-in generics that have two parameters in the following lessons. In real programming, such generics are often found in application code, such as in React.
