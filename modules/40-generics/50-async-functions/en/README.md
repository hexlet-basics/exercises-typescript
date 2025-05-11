
`Promise` have become the most popular way to work with asynchronous code in JavaScript. They avoid the callback hell and also simplify working with asynchronous functions. TypeScript also supports the familiar async/await syntax and typing for working with Promise.

```typescript
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(42);
  }, 1000);
});
```

`Promise` represents a generic with a type that will be returned if successful. In the example above, this is the type `number`.

To continue working in the same style with functions that accept callback, we can promise them. To do this, we need to wrap the function in `Promise`:

```typescript
const wait = (ms: number): Promise<number> => {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};
```

We don't have to describe the type of the return value, since TypeScript will be able to derive it from the type we pass to `Promise`. In addition, from a function that is marked as `async`, `Promise` is returned automatically, and the type of the return value will be wrapped in `Promise`:

```typescript
const getHours = async () => {
  return new Date().getHours();
};

const hoursPromise: Promise<number> = getHours();
```

Since `Promise`, like a container, wraps values within itself, we can use `await` to get a value from it:

```typescript
const hours = await getHours();
```

As in JavaScript in TypeScript `await` can only be used inside functions that are labelled as `async`.

`Promise` together with `async/await` allow us to write asynchronous code in a synchronous style and greatly simplify the handling of asynchronous code. TypeScript supports this syntax and with generics allows us to use it with all the power of typing.
