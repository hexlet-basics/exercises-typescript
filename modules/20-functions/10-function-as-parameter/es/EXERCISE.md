
Implementa la función `filter()`, que recibe un array de números y un predicado. Este último se usará para verificar si cada número cumple con ciertos requisitos:

```typescript
const numbers = [1, -5, 2, 3, 4, 133];
filter(numbers, (n) => n > 3); // [4, 133]
filter(numbers, (n) => n % 2 == 0); // [2, 4]
```

Parámetros de la función:

1. Array de números
2. Función anónima que recibe un número y devuelve un valor booleano
