
Let's imagine a program that has a user object. This object is used everywhere. In such a situation, the description of the type of this object will be repeated in each function definition:

```typescript
function doSomething(user: { firstName: string, lastName: number }) {}
function doSomethingElse(user: { firstName: string, lastName: number }) {}
function doSomethingAnother(user: { firstName: string, lastName: number }) {}
````

First, there is a lot of duplication. Secondly, it is much more difficult to change the structure, because you will have to edit all the places where this definition appears. In this lesson, let's learn how to avoid such problems.

## Specify an alias of type

To avoid doing the same work, TypeScript allows you to specify an alias for compound types. This way we don't have to repeat ourselves:

```javascript
type User = {
  firstName: string;
  pointsCount: number;
}
```

It is now possible to change this in all functions:

```typescript
function doSomething(user: User) {
  // ...
}
```

An alias is not the creation of a new data type. It is a way to abbreviate the type definition. Therefore, the following examples will work without problems:

```typescript
const user = {
  firstName: 'Mike',
  pointsCount: 1000,
};

// Both type calls work
doSomething(user);
doSomething({ firstName: 'Bob', pointsCount: 1800 });
```

That said, TypeScript developers say “created a type” rather than “created a type alias”. So in this course we will stick to the commonly used format.

Types can be specified for any data type, such as simple data types:

```typescript
type SomeType = string;
```

And also for composite:

```typescript
// Union type of three possible values
type SomeType = string | number | null;

// Function
type Countable = (coll: number[]) => number
```

## Objects and functions

The description of the function type outside the object and inside is different. When the function is written independently, the arrow function format is used:

```typescript
type Countable = (coll: number[]) => number
```

Inside a type that describes an object, the format changes to that used for normal properties:

```typescript
type User = {
  firstName: string;
  pointsCount: number;
  count(coll: number[]): number;
}
```

But that doesn't apply to the callbacks that can be used inside:

```typescript
type User = {
  firstName: string;
  pointsCount: number;
  // Types are used as an example here
  count(coll: (v: string) => string): number;
}
```

In this lesson we learned how to use type aliases. We also learned how to set an alias for compound types.