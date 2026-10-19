En esta lección conoceremos el estrechamiento de tipos.

## Uso del estrechamiento de tipo

En JavaScript es común encontrar código en el que las mismas variables pueden tener valores de diferentes tipos. Se procesan mediante comprobaciones lógicas con `typeof` y otros mecanismos similares.

A continuación, un ejemplo de implementación de una función que convierte cualquier valor pasado en `boolean`:

```typescript
function isPresence(value: unknown): boolean {
  if (value === null || value === undefined) {
    return false;
  }
  // Cadena vacía
  if (typeof value === "string") {
    if (value === "") {
      return false;
    }
  }
  // Array vacío
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return false;
    }
  }
  // Objeto vacío
  if (value instanceof Object) {
    if (Object.keys(value).length === 0) {
      return false;
    }
  }

  return true;
}

isPresence(""); // false
isPresence({}); // false
isPresence([]); // false
isPresence([1, 3]); // true
isPresence(10); // true
```

En este código, el parámetro tiene el tipo `unknown`. Dentro de la función, TypeScript permite realizar diferentes acciones con este parámetro. Estas dependerán de las condiciones establecidas.

En este caso, la comprobación de tipos se realiza estáticamente, antes de ejecutar el código. Y las condiciones dentro de la función son parte del código que se ejecuta en tiempo de ejecución, es decir, cuando se ejecuta el programa. Resulta que este código debería terminar con un error, pero eso no ocurre.

Como este tipo de código es común en JavaScript, hubo que ampliar el sistema de tipos de TypeScript para que se pudiera seguir escribiendo así.

Resulta que, en este caso, TypeScript sabe evaluar parte de las construcciones condicionales de forma estática, como una comprobación de compatibilidad de tipos, sin ejecutar el código. Luego, dentro del bloque condicional, el compilador considera que el tipo del valor coincide con el de la propia comprobación. Este proceso en TypeScript se llama **Type Narrowing**, o estrechamiento de tipo.

El estrechamiento de tipo no solo funciona para el tipo `unknown`. Es un mecanismo universal que funciona con todos los tipos posibles, por ejemplo, con _Union Types_:

```typescript
function foo(value: number | string) {
  if (typeof value === "number") {
    // Trabajamos con él como con un número
  }
  if (typeof value === "string") {
    // Trabajamos con él como con una cadena
  }
}
```

`switch` también admite el estrechamiento de tipo:

```typescript
function foo(value: number | string) {
  switch (typeof value) {
    case "number":
      // Alguna lógica
      break;
    case "string":
      // Alguna lógica
      break;
  }
}
```

Dentro de cada bloque `case`, el tipo del valor se estrecha al que estaba en el propio `case`.

El estrechamiento de tipo también es necesario en la sobrecarga de funciones. Es importante entender que la sobrecarga por sí misma no estrecha los tipos: las firmas de las sobrecargas describen cómo se puede llamar a la función desde fuera, pero dentro de la implementación los parámetros siguen siendo amplios. Por eso, en el cuerpo de la función se necesitan guardas de tipo:

```typescript
function concat(a: number, b: number): string;
function concat(a: string, b: string): string;

function concat(a: unknown, b: unknown): string {
  if (typeof a === "number" && typeof b === "number") {
    // Aquí a y b están estrechados a number
    return `${a.toFixed()}${b.toFixed()}`;
  }

  return `${a}${b}`;
}
```

El compilador no traslada los tipos de las firmas de las sobrecargas al cuerpo de la función. Incluso si todas las sobrecargas describen los mismos tipos de parámetros, dentro de la implementación obtendremos un tipo amplio y tendremos que estrecharlo por nuestra cuenta.

## Guardas de tipo (Type Guard)

En los ejemplos usamos `typeof` para comprobar los tipos. Es un caso particular de guarda de tipo (**Type Guard**).

También podemos definir nuestras propias guardas de tipo con una función y la palabra clave `is`. Escribamos una función que compruebe que el valor pasado es un objeto:

```typescript
function isObject(value: unknown): value is object {
  return typeof value === "object" && value !== null;
}
```

Aquí usamos la palabra clave `is` para indicar que el valor pasado es un objeto. Dentro de la función debemos devolver `true` o `false`. En nuestro ejemplo, indicamos el tipo de retorno como `value is object`. Esto significa que afirmamos que `value` es un objeto. Esta forma de escribirlo también nos permite estrechar tipos.

```typescript
function isObject(value: unknown): value is object {
  return typeof value === "object" && value !== null;
}

function foo(value: unknown) {
  if (isObject(value)) {
    // (parameter) value: object
  }
}
```

El estrechamiento de tipos es un tema amplio con muchos matices. Aparece a menudo en TypeScript, por lo que podrás dominarlo con la práctica constante. Puedes conocer más detalles sobre el funcionamiento de este mecanismo en la documentación; el enlace está al final de la lección.
