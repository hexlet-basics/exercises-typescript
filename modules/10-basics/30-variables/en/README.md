
In this lesson we will learn how TypeScript and JavaScript differ in terms of working with variables. We will learn what type inference is and why it is necessary in programming. We'll also learn why TypeScript doesn't require you to manually specify the type of variables.

## Type inference

Variables and constants in TypeScript are defined in the same way as in JavaScript:

```typescript
let age = 10;

let company = 'Hexlet';
let user = {
  firstName: 'Miro',
};
let fruits = ['apple', 'banana'];
```

In doing so, TypeScript does some extra work in the background. It automatically associates a variable or constant with the data type of the initial value. In programming, this process is called **type inference**.

The type of the variable cannot change:

```typescript
let age = 10;
// OK since it's the same type (Number)
age = 11.1;

// Type 'string' is not assignable to type 'number'.
age = 'some string'; // Error!
```

If we try to pass this variable to a method that expects a different type, that too will result in an error:

```typescript
// Argument of type 'number' is not assignable to parameter
// of type '(substring: string, ...args: any[])
'hexlet'.replace('xl', age);
```

Static typing imposes a restriction on arrays. Only data of one type can be stored inside:

```typescript
let items = [1, 2, 3];
items.push(4); // OK

// Argument of type 'string' is not assignable to parameter of type 'number'.
items.push('code-basics'); // Error!
```

With objects, the situation is even stricter. In TypeScript, you cannot not only change the type of properties inside an object, but also add new properties dynamically:

```typescript
let user = {
  firstName: 'Miro',
};

// Property 'lastName' does not exist on type '{ firstName: string; }'.
user.lastName = 'Smith';
```

## Explicit type indication

TypeScript allows you to explicitly specify the type of variables. In practice, however, you rarely need to do this manually, since type inference works automatically:

```typescript
let name: string = 'Alice';
const count: number = 100;
let canPlay: boolean = true;
```

## Null

By default, in TypeScript variables can only contain the specified type with no exceptions, for example, we cannot assign null:

```typescript
let age = 30;
age = null; // Error!
```

This behavior protects us from many errors that are related to the fact that there are no checks for null. At the same time, `null` is sometimes an acceptable value. In this case, a special Union Type is used:

```typescript
let age: number | null = 30;
age = null;
```

Here we have specified that the type of the `age` variable is `number | null`. It is read as “number or null”.

Union Type is an interesting and handy concept that we'll look at in more detail later.

## Conclusions

In this lesson, we learned about variables in TypeScript. We learned how TypeScript differs from JavaScript in terms of working with variables. We also learned why you don't have to manually specify the type of variables in TypeScript.