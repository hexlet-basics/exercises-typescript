En TypeScript, hay varias formas de tipar las funciones que se pasan como parámetros. En esta lección aprenderemos a trabajar con ellas.

## Cómo tipar las funciones que se pasan como parámetros

La forma más sencilla de tipar funciones como parámetros es utilizar el tipo `Function`. Este tipo describe una función de JavaScript con todas sus características, incluyendo las propiedades `bind`, `call` y `apply`.

Describamos el parámetro de entrada `callback` de la función `process`:

```typescript
function process(callback: Function) {
  const value = callback();
  // ...
}
```

`Function` desactiva la verificación de tipos para la función llamada. Como resultado, la cantidad y el tipo de los argumentos de entrada no se verifican y el resultado de dicha función será `any`. Esto puede provocar errores lógicos y un comportamiento inesperado:

```typescript
process(Math.round); // ?
```

Este ejemplo funcionará, aunque difícilmente se comportará como esperamos, ya que `Math.round` se llamará sin argumentos y devolverá `NaN`. Por eso, recomendamos evitar el uso de `Function`.

Otra forma de describir las funciones es utilizar una función de flecha con la especificación de los tipos de entrada y salida:

```typescript
function process(callback: () => string) {
  // value tiene el tipo string
  const value = callback();
  // ...
}

process(Math.round);
// Argument of type '(x: number) => number' is not
// assignable to parameter of type '() => string'.
```

La definición del tipo de una función de flecha se parece a la definición de una función normal, pero es importante no confundirlas. Aquí estamos viendo la descripción del tipo, no la definición de la función.

Veamos algunos ejemplos más para reforzar el concepto:

```typescript
function process(callback: () => number);
function process(callback: () => string[]);
function process(callback: () => { firstName: string });
```

Los parámetros se indican con la misma sintaxis que en las funciones de flecha:

```typescript
function process(callback: (n: number) => string) {
  const value = callback(10);
  // ...
}
```

Aquí definimos el tipo de `callback` como una función con el parámetro `n` de tipo `number` y el valor de retorno `string`.

Si la definición de una función se repite con frecuencia, se puede crear un alias para ella:

```typescript
type myFunction = (n: number) => string;

function process(callback: myFunction) {
  const value = callback(10);
  // ...
}
```

Esta forma de escribirlo facilita la lectura del código y permite evitar la duplicación.
