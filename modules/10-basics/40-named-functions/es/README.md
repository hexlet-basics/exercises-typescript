Al definir una variable, normalmente no indicamos su tipo, porque se infiere automáticamente. Con las funciones esto no funciona. En ellas hay que indicar obligatoriamente los tipos de todos los parámetros de entrada.

En esta lección veremos cómo hacer que un parámetro sea opcional, si hay que hacer algo con el valor predeterminado de una variable y cómo se infiere el tipo del valor de retorno.

## Parámetro obligatorio

Definamos una función e indiquemos el tipo del parámetro de entrada:

```typescript
function getGreetingPhrase(name: string) {
  return `Hello, ${name.toUpperCase()}!`;
}
```

Con esta indicación, el parámetro será obligatorio. Si llamamos a la función sin el parámetro, se producirá un error de compilación:

```typescript
// Expected 1 arguments, but got 0.
getGreetingPhrase();
```

## Parámetro opcional

Para que un parámetro sea opcional, hay que agregar el signo `?` después del nombre de la variable:

```typescript
function getGreetingPhrase(name?: string) {
  return `Hello, ${name ? name.toUpperCase() : "Guest"}!`;
}

getGreetingPhrase("Mike"); // Hello, MIKE!
getGreetingPhrase(); // Hello, Guest!
```

En este caso, el tipo de la variable `name` se vuelve compuesto (_Union Type_). En otras palabras, `string | undefined`: una cadena o `undefined`.

Un parámetro opcional puede ser `undefined`, pero no `null`. Para agregar `null`, hay que cambiar la definición así:

```typescript
function getGreetingPhrase(name?: string | null) {
  return `Hello, ${name ? name.toUpperCase() : "Guest"}!`;
}
```

Aquí ampliamos la definición del tipo de la variable `name` a `string | undefined | null`.

## Valor predeterminado

Con un valor predeterminado no hace falta indicar nada más. El valor se define como en JavaScript. La variable se vuelve opcional automáticamente y su tipo se infiere a partir del valor indicado:

```typescript
function getGreetingPhrase(name = "Guest") {
  return `Hello, ${name.toUpperCase()}!`;
}

getGreetingPhrase(); // Hello, GUEST!
```

## Tipo del valor de retorno

En muchos casos, TypeScript infiere por sí mismo el tipo del valor de retorno, pero también se puede indicar explícitamente:

```typescript
function getGreetingPhrase(name: string): string {
  return `Hello, ${name.toUpperCase()}!`;
}
```

El tipo de retorno se puede inferir, pero a veces el [resultado](https://stackoverflow.com/questions/70001511/why-specify-function-return-types) no es el que esperamos. Por eso recomendamos indicar siempre el tipo. Esto facilita la documentación y protege el código de cambios accidentales.

En esta lección aprendimos a hacer que un parámetro sea opcional, a trabajar con el valor predeterminado de una variable y a inferir el tipo del valor de retorno.
