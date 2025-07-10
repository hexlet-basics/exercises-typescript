
In this lesson, let's learn about the `never` type.

## Using Never Type

The `never` type is used when a function is guaranteed to return nothing. For example, if there is an infinite loop inside the function:

```typescript
function infiniteLoop(): never {
  while (true) {
    // Some logic
  }
}
```

We explicitly stated that the `infiniteLoop` function returns nothing.

The `never` type is also used if a function throws an exception:

```typescript
function stop(message: string): never {
  throw new Error(message);
}
```

Also, the `never` type is used when the function terminates the program:

```typescript
function exit(code: number = 0): never {
  process.exit(code);
}
```

An important condition for `never` is that there is no normal termination of the function. For example, in the example below, the compiler will generate an error:

```typescript
// A function returning 'never' cannot have a reachable end point.
function printSomething(): never {
  console.log('hexlet');
}
```

The `printSomething()` function returns nothing explicitly. But since it terminates in principle, JavaScript substitutes an implicit return of `undefined`.

`never` is automatically output even where an explicit return is specified. But the compiler sees that this return is impossible:

```typescript
function fail() { // Automatically inferres never
  // function exit, declared above, have never return type
  return exit(1);
}
```
