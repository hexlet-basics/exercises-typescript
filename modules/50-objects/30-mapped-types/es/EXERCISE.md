
Implementa la función `sanitize()`, que recibe un objeto y un array de claves. Debe devolver un nuevo objeto, pero ya sin los campos indicados.

```typescript
const user = sanitize(
  {
    name: "John",
    password: "1q2w3e",
    token: "test",
  },
  ["password", "token"],
); // { name: string }

console.log(user); // => { name: 'John' }
```

Ten en cuenta que estos campos tampoco deben estar en el tipo de salida.
