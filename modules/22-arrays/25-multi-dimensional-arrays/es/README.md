En esta lección veremos los arrays multidimensionales.

## Trabajo con arrays multidimensionales

Para definir arrays multidimensionales, se usa la sintaxis `Type[][]`. Literalmente significa que tenemos un array que contiene arrays con valores del tipo `Type`. Algunos ejemplos:

```typescript
// El tipo number[][] se infiere automáticamente
const items1 = [
  [3, 8],
  [10, 4, 8],
];

const items2: number[][] = [];
// O también Array<number[]>

// Usamos un alias
type User = {
  name: string;
};

// O también Array<User[]>
const users: User[][] = [[{ name: "Eva" }, { name: "Adam" }]];
```

Agregar elementos que no son arrays a estos arrays provoca un error de tipado:

```typescript
items1.push(99); // Error: Type 'number' is not assignable
```

Para definir arrays de tipos compuestos, se usan paréntesis:

```typescript
const coll: (string | number)[][] = [];
coll.push(["hexlet", 5]);
```

También se puede usar la sintaxis `Array<Array<Type>>`. En el siguiente ejemplo hay un array que contiene arrays con valores del tipo `Type`:

```typescript
const coll: Array<Array<string | number>> = [];
coll.push(["hexlet", 5]);
```

Estos arrays, a su vez, pueden formar parte de un objeto. Técnicamente, esto permite crear un anidamiento infinito de objetos y arrays:

```typescript
type Course = {
  name: string;
  lessons: Lesson[];
};

type Lesson = {
  name: string;
  links: string[];
};
```

Aquí definimos el tipo `Course`, que contiene el array `lessons`. Cada elemento de este array es un objeto del tipo `Lesson`, que contiene el array `links`. Cada elemento de este array es una cadena. Una estructura de datos así puede ser útil, por ejemplo, para almacenar información sobre los cursos de un sitio web.

## Creación de un array de la longitud necesaria

La notación `Array<Type>` aparece en dos papeles distintos. Arriba la usamos como anotación de tipo, pero `Array` también es un constructor. Si lo llamas con un solo número, obtienes un array de esa longitud, y el tipo de los elementos se indica entre corchetes angulares:

```typescript
// Array de longitud 3, su tipo es null[]
const empty = Array<null>(3);
```

Hay una trampa: los elementos de este array no solo valen `null`, es que no existen. El array queda «con huecos», y métodos como `map()` se saltan esas posiciones vacías:

```typescript
console.log(empty.map(() => 0)); // [<3 empty items>]
```

Para evitarlo, primero se llena el array con el método [fill()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill) y solo después se llama a `map()`:

```typescript
const zeros = Array<null>(3)
  .fill(null)
  .map(() => 0);
console.log(zeros); // [0, 0, 0]
```

Un array multidimensional se construye de la misma manera. Llenamos el array exterior y luego, en cada posición, creamos un array nuevo:

```typescript
const grid = Array<null>(2)
  .fill(null)
  .map(() => Array<null>(2).fill(null));
console.log(grid); // [[null, null], [null, null]]
```
