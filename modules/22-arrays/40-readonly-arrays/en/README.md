
In JavaScript development, where higher-order functions such as `map`, `filter` and `reduce` are heavily used, arrays are rarely changed. Usually new ones are created instead.

Technically, JavaScript cannot forbid changing existing arrays, so it is the responsibility of the programmer to enforce this rule. In this tutorial, we'll look at working with read-only arrays.

## Using immutable arrays

In TypeScript, working with immutable arrays is built into the type system. To guarantee immutability, an array is marked with the `readonly` modifier:

```typescript
function process(numbers: readonly number[]) {
  numbers.push(1); // Error!
}
```

In this case, TypeScript returns the error that the `readonly number[]` type does not contain a `push` method.

The `readonly` modifier prohibits modification of an array, but does not prohibit modification of objects that are inside the array:

```typescript
const items: readonly ({ key: string })[] = [{ key: 'value'}];
items[0].key = 'another value'; // ok!
```

We have successfully modified the value of the `key` property in an object that is inside an array.

The `readonly` modifier is syntactic sugar. In the case of an array, `readonly` changes the type of `Array` to the type `ReadonlyArray`. Such a record as `Array<Type>` improves code readability, but otherwise does not differ from `readonly Type[]`.

The code above could be written like this:

```typescript
const items: ReadonlyArray<{ key: string }> = [{ key: 'value'}];
```
