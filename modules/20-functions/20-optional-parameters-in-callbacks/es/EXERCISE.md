
Implementa la función `map()`. Debe recibir un array de números y un callback, que se usará para transformar cada número del array en otro número. La función devuelve un array con los nuevos números:

```typescript
map([3, 9], (n) => n - 3);
// [0, 6]

map([8, 9], (n) => n + 8);
// [16, 17]
```

Parámetros de la función:

1. Array de números
2. Función anónima que recibe un número y devuelve un número. Esta función tiene un parámetro opcional: el índice del elemento en el array

```typescript
map([8, 9], (n, index) => index + n);
// [8, 10]
```
