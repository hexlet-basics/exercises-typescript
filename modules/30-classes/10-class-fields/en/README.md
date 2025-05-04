
Class typing in TypeScript adds a new syntax for defining classes that does not exist in JavaScript. This syntax exists only at the type checking level. It is cut or replaced in the resulting code. In this lesson, we'll explore the implementation of such classes.

## Defining fields inside a class

Let's start with an example. Look at this class:

```typescript
class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const p = new Point(10, 20);
console.log(p); // { x: 10, y: 20 }
```

Here we see a new syntax that describes the class fields: `x` and `y`. Their description is mandatory because classes are constructor functions, and functions are objects in TypeScript.

Before moving on, let's understand the concept of a class field.

## Class Field

Usually in JavaScript, everything is referred to as properties. And the word ‘field’ is used as a synonym by those who come from other languages. But it's not the same thing.

Inside a class, we define **fields** are the data of the class itself. And a **property** is what we use to interact with the object.

Often properties and fields are the same, but this is not always the case. For example, a property can be read-only - a getter that takes information from a field. Or a property can be write-only - a setter that sets a new value for a field:

```typescript
class Point {
  x: number;

  y: number;

  // The return type is not specified since this is a constructor
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get inspect(): string {
    return `(${this.x}, ${this.y})`
  }
}

const p = new Point(2, 5);
// There is a property, but there is no such field
console.log(p.inspect); // (2, 5)
```


In the example, we defined a `inspect` getter that returns a string with the coordinates of a point. This property is read-only since we have not defined a setter.

Fields can be initialized immediately when defining a class. This is convenient when the constructor is not needed or the data does not depend on its call - it is set statically inside:

```typescript
class Point {
  x = 0;

  y = 0;
}

const p = new Point();
console.log(p); // { x: 0, y: 0 }
```

As in the case of ordinary variables, the type of fields is derived automatically during their initialization, so it is not necessary to specify an explicit type.
