En esta lección veremos el tipo `void`. Se indica como tipo de retorno de las funciones que no devuelven nada.

## Uso del tipo void

`void` se infiere automáticamente cuando dentro de la función no hay ninguna instrucción `return` o cuando esta está vacía:

```typescript
function noop() {
  // vacío por dentro
}
```

En JavaScript, estas funciones devuelven `undefined`, pero en TypeScript `void` y `undefined` son cosas diferentes. Se diferencian por la tipificación contextual, y esto ocurre debido a las particularidades del propio JavaScript. El ejemplo más claro es el método `forEach()`.

El método `forEach()` no utiliza los datos devueltos por el callback que se le pasa y que se llama dentro de él. Podría parecer lógico definir el retorno como `undefined`, pero veamos un ejemplo:

```typescript
const numbers = [1, 2, 3];
const result = [];

numbers.forEach((n) => result.push(n));
```

El método `push()` devuelve la nueva longitud del array. Si `forEach()` exigiera que el callback devolviera `undefined`, este código daría un error de compilación. Habría que reescribirlo, por ejemplo, así:

```typescript
// Ahora el callback no devuelve nada,
// por lo tanto, el resultado de la llamada es undefined
numbers.forEach((n) => {
  result.push(n);
});
```

En estos dos ejemplos, los callbacks se diferencian por las llaves. Una función de flecha sin llaves devuelve el valor de su expresión, por eso el callback `(n) => result.push(n)` devuelve la nueva longitud del array. Con llaves, el cuerpo de la función se convierte en un bloque y, sin `return`, devuelve `undefined`.

El tipo `void` ayuda a no tener que escribir este tipo de código. Permite devolver cualquier dato, pero hace que su uso no tenga sentido.

Podemos definir un tipo de función que devuelve `void` y usarlo para tipar una variable:

```typescript
type VoidFunc = () => void;

// El tipo de la función se define mediante el contexto
// de asignarla a una variable con el tipo VoidFunc
const func: VoidFunc = () => true;

const result = func();
```

Aunque `func()` devuelve `true`, la variable `result` tiene el tipo `void`. Esto significa que solo se puede usar para asignarla a otra variable de tipo `void`.

Hay una única situación en la que indicar `void` prohíbe explícitamente el retorno de una función. Es la definición de una función fuera del contexto de uso, cuando su tipo se especifica de forma explícita:

```typescript
function foo(): void {
  return true; // Error!
}

const bar = function (): void {
  return true; // Error!
};
```

En este caso, devolver cualquier valor provocará un error de compilación.

Además, `void` es un operador de JavaScript, por lo que es importante no confundirse con él. Evalúa la expresión que le sigue y devuelve `undefined`:

```typescript
void 10 === undefined; // true
```
