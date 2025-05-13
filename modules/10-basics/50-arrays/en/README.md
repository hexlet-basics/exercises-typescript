
In this lesson, we'll talk about arrays. TypeScript knows how to output their type, just as it does with primitive data types:

```typescript
const fruits = ['banana', 'mango', 'apple'];
// Everything works
const upperFruits = fruits.map((name) => name.toUpperCase());

// Here, it does not
// Property 'key' does not exist on type 'string'.
const upperFruits = fruits.map((name) => name.key);
```

**Array** is a composite data type that is a container for another type. For example, the type “array of numbers” or “array of strings” are containers that contain strings or numbers.

To denote such a type, square brackets are used: `number[]`, `string[]`.

The definition of an array above could be written as follows:

```typescript
const fruits: string[] = ['banana', 'mango', 'apple'];
```

This is also how types are described in function definitions:

```typescript
function toUpperArray(items: string[]): string[] {
  return items.map((s) => s.toUpperCase());
}
```

In conclusion, arrays can be useful tools when working with data.