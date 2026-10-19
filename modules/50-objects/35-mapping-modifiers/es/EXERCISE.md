Implementa la función `deepFreeze()`, que recibe un objeto, lo hace inmutable a él, a sus campos y a todos los objetos anidados, y devuelve ese mismo objeto. Se asume que los campos del objeto y de los objetos anidados no contienen arrays, solo tipos de datos simples y objetos.

```typescript
const user = deepFreeze({
  name: "John",
  password: "1q2w3e",
  token: "test",
});

user.name = "Alex"; // Error: Cannot assign to 'name' because it is a read-only property.
```

Debes usar el método incorporado de JavaScript [Object.freeze()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze).
