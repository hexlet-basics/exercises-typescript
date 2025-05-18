
In this lesson, we will learn how to use function overloads.

## Using function overloads

**Function Overload** — is the possibility to define several versions of one function, each of which accepts a different set of parameters. Let's look at an example:

```typescript
function concat(a: number, b: number): string;
function concat(a: string, b: string): string;

function concat(a: unknown, b: unknown): string {
  if (typeof a === 'number' && typeof b === 'number') {
    return `${a.toFixed()}${b.toFixed()}`;
  }

  return `${a}${b}`;
}

concat('one', 'two'); // onetwo
concat(3, 5.34); // 35
concat(1.33, 10); // 110
```

One function `concat()` is defined here. It has two versions that perform concatenation, but do it in different ways:

* The first version accepts two numbers as input. The numbers first have the fractional part discarded, then they are concatenated;
* Second version takes two strings as input. The strings are concatenated at once.

The implementation of behavior for both versions is done in a third function with the same name. The description of parameters must be suitable for each version of the function. In the example above, the parameter types are defined as `unknown`. This makes it possible to call the function with both strings and numbers.

Which branch to follow is determined by type checking. In the example above, it is enough to check the type of the first parameter only, because the second parameter will definitely be a string. This is provided by the type system and the compiler.

You don't necessarily need to use a function declaration for overloading. The same can be done with an arrow function:

```typescript
const concat: {
  (a: number, b: number): string;
  (a: string, b: string): string;
} = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return `${a.toFixed()}${b.toFixed()}`;
  }

  return `${a}${b}`;
}

// with using aliases
type Overloaded = {
  (a: number, b: number): string;
  (a: string, b: string): string;
}

const concat: Overloaded = (a, b) => {...}
```

In this case, it is not necessary to explicitly specify the types of parameters inside the function.

Function overloading is not limited to two versions. There can be as many of them as you like. The main thing is that a function is always described at the end, which is common in parameters for all variants and within which all logic for each variant is described.

Let's describe the `add()` function, which can take two or three numbers as input and returns their sum:

```typescript
function add(a: number, b: number, c: number): number;
function add(a: number, b: number): number;
function add(a: string, b: string): string;

// The signature fits all the examples above
function add(a: unknown, b: unknown, c?: number): unknown {
  // code logic here
  if (c === undefined) {
    // ...
  }
}
```

Function overloading is used quite often in static languages, but in most of them it is not organized like in TypeScript. In these languages, several different functions are created, which from the programmer's point of view have the same name. Therefore, there is no need for a common function there. The logic of each variant is described internally. This saves the code from having to implement conditional logic.

```kotlin
// Example from Kotlin
fun main() {
  fun newYearCongratulate (name:String):String {
    return "Hi ${name}! Happy New Year!"
  }
  fun newYearCongratulate (year: Number, name:String):String {
    return "Hi ${name}! Happy New Year ${year}!"
  }

  println(newYearCongratulate("John")) // Hi John! Happy New Year!
  println(newYearCongratulate(2023, "Elon")) // Hi Elon! Happy New Year 2023!
}
```

Why does TypeScript have this implementation and what problems does it solve? It's like many other things in TypeScript - it's an attempt to account for all variants of writing JavaScript code and cover them with types to write type-safe code.

In JavaScript, it is not uncommon to create functions that take different data types as input in different variations. Function overloading allows such functions to be described in TypeScript, otherwise you would have to use `any` and keep track of the types yourself.

Technically, after transpilation, there is one function left in JavaScript - the one that contains the body.

Function overloading in TypeScript is a mechanism worth using when there is no other choice. In most cases, unions or generics are used instead of overloading, which we'll talk about later.

Overloading is needed when there is a dependency between parameters, for example if both parameters are strings or both parameters are numbers.