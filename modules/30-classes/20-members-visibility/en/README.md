
In some cases, properties and methods in a class are created for internal use only. Developers don't want to allow them to be called externally, otherwise they might accidentally start being used in ways that were not intended.

In languages with classes, it is common to divide properties into public, private, and protected. The first ones are available to everyone, the second ones can be used only inside the class, and the third ones can be used inside the class and in its descendants. In this tutorial, we'll look at each of these types.

## Public properties

By default, in TypeScript, all properties are public. This can be marked explicitly with the `public` keyword:

```typescript
class Point {
  public x: number;

  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public someMethod() {
    // some logic
  }
}
```

## Private properties

You can also make properties private. Then it will no longer be possible to access them directly from the outside:

```typescript
class Point {
  private x: number;

  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const p = new Point(10, 8);
p.x; // Property 'x' is private and only accessible within class 'Point'.
p.y; // Property 'y' is private and only accessible within class 'Point'.
```

## Protected properties

Finally, properties can be made protected. This means that they are available inside the class and its descendants:

```typescript
class Point {
  protected x: number;

  protected y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Point3D extends Point {
  protected z: number;

  constructor(x: number, y: number, z: number) {
    super(x, y);
    this.z = z;
  }

  public getCoordinates() {
    return [this.x, this.y, this.z]; // OK
  }
}

const p = new Point3D(10, 8, 5);
p.x; // Property 'x' is protected and only accessible within class 'Point' and its subclasses.
p.y; // Property 'y' is protected and only accessible within class 'Point' and its subclasses.
p.z; // Property 'z' is protected and only accessible within class 'Point3D' and its subclasses.
```
