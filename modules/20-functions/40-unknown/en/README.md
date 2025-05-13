
Using `any` in TypeScript disables type checks, which is not desirable. Also, in the most strict mode with `“strict”: true` in `tsconfig.json`, using `any` is not possible. And this greatly increases the security of the code.

At the same time, there are situations when a type is unknown, but you need to work with it in a type-safe way. For this purpose, TypeScript has an addition to `any` - `unknown`, which will be discussed in this lesson.

## Using unknown type

The main difference between `unknown` and `any` has to do with type checking. `unknown` prohibits performing any operations:

```typescript
let value: unknown = 'code-basics';

value.toUpperCase(); // Error!
value.trim(); // Error!
```

It may seem strange that we have a string here, but you can't perform string operations on it. This is something you have to get used to. The type in statically typed languages is determined not by what we see with our eyes, but by how the type is inferred - automatically or through explicit specification.

The `unknown` type variable is rarely needed - when we need to specify the type further. But everything changes when we need to create a function that can work with any input type. This is a common practice in JavaScript:

```typescript
// Example from lodash
_.isError(new Error); // true
_.isError(Error); // false
_.isError('code-basics'); // false
```

Such a function can be implemented with `any`, but then we will disable type checking:

```typescript
function isError(value: any)
```

It is better to use `unknown`, then TypeScript will protect us against potential type errors:

```typescript
function isError(value: unknown)
```

Then within the function body, we can do the necessary checking to see what we are working with:

```typescript
function isError(value: unknown): boolean {
  return value instanceof Error;
}
```

`instanceof` only works with constructors, so in the example above we are checking if the value is an instance of the `Error` class.
