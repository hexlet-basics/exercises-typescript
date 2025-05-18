
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
