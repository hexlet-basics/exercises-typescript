
Let's imagine that generics have disappeared from the language. Then code duplication will occur. We will have to describe the same algorithm for different data types many times.

Let's take for example the `last()` function returning the last element of an array. Below is its generalized version:

```typescript
function last<T>(coll: T[]): T {
  return coll[coll.length - 1];
}
```

Generics can also be used in arrow functions:

```typescript
const last = <T>(coll: T[]): T => {
  return coll[coll.length - 1];
};
```

Now let's try to implement the same behavior, but without using generics. To do this, we will have to create one function for each type. And the name of the function must be unique:

```typescript
function lastForNumberType(coll: number[]): number {
  return coll[coll.length - 1];
}

function lastForStringType(coll: string[]): string {
  return coll[coll.length - 1];
}

// Here are definitions for all other types
```

If there are several types, the number of functions to be defined will be defined as the product of the number of all possible types by the number of type parameters.

Implementing a generic using an overloaded function simplifies the task. Then you won't have to create new names:

```typescript
function last(coll: number[]): number;
function last(coll: string[]): string;
// Here are definitions for all other types

function last(coll: any[]): any {
  return coll[coll.length - 1];
}
```

In the case of TypeScript, the logic will not even be duplicated, but this is a peculiarity of TypeScript. In other statically typed languages, the logic will have to be duplicated as well.

Whichever implementation we choose, two things must be observed:

* Values passed internally are not used in any way. They are only moved from one place to another
* The logic always remains the same. There are no conditional constructs on data type

In Computer Science, the property of a function that allows values of different types to be processed in one way (using one algorithm) is called parametric polymorphism. That is, generics are TypeScript's implementation of parametric polymorphism.

Parametric polymorphism plays an important role in statically typed languages, where functions have to explicitly specify types. Almost all high-level statically typed languages have it. In Java and C# it is also called generics. C++ uses the name templates, but the meaning doesn't change, although templates in C++ are more than parametric polymorphism.

In contrast to statically typed languages, generics are not needed in dynamically typed languages such as JavaScript, Python, Ruby, PHP. In such languages, any generalized algorithm automatically works for all data types.
