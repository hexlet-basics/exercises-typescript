
In this lesson, we will learn about data types and how they are useful for a developer. We will also talk about types as sets. This will allow us to understand the principles of TypeScript.

## Data Types

A family of languages that doesn't have data types is called assembly languages. These languages work directly with the processor and operate on its registers. The registers store values, which from the language's point of view are numbers. It is up to the programmer to determine what is encoded behind this number. It can be a string or a part of a picture.

The main problem of this approach is the lack of security. The program will not generate an error if we accidentally do something with the string that we cannot do. From the point of view of the processor and programming language, there is no string - there is a number, and we perform some operations on it. As a result, the program always works, but the result is incorrect. In this case, you need a high level of attention to program in this mode.

The situation was corrected when data types appeared in high-level languages. They made it possible to fulfil two tasks:

* Describe and restrict the set of all values of a particular type
* Define the operations that can be performed on this type

** A data type** is a set of all values and a set of allowed operations on them. With the help of types we impose restrictions on the code. For example, if we want to work with numbers, we need to use operations of addition, subtraction, etc. If we want to work with strings, we need to use operations of concatenation, substring search, etc. This approach avoids errors that can occur when working with data at runtime.

Even in a dynamic language like JavaScript, we have types, and we get stronger security than in assembly language where data is just a sequence of bits. In TypeScript, we can set more complex constraints on the data, thus getting even stronger security.

## Sets

If we talk about data types as a set of allowed values, on the one hand, it can be a number constraint on upper and lower bounds. For example, this is how it works in JavaScript. We have `Number` for one range of numbers and `BigInt` for another when we need to work with huge numbers. On the other hand, we're talking about sets.

Looking at types as sets plays an important role. This is because TypeScript's type system allows us to combine types in a way that is similar to that of regular sets. For example, we can combine two sets of types and get a new type that includes all the elements of the first set and the second set. This is how Union Type comes into being:

```typescript
type SomeType = number | string;
const v1: SomeType = 1;
const v2: SomeType = 'hexlet';
```

Here we have defined a type `SomeType`, which can take values of type `number` or `string`, and hence is the union of the sets of all numbers and strings.

![SomeType](https://raw.githubusercontent.com/hexlet-basics/exercises-typescript/main/modules/25-types/10-type-as-sets/assets/some_type.png)

You can build intersection and extension types and do other things with types in roughly the same way. We'll cover some of them in the course, but some things will be left out. The main thing is that you need to reframe your thinking about operations with types. This will make it easier to understand the principles of TypeScript and remember certain behaviors.
