
When we assign a value or pass arguments to a function call, TypeScript checks the types for compatibility. When we pass arguments to a function, the check is performed on both the parameter types and the return types.

If we pass a function that returns a number as a callback to a sorting function that expects a return value of -1 | 0 | 1, we'll get an error: Type 'number' is not assignable to type '0 | 1 | -1':

```typescript
type ComparatorCallback = (item1: number, item2: number) => -1 | 0 | 1
declare function sort(arr: Array<number>, callback: ComparatorCallback): Array<number>

const arr = [1, 2, 3];
const comparator = (item1: number, item2: number) => Math.sign(item1 - item2);
// (item1: number, item2: number) => number;

sort(arr, comparator); // Error: Type 'number' is not assignable to type '0 | 1 | -1'.
```

The set of values from the union of three literal types `-1 | 0 | 1` is a subset of `number`. But from the error we can understand that the returned type must be either the same or narrower. This type checking behavior is called **covariance**.

To solve the problem with `ComparatorCallback`, we need to narrow the return type of the `comparator` function to `-1 | 0 | 1` or narrower. Let's rewrite the code without `Math.sign` to return the required type:

```typescript
type ComparatorCallback = (item1: number, item2: number) => -1 | 0 | 1
declare function sort(arr: Array<number>, callback: ComparatorCallback): Array<number>

const arr = [1, 2, 3];
const comparator = (item1: number, item2: number) => {
// (item1: number, item2: number) => -1 | 0 | 1;
    if (item1 === item2) {
        return 0;
    }

    return item1 > item2 ? 1 : -1;
};

sort(arr, comparator);
```

The code now passes type checking. The `comparator` return type has become narrower than the one required in `ComparatorCallback`.

For function arguments, the type checking is done in reverse order. If we pass a function that expects literal type `1` instead of `number`, we get the error `Type 'number' is not assignable to type '1'.`:

```typescript
type ComparatorCallback = (item1: number, item2: number) => -1 | 0 | 1
declare function sort(arr: Array<number>, callback: ComparatorCallback): Array<number>

const arr = [1, 2, 3];
const comparator = (item1: 1, item2: number) => Math.sign(item1 - item2) as -1 | 0 | 1;

sort(arr, comparator); // Type 'number' is not assignable to type '1'.
```

The type `1` is a subset of `number`. And in our example, we pass a function that expects a narrower type on input to the `sort` function. You may also notice that we cast the return value type to `-1 | 0 | 1` using the `as` keyword. We needed a down conversion because the `Math.sign` typing returns `number`.

When we pass arguments to a function, the expected types of the parameters should be broader than the actual types. This type checking behavior is called **contravariance**.

Try to explain the behavior of type checking through variability yourself in the following example:

```typescript
type Formatter = (val: string) => string;

const formatToConcrete: Formatter = (): 'test' => 'test';
const formatToNumber: Formatter = (val: '1') => val; // Error!
```

<details>
  <summary>Answer</summary>
  The parameter type can be wider and the output type can be narrower.
  In the example, formatToConcrete takes no parameters. This gives a wider type than the required string. And it returns a narrower literal type. formatToNumber expects a narrower type on the input, that's why the error occurs.
</details>


If you consider the legacy of JavaScript with utility typing when working with TypeScript, everything falls into place.

To prevent the code from crashing with an error, it is enough to check for the presence of fields or methods of the required types. And to get guarantees in the outside world, you need the variable to fall under external constraints. For this purpose, the type must be narrower or the same.
