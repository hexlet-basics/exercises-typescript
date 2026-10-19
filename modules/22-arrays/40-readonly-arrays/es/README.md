En el desarrollo con JavaScript, donde se usan activamente funciones de orden superior como `map`, `filter` y `reduce`, los arrays rara vez se modifican. En su lugar, normalmente se crean otros nuevos.

Técnicamente, JavaScript no puede prohibir la modificación de los arrays existentes, por lo que la responsabilidad de cumplir esta regla recae en los programadores. En esta lección veremos cómo trabajar con arrays de solo lectura.

## Uso de arrays inmutables

En TypeScript, el trabajo con arrays inmutables está integrado en el sistema de tipos. Para garantizar la inmutabilidad, el array se marca con el modificador `readonly`:

```typescript
function process(numbers: readonly number[]) {
  numbers.push(1); // Error!
}
```

En este caso, TypeScript muestra un error: el tipo `readonly number[]` no contiene el método `push`.

El modificador `readonly` prohíbe modificar el array, pero no prohíbe modificar los objetos que están dentro del array:

```typescript
const items: readonly { key: string }[] = [{ key: "value" }];
items[0].key = "another value"; // ok!
```

Hemos cambiado sin problemas el valor de la propiedad `key` en un objeto que está dentro del array.

El modificador `readonly` es azúcar sintáctico. En el caso de un array, `readonly` cambia el tipo `Array` por el tipo `ReadonlyArray`. Al igual que `Array<Type>`, esta notación mejora la legibilidad del código, pero por lo demás no se diferencia de `readonly Type[]`.

El código anterior podría escribirse así:

```typescript
const items: ReadonlyArray<{ key: string }> = [{ key: "value" }];
```
