En esta lección analizaremos la asignación del valor de una variable a otra. Es una de las operaciones básicas con variables en la mayoría de los lenguajes. El error más frecuente que encontrarás en TypeScript se ve así: `Error: Type X is not assignable to type Y.`. Este código no se puede compilar, así que hay que entender cómo corregirlo.

La asignación del valor de una variable a otra y el paso de un argumento a una función se llaman asignabilidad (**Assignability**):

```typescript
let x: number;
const y: number = 10;
x = y;

function len(str: string): number {
  return str.length;
}
len(false); // Error!
```

Tanto al asignar `x = y` como al pasar el argumento `len(false)` se verifica lo mismo: si la parte receptora puede contener el tipo que se le pasa.

Si pensamos en los tipos como conjuntos de valores, la asignabilidad es la comprobación de que el conjunto de valores del origen está contenido en el conjunto de valores del destino. En `x = y` el origen es `y`, el destino es `x`, y `number` está contenido en `number`, por eso la línea compila. En la llamada `len(false)` el origen es `false`, el destino es el parámetro `str`, y `boolean` no está contenido en `string`: de ahí el error.

Por ejemplo, el tipo literal `'one'` está contenido en el conjunto de valores de `string`, por eso `const s: string = 'one'` compila. En cambio, el conjunto de valores de `number` no está contenido en `string`, por eso `const s: string = 10` es un error.

Un valor de tipo `A` se puede asignar a una variable de tipo `B` si el conjunto de valores de `A` es un subconjunto del conjunto de valores de `B`.

Así que la próxima vez que te encuentres con el error `Type X is not assignable to type Y.`, no conviertas todo de inmediato al tipo más general con `as any`: así la verificación de tipos de esa variable se desactiva por completo.

Primero hay que entender qué se espera como entrada y qué devuelve la función. Solo después se pueden modificar los tipos propios: ampliar los tipos permitidos, por ejemplo, mediante una unión, y usar el truco con `any` solo en casos extremos.

Para entender qué se puede asignar a qué en TypeScript, hay que mirar el código desde el punto de vista de la jerarquía de tipos y del tipado estructural. A esto están dedicadas las siguientes lecciones de este curso.
