
Usually, arrays can change their size and contain any number of values starting with zero. Therefore, an empty array as a `[]` value is valid for arrays of any type.

At the same time, sometimes arrays act as a simplified version of an object, where the number of values and their order are strictly defined. For example, you can use such an array to represent a point on the surface: `[x, y]`.

Such arrays are needed to save characters when you have to create a lot of identical data, such as for testing.

In TypeScript, such arrays are called tuples, which we will learn about in this lesson.

## Using tuples

Tuples have their own definition syntax. For example, consider the representation of a point:

```typescript
const point: [number, number] = [1, 3]
// Can be changed
const point[0] = 4;

// Accessing a non-existent index will result in an error
point[3]; // Error!

// Can't create a non-matching type
const point2: [number, number] = [1, 'x']; // Error!
```

Since tuples have a fixed number of elements, it would make sense if the same behaviour applied to `push()` or `pop()`. After all, if we have defined a tuple of two elements, there should be exactly two elements.

In practice, the code below will work:

```typescript
point.push(10);
console.log(point); // [4, 3, 10];
```

This behaviour persists for [backwards compatibility](https://stackoverflow.com/questions/64069552/typescript-array-push-method-cant-catch-a-tuple-type-of-the-array). And the general recommendation is not to try to change the size of a tuple.

Tuples may consist of elements of different types:

```typescript
type HTTPResponse = [number, string];

// The order of definition is important
const response: HTTPResponse = [404, 'Page is not found'];
// This won't work ['Page is not found', 404]
```

Some of them may be optional. In this case, the optional elements must be at the end of the tuple:

```typescript
type HTTPResponse = [number, string?];

const response1: HTTPResponse = [500];
const response2: HTTPResponse = [201, 'Created'];
```

In the example above, the first element of the array must always be a number and the second element must always be a string or may be missing.

If you create variables for tuples and use an alias, you must specify it explicitly. Otherwise, from a TypeScript point of view, an ordinary array will be created:

```typescript
// Will have (string | number)[] type
const response = [201, 'Created'];
```
