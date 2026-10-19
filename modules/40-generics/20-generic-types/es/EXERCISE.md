
Implementa la descripción del tipo genérico `MySet`, que es un análogo del conjunto `Set` de JavaScript. Ejemplo de uso de un objeto de este tipo:

```typescript
const s: MySet<number> = ...;
// La adición devuelve la cantidad de elementos
s.add(1); // 1
s.add(10); // 2

s.has(1); // true
s.has(8); // false
```

El tipo incluye dos métodos: `add()` y `has()`. Ambos reciben un único valor del mismo tipo que los elementos del conjunto. `add()` devuelve un número y `has()`, un `boolean`. Los datos deben almacenarse en la propiedad `items`.
