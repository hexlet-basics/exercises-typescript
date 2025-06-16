
In this lesson, we will talk about interfaces. We will learn what they are, why they are needed, and in what cases they should be used instead of types.

## What is an interface

**Interface** is a TypeScript language construct that is used to describe objects and functions.

Consider the following example:

```typescript
interface IUser {
  firstName: string;
  pointsCount: number;
}

const user: IUser = {
  firstName: 'Mark',
  pointsCount: 100,
};
```

In this fragment, we have created an interface and implemented the `user` object on its basis.

The interface looks like a definition of an object type. Object types and interfaces are interchangeable in almost all situations. Let's compare it with the example above:

```typescript
type User = {
  firstName: string;
  pointsCount: number;
}

const user: User = {
  firstName: 'Mark',
  pointsCount: 100,
};
```

Here we have implemented the same object, but on the basis of a type instead of an interface. There is almost no difference.

The TypeScript documentation says that we can choose whether to use a type or an interface. The choice depends on the situation. The question then arises, why do we need interfaces when we already have types?

## When to use interfaces

Interfaces and types are similar in many ways. But there are differences on the basis of which we can choose what we should use in a particular case.

The main feature of interfaces is related to classes. Classes that implement interfaces contain within them the properties and methods specified in the implemented interface:

```typescript
interface Countable {
  count(): number;
}

class SchoolClass implements Countable {
  // Some logic
  count(): number {
    // It is mandatory to create this method as it is specified in the interface
  }
}

const sc = new SchoolClass();
// Returns student cound
sc.count();
```

In this example, we have implemented an interface-based class. Now in all functions where objects are used only to count the number of something inside them, you can specify `Countable` instead of `SchoolClass`:

```typescript
// Not function doSomething(obj: SchoolClass)
function doSomething(obj: Countable) {
  // Is invoked somewhere here
  obj.count();
}
```

This is how interfaces make the function more versatile. We can pass any objects corresponding to `Countable`, not just `SchoolClass`. In programming, this feature is called subtype polymorphism ([Subtyping](https://en.wikipedia.org/wiki/Subtyping)).
