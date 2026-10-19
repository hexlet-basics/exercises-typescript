
In this lesson, we'll look at the rest and spread operators.

## Rest Operator

The rest operator lets you create functions with a variable number of parameters and collect them into an array:

```typescript
function max(...numbers: number[]): number {
  return Math.max(...numbers);
}
```

This array is a regular function parameter, so it gets a type that matches the values expected inside the array. An example with two parameters:

```typescript
function calculate(operation: string, ...numbers: number[]) {
  // Perform the operation on all numbers
}
```

In this sense, the rest operator in TypeScript is no different from the rest operator in JavaScript. But the spread operator has one peculiarity.

## Spread Operator

The spread operator in functions is the rest operator in reverse. It lets you spread an array into separate arguments:

```typescript
const numbers = [1, 2, 3];
Math.max(...numbers);
```

If a function accepts any number of arguments, as in the example above, this code works without problems. But if a function accepts a fixed number of arguments, TypeScript reports a compilation error:

```typescript
function sum(a: number, b: number): number {
  return a + b;
}

// The inferred type number[] means zero or more numbers,
// not an array of two numbers
const args = [1, 2];
sum(...args);
// A spread argument must either have a tuple type
// or be passed to a rest parameter.
```

In the example above, TypeScript can't tell that the `args` array consists of two numbers. Arrays in JavaScript are mutable, so TypeScript can't rely on the number of elements at a particular moment. There are different ways to get around this limitation, but here the simplest is a Type Assertion, which tells the compiler what we know for sure about the code:

```typescript
const args = [1, 2] as const;
```

We'll talk more about Type Assertion in the module on types. With it, we explicitly state that this array consists of two specific values that won't change.
