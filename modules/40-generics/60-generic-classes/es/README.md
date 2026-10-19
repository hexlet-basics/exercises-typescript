Las clases genéricas, al igual que las funciones genéricas, permiten crear clases que pueden trabajar con distintos tipos de datos. Por ejemplo, la clase `Triple` puede almacenar tres valores de cualquier tipo. En este caso, en lugar de crear una clase para cada tipo, se puede crear una clase genérica que funcione con cualquier tipo de datos.

```typescript
class Triple<T, U, V> {
  constructor(
    protected first: T,
    protected second: U,
    protected third: V,
  ) {}

  getFirst(): T {
    return this.first;
  }

  getSecond(): U {
    return this.second;
  }

  getThird(): V {
    return this.third;
  }
}
```

En este ejemplo, la clase `Triple` es una clase genérica en la que podemos guardar cualquier tipo de datos. Al mismo tiempo, conservamos las garantías de seguridad y la inferencia de tipos que obtuvimos al usar funciones genéricas:

```typescript
const triple = new Triple(1, "string", null);
const first = triple.getFirst(); // number
const second = triple.getSecond(); // string
```

También se puede heredar de clases genéricas. Por ejemplo, la clase `Pair`, que almacena dos valores de cualquier tipo, puede heredar de la clase `Triple`:

```typescript
class Pair<T, U> extends Triple<T, U, never> {
  constructor(first: T, second: U) {
    super(first, second, undefined as never);
  }

  getFirst(): T {
    return this.first;
  }

  getSecond(): U {
    return this.second;
  }
}
```

Aquí usamos una conversión al tipo `never` para marcar el tercer parámetro como ausente.

Igual que las clases normales, las clases genéricas también se pueden usar como tipos de los parámetros de funciones:

```typescript
function swap<T, U>(pair: Pair<T, U>): Pair<U, T> {
  return new Pair(pair.getSecond(), pair.getFirst());
}
```

Las clases genéricas son útiles cuando necesitamos crear algún contenedor para almacenar datos, como en el ejemplo de la clase `Pair`. `Array`, `Map` y `Set` son clases genéricas que almacenan elementos de un tipo determinado.
