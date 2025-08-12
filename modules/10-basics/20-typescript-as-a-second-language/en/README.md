
TypeScript is given as a second language in our project. Therefore, you should know JavaScript to better understand the course material.

You should also have an understanding of data types, variables, conditional constructs, loops, functions, object properties and methods, and anonymous or lambda functions.

Learning a second programming language is easier than learning a first one, so the structure of the material changes a lot. Here we review the basic constructs to quickly familiarize ourselves with the syntax. Then we move on to the tasks for which TypeScript is studied.

In this tutorial, we'll learn what TypeScript is, as well as break down its features, installation, and getting it up and running.

## What is TypeScript

TypeScript is JavaScript with an additional syntax for specifying data types. The first one refers to statically typed languages, the second one to dynamically typed languages.

To learn more about TypeScript, let's compare it to JavaScript.

Dynamically typed languages like JavaScript have an interpreter, a program that executes code line by line without prior analysis:

```bash
# node (Node.js) — JavaScript interpreter
# The code is immediately launched for execution
node index.js
```

If there are type errors in such a code, for example, a number of `BigInt` type came into the function instead of a regular number, we will learn about the error only when we run the code:

```javascript
function sum(a, b) {
  return a + b;
}

sum(10n, 5); // oops
// 10n is a number of BigInt type, adding it to a regular number will cause a runtime error
// Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
```

Statically typed languages like TypeScript work differently. They have a number of advantages:

* Finding some types of errors even before the code is executed
* Easier code refactoring
* Full support for editor features: autocomplete add-ons, code navigation, etc.

Before you can run code in TypeScript for execution, you must compile it.

During compilation, it is checked that the program is **type-safe** - it does not contain errors like the example above. If the compiler finds a type mismatch, it stops compilation and displays warnings about where the types do not match.

Same example in TypeScript:

```typescript
function sum(a: number, b: number) {
  return a + b;
}

sum(10n, 5);
// An error will occur at the compile stage
// Argument of type 'bigint' is not assignable to parameter of type 'number'.
```

Not only will the code above fail to run, but it will also fail to compile. The TypeScript compiler will stop execution and indicate a type mismatch error.

If we look at the function definition, we can see that we are facing almost the same JavaScript, except for the type description of input variables in the function.
It says that parameters `a` and `b` have type `number`. The rest of the TypeScript code is annotated with types in much the same way. The type descriptions can be very complex in places, but the idea remains the same.

We cannot say unequivocally which approach is better - static or dynamic typing. It all depends on the specific situation, and successful projects can be written in different languages. Since we are studying TypeScript in this
course, we will look at the peculiarities of working with it.

## TypeScript Features

TypeScript has become one of the most popular typed languages due to the following features:

* TypeScript is almost completely compatible with JavaScript in terms of features and types. Everything written in
  TypeScript is also available in JavaScript, and vice versa. TypeScript is called a superset of the JavaScript
  language. Meaning that it is the same JavaScript + type description.
* The TypeScript compiler turns TypeScript code into JavaScript code. That is, it removes type definitions from TypeScript code. This process is also known as **transpilation**.
* The developer of TypeScript is Microsoft
* Strong typing

Let's look at the last feature in more detail.

### Strong typing

Strong typing is not related to static typing. It refers to the extent to which a language allows automatic type conversions. A static language can be weak, and vice versa.

For example, in JavaScript we can add a number to a string. When the language encounters such a construct, it will automatically perform a type conversion: `10 + 'one'`.
TypeScript won't do that. It will generate an error: `The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type`.

Many dynamic languages are strongly typed. For example, Ruby and Python are among them. Strong typing only makes the language better and does not complicate the process of programming.

We've covered the advantages and features of TypeScript. Now you can learn how to install it.

## How to install and run TypeScript

TypeScript is written in TypeScript, which is then transpiled into JavaScript and distributed as a normal npm package. The installation of TypeScript is therefore very simple:

```bash
# Node.js have to be installed
# Inside the project, where TypeScript will be used
npm install typescript
```

Then you need to create TypeScript source files. These have the extension *ts*. The TypeScript compiler is available through the `tsc` utility:

```bash
npx tsc index.ts
```

The output is a file with JavaScript code that can already be executed with Node.js:

```bash
node index.js
```

You can also supply the package [ts-node](https://github.com/TypeStrong/ts-node), which compiles and runs at the same time. This package provides a REPL for experimenting with TypeScript.

## Conclusions

In this lesson, we learned about the TypeScript language. We learned that it is the same as JavaScript, but with additional syntax for specifying data types. TypeScript has several advantages over JavaScript:

* Finding some errors even before the code is executed
* Easier code refactoring
* Full support for editor features: autocomplete add-ons, code navigation, etc.

It is impossible to say which language is better. It all depends on the specific task and features of the language.

We also learned about the features of TypeScript in this lesson, and we also learned how to install and run it.
