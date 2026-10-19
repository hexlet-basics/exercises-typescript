En esta lección veremos el tipo especial `any`, que se agregó a TypeScript.

## Para qué sirve el tipo any

El tipo `any` se usa en dos casos: cuando no se necesita la comprobación de tipos o cuando TypeScript no puede inferir automáticamente el tipo de datos:

```typescript
// Todavía no hay contenido, por eso TypeScript no puede inferir su tipo
// En este caso el tipo será any[]

const items = [];
// Se puede agregar cualquier cosa
items.push(1);
items.push("code-basics");
```

El tipo `any` convierte TypeScript en JavaScript, porque los datos con este tipo dejan de comprobarse:

```typescript
// El error aparece recién al ejecutar el código
// Durante la compilación a JS no habrá errores
let value: any = 5;
value.toString(); // ok
value(); // ok
value.trim(); // ok
value = "wow"; // ok
```

`any` es útil en muchos casos. Por ejemplo, cuando hay que migrar un proyecto de JavaScript a TypeScript. En ese caso, primero todos los tipos se declaran como `any` y luego se reescriben por los que corresponden.

También se usa `any` para trabajar desde código TypeScript con bibliotecas de JavaScript que no tienen tipos descritos. En los demás casos hay que evitar `any`, porque se pierde todo el sentido de usar TypeScript.

Veamos el primer caso con más detalle.

## De JavaScript a TypeScript

Tomemos como ejemplo un código que cuenta cuántas veces se repite cada palabra en una oración:

```javascript
const sentence = "table cat table dog dog apple table";

const words = sentence.split(" ");
const initial = {};
const result = words.reduce((acc, word) => {
  acc[word] = Object.hasOwn(acc, word) ? acc[word] + 1 : 1;
  return acc;
}, initial);
// { table: 3, cat: 1, dog: 2, apple: 1 }
```

El compilador de TypeScript no aceptará este código. Indicará que el objeto de la constante `initial` no contiene claves de tipo cadena:

```text
No index signature with a parameter of type 'string' was found on type '{}'.
acc[word] = Object.hasOwn(acc, word) ? acc[word] + 1 : 1;
```

Esto ocurre porque la estructura del objeto define su tipo en el momento de la definición. Además, la estructura no puede cambiar durante la ejecución. Pero en el código anterior el objeto al principio está completamente vacío y se va llenando de claves dinámicamente.

Más adelante aprenderemos a definir correctamente el tipo cuando hay claves dinámicas. Por ahora, haremos que el código funcione con `any`. Para ello hay que definir el objeto indicando su tipo explícitamente:

```typescript
const sentence = "table cat table dog dog apple table";

const words = sentence.split(" ");
const initial: any = {}; // Indicamos el tipo any
const result = words.reduce((acc, word) => {
  acc[word] = Object.hasOwn(acc, word) ? acc[word] + 1 : 1;
  return acc;
}, initial);
```

TypeScript ya no muestra el error de compilación, lo cual por un lado está bien. Pero por otro, se desactiva la comprobación de qué acciones son válidas sobre este objeto. Si más adelante accedemos a una propiedad inexistente de este objeto, TypeScript no señalará el error.

En esta lección aprendimos a trabajar con el tipo `any`. También vimos para qué y en qué casos se usa.
