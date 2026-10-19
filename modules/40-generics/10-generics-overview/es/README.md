La tipificación estática protege el código de una gran clase de errores relacionados con el uso incorrecto de los tipos. Pero todo tiene su precio. En algunas situaciones basta con añadir una descripción de tipos; en otras hay que introducir conceptos nuevos y no siempre sencillos, como los genéricos. En esta lección empezaremos a conocerlos.

Imaginemos una función que fusiona dos arrays. En JavaScript, este código se escribe de forma bastante sencilla:

```javascript
const merge = (coll1, coll2) => {
  const result = [];
  result.push(...coll1);
  result.push(...coll2);
  return result;
};

merge([1, 2], [3, 4]); // [1, 2, 3, 4]
merge(["one", "two"], ["three"]); // ['one', 'two', 'three']
```

La ventaja de la tipificación dinámica se nota aquí en que esta función funciona automáticamente con cualquier array, sin importar lo que contenga.

En los lenguajes con tipificación estática, este truco no funciona. Hay que indicar un tipo concreto:

```typescript
function merge(coll1: number[], coll2: number[]): number[] {
  const result = [];
  result.push(...coll1);
  result.push(...coll2);
  return result;
}

merge([1, 2], [3, 4]); // [1, 2, 3, 4]
```

Si necesitas fusionar arrays de cadenas, tendrás que usar la sobrecarga de funciones. Pero dentro surgirá un problema con el tipo de retorno, que será distinto según los parámetros de entrada:

```typescript
function merge(coll1: number[], coll2: number[]): number[];
function merge(coll1: string[], coll2: string[]): string[];
```

En los lenguajes con sobrecarga de funciones real, el problema será que aparecerán muchas funciones con el mismo cuerpo. Es decir, en esencia, se duplica la lógica para todos los tipos de entrada posibles.

Esta situación es tan común y complicada que se creó todo un subsistema dentro del sistema de tipos para resolverla. Se llama genéricos.

Los **genéricos** aplicados a funciones son un mecanismo que permite crear funciones con la misma lógica de procesamiento para distintos tipos de datos. A veces a estas funciones se les llama funciones genéricas.

A continuación, un ejemplo de implementación de la función `merge()` en forma genérica:

```typescript
// o así
// function merge<T>(coll1: T[], coll2: T[]): T[]
function merge<T>(coll1: Array<T>, coll2: Array<T>): Array<T> {
  // ¡El cuerpo de la función no ha cambiado!
  const result = [];
  result.push(...coll1);
  result.push(...coll2);
  return result;
}

// Funciona con arrays de cualquier tipo
// Los arrays deben tener el mismo tipo
merge([1, 2], [3, 4]); // [1, 2, 3, 4]
merge(["one", "two"], ["three"]); // ['one', 'two', 'three']
```

Aquí vemos una sintaxis nueva a la que hay que acostumbrarse. Sin entrar en detalles, la notación `<T>` después del nombre de la función indica que estamos ante un genérico parametrizado por el tipo T. Podríamos haber usado cualquier otra letra mayúscula en lugar de T, por ejemplo, X. Pero lo más habitual es ver esta notación, porque es la práctica aceptada.

Qué se esconde exactamente detrás del tipo no importa desde el punto de vista del código del genérico. Puede ser un objeto, un número, una cadena o un valor booleano. En las llamadas del ejemplo anterior, es un número en la primera llamada y una cadena en la segunda. También podríamos haber hecho una llamada con valores booleanos:

```typescript
merge([true], [false, false]); // [true, false, false]
```

Después, dentro de la función, vemos que la lógica es la misma para todos los tipos y no depende del tipo. Simplemente pasamos los elementos de los arrays a otro array. En este punto, el código ya resulta familiar.

Solo queda entender los parámetros y el valor de retorno.

La notación `Array<T>` describe un array genérico: también es un genérico, pero esta vez de tipo. En lugar de este parámetro puede ir cualquier array, por ejemplo, `number[]` o `boolean[]`. Así, en el código de la función indicamos que esperamos recibir dos arrays del mismo tipo, y que ese mismo tipo es el de salida.

El nombre del parámetro de tipo T tiene aquí un papel importante. Si usáramos otra letra, habría que cambiarla en todas las partes:

```typescript
function merge<X>(coll1: Array<X>, coll2: Array<X>): Array<X>;
```

Así TypeScript entiende que los tipos de los arrays de entrada y del resultado coinciden. Es decir, no se podrá llamar a esta función pasándole a la vez un array de números y uno de cadenas.

```typescript
const result = merge([1, 2], ["wow"]); // Error!
```

Pero los tipos también pueden no coincidir. A continuación, un ejemplo de genérico que devuelve el primer elemento de cualquier array, o `null` si está vacío:

```typescript
function first<T>(coll: Array<T>): T | null {
  return coll[0] ?? null;
}

first([]); // null
first([3, 2]); // 3
first(["code-basics", "hexlet"]); // code-basics
```

Los genéricos son un tema amplio que se desarrolla en las siguientes lecciones. Por ahora solo hemos conocido el concepto general y poco a poco empezamos a usarlo.
