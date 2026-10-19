En algunos casos, las propiedades y los métodos de una clase se crean solo para uso interno. Los desarrolladores no quieren que se puedan llamar desde fuera, porque podrían empezar a usarse por accidente, algo que no estaba previsto.

En los lenguajes con clases es habitual dividir las propiedades en públicas, privadas y protegidas. Las primeras están disponibles para todos, las segundas solo pueden usarse dentro de la clase, y las terceras, dentro de la clase y en sus subclases. En esta lección veremos cada uno de estos tipos.

## Propiedades públicas

Por defecto, en TypeScript todas las propiedades son públicas. Se puede indicar explícitamente con la palabra clave `public`:

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

## Propiedades privadas

Las propiedades también se pueden hacer privadas. Entonces ya no se podrá acceder a ellas directamente desde fuera:

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

## Propiedades protegidas

Por último, las propiedades se pueden hacer protegidas. Esto significa que están disponibles dentro de la clase y en sus subclases:

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
p.y; //  Property 'y' is protected and only accessible within class 'Point' and its subclasses.
p.z; // Property 'z' is protected and only accessible within class 'Point3D' and its subclasses.
```
