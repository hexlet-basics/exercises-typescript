En esta lección veremos los operadores rest y spread.

## Operador rest

El operador rest permite crear funciones con un número variable de parámetros y agruparlos en un array:

```typescript
function max(...numbers: number[]): number {
  return Math.max(...numbers);
}
```

Este array es un parámetro normal de la función, por lo que se le asigna un tipo de acuerdo con los valores que se esperan dentro de él. Un ejemplo con dos parámetros:

```typescript
function calculate(operation: string, ...numbers: number[]) {
  // Realizamos la operación operation para todos los numbers
}
```

En este sentido, el operador rest en TypeScript no se diferencia en nada del operador rest en JavaScript. Pero con el operador spread hay una particularidad.

## Operador spread

El operador spread en las funciones es como el operador rest al revés. Permite descomponer un array en parámetros individuales:

```typescript
const numbers = [1, 2, 3];
Math.max(...numbers);
```

Si una función recibe cualquier número de argumentos, como en el ejemplo anterior, este código funciona sin problemas. Pero si una función recibe un número determinado de argumentos, TypeScript mostrará un error de compilación:

```typescript
function sum(a: number, b: number): number {
  return a + b;
}

// El tipo inferido number[] es cero o más números,
// no un array de dos números
const args = [1, 2];
sum(...args);
// A spread argument must either have a tuple type
// or be passed to a rest parameter.
```

En el ejemplo anterior, TypeScript no puede saber que el array `args` consta de dos números. Los arrays en JavaScript son mutables, por lo que TypeScript no puede confiar en la cantidad de elementos en un momento concreto. Hay diferentes formas de sortear esta limitación. Pero en esta situación es más sencillo usar Type Assertion, una indicación al compilador de lo que sabemos con certeza sobre el código:

```typescript
const args = [1, 2] as const;
```

Hablaremos más sobre Type Assertion en el módulo sobre tipos. Con él indicamos explícitamente que este array consta de dos valores concretos que no cambiarán.
