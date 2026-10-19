El uso del tipo `any` en TypeScript desactiva las comprobaciones de tipos, lo cual no es deseable. Además, en el modo más estricto, con `"strict": true` en `tsconfig.json`, el uso de `any` es imposible. Y esto aumenta significativamente la seguridad del código.

Sin embargo, hay situaciones en las que el tipo es desconocido, pero el trabajo con él debe ser seguro desde el punto de vista de los tipos. Para estos casos, TypeScript ofrece un complemento a `any`: el tipo `unknown`, que veremos en esta lección.

## Uso del tipo unknown

La principal diferencia entre `unknown` y `any` está relacionada con la verificación de tipos. El tipo `unknown` prohíbe realizar cualquier operación:

```typescript
const value: unknown = "code-basics";

value.toUpperCase(); // Error!
value.trim(); // Error!
```

Puede parecer extraño que tengamos una cadena delante, pero no podamos realizar operaciones de cadena sobre ella. Hay que acostumbrarse a esto. En los lenguajes con tipado estático, el tipo no se determina por lo que vemos con nuestros propios ojos, sino por cómo se infiere: automáticamente o mediante una especificación explícita.

Una variable de tipo `unknown` se necesita pocas veces: cuando hay que precisar el tipo más adelante. Pero todo cambia cuando necesitamos crear una función que pueda trabajar con cualquier tipo de entrada. En JavaScript, esta práctica es bastante común:

```typescript
// Ejemplo de lodash
_.isError(new Error()); // true
_.isError(Error); // false
_.isError("code-basics"); // false
```

Podemos implementar esta función con `any`, pero entonces desactivaremos la verificación de tipos:

```typescript
function isError(value: any);
```

Es mejor utilizar `unknown`, así TypeScript nos protegerá de posibles errores de tipos:

```typescript
function isError(value: unknown);
```

Luego, dentro del cuerpo de la función, podemos realizar la verificación necesaria para saber con qué estamos trabajando:

```typescript
function isError(value: unknown): boolean {
  return value instanceof Error;
}
```

`instanceof` solo funciona con constructores, por eso en el ejemplo anterior verificamos si el valor es una instancia de la clase `Error`.
