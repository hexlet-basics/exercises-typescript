
In this lesson, we will look at the `void` type. It is specified as a return for functions that return nothing.

## Using Void Type

`void` is automatically printed when there is no `return` instruction inside the function, or it is empty:
```typescript
function noop() {
  // inside is empty
}
```

In JavaScript, such functions return `undefined`, but in TypeScript `void` and `undefined` are different types. They differ in contextual typing, and this happens because of the way JavaScript itself works. The most striking example is the `forEach()` method.

The `forEach()` method does not use the data returned by the passed callback, which is called internally. It might be logical to define the return as `undefined`, but let's look at an example:

```typescript
const numbers = [1, 2, 3];
const result = [];

numbers.forEach((n) => result.push(n));
```

The `push()` method returns the new length of the array. If `forEach()` required the callback to return `undefined`, this code would cause a compilation error. It would have to be rewritten, for example, like this:

```typescript
// Now the callback returns nothing,
// so the result of calling is undefined
numbers.forEach((n) => {
  result.push(n);
});
```

To avoid writing such code, `void` was introduced. It allows you to return any data, but makes its use meaningless.

We can define the type of the function that returns `void` and use it to type the variable:

```typescript
type VoidFunc = () => void;

// The type of function is defined through the context
// of assigning it to a variable with the VoidFunc type
const f: VoidFunc = () => true;

const v = f();
```

Although `f()` returns `true`, the variable `v` is of type `void`. This means that we cannot use it for anything other than assigning it to another variable of type `void`.

There is a single situation where specifying `void` explicitly forbids a return from a function. This is the definition of a function outside the context of use, when its type is explicitly specified:

```typescript
function foo(): void {
  return true; // Error!
}

const bar = function(): void {
  return true; // Error!
};
```

In this case, returning any value will result in a compilation error.

Also, `void` is a JavaScript operator, so it's important not to get confused with it. It evaluates the expression that follows it and returns `undefined`:

```typescript
void 10 === undefined // true
```
