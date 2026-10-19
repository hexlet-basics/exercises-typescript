
Implementa la función `isPlainObject()`, que verifica si el valor pasado es un objeto. Esta función considera que un array no es un objeto:

```typescript
isPlainObject(1); // false
isPlainObject("hexlet"); // false
isPlainObject({}); // true
isPlainObject({ name: "code-basics" }); // true
isPlainObject([1, 8]); // false
```
