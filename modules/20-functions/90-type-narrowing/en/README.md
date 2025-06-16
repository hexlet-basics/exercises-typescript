
In this lesson, we will learn about type narrowing.

## Using type narrowing

In JavaScript, it is common to encounter code that may contain values of different types in the same variables. These are handled based on logical checks using `typeof` and other similar mechanisms.

Below is an example implementation of a function that converts any passed value to `boolean`:

```typescript
function isPresence(value: unknown): boolean {
  if (value === null || value === undefined) {
    return false;
  }
  // empty string
  if (typeof value === 'string') {
    if (value === '') {
      return false;
    }
  }
  // empty array
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return false;
    }
  }
  // empty object
  if (value instanceof Object) {
    if (Object.keys(value).length === 0) {
      return false;
    }
  }

  return true;
}

isPresence(''); // false
isPresence({}); // false
isPresence([]); // false
isPresence([1, 3]); // true
isPresence(10); // true
```

In this code, the parameter is of type `unknown`. Internally, TypeScript allows you to perform different actions with this parameter. They will depend on the given conditions.

In this case, the type checking is done statically before the code is executed. And the conditions inside the function are a part of the code that is executed at runtime. It turns out that this code should end with an error, but it doesn't.

Since such code is common in JavaScript, the TypeScript type system had to be modified so that it would still be possible to write such code.

In this case, it turns out that TypeScript is able to execute some of the conditional constructs statically, as a type compatibility check, without running the code. Then, inside the conditional block, the compiler assumes that the type of the value matches what was in the check itself. This process in TypeScript is called **Type Narrowing** - type narrowing.

Type narrowing doesn't just work for the `unknown` type. It is a universal mechanism that works with all possible types, such as Union Types:

```typescript
function foo(value: number | string) {
  if (typeof value === 'number') {
    // Processed like a number
  }
  if (typeof value === 'string') {
    // Processed like a string
  }
}
```

`switch` also supports type narrowing:

```typescript
function foo(value: number | string) {
  switch (typeof value) {
    case 'number':
      // some kind of logic
      break;
    case 'string':
      // some kind of logic
      break;
  }
}
```

Within each `case` block, the type of the value is narrowed down to what was in the `case` itself.

Function overloading in TypeScript is also an example of how type narrowing works:

```typescript
function concat(a: number, b: number): string;
function concat(a: string, b: string): string;

function concat(a: any, b: any): string {
  if (typeof a === 'string') {
    return `${a}${b}`; // (parameter) a: string
  } else {
    return `${a.toFixed()}${b.toFixed()}`;
  }
}
```

## Type Guard

In the examples, we used `typeof` for type checking. This is a special case of a **type guard**.

We can also define our own type guards using a function and the `is` keyword. Let's write a function that checks that the passed value is an object:

```typescript
function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}
```

Here we use the `is` keyword to indicate that the passed value is an object. Inside the function, we must return `true` or `false`. In our example, we specify the return type as `value is object`. This means that we are asserting that `value` is an object. Such a notation also allows us to narrow down types.

```typescript
function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}

function foo(value: unknown) {
  if (isObject(value)) {
    // (parameter) value: object
  }
}
```

Type narrowing is a big topic with many nuances. It is often found in TypeScript, so you will be able to deal with it in constant practice. You can read more about the peculiarities of this mechanism in the documentation - link at the end of the lesson.
