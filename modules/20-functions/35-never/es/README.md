En esta lección conoceremos el tipo `never`.

## Uso del tipo never

El tipo `never` se utiliza cuando una función garantiza que no devuelve nada. Por ejemplo, si dentro de la función hay un bucle infinito:

```typescript
function infiniteLoop(): never {
  while (true) {
    // Alguna lógica
  }
}
```

Indicamos explícitamente que la función `infiniteLoop` no devuelve nada.

El tipo `never` también se utiliza si la función lanza una excepción:

```typescript
function stop(message: string): never {
  throw new Error(message);
}
```

Además, el tipo `never` se utiliza cuando la función finaliza el programa:

```typescript
function exit(code: number = 0): never {
  process.exit(code);
}
```

Un requisito importante para `never` es que la función no termine normalmente. Por ejemplo, en el siguiente ejemplo el compilador mostrará un error:

```typescript
// A function returning 'never' cannot have a reachable end point.
function printSomething(): never {
  console.log("hexlet");
}
```

La función `printSomething()` no devuelve nada explícitamente. Pero como, en principio, termina, JavaScript inserta un retorno implícito de `undefined`.

`never` se infiere automáticamente incluso cuando hay un retorno explícito. Pero el compilador ve que este retorno es imposible:

```typescript
function fail() {
  // Se infiere automáticamente never
  // La función exit definida anteriormente tiene el tipo de retorno never
  return exit(1);
}
```
