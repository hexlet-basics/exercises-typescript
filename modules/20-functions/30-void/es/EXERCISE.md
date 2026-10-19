
Intenta definir por tu cuenta la función `forEach()` para números:

```typescript
forEach([1, 2, 3], (n) => console.log(n));
// 1
// 2
// 3

const result = [];
forEach([1, 2, 3], (n) => result.push(n));
// [1, 2, 3]
```

Parámetros de la función:

1. Array de números
2. Función anónima que recibe un número y devuelve `void`. Esta función tiene un parámetro opcional: el índice del elemento en el array

```typescript
forEach([8, 9], (n, index) => console.log(index + n));
// 8
// 10
```
