
In this lesson, we'll break down the relationship between types that builds a hierarchy.

## Types as subsets

Let's look at an example of `Type X is not assignable to type Y` error in a function for sorting items. Suppose we have already written a function `sort`. And to describe only its types, let's use the `declare` keyword:

```typescript
type ComparatorCallback = (item1: number, item2: number, index: number) => -1 | 0 | 1
declare function sort(arr: Array<number>, callback: ComparatorCallback): Array<number>

const arr = [1, 2, 3];
const comparator = (item1: number, item2: number) => Math.sign(item1 - item2);

sort(arr, comparator) // Error: Type 'number' is not assignable to type '0 | 1 | -1'.
```

The type checker generated an error: the union of literal types `0 | 1 | -1` is not compatible with the type `number`. One might think that the type system is wrong, and we should use `any`. But if we think of literal numeric types as subsets of `number`, everything falls into place.

With this example, we can again see the connection between types and set theory. A set `A` is a subset of `B` if any element that belongs to `A` also belongs to `B`. So, by using the union operation, we get the relations between types, which build up into a hierarchy of nested sets - a hierarchy of types.

## Literal types

Recall that literal types exist for four data types: `boolean`, `string`, `number`, `BigInt`. As a result, any literal type can be assigned to a variable of the corresponding type:

```typescript
let num: number = 1;
const two: 2 = 2;
const notTrue: false = false;

num = two;
num = notTrue; // Type 'boolean' is not assignable to type 'number'.
```

Here `2` is used as a literal type which represents a set of one element - a double.

The analyser successfully skipped assigning the literal type of number to `number`, but we could not assign the literal `boolean` type anymore. To solve this problem, we can use the union of `number | boolean` types. But if we are not sure what can be assigned, we would have to do the union with a potentially huge number of types.

In this case, the `unknown` type comes to our rescue.

## `unknown`

The `unknown` type is a superset of all available types. It allows you to assign a value of an arbitrary type to a variable:

```typescript
let unknownValue: unknown = 1;

unknownValue = 2; // OK
unknownValue = false; // OK
unknownValue = 'string'; // OK
```

It may seem that the `unknown` type works in the same way as `any`. However, there is a fundamental difference between them. The `any` type disables type checking and allows you to perform any operations with a value, for example, to access the properties of a variable. The `unknown` type prohibits this and requires a preliminary check of the variable's type or conversion to the necessary type. Let's look at it by example:

```typescript
let unknownValue: unknown;

unknownValue = 'string';
unknownValue.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'unknown'.
```

Here we were able to assign a string to the `unknownValue` variable, but we cannot call the `toUpperCase()` method because the compiler does not know that the variable contains a string. In order to call the method, we must first check the type of the variable.

Another important property is that when we combine any type with `unknown` we always get `unknown`:

```typescript
type UnionWithUnknown = unknown | number | boolean;
````

This behavior is explained by the fact that `unknown` is a superset of all types, so any union with it gives it itself. The exception here is `any`, which even in this case disables type checking and does not obey the model of types as sets.

Next, let's consider the case when we want to prohibit assigning values to a variable.

## `never`

Sometimes in practice you need to be sure that no value is assigned to a variable. This can be implemented using the `never` type:

```typescript
let neverValue: never;
const two: 2 = 2;

neverValue = two; // Type 'number' is not assignable to type 'never'
```

In this case, we got an error because `never` is an empty set that does not contain any element. Therefore, no value can be assigned to the `neverValue` variable.

## Type sets

From our current knowledge, we can draw the following picture of TypeScript's type sets:

![NumberOrString](https://raw.githubusercontent.com/hexlet-basics/exercises-typescript/main/modules/25-types/50-type-hierarcy/assets/hierarcy_circle.png)

The `number` set also includes all unions of literal number types, and the `string` set includes all unions of literal strings:

```typescript
type NumberUnion = -2 | -1 | 1 | 2

const one: NumberUnion = 1;
const num: number = one;

type StringUnion = 'a' | 'b' | 'c' | 'd'

const aChar: StringUnion = 'a';
const str: string = aChar;
```

Such a subset of types is called a subtype, and the set itself a supertype.

The relationships between subtypes and supertypes are a key concept of any statically typed language. They form a hierarchy of types. This becomes especially important when we want to cast one type to another.

## Type conversion

Let's look at different variants of type conversion:

```typescript
let num = 1; // Implicit upward conversion
let one: number = 1; // Explicit upward conversion

let two = num as 2; // Explicit downward conversion

let three = 3 as const; // Casting to a literal type - downward
```

When we assign a value to a variable or pass arguments to a function, TypeScript tries to do an upward conversion - from subtype to base type. It is also possible to explicitly set the upward cast. We have already used this feature to check whether it is possible to cast one type to another, or to specify explicitly which type of variable we expect.

Casting a base type to a subtype is done explicitly with the `as` keyword. With this behavior, TypeScript accepts the type conversion as true. In some cases, this can lead to an error. Therefore, a downward type conversion is considered unsafe. You should take a close look at such code.

Let's look at another example:

```typescript
const args = [8, 5]; // args: number[]
const angle = Math.atan2(...args); // error! A spread argument must either have a tuple type or be passed to a rest parameter.
console.log(angle);
```

Here, the compiler defines the `args` variable as the `number[]` type - an array with any number of numeric elements. The compiler has expanded the possible values in the array despite the fact that we have specified only two elements in the array. This is the implicit upward type conversion, where the compiler casts to a more general type.

For this reason, an error occurs because the `Math.atan2()` method expects two arguments, and the type of the `args` variable can contain any number of elements. Let's fix this by using the `as` keyword:

```typescript
const args = [8, 5] as const; // readonly [8, 5]
const angle = Math.atan2(...args); // okay
console.log(angle);
```

Now the compiler defines the type for the `args` variable as the literal type `[8, 5]`. Although it is a set of type `number[]`, it is already a stricter type, which is an array of two concrete numbers, so there will be no error. Such a conversion is called a ‘top-down’ conversion, because we cast from a broader type to a narrower type containing fewer possible values.
