
In this lesson, we will learn how to work with type unions, which play a big role in TypeScript. They allow us to express a common situation in JavaScript where the return value or function argument can be of different types. For example, the `String.prototype.at()` method can return a value of type `string` or `undefined`.

Concatenation is indicated by the `|` forward slash operator, with types on either side of it.

Let's define our type for the function `at`:

```typescript
type at = (str: string, position: number) => string | undefined;
```

From the point of view of set theory, the union operation means union. When we combine several sets, we get a new set that includes all the elements of the original sets.

In TypeScript, this means that we end up with a type that promises to contain a variable of one of the union types. This is how we can have a type that includes all the strings **OR** of a number:

```typescript
type NumberOrString = number | string;

let val: NumberOrString = 10; // OK
val = 'My string'; // OK
val = true; // Type 'boolean' is not assignable to type 'NumberOrString'.
```

![NumberOrString](https://raw.githubusercontent.com/hexlet-basics/exercises-typescript/main/modules/25-types/20-union-types/assets/number_or_string.png)

In practice, there are often cases where we need to support a function with many valid values. In JavaScript, we can connect a string not only with a string, but also with a number or with `true`. To solve a similar problem, we learned about function overloading in the past lessons. Let's describe the type of such a function using union:

```typescript
type AllowedToConcatenation = number | string | null | undefined | boolean;

const concat = (base: AllowedToConcatenation, suffix: AllowedToConcatenation): string => `${base}${suffix}`;
```

To describe all allowed values of the `concat()` function through overloading, we would need to write code for each case separately. Here we have described the `AllowedToConcatenation` type through union once and applied it in two places.

Union Types are used everywhere where a programmer wants to indicate that a variable can contain values of different but pre-described types. To specify arbitrary types, `unknown` or generics can be used, which we'll look at later in the course.
