
TypeScript uses several ways to type functions that are passed as parameters. In this lesson, we will learn how to work with them.

## How to type functions that are passed as parameters

The easiest way to type functions as parameters is to use the `Function` type. It describes a JavaScript function with all its features, including the `bind`, `call` and `apply` properties.

Let's describe the `callback` input parameter of the `process` function:

```typescript
function process(callback: Function) {
  const value = callback();
  // ...
}
```

`Function` disables type checking for the called function. As a result, the number and type of input arguments are not checked, and the result of such a function will be `any`. This may cause logical errors and unexpected behavior:

```typescript
process(Math.round); // ?
```

This example will work, although the behavior is unlikely to be expected, since `Math.round` will be called without arguments and return `NaN`. We therefore recommend avoiding the use of `Function`.

Another way to describe functions is to use an arrow function with input and output types:

```typescript
function process(callback: () => string) {
  // value has type string
  const value = callback();
  // ...
}

process(Math.round);
// Argument of type '(x: number) => number' is not
// assignable to parameter of type '() => string'.
```

The definition of an arrow function is similar to the real one, but it is important not to get confused here. Here we see exactly a type description, not a function definition.

Let's look at a few more examples to reinforce the knowledge:

```typescript
function process(callback: () => number)
function process(callback: () => string[])
function process(callback: () => { firstName: string; })
```

Parameters are syntactically specified in the same way as for arrow functions:

```typescript
function process(callback: (n: number) => string) {
  const value = callback(10);
  // ...
}
```

Here we have defined a `callback` type function with parameter `n` with type `number` and return value `string`.

If a function definition occurs frequently, you can create an alias for it:

```typescript
type myFunction = (n: number) => string;

function process(callback: myFunction) {
  const value = callback(10);
  // ...
}
```

Such an entry simplifies code reading and avoids duplication.