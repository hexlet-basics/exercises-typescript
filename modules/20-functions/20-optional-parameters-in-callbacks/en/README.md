
In this lesson, we'll break down optional parameters in functions.

## Using optional parameters in functions

Optional parameters in functions are used in JavaScript built-in functions when a parameter is optional. Optional parameters are specified with a question mark after the variable name before the colon.

For example, the `split()` function splits a string into an array of strings by delimiter:

```typescript
function split(str: string, separator?: string)

split('hexlet');
split('hexlet,code-basics', ',');
```

In this case, the real type of the `separator` variable will be `string | undefined` (`string` or `undefined`).

Another option to set an optional parameter is to assign a default value:

```typescript
// The question mark is no longer there, as there is a default value
function split(str: string, separator: string = ',') {
  // ...
}

split('hexlet');
split('hexlet,code-basics', ',');
```

Developers try to apply this logic to the callbacks, but encounter errors. Let's analyze why this happens.

## Callback functions

Let's introduce the `filter()` function, which filters numeric arrays according to a passed predicate:

```typescript
// Optional parameter index
function filter(coll: number[], callback: (arg: number, index?: number) => boolean) {
  const result: number[] = [];
  coll.forEach((n, index) => {
    // Here it is passed to the callback
    if (callback(n, index)) {
      result.push(n);
    }
  });
  return result;
}
```

As in the built-in `filter()` method, in this function callback takes the index of the array element to be processed as the second parameter. Usually it is not used, but sometimes array filtering is done on the basis of indices. And in this situation it is specified. For this purpose, we have marked this parameter as optional.

The problem with the definition above is that it doesn't work:

```typescript
// Will run without errors
filter([1, 2], (n) => n > 1);
// Object is possibly 'undefined'
filter([1, 2], (n, index) => index > n);
```

In this case, the error indicates that, due to the optional nature within the callback, it could theoretically be undefined. However, logically, this cannot happen since the index is always defined.

To solve this situation, we need to do away with optionality:

```typescript
function filter(coll: number[], callback: (arg: number, index: number) => boolean) {
  // ...
}
```

If a JavaScript function is called with more parameters than defined, the extra ones are ignored. TypeScript behaves in the same way. Callbacks with fewer parameters can always appear where they are expected with more parameters, provided the types of the common parameters match.

In the example above, the function `(n) => n > 1` is passed as an argument and called as `callback(n, index)`. This causes `index` to be ignored, and no type errors occur.