
Classes in TypeScript are both a value and a data type. The latter is especially important in the context of typing functions and methods, which we will explore in this lesson.

Consider the following example:

```typescript
class Point {
  x: number;

  y: number;

  constructor(x: number, y: number) {
    this.x = x;

    this.y = y;
  }
}

function isEqual(p1: Point, p2: Point): boolean {
  return p1.x === p2.x && p1.y === p2.y;
}
```

Here, the `isEqual()` function accepts two arguments of `Point` type. Although we use the `Point` class as a type, we can pass any objects with `x` and `y` fields to the function:

```typescript
isEqual({ x: 1, y: 2 }, { x: 1, y: 2 }); // OK
```

This behavior is due to structural typing. When comparing types, TypeScript compares their structure, not their names. In practice, this makes it easier to work with external libraries and test stubs.

TypeScript will explicitly require an instance of a class if it has private fields:

```typescript
class Point {
  private x: number;

  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  isEqual(p2: Point): boolean {
    return this.x === p2.x && this.y === p2.y;
  }
}

const point = new Point(1, 2);
point.isEqual(new Point(10, 1)); // OK
point.isEqual({ x: 1, y: 2}); // Error: Argument of type '{ x: number; y: number; }' is not assignable to parameter of type 'Point'.
````
