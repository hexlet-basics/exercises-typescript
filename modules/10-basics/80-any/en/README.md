
In this lesson, we'll break down the special type `any` that is added to TypeScript.

## The usefulness of the `any` type

The `any` type is used where type checking is not needed, or when TypeScript cannot derive the data type automatically:

```typescript
// In this case the type will be any[]
// because TypeScript cannot infer its content 
// as it does not yet exist
const items = [];
// We can add anything we want
items.push(1);
items.push('code-basics');
```

`any` turns TypeScript into JavaScript, since data with that type is no longer validated:

```typescript
// The error will occur only when the JS code is running
let value: any = 5;
value.toString(); // ok
value(); // ok, but will be an error if the JS code is executed
value.trim(); // ok, but will be an error if the JS code is executed
value = 'wow'; // ok
```

However, `any` is useful in many cases. For example, when you need to translate a project from JavaScript to TypeScript. In this case, all types are first declared as `any` and then rewritten to the required types.

Also, `any` is used to work with JavaScript libraries from TypeScript code that do not have any described types. In other cases, `any` should be avoided, as it loses the whole point of using the TypeScript language.

Let's consider the first case in more detail.

## From JavaScript to TypeScript

Let's take the code that counts the number of words in a sentence as an example:

```javascript
const sentence = 'table cat table dog dog apple table';

const words = sentence.split(' ');
const initial = {};
const result = words.reduce((acc, word) => {
  acc[word] = Object.hasOwn(acc, word) ? acc[word] + 1 : 1;
  return acc;
}, initial);
// { table: 3, cat: 1, dog: 2, apple: 1 }
```

The TypeScript compiler will not allow such code. It will indicate that the object that is in the `initial` constant does not contain keys with string type:

```
No index signature with a parameter of type 'string' was found on type '{}'.
4 acc[word] = Object.hasOwn(acc, word) ? acc[word] + 1 : 1;
```

This is so because the structure of an object specifies its type at definition time. Also, the structure cannot be changed during operation. But in the code above, the object is initially empty, but as it works, it is filled with keys dynamically.

We will learn how to set the correct type in a situation with dynamic keys later. For now, let's make the code work using `any`. To do this, we need to define an object with an explicit type specification:

```typescript
const sentence = 'table cat table dog dog apple table';

const words = sentence.split(' ');
const initial: any = {}; // Set type as any
const result = words.reduce((acc, word) => {
  acc[word] = Object.hasOwn(acc, word) ? acc[word] + 1 : 1;
  return acc;
}, initial);
```

TypeScript no longer shows a compilation error, which is good on the one hand. But on the other hand, the validity check itself is disabled. If you later call a non-existent property in this object, TypeScript will not show an error.

## Conclusions

In this lesson we learned how to work with the `any` type. We also learned what it is used for and in what cases.
