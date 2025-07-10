
Static typing protects the code from a large class of errors related to incorrect use of types. But everything has its own price. In some situations it is enough to add type descriptions, in some situations we have to introduce new and not always simple concepts, for example, generics. In this lesson, we will start to get acquainted with them.

Let's introduce the function of merging two arrays. In JavaScript, this code is written quite simply:

```javascript
const merge = (coll1, coll2) => {
  const result = [];
  result.push(...coll1);
  result.push(...coll2);
  return result;
};

merge([1, 2], [3, 4]); // [1, 2, 3, 4]
merge(['one', 'two'], ['three']); // ['one', 'two', 'three']
```

The convenience of dynamic typing here is that this function automatically works for any arrays, no matter what is stored in them.

This trick will not work in statically typed languages. You will have to specify a specific type:

```typescript
function merge(coll1: number[], coll2: number[]): number[] {
  const result = [];
  result.push(...coll1);
  result.push(...coll2);
  return result;
}

merge([1, 2], [3, 4]); // [1, 2, 3, 4]
```

If you need to merge arrays consisting of strings, you will have to use function overloading. But inside there will be a problem with the returned type, which will be different depending on the input parameters:

```typescript
function merge(coll1: number[], coll2: number[]): number[];
function merge(coll1: string[], coll2: string[]): string[];
```

In languages with true function overloading, the problem will be that there will be many functions that have the same body. That is, in essence, duplication of logic for all possible input types.

This situation is so common and difficult that a whole subsystem in the type system has been created for it. It is called generics.

**Generics** applied to functions is a mechanism that allows you to create such functions which have the same processing logic for different data types. Sometimes such functions are called generalized functions.

Below is an example of implementing the `merge()` function in a generalized form:

```typescript
// or like this
// function merge<T>(coll1: T[], coll2: T[]): T[]
function merge<T>(coll1: Array<T>, coll2: Array<T>): Array<T> {
  // The body of the function did not change!
  const result = [];
  result.push(...coll1);
  result.push(...coll2);
  return result;
}

// Works with any array types
// The arrays themselves must have a matching type
merge([1, 2], [3, 4]); // [1, 2, 3, 4]
merge(['one', 'two'], ['three']); // ['one', 'two', 'three']
```

Here we see a new syntax that we need to get used to. If we don't go into details, the `<T>` entry after the function name indicates that we have a generic in front of us, which is parameterized by type T. T is a designation that we could have used any other capital letter, such as X.

Most often we will see this designation as it is common practice.

What exactly is underneath the type in terms of generic code is not important. It can be an object, a number, a string, or a boolean value. In the example calls above, it's a number for the first call and a string for the second call. You could also make calls with boolean values in the same way:

```typescript
merge([true], [false, false]); // [true, false, false]
```

Further inside the function we see that the logic of work is the same for all types and does not depend on the type. We just move array elements into another array. At this point, the code looks familiar.

We still need to deal with the parameters and the return value.

The `Array<T>` record describes a generalized array - also a generic one, but for a type. In place of this parameter can be any array, for example, `number[]` or `boolean[]`. Accordingly, in the function code we say that we expect two arrays of the same type as input and the same type as output.

The name of the parameter of type T has an important role here. If we used a different letter, it would have to be changed for all the parts inside:

```typescript
function merge<X>(coll1: Array<X>, coll2: Array<X>): Array<X>
```

This is how TypeScript understands that the types of the input arrays and the resulting array are the same. That is, you can't call this function by passing an array of numbers and strings at the same time.

```typescript
const result = merge([1, 2], ['wow']); // Error!
```

But the types may not be the same. Below is an example of a generic that returns the first element of any array and null if it is empty:

```typescript
function first<T>(coll: Array<T>): T | null {
  return coll.length > 0 ? coll[0] : null;
}

first([]); // null
first([3, 2]); // 3
first(['code-basics', 'hexlet']); // code-basics
```

Generics is a big topic that will be covered in the next lessons. Now our task is to familiarize ourselves with the general concept and gradually start using it.
