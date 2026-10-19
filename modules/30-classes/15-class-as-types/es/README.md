Las clases en TypeScript son al mismo tiempo un valor y un tipo de dato. Lo segundo es especialmente importante en el contexto de la tipificación de funciones y métodos, que es lo que vamos a estudiar en esta lección.

Considera el siguiente ejemplo:

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

Aquí la función `isEqual()` acepta dos argumentos de tipo `Point`. Y aunque usamos la clase `Point` como tipo, podemos pasar a la función cualquier objeto con los campos `x` e `y`:

```typescript
isEqual({ x: 1, y: 2 }, { x: 1, y: 2 }); // true
```

Este comportamiento se debe a la tipificación estructural. Cuando TypeScript compara tipos, compara su estructura, no sus nombres. En la práctica, esto simplifica el trabajo con bibliotecas externas y con stubs para pruebas.

TypeScript exigirá explícitamente una instancia de la clase si esta tiene campos privados:

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
point.isEqual(new Point(1, 2)); // true
point.isEqual({ x: 1, y: 2 }); // Error: Argument of type '{ x: number; y: number; }' is not assignable to parameter of type 'Point'.
```
