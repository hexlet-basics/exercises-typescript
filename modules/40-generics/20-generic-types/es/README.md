En esta lección hablaremos con más detalle sobre los Generic Types. Tomemos como ejemplo un array.

Un array es un tipo contenedor que guarda valores de cualquier tipo indicado. La lógica de funcionamiento del array no depende del tipo de datos que se almacenan en su interior. Esta definición ya nos dice que estamos ante un tipo genérico.

Para trabajar con un tipo así, hay que concretar el tipo interno en el momento en que queremos empezar a trabajar con los datos de ese tipo:

```typescript
const numbers: Array<number> = [];
numbers.push(1);

const strings: Array<string> = [];
strings.push("hexlet");
```

El tipo que se indica entre los corchetes angulares se llama **parámetro de tipo**. Este nombre no es casual: indicar el parámetro se parece a llamar a una función. Más adelante veremos que esta forma de ver los genéricos ayuda a entender mejor cómo funcionan.

Imagina que queremos definir nuestra propia colección, que funciona como un array, pero con capacidades adicionales. Este tipo de colecciones se hacen a menudo en los ORM para trabajar con datos cargados desde la base de datos. Primero describamos una versión concreta de este tipo, que solo funciona con números y con un par de métodos estándar:

```typescript
type MyColl = {
  data: Array<number>;
  forEach(callback: (value: number, index: number, array: Array<number>) => void): void;
  at(index: number): number | undefined;
};
```

Aquí vemos que los datos de la colección se almacenan en un array de números. Además, el tipo define dos métodos:

- El método `forEach` pasa los elementos de la colección al callback
- El método `at` devuelve los elementos de la colección según el índice indicado

Una posible implementación de este tipo puede verse así:

```typescript
// No hace falta escribir los tipos, porque ya están indicados en MyColl
const coll: MyColl = {
  data: [1, 3, 8],
  forEach(callback) {
    this.data.forEach(callback);
  },
  at(index) {
    return this.data.at(index); // target >= ES2022
  },
};

coll.at(-1); // 8
```

Ahora intentemos generalizar este tipo, es decir, convertirlo en un genérico. Para ello hay que hacer dos cosas sencillas:

- para los elementos de la colección, escribir `T` en lugar de `number`, o cualquier otro nombre que empiece por mayúscula
- añadir `T` como parámetro de tipo a la definición

Así funciona en la práctica:

```typescript
type MyColl<T> = {
  data: Array<T>;
  forEach(callback: (value: T, index: number, array: Array<T>) => void): void;
  at(index: number): T | undefined;
};
```

Esta definición de tipo puede verse como una especie de definición de función. Por ejemplo, intentemos indicar un tipo concreto, como `MyColl<string>`. En ese caso, `T` se sustituye por `string` dentro de la definición del tipo. Y si dentro del tipo se usan otros genéricos, estos llaman al tipo a su vez. En otras palabras, todo esto funciona como llamadas a funciones anidadas.

## Restricciones de los genéricos

Los genéricos pueden tener restricciones. Por ejemplo, el tipo que se pasa al genérico debe implementar alguna interfaz. Para ello se usa la palabra clave `extends`. Supongamos que nuestro tipo `MyColl` debe funcionar solo con tipos que implementan la interfaz `HasId`:

```typescript
interface HasId {
  id: number;
}

type MyColl<T extends HasId> = {
  data: Array<T>;
  forEach(callback: (value: T, index: number, array: Array<T>) => void): void;
  at(index: number): T | undefined;
};
```

Esto nos permite usar el tipo `MyColl` solo con tipos que implementan la interfaz `HasId`. Por ejemplo, este código no funcionará:

```typescript
const coll: MyColl<number> = {
  data: [1, 3, 8],
  forEach(callback) {
    this.data.forEach(callback);
  },
  at(index) {
    return this.data.at(index); // target >= ES2022
  },
};
```

Los genéricos aparecen por todas partes en el código de bibliotecas y frameworks. Por ejemplo, en React los tipos de los componentes se envuelven en genéricos para poder indicar los tipos de las props. Con los genéricos se pueden crear tipos más versátiles, capaces de trabajar con distintos tipos de datos, y eso es lo que veremos en las próximas lecciones.
