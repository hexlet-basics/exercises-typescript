
In this lesson, we will look at multidimensional arrays.

## Working with multidimensional arrays

To define multidimensional arrays, we need to use the `Type[][]` syntax. Literally, this means that we have an array in front of us that contains arrays with values of type `Type`. Some examples:

```typescript
// Type number[][] will be inferred automatically
const items1 = [[3, 8], [10, 4, 8]];

const items2: number[][] = []
// or with Array<number[]>

// Using type alias
type User = {
  name: string;
}

// or with Array<User[]>
const users: User[][] = [
  [{ name: 'Eva'}, { name: 'Adam' }],
];
```

Adding non-arrays to such arrays will cause a typing error:

```typescript
items1.push(99); // Error: Type 'number' is not assignable
```

To define arrays of composite types, you must use parentheses:

```typescript
const coll: (string | number)[][] = [];
coll.push(['hexlet', 5])
```

You can also use the `Array<Array<Array<Type>>` syntax. The example below is an array with arrays containing values of type `Type` inside:

```typescript
const coll: Array<Array<string | number>> = [];
coll.push(['hexlet', 5])
```

Arrays themselves can be part of an object. Technically it allows creating infinite nesting of objects and arrays:

```typescript
type Course = {
  name: string;
  lessons: Lesson[];
}

type Lesson = {
  name: string;
  links: string[];
}
```

Here we define the `Course` type, which contains an array of `lessons`. Each element of this array is an object of type `Lesson`, which contains an array of `links`. Each element of this array is a string. This data structure can be useful, for example, for storing information about courses on the website.

## Creating an array of a given length

The `Array<Type>` notation appears in two different roles. Above we used it as a type annotation, but `Array` is also a constructor. Calling it with a single number gives an array of that length, and the type of the elements is specified in angle brackets:

```typescript
// An array of length 3, its type is null[]
const empty = Array<null>(3);
```

There is a catch: the elements of such an array are not just equal to `null` — they do not exist at all. The array comes out full of holes, and methods like `map()` skip those empty slots:

```typescript
console.log(empty.map(() => 0)); // [<3 empty items>]
```

To avoid this, the array is first filled with the [fill()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) method, and only then is `map()` called:

```typescript
const zeros = Array<null>(3).fill(null).map(() => 0);
console.log(zeros); // [0, 0, 0]
```

A multidimensional array is built the same way. We fill the outer array and then create a new array at each position:

```typescript
const grid = Array<null>(2)
  .fill(null)
  .map(() => Array<null>(2).fill(null));
console.log(grid); // [[null, null], [null, null]]
```
