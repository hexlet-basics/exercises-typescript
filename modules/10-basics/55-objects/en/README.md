
In this lesson, let's learn about the types of an object. They consist of the types of all the properties included in it.

The types are inferred automatically:

```typescript
// Тип: { firstName: string, pointsCount: number }
const user = {
  firstName: 'Mike',
  pointsCount: 1000,
};

// Property types are unchangeable
// Type 'number' is not assignable to type 'string'.
user.firstName = 7;
```

TypeScript does not allow you to refer to properties that do not exist. This means that the structure of any object must be specified when it is initialized:

```typescript
// Property 'age' does not exist on type '{ firstName: string, pointsCount: number; }'.
user.age = 100;
```

To accept such an object into a function as a parameter, you must specify its structure in the function description:

```typescript
// Properties in the type description are separated by commas (,)
function doSomething(user: { firstName: string, pointsCount: number }) {
  // ...
}
```

Now any object that matches properties can be passed to the function:

```typescript
doSomething({ firstName: 'Alice', pointsCount: 2000 });
doSomething({ firstName: 'Bob', pointsCount: 1800 });

// Is not allowed
doSomething({ firstName: 'Bob' });
// Not allowed as well
doSomething({ firstName: 'Bob', pointsCount: 1800, key: 'another' });
```

As with primitive data types, neither null nor undefined is allowed by default. To change this behavior, you need to add an optionality:

```typescript
// firstName can be undefined
// pointsCount can be null
function doSomething(user: { firstName?: string, pointsCount: number | null }) {
  // ...
}
```

Objects can be useful tools in software development.